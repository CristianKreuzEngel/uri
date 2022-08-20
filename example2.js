let lenha = (line) => line.split(" ").map(a => +a)
let [a,b] = lenha(+lines.shift())
let soma
if (a>b || a===b){
    soma=24-(a-b)
    console.log(`O JOGO DUROU ${soma} HORA(S)`)

}else{
    soma=b-a
    console.log(`O JOGO DUROU ${soma} HORA(S)`)
}