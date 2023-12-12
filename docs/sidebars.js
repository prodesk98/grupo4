
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      label: "Introdução",
      id: "intro",
    },
    {
      type: "category",
      label: "Contexto da Indústria",
      items: [
        "Contexto da Indústria/1.1 Análise de Impacto Ético",
        "Contexto da Indústria/1.2 TAM-SAM-SOM",
        "Contexto da Indústria/1.3 Análise Financeira",
        "Contexto da Indústria/1.4 Matriz de Riscos",
        "Contexto da Indústria/1.5 Matriz de Oceano Azul",
      ],
    },
    {
      type: "category",
      label: "Proposta de Solução",
      items: [
        "Proposta de Solução/2.1 Arquitetura da Solução",
        "Proposta de Solução/2.2 Personas",
        "Proposta de Solução/2.3 Histórias de Usuário",
        "Proposta de Solução/2.4 Levantamento de Requisitos",
        "Proposta de Solução/2.5 Canvas Proposta de Valor",
        "Proposta de Solução/2.6 Jornada do Usuário",
      ],
    },
    {
      type: "category",
      label: "Desenvolvimento da Solução",
      items: [
        "Desenvolvimento da Solução/3.1 Design Patterns",
        "Desenvolvimento da Solução/3.2 Mapeamento e navegação",
        "Desenvolvimento da Solução/3.3 Chatbot",
        "Desenvolvimento da Solução/3.4 Banco de Dados",
        "Desenvolvimento da Solução/3.5 LLM",
        "Desenvolvimento da Solução/3.6 Interface de admin",
        "Desenvolvimento da Solução/3.7 Interface do robô",
        "Desenvolvimento da Solução/3.8 Backend de interfaces",
        "Desenvolvimento da Solução/3.9 Logs",
        "Desenvolvimento da Solução/3.10 WebSocket",
        "Desenvolvimento da Solução/3.12 Demonstração",
        "Desenvolvimento da Solução/3.11 Terraform e AWS",        
      ],
    },
    {
      type: "doc",
      label: "Sprint Review",
      id: "Apresentações",
    },
    {
      type: "category",
      label: "Referências",
      items: [
        "Referências/Análise de mercado",
        "Referências/Análise Financeira",
      ],
    },
  ],
};

module.exports = sidebars;
