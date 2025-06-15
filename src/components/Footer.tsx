import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              Conecta<span className="text-white">Digital</span>
            </div>
            <p className="text-gray-300 mb-4">
              Soluções Web e Automação
            </p>
            <p className="text-sm text-gray-400">
              Desenvolvemos soluções digitais personalizadas para impulsionar seu negócio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Maringá – PR</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-gray-400">Atendemos todo o Brasil</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>(44) 93505-9708 Leonardo </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>(44) 99898-4507 Ana Vatrim</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>anavatrim@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>leonardobits@hotmail.com</span>
              </div>
            </div>
          </div>

           <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/anavatrim"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Linkedin.anavatrim</span>
              </a>
              <a
                href="https://www.linkedin.com/in/leonardobits/"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin.leonardobits</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Conecta Digital. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;