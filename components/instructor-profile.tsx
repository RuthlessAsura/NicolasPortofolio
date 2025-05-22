"use client"

import { motion } from "framer-motion"

export function InstructorProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-2xl overflow-hidden">
          <img alt="pfp" src="/public/designer-studio.png" alt="Course instructor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-neutral-600 text-sm">
            "An exceptional instructor who brings complex AI concepts down to earth for designers."
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-medium text-red-500 mb-2">LEAD INSTRUCTOR</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Alex Derrick</h2>
        <div className="flex items-center space-x-4 mb-6">
          <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Designer</div>
          <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm">AI Specialist</div>
          <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Author</div>
        </div>

        <p className="text-lg text-neutral-600 mb-6">
          With over 15 years of experience in design and 5 years specializing in AI-powered design tools, Alex has
          helped hundreds of designers integrate AI into their creative workflows.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Former Lead Designer at Adobe</h4>
              <p className="text-neutral-600">Led AI integration for Creative Cloud products</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Author of "Design in the Age of AI"</h4>
              <p className="text-neutral-600">Bestselling book on AI-powered design methodologies</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Speaker at SXSW, Adobe MAX, and Design Week</h4>
              <p className="text-neutral-600">Regular speaker on the future of design and AI</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-neutral-900 font-medium hover:text-red-500 transition-colors flex items-center">
            LinkedIn
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a href="#" className="text-neutral-900 font-medium hover:text-red-500 transition-colors flex items-center">
            Twitter
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
