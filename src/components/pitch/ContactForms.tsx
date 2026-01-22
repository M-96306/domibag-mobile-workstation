import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageCircle } from 'lucide-react';

export const ContactForms = () => {
  const handleFormClick = () => {
    window.open('https://eozzl1aw5dg.typeform.com/to/E7amsJea', '_blank');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold badge-info mb-6">
            Contacto
          </span>
          <h2 className="font-black text-foreground mb-6">
            Entre em <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se à revolução dos cuidados domiciliários
          </p>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={handleFormClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-7 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            Enviar Formulário
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-4">
            Vamos <span className="text-cyan-400">Conversar</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            <span className="font-bold text-white">Domibag</span> – Mobilidade, ergonomia e eficiência para quem cuida.
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Domibag_outlook.com
            </Button>
          </div>
          
          <p className="text-white/50 text-sm mb-8">
            <span className="font-bold text-white/70">Fundadora:</span> Magda Brandão
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 font-medium">
            <MessageCircle className="h-5 w-5" />
            Pronto para revolucionar os cuidados de saúde?
          </div>
        </motion.div>
      </div>
    </section>
  );
};
