"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useParallax } from "./parallax-provider"

const recommendations = [
  {
    name: "Ozan",
    role: "CTO at Goneness",
    quote:
      "Nicolas completely transformed our network infrastructure. The improvements in security and performance have been remarkable, and the documentation provided was exceptional.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Rodriguez",
    role: "IT Director",
    quote:
      "Working with Nicolas on our cloud migration was a game-changer. Their expertise in hybrid environments saved us countless hours and significantly reduced our operational costs.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jennifer Park",
    role: "Security Officer at FinSecure",
    quote:
      "The security audit and implementation Alex performed for our financial systems was thorough and precise. They identified vulnerabilities we had missed for years.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

export function Recommendations() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const { mouseX, mouseY } = useParallax()

  // Create local motion values
  const localMouseX = useMotionValue(0)
  const localMouseY = useMotionValue(0)

  // Update local motion values when context values change
  useEffect(() => {
    if (typeof mouseX === "number") localMouseX.set(mouseX)
    if (typeof mouseY === "number") localMouseY.set(mouseY)
  }, [mouseX, mouseY, localMouseX, localMouseY])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recommendations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % recommendations.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + recommendations.length) % recommendations.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div variants={itemVariants} className="absolute -left-16 top-1/2 -translate-y-1/2">
        <motion.button
          onClick={prev}
          className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-colors"
          aria-label="Previous recommendation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${localMouseY.get() * 3}deg) rotateY(${
            localMouseX.get() * -3
          }deg) translateZ(0px)`,
        }}
        className="overflow-hidden rounded-2xl bg-white/5 p-1 transform-gpu"
      >
        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
            >
              <motion.div
                className="mb-8 text-gradient-to-r from-purple-500 to-pink-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(30px)",
                }}
              >
                <Quote className="h-12 w-12 text-pink-500" />
              </motion.div>
              <motion.blockquote
                className="text-2xl md:text-3xl font-light mb-8 leading-relaxed"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)",
                }}
              >
                "{recommendations[current].quote}"
              </motion.blockquote>
              <motion.div
                className="flex items-center"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(25px)",
                }}
              >
                <img
                  src={recommendations[current].avatar || "/placeholder.svg"}
                  alt={recommendations[current].name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-lg">{recommendations[current].name}</div>
                  <div className="text-neutral-400">{recommendations[current].role}</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="absolute -right-16 top-1/2 -translate-y-1/2">
        <motion.button
          onClick={next}
          className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-colors"
          aria-label="Next recommendation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center mt-8 space-x-2">
        {recommendations.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500" : "w-2 bg-white/20"
            }`}
            aria-label={`Go to recommendation ${index + 1}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
