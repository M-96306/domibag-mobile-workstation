
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Vamos transformar os cuidados domiciliários
            <span className="text-emerald-200"> juntos?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            <strong>Domibag</strong> – Mobilidade, ergonomia e eficiência para quem cuida.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              937 148 651
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Domibag_@outlook.com
            </Button>
          </div>
          
          <div className="pt-8">
            <div className="text-emerald-100 font-medium text-lg">
              Email: Domibag_outlook.com
            </div>
          </div>
          
          <div className="pt-8">
            <div className="text-emerald-100 font-medium">
              <strong>Fundadoras:</strong> Magda Brandão & Catarina Pishchyk
            </div>
          </div>
          
          <div className="pt-4">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-emerald-100 font-medium backdrop-blur-sm">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pronto para revolucionar os cuidados de saúde?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
