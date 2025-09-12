'use client';

import StepperCard, { IStep } from '@/customComponents/StepperCard';
import React from 'react'
import GuardianForm from './partials/GuardianForm';
import ChildForm from './partials/ChildForm';

const FormSteps: IStep[] = [
  {
    title: 'Guardian Form',
    id: 1,
    content: <GuardianForm />,
    description: 'Some descriptions',
    leftControlBtnLabel: 'Cancel',
    rightControlBtnLabel: 'Submit'
  },
   {
    title: 'Ward Form',
    id: 2,
    content: <ChildForm />,
    description: 'Some descriptions',
    leftControlBtnLabel: 'Previous',
    rightControlBtnLabel: 'Submit'
  },
   {
    title: 'Payment Form',
    id: 3,
    content: <GuardianForm />,
    description: 'Some descriptions',
    leftControlBtnLabel: 'Cancel',
    rightControlBtnLabel: 'Submit'
  }
]

const page = () => {
  return (
    <div className='h-full py-4'>
      <StepperCard steps={FormSteps}  leftBtnClicked={() => { }} rightBtnClicked={() => { }} />
    </div>
  )
}

export default page
