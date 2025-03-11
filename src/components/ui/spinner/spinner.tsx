import "./spinner.styles.css";

export type SpinnerSize = "sm" | "md" | "lg";

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
  return <span className={`spinner ${size} ${className}`} />;
};
