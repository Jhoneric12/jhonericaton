import React from 'react'
import Link from 'next/link'
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export default function MyName() {
  return (
    <div className='flex flex-col items-center gap-6 text-center px-6 py-4 md:px-10 lg:px-48'>
      <div className='flex gap-4 lg:hidden'>
          <Link href={'https://github.com/Jhoneric12'} target='blank'>
            <LuGithub className='text-main-color dark:text-title-color text-xl hover:text-accent-color dark:hover:text-accent-color transition duration-200'/>
          </Link>
          <Link href={'https://www.facebook.com/jhoneric.aton/'} target='blank'>
            <FaFacebookF className='text-main-color dark:text-title-color text-xl hover:text-accent-color dark:hover:text-accent-color transition duration-200'/>
          </Link>
          <Link href={'https://www.linkedin.com/in/jhon-eric-aton-5535a8245/'} target='blank'>
              <ImLinkedin2 className='text-main-color dark:text-title-color text-xl hover:text-accent-color dark:hover:text-accent-color transition duration-200'/>
          </Link>
      </div>
       <h1 className='text-main-color dark:text-text-color text-[0.5rem] md:text-xs min-w-full'>
            Designed by my baby <Link href={'https://github.com/biancavictorino'} target='blank' className='text-accent-color hover:translate-y-[-5px] font-medium'>
            Bianca Marie</Link> and built using NextJs and Tailwind CSS.
       </h1>
    </div>
  )
}
