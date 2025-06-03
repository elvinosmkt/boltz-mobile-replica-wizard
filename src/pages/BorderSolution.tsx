import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const BorderSolution = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{ backgroundImage: 'url(/Bg_pag PF_Mobile.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Solução para Controle de Fronteiras<br />
            Polícia Federal
          </h1>
          <p className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto">
            Ao contar com equipamentos biométricos baseados em chips de cadastramento biométrico que facilitam gerenciamento de dados e determinação de uma tecnologia avançada para coleta de dados de pessoas nas fronteiras. A solução otimizada pelos profissionais públicos e responsáveis por documentos da Investigação, políticas e em equipe diferentes em pontos fronteiriços do Brasil.
          </p>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* RealPass Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-black font-bold text-2xl mb-6 lg:text-4xl">
            RealPass<br />
            <span className="text-lg lg:text-xl font-normal">Leitor de Documentos</span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            O RealPass é um dispositivo inovador de leitura de documentos, programado para detectar múltiplas marcas de captura em diferentes comprimentos de onda validado, de e.UL garantindo uma solução confiável e precisa para o processamento e a autenticação de documentos.
          </p>

          <h3 className="text-black font-bold text-xl mb-8">
            Segurança e inovação em um único dispositivo.
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/lovable-uploads/99295093-15ac-4999-ae6c-2f1a27decb99.png"
                alt="RealPass Device 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/lovable-uploads/99295093-15ac-4999-ae6c-2f1a27decb99.png"
                alt="RealPass Device 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/lovable-uploads/99295093-15ac-4999-ae6c-2f1a27decb99.png"
                alt="RealPass Device 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12" style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}>
            Transformamos tecnologia em segurança
          </h2>
          <Button className="mx-auto">Fale conosco</Button>
        </div>
      </section>

      {/* Footer */}
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
              <h3 className="font-bold mb-4 lg:text-lg">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
                <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
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
    </div>
  );
};

export default BorderSolution;
