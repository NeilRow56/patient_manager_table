import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className='poppins flex h-screen w-full flex-col'>
      <div className='flex w-full justify-end p-3'>
        <ThemeToggle />
      </div>
    </div>
  )
}
