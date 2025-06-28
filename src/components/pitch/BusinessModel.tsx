
import { Factory, Globe, Truck, CreditCard, GraduationCap, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const BusinessModel = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Modelo de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Negócio</span>
          </h2>
        </div>

        <Tabs defaultValue="operations" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="operations">Operações</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="operations" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Produção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Parcerias estratégicas com unidades fabris especializadas, garantindo qualidade, escalabilidade e eficiência.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Canais de Venda</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Vendas diretas via website oficial</li>
                    <li>• Parcerias com distribuidores de equipamento médico</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Distribuição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Parcerias com operadores logísticos especializados para entregas rápidas, seguras e com cobertura nacional.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-700">Modelos de Acesso Flexíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Venda Direta</h4>
                      <p className="text-gray-600">Vendas diretas das Domibags para instituições de saúde.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Leasing / Aluguer</h4>
                      <p className="text-gray-600">Modelos de leasing adaptados a serviços comunitários e necessidades temporárias.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Serviços Complementares</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Formação Especializada</h4>
                    <p className="text-gray-600">Formação incluída no pacote, assegurando a correta utilização e manutenção da Domibag.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apoio Técnico</h4>
                    <p className="text-gray-600">Suporte técnico e acompanhamento pós-venda contínuo.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Soluções Digitais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Licenciamento da aplicação de gestão de stock para utilização autónoma e integração com sistemas internos das instituições.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Fase Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Estamos em <strong>fase de pré-venda</strong>, focados na captação de interesse de potenciais clientes, parceiros estratégicos e instituições de saúde para projetos-piloto e preparação da produção inicial.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Ano 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Conclusão da prototipagem</li>
                    <li>• Processo de certificação regulamentar e validação técnica</li>
                    <li>• Estabelecimento de parcerias de fabrico e logística</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Ano 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Implementação de projetos-piloto com instituições de saúde</li>
                    <li>• Início das primeiras vendas no mercado nacional</li>
                    <li>• Consolidação da rede de distribuição e parceiros comerciais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">Ano 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Expansão das vendas a nível nacional</li>
                    <li>• Entrada estratégica no mercado europeu</li>
                    <li>• Lançamento de novas funcionalidades digitais e serviços complementares</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
