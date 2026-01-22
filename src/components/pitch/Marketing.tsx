
import { Search, Handshake, Calendar, Share2, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const strategies = [
  {
    icon: Search,
    title: "Presença Digital e SEO",
    description: "Otimização do website e criação de conteúdos para captar leads qualificados."
  },
  {
    icon: Handshake,
    title: "Parcerias Estratégicas",
    description: "Parcerias com Ordens, Associações e Entidades Setoriais para credibilidade."
  },
  {
    icon: Calendar,
    title: "Demonstrações em Eventos",
    description: "Participação em congressos e feiras com demonstrações práticas."
  },
  {
    icon: Share2,
    title: "Marketing de Conteúdo",
    description: "Campanhas com vídeos demonstrativos e testemunhos de profissionais."
  },
  {
    icon: Phone,
    title: "Prospecção Direta",
    description: "Contacto personalizado com hospitais, clínicas e serviços de saúde."
  }
];

export const Marketing = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Go-to-Market
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Estratégia de Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estratégia de marketing e aquisição de clientes focada em múltiplos canais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strategies.map((strategy, index) => (
            <Card 
              key={index} 
              className="clinical-card shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-clinical-info flex items-center justify-center mb-4">
                  <strategy.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {strategy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
