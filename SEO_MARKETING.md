# 📈 Guia SEO + Marketing - ECMACH

## Otimizar sua Presença Online

---

## 🎯 SEO On-Page (antes do Launch)

### 1. Meta Tags Essenciais

**Arquivo**: `index.html` (no `<head>`)

Já estão implementadas:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ECMACH | Equipamentos Industriais Sob Medida</title>
<meta name="description" content="Soluções industriais eficientes com 500+ projetos realizados. Despoeiramento, ciclones, filtros e manutenção de equipamentos.">
<meta name="keywords" content="equipamentos industriais, despoeiramento, ciclones, filtros, manutenção industrial">
```

**Para personalizar:**

Melhor Title:
```html
<!-- ❌ Genérico: -->
<title>ECMACH</title>

<!-- ✅ SEO Otimizado: -->
<title>ECMACH | Equipamentos Industriais Sob Medida | São Paulo</title>
```

Melhor Description (até 160 caracteres):
```html
<!-- ❌ Genérico: -->
<meta name="description" content="Bem-vindo ao nosso site">

<!-- ✅ SEO Otimizado: -->
<meta name="description" content="Soluções em despoeiramento e filtração industrial. 500+ projetos, 20 anos de experiência. Diagnostique seu equipamento hoje.">
```

### 2. Schema Markup (Dados Estruturados)

Adicione no `<head>` para ajudar Google a entender seu site:

```html
<!-- LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ECMACH Equipamentos Industriais",
  "image": "https://ecmach.com.br/logo.png",
  "description": "Soluções industriais de alta performance",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Seu Endereço Aqui",
    "addressLocality": "São Paulo",
    "postalCode": "01311-100",
    "addressCountry": "BR"
  },
  "telephone": "+55 11 99999-9999",
  "url": "https://ecmach.com.br",
  "sameAs": [
    "https://www.linkedin.com/company/ecmach",
    "https://www.instagram.com/ecmach"
  ]
}
</script>

<!-- Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ECMACH",
  "logo": "https://ecmach.com.br/logo.png",
  "description": "Equipamentos industriais de alta performance",
  "foundingDate": "2004",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "telephone": "+55-11-99999-9999"
  }
}
</script>
```

### 3. Robots.txt

Crie arquivo `robots.txt` na pasta raiz:

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

Sitemap: https://seu-dominio.com/sitemap.xml
```

### 4. Sitemap.xml

Crie arquivo `sitemap.xml` na pasta raiz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://seu-dominio.com/</loc>
        <lastmod>2026-04-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://seu-dominio.com/#gallery</loc>
        <lastmod>2026-04-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://seu-dominio.com/#contact</loc>
        <lastmod>2026-04-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```

---

## 🔍 Google Search Console

### Setup

1. Acesse: https://search.google.com/search-console
2. **Add Property**
3. Escolha: **URL prefix** (https://seu-dominio.com)
4. **Verify ownership** via:
   - HTML tag (recomendado)
   - DNS record
   - Upload arquivo

### Otimizações

1. **Submit Sitemap**: Console → Sitemaps → Submit `sitemap.xml`
2. **Monitor Erros**: Console → Coverage
3. **Core Web Vitals**: Insights → Core Web Vitals
4. **Mobile Usability**: Insights → Mobile Usability

---

## 📱 Otimizar para Mobile

### Checklist Mobile

- [x] Viewport meta tag (já está)
- [x] Touch-friendly buttons (48px+)
- [x] Font legível (16px+)
- [x] Sem horizontal scroll
- [x] CTAs bem espaçados
- [x] Teste com Google Mobile-Friendly Test

**Teste seu site:**
https://search.google.com/test/mobile-friendly

---

## ⚡ Performance

### Core Web Vitals (Meta do Google)

| Métrica | Meta | Como Melhorar |
|---------|------|---|
| LCP (Largest Contentful Paint) | < 2.5s | Comprima imagens, reduza JS |
| FID (First Input Delay) | < 100ms | Minifique JavaScript |
| CLS (Cumulative Layout Shift) | < 0.1 | Especifique dimensões de imagem |

### Otimizações no Código

1. **Comprimir Imagens**
   - Antes: 500KB
   - Depois: 80KB (via tinypng.com)
   - Economia: 80% tamanho

2. **Minificar CSS**
   - Código: 50KB
   - Minificado: 28KB
   - Ganho: 44%
   - Tool: cssminifier.com

3. **Minificar JS**
   - Código: 12KB
   - Minificado: 6KB
   - Tool: jsminifier.com

4. **Lazy Loading de Imagens**
   
   ```html
   <img src="image.jpg" loading="lazy" alt="Descrição">
   ```

### Teste com Lighthouse

```
1. Abra DevTools (F12)
2. Aba "Lighthouse"
3. Gere report
4. Siga recomendações
```

---

## 🎯 SEO Off-Page

### 1. Backlinks (Links Externos)

**Estratégias:**
- [ ] Google My Business (1 link)
- [ ] LinkedIn Company Page (1 link)
- [ ] Diretório industrial (5+ links)
- [ ] Blogs de parceiros (3+ links)
- [ ] Foros industriais (2+ links)

### 2. Google My Business

1. Acesse: https://business.google.com
2. Add ou claim business
3. Preencha:
   - Nome completo
   - Endereço
   - Telefone
   - Website
   - Horários
   - Categorias
4. Foto de capa profissional
5. Descrição detalhada

**Benefício**: Aparecer no Google Maps + pesquisa local

### 3. LinkedIn Company Page

1. Acesse: https://linkedin.com/company/new
2. Preencha dados
3. Banner profissional
4. Descrição em português
5. Link website
6. Compartilhe posts sobre projetos

---

## 📊 Palavras-Chave para ECMACH

### Keywords Principais
```
equipamentos industriais
despoeiramento industrial
sistemas de filtração
ciclones industriais
manutenção equipamentos
São Paulo
```

### Keywords Long-Tail
```
sistema de despoeiramento para fábrica
como escolher equipamento de filtração
manutenção preventiva equipamentos
ciclones para indústria química
```

### Implementação

**No HTML (keywords no conteúdo):**
- Headlines
- Descrições
- Alt text de imagens
- Nomes de projetos

**Exemplo:**
```html
<!-- ❌ Genérico: -->
<h2>Projeto 1</h2>

