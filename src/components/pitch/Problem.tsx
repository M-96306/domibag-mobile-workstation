
import { AlertTriangle, Users, TrendingDown, Shield, Navigation, ClipboardX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: TrendingDown,
    title: "Transporte ineficiente e desorganizado",
    description: "Os profissionais carregam malas pesadas, volumosas e com pouca compartimentação, dificultando o acesso rápido e seguro aos materiais necessários."
  },
  {
    icon: Shield,
    title: "Condições de trabalho inadequadas no domicílio",
    description: "Muitos procedimentos são realizados em superfícies improvisadas, comprometendo a segurança, eficácia clínica e conforto do doente."
  },
  {
    icon: Users,
    title: "Ausência de soluções ergonómicas",
    description: "O transporte e manipulação de material clínico aumentam o risco de lesões musculoesqueléticas nos profissionais, afetando saúde e desempenho."
  },
  {
    icon: AlertTriangle,
    title: "Risco direto para a segurança do doente",
    description: "O uso de equipamentos inadequados pode comprometer a qualidade dos cuidados, aumentar o risco de infeção e gerar eventos adversos."
  },
  {
    icon: Navigation,
    title: "Limitações de mobilidade em ambientes difíceis",
    description: "Escadas, pisos irregulares e obstáculos limitam a autonomia no transporte e atrasam o acesso ao doente em situações críticas."
  },
  {
    icon: ClipboardX,
    title: "Gestão ineficaz de inventário",
    description: "A falta de controlo digital conduz a ruturas de stock, atrasos no tratamento e potenciais falhas na prestação de cuidados essenciais."
  }
];

export const Problem = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"> Problema</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Os profissionais de saúde que prestam cuidados domiciliários enfrentam desafios reais e recorrentes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-orange-50 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-700 font-bold text-lg">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Este segmento continua altamente desatendido por soluções portáteis, práticas e seguras
          </div>
        </div>
      </div>
    </section>
  );
};
