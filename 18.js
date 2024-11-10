const isUpperCase =(letter)=>{
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0)<= 90){
        console.log("Uppercase")
    }else{

        console.log("lowercase")
    }
}

console.log(isUpperCase('a'))