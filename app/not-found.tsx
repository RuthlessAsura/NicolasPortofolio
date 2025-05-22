"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Server, Wifi, Database, AlertTriangle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useRef } from "react"

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 3D network visualization effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const dpr = window.devicePixelRatio || 1
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr

      canvas.style.width = `${parent.clientWidth}px`
      canvas.style.height = `${parent.clientHeight}px`

      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Node class for network visualization
    class Node {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      connected: boolean

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
        this.color = this.connected ? "#8b5cf6" : "#6b7280"
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connected = Math.random() > 0.7
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Randomly change connection status
        if (Math.random() < 0.001) {
          this.connected = !this.connected
          this.color = this.connected ? "#8b5cf6" : "#6b7280"
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.connected ? "#8b5cf6" : "#6b7280"
        ctx.fill()
      }
    }

    // Create nodes
    const nodeCount = 30
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      const size = Math.random() * 3 + 2
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodes.push(new Node(x, y, size))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)"
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-neutral-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300"></div>
            <span className="font-semibold text-lg tracking-tight dark:text-white">Alex Morgan</span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4 relative overflow-hidden">
        {/* Background network visualization */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="max-w-4xl w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-8xl md:text-9xl font-bold text-purple-500 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                404
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Connection Lost
              </motion.h2>
              <motion.p
                className="text-lg text-neutral-600 dark:text-neutral-300 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The page you're looking for couldn't be found. It might have been moved, deleted, or perhaps there was a
                network disruption.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl text-lg shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
                  asChild
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Return Home
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-300 dark:border-neutral-700 hover:border-purple-400 dark:hover:border-purple-500 px-6 py-3 rounded-xl text-lg dark:text-white"
                  asChild
                >
                  <Link href="/#contact">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Contact Support
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                  {/* Server rack visualization */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-2xl"
                    animate={{ rotateY: [0, 5, 0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
                  >
                    {/* Server rack frame */}
                    <div className="absolute inset-2 bg-neutral-300 dark:bg-neutral-700 rounded-lg"></div>
                    <div className="absolute inset-3 bg-neutral-800 dark:bg-neutral-900 rounded-md flex flex-col p-2 gap-2">
                      {/* Server units */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded bg-neutral-700 dark:bg-neutral-800 flex items-center px-2 ${
                            i === 3 || i === 5 ? "animate-pulse-glow" : ""
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              i === 3 || i === 5 ? "bg-red-500" : "bg-green-500"
                            }`}
                          ></div>
                          <div className="flex-1 h-1 bg-neutral-600 dark:bg-neutral-700 rounded-full"></div>
                          <div className="flex space-x-1 ml-2">
                            {Array.from({ length: 3 }).map((_, j) => (
                              <div
                                key={j}
                                className={`w-1 h-3 ${
                                  Math.random() > 0.5 ? "bg-purple-500" : "bg-neutral-600 dark:bg-neutral-700"
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Error indicators */}
                    <motion.div
                      className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white animate-pulse-glow"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      <AlertTriangle className="h-6 w-6" />
                    </motion.div>
                  </motion.div>

                  {/* Disconnected network elements */}
                  <motion.div
                    className="absolute top-1/4 right-0 transform translate-x-1/2"
                    animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  >
                    <Wifi className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 left-0 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  >
                    <Server className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
                  </motion.div>

                  <motion.div
                    className="absolute top-0 left-1/4 transform -translate-y-1/2"
                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  >
                    <Database className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
                  </motion.div>

                  {/* Broken connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M200 200 L300 100"
                      stroke="rgba(139, 92, 246, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                    />
                    <motion.path
                      d="M200 200 L100 100"
                      stroke="rgba(139, 92, 246, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 0.5 }}
                    />
                    <motion.path
                      d="M200 200 L100 300"
                      stroke="rgba(139, 92, 246, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-8">
        <div className="container mx-auto px-4 text-center text-neutral-500">
          <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
