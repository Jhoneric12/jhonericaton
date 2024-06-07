import React from 'react'
import Link from 'next/link'

export default function MyName() {
  return (
    <div className='text-center px-6 py-4 md:px-10 lg:px-48'>
       <h1 className='text-main-color dark:text-text-color text-xs'>
            Designed by my baby <Link href={'https://github.com/biancavictorino'} target='blank' className='text-accent-color hover:translate-y-[-5px] font-medium'>
            Bianca Marie</Link> and built using NextJs and Tailwind CSS.
       </h1>
    </div>
  )
}
