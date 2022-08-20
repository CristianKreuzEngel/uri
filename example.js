let input =require('fs').readFileSync('./dev/stdin/flie.txt', 'utf8')
let lines = input.split('\n')

const pegarValoress = (line) => line.split(" ").map(a => +a)
const [a,b,c] = pegarValoress(lines.shift())

let x = +lines.shift()