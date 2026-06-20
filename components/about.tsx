import { ImageIcon } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mx-auto max-w-[860px] text-center">
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">About us</div>
          <h2 className="mb-5 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            A Kenosha family-owned and operated business for over 30+ years.
          </h2>
          <p className="mx-auto max-w-[760px] text-pretty text-lg text-muted">
            JBW Transportation has proudly served Kenosha and the greater Southeast Wisconsin community for more than
            three decades. As a family-owned and operated carrier, we take pride in our local roots and the relationships
            we have built with shippers, drivers, and neighbors throughout the region. Our reputation is built on
            dependability, honest communication, and a hands-on commitment to doing right by every customer we haul for.
            When you work with JBW, you are working with a trustworthy business that treats your freight like our own.
          </p>
        </div>

        {/* Placeholder for large image */}
        <div className="mt-12 grid aspect-[16/7] w-full place-items-center rounded-[30px] border border-dashed border-border-soft bg-ice text-muted shadow-[0_24px_70px_rgba(11,31,51,0.08)] max-[640px]:aspect-[4/3]">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="h-10 w-10" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-[0.12em]">Large image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
