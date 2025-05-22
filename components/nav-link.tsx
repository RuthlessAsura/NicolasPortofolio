"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  // Check if the link is active based on scroll position
  useEffect(() => {
    const checkIfActive = () => {
      if (typeof window !== "undefined") {
        const targetId = href.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement && linkRef.current) {
          const rect = targetElement.getBoundingClientRect()
          const isInView = rect.top <= 100 && rect.bottom >= 100

          // Use classList instead of state for better performance
          if (isInView) {
            linkRef.current.classList.add("active-nav-link")
          } else {
            linkRef.current.classList.remove("active-nav-link")
          }
        }
      }
    }

    // Throttle scroll event for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkIfActive()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check
    checkIfActive()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [href])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })

      // Update URL without full page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <Link href={href} ref={linkRef} onClick={handleClick} className="nav-link font-montserrat font-bold">
      {children}
    </Link>
  )
}
