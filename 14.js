

const isPowerOfTwo=(int)=>{
    if(int <0){
        return false
    }
    for(let i =1; i<int; i++){
        if(2**i === int){
            return true
        }
    }


}

console.log(isPowerOfTwo(4))