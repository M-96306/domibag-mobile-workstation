
import { User, Users, Search, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
  {
    name: "Magda Brandão",
    role: "Fundadora",
    area: "Gestão de Projeto"
  },
  {
    name: "Catarina Pishchyk", 
    role: "Cofundadora",
    area: "Gestão Financeira e Administrativa"
  }
];

const partners = [
  {
    name: "David Farinha",
    role: "Design de Produto",
    status: "active"
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
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{founder.name}</h4>
                        <p className="text-emerald-600 font-semibold">{founder.role}</p>
                        <p className="text-gray-600">{founder.area}</p>
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
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
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
