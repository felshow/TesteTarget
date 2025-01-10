const str = "Felipe";
let invertedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
}

console.log(`String original: ${str}`);
console.log(`String invertida: ${invertedStr}`);
