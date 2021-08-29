# Hacker Hank

### 10 Days of Javascript

# Day 0: Hello, World!

## Objetivo

Neste desafio, revisamos alguns conceitos básicos que irão ajudá-lo a começar esta série. Confira o tutorial para aprender mais sobre a estrutura lexical do JavaScript.

## Tarefa

Uma função de saudação é fornecida para você no editor abaixo. Ele tem um parâmetro,. Execute as seguintes tarefas para completar este desafio:

1. Use console.log () para imprimir Hello, World! em uma nova linha no console, também conhecida como stdout ou saída padrão. O código para esta parte da tarefa já é fornecido no editor.
2. Use console.log () para imprimir o conteúdo de (ou seja, o argumento passado para o principal).
   Você consegue!

## Formato de entrada

| Tipo de dados | Parâmetro         | Descrição                                                    |
| :------------ | :---------------- | :----------------------------------------------------------- |
| fragmento     | parâmetroVariable | Uma única linha de texto contendo uma ou mais palavras separadas por espaço. |

## Formato de saída

Imprima a seguir duas linhas de saída:

1. Na primeira linha, imprima Hello, World! (isso é fornecido para você no editor).
2. Na segunda linha, imprima o conteúdo de parameterVariable.

## Amostra de entrada 0

```
Welcome to 10 Days of JavaScript!
```

\## Saída de amostra 0

```
Hello, World!
Welcome to 10 Days of JavaScript!
```

## Explicação

Imprimimos duas linhas de saída:

1. Imprimimos a string literal Hello, World! usando o código fornecido no editor.
2. O valor de parameterVariable passado para nossa função principal neste caso de amostra foi Welcome to 10 Days of JavaScript !. Em seguida, passamos nossa variável para console.log, que imprime o conteúdo de parameterVariable.

# Day 0: Data Types

## Objetivo

Hoje, estamos discutindo os tipos de dados. Confira o tutorial em anexo para mais detalhes.



## Tarefa

Variáveis chamadas **firstInteger** , **firstDecimal** e **firstString** são declaradas para você no editor abaixo. Você deve usar o operador **+** para realizar a seguinte sequência de operações:

1. Converta **secondInteger** em um inteiro (tipo de número), some-o com **firstInteger** e imprima o resultado em uma nova linha usando console.log.
2. Converta **secondDecimal** em um número de ponto flutuante (tipo Number), some-o com **firstDecimal** e imprima o resultado em uma nova linha usando console.log.
3. Imprima a concatenação de **firstString** e **secondString** em uma nova linha usando console.log. Observe que deve ser impresso primeiro.

## Formato de entrada

| Tipo de dados | Parâmetro         | Descrição                                                    |
| :------------ | :---------------- | :----------------------------------------------------------- |
| fragmento     | **secondInteger** | A representação de string de um inteiro que você deve somar com **firstInteger** . |
| fragmento     | **secondDecimal** | A representação de string de um número de ponto flutuante que você deve somar com **firstDecimal** . |
| fragmento     | **secondString**  | Uma string de uma ou mais palavras separadas por espaço que você deve anexar a **secondString** . |

## Formato de saída

Imprima as seguintes três linhas de saída:

1. Na primeira linha, imprima a soma de **firstInteger** e a representação inteira de **secondInteger** .
2. Na segunda linha, imprima a soma de **firstDecimal** e a representação de ponto flutuante de **secondDecimal** .
3. Na terceira linha, imprima **firstString** concatenado com **secondString** . Você deve imprimir **firstString** antes de **secondString** .

## Amostra de entrada 0

```
12
4.32
is the best place to learn and practice coding!
```

\## Saída de amostra 0

```
16
8.32
HackerRank is the best place to learn and practice coding!
```

## Explicação

Quando somamos os inteiros **4** e **12** , obtemos o inteiro **16** .

Quando somamos os números de ponto flutuante **4.0** e **4.32** , obtemos **8,32** . Quando concatenamos o HackerRank com é o melhor lugar para aprender e praticar a codificação !, obtemos que o HackerRank é o melhor lugar para aprender e praticar a codificação !.

**Você não passará neste desafio se tentar atribuir os valores do Caso de Amostra às suas variáveis em vez de seguir as instruções acima.**