<!-- ✅ Com keyword: -->
<h2>Sistema de Despoeiramento Industrial - Setor Químico</h2>
```

---

## 🎨 Social Media Strategy

### LinkedIn (B2B)

**Conteúdo ideal:**
- Estudos de caso de projetos
- Dicas técnicas
- Insights industriais
- News da indústria
- Fotos de equipamentos

**Frequência**: 2-3x por semana

**Exemplo Post:**
```
"🏭 Nosso novo sistema de despoeiramento reduziu 
emissões em 95% para cliente do setor químico.

Resultado: R$ 50mil/mês economizados em multas ambientais.

Seu equipamento precisa de upgrade? Converse com nossos 
especialistas em despoeiramento.

📞 www.ecmach.com + WhatsApp no perfil"
```

### Instagram (Visual)

**Conteúdo ideal:**
- Fotos dos equipamentos
- Antes/depois de projetos
- Stories dos bastidores
- Reels técnicos
- User-generated content

**Frequência**: 4-5x por semana

### Facebook (Local)

**Conteúdo ideal:**
- Posts de atualização
- Eventos
- Histórias da empresa
- Testimoniais

**Frequência**: 3x por semana

---

## 📧 Email Marketing

### Integrar com seu site

**Opção 1: Formspree (GRÁTIS)**

```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

**Opção 2: EmailJS (GRÁTIS)**

```html
<script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script type="text/javascript">
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

### Newsletter

1. Use **MailChimp** (grátis até 500 contatos)
2. Add "Subscribe" box no site
3. Envie dicas técnicas semanalmente
4. Link para estudos de caso

---

## 💰 Estratégia de Aquisição de Leads

### Funnel de Conversão

```
AWARENESS (Consciência)
    ↓
SEO + Social Media
    ↓
    ↓
INTEREST (Interesse)
    ↓
Galeria de Projetos atrai visitantes
    ↓
    ↓
CONSIDERATION (Consideração)
    ↓
Modais mostram problema/solução/resultados
    ↓
CTA "Solicitar Orçamento"
    ↓
    ↓
CONVERSION (Conversão)
    ↓
Formulário → WhatsApp → Conversa
    ↓
    ↓
RETENTION (Retenção)
    ↓
Email follow-up + suporte
```

### Testes A/B

**Títulos diferentes:**
```
A: "Equipamentos Industriais"
B: "Soluções em Despoeiramento - R$ 50mil/mês em Economia"
```

**Cores de botão:**
```
A: Azul (#003d7a)
B: Laranja (#ff6f00)
```

**CTA diferente:**
```
A: "Solicitar Orçamento"
B: "Fale com Especialista"
```

---

## 📞 Automação de WhatsApp

### Mensagem Padrão (Para Qualificar Leads)

```
Olá! 👋

Obrigado pelo interesse em nossos serviços de despoeiramento 
e filtração industrial.

Respondemos melhor em horário comercial (seg-sex 09h-18h).

Para acelerar, poderia nos informar:

1) Qual é o seu desafio específico?
2) Qual setor você atua?
3) Qual seu orçamento aproximado?

