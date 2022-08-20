

let x=1
let y=1
 
 let pegarValoress = (line) => line.split(" ").map(a => +a);

while (x!==0 || y!==0){
    let [x,y] = pegarValoress(lines.shift());

if (x>0 && y>0){
  console.log("primeiro")
}else if (x<0 && y>0){
  console.log("segundo")
}else if (x<0 && y<0){
  console.log("terceiro")
}else if (x>0 && y<0){
  console.log("quarto")
}
}