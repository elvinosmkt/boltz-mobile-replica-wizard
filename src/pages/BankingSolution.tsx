
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';

const BankingSolution = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{
        backgroundImage: 'url(/lovable-uploads/Bg_pag_BB_Mobile.png)', backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solução para Instituições Financeiras<br />
            Banco do Brasil
          </motion.h1>
          <motion.p
            className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Prover o serviço de autenticação pessoal dos clientes do banco em utilização das suas vantagem bancárias, tais em soluções de ATMs (Caixas eletrônicos) proporcionando benefícios como redução de filas, redução de custos operacionais de configuração e gerenciamento informados em nossos operadores, não conseguindo detectar possíveis objetivos de segurança exigidos pelos bancos por meio da inovação de inteligência biométrica aplicada no contexto de uma instituição.
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

      {/* Leitores Lumidigm Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-10 lg:text-4xl text-center">
              Leitores Lumidigm
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <AnimatedSection animation="slideRight">
              <h3 className="text-black font-regular text-xl mb-4">Com <strong>tecnologia patenteada multiespectral</strong> para colete de imagens, os leitores Lumidigm se diferenciam dos tradicionais leitores de mercado, que utilizam vidro, LES ou tecnologia capacitiva.</h3>
            </AnimatedSection>
            <AnimatedSection animation="slideRight">
              <h3 className="text-black font-regular text-xl mb-4">A <strong>tecnologia óptica
                avancada</strong> permite disparar múltiplas frequencias de luz em diferentes angulos sobre o dedo, capturando imagens do "digital interna" e "digital externa" para detectar a maior parte dos tipos
                de fraude.</h3>
            </AnimatedSection>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <AnimatedCard delay={0}>
             <div className="bg-gray-100 rounded-lg text-center">
                <div className="w-full h-full bg-gray-100 rounded mx-auto flex items-center justify-center">
                    <img
                    src="/lovable-uploads/Card Lumidigm M421.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Lumidigm<br />M421</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
             <div className="bg-gray-100 rounded-lg text-center">
                <div className="w-full h-full bg-gray-100 rounded mx-auto flex items-center justify-center">
                    <img
                    src="/lovable-uploads/72ea4390-0913-41a4-b804-d0bd5b0e2734.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Lumidigm<br />V521</h3>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-center">
              Diferenciais
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            <AnimatedCard delay={0}>
              <div className="text-center">
                <div className="flex items-center justify-center flex-shrink-0 mb-6">
                  <img
                    src="/lovable-uploads/Icone-Func╠ºo╠âes de Seguranc╠ºa.png"
                    alt="Funções de segurança"
                  />
                </div>
                <h3 className="font-regular text-xl mb-2 text-black">Funções de segurança <br/>ponta-a-ponta</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="text-center">
               <div className="flex items-center justify-center flex-shrink-0 mb-6">
                  <img
                    src="/lovable-uploads/Icone-Operac╠ºo╠âes Autonomas.png"
                    alt="Funções de segurança"
                  />
                </div>
               <h3 className="font-regular text-xl mb-2 text-black">Operações <br/>autônomas/embarcadas</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="flex items-center justify-center flex-shrink-0 mb-6">
                  <img
                    src="/lovable-uploads/95238033-e822-44a8-b2c0-9f2b90e565ea.png"
                    alt="Funções de segurança"
                  />
                </div>
                 <h3 className="font-regular text-xl mb-2 text-black">Sistema de <br/>tamper-proof</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="flex items-center justify-center flex-shrink-0 mb-10">
                  <img
                    src="/lovable-uploads/Icone-Criptografia Embarcada.png"
                    alt="Funções de segurança"
                  />
                </div>
                <h3 className="font-regular text-xl mb-2 text-black">Criptografia <br/> embarcada</h3>
              </div>
            </AnimatedCard>
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
          <motion.h2
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12"
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Descubra como podemos elevar a segurança<br />
            e a confiabilidade dos serviços bancários
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <AnimatedButton className="mx-auto">Fale conosco</AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default BankingSolution;
