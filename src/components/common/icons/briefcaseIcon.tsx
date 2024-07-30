import { SVGProps } from 'react'

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const BriefcaseIcon = ({ size = 24, ...props }: IIconProps) => {
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
        <path
          d='M3.02747 10.022L6.68521 12.9482C7.17251 13.338 7.41617 13.5329 7.68749 13.6715C7.9282 13.7945 8.18443 13.8844 8.44921 13.9387C8.74767 14 9.0597 14 9.68375 14H14.3163C14.9403 14 15.2523 14 15.5508 13.9387C15.8156 13.8844 16.0718 13.7945 16.3125 13.6715C16.5838 13.5329 16.8275 13.338 17.3148 12.9482L20.9725 10.022M3.02747 10.022C3 10.4895 3 11.0642 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 11.0642 21 10.4895 20.9725 10.022M3.02747 10.022C3.06272 9.42205 3.1432 8.99871 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H8M20.9725 10.022C20.9373 9.42205 20.8568 8.99871 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H16M8 7V6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7M8 7H16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  )
}

export default BriefcaseIcon
