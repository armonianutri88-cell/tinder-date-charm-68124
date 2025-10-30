export const WhatIs = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">
              Guarde isso para você mesmo...
            </p>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              O que é o <span className="text-primary">Tinder Proibido?</span>
            </h2>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Tinder está <span className="text-primary font-semibold">sabotando você</span>. 
                Eles querem que você <span className="text-primary font-semibold">gaste dinheiro</span> no Tinder Plus, Gold e Platinum. 
                Mas existe um jeito de <span className="text-primary font-semibold">burlar o sistema</span> e conseguir matches orgânicos de graça.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                {[
                  {
                    title: "O Algoritmo Secreto",
                    description: "Descubra como o Tinder realmente funciona por trás das cortinas e como explorar isso a seu favor"
                  },
                  {
                    title: "Perfil Magnetico",
                    description: "Aprenda a criar um perfil que faz o algoritmo trabalhar PARA você, não contra você"
                  },
                  {
                    title: "Matches Ilimitados",
                    description: "Técnicas comprovadas para multiplicar seus matches sem gastar um centavo"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Este guia revela o <span className="text-primary font-semibold">glitch do algoritmo</span> que as 
                empresas de dating apps <span className="text-primary font-semibold">não querem</span> que você saiba. 
                É tão efetivo que você vai começar a ver resultados em <span className="text-primary font-semibold">30 minutos</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
