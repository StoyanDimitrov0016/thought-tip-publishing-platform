import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { RegisterData } from "../types/entities/form";
import useForm from "../hooks/useForm";
import { PATHS, REDIRECT_PATHS } from "../config/paths";

export default function RegisterPage({}) {
  const navigate = useNavigate();
  const { registerHandler } = useAuthContext();

  const { values, changeHandler, submitHandler, isSubmitting } = useForm<RegisterData>({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repass: "",
    },
    onSubmit: async (values: RegisterData) => {
      try {
        await registerHandler(values);
        navigate(REDIRECT_PATHS.AFTER_LOGIN);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="site-register-page auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Create an Account</h2>
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={changeHandler}
              value={values.username}
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
          <div className="form-group">
            <label htmlFor="repass">Confirm Password</label>
            <input
              type="password"
              name="repass"
              id="repass"
              onChange={changeHandler}
              value={values.repass}
              className="input-field"
            />
          </div>
          <div className="form-footer">
            <button type="submit" className="btn-primary">
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
        <div className="redirect-container">
          <p>Already have an account?</p>
          <Link to={PATHS.LOGIN} className="redirect-link">
            Click here to login.
          </Link>
        </div>
      </div>
    </div>
  );
}
