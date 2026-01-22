import { motion } from 'framer-motion';
import { Factory, Globe, Truck, CreditCard, GraduationCap, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const operations = [
  { icon: Factory, title: "Produção", desc: "Parcerias com fábricas especializadas", color: "bg-blue-500" },
  { icon: Globe, title: "Vendas", desc: "Website + Distribuidores médicos", color: "bg-emerald-500" },
  { icon: Truck, title: "Logística", desc: "Entregas nacionais rápidas", color: "bg-amber-500" }
];

const timeline = [
  { year: "Ano 1", status: "current", items: ["Prototipagem", "Certificação", "Parcerias"] },
  { year: "Ano 2", status: "next", items: ["Pilotos", "Vendas nacionais", "Distribuição"] },
  { year: "Ano 3", status: "next", items: ["Expansão", "Europa", "Funcionalidades digitais"] }
];

export const BusinessModel = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-success mb-6">
            Modelo de Negócio
          </span>
          <h2 className="font-black text-foreground mb-6">
            Modelo de <span className="gradient-text">Negócio</span>
          </h2>
        </motion.div>

        <Tabs defaultValue="operations" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-white p-2 rounded-2xl shadow-soft h-auto">
            <TabsTrigger value="operations" className="py-3 font-bold data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl">
              Operações
            </TabsTrigger>
            <TabsTrigger value="services" className="py-3 font-bold data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl">
              Serviços
            </TabsTrigger>
            <TabsTrigger value="timeline" className="py-3 font-bold data-[state=active]:bg-clinical-info data-[state=active]:text-white rounded-xl">
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="operations">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {operations.map((op, idx) => (
                  <Card key={idx} className="clinical-card shadow-soft">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 ${op.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <op.icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{op.title}</h4>
                      <p className="text-sm text-muted-foreground">{op.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="clinical-card shadow-soft border-l-4 border-l-clinical-info">
                <CardContent className="p-6">
                  <h4 className="font-bold text-clinical-info mb-4">Modelos de Acesso</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                      <CreditCard className="h-5 w-5 text-clinical-info" />
                      <div>
                        <p className="font-bold text-foreground text-sm">Venda Direta</p>
                        <p className="text-muted-foreground text-xs">Instituições de saúde</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                      <CreditCard className="h-5 w-5 text-clinical-info" />
                      <div>
                        <p className="font-bold text-foreground text-sm">Leasing</p>
                        <p className="text-muted-foreground text-xs">Serviços comunitários</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="services">
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="clinical-card shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Formação</h4>
                  <p className="text-sm text-muted-foreground">Formação especializada incluída no pacote</p>
                </CardContent>
              </Card>
              
              <Card className="clinical-card shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-clinical-info rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">App de Gestão</h4>
                  <p className="text-sm text-muted-foreground">Licenciamento da aplicação de stock</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="timeline">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {timeline.map((t, idx) => (
                <Card key={idx} className={`clinical-card shadow-soft border-l-4 ${t.status === 'current' ? 'border-l-clinical-info bg-blue-50/30' : 'border-l-slate-300'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${t.status === 'current' ? 'bg-clinical-info' : 'bg-slate-300'} flex items-center justify-center`}>
                        <span className="text-white font-black">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-bold ${t.status === 'current' ? 'text-clinical-info' : 'text-foreground'}`}>{t.year}</h4>
                          {t.status === 'current' && <span className="text-xs font-bold badge-info px-2 py-0.5 rounded">Em curso</span>}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {t.items.map((item, i) => (
                            <span key={i} className="text-xs bg-white px-3 py-1 rounded-full text-muted-foreground border">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
