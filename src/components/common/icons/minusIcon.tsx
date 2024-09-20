import { SVGProps } from "react"

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const MinusIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size
  const height = (size * 24) / 24
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 12C4.5 11.4477 4.94772 11 5.5 11H18.5C19.0523 11 19.5 11.4477 19.5 12C19.5 12.5523 19.0523 13 18.5 13H5.5C4.94772 13 4.5 12.5523 4.5 12Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default MinusIcon
