import Image from "next/image"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573225213238"

const steps = [
  {
    number: "01",
    title: "Valoración clínica y escaneo digital",
    description:
      "Realizamos un examen completo con escáner intraoral 3D de última generación. Sin moldes tradicionales incómodos, obtenemos un modelo digital preciso de tu boca en minutos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escaner-intraoral-eJ2brpH84QX6j1D7kOz4FWNcjwxDN0.jpg",
    imageAlt: "Escáner intraoral 3D para diagnóstico dental digital",
  },
  {
    number: "02",
    title: "Planificación 3D y tomografía",
    description:
      "Con tomografía computarizada 3D planificamos la posición exacta de cada implante. Visualizamos nervios, hueso y estructuras anatómicas para una cirugía segura y predecible.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-704IdRuoV6VlrTvbEYmpAvLTllcReF.jpg",
    imageAlt: "Tomografía 3D para planificación de implantes dentales",
  },
  {
    number: "03",
    title: "Cirugía guiada con precisión",
    description:
      "Utilizamos guías quirúrgicas impresas en 3D que garantizan la colocación exacta del implante. Procedimiento mínimamente invasivo con recuperación más rápida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-qvTRtvqKzdrxmIRVKx91gj5VwiObI8.jpg",
    imageAlt: "Guía quirúrgica para colocación precisa de implantes",
  },
  {
    number: "04",
    title: "Implantes de alta calidad",
    description:
      "Trabajamos con implantes Neodent, marca de reconocimiento mundial. Fabricados en titanio de grado médico, diseñados para una osteointegración óptima y durabilidad de por vida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-r4r5dOtWdfipPRKdpdJ1AcJQ2HCP0Z.png",
    imageAlt: "Implantes dentales Neodent de titanio de alta calidad",
  },
  {
    number: "05",
    title: "Corona definitiva natural",
    description:
      "Tras la osteointegración, colocamos tu corona personalizada. Un diente nuevo que se ve, se siente y funciona exactamente como uno natural.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-01%20a%20las%2012.31.22_8caccb44-R1hkDp25J3kv7leXp0qG4yZNdTkiEu.jpg",
    imageAlt: "Corona dental sobre implante con resultado natural",
  },
]

export function TimelineSection() {
  return (
    <section id="tratamiento" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Paso a paso
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Así es tu tratamiento de implantes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tratamiento respaldado por tecnología digital avanzada en Cali.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col gap-6 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-md">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className={`${i % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero mi valoración ahora
            </a>
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            WhatsApp 322 521 3238
          </p>
        </div>
      </div>
    </section>
  )
}
