"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { useParallax } from "./parallax-provider"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const validateForm = () => {
    const newErrors = {
      name: formState.name ? "" : "Name is required",
      email: formState.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
          ? ""
          : "Valid email is required"
        : "Email is required",
      message: formState.message ? "" : "Message is required",
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        variants={itemVariants}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${localMouseY.get() * 2}deg) rotateY(${
            localMouseX.get() * -2
          }deg) translateZ(0px)`,
        }}
        className="transform-gpu"
      >
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
        >
          Get In Touch
        </motion.h3>
        <motion.p
          className="text-neutral-600 dark:text-neutral-300 mb-6 md:mb-8"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(15px)",
          }}
        >
          Have a project in mind or need consultation on your network infrastructure? I'm always open to discussing new
          projects, creative ideas or opportunities to be part of your vision.
        </motion.p>

        <div className="space-y-6">
          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
            variants={itemVariants}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-br flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-purple-500 dark:text-pink-300" />
            </div>
            <div>
              <h4 className="font-medium dark:text-white">Email</h4>
              <a
                href="mailto:nicolas.darius.varga@gmail.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-300 dark:hover:to-pink-300 transition-colors"
              >
                nicolas.darius.varga@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
            variants={itemVariants}
          >
            <div className="h-12 w-12 rounded-full flex items-center justify-center mr-4">
              <Phone className="h-5 w-5 text-purple-500 dark:text-pink-300" />
            </div>
            <div>
              <h4 className="font-medium dark:text-white">Phone</h4>
              <a
                href="tel:+32470343740"
                className="text-neutral-600 dark:text-neutral-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-300 dark:hover:to-pink-300 transition-colors"
              >
                +32 470 34 37 40
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
            variants={itemVariants}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-br flex items-center justify-center mr-4">
              <MapPin className="h-5 w-5 text-purple-500 dark:text-pink-300" />
            </div>
            <div>
              <h4 className="font-medium dark:text-white">Location</h4>
              <p className="text-neutral-600 dark:text-neutral-400">België</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${localMouseY.get() * 2}deg) rotateY(${
            localMouseX.get() * 2
          }deg) translateZ(0px)`,
        }}
        className="transform-gpu"
      >
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Name
            </label>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-300 focus:ring-red-500"
                    : "border-neutral-300 dark:border-neutral-700 focus:ring-pink-500"
                } focus:outline-none focus:ring-2 transition-all duration-300 bg-white dark:bg-neutral-800 dark:text-white`}
                placeholder="Your name"
              />
            </motion.div>
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Email
            </label>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-300 focus:ring-red-500"
                    : "border-neutral-300 dark:border-neutral-700 focus:ring-pink-500"
                } focus:outline-none focus:ring-2 transition-all duration-300 bg-white dark:bg-neutral-800 dark:text-white`}
                placeholder="Your email"
              />
            </motion.div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Subject (Optional)
            </label>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:ring-pink-500 focus:outline-none focus:ring-2 transition-all duration-300 bg-white dark:bg-neutral-800 dark:text-white"
                placeholder="Project inquiry"
              />
            </motion.div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Message
            </label>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message
                    ? "border-red-300 focus:ring-red-500"
                    : "border-neutral-300 dark:border-neutral-700 focus:ring-pink-500"
                } focus:outline-none focus:ring-2 transition-all duration-300 bg-white dark:bg-neutral-800 dark:text-white`}
                placeholder="Tell me about your project..."
              />
            </motion.div>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <motion.div
            whileHover={{ scale: 1.03, rotateX: 5 }}
            whileTap={{ scale: 0.98 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
            }}
          >
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3 rounded-lg transition-all duration-300 ${
                isSubmitted
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              } text-white font-medium text-lg flex items-center justify-center`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  Message Sent!
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </span>
              )}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  )
}
