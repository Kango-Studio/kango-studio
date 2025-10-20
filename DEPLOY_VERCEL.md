# Deploy na Vercel - Kango Studio

## Configurações Realizadas

### 1. Next.js Config (`next.config.ts`)
- Removidas configurações de export estático
- Adicionadas otimizações de performance para Vercel
- Configuradas otimizações de imagem (WebP, AVIF)
- Adicionados headers de segurança

### 2. Vercel Config (`vercel.json`)
- Configuração específica para Next.js
- Timeout de 10s para função de contato
- Headers de segurança
- Rewrites para sitemap

### 3. Otimizações de Imagem
- Substituição de `<img>` por `<Image>` do Next.js
- Otimização automática de imagens
- Lazy loading implementado

### 4. API de Contato
- Validação de dados aprimorada
- Melhor tratamento de erros
- Template de email melhorado

## Variáveis de Ambiente Necessárias

Configure as seguintes variáveis no painel da Vercel:

```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gmail
NEXT_PUBLIC_SITE_URL=https://kangostudio.vercel.app
```

## Como Fazer o Deploy

1. **Conecte o repositório GitHub à Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe o repositório do GitHub

2. **Configure as variáveis de ambiente:**
   - No painel do projeto, vá em "Settings" > "Environment Variables"
   - Adicione as variáveis listadas acima

3. **Deploy automático:**
   - A Vercel fará deploy automaticamente a cada push na branch main
   - O build será otimizado para produção

## Funcionalidades Dinâmicas

- ✅ Formulário de contato com envio de email
- ✅ Otimização automática de imagens
- ✅ Geração dinâmica de sitemap
- ✅ SSR/SSG híbrido
- ✅ Headers de segurança
- ✅ Compressão gzip

## Monitoramento

- Use o painel da Vercel para monitorar:
  - Performance
  - Erros
  - Analytics
  - Logs de função

## Próximos Passos

1. Configure as variáveis de ambiente
2. Faça o primeiro deploy
3. Teste o formulário de contato
4. Configure domínio personalizado (opcional)
