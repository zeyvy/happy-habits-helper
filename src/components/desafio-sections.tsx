import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfterOne from "@/assets/uploads/3114.webp";
import beforeAfterTwo from "@/assets/uploads/3115.webp";
import beforeAfterThree from "@/assets/uploads/3116.webp";
import { benefits, causes, foundations, products, questions, reviews } from "./desafio-content.tsx";

interface CtaProps { onClick: () => void; children: React.ReactNode }

export function Cta({ onClick, children }: CtaProps) {
  return <Button onClick={onClick} size="lg" className="h-auto max-w-full whitespace-normal rounded-full px-7 py-4 text-center font-semibold shadow-lg shadow-primary/20">{children}</Button>;
}

function List({ items, kind }: { items: React.ReactNode[]; kind: "question" | "negative" | "positive" }) {
  const Icon = kind === "question" ? HelpCircle : kind === "negative" ? X : Check;
  return <ul className="grid gap-3 sm:grid-cols-2">{items.map((item, index) => <li key={typeof item === "string" ? item : index} className="glass flex gap-3 rounded-xl p-4 text-sm leading-relaxed"><Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true"/><span>{item}</span></li>)}</ul>;
}

export function QuestionsSection() {
  return <section className="page-section"><p className="eyebrow">Talvez isso soe familiar</p><h2>Você já se perguntou por que…</h2><div className="mt-7"><List items={questions} kind="question" /></div></section>;
}

export function CauseSection({ onCta }: { onCta: () => void }) {
  return <section className="page-section"><div className="glass rounded-2xl p-6 sm:p-9"><p className="eyebrow">Fisiologia feminina</p><h2>Não é sua culpa.</h2><p className="section-copy">A maioria das dietas e métodos ignora completamente a fisiologia feminina.</p><List items={causes} kind="negative"/><div className="mt-7"><Cta onClick={onCta}>TOQUE AQUI PARA DESCOBRIR O MÉTODO QUE RESPEITA SEUS HORMÔNIOS</Cta></div></div></section>;
}

export function BenefitsSection({ onCta }: { onCta: () => void }) {
  return <section className="page-section"><p className="eyebrow">Seu corpo a seu favor</p><h2>O que acontece quando seus hormônios trabalham a seu favor?</h2><div className="mt-7"><List items={benefits} kind="positive"/></div><div className="mt-7"><Cta onClick={onCta}>QUERO ESSES RESULTADOS PRA MIM</Cta></div></section>;
}

export function FoundationsSection({ onCta }: { onCta: () => void }) {
  return <section className="page-section"><p className="eyebrow">O método</p><h2>O que faz o 7D Seca & Desincha funcionar de verdade</h2><p className="section-copy">Conheça os fundamentos do método criado pela Camila Nogueira para o corpo feminino.</p><div className="grid gap-4 md:grid-cols-3">{foundations.map((item) => <article key={item.number} className="glass rounded-xl p-6"><span className="font-mono text-xs text-primary">{item.number}</span><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p><p className="mt-4 text-sm font-medium text-primary">{item.note}</p></article>)}</div><div className="mt-7"><Cta onClick={onCta}>CONHECER O MÉTODO COMPLETO</Cta></div></section>;
}

export function TimelineSection() {
  return <section className="page-section"><p className="eyebrow">7 DIAS. 2 FASES. UM NOVO COMEÇO.</p><h2>Como funciona na prática</h2><div className="mt-7 grid gap-4 md:grid-cols-2"><article className="glass rounded-xl p-6"><p className="eyebrow">FASE 1</p><h3 className="text-xl font-semibold">Dias 1 a 3 — Organização</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground"><li>✓ Organização da alimentação e da rotina</li><li>✓ Treinos curtos de até 20 minutos</li><li>✓ Missões diárias para começar a criar consistência</li></ul><p className="mt-4 text-sm font-medium text-primary">Objetivo: tirar o improviso e colocar o protocolo em movimento.</p></article><article className="glass rounded-xl p-6"><p className="eyebrow text-coral">FASE 2</p><h3 className="text-xl font-semibold">Dias 4 a 7 — Consistência</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground"><li>✓ Continuidade da alimentação planejada</li><li>✓ Movimento diário de até 20 minutos</li><li>✓ Acompanhamento das medidas e evolução</li></ul><p className="mt-4 text-sm font-medium text-primary">Objetivo: completar os 7 dias e transformar o protocolo em uma rotina mais fácil de manter.</p></article></div></section>;
}

export function ReviewsSection({ onCta }: { onCta: () => void }) {
  return <section className="page-section"><p className="eyebrow">Histórias das alunas</p><h2>Resultados reais de mulheres como você</h2><p className="section-copy">Mais de <strong>700.000 alunas</strong> já transformaram seus corpos com o método da Camila</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="glass rounded-xl p-5"><div className="text-sm text-coral" aria-label="5 estrelas">★★★★★</div><div className="mt-4 grid grid-cols-2 gap-2"><div className="relative aspect-[4/5] overflow-hidden rounded-lg"><img src={[beforeAfterOne, beforeAfterTwo, beforeAfterThree][reviews.indexOf(review)]} alt={`Antes e depois de ${review.name}`} className="h-full w-full object-cover"/><div className="pointer-events-none absolute inset-y-0 left-1/2 border-l border-white/80" /><span className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-1 text-xs text-foreground">Antes</span><span className="absolute bottom-2 right-2 rounded bg-background/80 px-2 py-1 text-xs text-foreground">Depois</span></div></div><figcaption className="mt-4 font-semibold">{review.name}</figcaption><p className="mt-1 text-xs font-semibold text-success">✓ {review.result}</p><blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">{review.quote}</blockquote></figure>)}</div><div className="mt-7"><Cta onClick={onCta}>QUERO SER A PRÓXIMA</Cta></div></section>;
}

