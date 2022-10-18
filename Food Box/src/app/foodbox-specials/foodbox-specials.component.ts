import { Specials } from './../entity/specialItems/specials';
import { FoodBoxServiceService } from './../service/food-box-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foodbox-specials',
  templateUrl: './foodbox-specials.component.html',
  styleUrls: ['./foodbox-specials.component.scss']
})
export class FoodboxSpecialsComponent implements OnInit,OnChanges {

  constructor(private specials_serv:FoodBoxServiceService) { }
  

  allSpecialItems : Specials[];

  ngOnInit(): void {
    

    this.specials_serv.foodbox_all_specialItems().subscribe(data=>{
      
this.allSpecialItems=data;


    },errors=>{


      console.log("Error Connecting");
    });

    

  }
  ngOnChanges(changes: SimpleChanges): void {
        this.ngOnInit;
  }
 


  
  



  delSpecialItem(special_item){
    console.log(special_item.specialId);

    this.specials_serv.foodbox_delete_specialItem(special_item.specialId).subscribe(data=>{

      this.ngOnInit();
      console.log("Special Deleted");


    },errors=>{


      console.log("Some Error");
    });

  }

}
