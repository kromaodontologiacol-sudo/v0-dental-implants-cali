"use client"

import { useEffect } from "react"
import { Calendar } from "lucide-react"

export function AgendaSection() {
  useEffect(() => {
    // Load Doctoralia widget script
    if (!document.getElementById("zl-widget-s")) {
      const script = document.createElement("script")
      script.id = "zl-widget-s"
      script.src = "//platform.docplanner.com/js/widget.js"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section id="agenda" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Calendar className="h-4 w-4" />
            Agenda Online
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Reserve su cita ahora
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende su consulta de valoración directamente desde nuestro calendario en línea. 
            Seleccione el horario que más le convenga.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a
            id="zl-url"
            className="zl-url"
            href="http://www.doctoralia.co/weider-gutierrez/odontologo/cali"
            rel="nofollow"
            data-zlw-doctor="weider-gutierrez"
            data-zlw-type="big_with_calendar"
            data-zlw-opinion="false"
            data-zlw-hide-branding="true"
            data-zlw-saas-only="false"
            data-zlw-a11y-title="Widget de reserva de citas médicas"
          >
            Reservar una cita
          </a>
        </div>
      </div>
    </section>
  )
}
