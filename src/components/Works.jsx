import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { Projects } from '@/data/projects'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

export default function Works() {
  return (
    <section id='works' className='px-6 md:px-10 lg:px-48'>
        <SectionTitle 
            title={'Some of my '}
            subTitle={'Works'}
        />
        <div className='py-20 flex flex-col gap-20'>
          {
            Projects.map((project) => (
              <div className='flex flex-col items-center justify-center lg:flex-row gap-2 lg:gap-10' key={project.id}>
                <Link href={project.deploymentLink} target='blank' className='w-full lg:w-[40%] lg:h-[17rem] overflow-hidden rounded-lg '>
                  <Image className='mb-4 w-full h-full shadow-md hover:scale-125 duration-700 z-10'  src={project.image} alt={project.alt}/>
                </Link>
                <div className='w-full lg:w-[60%] flex flex-col gap-2 lg:justify-center'>
                  <h1 className='text-accent-color dark:text-accent-color font-bold lg:text-lg'>{project.projectName}</h1>
                  <p className='text-main-color dark:text-text-color leading-7'>{project.description}</p>
                  <div className='flex gap-4 flex-wrap mt-2'>
                    {
                      project.techStack.map((stack, index) => (
                        <div className='border-accent-color border px-3 py-2 text-xs text-main-color dark:text-light-main-color hover:cursor-default' key={index}>
                          {stack}
                        </div>
                      ))
                    }
                  </div>
                  <div className='mt-4 flex gap-2'>
                    <Link href={project.githubLink} target='blank'>
                      <LuGithub className='text-xl text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color duration-300'/>
                    </Link>
                    <Link href={project.deploymentLink} target='blank'>
                      <FiExternalLink className='text-main-color text-xl dark:text-light-main-color font-light hover:text-accent-color dark:hover:text-accent-color duration-300' />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}
