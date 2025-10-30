export const AuthorBio = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Conheça <span className="text-primary">Thomàs Wolf</span>
            </h2>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">
              O Autor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative z-10 w-full aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold text-primary">TW</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">Thomàs Wolf</p>
                  <p className="text-muted-foreground">Expert em Dating Apps</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thomàs Wolf passou os últimos 5 anos estudando o algoritmo do Tinder e testando mais de 
                <span className="text-primary font-semibold"> 300 estratégias diferentes</span> para descobrir 
                o que realmente funciona.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Depois de ajudar <span className="text-primary font-semibold">mais de 10.000 homens</span> a 
                transformarem seus resultados no Tinder, ele decidiu compilar todo seu conhecimento neste guia definitivo.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Sua missão é simples: <span className="text-primary font-semibold">revelar a verdade</span> sobre 
                como o Tinder realmente funciona e dar a você as ferramentas para vencer o jogo.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-primary">10k+</p>
                  <p className="text-sm text-muted-foreground">Alunos</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-primary">300+</p>
                  <p className="text-sm text-muted-foreground">Testes</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-sm text-muted-foreground">Anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
