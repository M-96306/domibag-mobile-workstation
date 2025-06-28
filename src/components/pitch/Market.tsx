
import { TrendingUp, Building, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const marketData = [
  {
    icon: Building,
    title: "45 Unidades Locais de Saúde (ULS)",
    description: "Com hospitalização domiciliária ativa no setor público"
  },
  {
    icon: Users,
    title: "783 Equipas de Cuidados Continuados",
    description: "Equipas de Cuidados Continuados Integrados (ECCI) no país"
  },
  {
    icon: Globe,
    title: "5+ Grandes Grupos Hospitalares",
    description: "CUF, Luz Saúde, Lusíadas, Trofa Saúde, HPA Saúde com serviços domiciliários"
  }
];

const clientTypes = [
  "Hospitais públicos com unidades de hospitalização domiciliária",
  "Hospitais privados com serviços de hospitalização domiciliária", 
  "Equipas de Cuidados Continuados Integrados (ECCI)",
  "Clínicas privadas que prestam cuidados domiciliários especializados"
];

export const Market = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mercado e
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Oportunidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A hospitalização domiciliária e os cuidados de saúde no domicílio estão a crescer rapidamente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Drivers de Crescimento</h3>
            <div className="space-y-4">
              {[
                "Necessidade de descongestionar hospitais",
                "Envelhecimento da população e aumento das doenças crónicas", 
                "Procura crescente por cuidados de qualidade no domicílio",
                "Valorização de equipamentos ergonómicos e tecnologicamente integrados",
                "Necessidade de gestão eficiente de inventário em contexto domiciliário",
                "Expansão do setor privado da saúde em Portugal"
              ].map((driver, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/70 rounded-xl">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{driver}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Oportunidades em Portugal</h3>
            <div className="grid gap-6">
              {marketData.map((data, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                        <data.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{data.title}</h4>
                        <p className="text-gray-600 text-sm">{data.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-white/80 hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600 text-center">Clientes-Alvo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {clientTypes.map((client, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{client}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
