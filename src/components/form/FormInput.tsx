/**
 * User Story: As a user filling out a form, I want to enter text, email, password,
 * or numeric data in clearly labeled input fields, so that I can provide the required
 * information efficiently. The input should show validation errors immediately and
 * have appropriate input types for better mobile experience and validation.
 */

import {
  useFormContext,
  Controller,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { Input, Text } from '../ui';

type InputFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?: string;
};

export const FormInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  type = 'text',
}: InputFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <div className="mb-2">
      {label && (
        <label className="block mb-1 font-medium">
          <Text size="sm" color="accent">
            {label}
          </Text>
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full rounded border p-2 ${
                fieldState.error ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {fieldState.error && (
              <p className="text-sm text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
