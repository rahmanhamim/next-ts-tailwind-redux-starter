import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/cn";

const button = cva("relative transition-all rounded", {
  variants: {
    intent: {
      primary: ["bg-primary-500", "text-neutral-0", "hover:bg-primary-700"],
      secondary: [
        "bg-secondary-500",
        "text-neutral-0",
        "hover:bg-secondary-700",
      ],
      neutral: ["bg-neutral-600", "text-content-900", "hover:bg-neutral-500"],
    },
    size: {
      small: ["text-sm", "py-[0.625em]", "px-[1.5em]", "font-medium"],
      medium: ["text-sm", "py-[1em]", "px-[2em]", "font-medium"],
      large: [
        "text-base",
        "py-[1em]",
        "px-[3.125em]",
        "font-montserrat",
        "font-semibold",
      ],
    },
    modifier: {
      outline: ["bg-transparent", "outline", "outline-1", "-outline-offset-1"],
      ghost: ["bg-transparent", "hover:!bg-transparent"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      modifier: "outline",
      className:
        "!text-primary-500 hover:!text-neutral-0 hover:bg-primary-500 outline-primary-50",
    },
    {
      intent: "secondary",
      modifier: "outline",
      className:
        "!text-secondary-500 hover:text-neutral-0 hover:bg-secondary-500 outline-secondary-20",
    },
    {
      intent: "neutral",
      modifier: "outline",
      className: "!text-content-500 hover:bg-content-50 outline-content-400",
    },
    {
      intent: "primary",
      modifier: "ghost",
      className: "!text-primary-500 hover:text-primary-700",
    },
    {
      intent: "secondary",
      modifier: "ghost",
      className: "!text-secondary-500 hover:text-secondary-700",
    },
    {
      intent: "neutral",
      modifier: "ghost",
      className: "!text-content-500 hover:text-content-700",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  className,
  intent,
  size,
  modifier,
  children,
  loading = false,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      `${button({ intent, size, modifier, className })} ${
        props.disabled
          ? "pointe cursor-not-allowed opacity-50 !shadow-none hover:!shadow-none"
          : ""
      } ${loading ? "!pointer-events-none" : ""}`
    )}
    {...props}
  >
    <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
      {children}
    </span>
    {loading && (
      <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
        <svg
          className="animate-spin"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current"
            d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
          ></path>
        </svg>
        <span className="sr-only">Loading</span>
      </span>
    )}
  </button>
);

export default Button;
