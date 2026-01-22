import { motion } from 'framer-motion';
import { CheckCircle, Clock, Target, Rocket } from 'lucide-react';

const phases = [
  {
    status: "completed",
    icon: CheckCircle,
    title: "Concluído",
    color: "emerald",
    items: [
      "Design técnico e ideação",
      "Modelagem 3D do produto",
      "Registo de marca"
    ]
  },
  {
    status: "current",
    icon: Clock,
    title: "Em Curso",
    color: "blue",
    items: [
      "Prototipagem industrial",
      "Preparação para certificação",
      "Modelo de utilidade"
    ]
  },
  {
    status: "next",
    icon: Target,
    title: "Próximos Passos",
    color: "amber",
    items: [
      "Certificação CE",
      "Testes piloto",
      "Lançamento comercial",
      "Expansão internacional"
    ]
  }
];

const getColors = (color: string, status: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    emerald: { 
      bg: 'bg-emerald-500', 
      border: 'border-emerald-500', 
      text: 'text-emerald-600',
      dot: 'bg-emerald-500'
    },
    blue: { 
      bg: 'bg-blue-500', 
      border: 'border-blue-500', 
      text: 'text-blue-600',
      dot: 'bg-blue-500'
    },
    amber: { 
      bg: 'bg-amber-500', 
      border: 'border-amber-500', 
      text: 'text-amber-600',
      dot: 'bg-amber-500'
    }
  };
  return colors[color];
};

export const Roadmap = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-info mb-6">
            Plano de Desenvolvimento
          </span>
          <h2 className="font-black text-foreground mb-6">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da conceção ao mercado internacional
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative mb-16">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-blue-300 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            
            {/* Phase Markers */}
            <div className="flex justify-between relative z-10">
              {phases.map((phase, index) => {
                const colors = getColors(phase.color, phase.status);
                return (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center shadow-lg ${phase.status === 'current' ? 'ring-4 ring-blue-200' : ''}`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`mt-4 font-bold ${colors.text}`}>{phase.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => {
              const colors = getColors(phase.color, phase.status);
              return (
                <motion.div 
                  key={index}
                  className={`bg-white rounded-2xl border-2 ${colors.border} p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 ${
                    phase.status === 'current' ? 'ring-2 ring-blue-100 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Mobile Header */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <phase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-black ${colors.text}`}>{phase.title}</h3>
                  </div>
                  
                  {/* Desktop Title */}
                  <h3 className={`hidden lg:block text-xl font-black ${colors.text} mb-4 text-center`}>
                    {phase.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colors.dot}`}></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-foreground text-white rounded-2xl font-bold text-lg shadow-lg">
            <Rocket className="h-6 w-6" />
            Rumo ao futuro dos cuidados domiciliários
          </div>
        </motion.div>
      </div>
    </section>
  );
};
