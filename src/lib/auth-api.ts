import { apiClient } from '@/lib/api-client';

// Auth API Types
export interface User {
  id: string;
  email: string;
  role: 'employee' | 'hr' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role?: 'employee' | 'hr' | 'admin';
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface ForgotPasswordResponse {
  token: string;
  message: string;
}

// Auth API Service
export const authApi = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      '/api/auth/login',
      credentials
    );
    return response.data;
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterRequest): Promise<User> => {
    const response = await apiClient.post<User>('/api/auth/register', data);
    return response.data;
  },

  /**
   * Logout current user
   */
  logout: async (): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(
      '/api/auth/logout'
    );
    return response.data;
  },

  /**
   * Change password for current user
   */
  changePassword: async (data: ChangePasswordRequest): Promise<User> => {
    const response = await apiClient.post<User>(
      '/api/auth/change-password',
      data
    );
    return response.data;
  },

  /**
   * Request password reset token
   */
  forgotPassword: async (
    data: ForgotPasswordRequest
  ): Promise<ForgotPasswordResponse> => {
    const response = await apiClient.post<ForgotPasswordResponse>(
      '/api/auth/forgot-password',
      data
    );
    return response.data;
  },

  /**
   * Reset password with token
   */
  resetPassword: async (data: ResetPasswordRequest): Promise<User> => {
    const response = await apiClient.post<User>(
      '/api/auth/reset-password',
      data
    );
    return response.data;
  },

  /**
   * Get current user profile
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>('/api/auth/me');
    return response.data;
  },
};

