import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { EducationSection } from "@/components/education-section"
import { TimelineSection } from "@/components/timeline-section"
import { CasesSection } from "@/components/cases-section"
import { DoctorSection } from "@/components/doctor-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AgendaSection } from "@/components/agenda-section"
import { UrgencySection } from "@/components/urgency-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { WhatsappFloating } from "@/components/whatsapp-floating"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <EducationSection />
        <TimelineSection />
        <CasesSection />
        <DoctorSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <AgendaSection />
        <UrgencySection />
        <FaqSection />
        <ContactFormSection />
        <SocialSection />
      </main>
      <Footer />
      <WhatsappFloating />
    </>
  )
}
