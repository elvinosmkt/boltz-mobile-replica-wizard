
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';

const ElectoralSolution = () => {
  // Preload critical hero image
  useImagePreloader([
    '/lovable-uploads/Bg_pag TSE_Mobile.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/Bg_pag_TSE_Mobile.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solução para Cadastramento Eleitoral | TSE
          </motion.h1>
          <motion.p
            className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Para garantir a autenticidade cadastramento biométrico no Brasil. A OpenBio desenvolveu uma plataforma para aplicações com grande foco na captura do Tribunal Superior Eleitoral (TSE), desenvolvemos tecnologia essencial para a recadastramento de pessoas através do país.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <AnimatedButton className="mt-4 lg:mt-6">Saiba mais</AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
              Histórico do Projeto
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection animation="slideRight" delay={0.1}>
              <div className="flex items-start gap-10">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/lovable-uploads/Icone-Projeto Piloto.png"
                    alt="Team working"
                  />
                </div>
                <div>
                  <h3 className="text-purple-600 font-bold text-lg mb-2">2008 — Projeto Piloto</h3>
                  <p className="text-gray-600">
                    Desta in fabis ele viverra. 3 municípios brasileiros participaram foram 60 mil eleitores recadastraram em mais de 60 kits foram entregues.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="flex items-start gap-10">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/lovable-uploads/Icone-Identificac╠ºa╠âo do Leitor.png"
                    alt="Team working"
                  />
                </div>
                <div>
                  <h3 className="text-purple-600 font-bold text-lg mb-2">2009 a 2012 — Identificação do Eleitor</h3>
                  <p className="text-gray-600">
                    Coletas realizadas em 330 municípios totalizando mais de 5 milhões de eleitores recadastrados. Mais de 2 mil kits foram entregues 2 mil kits.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.3}>
              <div className="flex items-start gap-10">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/lovable-uploads/Icone-Recadastramento.png"
                    alt="Team working"
                    className='opacity-20'
                  />
                </div>
                <div>
                  <h3 className="text-gray-500 font-bold text-lg mb-2">2014 — Início do recadastramento dos eleitores</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.4}>
              <div className="flex items-start gap-10">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/lovable-uploads/Icone-At Parque de Kits.png"
                    alt="Team working"
                    className='opacity-20'
                  />
                </div>
                <div>
                  <h3 className="text-gray-500 font-bold text-lg mb-2">2015 a 2018 — Atualização do banco de dados</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
              Produção de Produtos
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className='w-full flex justify-start items-start'>
              <p className="w-full sm:w-1/2 text-gray-600 text-start mb-12">
                As soluções de biometria para TSE garantem total interoperabilidade, segurança e confiabilidade permitindo o cadastramento biométrico dos eleitores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                    <img
                    src="/lovable-uploads/Card Mo╠üdulo Cena╠ürio Ascento Fixo.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Módulo Cenário Assento Fixo</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                    <img
                    src="/lovable-uploads/Card Conjunto Flash.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Conjunto Flash</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
               <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                    <img
                    src="/lovable-uploads/Card Akyscam Plus.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Akyscam</h3>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ElectoralSolution;
