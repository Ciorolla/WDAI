/*
         HTML:
         id cesarText - pole z tekstem do zaszyfrowania
         id cesarShift - pole z przesuniÄ™ciem
         id cesarEncryptResult - pole na zakodowany Å‚aÅ„cuch
         id cesarDecryptResult - pole na odkodowany Å‚aÅ„cuch
         id cesarDisplay - pole na tabelkÄ™
         */


function cesarLetter(letter, shift) {
    let code = letter.charCodeAt(0);
    if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) { return letter; } //Not an ASCII letter
    let big = false;
    if (code >= 65 && code <= 90) { big = true; }
    shift = shift % 26;
    code += shift;
    if (big) {
        if (code > 90) { code = 65 + code - 90 - 1; }
        if (code < 65) { code = 90 + code - 65 + 1; }
    }
    else {
        if (code > 122) { code = 97 + code - 122 - 1; }
        if (code < 97) { code = 122 + code - 97 + 1; }
    }
    return String.fromCharCode(code);
}

function cesarString(string, shift) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        newString += cesarLetter(string.charAt(i), shift);
    }
    return newString;
}
function encrypt() {
    let string = document.getElementById("cesarText").value;
    let shift = document.getElementById("cesarShift").value;
    document.getElementById("cesarEncryptResult").innerHTML = cesarString(string, shift)
}
function decrypt() {
    let string = document.getElementById("cesarText").value;
    let shift = document.getElementById("cesarShift").value;
    document.getElementById("cesarDecryptResult").innerHTML = cesarString(string, -shift)
}
function cesarDisplay() {
    let shift = document.getElementById("cesarShift").value;
    let normal = "";
    let shifted = "";
    for (let i = 65; i <= 90; i++) {
        let char = String.fromCharCode(i);
        normal += char;
        shifted += cesarLetter(char, shift);
    }
    document.getElementById("cesarDisplay").innerHTML = normal + '<br>' + shifted;
    encrypt();
    decrypt();

}
function cesarInit() {
    document.getElementById("cesarShift").addEventListener('input', cesarDisplay);
    document.getElementById("cesarText").addEventListener('input', cesarDisplay);


}


cesarInit();