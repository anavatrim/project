import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, DollarSign, Zap } from 'lucide-react';

const Hero = () => {
  const highlights = [
    { icon: <Zap className="w-5 h-5" />, text: 'Entrega rápida' },
    { icon: <MessageCircle className="w-5 h-5" />, text: 'Suporte pelo WhatsApp' },
    { icon: <DollarSign className="w-5 h-5" />, text: 'Preço justo' },
    { icon: <Clock className="w-5 h-5" />, text: 'Sem enrolação' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sua ideia digital
            <span className="block text-primary-400">pronta para funcionar.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Sites, bots, sistemas e automações feitas por quem desenvolve de verdade. 
            Soluções rápidas, eficientes e com suporte direto. 
            <span className="text-primary-400 font-semibold"> De Maringá para todo o Brasil.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#contact"
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar orçamento em até 1h
            </motion.a>
            <motion.a
              href="#services"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver nossos serviços
            </motion.a>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-primary-400">
                {highlight.icon}
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;