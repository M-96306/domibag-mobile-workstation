
import { CheckCircle, X, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const competitors = [
  {
    name: "Mala Convencional",
    pros: ["Limitada a transporte manual"],
    cons: [
      "Pesada, sem compartimentação otimizada",
      "Não oferece condições para procedimentos"
    ]
  },
  {
    name: "Carrinhos Hospitalares", 
    pros: ["Boa organização e superfície de trabalho"],
    cons: [
      "Não são portáteis",
      "Inviáveis em ambientes domiciliários"
    ]
  },
  {
    name: "Mochilas Profissionais",
    pros: ["Maior mobilidade"],
    cons: [
      "Falta de estrutura rígida",
      "Não criam ambiente de trabalho seguro"
    ]
  }
];

const advantages = [
  { title: "Mobilidade Autónoma", desc: "Capacidade de subir escadas e atravessar pisos irregulares" },
  { title: "Estação de Trabalho", desc: "Cria condições clínicas adequadas no domicílio" },
  { title: "Superfícies Esterilizáveis", desc: "Respeito pelas normas de higiene e segurança" },
  { title: "Gestão Digital de Stock", desc: "Controlo eficiente e em tempo real" },
  { title: "Modularidade", desc: "Adaptação às diferentes especialidades" }
];

export const Competition = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-warning mb-4">
            Análise Competitiva
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Análise da Concorrência
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {competitors.map((competitor, index) => (
            <Card key={index} className="clinical-card shadow-soft">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg text-center text-foreground">{competitor.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium text-clinical-success mb-2 flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    Pontos Positivos
                  </h4>
                  <ul className="space-y-1">
                    {competitor.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground pl-6">• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-clinical-danger mb-2 flex items-center gap-2 text-sm">
                    <X className="h-4 w-4" />
                    Limitações
                  </h4>
                  <ul className="space-y-1">
                    {competitor.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground pl-6">• {con}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="clinical-card shadow-soft-lg border-2 border-clinical-success bg-green-50/50">
          <CardHeader className="border-b border-green-100">
            <CardTitle className="text-xl text-center text-clinical-success">
              Vantagens Competitivas da Domibag
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-100 shadow-soft">
                  <CheckCircle className="h-5 w-5 text-clinical-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">{advantage.title}</span>
                    <span className="text-muted-foreground text-sm">{advantage.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
