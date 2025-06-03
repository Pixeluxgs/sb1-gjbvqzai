import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-accent-500 mx-auto mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary-200 text-lg mb-12"
          >
            Ready to start your project? Let's discuss how we can bring your vision to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <a 
              href="mailto:https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" 
              className="flex items-center justify-center gap-2 text-xl font-medium hover:text-accent-400 transition-colors inline-block"
            >
              <Mail size={24} />
              contact us pixeluxgs1010@gmail.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-5">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-800 hover:bg-accent-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;