//Javascript is a synchronus and single threaded programming language
//synchronus :- javascripts executes program line by line(it cannot be wait )
//single threaded:-javascripts do only single task at a time

//Asynchronous javascript(it solve synchronus problem)
//fetch API
//Async/await

//github
//fetch/ axios
const githubAPI="https://api.github.com/users/aadi73520";

// const fetchData = () => {
//     const responce=fetch(githubAPI);//line no 14 takes time so js debugger goes to line no 15 that i dont want so here we use js asynchronus
//     console.log("ahjaijgk");
// }

const fetchData = async () => {
    const res= await fetch(githubAPI);
    const jsonData=await res.json();
    console.log(jsonData);//jsonData is object if we want to see bio than we use jsonData.bio
}
fetchData();


//Import and export

// export const name="developers";//it is named export
//if you want to import another file 
//import { name } from "../ep-07";(in ep-05),why we use .. because . means current present in ep-05(.. means we came out in ep-05 )

//export default name;//it is default export
//import name from "../ep-07";(in ep-05)


//Error Handling

//agar mera API wrong hn ya kuch mistake hn to fetch hi nahi kar paayega to error pata hi nahi chalega
//const gitAPI="https://api.github.com/users/aadi73520";
const fetchdata = async () => {
    try {//when all things are good try executes
        const res= await fetch(gitAPI);
        const jsonData=await res.json();
        console.log(jsonData);//jsonData is object if we want to see bio than we use jsonData.bio
    }catch (error){
        console.log("error");
    }finally{
        console.log("ye hamesa chalega...");
    }
}
fetchdata();