
import { TrendingUp, Building, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const marketData = [
  {
    icon: Building,
    title: "45 Unidades Locais de Saúde",
    description: "Com hospitalização domiciliária ativa no setor público",
    value: "45"
  },
  {
    icon: Users,
    title: "783 Equipas ECCI",
    description: "Equipas de Cuidados Continuados Integrados no país",
    value: "783"
  },
  {
    icon: Globe,
    title: "5+ Grupos Hospitalares",
    description: "CUF, Luz Saúde, Lusíadas, Trofa Saúde, HPA com serviços domiciliários",
    value: "5+"
  }
];

const clientTypes = [
  "Hospitais públicos com unidades de hospitalização domiciliária",
  "Hospitais privados com serviços de hospitalização domiciliária", 
  "Equipas de Cuidados Continuados Integrados (ECCI)",
  "Clínicas privadas que prestam cuidados domiciliários especializados"
];

const drivers = [
  "Necessidade de descongestionar hospitais",
  "Envelhecimento da população e aumento das doenças crónicas", 
  "Procura crescente por cuidados de qualidade no domicílio",
  "Valorização de equipamentos ergonómicos e tecnologicamente integrados",
  "Necessidade de gestão eficiente de inventário",
  "Expansão do setor privado da saúde em Portugal"
];

export const Market = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Análise de Mercado
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mercado e Oportunidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A hospitalização domiciliária e os cuidados de saúde no domicílio estão a crescer rapidamente
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketData.map((data, index) => (
            <Card key={index} className="clinical-card shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-clinical-info mx-auto flex items-center justify-center mb-4">
                  <data.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-clinical-info mb-2">{data.value}</div>
                <h4 className="font-semibold text-foreground mb-2">{data.title}</h4>
                <p className="text-muted-foreground text-sm">{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Growth Drivers */}
          <Card className="clinical-card shadow-soft">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-clinical-success" />
                Drivers de Crescimento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {drivers.map((driver, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-clinical-success mt-2 flex-shrink-0"></div>
                    <span className="text-foreground text-sm">{driver}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Target Clients */}
          <Card className="clinical-card shadow-soft">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-clinical-info" />
                Clientes-Alvo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {clientTypes.map((client, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-6 h-6 bg-clinical-info rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-foreground text-sm leading-relaxed">{client}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
