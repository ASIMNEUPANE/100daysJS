const isPalindrome =(str)=>{
// const a = str.split('').reverse().join('')
// str === a ? console.log('yes') : console.log('no')
// console.log(a)
// str = str.LowerCase();
if(str.typeOf)
str.toLowerCase();
console.log(str.length)
let a=[]
for(let i = str.length; i>-1;i--){
    a.push(str[i])
}
a = a.join('')



str === a ? console.log('yes') : console.log('no')
console.log(a)
}

console.log(isPalindrome("aasaa"))