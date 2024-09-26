const arraysAreEqual =(arr1,arr2)=>{
    //1st way
//     for(let i= 0; i<arr1.length;i++){
//         if(arr1[i]!==arr2[i]){
//             return false
//         }
//     }
// return true

return arr1.every((currVal,index)=> currVal == arr2[index])

}

console.log(arraysAreEqual(['aa',2],['aa',2]))