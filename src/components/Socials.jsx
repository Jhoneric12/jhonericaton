import React from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import Link from 'next/link';

export default function Socials() {
  return (
    <div className='lg:fixed bottom-0 left-16 flex flex-col items-center gap-6'>
        <Link href={'https://www.linkedin.com/in/jhon-eric-aton-5535a8245/'} target='blank'>
            <ImLinkedin2 className='text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-5px] dark:hover:text-accent-color transition duration-200'/>
        </Link>
        <Link href={'https://www.facebook.com/jhoneric.aton/'} target='blank'>
            <FaFacebookF className='text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-5px] dark:hover:text-accent-color transition duration-200'/>
        </Link>
        <Link href={'https://github.com/Jhoneric12'} target='blank'>
            <LuGithub className='text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-5px] dark:hover:text-accent-color transition duration-200'/>
        </Link>
        <div className='border-l-2 border-l-main-color dark:border-l-title-color rotate-180 h-24'>
        </div>
    </div>
  )
}
