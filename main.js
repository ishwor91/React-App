let user= {
    name:"john",
    age:30,
  
}
//  console.log(user.name);

function makeUser(name,age){
return{
    name:name,
    age:age
};
 }
 let user= makeUser("john", 30)
 console.log(user.name);


 console.log("name" in user);
 console.log("blabl" in user);
 console.log("key" in user)
 let obj ={
    key:undefined
 }
 console.log(obj.key)
 console.log("key" in obj);


//  for in loop in object 
let user = {
    name:"john",
    age:"30",
    isAdmin:true
};
for (const key in user) {
   console.log(key); //return key
   console.log(user[key]) //return key value
}

// for of loop in object 

let user = {
    name:"john",
    age:"30",
    isAdmin:true
};
for (const prop of user) {
    console.log(prop);
    
}

// for in loop in integer value of object 
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  for (let prop in codes){
    console.log(prop) //it will return the value in accending order because it is the integer value
  }


//   in anothe example of phone codes
// fix the issue in phone codes 
let phoneCode={
    "+49":"Germany",
    "+41":"Switzerland",
    "+44":"Great Britian"
    ,"+1":"USA"
};
delete user.name
for (let prop in phoneCode){
    console.log(+prop); //now it will reaturn loop as noraml order
}
// ------------------------------------?

// empty object 
let eObj={};




let salaries ={
    john:300,
    lete:400,
    smith:290
}
let sum=0;
for ( let key in salaries){
    sum+=salaries[key]
    console.log(key); //retrun key
    console.log(salaries[key]) //return key value 


}

console.log(sum); //return the sum of the key value of salaries
// ------------------------------------?
// Object references and copying


let message = "hello";
let phrase = message;
console.log(message);
console.log(phrase); //it will return old value
message = "hi"; //new value 
phrase= message;
console.log(phrase); //it will return the new value 


// 11111111111111111
let user= {
    name:"john",

}
let copyName = user;
console.log(user.name); //return john 
console.log(copyName.name); //return same value


/*comparison by reference */

// two object are equal only if they are same object 

let user1= {}
let copyName1 = user1;
console.log(user1===copyName1); //return return true both have same object 
another example 
let obj={};
let obj1={};
console.log(obj===obj1)  //return falsy value because they don't have same object but vaule isa same 
const user={
    name:"john"

}
// modifying values 
user.name="smith";
console.log(user.name) //return smith const value also  modified


// 22222222222222222222222222222
// Cloning and merging  object
let user = {
    name:"john",
    age:40
}
let clone ={};
for (let key in user ){
    clone[key]=user[key];
}
console.log(clone.name); //now retrun value is john

// // again 
clone.name="smith"
console.log(clone.name) //now value can be modified and return the new value smith
// we can use method object.assign 


// 3333333333333333

// syntax= object.assign(dest,obj1,obj2,....objlast);

let user = {
name:"john",
};
let obj1={
    canView:true //store boolean value
};
let obj2={
    canEdit :true
};

Object.assign(user,obj1,obj2);
console.log(user.canEdit); //return true value
// we can use object.assign



// 4444444444444444
// nested clone in object 
let user ={
    name :"smith",
    sizes:{
        height:120,
        width:170

    }
}

console.log(user.sizes.height)
let clone =Object.assign({},user); //now clone's value is equal to user's value
console.log(user.sizes===clone.sizes);
console.log(clone.sizes);

// now change the value of user sizes width
user.sizes.width=320; //change a property from one place
console.log(clone.sizes.width); 

structured cloning
let user ={
    name:"john",
    age:30,
    sizes:{
        height:320,
        width:100
    }
}
let clone = structuredClone(user);
console.log(user.sizes===clone.sizes) //return  false value different object 
