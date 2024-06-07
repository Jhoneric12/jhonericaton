'use client'

import React, { useContext } from 'react'
import { DarkMode } from '@/app/Context/ThemeProvider'

export default function useDarkMode() {
  return useContext(DarkMode)
}
