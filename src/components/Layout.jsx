'use client'

import { useEffect } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CommandPalette } from '@/components/CommandPalette'
import { CommandPaletteProvider, useCommandPalette } from '@/contexts/CommandPaletteContext'

function LayoutContent({ children }) {
  const { isOpen, openCommandPalette, closeCommandPalette } = useCommandPalette()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        openCommandPalette()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openCommandPalette])

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>

      <CommandPalette
        isOpen={isOpen}
        onClose={closeCommandPalette}
      />
    </>
  )
}

export function Layout({ children }) {
  return (
    <CommandPaletteProvider>
      <LayoutContent>{children}</LayoutContent>
    </CommandPaletteProvider>
  )
}
