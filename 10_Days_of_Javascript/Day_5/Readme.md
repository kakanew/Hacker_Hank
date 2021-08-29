# ![hackerrank](../../hackerrank.jpg)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# Day 5: Inheritance

## Objetivo

Neste desafio, praticamos a implementação de herança e usamos protótipos JavaScript para adicionar um novo método a um protótipo existente.

## Tarefa

Fornecemos a implementação de uma classe Rectangle no editor. Execute as seguintes tarefas:

1. Adicione um método de área ao protótipo de Rectangle.
2. Crie uma classe Square que satisfaça o seguinte:
   - É uma subclasse de Rectangle.
   - Ele contém um construtor e nenhum outro método.
   - Ele pode usar o método de área da classe Rectangle para imprimir a área de um objeto Square.

O código bloqueado no editor testa as implementações de classe e método e imprime os valores de área em STDOUT.

------

# Day 5: Template Literals

## Objetivo

Neste desafio, praticamos o uso de literais de modelo JavaScript. 

## Tarefa

O código no editor tem um literal de modelo com tag que passa a área e o perímetro de um retângulo para uma função de tag chamada lados. Lembre-se de que o primeiro argumento de uma função de tag é uma matriz de literais de string do modelo e os valores subsequentes são os respectivos valores de expressão do modelo.

Conclua a função no editor para que faça o seguinte:

1. Encontra os valores iniciais de **s1** e **s2** conectando os valores de área e perímetro na fórmula:

$∗∗(s=(P+-sqrt(P-16UMA))/4)P$∗∗(s=(P+-sqrt(P-16UMA))/4)P$

- onde **A** é a área do retângulo e **P** é seu perímetro.

1. Cria uma matriz que consiste em **s1** e **s2** e a classifica em ordem crescente.
2. Retorna a matriz classificada.

## Formato de entrada

A primeira linha contém um número inteiro denotando **s1** .

A segunda linha contém um inteiro denotando **s2** .

## Restrições

- **1 <= s1, s2 <= 100**

## Formato de saída

Retorne uma matriz consistindo em **s1** e **s2** , classificados em ordem crescente.

## Amostra de entrada 0

```
10 
14
```

## Saída de amostra 0

```
10 
14
```

## Explicação 0

O código bloqueado no editor passa as seguintes matrizes para a função de tag:

- O valor dos **literais** é ['A área é:', '. \ NO perímetro é:', '.' ]
- O valor de **expressões** é [140, 48], em que o primeiro valor indica a área do rectângulo, **um** , e o segundo valor indica o seu perímetro, **P** .

Quando inserimos esses valores em nossa fórmula, obtemos o seguinte:

```
s1 = 
s2 =
```

Em seguida, armazenamos esses valores em um array, [14, 10], classificamos o array e retornamos o array ordenado, [10, 14], como nossa resposta.

------

# Day 5: Arrow Functions

## Objetivo

Neste desafio, praticamos o uso de funções de seta. 

## Tarefa

Conclua a função no editor. Ele tem um parâmetro: uma matriz, **nums** . Ele deve iterar por meio da matriz, executando uma das seguintes ações em cada elemento:

- Se o elemento for par, multiplique o elemento por **2** .
- Se o elemento for ímpar, multiplique o elemento por **3** .

A função deve então retornar a matriz modificada.

## Formato de entrada

A primeira linha contém um inteiro, **n** , denotando o tamanho de **nums** .

A segunda linha contém **n** inteiros separados por espaço que descrevem os respectivos elementos de **nums** .

## Restrições

- **1 <= n <= 10**
- 1 <= **nums [i]** <= 100, onde **nums [i]** é o **iésimo** elemento de **nums** .

## Formato de saída

Retorne a matriz modificada onde cada elemento par é duplicado e cada elemento ímpar é triplicado.

## Amostra de entrada 0

```
5 
1 2 3 4 5
```

## Saída de amostra 0

```
3 4 9 8 15
```

## Explicação 0

Dado **nums = [1,2,3,4,5]** , modificamos cada elemento para que todos os elementos pares sejam multiplicados por **2** e todos os elementos ímpares sejam multiplicados por **3** . Em outras palavras, **[1,2,3,4,5] => [1 \*3,2\* 2 \*, 3\* 3 \*, 4\* 2,5 \* 3] -> [3,4,9,8,15]** . Em seguida, retornamos a matriz modificada como nossa resposta.

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)