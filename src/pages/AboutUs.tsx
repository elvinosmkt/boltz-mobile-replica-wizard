
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-gradient-to-b from-purple-900/50 to-black">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Quem somos
          </h1>
          <p className="text-lg mb-8 lg:text-xl max-w-2xl mx-auto">
            Criamos tecnologia Open BIO Advanced na OpenBio que acredita em uma visão dos soluções de identificação biométrica, assegurando a identidade única & inovadora.
          </p>
        </div>
      </section>

      {/* Company Info Grid */}
      <section className="bg-black py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-boltz-purple font-bold text-lg mb-3">A empresa é uma referência</h3>
              <p className="text-gray-400 text-sm">
                20 anos de experiência em soluções biométricas e identificação digital de alta tecnologia.
              </p>
            </div>

            <div>
              <h3 className="text-boltz-purple font-bold text-lg mb-3">Estamos criados o primeiro</h3>
              <p className="text-gray-400 text-sm">
                Sistema integrado de identificação biométrica para instituições governamentais e privadas.
              </p>
            </div>

            <div>
              <h3 className="text-boltz-purple font-bold text-lg mb-3">Somente, conseguimos por</h3>
              <p className="text-gray-400 text-sm">
                Nossa dedicação em oferecer soluções inovadoras e confiáveis para nossos clientes.
              </p>
            </div>

            <div>
              <h3 className="text-boltz-purple font-bold text-lg mb-3">Em OpenBio, transformamos</h3>
              <p className="text-gray-400 text-sm">
                Tecnologia em soluções práticas que garantem segurança e eficiência nos processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-black font-bold text-2xl mb-12 lg:text-4xl">
            Linha do tempo
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-boltz-purple text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2005
              </div>
              <div>
                <h3 className="text-black font-bold text-lg mb-2">Marco 3 da nossa visão da luta de 20 anos de inovação.</h3>
                <p className="text-gray-600 text-sm">Início das operações com foco em tecnologia biométrica avançada.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-300 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2008
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">Expansão para o setor público</h3>
                <p className="text-gray-400 text-sm">Primeiros contratos com instituições governamentais brasileiras.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-300 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2012
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">Inovação tecnológica</h3>
                <p className="text-gray-400 text-sm">Desenvolvimento de soluções multimodais de identificação.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-300 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2015
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">Parceria com TSE</h3>
                <p className="text-gray-400 text-sm">Início da parceria para modernização do sistema eleitoral brasileiro.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-300 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2020
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">Expansão nacional</h3>
                <p className="text-gray-400 text-sm">Presença consolidada em todos os estados brasileiros.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-300 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">Liderança em inovação</h3>
                <p className="text-gray-400 text-sm">Reconhecimento como líder em soluções biométricas no Brasil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brazil Map Section */}
      <section className="bg-black py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl">
            Cada identidade, uma história.<br />
            Cada história, nossa missão.
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">Mapa do Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-black font-bold text-2xl mb-12 lg:text-4xl">
            Conheça nosso CEO
          </h2>

          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold text-xl mb-2">Ismael Moreira</h3>
              <p className="text-gray-600 text-sm mb-4">
                Com mais de 20 anos de experiência no setor de tecnologia biométrica, Ismael Moreira lidera a OpenBio na missão de transformar a identificação digital no Brasil. Sua visão inovadora e dedicação à excelência técnica estabeleceram a empresa como referência nacional em soluções biométricas.
              </p>
              <p className="text-gray-600 text-sm">
                Sob sua liderança, a OpenBio desenvolveu tecnologias que atendem desde instituições governamentais até o setor privado, sempre mantendo os mais altos padrões de segurança e confiabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="bg-black py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl">
            Operação do Norte e Sul
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-green-900 to-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">Mapa de Operações</span>
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa presença se estende por todo o território nacional, garantindo suporte e soluções biométricas de alta qualidade em todas as regiões do Brasil, do Norte ao Sul.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-black font-bold text-2xl lg:text-4xl">
              Últimas Notícias
            </h2>
            <div className="flex items-center">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full mr-2">
                ◀
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                ▶
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-red-600"></div>
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">Technology News</h3>
                <p className="text-gray-600 text-xs">Latest updates from the biometric industry...</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-yellow-600"></div>
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">Innovation Alert</h3>
                <p className="text-gray-600 text-xs">New developments in digital identification...</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-green-600"></div>
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">Success Stories</h3>
                <p className="text-gray-600 text-xs">Our latest implementations and achievements...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-5 lg:py-40 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">
            Transformamos tecnologia em segurança
          </h2>
          <Link to="/contato">
            <Button className="mx-auto">Fale conosco</Button>
          </Link>
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
                <li>Cadastramento Eleitoral | TSE</li>
                <li>Instituições Financeiras | Banco do Brasil</li>
                <li>Controle de Fronteiras | Polícia Federal</li>
              </ul>
            </div>
            
            <div className="mb-8 lg:mb-0">
              <h3 className="font-bold mb-4 lg:text-lg">Quem Somos</h3>
              <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
                <li>Nosso CEO</li>
                <li>Carreira</li>
              </ul>
            </div>
            
            <div className="mb-8 lg:mb-0">
              <h3 className="font-bold mb-4 lg:text-lg">Termos e Política</h3>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-gray-500 lg:text-center lg:mt-12 lg:pt-8 lg:border-t lg:border-gray-800">
            Copyright © 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
