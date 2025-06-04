
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { DifferentialCard } from '@/components/DifferentialCard';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const Solutions = () => {
  // Preload critical images
  useImagePreloader([
    '/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png)',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <motion.h1 
            className="text-4xl font-medium mb-6 leading-tight lg:text-6xl 2xl:text-7xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Somos defensores da unicidade
          </motion.h1>
          <div className='w-full flex items-center justify-center'> 
            <motion.p 
              className="w-1/2 2xl:w-2/3 text-lg mb-8 lg:text-xl 2xl:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              A identidade de cada pessoa merece ser protegida com precisão e confiança
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button className="mt-4 lg:mt-6">Saiba mais</Button>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
            <AnimatedSection animation="slideRight" className="mb-12">
              <h2 className="text-[#7918f9] font-bold text-2xl mb-4 lg:text-6xl">
                Tecnologia a Serviço da Identificação
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={0.1}>
              <h3 className="text-black font-bold text-2xl mb-3">Cadastro Civil e Emissão de Documentos:</h3>
              <p className="text-gray-600 text-2xl">
                Soluções biométricas para emissão de documentos civis, garantindo segurança e autenticidade.
              </p>
              <motion.div 
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <h3 className="text-black font-bold text-2xl mb-3">Identificação Biométrica Pós-Óbito:</h3>
              <p className="text-gray-600 text-2xl">
                Tecnologia para identificação post mortem com soluções exclusivas, facilitando a emissão de Laudos Médicos de Atestado de Óbito.
              </p>
              <motion.div 
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <h3 className="text-black font-bold text-2xl mb-3">Soluções Biométricas para Tribunais:</h3>
              <p className="text-gray-600 text-2xl">
                Autenticação segura digital para controle de acesso e identificação precisa de funcionários.
              </p>
              <motion.div 
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <h3 className="text-black font-bold text-2xl mb-3">Instituições Financeiras:</h3>
              <p className="text-gray-600 text-2xl">
                Soluções avançadas para o segmento financeiro com experiência comprovada em projetos de larga escala para prevenção a fraudes.
              </p>
              <motion.div 
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.5}>
              <h3 className="text-black font-bold text-2xl mb-3">Sistema Penitenciário e Criminal:</h3>
              <p className="text-gray-600 text-2xl">
                Controle de identificação de internos e visitantes, integrado com instituições físicas.
              </p>
              <motion.div 
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn" className="text-center mb-12">
            <h2 className="text-black font-medium text-2xl lg:text-5xl">
              Diferenciais
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <DifferentialCard
              title="Tecnologia proprietária"
              backgroundImage="/lovable-uploads/d538d6ce-daba-45a0-a20c-452827a2416d.png"
              delay={0}
            />

            <DifferentialCard
              title="Presença nacional"
              backgroundImage="/lovable-uploads/9f746c55-c2c2-4b08-bb67-4488b8c2a10e.png"
              delay={0.2}
            />

            <DifferentialCard
              title="Precisão e segurança"
              backgroundImage="/lovable-uploads/b55c47c3-0333-4c4c-b20c-14b0ce30daed.png"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn" className="text-center mb-12">
            <h2 className="text-black font-medium text-2xl lg:text-5xl">
              Cases de Sucesso
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedCard delay={0}>
              <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/0ef50083-4702-430b-9cee-ff65b056dffb.png)',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                  <motion.h3 
                    className="text-white font-medium text-2xl mb-4 lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Solução para Cadastramento Eleitoral | TSE
                  </motion.h3>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <strong>Maior parque</strong> de cadastramento biométrico <strong>do mundo.</strong>
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Fornecendo tecnologia para o TSE desde 2008.
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-6 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Mais de <strong>25 mil kits de cadastramento biométrico</strong> entregues.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/b5d86670-783b-477d-b178-5b2d89b11327.png)',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                  <motion.h3 
                    className="text-white font-medium text-2xl mb-4 lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Controle de Fronteiras | Polícia Federal
                  </motion.h3>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Tecnologia avançada para segurança nas fronteiras.
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Sistemas biométricos em pontos estratégicos.
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-6 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Mais de 950 soluções operando no controle de fronteiras do Brasil.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/11dc74b0-c29e-4cdb-91ae-661240eff951.png)',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                  <motion.h3 
                    className="text-white font-medium text-2xl mb-4 lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Solução para Instituições Financeiras | Banco do Brasil
                  </motion.h3>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Tecnologia biométrica para segurança bancária.
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-4 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Identificação precisa e confiável de clientes.
                  </motion.p>
                  <motion.p 
                    className="text-white text-xl mb-6 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Soluções implementadas em agências em todo o país.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
                  </motion.div>
                </div>
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

export default Solutions;
