import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default function Works() {
  return (
    <section className='px-6 md:px-10 lg:px-48'>
        <SectionTitle 
            title={'Some of my '}
            subTitle={'Works'}
        />
        <div className='text-center py-20'>
            <h1 className='text-main-color dark:text-title-color font-regular text-sm md:text-base'>Upcoming projects... To see my projects, you can visit <Link href={'https://github.com/Jhoneric12'} target='blanl' className='underline'>Here</Link></h1>
        </div>
    </section>
  )
}
