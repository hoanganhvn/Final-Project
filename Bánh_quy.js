// Get the modal
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal ||event.target == modal1||event.target == modal2) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
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

    let total = document.getElementById("total");
    let login1 = document.getElementById("login1");
    let warning1 = document.getElementById("warning1");
    let warning2 = document.getElementById("warning2");

    if(usernameCheck && passCheck >= 8){
        total.remove("login");
        login1.style.display = "block";
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

//Product-slide
const productImage = document.getElementById("product-img")
function displayImg1(){
  productImage.setAttribute("src","Trang_Image/banh-cookie-1_117f47571e90431583b383ee74d2e221_be57a2029e1b47f080698e7f5086c8ed_master.jpg")
}
function displayImg2(){
  productImage.setAttribute("src","Trang_Image/banh-cookie-3_0191f0102f6343e992f1baf79345dcdb_4cd98c2d5c2d48a3ad268d05f5b31510_master.jpg")
}
function displayImg3(){
  productImage.setAttribute("src","Trang_Image/banh-cookie_6db7b5f903ef41208823b482c77c7b70_590934e6b0e547e1ac403726b3957e47_master.jpg")
}
function displayImg4(){
  productImage.setAttribute("src","Trang_Image/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_master.jpg")
}

//Product_detail, add and subtract product
var productValue = Number(document.getElementById("quantity").value);
var quantity = document.getElementById("quantity")
var productTotal = 0
function plusQuantity(){
  productValue += 1;
  quantity.value=productValue;
  
}
function minusQuantity(){
  if(productValue>1){
  productValue -= 1;
  quantity.value=productValue;
  }
}

//Add product to cart
let btnAdd = document.getElementById("add-to-cart");
let nulllogo= document.getElementById("nulllogo")
let modelContent = document.getElementById("model-content")
let cartRow = document.getElementById("cart-view")
var quantityView = Number(document.getElementById("pro-quantity-view"))
var cartQuantity = document.getElementById("pro-quantity-view")
var proTotal = document.getElementById("pro-total")
var defaultTotal =document.getElementById("total-red")
btnAdd.addEventListener("click",function(){
  productTotal += productValue;

  cartRow.style.display= "block";
  nulllogo.style.display="none";
  modal2.style.display = "block";
  quantityView = productTotal;
  cartQuantity.innerHTML = quantityView;
  let proPrice = Number(document.getElementById("pro-price-view").innerHTML)
  proTotal.innerHTML =proPrice*productTotal + "???";
  proTotal.style.display = "block";
  defaultTotal.style.display = "none";
})

// Delete product
function deleteItem(){
  cartRow.style.display= "none";
  nulllogo.style.display="block";
  productTotal=0;
  proTotal.style.display = "none";
  defaultTotal.style.display = "block"
}

let btnPay = document.getElementById("Payment")
function pay(){
  if(cartRow.style.display == "none"){
    alert("Ch???n 1 s???n ph???m b???t k??")
  }
  else{
    alert("Thanh to??n th??nh c??ng!")
  }
}
