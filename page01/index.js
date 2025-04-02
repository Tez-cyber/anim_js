class App {
    constructor() {
        this.heroImages = [...document.querySelectorAll('.hero__images img')];
        this.texts = [...document.querySelectorAll('.text__effect')];
        this._initialize();
        this._render();
    }

    _initialize() {
        // To create a lenis, we need to Lenis
        this._setInitialStates();
        this._createLenis();
        this._createIntro();
        this._createHero();
        this._createTextAnimation();
    }

    _setInitialStates() {
        gsap.set(
            '.hero__title span, .text__effect p, .fullwidth-image__text', 
            { y: 32, opacity: 0 }
        );
        gsap.set(
            '.hero__images img', 
            { opacity: 0, y: gsap.utils.random(100, 50)}
        );
        gsap.set(
            '.fullwidth-image img', 
            { scale: 1.3 }
        );
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1,
        });
    }

    // Create Intro
    _createIntro() {
        const tl = gsap.timeline();

        tl.to('.hero__title div', {
            opacity: 1
        }).to('.hero__title span', {
            y: 0,
            opacity: 1,
            ease: "expo.out",
            duration: 2,
            stagger: 0.01
        }).to('.hero__images img', {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 2,
            stagger: 0.04
        }, .5)
    }


    // Create Hero
    _createHero() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true, // adds scroll effect 
            }
        });

        this.heroImages.forEach((image, index) => {
            tl.to(image, {
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50),
            }, 0) // adding zero allows to run the animation at the same time.
        })
    }

    // Text animation 
    _createTextAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.text-block',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
            }
        });

        this.texts.forEach((text, index) => {
            const overlay = text.querySelector('text__overlay')
            const content = text.querySelector('p');

            tl.to(overlay, {
                scaleX: 0,
            }).to(content, {
                y:0,
                opacity: 1,
                ease: 'expo.out',
                duration: 2,
                delay: index * .1,
            }, 0)
        })
    }
    _render(time) {
        // raf = requestAnimationFrame
        this.lenis.raf(time);

        // This will run 60 times per se    d then move to _render() again
        requestAnimationFrame(this._render.bind(this));
    }
}

new App();