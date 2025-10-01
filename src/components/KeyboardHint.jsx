'use client'

import { useEffect, useState } from 'react'

export function KeyboardHint() {
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    // Detect if user is on Mac or Windows/Linux
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
  }, [])

  return (
    <div className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-400">
      <span className="text-sm">Press</span>
      <div className="flex items-center space-x-1">
        <kbd className="inline-flex h-8 min-w-8 px-2 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-sm font-mono text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {isMac ? '⌘' : 'Ctrl'}
        </kbd>
        <kbd className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-sm font-mono text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          K
        </kbd>
      </div>
      <span className="text-sm">to start</span>
      <span className="text-xl">→</span>
    </div>
  )
}