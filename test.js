// console.log("Hello, World!");






// function sayhello(){
//     console.log("hello javascript"); 
// }
// sayhello();

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,10));
// function defaultparameter(a="muskan"){
//     console.log(a);
// }defaultparameter();

// function rest(...numbers){
//     console.log(numbers);
// }
// rest(1,2,3,4,);
// function greet(name="guest"){
//     console.log(`hello ${name}`);
// }
// greet("muskan");
// greet();
// function fruits(...items){
//   console.log(items);
// }fruits("apple","banana","orange",grapes);
// fruits.push("grapes");
// fruits.pop(grapes);
// console.log(fruits);


// console.log("hello")

// let num = document.querySelector("h1");

// console.log(num);

// num.style.color = "red";

//   let btn1p = document.querySelector("#plus");
//   let btn2m = document.querySelector("#minus");
//   let btn3r = document.querySelector("#reset");

// // btn1p.style.color = "red";

// let count=0;

// num.innerHTML=count;

// btn1p.addEventListener('click',function(){

//    count++;
//    num.innerHTML=count;
// })

// let num=Math.floor(Math.random()*50);
// console.log(num)

// let main=document.querySelector("main");
// let btn=document.querySelector("button");

// btn.addEventListener('click', function (){

//     let div=document.createElement("div");

//     let r1=Math.floor(Math.random()*256);
//     let g1=Math.floor(Math.random()*256);
//     let b1=Math.floor(Math.random()*256);
//     let t1=Math.floor(Math.random()*100);
//     let l1=Math.floor(Math.random()*100);
//     let d1=Math.floor(Math.random()*361);
// div.style.position="absolute";
// div.style.zIndex="2";

// div.textContent="Paisa";
// div.style.textAlign="center"
//     div.style.width="50px";
//     div.style.height="50px";
//     div.style.backgroundColor=`rgb(${r1},${g1},${b1})`;
//     div.style.top=`${t1}`+"%";
//     div.style.left=`${l1}`+"%";
//     div.style.rotate=`${d1}`+"deg";

//     main.appendChild(div);


// })


// setTimeout( () => {
//     console.log("Delay Hai Kya");

// },10000)

// var int =setInterval( () => {
//     console.log("Choti BChi HAi kYa")
// },2000)

// // clearInterval(int)
// setTimeout( () => {
//     clearInterval(int)

// },20000)

let inner=document.querySelector(".inner");
let outer=document.querySelector(".outer");
let btn = document.querySelector(".bottom button");
let h1 = document.querySelector(".bottom h1");
let h2 = document.querySelector(".card h2");
let load = 0;


btn.addEventListener('click', function(){

    btn.style.pointerEvents="none";

    var num = 50 + Math.floor(Math.random()*50);


    var int = setInterval( () => {
        load++
        h1.innerHTML=load+ "%";
        inner.style.width= load+ "%";


},num);


setTimeout( () => {
    clearInterval(int);
 btn.innerHTML="Downloaded";
 btn.style.opacity="0.5";
 inner.style.width= "100%";
 inner.style.backgroundColor="rgb(7, 136, 227)";   

 h2.innerHTML="File Downloaded Successfully in "+num/10+" seconds";


},num*100);
})



























