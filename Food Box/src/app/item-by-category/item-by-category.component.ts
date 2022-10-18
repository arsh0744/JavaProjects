import { FoodBoxServiceService } from './../service/food-box-service.service';
import { ItemCategory } from './../entity/category/category';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Item } from '../entity/items/item';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';


@Component({
  selector: 'app-item-by-category',
  templateUrl: './item-by-category.component.html',
  styleUrls: ['./item-by-category.component.scss']
})
export class ItemByCategoryComponent implements OnInit {

  constructor(private itemByCat_serv : FoodBoxServiceService) { }

  itemByCateg_form :FormGroup;
  ibyc_categs :ItemCategory;
  itemCardsByCateg : Item[];

  ngOnInit(): void {

this.itemByCateg_form = new FormGroup({


  itembycategory: new FormControl(''),

});

this.itemByCat_serv.foodbox_items_categ().subscribe(data=>{

  this.ibyc_categs=data;

  if(this.ibyc_categs!=null){


  }
  else{
    console.log("No Results Found");
  }



  },error=>{
    console.log("Some Error Ocurred");
  });







  }


  findItemsByCateg(categname:String){

    return this.itemByCat_serv.foodbox_item_by_categ(categname).subscribe(data=>{

      this.itemCardsByCateg=null;


      if(data!=null){
      this.itemCardsByCateg=data;
      console.log(this.itemCardsByCateg);
      document.getElementById('noitems').style.display="none";




      }
      else{
      console.log("No Items Found for the Category");
      document.getElementById('noitems').style.display="block";
      }

      setTimeout(() => {
         document.getElementById('noitems').style.display="none";


      }, 2000);


    },error=>{


      console.log("Some Error Occured");

    });





  }



  lowToHighSort(){


    document.querySelector('#lowToHigh').classList.add('selec');
    document.querySelector('#highToLow').classList.remove('selec');
    this.itemCardsByCateg.sort(function(a, b) {  return a.item_Price - b.item_Price;});

  }



  highToLowSort(){


    document.querySelector('#highToLow').classList.add('selec');

    document.querySelector('#lowToHigh').classList.remove('selec');

    this.itemCardsByCateg.sort(function(a, b) {  return b.item_Price - a.item_Price;});


  }

}
