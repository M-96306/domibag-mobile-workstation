import { User, Users, Search, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
  {
    name: "Magda Brandão",
    role: "Fundadora",
    image: "/lovable-uploads/79cdc3f9-45ec-489a-ac6c-0d3a6c14b011.png"
  },
  {
    name: "Catarina Pishchyk", 
    role: "Cofundadora",
    image: "/lovable-uploads/83421821-16c7-4d78-bce0-002cf6328c66.png"
  }
];

const advisors = [
  {
    name: "Helena Loureiro",
    role: "Advisor",
    status: "active",
    image: "/lovable-uploads/82e116e7-67ba-4955-8c46-ac154b9b9187.png"
  },
  {
    name: "Rita Leal", 
    role: "Advisor",
    status: "active",
    image: "/lovable-uploads/985ebc45-cf89-443b-bd0a-caecc6c013e5.png"
  }
];

const partners = [
  {
    name: "David Farinha",
    role: "Design de Produto",
    status: "active",
    image: "/lovable-uploads/7f0a9d4f-426f-4d76-9113-f3e59c4c2abf.png"
  }
];

const seeking = [
  {
    icon: Users,
    title: "Apoio Comercial/Marketing",
    description: "Procura-se profissional ou consultor para prospeção de mercado, contacto com instituições e desenvolvimento de estratégias iniciais de comunicação"
  },
  {
    icon: DollarSign,
    title: "Apoio Financeiro",
    description: "Procura-se apoio especializado para gestão financeira, planeamento orçamental, análise de viabilidade e preparação para captação de investimento"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Nossa
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Equipa</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fundadoras</h3>
            <div className="grid gap-6">
              {founders.map((founder, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                         {founder.image ? (
                           <img 
                             src={founder.image} 
                             alt={founder.name}
                             className="w-full h-full object-cover object-center"
                             style={{
                                objectPosition: "center 20%"
                              }}
                           />
                         ) : (
                           <User className="h-8 w-8 text-white" />
                         )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{founder.name}</h4>
                        <p className="text-emerald-600 font-semibold">{founder.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center mt-8">Advisors</h3>
            <div className="grid gap-6">
              {advisors.map((advisor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        {advisor.image ? (
                          <img 
                            src={advisor.image} 
                            alt={advisor.name}
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          <User className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{advisor.name}</h4>
                        <p className="text-purple-600 font-semibold">{advisor.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Parceiros Externos</h3>
            <div className="grid gap-6 mb-8">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                         {partner.image ? (
                           <img 
                             src={partner.image} 
                             alt={partner.name}
                             className="w-full h-full object-cover object-center"
                              style={{
                                objectPosition: "center 20%"
                              }}
                           />
                         ) : (
                           <User className="h-8 w-8 text-white" />
                         )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{partner.name}</h4>
                        <p className="text-blue-600 font-semibold">{partner.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-900 text-center">À Procura de Parceiros</h4>
              {seeking.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-dashed border-orange-300 bg-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
