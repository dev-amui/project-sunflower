'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { InputFormField, SwitchFormField } from '@/customComponents/FormFields'
import AppDivider from '@/customComponents/AppDivider'

const paymentSchema = z.object({
  // if payment was made offline
  paidOffline: z.boolean(),
  receiptNumber: z.string(),
  receiptImage: z.any(),

  // if payment was made online
  paymentType:z.enum(['MOBILE_MONEY','VISA_CARD']),
  email:z.string().email(),
})

const FormPaymentForm = () => {
  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  })


  return (
    <div className='h-full flex flex-col'>
      <div className="pageHeader text-center shrink-0">
        <p className="title text-xl font-semibold">
          Payment Form
        </p>

        <p className='subHeaderText text-gray-400 text-sm'>Continue the process by making payment</p>
      </div>

      <div className="pageContent mt-8 flex-1 grid grid-cols-2 gap-8 py-1">
        {/* form section */}
        <section className="Form hover:shadow rounded-lg bg-white border">
          <Form {...paymentForm}>
            <form action="" className='p-4 px-6 space-y-4' >
              <div className="mt-2">
                <AppDivider text='Parent/Guardian Information' position='center' className='' />
              </div>

              {/* switch */}
              <SwitchFormField form={paymentForm} name='' />

              <div className="guardianInfo grid grid-cols-2 gap-4">
                <InputFormField form={paymentForm} name='firstName' label='First Name' />
              </div>

              <div className="mt-8">
                <AppDivider text='Guardian Occupation' position='center' />
              </div>
              <div className="guardianInfo grid grid-cols-2 gap-4">
                <InputFormField form={paymentForm} name='occupation' label='Occupation' />
                <InputFormField form={paymentForm} name='placeOfWork' label='Place of work' />
              </div>
            </form>
          </Form>
        </section>

        {/* Hero section */}
        <section className="hero rounded-lg overflow-hidden">
          <img src='https://images.pexels.com/photos/5242829/pexels-photo-5242829.jpeg' className='size-full' />
        </section>
      </div>
    </div>
  )
}

export default FormPaymentForm
