'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import DarkMyLogo from '../assets/logo-dark.png'
import LightMyLogo from '../assets/logo-light.png'
import useDarkMode from '@/Hooks/useDarkMode'
import Link from 'next/link'
import { motion } from 'framer-motion'
import '../utils/styles.css'

export default function Navbar() {

  const {isDark, setIsDark} = useDarkMode()
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    // document.body.classList.add('blur-sm')
    setIsOpen(!isOpen)
  }

  const handleDarkMode = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    let scrollPos = 0;
    const navbar = document.querySelector('.navbar')

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > scrollPos) {
        navbar.classList.add('up');
        navbar.classList.remove('down');
      } else {
        navbar.classList.add('down');
        navbar.classList.remove('up');
      }

        scrollPos = scrollTop;
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

  })

  return (
    <div className='z-30'>
      <motion.div  initial={{ x: '100%' }} animate={{ x: isOpen ? 0 : '100%' }} transition={{ type: 'tween', duration: 0.5 }} className={`${isOpen ? 'fixed h-screen bg-light-main-color dark:bg-main-color top-0 bottom-0 right-0 w-[70%] md:w-[60%] flex justify-center items-center shadow-xl z-40 blur-none' : 'hidden'}`}>
          <div className='flex flex-col gap-10 text-center text-lg text-main-color dark:text-title-color'>
            <Link onClick={handleOpenMenu} href={'#works'}>Works</Link>
            <Link onClick={handleOpenMenu} href={'#about-me'}>About Me</Link>
            <Link onClick={handleOpenMenu} href={'#contact'}>Contact</Link>
          </div>
          <svg onClick={handleOpenMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6 absolute top-6 right-6 text-main-color dark:text-title-color'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
      </motion.div>
      <nav className='navbar flex items-center justify-between px-6 py-4 md:px-10 md:py-6 lg:px-16 lg:py-6 w-full fixed z-30 backdrop-blur-sm'>
        <div className='w-auto h-auto'>
          {
            isDark ? 
            (
              <Link href={'#hero'}>
                <Image
                  src={DarkMyLogo}
                  width={50}
                  height={45}
                  alt='My Logo'
                  className='w-auto h-auto'
                />
              </Link>
            )
            :
            (
              <Link href={'#hero'}>
                <Image
                  src={LightMyLogo}
                  width={50}
                  height={45}
                  alt='My Logo'
                  className='w-auto h-auto'
                />
              </Link>
            )
          }
        </div>
        <div className='flex gap-20'>
          <div className='w-full gap-20 hidden lg:flex lg:items-center text-main-color dark:text-title-color font-medium'>
            <Link className='hover:text-accent-color duration-300' href={'#works'}>Works</Link>
            <Link className='hover:text-accent-color duration-300' href={'#about-me'}>About Me</Link>
            <Link className='hover:text-accent-color duration-300' href={'#contact'}>Contact</Link>
          </div>
          <div className='flex items-center gap-4'>
            {
              isDark ? 
              (
                <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-main-color dark:text-light-main-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              )
              :
              (
                <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-main-color dark:text-light-main-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )
            }
            <svg onClick={handleOpenMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-7 h-7 lg:hidden text-main-color dark:text-light-main-color'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}
