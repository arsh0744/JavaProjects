import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

this.cart_price();

  }


  cart_price(){
    let cart_total=0;
for(let i=0;i<this.cart_products.length;i++){
  cart_total=cart_total+this.cart_products[i].prod_qty*this.cart_products[i].prod_price;
}
console.log(cart_total);
document.getElementById("total").innerHTML= "Rs." + cart_total;
document.getElementById("total1").innerHTML= "Rs." + cart_total;

  }


cart_products=[
  {
    product_id: 15,
    card_id: "cake_card",
    img: "/assets/images/choccake.jpg",
    header: "Featured",
    title: "Chocolate Cake ",
    card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
    prod_qty: 1,
    prod_price: 600,
    disp_id: "cake1_d",
    minus_id: "cake1_m",
    plus_id: "cake1_p",
    add_btn_id: "cake1_b1"

  },
  {
    product_id: 21,
    card_id: "biscuit_card",
    img: "/assets/images/cookie.jpg",
    header: "Featured",
    title: "Cookies",
    card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
    prod_qty: 1,
    prod_price: 150,
    disp_id: "bis2_d",
    minus_id: "bis2_m",
    plus_id: "bis2_p",
    add_btn_id: "bis2_b"


  },
  {
    product_id: 13,
    card_id: "beverages_card",
    img: "/assets/images/juice.jpg",
    header: "Featured",
    title: "Orange Juice",
    card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
    prod_qty: 1,
    prod_price: 90,
    disp_id: "bev2_d",
    minus_id: "bev2_m",
    plus_id: "bev2_p",
    add_btn_id: "bev2_b1"
  
  }


]


add_fun(cart_cards){
  if(cart_cards.prod_qty==0){
    
    cart_cards.prod_qty +=1 ;
    
    document.getElementById(cart_cards.add_btn_id).style.display="none";
    document.getElementById(cart_cards.minus_id).style.display="block";
    document.getElementById(cart_cards.plus_id).style.display="block";
    document.getElementById(cart_cards.disp_id).style.display="block";

      for(let i=0;i<cart_cards.length;i++){
        if (cart_cards.product_id == this.cart_products[i].product_id){
          this.cart_products[i].prod_qty +=1;
        }
        else
        return;
      }


    
  }
  else if (cart_cards.prod_qty>0){
    cart_cards.prod_qty +=1 ;
  
  }
  else
  return
 


}




inc_fun(cart_cards){
  
  if(cart_cards.prod_qty==0){
    
    
    for(let i=0;i<this.cart_products.length;i++){
      if (cart_cards.product_id == this.cart_products[i].product_id){
        this.cart_products[i].prod_qty +=1;
        console.log(this.cart_products);
      }
      
    }
    
   
  }
  else if (cart_cards.prod_qty>0){
    
    console.log("tatti");
    for(let i=0;i<this.cart_products.length;i++){
      if (cart_cards.product_id == this.cart_products[i].product_id){
        this.cart_products[i].prod_qty +=1;
        console.log(this.cart_products);
      }
     
    }
  
  }
  
 


}


dec_fun(cart_cards){

  if(cart_cards.prod_qty>1){
    cart_cards.prod_qty -=1 ;

  }
 
  else if(cart_cards.prod_qty==1){
    cart_cards.prod_qty -=1 ;
    
  }



}



removeItem(cart_cards){
  for(let i=0;i<this.cart_products.length;i++){
    if (cart_cards.product_id == this.cart_products[i].product_id){
     this.cart_products.splice(i,1);
console.log(this.cart_products);

  }
  else
  continue;
  


}

}



}
