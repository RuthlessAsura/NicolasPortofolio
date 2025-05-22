"use client"

import type React from "react"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  handleNavClick?: (id: string) => void
}

export function MobileMenu({ isOpen, onClose, children, handleNavClick }: MobileMenuProps) {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const handleNavItemClick = (id: string) => {
    onClose()
    if (handleNavClick) {
      handleNavClick(id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }, 300) // Wait for menu close animation
      }
    }
  }

  // Handle CV download
  const handleDownloadCV = () => {
    onClose()
    alert("CV download would start now. In a production environment, this would download the actual CV file.")
  }

  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`} onClick={onClose} aria-hidden="true" />
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-300">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mb-8">
          {children || (
            <ul className="space-y-6">
              <li>
                <button
                  onClick={() => handleNavItemClick("home")}
                  className="text-lg font-bold text-neutral-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-400 dark:hover:to-pink-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavItemClick("projects")}
                  className="text-lg font-bold text-neutral-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-400 dark:hover:to-pink-300 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavItemClick("skills")}
                  className="text-lg font-bold text-neutral-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-400 dark:hover:to-pink-300 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavItemClick("about")}
                  className="text-lg font-bold text-neutral-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-400 dark:hover:to-pink-300 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavItemClick("contact")}
                  className="text-lg font-bold text-neutral-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-400 dark:hover:to-pink-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          )}
        </nav>

        <div className="space-y-4">
          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>

          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
