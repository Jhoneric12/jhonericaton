import React from 'react'
import '../utils/styles.css'

export default function Button({btnText}) {
  return (
    <button 
        className='button font-semibold hover:shadow-sm 
        border-2 text-main-color dark:text-text-color
        border-accent-color text-center py-4 px-14 lg:px-16 mt-6'>
        {btnText}
    </button>
  )
}
