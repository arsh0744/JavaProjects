import { Specials } from './../entity/specialItems/specials';
import { FoodBoxServiceService } from './../service/food-box-service.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../entity/carts/cart';
import { FoodBoxUserServiceService } from '../service/food-box-user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  special_items : Specials[];
  addCartQty =1;
  qtyUpdateOperation: String;
  

  active_Cart : Cart[];

  constructor(private home_serv : FoodBoxServiceService,private cart_serv:FoodBoxUserServiceService) { }

  ngOnInit(): void {


    this.home_serv.foodbox_all_specialItems().subscribe(data=>{
      
      this.special_items=data;
      
      
          },errors=>{
      
      
            console.log("Error Connecting");
          });


//----------Get Cart------------------------------------------------------------------


          this.cart_serv.foodbox_cart_items().subscribe(data=>{

           

          },errors=>{

console.log("Error Getting Cart");

          });

//----------Get Cart------------------------------------------------------------------


  }




  addToCart(cartAdd){

    let newCartItem = new Cart();
    newCartItem.cardItemName=cartAdd.itemName;
    newCartItem.itemId = cartAdd.itemId;
    newCartItem.cartItemPrice=(cartAdd.itemPrice*(100-cartAdd.discount))/100;
    
    newCartItem.cartItemQty=this.addCartQty;
    newCartItem.cart_item_Img_Src=cartAdd.itemImgSrc;

    this.cart_serv.foodbox_addItem_toCart(newCartItem).subscribe(data=>{
      
      
        if(data==null)
        console.log("Item Already in Cart")
        else{




          document.getElementById('cartIcon').classList.add('added');

          setTimeout(() => {
            document.getElementById('cartIcon').classList.remove('added');

          }, 2000);
        }
      
    

    },errors=>{


    console.log("Error While Adding");

    });

}


removeFromCart(cartRemov){

  this.cart_serv.foodbox_delCartItem_byItemId(cartRemov.itemId).subscribe(data=>{

    
    console.log(data);



  },errors=>{});



}



qtyUpdate(itemToUp,operationNumber:number){

    let cartItemToUp = new Cart();
    cartItemToUp.cardItemName=itemToUp.itemName;
    cartItemToUp.itemId = itemToUp.itemId;
    cartItemToUp.cartItemPrice=itemToUp.itemPrice;
    
   
    cartItemToUp.cart_item_Img_Src=itemToUp.itemImgSrc;

    
    
   

    
    
  this.cart_serv.foodbox_cart_qty_update(cartItemToUp,operationNumber).subscribe(data=>{

    console.log(itemToUp);
    this.ngOnInit();


  },errors=>{

console.log("Error Updating")

  });
  


}

hideNext(event:any){
  
  
  event.target.classList.remove('usable');
  event.target.nextSibling.classList.add('usable');
}


hidePrev(event:any){
 
  event.target.classList.remove('usable');
  
  event.target.previousSibling.classList.add('usable');
  
}



}
