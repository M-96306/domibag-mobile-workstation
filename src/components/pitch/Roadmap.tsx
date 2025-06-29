
import { CheckCircle, Clock, Target, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const phases = [
  {
    status: "completed",
    icon: CheckCircle,
    title: "Concluído",
    color: "from-green-500 to-emerald-500",
    items: [
      "Ideação e desenvolvimento do design técnico",
      "Modelagem em 3D do produto",
      "Registo de marca concedido"
    ]
  },
  {
    status: "current",
    icon: Clock,
    title: "Em Curso",
    color: "from-blue-500 to-indigo-500",
    items: [
      "Prototipagem industrial funcional",
      "Planeamento e preparação para a certificação médica",
      "Registo de modelo de utilidade"
    ]
  },
  {
    status: "next",
    icon: Target,
    title: "Próximos Passos",
    color: "from-orange-500 to-red-500",
    items: [
      "Certificação CE",
      "Realização de testes piloto em instituições parceiras",
      "Lançamento oficial para comercialização",
      "Escala nacional e expansão para mercados internacionais"
    ]
  }
];

export const Roadmap = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-600">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O percurso da Domibag desde a conceção até ao mercado internacional
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                phase.status === 'current' ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'
              }`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 mx-auto`}>
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        phase.status === 'completed' ? 'bg-green-500' :
                        phase.status === 'current' ? 'bg-blue-500' : 'bg-orange-500'
                      }`}></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl text-white font-bold text-xl shadow-2xl">
            <Rocket className="mr-3 h-6 w-6" />
            Rumo ao futuro dos cuidados domiciliários
          </div>
        </div>
      </div>
    </section>
  );
};
