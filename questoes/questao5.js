function inverter(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let oldString = "O Vitória é COLOSSAL!";
let stringInvertida = inverter(oldString);
console.log("String inicial:", oldString);
console.log("String invertida:", stringInvertida);
