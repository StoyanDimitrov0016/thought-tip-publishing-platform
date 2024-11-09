import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { ICredentials } from "../../../pages/sign-in-page/SignInPage";

interface SignInFormProps {
  credentials: ICredentials;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({ credentials, onChange, onSubmit, loading }) => (
  <div>
    <form onSubmit={onSubmit} aria-label="Sign in form">
      <fieldset>
        <legend>Sign In</legend>
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </fieldset>
    </form>
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up here</Link>.
    </p>
  </div>
);

export default SignInForm;
