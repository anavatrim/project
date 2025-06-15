import React from 'react';
import { motion } from 'framer-motion';
import { Package, Zap, Star } from 'lucide-react';

const Combos = () => {
  const combos = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Combo Vitrine Digital',
      description: 'Landing Page + Logo + WhatsApp integrado',
      price: 'R$ 1.390',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Combo Automação Total',
      description: 'Bot de WhatsApp + Painel de controle simples',
      price: 'R$ 1.980',
      popular: true
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Combo Marca Forte',
      description: 'Logo + Identidade visual + bio Instagram + destaques',
      price: 'R$ 1.280',
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Combos pensados para <span className="text-primary-400">seu negócio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <motion.div
              key={index}
              className={`card relative ${combo.popular ? 'border-primary-400 shadow-lg shadow-primary-400/20' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {combo.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-primary-400 mb-4 flex justify-center">
                  {combo.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{combo.title}</h3>
                <p className="text-gray-300 mb-6">{combo.description}</p>
                
                <div className="text-3xl font-bold text-primary-400 mb-6">
                  {combo.price}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  combo.popular 
                    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                    : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                }`}>
                  Solicitar Combo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;