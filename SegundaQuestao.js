function fibonacci(n) {
    let a = 0, b = 1, temp;
    while (b <= n) {
        if (b === n) return true;
        temp = b;
        b = a + b;
        a = temp;
    }
    return false;
}

const number = parseInt(prompt("Digite um número:"));

if (isNaN(number)) {
    console.log("Por favor, insira um número válido.");
} else {
    if (fibonacci(number)) {
        console.log(`O número ${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
    }
}
