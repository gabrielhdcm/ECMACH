# 🎨 Guia de Customização - ECMACH

## Personalizando o Site para Sua Marca

---

## 1️⃣ CORES E BRANDING

### Alterar Paleta de Cores

**Arquivo**: `style.css` (linhas 1-19)

```css
:root {
    --primary: #003d7a;        /* Azul principal */
    --primary-dark: #002d5c;   /* Azul escuro */
    --secondary: #0066cc;      /* Azul secundário */
    --accent: #00a3ff;         /* Azul claro (CTAs) */
    --success: #4caf50;        /* Verde */
    --danger: #f44336;         /* Vermelho */
    --text-dark: #333;
    --text-light: #666;
    --bg-light: #f5f5f5;
}
```

### Sugestões de Paletas Prontas

#### Paleta Vermelha (Original)
```css
--primary: #c92a2a;
--primary-dark: #a61e4d;
--secondary: #ff6b6b;
--accent: #ffa94d;
```

#### Paleta Verde Industrial
```css
--primary: #004d40;
--primary-dark: #003d33;
--secondary: #00695c;
--accent: #26a69a;
```

#### Paleta Laranja Energética
```css
--primary: #e65100;
--primary-dark: #bf360c;
--secondary: #ff6f00;
--accent: #ffb74d;
```

#### Paleta Cinza Sofisticada
```css
--primary: #424242;
--primary-dark: #212121;
--secondary: #616161;
--accent: #2196f3;
```

---

## 2️⃣ TEXTOS PRINCIPAIS

### Alterar Headlines

**Arquivo**: `index.html`

**Linha ~75** - Hero Principal:
```html
<!-- AGORA: -->
<h1>Soluções Industriais <span style="color: var(--accent);">Sob Medida</span></h1>

<!-- MUDE PARA: -->
<h1>Sua Necessidade + Nossa Expertise = <span>Sucesso</span></h1>
```

**Linha ~110** - Sobre:
```html
<!-- AGORA: -->
<h2>Sobre a ECMACH</h2>

<!-- MUDE PARA: -->
<h2>20+ Anos Transformando Desafios em Soluções</h2>
```

**Linha ~146** - Galeria:  
```html
<!-- AGORA: -->
<h2 class="section-title">Galeria de Projetos</h2>

<!-- MUDE PARA: -->
<h2 class="section-title">Projetos que Provam Nossa Experiência</h2>
```

### Alterar Subtextos

**Linha ~77** - Subtítulo Hero:
```html
<!-- AGORA: -->
<p>Equipamentos industriais de alta performance para seu negócio</p>

<!-- MUDE PARA: -->
<p>Seu texto aqui descreve a proposta de valor</p>
```

---

## 3️⃣ DADOS DA EMPRESA

### Números e Estatísticas

**Arquivo**: `index.html` (linhas ~113-125)

```html
<!-- Estatística 1 -->
<div class="stat">
    <h3>500+</h3>
    <p>Projetos Realizados</p>
</div>

<!-- Mude a quantidade conforme sua realidade -->
```

### Dados de Contato

**Arquivo**: `index.html`

Procure pelos placeholders e substitua:

| Placeholder | Linha | Substitua por |
|-----------|-------|--------------|
| `11 99999-9999` | ~340 | Seu número WhatsApp |
| `contato@ecmach.com.br` | ~35, ~350 | Seu email |
| `linkedin.com/company/ecmach` | ~400 | Seu LinkedIn |
| `ecmach@gmail.com` | ~352 | Seu email alternativo |

**Exemplo - Adicione seu número:**
```html
<!-- AGORA: -->
<li><strong>WhatsApp:</strong> <a href="https://wa.me/5511999999999">+55 (11) 99999-9999</a></li>

<!-- MUDE PARA: -->
<li><strong>WhatsApp:</strong> <a href="https://wa.me/SUA_AREA_NUM">+55 (XX) XXXXX-XXXX</a></li>
```

---

## 4️⃣ ADICIONAR/EDITAR PROJETOS

### Estrutura do Projeto

**Arquivo**: `script.js` (linhas 1-52)

```javascript
{
    id: 1,                    // Número sequencial único
    title: "Nome Projeto",    // Título que aparece no card
    company: "Nome Cliente",  // Empresa ou setor
    category: "despoeiramento", // Categoria do filtro
    problem: "Qual era o desafio?",
    solution: "Que solução foi entregue?",
    results: "Qual foi o resultado impactante?"
}
```

### Exemplo Real (Completo)

```javascript
{
    id: 1,
    title: "Sistema de Despoeiramento - Setor Químico",
    company: "Indústria Química ABC",
    category: "despoeiramento",
    problem: "Fábrica perdia 15% do produto em pós durante transporte, causando poluição e multas ambientais de R$ 50mil/mês.",
    solution: "Desenvolvemos sistema de despoeiramento integrado em 4 pontos da linha de produção com eficiência de 99.2%.",
    results: "Recuperação de 12% do produto (R$ 180mil/ano), zero multas ambientais resultando em retorno em 6 meses."
}
```

