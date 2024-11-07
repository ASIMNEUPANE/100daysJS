  
  const sumOfSquares =(arr)=>{
// let total=0;
//     for(let num of arr){
//        total = total+ num**2;
//     }
//     return total


return arr.reduce((acc,currElement)=> acc+currElement**2,0)

  }

  console.log(sumOfSquares([1,2,3]))

