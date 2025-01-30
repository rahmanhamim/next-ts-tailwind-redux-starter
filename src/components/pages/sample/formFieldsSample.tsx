import { Checkbox } from '@/components/ui/forms/checkbox'
import InputError from '@/components/ui/forms/inputError'
import InputLabel from '@/components/ui/forms/inputLabel'
import { Radio } from '@/components/ui/forms/radio'
import TextInput from '@/components/ui/forms/textInput'
import React from 'react'

const radioOptions = [
  {
    id: 1,
    label: 'Full-time',
  },
  {
    id: 2,
    label: 'Part-time',
  },
  {
    id: 3,
    label: 'Freelance',
  },
]

const FormFieldsSample = () => {
  return (
    <div className='my-4 rounded-md border p-4 shadow'>
      <p className='mb-10 flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
        From Fields:
      </p>
      <TextInput
        label='Name'
        placeholder='Enter your name'
        error='Name is required'
        required
      />
      <TextInput label='Email' placeholder='Enter your email' required />

      <div className='mt-4'>
        <InputLabel label='Select an option' htmlFor='options' />
        <div className='flex flex-col flex-wrap gap-x-6 gap-y-3 md:flex-row md:items-center'>
          {radioOptions?.map((options) => (
            <Radio
              // {...register("options")}
              name='options'
              key={options.id}
              id={`options-${options.id}`}
              label={options.label}
              value={options.id}
            />
          ))}
        </div>
        <InputError errorMessage='Please select an option' />
      </div>

      <div className='mt-4'>
        <InputLabel label='Select options' htmlFor='options' />
        <div className='flex flex-col flex-wrap gap-x-6 gap-y-3 md:flex-row md:items-center'>
          {radioOptions?.map((options) => (
            <Checkbox
              // {...register("Checkbox")}
              name='checkbox'
              key={options.id}
              id={`checkbox-${options.id}`}
              label={options.label}
              value={options.id}
            />
          ))}
        </div>
        <InputError errorMessage='Please select an option' />
      </div>
    </div>
  )
}

export default FormFieldsSample
