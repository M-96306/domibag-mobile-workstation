
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-100 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium text-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Inovação em Cuidados Domiciliários
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Domibag
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                ™
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              A solução <strong>3-em-1</strong> que revoluciona os cuidados domiciliários: 
              <span className="text-emerald-600 font-semibold"> mobilidade</span>, 
              <span className="text-emerald-600 font-semibold"> ergonomia</span> e 
              <span className="text-emerald-600 font-semibold"> organização </span> 
              numa única ferramenta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Descobrir Mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                Certificado CE
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                Design Patenteado
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                Garantia 5 Anos
              </div>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <ImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
};
