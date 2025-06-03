
import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [showSolutions, setShowSolutions] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-6">
          <div className="space-y-6">
            <div>
              <button 
                onClick={() => setShowSolutions(!showSolutions)}
                className="flex items-center justify-between w-full text-lg text-gray-800 hover:text-[#7918f9] transition-colors"
              >
                Soluções
                {showSolutions ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {showSolutions && (
                <div className="ml-4 mt-3 space-y-3">
                  <Link 
                    to="/solucoes/cadastramento-eleitoral" 
                    className="block text-md text-gray-600 hover:text-[#7918f9] transition-colors"
                    onClick={onClose}
                  >
                    Cadastramento Eleitoral | TSE
                  </Link>
                  <Link 
                    to="/solucoes/instituicoes-financeiras" 
                    className="block text-md text-gray-600 hover:text-[#7918f9] transition-colors"
                    onClick={onClose}
                  >
                    Instituições Financeiras | Banco do Brasil
                  </Link>
                  <Link 
                    to="/solucoes/controle-fronteiras" 
                    className="block text-md text-gray-600 hover:text-[#7918f9] transition-colors"
                    onClick={onClose}
                  >
                    Controle de Fronteiras | Polícia Federal
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/quem-somos" 
              className="block text-lg text-gray-800 hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Quem Somos
            </Link>
            <Link 
              to="#" 
              className="block text-lg text-gray-800 hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Notícias
            </Link>
            <Link 
              to="/contato" 
              className="block text-lg text-gray-800 hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Contato
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
