import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { StatBox } from '@/components/StatBox';
import { NewsCard } from '@/components/NewsCard';
import { Logo } from '@/components/Logo';
import { ArrowRight } from 'lucide-react';
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
      <section 
        className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/65559614-7006-4dba-8288-66c5eabf2977.png)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-lg mx-auto lg:max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Protegendo o presente para construir o futuro
          </h1>
          <Button className="mt-4 lg:mt-6">Fale conosco</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-10 px-5 lg:py-20">
        <div className="max-w-lg mx-auto lg:max-w-4xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-boltz-purple font-bold text-lg mb-3 lg:text-2xl lg:mb-6">
                Defendemos o que te torna singular
              </h2>
              <p className="text-black text-sm mb-4 lg:text-base lg:mb-6 lg:leading-relaxed">
                <span className="font-bold">Tecnologia é identidade digital única.</span> Soluções biométricas garantem que sua identificação seja precisa, segura e sem complicações. Este é o princípio fundamental na nossa abordagem de segurança: entrelaçamos recursos avançados de autenticação para garantir que sua identidade digital seja única e protegida.
              </p>
              <button className="inline-flex items-center text-boltz-purple font-medium lg:text-lg">
                <span className="mr-2">Saiba mais</span>
                <ArrowRight size={16} className="lg:w-5 lg:h-5" />
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500">Imagem ilustrativa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="relative py-16 px-5 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/lovable-uploads/f28d5639-f76a-440c-9bbf-658384e67857.png)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-white font-bold text-2xl mb-4 lg:text-4xl lg:mb-6">
              Números que sustentam decisões
            </h2>
            <p className="text-gray-300 text-base lg:text-xl max-w-2xl mx-auto">
              Inovação que move o <span className="font-bold">Brasil</span> para quem mais importa: <span className="text-boltz-purple font-bold">você</span>
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            <div className="text-center">
              <p className="text-white text-lg lg:text-xl font-medium mb-2">
                Mais de <span className="font-bold">20 mil kits</span> de cadastramento biométrico integrados ao TSE
              </p>
              <p className="text-gray-400 text-sm lg:text-base">
                Presença em todos os estados brasileiros
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-white text-lg lg:text-xl font-medium mb-2">
                Mais de <span className="font-bold">140 milhões</span> de brasileiros cadastrados com nossas soluções biométricas
              </p>
              <p className="text-gray-400 text-sm lg:text-base">
                1/3 de todos os equipamentos entregues pelo Brasil em 2024
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-white text-lg lg:text-xl font-medium mb-2">
                Mais de <span className="font-bold">950 soluções</span> operando pela Polícia Federal no controle de fronteiras do Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 py-12 px-5 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-gray-700 text-lg mb-8 lg:text-xl lg:mb-12 font-medium">
            Instituições que confiam em nós
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/ed866ebc-7aa2-4835-b2e6-2f39a991d949.png" 
                    alt="Politec" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/7a019f42-12fc-4269-98f4-6994a333ef39.png" 
                    alt="Justiça e Segurança Pública" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/48b301b1-fdf5-45a4-8b07-ebd5e7d5437e.png" 
                    alt="Tribunal Superior Eleitoral" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/9a6cbc5b-e546-4b4e-a323-a7ec9e93c2dc.png" 
                    alt="Polícia Militar" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/12db20ef-2f01-460d-87f4-83d899de7d4c.png" 
                    alt="Polícia Federal" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/53186af8-5ef3-43a3-bb4b-e8804f209203.png" 
                    alt="PGE Amapá" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/e8218c3a-9da8-4ddf-b504-a752426b6b10.png" 
                    alt="Polícia Rodoviária" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/aac75425-099b-451c-a45e-2251e27b4b05.png" 
                    alt="Polícia Civil" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/7295f75e-74c3-4c4d-8a2b-dcbc7a961a25.png" 
                    alt="Esporte e Lazer" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex justify-center items-center h-16 lg:h-20">
                  <img 
                    src="/lovable-uploads/dfe1f531-c15f-44f9-99ae-c52156488e7f.png" 
                    alt="Brasão Nacional" 
                    className="h-10 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-10 px-5 lg:py-20">
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <div className="bg-[#1A1A1A] rounded-lg p-5 lg:p-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-white font-bold text-xl mb-2 lg:text-3xl lg:mb-6">
                Temos uma equipe preparada para falar com você!
              </h2>
              <Button className="mt-2 lg:mt-4">Fale conosco</Button>
            </div>
            <div className="mt-4 lg:mt-0">
              <img 
                src="/lovable-uploads/b5af785b-38bd-40eb-b433-1ac8cc397755.png" 
                alt="Team working" 
                className="w-full h-40 object-cover rounded-md lg:h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-10 px-5 lg:py-20">
        <div className="max-w-lg mx-auto lg:max-w-6xl">
          <div className="flex justify-between items-center mb-6 lg:mb-12">
            <h2 className="text-boltz-purple font-bold text-lg lg:text-2xl">
              Últimas Notícias
            </h2>
            <div className="flex items-center">
              <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full mr-2 lg:w-8 lg:h-8">
                ◀
              </button>
              <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full lg:w-8 lg:h-8">
                ▶
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            <NewsCard 
              title="TSE adquire Kits para implementar segurança em novas urnas"
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
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">
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
                <li>Instituições Financeiras | Bancos do Brasil</li>
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

export default Index;
