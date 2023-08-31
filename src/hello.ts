// @deno-types="npm:@types/readline-sync"
import teclado from "npm:readline-sync";
import print from "./print.ts";

print("Insira seu nome:");

const nome: string = teclado.question();

print("Olá " + nome);
