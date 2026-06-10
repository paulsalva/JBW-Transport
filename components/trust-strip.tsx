import { Check } from "lucide-react"

const items = [
  "Refrigerated Food",
  "Fresh Produce",
  "General Freight",
  "Interstate Carrier",
  "Kenosha Based",
]

export function TrustStrip() {
  return (
    <div className="bg-navy py-[18px] text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-5 gap-2.5 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-[9px] text-center text-sm font-extrabold text-white/90"
          >
            <span className="grid h-[19px] w-[19px] flex-[0_0_19px] place-items-center rounded-full bg-green text-xs font-black text-white">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