### Adicionar Novo Projeto (Passo a Passo)

1. **Abra** `script.js`
2. **Localize** o array `projectsData`
3. **Adicione** no final (antes do fechamento]):

```javascript
// Copie este template:
{
    id: 9,  // Próximo número sequencial
    title: "Seu Projeto Aqui",
    company: "Nome do Cliente",
    category: "filtros",  // Escolha: todos, despoeiramento, ciclones, filtros, manutencao
    problem: "Qual era o problema?",
    solution: "Como vocês resolveram?",
    results: "Qual foi o impacto?"
},
```

4. **Adicione correspondente** no HTML `index.html` (após o último item gallery)

```html
<div class="gallery-item" data-category="filtros">
    <div class="image-placeholder">
        <i class="fas fa-filter"></i>
    </div>
    <div class="gallery-overlay">
        <button class="btn-view-project" onclick="openModal(9)">Ver Projeto</button>
    </div>
    <div class="gallery-info">
        <h3>Seu Projeto Aqui</h3>
        <p class="company">Nome do Cliente</p>
        <div class="gallery-tags">
            <span>Filtros</span>
        </div>
    </div>
</div>
```

---

## 5️⃣ CATEGORIAS DE PROJETOS

As 5 categorias disponíveis (não altere esses valores):

| Valor | Ícone | Display |
|-------|-------|---------|
| `todos` | fas fa-th | Todos os Projetos |
| `despoeiramento` | fas fa-wind | Despoeiramento |
| `ciclones` | fas fa-fan | Ciclones |
| `filtros` | fas fa-filter | Filtros |
| `manutencao` | fas fa-wrench | Manutenção |

Para adicionar NOVA categoria:

1. **Adicione botão** no HTML:
```html
<button class="filter-btn" data-filter="sua-categoria">
    <i class="fas fa-icone"></i> Sua Categoria
</button>
```

2. **Use em projetos**:
```html
data-category="sua-categoria"
```

3. **O JavaScript funcionará automaticamente!**

---

## 6️⃣ IMAGENS DOS PROJETOS

### Substituir Placeholders

**Arquivo**: `index.html` (cada item gallery)

**Atualmente:**
```html
<div class="image-placeholder">
    <i class="fas fa-wind"></i>
</div>
```

**Mude para:**
```html
<img src="images/projeto-1.jpg" alt="Sistema de Despoeiramento" style="width:100%; height:100%; object-fit:cover;">
```

### Preparar Imagens

**Recomendações:**
- Tamanho: 340px × 280px (mínimo)
- Formato: JPG (mais leve) ou PNG (se transparência necessária)
- Peso: até 100KB cada
- Qualidade: alta resolução, profissional

