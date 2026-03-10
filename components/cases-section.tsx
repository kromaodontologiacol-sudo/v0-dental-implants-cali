import { Button } from "@/components/ui/button"
import { WatermarkedImage } from "@/components/watermarked-image"

const WHATSAPP_URL = "https://wa.me/573235944931"

const cases = [
  {
    src: "/images/doctor-weider-procedure.jpg",
    alt: "Doctor Weider realizando procedimiento de implantes dentales en Cali",
    label: "Cirugía especializada",
    description: "El Doctor Weider realizando un procedimiento de implantes con técnicas mínimamente invasivas.",
  },
  {
    src: "/images/prosthesis-black.jpg",
    alt: "Prótesis dental sobre implantes vista superior mostrando los conectores de titanio",
    label: "Prótesis sobre implantes",
    description: "Prótesis fija diseñada con encía artificial de alta estética y naturalidad.",
  },
  {
    src: "/images/prosthesis-hands.jpg",
    alt: "Prótesis dental sobre implantes sostenida por el especialista, mostrando la calidad del trabajo",
    label: "Control de calidad",
    description: "Verificación minuciosa de la prótesis antes de su instalación definitiva.",
  },
  {
    src: "/images/result-color-match.jpg",
    alt: "Comprobación del color de la corona dental con guía de tonalidades",
    label: "Ajuste de color",
    description: "Selección precisa del tono para un resultado completamente natural.",
  },
  {
    src: "/images/result-smile.jpg",
    alt: "Resultado final: sonrisa completa con coronas sobre implantes de apariencia completamente natural",
    label: "Resultado final",
    description: "Sonrisa completamente restaurada con implantes que lucen y funcionan como dientes naturales.",
  },
  {
    src: "/images/before-after-real.png",
    alt: "Caso antes y después de implantes dentales mostrando la transformación completa",
    label: "Antes y después",
    description: "Transformación real de un paciente con implantes dentales del Doctor Weider.",
  },
]

export function CasesSection() {
  return (
    <section id="casos" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Casos reales
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Resultados que hablan por sí mismos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Cada caso es único. Aquí puedes ver el proceso y los resultados reales de nuestros pacientes en Cali.
            Implantes enfocados a durar toda la vida.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <WatermarkedImage
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {c.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero resultados como estos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
