
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Design leve, resistente e ergonómico",
  "Conversão rápida em estação de trabalho ajustável",
  "Superfícies esterilizáveis e seguras",
  "Mobilidade autónoma em escadas e terrenos irregulares",
  "Armazenamento otimizado e gestão digital integrada",
  "Personalização e evolução modular futura"
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Valor
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Acrescentado</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Domibag não é apenas uma mala médica - é uma revolução completa na forma como os cuidados domiciliários são prestados.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Serviço Complementar de Formação</h3>
                <ul className="space-y-2 text-emerald-100">
                  <li>• Utilização otimizada da Domibag</li>
                  <li>• Controlo de infeção em contexto domiciliário</li>
                  <li>• Prevenção de lesões musculoesqueléticas</li>
                  <li>• Organização eficiente do material clínico</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/855ee41f-56eb-4a90-aaab-a2f8fa8c40f3.png" 
              alt="Domibag vista lateral"
              className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-green-300/20 blur-3xl transform scale-75 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
