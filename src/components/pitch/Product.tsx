import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Navigation, CheckCircle, Layers } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const features = {
  workstation: {
    title: "Estação de Trabalho",
    subtitle: "Superfície clínica adaptável",
    items: [
      "Altura ajustável para diferentes contextos",
      "Superfícies esterilizáveis de alumínio",
      "Tabuleiro amovível e extensível",
      "Design ergonómico anti-fadiga"
    ]
  },
  modular: {
    title: "Sistema Modular",
    subtitle: "Flexibilidade total",
    items: [
      "Separa-se em módulos independentes",
      "Transporte seletivo conforme necessidade",
      "Personalização por especialidade",
      "Montagem e desmontagem rápida"
    ]
  },
  mobility: {
    title: "Mobilidade Avançada",
    subtitle: "Vai onde você precisa",
    items: [
      "Auxilia a subir escadas com as rodas triangulares posteriores",
      "Sistema de travagem seguro",
      "Peso otimizado (< 8kg)",
      "Estabilidade garantida"
    ]
  }
};

export const Product = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof features>("workstation");

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-info mb-6">
            Especificações
          </span>
          <h2 className="font-black text-foreground mb-6">
            O <span className="gradient-text">Produto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Funcionalidades que fazem da Domibag uma solução única
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as keyof typeof features)} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white p-2 rounded-2xl shadow-soft h-auto">
            <TabsTrigger 
              value="workstation" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl transition-all font-bold"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:inline">Estação</span>
            </TabsTrigger>
            <TabsTrigger 
              value="modular" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl transition-all font-bold"
            >
              <Layers className="h-5 w-5" />
              <span className="hidden sm:inline">Modular</span>
            </TabsTrigger>
            <TabsTrigger 
              value="mobility" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl transition-all font-bold"
            >
              <Navigation className="h-5 w-5" />
              <span className="hidden sm:inline">Mobilidade</span>
            </TabsTrigger>
          </TabsList>
          
          {(Object.keys(features) as Array<keyof typeof features>).map((key) => (
            <TabsContent key={key} value={key}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="clinical-card shadow-soft-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-black text-foreground mb-2 text-center">
                      {features[key].title}
                    </h3>
                    <p className="text-clinical-info font-semibold mb-8 text-center">
                      {features[key].subtitle}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {features[key].items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Value Proposition */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-10 text-white max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-black mb-4">Proposta Única de Valor</h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Mobilidade + Ergonomia + Organização Inteligente<br/>
              <span className="font-bold text-white">Num único dispositivo portátil e modular.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
