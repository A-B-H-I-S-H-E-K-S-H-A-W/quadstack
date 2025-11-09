"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    id: "item-1",
    question: "When will my project be delivered?",
    answer:
      "Project timelines depend on scope and complexity, but most are delivered within 2–6 weeks. We provide a clear roadmap before starting so you always know what to expect.",
  },
  {
    id: "item-2",
    question: "What services do you offer?",
    answer:
      "We specialize in web design, development, SEO optimization, and e-commerce growth strategies — everything you need to elevate your digital presence.",
  },
  {
    id: "item-3",
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We collaborate with clients worldwide, including the USA, UAE, and India, ensuring seamless communication and delivery across time zones.",
  },
  {
    id: "item-4",
    question: "Do you offer refunds?",
    answer:
      "Our work is milestone-based and transparent. Refunds are applicable only if the project hasn’t moved into production or development stages as outlined in our contract.",
  },
];

function FAQ({ title = "Any Questions?", subtitle }) {
  return (
    <section className="relative text-background py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {title.split(" ")[0]}{" "}
          <span className="text-neon-lilac">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        <p className="text-muted-foreground mt-2">
          {subtitle ||
            "Here are some common questions we get from our clients."}
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-2xl bg-quad-black border border-deep-space px-4"
          >
            <AccordionTrigger className="text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted/70 leading-relaxed pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
