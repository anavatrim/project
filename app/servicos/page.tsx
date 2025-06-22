'use client';

import { Scale, Phone, ArrowLeft, FileText, Building, Shield, User, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';

export default function Servicos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Direito Civil",
      description: "Soluções completas em direito civil com foco em resultados eficazes",
      features: ["Contratos e Negociações", "Responsabilidade Civil", "Direitos Reais", "Sucessões e Inventários"],
      price: "A partir de R$ 500",
      highlight: false
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Direito Empresarial",
      description: "Consultoria jurídica especializada para empresas de todos os portes",
      features: ["Consultoria Empresarial", "Contratos Comerciais", "Fusões e Aquisições", "Compliance Corporativo"],
      price: "A partir de R$ 800",
      highlight: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Direito Trabalhista",
      description: "Defesa especializada em questões trabalhistas e previdenciárias",
      features: ["Rescisões Contratuais", "Processos Trabalhistas", "Consultoria Preventiva", "Acordos Trabalhistas"],
      price: "A partir de R$ 600",
      highlight: false
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Direito de Família",
      description: "Atendimento sensível e profissional em questões familiares",
      features: ["Divórcio e Separação", "Guarda de Filhos", "Pensão Alimentícia", "Partilha de Bens"],
      price: "A partir de R$ 700",
      highlight: false
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
              <Link href="/servicos" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">
                Serviços
              </Link>
              <Link href="/contato" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                Contato
              </Link>
              <Link href="/contato">
                <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 shadow-lg">
                  Consulta Gratuita
                </Button>
              </Link>
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
                <Link href="/servicos" className="text-gray-900 font-medium py-2 border-l-4 border-blue-900 pl-4">
                  Serviços
                </Link>
                <Link href="/contato" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Contato
                </Link>
                <Link href="/contato" className="pt-2">
                  <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 w-full shadow-lg">
                    Consulta Gratuita
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content - Fullscreen */}
      <main className="h-full flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col h-full">
            {/* Header Section */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
              
              <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
                Áreas de Atuação
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Serviços
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">
                  Jurídicos
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Oferecemos soluções jurídicas completas e personalizadas em diversas áreas do direito, 
                sempre com foco na excelência técnica e nos melhores resultados.
              </p>
            </div>

            {/* Services Grid */}
            <div className="flex-1 flex items-center">
              <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full ${service.highlight ? 'ring-2 ring-blue-900' : ''}`}>
                    {service.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-3 py-1 text-xs">
                          Mais Procurado
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className={`${service.highlight ? 'bg-gradient-to-br from-amber-500 to-amber-600' : 'bg-gradient-to-br from-blue-900 to-blue-700'} text-white p-3 rounded-xl w-fit mx-auto mb-3`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-900 mb-3">{service.price}</div>
                          <Link href="/contato">
                            <Button size="sm" className={`w-full ${service.highlight ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700' : 'bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600'}`}>
                              Solicitar Orçamento
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Consulta Gratuita
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Conhecer a Advogada
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
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
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <span className="text-xs text-blue-900">Serviços</span>
            </div>
            <Link href="/" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Início</span>
              </div>
            </Link>
            <Link href="/contato" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Contato</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}