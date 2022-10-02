let input =require('fs').readFileSync('./dev/stdin/flie.txt', 'utf8')
let lines = input.split('\n')
const pValor = (line) => line.split(" ").map(a => +a)
let contA = 0
let contB = 0
while (true){
    let caso =+lines.shift()
    if (caso == 0){
        break;
    }
    for (let i = 0; i < caso; i++){
        let [a,b] = pValor(lines.shift())
        if (a > b){
            contA += 1
        }
        else if(a < b){
            contB += 1
        }
    }
    console.log(contA,contB)
    contA = 0
    contB = 0
}