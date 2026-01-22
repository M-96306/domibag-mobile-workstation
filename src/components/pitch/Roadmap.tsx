
import { CheckCircle, Clock, Target, Rocket } from 'lucide-react';

const phases = [
  {
    status: "completed",
    icon: CheckCircle,
    title: "Concluído",
    color: "bg-clinical-success",
    borderColor: "border-clinical-success",
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
    color: "bg-clinical-info",
    borderColor: "border-clinical-info",
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
    color: "bg-clinical-warning",
    borderColor: "border-clinical-warning",
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Plano de Desenvolvimento
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O percurso da Domibag desde a conceção até ao mercado internacional
          </p>
        </div>

        {/* Timeline - Horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-clinical-success rounded-full"></div>
              <div className="absolute left-1/3 top-0 h-full w-1/6 bg-gradient-to-r from-clinical-success to-clinical-info rounded-full"></div>
            </div>
            <div className="flex justify-between relative z-10">
              {phases.map((phase, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center shadow-lg ${phase.status === 'current' ? 'ring-4 ring-blue-100' : ''}`}>
                    <phase.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border-2 ${phase.borderColor} p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 ${
                  phase.status === 'current' ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                {/* Mobile Icon */}
                <div className="lg:hidden flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center`}>
                    <phase.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                </div>
                
                {/* Desktop Title */}
                <h3 className="hidden lg:block text-xl font-bold text-foreground mb-4 text-center">{phase.title}</h3>
                
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${phase.color}`}></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-4 bg-metallic-light border border-border rounded-xl text-foreground font-semibold shadow-soft">
            <Rocket className="mr-3 h-5 w-5 text-clinical-info" />
            Rumo ao futuro dos cuidados domiciliários
          </div>
        </div>
      </div>
    </section>
  );
};
