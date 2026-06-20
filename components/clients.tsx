import { ImageIcon, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "JBW has been a dependable partner for our refrigerated freight. They communicate every step of the way and our loads always arrive on time and in spec.",
    name: "Operations Manager",
    detail: "Regional Produce Distributor",
  },
  {
    quote:
      "Working with a family-owned carrier that actually picks up the phone makes all the difference. JBW treats our freight like it's their own.",
    name: "Logistics Coordinator",
    detail: "Midwest Food Brokerage",
  },
]

export function Clients() {
  return (
    <section id="clients" className="bg-ice py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">Clients</div>
          <h2 className="mb-5 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            Trusted by the shippers and brokers we move for.
          </h2>
          <p className="mx-auto max-w-[640px] text-pretty text-lg text-muted">
            We&apos;re proud to keep freight moving for some of the region&apos;s most respected food, produce, and
            distribution partners. These relationships are built on consistency, clear communication, and loads
            delivered right every time.
          </p>
        </div>

        {/* Client logo placeholders */}
        <div className="mt-12 grid grid-cols-4 gap-4 max-[640px]:gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="grid aspect-[3/2] place-items-center rounded-2xl border border-border-soft bg-white text-muted shadow-[0_10px_30px_rgba(11,31,51,0.06)]"
            >
              <div className="flex flex-col items-center gap-1.5">
                <ImageIcon className="h-7 w-7 max-[640px]:h-5 max-[640px]:w-5" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] max-[640px]:hidden">Client logo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
          {testimonials.map((t) => (
            <figure
              key={t.detail}
              className="flex flex-col rounded-[26px] border border-border-soft bg-white p-9 shadow-[0_24px_70px_rgba(11,31,51,0.08)] max-[640px]:p-7"
            >
              <Quote className="h-9 w-9 text-blue/30" aria-hidden="true" />
              <blockquote className="mt-4 text-pretty text-[22px] font-bold leading-snug tracking-[-0.02em] text-navy max-[640px]:text-xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border-soft pt-5">
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-sm text-muted">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
