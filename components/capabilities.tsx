import { Check } from "lucide-react"

const capabilities = [
  {
    strong: "Authorized interstate carrier",
    span: "Listed with USDOT and MC authority for for-hire property transportation.",
  },
  {
    strong: "Refrigerated freight focus",
    span: "Suited for food, produce, and temperature-sensitive freight opportunities.",
  },
  {
    strong: "Southeast Wisconsin location",
    span: "Positioned near major Midwest freight corridors between Chicago and Milwaukee.",
  },
  {
    strong: "Direct quote request form",
    span: "Send pickup, delivery, commodity, temperature, weight, and schedule details in one place.",
  },
]

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-y border-border-soft bg-ice py-[92px] max-[640px]:py-[66px]"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[0.92fr_1.08fr] items-center gap-[58px] max-[920px]:grid-cols-1">
        <div>
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">Carrier capabilities</div>
          <h2 className="mb-4 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            Clear details. Fast contact. Fewer unknowns.
          </h2>
          <p className="max-w-[720px] text-pretty text-lg text-muted">
            Brokers and shippers need to verify carrier details quickly. This site keeps the essentials easy to find:
            operating authority, freight types, service area, and the fastest way to reach dispatch.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-navy px-[22px] font-extrabold text-white shadow-[0_15px_28px_rgba(11,31,51,0.23)] transition-transform hover:-translate-y-0.5 max-[640px]:w-full"
            >
              Send Load Details
            </a>
            <a
              href="#lanes"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border-soft bg-white px-[22px] font-extrabold text-navy transition-transform hover:-translate-y-0.5 max-[640px]:w-full"
            >
              View Service Area
            </a>
          </div>
        </div>

        <div className="grid gap-3.5">
          {capabilities.map((c) => (
            <div
              key={c.strong}
              className="flex items-start gap-3.5 rounded-[18px] border border-border-soft bg-white px-5 py-[18px] shadow-[0_12px_28px_rgba(11,31,51,0.05)]"
            >
              <span className="mt-0.5 grid h-[19px] w-[19px] flex-[0_0_19px] place-items-center rounded-full bg-green text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <div>
                <strong className="mb-0.5 block text-navy">{c.strong}</strong>
                <span className="text-[15px] text-muted">{c.span}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
