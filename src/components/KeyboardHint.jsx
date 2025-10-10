'use client'

import { useEffect, useState } from 'react'
import { useCommandPalette } from '@/contexts/CommandPaletteContext'

export function KeyboardHint() {
  const [isMac, setIsMac] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const { openCommandPalette } = useCommandPalette()

  useEffect(() => {
    // Detect if user is on Mac or Windows/Linux
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)

    // Detect if user is on mobile device
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth < 768)
      setIsMobile(isMobileDevice)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div
        onClick={openCommandPalette}
        className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-400 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors group"
      >
        <span className="text-sm font-medium">Tap to start</span>
        <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
      </div>
    )
  }

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