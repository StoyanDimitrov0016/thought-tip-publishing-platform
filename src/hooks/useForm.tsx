import React, { useState } from "react";

type FormValues = Record<string, any>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface UseFormProps<T extends FormValues> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export default function useForm<T extends FormValues>({
  initialValues,
  onSubmit,
  validate,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (event: ChangeEvent) => {
    const { name, value: initialValue, type } = event.target;
    const value = type === "checkbox" ? (event.target as HTMLInputElement).checked : initialValue;

    setValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      const hasValidationErrors = Object.keys(validationErrors).length > 0;

      if (hasValidationErrors) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, changeHandler, submitHandler, errors, isSubmitting, resetForm };
}
