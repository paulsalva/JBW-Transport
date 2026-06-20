"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#lanes", label: "Service Area" },
  { href: "#about", label: "About" },
  { href: "#careers", label: "Careers" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy py-2.5 text-sm text-white/90">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-wrap items-center justify-between gap-x-5 gap-y-1 max-[920px]:justify-center max-[920px]:text-center">
          <div>Based in Kenosha, Wisconsin</div>
          <div>USDOT 3666214 · MC 1269479</div>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-border-soft/80 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex h-[78px] w-[min(1180px,calc(100%-40px))] items-center justify-between gap-6 max-[640px]:h-[68px]">
          <Link
            href="#home"
            aria-label="JBW Transportation home"
            className="flex items-center gap-3 font-black tracking-tight text-navy"
          >
            <Image
              src="/logo-long.png"
              alt="JBW Transportation Inc. logo"
              width={260}
              height={46}
              priority
              className="h-[46px] w-auto max-[640px]:h-10"
            />
            <span className="sr-only">JBW Transportation Inc.</span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-[26px] text-sm font-bold text-[#34495e] max-[920px]:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-blue">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-navy px-[18px] py-3 text-white shadow-[0_12px_25px_rgba(11,31,51,0.25)] transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Request a Quote
            </a>
            <a
              href="tel:+12625552222"
              className="text-[22px] font-black tracking-tight text-navy transition-colors hover:text-blue"
            >
              (262) 555-2222
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="hidden items-center gap-3 max-[920px]:flex">
            <a
              href="tel:+12625552222"
              aria-label="Call JBW Transportation at (262) 555-2222"
              className="whitespace-nowrap text-sm font-black tracking-tight text-navy max-[400px]:text-[13px]"
            >
              (262) 555-2222
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border-soft text-navy"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <nav
            aria-label="Mobile navigation"
            className="hidden border-t border-border-soft bg-white px-5 py-4 max-[920px]:block"
          >
            <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-bold text-[#34495e] transition-colors hover:bg-ice hover:text-blue"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-navy px-[18px] py-3 text-center text-white shadow-[0_12px_25px_rgba(11,31,51,0.25)] transition-colors hover:bg-navy-deep"
              >
                Request a Quote
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
