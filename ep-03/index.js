//spread operators:
//object/array, too much used in function
//spread operators denoted by ...
//ieska kaam hota hn duplicate mn convert karna

//make a duplicate array
const arr=[1,2,3];
const duplicateArr=[...arr];//returning a new arr
console.log(duplicateArr);
const duplicatearray=[...arr,4,5,6,"Apple","Banana"];
console.log(duplicatearray);

//Q.Merge two array
const num1=[1,2,3,4,5];
const num2=[6,7,8,9,10];
//output: result=[1,2,3,4,5,6,7,8,9,10]
const result=[...num1,...num2];
console.log(result);


//object

//Q.merge to object
const obj1={
    a:1,
    b:2
};
const obj2={
    c:"Hello",
    d:"developers"
};

//output:
// res={
//     a:1,
//     b:2,
//     c:"Hello",
//     d:"developers"
// }
const res={...obj1,...obj2};
console.log(res);


//function
function sum(a,b,c,d,e)
{
    return a+b+c+d+e;
}
console.log(sum(1,2,3,4,5));

function sum1(...numbers)
{
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}
console.log(sum1(1,2,3,4,5,6));
