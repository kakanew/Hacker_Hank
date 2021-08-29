/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels=[];
    var consonants=[];
    for(let i=0; i<s.length; i++){
        var char= s.charAt(i);
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            vowels.push(char);
        }
        else{
            consonants.push(char);
        }
    }
    for(var i=0; i<vowels.length; i++){
        console.log(vowels[i]);
    }
    for(var j=0; j<consonants.length; j++){
        console.log(consonants[j]);
    }
}
// Testes IDE Input
vowelsAndConsonants("javascriptloops");
console.log("-----------------------");
vowelsAndConsonants("learnjavascriptloopsinhackerrankweekofcode");
// IDE Output
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// -----------------------
// e
// a
// a
// a
// i
// o
// o
// i
// a
// e
// a
// e
// e
// o
// o
// e
// l
// r
// n
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// n
// h
// c
// k
// r
// r
// n
// k
// w
// k
// f
// c
// d
