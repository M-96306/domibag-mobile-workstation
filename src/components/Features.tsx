
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Settings, 
  Smartphone, 
  Shield, 
  Zap, 
  Layers,
  Target,
  Wrench
} from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Transporte Ergonómico",
    description: "Carcaça ultra-resistente em ABS com 40% alumínio e pega anatómica com amortecimento",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Settings,
    title: "Estação Ajustável",
    description: "Conversão instantânea de mala para mesa com altura regulável em três níveis",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Target,
    title: "Mobilidade Todo-o-Terreno",
    description: "Rodas triangulares inovadoras que superam escadas e obstáculos sem esforço",
    color: "from-emerald-600 to-green-600"
  },
  {
    icon: Layers,
    title: "Armazenamento Inteligente",
    description: "Organização fixa e intuitiva com gavetas push-to-open e gestão de resíduos integrada",
    color: "from-green-600 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Integração Digital",
    description: "QR Code no chassis para gestão de stock em tempo real via aplicação móvel",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Wrench,
    title: "Modularidade Futura",
    description: "Módulos desagregáveis e codificação cromática para máxima personalização",
    color: "from-green-500 to-emerald-600"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Características
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Principais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seis pilares de inovação que fazem da Domibag a solução definitiva para profissionais de saúde em contexto domiciliário
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-emerald-50 hover:to-green-50 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
