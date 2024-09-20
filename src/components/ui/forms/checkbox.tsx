import CheckIcon from "@/components/common/icons/checkIcon"
import { cn } from "@/helpers/cn"
import { forwardRef, InputHTMLAttributes } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  type?: string
  errorMessage?: string
  wrapperClass?: string
}

export const Checkbox = forwardRef<HTMLInputElement, InputFieldProps>(
  function CheckboxInput(
    { label, name, className, wrapperClass, ...props },
    ref
  ) {
    const _type = "checkbox"

    return (
      <div className={cn("flex items-center", wrapperClass)}>
        <input
          ref={ref}
          id={props.id ?? name}
          name={name}
          type={_type}
          value={props.value ?? ""}
          className={cn("peer h-4 w-4 border-2 opacity-0", className)}
          {...props}
        />

        <div className='pointer-events-none relative -ml-4 hidden h-4 w-4 rounded-sm border-2 border-primary-500 bg-primary-500 peer-checked:block'>
          <CheckIcon
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-0'
            size={16}
          />
        </div>
        <div className='-ml-4 h-4 w-4 rounded-sm border-2 border-primary-500 peer-checked:hidden' />

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
