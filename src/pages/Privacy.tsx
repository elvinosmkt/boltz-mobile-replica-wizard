
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-objective">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
            Compromisso com a Privacidade
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Levamos a sério a segurança dos seus dados.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Na OpenBio, aplicamos tecnologias avançadas para proteger sua privacidade com total transparência e em conformidade com as normas vigentes.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Saiba como tratamos suas informações de forma responsável e segura.
            </p>
            
            <Button className="mb-8">Saiba mais</Button>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg p-8 relative overflow-hidden">
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-60"></div>
            
            <div className="relative z-10">
              <h2 className="text-white font-bold text-2xl mb-6">
                Tem dúvidas sobre privacidade?
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Protegemos seus dados com transparência e responsabilidade. Para qualquer solicitação ou esclarecimento, entre em contato.
              </p>
              
              <Button className="mb-4">
                privacidade@grupoadvance.com.br
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policies */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-8">Política de Privacidade</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">1. Coleta de Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coletamos apenas os dados necessários para fornecer nossos serviços biométricos, sempre com seu consentimento explícito e em conformidade com a LGPD.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">2. Uso das Informações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Suas informações são utilizadas exclusivamente para identificação e autenticação, nunca sendo compartilhadas com terceiros sem sua autorização.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">3. Segurança dos Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos as mais avançadas tecnologias de criptografia e segurança para proteger seus dados biométricos contra acessos não autorizados.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">4. Seus Direitos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados a qualquer momento, conforme estabelecido pela LGPD.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">5. Contato</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre nossa política de privacidade, entre em contato através do email: privacidade@grupoadvance.com.br
                </p>
              </div>
            </div>
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
            Copyright Openbio 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
