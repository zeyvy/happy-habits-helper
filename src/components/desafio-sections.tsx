import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <section className="page-section"><p className="eyebrow">Histórias das alunas</p><h2>Resultados reais de mulheres como você</h2><p className="section-copy">Mais de <strong>700.000 alunas</strong> já transformaram seus corpos com o método da Camila</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="glass rounded-xl p-5"><div className="text-sm text-coral" aria-label="5 estrelas">★★★★★</div><div className="mt-4 grid grid-cols-2 gap-2"><div><img src={review.beforeImage} alt={`Antes de ${review.name}`} className="aspect-[4/5] w-full rounded-lg object-cover"/><p className="mt-1 text-center text-xs text-muted-foreground">Antes</p></div><div><img src={review.afterImage} alt={`Depois de ${review.name}`} className="aspect-[4/5] w-full rounded-lg object-cover"/><p className="mt-1 text-center text-xs text-muted-foreground">Depois</p></div></div><figcaption className="mt-4 font-semibold">{review.name}</figcaption><p className="mt-1 text-xs font-semibold text-success">✓ {review.result}</p><blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">{review.quote}</blockquote></figure>)}</div><div className="mt-7"><Cta onClick={onCta}>QUERO SER A PRÓXIMA</Cta></div></section>;
}

export function OfferSection({ onCta }: { onCta: () => void }) {
  return <section id="comprar" className="page-section scroll-mt-24"><p className="eyebrow">A oferta completa</p><h2>O QUE VOCÊ RECEBE NO DESAFIO 7D MULHER EM FORMA</h2><p className="section-copy">Tudo que você precisa para transformar seu corpo em 7 dias.</p><div className="glass overflow-hidden rounded-2xl">{products.map((product) => <div key={product.title} className="flex gap-4 border-b border-border p-5 last:border-0 sm:p-6"><span className="text-2xl" aria-hidden="true">{product.icon}</span><div><p className="text-xs text-muted-foreground line-through">Valor: {product.value}</p><h3 className="mt-1 font-semibold">{product.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.text}</p></div></div>)}</div><div className="mt-5 rounded-xl border-2 border-success/40 bg-success/10 p-6 text-center"><h3 className="font-semibold text-success">✓ Garantia Incondicional de Resultados</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Se você seguir o desafio e não tiver nenhum resultado em 7 dias, basta entrar em contato e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia. Sua satisfação é nossa prioridade.</p></div><div className="glass mt-5 rounded-2xl p-7 text-center sm:p-10"><p className="text-muted-foreground line-through">De R$379,90</p><p className="text-sm text-muted-foreground">por apenas</p><p className="font-display mt-2 text-6xl text-primary sm:text-7xl">R$29,90</p><p className="mt-2 text-xs text-muted-foreground">Pagamento único — sem mensalidade</p><div className="mt-6"><Cta onClick={onCta}>TOQUE AQUI PARA PARTICIPAR DO DESAFIO →</Cta></div><p className="mt-3 text-xs text-muted-foreground">🔒 Pagamento 100% seguro e criptografado</p></div></section>;
}