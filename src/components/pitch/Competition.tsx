
import { CheckCircle, X, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const competitors = [
  {
    name: "Mala Convencional",
    pros: ["Limitada a transporte manual"],
    cons: [
      "Pesada, sem compartimentação otimizada e sem ergonomia",
      "Não oferece condições adequadas para procedimentos no domicílio"
    ]
  },
  {
    name: "Carrinhos Hospitalares", 
    pros: ["Boa organização e superfície de trabalho"],
    cons: [
      "Não são portáteis",
      "Inviáveis em ambientes domiciliários ou de difícil acesso"
    ]
  },
  {
    name: "Mochilas Profissionais",
    pros: ["Maior mobilidade"],
    cons: [
      "Falta de estrutura rígida e de compartimentação adequada",
      "Não permitem criar um ambiente de trabalho seguro e ajustável"
    ]
  }
];

const advantages = [
  "Mobilidade Autónoma: Capacidade de subir escadas e atravessar pisos irregulares sem esforço",
  "Estação de Trabalho Ajustável: Cria rapidamente condições clínicas adequadas no domicílio",
  "Superfícies Esterilizáveis: Respeito pelas normas de higiene e segurança",
  "Gestão Digital de Stock: Controlo eficiente e em tempo real através de sistema digital integrado",
  "Modularidade e Personalização: Adaptação futura às diferentes especialidades e necessidades dos profissionais"
];

export const Competition = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Análise da
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Concorrência</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {competitors.map((competitor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-xl text-center">{competitor.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pontos Positivos
                  </h4>
                  <ul className="space-y-1">
                    {competitor.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-600 pl-6">• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Limitações
                  </h4>
                  <ul className="space-y-1">
                    {competitor.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-600 pl-6">• {con}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-emerald-700 mb-4">
              Vantagens Competitivas da Domibag
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/70 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
