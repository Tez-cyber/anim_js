class App {
    constructor() {
        this._initialize();
        this._render();
    }

    _initialize() {
        // To create a lenis, we need to Lenis
        this._setInitialStates();
        this._createLenis();
        this._createIntro();
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
        })
    }

    _render(time) {
        // raf = requestAnimationFrame
        this.lenis.raf(time);

        // This will run 60 times per second then move to _render() again
        requestAnimationFrame(this._render.bind(this));
    }
}

new App();