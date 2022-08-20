let input =require('fs').readFileSync('./dev/stdin/flie.txt', 'utf8')
let lines = input.split('\n')

const lenha = (line) => line.split(" ").map(a => +a)
const [a,b,c] = lenha(lines.shift())
lista=[a,b,c]
soma=Math.max(a,b,c)

console.log(`${soma} eh o maior`)