
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const Solutions = () => {
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
          <h1 className="text-4xl font-medium mb-6 leading-tight lg:text-6xl 2xl:text-7xl lg:mb-8">
            Somos defensores da unicidade
          </h1>
          <div className='w-full flex items-center justify-center'> <p className="w-1/2 2xl:w-2/3  text-lg mb-8 lg:text-xl 2xl:text-3xl">
            A identidade de cada pessoa merece ser protegida com precisão e confiança
          </p></div>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-48">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
            <div className="mb-12">
              <h2 className="text-[#7918f9] font-bold text-2xl mb-4 lg:text-6xl">
                Tecnologia a Serviço da Identificação
              </h2>
            </div>
            <div>
              <h3 className="text-black font-bold text-2xl mb-3">Cadastro Civil e Emissão de Documentos:</h3>
              <p className="text-gray-600 text-2xl">
                Soluções biométricas para emissão de documentos civis, garantindo segurança e autenticidade.
              </p>
              <div className='h-1 bg-[#7918f9] w-[100px] mt-10'></div>
            </div>

            <div>
              <h3 className="text-black font-bold text-2xl mb-3">Identificação Biométrica Pós-Óbito:</h3>
              <p className="text-gray-600 text-2xl">
                Tecnologia para identificação post mortem com soluções exclusivas, facilitando a emissão de Laudos Médicos de Atestado de Óbito.
              </p>
              <div className='h-1 bg-[#7918f9] w-[100px] mt-10'></div>
            </div>

            <div>
              <h3 className="text-black font-bold text-2xl mb-3">Soluções Biométricas para Tribunais:</h3>
              <p className="text-gray-600 text-2xl">
                Autenticação segura digital para controle de acesso e identificação precisa de funcionários.
              </p>
              <div className='h-1 bg-[#7918f9] w-[100px] mt-10'></div>
            </div>

            <div>
              <h3 className="text-black font-bold text-2xl mb-3">Instituições Financeiras:</h3>
              <p className="text-gray-600 text-2xl">
                Soluções avançadas para o segmento financeiro com experiência comprovada em projetos de larga escala para prevenção a fraudes.
              </p>
              <div className='h-1 bg-[#7918f9] w-[100px] mt-10'></div>
            </div>

            <div>
              <h3 className="text-black font-bold text-2xl mb-3">Sistema Penitenciário e Criminal:</h3>
              <p className="text-gray-600 text-2xl">
                Controle de identificação de internos e visitantes, integrado com instituições físicas.
              </p>
              <div className='h-1 bg-[#7918f9] w-[100px] mt-10'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-black font-medium text-2xl mb-12 lg:text-5xl">
            Diferenciais
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center" style={{
              backgroundImage: 'url(/lovable-uploads/d538d6ce-daba-45a0-a20c-452827a2416d.png)',
              backgroundPosition: 'center left',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>

              <div className="relative z-10 p-10 pt-14 h-full flex flex-col justify-start">
                <h3 className="text-white font-regular text-3xl mb-2">Tecnologia proprietária</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/9f746c55-c2c2-4b08-bb67-4488b8c2a10e.png)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-10 pt-14 h-full flex flex-col justify-start">
                <h3 className="text-white font-regular text-3xl mb-2">Presença nacional</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center" style={{
              backgroundImage: 'url(/lovable-uploads/b55c47c3-0333-4c4c-b20c-14b0ce30daed.png)',
              backgroundPosition: 'center left',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-10 pt-14 h-full flex flex-col justify-start">
                <h3 className="text-white font-regular text-3xl mb-2">Precisão e segurança</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-black font-medium text-2xl mb-12 lg:text-5xl">
            Cases de Sucesso
          </h2>

          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
              backgroundImage: 'url(/lovable-uploads/0ef50083-4702-430b-9cee-ff65b056dffb.png)',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                <h3 className="text-white font-medium text-2xl mb-4 lg:text-4xl">Solução para Cadastramento Eleitoral | TSE</h3>
                <p className="text-white text-xl mb-4 max-w-2xl"><strong>Maior parque</strong> de cadastramento biométrico <strong>do mundo.</strong></p>
                <p className="text-white text-xl mb-4 max-w-2xl">Fornecendo tecnologia para o TSE desde 2008.</p>
                <p className="text-white text-xl mb-6 max-w-2xl">Mais de <strong>25 mil kits de cadastramento biométrico</strong> entregues.</p>
                <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
              backgroundImage: 'url(/lovable-uploads/b5d86670-783b-477d-b178-5b2d89b11327.png)',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                <h3 className="text-white font-medium text-2xl mb-4 lg:text-4xl">Controle de Fronteiras | Polícia Federal</h3>
                <p className="text-white text-xl mb-4 max-w-2xl">Tecnologia avançada para segurança nas fronteiras.</p>
                <p className="text-white text-xl mb-4 max-w-2xl">Sistemas biométricos em pontos estratégicos.</p>
                <p className="text-white text-xl mb-6 max-w-2xl">Mais de 950 soluções operando no controle de fronteiras do Brasil.</p>
                <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center bg-black" style={{
              backgroundImage: 'url(/lovable-uploads/11dc74b0-c29e-4cdb-91ae-661240eff951.png)',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center pb-16">
                <h3 className="text-white font-medium text-2xl mb-4 lg:text-4xl">Solução para Instituições Financeiras | Banco do Brasil</h3>
                <p className="text-white text-xl mb-4 max-w-2xl">Tecnologia biométrica para segurança bancária.</p>
                <p className="text-white text-xl mb-4 max-w-2xl">Identificação precisa e confiável de clientes.</p>
                <p className="text-white text-xl mb-6 max-w-2xl">Soluções implementadas em agências em todo o país.</p>
                <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">Saiba mais</Button>
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
              <h3 className="font-bold mb-4 lg:text-lg">Termos e Política</h3>
              <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
                <li><Link to="/privacidade" className="hover:text-white">Privacidade</Link></li>
              </ul>
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

export default Solutions;
