import { FormWrapper } from '@/components/form';
import { Button, Card, CardContent, Text } from '@/components/ui';
import { PageHeader } from '@/components/ui/PageHeader';
import { useToast } from '@/components/ui/Toast/useToast';
import { useAuth } from '@/context/AuthProvider/authContext';
import { authApi } from '@/lib/auth-api';
import { getErrorMessage } from '@/lib/api-client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePasswordSchema, ChangePasswordSchema } from './schemas';
import ChangePasswordForm from './components/ChangePasswordForm';

export default function ChangePasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (data: ChangePasswordSchema) => {
    try {
      setIsLoading(true);
      await authApi.changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      toast({
        title: 'Success',
        description: 'Password changed successfully. Please login again.',
        variant: 'default',
      });

      // Logout user after successful password change
      setTimeout(async () => {
        await logout();
        navigate('/login');
      }, 1500);
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
    <div>
      <PageHeader
        title="Change Password"
        description="Update your password to keep your account secure"
      />

      <div className="max-w-2xl">
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-6">
            <FormWrapper
              schema={changePasswordSchema}
              defaultValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              resetOnSubmit={true}
              className="space-y-6"
            >
              <ChangePasswordForm />

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2" />
                      Changing Password...
                    </>
                  ) : (
                    'Change Password'
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
              </div>
            </FormWrapper>

            {/* Security Tips */}
            <div className="mt-6 pt-6 border-t">
              <Text size="sm" weight="semibold" className="mb-2">
                Security Tips:
              </Text>
              <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Use a unique password that you don't use on other sites</li>
                <li>Use a combination of letters, numbers, and symbols</li>
                <li>Avoid common words and personal information</li>
                <li>Consider using a password manager</li>
                <li>Change your password regularly</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

