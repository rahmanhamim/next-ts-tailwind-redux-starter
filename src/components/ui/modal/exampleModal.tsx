'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import TextInput from '../forms/textInput'
import { Modal } from './_modal'
import Button from '@/components/ui/button'

const ExampleModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <div className='w-[430px] max-w-[98vw] rounded-xl bg-neutral-0 p-8'>
          <p className='text-center text-2xl font-semibold'>Example Modal</p>
          <p className='text-content-500 mb-8 mt-2 text-center text-sm'>
            This is an example modal. You can use it to show any content like
            forms,
          </p>

          <div className='flex flex-col gap-4'>
            <TextInput
              label='Email'
              placeholder='Enter your email'
              type='email'
              required
            />
          </div>

          <p className='text-sm'>
            By clicking the button below, you agree to our{' '}
            <Link href='/privacy-policy' className='text-primary-500 underline'>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              href='/terms-and-conditions'
              className='text-primary-500 underline'
            >
              Terms & Conditions
            </Link>
          </p>
        </div>
      </Modal>
    </>
  )
}

export default ExampleModal
