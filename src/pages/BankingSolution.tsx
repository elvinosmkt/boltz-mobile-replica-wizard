
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const BankingSolution = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/Bg_pag BB_Mobile.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Solução para Instituições Financeiras<br />
            Banco do Brasil
          </h1>
          <p className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto">
            Prover o serviço de autenticação pessoal dos clientes do banco em utilização das suas vantagem bancárias, tais em soluções de ATMs (Caixas eletrônicos) proporcionando benefícios como redução de filas, redução de custos operacionais de configuração e gerenciamento informados em nossos operadores, não conseguindo detectar possíveis objetivos de segurança exigidos pelos bancos por meio da inovação de inteligência biométrica aplicada no contexto de uma instituição.
          </p>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* Leitores Lumidigm Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-6 lg:text-4xl text-center">
            Leitores Lumidigm
          </h2>

          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Equipamento baseado em sistema
            multimodal para multiples
            campanha de leituras Lumidigm de
            alta performance utilizando técnica
            de tecnologia espectral.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-black font-bold text-xl mb-4">A tecnologia multispectral
                permite que se obtenha dos diferentes
                camadas da pele uma informação
                segmentando imagens de digital
                otimizado à fingerprint para
                detectar e anular todos os tipos
                de fraude.</h3>
            </div>
            <div>
              {/* Placeholder for description */}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/lovable-uploads/a89ab407-408d-4675-b444-6f88fcd405c2.png"
                alt="Lumidigm M421"
                className="w-48 h-48 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold text-lg text-black">Lumidigm<br />M421</h3>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="/lovable-uploads/72ea4390-0913-41a4-b804-d0bd5b0e2734.png"
                alt="Lumidigm V521"
                className="w-48 h-48 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold text-lg text-black">Lumidigm<br />V521</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Diferenciais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/lovable-uploads/95238033-e822-44a8-b2c0-9f2b90e565ea.png"
                  alt="Funções de segurança"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Funções de segurança premium digital</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/lovable-uploads/f7f48f03-dffa-4003-8312-42f51e9d3e6a.png"
                  alt="Operações autônomas"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Operações autônomas/ automáticas</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/lovable-uploads/60862ae3-255d-4442-803e-3e74713a80d6.png"
                  alt="Sistema tamper-proof"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Sistema de tamper-proof</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/lovable-uploads/77339e0f-c64b-473a-a90a-84f940bdcc33.png"
                  alt="Criptografia embarcada"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Criptografia embarcada</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence Section */}
      <section className="bg-gray-900 py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white font-bold text-2xl mb-8 lg:text-4xl">
            OpenBio de Norte a Sul
          </h2>

          <div className="relative">
            <img
              src="/lovable-uploads/a540c9ef-d2b3-45ae-8a3a-6fd56f475186.png"
              alt="Mapa do Brasil mostrando cobertura nacional"
              className="w-full max-w-md mx-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white opacity-30 mb-2">
                  envato
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mt-8 max-w-2xl mx-auto">
            Estamos em <strong>todos os estados brasileiros</strong>, levando
            tecnologia biométrica com precisão e confiabilidade.
            Nossa presença reflete o comprometimento em atender
            ao mercado nacional, garantindo que as soluções estejam
            pessoas e garantem segurança onde for necessário.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-black font-bold text-2xl lg:text-4xl">
              Últimas Notícias
            </h2>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-bold text-lg text-black mb-2">Expansão Nacional</h3>
              <p className="text-gray-600 text-sm">
                Grupo Akiyama anuncia expansão para todos os estados brasileiros com nova tecnologia biométrica.
              </p>
              <span className="text-purple-600 text-xs">Há 2 dias</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-bold text-lg text-black mb-2">Parceria Banco do Brasil</h3>
              <p className="text-gray-600 text-sm">
                Nova solução biométrica implementada em ATMs do Banco do Brasil aumenta segurança.
              </p>
              <span className="text-purple-600 text-xs">Há 1 semana</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-bold text-lg text-black mb-2">Reconhecimento TSE</h3>
              <p className="text-gray-600 text-sm">
                Sistema de cadastramento eleitoral recebe certificação de excelência do TSE.
              </p>
              <span className="text-purple-600 text-xs">Há 2 semanas</span>
            </div>
          </div>
        </div>
      </section>


      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12" style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}>
            Descubra como podemos elevar a segurança<br />
            e a confiabilidade dos serviços bancários
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

export default BankingSolution;
