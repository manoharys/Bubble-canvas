let canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor= "lightGrey";

let c = canvas.getContext('2d');

//Function which returns random colors...

//  function randomColors(){
//     let colors = Math.floor(math.random()*16);
//     return "00ffe"+colors;
//  }
// //Drawing the Rectangle 
// for(let i=0;i<2;i++){
//     let x = 300;
//     let y = 300;
//     c.fillRect(x,y,100,100);
//     c.fillStyle = "green"
// }

// //Drawing the arc...
// c.beginPath();
// c.moveTo(100,200);
// c.lineTo(333,100);
// c.lineTo(100,100);
// c.lineTo(100,300)
// c.strokeStyle = "red";
// c.stroke();

//Drawing the circle or Arc...

function animate(){
c.beginPath();
let x = Math.floor(Math.random()*window.innerWidth);
let y = Math.floor(Math.random()*window.innerHeight);
let radius = Math.floor(Math.random()*50);
c.arc(x,y,radius,Math.PI*2,false);
c.strokeStyle = RandomColors().toString();
c.stroke();
requestAnimationFrame(animate);
}
// setInterval(() => {
//     animate();
// }, 1000);

animate();
//Function which generates the Random colors..\
function RandomColors(){
    let rand1 = Math.floor(Math.random()*256);
    let rand2 = Math.floor(Math.random()*256);
    let rand3 = Math.floor(Math.random()*256);
    return `rgb(${rand1},${rand2},${rand3})`;
}

//console.log(RandomColors());