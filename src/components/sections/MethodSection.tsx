import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MethodPathTimeline } from "@/components/sections/MethodPathTimeline";

export function MethodSection() {
  return (
    <section id="methode" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <MethodPathTimeline />
        </Reveal>
      </Container>
    </section>
  );
}
