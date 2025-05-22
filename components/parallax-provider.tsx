"use client"

import { type ReactNode, createContext, useContext, useEffect, useState } from "react"
import { useScroll, useSpring } from "framer-motion"

type ParallaxContextType = {
  mouseX: number
  mouseY: number
  scrollY: number
  scrollYProgress: number
}

const ParallaxContext = createContext<ParallaxContextType>({
  mouseX: 0,
  mouseY: 0,
  scrollY: 0,
  scrollYProgress: 0,
})

export const useParallax = () => useContext(ParallaxContext)

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY, scrollYProgress } = useScroll()
  const springScrollY = useSpring(scrollY)
  const springScrollYProgress = useSpring(scrollYProgress)
  const [scrollYValue, setScrollYValue] = useState(0)
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    const unsubscribeY = springScrollY.onChange(setScrollYValue)
    const unsubscribeYProgress = springScrollYProgress.onChange(setScrollYProgressValue)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      unsubscribeY()
      unsubscribeYProgress()
    }
  }, [springScrollY, springScrollYProgress])

  return (
    <ParallaxContext.Provider
      value={{
        mouseX: mousePosition.x,
        mouseY: mousePosition.y,
        scrollY: scrollYValue,
        scrollYProgress: scrollYProgressValue,
      }}
    >
      {children}
    </ParallaxContext.Provider>
  )
}
