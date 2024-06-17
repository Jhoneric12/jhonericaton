import React from 'react'
import SectionTitle from './SectionTitle'

export default function Works() {
  return (
    <section className='px-6 md:px-10 lg:px-48'>
        <SectionTitle 
            title={'Some of my '}
            subTitle={'Works'}
        />
        <div className='text-center py-20'>
            <h1 className='text-main-color dark:text-title-color font-regular'>Upcoming projects... To see my projects, please click the github icon on the left.</h1>
        </div>
    </section>
  )
}
