import { useTypedFormFields } from '@/components/form';
import { LoginSchema } from '../schemas';

export default function LoginForm() {
  const { FormInput } = useTypedFormFields<LoginSchema>();
  
  return (
    <div className="space-y-4">
      <FormInput
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        autoComplete="email"
      />
      <FormInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        autoComplete="current-password"
      />
    </div>
  );
}

