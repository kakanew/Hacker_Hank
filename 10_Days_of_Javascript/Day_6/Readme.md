# ![hackerrank](../../hackerrank.jpg)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# Day 6: Bitwise Operators

## Objetivo

Hoje, estamos praticando operações bit a bit.

## Tarefa

Definimos **S** como uma sequência de inteiros sequenciais distintos de **1** a **n** ; em outras palavras, **S = {1,2,3,…, n}** . Queremos saber o bit a bit máximo e valor de quaisquer dois inteiros, **um** e **b** (onde **(a <b)** ), em sequência **S** , que também é menor do que um determinado número inteiro, **k** .

Complete a função no editor de forma que, dados **n** e **k** , ele retorne o máximo **a & b <k** .

Nota: O símbolo **&** representa o operador AND bit a bit.

## Formato de entrada

A primeira linha contém um inteiro, **q** , denotando o número de chamadas de função.
Cada uma das **q** linhas subsequentes define um conjunto de dados para uma chamada de função na forma de dois inteiros separados por espaço que descrevem os respectivos valores de **n** e **k** .

## Restrições

- **1 <= q <= 10 ^ 3**
- **2 <= n <= 10 ^ 3**
- **2 <= k <= n**

## Formato de saída

Devolver o valor máximo possível de **um & b <k** para qualquer **um <b** em sequência **S** .

## Amostra de entrada 0

```
3 
5 2 
8 5 
2 2
```

## Saída de amostra 0

```
1 
4 
0
```

## Explicação 0

Realizamos as seguintes **q = 3** chamadas de função:

1. Quando **n = 5** e **k = 2** , temos as seguintes possíveis **a** e **b** valores em conjunto **S = {1,2,3,4,5}** :

| uma  | b    | a e b                        |
| :--- | :--- | :--------------------------- |
| 1    | 2    | 001 e 010 = (000) ^ 2 => (0) |
| 1    | 3    | 001 e 011 = (001) ^ 2 => (1) |
| 1    | 4    | 001 e 100 = (000) ^ 2 => (0) |
| 1    | 5    | 001 e 101 = (001) ^ 2 => (1) |
| 2    | 3    | 010 e 011 = (010) ^ 2 => (2) |
| 2    | 4    | 010 e 100 = (000) ^ 2 => (0) |
| 2    | 5    | 010 e 101 = (000) ^ 2 => (0) |
| 3    | 4    | 011 e 100 = (000) ^ 2 => (0) |
| 3    | 5    | 011 e 101 = (001) ^ 2 => (1) |
| 4    | 5    | 100 e 101 = (100) ^ 2 => (4) |

- O máximo de qualquer **a & b** que também seja **<k** é **1** , portanto, retornamos **1** .

1. Quando **n = 8** e **k = 5** , o máximo de qualquer **um & b <K** em conjunto **S = {1,2,3,4,5,6,7,8}** é **4** (ver tabela acima), de modo que retornam **4** .
2. Quando **n = 2** e **k = 2** , o máximo de qualquer **um & b <K** em conjunto **S = {1,2}** é **0** (ver tabela acima), de modo que retornam **0** .

## Amostra de entrada 1

```
2 
9 2 
8 3
```

## Saída de amostra 1

```
1 
2
```

## Explicação 1

Realizamos as seguintes **q = 2** chamadas de função:

1. Quando **n = 9** e **k = 2** , temos as seguintes possíveis **a** e **b** valores em conjunto **S = {} 1,2,3,4,5,6,7,8,9 \**** é **um** (ver tabela acima) , então retornamos **1** .
2. Quando **n = 8** e **k = 3** , o máximo de qualquer **um & b <K** em conjunto **S = {1,2,3,4,5,6,7,8}** é **2** (ver tabela acima), de modo que retornam **2** .

------

# Day 6: JavaScript Dates

## Objetivo

Neste desafio, aprendemos sobre datas de JavaScript. 

## Tarefa

Dada uma string de data, **dateString** , no formato MM / DD / AAAA, encontre e retorne o nome do dia para essa data. Cada nome de dia deve ser uma das seguintes strings: domingo, segunda, terça, quarta, quinta, sexta ou sábado. Por exemplo, o nome do dia para a data 07/12/2016 é quarta-feira.

## Formato de entrada

O código de stub bloqueado no editor lê a seguinte entrada de stdin:
A primeira linha contém um inteiro, **d** , denotando o número de datas a serem verificadas.
Cada linha **i** das **d** linhas subsequentes contém uma data no formato MM / DD / AAAA; cada data denota algum **dateString** que é passado para a função.

## Restrições

- É garantido que a entrada consiste apenas em datas válidas.

## Formato de saída

A função deve retornar uma string denotando o dia da semana correspondente à data indicada por **dateString** .

## Amostra de entrada 0

```
2 11/10/2009 
10/11/2010
```

## Saída de amostra 0

```
Domingo 
quarta-feira
```

## Explicação 0

A função é chamada para as seguintes datas **d = 2** :

1. A data 11/10/2009 era um domingo, então voltamos no domingo.
2. A data 11/10/2010 foi uma quarta-feira, por isso voltamos quarta-feira.

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

