# ![hancker_hank.png](https://github.com/kakanew/Hacker_Hank/blob/master/hackerrank.jpg?raw=true)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# Day 3: Try, Catch, and Finally

## Objetivo

Neste desafio, aprendemos sobre strings e exceções. Confira os tutoriais em anexo para mais detalhes.

## Tarefa

Conclua a função reverseString; tem um parâmetro, **s** . Você deve realizar as seguintes ações:

1. Tente reverter a string **s** usando os métodos split, reverse e join.
2. Se uma exceção for lançada, capture-a e imprima o conteúdo da **mensagem** da exceção em uma nova linha.
3. Imprima **s** em uma nova linha. Se nenhuma exceção foi lançada, então esta deve ser a string invertida; se uma exceção foi lançada, esta deve ser a string original.

## Formato de entrada

O código stub bloqueado no editor lê a variável **s** de stdin e a passa para a função.

## Formato de saída

Você deve escrever duas instruções de impressão usando console.log ():

1. Imprime o conteúdo da **mensagem** de uma exceção detectada em uma nova linha. Se nenhuma exceção foi lançada, esta linha não deve ser impressa.
2. Imprima **s** em uma nova linha. Se nenhuma exceção foi lançada, então esta deve ser a string invertida; se uma exceção foi lançada, esta deve ser a string original.

## Amostra de entrada 0

```
"1234"
```

\## Saída de amostra 0

```
4321
```

## Explicação 0

**s = “1234”** é um tipo de string, portanto, pode ser revertido sem lançar uma exceção. Assim, imprimimos o valor invertido, 4321, como nossa resposta.

## Amostra de entrada 1

```
Number(1234)
```

\## Saída de amostra 1

```
s.split is not a function
1234
```

## Explicação 1

**s = Number (1234)** não é um tipo de string, portanto, não pode ser revertido usando funções de string. Quando tentamos revertê-lo de qualquer maneira, ele lança uma exceção. Em seguida, capturamos a exceção e imprimimos sua **mensagem** , que é s.split não é uma função. Em seguida, finalmente imprimimos **s** que, por não poder ser revertido, é o Número (1234).

------

# Day 3: Throw

## Objetivo

Neste desafio, praticamos o uso de instruções throw e catch para trabalhar com mensagens de erro personalizadas.

## Tarefa

Conclua a função isPositive abaixo. Ele tem um parâmetro inteiro, **a** . Se o valor de **a** for positivo, ele deve retornar a string SIM. Caso contrário, ele deve lançar um erro de acordo com as seguintes regras:

- Se **a** for **0** , lance um Erro com a **mensagem = Erro Zero** .
- Se **a** for negativo, lance um erro com a **mensagem = Erro negativo** .

## Formato de entrada

O código de stub bloqueado no editor lê a seguinte entrada de stdin e passa cada valor de **a** para a função como um argumento:

A primeira linha é um inteiro, **n** , denotando o número de vezes que a função será chamada com algum **a** .

Cada linha **i** das **n** linhas subsequentes contém um inteiro denotando algum **a** .

## Restrições

- **1 <= n <= 5**
- **-100 <= a <= 100**

## Formato de saída

Se o valor de **a** for positivo, a função deve retornar a string SIM. Caso contrário, ele deve lançar um erro de acordo com as seguintes regras:

- Se **a** for **0** , lance um Erro com a **mensagem = Erro Zero** .
- Se **a** for negativo, lance um erro com a **mensagem = Erro negativo** .

## Amostra de entrada 0

```
3 
1 
2 
3
```

\## Saída de amostra 0

```
YES
YES
YES
```

## Explicação 0

Cada um dos valores fornecidos é positivo, portanto, retornamos SIM todas as vezes. O valor retornado durante cada chamada de função é impresso em uma nova linha por código de stub bloqueado no editor.

## Amostra de entrada 1

```
3 
2 
0 
6
```

\## Saída de amostra 1

```
YES
Zero Error
YES
```

## Explicação 1

O código de stub bloqueado no editor faz as três chamadas a seguir para a função isPositive:

1. isPositive (2): retorna SIM porque **2** é positivo.
2. isPositive (0): Como **a = 0** , lançamos um Erro com a **mensagem = Erro Zero** . Isso é detectado pelo código de stub bloqueado e o valor de sua **mensagem** é impresso.
3. isPositive (6): retorna SIM porque **6** é positivo.

## Amostra de entrada 2

```
2 
-1 
20
```

\## Saída de amostra 2

```
Negative Error
YES
```

## Explicação 2

O código de stub bloqueado no editor faz as duas chamadas a seguir para a função isPositive:

1. isPositive (-1): Como **a = -1** , lançamos um Erro com a **mensagem = Erro Negativo** .
   Isso é detectado pelo código de stub bloqueado e o valor de sua **mensagem** é impresso.
2. isPositive (20): retorna SIM porque **20** é positivo.

------

# Day 3: Arrays

## Objetivo

Neste desafio, aprendemos sobre Arrays. Confira o tutorial em anexo para mais detalhes.

## Tarefa

Conclua a função getSecondLargest no editor abaixo. Ele tem um parâmetro: uma matriz, **nums** , de **n** números. A função deve encontrar e retornar o segundo maior número em **nums** .

## Formato de entrada

O código de stub bloqueado no editor lê a seguinte entrada de stdin e a passa para a função:

A primeira linha contém um inteiro, **n** , denotando o tamanho da matriz **nums** .

A segunda linha contém **n** números separados por espaço que descrevem os elementos em **nums** .

## Restrições

- **1 <= n <= 10**
- **0 <= nums <= 100** , onde **nums** é o número no índice **i** .
- Os números em não são distintos.

## Formato de saída

Retorne o valor do segundo maior número na matriz **nums** .

## Amostra de entrada 0

```
5 
2 3 6 6 5
```

## Saída de amostra 0

```
5
```

## Explicação

Dado o array **nums = [2,3,6,6,5]** , vemos que o maior valor no array é **6** e o segundo maior valor é **5** . Portanto, retornamos **5** como nossa resposta.

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)