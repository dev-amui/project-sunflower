'use client'


import { useForm } from 'react-hook-form'
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import * as z from 'zod'

const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required')
})

const page = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema)
  })


  return (
    <div className="registerPage mt-4 ">
      {/* title */}
      <div className="pageHeader space-y-1 text-center">
        <p className="title text-xl font-semibold">Register</p>
        {/* subheader */}
        <p className="pageSubHeader text-gray-400">
          Register an account and start the application process for your ward.
        </p>
      </div>

      <div className="registrationPageContent grid grid-cols-2 gap-10 mt-6">
        <div className="form testr">
          <Form {...form}>
            <form action="" >
              bla bla bla
            </form>
          </Form>
        </div>

        {/* instructions */}
        <div className="instructions testr"></div>

      </div>
    </div>

  )
}

export default page
