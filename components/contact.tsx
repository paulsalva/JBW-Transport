"use client"

import type React from "react"
import { useState } from "react"

const contactLines = [
  { label: "Phone", value: "(262) 555-0123", href: "tel:+12625550123" },
  { label: "Email", value: "dispatch@jbwtransportation.com", href: "mailto:dispatch@jbwtransportation.com" },
  { label: "Address", value: "12400 Wilmot Road, Suite 3\nKenosha, WI 53142" },
  { label: "Authority", value: "USDOT 3666214 · MC 1269479" },
]

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { id: "company", label: "Company", type: "text", autoComplete: "organization" },
  { id: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "pickup", label: "Pickup Location", type: "text", placeholder: "City, State" },
  { id: "delivery", label: "Delivery Location", type: "text", placeholder: "City, State" },
  { id: "commodity", label: "Commodity", type: "text", placeholder: "Produce, food, general freight" },
  { id: "temperature", label: "Temperature Requirement", type: "text", placeholder: "Example: 34°F" },
  { id: "pickup-date", label: "Pickup Date", type: "date" },
  { id: "weight", label: "Weight", type: "text", placeholder: "Approx. weight" },
] as const

const inputClass =
  "w-full min-h-[48px] rounded-[13px] border border-border-soft bg-[#fbfdff] px-[13px] py-[11px] text-foreground outline-none transition-shadow focus:border-blue focus:shadow-[0_0_0_4px_rgba(21,94,159,0.1)]"
const labelClass = "mb-[7px] block text-[13px] font-extrabold text-navy"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[0.85fr_1.15fr] items-start gap-7 max-[920px]:grid-cols-1">
        {/* Contact panel */}
        <div className="rounded-[28px] bg-navy p-8 text-white shadow-[0_24px_70px_rgba(11,31,51,0.14)] max-[640px]:p-6">
          <div className="mb-3 text-[13px] font-black uppercase tracking-[0.12em] text-[#8fd7ff]">Contact dispatch</div>
          <h2 className="mb-4 text-[38px] font-black leading-[1.02] tracking-[-0.04em] text-white">
            Request a freight quote.
          </h2>
          <p className="mb-6 text-white/[0.76]">
            Send your load details and the team can review equipment fit, timing, lane availability, and next steps.
          </p>
          {contactLines.map((line) => (
            <div key={line.label} className="border-t border-white/[0.13] py-4">
              <span className="mb-[3px] block text-xs font-bold uppercase tracking-[0.1em] text-white/[0.54]">
                {line.label}
              </span>
              {line.href ? (
                <strong className="text-[17px] text-white hover:underline">
                  <a href={line.href}>{line.value}</a>
                </strong>
              ) : (
                <strong className="whitespace-pre-line text-[17px] text-white">{line.value}</strong>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-border-soft bg-white p-[30px] shadow-[0_16px_45px_rgba(11,31,51,0.08)] max-[640px]:p-6"
        >
          {submitted ? (
            <div className="grid min-h-[300px] place-items-center text-center">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-navy">Thanks — request received.</h3>
                <p className="text-muted">
                  A team member will review your load details and follow up with next steps.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-[15px] max-[640px]:grid-cols-1">
                {fields.map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className={labelClass}>
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      autoComplete={"autoComplete" in f ? f.autoComplete : undefined}
                      placeholder={"placeholder" in f ? f.placeholder : undefined}
                      required={"required" in f ? f.required : undefined}
                      className={inputClass}
                    />
                  </div>
                ))}
                <div className="col-span-full">
                  <label htmlFor="notes" className={labelClass}>
                    Load Details
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us about the lane, timing, trailer needs, appointment times, and any special instructions."
                    className={`${inputClass} min-h-[112px] resize-y`}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-[18px] inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-full bg-blue px-[22px] font-extrabold text-white shadow-[0_15px_28px_rgba(21,94,159,0.25)] transition-transform hover:-translate-y-0.5 max-[640px]:w-full"
              >
                Submit Quote Request
              </button>
              <p className="mt-[13px] text-[13px] text-muted">
                Replace the phone number and email before publishing. On Vercel, connect this form to your preferred form
                handler or CRM.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
