const finMax=(arr)=>{

    //1st way
//  arr.sort((a,b)=> b-a)
//  return arr[0]

//2nd way
return(arr) => arr.reduce((max, current) => (current > max ? current : max), arr[0]);
// if(arr.length === 0) return undefined;

//3rd way 

// let high=[arr[0]];
// for(let i = 1; i<arr.length; i++){
// if(high[0]< arr[i]){
//     high[0] = arr[i];
// }
// }
// return high[0];
}
console.log(finMax([1,2,4,5,5,6,7,7,8]))