let input =require('fs').readFileSync('./dev/stdin/flie.txt', 'utf8')
let lines = input.split('\n')


let texto=lines.shift()

number=texto.length

if (number>=10){
    console.log("palavrao")
}else{
    console.log("palavrinha")
}
