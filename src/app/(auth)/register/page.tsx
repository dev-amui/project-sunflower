'use client'


import { useForm } from 'react-hook-form'
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import * as z from 'zod'
import { InputFormField, OTPFormField, PhoneNumberFormField } from '@/customComponents/FormFields'
import ButtonLoading from '@/customComponents/Button'
import CustomCarousel from '@/customComponents/CustomCarousel'
import RegistrationCarousels from './partials/RegistrationCarousels'
import Link from 'next/link'
import { OtpResendTimer } from '@/customComponents/OTPResetTimer'

const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string()
})

const otpSchema = z.object({
  otp: z.string().min(4, 'Must be atleast 4 digits')
})

const page = () => {
  const [currentView, setcurrentView] = useState<'OTP' | 'FORM'>('FORM')

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema)
  })

  const otpForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema)
  })

  const submitRegisterAccount = (data: any) => {
    console.log('data', data)
    setcurrentView('OTP')
  }

  const handleResendOTP = () => {
    console.log('resend OTP')
  }

  return (
    <div className="registerPage mt-4 p-4 shado border rounded-lg mb-8">
      {/* title */}
      <div className="pageHeader space-y-1 text-center">
        <p className="title text-xl font-semibold">Register</p>
        {/* subheader */}
        <p className="pageSubHeader text-gray-400">
          Register an account and start the application process for your ward.
        </p>
      </div>

      <div className="registrationPageContent grid grid-cols-2 gap-6 mt-6">
        <div className="form">
          {/* form content */}
          {currentView == 'FORM' && <div className="formContent">
            <Form {...form}>
              <form action="" className='form space-y-3 mb-4' onSubmit={form.handleSubmit(submitRegisterAccount)}>
                <InputFormField name='firstName' form={form} label='First Name' />
                <InputFormField name='lastName' form={form} label='Last Name' />
                <PhoneNumberFormField name='phoneNumber' form={form} label='Phone Number' />
                <ButtonLoading title='Create Account' className='w-full' />
              </form>

              <div className="login text-sm text-right">
                <span className='text-gray-400'>Already registered? Click here to</span> <Link className='text-primary' href={'/login'}>Sign in</Link>
              </div>
            </Form>
          </div>}

          {/* otp content */}
          {currentView == 'OTP' && <div className="OtpContent">
            <Form {...otpForm}>
              <div className="title mb-4">An OTP was sent to your contact, submit it to activate your account.</div>
              <form action="" className='form space-y-3 mb-4'>
                <OTPFormField form={otpForm} name='otp' maxLength={4} label='OTP' />

                <ButtonLoading title='Submit OTP' className='w-full' />
              </form>

              {/* resend otp */}
              <div className="login text-sm text-right mt-4 w-full flex justify-end items-center h-[35px]">
                <OtpResendTimer duration={2} onResend={handleResendOTP} />
              </div>
            </Form>
          </div>}
        </div>

        {/* instructions */}
        <div className="instructions bg-gray-50 w-full">
          <RegistrationCarousels />
        </div>

      </div>
    </div>

  )
}

export default page
