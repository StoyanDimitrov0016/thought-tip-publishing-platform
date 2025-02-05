import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import useForm from "../hooks/useForm";
import { PATHS, REDIRECT_PATHS } from "../config/paths";
import { LoginData } from "../types/entities/form";

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginHandler, isLoading, error } = useAuthContext();

  const { values, changeHandler, submitHandler } = useForm<LoginData>({
    initialValues: { email: "", password: "" },
    onSubmit: async (values: LoginData) => {
      await loginHandler(values);
      if (!error) navigate(REDIRECT_PATHS.AFTER_LOGIN);
    },
  });

  return (
    <div className="site-login-page auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Login to Your Account</h2>
        <form onSubmit={submitHandler} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={changeHandler}
              value={values.email}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={changeHandler}
              value={values.password}
              className="input-field"
            />
          </div>
          {error && (
            <div className="auth-error">
              <span>{error.message}</span>
            </div>
          )}
          <div className="form-footer">
            <button type="submit" className="btn-primary">
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="redirect-container">
          <p>Don't have an account yet?</p>
          <Link to={PATHS.REGISTER} className="redirect-link">
            Click here to register.
          </Link>
        </div>
      </div>
    </div>
  );
}
