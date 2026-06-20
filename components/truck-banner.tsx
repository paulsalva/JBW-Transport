import Image from "next/image"

export function TruckBanner() {
  return (
    <section aria-label="JBW Transportation tractor and trailer" className="py-[46px] max-[640px]:py-7">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="relative overflow-hidden rounded-[30px] border border-border-soft shadow-[0_24px_70px_rgba(11,31,51,0.14)]">
          <Image
            src="/truck-ext.webp"
            alt="JBW Transportation tractor pulling a refrigerated trailer"
            width={2400}
            height={900}
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
