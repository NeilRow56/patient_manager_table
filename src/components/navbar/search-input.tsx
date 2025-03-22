'use client'

import { FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { useRef } from 'react'
import { useSearchQueryStore } from '@/hooks/use-search-query-store'
import { Input } from '../ui/input'

export default function SearchInput() {
  const { setQuery, query } = useSearchQueryStore()
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(query)
  return (
    <div className='relative flex h-11 items-center gap-4 rounded-lg border p-1 py-[4px]'>
      {/* Search input */}
      <Input
        ref={inputRef}
        value={query}
        name='search'
        onChange={e => setQuery(e.target.value)}
        type='text'
        placeholder='Search by first or last name...'
        className='h-10 w-80 border-none text-slate-800 placeholder-slate-100 shadow-none dark:text-slate-200'
      />
      {/* If the query is filled after getting rid from the white space */}
      {/* show the close icon, and when it is clicked, update the query state */}
      {/* By setting it as empty, then set the focus back to the input */}
      {query.trim().length > 0 ? (
        <IoCloseOutline
          onClick={() => {
            setQuery('')
            inputRef.current?.focus()
          }}
        />
      ) : (
        <FaSearch className='absolute top-[13px] right-5 text-slate-400' />
      )}
    </div>
  )
}
