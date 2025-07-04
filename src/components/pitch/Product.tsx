import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Settings, Package, Navigation, Shield, X } from 'lucide-react';

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
                <p className="text-gray-600">Estação de trabalho móvel com altura ajustável e superfícies esterilizáveis para uso profissional em contextos domiciliários.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="storage" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Armazenamento Inteligente e Organização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Sistema modular inteligente com compartimentação organizada e codificação cromática para gestão eficiente de materiais médicos.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mobility" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Mobilidade e Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Solução de mobilidade avançada com sistema de rodas inovador, design ergonómico e elementos de segurança integrados para uso profissional.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="management" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600 mb-4">Gestão e Conformidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Sistema de gestão integrado com tecnologia digital para controlo de stock e conformidade com normas de segurança hospitalar.</p>
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
