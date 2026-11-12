# Ana Beatriz Tattoo — Portfólio & Estúdio Autoral

Landing page institucional e portfólio desenvolvido para a tatuadora Ana Beatriz (Florianópolis, SC), com foco em estética editorial, performance, acessibilidade e experiência mobile-first.

🔗 ** https://ana-beatriz-tattoo.vercel.app **

---

## ✨ Destaques Técnicos & UX

- **Design Editorial & Responsivo:** Layout construído com abordagem *Mobile-First*, tipografia customizada (`Italiana`, `Urbanist`) e paleta contrastante em preto e rosa.
- **Carrossel Interativo Nativo:** Componente reutilizável com suporte a *drag-to-scroll* (arraste fluido via mouse no desktop e touch no mobile) usando `scroll-snap` nativo, sem dependência de bibliotecas pesadas.
- **Tooltip Dinâmico:** Balão flutuante que acompanha o cursor com cálculo automático de limites de tela (desativado em dispositivos móveis).
- **Performance & Otimização:** Uso de imagens modernas (`AVIF` com fallback em `JPG`) via tag `<picture>`, carregamento sob demanda (`loading="lazy"`) e vídeo de fundo otimizado com `preload="metadata"`.
- **Acessibilidade (A11y) & SEO:** Estrutura HTML semântica, atributos `aria-label`, `aria-hidden` para elementos puramente decorativos e textos alternativos descritivos.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **Tailwind CSS**
- **HTML5 / CSS3 / JavaScript (ES6+)**

---

## 🚀 Como rodar o projeto localmente

```bash
# Clone este repositório
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
