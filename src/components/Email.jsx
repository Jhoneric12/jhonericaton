import React from 'react'
import Link from 'next/link'

export default function Email() {
  return (
    <div className='hidden lg:fixed lg:bottom-0 lg:right-16 lg:flex lg:flex-col lg:items-center lg:gap-28 w-0'>
        <div className='rotate-90 hover:translate-y-[-5px] transition duration-200'>
            <Link href={'mailto:jhonericaton@gmail.com'} className='font-medium text-main-color dark:text-title-color
                 hover:text-accent-color dark:hover:text-accent-color
                 text-sm select-none'>jhonericaton@gmail.com
            </Link>
        </div>
        <div className='border-l-2 border-l-main-color dark:border-l-title-color rotate-180 h-24'></div>
    </div>
  )
}
