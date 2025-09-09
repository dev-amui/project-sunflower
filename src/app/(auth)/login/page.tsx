'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { InputFormField, OTPFormField, PasswordFormField, PhoneNumberFormField } from '@/customComponents/FormFields'
import ButtonLoading from '@/customComponents/Button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const phoneNumberSchema = z.object({
  phoneNumber: z.string().min(1, 'Phone number is required'),
})

const otpSchema = z.object({
  otp: z.string().min(1, 'OTP is required').min(4, 'OTP must be 4 digits'),
})

const page = () => {
  const [currentView, setcurrentView] = useState<'Phone' | 'Otp'>('Phone')


  const phoneNumberForm = useForm<z.infer<typeof phoneNumberSchema>>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      phoneNumber: '',
    }
  })

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    }
  })

  return (
    <div className='flex flex-col justify-center items-center w-[500px] mx-auto h-full'>
      <div className="headerSection text-left  w-full">
        {/* main header */}
        <p className="header ">
          Welcome Back
        </p>

        <p className="description mt-2 text-gray-500">
          Enter your email and password to login
        </p>
      </div>
      {currentView == 'Phone' ? <Form {...phoneNumberForm}>
        <form className='w-full flex flex-col gap-3 mt-10'>
          <div className="inputs">
            <PhoneNumberFormField form={phoneNumberForm} name='phoneNumber' label='Phone Number' />
          </div>

          <ButtonLoading title='Login' />
        </form>
        <div className="login text-sm text-right mt-4 w-full">
          <span className='text-gray-400'>Don't have an account? Click here to</span> <Link className='text-primary' href={'/register'}>Register</Link>
        </div>
      </Form>
        :
        <Form {...phoneNumberForm}>
          <form className='w-full flex flex-col gap-3 mt-10'>
            <div className="inputs">
              <OTPFormField form={otpForm} name='otp' maxLength={4} label='OTP' />
            </div>

            <ButtonLoading title='Submit OTP' />
          </form>
          <div className="login text-sm text-right mt-4 w-full">
            <span className='text-gray-400'>Don't have an account? Click here to</span> <Link className='text-primary' href={'/register'}>Register</Link>
          </div>
        </Form>}


      {/* footer */}
      <div className="footer mt-4">
        <p className="text-sm text-gray-500 ">
          By signing in or creating an account, you agree to our{' '}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>

  )
}

export default page
