
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const ElectoralSolution = () => {
  // Preload critical hero image
  useImagePreloader([
    '/lovable-uploads/Bg_pag TSE_Mobile.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/Bg_pag TSE_Mobile.png)'}}>
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default ElectoralSolution;
