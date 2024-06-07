import React from 'react'
import '../utils/styles.css'

export default function Button({btnText}) {
  return (
    <button 
        className='button font-semibold hover:shadow-sm 
        border-2 text-main-color dark:text-text-color
        border-accent-color text-center text-sm py-4 px-6 lg:px-10 mt-6'>
        {btnText}
    </button>
  )
}
