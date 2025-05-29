
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({
        delay: .3,
        defaults: {
            ease: "hop"
        }
    });

    const counts = document.querySelectorAll(".count")

    counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
            digits, {
                y: "0%",
                duration: 1,
                stagger: 0.075
            },
            index * 1
        );

        if (index < counts.length) {
            tl.to(
                digits, {
                    y: "-200%",
                    duration: 1,
                    stagger: .075
                },
                index * 1 + 1
            )
        }
    });

    tl.to(".spinner", {
        opacity: 0,
        duration: .3,
    });

    tl.to(".word h1", {
        y: "0%",
        duration: 1
    }, "<");

    tl.to(".divider", {
        scaleY: "100%",
        duration: 1, 
        onComplete: () => {
            gsap.to(".divider", {
                opacity: 0,
                duration: .4,
                delay: .3
            })
        }
    });

    tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: .3
    });


    tl.to("#word-2 h1", {
        y: "-100%",
        duration: 1,
    }, "<");


    tl.to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: .1,
        delay: .75,
        onStart: () => gsap.to(
            ".hero-img", {
                scale: 1,
                duration: 2,
                ease: "hop"
            }
        )
    });

    tl.to(
        [".nav", ".line h1", ".line p"], {
            y: "0%",
            duration: 1.5,
            stagger: .2
        }, "<"
    );

    tl.to([".cta", ".cta-icon"], {
        scale: 1,
        duration: 1.5,
        stagger: .75,
        delay: .75
    }, "<");

    tl.to(".cta-label p", {
        y: "0%",
        duration: 1.5,
        delay: .5,
    }, "<")
})