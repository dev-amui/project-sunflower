'use client';

import StepperCard, { IStep } from '@/customComponents/StepperCard';
import React, { useEffect, useState } from 'react'
import GuardianForm from './partials/GuardianForm';
import ChildForm from './partials/ChildForm';

const FormSteps: IStep[] = [
  {
    title: 'Parent/Guardian Form',
    id: 1,
    content: <GuardianForm />,
    // description: 'Some descriptions',
    leftControlBtnLabel: 'Cancel 1',
    rightControlBtnLabel: 'Submit'
  },
  {
    title: 'Ward Form',
    id: 2,
    content: <ChildForm />,
    // description: 'Some descriptions',
    leftControlBtnLabel: 'Previous 2',
    rightControlBtnLabel: 'Submit'
  },
  {
    title: 'Payment Form',
    id: 3,
    content: <GuardianForm />,
    // description: 'Some descriptions',
    leftControlBtnLabel: 'Cancel',
    rightControlBtnLabel: 'Submit'
  }
]

const page = () => {
  const [currentStep, setcurrentStep] = useState<number>(1)

  const handleRightButtonClick = (val: () => void) => {
    val?.()
  }

  const handleLeftButtonClick = (val: () => void) => {
    val?.()
  }


  return (
    <div className='h-full py-6'>
      <StepperCard steps={FormSteps} leftBtnClicked={handleLeftButtonClick} rightBtnClicked={handleRightButtonClick} classNames={{ cardClass: 'bg-white/40 backdrop-blur-sm' }} getCurrentStep={setcurrentStep}/>
    </div>
  )
}

export default page
