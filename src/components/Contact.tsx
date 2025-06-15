import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    description: '',
    reference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
Serviço: ${formData.service}
Descrição: ${formData.description}
${formData.reference ? `Referência: ${formData.reference}` : ''}`;

    const whatsappUrl = `https://wa.me/+55 44 93505-9708?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fale <span className="text-primary-400">com a gente</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 text-primary-400">
            <Clock className="w-5 h-5" />
            <p className="text-lg">Resposta em até 1h (horário comercial)</p>
          </div>
        </motion.div>

        <motion.div
          className="card max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="+55 44 93505-9708"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Tipo de serviço *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione um serviço</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Bot WhatsApp">Bot de WhatsApp</option>
                <option value="Sistema">Sistema sob Demanda</option>
                <option value="API">API & Integrações</option>
                <option value="Identidade Visual">Identidade Visual</option>
                <option value="Combo">Combo</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Descrição rápida da ideia *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            <div>
              <label htmlFor="reference" className="block text-sm font-medium mb-2">
                Link de referência (opcional)
              </label>
              <input
                type="url"
                id="reference"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="https://exemplo.com"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Enviar solicitação</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;