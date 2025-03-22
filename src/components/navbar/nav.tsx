'use client'

import { useTheme } from 'next-themes'
import { ThemeToggle } from '../theme-toggle'
import { FaUserDoctor } from 'react-icons/fa6'
import SearchInput from './search-input'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'

export default function Navigation() {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? 'bg-gray-900 border-b' : 'bg-white'

  return (
    <div
      className={`relative h-[94px] w-full ${bgColor} flex items-center justify-between overflow-hidden px-6`}
    >
      {/* Header with Title and Icon */}
      <header className='top-8 left-10 flex items-center gap-2'>
        <div>
          <FaUserDoctor className='bg-primary h-10 w-10 rounded-md p-1 text-xl text-white' />
        </div>
        <h1 className='font-poppins text-2xl font-semibold'>
          Med <span className='font-normal'>Manager</span>
        </h1>
      </header>
      <SearchInput />
      <div className='flex items-center gap-3'>
        {/* Icon at the Bottom */}
        <ThemeToggle />
        {/* Add Patient Button */}
        <Button className='h-10'>
          <FaPlus className='text-lg' />
          <span>New Patient</span>
        </Button>
      </div>
    </div>
  )
}
