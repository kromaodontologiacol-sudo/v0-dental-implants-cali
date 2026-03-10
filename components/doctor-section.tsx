import Image from "next/image"
import { Award, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573235944931"

const credentials = [
  {
    icon: GraduationCap,
    title: "Especialista",
    description: "Formación especializada en implantología oral",
  },
  {
    icon: Award,
    title: "Certificado",
    description: "Técnicas avanzadas de cirugía guiada digital",
  },
  {
    icon: Users,
    title: "Experiencia",
    description: "Cientos de casos exitosos en Cali",
  },
]

export function DoctorSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src="/images/doctor-weider-procedure.jpg"
                alt="Doctor Weider Gutierrez realizando un procedimiento de implantes dentales en su consultorio en Cali"
                width={600}
                height={800}
                className="h-auto w-full object-cover"
              />
              {/* Watermark */}
              <div className="absolute bottom-4 right-4 rounded bg-foreground/60 px-3 py-1.5 text-sm font-semibold tracking-wide text-background backdrop-blur-sm">
                Doctor Weider
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
              Tu especialista
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Doctor Weider
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Especialista en implantología oral con amplia experiencia en casos
              complejos. Comprometido con brindar soluciones dentales de alta
              calidad utilizando tecnología de última generación.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-border bg-background p-4 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar cita con el Doctor Weider
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
