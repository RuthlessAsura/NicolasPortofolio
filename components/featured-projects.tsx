"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Shield, Cloud, Server } from "lucide-react"

const projects = [
  {
    title: "Enterprise Network Redesign",
    client: "Global Financial Services",
    description:
      "Complete redesign of a multi-site enterprise network infrastructure with enhanced security and performance.",
    tags: ["Network Design", "Security", "Performance Optimization"],
    icon: <Globe className="h-6 w-6" />,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    title: "Cloud Migration Strategy",
    client: "Healthcare Provider",
    description:
      "Developed and implemented a secure cloud migration strategy for sensitive healthcare data and applications.",
    tags: ["AWS", "Hybrid Cloud", "Compliance"],
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-gradient-to-br from-pink-500 to-purple-500",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    title: "Security Infrastructure Overhaul",
    client: "E-commerce Platform",
    description: "Comprehensive security assessment and implementation of advanced threat protection systems.",
    tags: ["Cybersecurity", "Firewall", "Intrusion Detection"],
    icon: <Shield className="h-6 w-6" />,
    color: "bg-gradient-to-br from-purple-600 to-pink-400",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    title: "Datacenter Virtualization",
    client: "Manufacturing Company",
    description:
      "Virtualization of legacy infrastructure to improve resource utilization and disaster recovery capabilities.",
    tags: ["VMware", "Hyper-V", "Disaster Recovery"],
    icon: <Server className="h-6 w-6" />,
    color: "bg-gradient-to-br from-pink-400 to-purple-600",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

export function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Function to handle project details view
  const handleViewProject = (index: number) => {
    alert(`Viewing details for project: ${projects[index].title}`)
    // In a real implementation, this would navigate to a project detail page
    // or open a modal with more information
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute top-4 left-4">
              <div className={`${project.color} h-10 w-10 rounded-lg flex items-center justify-center text-white`}>
                {project.icon}
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{project.client}</div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm text-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleViewProject(index)}
              className="self-start text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-400 dark:to-pink-300 dark:hover:from-purple-300 dark:hover:to-pink-200 font-medium flex items-center group transition-colors"
            >
              View Project Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
