
import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-transparent py-4 px-5 flex justify-between items-center fixed top-0 left-0 z-50 lg:px-8 lg:py-6">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link to="/solucoes" className="text-white hover:text-boltz-purple transition-colors">
            Soluções
          </Link>
          <Link to="/quem-somos" className="text-white hover:text-boltz-purple transition-colors">
            Quem Somos
          </Link>
          <Link to="#" className="text-white hover:text-boltz-purple transition-colors">
            Notícias
          </Link>
          <Link to="/contato" className="text-white hover:text-boltz-purple transition-colors">
            Contato
          </Link>
        </nav>
        
        {/* Mobile/Desktop Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-boltz-purple transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="text-white hover:text-boltz-purple transition-colors lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
