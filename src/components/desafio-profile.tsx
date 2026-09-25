import { useEffect, useState } from "react";
import camilaImage from "@/assets/camila-nogueira.jpg";
import { Cta } from "./desafio-sections";

export function ProfileSection() {
  return <section className="page-section"><div className="grid items-start gap-7 md:grid-cols-[.7fr_1.3fr]"><div className="glass overflow-hidden rounded-2xl p-2"><img src={camilaImage} alt="Camila Nogueira, criadora do método 7D Seca & Desincha" width={736} height={912} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover"/></div><div><p className="eyebrow">Quem irá te acompanhar nessa jornada?</p><h2>Camila Nogueira</h2><p className="mt-2 text-sm font-semibold text-primary">Criadora do método 7D Seca & Desincha</p><div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground"><p className="text-foreground font-semibold">"Eu estava cansada de ver mulheres começando uma dieta na segunda-feira e desistindo antes mesmo de chegar ao fim da semana."</p><p>Cardápios impossíveis. Treinos de uma hora. Listas de proibições que ninguém consegue seguir numa terça-feira comum, com trabalho, casa e cansaço. E quando a mulher desistia, a culpa sempre caía nela.</p><p>Mas eu percebi uma coisa: o problema não era falta de força de vontade. <strong className="text-foreground">O problema era a rotina complicada demais para caber na vida real.</strong></p><p>Por isso criei o 7D. <strong className="text-foreground">7 dias. Alimentação organizada. Até 20 minutos de movimento por dia. Uma missão de cada vez.</strong> Sem precisar virar outra pessoa da noite para o dia.</p><p>Você não precisa transformar sua vida inteira para começar a transformar sua rotina.</p><p className="text-foreground font-semibold">Pare de complicar. Pare de começar e desistir. Faça o básico durante 7 dias e veja como sua rotina pode mudar.</p></div></div></div></section>;
}

export function FinalCta({ onCta }: { onCta: () => void }) {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="glass overflow-hidden rounded-2xl border border-primary/30">
        <div className="border-b border-border bg-primary/10 px-6 py-5 text-center sm:px-10">
          <span className="eyebrow">
            ⏰ VAGAS LIMITADAS — INSCRIÇÕES ABERTAS AGORA
          </span>

          <p className="mt-2 text-sm font-semibold text-coral">
            🔥 Garanta seu acesso enquanto as vagas estão disponíveis.
          </p>
        </div>

        <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="eyebrow">Uma decisão para a sua rotina</p>

            <h2 className="mt-3 text-3xl sm:text-4xl">
              Este é o momento de escolher:
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border bg-background/30 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Continuar lutando contra seu próprio corpo, seguindo dietas
                  que ignoram seus hormônios, se sentindo frustrada e sem
                  resultados…
                </p>
              </div>

              <p className="text-center font-display text-4xl text-primary">
                OU
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
                <p className="font-semibold leading-relaxed">
                  Finalmente trabalhar COM seus hormônios e começar sua
                  transformação em apenas 7 dias.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center sm:p-7">
            <p className="eyebrow">
              Últimos minutos para garantir sua condição
            </p>

            <p className="mt-3 text-sm font-semibold">
              Garanta sua condição atual antes que o tempo acabe
            </p>

            <p
              className="mt-4 font-mono text-5xl font-bold tracking-wider text-foreground"
              role="timer"
              aria-live="polite"
            >
              {minutes}:{seconds}
            </p>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              A disponibilidade pode ser encerrada após o contador.
            </p>

            <div className="mt-6">
              <Cta onClick={onCta}>
                QUERO GARANTIR MINHA VAGA AGORA →
              </Cta>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              🔒 Pagamento seguro • Acesso imediato após a confirmação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}