# ![hancker_hank.png](https://github.com/kakanew/Hacker_Hank/blob/master/hackerrank.jpg?raw=true)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# [Day 4: Create a Rectangle Object](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_4/Day_4_Create_a_Rectangle_Object.js)

## Objetivo

Neste desafio, praticamos a criação de objetos.

## Tarefa

Conclua a função no editor. Possui dois parâmetros: e. Ele deve retornar um retângulo de modelagem de objeto com as seguintes propriedades:

- **comprimento** : este valor é igual a **a** .
- **largura** : este valor é igual a **b** .
- **perímetro** : este valor é igual a **2 X (a + b)**
- **área** : este valor é igual a **a X b**

**Nota** : Os nomes das propriedades do objeto devem ser escritos corretamente para passar neste desafio.

## Formato de entrada

A primeira linha contém um inteiro denotando **a** .

A segunda linha contém um inteiro denotando **b** .

## Restrições

- **1 <= x, y <= 100**

## Formato de saída

Retorna um objeto que possui as propriedades especificadas acima. O código bloqueado no editor imprime o **comprimento** , **largura** , **perímetro** e **área** do objeto retornado em STDOUT.

## Amostra de entrada 0

```
4 
5
```

## Saída de amostra 0

```
4 
5 
18 
20
```

## Explicação 0

Dado um **comprimento** de **a = 3** e uma **largura** de **b = 5** , o **perímetro** do objeto Retângulo é **4 + 4 + 5 + 5 = 18** e sua **área** é **4 X 5 = 20** .

------

# [Day 4: Count Objects](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_4/Day_4_Count_Objects.js)

## Objetivo

Neste desafio, aprendemos sobre como iterar objetos.

## Tarefa

Conclua a função no editor. Ele tem um parâmetro: um array, **a** , de objetos. Cada objecto na matriz tem duas propriedades inteiros indicados por **x** e **y** . A função deve retornar uma contagem de todos esses objetos **o** na matriz **a** que satisfazem **ox = oy** .

## Restrições

- **5 <= n <= 10**
- **1 <= x, y <= 100**

## Formato de saída

Retorne uma contagem do número total de objetos **o** tal que **ox = oy** . O código de stub bloqueado no editor imprime o valor retornado em STDOUT.

## Amostra de entrada 0

```
5 
1 1 
2 3 
3 3 
3 4 
4 5
```

## Saída de amostra 0

```
2
```

## Explicação 0

Existem **n = 5** objetos na matriz de **objetos** :

- Objetos [0] = {x: 1, y: 1}
- Objetos [1] = {x: 2, y: 3}
- Objetos [2] = {x: 3, y: 3}
- Objetos [3] = {x: 4, y: 4}
- Objetos [4] = {x: 5, y: 5}

Como temos dois objetos **o** que satisfazem **ox = oy** (ou seja, **Objetos [0]** e **Objetos [2]** ), retornamos **2** como nossa resposta.

------

# [Day 4: Classes](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_4/Day_4_Classes.js)

## Objetivo

Neste desafio, praticamos o uso de classes JavaScript.

## Tarefa

Crie uma classe Polygon que tenha as seguintes propriedades:

- Um construtor que obtém uma matriz de valores inteiros que descrevem os comprimentos dos lados do polígono.
- Um método perimeter () que retorna o perímetro do polígono.
  O código bloqueado no editor testa o construtor Polygon e o método de perímetro.

**Nota** : O método do perímetro deve ser minúsculo e escrito corretamente.

## Formato de entrada

Não há entrada para este desafio.

## Formato de saída

O método de perímetro deve retornar o perímetro do polígono usando a matriz de comprimento lateral passada ao construtor.

## Explicação

Considere o seguinte código:

```
// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);
  
// Print the perimeter
console.log(triangle.perimeter());
  
```

Quando executado com uma classe Polygon devidamente implementada, este código deve imprimir o resultado de **3 + 4 + 5 = 12** .

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)