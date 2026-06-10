import { IdCard, ArrowLeftRight, Check } from "lucide-react"

const roles = [
  {
    icon: IdCard,
    title: "CDL Drivers",
    desc: "Submit your contact details, driving experience, and availability for future driver opportunities.",
  },
  {
    icon: ArrowLeftRight,
    title: "Regional & Interstate",
    desc: "Connect about potential lanes and schedules that fit current company needs.",
  },
  {
    icon: Check,
    title: "Reefer Experience",
    desc: "Experience with refrigerated freight, food, or produce loads may be helpful for available roles.",
  },
]

export function Careers() {
  return (
    <section id="careers" className="border-y border-border-soft bg-ice py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mb-9 max-w-[760px]">
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">Careers</div>
          <h2 className="mb-4 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            CDL drivers can connect with JBW Transportation.
          </h2>
          <p className="max-w-[720px] text-pretty text-lg text-muted">
            Interested in driving opportunities? Reach out with your experience, license details, and preferred lanes. A
            team member can follow up when opportunities are available.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
          {roles.map(({ icon: Icon, title, desc }) => (
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
