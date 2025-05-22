"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import {
  Calendar,
  Briefcase,
  Award,
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Cpu,
  Code,
  Globe,
  Lock,
  Wifi,
  HardDrive,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useParallax } from "./parallax-provider"

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { mouseX, mouseY } = useParallax()
  const [isLoaded, setIsLoaded] = useState(false)

  // Create local motion values for transforms
  const localMouseX = useMotionValue(0)
  const localMouseY = useMotionValue(0)

  // Smoother mouse movement with springs - match v17 settings
  const smoothMouseX = useSpring(localMouseX, { stiffness: 150, damping: 20 })
  const smoothMouseY = useSpring(localMouseY, { stiffness: 150, damping: 20 })

  // For scroll-based parallax
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -150])

  // Transform values for mouse movement
  const textX = useTransform(smoothMouseX, [-1, 1], [-5, 5])
  const textY = useTransform(smoothMouseY, [-1, 1], [-5, 5])

  // Status card parallax
  const statusX = useTransform(smoothMouseX, [-1, 1], [10, -10])
  const statusY = useTransform(smoothMouseY, [-1, 1], [10, -10])

  // Create transform values for each icon (pre-defined to avoid hooks in loops)
  // Using the same intensity as v17 square
  const icon1X = useTransform(smoothMouseX, [-1, 1], [-20, 20])
  const icon1Y = useTransform(smoothMouseY, [-1, 1], [-20, 20])
  const icon2X = useTransform(smoothMouseX, [-1, 1], [-25, 25])
  const icon2Y = useTransform(smoothMouseY, [-1, 1], [-25, 25])
  const icon3X = useTransform(smoothMouseX, [-1, 1], [-18, 18])
  const icon3Y = useTransform(smoothMouseY, [-1, 1], [-18, 18])
  const icon4X = useTransform(smoothMouseX, [-1, 1], [-22, 22])
  const icon4Y = useTransform(smoothMouseY, [-1, 1], [-22, 22])
  const icon5X = useTransform(smoothMouseX, [-1, 1], [-24, 24])
  const icon5Y = useTransform(smoothMouseY, [-1, 1], [-24, 24])
  const icon6X = useTransform(smoothMouseX, [-1, 1], [-19, 19])
  const icon6Y = useTransform(smoothMouseY, [-1, 1], [-19, 19])
  const icon7X = useTransform(smoothMouseX, [-1, 1], [-21, 21])
  const icon7Y = useTransform(smoothMouseY, [-1, 1], [-21, 21])
  const icon8X = useTransform(smoothMouseX, [-1, 1], [-23, 23])
  const icon8Y = useTransform(smoothMouseY, [-1, 1], [-23, 23])
  const icon9X = useTransform(smoothMouseX, [-1, 1], [-17, 17])
  const icon9Y = useTransform(smoothMouseY, [-1, 1], [-17, 17])
  const icon10X = useTransform(smoothMouseX, [-1, 1], [-26, 26])
  const icon10Y = useTransform(smoothMouseY, [-1, 1], [-26, 26])
  const icon11X = useTransform(smoothMouseX, [-1, 1], [-24, 24])
  const icon11Y = useTransform(smoothMouseY, [-1, 1], [-24, 24])
  const icon12X = useTransform(smoothMouseX, [-1, 1], [-20, 20])
  const icon12Y = useTransform(smoothMouseY, [-1, 1], [-20, 20])

  // Update local motion values when context values change
  useEffect(() => {
    if (typeof mouseX === "number") localMouseX.set(mouseX)
    if (typeof mouseY === "number") localMouseY.set(mouseY)
  }, [mouseX, mouseY, localMouseX, localMouseY])

  // Set loaded state after initial animation delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  // Smooth scroll to projects section
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  // Smooth scroll to contact section
  const handleContactMe = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  // Icon grid configuration with initial positions for scattering effect
  const iconGrid = [
    {
      icon: <Server className="h-full w-full" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: 0,
      initialX: -300,
      initialY: -200,
      initialRotateX: 45,
      initialRotateY: -30,
      initialRotateZ: 15,
      motionX: icon1X,
      motionY: icon1Y,
    },
    {
      icon: <Network className="h-full w-full" />,
      color: "bg-gradient-to-br from-purple-600 to-pink-400",
      delay: 0.1,
      initialX: 200,
      initialY: -150,
      initialRotateX: -30,
      initialRotateY: 60,
      initialRotateZ: -10,
      motionX: icon2X,
      motionY: icon2Y,
    },
    {
      icon: <Cloud className="h-full w-full" />,
      color: "bg-gradient-to-br from-pink-500 to-purple-500",
      delay: 0.2,
      initialX: -150,
      initialY: 250,
      initialRotateX: 20,
      initialRotateY: -45,
      initialRotateZ: 5,
      motionX: icon3X,
      motionY: icon3Y,
    },
    {
      icon: <Shield className="h-full w-full" />,
      color: "bg-purple-600",
      delay: 0.3,
      initialX: 300,
      initialY: 180,
      initialRotateX: -15,
      initialRotateY: 30,
      initialRotateZ: -20,
      motionX: icon4X,
      motionY: icon4Y,
    },
    {
      icon: <Database className="h-full w-full" />,
      color: "bg-indigo-600",
      delay: 0.4,
      initialX: -250,
      initialY: -100,
      initialRotateX: 35,
      initialRotateY: -20,
      initialRotateZ: 25,
      motionX: icon5X,
      motionY: icon5Y,
    },
    {
      icon: <Cpu className="h-full w-full" />,
      color: "bg-violet-600",
      delay: 0.5,
      initialX: 180,
      initialY: -220,
      initialRotateX: -25,
      initialRotateY: 40,
      initialRotateZ: -15,
      motionX: icon6X,
      motionY: icon6Y,
    },
    {
      icon: <Code className="h-full w-full" />,
      color: "bg-purple-700",
      delay: 0.6,
      initialX: -220,
      initialY: 150,
      initialRotateX: 30,
      initialRotateY: -35,
      initialRotateZ: 10,
      motionX: icon7X,
      motionY: icon7Y,
    },
    {
      icon: <Globe className="h-full w-full" />,
      color: "bg-indigo-700",
      delay: 0.7,
      initialX: 250,
      initialY: 120,
      initialRotateX: -20,
      initialRotateY: 25,
      initialRotateZ: -5,
      motionX: icon8X,
      motionY: icon8Y,
    },
    {
      icon: <Lock className="h-full w-full" />,
      color: "bg-violet-700",
      delay: 0.8,
      initialX: -180,
      initialY: -170,
      initialRotateX: 40,
      initialRotateY: -15,
      initialRotateZ: 20,
      motionX: icon9X,
      motionY: icon9Y,
    },
    {
      icon: <Wifi className="h-full w-full" />,
      color: "bg-purple-800",
      delay: 0.9,
      initialX: 150,
      initialY: 200,
      initialRotateX: -35,
      initialRotateY: 50,
      initialRotateZ: -25,
      motionX: icon10X,
      motionY: icon10Y,
    },
    {
      icon: <HardDrive className="h-full w-full" />,
      color: "bg-indigo-800",
      delay: 1.0,
      initialX: -120,
      initialY: -250,
      initialRotateX: 25,
      initialRotateY: -40,
      initialRotateZ: 15,
      motionX: icon11X,
      motionY: icon11Y,
    },
    {
      icon: <Briefcase className="h-full w-full" />,
      color: "bg-violet-800",
      delay: 1.1,
      initialX: 270,
      initialY: -130,
      initialRotateX: -30,
      initialRotateY: 20,
      initialRotateZ: -10,
      motionX: icon12X,
      motionY: icon12Y,
    },
  ]

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 perspective-1000 bg-white dark:bg-black"
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="relative z-10"
            style={{
              x: textX,
              y: textY,
            }}
            variants={itemVariants}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-pink-300 rounded-full text-sm font-medium mb-6 animate-pulse-purple"
              variants={itemVariants}
            >
              System & Network Engineer
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1] dark:text-white"
              variants={itemVariants}
            >
              Building
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                Robust Networks
              </span>
            </motion.h1>
            <motion.p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-lg" variants={itemVariants}>
              Specialized in designing, implementing, and maintaining secure and scalable network infrastructure for
              modern enterprises.
            </motion.p>
            <motion.div className="flex flex-col md:flex-row gap-4" variants={itemVariants}>
              <motion.div
                className="perspective-1000"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 rounded-xl text-lg shadow-xl shadow-purple-500/20 hover:shadow-pink-500/30 transition-all duration-300 w-full md:w-auto"
                  onClick={handleViewProjects}
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div
                className="perspective-1000"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button
                  variant="outline"
                  className="border-neutral-300 dark:border-neutral-700 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-6 rounded-xl text-lg w-full md:w-auto dark:text-white"
                  onClick={handleContactMe}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6" variants={itemVariants}>
              <motion.div
                className="flex flex-col"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="text-sm">Experience</span>
                </div>
                <p className="font-medium dark:text-white">8+ Years</p>
              </motion.div>
              <motion.div
                className="flex flex-col"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 mb-1">
                  <Server className="h-4 w-4 mr-2" />
                  <span className="text-sm">Projects</span>
                </div>
                <p className="font-medium dark:text-white">50+ Completed</p>
              </motion.div>
              <motion.div
                className="flex flex-col"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">Availability</span>
                </div>
                <p className="font-medium dark:text-white">Open to Work</p>
              </motion.div>
              <motion.div
                className="flex flex-col"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 mb-1">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm">Certifications</span>
                </div>
                <p className="font-medium dark:text-white">CCNP, AWS, Azure</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative h-[400px] md:h-[600px]" variants={itemVariants}>
            {/* Network & System Engineering Icon Grid with Scattering Effect */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-4 p-4">
              {iconGrid.map((item, index) => {
                // Calculate grid position
                const col = index % 3
                const row = Math.floor(index / 3)

                return (
                  <motion.div
                    key={index}
                    className={`${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg overflow-hidden`}
                    style={{
                      x: item.motionX,
                      y: item.motionY,
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                      gridColumn: col + 1,
                      gridRow: row + 1,
                      zIndex: 10 - index,
                    }}
                    initial={{
                      opacity: 0,
                      x: item.initialX,
                      y: item.initialY,
                      rotateX: item.initialRotateX,
                      rotateY: item.initialRotateY,
                      rotateZ: item.initialRotateZ,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      x: item.motionX,
                      y: item.motionY,
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0,
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      mass: 1,
                      delay: item.delay + 0.3,
                    }}
                    whileHover={{
                      scale: 1.1,
                      zIndex: 20,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="p-4 w-full h-full flex items-center justify-center">{item.icon}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Status card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl z-30"
              initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 1.5,
              }}
              style={{
                transformStyle: "preserve-3d",
                x: statusX,
                y: statusY,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Current Status</div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-lg font-medium dark:text-white">Available for Projects</div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleContactMe}>
                  <Button
                    size="sm"
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
