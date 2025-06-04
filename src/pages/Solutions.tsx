
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { DifferentialCard } from '@/components/DifferentialCard';
import { OptimizedImage } from '@/components/OptimizedImage';
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
          <h1 className="text-4xl font-medium mb-6 leading-tight lg:text-6xl 2xl:text-7xl lg:mb-8">
            Somos defensores da unicidade
          </h1>
          <div className='w-full flex items-center justify-center'> 
            <p className="w-1/2 2xl:w-2/3 text-lg mb-8 lg:text-xl 2xl:text-3xl">
              A identidade de cada pessoa merece ser protegida com precisão e confiança
            </p>
          </div>
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
            <DifferentialCard
              title="Tecnologia proprietária"
              backgroundImage="/lovable-uploads/d538d6ce-daba-45a0-a20c-452827a2416d.png"
            />

            <DifferentialCard
              title="Presença nacional"
              backgroundImage="/lovable-uploads/9f746c55-c2c2-4b08-bb67-4488b8c2a10e.png"
            />

            <DifferentialCard
              title="Precisão e segurança"
              backgroundImage="/lovable-uploads/b55c47c3-0333-4c4c-b20c-14b0ce30daed.png"
            />
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default Solutions;
