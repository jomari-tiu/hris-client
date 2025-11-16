import { useTypedFormFields } from '@/components/form';
import { ResetPasswordSchema } from '../schemas';

export default function ResetPasswordForm() {
  const { FormInput } = useTypedFormFields<ResetPasswordSchema>();

  return (
    <div className="space-y-4">
      <FormInput
        name="password"
        label="New Password"
        placeholder="Enter your new password"
        type="password"
        autoComplete="new-password"
      />
      <FormInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your new password"
        type="password"
        autoComplete="new-password"
      />
      <div className="text-xs text-gray-600 space-y-1">
        <p>Password must:</p>
        <ul className="list-disc list-inside pl-2">
          <li>Be at least 8 characters long</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one number</li>
        </ul>
      </div>
    </div>
  );
}