**Como preparar:**
1. Tire/obtenha foto do projeto
2. Recorte para proporção 340x280
3. Comprima em [tinypng.com](https://tinypng.com)
4. Salve em pasta `images/`
5. Añada no HTML com path correto

### Criar Pasta de Imagens

```
ECMACH/
├── index.html
├── style.css
├── script.js
└── images/          ← CRIAR ESTA PASTA
    ├── projeto-1.jpg
    ├── projeto-2.jpg
    └── ... etc
```

---

## 7️⃣ ÍCONES

Todos os ícones usam **Font Awesome 6.4.0** (já incluído no HTML).

Ver todas: https://fontawesome.com/icons

**Exemplos úteis para indústria:**
```
fa-wind        Vento/Despoeiramento
fa-fan         Ventilador/Ciclone
fa-filter      Filtro
fa-wrench      Manutenção/Ferramenta
fa-cog         Engrenagem/Máquina
fa-industry    Fábrica/Indústria
fa-hard-hat    Capacete/Segurança
fa-toolbox     Caixa de ferramentas
```

**Para mudar ícone no filter:**
```html
<!-- AGORA: -->
<button class="filter-btn" data-filter="despoeiramento">
    <i class="fas fa-wind"></i> Despoeiramento
</button>

<!-- MUDE PARA: -->
<button class="filter-btn" data-filter="despoeiramento">
    <i class="fas fa-cloud"></i> Despoeiramento
</button>
```

---

## 8️⃣ SEÇÕES ADICIONAIS

### Como Adicionar Nova Seção

1. **Copie estrutura HTML** de seção existente
2. **Adicione CSS** em `style.css` com classe única
3. **Insira entre** duas seções usando `<section id="sua-secao">`

Exemplo - Adicionar "Serviços":
```html
<!-- Adicione após "about" e antes de "gallery" -->
<section id="servicos">
    <div class="container">
        <h2 class="section-title">Nossos Serviços</h2>
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-check"></i>
                <h3>Serviço 1</h3>
                <p>Descrição...</p>
            </div>
        </div>
    </div>
</section>
```

---

## 9️⃣ MENU NAVIGATION

### Adicionar Link no Menu

**Arquivo**: `index.html` (linhas ~50-60)

```html
<!-- AGORA: -->
<ul class="nav-links">
    <li><a href="#about">Sobre</a></li>
    <li><a href="#gallery">Projetos</a></li>
    <li><a href="#contact">Contato</a></li>
</ul>

<!-- MUDE PARA: -->
<ul class="nav-links">
    <li><a href="#about">Sobre</a></li>
    <li><a href="#servicos">Serviços</a></li>  <!-- Novo -->
    <li><a href="#gallery">Projetos</a></li>
    <li><a href="#blog">Blog</a></li>           <!-- Novo -->
    <li><a href="#contact">Contato</a></li>
</ul>
```

---

## 🔟 ANIMAÇÕES

### Ajustar Velocidade de Animações

**Arquivo**: `style.css` (linhas 1-20)

```css
:root {
    --transition: 0.3s ease;  /* Padrão */
}
```

**Opções:**
```css
--transition: 0.1s ease;    /* Bem rápido */
--transition: 0.3s ease;    /* Padrão (recomendado) */
--transition: 0.6s ease;    /* Moderado */
--transition: 1s ease;      /* Lento */
```

### Remover Animações

Se quiser desabilitar algumas animações:

```css
/* Desabilitar fade-in */
.fade-in {
    opacity: 1 !important;
    animation: none !important;
}
```

---

## 1️⃣1️⃣ BOTÕES CTA

### Alterar Texto dos CTAs

**Hero CTA:**
```html
<!-- AGORA: -->
<button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
    Solicitar Orçamento
</button>

<!-- MUDE PARA: -->
<button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
    Agendar Consultoria
</button>
```

### Cores dos Botões

**Arquivo**: `style.css` (linhas 115-135)

```css
.btn-primary {
    background: var(--primary);      /* Cor azul */
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background: var(--primary-dark); /* Mais escuro no hover */
    transform: translateY(-2px);
}
```

---

## 1️⃣2️⃣ FORMULÁRIO

### Campos do Formulário

**Arquivo**: `index.html` (linhas ~335-365)

Campos atuais:
- Nome
- Empresa
- Email
- Telefone
- Necessidade (textarea)

**Para adicionar campo:**

```html
<!-- Adicione antes do submit -->
<div class="form-group">
    <input type="text" id="cargo" placeholder="Seu Cargo" required>
</div>

<!-- E edite script.js função handleSubmit para incluir o valor -->
```

---

## 1️⃣3️⃣ FOOTER

### Adicionar Redes Sociais

**Arquivo**: `index.html` (linhas ~390-410)

```html
<!-- AGORA: -->
<div class="social-links">
    <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
</div>

<!-- MUDE PARA: -->
<div class="social-links">
    <a href="https://linkedin.com/company/ecmach" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="https://instagram.com/ecmach" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="https://facebook.com/ecmach" title="Facebook"><i class="fab fa-facebook"></i></a>
    <a href="https://youtube.com/ecmach" title="YouTube"><i class="fab fa-youtube"></i></a>
</div>
```

---

## 1️⃣4️⃣ RESPONSIVE DESIGN

### Ajustar Breakpoints Móveis

Se quiser alterar quando o layout muda:

**Arquivo**: `style.css` (linhas ~900+)

```css
/* Tablet (mudar 768px para outro valor) */
@media (max-width: 768px) {
    /* estilos tablet */
}

/* Mobile (mudar 480px para outro valor) */
@media (max-width: 480px) {
    /* estilos mobile */
}
```

---

## 1️⃣5️⃣ CHECKLIST DE CUSTOMIZAÇÃO

- [ ] Alterar cores para sua marca
- [ ] Atualizar textos principais (headlines)
- [ ] Colocar dados de contato reais
- [ ] Adicionar 8 projetos reais
- [ ] Substituir imagens placeholder
- [ ] Verificar links do menu
- [ ] Testar form em ambiente local
- [ ] Testar botão WhatsApp
- [ ] Testar responsividade (F12)
- [ ] Testar filtros de galeria
- [ ] Revisar para erros tipográficos
- [ ] Testar em navegadores diferentes

---

## 🆘 Dúvidas Frequentes

**P: Como adicionar GoogleAnalytics?**
A: Adicione no `<head>` do HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SUA_ID_AQUI');
</script>
```

**P: Como adicionar favicon?**
A: No `<head>`:
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

**P: Mudar fonte?**
A: No `style.css` mude:
```css
body {
    font-family: 'Georgia', serif;  /* de Arial para Georgia */
}
```

---

## ✅ Pronto!

Seu site está customizado e pronto para o sucesso! 🚀

