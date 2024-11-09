import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./sign-in-page.styles.css";
import "../../styles/forms.css";
import SignInForm from "../../components/forms/sign-in-form/SignInForm";

export interface ICredentials {
  usernameOrEmail: string;
  password: string;
}

const SignInPage = () => {
  const [credentials, setCredentials] = useState<ICredentials>({
    usernameOrEmail: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!credentials.usernameOrEmail || !credentials.password) {
      alert("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate authentication process
      await fakeAuthService(credentials);
      alert("Sign-in successful!");
      // Redirect or perform further actions upon successful sign-in
    } catch (error) {
      alert("Authentication failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  // Simulated authentication service
  const fakeAuthService = (credentials: ICredentials) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.usernameOrEmail === "user@example.com" &&
          credentials.password === "password123"
        ) {
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  return (
    <div className="login-form-container">
      <SignInForm
        credentials={credentials}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        loading={isLoading}
      />
    </div>
  );
};

export default SignInPage;
