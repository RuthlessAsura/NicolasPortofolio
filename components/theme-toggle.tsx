"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className="relative flex items-center justify-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-inner"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        className={`p-2 rounded-full ${theme === "light" ? "bg-white text-yellow-500 shadow-md" : "text-neutral-500"}`}
        onClick={() => setTheme("light")}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Light Mode</span>
      </motion.button>

      <motion.button
        className={`p-2 rounded-full ${
          theme === "dark" ? "bg-neutral-700 text-purple-400 shadow-md" : "text-neutral-500"
        }`}
        onClick={() => setTheme("dark")}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Moon className="h-5 w-5" />
        <span className="sr-only">Dark Mode</span>
      </motion.button>
    </motion.div>
  )
}
