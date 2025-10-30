import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import bookCover from "@/assets/book-cover.png";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">TS</span>
            </div>
            <div>
              <h2 className="font-bold text-foreground">Tinder Success</h2>
              <p className="text-xs text-muted-foreground">Expert em relacionamentos</p>
            </div>
          </div>
          <a href="mailto:contato@tindersuccess.com" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">contato@tindersuccess.com</span>
          </a>
        </header>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                Para Homens Frustrados com Zero Matches no Tinder
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-primary">TINDER PROIBIDO:</span>{" "}
                COMO EXPLORAR O{" "}
                <span className="text-primary">ALGORITMO SECRETO</span>{" "}
                DO TINDER E ENCHER SUA INBOX DE{" "}
                <span className="text-primary">MATCHES QUENTES</span>
                ... <span className="italic text-primary">SEM</span> GASTAR DINHEIRO COM RECURSOS PREMIUM INÚTEIS OU TER VISUAL DE MODELO
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Um guia sem enrolação sobre como hackear o sistema manipulado do Tinder e vencer os gananciosos no próprio jogo deles
              </p>
            </div>

            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg py-6 px-12 animate-glow-pulse"
            >
              Desbloquear os Segredos
            </Button>

            {/* Testimonial */}
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex-shrink-0" />
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground">
                  "Gastei mais de R$1.500 nos últimos anos em apps de relacionamento sem resultado algum. Peguei o guia e minha inbox encheu de gatas nota 9 e 10"
                </p>
                <p className="text-sm font-semibold text-primary">- Rafael</p>
              </div>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={bookCover} 
              alt="Tinder Proibido - O Guia Definitivo" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
