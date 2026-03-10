import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Duele el procedimiento de implantes?",
    answer:
      "No. La cirugía de implantes se realiza bajo anestesia local, por lo que no sentirás dolor durante el procedimiento. Además, con nuestra técnica de cirugía guiada mínimamente invasiva, las molestias postoperatorias son mínimas y se controlan fácilmente con medicación.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "Nuestros implantes dentales están enfocados a durar toda la vida. Son una solución permanente que, con el cuidado adecuado e higiene oral correcta, te acompañará por siempre. Las coronas sobre implantes suelen durar entre 15 y 25 años antes de necesitar reemplazo.",
  },
  {
    question: "¿Todos pueden colocarse implantes dentales?",
    answer:
      "La mayoría de adultos con buena salud general son candidatos para implantes. En la valoración inicial evaluamos la cantidad y calidad de hueso disponible, condiciones de salud generales y hábitos del paciente. En algunos casos se pueden realizar procedimientos de regeneración ósea previos.",
  },
  {
    question: "¿Hay opciones de financiación en Cali?",
    answer:
      "Sí. Ofrecemos diferentes opciones de financiación para que puedas acceder a tu tratamiento de implantes. En tu valoración inicial te presentaremos el plan de tratamiento con las opciones de pago disponibles adaptadas a tu presupuesto.",
  },
  {
    question: "¿Cuánto tiempo toma todo el tratamiento?",
    answer:
      "El tiempo total varía según cada caso. Generalmente, desde la colocación del implante hasta la corona definitiva, el proceso toma entre 3 y 6 meses, permitiendo una correcta osteointegración. En tu valoración te daremos un cronograma personalizado.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Resolvemos tus dudas sobre implantes
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
