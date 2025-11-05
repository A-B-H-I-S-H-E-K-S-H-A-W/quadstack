"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export function ScrollText() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center">
      <ScrollVelocityContainer className="relative z-30 top-12 font-bold tracking-tight md:leading-[1.1] rotate-3">
        <ScrollVelocityRow
          className="md:text-3xl text-xl font-medium"
          baseVelocity={10}
          direction={1}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;Think&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Plan&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Design&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Development&nbsp;&nbsp;&nbsp;&nbsp;•
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute z-20 top-7 inset-y-0 left-0 h-20 w-full bg-violet-500 rotate-3" />
      <div className="pointer-events-none relative z-10 h-20 w-full bg-violet-400" />
    </section>
  );
}
