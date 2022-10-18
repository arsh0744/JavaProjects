import { Cart } from './../entity/carts/cart';
import { FoodBoxUserServiceService } from './../service/food-box-user-service.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-foodbox-cart',
  templateUrl: './foodbox-cart.component.html',
  styleUrls: ['./foodbox-cart.component.scss']
})
export class FoodboxCartComponent implements OnInit,OnChanges {

  constructor(private cart_serv:FoodBoxUserServiceService) { }
  
 

  all_cart_items :Cart[];
  cartsize : number=0;
  qtyUpdateOperation: String="";
  shipping=0;

  @Input() totalCartPrice:number=0;


  ngOnInit(): void {


          this.cart_serv.foodbox_cart_items().subscribe(data=>{
            

            this.all_cart_items=data;
            if(data!=null){
              this.cartsize=this.all_cart_items.length;
              this.totalCartPrice=0;
              for(let i=0;i<this.all_cart_items.length;i++){
                
                
                this.totalCartPrice=this.totalCartPrice+(this.all_cart_items[i].cartItemPrice*this.all_cart_items[i].cartItemQty);

              }
              
             
              }
            
            else{
            this.cartsize=0;
            this.totalCartPrice=0;
            }      
            
          },errors=>{

            console.log("Cart Items Not Fetched");

          });


  }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

            
  
  

  delItemFromCart(items){
    
   this.cart_serv.foodbox_delCartItem(items.cartId).subscribe(data=>{
     

        console.log("Item Deleted");
        this.ngOnInit();


   },errors=>{
    


    console.log("Item Not Deleted");  

   });

  }


  qtyUpdate(itemToUp,operationNumber:number){

    this.ngOnInit();
    
    this.cart_serv.foodbox_cart_qty_update(itemToUp,operationNumber).subscribe(data=>{
  
     
      this.ngOnInit();
  
  
    },errors=>{
  
  console.log("Error Updating")
  
    });
    
  
  
  }

}
