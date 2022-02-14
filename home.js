// Get the modal
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];
let span4 = document.getElementsByClassName("foot-input-email-popup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.addEventListener("click", function() {
  modal1.style.display = "block";
});
// btn1.onclick = function() {
//   modal1.style.display = "block";
// }
btn2.onclick = function() {
  modal2.style.display = "block";
}
// function open(x){
//   x.style.display = "block";
// }
// open(btn);
// open(btn1);
// open(btn2);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.addEventListener("click", function() {
  modal2.style.display = "none";
});
span3.addEventListener("click", function() {
  modal3.style.display = "none";
});
span4.addEventListener("click", function() {
  modal3.style.display = "none";
});
// span2.onclick = function() {
//   modal2.style.display = "none";
// }
// span3.onclick = function() {
//   modal3.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal ||event.target == modal1||event.target == modal2||event.target == modal3) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    // modal3.contains(event.target)
  }

}
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }


// Login
let submit = document.getElementById("myForm");

submit.addEventListener("click", function () {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let username = document.getElementById("username").value;
    let usernameCheck = re.test(username);

    let pass = document.getElementById("pass").value;
    let passCheck = pass.split("").length;

    // let total = document.getElementById("total");
    // let modal = document.getElementById("modal");
    let warning1 = document.getElementById("warning1");
    let warning2 = document.getElementById("warning2");

    if(usernameCheck && passCheck >= 8){
        window.remove("modal");
        // login1.style.display = "block";
        // localStorage.setItem("username", username);
    } else if (!usernameCheck && passCheck >= 8){
        warning1.style.display = "block";
    } else if (usernameCheck && passCheck < 8){
        warning2.style.display = "block";
    } else {
        warning1.style.display = "block";
        warning2.style.display = "block";
    }
})

// Mini menu
let bars = document.getElementById("bars");

bars.addEventListener("click",function(){
    let navlist = document.querySelector(".navlist");
    navlist.classList.toggle("active");
});


// Slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Popup
const myTimeout = setTimeout(myPopup, 2000);

function myPopup() {
  let myModalPopup = document.getElementById("myModal3");
  myModalPopup.style.display = "block";
}

function myStopFunction() {
  clearTimeout(myTimeout);
}