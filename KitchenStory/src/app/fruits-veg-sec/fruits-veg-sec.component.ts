import { SideNavComponent } from './../side-nav/side-nav.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-veg-sec',
  templateUrl: './fruits-veg-sec.component.html',
  styleUrls: ['./fruits-veg-sec.component.scss']
})
export class FruitsVegSecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  products_fruits = [
    {
      product_id: 1,
      card_id: "fruit_card",
      img: "/assets/images/apples.jpg",
      header: "Featured",
      title: "Kashmir Apples",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 60,
      disp_id: "c1_d",
      minus_id: "c1_m",
      plus_id: "c1_p",
      add_btn_id: "c1_b1"

    },
    {
      product_id: 2,
      card_id: "fruit_card",
      img: "/assets/images/oranges.jpg",
      header: "Featured",
      title: "Nagpur Oranges",
      card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
      prod_qty: 0,
      prod_price: 80,
      disp_id: "c2_d",
      minus_id: "c2_m",
      plus_id: "c2_p",
      add_btn_id: "c2_b1"


    },
    {
      product_id: 3,
      card_id: "fruit_card",
      img: "/assets/images/mango.jpg",
      header: "Featured",
      title: "Alphonso Mango",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 75,
      disp_id: "c3_d",
      minus_id: "c3_m",
      plus_id: "c3_p",
      add_btn_id: "c3_b1"


    }
  ]

  products_veg = [
    {
      product_id: 7,
      card_id: "veg_card",
      img: "/assets/images/bellpeper.jpg",
      header: "Featured",
      title: "Bellpepper",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 40,
      disp_id: "v1_d",
      minus_id: "v1_m",
      plus_id: "v1_p",
      add_btn_id: "v1_b1"


    },
    {
      product_id: 8,
      card_id: "veg_card",
      img: "/assets/images/tomato.jpg",
      header: "Featured",
      title: "Tomato",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 50,
      disp_id: "v2_d",
      minus_id: "v2_m",
      plus_id: "v2_p",
      add_btn_id: "v2_b1"


    }

  ]

  products_exotic=[
{
  product_id: 9,
  card_id: "exotic_card",
  img: "/assets/images/dragon.jpg",
  header: "Featured",
  title: "Dragon Fruit",
  card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
  prod_qty: 0,
  prod_price: 500,
  disp_id: "e1_d",
  minus_id: "e1_m",
  plus_id: "e1_p",
  add_btn_id: "e1_b1"

}
    

  ]


  f_page_cat = [
    {
      sec_id: "Fruits",
      link_id: "li1",
      cards_array_id : this.products_fruits,
      class : "nav-link active"
    },
    {
      sec_id: "Vegetables",
      link_id: "li2",
      cards_array_id : this.products_veg,
      class : "nav-link "
    },
    {
      sec_id: "Exotics",
      link_id: "li3",
      cards_array_id : this.products_exotic,
      class : "nav-link "
    }

  ]


  






  inc_fun(explore_cards) {

    if (explore_cards.prod_qty == 0) {

      explore_cards.prod_qty += 1;

      document.getElementById(explore_cards.add_btn_id).style.display = "none";
      document.getElementById(explore_cards.minus_id).style.display = "block";
      document.getElementById(explore_cards.plus_id).style.display = "block";
      document.getElementById(explore_cards.disp_id).style.display = "block";
      
    }
    else if (explore_cards.prod_qty > 0) {
      explore_cards.prod_qty += 1;
      document.getElementById(explore_cards.add_btn_id).style.display = "none";
      document.getElementById(explore_cards.minus_id).style.display = "block";
      document.getElementById(explore_cards.plus_id).style.display = "block";
      document.getElementById(explore_cards.disp_id).style.display = "block";
         console.log("abhi bhi chal raha ");
    }
    else{
      
      return
    }
      



  }


  dec_counter(explore_cards) {

    if (explore_cards.prod_qty > 1) {
      explore_cards.prod_qty -= 1;

    }

    else if (explore_cards.prod_qty == 1) {
      explore_cards.prod_qty -= 1;
      document.getElementById(explore_cards.add_btn_id).style.display = "block";
      document.getElementById(explore_cards.minus_id).style.display = "none";
      document.getElementById(explore_cards.plus_id).style.display = "none";
      document.getElementById(explore_cards.disp_id).style.display = "none";

    }



  }

  activeSeg = [
    {
      product_id: 1,
      card_id: "fruit_card",
      img: "/assets/images/apples.jpg",
      header: "Featured",
      title: "Kashmir Apples",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 60,
      disp_id: "c1_d",
      minus_id: "c1_m",
      plus_id: "c1_p",
      add_btn_id: "c1_b1"

    },
    {
      product_id: 2,
      card_id: "fruit_card",
      img: "/assets/images/oranges.jpg",
      header: "Featured",
      title: "Nagpur Oranges",
      card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
      prod_qty: 0,
      prod_price: 80,
      disp_id: "c2_d",
      minus_id: "c2_m",
      plus_id: "c2_p",
      add_btn_id: "c2_b1"


    },
    {
      product_id: 3,
      card_id: "fruit_card",
      img: "/assets/images/mango.jpg",
      header: "Featured",
      title: "Alphonso Mango",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 75,
      disp_id: "c3_d",
      minus_id: "c3_m",
      plus_id: "c3_p",
      add_btn_id: "c3_b1"


    }
  ];


  dispProducts(list_items) {
    var x = document.getElementById(list_items.link_id);
    x.className += ' active';
    for (let i = 0; i < this.f_page_cat.length; i++) {
      var temp = document.getElementById(this.f_page_cat[i].link_id);
      if (temp != x)
        temp.className = temp.className.replace("active", "");
    }
    if (this.activeSeg.length!=0){
     this.activeSeg=[];
     this.activeSeg=this.activeSeg.concat(list_items.cards_array_id);
     console.log(this.activeSeg);
    }
    else
    this.activeSeg=this.activeSeg.concat(list_items.cards_array_id);
 
    
     





  }

}

