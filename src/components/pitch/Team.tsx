
import { User, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const founders = [
  {
    name: "Magda Brandão",
    role: "Fundadora",
    image: "/lovable-uploads/79cdc3f9-45ec-489a-ac6c-0d3a6c14b011.png"
  }
];

const advisors = [
  {
    name: "Helena Loureiro",
    role: "Advisor",
    image: "/lovable-uploads/82e116e7-67ba-4955-8c46-ac154b9b9187.png"
  },
  {
    name: "Rita Leal", 
    role: "Advisor",
    image: "/lovable-uploads/985ebc45-cf89-443b-bd0a-caecc6c013e5.png"
  }
];

const partners = [
  {
    name: "David Farinha",
    role: "Design de Produto",
    image: "/lovable-uploads/7f0a9d4f-426f-4d76-9113-f3e59c4c2abf.png"
  }
];

const seeking = [
  {
    icon: Users,
    title: "Apoio Comercial/Marketing",
    description: "Profissional para prospeção de mercado e estratégias de comunicação"
  },
  {
    icon: DollarSign,
    title: "Apoio Financeiro",
    description: "Apoio para gestão financeira e preparação para captação de investimento"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Equipa
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Nossa Equipa
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Founders & Advisors */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founders */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-clinical-info"></div>
                Fundadora
              </h3>
              <div className="space-y-4">
                {founders.map((founder, index) => (
                  <Card key={index} className="clinical-card shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-metallic-light flex-shrink-0 ring-2 ring-clinical-info">
                          {founder.image ? (
                            <img 
                              src={founder.image} 
                              alt={founder.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "center 20%" }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="h-7 w-7 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{founder.name}</h4>
                          <p className="text-clinical-info text-sm font-medium">{founder.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4 mt-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-clinical-success"></div>
                Advisors
              </h3>
              <div className="space-y-4">
                {advisors.map((advisor, index) => (
                  <Card key={index} className="clinical-card shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-metallic-light flex-shrink-0 ring-2 ring-clinical-success">
                          {advisor.image ? (
                            <img 
                              src={advisor.image} 
                              alt={advisor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{advisor.name}</h4>
                          <p className="text-clinical-success text-sm">{advisor.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partners & Seeking */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-clinical-warning"></div>
                Parceiros Externos
              </h3>
              <div className="space-y-4 mb-8">
                {partners.map((partner, index) => (
                  <Card key={index} className="clinical-card shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-metallic-light flex-shrink-0 ring-2 ring-clinical-warning">
                          {partner.image ? (
                            <img 
                              src={partner.image} 
                              alt={partner.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "center 20%" }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{partner.name}</h4>
                          <p className="text-clinical-warning text-sm">{partner.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-clinical-danger"></div>
                À Procura de Parceiros
              </h3>
              <div className="space-y-4">
                {seeking.map((item, index) => (
                  <Card key={index} className="clinical-card shadow-soft border-2 border-dashed border-clinical-warning bg-yellow-50/30">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-clinical-warning flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
