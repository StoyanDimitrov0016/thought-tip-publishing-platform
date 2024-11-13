import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { ILoginCredentials } from "../../../types/auth/ICredentials";

interface LoginFormProps {
  credentials: ILoginCredentials;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  errors?: { field: string; message: string }[];
}

const LoginForm: React.FC<LoginFormProps> = ({
  credentials,
  onChangeHandler,
  onSubmitHandler,
  loading,
  errors = [],
}) => (
  <div>
    <form onSubmit={onSubmitHandler} aria-label="Login form">
      <fieldset>
        <legend>Login</legend>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            placeholder="Enter your username or email"
            aria-required="true"
            required
            value={credentials.usernameOrEmail}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            aria-required="true"
            required
            value={credentials.password}
            onChange={onChangeHandler}
          />
        </div>
        {errors.length > 0 &&
          errors.map((error, index) => (
            <div key={index} className="error">
              {error.message}
            </div>
          ))}

        <button type="submit" disabled={loading}>
          {loading ? "Logging..." : "Login"}
        </button>
      </fieldset>
    </form>
    <p>
      Don't have an account? <Link to={ROUTES.REGISTER}>Register here</Link>.
    </p>
  </div>
);

export default LoginForm;
