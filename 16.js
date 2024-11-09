const findMin =(arr)=>{
    if(arr.length == 0){
        console.log('empty arrat')
    }
// for loop method
// let min= arr[0] ;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<min){
//         min =arr[i]
//     }
// }
// return min

//sort method
//  let a = arr.sort((a,b)=> a-b)
//  console.log(a)
//  return a[0]

//reduce method

// const min = arr.reduce((acc, curr) => {
//     return curr < acc ? curr : acc;
//   }, arr[0]);
//   return min;

  //using math.min

  return Math.min(...arr)

}

console.log(findMin([-2,-8,1,0,-100]))