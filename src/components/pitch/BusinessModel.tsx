
import { Factory, Globe, Truck, CreditCard, GraduationCap, Smartphone, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const timelineData = [
  {
    year: "Ano 1",
    status: "current",
    items: [
      "Conclusão da prototipagem",
      "Processo de certificação regulamentar",
      "Estabelecimento de parcerias de fabrico"
    ]
  },
  {
    year: "Ano 2",
    status: "pending",
    items: [
      "Implementação de projetos-piloto",
      "Início das primeiras vendas nacionais",
      "Consolidação da rede de distribuição"
    ]
  },
  {
    year: "Ano 3",
    status: "pending",
    items: [
      "Expansão das vendas a nível nacional",
      "Entrada estratégica no mercado europeu",
      "Lançamento de novas funcionalidades digitais"
    ]
  }
];

export const BusinessModel = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-success mb-4">
            Modelo de Negócio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modelo de Negócio
          </h2>
        </div>

        <Tabs defaultValue="operations" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-metallic-light p-1 rounded-lg">
            <TabsTrigger 
              value="operations" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              Operações
            </TabsTrigger>
            <TabsTrigger 
              value="services"
              className="data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              Serviços
            </TabsTrigger>
            <TabsTrigger 
              value="timeline"
              className="data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="operations" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="clinical-card shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-clinical-info flex items-center justify-center mb-3">
                    <Factory className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Produção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Parcerias com unidades fabris especializadas, garantindo qualidade e escalabilidade.</p>
                </CardContent>
              </Card>

              <Card className="clinical-card shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-clinical-success flex items-center justify-center mb-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Canais de Venda</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vendas diretas via website</li>
                    <li>• Parcerias com distribuidores</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="clinical-card shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-clinical-warning flex items-center justify-center mb-3">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Distribuição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Parcerias com operadores logísticos para entregas rápidas e seguras.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="clinical-card shadow-soft border-l-4 border-l-clinical-info">
              <CardHeader>
                <CardTitle className="text-lg text-clinical-info">Modelos de Acesso Flexíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <CreditCard className="h-5 w-5 text-clinical-info mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Venda Direta</h4>
                      <p className="text-muted-foreground text-sm">Vendas diretas para instituições de saúde.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <CreditCard className="h-5 w-5 text-clinical-info mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Leasing / Aluguer</h4>
                      <p className="text-muted-foreground text-sm">Modelos adaptados a serviços comunitários.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="clinical-card shadow-soft">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-clinical-warning flex items-center justify-center mb-3">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Serviços Complementares</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm mb-1">Formação Especializada</h4>
                    <p className="text-muted-foreground text-sm">Formação incluída para correta utilização.</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm mb-1">Apoio Técnico</h4>
                    <p className="text-muted-foreground text-sm">Suporte técnico e acompanhamento pós-venda.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="clinical-card shadow-soft">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-clinical-info flex items-center justify-center mb-3">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Soluções Digitais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Licenciamento da aplicação de gestão de stock para utilização autónoma e integração com sistemas internos.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="clinical-card shadow-soft border-l-4 border-l-clinical-info bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium badge-info">Fase Atual</span>
                  <p className="text-foreground text-sm">
                    Estamos em <strong>fase de pré-venda</strong>, focados na captação de interesse e preparação da produção inicial.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="space-y-4">
              {timelineData.map((period, index) => (
                <Card 
                  key={index} 
                  className={`clinical-card shadow-soft border-l-4 ${
                    period.status === 'current' 
                      ? 'border-l-clinical-info bg-blue-50/30' 
                      : 'border-l-metallic-medium'
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        period.status === 'current' 
                          ? 'bg-clinical-info' 
                          : 'bg-metallic-medium'
                      }`}>
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className={`text-lg ${
                        period.status === 'current' ? 'text-clinical-info' : 'text-foreground'
                      }`}>
                        {period.year}
                      </CardTitle>
                      {period.status === 'current' && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium badge-info">Em curso</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 ml-11">
                      {period.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            period.status === 'current' ? 'bg-clinical-info' : 'bg-metallic-medium'
                          }`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
