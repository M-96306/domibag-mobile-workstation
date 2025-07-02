
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, ShoppingCart, Send } from 'lucide-react';

export const ContactForms = () => {
  const [investorForm, setInvestorForm] = useState({
    subject: '',
    message: '',
    email: ''
  });

  const [clientForm, setClientForm] = useState({
    subject: '',
    message: '',
    email: ''
  });

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Domibag_outlook.com?subject=${encodeURIComponent(investorForm.subject)}&body=${encodeURIComponent(`Email: ${investorForm.email}\n\nMensagem:\n${investorForm.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Domibag_outlook.com?subject=${encodeURIComponent(clientForm.subject)}&body=${encodeURIComponent(`Email: ${clientForm.email}\n\nMensagem:\n${clientForm.message}`)}`;
    window.location.href = mailtoLink;
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

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="investor" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="investor" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Para Investidores
              </TabsTrigger>
              <TabsTrigger value="client" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Para Clientes
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="investor">
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    Formulário para Investidores
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleInvestorSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="investor-email">Email *</Label>
                      <Input
                        id="investor-email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        value={investorForm.email}
                        onChange={(e) => setInvestorForm({...investorForm, email: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="investor-subject">Assunto *</Label>
                      <Input
                        id="investor-subject"
                        placeholder="Interesse em investimento na Domibag"
                        value={investorForm.subject}
                        onChange={(e) => setInvestorForm({...investorForm, subject: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="investor-message">Mensagem *</Label>
                      <Textarea
                        id="investor-message"
                        placeholder="Descreva o seu interesse em investir na Domibag..."
                        value={investorForm.message}
                        onChange={(e) => setInvestorForm({...investorForm, message: e.target.value})}
                        required
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Formulário
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="client">
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <ShoppingCart className="h-6 w-6" />
                    Formulário para Clientes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleClientSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="client-email">Email *</Label>
                      <Input
                        id="client-email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({...clientForm, email: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-subject">Assunto *</Label>
                      <Input
                        id="client-subject"
                        placeholder="Interesse em adquirir a Domibag"
                        value={clientForm.subject}
                        onChange={(e) => setClientForm({...clientForm, subject: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-message">Mensagem *</Label>
                      <Textarea
                        id="client-message"
                        placeholder="Descreva as suas necessidades e interesse na Domibag..."
                        value={clientForm.message}
                        onChange={(e) => setClientForm({...clientForm, message: e.target.value})}
                        required
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Formulário
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
