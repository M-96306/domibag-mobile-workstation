import { motion } from 'framer-motion';
import { AlertTriangle, Users, TrendingDown, Shield, Navigation, ClipboardX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: TrendingDown,
    title: "Transporte Ineficiente",
    description: "Malas pesadas, volumosas e sem compartimentação adequada.",
    status: "critical"
  },
  {
    icon: Shield,
    title: "Condições Inadequadas",
    description: "Procedimentos em superfícies improvisadas comprometem a segurança.",
    status: "critical"
  },
  {
    icon: Users,
    title: "Risco Ergonómico",
    description: "Lesões musculoesqueléticas nos profissionais de saúde.",
    status: "warning"
  },
  {
    icon: AlertTriangle,
    title: "Segurança do Doente",
    description: "Equipamentos inadequados afetam a qualidade dos cuidados.",
    status: "critical"
  },
  {
    icon: Navigation,
    title: "Mobilidade Limitada",
    description: "Escadas e pisos irregulares dificultam o acesso.",
    status: "warning"
  },
  {
    icon: ClipboardX,
    title: "Gestão de Stock",
    description: "Falta de controlo digital causa ruturas e atrasos.",
    status: "warning"
  }
];

const getStatusStyles = (status: string) => {
  return status === 'critical' 
    ? { bg: 'bg-red-500', badge: 'bg-red-50 text-red-700 border-red-200' }
    : { bg: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200' };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Problem = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-danger mb-6">
            Problema Identificado
          </span>
          <h2 className="font-black text-foreground mb-6">
            O <span className="gradient-text">Problema</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os profissionais de saúde enfrentam desafios reais e recorrentes nos cuidados domiciliários
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => {
            const styles = getStatusStyles(problem.status);
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full clinical-card hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${styles.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <problem.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-bold border mb-2 ${styles.badge}`}>
                          {problem.status === 'critical' ? 'Crítico' : 'Atenção'}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-lg">
            <AlertTriangle className="h-6 w-6" />
            Segmento altamente desatendido
          </div>
        </motion.div>
      </div>
    </section>
  );
};
