
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const ElectoralSolution = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-gradient-to-b from-blue-900/50 to-black">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Solução para Cadastramento Eleitoral | TSE
          </h1>
          <p className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto">
            Para garantir a autenticidade cadastramento biométrico no Brasil. A OpenBio desenvolveu uma plataforma para aplicações com grande foco na captura do Tribunal Superior Eleitoral (TSE), desenvolvemos tecnologia essencial para a recadastramento de pessoas através do país.
          </p>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Histórico do Projeto
          </h2>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📱</span>
              </div>
              <div>
                <h3 className="text-purple-600 font-bold text-lg mb-2">2008 — Projeto Piloto</h3>
                <p className="text-gray-600">
                  Desta in fabis ele viverra. 3 municípios brasileiros participaram foram 60 mil eleitores recadastraram em mais de 60 kits foram entregues.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">👤</span>
              </div>
              <div>
                <h3 className="text-purple-600 font-bold text-lg mb-2">2009 a 2012 — Identificação do Eleitor</h3>
                <p className="text-gray-600">
                  Coletas realizadas em 330 municípios totalizando mais de 5 milhões de eleitores recadastrados. Mais de 2 mil kits foram entregues 2 mil kits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">🔄</span>
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">2014 — Início do recadastramento dos eleitores</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📊</span>
              </div>
              <div>
                <h3 className="text-gray-500 font-bold text-lg mb-2">2015 a 2018 — Atualização do banco de dados</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Produção de Produtos
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            As soluções de biometria para TSE garantem total interoperabilidade, segurança e confiabilidade permitindo o cadastramento biométrico dos eleitores.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-32 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">📱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Módulo Cenário Assento Fixo</h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-32 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">💻</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Conjunto Flash</h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-32 bg-black rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-white">📱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Akvecos</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-5 lg:py-40 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">
            Fale com nossa equipe e descubra como<br />
            podemos transformar seu projeto
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

export default ElectoralSolution;
