
import React, { useState, useEffect, memo } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo, LogoMobile } from './Logo';
import { MobileMenu } from './MobileMenu';
import { useCriticalImages } from '@/hooks/useImagePreloader';

const NavBar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Precarregar imagens críticas
  useCriticalImages();

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
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto w-full py-4 px-5 flex justify-between items-center lg:px-8 lg:py-6">
          <Link to="/">
            <div className="block lg:hidden">
              <LogoMobile />
            </div>
            <div className="hidden lg:block">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/solucoes" className="text-white hover:text-[#7918f9] transition-colors">
              Soluções
            </Link>
            <Link to="/quem-somos" className="text-white hover:text-[#7918f9] transition-colors">
              Quem Somos
            </Link>
            <Link to="#" className="text-white hover:text-[#7918f9] transition-colors">
              Notícias
            </Link>
            <Link to="/contato" className="text-white hover:text-[#7918f9] transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile/Desktop Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[#7918f9] transition-colors">
              <Search size={28} />
            </button>
            <button
              className="text-white hover:text-[#7918f9] transition-colors lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
});

NavBar.displayName = 'NavBar';

export { NavBar };
