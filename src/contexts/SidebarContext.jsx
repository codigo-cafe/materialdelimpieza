import React, { useState, createContext } from 'react'
// create context
// eslint-disable-next-line react-refresh/only-export-components
export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>
  )
}

export default SidebarProvider
