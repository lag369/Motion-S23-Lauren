import {gsap} from "gsap";

function Hmotion(){
gsap.set("#hero", {alpha: 0})
var tl = gsap.timeline()
tl.to("#hero", { duration:3, alpha:1}, "trigger");
return tl ;
}
var mainTl = gsap.timeline();
mainTl.add(Hmotion)()
; 

//gsap.to("hero", {duration:1, alpha:1});

//gsap.set(".logo.",{x:500})

//const tweenDur = "0.5";

//let tweenDur = "0.5";

gsap.to("#hero-content", { duration:2.5, ease:"back.out(1.7)", y: -500 });

gsap.from(".menuItem", {duration:1, alpha:0, stagger:0.25, y:"-=25", delay:1})