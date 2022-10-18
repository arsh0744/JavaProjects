import { Router } from '@angular/router';
import { FoodBoxServiceService } from './../service/food-box-service.service';
import { Item } from './../entity/items/item';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { ItemCategory } from '../entity/category/category';
import { flatMap } from 'rxjs';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})



//let toggleBtn = document.querySelector('.toggleBtn') as HTMLElement ;
//let container = document.querySelector('.container');
//toggleBtn.onclick = function(){
// container.classList.toggle('active');
//}







export class UpdateItemComponent implements OnInit {
  

  constructor(private updateItemServ: FoodBoxServiceService, private route: Router) { }

  //-----------------------------------------Variables----------------------------------------------------------------------------
  updateItemForm : FormGroup;
  item_to_up = new Item();
  updateNot :any
  items_ret: Item;
  disForm=true;
  categs : ItemCategory;

  selectedUpdateFile:File =null;
  fileSelected=false;

  //-----------------------------------------Variables----------------------------------------------------------------------------

  ngOnInit() {

    this.updateItemForm = new FormGroup({

      id: new FormControl({value:''}, Validators.required),
      name: new FormControl(({value:'',disabled:this.disForm})),
      category: new FormControl(({value:'',disabled:this.disForm})),
      desc: new FormControl(({value:'',disabled:this.disForm})),
      price: new FormControl(({value:'',disabled:this.disForm})),
      img: new FormControl(({value:'',disabled:this.disForm}))
  
  
    });



    
  

    let toggleBtn = document.querySelector('.toggleBtn') as HTMLElement;
    let container = document.querySelector('.container');
    let loadstyle = document.querySelector('.loadstyle');

    toggleBtn.onclick = function () {
      container.classList.toggle('active');
      loadstyle.classList.remove('active');
    }


    this.updateItemServ.foodbox_items_categ().subscribe(data=>{

      this.categs=data;
      
      if(this.categs!=null){
        
        
      }
      else{
        console.log("No Results Found");
      }
          
      
      
      },error=>{
        console.log("Some Error Ocurred");
      });



    



  }




  updateItem() {

    if (this.updateItemForm.valid) {

     let up_id = this.updateItemForm.getRawValue().id;
     console.log(up_id);

    
//----------------------------------------------------------------------------------------------------
      if (this.updateItemForm.value.name != "")
              this.item_to_up.item_Name = this.updateItemForm.value.name;
      else
              this.item_to_up.item_Name=this.items_ret.item_Name;  
//---------------------------------------------------------------------------------------------------

        if (this.updateItemForm.value.category != "")
              this.item_to_up.itemCategory = this.updateItemForm.value.category;
        else
              this.item_to_up.itemCategory = this.items_ret.itemCategory;  
 //----------------------------------------------------------------------------------------------------             
          if(this.updateItemForm.value.desc != "")    
              this.item_to_up.item_Desc = this.updateItemForm.value.desc;
          else
          this.item_to_up.item_Desc=this.items_ret.item_Desc
//----------------------------------------------------------------------------------------------------
         if (this.updateItemForm.value.price != 0)
            this.item_to_up.item_Price = this.updateItemForm.value.price;
          else
              this.item_to_up.item_Price = this.items_ret.item_Price;
//----------------------------------------------------------------------------------------------------
        if (this.updateItemForm.value.img != "")
            this.item_to_up.item_Img_Src = this.updateItemForm.value.img;
        else
            this.item_to_up.item_Img_Src= this.items_ret.item_Img_Src;
//----------------------------------------------------------------------------------------------------

 //---------Image Upload----------------------------------------------------------------------------------
if(this.selectedUpdateFile!=null){
 const file = new FormData();
 file.append('file',this.selectedUpdateFile,this.selectedUpdateFile.name);
 this.updateItemServ.foodbox_image_upload(file).subscribe(data=>{

   console.log(data);

 },errors=>{

   console.log("Some Error");

 });
}
//---------Image Upload----------------------------------------------------------------------------------    






      return this.updateItemServ.foodbox_updateItem(this.item_to_up, up_id).subscribe(data => {


        this.updateNot = true;
        let loadstyle = document.querySelector('.loadstyle');
        loadstyle.classList.add('active');
        setTimeout(() => {
          loadstyle.classList.remove('active');

        }, 1500);

       

        setTimeout(() => { this.route.navigate(['items']); }, 3000);

       

      }, error => {


      })





    }

  }


  getPro(){


    let up_id = this.updateItemForm.value.id;

    this.updateItemServ.foodbox_items_Id(up_id).subscribe(data => {



      this.items_ret = data;

      if (this.items_ret != null ) {
        
        document.getElementById('submit').style.display='block';
        document.getElementById('getpro').style.display='none';
        document.getElementById('cancel').style.display='block';
        document.getElementById('cancel').style.display='block';
        this.fileSelected=true;
       
        this.updateNot=null;
        this.updateItemForm.get('id').disable();

        this.updateItemForm.get('category').enable();
        this.updateItemForm.get('category').setValue(this.items_ret.itemCategory);

        this.updateItemForm.get('desc').enable();
        this.updateItemForm.get('desc').setValue(this.items_ret.item_Desc);

        this.updateItemForm.get('name').enable();
        this.updateItemForm.get('name').setValue(this.items_ret.item_Name);

        this.updateItemForm.get('price').enable();
        this.updateItemForm.get('price').setValue(this.items_ret.item_Price);

        this.updateItemForm.get('img').enable();
        this.updateItemForm.get('img').setValue(this.items_ret.item_Img_Src);

        
        
        

      }
      else {
       

        let loadstyle = document.querySelector('.loadstyle');
        loadstyle.classList.add('active');
        setTimeout(() => {
          loadstyle.classList.remove('active');

        }, 1500);
        setTimeout(() => {
          let container = document.querySelector('.container');
          container.classList.add('active');
        }, 2000);
        setTimeout(() => {
          let container = document.querySelector('.container');
          container.classList.remove('active');
        }, 5000);


      }



    }, error => {
      console.log("Some Error Ocurred");







    });





    


  }

  reset(){
    this.updateItemForm.reset();
    document.getElementById('submit').style.display='none';
        document.getElementById('getpro').style.display='block';
        document.getElementById('cancel').style.display='none';

        this.updateItemForm.get('id').enable();
        this.updateItemForm.get('category').disable();
        this.updateItemForm.get('desc').disable();
        this.updateItemForm.get('name').disable();
        this.updateItemForm.get('price').disable();
        this.updateItemForm.get('img').disable();
        this.updateItemForm.get('id').setValue("");
        this.fileSelected=false;

  }

  onFileSelected(event){
    
    this.selectedUpdateFile=<File>event.target.files[0];
    this.updateItemForm.get('img').setValue('/assets/images/'+this.selectedUpdateFile.name);


  }



}
