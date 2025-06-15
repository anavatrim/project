import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Settings, Zap, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Landing Pages Profissionais',
      description: 'Ideal para apresentar sua marca e gerar conversões.',
      features: [
        'Design responsivo e exclusivo',
        'Formulário ou integração com WhatsApp',
        'Otimização de velocidade e SEO básico'
      ],
      price: 'R$ 650 a R$ 980',
      delivery: 'até 5 dias úteis'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Bots de WhatsApp Inteligentes',
      description: 'Automatize atendimento e vendas com um robô que trabalha 24h.',
      features: [
        'Menu interativo e mensagens automáticas',
        'Integrações com planilhas, APIs, CRMs',
        'Instalação e testes inclusos'
      ],
      price: 'R$ 890 a R$ 1.490',
      delivery: 'até 7 dias úteis'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Sistemas sob Demanda',
      description: 'Portais, painéis, CRMs e ferramentas sob medida.',
      features: [
        'Acesso com login',
        'Cadastros, filtros, relatórios',
        'Visual moderno e responsivo'
      ],
      price: 'A partir de R$ 1.890',
      delivery: 'conforme escopo',
      highlight: '(parcelado)'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'APIs & Integrações',
      description: 'Conecte ferramentas e automatize processos.',
      features: [
        'Criação de APIs REST',
        'Integração com Hotmart, Bling, RD, etc.',
        'Webhooks e documentação incluída'
      ],
      price: 'R$ 950 a R$ 1.590',
      delivery: '5 a 10 dias úteis'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Identidade Visual + Logo',
      description: 'Para quem quer sair do amadorismo.',
      features: [
        'Criação de logo (com variações)',
        'Paleta, fontes e manual de marca'
      ],
      price: 'R$ 470 (logo simples) ou R$ 850',
      delivery: '3 a 6 dias úteis',
      highlight: '(com identidade)'
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que podemos fazer <span className="text-primary-400">por você:</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-dark-600 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-primary-400 font-bold text-lg">
                      💰 {service.price}
                      {service.highlight && (
                        <span className="text-xs text-gray-400 ml-1">{service.highlight}</span>
                      )}
                    </div>
                    <div className="text-gray-400">
                      📦 Entrega: {service.delivery}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;