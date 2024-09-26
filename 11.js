const sumOfDigits=(num)=>{
if(typeof num !== 'number' ||  num <0){
    console.log('pls input valid integer')
}
// let b = num.toString()
// console.log(Array.from(b))
let a = Array.from(String(num),Number)
return a.reduce((acc,curr)=>acc+=curr,0)
// console.log(a)

// return num.reduce((a,c)=> a+c,0)

}

console.log(sumOfDigits(11))