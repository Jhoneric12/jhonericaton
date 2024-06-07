import React from 'react'
import CurlyBracket from '../assets/curly-brackets.png'
import Image from 'next/image'

export default function SectionTitle({title, subTitle}) {
  return (
    <div className='flex items-center gap-1 font-bold text-lg'>
        <Image 
            src={CurlyBracket}
            width={20}
            height={10}
            className='w-auto h-auto'
        />
        <h1 className='text-main-color dark:text-title-color lg:text-xl'>
            <span>{title}</span>
            <span className='text-accent-color'>{subTitle}</span>
        </h1>
    </div>
  )
}
