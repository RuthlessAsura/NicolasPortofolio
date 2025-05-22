"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation, useMotionValue } from "framer-motion"
import { Server, Cloud, Shield, Cpu, Network, Code } from "lucide-react"
import { useParallax } from "./parallax-provider"

const skills = [
  {
    icon: <Network className="h-6 w-6" />,
    title: "Network Infrastructure",
    description: "Design and implementation of scalable, secure, and high-performance networks.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Solutions",
    description: "AWS, Azure, and GCP architecture with focus on hybrid cloud environments.",
    color: "bg-gradient-to-br from-purple-600 to-pink-400",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Network security, threat detection, and vulnerability management.",
    color: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Server Administration",
    description: "Linux and Windows server deployment, configuration, and maintenance.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Virtualization",
    description: "VMware, Hyper-V, and container technologies like Docker and Kubernetes.",
    color: "bg-gradient-to-br from-pink-400 to-purple-600",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Automation & Scripting",
    description: "Infrastructure as Code, Python, Bash, and PowerShell for system automation.",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
]

export function TechnicalSkills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {skills.map((item, index) => {
        // Calculate a unique offset for each card based on its position in the grid
        const xOffset = ((index % 3) - 1) * 5 // -5, 0, or 5 depending on column
        const yOffset = (Math.floor(index / 3) - 0.5) * 5 // Varies based on row

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${localMouseY.get() * 2}deg) rotateY(${
                localMouseX.get() * -2 + xOffset
              }deg) translateZ(0px)`,
            }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform-gpu"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className={`${item.color} h-12 w-12 rounded-lg flex items-center justify-center text-white mb-4`}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(20px)",
              }}
            >
              {item.icon}
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-2 dark:text-white"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(15px)",
              }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-neutral-600 dark:text-neutral-300"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              {item.description}
            </motion.p>

            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: hoveredIndex === index ? "100%" : "30%" }}
              transition={{ duration: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(5px)",
              }}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
