import { Button } from "@/components/ui/button"
import { WatermarkedImage } from "@/components/watermarked-image"

const WHATSAPP_URL = "https://wa.me/573235944931"

const cases = [
  {
    src: "/images/cirugia-especializada.jpg",
    alt: "Doctor Weider realizando procedimiento de implantes dentales en Cali",
    label: "Cirugía especializada",
    description: "El Doctor Weider realizando un procedimiento de implantes con técnicas mínimamente invasivas.",
  },
  {
    src: "/images/protesis-implantes.jpg",
    alt: "Prótesis dental sobre implantes vista superior mostrando los conectores de titanio",
    label: "Prótesis sobre implantes",
    description: "Prótesis fija diseñada con encía artificial de alta estética y naturalidad.",
  },
  {
    src: "/images/ajuste-color.jpg",
    alt: "Comprobación del color de la corona dental con guía de tonalidades",
    label: "Ajuste de color",
    description: "Selección precisa del tono para un resultado completamente natural.",
  },
  {
    src: "/images/sonrisa-natural.jpg",
    alt: "Paciente feliz mostrando su sonrisa natural después del tratamiento con implantes dentales",
    label: "Sonrisa natural",
    description: "Resultado final con una sonrisa radiante y completamente natural.",
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
