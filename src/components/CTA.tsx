import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover.png";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
              <img 
                src={bookCover} 
                alt="Tinder Proibido - O Guia Definitivo" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </div>

            {/* CTA Content */}
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  Pronto para <span className="text-primary">dominar</span> o Tinder?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Pare de desperdiçar tempo e dinheiro. Comece a ter resultados reais em 30 minutos.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-lg bg-card border-2 border-primary space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground line-through">De R$ 197,00</p>
                    <p className="text-5xl font-extrabold text-primary">R$ 97</p>
                    <p className="text-sm text-muted-foreground">Oferta por tempo limitado</p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Acesso imediato ao guia completo",
                      "Atualizações gratuitas vitalícias",
                      "Garantia de 30 dias - 100% do dinheiro de volta",
                      "Bônus: Templates de conversa prontos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg" 
                    variant="hero" 
                    className="w-full text-lg py-6 animate-glow-pulse"
                  >
                    Garantir Meu Acesso Agora
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Pagamento 100% seguro | Satisfação garantida ou seu dinheiro de volta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
