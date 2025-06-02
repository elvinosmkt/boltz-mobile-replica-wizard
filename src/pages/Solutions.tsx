
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
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8">
            Somos defensores da unicidade
          </h1>
          <p className="text-lg mb-8 lg:text-xl">
            3 milhões de equipamentos biométricos operando desafios em precisão e confiança
          </p>
          <Button className="mt-4 lg:mt-6">Saiba mais</Button>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-boltz-purple font-bold text-2xl mb-4 lg:text-4xl">
              Tecnologia a Serviço da Identificação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-black font-bold text-lg mb-3">Cadastro Civil e Emissão de Documentos:</h3>
                <p className="text-gray-600 text-sm">
                  Sistemas biométricos para emissão de documentos oficiais, garantindo segurança e autenticidade.
                </p>
              </div>

              <div>
                <h3 className="text-black font-bold text-lg mb-3">Identificação Biométrica Pós-Óbito:</h3>
                <p className="text-gray-600 text-sm">
                  Tecnologia para identificação precisa e confiável de indivíduos falecidos, facilitando a emissão do Laudo Médico do Atestado de Óbito.
                </p>
              </div>

              <div>
                <h3 className="text-black font-bold text-lg mb-3">Soluções Biométricas para Tribunais:</h3>
                <p className="text-gray-600 text-sm">
                  Autenticação digital segura para processos legais, controle de acesso e gestão eficiente de funcionários.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-black font-bold text-lg mb-3">Instituições Financeiras:</h3>
                <p className="text-gray-600 text-sm">
                  Soluções avançadas para autenticação e segurança no atendimento presencial e digital de bancos e empresas privadas.
                </p>
              </div>

              <div>
                <h3 className="text-black font-bold text-lg mb-3">Sistema Penitenciário e Criminal:</h3>
                <p className="text-gray-600 text-sm">
                  Controle de identidade de internos e tecnologia para operações policiais, tanto em campo quanto em instalações fixas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-black font-bold text-2xl mb-12 lg:text-4xl">
            Diferenciais
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/d538d6ce-daba-45a0-a20c-452827a2416d.png)'}}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-2">Tecnologia proprietária</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/9f746c55-c2c2-4b08-bb67-4488b8c2a10e.png)'}}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-2">Presença nacional</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/b55c47c3-0333-4c4c-b20c-14b0ce30daed.png)'}}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-2">Precisão e segurança</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-black font-bold text-2xl mb-12 lg:text-4xl">
            Casos de Sucesso
          </h2>

          <div className="space-y-8">
            <Link to="/solucoes/cadastramento-eleitoral" className="block">
              <div className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/65559614-7006-4dba-8288-66c5eabf2977.png)'}}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl mb-2">Solução para Cadastramento Eleitoral | TSE</h3>
                  <p className="text-gray-300 text-sm mb-4">Mais de 20 mil kits biométricos distribuídos em todo o território nacional para cadastramento eleitoral.</p>
                  <Button variant="primary" className="w-fit">Saiba mais</Button>
                </div>
              </div>
            </Link>

            <Link to="/solucoes/instituicoes-financeiras" className="block">
              <div className="relative rounded-lg overflow-hidden h-64 bg-blue-600">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl mb-2">Solução para Instituições Financeiras | Banco do Brasil</h3>
                  <p className="text-gray-300 text-sm mb-4">Tecnologia biométrica para segurança bancária e identificação de clientes.</p>
                  <Button variant="primary" className="w-fit">Saiba mais</Button>
                </div>
              </div>
            </Link>

            <Link to="/solucoes/controle-fronteiras" className="block">
              <div className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/f28d5639-f76a-440c-9bbf-658384e67857.png)'}}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl mb-2">Controle de Fronteiras | Polícia Federal</h3>
                  <p className="text-gray-300 text-sm mb-4">Mais de 950 soluções operando no controle de fronteiras do Brasil.</p>
                  <Button variant="primary" className="w-fit">Saiba mais</Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-5 lg:py-40 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">
            Transforme seus processos com segurança
          </h2>
          <Link to="/contato">
            <Button className="mx-auto">Fale conosco</Button>
          </Link>
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
