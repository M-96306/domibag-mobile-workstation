
import { Search, Handshake, Calendar, Share2, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const strategies = [
  {
    icon: Search,
    title: "Presença Digital e SEO",
    description: "Otimização do website institucional e criação de conteúdos relevantes para captar leads qualificados e gerar interesse orgânico entre instituições de saúde."
  },
  {
    icon: Handshake,
    title: "Parcerias com Ordens e Associações",
    description: "Estabelecimento de parcerias estratégicas com Ordens, Associações e Entidades Setoriais para reforçar credibilidade e aumentar visibilidade."
  },
  {
    icon: Calendar,
    title: "Demonstrações em Eventos",
    description: "Participação ativa em congressos, feiras e eventos ligados à saúde e hospitalização domiciliária, com demonstrações práticas da Domibag."
  },
  {
    icon: Share2,
    title: "Marketing de Conteúdo",
    description: "Campanhas nas redes sociais com foco em vídeos demonstrativos, casos de uso reais, testemunhos de profissionais e storytelling centrado no impacto."
  },
  {
    icon: Phone,
    title: "Prospecção Direta",
    description: "Contacto personalizado com hospitais, clínicas privadas, empresas de hospitalização domiciliária e serviços de saúde comunitária."
  }
];

export const Marketing = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Estratégia de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Marketing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Estratégia de marketing e aquisição de clientes focada em múltiplos canais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strategies.map((strategy, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 hover:bg-white transform hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <strategy.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl group-hover:text-purple-700 transition-colors">
                  {strategy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
