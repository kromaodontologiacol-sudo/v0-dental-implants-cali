import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                ImplantesCali
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">
              Especialistas en implantología oral con tecnología de última
              generación en Cali, Colombia.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/80">
              Contacto
            </h3>
            <div className="flex items-center gap-3 text-sm text-background/60">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Cali, Valle del Cauca - Colombia</span>
            </div>
            <a
              href="tel:+573225213238"
              className="flex items-center gap-3 text-sm text-background/60 transition-colors hover:text-background"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>WhatsApp: 322 521 3238</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-background/60">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/80">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>Implantes Dentales</li>
              <li>Cirugía Guiada Digital</li>
              <li>Escáner Intraoral 3D</li>
              <li>Rehabilitación Oral</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/40">
          <p>
            {`\u00A9 ${new Date().getFullYear()} ImplantesCali. Todos los derechos reservados. Cali, Colombia.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
