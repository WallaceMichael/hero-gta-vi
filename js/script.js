const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".containerPai",
        start:"top top",
        end: "+=1500",
        markers: true,
        pin: true, 
        scrub: 1.5,

    }
})

tl.to(".secao1", {
    maskSize: "20vw",
    duration: 2
    
})

tl.to(".logoBg", {
    opacity:0,
    duration: .5
}, ".5")

tl.to(".secaoBranca", {
    backgroundColor: "white",
    duration: 1

}, "-=1")

tl.from(".secao2 img", {
    opacity: 0,
    filter: "blur(20px)",
    duration:.5

}, "+=.3")