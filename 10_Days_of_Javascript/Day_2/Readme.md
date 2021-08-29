# ![hancker_hank.png](https://github.com/kakanew/Hacker_Hank/blob/master/hackerrank.jpg?raw=true)

# [Hacker Hank](https://github.com/kakanew/Hacker_Hank)

### [10 Days of Javascript](https://github.com/kakanew/Hacker_Hank/tree/master/10_Days_of_Javascript)

# [Day 2: Conditional Statements: If-Else](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_2/Day_2_Conditional_Statements_If-Else.js)

## Objetivo

Neste desafio, aprendemos sobre as declarações if-else.

## Tarefa

Conclua a função getGrade (pontuação) no editor. Ele tem um parâmetro: um número inteiro, **pontuação** , denotando o número de pontos que Julia ganhou em um exame. Deve devolver a carta correspondente à sua **nota de** acordo com as seguintes regras:

- Se **(25 <pontuação <= 30)** , seguida **de grau = Uma** .
- Se **(20 <pontuação <= 25)** , seguida **de grau = B** .
- Se **(15 <pontuação <= 20)** , seguida **de grau = C** .
- Se **(10 <pontuação <= 15)** , seguida **de grau = D** .
- Se **(5 <pontuação <= 10)** , seguida **de grau = E** .
- Se **(0 <pontuação <= 5)** , em seguida, **grau = F** .

## Formato de entrada

O código stub no editor lê um único inteiro denotando **pontuação** de stdin e o passa para a função.

## Restrições

- **0 <= pontuação <= 30**

## Formato de saída

A função deve retornar o valor da **nota** (ou seja, a nota em letras) que Julia obteve no exame.

## Amostra de entrada 0

```
11
```

\## Saída de amostra 0

```
D
```

## Explicação

Porque **pontuação = 11** , satisfaz a condição **(10 <pontuação <= 15)** (que corresponde a D). Assim, retornamos D como nossa resposta.

------

# [Day 2: Conditional Statements: Switch](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_2/Day_2_Conditional_Statements_Switch.js)

## Objetivo

Neste desafio, aprendemos sobre as instruções switch. Confira o tutorial em anexo para mais detalhes.

## Tarefa

Conclua a função getLetter (s) no editor. Ele tem um parâmetro: uma string, **s** , que consiste em letras do alfabeto inglês em minúsculas (ou seja, de a a z). Deve retornar A, B, C ou D, dependendo dos seguintes critérios:

- Se o primeiro caractere na string **s** estiver no conjunto **{a, e, i, o, u}** , então retorne A.
- Se o primeiro caractere na string **s** estiver no conjunto **{b, c, d, f, g}** , então retorne B.
- Se o primeiro caractere na string **s** estiver no conjunto **{h, j, k, l, m}** , então retorne C.
- Se o primeiro caractere na string **s** estiver no conjunto **{n, p, q, r, s, t, v, w, x, y, z}** , então retorne D.

**Dica** : você pode obter a letra em algum índice **i** em **s** usando a sintaxe s [i] ou s.charAt (i).

## Formato de entrada

O código stub no editor lê uma única string denotando **s** de stdin.

## Restrições

- **1 <= | s | <= 100** , onde **| s |** é o comprimento de **s** .
- A string **s** contém letras minúsculas do alfabeto inglês (ou seja, de a a z) apenas.

## Formato de saída

Retorne A, B, C ou D de acordo com os critérios fornecidos acima.

## Amostra de entrada 0

```
adfgt
```

\## Saída de amostra 0

```
AA
```

## Explicação

O primeiro caractere da string **s = adfgt** é a. Como os critérios dados estipulam que imprimimos A sempre que o primeiro caractere estiver em **{a, e, i, o, u}** , retornamos A como nossa resposta.

------

# [Day 2: Loops](https://github.com/kakanew/Hacker_Hank/blob/master/10_Days_of_Javascript/Day_2/Day_2_Loops.js)

## Objetivo

Neste desafio, praticamos looping sobre os caracteres da string. Confira o tutorial em anexo para mais detalhes.

## Tarefa

Complete a função vowelsAndConsonants no editor abaixo. Ele tem um parâmetro, uma string, **s** , que consiste em letras do alfabeto inglês em minúsculas (ou seja, de a a z). A função deve fazer o seguinte:

1. Primeiro, imprima cada vogal em **s** em uma nova linha. As vogais do inglês são a, e, i, o e u, e cada vogal deve ser impressa na mesma ordem em que apareceu no **s** .
2. Em segundo lugar, imprima cada consoante (isto é, não-vogal) em **s** em uma nova linha na mesma ordem em que apareceu em **s** .

## Formato de entrada

O código stub bloqueado no editor lê a string **s** de stdin e a passa para a função.

## Formato de saída

Primeiro, imprima cada vogal em **s** em uma nova linha (na mesma ordem em que apareceram em **s** ). Em segundo lugar, imprima cada consoante (isto é, não-vogal) em **s** em uma nova linha (na mesma ordem em que apareceram em **s** ).

## Amostra de entrada 0

```
javascriptloops
```

\## Saída de amostra 0

```
a 
a 
i 
o 
o 
j 
v 
s 
c 
r 
p 
t 
l 
p 
s
```

## Explicação 0

Observe o seguinte:

- Cada letra é impressa em uma nova linha.
- Em seguida, as vogais são impressas na mesma ordem em que apareceram em **s** .
- Em seguida, as consoantes são impressas na mesma ordem em que apareceram em **s** .

### [Hacker Hank](https://github.com/kakanew/Hacker_Hank)