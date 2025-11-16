import { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './authContext';
import { authApi, User } from '@/lib/auth-api';
import { getErrorMessage } from '@/lib/api-client';
import { useToast } from '@/components/ui/Toast/useToast';

const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_USER_KEY = 'auth_user';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem(AUTH_TOKEN_KEY);
        const storedUser = localStorage.getItem(AUTH_USER_KEY);

        if (token && storedUser) {
          // Validate token by fetching current user
          try {
            const currentUser = await authApi.getCurrentUser();
            setUser(currentUser);
            // Update stored user data
            localStorage.setItem(AUTH_USER_KEY, JSON.stringify(currentUser));
          } catch (error) {
            // Token is invalid, clear auth data
            localStorage.removeItem(AUTH_TOKEN_KEY);
            localStorage.removeItem(AUTH_USER_KEY);
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Login function
  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setIsLoading(true);
        const response = await authApi.login({ email, password });

        // Store token and user data
        localStorage.setItem(AUTH_TOKEN_KEY, response.token);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.user));

        setUser(response.user);

        toast({
          title: 'Success',
          description: 'Logged in successfully',
          variant: 'default',
        });
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        toast({
          title: 'Login Failed',
          description: errorMessage,
          variant: 'danger',
        });
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [toast]
  );

  // Logout function
  const logout = useCallback(async () => {
    try {
      setIsLoading(true);
      await authApi.logout();

      // Clear auth data
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      setUser(null);

      toast({
        title: 'Success',
        description: 'Logged out successfully',
        variant: 'default',
      });
    } catch (error) {
      // Clear auth data even if API call fails
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      setUser(null);

      const errorMessage = getErrorMessage(error);
      console.error('Logout error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  // Update user function
  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
