// console.log("Hello, World!");
// console.log("i know the shit")
// console.log("you got this shit") //synchronus


// console.log("hello earth")
// setTimeout(()=>{
//     console.log("i know this shit") / asynchronus
// },1000);
// console.log("you got this shit")

// let x =10;
// function test(){
//     let x=20
//     console.log(x)
// }
// test()
// console.log(x). //variable shadowing

// function first(){
//     console.log("first")
//     second();
//     console.log("first end")
// }
// function second(){
//     console.log("second");
// }
// first() //call stack


// function repeat(){
//     repeat();
// }
// repeat();                 //stack overflow
// function count(num){
//     console.log(num)
//     count(num+1)
// }
// count(1)

// const stack=[];
// if(stack.length > 0){
//     stack.pop()
// }else{                               //stack underflow
//     console.log("stack is empty")
// }


//             json

        
// const user ={
//     name : "kaize",
//     age :19,
//     city: "kerala"
// };
// const {name, ...details } =user;

// const update ={
//     ...details,
//     age :21
// };
// const json =JSON.stringify(update);
// const answer =JSON.parse(json);
// console.log(name);


// console.log("A")
// const q =new Promise((resolve,reject)=>{
//     console.log("b")
//     resolve("c")
// });
// q.then((value)=>{
//     console.log(value); //call stack and promise
// });
// console.log("d")

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("data loaded")                  //promise fullfilled
//     }, 2000)
// });
// promise.then(result =>console.log(result))

// const p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("no newtwork connection")             //promise with reject
//     },2000)
// });
// p.catch(error=> console.log(error));

// const p =new Promise(resolve => {
//     resolve(10);
// });
// p.then(value => console.log(value));  //variable binding

// const p =Promise.resolve(5);
// p.then(value => {
//     value =20;
//     console.log(value)
// });

//     const p1 =Promise.resolve("User loaded")
//     const p2 =Promise.reject("newtwork error")
//     const p3 =Promise.resolve("product is loaded")
//     Promise.allSettled([p1,p2,p3])
//     .then(answer=> console.log(answer)); //all settled


//     const p1 = Promise.resolve("its okay");
// const p2 = Promise.reject("is failed");
// const p3 = Promise.resolve("its also okay");

// Promise.all([p1, p2, p3])
//   .then(answer => console.log(answer))      //all
//   .catch(error => console.log(error));



// p.then(value => console.log(value)); //callback parameter
 
// function feed(id,callback){
//     let error;
//     setTimeout(()=>{
//         if(error)
//         {
//             return callback(error)

//         }


//         console.log("fetching data...")

//         setTimeout(() => {
//             console.log("fetching friend list...") 

//             setTimeout(() => {
//                 console.log("fetching user post")
                
//             }, 2000);
            
//         }, 2000);
//     },2000)
// }

// function errorhandler(error)
// { 
//     console.log("error 404")
// }

// feed("101",errorhandler)

// console.log("A")
// Promise.resolve().then(()=>{
//     console.log("B")

//     Promise.resolve().then(()=>console.log("C")) //call stack promise
// });
// Promise.resolve().then(()=>console.log("D"));
// console.log("E")



//WITH SET TIMEOUT
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   Promise.resolve().then(() => console.log("D"));
// });

// Promise.resolve().then(() => console.log("E"));

// console.log("F");


// try{
//     console.log("A");
//     JSON.parse("hello");
//     console.log("B")
// } catch (error){                 //exception handling
//     console.log("error detected")
// }finally{
//     console.log("done")
// }



// try{
//     console.log("1")
//     JSON.parse("{bad json}");
//     console.log("2");
// } catch (error){
//     console.log("3")
// }finally{
//     console.log("4")
// }
// console.log("5")

// try{
//     let age =15;
//     if(age < 18){
//         throw new Error(("Age is too low"));
//     }
//     console.log("regisstration successfull")
// } catch(error){
//     console.log(error.message)
// }
// console.log("program countinu")


//array obj fetch
// fetch("https://randomuser.me/api/")
//   .then(response => response.json())
//   .then(data =>{
//     if(!data.result || data.result.length===0){
//       throw new Error(data.Error || "no users returned")
//     }

//     console.log(data.result[0].name.first);
//     console.log(data.result[0].location.city)
//   })
//   .catch(error => console.log(error.message));

//obj fetch
// fetch("https://randomuser.me/api/")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.results);
//   })
//   .catch(error => console.log(error));

//asyn and await and fetch 
// async function getuser(){
//     try{
//         const response =await
//         fetch("https://randomuser.me/api/");
//         const data = await response.json();

//         if(!data.result || data.result.length ===0){
//         throw new Error(data.error || "No users returned")
//     }
//     console.log(data.result[0].name.first);
//     console.log(data.result[0].location.city);

//     } catch (error){
//         console.log(error.message)
//     }
// }
// getuser();



//TRAFFIC LIGHT

// function redlight(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("yellow");
//         },1000)
//     })
// }
// function yellowlight(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("yellow")
//         },2000)
//     });
// }
// function greenlight(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("green")
//         },3000)
//     });
// }
// async function trafficlight(){
//     let red =await redlight();
//     console.log("red")
//     let yellow = await yellowlight()
//     console.log("yellow");
//     let green=await greenlight()
//     console.log("green")
// }
// trafficlight();


