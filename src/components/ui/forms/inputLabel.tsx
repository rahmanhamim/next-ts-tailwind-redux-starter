import { cn } from '@/helpers/cn'

interface IInputLabelProps {
  label: string
  htmlFor: string
  className?: string
  required?: boolean
}

const InputLabel = ({
  htmlFor,
  label,
  className,
  required,
}: IInputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'mb-2 inline-block font-medium text-neutral-800',
        className
      )}
    >
      {label} {required && <span className='text-[#D6204E]'>*</span>}
    </label>
  )
}

export default InputLabel
