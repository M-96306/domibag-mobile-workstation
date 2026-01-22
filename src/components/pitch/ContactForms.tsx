
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const ContactForms = () => {
  const handleFormClick = () => {
    window.open('https://eozzl1aw5dg.typeform.com/to/E7amsJea', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium badge-info mb-4">
            Interesse
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Junte-se a nós na revolução dos cuidados domiciliários
          </p>
        </div>

        <div className="max-w-md mx-auto text-center">
          <Button 
            onClick={handleFormClick}
            size="lg"
            className="bg-clinical-info hover:bg-blue-600 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-clinical hover:shadow-lg transition-all duration-300"
          >
            <Send className="mr-3 h-5 w-5" />
            Enviar Formulário
          </Button>
        </div>
      </div>
    </section>
  );
};
