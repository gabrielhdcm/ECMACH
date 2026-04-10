# 🚀 Guia de Deployment - ECMACH

## Passo a Passo para Lançar seu Site

---

## 📋 Pré-Requisitos

- [x] Site completamente customizado
- [x] Imagens substituídas (8 projetos)
- [x] Dados de contato atualizados
- [x] Testado localmente sem erros
- [x] Domínio registrado (opcional, mas recomendado)

---

## ✅ TESTES PRÉ-DEPLOYMENT

### 1. Validar HTML

**Teste Local:**
```
Abra a DevTools (F12)
→ Console
→ Procure por erros em vermelho
```

**Validar Online:**
- Acesse: https://validator.w3.org/
- Upload seu arquivo `index.html`
- Corrija erros listados

### 2. Testar Responsividade

**No Navegador:**
```
1. Pressione F12
2. Clique no ícone "Responsive Design Mode"
3. Teste em: mobile (375px), tablet (768px), desktop (1920px)
4. Verifique se tudo funciona bem
```

**Dispositivos Reais:**
- Teste em iPhone, Android, Tablet
- Verifique botão WhatsApp
- Clique em todos os links

### 3. Testar Funcionalidades

- [ ] **Filtros**: Clique cada categoria
- [ ] **Modais**: Clique "Ver Projeto" e verifique dados
- [ ] **Formulário**: Preencha e envie (deve abrir WhatsApp)
- [ ] **Menu Mobile**: Hamburger funciona em mobile
- [ ] **Links**: Todos navegam corretamente
- [ ] **Smooth Scroll**: Links de âncora funcionam
- [ ] **Botão Voltar**: Aparece após scroll
- [ ] **WhatsApp**: Abre conversa corretamente

### 4. Testar Performance

**Lighthouse (Chrome):**
```
1. F12 → Aba "Lighthouse"
2. Clique "Generate Report"
3. Mire em: Performance >80, SEO >80
```

**Otimizações se Performance < 80:**
- Comprima imagens mais (tinypng.com)
- Remova CSS não utilizado
- Minifique arquivos

### 5. Testar em Navegadores

- [x] Chrome/Edge (Windows)
- [x] Firefox
- [x] Safari (macOS/iOS)
- [x] Opera (caso tenha usuários)

---

## 🌐 OPÇÃO 1: Netlify (Recomendado - GRÁTIS)

### Por que Netlify?
✅ Grátis  
✅ HTTPS automático  
✅ Deploy fácil  
✅ Suporte excelente  
✅ Performance global  
✅ Sem limite de tráfego  

### Passo a Passo

#### 1. Preparar Arquivos no GitHub

```bash
# Se não tem Git instalado, baixe de: https://git-scm.com

# Abra terminal na pasta ECMACH
cd C:\Users\DEV25MA\Desktop\ECMACH

# Inicie repositório Git
git init

# Adicione todos os arquivos
git add .

# Commit inicial
git commit -m "Site ECMACH v2.0 - Galeria Focada"

# Conectar ao GitHub
# 1. Vá para https://github.com/new
# 2. Crie repositório "ecmach-site"
# 3. Copie commands para "push an existing repository"
# 4. Cole no terminal e execute
```

#### 2. Conectar Netlify

1. Acesse: **https://netlify.com**
2. Clique **"Sign Up"** → Use conta GitHub
3. Clique **"New site from Git"**
4. Selecione repositório **"ecmach-site"**
5. Build settings:
   - **Build command**: (deixe vazio)
   - **Publish directory**: . (ponto)
6. Clique **"Deploy site"**
7. Aguarde deploy (2-5 minutos)
8. Site está LIVE! 🎉

#### 3. Configurar Domínio Personalizado

1. No Netlify dashboard
2. **Domain settings** → **Add custom domain**
3. Digite seu domínio (ex: ecmach.com.br)
4. Siga instruções para configurar DNS
5. HTTPS ativado automaticamente

---

## 🌐 OPÇÃO 2: GitHub Pages (GRÁTIS)

### Passo a Passo

1. **Criar Repositório**
   - Vá para https://github.com
   - Novo repositório: `seu-usuario.github.io`
   - Crie arquivo `index.html` na root

2. **Upload Arquivos**
   ```bash
   git clone https://github.com/seu-usuario/seu-usuario.github.io.git
   cd seu-usuario.github.io
   
   # Copie index.html, style.css, script.js para aqui
   
   git add .
   git commit -m "Upload site"
   git push
   ```

3. **Acessar**
   - URL: `https://seu-usuario.github.io`
   - Leva 2-5 minutos para ativar

### Domínio Personalizado no GitHub Pages

1. **Registre domínio** (ex: ecmach.com.br)
2. **Settings** → **Pages** → **Custom domain**
3. Insira seu domínio
4. Configure DNS no registrador:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

---

## 🌐 OPÇÃO 3: Hostinger (Pago - ~R$20/mês)

### Vantagens
✅ Suporte 24/7  
✅ Email incorporado  
✅ Certificado SSL grátis  
✅ Painel cPanel simple  

### Passo a Passo

