import Image from "next/image"

const stats = [
  { strong: "Reefer", span: "Temperature-sensitive freight" },
  { strong: "Interstate", span: "For-hire carrier authority" },
  { strong: "Kenosha", span: "Between Chicago & Milwaukee" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(25,169,116,0.16),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(21,94,159,0.22),transparent_32%),linear-gradient(135deg,#f8fcff_0%,#eaf5ff_50%,#ffffff_100%)] py-[86px] max-[920px]:py-[52px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[1.03fr_0.97fr] items-center gap-[54px] max-[920px]:grid-cols-1">
        <div>
          <div className="mb-[22px] inline-flex items-center gap-[9px] rounded-full border border-blue/15 bg-blue/10 px-[13px] py-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-blue">
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_0_5px_rgba(25,169,116,0.13)]" />
            Refrigerated freight carrier
          </div>
          <h1 className="mb-6 text-balance text-[clamp(43px,6vw,76px)] font-black leading-[0.95] tracking-[-0.07em] text-navy">
            Reliable Reefer Freight From Southeast Wisconsin.
          </h1>
          <p className="mb-8 max-w-[620px] text-pretty text-xl text-muted">
            JBW Transportation Inc. provides interstate freight transportation for refrigerated food, fresh produce, and
            general freight. Based in Kenosha, WI, we help shippers and brokers move time-sensitive freight with clear
            communication and dependable service.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-blue px-[22px] font-extrabold text-white shadow-[0_15px_28px_rgba(21,94,159,0.25)] transition-transform hover:-translate-y-0.5 max-[640px]:w-full"
            >
              Request Freight Quote
            </a>
            <a
              href="tel:+12625550123"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border-soft bg-white px-[22px] font-extrabold text-navy transition-transform hover:-translate-y-0.5 max-[640px]:w-full"
            >
              Call Dispatch
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-border-soft bg-white/85 shadow-[0_24px_70px_rgba(11,31,51,0.14)] max-[920px]:order-first">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/reefer-truck.png"
              alt="White refrigerated semi truck on the road"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 920px) 100vw, 560px"
            />
          </div>
          <div className="grid grid-cols-3 border-t border-border-soft bg-white max-[640px]:grid-cols-1">
            {stats.map((s, i) => (
              <div
                key={s.strong}
                className={`p-[22px] ${i < stats.length - 1 ? "border-r border-border-soft max-[640px]:border-b max-[640px]:border-r-0" : ""}`}
              >
                <strong className="block text-xl leading-[1.1] text-navy">{s.strong}</strong>
                <span className="mt-[5px] block text-[13px] text-muted">{s.span}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