export function OfferSection({ onCta }: { onCta: () => void }) {
  return <section id="comprar" className="page-section scroll-mt-24"><p className="eyebrow">A OFERTA COMPLETA</p><h2>O QUE VOCÊ RECEBE NO 7D SECA & DESINCHA</h2><p className="section-copy">Tudo que você precisa para executar o protocolo durante 7 dias, sem complicação.</p><div className="glass overflow-hidden rounded-2xl">{products.map((product) => <div key={product.title} className="flex gap-4 border-b border-border p-5 last:border-0 sm:p-6"><span className="mt-0.5 text-2xl" aria-hidden="true">{product.icon}</span><div className="min-w-0"><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><h3 className="font-semibold">{product.title}</h3><span className="text-xs text-muted-foreground line-through">{product.value}</span></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.text}</p><p className="mt-3 text-xs font-semibold tracking-wide text-primary">INCLUSO NO 7D</p></div></div>)}</div><div className="glass mt-5 rounded-2xl border border-primary/30 p-7 text-center sm:p-10"><p className="eyebrow">VALOR DE REFERÊNCIA DOS COMPONENTES</p><p className="mt-3 text-xl text-muted-foreground line-through">R$215,00</p><p className="mt-5 text-sm font-semibold">VOCÊ NÃO PRECISA PAGAR ESSE VALOR.</p><p className="mt-5 text-sm text-muted-foreground">HOJE, VOCÊ RECEBE O 7D COMPLETO POR:</p><p className="font-display mt-2 text-6xl text-primary sm:text-7xl">R$29,90</p><p className="mt-2 text-xs text-muted-foreground">Acesso ao protocolo completo — pagamento único</p><div className="mt-6"><Cta onClick={onCta}>QUERO COMEÇAR MEU 7D</Cta></div><p className="mt-3 text-xs text-muted-foreground">🔒 Pagamento 100% seguro e criptografado</p></div></section>;
}