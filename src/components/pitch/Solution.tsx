
import { CheckCircle, Heart, Shield, Zap, Target, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const solutions = [
  {
    icon: Heart,
    title: "Reduz o esforço físico e previne lesões",
    description: "Nos profissionais de saúde"
  },
  {
    icon: Shield,
    title: "Garante condições clínicas adequadas",
    description: "Em qualquer contexto domiciliário"
  },
  {
    icon: Zap,
    title: "Aumenta a eficiência e autonomia",
    description: "No acesso a zonas difíceis, como escadas"
  },
  {
    icon: Target,
    title: "Organiza o material de forma intuitiva",
    description: "Promovendo segurança e rapidez"
  },
  {
    icon: Smartphone,
    title: "Assegura o controlo de stock em tempo real",
    description: "Evitando falhas de material no terreno"
  }
];

export const Solution = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Solução</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A Domibag é uma solução inovadora que revoluciona os cuidados domiciliários
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 hover:bg-white/90 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed ml-9">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl text-white font-bold text-xl shadow-2xl">
            <Target className="mr-3 h-6 w-6" />
            Uma solução completa, desenvolvida para as exigências do cuidado domiciliário
          </div>
        </div>
      </div>
    </section>
  );
};
