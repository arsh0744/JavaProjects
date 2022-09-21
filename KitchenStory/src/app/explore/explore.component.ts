import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';









@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor() { }











  ngOnInit(): void {
  }


products_explore = [
           
            { 
              product_id :2 ,
              card_id : "r1c1",
              img : "/assets/images/oranges.jpg",
              header : "Featured",
              title : "Nagpur Oranges",
              card_text :"Pulpy and Brighy : Unique Sweet-Sour Flavour and has an aroma that is Matchless",
              prod_qty : 0,
              prod_price :80,
              disp_id :"r1c2_d",
              minus_id :"r1c2_m",
              plus_id :"r1c2_p",
              add_btn_id: "r1c2_b1"


            },
            {
              product_id: 12,
              card_id: "explore_card",
              img: "/assets/images/coca.jpg",
              header: "Featured",
              title: "Coca-Cola",
              card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
              prod_qty: 0,
              prod_price: 50,
              disp_id: "bev1_d",
              minus_id: "bev1_m",
              plus_id: "bev1_p",
              add_btn_id: "bev1_b1"
            
            },
            {
              product_id: 22,
              card_id: "explore_card",
              img: "/assets/images/bun.jpg",
              header: "Featured",
              title: "Bean Bun",
              card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
              prod_qty: 0,
              prod_price: 450,
              disp_id: "bis3_d",
              minus_id: "bis3_m",
              plus_id: "bis3_p",
              add_btn_id: "bis3_b1"
        
        
            },
            {
              product_id: 15,
              card_id: "explore_card",
              img: "/assets/images/choccake.jpg",
              header: "Featured",
              title: "Chocolate Cake ",
              card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
              prod_qty: 0,
              prod_price: 600,
              disp_id: "cake1_d",
              minus_id: "cake1_m",
              plus_id: "cake1_p",
              add_btn_id: "cake1_b1"
        
            },
            {
              product_id: 19,
              card_id: "explore_card",
              img: "/assets/images/bread.jpg",
              header: "Featured",
              title: "Bread",
              card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
              prod_qty: 0,
              prod_price: 40,
              disp_id: "v1_d",
              minus_id: "v1_m",
              plus_id: "v1_p",
              add_btn_id: "v1_b1"
        
        
            },
            {
              product_id: 20,
              card_id: "explore_card",
              img: "/assets/images/oreo.jpg",
              header: "Featured",
              title: "Oreo-s",
              card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
              prod_qty: 0,
              prod_price: 250,
              disp_id: "bis1_d",
              minus_id: "bis1_m",
              plus_id: "bis1_p",
              add_btn_id: "bis1_b"
        
            }




];



add_fun(explore_cards){
  if(explore_cards.prod_qty==0){
    
    explore_cards.prod_qty +=1 ;
    
    document.getElementById(explore_cards.add_btn_id).style.display="none";
    document.getElementById(explore_cards.minus_id).style.display="block";
    document.getElementById(explore_cards.plus_id).style.display="block";
    document.getElementById(explore_cards.disp_id).style.display="block";

      for(let i=0;i<explore_cards.length;i++){
        if (explore_cards.product_id == this.products_explore[i].product_id){
          this.products_explore[i].prod_qty +=1;
        }
        else
        return;
      }


    
  }
  else if (explore_cards.prod_qty>0){
  explore_cards.prod_qty +=1 ;
  document.getElementById(explore_cards.add_btn_id).style.display="none";
    document.getElementById(explore_cards.minus_id).style.display="block";
    document.getElementById(explore_cards.plus_id).style.display="block";
    document.getElementById(explore_cards.disp_id).style.display="block";
  }
  else
  return
 


}




inc_fun(explore_cards){
  
  if(explore_cards.prod_qty==0){
    
    explore_cards.prod_qty +=1 ;
    
    document.getElementById(explore_cards.add_btn_id).style.display="none";
    document.getElementById(explore_cards.minus_id).style.display="block";
    document.getElementById(explore_cards.plus_id).style.display="block";
    document.getElementById(explore_cards.disp_id).style.display="block";
  }
  else if (explore_cards.prod_qty>0){
  explore_cards.prod_qty +=1 ;
  document.getElementById(explore_cards.add_btn_id).style.display="none";
    document.getElementById(explore_cards.minus_id).style.display="block";
    document.getElementById(explore_cards.plus_id).style.display="block";
    document.getElementById(explore_cards.disp_id).style.display="block";
  }
  else
  return
 


}


dec_counter(explore_cards){

  if(explore_cards.prod_qty>1){
    explore_cards.prod_qty -=1 ;

  }
 
  else if(explore_cards.prod_qty==1){
    explore_cards.prod_qty -=1 ;
    document.getElementById(explore_cards.add_btn_id).style.display="block";
    document.getElementById(explore_cards.minus_id).style.display="none";
    document.getElementById(explore_cards.plus_id).style.display="none";
    document.getElementById(explore_cards.disp_id).style.display="none";
  }



}


}
imports: [
  BrowserAnimationsModule

]