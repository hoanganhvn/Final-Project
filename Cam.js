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
  productImage.setAttribute("src","Trang_Image/cam-1_d1069e59cda146fe90e8b23bf1c7b249_9361ea332c704edaa7f5d9c1860fc80f_master.jpg")
}
function displayImg2(){
  productImage.setAttribute("src","Trang_Image/cam-2_ffb370d58bf4488a8cd1511499bc1c5e_7f02b6eb4daa42c9b686e2e5ac73e95b_master.jpg")
}
function displayImg3(){
  productImage.setAttribute("src","Trang_Image/cam-3_3d1a2238fa274ddab6b75312e2fa7f9c_c4160b62f0a640059618ef2a9ddd8a74_master.jpg")
}
function displayImg4(){
  productImage.setAttribute("src","Trang_Image/cam-4_b1be682b1df24b098c3a086405b46e7e_596e3b20f1d04f7796e8e342bbe85aa5_master.jpg")
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
let cartRow = document.createElement('div')
var cartRowContents
btnAdd.addEventListener("click",function(){
  cartRow.innerHTML = localStorage.getItem("storedCart")
  productTotal += productValue
  cartRowContents = `
  <table id="cart-view">
        <tbody>
        <tr class="cart_item">
					<td class="cart-img"><a><img src="Trang_Image/luu-do-1_bc0171ffa80f4ae782f5757eecf1ab35_fb0cb5b099d54deba8cfa88b19abb394_compact.jpg"></a></td>
					<td>
						<p class="pro-title">	Lựu đỏ Peru</p>
							<div class="pro-quantity-view"><span>${productTotal}</span></div>
          </td>
          <td>					
							<div class="pro-price-view">200,000₫</div>
						<div class="remove-cart" onclick="deleteItem()">x</div>	
					</td>
				</tr>
        </tbody>
  </table>`
//cartRow.innerHTML = cartRow.innerHTML.concat(cartRowContents) // thêm sản phẩm mới vào
cartRow.innerHTML = cartRowContents;
localStorage.setItem("storedCart",cartRow.innerHTML)
modal2.style.display = "block";
modelContent.replaceChild(cartRow,nulllogo)
})
