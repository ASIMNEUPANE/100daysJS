// when dealing with like return single value use reduce

const calculateMean=(arr)=>{
//     let sum=0;
//     let avg=0;
// for(a of arr){
//     sum+=a
// }

// return Math.floor(sum/arr.length);

return arr.reduce((acc,curr) => {
    return acc+curr/arr.length;

},0)

}
console.log(calculateMean([1,2,3,4,5]))