Entraremos em contato em breve com uma solução personalizada.

Abraços,
Equipe ECMACH 🤝
```

---

## 📊 Métricas para Acompanhar

### Google Analytics

```
1. Session Duration (tempo no site)
   Meta: > 2 minutos
   
2. Bounce Rate (saem sem interagir)
   Meta: < 40%
   
3. Click-through rate (CTR)
   Meta: > 2%
   
4. Conversion Rate (lead gerado)
   Meta: > 3%
```

### Seu Controle

```
- Leads mensais via formulário
- Mensagens WhatsApp recebidas
- Taxas de conversão para cliente
- ROI de investimento em anúncios
```

---

## 🎬 Campanhas Pagas (Opcional)

### Google Ads - Search

**Setup:**
1. Budget: R$ 500/mês
2. Keywords: "equipamentos industriais", "despoeiramento"
3. CPC (cost per click): ~R$ 2-5
4. Goal: 100+ cliques = 3-5 leads

### Facebook Ads

**Setup:**
1. Budget: R$ 300/mês
2. Audiência: Profissionais industrial (45+ anos)
3. Post: Projeto destaque com CTA
4. Goal: Awareness + traffic

### LinkedIn Ads

**Setup:**
1. Budget: R$ 500/mês
2. Audiência: Gerentes de fábrica (Brasil)
3. Post: Case study B2B
4. Goal: 50+ leads qualificados

---

## 🛡️ LGPD Compliance

### Adicionar Aviso de Cookies

No rodapé:
```html
<p style="font-size: 12px; color: #666;">
    Este site usa cookies para melhorar sua experiência. 
    Ao continuar, você concorda com nossa 
    <a href="#privacidade">Política de Privacidade</a>
</p>
```

### Privacy Policy Template

Crie página `privacy.html`:

```html
<section>
    <h1>Política de Privacidade</h1>
    
    <h2>1. Dados Coletados</h2>
    <p>Nome, email, telefone, empresa</p>
    
    <h2>2. Como Usamos</h2>
    <p>Para enviar informações sobre produtos/serviços</p>
    
    <h2>3. Proteção de Dados</h2>
    <p>Seus dados são protegidos conforme LGPD</p>
    
    <h2>4. Direitos do Titular</h2>
    <p>Você pode solicitar acesso, correção ou exclusão</p>
    
    <h2>5. Contato</h2>
    <p>Email: contato@ecmach.com.br</p>
</section>
```

---

## 📅 Cronograma de Ações

### Semana 1 (Pós-Launch)
- [ ] Enviar URL ao Google Search Console
- [ ] Submit sitemap.xml
- [ ] Link Google My Business
- [ ] Postar no LinkedIn sobre novo site

### Mês 1
- [ ] Monitorar Analytics
- [ ] Responder todos os inquiries
- [ ] Solicitar reviews no Google My Business
- [ ] Publicar 4x no LinkedIn

### Mês 2-3
- [ ] Analisar top pages em Analytics
- [ ] Otimizar SEO baseado em dados
- [ ] Campanhas de retargeting com Facebook Pixel
- [ ] Calcular ROI dos leads

### Mês 4+
- [ ] Testes A/B de headlines
- [ ] Considerar Google Ads
- [ ] Atualizar casos de sucesso
- [ ] Expandir conteúdo (blog?)

---

## 🎯 Benchmarks Esperados

### Realista (Mês 1)
- 50-100 visitas
- 5-10 leads via WhatsApp
- 1 conversão inicial

### Otimista (Mês 3)
- 300-500 visitas
- 30-50 leads
- 5-10 novos clientes

### Agressivo (Mês 6, com anúncios)
- 1000+ visitas
- 100+ leads
- 20+ clientes novos

---

## 🎁 Recursos Grátis

- **Keyword Research**: https://ubersuggest.com (versão grátis)
- **Competitor Analysis**: https://semrush.com (trial)
- **Content Calendar**: https://buffer.com
- **Social Media**: Hootsuite (recomendado)
- **Email**: MailChimp (até 500 contatos)

---

## ✅ Checklist Pré-Launch SEO

- [ ] Meta tags personalizadas
- [ ] Schema markup adicionado
- [ ] robots.txt criado
- [ ] sitemap.xml criado
- [ ] Google My Business setup
- [ ] LinkedIn Company Page setup
- [ ] Imagens otimizadas
- [ ] Lighthouse score > 80
- [ ] Mobile-friendly testado
- [ ] Analytics configurado
- [ ] Search Console conectado

---

**Lembre-se**: SEO é jogo de longo prazo. Consistência em 3-6 meses gera resultados reais! 📈

