import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Navigation, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const productImages = {
  workstation: [
    "/lovable-uploads/c4518924-fdaf-4c51-969a-ff13133b69ef.png",
    "/lovable-uploads/2221985b-4ec6-4831-8805-19230a064567.png"
  ],
  mobility: [
    "/lovable-uploads/0ba8a44e-963e-406d-8a4f-0ffa0f4b3083.png",
    "/lovable-uploads/dff9f5d5-7925-4c94-bae9-a915080bd92f.png"
  ]
};

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
  mobility: {
    title: "Mobilidade Avançada",
    subtitle: "Vai onde você precisa",
    items: [
      "Rodas triangulares para escadas",
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

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as keyof typeof features)} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white p-2 rounded-2xl shadow-soft h-auto">
            <TabsTrigger 
              value="workstation" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl transition-all font-bold"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:inline">Estação</span>
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
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                  {productImages[key].map((img, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img 
                        src={img} 
                        alt={`${features[key].title} - ${idx + 1}`}
                        className="w-full h-auto rounded-xl"
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Content */}
                <Card className="clinical-card shadow-soft-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-black text-foreground mb-2">
                      {features[key].title}
                    </h3>
                    <p className="text-clinical-info font-semibold mb-6">
                      {features[key].subtitle}
                    </p>
                    <ul className="space-y-4">
                      {features[key].items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
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
              <span className="font-bold text-white">Num único dispositivo portátil.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
