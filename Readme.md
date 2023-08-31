# Typescript com Deno

## Instalação das ferramentas:

Seguir o tutorial: https://deno.land/manual@v1.36.1/getting_started/installation

No caso do linux:

- `curl -fsSL https://deno.land/x/install/install.sh | sh`
- Ao final da execução do script, é necessário adicionar o deno ao PATH do linux (copiar o exports, colar no final do arquivo `~/.bashrc`)

## Configuração do VSCode:

Se você usa VSCode, instale a extensão do deno: Name: https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno

Este repositório conta com uma pasta `.vscode`, que contém as configurações básicas dessa extensão (nada a fazer).

## Cache das dependências:

Este processo precisa ser feito uma vez só, ele faz o download das dependências (como a readline-sync). Ex:

`deno cache src/hello.ts`

## Executar um arquivo ts:

`deno run --allow-all --watch src/hello.ts`

## Sobre os imports npm:

Pacotes npm podem ser imporados no deno usando o prefixo `npm:`, ex:

```js
// @deno-types="npm:@types/readline-sync"
import teclado from "npm:readline-sync";
```

Note que este pacote possui também uma declaração de tipos (comentário anterior ao import). Alguns pacotes npm já possuem tipagens nativamente e não precisam de tal declaração.
