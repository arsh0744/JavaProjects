import { Component, OnInit } from '@angular/core';
import { Cart } from '../entity/carts/cart';
import { Item } from '../entity/items/item';
import { FoodBoxServiceService } from '../service/food-box-service.service';
import { FoodBoxUserServiceService } from '../service/food-box-user-service.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {


  constructor(private menu_serv:FoodBoxServiceService, private allServ:FoodBoxUserServiceService) { }

  menu_all :Item[];
  addItemQty =1;
    addCartQty =1;
    pizza = new Array<Item>();


  ngOnInit() {

    this.menu_serv.foodbox_items().subscribe(data=>{
    
    
    
    if(data!=null){

      this.menu_all=data;
      
          for(let i=0;i<this.menu_all.length;i++){
            
            
                 if(this.menu_all[i].itemCategory=='Pizza'){
                  
                       this.pizza.push(this.menu_all[i]);
            
           
                 }
                 
  
          }
  


           
    }
    else{
      console.log("No Results Found");
    }
        
    
    
    },error=>{
      console.log("Some Error Ocurred");
    });
    
    
    
       
    
       
    
    
    
    
      }
  
  //Sort Functions------------------------------------------------------------------------------

  lowToHighSort(){


    
    this.pizza.sort(function(a, b) {  return a.item_Price - b.item_Price;});

    

  }



  highToLowSort(){
     

   
    this.pizza.sort(function(a, b) {  return b.item_Price - a.item_Price;});


  }
  categSortAsc(){

    

               this.pizza.sort((a,b) => a.itemCategory.localeCompare( <string>b.itemCategory));

            
  }

  categSortDesc(){

    this.pizza.sort((a,b) => b.itemCategory.localeCompare( <string>a.itemCategory));

  }

  // Sort Functions---------------------------------------------------------------------------------




  addToCart(cartAdd){

    let newCartItem = new Cart();
    newCartItem.cardItemName=cartAdd.item_Name;
    newCartItem.itemId = cartAdd.pId;
    newCartItem.cartItemPrice=cartAdd.item_Price;
    ;
    
    newCartItem.cartItemQty=this.addCartQty;
    newCartItem.cart_item_Img_Src=cartAdd. item_Img_Src;

    this.allServ.foodbox_addItem_toCart(newCartItem).subscribe(data=>{
      
      
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

  this.allServ.foodbox_delCartItem_byItemId(cartRemov.pId).subscribe(data=>{

    
    console.log(data);

  },errors=>{});



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
