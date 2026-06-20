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
    <footer className="border-t border-border-soft/80 bg-ice py-11 text-navy/70">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="flex flex-wrap items-center justify-between gap-[30px]">
          <div>
            <Image
              src="/logo-full.png"
              alt="JBW Transportation Inc. logo"
              width={200}
              height={120}
              className="h-[96px] w-auto"
            />
            <address className="mt-4 not-italic leading-relaxed">
              <div className="font-bold text-navy">JBW Transportation Inc.</div>
              <div>12400 Wilmot Rd Suite 3</div>
              <div>Kenosha, WI US 53142</div>
              <a href="tel:+12625552222" className="mt-1 inline-block font-bold text-navy transition-colors hover:text-blue">
                (262) 555-2222
              </a>
            </address>
            <div className="mt-3">Freight carrier servicing Southeast Wisconsin and beyond!</div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-bold">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-blue">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p           className="mt-[22px] max-w-[930px] border-t border-border-soft/80 pt-[18px] text-[13px] text-navy/50">
          Draft website concept by Pipeline Media Co. Company services, equipment, lanes, insurance, safety language,
          phone number, email, and hiring status should be confirmed directly with JBW Transportation Inc. before
          publication.
        </p>
      </div>
    </footer>
  )
}
