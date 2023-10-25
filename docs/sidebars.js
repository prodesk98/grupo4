/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Sumário',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Problema',
      items: ['Problema/1.1 Descrição do Problema'],
    },
    {
      type: 'category',
      label: 'Proposta de Solução',
      items: ['Proposta de Solução/2.1 Arquitetura da Solução', 'Proposta de Solução/2.2 Personas','Proposta de Solução/2.3 Histórias de Usuário', 'Proposta de Solução/2.4 Levantamento de Requisitos', '2.5 Canvas Proposta de Valor'],
    },
    {
      type: 'category',
      label: 'Contexto da Indústria',
      items: ['Contexto da Indústria/3.1 Análise de Impacto Ético', 'Contexto da Indústria/3.3 Análise de Mercado','Contexto da Indústria/3.4 Análise Financeira','Contexto da Indústria/3.5 Matriz de Riscos'],
    },
    {
      type: 'category',
      label: 'Referências',
      items: ['Referências/Análise de mercado'],
    },
  ],

};

module.exports = sidebars;
