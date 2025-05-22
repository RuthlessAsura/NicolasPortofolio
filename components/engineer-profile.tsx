"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Building } from "lucide-react"

// Experience and education data
const experiences = [
  {
    title: "Lead Network Engineer",
    company: "TechSolutions Inc.",
    period: "2020 - Present",
    location: "San Francisco, CA",
    description:
      "Led a team of network engineers to design and implement enterprise-grade network infrastructure for Fortune 500 clients. Specialized in security-focused architecture and cloud integration.",
    skills: ["Network Architecture", "Team Leadership", "Security Implementation"],
  },
  {
    title: "Senior Network Administrator",
    company: "CloudNet Systems",
    period: "2017 - 2020",
    location: "Seattle, WA",
    description:
      "Managed cloud infrastructure and network systems for high-traffic applications. Implemented automated monitoring and scaling solutions that reduced downtime by 35%.",
    skills: ["Cloud Infrastructure", "Network Monitoring", "Automation"],
  },
  {
    title: "System Administrator",
    company: "DataCore Technologies",
    period: "2015 - 2017",
    location: "Austin, TX",
    description:
      "Maintained and optimized server infrastructure and network systems. Implemented virtualization solutions that improved resource utilization by 40%.",
    skills: ["System Administration", "Virtualization", "Troubleshooting"],
  },
]

const education = [
  {
    degree: "Master of Science in Network Security",
    institution: "Stanford University",
    period: "2013 - 2015",
    location: "Stanford, CA",
    description:
      "Specialized in advanced network security protocols and threat detection systems. Thesis on 'Automated Threat Response in Enterprise Networks' received departmental honors.",
    achievements: ["Departmental Honors", "Research Grant Recipient", "Security Conference Speaker"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Texas",
    period: "2009 - 2013",
    location: "Austin, TX",
    description:
      "Focused on network systems and infrastructure design. Completed internships with major tech companies in network operations.",
    achievements: ["Dean's List", "Network Security Club President", "Hackathon Winner"],
  },
  {
    degree: "Professional Certifications",
    institution: "Various",
    period: "2015 - Present",
    location: "Online & In-Person",
    description:
      "Continuously updating skills with industry-recognized certifications in networking, cloud, and security.",
    achievements: ["CCNP", "AWS Solutions Architect", "Azure Administrator", "Certified Ethical Hacker"],
  },
]

export function EngineerProfile() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-2xl overflow-hidden">
          <img
            src="/placeholder.svg?height=800&width=600"
            alt="Nicolas Varga, System and Network Engineer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map((cert) => (
              <svg key={cert} className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            "Certified expert in network design, cloud infrastructure, and cybersecurity solutions."
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <h3 className="text-sm font-medium text-purple-500 mb-2">ABOUT ME</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Nicolas Varga</h2>
        <div className="flex items-center space-x-4 mb-6">
          <div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm dark:text-white">
            Network Engineer
          </div>
          <div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm dark:text-white">
            System Architect
          </div>
          <div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm dark:text-white">
            Security Specialist
          </div>
        </div>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
          With over 8 years of experience in system and network engineering, I specialize in designing, implementing,
          and securing complex network infrastructures for enterprises of all sizes.
        </p>

        {/* Tab navigation */}
        <div className="flex space-x-1 mb-8 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-white dark:bg-neutral-700 text-purple-600 dark:text-purple-300 shadow-sm"
                : "text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-300"
            }`}
          >
            <span className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "bg-white dark:bg-neutral-700 text-purple-600 dark:text-purple-300 shadow-sm"
                : "text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-300"
            }`}
          >
            <span className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </span>
          </button>
        </div>

        {/* Timeline content */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>

          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`absolute left-0 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center z-10 transition-all duration-300 ${
                        hoveredItem === index ? "bg-purple-500 text-white" : "text-purple-500 dark:text-purple-300"
                      }`}
                      animate={
                        hoveredItem === index
                          ? { scale: 1.1, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }
                          : { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }
                      }
                    >
                      <Briefcase className="h-6 w-6" />
                    </motion.div>

                    <div
                      className={`bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md transition-all duration-300 ${
                        hoveredItem === index ? "shadow-xl" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg dark:text-white">{exp.title}</h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center text-neutral-700 dark:text-neutral-300 mb-4">
                        <Building className="h-4 w-4 mr-2 text-purple-500 dark:text-purple-400" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1 text-purple-500 dark:text-purple-400" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`absolute left-0 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center z-10 transition-all duration-300 ${
                        hoveredItem === index ? "bg-purple-500 text-white" : "text-purple-500 dark:text-purple-300"
                      }`}
                      animate={
                        hoveredItem === index
                          ? { scale: 1.1, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }
                          : { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }
                      }
                    >
                      <GraduationCap className="h-6 w-6" />
                    </motion.div>

                    <div
                      className={`bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md transition-all duration-300 ${
                        hoveredItem === index ? "shadow-xl" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg dark:text-white">{edu.degree}</h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </span>
                      </div>

                      <div className="flex items-center text-neutral-700 dark:text-neutral-300 mb-4">
                        <Building className="h-4 w-4 mr-2 text-purple-500 dark:text-purple-400" />
                        <span className="font-medium">{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1 text-purple-500 dark:text-purple-400" />
                        <span>{edu.location}</span>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achieveIndex) => (
                          <span
                            key={achieveIndex}
                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
