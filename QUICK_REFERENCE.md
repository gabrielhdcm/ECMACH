# ⚡ Referência Rápida - ECMACH

## 🎯 Customizações Mais Comuns

### 1. Alterar Número WhatsApp

**Onde está**: `index.html` + `script.js`

**No HTML (2 lugares):**
```html
<!-- Linha ~50 no nav -->
<a href="https://wa.me/5511999999999" class="fab-whatsapp">

<!-- Linha ~360 na seção contato -->
<a href="https://wa.me/5511999999999">+55 (11) 99999-9999</a>
```

**No JavaScript:**
```javascript
// script.js, linha ~165
const whatsappNumber = '5511999999999';
const message = `Olá, tenho interesse em seus serviços:\n\n` +
    `Nome: ${name}\nEmpresa: ${company}\n` +
    `Email: ${email}\nTelefone: ${phone}\n` +
    `Necessidade: ${need}`;
```

**⚠️ IMPORTANTE**: Remova espaços, use formato: 5511999999999

---

### 2. Mudar Cores Principais

**Arquivo**: `style.css` linhas 1-19

```css
:root {
    /* Mude estes valores para sua cor */
    --primary: #003d7a;        /* Azul escuro */
    --primary-dark: #002d5c;   /* Mais escuro */
    --secondary: #0066cc;      /* Azul médio */
    --accent: #00a3ff;         /* Azul claro */
}
```

**Paletas prontas:**

**Verde:**
```css
--primary: #004d40;
--primary-dark: #003d33;
--secondary: #00695c;
--accent: #26a69a;
```

**Laranja:**
```css
--primary: #e65100;
--primary-dark: #bf360c;
--secondary: #ff6f00;
--accent: #ffb74d;
```

---

### 3. Adicionar Novo Projeto

**Passo 1**: `script.js` (adicione no array `projectsData`)

```javascript
{
    id: 9,  // Próximo número
    title: "Nome do Projeto",
    company: "Nome Cliente",
    category: "filtros",  // Escolha: todos, despoeiramento, ciclones, filtros, manutencao
    problem: "Qual era o desafio?",
    solution: "O que foi desenvolvido?",
    results: "Qual foi o resultado?"
}
```

**Passo 2**: `index.html` (adicione após último `gallery-item`)

```html
<div class="gallery-item" data-category="filtros">
    <div class="image-placeholder">
        <i class="fas fa-filter"></i>
    </div>
    <div class="gallery-overlay">
        <button class="btn-view-project" onclick="openModal(9)">Ver Projeto</button>
    </div>
    <div class="gallery-info">
        <h3>Nome do Projeto</h3>
        <p class="company">Nome Cliente</p>
        <div class="gallery-tags">
            <span>Filtros</span>
        </div>
    </div>
</div>
```

---

### 4. Substituir Imagens Placeholder

**Arquivo**: `index.html`

**Agora:**
```html
<div class="image-placeholder">
    <i class="fas fa-wind"></i>
</div>
```

**Mude para:**
```html
<img src="images/projeto-1.jpg" alt="Sistema de Despoeiramento" 
     style="width:100%; height:100%; object-fit:cover;">
```

**⚠️ Crie pasta `images/` primeiro!**

---

### 5. Alterar Dados de Contato

| Item | Onde | Substitua |
|------|------|-----------|
| Email | `index.html` ~35, ~350 | contato@sua-empresa.com |
| Telefone | `index.html` ~340 | Seu telefone |
| WhatsApp | `index.html` ~50, ~360 + `script.js` ~165 | Seu número |
| LinkedIn | `index.html` ~400 | Seu perfil |
| Endereço | `index.html` ~345 | Seu endereço |

---

### 6. Alterar Headlines Principais

**Hero (Linha ~75 HTML):**
```html
<h1>Soluções Industriais <span style="color: var(--accent);">Sob Medida</span></h1>
```

**Galeria (Linha ~146 HTML):**
```html
<h2 class="section-title">Galeria de Projetos</h2>
```

**Sobre (Linha ~110 HTML):**
```html
<h2>Sobre a ECMACH</h2>
```

---

## 🎨 Cores Hex Principais

```
Azul Escuro:    #003d7a
Azul Médio:     #0066cc
Azul Claro:     #00a3ff
Fundo:          #f5f5f5
Texto Escuro:   #333
Texto Médio:    #666
Branco:         #ffffff
Cinza:          #e0e0e0
```

---

## 📁 Estrutura de Arquivos

```
ECMACH/
├── index.html          ← HTML (425 linhas)
├── style.css           ← CSS (900+ linhas)
├── script.js           ← JavaScript (233 linhas)
├── images/             ← Suas imagens aqui
│   ├── projeto-1.jpg
│   ├── projeto-2.jpg
│   └── ...
├── README.md           ← Documentação
├── CUSTOMIZE.md        ← Guia customização
├── SEO_MARKETING.md    ← Guia SEO
└── DEPLOYMENT_GUIDE.md ← Guia deploy
```

---

## 🔍 Onde Achar Coisas Importantes

| O que procuro | Arquivo | Linha aproximada |
|---|---|---|
| Telefone WhatsApp | index.html | ~50, ~360 |
| Email contato | index.html | ~35, ~350 |
| Cores site | style.css | ~1-19 |
| Projetos lista | script.js | ~1-52 |
| Galeria HTML | index.html | ~146-258 |
| Menu navegação | index.html | ~45-60 |
| Formulário | index.html | ~335-365 |
| Footer | index.html | ~379-405 |
| Animações CSS | style.css | ~200-300 |

---

