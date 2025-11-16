import { LoginBg } from '@/assets/img';
import { FormWrapper } from '@/components/form';
import { Button, Text } from '@/components/ui';
import { useAuth } from '@/context/AuthProvider/authContext';
import { Link } from 'react-router-dom';
import { loginSchema, LoginSchema } from './schemas';
import LoginForm from './components/LoginForm';
import { useState } from 'react';

export default function LoginPage() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: LoginSchema) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      // Navigation handled by PublicRoute after successful login
    } catch (error) {
      // Error already handled in AuthProvider
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <img
        src={LoginBg}
        alt="Login Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl flex flex-col gap-4">
          {/* Header */}
          <div className="text-center">
            <Text size="2xl" weight="bold">
              HRIS Management System
            </Text>
            <Text size="sm" className="text-gray-600 mt-1">
              Login to your account
            </Text>
          </div>

          {/* Login Form */}
          <FormWrapper
            schema={loginSchema}
            defaultValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            resetOnSubmit={false}
            className="w-full space-y-4"
          >
            <LoginForm />

            <Button
              type="submit"
              className="w-full"
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </FormWrapper>

          {/* Footer Links */}
          <div className="text-center space-y-2">
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline block"
            >
              Forgot your password?
            </Link>

            <Text size="sm" className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary hover:underline font-medium"
              >
                Contact HR
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
