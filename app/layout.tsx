import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "JBW Transportation Inc. | Refrigerated Freight Carrier in Kenosha, WI",
  description:
    "JBW Transportation Inc. is a Kenosha, Wisconsin based interstate freight carrier serving refrigerated food, fresh produce, and general freight needs.",
  generator: "v0.app",
  icons: {
    icon: "/Logo-med.png",
    shortcut: "/Logo-med.png",
    apple: "/Logo-med.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b1f33",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
