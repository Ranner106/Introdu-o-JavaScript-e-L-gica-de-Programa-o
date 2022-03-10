let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
//console.log(numbers)
//2
/*let soma = 0
for (let i = 0; i < numbers.length; i+= 1){
    soma+= numbers[i];
}
console.log(soma)*/
/*
let soma = 0
let media = 0
for (let i = 0; i < numbers.length; i+= 1){
    soma+= numbers[i];
    media = soma/numbers.length
   
 }

 if (media > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
} */

//Math.max.aplly(null,numbers)

//let b = Math.max(...numbers)
//console.log(b)

/*let divisores = 0

for (let i =0; i < numbers.length;i+=1){
    if (numbers[i] % 3 === 0){
        divisores+= 1
    }
}

console.log(divisores)*/

/*let menor = numbers[0];
for (let i =1; i < numbers.length;i+=1){
    if (menor > numbers[i]){
        (menor = numbers[i]);
    }
}

console.log(menor);*/

let a = []

for (let i =1; i < 26;i+=1){
    a.push(i)
}

console.log(a)

let resultado = []
let divisao = 0

for ( let j = 0; j < a.length ; j+=1) {
    divisao = a[j]/2
    resultado.push(divisao)
}

console.log(resultado)









