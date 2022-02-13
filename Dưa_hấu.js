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
  productImage.setAttribute("src","Trang_Image/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_master.jpg")
}
function displayImg2(){
  productImage.setAttribute("src","Trang_Image/dua-hau-3_2463a57a99704267a7f7ad7c5400c81d_6688e26f939b41df85b72f437268f537_master.jpg")
}
function displayImg3(){
  productImage.setAttribute("src","Trang_Image/dua-hau-4_92f9589bf5a64c78a625ee94018a5edd_1c3d10c7eab442a0bc4d99710dce6943_master.jpg")
}
function displayImg4(){
  productImage.setAttribute("src","Trang_Image/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_master.jpg")
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
  proTotal.innerHTML =proPrice*productTotal + "₫";
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
    alert("Chọn 1 sản phẩm bất kì")
  }
  else{
    alert("Thanh toán thành công!")
  }
}
