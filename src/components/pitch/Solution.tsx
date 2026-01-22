import { motion } from 'framer-motion';
import { CheckCircle, Heart, Shield, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const solutions = [
  {
    icon: Heart,
    title: "Prevenção de Lesões",
    description: "Reduz esforço físico nos profissionais de saúde",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Condições Clínicas",
    description: "Garante ambiente adequado em qualquer domicílio",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Eficiência Máxima",
    description: "Acesso fácil a zonas difíceis como escadas",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Organização Intuitiva",
    description: "Material organizado para segurança e rapidez",
    gradient: "from-emerald-500 to-teal-500"
  }
];

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

export const Solution = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-success mb-6">
            Solução Inovadora
          </span>
          <h2 className="font-black text-foreground mb-6">
            A <span className="gradient-text">Solução</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Domibag revoluciona os cuidados domiciliários com tecnologia e design
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full clinical-card hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <solution.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Resolvido</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg">
            <Target className="h-6 w-6" />
            Solução completa para cuidado domiciliário
          </div>
        </motion.div>
      </div>
    </section>
  );
};
