import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemCategory } from '../entity/category/category';
import { FoodBoxServiceService } from '../service/food-box-service.service';

@Component({
  selector: 'app-category-add-del',
  templateUrl: './category-add-del.component.html',
  styleUrls: ['./category-add-del.component.scss']
})
export class CategoryAddDelComponent implements OnInit {

  categ_form : FormGroup;
  delCateg_form:FormGroup;
  
  newCateg = new ItemCategory();
  categs : ItemCategory;
  delCateg =new ItemCategory();

  constructor(private categ_service:FoodBoxServiceService ) { }

  ngOnInit(): void {

    this.categ_service.foodbox_items_categ().subscribe(data=>{

      this.categs=data;
      
      if(this.categs!=null){
        
        
      }
      else{
        console.log("No Results Found");
      }
          
      
      
      },error=>{
        console.log("Some Error Ocurred shitheads");
      });





    
    this.categ_form = new FormGroup({

      categ : new FormControl('',Validators.required),

    });


    this.delCateg_form = new FormGroup({

      delcategory : new FormControl(''),

    });
    
  }



  categ_add(){
    if(this.categ_form.valid){

      this.newCateg.categName=this.categ_form.value.categ;


      return this.categ_service.foodbox_addCateg(this.newCateg).subscribe(data=>{

        //console.log("Categort Added");
        document.getElementById('addCategLoadStyle').style.display="block";
        setTimeout(() => {
          document.getElementById('addCategLoadStyle').style.display="none";
          
        }, 1000);

        setTimeout(() => {
          document.getElementById('addResponse').classList.add('active');
        
          
        }, 1500);
        
        setTimeout(() => {
          document.getElementById('addResponse').classList.remove('active');
          this.ngOnInit();
          
        }, 4000);
        
        //alert("Item Addition Successful !!");
        //this.route.navigate(['items']);

      },error=>{

        console.log("Item Could Not be Added");

      });
      

    }
  }



  delCategory(){

    this.delCateg.categName=this.delCateg_form.value.delcategory;
    
    

    return this.categ_service.foodbox_delCategByName(this.delCateg.categName).subscribe(data=>{

            //console.log(this.delCateg+" Deleted");

           
    


            document.getElementById('delCategLoadStyle').style.display="block";

            setTimeout(() => {
              document.getElementById('delCategLoadStyle').style.display="none";
              
            }, 1000);

            setTimeout(() => {
              document.getElementById('delResponse').classList.add('active');
              
            }, 1500);

            


            setTimeout(() => {
              document.getElementById('delResponse').classList.remove('active');
             this.ngOnInit();
             
            }, 5000);


    },errors=>{

console.log("Category Not Deleted or Not Found")
this.ngOnInit();

    });
    

  }
}

