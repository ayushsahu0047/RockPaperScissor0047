// console.log("Hii bro");
// let a = BigInt("11");
// console.log(a);
// const student ={
//     fullName : "Boss",
//     age : 89,
//     marks :88,
//     ispass:true

// };
// let g =20;
// let e = 4;
// console.log(g**e);
// alert("hello");
// let b = prompt("Enter the number");
//   a%5==0?console.log("Number is multiple of",b):console.log("Number is not multiple",b);
// let str = "Ayushsahu";
// let size = 0;
// for (let i of str)
// {
//     console.log("character==",i);
//     size++;

// }
// console.log(size);

// let student1 ={
//     stn :"Ayush" ,
//     age :23,
//     mark:90,
//     id:123,
// };

// for(let i in student1){

//     console.log("details",i,"value=",student1[i]);
// }
// //Template Litrals
// let st = "Ayushsahu"
// let str1 = "boss"
// console.log(`Name ${student.st} \n age ${student.age} `);
// console.log(str.toUpperCase());
// console.log(str.slice(2,4));
// console.log(str+str1);
// console.log(str.replace("A","s"))
// console.log(str.charAt(3));
// console.log("@"+str+"123");
// let heros = ["superman","batman","catman","spiderman",1]
// console.log(heros);
// for(let i of heros;
// let marks = [122,12,2,32,23,232,21];
// lesum=0 ;
// marks.push(77);
// console.log(marks);
// marks.pop();
// console.log(marks);
// console.log(marks.toString);
// console.log(marks);

// console.log(marks.slice(1,5));
// function myfunction(msg,n){
//     console.log(msg,n);
// }
// myfunction("this message of function",122);
// const  arrow=(a,b)=>{
//     console.log(a*b);
    
//     }
// console.log(arrow(3,3));
// const msg = ()=>{
//     return "Message arrow function"
// }    
// // console.log(msg());

// let sum=0;
// function vowel(str){
//     for(const v of str)
//     {
//         if(v=='a' || v=='e'||v=='i'||v=='o'||v=='u')
//         {
//             ++sum;
//         }
        
//     } 

// let sum =0;
// const array = (str)=>{
//     for(const v of str)
//     {
//         if(v=='a' || v=='e'||v=='i'||v=='o'||v=='u')
//         {
//             ++sum;
//         }
        
//     } 
//     return sum;
// }

// array("aaaus");
// console.log(sum);

// let nums = [190,2,3,4,5,6];
// nums.forEach((num)=>{console.log(num*2);});
// let arr = [112,102,112,12,123]

// const arr1 = arr.map((num) =>{

// return(num*2);
// });

// console.log(arr1);
// let arr = [2,4,7,8,10]
// const arr1 = arr.filter((val)=>{
// return val%2==0;
// })
// console.log(arr1);


// let arr = [22,4,7,8,100]
// const arr1 = arr.reduce((start,end)=>{
// return (start>end?start:end);
// })
// console.log(arr1);

// let marks = [60,94,94,86,90]
// const arr1 = marks.filter((val)=>{

// return val>90;

// })
// console.log(arr1);


// let arr = [262,43,33,55,33,53,53,4,7,8,100]
// const arr1 = arr.reduce((start,end)=>{
// return (start*end);
// })
// console.log(arr1);

// let arr = [262,43,33,55,33,53,53,4,7,8,100]
// const arr1 = arr.reduce((start,end)=>{
// return (start+end);
// })
// console.log(arr1);

//Game Rock Paper scissor-------------------------------------

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});