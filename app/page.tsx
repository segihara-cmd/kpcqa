import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ConsultationForm } from "@/components/consultation-form"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ConsultationForm />
      <ContactSection />
      <Footer />
    </main>
  )
}
