import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  RefreshCcw, 
  CreditCard, 
  Share2, 
  Layout, 
  PenTool, 
  BookOpen, 
  PaintBucket, 
  Mail, 
  FileText, 
  Film, 
  Package 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Palette size={32} />, name: "Branding" },
    { icon: <RefreshCcw size={32} />, name: "Rebranding" },
    { icon: <CreditCard size={32} />, name: "ID Card Design" },
    { icon: <Share2 size={32} />, name: "Social Media Posts" },
    { icon: <Layout size={32} />, name: "Flex Design" },
    { icon: <PenTool size={32} />, name: "Logo Design" },
    { icon: <BookOpen size={32} />, name: "Visiting Cards" },
    { icon: <PaintBucket size={32} />, name: "Concept Art" },
    { icon: <Mail size={32} />, name: "Invitation Letters" },
    { icon: <FileText size={32} />, name: "Letterheads" },
    { icon: <Film size={32} />, name: "Video Editing" },
    { icon: <Package size={32} />, name: "Packaging Design" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-accent-500 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-primary-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of graphic design services to help your brand stand out.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-8 rounded-lg shadow-md transition-all text-center"
            >
              <div className="text-accent-500 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <div className="w-12 h-1 bg-primary-200 mx-auto mt-4"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;