import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, HeadphonesIcon } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, text: '+100 projetos entregues' },
    { icon: <Users className="w-6 h-6" />, text: '+15 nichos atendidos' },
    { icon: <HeadphonesIcon className="w-6 h-6" />, text: '100% suporte humano' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quem é a <span className="text-primary-400">Conecta Digital?</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Somos desenvolvedores de Maringá (PR) que constroem soluções digitais com foco em resultado. 
              Aqui, você fala direto com quem executa: sem enrolação, sem agências caras, sem robô genérico. 
              Fazemos projetos personalizados e eficientes para negócios que querem crescer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-primary-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.icon}
                  <span className="font-semibold text-sm">{stat.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/30">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Desenvolvedores de Maringá</h3>
                <p className="text-gray-300">
                  Atendimento direto, sem intermediários. Você fala com quem realmente entende e executa o projeto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;