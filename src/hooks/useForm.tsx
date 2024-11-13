import { useState } from "react";

interface UseFormProps<T> {
  initialState: T;
  onSubmitOperation: (formData: T) => Promise<void>;
}

const useForm = <T,>({ initialState, onSubmitOperation }: UseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmitOperation(formData);
  };

  const resetValues = () => {
    setFormData(initialState);
  };

  return { formData, onChangeHandler, onSubmitHandler, resetValues };
};

export default useForm;
