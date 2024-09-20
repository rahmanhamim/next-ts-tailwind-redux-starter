import { SVGProps } from "react"

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const CheckIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size
  const height = (size * 24) / 24
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <g id='Interface / Check'>
          <path
            id='Vector'
            d='M6 12L10.2426 16.2426L18.727 7.75732'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default CheckIcon
