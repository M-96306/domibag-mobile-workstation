import { motion } from 'framer-motion';
import { TrendingUp, Building, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: "45", label: "ULS", desc: "Unidades Locais de Saúde", icon: Building },
  { value: "783", label: "Equipas", desc: "ECCI em Portugal", icon: Users },
  { value: "5+", label: "Grupos", desc: "Hospitalares Privados", icon: Globe }
];

const drivers = [
  "Descongestionar hospitais",
  "Envelhecimento populacional", 
  "Procura por cuidados domiciliários",
  "Expansão do setor privado"
];

const clients = [
  "Hospitais públicos com hospitalização domiciliária",
  "Hospitais privados com serviços domiciliários", 
  "Equipas de Cuidados Continuados (ECCI)",
  "Clínicas privadas especializadas"
];

export const Market = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-info mb-6">
            Análise de Mercado
          </span>
          <h2 className="font-black text-foreground mb-6">
            Mercado e <span className="gradient-text">Oportunidade</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="clinical-card shadow-soft text-center overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <stat.icon className="w-12 h-12 text-clinical-info mx-auto mb-4" />
                <div className="text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-lg font-bold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Drivers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="clinical-card shadow-soft h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-foreground">Drivers de Crescimento</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {drivers.map((driver, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="clinical-card shadow-soft h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-clinical-info flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-foreground">Clientes-Alvo</h3>
                </div>
                <div className="space-y-3">
                  {clients.map((client, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-clinical-info flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-foreground font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
