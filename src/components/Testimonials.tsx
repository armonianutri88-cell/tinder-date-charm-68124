export const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas M., 28 anos",
      text: "Depois de 2 anos no Tinder sem sucesso, finalmente entendi como o jogo funciona. Agora tenho mais matches do que consigo responder. Já saí com 3 meninas lindas só esse mês.",
      rating: 5
    },
    {
      name: "Pedro S., 25 anos",
      text: "Achei que era feio demais pro Tinder. Esse guia me mostrou que o problema não era eu, era meu perfil. Mudou tudo. Multipliquei meus matches por 15x em uma semana.",
      rating: 5
    },
    {
      name: "Gabriel R., 31 anos",
      text: "Gastava R$50 por mês no Tinder Gold achando que ia ajudar. Descobri que estava jogando dinheiro fora. O algoritmo é tudo. Agora gasto zero e tenho 10x mais resultados.",
      rating: 5
    },
    {
      name: "Rodrigo F., 27 anos",
      text: "Pensei que precisava ser rico ou ter carro do ano. Nada disso importa quando você entende como funciona. Consegui 47 matches na primeira semana aplicando as técnicas.",
      rating: 5
    },
    {
      name: "André L., 29 anos",
      text: "Estava prestes a desistir do Tinder. O guia salvou minha vida amorosa. Aprendi a criar fotos que convertem e agora recebo likes todo dia.",
      rating: 5
    },
    {
      name: "Carlos D., 33 anos",
      text: "Tinder Proibido me mostrou que eu estava sendo shadowbanned sem saber. Segui o passo a passo e voltei pro jogo mais forte do que nunca. Vale cada centavo.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              O que os <span className="text-primary">caras estão dizendo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className="p-6 rounded-lg bg-card border border-border space-y-4 animate-fade-in hover:border-primary transition-colors"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                <p className="text-primary font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
