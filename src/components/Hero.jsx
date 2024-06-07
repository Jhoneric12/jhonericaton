import React from 'react'
import Button from './Button'

export default function Hero() {

  return (
    <section className='h-screen flex items-center px-6 py-4 md:px-10 lg:px-48'>
      <div className='w-full md:w-[80%] lg:w-[70%] flex flex-col items-start gap-4'>
        <h1 className='text-main-color dark:text-title-color font-extrabold text-4xl md:text-6xl lg:text-6xl'>
          Hi! I am <span className='text-accent-color'>Eric</span>
        </h1>
        <h2 className='text-sub-title-color font-medium text-lg md:text-lg lg:text-xl'>Transforming Ideas into Interactive Reality</h2>
        <p className='leading-7 md:leading-7 text-base md:text-base lg:text-base text-main-color dark:text-text-color'>
          <span className='text-accent-color font-medium'>A Student</span>,
          armed with the ability to create engaging websites. Infused with a passion for crafting immersive user experiences
          and engineering seamless digital interactions I'm committed to redefining the way users engage
          with online platforms.
        </p>
        <Button btnText={'Resume'}/>
      </div>
    </section>
  )
}
