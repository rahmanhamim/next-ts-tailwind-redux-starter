'use client'
import { cn } from '@/helpers/cn'
import React from 'react'

const Switch = ({ isChecked }: { isChecked: boolean }) => {
  const switchTextClassNames =
    'absolute top-1 text-xs font-medium leading-tight transition-all duration-300'

  return (
    <div
      className={cn(
        'relative h-[26px] w-[52px] cursor-pointer rounded-3xl border',
        {
          'bg-gray-400': !isChecked,
          'bg-primary-500': isChecked,
        }
      )}
    >
      <span
        className={cn(
          'left-1.5 select-none text-neutral-0',
          switchTextClassNames,
          {
            'opacity-0': !isChecked,
          }
        )}
      >
        ON
      </span>
      <span
        className={cn(
          'text-content-500 right-1 select-none',
          switchTextClassNames,
          {
            'opacity-0': isChecked,
          }
        )}
      >
        OFF
      </span>
      {/* switch button */}
      <span
        className={cn(
          'absolute left-0.5 top-[1.5px] h-5 w-5 rounded-full bg-neutral-0 transition-all',
          {
            'left-[28px]': isChecked,
          }
        )}
      />
    </div>
  )
}

export default Switch
