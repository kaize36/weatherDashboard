// let text=document.getElementById("h1");
// let btn=document.getElementById("btn")
// btn.addEventListener("click",function(){
//     text.innerHTML="no my name is shan"
//     text.style.backgroundColor="yellow";
//     text.style.padding="30px";
//     text.style.color="red";
    
// })

// let name ="ghaiz"
// let age =19
// let course ="Mern Stack"
// let place ="kerala"

// let answer=`my name is ${name} and iam ${age} years old im currently learning ${course} my place is ${place} `
// console.log(answer)

// function checkpos(num){
//     for(let i=0;i<num.length; i++)
//         if(num[i] > 0){
//             console.log("positive")
//         }else if (num < 0){
//             console.log("negative")
//         }else{
//             console.log("zero")
//         }
    
// }
// checkpos([10,20])
 
 
//  function checkoddeven(arr){
//     arr.forEach(function(arr){
//         if(arr % 2 ==0){
//             console.log(arr + ":","even")
//         }else{
//             console.log(arr + ":","odd")
//         }
//     })
//  }
//  checkoddeven([10,20,3])


//  let a =Number(prompt("enter number"))
//  let b =Number(prompt("enter next number"))
//  let operator=prompt("select operator : +,-,%,/,*")
//  switch(operator){
//     case "+":
//         document.write(a+b)
//         break;
//     case"-":
//     document.write(a-b)
//     break;

//     case "*":
//         document.write(a*b)
//         break;
//     case"%":
//     document.write(a%b)
//     break;    
    
//     case "/":
//     document.write(a/b)
//     break;
//     default:
//         document.write("invalid operator")

//  }


//  for(let i=1;i<=50;i++){
//     if( i % 3 ===0 && i % 5 ===0 ){
//         console.log(console.log(i))
//     }
//  }

// function factorial(num){
//     let result =1;

//     for(let i =1; i<=num; i++){
//         result*=i
//     }
//     return result
// }
// console.log(factorial(5))

// 
//  function largest(num){
//     let largest =num[0];
//     for(let x of num){
//         if( x > largest){
//             largest = x
//         }
//     }return largest
//  }
//  console.log(largest([10,50,20]))



// function reverse(str){
//     let reversed="";
//     for(let i =str.length-1; i >=0; i--){
//         reversed+=str[i]
//     }
//     return reversed;
// }console.log(reverse("ghaiz"))



// function fahhh(str){
//     let palindrom="";
//     for(let i = str.length-1;i>=0; i--){
//         palindrom +=str[i]
//     }if(str===palindrom){
//         console.log("palindromi")
//     }else{
//         console.log("not palindromi")
//     }
//     return palindrom
// }
// console.log(fahhh("level"))

// function countvowel(str){
//     let count =0;

//     for(let i=0; i<str.length; i++){
//         if (
//             str[i]==="a"||
//             str[i]==="e"||
//             str[i]==="i"||
//             str[i]==="o"||
//             str[i]==="u"

//         ){
//             count ++;
//         }
//     } return count;
// }
// console.log(countvowel("abcdefghijklmmnopqrstuvw"))

// function vowelsprint(str){
//     let vowel="";
//     let nonvowel="";
//     for (let char of str){
//         if("aeiou".includes(char.toLowerCase())){
//             vowel+=char
//         }else{
//             nonvowel+=char
//         }
//     }
//     return { vowel, nonvowel }
// }
// const result=vowelsprint("abcdefghijklmnopqrstuvwxyz");
// console.log("vowels:",result.vowel);
// console.log("non vowels:",result.nonvowel)

// function captialstr(str){
//     let words =str.split(" ");
//     for(let i=0; i<words.length;i++){
//         words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//     }
//     return words.join(" ");
// }
// console.log(captialstr("ghaiz"))

// let str = "my name is walter white";
// let result=str.includes("walter white")
// console.log(result)


