import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/desafio-7d-hero.jpg";
import logoImage from "@/assets/uploads/3232.png";
import { Button } from "@/components/ui/button";
import { BenefitsSection, CauseSection, Cta, FoundationsSection, OfferSection, QuestionsSection, ReviewsSection, TimelineSection } from "@/components/desafio-sections";
import { FinalCta, ProfileSection } from "@/components/desafio-profile";

const CHECKOUT_URL = "https://pay.kirvano.com/920a7015-2c09-4411-96a6-8d1bb7e05701";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "7D Seca & Desincha — Elimine até 5kg em 7 Dias" },
    { name: "description", content: "Participe do 7D Seca & Desincha e descubra como regular seus hormônios para emagrecer de verdade." },
    { property: "og:title", content: "7D Seca & Desincha" },
    { property: "og:description", content: "Elimine até 5kg em apenas 7 dias com o método da Camila Nogueira." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

function Index() {
  const openCheckout = () => {
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return <main className="site-shell">
    <header className="sticky top-3 z-40 mx-auto flex min-h-16 max-w-5xl items-center justify-end rounded-full px-4 py-2.5 glass"><div className="absolute left-1/2 flex h-14 w-28 -translate-x-1/2 items-center justify-center" aria-label="Logo 7D Seca & Desincha"><img src={logoImage} alt="Logo 7D Seca & Desincha" className="h-12 w-12 object-contain"/></div><Button size="sm" onClick={openCheckout} className="rounded-full">Garantir vaga</Button></header>
    <section className="mx-auto grid min-h-[78vh] max-w-5xl items-center gap-5 px-4 pb-10 pt-8 md:grid-cols-[1.1fr_.9fr]">
      <div><p className="eyebrow">🏆 Método Premiado pela USP</p><h1 className="font-body mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">EMAGREÇA SEM <span className="text-primary">LUTAR CONTRA O SEU CORPO.</span></h1><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Participe do <strong className="text-foreground">7D Seca & Desincha</strong> e descubra como <strong className="text-foreground">"regular seus hormônios para emagrecer de verdade"</strong>: o segredo para eliminar até <strong className="text-foreground">5kg em apenas 7 dias.</strong></p><div className="mt-7"><Cta onClick={openCheckout}>QUERO PERDER ATÉ 5KG EM 7 DIAS</Cta></div></div>
      <div className="glass overflow-hidden rounded-2xl p-2"><img src={heroImage} alt="Mulher realizando exercício do 7D Seca & Desincha" width={1088} height={1088} fetchPriority="high" className="aspect-square w-full rounded-xl object-cover"/></div>
    </section>
    <QuestionsSection/><CauseSection onCta={openCheckout}/><BenefitsSection onCta={openCheckout}/><FoundationsSection onCta={openCheckout}/><TimelineSection/><ReviewsSection onCta={openCheckout}/><OfferSection onCta={openCheckout}/><ProfileSection/><FinalCta onCta={openCheckout}/>
    <footer className="mx-auto max-w-5xl px-4 pb-8 text-center text-xs text-muted-foreground">© 2026 Mulher em Forma. Todos os direitos reservados.</footer>
  </main>;
}
