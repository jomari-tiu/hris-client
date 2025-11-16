import { LoginBg } from '@/assets/img';
import { FormWrapper } from '@/components/form';
import { Button, Text } from '@/components/ui';
import { useToast } from '@/components/ui/Toast/useToast';
import { authApi } from '@/lib/auth-api';
import { getErrorMessage } from '@/lib/api-client';
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { resetPasswordSchema, ResetPasswordSchema } from './schemas';
import ResetPasswordForm from './components/ResetPasswordForm';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  const token = searchParams.get('token');

  const handleSubmit = async (data: ResetPasswordSchema) => {
    if (!token) {
      showToast({
        title: 'Error',
        description: 'Invalid or missing reset token',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsLoading(true);
      await authApi.resetPassword({
        token,
        password: data.password,
      });

      setIsSuccess(true);
      showToast({
        title: 'Success',
        description: 'Password reset successfully',
        variant: 'default',
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showToast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // If no token, show error
  if (!token) {
    return (
      <div className="w-full h-screen relative">
        <img
          src={LoginBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl flex flex-col gap-4">
            <div className="text-center">
              <Text size="2xl" weight="bold">
                Invalid Reset Link
              </Text>
              <Text size="sm" className="text-gray-600 mt-2">
                This password reset link is invalid or has expired.
              </Text>
              <Link
                to="/forgot-password"
                className="inline-block mt-4 text-primary hover:underline"
              >
                Request a new reset link
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <img
        src={LoginBg}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl flex flex-col gap-4">
          {/* Header */}
          <div className="text-center">
            <Text size="2xl" weight="bold">
              Reset Password
            </Text>
            <Text size="sm" className="text-gray-600 mt-1">
              {isSuccess
                ? 'Password reset successfully'
                : 'Enter your new password'}
            </Text>
          </div>

          {!isSuccess ? (
            <>
              {/* Reset Password Form */}
              <FormWrapper
                schema={resetPasswordSchema}
                defaultValues={{
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                resetOnSubmit={false}
                className="w-full space-y-4"
              >
                <ResetPasswordForm />

                <Button
                  type="submit"
                  className="w-full"
                  variant="primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2" />
                      Resetting Password...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </Button>
              </FormWrapper>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Text className="text-gray-600 mb-4">
                Your password has been reset successfully. Redirecting to login...
              </Text>
            </div>
          )}

          {/* Footer Links */}
          <div className="text-center">
            <Link
              to="/login"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

