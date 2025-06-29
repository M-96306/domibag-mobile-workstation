import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Package, Navigation, Shield } from 'lucide-react';

export const Product = () => {
  const generalImages = [
    {
      src: "/lovable-uploads/1b712fde-e281-459c-8231-b6417be7e3f3.png",
      alt: "Domibag - Vista geral frontal"
    },
    {
      src: "/lovable-uploads/02f2aac6-0686-41bf-840a-1525d17c3c28.png",
      alt: "Domibag - Vista geral lateral"
    }
  ];

  const characteristicImages = [
    {
      src: "/lovable-uploads/68566bc6-4094-49e5-bb0c-807389bf853f.png",
      title: "Componente do Sistema Modular"
    },
    {
      src: "/lovable-uploads/dff9f5d5-7925-4c94-bae9-a915080bd92f.png",
      title: "Pega Ergonómica"
    },
    {
      src: "/lovable-uploads/c4518924-fdaf-4c51-969a-ff13133b69ef.png",
      title: "Tabuleiro de Alumínio Amovível"
    },
    {
      src: "/lovable-uploads/2221985b-4ec6-4831-8805-19230a064567.png",
      title: "Tabuleiro de Alumínio Extensível"
    },
    {
      src: "/lovable-uploads/0ba8a44e-963e-406d-8a4f-0ffa0f4b3083.png",
      title: "Rodas Triangulares"
    }
  ];

  const systemImages = [
    {
      src: "/lovable-uploads/7ade144f-a467-42e9-8fae-36de94d714d6.png",
      alt: "Vista de Domibag com o sistema modular - Configurações múltiplas"
    }
  ];

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

        {/* General Images */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Vista Geral</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {generalImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="workstation" className="max-w-6xl mx-auto mb-16">
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

        {/* Características da Domibag */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Características da
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Domibag</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {characteristicImages.map((image, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* System Images */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">Sistema Modular</h4>
            <div className="max-w-4xl mx-auto">
              {systemImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
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
