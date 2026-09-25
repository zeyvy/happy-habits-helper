import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/desafio-7d-hero.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BenefitsSection, CauseSection, Cta, FoundationsSection, OfferSection, QuestionsSection, ReviewsSection, TimelineSection } from "@/components/desafio-sections";
import { FinalCta, ProfileSection } from "@/components/desafio-profile";

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
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    void fetch("https://track.mulhernocontrole.host/form/submit?formId=19", { method: "POST", body: new FormData(form), mode: "no-cors" }).finally(() => { window.location.href = "https://click.mulheremforma.com/sf/?sfunnel=700"; });
  };
  return <main className="site-shell">
    <header className="sticky top-3 z-40 mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 glass"><span className="font-display text-lg">MULHER <span className="text-primary">EM FORMA</span></span><Button size="sm" onClick={openForm} className="rounded-full">Garantir vaga</Button></header>
    <section className="mx-auto grid min-h-[78vh] max-w-5xl items-center gap-5 px-4 pb-10 pt-8 md:grid-cols-[1.1fr_.9fr]">
      <div><p className="eyebrow">🏆 Método Premiado pela USP</p><h1 className="font-body mt-4 text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">ESQUEÇA TUDO O QUE TE ENSINARAM SOBRE <span className="text-primary">COMER (OU NÃO COMER)</span> PARA EMAGRECER.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Participe do <strong className="text-foreground">7D Seca & Desincha</strong> e descubra como <strong className="text-foreground">"regular seus hormônios para emagrecer de verdade"</strong>: o segredo para eliminar até <strong className="text-foreground">5kg em apenas 7 dias.</strong></p><div className="mt-7"><Cta onClick={openForm}>QUERO PERDER ATÉ 5KG EM 7 DIAS</Cta></div></div>
      <div className="glass overflow-hidden rounded-2xl p-2"><img src={heroImage} alt="Mulher realizando exercício do 7D Seca & Desincha" width={1088} height={1088} fetchPriority="high" className="aspect-square w-full rounded-xl object-cover"/></div>
    </section>
    <QuestionsSection/><CauseSection onCta={openForm}/><BenefitsSection onCta={openForm}/><FoundationsSection onCta={openForm}/><TimelineSection/><ReviewsSection onCta={openForm}/><OfferSection onCta={openForm}/><ProfileSection/><FinalCta onCta={openForm}/>
    <footer className="mx-auto max-w-5xl px-4 pb-8 text-center text-xs text-muted-foreground">© 2026 Mulher em Forma. Todos os direitos reservados.</footer>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="glass max-h-[92vh] overflow-y-auto rounded-2xl border-border bg-background/90 sm:max-w-md"><DialogHeader><DialogTitle className="text-center text-2xl">Garanta sua vaga no<br/>7D Seca & Desincha!</DialogTitle><DialogDescription className="text-center">Preencha seus dados para continuar para o pagamento</DialogDescription></DialogHeader><form onSubmit={submit} className="mt-2 grid gap-4"><FormField label="Nome" name="mauticform[f_nome]" placeholder="Seu nome" autoComplete="given-name"/><FormField label="Sobrenome" name="mauticform[f_sobrenome]" placeholder="Seu sobrenome" autoComplete="family-name"/><FormField label="Telefone (WhatsApp)" name="mauticform[f_telefone]" placeholder="(11) 99999-9999" autoComplete="tel" type="tel"/><FormField label="E-mail" name="mauticform[f_email]" placeholder="seu@email.com" autoComplete="email" type="email"/><Button type="submit" className="mt-1 h-auto rounded-full py-4">Quero Participar do 7D Seca & Desincha Agora!</Button><p className="text-center text-xs text-muted-foreground">🔒 Seus dados estão protegidos e não serão compartilhados</p></form></DialogContent></Dialog>
  </main>;
}

function FormField({ label, ...props }: React.ComponentProps<typeof Input> & { label: string }) {
  return <label className="grid gap-1.5 text-sm font-medium">{label}<Input required className="h-11 rounded-xl bg-background/70" {...props}/></label>;
}
