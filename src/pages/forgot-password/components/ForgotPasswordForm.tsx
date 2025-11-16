import { useTypedFormFields } from '@/components/form';
import { ForgotPasswordSchema } from '../schemas';

export default function ForgotPasswordForm() {
  const { FormInput } = useTypedFormFields<ForgotPasswordSchema>();

  return (
    <div className="space-y-4">
      <FormInput
        name="email"
        label="Email Address"
        placeholder="Enter your registered email"
        type="email"
        autoComplete="email"
      />
    </div>
  );
}

