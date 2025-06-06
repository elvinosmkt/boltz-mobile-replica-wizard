
import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 border-t border-gray-800 lg:py-16">
      <div className="max-w-lg mx-auto lg:max-w-6xl">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo className="mb-8" />
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Soluções</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/solucoes/cadastramento-eleitoral" className="hover:text-white">Cadastramento Eleitoral | TSE</Link></li>
              <li><Link to="/solucoes/instituicoes-financeiras" className="hover:text-white">Instituições Financeiras | Banco do Brasil</Link></li>
              <li><Link to="/solucoes/controle-fronteiras" className="hover:text-white">Controle de Fronteiras | Polícia Federal</Link></li>
            </ul>
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Quem Somos</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/quem-somos" className="hover:text-white">Nosso CEO</Link></li>
              <li>Carreira</li>
            </ul>
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Termos e Política</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-500 lg:text-center lg:mt-12 lg:pt-8 lg:border-t lg:border-gray-800">
          <Link to="/privacidade" className="hover:text-white">Termos e Política</Link>
          <span className="mx-4">|</span>
          Copyright © 2025
        </div>
      </div>
    </footer>
  );
};
