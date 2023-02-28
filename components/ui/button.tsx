import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`py-2 px-4 rounded-md tracking-wide drop-shadow-xl transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-2xl active:translate-y-0 active:drop-shadow-xl ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
