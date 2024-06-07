import React from 'react'
import SectionTitle from './SectionTitle'
import { Technologies } from '@/data/tech'
import Image from 'next/image'
import Button from './Button'

export default function AboutMe() {
  return (
    <section className='px-6 py-4 md:px-10 lg:px-48'>
        <SectionTitle
            title={'About '}
            subTitle={'Me'}
        />
        <div className='flex flex-col lg:flex-row gap-14 py-20'>
            <div className='flex flex-col items-start gap-4 lg:w-[60%]'>
                <h1 className='text-main-color dark:text-title-color text-3xl lg:text-4xl font-bold mb-4'>Hi there!</h1>
                <p className='text-main-color dark:text-title-color leading-7'>I am <span className='text-accent-color font-medium'>Jhon Eric Aton</span>, a passionate 
                    coder hailing from Antipolo, Rizal. Currently, I'm studyin at the <span className='text-accent-color font-medium'>University of Rizal System</span>, 
                    pursuing a <span className='text-accent-color font-medium'>Bachelor of Science in Information Technology</span>.
                </p>
                <p className='text-main-color dark:text-title-color leading-7'>My coding adventure began in 2021, sparked by a 
                    fascination with crafting websites and exploring the vast world of programming languages. 
                    Since then, my journey has been driven by a desire to not just code, but to create.
                </p>
                <p className='text-main-color dark:text-title-color leading-7'>This portfolio showcases the projects I've poured
                    my heart and skills into, each one a stepping stone on my path to becoming a skilled developer. Dive in and 
                    explore the applications, websites, or innovative solutions I've built – a testament to my dedication and 
                    ever-evolving skillset.
                </p>
                <Button btnText={'Resume'}/>
            </div>
            <div className='lg:w-[40%]'>
                <h1 className='text-main-color dark:text-title-color text-lg font-bold mb-4'><span className='text-accent-color'>Technologies</span> I use</h1>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    {
                        Technologies.map((tech) => (
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <Image src={tech.icon} alt={tech.alt}/>
                                <h2 className='text-main-color dark:text-title-color mt-auto text-xs'>{tech.lang}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
