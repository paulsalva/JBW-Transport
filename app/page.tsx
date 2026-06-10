import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { Capabilities } from "@/components/capabilities"
import { ServiceArea } from "@/components/service-area"
import { Careers } from "@/components/careers"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <Hero />
        <TrustStrip />
        <Services />
        <Capabilities />
        <ServiceArea />
        <Careers />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
