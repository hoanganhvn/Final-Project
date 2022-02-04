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

li1.addEventListener("click", function() {
    li1.style.color = "black";
    hr1.style.display = "block";
    li2.style.color = "gray";
    hr2.style.display = "none";
    li3.style.color = "gray";
    hr3.style.display = "none";
    li4.style.color = "gray";
    hr4.style.display = "none";
    outstanding.style.display = "block";
    promotion.style.display = "none";
    news.style.display = "none";
    best.style.display = "none";
})
li2.addEventListener("click", function() {
    li2.style.color = "black";
    hr2.style.display = "block";
    li1.style.color = "gray";
    hr1.style.display = "none";
    li3.style.color = "gray";
    hr3.style.display = "none";
    li4.style.color = "gray";
    hr4.style.display = "none";
    outstanding.style.display = "none";
    promotion.style.display = "block";
    news.style.display = "none";
    best.style.display = "none";
})
li3.addEventListener("click", function() {
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
    news.style.display = "block";
    best.style.display = "none";
})
li4.addEventListener("click", function() {
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
    best.style.display = "block";
})

let row3 = document.querySelector(".row3");
let seemore = document.querySelector(".seemore");

seemore.addEventListener("click", function() {
    seemore.style.display = "none";
    row3.style.display = "block";
})

let row3new = document.querySelector(".row3new");
let seemorenew = document.querySelector(".seemorenew");

seemorenew.addEventListener("click", function() {
    seemorenew.style.display = "none";
    row3new.style.display = "block";
})

let copy1 = document.querySelector(".copy1");

copy1.addEventListener("click", function() {
    copy1.innerHTML = "Đã sao chép";
})

let copy2 = document.querySelector(".copy2");

copy2.addEventListener("click", function() {
    copy2.innerHTML = "Đã sao chép";
})

let copy3 = document.querySelector(".copy3");

copy3.addEventListener("click", function() {
    copy3.innerHTML = "Đã sao chép";
})

let copy4 = document.querySelector(".copy4");

copy4.addEventListener("click", function() {
    copy4.innerHTML = "Đã sao chép";
})

let li10 = document.querySelector(".li10");  
let li20 = document.querySelector(".li20");
let li30 = document.querySelector(".li30");

let hr10 = document.querySelector(".hr10");
let hr20 = document.querySelector(".hr20");
let hr30 = document.querySelector(".hr30");

let supero = document.querySelector(".supero");
let concessionary = document.querySelector(".concessionary");
let hot = document.querySelector(".hot");

li10.addEventListener("click", function() {
    li10.style.color = "black";
    hr10.style.display = "block";
    li20.style.color = "gray";
    hr20.style.display = "none";
    li30.style.color = "gray";
    hr30.style.display = "none";
    concessionary.style.display = "block";
    hot.style.display = "none";
    supero.style.display = "none";
})
li20.addEventListener("click", function() {
    li20.style.color = "black";
    hr20.style.display = "block";
    li10.style.color = "gray";
    hr10.style.display = "none";
    li30.style.color = "gray";
    hr30.style.display = "none";
    concessionary.style.display = "none";
    hot.style.display = "block";
    supero.style.display = "none";
})
li30.addEventListener("click", function() {
    li30.style.color = "black";
    hr30.style.display = "block";
    li20.style.color = "gray";
    hr20.style.display = "none";
    li10.style.color = "gray";
    hr10.style.display = "none";
    concessionary.style.display = "none";
    hot.style.display = "none";
    supero.style.display = "block";
})

let row30 = document.querySelector(".row30");
let seemore0 = document.querySelector(".seemore0");

seemore0.addEventListener("click", function() {
    seemore0.style.display = "none";
    row30.style.display = "block";
})