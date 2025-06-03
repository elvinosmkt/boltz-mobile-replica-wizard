
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section with Company Info */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/584c0eb9-4a0c-4a18-b384-2776e998ccc5.png')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
              Quem somos
            </h1>
            <p className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Com a formação do Grupo Akiyama, a <span className="font-bold">OpenBio se consolida como líder em soluções de identificação biométrica</span>, oferecendo tecnologias avançadas e inovadoras.
            </p>
          </div>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left max-w-5xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-gray-600 pb-2">
                Especializados no desenvolvimento de hardware e software
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                proprietários, proporcionamos desde leitores biométricos até sistemas completos de identificação digital, aplicados em setores como eleições, segurança pública, bancos e acessos corporativos.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-gray-600 pb-2">
                Nossa missão é garantir processos mais seguros, eficientes e confiáveis
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                sempre alinhados às normas internacionais e às necessidades do mercado.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-gray-600 pb-2">
                Com sede em Curitiba e unidade fabril em Pato Branco
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                estamos presentes em diversos estados brasileiros e prestamos suporte técnico em milhares de municípios.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-gray-600 pb-2">
                Na OpenBio, transformamos a complexidade da biometria em soluções acessíveis, descomplicadas e precisas
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                conectando pessoas e protegendo identidades com a segurança e inovação que nossos clientes merecem.
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
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Conheça nosso CEO
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/c94f03e6-5f77-4d2e-a259-8a140e589c9f.png" 
                alt="Ismael Akiyama - CEO" 
                className="w-64 h-64 rounded-lg mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-black">Ismael Akiyama</h3>
              <p className="text-gray-600">CEO do Grupo Akiyama</p>
            </div>
            
            <div className="text-gray-600">
              <p className="mb-4">
                Ismael Akiyama é um visionário empresário brasileiro com mais de 20 anos de experiência no setor de tecnologia. Fundador e CEO do Grupo Akiyama, ele lidera um ecossistema de empresas especializadas em soluções biométricas, business intelligence e tecnologia para o setor público.
              </p>
              <p className="mb-4">
                Com formação em Engenharia e uma visão estratégica aguçada, Ismael desenvolveu soluções inovadoras que transformaram os processos de reconhecimento, autenticação e gestão de identidades no Brasil. Sob sua liderança, o Grupo Akiyama se tornou referência nacional em identificação biométrica.
              </p>
              <p>
                Atualmente, ele conduz a expansão e consolidação do grupo como a principal referência do setor, fornecendo soluções para governos, instituições financeiras e diversas outras áreas que necessitam de segurança de dados e identificação precisa de pessoas.
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
              <img 
                src="/lovable-uploads/04c9e991-a6e6-40c4-a458-3778de9eccfd.png" 
                alt="TSE adquire Kits para implementar biometria" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">TSE adquire Kits para implementar biometria em todo o país.</h3>
                <p className="text-gray-600 text-xs">Por meio de contrato assinado com a empresa Akiyama Indústria e Comércio de Equipamentos Eletrônicos e Sistemas Ltda., vencedora de licitação, o TSE adquiriu mais 2.550 Kits Biométricos.</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/553bac2e-ddd4-42fe-983c-1cce10ffffaf.png" 
                alt="Biometrics digital ID companies" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">Biometrics, digital ID companies make strong showing at ID4Africa 2022.</h3>
                <p className="text-gray-600 text-xs">The Vero Match biometric capture solution from Akiyama, featuring Integrated Biometrics' Five-O fingerprint scanner, was launched at ID4Africa 2022 to expand on the portable solution first developed for Brazilian police in 2018 with Kojak scanners.</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/9a6c21f1-93b7-4abb-8b00-049e3d3352c9.png" 
                alt="Integrated Biometrics partner Akiyama" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-sm mb-2">Integrated Biometrics partner Akiyama wins Brazil Federal Police contract.</h3>
                <p className="text-gray-600 text-xs">The Federal Police of Brazil has purchased 1,500 fingerprint scanners made by Integrated Biometrics for a recent bid. The order for the mobile scanners was fulfilled by Akiyama, the exclusive distributor for Integrated Biometrics hardware in Brazil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-5 lg:py-40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/0f050324-4d75-42e2-a936-f652a4477c2b.png')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
