//we can destructuring in object and array


const arr=[1,2,3,4,5];
console.log(arr[1]);
console.log(arr[2]);
//destructuring in array
const [a,b,c,d,e]=arr;
console.log(a);
console.log(b);

//object destructuring


const person={//object is simple only curly brasis with key value pair
    name:"patel",
    age:21,
    gender:"male",
    address:"punjab"
};
//access value

//dot notation
console.log(person.gender);

//bracket notation
console.log(person["age"]);

//destructuring in object
const {name,age,gender,address}=person;
console.log(gender);
console.log(name);
console.log(age);
console.log(address);

