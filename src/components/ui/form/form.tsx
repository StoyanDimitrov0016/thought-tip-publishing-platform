import "./form.styles.css";
import { Button, ButtonProps } from "../button/button";

export const Form = ({
  children,
  className = "",
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form className={`form ${className}`} {...props}>
    {children}
  </form>
);

export const Legend = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLLegendElement>) => (
  <legend className={`legend ${className}`} {...props}>
    {children}
  </legend>
);

export const FormGroup = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`form-group ${className}`} {...props}>
    {children}
  </div>
);

export const Label = ({
  children,
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={`label ${className}`} {...props}>
    {children}
  </label>
);

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className="input" {...props} />
);

export const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className="textarea" {...props} />
);

export const Select = ({
  children,
  className = "",
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={`select ${className}`} {...props}>
    {children}
  </select>
);

export const Option = (props: React.OptionHTMLAttributes<HTMLOptionElement>) => (
  <option {...props} />
);

export const SubmitButton = ({ children, className = "", ...props }: ButtonProps) => (
  <Button type="submit" variant="primary" size="sm" className={className} {...props}>
    {children}
  </Button>
);
