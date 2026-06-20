import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { Capabilities } from "@/components/capabilities"
import { TruckBanner } from "@/components/truck-banner"
import { ServiceArea } from "@/components/service-area"
import { Clients } from "@/components/clients"
import { Careers } from "@/components/careers"
import { About } from "@/components/about"
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
        <TruckBanner />
        <ServiceArea />
        <Clients />
        <Careers />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
