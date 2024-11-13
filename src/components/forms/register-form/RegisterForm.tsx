import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { IRegisterCredentials } from "../../../types/auth/ICredentials";

interface RegisterFormProps {
  credentials: IRegisterCredentials;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  errors?: { field: string; message: string }[];
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  credentials,
  onChangeHandler,
  onSubmitHandler,
  loading,
  errors = [],
}) => {
  const isPasswordValid = credentials.password === credentials.confirmPassword;

  return (
    <div>
      <form onSubmit={onSubmitHandler} aria-label="Register form">
        <fieldset>
          <legend>Register</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              aria-required="true"
              value={credentials.email}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              aria-required="true"
              value={credentials.firstName}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              aria-required="true"
              value={credentials.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              aria-required="true"
              value={credentials.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              aria-required="true"
              value={credentials.password}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="repass">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              aria-required="true"
              value={credentials.confirmPassword}
              onChange={onChangeHandler}
            />
            {!isPasswordValid && <span className="error">Passwords must match</span>}
          </div>
        </fieldset>
        {errors.length > 0 &&
          errors.map((error, index) => (
            <div key={index} className="error">
              {error.message}
            </div>
          ))}
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p>
        Already have an account? <Link to={ROUTES.LOGIN}>Login here</Link>.
      </p>
    </div>
  );
};

export default RegisterForm;
