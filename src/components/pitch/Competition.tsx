import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const competitors = [
  {
    name: "Mala Convencional",
    cons: ["Pesada", "Sem compartimentação", "Sem ergonomia"]
  },
  {
    name: "Carrinhos Hospitalares", 
    cons: ["Não portáteis", "Inviáveis em domicílio", "Sem mobilidade"]
  },
  {
    name: "Mochilas",
    cons: ["Sem estrutura rígida", "Sem superfície de trabalho", "Desorganização"]
  }
];

const advantages = [
  "Sobe escadas autonomamente",
  "Estação de trabalho ajustável",
  "Superfícies esterilizáveis",
  "Gestão digital de stock",
  "Sistema modular adaptável"
];

export const Competition = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-warning mb-6">
            Análise Competitiva
          </span>
          <h2 className="font-black text-foreground mb-6">
            <span className="gradient-text">Concorrência</span>
          </h2>
        </motion.div>

        {/* Competitors */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {competitors.map((comp, index) => (
            <Card key={index} className="clinical-card shadow-soft border-red-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 text-center">{comp.name}</h3>
                <div className="space-y-2">
                  {comp.cons.map((con, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-red-600">
                      <X className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">{con}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Domibag Advantages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className="clinical-card shadow-soft-lg border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black text-emerald-600 mb-6 text-center">
                Vantagens da Domibag
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {advantages.map((adv, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-emerald-100 shadow-soft"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-bold text-sm">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
