
import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full py-4 px-5 flex justify-between items-center fixed top-0 left-0 z-50 lg:px-8 lg:py-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-boltz-purple transition-colors flex items-center space-x-1">
              <span>Soluções</span>
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border shadow-lg">
              <DropdownMenuItem asChild>
                <Link to="/solucoes/cadastramento-eleitoral" className="text-gray-800 hover:text-boltz-purple transition-colors">
                  Cadastramento Eleitoral | TSE
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/solucoes/instituicoes-financeiras" className="text-gray-800 hover:text-boltz-purple transition-colors">
                  Instituições Financeiras | Banco do Brasil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/solucoes/controle-fronteiras" className="text-gray-800 hover:text-boltz-purple transition-colors">
                  Controle de Fronteiras | Polícia Federal
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
