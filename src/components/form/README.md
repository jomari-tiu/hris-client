# FormWrapper Component

A type-safe, Zod-validated form wrapper component built on top of React Hook Form.

## Features

- 🔒 **Type Safety**: Full TypeScript support with Zod schema inference
- ✅ **Validation**: Automatic form validation using Zod schemas
- 🎯 **Developer Experience**: IntelliSense support for form fields
- 🔄 **Loading States**: Built-in loading state management
- 🎨 **Flexible**: Customizable styling and behavior
- ♻️ **Reset Options**: Optional form reset after successful submission

## Basic Usage

```tsx
import { z } from 'zod';
import { FormWrapper, InputField } from '@/components/form';
import { Button } from '@/components/ui';

// Define your schema
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short'),
});

// Component with type safety
const LoginForm = () => {
  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    // data is fully typed!
    console.log(data.email, data.password);
  };

  return (
    <FormWrapper
      schema={loginSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <InputField name="email" label="Email" type="email" />
      <InputField name="password" label="Password" type="password" />
      <Button type="submit">Login</Button>
    </FormWrapper>
  );
};
```

## Props

| Prop            | Type               | Required | Description                        |
| --------------- | ------------------ | -------- | ---------------------------------- |
| `schema`        | `z.ZodType`        | ✅       | Zod schema for validation          |
| `onSubmit`      | `SubmitHandler<T>` | ✅       | Form submission handler            |
| `children`      | `ReactNode`        | ✅       | Form fields and content            |
| `defaultValues` | `Partial<T>`       | ❌       | Default form values                |
| `className`     | `string`           | ❌       | Custom CSS classes                 |
| `isLoading`     | `boolean`          | ❌       | Loading state                      |
| `resetOnSubmit` | `boolean`          | ❌       | Reset form after successful submit |

## Advanced Examples

### Complex Validation

```tsx
const userSchema = z
  .object({
    name: z.string().min(2, 'Name too short'),
    email: z.string().email('Invalid email'),
    age: z.number().min(18, 'Must be 18+'),
    password: z
      .string()
      .min(8, 'At least 8 characters')
      .regex(/[A-Z]/, 'Need uppercase letter'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
```

### With Loading States

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async data => {
  setIsLoading(true);
  try {
    await api.submitForm(data);
  } finally {
    setIsLoading(false);
  }
};

<FormWrapper
  schema={schema}
  onSubmit={handleSubmit}
  isLoading={isLoading}
  resetOnSubmit={true}
>
  {/* form fields */}
</FormWrapper>;
```

### Dynamic Schemas

```tsx
const getSchema = (userType: string) => {
  const base = z.object({
    name: z.string().min(2),
    email: z.string().email(),
  });

  if (userType === 'admin') {
    return base.extend({
      permissions: z.array(z.string()),
    });
  }

  return base;
};

<FormWrapper
  key={userType} // Re-mount when schema changes
  schema={getSchema(userType)}
  onSubmit={handleSubmit}
>
  {/* dynamic fields based on userType */}
</FormWrapper>;
```

## Available Form Fields

- `InputField` - Text, email, password, number inputs
- `SelectField` - Dropdown selection with options
- `CheckboxField` - Boolean checkbox inputs
- `RadioGroupField` - Single selection from multiple options
- `TextareaField` - Multi-line text input

### Field Usage Examples

#### SelectField

```tsx
import { SelectField } from '@/components/form';

const departmentOptions = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'sales', label: 'Sales', disabled: true },
];

<SelectField
  name="department"
  label="Department"
  placeholder="Select a department..."
  options={departmentOptions}
/>;
```

#### CheckboxField

```tsx
import { CheckboxField } from '@/components/form';

<CheckboxField
  name="acceptTerms"
  label="I accept the terms and conditions"
  description="You must accept our terms to continue"
/>;
```

#### RadioGroupField

```tsx
import { RadioGroupField } from '@/components/form';

const employmentOptions = [
  { value: 'fulltime', label: 'Full-time', description: '40+ hours per week' },
  {
    value: 'parttime',
    label: 'Part-time',
    description: 'Less than 40 hours per week',
  },
  { value: 'contract', label: 'Contract', description: 'Project-based work' },
];

<RadioGroupField
  name="employmentType"
  label="Employment Type"
  options={employmentOptions}
  orientation="vertical"
/>;
```

#### TextareaField

```tsx
import { TextareaField } from '@/components/form';

<TextareaField
  name="comments"
  label="Additional Comments"
  placeholder="Enter any additional information..."
  rows={4}
  maxLength={500}
  showCharCount={true}
/>;
```

## TypeScript Benefits & Type Safety

- **Autocomplete**: Field names are suggested based on schema
- **Type Checking**: Compile-time validation of form structure
- **IntelliSense**: Full IDE support for form data
- **Refactoring**: Safe renaming and restructuring

### Type-Safe Form Fields

For maximum type safety, use the `useTypedFormFields` hook within your FormWrapper:

```tsx
import { z } from 'zod';
import { FormWrapper, useTypedFormFields } from '@/components/form';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});

type UserFormData = z.infer<typeof userSchema>;

const UserFormFields = () => {
  // Get type-safe form field components
  const { InputField, SelectField, CheckboxField } =
    useTypedFormFields<UserFormData>();

  return (
    <>
      <InputField
        name="name" // ✅ Type-safe: only accepts 'name' | 'email' | 'age'
        label="Full Name"
      />
      <InputField
        name="email" // ✅ Autocomplete works
        type="email"
        label="Email"
      />
      <InputField
        name="invalidField" // ❌ TypeScript error: not in schema
        label="This will cause a compile error"
      />
    </>
  );
};

const UserForm = () => {
  return (
    <FormWrapper
      schema={userSchema}
      onSubmit={data => console.log(data)} // data is fully typed
    >
      <UserFormFields />
    </FormWrapper>
  );
};
```

### Benefits of Type-Safe Fields

1. **Compile-time Safety**: Invalid field names cause TypeScript errors
2. **Autocomplete**: IDE suggests valid field names as you type
3. **Refactoring**: Renaming schema fields automatically updates all references
4. **Documentation**: Field names serve as living documentation
5. **Reduced Bugs**: Catch field name typos before runtime

## Best Practices

1. **Define schemas outside components** to avoid recreation
2. **Use TypeScript inference** with `z.infer<typeof schema>`
3. **Handle loading states** for better UX
4. **Validate on change** for immediate feedback
5. **Reset forms** after successful submission when appropriate

## Error Handling

The FormWrapper automatically handles:

- Field-level validation errors
- Form submission errors
- Loading state management
- Form reset functionality

Validation errors are automatically displayed by the form field components.

## Toast Notifications

The form system integrates with toast notifications for user feedback:

```tsx
import { useToast } from '@/components/ui';

const MyForm = () => {
  const { success, error } = useToast();

  const handleSubmit = async data => {
    try {
      await saveData(data);
      success('Success!', 'Data saved successfully');
    } catch (err) {
      error('Error', 'Failed to save data');
    }
  };

  // Form JSX...
};
```

### Available Toast Variants

- `success` - Green styling for successful operations
- `error` - Red styling for errors and failures
- `warning` - Yellow styling for warnings
- `info` - Blue styling for informational messages
- `primary` - Primary brand color for important notifications
