import React from 'react';
import { motion } from 'framer-motion';
import { Brush, PenTool, Film, Laptop, Zap } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const tools = [
    { name: "Adobe Photoshop", icon: <Brush size={24} /> },
    { name: "Adobe Illustrator", icon: <PenTool size={24} /> },
    { name: "CorelDRAW", icon: <Laptop size={24} /> },
    { name: "Premiere Pro", icon: <Film size={24} /> },
    { name: "CapCut", icon: <Zap size={24} /> }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            custom={0}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
          >
            About Us
          </motion.h2>
          
          <motion.div 
            custom={1}
            variants={fadeInUp}
            className="w-20 h-1 bg-accent-500 mx-auto mb-10"
          />
          
          <motion.p 
            custom={2}
            variants={fadeInUp}
            className="text-lg text-primary-700 mb-10 text-center md:text-left"
          >
            At Pixelux Graphic Solution, we blend creativity with precision to deliver exceptional graphic design services. Founded on a passion for visual storytelling, we've been transforming ideas into impactful designs since 2020. Our team of creative professionals is dedicated to providing customized solutions that help businesses stand out in today's competitive market.
          </motion.p>
          
          <motion.h3 
            custom={3}
            variants={fadeInUp}
            className="text-xl font-semibold mb-6 text-center md:text-left"
          >
            Tools We Master
          </motion.h3>
          
          <motion.div 
            custom={4}
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={tool.name}
                whileHover={{ y: -5 }}
                className="bg-primary-50 p-6 rounded-lg text-center flex flex-col items-center justify-center hover:shadow-md transition-all"
              >
                <div className="text-accent-500 mb-3">
                  {tool.icon}
                </div>
                <h4 className="font-medium">{tool.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;