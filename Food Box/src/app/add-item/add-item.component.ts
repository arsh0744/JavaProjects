import { Item } from './../entity/items/item';
import { FoodBoxServiceService } from './../service/food-box-service.service';
import { Component, OnInit } from '@angular/core';
import {   FormGroup,FormArray,FormControl,Validators,ReactiveFormsModule   } from '@angular/forms'
import { Router } from '@angular/router';
import { ItemCategory } from '../entity/category/category';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  newItemForm : FormGroup;
  i_categs : ItemCategory;


  
  constructor(private addItemServ : FoodBoxServiceService , private route : Router) { }


  newitem = new Item();
  selectedFile:File =null;

  ngOnInit(): void {


    this.newItemForm= new FormGroup({

      name : new FormControl('',Validators.required),
      category : new FormControl ('',Validators.required),
      desc : new FormControl(''),
      price: new FormControl('',Validators.required),
      img : new FormControl('',Validators.required)


    });

    this.addItemServ.foodbox_items_categ().subscribe(data=>{

      this.i_categs=data;
      
      if(this.i_categs!=null){
      
        
      }
      else{
        console.log("No Results Found");
      }
          
      
      
      },error=>{
        console.log("Some Error Ocurred");
      });




//-------------------------------Pop-Up-----------------------------------------------------------------------------





//-------------------------------Pop-Up-----------------------------------------------------------------------------



  }



  addItem(){

    if(this.newItemForm.valid){
      this.newitem.item_Name= this.newItemForm.value.name;
      this.newitem.itemCategory=this.newItemForm.value.category;
      this.newitem.item_Desc=this.newItemForm.value.desc;
      this.newitem.item_Price=this.newItemForm.value.price;
      this.newitem.item_Img_Src=this.newItemForm.value.img;
      
 

  //---------Image Upload----------------------------------------------------------------------------------

                  const file = new FormData();
                  file.append('file',this.selectedFile,this.selectedFile.name);
                  this.addItemServ.foodbox_image_upload(file).subscribe(data=>{

                    console.log(data);
              
                  },errors=>{
              
                    console.log("Some Error");
              
                  });
 //---------Image Upload----------------------------------------------------------------------------------                  
                  
      return this.addItemServ.foodbox_addItem(this.newitem).subscribe(data=>{
      
       console.log("Item Added");
      //   //alert("Item Addition Successful !!");
        this.route.navigate(['items']);

      },error=>{

        console.log("Item Could Not be Added");

       });
      
      
      

      

    }else
    console.log("error hai be");

  }


  onFileSelected(event){
    
    this.selectedFile=<File>event.target.files[0];
    this.newItemForm.get('img').setValue('/assets/images/'+this.selectedFile.name);
    
    // const file = new FormData();
    // file.append('file',this.selectedFile,this.selectedFile.name);
    
    // return this.addItemServ.foodbox_image_upload(file).subscribe(data=>{

      
    //   console.log(data);


    // },errors=>{

    //   console.log("Some Error");

    // });

  }



}
