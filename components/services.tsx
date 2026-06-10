import { Snowflake, Leaf, Boxes } from "lucide-react"

const services = [
  {
    icon: Snowflake,
    title: "Refrigerated Freight",
    desc: "Transportation for temperature-sensitive freight, including refrigerated food and other reefer-compatible loads.",
  },
  {
    icon: Leaf,
    title: "Fresh Produce Transport",
    desc: "Freight service for produce loads where timing, route discipline, and temperature awareness matter.",
  },
  {
    icon: Boxes,
    title: "General Freight",
    desc: "Carrier support for general freight opportunities where equipment, route, and schedule fit the load.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mb-9 max-w-[760px]">
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">Freight services</div>
          <h2 className="mb-4 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            Built for cold-chain and time-sensitive loads.
          </h2>
          <p className="max-w-[720px] text-pretty text-lg text-muted">
            From refrigerated food to fresh produce and general freight, JBW Transportation helps move loads that
            require timing, care, and communication from pickup to delivery.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-card border border-border-soft bg-white p-7 shadow-[0_16px_40px_rgba(11,31,51,0.06)]"
            >
              <div className="mb-[22px] grid h-[52px] w-[52px] place-items-center rounded-2xl bg-light-blue text-blue">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-[11px] text-[23px] font-bold leading-[1.15] tracking-[-0.03em] text-navy">{title}</h3>
              <p className="text-base text-muted">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
