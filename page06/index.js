

gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create("custom", ".87, 0, .13, 1");
const counter = document.getElementById("counter");

gsap.set(".video-container", {
    scale: 0,
    rotation: -20
});

gsap.to(".hero", {
    clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
    duration: 1.5,
    ease: customEase,
    delay: 1
})

gsap.to(".hero", {
    clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
    duration: 2,
    ease: customEase,
    delay: 3,

    onStart: () => {
       gsap.to(".progres-bar", {
        width: "100vw",
        duration: 2,
        ease: customEase
       });

       gsap.to(counter, {
        innerHTML: 100,
        duration: 2,
        ease: customEase,
        snap: { innerHTML: 1 }
       })
    }
});

gsap