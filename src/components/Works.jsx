import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { Projects } from '@/data/projects'
import Image from 'next/image'

export default function Works() {
  return (
    <section className='px-6 md:px-10 lg:px-48'>
        <SectionTitle 
            title={'Some of my '}
            subTitle={'Works'}
        />
        <div className='py-20 flex flex-col gap-20'>
          {
            Projects.map((project) => (
              <div className='flex flex-col lg:flex-row gap-2 lg:gap-10' key={project.id}>
                <div className='w-full lg:w-[40%]'>
                  <Image className='mb-4 w-full shadow-md'  src={project.image} alt={project.alt}/>
                </div>
                <div className='w-full lg:w-[60%] flex flex-col gap-2 lg:justify-center'>
                  <h1 className='text-accent-color dark:text-accent-color font-bold lg:text-lg'>{project.projectName}</h1>
                  <p className='text-main-color dark:text-text-color leading-7'>{project.description}</p>
                  <div className='flex gap-4 flex-wrap mt-2'>
                    {
                      project.techStack.map((stack, index) => (
                        <div className='border-accent-color border px-3 py-2 text-xs text-light-main-color hover:cursor-default' key={index}>
                          {stack}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}