1. **Compre Hosting**
   - Acesse: https://hostinger.com.br
   - Escolha plano básico
   - Compre domínio junto

2. **Fazer Upload via FTP**
   ```
   Software: FileZilla (grátis)
   FTP Host: seu-ftp-host
   User: seu-usuario
   Password: sua-senha
   ```
   - Conecte
   - Arraste arquivos para `public_html`

3. **Acessar**
   - URL: seu-dominio.com.br
   - Ativa em 24-48h

---

## 🌐 OPÇÃO 4: Vercel (para Next.js - mas funciona com HTML)

### Passo a Passo

1. Acesse: https://vercel.com
2. Clique "Import Project"
3. Selecione repositório GitHub "ecmach-site"
4. Deploy automático
5. Domínio: vercel.com ou personalizado

---

## 🔐 Checklist Final Antes de Lançar

- [ ] HTML validado (W3C)
- [ ] Nenhum erro no console (F12)
- [ ] Performance > 80 (Lighthouse)
- [ ] Responsividade testada (mobile/tablet/desktop)
- [ ] Todos filtros funcionam
- [ ] Modais abrem corretamente
- [ ] Formulário envia/WhatsApp abre
- [ ] Links não quebrados
- [ ] Imagens carregam rápido
- [ ] Site carrega em < 3 segundos
- [ ] Testado em 2+ navegadores
- [ ] Testado em iPhone + Android
- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] HTTPS funcionando
- [ ] Redirects HTTP → HTTPS

---

## 📊 Pós-Deployment: Analytics

### Google Analytics 4

1. Crie conta: https://analytics.google.com
2. Pegue seu **Tracking ID**
3. Adicione ao HTML (no `<head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Acesse: https://search.google.com/search-console
2. Add property → seu-dominio.com
3. Verifique ownership
4. Submit sitemap (ou deixe Google descobrir)
5. Monitore: cliques, impressões, posição media

### Facebook Pixel

1. Crie account: https://business.facebook.com
2. Pegue seu **Pixel ID**
3. Adicione ao HTML:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"/>
</noscript>
```

---

## 🔧 Manutenção Pós-Launch

### Semana 1
- Monitorar erros (Google Console)
- Verificar tráfego (Google Analytics)
- Responder inquiries pelo WhatsApp
- Otimizar imagens se necessário

### Mensal
- Revisar Analytics
- Testar links
- Atualizar projetos se necessário
- Responder mensagens de contato

### Trimestral
- Revisar SEO rankings
- Adicionar novos projetos
- Implementar melhorias baseadas em feedback
- Atualizar informações de contato se mudar

---

## 🚨 Troubleshooting Deployment

### Erro: "Site não carrega"
**Solução:**
- Verifique se files foram uploadados corretamente
- Procure por erro 404
- Limpe cache do navegador (Ctrl+Shift+Del)
- Aguarde 5-10 minutos (DNS propaga)

### Erro: "Imagens não aparecem"
**Solução:**
- Verifique path das imagens (case-sensitive em Linux)
- Use paths relativos: `images/projeto.jpg`
- Não use espaços em nomes
- Teste com URLs absolutas se necessário

### Erro: "WhatsApp não abre"
**Solução:**
- Verifique número tem código país (+55)
- Elimine espaços: `5511999999999`
- Teste link em novo browser
- Verifique se número é válido

### Erro: "Form não funciona"
**Solução:**
- Confirme handler está correto no script.js
- Teste com números de validação
- Verifique console para erros JavaScript
- Teste WhatsApp manualmente

### Erro: "CSS/JS não carregando"
**Solução:**
- Verifique filenames (maiúsculas/minúsculas)
- Estejam no mesmo diretório
- Links relativos estejam corretos
- Sem espaços nos nomes

---

## 📞 Suporte de Registrador de Domínio

### Principais Registradores
- **HostGator**: https://hostgator.com.br (suporte excelente)
- **Godaddy**: https://godaddy.com (simples)
- **Namecheap**: https://namecheap.com (barato)
- **UOL Domínios**: https://domains.uol.com.br (nacional)
- **Registro.br**: https://registro.br (.br brasileiro)

---

## 🎉 Pronto para Produção!

Siga este checklist e seu site:
- ✅ Estará LIVE
- ✅ Com domínio profissional
- ✅ HTTPS seguro
- ✅ Otimizado para performance
- ✅ Pronto para gerar leads

**ProTip**: Após 1 semana, solicite às pessoas que testam feedback sobre:
- Velocidade
- Clareza das informações
- Disposição visual
- Chamadas à ação

Isso ajudará a fazer micro-otimizações!

---

## 📚 Recursos Úteis

- **HTML Validator**: https://validator.w3.org/
- **Image Compressor**: https://tinypng.com
- **CSS Minifier**: https://cssminifier.com
- **Lighthouse**: Chrome DevTools (F12 → Lighthouse)
- **Mobile Tester**: https://search.google.com/test/mobile-friendly
- **Uptime Monitor**: https://pingdom.com

---

**Versão**: 2.0  
**Última atualização**: Abril 2026  
**Status**: ✅ Pronto para Produção

