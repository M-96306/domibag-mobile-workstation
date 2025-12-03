
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Vamos transformar os cuidados domiciliários
            <span className="text-emerald-200"> juntos?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed px-4">
            <strong>Domibag</strong> – Mobilidade, ergonomia e eficiência para quem cuida.
          </p>
          
          <div className="flex justify-center items-center pt-6 sm:pt-8 px-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Domibag_outlook.com
            </Button>
          </div>
          
          <div className="pt-6 sm:pt-8 px-4">
            <div className="text-emerald-100 font-medium text-sm sm:text-base">
              <strong>Fundadora:</strong> Magda Brandão
            </div>
          </div>
          
          <div className="pt-4">
            <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-white/20 rounded-full text-emerald-100 font-medium backdrop-blur-sm text-sm sm:text-base">
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Pronto para revolucionar os cuidados de saúde?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
