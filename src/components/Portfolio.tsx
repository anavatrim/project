import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, MessageSquare, Settings, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Landing para nutricionista',
      description: 'Site responsivo com formulário de contato integrado',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Bot para pizzaria',
      description: 'Automação completa de pedidos via WhatsApp',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Sistema para clínica',
      description: 'Painel administrativo com agendamentos',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Integração RD Station',
      description: 'API personalizada para automação de marketing',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos <span className="text-primary-400">recentes:</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-primary-400">
                  {project.icon}
                </div>
                <h3 className="font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-sm text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary">
            Ver mais no nosso portfólio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;