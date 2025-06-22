'use client';

import { Scale, Phone, Mail, ArrowLeft, Star, Award, BookOpen, Users, Shield, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const qualifications = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Graduação em Direito",
      institution: "Universidade de São Paulo (USP)",
      year: "2008"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Especialização em Direito Civil",
      institution: "Fundação Getúlio Vargas (FGV)",
      year: "2010"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Especialização em Direito Empresarial",
      institution: "Fundação Getúlio Vargas (FGV)",
      year: "2012"
    }
  ];

  const achievements = [
    { icon: <Star className="w-6 h-6" />, title: "Prêmio Excelência OAB-SP", year: "2023" },
    { icon: <Users className="w-6 h-6" />, title: "500+ Casos Resolvidos", year: "2024" },
    { icon: <Award className="w-6 h-6" />, title: "98% Taxa de Sucesso", year: "2024" }
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
              <Link href="/sobre" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">
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
                <Link href="/" className="text-gray-600 hover:text-blue-900 font-medium py-2 pl-4 transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="text-gray-900 font-medium py-2 border-l-4 border-blue-900 pl-4">
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
      <main className="h-full flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Column - Profile & Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Link>
                
                <Badge className="mb-6 bg-blue-100 text-blue-900 hover:bg-blue-200">
                  Sobre a Profissional
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dra. Ana Carolina
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">
                    Santos
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6 max-w-lg">
                  Advogada especialista com mais de 15 anos de experiência, dedicada à excelência jurídica 
                  e ao atendimento humanizado. Comprometida em defender os direitos de seus clientes com 
                  ética, transparência e resultados eficazes.
                </p>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Formação Acadêmica</h3>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white/70 rounded-lg backdrop-blur-sm">
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-2 rounded-lg">
                        {qual.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{qual.title}</p>
                        <p className="text-sm text-gray-600">{qual.institution} - {qual.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servicos">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Ver Serviços
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Entrar em Contato
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Mission & Achievements */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Mission Card */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-2xl border-0 transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Missão & Valores</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Missão</h4>
                        <p className="text-blue-100">
                          Garantir que a justiça seja acessível a todos, oferecendo soluções jurídicas 
                          personalizadas com excelência técnica e atendimento humanizado.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Valores</h4>
                        <ul className="space-y-2 text-blue-100">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            Ética e transparência
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            Excelência técnica
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            Atendimento humanizado
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            Comprometimento com resultados
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Conquistas & Reconhecimentos</h3>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-3 rounded-xl">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{achievement.title}</h4>
                            <p className="text-amber-600 font-semibold">{achievement.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-gray-200/50">
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <span className="text-xs text-blue-900">Sobre</span>
            </div>
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