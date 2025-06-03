
import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyType: 'private',
    nome: '',
    sobrenome: '',
    empresa: '',
    email: '',
    telefone: '',
    estado: '',
    mensagem: '',
    contactPreference: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 lg:text-6xl text-white">
            Fale conosco
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg p-8 relative overflow-hidden border border-gray-800">
            {/* Background image */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url(/lovable-uploads/5ec49cea-c136-42d6-9491-002adccbeaab.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* Purple gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600 to-transparent opacity-60"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Company Type */}
              <div className="mb-6">
                <Label className="text-white text-lg font-medium mb-4 block">Tipo de Empresa</Label>
                <div className="flex gap-6">
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="companyType"
                      value="private"
                      checked={formData.companyType === 'private'}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-[#7918f9]"
                    />
                    Setor Privado
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="companyType"
                      value="public"
                      checked={formData.companyType === 'public'}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-[#7918f9]"
                    />
                    Setor Público/Governo
                  </label>
                </div>
              </div>

              {/* Personal Data */}
              <div className="mb-6">
                <Label className="text-white text-lg font-medium mb-4 block">Dados</Label>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="nome" className="text-white text-sm mb-2 block">Nome</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="sobrenome" className="text-white text-sm mb-2 block">Sobrenome</Label>
                    <Input
                      id="sobrenome"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="empresa" className="text-white text-sm mb-2 block">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="bg-white border-none text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" className="text-white text-sm mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-none text-black"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="telefone" className="text-white text-sm mb-2 block">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="estado" className="text-white text-sm mb-2 block">Estado</Label>
                    <Input
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="mensagem" className="text-white text-sm mb-2 block">Descreva a solução que precisa</Label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 rounded-md border-none resize-none text-black"
                    required
                  />
                </div>
              </div>

              {/* Contact Preference */}
              <div className="mb-8">
                <Label className="text-white text-lg font-medium mb-4 block">Preferência de contato</Label>
                <div className="flex gap-6">
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-[#7918f9]"
                    />
                    Email
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="whatsapp"
                      checked={formData.contactPreference === 'whatsapp'}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-[#7918f9]"
                    />
                    WhatsApp
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="phone"
                      checked={formData.contactPreference === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-[#7918f9]"
                    />
                    Ligação
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-auto">
                Enviar
              </Button>
            </form>
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

export default Contact;
