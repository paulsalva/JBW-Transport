const states = ["Wisconsin", "Illinois", "Indiana", "Michigan", "Minnesota", "Ohio"]

export function ServiceArea() {
  return (
    <section id="lanes" className="py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[0.92fr_1.08fr] items-center gap-[58px] max-[920px]:grid-cols-1">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-navy to-[#123b5f] p-[34px] text-white shadow-[0_24px_70px_rgba(11,31,51,0.14)] max-[640px]:p-6">
          <div className="pointer-events-none absolute -bottom-[120px] -right-20 h-[290px] w-[290px] rounded-full bg-green/30" />
          <h3 className="relative mb-3.5 text-[34px] font-bold leading-tight tracking-[-0.03em] text-white">
            Kenosha Based. Midwest Connected.
          </h3>
          <p className="relative mb-6 text-white/[0.78]">
            Located in Southeast Wisconsin, JBW Transportation is positioned for freight moving through Wisconsin,
            Illinois, and surrounding Midwest markets.
          </p>
          <div className="relative grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
            {states.map((state) => (
              <div
                key={state}
                className="rounded-[14px] border border-white/10 bg-white/[0.08] px-3.5 py-3 font-bold text-white/90"
              >
                {state}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-blue">Service area</div>
          <h2 className="mb-4 text-balance text-[clamp(34px,4.5vw,56px)] font-black leading-[1.02] tracking-[-0.055em] text-navy">
            Regional access with interstate flexibility.
          </h2>
          <p className="max-w-[720px] text-pretty text-lg text-muted">
            Whether you are moving refrigerated food, produce, or general freight, JBW Transportation can review the
            lane, timing, temperature requirements, and equipment fit before accepting the load.
          </p>
          <p className="mt-4 max-w-[720px] text-pretty text-lg text-muted">
            Final lane availability should be confirmed directly with dispatch before booking.
          </p>
        </div>
      </div>
    </section>
  )
}
