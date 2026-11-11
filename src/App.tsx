/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Studio Olhar (Demo) - Designer de Sobrancelhas
 * Identidade Visual herdada da foto: Fundo preto/grafite texturizado fosco,
 * monograma SO com estrela, detalhes em ouro metálico, tipografia serifada de luxo.
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesList } from './components/ServicesList';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-pattern text-[#f0f0f0] flex flex-col selection:bg-[#c5a059] selection:text-black">
      
      {/* Cabeçalho com Logo Monograma SO e Botão WhatsApp */}
      <Header />

      {/* Seção Principal */}
      <main className="flex-1">
        {/* Seção Hero com Identidade Visual Premium (Henna, Pinça, Navalha, Na Cera) */}
        <Hero />

        {/* Tabela de Serviços e Valores com Agendamento no WhatsApp */}
        <ServicesList />

        {/* Sobre a Especialista e Cuidados de Higiene & Visagismo */}
        <AboutSection />

        {/* Destaque de Localização do Espaço (Rua Exemplo, 123) */}
        <LocationSection />
      </main>

      {/* Seção de Contato e Rodapé */}
      <ContactFooter />

      {/* Botão Flutuante de Contato Rápido WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
}
