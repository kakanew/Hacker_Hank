function getLetter(s) {
    let letter;
    // Write your code here
    var primeiraLetra = s.charAt(0);
    switch(primeiraLetra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter ='A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter ='B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter ='C';
            break;
        default:
            letter ='D'
    }
    return letter;
}

//Testes IDE Input
console.log(getLetter("adfgt"));
console.log(getLetter("amor"));
console.log(getLetter("fogo"));
console.log(getLetter("lampada"));