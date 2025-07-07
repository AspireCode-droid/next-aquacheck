'use client'

import { createContext, useContext, useState } from 'react'

type MobileMenuContextType = {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  toggleMenu: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) throw new Error("useMobileMenu must be used within MobileMenuProvider")
  return context
}
