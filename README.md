# Parceiros Astro

Site estático simples para consultar parceiros, tipos e regras.

## Stack

- Astro
- TypeScript
- CSS puro
- Cloudflare Pages

## Requisitos

- Node.js LTS instalado
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL mostrada no terminal.

## Gerar build estático

```bash
npm run build
```

O Astro vai gerar a pasta `dist/`.

## Conferir o build localmente

```bash
npm run preview
```

## Onde editar o conteúdo

### Lista de parceiros

Arquivo:

```txt
src/data/parceiros.ts
```

Cada parceiro tem este formato:

```ts
{
  id: "abner",
  nome: "Abner",
  imagem: "Abner.png",
  tipos: ["Médico"],
  habilidades: [
    "Médico iniciante. Uma vez por turno..."
  ]
}
```

### Tipos de parceiros

Arquivo:

```txt
src/data/tipos.ts
```

### Regras de usando parceiros e ferimento/morte

Arquivo:

```txt
src/data/paginas.ts
```

## Imagens dos NPCs

Coloque as imagens em:

```txt
public/parceiros
```

O nome precisa bater com o campo `imagem`.

Exemplos:

```txt
public/parceiros/Abner.png
public/parceiros/Mutuca.png
public/parceiros/Arlo “Olho de Leite”.png
```

Se a imagem não existir, o card mostra um fallback com iniciais.

## Filtro de parceiros

A página `/parceiros` filtra por:

- Tipo: Guardião, Médico, Perseguidor etc.
- Nome do NPC

O filtro roda no navegador com JavaScript simples, sem backend.

## Deploy no Cloudflare Pages

Use as configurações:

```txt
Build command: npm run build
Build output directory: dist
```

Depois conecte o repositório do GitHub ao Cloudflare Pages.
