//Array(map,filter,reduce)

const arr=[10,20,30,"Apple",false,"banana"];//In array you can insert any thing no any restriction
console.log(arr);

arr.push("orange");//push in last
console.log(arr);

arr.unshift("start");//push in start
console.log(arr);

//you can explore all the methods of array which array perform just type arrname. and check 

console.log(arr.length);
// console.log(arr[0]);
// for(let i=0;i<arr.length;i++){
//     const element=arr[i];
//     console.log(element);
// }


//--------MAP--------
//it gives a new array agar koi array pahle se present ho to


const newArray=arr. map(function(element){//in place of element you can write anything it is just a iterator 
    console.log(element);
});
console.log(newArray);//it gives undefined(because i am not returning anything)

const arr1=[10,20,30,40,50];
const newArr=arr1.map(function(it){
    return it*2;
})
console.log(newArr);

        //array of object
const product=[
    {
        price:1200,
        name:"Iphone"
    },
    {
        price:1400,
        name:"hp"
    },
    {
        price:100,
        name:"Lenova"
    },
];
product.map((element)=>{
    console.log(element.name,element.price);
});

//-----FILTER--------
const arr2=[10,20,30,40,50];//10>=30

const res=arr2.filter((element)=>{
    return element>=30;//[30,40,50]
})
console.log(res);


//reduce
function sumOfElement(arr2){
    let sum=0;
    for(let i=0;i<arr1.length;i++)
    {
        sum=sum+arr2[i];
    }
    return sum;
}
console.log(sumOfElement(arr2));

// here accumulator behave like sum and its initial value is 0
const ans=arr2.reduce((accumulator,element)=>{
    return accumulator + element;
},0);//0 + 10, 10+20, 30+30, 60+40, 100+50
console.log(ans);

