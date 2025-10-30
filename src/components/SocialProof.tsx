export const SocialProof = () => {
  const stats = [
    { number: "10.000+", label: "Homens Transformados" },
    { number: "70%", label: "Não São Modelos" },
    { number: "15x", label: "Média de Aumento de Matches" },
    { number: "30min", label: "Para Ver Resultados" }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="text-center space-y-2 animate-fade-in p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary transition-colors"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-primary">{stat.number}</p>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
