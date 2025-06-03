import React from 'react';
import { NewsCard } from '@/components/NewsCard';
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
            backgroundImage: `url('/lovable-uploads/f4a6e2eb-43de-46a4-8a57-9aa107b7ac6d.png')`
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-16 lg:mb-24 my-20">
            <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
              Quem somos
            </h1>
            <p className="text-lg mb-8 lg:text-xl max-w-xl mx-auto leading-relaxed">
              Com a formação do Grupo Akiyama, a <span className="font-bold">OpenBio se consolida como líder em soluções de identificação biométrica</span>, oferecendo tecnologias avançadas e inovadoras.
            </p>
          </div>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left max-w-5xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-4 border-t pt-5 border-gray-600 pb-2">
                Especializados no desenvolvimento de hardware e software
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                proprietários, proporcionamos desde leitores biométricos até sistemas completos de identificação digital, aplicados em setores como eleições, segurança pública, bancos e acessos corporativos.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-t pt-5 border-gray-600 pb-2">
                Nossa missão é garantir processos mais seguros, eficientes e confiáveis
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                sempre alinhados às normas internacionais e às necessidades do mercado.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-t pt-5 border-gray-600 pb-2">
                Com sede em Curitiba e unidade fabril em Pato Branco
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                estamos presentes em diversos estados brasileiros e prestamos suporte técnico em milhares de municípios.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-t pt-5 border-gray-600 pb-2">
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
              <div className="bg-[#7918f9] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 flex-shrink-0">
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
            Conheça nosso CEO
          </h2>

          <div className="flex gap-12 items-center">
            <div className='w-full'>
              <div className="w-fit text-center">
                <img
                  src="/lovable-uploads/c94f03e6-5f77-4d2e-a259-8a140e589c9f.png"
                  alt="Ismael Akiyama - CEO"
                  className="h-100 rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium text-2xl text-black text-start">Ismael Akiyama</h3>
                <p className="text-[#7918f9] text-lg text-start">CEO do Grupo Akiyama</p>
              </div>
            </div>

            <div className="text-gray-600 text-xl items-start justify-start flex flex-col border-t pt-5 border-gray-400">
              <p className="mb-10">
                Ismael Akiyama é um visionário empresário brasileiro com mais de 20 anos de experiência no setor de tecnologia. Fundador e CEO do Grupo Akiyama, ele lidera um ecossistema de empresas especializadas em soluções biométricas, business intelligence e tecnologia para o setor público.
              </p>
              <p className="mb-10">
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
      <section className="bg-gray-100 py-10 px-5 lg:py-20">
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <div className="flex justify-between items-center mb-6 lg:mb-12">
            <h2 className="text-[#7918f9] font-medium text-lg lg:text-3xl">
              Últimas Notícias
            </h2>
            <div className="flex items-center">
              <button className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full mr-2 lg:w-8 lg:h-8 hover:bg-[#7918f9]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M3.283 10.94a1.5 1.5 0 0 0 0 2.12l5.656 5.658a1.5 1.5 0 1 0 2.122-2.122L7.965 13.5H19.5a1.5 1.5 0 0 0 0-3H7.965l3.096-3.096a1.5 1.5 0 1 0-2.122-2.121z" /></g></svg>
              </button>
              <button className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full lg:w-8 lg:h-8 hover:bg-[#7918f9]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z" /></g></svg>
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            <NewsCard
              title="TSE adquire Kits para implementar biometria em todo o país"
              description="Por meio de contratos assinados com a empresa Advance Inovação, a Coordenação Nacional de Sistemas e Informática da Justiça Federal, já tem à disposição mais 2.500 Kits Biométricos."
              imageSrc="/lovable-uploads/8c5ab50d-befe-4b9f-9e46-33f18a19ccb5.png"
            />

            <NewsCard
              title="Biometria, digital ID responde aos desafios de Manufacturing Analytics em 2024"
              description="The Veris Match biometric capture systems from Advance Analytics, helping manufacturers track worker whereabouts and activities in ways that don't intrude on personal privacy, deliver efficiencies."
              imageSrc="/lovable-uploads/2bdbac5f-cf32-42a1-b0af-c07ded74b3cd.png"
            />

            <NewsCard
              title="Integrado Biometria | Facial Recognition | Best for Banks"
              description="The Federal Police of Brazil development 1,000 fingerprint authentication kits from tech suppliers, as part of the Border Control Security Initiative for the department to process fingerprints in every."
              imageSrc="/lovable-uploads/4709cc25-ff72-45fb-816b-b23f5459ef4f.png"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
