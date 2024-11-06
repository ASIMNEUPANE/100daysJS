
const countVowels=(str)=>{
//     const lower = str.toLowerCase()
//     const vowels =["a","e","i","o","u"]

//   const a =  lower.split("")
//   let count=0;
//   for(let i = 0; i<a.length;i++){
// for(let j = 0; j<vowels.length; j++){
//     if(a[i]===vowels[j]){
//         count++
//     }
// }
//   }
//   return count

// 2nd way this is better approach
//The for...of loop iterates over each character in the lowercase string.
//We use a Set to store the vowels. Checking membership in a set is faster than in an array
const vowels = new Set(["a","e","i","o","u"])
let count =0;
for(const char of str.toLowerCase()){
    if(vowels.has(char)){
        count++
    }
}
return count;

}
console.log(countVowels("The Asim neupanee"))