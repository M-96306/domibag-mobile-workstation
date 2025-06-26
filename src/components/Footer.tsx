
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Interessado na
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400"> Domibag?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Entre em contacto connosco para saber mais sobre como a Domibag pode revolucionar os seus cuidados domiciliários.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar Agora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar Demonstração
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Informações de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="font-medium">info@domibag.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Telefone</p>
                    <p className="font-medium">+351 xxx xxx xxx</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Localização</p>
                    <p className="font-medium">Portugal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="text-2xl font-bold">
              Domibag<span className="text-emerald-400">™</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Todos os direitos reservados
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
