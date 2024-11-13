import { useState } from "react";
import "./register-page.styles.css";
import "../../styles/forms.css";
import useForm from "../../hooks/useForm";
import { IRegisterCredentials } from "../../types/auth/ICredentials";
import RegisterForm from "../../components/forms/register-form/RegisterForm";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialCredentials = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  const { formData, onChangeHandler, onSubmitHandler, resetValues } = useForm<IRegisterCredentials>(
    {
      initialState: initialCredentials,
      onSubmitOperation: async (userCredentials) => {
        try {
          setIsLoading(true);
          await register(userCredentials);
          setError(null);
          navigate("/", { replace: true });
          resetValues();
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      },
    }
  );

  return (
    <div className="register-form-container">
      <RegisterForm
        credentials={formData}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        loading={isLoading}
      />
    </div>
  );
};

export default RegisterPage;
