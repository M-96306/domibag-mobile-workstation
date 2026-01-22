
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Package, Navigation, CheckCircle } from 'lucide-react';

export const Product = () => {
  const features = {
    workstation: [
      "Altura ajustável para diferentes contextos",
      "Superfícies esterilizáveis para uso clínico",
      "Tabuleiro de alumínio amovível e extensível",
      "Design ergonómico para reduzir fadiga"
    ],
    storage: [
      "Sistema modular inteligente",
      "Codificação cromática intuitiva",
      "Compartimentação organizada",
      "Integração com sistema de QR Code"
    ],
    mobility: [
      "Rodas triangulares para escadas",
      "Sistema de travagem seguro",
      "Peso otimizado para transporte",
      "Estabilidade em pisos irregulares"
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Especificações Técnicas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Produto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Funcionalidades principais que fazem da Domibag uma solução única
          </p>
        </div>

        <Tabs defaultValue="workstation" className="max-w-4xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-metallic-light p-1 rounded-lg">
            <TabsTrigger 
              value="workstation" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Estação de Trabalho</span>
              <span className="sm:hidden">Estação</span>
            </TabsTrigger>
            <TabsTrigger 
              value="storage" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Armazenamento</span>
              <span className="sm:hidden">Stock</span>
            </TabsTrigger>
            <TabsTrigger 
              value="mobility" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-clinical-info rounded-md transition-all"
            >
              <Navigation className="h-4 w-4" />
              <span className="hidden sm:inline">Mobilidade</span>
              <span className="sm:hidden">Mobilidade</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="workstation">
            <Card className="clinical-card shadow-soft">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-xl text-clinical-info flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Estação de Trabalho Adaptável
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {features.workstation.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-clinical-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="storage">
            <Card className="clinical-card shadow-soft">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-xl text-clinical-info flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Armazenamento Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {features.storage.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-clinical-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mobility">
            <Card className="clinical-card shadow-soft">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-xl text-clinical-info flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Mobilidade e Segurança
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {features.mobility.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-clinical-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Value Proposition */}
        <div className="text-center">
          <div className="bg-clinical-info rounded-xl p-8 text-white max-w-3xl mx-auto shadow-clinical">
            <h3 className="text-2xl font-bold mb-4">Proposta Única de Valor</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Combina mobilidade, ergonomia e organização num único dispositivo portátil, criado especificamente para contextos domiciliários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
