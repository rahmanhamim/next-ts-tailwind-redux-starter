import WarningIcon from "@/components/common/icons/warningIcon"
import { cn } from "@/helpers/cn"

const InputError = ({
  errorMessage,
  className,
}: {
  errorMessage?: string
  className?: string
}) => {
  return (
    <p
      className={cn(
        "mt-1 flex items-center gap-1 text-[0.75rem] text-[#D6204E]",
        { hidden: !errorMessage },
        className
      )}
    >
      <WarningIcon size={16} /> <span>{errorMessage}</span>
    </p>
  )
}

export default InputError
