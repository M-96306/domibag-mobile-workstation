
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const ContactForms = () => {
  const handleFormClick = () => {
    window.open('https://eozzl1aw5dg.typeform.com/to/E7amsJea', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Junte-se a nós na revolução dos cuidados domiciliários
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Button 
            onClick={handleFormClick}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Send className="mr-3 h-6 w-6" />
            Enviar Formulário
          </Button>
        </div>
      </div>
    </section>
  );
};
