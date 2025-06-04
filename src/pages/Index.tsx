import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { StatBox } from '@/components/StatBox';
import { NewsCard } from '@/components/NewsCard';
import { Logo } from '@/components/Logo';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <AnimatedSection
        className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/65559614-7006-4dba-8288-66c5eabf2977.png)'
        }}
        animation="fadeIn"
      >
        <div className="relative z-10 text-center max-w-lg mx-auto lg:max-w-4xl 2xl:max-w-7xl">
          <div className='w-full flex items-center justify-center'>
            <motion.h1 
              className="w-9/12 2xl:w-8/12 text-4xl font-medium mb-6 leading-tight lg:text-5xl 2xl:text-7xl lg:mb-8" 
              style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Protegendo o presente para construir o futuro
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <AnimatedButton className="mt-4 lg:mt-6">Fale conosco</AnimatedButton>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="bg-white py-10 px-5 lg:py-20" animation="slideUp" delay={0.2}>
        <div className="max-w-lg mx-auto lg:max-w-6xl 2xl:max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <AnimatedCard className="flex flex-col items-center sm:items-start text-center sm:text-start">
              <h2 className="text-[#7918f9] font-medium tracking-tight text-4xl mb-3 lg:text-2xl lg:mb-6">
                Defendemos o que te torna singular
              </h2>
              <p className="text-black text-sm mb-4 lg:text-base lg:mb-6 lg:leading-relaxed">
                Tecnologia é identidade digital única. <span className="font-bold">Soluções biométricas garantem que sua identificação seja precisa, segura e sem complicações.</span> Este é o princípio fundamental na nossa abordagem de segurança: entrelaçamos recursos avançados de autenticação para garantir que sua identidade digital seja única e protegida.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <AnimatedButton className="mt-4 lg:mt-6">Saiba mais</AnimatedButton>
              </div>
            </AnimatedCard>

            <div className="hidden lg:block">
              <AnimatedCard delay={0.3} className="flex items-center justify-end">
                <motion.img
                  src="/lovable-uploads/4709cc25-ff72-45fb-816b-b23f5459ef4f.png"
                  alt="Team working"
                  className="w-7/12 object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection
        className="relative py-16 px-5 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/lovable-uploads/f28d5639-f76a-440c-9bbf-658384e67857.png)'
        }}
        animation="fadeIn"
        delay={0.3}
      >
        <div className="relative z-10 lg:max-w-6xl 2xl:max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-12 lg:mb-20">
            <h2 className="text-white font-bold text-2xl mb-4 lg:text-4xl lg:mb-6">
              Números que sustentam decisões
            </h2>
            <p className="text-gray-300 text-base lg:text-xl max-w-2xl mx-auto">
              Inovação que move o <span className="font-bold">Brasil</span> para quem mais importa:
            </p>
            <div className='flex items-center justify-center'>
              <motion.img
                src="/lovable-uploads/Icone-Voce╠é.png"
                alt="Team working"
                className="h-17 object-cover rounded-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </AnimatedCard>

          <div className="space-y-8 lg:space-y-12">
            <div className="text-center">
              {[
                { text: "Mais de 20 mil kits de cadastramento biométrico integrados ao TSE", opacity: "opacity-25", delay: 0.1 },
                { text: "Presença em todos os estados brasileiros", opacity: "opacity-50", delay: 0.2 },
                { text: "Mais de 140 milhões de brasileiros cadastrados com nossas soluções biométricas", opacity: "", delay: 0.3 },
                { text: "1/3 de todos os equipamentos entregues pelo Brasil em 2024", opacity: "opacity-50", delay: 0.4 },
                { text: "Mais de 950 soluções operando pela Polícia Federal no controle de fronteiras do Brasil", opacity: "opacity-25", delay: 0.5 }
              ].map((stat, index) => (
                <motion.p
                  key={index}
                  className={`text-white text-lg lg:text-xl font-regular mb-6 ${stat.opacity}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: stat.opacity === "" ? 1 : (stat.opacity === "opacity-50" ? 0.5 : 0.25), y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                >
                  {stat.text.includes("20 mil") || stat.text.includes("140 milhões") || stat.text.includes("950") ? (
                    <span dangerouslySetInnerHTML={{
                      __html: stat.text.replace(/(20 mil|140 milhões|950)/g, '<span class="font-bold">$1</span>')
                    }} />
                  ) : stat.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection className="bg-gray-100 py-12 px-5 lg:py-20" animation="slideUp" delay={0.2}>
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
          <motion.h3 
            className="text-center text-black text-lg mb-8 lg:text-2xl lg:mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Instituições que confiam em nós
          </motion.h3>

          {/* ... keep existing code (Carousel with partner logos) */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl 2xl:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                "/lovable-uploads/ed866ebc-7aa2-4835-b2e6-2f39a991d949.png",
                "/lovable-uploads/7a019f42-12fc-4269-98f4-6994a333ef39.png",
                "/lovable-uploads/48b301b1-fdf5-45a4-8b07-ebd5e7d5437e.png",
                "/lovable-uploads/9a6cbc5b-e546-4b4e-a323-a7ec9e93c2dc.png",
                "/lovable-uploads/12db20ef-2f01-460d-87f4-83d899de7d4c.png",
                "/lovable-uploads/53186af8-5ef3-43a3-bb4b-e8804f209203.png",
                "/lovable-uploads/e8218c3a-9da8-4ddf-b504-a752426b6b10.png",
                "/lovable-uploads/aac75425-099b-451c-a45e-2251e27b4b05.png",
                "/lovable-uploads/7295f75e-74c3-4c4d-8a2b-dcbc7a961a25.png",
                "/lovable-uploads/dfe1f531-c15f-44f9-99ae-c52156488e7f.png"
              ].map((src, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <motion.div 
                    className="flex justify-center items-center h-16 lg:h-20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={src}
                      alt={`Partner ${index + 1}`}
                      className="h-10 lg:h-14 object-contain filter transition-all duration-300"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-gray-100 py-10 px-5 lg:py-20" animation="slideLeft" delay={0.2}>
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <AnimatedCard className="bg-[#1A1A1A] rounded-lg p-10 lg:p-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center h-[350px] sm:h-[450px]"
            style={{
              backgroundImage: 'url(/lovable-uploads/b5af785b-38bd-40eb-b433-1ac8cc397755.png)',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="mb-4 lg:mb-0 h-[450px]">
              <h2 className="w-full sm:w-9/12 text-white font-regular text-2xl mb-2 lg:text-3xl lg:mb-6">
                Temos uma equipe preparada para falar com você!
              </h2>
              <AnimatedButton className="mt-2 lg:mt-4">Fale conosco</AnimatedButton>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* News Section */}
      <AnimatedSection className="bg-gray-100 py-10 px-5 lg:py-20" animation="slideUp" delay={0.2}>
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <motion.div 
            className="flex justify-between items-center mb-6 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#7918f9] font-medium text-lg lg:text-3xl">
              Últimas Notícias
            </h2>
            <div className="flex items-center">
              <motion.button 
                className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full mr-2 lg:w-8 lg:h-8 hover:bg-[#7918f9]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* ... keep existing code (arrow icons) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M3.283 10.94a1.5 1.5 0 0 0 0 2.12l5.656 5.658a1.5 1.5 0 1 0 2.122-2.122L7.965 13.5H19.5a1.5 1.5 0 0 0 0-3H7.965l3.096-3.096a1.5 1.5 0 1 0-2.122-2.121z" /></g></svg>
              </motion.button>
              <motion.button 
                className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full lg:w-8 lg:h-8 hover:bg-[#7918f9]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z" /></g></svg>
              </motion.button>
            </div>
          </motion.div>

          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {[
              {
                title: "TSE adquire Kits para implementar biometria em todo o país",
                description: "Por meio de contratos assinados com a empresa Advance Inovação, a Coordenação Nacional de Sistemas e Informática da Justiça Federal, já tem à disposição mais 2.500 Kits Biométricos.",
                imageSrc: "/lovable-uploads/8c5ab50d-befe-4b9f-9e46-33f18a19ccb5.png"
              },
              {
                title: "Biometria, digital ID responde aos desafios de Manufacturing Analytics em 2024",
                description: "The Veris Match biometric capture systems from Advance Analytics, helping manufacturers track worker whereabouts and activities in ways that don't intrude on personal privacy, deliver efficiencies.",
                imageSrc: "/lovable-uploads/2bdbac5f-cf32-42a1-b0af-c07ded74b3cd.png"
              },
              {
                title: "Integrado Biometria | Facial Recognition | Best for Banks",
                description: "The Federal Police of Brazil development 1,000 fingerprint authentication kits from tech suppliers, as part of the Border Control Security Initiative for the department to process fingerprints in every.",
                imageSrc: "/lovable-uploads/4709cc25-ff72-45fb-816b-b23f5459ef4f.png"
              }
            ].map((news, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <NewsCard {...news} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
        animation="fadeIn"
        delay={0.3}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <motion.h2 
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12" 
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transformamos tecnologia em segurança
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedButton className="mx-auto">Fale conosco</AnimatedButton>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection className="bg-black text-white py-10 px-5 border-t border-gray-800 lg:py-16" animation="fadeIn" delay={0.2}>
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <AnimatedCard className="lg:col-span-1">
              <Logo className="mb-8" />
            </AnimatedCard>

            <AnimatedCard delay={0.1} className="mb-8 lg:mb-0">
              <h3 className="font-bold mb-4 lg:text-lg">Soluções</h3>
              <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
                <li>Cadastramento Eleitoral | TSE</li>
                <li>Instituições Financeiras | Bancos do Brasil</li>
                <li>Controle de Fronteiras | Polícia Federal</li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="mb-8 lg:mb-0">
              <h3 className="font-bold mb-4 lg:text-lg">Quem Somos</h3>
              <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
                <li>Nosso CEO</li>
                <li>Carreira</li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="mb-8 lg:mb-0">
              <h3 className="font-bold mb-4 lg:text-lg">Termos e Política</h3>
            </AnimatedCard>
          </div>

          <motion.div 
            className="mt-8 text-xs text-gray-500 lg:text-center lg:mt-12 lg:pt-8 lg:border-t lg:border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Copyright © 2025
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
