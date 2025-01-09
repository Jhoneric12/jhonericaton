import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function Hero() {

  return (
    <section id='hero' className='h-screen flex items-center px-6 py-4 md:px-10 lg:px-48'>
      <div className='w-full md:w-[80%] lg:w-[70%] flex flex-col items-start gap-4'>
        <h1 className='text-main-color dark:text-title-color font-extrabold text-4xl md:text-6xl lg:text-6xl'>
          Hi! I am <span className='text-accent-color'>Eric</span>
        </h1>
        <h2 className='text-sub-title-color font-medium text-base md:text-lg lg:text-xl'>Full-Stack Developer</h2>
        <p className='leading-7 md:leading-7 text-base md:text-base lg:text-base text-main-color dark:text-text-color'>
          Crafting Code, Building Dreams ✨ | Transforming Ideas into Digital Realities 🚀
        </p>
        <Link target='blank' href={'/Eric - CV.pdf'}>
          <Button btnText={'Download CV'}/>
        </Link>
      </div>
    </section>
  )
}
