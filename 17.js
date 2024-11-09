const camelCase = (str)=>{
let a =  str.toLowerCase().split(" ")

let finalArr = [a[0]]
for(let i =1; i<a.length;i++){
 finalArr.push(a[i].charAt(0).toUpperCase()+a[i].slice(1))
}

return finalArr.join("");
}

const toSnakeCase=(str)=>{
let a = str.toLowerCase().split(" ").join("_")
return a
}

console.log(camelCase("Hello how are you"))
console.log(toSnakeCase("Hello how are you"))