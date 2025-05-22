import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ParallaxProvider } from "@/components/parallax-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Nicolas Varga | System & Network Engineer",
  description:
    "Professional portfolio of Nicolas Varga, specializing in network infrastructure, cloud solutions, and cybersecurity.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(montserrat.variable, "font-montserrat antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParallaxProvider>{children}</ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
