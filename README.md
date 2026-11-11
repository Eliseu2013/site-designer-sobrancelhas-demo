# Site para Designer de Sobrancelhas (Demo)

Site de apresentação e catálogo de serviços para um estúdio de design de sobrancelhas, com agendamento direto pelo WhatsApp.

> ⚠️ **Versão de demonstração.** Este site foi feito para uma cliente real. Nesta versão de portfólio, o nome, o telefone, o endereço, o Instagram e os preços foram trocados por **dados fictícios**.

<!-- PRINT: coloque aqui um print ou GIF do site -->
> 📸 _Espaço reservado para um print do site._

## Funcionalidades

- Catálogo de serviços com preço e descrição
- Cada serviço tem um botão que abre o WhatsApp com a mensagem já escrita
- Botão flutuante de WhatsApp
- Seções de apresentação, localização e contato
- Animações suaves e layout responsivo

## Tecnologias usadas

- React + TypeScript
- Tailwind CSS
- Motion (animações)
- Vite

## Como rodar o projeto

1. Instale o [Node.js](https://nodejs.org/) (versão 20 ou mais nova).
2. Baixe o repositório:
   ```bash
   git clone https://github.com/Eliseu2013/site-designer-sobrancelhas-demo.git
   cd site-designer-sobrancelhas-demo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra no navegador: `http://localhost:3000`

> Todos os textos, preços e contatos ficam em um só arquivo: `src/config.ts`. Para adaptar o site para outro cliente, basta editar esse arquivo.

## O que aprendi

- Separar o conteúdo (`src/config.ts`) dos componentes, para reaproveitar o site
- Gerar links do WhatsApp com mensagens personalizadas por serviço
- Componentizar a página em React (Header, Hero, ServicesList, ContactFooter...)
- Fazer animações com a biblioteca Motion

## Próximos passos

- Remover dependências que vieram do template e não são usadas (`@google/genai`, `express`)
- Adicionar galeria de fotos de trabalhos (com imagens livres de direitos)
- Publicar uma demo online

## Autor

**Eliseu Fernandes** — estudante de Análise e Desenvolvimento de Sistemas (FAETERJ)

- GitHub: [@Eliseu2013](https://github.com/Eliseu2013)
- Contato: _[e-mail profissional — a adicionar]_
