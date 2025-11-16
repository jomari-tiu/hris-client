import { LoginBg } from '@/assets/img';
import { FormWrapper } from '@/components/form';
import { Button, Text } from '@/components/ui';
import { useToast } from '@/components/ui/Toast/useToast';
import { authApi } from '@/lib/auth-api';
import { getErrorMessage } from '@/lib/api-client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema, ForgotPasswordSchema } from './schemas';
import ForgotPasswordForm from './components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: ForgotPasswordSchema) => {
    try {
      setIsLoading(true);
      const response = await authApi.forgotPassword(data);

      setIsSuccess(true);
      toast({
        title: 'Success',
        description: response.message || 'Password reset instructions sent to your email',
        variant: 'default',
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              Forgot Password
            </Text>
            <Text size="sm" className="text-gray-600 mt-1">
              {isSuccess
                ? 'Check your email for reset instructions'
                : 'Enter your email to receive password reset instructions'}
            </Text>
          </div>

          {!isSuccess ? (
            <>
              {/* Forgot Password Form */}
              <FormWrapper
                schema={forgotPasswordSchema}
                defaultValues={{
                  email: '',
                }}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                resetOnSubmit={false}
                className="w-full space-y-4"
              >
                <ForgotPasswordForm />

                <Button
                  type="submit"
                  className="w-full"
                  variant="primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Reset Instructions'
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
                We've sent password reset instructions to your email address.
                Please check your inbox and follow the link to reset your password.
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

