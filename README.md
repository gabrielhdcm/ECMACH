# 🏗️ ECMACH - Equipamentos Industriais

## Site Institucional com Galeria de Projetos

Versão focada em **apresentação de projetos reais** com **paleta azul industrial** e design técnico robusto.

---

## ✨ Características Principais

### 🎨 Design Industrial Profissional
- ✅ Paleta azul industrial (código: #003d7a, #0066cc, #00a3ff)
- ✅ Visual técnico e robusto (inspirado em engenharia industrial)
- ✅ Elementos gráficos simples e funciona is
- ✅ Responsivo 100% (mobile-first)

### 📸 Galeria de Projetos (DESTAQUE PRINCIPAL)
- ✅ Grid moderno com 8 projetos
- ✅ Filtros funcionais por categoria
- ✅ Hover suave com overlay
- ✅ Modal interativo com detalhes completos
- ✅ Problema → Solução → Resultado
- ✅ Tags para cada projeto

### ⚡ Interatividade
- ✅ Filtros de galeria em tempo real
- ✅ Modal com animações
- ✅ Form de contato com validação
- ✅ Menu mobile responsivo
- ✅ Botão WhatsApp flutuante
- ✅ Botão voltar ao topo

### 📱 Performance
- ✅ Carregamento rápido
- ✅ Otimizado para mobile
- ✅ Sem dependências pesadas
- ✅ CSS modular e organizado

---

## 📁 Arquivos do Projeto

```
ECMACH/
├── index.html       (Estrutura HTML)
├── style.css        (Estilos responsivos)
├── script.js        (Interatividades)
└── README.md        (Este arquivo)
```

---

## 🚀 Como Usar

### 1. Abrir no Navegador
```
1. Clique 2x em index.html
   OU
2. Arraste para navegador
   OU
3. Use Live Server (VS Code)
```

### 2. Com Live Server (VS Code)
```
1. Instale extensão "Live Server"
2. Botão direito → "Open with Live Server"
3. Acesso automaticamente em localhost:5500
```

### 3. Com Python (Local)
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

---

## 🎯 Estrutura da Página

### Hero Section
- Headline impactante
- Subheadline descritivo
- 2 CTAs principais
- Animação de scroll

### Sobre
- Texto próximo e direto
- 3 estatísticas
- 3 diferenciais principais

### **Galeria de Projetos (SEÇÃO PRINCIPAL)**
- Filtros: Todos, Despoeiramento, Ciclones, Filtros, Manutenção
- 8 projetos com imagens
- Hover com botão "Ver Projeto"
- Modal com detalhes completos

### Diferenciais
- 4 cards com benefícios
- Ícones ilustrativos
- Hover effect

### CTA Forte
- Chamada à ação clara
- Botão destacado

### Contato
- Formulário simples (nome, empresa, email, telefone, necessidade)
- 4 cards de informação (telefone, email, WhatsApp, LinkedIn)

### Footer
- Logo e descrição
- Links rápidos
- Redes sociais

---

## ⚙️ Customização

### Alterar Cores

Abra `style.css` e modifique as variáveis:

```css
:root {
    --primary: #003d7a;          /* Azul escuro */
    --secondary: #0066cc;        /* Azul médio */
    --accent: #00a3ff;           /* Azul claro */
}
```

**Exemplos de paletas:**

Verde Industrial:
```css
--primary: #004d40;
--secondary: #00695c;
--accent: #00897b;
```

Cinza + Laranja:
```css
--primary: #37474f;
--secondary: #455a64;
--accent: #ff6f00;
```

### Adicionar/Editar Projetos

Abra `script.js` e edite o array `projectsData`:

```javascript
const projectsData = [
    {
        id: 1,
        title: "Nome do Projeto",
        company: "Seu Cliente/Setor",
        problem: "Qual era o problema?",
        solution: "Que solução foi desenvolvida?",
        results: "Quais foram os resultados?"
    },
    // ... adicione mais projetos
];
```

### Trocar Imagens

As imagens são placeholders. Para adicionar imagens reais:

**No HTML (index.html):**
```html
<div class="image-placeholder"><i class="fas fa-wind"></i></div>

<!-- Mude para: -->
<img src="seu-projeto.jpg" alt="Descrição" style="width:100%; height:100%; object-fit:cover;">
```

### Dados de Contato

Procure por `5511999999999` no arquivos e substitua por:
- Seu número WhatsApp com código país (+55 11 número)
- Email: `contato@ecmach.com.br`
- LinkedIn: `linkedin.com/company/ecmach`

---

## 🎨 Paleta de Cores

| Uso | Hex | RGB |
|-----|-----|-----|
| Primário | #003d7a | 0, 61, 122 |
| Secundário | #0066cc | 0, 102, 204 |
| Acentode | #00a3ff | 0, 163, 255 |
| Fundo | #f5f5f5 | 245, 245, 245 |
| Texto | #333 | 51, 51, 51 |
| Texto Claro | #666 | 102, 102, 102 |

---

## 📱 Responsividade

O site é responsivo em:

- **Desktop**: 1200px+
- **Tablet**: 768px-1199px
- **Mobile**: até 767px

Teste com **F12 → Modo Responsivo** no navegador.

---

## ✅ Funcionalidades Implementadas

- [x] Navegação fixa com logo
- [x] Menu mobile com hamburger
- [x] Hero com animações
- [x] Galeria de projetos com 8 itens
- [x] Filtros funcionais de categoria
- [x] Modal interativo
- [x] Animações suaves
- [x] Form com validação
- [x] Integração WhatsApp
- [x] Botão voltar ao topo
- [x] Footer com redes sociais
- [x] Máscara de telefone
- [x] Responsive 100%

---

## 🔧 Customizações Avançadas

### Addicionais Quantidades de Projetos

Para adicionar mais de 8 projetos:

1. **No `script.js`**: Adicione ao array `projectsData`
2. **No `index.html`**: Adicione nova `div.gallery-item` com `data-category`
3. **Teste os filtros**: Eles funcionarão automaticamente

### Adicionar Nova Categoria

1. **Adicione no HTML** um novo botão filter:
```html
<button class="filter-btn" data-filter="sua-categoria">
    <i class="fas fa-icone"></i> Sua Categoria
</button>
```

2. **Adicione `data-category` nos itens**:
```html
<div class="gallery-item" data-category="sua-categoria">
```

Os filtros funcionarão automaticamente via JavaScript!

### Trocar Ícones

Todos os ícones usam **Font Awesome** (6.4.0).

Ver mais em: https://fontawesome.com/icons

### Personalizar Modal

Edite em `script.js` a função `openModal()` para adicionar mais campos ou imagens.

---

## 🚀 Deployment

### Opção 1: Netlify (Recomendado)
```
1. Acesse netlify.com
2. Clique "New site from Git"
3. Selecione seu repositório
4. Deploy automático!
```

### Opção 2: GitHub Pages
```
1. Crie repositório seu-usuario.github.io
2. Faça push dos arquivos
3. Acesse: seu-usuario.github.io
```

### Opção 3: Hostinger / Outro Host
```
1. FTP os arquivos para public_html
2. Acesse seu domínio
```

---

## 📊 SEO Básico

Meta tags já estão no `<head>`:
- Title
- Description
- Keywords
- OpenGraph tags

Para melhorar:
1. Adicione Google Analytics
2. Envie Sitemap ao Google Search Console
3. Otimize imagens com comp

ressão
4. Adicione schema markup

---

## ⚡ Performance

Site otimizado para:
- ✅ Carregamento rápido
- ✅ Pouco uso de recursos
- ✅ Sem CDN pesado
- ✅ Sem frameworks desnecessários

**Dica**: Comprima imagens em tinypng.com

---

## 🐛 Troubleshooting

### Filtros não funcionam
- Verifique se `data-category` nos itens match os `data-filter` dos botões

### Modal não abre
- Certifique-se que `script.js` está carregando
- Pressione F12 e verifique console de erros

### WhatsApp não abre
- Verifique se número tem código país (+55)
- Teste em outro navegador

### Responsividade ruim
- Verifique meta viewport tag
- Teste com F12 → Modo Responsivo

---

## 📝 Diretrizes de Conteúdo

### Headlines que Vendem
```
❌ "Veja nossos projetos"
✅ "Projetos Reais que Geraram Resultados"
```

### Descrições
```
❌ "Sistema de filtração"
✅ "Sistema de Filtração - 95% de Eficiência"
```

### Problem → Solution → Result
Cada projeto deve ter:
1. ❌ Qual era ANTES
2. ✅ Qual foi a SOLUÇÃO
3. 📈 Qual foi o RESULTADO

---

## 🎁 Extras

O site já vem com:
- ✅ Animações suaves
- ✅ Transições CSS
- ✅ Ícones profissionais
- ✅ Validação de formulário
- ✅ Máscara de telefone
- ✅ Smooth scroll
- ✅ Layout grid responsivo

---

## 📞 Suporte

Para atualizar o site:

1. **Alterar textos**: Edite `index.html`
2. **Alterar cores**: Edite variáveis em `style.css`
3. **Alterar projetos**: Edite `script.js`
4. **Adicionar imagens**: Adicione arquivos e refira no HTML

---

## 🎉 Pronto para Lançamento!

Seu site está pronto para:
- ✅ Converter visitantes em leads
- ✅ Transmitir autoridade técnica
- ✅ Showcase de projetos reais
- ✅ Gerar confiança em clientes

**Próximo passo**: Registre um domínio e lance para o público!

---

## 📄 Licença

Desenvolvido exclusivamente para ECMACH Equipamentos Industriais.
Todos os direitos reservados.

---

**Estrutura criada em**: Abril de 2026
**Version**: 2.0 (Galeria Focada)
**Status**: ✅ Pronto para Produção

