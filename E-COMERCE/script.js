const productList =  [
    {
      "id": "1",
      "name": "Nike Air Max 270 (Men, Black)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Lifestyle shoe with big Air unit and sleek design.",
       "category": "Men's Lifestyle Shoes",
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ohwu3kmhyqivaku9sxld/NIKE+AIR+MAX+270+%28PS%29.png",
      "Qty" : 1
    },
    {
      "id": "2",
      "name": "Nike Air Max 270 (Men, White)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Clean white-on-white design with Air Max comfort.",
      "category": "Men's Lifestyle Shoes",
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1071f868-fb24-4d88-aa7d-b97d632a1ff8/W+AIR+MAX+270.png",
      "Qty" : 1
    },
    {
      "id": "3",
      "name": "Nike Air Max 270 (Women, Black)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Women's version in classic all-black colorway.",
      "in_stock": false,
      "category": "Women's Lifestyle Shoes",
      "sizes": [2.5,3,3.5,4,4.5,5,5.5,6],
      "colors": ["Black/Black/Black"],
      "image_urls":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/przhlilttuqiis7no3rr/W+AIR+MAX+270.png",
      "Qty" : 1
    },
    {
      "id": "4",
      "name": "Nike Air Max 270 (Women, Pink)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Pastel pink variant with cushioned comfort.",
      "in_stock": false,
      "category": "Women's Lifestyle Shoes",
      "sizes": [2.5,3,3.5,4,4.5,5,5.5,6],
      "colors": ["Pomegranate/Pearl Pink"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2fb74645-8a41-4316-a1fa-2f2433611880/W+AIR+MAX+270.png",
      "Qty" : 1
    },
    {
      "id": "5",
      "name": "Nike Air Max 270 (Kids, Black)",
      "brand": "Nike",
      "price": 8495,
      "currency": "INR",
      "description": "Younger kids’ version with Max Air cushioning.",
      "in_stock": false,
      "category": "Kids' Shoes",
      "sizes": [1,2,3,4,5],
      "colors": ["Black/Anthracite/White"],
      "image_urls": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9a58e7a-4122-4ed1-8593-cb87c66d7a4a/NIKE+AIR+MAX+270+PS.png",
      "Qty" : 1
    },
    {
      "id": "6",
      "name": "Adidas Ultraboost 22 (Core Black)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Running shoe with Boost midsole and Primeknit upper.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Core Black / Cloud White"],
      "image_urls": "https://sneakernews.com/wp-content/uploads/2021/12/adidas-UltraBOOST-22-GZ0127-0.jpg?w=1140",
      "Qty" : 1
    },
    {
      "id": "7",
      "name": "Adidas Ultraboost 22 (Cloud White)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Bright white Primeknit upper with Boost comfort.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Cloud White / Cloud White"],
      "image_urls": "https://image-cdn.hypb.st/https://hypebeast.com/image/2016/05/adidas-ultra-boost-white-gray-2.jpg?cbr=1&q=90",
      "Qty" : 1
    },
    {
      "id": "8",
      "name": "Adidas Ultraboost 22 (Blue)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Navy/royal Primeknit upper with high-energy Boost.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Legend Ink"],
      "image_urls": "https://static.shoeprize.com/Raffle/thumb/HP9930-shoeprize-adidas-Ultra-Boost-22-Lucid-Blue-Core-Black-NEW-1676743495140.jpg",
      "Qty" : 1
    },
    {
      "id": "9",
      "name": "Nike shox R4 (Men, Red)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Bold red colorway for everyday wear.",
      "in_stock": false,
      "category": "Men's Lifestyle Shoes",
      "sizes": [6,7,8,9,10,11,12,13],
      "colors": ["University Red/Black"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4eb0448f-b9b3-4f20-9b8f-d180fb641ddb/NIKE+SHOX+R4.png",
      "Qty" : 1
    },
    {
      "id": "10",
      "name": "Nike Air Max SNDR Camo (Women, Blue)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Cool blue variant with signature Air unit.",
      "in_stock": false,
      "category": "Women's Lifestyle Shoes",
      "sizes": [2.5,3,3.5,4,4.5,5,5.5,6],
      "colors": ["Photon Dust/Aurora Green"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4032a69-781f-4d21-80a6-f1604b6bea91/W+NIKE+AIR+MAX+SNDR+CAMO.png",
      "Qty" : 1
    },
    {
      "id": "11",
      "name": "Nike Air Max Portal SE (Women, Grey)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Neural grey color option for versatile styling.",
      "in_stock": false,
      "category": "Women's Lifestyle Shoes",
      "sizes": [2.5,3,3.5,4,4.5,5,5.5,6],
      "colors": ["Light Arctic Pink"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89ae9866-c0e0-4c59-ad0b-10fcb8d7268c/W+NIKE+AIR+MAX+PORTAL+SE.png",
      "Qty" : 1
    },
    {
      "id": "12",
      "name": "Adidas Ultraboost 22 (Legacy Red)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Vibrant red Primeknit design with Boost cushioning.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Legacy Red"],
      "image_urls": "https://sneakernews.com/wp-content/uploads/2021/01/adidas-ultraboost-21-vivid-red-FZ1922-2.jpg",
      "Qty" : 1
    },
    {
      "id": "13",
      "name": "Adidas Ultraboost 22 (Olive Green)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Earthy green tone with performance Boost midsole.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Focus Olive"],
      "image_urls": "https://images.stockx.com/images/adidas-Ultra-Boost-22-Focus-Olive-Semi-Impact-Orange.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=5&trim=color&updated_at=1673461379&q=30",
      "Qty" : 1
    },
    {
      "id": "14",
      "name": "Nike Gato (Kids, White)",
      "brand": "Nike",
      "price": 8495,
      "currency": "INR",
      "description": "Kids' white version with Max Air comfort.",
      "in_stock": false,
      "category": "Kids' Shoes",
      "sizes": [1,2,3,4,5],
      "colors": ["White/White/Black"],
      "image_urls": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/81535b0d-0e50-4260-97ca-815997c5b838/gato-older-shoes-GNJ8Ph.png",
      "Qty" : 1
    },
    {
      "id": "15",
      "name": "Nike Full Force Low (Men, Grey)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Subtle grey tone for versatile styling.",
      "in_stock": false,
      "category": "Men's Lifestyle Shoes",
      "sizes": [6,7,8,9,10,11,12,13],
      "colors": ["Photon Dust/Aurora Green"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6555d54a-bb90-46a3-887d-6dd9d9d2f748/NIKE+FULL+FORCE+LO.png",
      "Qty" : 1
    },
    {
      "id": "16",
      "name": "Adidas Ultraboost  (Grey)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Neutral grey for everyday performance.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Magic Beige"],
      "image_urls": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb1f85e93836405d8186752016161bc0_9366/Ultraboost_5X_Digital_Camo_Shoes_Grey_JR0532_HM3_hover.jpg",
      "Qty" : 1
    },
    {
      "id": "17",
      "name": "Nike Pegasus Plus (Men, Blue)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Striking blue colorway with signature cushioning.",
      "in_stock": false,
      "category": "Men's Lifestyle Shoes",
      "sizes": [6,7,8,9,10,11,12,13],
      "colors": ["Photon Dust/Aurora Green"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8d4db3a-4e39-4461-ba51-160e157dc450/NIKE+PEGASUS+PLUS+CM.png",
      "Qty" : 1
    },
    {
      "id": "18",
      "name": "Nike Air Force 1'07 (Women, Red)",
      "brand": "Nike",
      "price": 13995,
      "currency": "INR",
      "description": "Women’s red variant with bold street style.",
      "in_stock": false,
      "category": "Women's Lifestyle Shoes",
      "sizes": [2.5,3,3.5,4,4.5,5,5.5,6],
      "colors": ["University Red/Black"],
      "image_urls": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09db5ab7-df74-4c82-907a-abcc26807fe5/WMNS+AIR+FORCE+1+%2707.png",
      "Qty" : 1
    },
    {
      "id": "19",
      "name": "FORUM LOW CL (Chalky White)",
      "brand": "Adidas",
      "price": 17999,
      "currency": "INR",
      "description": "Chalky white look with full Boost base.",
      "in_stock": false,
      "category": "Unisex Running Shoes",
      "sizes": [4,5,6,7,8,9,10,11],
      "colors": ["Chalky White"],
      "image_urls": "https://www.superkicks.in/cdn/shop/products/2_df3475cc-d466-4a1d-a911-6be5942fb910.jpg?v=1678712784&width=1946",
      "Qty" : 1
      
    }
  ];


//    <div class="product">
//                 <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ohwu3kmhyqivaku9sxld/NIKE+AIR+MAX+270+%28PS%29.png" alt="">
//                 <h2>Nike Air Max 270 (Men, Black)</h2>
//                 <h5>Nike</h5>
//                 <p>Lifestyle shoe with big Air unit and sleek design.</p>
//                 <p>Men's Lifestyle Shoes</p>
//                 <div class="price">
//                     <p>13995</p>
//                     <p>INR</p>
//                 </div>
//                 <button class="btn btn-outline-primary">Add to cart</button>
//             </div>

const main = document.querySelector(".main");
const productBox = document.querySelector(".product-box");
const cart = document.querySelector(".cart");
const cartBox = document.querySelector(".cart-box");

let CartList=JSON.parse(localStorage.getItem("Cartstore")) || [];
let Count=1;


function displayproduct(){

    productList.map(  (prod) =>{
        
const productDIV = document.createElement("div");
const img = document.createElement("img");
const title = document.createElement("h3");
const brand = document.createElement("h5");
const description = document.createElement("p");
const catdiv = document.createElement("div")
const cat = document.createElement("p");
const category = document.createElement("p");
const pricediv = document.createElement("div");
const price = document.createElement("p");
const currency = document.createElement("p");
const addtocartbtn = document.createElement("button");

productBox.className = "product-box"
productDIV.className = "product";
pricediv.className = "price";
addtocartbtn.className = "btn btn-outline-primary"
main.className = "main"
catdiv.className = "catdiv"
cat.className = "cat"





img.src = prod.image_urls;
title.textContent=prod.name
brand.textContent = prod.brand
description.textContent = prod.description
cat.textContent = "Categoery :"
category.textContent =  prod.category
price.textContent= prod.price
currency.textContent = prod.currency
addtocartbtn.textContent="Add To Cart"
addtocartbtn.onclick = () => {
    addtocart(prod);
};

pricediv.appendChild(price)
pricediv.appendChild(currency)

productDIV.appendChild(img)
productDIV.appendChild(title)
productDIV.appendChild(brand)
productDIV.appendChild(description)
catdiv.appendChild(cat)
catdiv.appendChild(category)
productDIV.appendChild(catdiv)
productDIV.appendChild(pricediv)
productDIV.appendChild(addtocartbtn)

productBox.appendChild(productDIV)

    })

}



    // <div class="crat-box">
    //             <div class="cartimg">
    //                 <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ohwu3kmhyqivaku9sxld/NIKE+AIR+MAX+270+%28PS%29.png" alt="">
    //             </div>
    //             <div class="cartdetail">
    //                 <h5>Nike Air Max 270 (Men, Black)</h5>
    //                 <h6>NIKE</h6>
    //                  <p>13995<span> -\ INR</span></p>
    //                  <button class="btn btn-outline-danger">REMOVE</button>
    //             </div>


    //     </div>

    
        // <div class="total">
        //     <div class="totalbill">
        //     <div class="title">
        //         <h5>subtotal</h5>
        //         <h5>GST</h5>
        //         <h5>shipping</h5>
        //         <hr>
        //         <h4>grand</h4>
                
        //     </div>
        //     <div class="amount">
        //         <h5> 13995 -/ INR</h5>
        //         <h5>2519 -/ INR </h5>
        //         <h5>99 -/ INR</h5>
        //         <hr>
        //         <h4> 16613 -/ INR</h4>
        //     </div>
        //     </div>
        //     <button class="btn btn-outline-warning">BUY NOW</button>
        // </div>

// function displaycart(){
//     cart.innerHTML = " ";

//     cartlist.map((c,index)=>{
        
// const cartimg = document.createElement("div");
// const img = document.createElement("img");
// const cartdetail = document.createElement("div");
// const title = document.createElement("h5")
// const brand = document.createElement("h6");
// const price = document.createElement("p");
// const currency = document.createElement("span");
// const removeBtn = document.createElement("button");


// // const total = document.createElement("div");
// // const totalbill = document.createElement("div");
// // const titlebill = document.createElement("div");
// // const subtotal = document.createElement("h5");
// // const GST = document.createElement("h5");
// // const shipping = document.createElement("h5");
// // const hr = document.createElement("hr");
// // const grand = document.createElement("h5");
// // const amount = document.createElement("div");
// // const amountsub = document.createElement("h5");
// // const amountshipping = document.createElement("h5");
// // const amountGST = document.createElement("h5");
// // const amounthr = document.createElement("hr")
// // const amountgrand = document.createElement("h5");
// // const buyBtn = document.createElement("button");





// cartBox.className = "cart-box";
// cartimg.className = "cartimg" ;
// cartdetail.className = "cartdetail";
// removeBtn.className = "btn btn-outline-danger"





// img.src =c.image_urls
// title.textContent = c.name
// brand.textContent = c.brand
// price.textContent=c.price
// currency.textContent = c.currency
// removeBtn.textContent = "Remove"
// removeBtn.onclick = () => {
//     removefromcart(index);
// };



// // total.className = "total";
// // totalbill.className = "totalbill";
// // titlebill.className = "title";
// // amount.className = "amount";
// // buyBtn.className = "btn btn-outline-warning";

// // subtotal.textContent = "Subtotal"
// // GST.textContent="GST"
// // shipping.textContent="Shipping"
// // hr.textContent = 
// // grand.textContent="Grand Total"

// // amountsub.textContent = c.price + "-/" + c.currency 
// // amountGST.textContent = c.price * (18/100)
// // amountshipping.textContent = "99 -/ INR"
// // amounthr.textContent = 
// // amountgrand.textContent = c.price + c.price * (18/100) + 99
// // buyBtn.textContent = "Buy Now"

// price.appendChild(currency);
// cartdetail.appendChild(title);
// cartdetail.appendChild(brand);
// cartdetail.appendChild(price);
// cartdetail.appendChild(removeBtn);
// cartimg.appendChild(img);
// cartBox.appendChild(cartimg);
// cartBox.appendChild(cartdetail);

// // amount.appendChild(amountsub);
// // amount.appendChild(amountGST);
// // amount.appendChild(amountshipping);
// // amount.appendChild(amounthr);
// // amount.appendChild(amountgrand);

// // titlebill.appendChild(subtotal);
// // titlebill.appendChild(GST);
// // titlebill.appendChild(shipping);
// // titlebill.appendChild(hr);
// // titlebill.appendChild(grand);

// // totalbill.appendChild(titlebill);
// // totalbill.appendChild(amount);

// // total.appendChild(totalbill);
// // total.appendChild(buyBtn)




// cart.appendChild(cartBox)
// // cart.appendChild(total)
//  })

    

// }


  function CartDisplay(){
 let sum=0;
  let cartList1=document.querySelector(".cart-list")
 
  cartList1.innerHTML=""

  CartList.map((cart,index)=>{
  
  sum=sum+ (cart.price*cart.Qty);
  const cartHolder= document.createElement("div");
cartHolder.className="cart-holder d-flex mt-3";

const cartItem=document.createElement("div");
cartItem.className="cart-item ";

const img=document.createElement("img");
img.src= cart.image_urls;

const cartContent=document.createElement("div");
cartContent.className="cart-content";

const title=document.createElement("h5");
title.textContent=cart.name;

const price=document.createElement("h4");
price.textContent="price:-"+cart.price+"/-";


const Quantity=document.createElement("p");
Quantity.textContent="Qty:"+cart.Qty;

const button=document.createElement("button");
button.textContent="Cancel"
button.className="btn btn-danger text-white"

button.addEventListener("click",()=>{
   removefromcart(index);

   
})

cartItem.appendChild(img);

cartContent.appendChild(title);
cartContent.appendChild(price);
cartContent.appendChild(Quantity);
cartContent.appendChild(button);

cartHolder.appendChild(cartItem);
cartHolder.appendChild(cartContent);



cartList1.appendChild(cartHolder);

  })
  let Discount=sum*5/100;
  const billDiv=document.createElement("div");
billDiv.className="billDiv shadow-lg";
const Amount=document.createElement("p");
const number=document.createElement("p");
const Total=document.createElement("h5");
const Checkout=document.createElement("button");
 Amount.textContent="Amount:"+sum;
 Checkout.textContent="Buy now";
 Checkout.className="checkout-btn justify-content-center btn btn-outline-warning"
 number.textContent= "Discount(5%):" +Discount;
 number.className="fw-bold "
 Total.textContent="Total to Pay:"+( sum-Discount); 
  billDiv.appendChild(Amount);
  billDiv.appendChild(number);
  billDiv.appendChild(Total);
  billDiv.appendChild(Checkout)
   cartList1.appendChild(billDiv)
};



function addtocart(prod){
    let isexist = false;

    CartList.map((cart)=>{
        if(cart.id == prod.id){
            cart.Qty++;
            isexist = true;
        }
    });
    if(isexist==false){
        CartList.push(prod)
    }
    const json = JSON.stringify(CartList);
    localStorage.setItem("Cartstore",json);
    CartDisplay();



}

function removefromcart(index){
    CartList.splice(index,1);
    localStorage.setItem("Cartstore",JSON.stringify(CartList));
    CartDisplay();

}






displayproduct();
CartDisplay();







