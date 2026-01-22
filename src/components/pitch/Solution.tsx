
import { CheckCircle, Heart, Shield, Zap, Target, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const solutions = [
  {
    icon: Heart,
    title: "Reduz o esforço físico e previne lesões",
    description: "Nos profissionais de saúde",
    color: "bg-clinical-success"
  },
  {
    icon: Shield,
    title: "Garante condições clínicas adequadas",
    description: "Em qualquer contexto domiciliário",
    color: "bg-clinical-info"
  },
  {
    icon: Zap,
    title: "Aumenta a eficiência e autonomia",
    description: "No acesso a zonas difíceis, como escadas",
    color: "bg-clinical-info"
  },
  {
    icon: Target,
    title: "Organiza o material de forma intuitiva",
    description: "Promovendo segurança e rapidez",
    color: "bg-clinical-success"
  },
  {
    icon: Smartphone,
    title: "Controlo de stock em tempo real",
    description: "Evitando falhas de material no terreno",
    color: "bg-clinical-info"
  }
];

export const Solution = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-success mb-4">
            Solução Inovadora
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Solução
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Domibag é uma solução inovadora que revoluciona os cuidados domiciliários
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group clinical-card hover:shadow-soft-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-clinical-success" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-clinical-info transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-4 bg-clinical-info text-white rounded-xl font-semibold shadow-clinical">
            <Target className="mr-3 h-5 w-5" />
            Solução completa, desenvolvida para as exigências do cuidado domiciliário
          </div>
        </div>
      </div>
    </section>
  );
};
