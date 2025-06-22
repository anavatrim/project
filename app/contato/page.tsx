'use client';

import { useState } from 'react';
import { Scale, Phone, Mail, MapPin, ArrowLeft, Clock, MessageCircle, Send, CheckCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Contato() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    area: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        area: '',
        mensagem: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Disponível de segunda a sábado"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "contato@draanacarolina.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Av. Paulista, 1000 - Bela Vista",
      description: "São Paulo - SP, 01310-100"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 12h"
    }
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-xl shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dra. Ana Carolina</h1>
                <p className="text-sm text-gray-600">Advocacia & Consultoria</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                Serviços
              </Link>
              <Link href="/contato" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">
                Contato
              </Link>
              <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 shadow-lg">
                Consulta Gratuita
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                <Link href="/" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Serviços
                </Link>
                <Link href="/contato" className="text-gray-900 font-medium py-2 border-l-4 border-blue-900 pl-4">
                  Contato
                </Link>
                <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 w-full shadow-lg">
                  Consulta Gratuita
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content - Fullscreen */}
      <main className="h-full flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Column - Contact Form */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Link>
                
                <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
                  Entre em Contato
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Vamos Resolver
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">
                    Juntos
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Estamos prontos para ajudá-lo a resolver sua situação jurídica. 
                  Entre em contato conosco e descubra como nossa experiência pode fazer a diferença.
                </p>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-3 text-blue-900" />
                    Envie sua Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600">
                        Obrigado pelo contato. Retornaremos em breve.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input 
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            placeholder="Nome Completo" 
                            required 
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input 
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            placeholder="(11) 99999-9999" 
                            required 
                            className="h-12"
                          />
                        </div>
                      </div>

                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com" 
                        required 
                        className="h-12"
                      />

                      <select 
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Selecione a área</option>
                        <option value="civil">Direito Civil</option>
                        <option value="empresarial">Direito Empresarial</option>
                        <option value="trabalhista">Direito Trabalhista</option>
                        <option value="familia">Direito de Família</option>
                      </select>

                      <Textarea 
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Descreva seu caso..."
                        rows={4}
                        required
                        className="resize-none"
                      />

                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensagem
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-3 rounded-xl w-fit mx-auto mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{info.title}</h3>
                      <p className="text-blue-900 font-semibold mb-1 text-sm">{info.info}</p>
                      <p className="text-gray-600 text-xs">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Free Consultation Card */}
              <Card className="border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    🎯 Consulta Gratuita Disponível
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Oferecemos uma primeira consulta totalmente gratuita para avaliar seu caso 
                    e apresentar as melhores estratégias jurídicas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Duração de até 30 minutos
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Análise preliminar do caso
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Orçamento transparente
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-pink-50 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    🚨 Atendimento de Emergência
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Para situações jurídicas urgentes, oferecemos atendimento de emergência 
                    24 horas por dia, 7 dias por semana.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Telefone de Emergência:</strong> (11) 99999-9999
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-gray-200/50">
          <div className="flex items-center space-x-6">
            <Link href="/sobre" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Sobre</span>
              </div>
            </Link>
            <Link href="/servicos" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Serviços</span>
              </div>
            </Link>
            <Link href="/" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Início</span>
              </div>
            </Link>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <span className="text-xs text-blue-900">Contato</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}