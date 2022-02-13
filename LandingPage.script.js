let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");
let li4 = document.querySelector(".li4");

let hr1 = document.querySelector(".hr1");
let hr2 = document.querySelector(".hr2");
let hr3 = document.querySelector(".hr3");
let hr4 = document.querySelector(".hr4");

let outstanding = document.querySelector(".outstanding");
let promotion = document.querySelector(".promotion");
let news = document.querySelector(".news");
let best = document.querySelector(".best-selling");

li1.addEventListener("click", function () {
    li1.style.color = "black";
    hr1.style.display = "block";
    li2.style.color = "gray";
    hr2.style.display = "none";
    li3.style.color = "gray";
    hr3.style.display = "none";
    li4.style.color = "gray";
    hr4.style.display = "none";
    outstanding.style.display = "flex";
    promotion.style.display = "none";
    news.style.display = "none";
    best.style.display = "none";
})
li2.addEventListener("click", function () {
    li2.style.color = "black";
    hr2.style.display = "block";
    li1.style.color = "gray";
    hr1.style.display = "none";
    li3.style.color = "gray";
    hr3.style.display = "none";
    li4.style.color = "gray";
    hr4.style.display = "none";
    outstanding.style.display = "none";
    promotion.style.display = "flex";
    news.style.display = "none";
    best.style.display = "none";
})
li3.addEventListener("click", function () {
    li3.style.color = "black";
    hr3.style.display = "block";
    li2.style.color = "gray";
    hr2.style.display = "none";
    li1.style.color = "gray";
    hr1.style.display = "none";
    li4.style.color = "gray";
    hr4.style.display = "none";
    outstanding.style.display = "none";
    promotion.style.display = "none";
    news.style.display = "flex";
    best.style.display = "none";
})
li4.addEventListener("click", function () {
    li4.style.color = "black";
    hr4.style.display = "block";
    li2.style.color = "gray";
    hr2.style.display = "none";
    li3.style.color = "gray";
    hr3.style.display = "none";
    li1.style.color = "gray";
    hr1.style.display = "none";
    outstanding.style.display = "none";
    promotion.style.display = "none";
    news.style.display = "none";
    best.style.display = "flex";
})

let row3 = document.querySelectorAll(".row3");
let outstanding__btn = document.querySelector(".outstanding__btn");

outstanding__btn.addEventListener("click", function () {
    outstanding__btn.style.display = "none";
    for (let i = 0; i < row3.length; i++) {
        row3[i].style.display = "block";
    }
})

let news__row3 = document.querySelectorAll(".news__row3");
let news__btn = document.querySelector(".news__btn");

news__btn.addEventListener("click", function () {
    news__btn.style.display = "none";
    for (let i = 0; i < news__row3.length; i++) {
        news__row3[i].style.display = "block";
    }
})

let concessionary__row3 = document.querySelectorAll(".concessionary__row3");
let concessionary__btn = document.querySelector(".concessionary__btn");

concessionary__btn.addEventListener("click", function () {
    concessionary__btn.style.display = "none";
    for (let i = 0; i < concessionary__row3.length; i++) {
        concessionary__row3[i].style.display = "block";
    }
})

let li10 = document.querySelector(".li10");
let li20 = document.querySelector(".li20");
let li30 = document.querySelector(".li30");

let hr10 = document.querySelector(".hr10");
let hr20 = document.querySelector(".hr20");
let hr30 = document.querySelector(".hr30");

let concessionary = document.querySelector(".concessionary");
let hot = document.querySelector(".hot");
let supero = document.querySelector(".supero");

li10.addEventListener("click", function () {
    li10.style.color = "black";
    hr10.style.display = "block";
    li20.style.color = "gray";
    hr20.style.display = "none";
    li30.style.color = "gray";
    hr30.style.display = "none";
    concessionary.style.display = "flex";
    hot.style.display = "none";
    supero.style.display = "none";
})
li20.addEventListener("click", function () {
    li20.style.color = "black";
    hr20.style.display = "block";
    li10.style.color = "gray";
    hr10.style.display = "none";
    li30.style.color = "gray";
    hr30.style.display = "none";
    concessionary.style.display = "none";
    hot.style.display = "flex";
    supero.style.display = "none";
})
li30.addEventListener("click", function () {
    li30.style.color = "black";
    hr30.style.display = "block";
    li20.style.color = "gray";
    hr20.style.display = "none";
    li10.style.color = "gray";
    hr10.style.display = "none";
    concessionary.style.display = "none";
    hot.style.display = "none";
    supero.style.display = "flex";
})












let future = new Date('February 28,2022 00:00:00').getTime();
setInterval(function () {
    let present = new Date().getTime();
    let delta = future - present;
    let days = Math.floor(delta / (1000 * 60 * 60 * 24));
    let hours = Math.floor(delta / (1000 * 60 * 60));
    let minutes = Math.floor(delta / (1000 * 60));
    let seconds = Math.floor(delta / 1000);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementsByClassName("days").innerText = days;
    document.getElementsByClassName("hours").innerText = hours;
    document.getElementsByClassName("minutes").innerText = minutes;
    document.getElementsByClassName("seconds").innerText = seconds;

    console.log(present);
    console.log(future);
    console.log(seconds);
    console.log(delta);
    console.log(hours);
    console.log(minutes);
}, 1000)