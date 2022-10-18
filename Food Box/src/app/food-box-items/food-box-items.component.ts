import { Specials } from './../entity/specialItems/specials';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cart } from './../entity/carts/cart';
import { FoodBoxUserServiceService } from './../service/food-box-user-service.service';
import { Item } from './../entity/items/item';
import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodBoxServiceService } from '../service/food-box-service.service';
import {        CommonModule       } from '@angular/common';

@Component({
  selector: 'app-food-box-items',
  templateUrl: './food-box-items.component.html',
  styleUrls: ['./food-box-items.component.scss']
})
export class FoodBoxItemsComponent implements OnInit {

  constructor(private itemserv : FoodBoxServiceService,private route : Router, 
              private cart_serv:FoodBoxUserServiceService
    ) { }

    items_all :Item[];
    addItemQty =1;
    discount_form:FormGroup;
    activeSpecialItem = new Specials();

    



  ngOnInit() {

this.itemserv.foodbox_items().subscribe(data=>{

this.items_all=data;

if(this.items_all!=null){
  
  
  
}
else{
  console.log("No Results Found");
}
    


},error=>{
  console.log("Some Error Ocurred");
});



    this.discount_form = new FormGroup({

      discount: new FormControl('',[Validators.required, Validators.max(100),Validators.min(0)]),






    });


    this.itemserv.foodbox_all_specialItems().subscribe(data=>{},errors=>{});




  }



  delItem(items){

    return this.itemserv.foodbox_deleteItem(items.pId).subscribe(data=>{

    
      
      this.ngOnInit();
      
      


    },error=>{
    
      this.route.navigate(['addItem']);
      
      

    })


  }


  lowToHighSort(){


    
    this.items_all.sort(function(a, b) {  return a.item_Price - b.item_Price;});

    console.log(document.querySelector('#highToLow').classList);

    console.log(document.querySelector('#lowToHigh').classList);

  }



  highToLowSort(){
     

    
    console.log(document.querySelector('#highToLow').classList);

    console.log(document.querySelector('#lowToHigh').classList);
    this.items_all.sort(function(a, b) {  return b.item_Price - a.item_Price;});


  }
  categSortAsc(){

    console.log(this.items_all);

               this.items_all.sort((a,b) => a.itemCategory.localeCompare( <string>b.itemCategory));

            
  }



  categSortDesc(){

    this.items_all.sort((a,b) => b.itemCategory.localeCompare( <string>a.itemCategory));

  }



  addToCart(cartAdd){

    let newCartItem = new Cart();
    newCartItem.cardItemName=cartAdd.item_Name;
    newCartItem.itemId = cartAdd.pId;
    newCartItem.cartItemPrice=cartAdd.item_Price;
    
    newCartItem.cartItemQty=this.addItemQty ;
    newCartItem.cart_item_Img_Src=cartAdd.item_Img_Src;

    this.cart_serv.foodbox_addItem_toCart(newCartItem).subscribe(data=>{
      console.log("Added to Cart");
      

    },errors=>{

      console.log("Could Not Add to Cart");
    });

      


  }


  addSpecialtoActive(items){
    
    

          this.activeSpecialItem.itemId=items.pId;
          this.activeSpecialItem.itemName=items.item_Name;
          this.activeSpecialItem.itemCategory=items.itemCategory;
          this.activeSpecialItem.itemDesc=items.item_Desc;
          this.activeSpecialItem.itemPrice=items.item_Price;
          this.activeSpecialItem.itemImgSrc=items.item_Img_Src;
    
            

  }

  addSpecial(){
    
    

          this.activeSpecialItem.discount=this.discount_form.value.discount;


          this.ngOnInit();
    
     return this.itemserv.foodbox_addSpecialItem(this.activeSpecialItem).subscribe(data=>{

   
      if(data!=null){
         console.log("new special added");
         
        this.ngOnInit();
      }
      else
      console.log("Special Already Exists");
         this.discount_form.reset();

        },errors=>{


          console.log("Cannot Add Special");
        });
    
    
    
  }
  
  

}
