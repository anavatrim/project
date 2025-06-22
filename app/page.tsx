'use client';

import { useState } from 'react';
import { Scale, Phone, Mail, ArrowRight, Star, Users, Award, Clock, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Casos Resolvidos" },
    { icon: <Star className="w-6 h-6" />, number: "98%", label: "Taxa de Sucesso" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Anos de Experiência" },
    { icon: <Clock className="w-6 h-6" />, number: "24h", label: "Suporte Disponível" }
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
              <Link href="/" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">
                Início
              </Link>
              <Link href="/sobre" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
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
                <Link href="/" className="text-gray-900 font-medium py-2 border-l-4 border-blue-900 pl-4">
                  Início
                </Link>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
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
      <main className="h-full flex items-center justify-center pt-20 pb-8">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-900 hover:bg-blue-200 text-sm px-4 py-2 shadow-md">
                  ⭐ Mais de 15 anos de experiência jurídica
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Sua Defesa
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">
                    Jurídica
                  </span>
                  <span className="block">Especializada</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-lg">
                  Oferecemos soluções jurídicas personalizadas com excelência, ética e comprometimento total. 
                  Seu direito é nossa prioridade absoluta.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Consulta Gratuita
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Nossos Serviços
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Navigation Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/sobre">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors px-4 py-2 text-sm">
                    Sobre a Advogada
                  </Badge>
                </Link>
                <Link href="/servicos">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors px-4 py-2 text-sm">
                    Áreas de Atuação
                  </Badge>
                </Link>
                <Link href="/contato">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors px-4 py-2 text-sm">
                    Entre em Contato
                  </Badge>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats & Info */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Main Info Card */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-2xl border-0 transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Scale className="w-10 h-10" />
                      <span className="text-2xl font-semibold">Advocacia de Excelência</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-lg">Atendimento personalizado e humanizado</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-lg">Estratégias jurídicas inovadoras</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-lg">Transparência total nos processos</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-lg">Disponibilidade para emergências</span>
                      </div>
                    </div>

                    <div className="bg-blue-800/50 rounded-2xl p-6">
                      <p className="text-lg italic leading-relaxed">
                        "O direito é a arte do bem e do equitativo. Nossa missão é garantir 
                        que a justiça seja acessível a todos os nossos clientes."
                      </p>
                      <p className="text-sm mt-3 text-blue-200 font-medium">- Dra. Ana Carolina Santos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-3 rounded-xl w-fit mx-auto mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
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
            <Link href="/servicos" className="group">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-900 transition-colors"></div>
                <span className="text-xs text-gray-600 group-hover:text-blue-900 transition-colors">Serviços</span>
              </div>
            </Link>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <span className="text-xs text-blue-900">Início</span>
            </div>
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