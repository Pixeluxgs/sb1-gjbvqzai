import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white py-8 border-t border-primary-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/Colorful Brain Digital World Technology Logo-Photoroom.png" 
              alt="Pixelux Logo" 
              className="h-7 w-auto mr-2"
            />
            <span className="text-lg font-semibold">Pixelux</span>
          </div>
          
          <div className="text-primary-400 text-sm">
            &copy; {currentYear} Pixelux Graphic Solution. All rights reserved.
          </div>
          
          <div className="mt-10 md:mt-0">
            <ul className="flex gap-4 text-sm">
              <li><a href="#home" className="hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;