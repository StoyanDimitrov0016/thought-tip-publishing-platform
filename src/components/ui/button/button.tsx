import "./button.styles.css";
import { ButtonHTMLAttributes } from "react";
import { Spinner } from "../spinner/spinner";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost"
  | "success"
  | "warning"
  | "custom";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const classNameValue = `btn ${variant} ${size} ${isLoading ? "loading" : ""} ${className}`;

  return (
    <button
      className={classNameValue}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner size={size} /> : children}
    </button>
  );
};
