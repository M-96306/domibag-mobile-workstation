import { motion } from 'framer-motion';
import { Search, Handshake, Calendar, Share2, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const strategies = [
  { icon: Search, title: "SEO & Digital", desc: "Website otimizado e conteúdos relevantes", gradient: "from-blue-500 to-cyan-500" },
  { icon: Handshake, title: "Parcerias", desc: "Ordens e associações de saúde", gradient: "from-emerald-500 to-teal-500" },
  { icon: Calendar, title: "Eventos", desc: "Congressos e feiras do setor", gradient: "from-purple-500 to-pink-500" },
  { icon: Share2, title: "Conteúdo", desc: "Vídeos e testemunhos reais", gradient: "from-amber-500 to-orange-500" },
  { icon: Phone, title: "Prospeção", desc: "Contacto direto com instituições", gradient: "from-rose-500 to-red-500" }
];

export const Marketing = () => {
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
            Go-to-Market
          </span>
          <h2 className="font-black text-foreground mb-6">
            Estratégia de <span className="gradient-text">Marketing</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="clinical-card shadow-soft h-full group">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${strategy.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <strategy.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
