
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Specifications = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especificações
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Técnicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detalhes técnicos que demonstram a excelência e inovação da Domibag
          </p>
        </div>
        
        <Tabs defaultValue="materials" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="materials">Materiais</TabsTrigger>
            <TabsTrigger value="dimensions">Dimensões</TabsTrigger>
            <TabsTrigger value="mobility">Mobilidade</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
          </TabsList>
          
          <TabsContent value="materials" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Carcaça Principal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ABS com 40% de alumínio</li>
                    <li>• Resistente a impactos</li>
                    <li>• Resistente a variações térmicas</li>
                    <li>• Acabamento antimicrobiano</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Superfície de Trabalho</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Alumínio anodizado</li>
                    <li>• Compatível com autoclave</li>
                    <li>• Superfície esterilizável</li>
                    <li>• Bordas arredondadas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="dimensions" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Modo Transporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Altura: 95 cm</li>
                    <li>• Largura: 45 cm</li>
                    <li>• Profundidade: 65 cm</li>
                    <li>• Peso: 8.5 kg</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Estação de Trabalho</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Altura ajustável: 75-95 cm</li>
                    <li>• Superfície: 45x35 cm</li>
                    <li>• 3 níveis de altura</li>
                    <li>• Estabilidade certificada</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Capacidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Volume total: 85 litros</li>
                    <li>• Carga máxima: 25 kg</li>
                    <li>• 4 gavetas organizadoras</li>
                    <li>• Compartimento resíduos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="mobility" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Sistema de Rodas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rodas triangulares patenteadas</li>
                    <li>• Supera escadas até 20 cm</li>
                    <li>• Rolamento silencioso</li>
                    <li>• Travão de segurança</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Ergonomia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pega anatómica ajustável</li>
                    <li>• Sistema de amortecimento</li>
                    <li>• Distribuição equilibrada de peso</li>
                    <li>• Certificação ergonómica</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="digital" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Conectividade</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• QR Code integrado no chassis</li>
                    <li>• Aplicação móvel dedicada</li>
                    <li>• Sincronização em tempo real</li>
                    <li>• Histórico de utilização</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Gestão de Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Inventário automatizado</li>
                    <li>• Alertas de baixo stock</li>
                    <li>• Relatórios de consumo</li>
                    <li>• Integração com sistemas hospitalares</li>
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
