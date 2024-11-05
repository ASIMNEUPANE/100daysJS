const removeDuplocates=(arr)=>{

    // 1st approach
//    let newArr = [...new Set(arr)]
//    return newArr

// 2nd approach
let uniqueArr =[]
for(let i = 0; i<arr.length; i++){
    let isDuplicate= false;

    for(let j = 0; j<uniqueArr.length;j++){
       if(arr[i] == uniqueArr[j]){
         isDuplicate = true
         break;  
        }
    }
if(!isDuplicate) uniqueArr.push(arr[i])

}
return uniqueArr;

}

console.log(removeDuplocates(['1',2,'1',2,5,6,5]))


