gsap.from("#page1 img,nav h1,nav", {
    y: -80,
    opacity: 0,
    delay: 0.1,
    duration: 1,
    stagger: 0.3
});
gsap.from("nav button", {
    opacity: 0
});

gsap.to("#page2 h1", {
    transform: "translateX(-85%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 10%",        
        end: "top -100%",
        scrub: 10,
        pin: true
    }
});

var p2 = gsap.timeline();
p2.from("#page3 h1", {
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        scrub: 10,
        start: "top 50%",
        end: "top 70%"
    }
});

var page4 = gsap.timeline();
page4.from("#page4 #img img,#imgp4 img",{
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page4 #img img,#imgp4 img",
        scroller: "body",
        scrub: 5,
        start: "top 70%",
        end: "top 70%"
    }
});

var pageproject = gsap.timeline();
pageproject.from("#list-projects #project-img",{
    scale: 0.5,
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#list-projects #project-img",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 4
    }
});

let pr1 = document.getElementById("pr1");
pr1.addEventListener("click", () => {
    window.location.href = "https://gyannnnn.github.io/E-comerce-site-for-books/";
});
let pr2 = document.getElementById("pr2");
pr2.addEventListener("click", () => {
    window.location.href = "https://gyannnnn.github.io/protfolio-website/";
});
let pr3 = document.getElementById("pr3");
pr3.addEventListener("click", () => {
    window.location.href = "https://gyannnnn.github.io/Weather-forecaster/";
});
let pr4 = document.getElementById("pr4");
pr4.addEventListener("click", () => {
    window.location.href = "https://gyannnnn.github.io/Calculator/";
});
