import { cn } from "@/helpers/cn"
import { forwardRef, InputHTMLAttributes } from "react"

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  errorMessage?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioFieldProps>(
  function RadioInput({ label, name, className, ...props }, ref) {
    const _type = "radio"

    return (
      <div className={"flex items-center"}>
        <input
          ref={ref}
          id={props.id ?? name}
          name={name}
          type={_type}
          value={props.value ?? ""}
          className={cn("peer h-4 w-4 border-2 opacity-0", className)}
          {...props}
        />

        {/* Radio checked state */}
        <div className='pointer-events-none relative -ml-4 hidden h-4 w-4 rounded-full border-2 border-primary-500 peer-checked:block'>
          <span className='absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500'></span>
        </div>

        {/* Radio unchecked state */}
        <div className='-ml-4 h-4 w-4 rounded-full border-2 border-primary-500 peer-checked:hidden' />

        {label && (
          <label
            htmlFor={props.id ?? name}
            className='ml-2 cursor-pointer select-none whitespace-nowrap text-primary-500'
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
