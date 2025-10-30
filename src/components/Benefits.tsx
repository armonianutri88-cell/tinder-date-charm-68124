import { Check } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Hackear o algoritmo do Tinder em menos de 30 minutos",
    "Multiplicar seus matches por 10x sem gastar nada",
    "Criar fotos que fazem o algoritmo te priorizar",
    "Escrever uma bio que converte visualizações em matches",
    "Descobrir os horários exatos para dar swipe e maximizar resultados",
    "Técnicas de conversa que levam do match ao encontro",
    "Evitar os erros que te fazem ser shadowbanned",
    "Estratégias para se destacar em cidades grandes e pequenas"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              O que você vai <span className="text-primary">aprender</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para dominar o Tinder de vez
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
