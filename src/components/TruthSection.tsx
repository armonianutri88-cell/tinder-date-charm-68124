export const TruthSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              A <span className="text-primary">Verdade</span> que Ninguém te Conta
            </h2>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-lg bg-card border border-primary/20 space-y-6">
              <p className="text-2xl font-bold text-foreground">
                Você <span className="italic">não</span> precisa ser rico, descolado, nem saber "puxar assunto como ninguém".
              </p>
              
              <p className="text-2xl font-bold text-foreground">
                Você <span className="italic">não</span> precisa ser lindo.
              </p>
              
              <p className="text-2xl font-bold text-foreground">
                Você <span className="italic">não</span> precisa ter o corpo perfeito.
              </p>

              <div className="pt-4 border-t border-primary/20">
                <p className="text-3xl font-extrabold text-primary">
                  Você só precisa entender as regras do jogo e jogar do seu jeito.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold text-2xl">Qualquer um pode dar match</span> — 
                o problema nunca foi "não ser bonito", foi "não se mostrar direito".
              </p>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/30">
                <p className="text-lg text-foreground italic mb-4">
                  Você já deve ter ouvido — ou até pensado — a seguinte frase:
                </p>
                <p className="text-2xl font-bold text-primary text-center py-4">
                  "O Tinder só funciona pra quem é bonito."
                </p>
                <p className="text-3xl font-extrabold text-center text-foreground">
                  ERRADO.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Essa ideia é um dos maiores mitos que impedem pessoas comuns de conseguirem o que querem no Tinder. 
                E é também a <span className="text-primary font-semibold">maior desculpa</span> que muita gente 
                usa pra desistir antes mesmo de tentar de verdade.
              </p>

              <div className="p-6 rounded-lg bg-card border border-border">
                <p className="text-lg text-foreground mb-2">
                  <span className="text-primary font-semibold">De acordo com pesquisas:</span>
                </p>
                <p className="text-3xl font-bold text-primary">
                  70% dos usuários do Tinder são pessoas comuns, não modelos.
                </p>
              </div>

              <p className="text-xl text-foreground leading-relaxed font-semibold">
                A verdade é simples: O Tinder não é um concurso de beleza. 
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ele é um <span className="text-primary font-semibold">reflexo</span> — um espelho digital — 
                de como você se apresenta, se comunica e se posiciona.
              </p>

              <div className="p-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 text-center">
                <p className="text-2xl font-bold text-foreground mb-2">A boa notícia?</p>
                <p className="text-3xl font-extrabold text-primary">
                  Isso tudo pode ser aprendido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
