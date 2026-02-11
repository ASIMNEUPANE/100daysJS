

const hasPermission =(user)=>{
// check permission

// return user.role === 'admin' ? true : false;
return user.role === 'admin'
}

// Negative boolean naming

//3. Naming prefixes

const isActive=true

// 4. Avoid redundant comparison

const isLoggedIn = true;
if(isLoggedIn){

}

/** 
 * 5. Logical->boolean
 */

const getDiscount =(price,discount=10)=>{
discount = discount ?? 0.1 // Nullish coalescing (??) undefined ra null lai matra falsy socha ra 0 lai sochdena

return price - price * discount
}
