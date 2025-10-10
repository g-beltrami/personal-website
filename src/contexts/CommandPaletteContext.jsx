'use client'

import { createContext, useContext, useState } from 'react'

const CommandPaletteContext = createContext()

export function CommandPaletteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCommandPalette = () => setIsOpen(true)
  const closeCommandPalette = () => setIsOpen(false)

  return (
    <CommandPaletteContext.Provider
      value={{ isOpen, openCommandPalette, closeCommandPalette }}
    >
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext)
  if (!context) {
    throw new Error('useCommandPalette must be used within CommandPaletteProvider')
  }
  return context
}
