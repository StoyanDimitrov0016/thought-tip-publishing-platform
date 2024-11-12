import { useState } from "react";

interface UseFormProps<T> {
  initialState: T;
  onSubmitOperation: (formData: T) => void;
}

const useForm = <T,>({ initialState, onSubmitOperation }: UseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitOperation(formData);
  };

  const resetValues = () => {
    setFormData(initialState);
  };

  return { formData, onChangeHandler, onSubmitHandler, resetValues };
};

export default useForm;
