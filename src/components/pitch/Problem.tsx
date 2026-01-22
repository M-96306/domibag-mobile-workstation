
import { AlertTriangle, Users, TrendingDown, Shield, Navigation, ClipboardX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: TrendingDown,
    title: "Transporte ineficiente e desorganizado",
    description: "Os profissionais carregam malas pesadas, volumosas e com pouca compartimentação.",
    status: "critical"
  },
  {
    icon: Shield,
    title: "Condições de trabalho inadequadas",
    description: "Procedimentos realizados em superfícies improvisadas, comprometendo a segurança.",
    status: "warning"
  },
  {
    icon: Users,
    title: "Ausência de soluções ergonómicas",
    description: "Risco de lesões musculoesqueléticas nos profissionais de saúde.",
    status: "critical"
  },
  {
    icon: AlertTriangle,
    title: "Risco para a segurança do doente",
    description: "Equipamentos inadequados podem comprometer a qualidade dos cuidados.",
    status: "critical"
  },
  {
    icon: Navigation,
    title: "Limitações de mobilidade",
    description: "Escadas e pisos irregulares limitam a autonomia no transporte.",
    status: "warning"
  },
  {
    icon: ClipboardX,
    title: "Gestão ineficaz de inventário",
    description: "Falta de controlo digital conduz a ruturas de stock e atrasos.",
    status: "warning"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'critical':
      return 'bg-clinical-danger';
    case 'warning':
      return 'bg-clinical-warning';
    default:
      return 'bg-clinical-info';
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'critical':
      return 'badge-danger';
    case 'warning':
      return 'badge-warning';
    default:
      return 'badge-info';
  }
};

export const Problem = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-danger mb-4">
            Problema Identificado
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Problema
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Os profissionais de saúde que prestam cuidados domiciliários enfrentam desafios reais e recorrentes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="group clinical-card hover:shadow-soft-lg transition-all duration-300 border border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${getStatusColor(problem.status)} flex items-center justify-center flex-shrink-0`}>
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusBadge(problem.status)}`}>
                        {problem.status === 'critical' ? 'Crítico' : 'Atenção'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-clinical-info transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-4 bg-red-50 border border-red-100 rounded-xl text-clinical-danger font-semibold">
            <AlertTriangle className="mr-3 h-5 w-5" />
            Segmento altamente desatendido por soluções portáteis, práticas e seguras
          </div>
        </div>
      </div>
    </section>
  );
};
