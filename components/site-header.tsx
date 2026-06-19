import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#lanes", label: "Service Area" },
  { href: "#careers", label: "Careers" },
]

export function SiteHeader() {
  return (
    <>
      {/* Top bar */}
      <div className="bg-navy py-2.5 text-sm text-white/90">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-wrap items-center justify-between gap-5 max-[920px]:justify-center max-[920px]:text-center">
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
              className="rounded-full bg-green px-[18px] py-3 text-white shadow-[0_12px_25px_rgba(25,169,116,0.25)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
