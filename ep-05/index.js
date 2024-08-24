//FUNCTION
//FUNCTION

//function declaration
function sum(num1,num2)
{
    console.log(num1+num2);
}
sum(100,200);//call 

//fucntion expression(kisi function ko as a value kisi value mn assign karte hn)


//named function expression(jis function ka name ho)
const sumOfTwoNumber=function sum(num1,num2){
    console.log(num1+num2);
};
sumOfTwoNumber(1,2);

//anonymus function (jis function ka name na ho)
// const num=function(num1,num2){
//     console.log(num1+num2);
// };



//Callbacks function(a type of function which depends on another function)


const doSomething=function(callback){
    console.log("samose ban rahe hai ...");
    setTimeout(function(){
        callback();//after 3 sec this funtion will be called
    },3000);//3000ms means 3 sec
}
const callback=function(){
    console.log("samose ready hain");
}
doSomething(callback);


//Higher order function

//Normal process it takes extra time and space
const radius=[1,2,3,4];
const area =function(radiusArray){
    const result= [];
    for(let i=0;i<radiusArray.length;i++)
    {
        const a=Math.PI*radiusArray[i]*radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans=area(radius);
console.log(ans);

const circumference=function(radiusArray){
    const result=[];
    for(let i=0;i<radiusArray.length;i++)
    {
        const a=2*Math.PI*radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans2=circumference(radius);
console.log(ans2);


//higher order code

//higher order function means(ek function kisi another function mn as an argument pass hoga)
const formulaOfArea=function(r){
    return Math.PI*r*r;
}

const formulaOfCircumference=function(r){
    return 2*Math.PI*r;
}


const calculate = function(radiusArray,formula){
    const result=[];
    for(let i=0;i<radiusArray.length;i++){
        const a=formula(radiusArray[i]);
        result.push(a);
    }
    return result;
}
const ans3=calculate(radius,formulaOfArea);
console.log(ans3);

const ans4=calculate(radius,formulaOfCircumference);
console.log(ans4);



//Arrow function

//if a function have multiple line than you write multiple function like this 
// const multiply = (num1,num2) => {
//     return num1*num2;
// }

//but in case of single line of code
const multiply= (num1,num2) => num1*num2;//return is opetional here
console.log(multiply(2,3));