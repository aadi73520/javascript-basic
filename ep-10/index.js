const age=19;
// if(age>=18){
//     console.log("you are eligible to drive car");
// }else{
//     console.log("you are not eligible to drive car");
// }

//ternary operator
age >= 18 ?console.log("you are eligible to drive car"):console.log("you are not eligible to drive car");

// const obj = {
//     name:"Aaditya",
//     address:{
//         city:"Surat",
//         state:"Gujrat"
//     }
// }
// console.log(obj.name);
const obj = {
    name:"Aaditya",
    address:{
        
    }
}
//console.log(obj.address.city);//it gives undefined(address dont have city)
//console.log(obj.address.city.village);//it gives undefined error(undefined ka dot)

const x=undefined;
//optional chaining
console.log(x?.name?.suifu);//error se bachayega

const str="";
//str && (it means jab string true hogi na tab execute karni hn):string mn kuch na kuch rahega tab
str && console.log("jab true hoga tabhi kvl");

const str1=true;//false
//str && (it means jab string true hogi na tab execute karni hn):string mn kuch na kuch rahega tab
str1 && console.log("jab true hoga tabhi kvl");

