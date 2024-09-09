
var crsr=document.querySelector(".cursor");
// var document=document.querySelector("body");
var blurr=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
 crsr.style.left=dets.x+"px";
 crsr.style.top=dets.y+"px";
 blurr.style.left=dets.x-250+"px";
 blurr.style.top=dets.y-250+"px";

})

var h2=document.querySelectorAll("nav h2");
h2.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #fff";
        crsr.style.backgroundColor="#95c11e";
});
});





gsap.from(".about-us img,#aboutus-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})


gsap.from(".card",{
    scale:0.8,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 55%",
        end:"top 45",
        scrub:4
    }
})




var main=document.querySelector("main");
var page2=document.querySelector(".page2");
    gsap.from(".page2",{        
         backgroundColor:"rgba(0,0,0,0.4)",
           duration:3,
            delay:1,
            
            
    });

 
page2.addEventListener("mouseenter",function(){
    gsap.to("nav",{
        backgroundColor:"#000",
        height:110,
        duration:0.1,
        stagger:0.2,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",}
    })

})

 var page1=document.querySelector(".page1");
page1.addEventListener("mouseenter",function(){
    gsap.to("nav",{
        backgroundColor:"transparent",
        height:100,
        duration:0.1,
        stagger:0.2,
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",}
    })

})

gsap.to("#colon1", {
    duration: 2,
    
    scale: 1, 
    y: -31,   
    x: -71,  
    yoyo:true,
    repeat:-1,
    scrollTrigger: {
      trigger: "#colon1", 
      scroller: "body",           
      toggleActions: "restart none none none", 
      ease: "power2.inOut", 
      
    }
  });
  
  gsap.to("#colon2", {
    duration: 2,
    
    scale: 1, 
    y: -31,   
    x: -71,  
    yoyo:true,
    repeat:-1,
    scrollTrigger: {
      trigger: "#colon2", 
      scroller: "body",           
      toggleActions: "restart none none none", 
      ease: "power2.outIn", 
      
    }
  });

  
  gsap.from(".page4 h1",{
    y:33,
    duration:7,
    delay:1,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:".page4",
        start:"bottom -5%",
        end:"top 50%",
        repeat:-1,
        scrub:3,
        marker:true
    }

  })