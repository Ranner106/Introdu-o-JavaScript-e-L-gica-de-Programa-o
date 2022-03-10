/*
let fatorial = 1
for ( let i = 1; i <= 10 ; i+=1){
    fatorial = fatorial * i
    
}

console.log(fatorial)*/
/*
let word = 'tryber';
let inverso = ''
let inicio = word.length - 1
for (let i = inicio; i >= 0  ; i-=1) {
    inverso = word[i]
    console.log(inverso)
}*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let b = array[0].length
let c = 0

for (let i = 0; i < array.length; i+=1) {
     c = array[i].length
    if (b < c){
        console.log(`A Maior palavra é ${c}`)
  }
}
