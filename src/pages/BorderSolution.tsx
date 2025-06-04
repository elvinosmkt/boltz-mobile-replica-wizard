
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { TimelineItem } from '@/components/TimelineItem';
import { FeatureCard } from '@/components/FeatureCard';

const BorderSolution = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(/lovable-uploads/Bg_pag_PF_Mobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Solução para Controle de Fronteiras | Polícia Federal
          </h1>
          <p className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto">
            Tecnologia avançada de identificação biométrica para segurança nas fronteiras brasileiras. 
            Soluções robustas que garantem controle eficiente de entrada e saída de pessoas, 
            proporcionando maior segurança nacional e agilidade nos processos de imigração.
          </p>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Evolução do Projeto
          </h2>

          <div className="space-y-12">
            <TimelineItem
              icon="🛂"
              title="2010 — Projeto Piloto Fronteiras"
              description="Implementação inicial em 5 pontos de fronteira estratégicos com tecnologia biométrica de reconhecimento facial e digital."
              isActive={true}
            />

            <TimelineItem
              icon="🌎"
              title="2012 a 2015 — Expansão Nacional"
              description="Expansão para mais de 50 pontos de fronteira em todo território nacional, incluindo aeroportos internacionais e postos terrestres."
              isActive={true}
            />

            <TimelineItem
              icon="🔒"
              title="2016 — Sistema Integrado"
              description="Integração com bases de dados internacionais e sistemas de segurança para identificação de pessoas procuradas."
              isActive={false}
            />

            <TimelineItem
              icon="📊"
              title="2018 a 2024 — Modernização Contínua"
              description="Atualização constante dos sistemas com IA e machine learning para detecção de fraudes e melhor precisão."
              isActive={false}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
            Soluções Tecnológicas
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Equipamentos e sistemas especializados para controle de fronteiras com máxima precisão e segurança.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🛂"
              title="Sistema de Reconhecimento Facial"
            />

            <FeatureCard
              icon="📱"
              title="Scanner Biométrico Móvel"
            />

            <FeatureCard
              icon="🖥️"
              title="Central de Monitoramento"
              variant="dark"
              iconBg="bg-black"
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Garanta a segurança das fronteiras brasileiras com nossa tecnologia"
        buttonText="Fale conosco"
      />

      <Footer />
    </div>
  );
};

export default BorderSolution;
