import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const productImages = [
  "/lovable-uploads/1b712fde-e281-459c-8231-b6417be7e3f3.png",
  "/lovable-uploads/02f2aac6-0686-41bf-840a-1525d17c3c28.png",
  "/lovable-uploads/7ade144f-a467-42e9-8fae-36de94d714d6.png"
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 industrial-texture"></div>
      
      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-semibold text-sm">Inovação em Cuidados Domiciliários</span>
            </motion.div>
            
            <motion.h1 
              className="font-black tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Domi</span>
              <span className="gradient-text">bag</span>
              <span className="text-blue-500">™</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/80 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A Nova Geração de 
              <span className="block text-clinical-info">Mobilidade Clínica</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Mobilidade, ergonomia e organização inteligente numa única plataforma portátil. 
              Desenvolvida para profissionais de saúde que fazem a diferença.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={scrollToNextSection}
                size="lg"
                className="bg-clinical-info hover:bg-blue-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Descobrir
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Product Image Showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-6 shadow-soft-lg border border-slate-100">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                {productImages.map((img, idx) => (
                  <motion.img
                    key={img}
                    src={img}
                    alt={`Domibag - Vista ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentImage ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
              
              {/* Image Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImage 
                        ? 'w-8 bg-clinical-info' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Feature Cards */}
            <motion.div 
              className="absolute -left-4 top-1/4 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Ergonómico</p>
                  <p className="text-muted-foreground text-xs">Menos esforço físico</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -right-4 bottom-1/3 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-clinical-info flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Stock Digital</p>
                  <p className="text-muted-foreground text-xs">Gestão em tempo real</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
