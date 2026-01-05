import MultiStepForm from 'components/multi-step-form/MultiStepForm'
import PageHeader from 'components/reusable ui/PageHeader'
import React from 'react'

function RegisterUser() {
  return (
    <section className='p-4'>
        <div className='mb-8'>
            <PageHeader />
        </div>
        <MultiStepForm />
    </section>
  )
}

export default RegisterUser