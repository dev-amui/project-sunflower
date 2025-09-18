'use client';


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { SwitchFormField, TextAreaFormField } from '@/customComponents/FormFields';
import ButtonLoading from '@/customComponents/Button';
import { InfoIcon } from 'lucide-react';

const applicationFormActionSchema = z.object({})

const ApplicationActionContext = () => {
    const [paid, setpaid] = useState(false)
    const [underReview, setunderReview] = useState(false)

    const applicationFormActionForm = useForm<z.infer<typeof applicationFormActionSchema>>({
        resolver: zodResolver(applicationFormActionSchema),
    })

    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                {/* <ShieldUserIcon className='w-' /> */}
                <p className='font-semibold '>
                    Review Actions
                </p>
            </div>
            <p className="subheader text-sm text-gray-500">
                Add notes and update the application status
            </p>

            <div className="actions mt-8 ">
                <Form {...applicationFormActionForm}>
                    <form action="" className='space-y-2'>
                        {underReview &&
                            <div className='space-y-2'>

                                <TextAreaFormField form={applicationFormActionForm} name='review Note' label='Review Note' />
                                <div className="formsToUpdateRequests bg-gray-50 p-3 space-y-4">
                                    <p className='font-semibold text-sm text-gray-500'>Select part of the form in which an update is required </p>
                                    <SwitchFormField form={applicationFormActionForm} name={'wardDetailUpdateRequest'} label='Request Update to the Ward Details' className='flex gap-4 flex-row-reverse justify-end'/>
                                    <SwitchFormField form={applicationFormActionForm} name={'wardFileUpdateRequest'} label='Request Update to the Ward Files and Documents' className='flex gap-4 flex-row-reverse justify-end'/>
                                    <SwitchFormField form={applicationFormActionForm} name={'guardianDetailUpdateRequest'} label='Request Update to the Guardian Details' className='flex gap-4 flex-row-reverse justify-end'/>
                                </div>
                                <ButtonLoading title={'Request Update'} className='w-full gap-4 bg-blue-500 hover:bg-blue-600' leftIcon={<InfoIcon />} type='button' />
                            </div>

                        }

                        <div className="actionBtns space-y-2 mt-8">
                            {(paid && !underReview) && <ButtonLoading title={'Mark Under Review'} className='w-full gap-4 border-gray-500 text-gray-600' leftIcon={<InfoIcon />} outline type='button' onClick={() => { setunderReview(true) }} />}

                            <div className="approveOrAccept">
                                {(paid && underReview) &&
                                    <ButtonLoading title={'Accept Application'} className='w-full gap-4' leftIcon={<InfoIcon />} type='button' />
                                }
                                {(!paid && !underReview) && <ButtonLoading title={'Confirm Payment'} className='w-full gap-4' leftIcon={<InfoIcon />} onClick={() => setpaid(true)} type='button' />}
                            </div>
                            <ButtonLoading title={'Reject Application'} className='w-full gap-4 bg-red-500 hover:bg-red-600' leftIcon={<InfoIcon />} type='button' />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ApplicationActionContext
