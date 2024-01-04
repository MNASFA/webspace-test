gsap.registerPlugin(ScrollTrigger);


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();




timeline
  
 
  .to("#contenuabout", 3, { top: "25%" })



  gsap.to("#linkig", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.to(".carditem", {
    y: -50, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

 

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutus", // 'scrollTrigger' should be within an object
        start: "top 20%", // Define the start position
        end: "bottom 80%", // Define the end position
        toggleActions: "play none none reverse",
        // Specify toggle actions
        // Show markers for visualization (optional)
    }
})
tl.to("#abt", {
    opacity: 1,

    skewX: 0, // Skew the text
    letterSpacing: "0px",
    x: 0,

})

let tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: "#cards", // 'scrollTrigger' should be within an object
      start: "top 50%", // Define the start position
      end: "bottom 80%", // Define the end position
      toggleActions: "play none none reverse",
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})
tl3.to(".carditem", {
  opacity: 1,
duration:0.5,
  stagger:{
    amount:1
  }

})

let tl2=gsap.timeline({
  scrollTrigger: {
      trigger: "#about", // 'scrollTrigger' should be within an object
      start: "top 100%", // Define the start position
      end: "bottom 80%", // Define the end position
      toggleActions: "play none none reverse",
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})

tl2.fromTo("#leftimg",{
  opacity:0,
  y:250

},{
  opacity:1,
  y:0,
  duration:3,
  ease:'power2.inOut'
  
}).fromTo("#aboutpara",{opacity:0},{
  opacity:1,
  ease:'power2.inOut',
  duration:3

},"-=2")


let tl4=gsap.timeline({
  scrollTrigger: {
      trigger: "#cardscompo", // 'scrollTrigger' should be within an object
      start: "top 90%", // Define the start position
      end: "bottom 30%", // Define the end position
      toggleActions: "play none none reverse",
     
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})

tl4.fromTo(".card",{
  opacity:0,
  y:250

},{
  opacity:1,
  y:0,
  duration:1,
  stagger:{
    amount:2
  }

 
  
})


let tl8=gsap.timeline({
  scrollTrigger: {
      trigger: "#services", // 'scrollTrigger' should be within an object
      start: "top 90%", // Define the start position
      end: "bottom 60%", // Define the end position
      toggleActions: "play none none reverse",
     
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})
tl8.fromTo(".card",{
  opacity:0,
  y:250

},{
  opacity:1,
  y:0,
  duration:2,
  stagger:{
    amount:2
  }
 

 
  
})


let tl9=gsap.timeline({
  scrollTrigger: {
      trigger: "#works", // 'scrollTrigger' should be within an object
      start: "top 80%", // Define the start position
      end: "bottom 60%", // Define the end position
      toggleActions: "play none none reverse",
     
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})
tl9.fromTo(".contain_cards",{
  opacity:0,
  y:250

},{
  opacity:1,
  y:0,
  duration:2,
  stagger:{
    amount:2
  } 

 
  
})

let tl10=gsap.timeline({
  scrollTrigger: {
      trigger: "#contact", // 'scrollTrigger' should be within an object
      start: "top 80%", // Define the start position
      end: "bottom 60%", // Define the end position
      toggleActions: "play none none reverse",
     
      // Specify toggle actions
      // Show markers for visualization (optional)
  }
})
tl10.fromTo("#contact",{
  opacity:0,
  y:250

},{
  opacity:1,
  y:0,
  duration:2,
  stagger:{
    amount:2
  }
 

 
  
})


/*
gsap.from('#imagee',{
    opacity:0,
   
    x:100
},{
    opacity:1,
    y:0,
    x:0
})



gsap.from(".tst", {
    x: 700,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section2", // 'scrollTrigger' should be within an object
        start: "top bottom", // Define the start position
        end: "bottom top", // Define the end position
        toggleActions: "play none none reverse",
        markers:true // Specify toggle actions
        // Show markers for visualization (optional)
    }
});


let btnclk=document.getElementById('btnclk')
let opened=false
btnclk.addEventListener("click",()=>{
   if(opened==false){
    gsap.from("#imm",{
        scale:1,
        x:0
    },{
        scale:1.7,
        x:300, 
        duration:1,
        delay:0.5,
    })
    opened=true
   }else{
    gsap.from("#imm",{
        scale:1.7,
        x:300,
    },{
        scale:1,
        x:0,
        duration:1,
        delay:0.5
    })
    opened=false
   }
})
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 50, y: 20 },{ x: 150, y: 10 },{ x: 500, y: 220 }]
};



gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to("#kora", {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 100, y: -20}], // you probably want more points here...or just use an SVG <path>!
    curviness: 2,
    autoRotate: true
  }
});

// code from github

/*
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();         

timeline
.to("#rightpart",6,{y:-200},).fromTo("#img1",{opacity:1},{opacity:0,duration:2},"-=6")
.to("#rightpart",6,{y:-460},).fromTo("#img2",{opacity:0},{opacity:1,duration:2},"-=6").to("#img2",3,{opacity:0},"-=3")
.to("#rightpart",6,{y:-840}).fromTo("#img3",{opacity:0},{opacity:1,duration:2},"-=6").to("#img3",3,{opacity:0},"-=3")
.to("#rightpart",6,{y:-1050}).fromTo("#img4",{opacity:0},{opacity:1,duration:2},"-=6").to("#img4",3,{opacity:0},"-=3")
.to("#rightpart",6,{y:-1500}).fromTo("#img5",{opacity:0},{opacity:1,duration:4},"-=6")
 /* .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: ".container",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".container")
  .addTo(controller);*/