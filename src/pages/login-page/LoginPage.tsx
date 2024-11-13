import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login-page.styles.css";
import "../../styles/forms.css";
import useForm from "../../hooks/useForm";
import { ILoginCredentials } from "../../types/auth/ICredentials";
import LoginForm from "../../components/forms/login-form/LoginForm";
import useAuth from "../../hooks/useAuth";

const initialCredentials = {
  usernameOrEmail: "",
  password: "",
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const { formData, onChangeHandler, onSubmitHandler } = useForm<ILoginCredentials>({
    initialState: initialCredentials,
    onSubmitOperation: async (userCredentials) => {
      try {
        setIsLoading(true);
        await login(userCredentials);
        navigate("/", { replace: true });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="login-form-container">
      <LoginForm
        credentials={formData}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        loading={isLoading}
      />
    </div>
  );
};

export default LoginPage;
