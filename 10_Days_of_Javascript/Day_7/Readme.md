# ![hackerrank](../../hackerrank.jpg)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# [Day 7: Regular Expressions I](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_7/Day_7_Regular_Expressions_I.js)

## Objetivo

Neste desafio, usamos uma expressão regular para avaliar uma string. 

## Tarefa

Complete a função no editor abaixo retornando um objeto RegExp, **re** , que corresponde a qualquer string **s** que comece e termine com a mesma vogal. Lembre-se de que as vogais do inglês são a, e, i, o e u.

## Restrições

- O comprimento da string **s** é **> = 3** .
- A string **s** consiste apenas em letras minúsculas (ou seja, [az]).

## Formato de saída

A função deve retornar um objeto RegExp que corresponda a qualquer string **s** começando e terminando na mesma vogal.

## Amostra de entrada 0

```
bcd
```

## Saída de amostra 0

```
falso
```

## Explicação 0

Essa string começa com (e termina em) uma consoante, portanto, não pode começar e terminar com a mesma vogal.

## Amostra de entrada 1

```
abcd
```

## Saída de amostra 1

```
falso
```

## Explicação 1

Essa string termina em consoante, portanto, não pode começar e terminar com a mesma vogal.

## Amostra de entrada 2

```
abcda
```

## Saída de amostra 2

```
verdade
```

## Explicação 2

Essa string começa e termina com a mesma vogal (a).

## Amostra de entrada 3

```
abcdo
```

## Saída de amostra 3

```
falso
```

## Explicação 3

Essa string começa com a vogal a, mas termina na vogal o.

------

# [Day 7: Regular Expressions II](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_7/Day_7_Regular_Expressions_II.js)

## Tarefa

Conclua a função no editor abaixo retornando um objeto RegExp, **re** , que corresponde a qualquer string **s** satisfazendo as duas condições a seguir:

- A string **s** começa com o prefixo Sr., Sra., Sra., Dr. ou Er.
- O restante da string **s** (ou seja, o resto da string após o prefixo) consiste em uma ou mais letras maiúsculas e / ou minúsculas do alfabeto inglês (ou seja, [az] e [AZ]).

## Restrições

- O comprimento da string **s** é **> = 3** .

## Formato de saída

A função deve retornar um objeto RegExp que corresponde a qualquer cadeia **s** satisfazer ambas as condições dadas.

## Amostra de entrada 0

```
Mr.X
```

## Saída de amostra 0

```
verdade
```

## Explicação 0

Esta string começa com o Sr., seguido por uma letra do alfabeto inglês (X).

## Amostra de entrada 1

```
Sra. Y
```

## Saída de amostra 1

```
verdade
```

## Explicação 1

Esta string começa com Sra., Seguida por uma letra do alfabeto inglês (Y).

## Amostra de entrada 2

```
Dr. # Joseph
```

## Saída de amostra 2

```
falso
```

## Explicação 2

Esta string começa com Dr # em vez de Dr., portanto, é inválida.

## Amostra de entrada 3

```
Er .Abc
```

## Saída de amostra 3

```
falso
```

## Explicação 3

Esta string começa com Er, mas há um espaço antes do ponto (.), Tornando a string inválida.

------

# [Day 7: Regular Expressions III](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_7/Day_7_Regular_Expressions_III.js)

## Tarefa

Complete a função no editor abaixo retornando um objeto RegExp, **re** , que corresponde a todos os inteiros em alguma string **s** .

## Restrições

- O comprimento da string **s** é **> = 3** .
- É garantido que a string **s** contém pelo menos um inteiro.

## Formato de saída

A função deve retornar um objeto RegExp que corresponda a todos os inteiros em alguma string **s** .

## Amostra de entrada 0

```
102, 1948948 e 1.3 e 4.5
```

## Saída de amostra 0

```
102 
1948948 
1 
3 
4 
5
```

## Explicação 0

Quando chamamos jogo na corda **s** e passar o RegExp correta como o nosso argumento, ele retorna o seguinte conjunto de resultados: [ '102', '1948948', '1', '3', '4', '5'].

## Amostra de entrada 1

```
1 2 3
```

## Saída de amostra 1

```
1 
2 
3
```

## Explicação 1

Quando chamamos jogo na corda **s** e passar o RegExp correta como o nosso argumento, ele retorna o seguinte conjunto de resultados: [ '1', '2', '3'].

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

