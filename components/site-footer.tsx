import Image from "next/image"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#lanes", label: "Service Area" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-11 text-white/[0.72]">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="flex flex-wrap items-center justify-between gap-[30px]">
          <div>
            <Image
              src="/Logo-med.png"
              alt="JBW Transportation Inc. logo"
              width={200}
              height={52}
              className="h-[52px] w-auto brightness-0 invert"
            />
            <div className="mt-3">Kenosha, Wisconsin freight carrier</div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-bold">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-[22px] max-w-[930px] border-t border-white/10 pt-[18px] text-[13px] text-white/[0.48]">
          Draft website concept. Company services, equipment, lanes, insurance, safety language, phone number, email,
          and hiring status should be confirmed directly with JBW Transportation Inc. before publication.
        </p>
      </div>
    </footer>
  )
}
