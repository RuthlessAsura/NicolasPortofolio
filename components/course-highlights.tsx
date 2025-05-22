"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, Palette, Shield, TrendingUp, Users } from "lucide-react"

const highlights = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "AI Fundamentals",
    description: "Understand the core concepts of AI and how they apply to design workflows.",
    color: "bg-amber-500",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Prompt Engineering",
    description: "Learn how to craft effective prompts to get the best results from AI tools.",
    color: "bg-red-500",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Creative Applications",
    description: "Explore practical applications of AI in various design disciplines.",
    color: "bg-purple-500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Ethical Considerations",
    description: "Navigate the ethical implications of using AI in creative work.",
    color: "bg-emerald-500",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Future Trends",
    description: "Stay ahead of the curve with insights into emerging AI technologies.",
    color: "bg-blue-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Hands-on Projects",
    description: "Apply your knowledge through practical, guided projects.",
    color: "bg-orange-500",
  },
]

export function CourseHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={`${item.color} h-12 w-12 rounded-lg flex items-center justify-center text-white mb-4`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-neutral-600">{item.description}</p>

          <motion.div
            className="h-1 bg-gradient-to-r from-red-500 to-amber-500 mt-4 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: hoveredIndex === index ? "100%" : "30%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
