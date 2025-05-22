"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface ParallaxSectionProps {
  id: string
  className?: string
  children: ReactNode
  title: string
  subtitle: string
  isDark?: boolean
}

export function ParallaxSection({ id, className, children, title, subtitle, isDark = false }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id={id} ref={sectionRef} className={className}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <motion.h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 dark:text-white" variants={itemVariants}>
            {title}
          </motion.h2>
          <motion.p
            className={`text-base md:text-lg ${isDark ? "text-neutral-400" : "text-neutral-600 dark:text-neutral-400"}`}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
