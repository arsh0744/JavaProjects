import { FoodBoxUserServiceService } from './../service/food-box-user-service.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../entity/items/item';
import { Specials } from '../entity/specialItems/specials';
import { FoodBoxServiceService } from '../service/food-box-service.service';
import { Cart } from '../entity/carts/cart';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  constructor(private menu_serv:FoodBoxServiceService, private allServ:FoodBoxUserServiceService) { }

  full_menu :Item[];
  addItemQty =1;
    activeSpecialItem = new Specials();
    addCartQty =1;

  ngOnInit() {

    this.menu_serv.foodbox_items().subscribe(data=>{

    this.full_menu=data;

    if(this.full_menu!=null){

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



    this.full_menu.sort(function(a, b) {  return a.item_Price - b.item_Price;});

    console.log(document.querySelector('#highToLow').classList);

    console.log(document.querySelector('#lowToHigh').classList);

  }



  highToLowSort(){



    console.log(document.querySelector('#highToLow').classList);

    console.log(document.querySelector('#lowToHigh').classList);
    this.full_menu.sort(function(a, b) {  return b.item_Price - a.item_Price;});


  }
  categSortAsc(){

    console.log(this.full_menu);

               this.full_menu.sort((a,b) => a.itemCategory.localeCompare( <string>b.itemCategory));


  }

  categSortDesc(){

    this.full_menu.sort((a,b) => b.itemCategory.localeCompare( <string>a.itemCategory));

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