## ⌨️ Atalhos Úteis VS Code

```
Ctrl + F       Buscar texto
Ctrl + H       Buscar e substituir
Ctrl + /       Comentar linha
Ctrl + L       Selecionar linha
Ctrl + D       Duplicar linha
Alt + ↓        Mover linha para baixo
F12            DevTools (Chrome)
```

---

## 🧪 Testes Rápidos

### Testar Localmente
```
1. Abra index.html no navegador
2. Pressione F12
3. Verifique console (sem erros em vermelho)
4. Teste filtros de galeria
5. Clique "Ver Projeto" (modal abre)
6. Preencha formulário (deve abrir WhatsApp)
```

### Testar Responsividade
```
1. F12
2. Ctrl + Shift + M (Responsive mode)
3. Escolha Mobile (375px)
4. Tablet (768px)
5. Verifique se tudo se adapta
```

### Testar Performance
```
1. F12 → Aba "Lighthouse"
2. Gere report
3. Mire em: Performance >80, SEO >80
```

---

## 📱 Categorias de Projetos (Não altere)

```javascript
"todos"           // Mostra tudo
"despoeiramento"  // Setor despoeiramento
"ciclones"        // Setor ciclones
"filtros"         // Setor filtros
"manutencao"      // Setor manutenção
```

---

## 🎁 Elementos da Página

```
Header (Navegação fixa) ───────────────┐
                                       │
Hero Section (Chamada principal)       │
                                       │
Sobre (Stats + cards)                  │
                                       │ Customizável
Galeria (SEÇÃO PRINCIPAL)              │
  ├─ Filtros 5 categorias               │
  ├─ Grid 8 projetos                    │
  └─ Modal detalhes                     │
                                       │
Diferenciais (4 cards)                 │
                                       │
CTA (Conversão)                        │
                                       │
Contato (Formulário + info)            │
                                       │
Footer (Links + sociais)               │
                                       ├─ FAB WhatsApp (flutuante)
Back-to-Top (Botão voltar)    ────────┘
```

---

## 🚀 Deploy Rápido em 5 Minutos (Netlify)

```
1. Sign Up em netlify.com (usa GitHub)
2. Push código para GitHub
3. New site from Git
4. Escolha repositório
5. Deploy automático!
```

**URL gerada**: seu-site.netlify.app

Para domínio personalizado:
```
1. Registre domínio
2. Netlify → Domain settings → Add custom domain
3. Siga instruções DNS (2 minutos)
4. Pronto! seu-site.com.br live 🎉
```

---

## 🐛 Erros Comuns + Solução

| Erro | Causa | Solução |
|------|-------|---------|
| Imagens não carregam | Path errado | Use `images/arquivo.jpg` |
| Modal não abre | JS não carregou | Verifique console (F12) |
| WhatsApp não abre | Número sem +55 | Use `5511999999999` exato |
| Filtros não funcionam | data-category ≠ data-filter | Verifique nomes iguais |
| CSS não aplicar | Arquivo não encontrado | Verifique path e nome |
| Menu não fecha mobile | JS erro | Verifique script.js |

---

## 📧 Contatos Importantes

| Plataforma | Link | Para quê |
|---|---|---|
| Google Search Console | search.google.com/search-console | SEO |
| Google Analytics | analytics.google.com | Tráfego |
| Netlify | netlify.com | Deploy/Hosting |
| Github | github.com | Versionamento |
| Registrador Domínio | godaddy.com | Domínio |
| Gmail | gmail.com | Email |

---

## 💡 Dicas Ouro

✅ **Sempre faça backup** antes de grandes mudanças
```bash
Copie pasta ECMACH para ECMACH_BACKUP
```

✅ **Teste filtros** após adicionar projeto novo
```
1. Clique cada botão filtro
2. Se projeto não filtered = erro no data-category
```

✅ **Use Chrome DevTools** para debugar
```
F12 → Console → Veja erros exatos
```

✅ **Comprima imagens** antes de upload
```
tinypng.com → Reduz 80% do arquivo
```

✅ **Valide HTML/CSS** antes de launch
```
validator.w3.org → Garante compatibilidade
```

---

## 📞 Suporte Rápido

**O site não abre?**
→ Verifique se `index.html` existe na pasta

**Imagens não aparecem?**
→ Verifique path e coloque em pasta `images/`

**Cores erradas?**
→ Edite variáveis em `style.css` linha 1-19

**WhatsApp não funciona?**
→ Verifique número: `+55 11 99999-9999` → `5511999999999`

**Form não envia?**
→ Pressione F12, Console, veja erro exato

---

## 🎯 Próximos Passos

1. ✅ Customizar cores + textos
2. ✅ Adicionar 8 projetos reais
3. ✅ Substituir imagens
4. ✅ Atualizar dados de contato
5. ✅ Testar tudo localmente
6. ✅ Registrar domínio
7. ✅ Deploy no Netlify
8. ✅ Configurar Google Analytics
9. ✅ Enviar ao Google Search Console
10. ✅ Aguardar leads via WhatsApp! 🚀

---

## 📊 Versão

- **Site Version**: 2.0
- **Tema**: Azul Industrial com Foco em Galeria
- **Status**: ✅ Pronto para Produção
- **Data**: Abril 2026

---

**Dúvidas?** Consulte os documentos completos:
- 📖 [README.md](README.md) - Visão geral
- 🎨 [CUSTOMIZE.md](CUSTOMIZE.md) - Customizações detalhadas
- 🚀 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Como fazer deploy
- 📈 [SEO_MARKETING.md](SEO_MARKETING.md) - SEO e marketing

