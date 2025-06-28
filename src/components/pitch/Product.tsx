
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Package, Navigation, Shield } from 'lucide-react';

export const Product = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Produto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Funcionalidades principais que fazem da Domibag uma solução única
          </p>
        </div>
        
        <Tabs defaultValue="workstation" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="workstation" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Estação de Trabalho
            </TabsTrigger>
            <TabsTrigger value="storage" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Armazenamento
            </TabsTrigger>
            <TabsTrigger value="mobility" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Mobilidade
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Gestão
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="workstation" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Estação de Trabalho Adaptável</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Transformação Rápida</h4>
                    <p className="text-gray-600">Conversão instantânea da mala numa estação de trabalho com 3 alturas ajustáveis, adaptando-se às necessidades individuais do profissional.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Superfícies Esterilizáveis</h4>
                    <p className="text-gray-600">Superfícies de trabalho amovíveis em alumínio, compatíveis com ciclos de autoclave, garantindo higiene rigorosa e segurança clínica.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="storage" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Armazenamento Inteligente e Organização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Compartimentação Inteligente</h4>
                    <p className="text-gray-600">Compartimentação interior fixa inteligente e gavetas com sistema push-to-open, proporcionando acesso rápido, organizado e seguro.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sistema Modular</h4>
                    <p className="text-gray-600">Sistema desagregável que permite transportar apenas os módulos necessários, mantendo a funcionalidade da superfície de trabalho.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Codificação Cromática</h4>
                  <p className="text-gray-600">Codificação cromática intuitiva facilita a identificação rápida dos módulos, otimizando organização e reposição do material.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mobility" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Mobilidade e Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Rodas Triangulares Inovadoras</h4>
                    <p className="text-gray-600">Mobilidade autónoma capaz de ultrapassar escadas e terrenos irregulares com facilidade e sem esforço.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sistema de Travão</h4>
                    <p className="text-gray-600">Rodas frontais equipadas com sistema de travão de segurança, assegurando estabilidade em superfícies inclinadas.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Design Ergonómico</h4>
                    <p className="text-gray-600">Pega ergonómica que reduz a fadiga e facilita o transporte. Carcaça leve e resistente em ABS com 40% de aluminium flake.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Segurança Visual</h4>
                    <p className="text-gray-600">Faixas refletoras estrategicamente posicionadas, garantindo visibilidade em qualquer hora do dia.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="management" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Gestão e Conformidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Triagem de Resíduos</h4>
                    <p className="text-gray-600">Sistema integrado de triagem de resíduos do grupo III e corto-perfurantes, assegurando conformidade com normas ambientais e hospitalares.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Gestão Digital de Stock</h4>
                    <p className="text-gray-600">Gestão digital em tempo real via QR code, otimizando a reposição e evitando faltas críticas de materiais durante as visitas.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Proposta Única de Valor</h3>
            <p className="text-lg text-emerald-100">
              Combina mobilidade, ergonomia e organização num único dispositivo portátil, criado especificamente para contextos domiciliários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
