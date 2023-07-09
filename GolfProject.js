//CURSOR CHANGER


const cursor = document.querySelector("#cursor")
const bgCursor = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
cursor.style.left=dets.x+"px";
cursor.style.top=dets.y+"px";

bgCursor.style.left=dets.x - 200 +"px";
bgCursor.style.top=dets.y - 200 +"px"
})


//  BG COLOR CHANGER

// const navbar = document.querySelector('.nav')
// const navHead = document.querySelectorAll('.navButton')

// const navbarColor = window.getComputedStyle(navbar).getPropertyValue('background-color');

// const hoverColor = navbarColor === 'rgb(0, 0, 0)' ? 'green' : 'black';


// navHead.forEach((heading) =>{
// heading.addEventListener('mouseover', function() {
//     this.style.color = hoverColor;
//   });
// heading.addEventListener('mouseout', function() {
//     this.style.color = '';
//   });
// })



// // CURSOR CHANGER FUNCTION
//  function mouseEnter(){
//     cursor.style.scale=3;
//     cursor.style.border="1px #fff";
//     cursor.style.backgroundColor="transparent";
//     console.log("hello")
   
// }

//  function mouseLeave (){
//     cursor.style.scale=1;
//     cursor.style.border="0px #95c11e";
//     cursor.style.backgroundColor="#95c11e";
//  }




// // Cursorchange for navlogo and navhead

//  const navLogo = document.querySelector(".navlogo");
// const allNavHead = document.querySelectorAll(".navButton");


// allNavHead.forEach((element)=>{
//     element.addEventListener("mouseenter",  function(){
//         cursor.style.scale=10;
//         cursor.style.border="10px black";
//         cursor.style.backgroundColor="transparent";
       
//     });

//     element.addEventListener("mouseleave",  function(){
//         cursor.style.scale=1;
//         cursor.style.border="0px #95c11e";
//         cursor.style.backgroundColor="#95c11e";
       
//     });

// })






// NAV CHANGER


gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height:"100px",
    scrollTrigger: {
     trigger: ".nav",
        scroller: "body",
        start:"top -2%",
        end : "top -1%",
        scrub:1
    }})



// BLACK BACJGROUND IN CONTAINER


gsap.to(".container",{
    backgroundColor: "black",
    scrollTrigger: {
        scroller: "body",
        trigger: ".container",
        start:"top -30%",
        end : "top -80%",
        scrub:2
}})

// 3-d Card Rotate Page-3

let cc1 = document.querySelector(".cc1");
let cc2 = document.querySelector(".cc2");
let cc3 = document.querySelector(".cc3");

function rotateElement(event,element){
   const x = event.x
    const y = event.y;
    
    const middleX= window.innerWidth/2
    const middleY= window.innerHeight/2

    const offSetX = ((x-middleX)/middleX) * 20;
    const offSetY = ((y-middleY)/middleY) * 20;

    element.style.setProperty("--rotateX",  -1*offSetY + "deg");
    element.style.setProperty("--rotateY",  offSetX + "deg")
};

document.addEventListener("mousemove",(event)=>{
    rotateElement(event,cc1)
    rotateElement(event,cc2)
    rotateElement(event,cc3)

});



function translateElement(event,element){
    const x = event.x
     const y = event.y;
     
     const middleX= window.innerWidth/2
     const middleY= window.innerHeight/2
 
     const offSetX = ((x-middleX)/middleX) * 5;
     const offSetY = ((y-middleY)/middleY) * 5;

     element.style.setProperty("--translateX",  -1*offSetX  + "px");
     element.style.setProperty("--translateY",  -1*offSetY + "px");
};

const review = document.querySelectorAll(".review")
 review.forEach((review)=>{
    document.addEventListener("mousemove",(event)=>{
        translateElement(event,review)})})


let currentReviewIndex = 0;

function showNextReview() {
  review[currentReviewIndex].style.opacity = '0';
  currentReviewIndex = (currentReviewIndex + 1) % review.length;
  review[currentReviewIndex].style.opacity = '1';
}

// Call the showNextImage function to start the animation
showNextReview();

// Repeat the animation every 3 seconds
setInterval(showNextReview, 3000);

// gsap.to(".page7-head",{
//    y: "-250px",
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".page7-head",
//         markers: true,
//         start:"top -1000%",
//         end : "top -30%",
//         scrub:2
// }})