# ![hancker_hank.png](https://github.com/kakanew/Hacker_Hank/blob/master/hackerrank.jpg?raw=true)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# [Day 1: Arithmetic Operators](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_1/Day_1_Arithmetic_Operators.js)

## Objetivo

Neste desafio, praticamos o uso de operadores aritméticos.

## Tarefa

Complete as seguintes funções no editor abaixo:

1. getArea (comprimento, largura): Calcula e retorna a área de um retângulo com os lados de **comprimento** e **largura** .
2. getPerimeter (length, width): Calcula e retorna o perímetro de um retângulo com lados de **comprimento** e **largura** .

Os valores retornados por essas funções são impressos em stdout por código de stub bloqueado no editor.

## Formato de entrada

### getArea

| Tipo de dados | Parâmetro   | Descrição                                           |
| :------------ | :---------- | :-------------------------------------------------- |
| Número        | comprimento | Um número que denota o comprimento de um retângulo. |
| Número        | altura      | Um número que indica a altura de um retângulo.      |

### getPerimeter (length, height)

| Tipo de dados | Parâmetro   | Descrição                                           |
| :------------ | :---------- | :-------------------------------------------------- |
| Número        | comprimento | Um número que denota o comprimento de um retângulo. |
| Número        | altura      | Um número que indica a altura de um retângulo.      |

## Restrições

- **1 <= comprimento, largura <= 100**
- **comprimento** e **altura** são escalados para no máximo três casas decimais.

## Formato de saída

| Função       | Tipo de Devolução | Descrição                                                    |
| :----------- | :---------------- | :----------------------------------------------------------- |
| getArea      | Número            | A área de um retângulo com lados de **comprimento** e **largura** . |
| getPerimeter | Número            | O perímetro de um retângulo com lados de **comprimento** e **largura** . |

## Amostra de entrada 0

```
3 
4,5
```

\## Saída de amostra 0

```
13,5 
15
```

## Explicação

A área do retângulo é **comprimento X largura = 3 X 4,5 = 13,5** .

O perímetro do retângulo é **2 X (comprimento + altura) = 2 X (3 + 4,5) = 15** .

------

# [Day 1: Functions](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_1/Day_1_Functions.js)

## Objetivo

Hoje, estamos discutindo funções JavaScript. Confira o tutorial em anexo para mais detalhes.

## Tarefa

Implemente uma função denominada fatorial que possui um parâmetro: um inteiro, **n** . Deve retornar o valor de **n!** (ou seja, **n** fatorial).

## Formato de entrada

O código stub bloqueado no editor lê um único inteiro, **n** , de stdin e o passa para uma função chamada fatorial.

## Restrições

- **1 <= n <= 10**

## Formato de saída

A função deve retornar o valor de **n!** .

## Amostra de entrada 0

```
4
```

\## Saída de amostra 0

```
24
```

## Explicação

Devolvemos o valor de **4! = 4 X 3 X 2 X 1 = 24** .

------

# [Day 1: Let and Const](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_1/Day_1_Let_and_Const.js)

## Objetivo

Neste desafio, praticamos declarar variáveis usando as palavras-chave let e const. Confira o tutorial em anexo para mais detalhes.

## Tarefa

1. Declare uma variável constante, **PI** , e atribua a ela o valor Math.PI. Você não passará neste desafio a menos que a variável seja declarada como uma constante e nomeada PI (maiúscula).
2. Leia um número, **r** , denotando o raio de um círculo de stdin.
3. Uso **PI** e **r** para calcular a **área** e **perímetro** de um círculo de raio possuindo.
4. A **área de** impressão como a primeira linha de saída e o **perímetro de** impressão como a segunda linha de saída.

## Formato de entrada

Um único inteiro, **r** , denotando o raio de um círculo.

## Restrições

- **0 <= n <= 100**
- **r é um número de ponto flutuante escalado para no máximo 3 casas decimais.**

## Formato de saída

Imprima as duas linhas a seguir:

1. Na primeira linha, imprima a **área** do círculo com raio **r** .
2. Na segunda linha, imprima o **perímetro** do círculo com raio **r** .

## Amostra de entrada 0

```
2,6
```

\## Saída de amostra 0

```
21.237166338267002 
16.336281798666924
```

## Explicação

Dado o raio **r = 2,6** , calculamos o seguinte:

- **área = (pi \* r ^ 2)**
- **perímetro = ({2} \*pi\* r ^ 2)**

Em seguida, imprimimos a **área** como nossa primeira linha de saída e o **perímetro** como nossa segunda linha de saída.

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)