gsap.from("#second #im1",{
    opacity:0,
    duration:1,
    y:90,
    scrollTrigger:{
        trigger:"#second #im1",
        scroller:"body",
        start:"top 80%"
        
    }
})
gsap.from("#second #im2",{
    opacity:0,
    duration:1,
    y:90,
    scrollTrigger:{
        trigger:"#second #im2",
        scroller:"body",
        start:"top 90%"
         
    }
})
gsap.from("#second #im3",{
    opacity:0,
    duration:1,
    y:90,
    scrollTrigger:{
        trigger:"#second #im3",
        scroller:"body",
        start:"top 70%"
    }
})
var cursor = document.querySelector("#cursor")
var third = document.querySelector("#third")

third.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.right = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursor.style.bottom = dets.y + "px"
    cursor.style.opacity = 1
})
document.querySelector("#second").addEventListener("mousemove",function(dets){
    cursor.style.opacity = 0
})
document.querySelector("#four").addEventListener("mousemove",function(dets){
    cursor.style.opacity = 0
})
document.querySelector("#top").addEventListener("mousemove",function(dets){
    cursor.style.opacity = 0
})
document.querySelector("#five").addEventListener("mousemove",function(dets){
    cursor.style.opacity = 0
})