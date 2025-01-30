'use client'
import EyeCloseIcon from '@/components/common/icons/eyeCloseIcon'
import EyeOpenIcon from '@/components/common/icons/eyeOpenIcon'
import WarningIcon from '@/components/common/icons/warningIcon'
import { cn } from '@/helpers/cn'
import React, { forwardRef, useState } from 'react'
type TextFieldParams = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  label?: string
  error?: string
  wrapperClassName?: string
  inputClassName?: string
}

const TextInput = forwardRef<HTMLInputElement, TextFieldParams>(
  function CustomInput(
    {
      label,
      error,
      required,
      wrapperClassName,
      inputClassName,
      type,
      ...inputParams
    },
    ref
  ) {
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible)
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === 'date') {
        e.target.showPicker()
      }
    }

    return (
      <div className={cn(wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputParams.id as string}
            className='mb-2 inline-block font-medium text-neutral-800'
          >
            {label} {required && <span className='text-[#D6204E]'>*</span>}
          </label>
        )}

        <div className='relative'>
          {type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute bottom-0 right-0 top-0 flex items-center px-2'
            >
              {isPasswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </button>
          )}

          <input
            ref={ref}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            {...inputParams}
            className={cn(
              'placeholder:text-content-400 w-full rounded border border-neutral-200 bg-transparent px-4 py-3 leading-none transition duration-200 ease-in-out [appearance:textfield] focus:border-primary-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              {
                'pr-10': type === 'password',
                'border-[#D6204E]': error,
              },
              inputClassName
            )}
            onFocus={handleFocus}
          />
        </div>
        {error && (
          <p className='mt-1 flex items-center gap-1 text-[0.75rem] text-[#D6204E]'>
            <WarningIcon size={16} /> <span>{error}</span>
          </p>
        )}
      </div>
    )
  }
)

export default TextInput
