
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
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-gradient-to-b from-blue-900/50 to-black">
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
                Ismael Akiyama é o fundador e CEO do Grupo Akiyama, 
                um ecossistema de empresas especializadas em 
                tecnologia, business intelligence e soluções para o 
                setor público. Nascinso, formou-se na Akiyama IQ.
              </p>
              <p className="mb-4">
                Com visão estratégica e foco em inovação ele 
                desenvolveu soluções que transformaram processos 
                para reconhecimento, autenticação e gestão de 
                identidades.
              </p>
              <p>
                Atualmente lidera o grupo na consolidação como 
                referência no setor, fornecendo soluções para governos, 
                instituições financeiras e diversas outras áreas que 
                necessitam de segurança de dados e identificação de 
                pessoas.
              </p>
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

      {/* Diferenciais Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Diferenciais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Funções de segurança premium digital</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Operações autônomas/ automáticas</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sistema de tamper-proof</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔐</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Criptografia embarcada</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-5 lg:py-40 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">
            Descubra como podemos elevar a segurança<br />
            e a confiabilidade dos serviços bancários
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

export default BankingSolution;
