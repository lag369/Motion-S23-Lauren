import { gsap } from "gsap";


gsap.set(".logo.",{x:500})

//const tweenDur = "0.5";

let tweenDur = "0.5";

//^^keyword(let) referencename(tweendur) assignmentoperator value(0.5);

//var is older, avoid using it!
//let is new var i think?
//const is also used

//reference name rules:
    //1. names can contain letters, digits, underscores, adn dollar signs
    //2. names must begin with a letter or underscore
    //3. names are case sensitive!!
    //4. keywords cannot be used as names (i.e. let, any word with tht blue)

//examples
    //let TweenDuration = "0.5";
    //let someElement = document.querySelector('.logo');
    //let allElementsWithClass = document.querySelectorAll('.box');
    //let mainTl = gsap.timeline();

//GSAP

//gsap.to(target, {duration, vars, ease});

gsap.to("hero", {duration:1, x:200})