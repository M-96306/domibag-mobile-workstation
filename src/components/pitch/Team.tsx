import { motion } from 'framer-motion';
import { User, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const founders = [
  { name: "Magda Brandão", role: "Fundadora", image: "/lovable-uploads/79cdc3f9-45ec-489a-ac6c-0d3a6c14b011.png" }
];

const advisors = [
  { name: "Helena Loureiro", role: "Advisor", image: "/lovable-uploads/82e116e7-67ba-4955-8c46-ac154b9b9187.png" },
  { name: "Rita Leal", role: "Advisor", image: "/lovable-uploads/985ebc45-cf89-443b-bd0a-caecc6c013e5.png" }
];

const partners = [
  { name: "David Farinha", role: "Design de Produto", image: "/lovable-uploads/7f0a9d4f-426f-4d76-9113-f3e59c4c2abf.png" }
];

const seeking = [
  { icon: Users, title: "Comercial/Marketing", desc: "Prospeção e comunicação" },
  { icon: DollarSign, title: "Financeiro", desc: "Gestão e investimento" }
];

export const Team = () => {
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
            Equipa
          </span>
          <h2 className="font-black text-foreground mb-6">
            A Nossa <span className="gradient-text">Equipa</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Founder */}
            <div>
              <h3 className="text-sm font-bold text-clinical-info uppercase tracking-wide mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-clinical-info" /> Fundadora
              </h3>
              {founders.map((f, idx) => (
                <Card key={idx} className="clinical-card shadow-soft">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 ring-4 ring-blue-100">
                        <img src={f.image} alt={f.name} className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
                      </div>
                      <div>
                        <h4 className="font-black text-foreground text-lg">{f.name}</h4>
                        <p className="text-clinical-info font-semibold text-sm">{f.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Advisors */}
            <div>
              <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" /> Advisors
              </h3>
              <div className="space-y-3">
                {advisors.map((a, idx) => (
                  <Card key={idx} className="clinical-card shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-emerald-100">
                          <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{a.name}</h4>
                          <p className="text-emerald-600 text-sm">{a.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Partners */}
            <div>
              <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" /> Parceiros
              </h3>
              {partners.map((p, idx) => (
                <Card key={idx} className="clinical-card shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-amber-100">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{p.name}</h4>
                        <p className="text-amber-600 text-sm">{p.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Seeking */}
            <div>
              <h3 className="text-sm font-bold text-red-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" /> À Procura
              </h3>
              <div className="space-y-3">
                {seeking.map((s, idx) => (
                  <Card key={idx} className="clinical-card shadow-soft border-2 border-dashed border-amber-300 bg-amber-50/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                          <s.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-sm">{s.title}</h4>
                          <p className="text-muted-foreground text-xs">{s.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
