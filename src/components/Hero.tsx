
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700 min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-medium text-lg backdrop-blur-sm">
              <span className="w-3 h-3 bg-emerald-300 rounded-full mr-3 animate-pulse"></span>
              Inovação em Cuidados Domiciliários
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Domibag
              <span className="text-emerald-200">™</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-100 leading-relaxed">
              A Nova Geração de Mobilidade para Cuidados Domiciliários
            </h2>
            
            <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
              Uma solução inovadora que combina mobilidade, ergonomia e organização numa única plataforma portátil, 
              especialmente desenvolvida para profissionais de saúde em contexto domiciliário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/pitch-deck">
                <Button 
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Pitch Deck
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Saber Mais
              </Button>
            </div>
          </div>
          
          <div className="animate-in slide-in-from-right duration-1000 delay-300">
            <ImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
};
