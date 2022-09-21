import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks-segment',
  templateUrl: './snacks-segment.component.html',
  styleUrls: ['./snacks-segment.component.scss']
})
export class SnacksSegmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  products_biscuits = [
    {
      product_id: 20,
      card_id: "biscuits_card",
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

    },
    {
      product_id: 21,
      card_id: "biscuit_card",
      img: "/assets/images/cookie.jpg",
      header: "Featured",
      title: "Cookies",
      card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
      prod_qty: 0,
      prod_price: 150,
      disp_id: "bis2_d",
      minus_id: "bis2_m",
      plus_id: "bis2_p",
      add_btn_id: "bis2_b"


    },
    {
      product_id: 22,
      card_id: "biscuit_card",
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


    }
  ]

  products_chips = [
    {
      product_id: 23,
      card_id: "chips_card",
      img: "/assets/images/bchips.jpg",
      header: "Featured",
      title: "Banana Chips",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 120,
      disp_id: "chip1_d",
      minus_id: "chip1_m",
      plus_id: "chip1_p",
      add_btn_id: "chip1_b1"


    },
    {
      product_id: 24,
      card_id: "chips_card",
      img: "/assets/images/pringles.jpg",
      header: "Featured",
      title: "Pringles",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 100,
      disp_id: "chip2_d",
      minus_id: "chip2_m",
      plus_id: "chip2_p",
      add_btn_id: "chip2_b1"


    }
    
  ]



  snack_page_cat = [
    {
      sec_id: "Biscuits",
      link_id: "s_li1",
      cards_array_id : this.products_biscuits,
      class : "nav-link active"
    },
    {
      sec_id: "Chips",
      link_id: "s_li2",
      cards_array_id : this.products_chips,
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

  snack_activeSeg = [


    {
      product_id: 20,
      card_id: "biscuits_card",
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

    },
    {
      product_id: 21,
      card_id: "biscuit_card",
      img: "/assets/images/cookie.jpg",
      header: "Featured",
      title: "Cookies",
      card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
      prod_qty: 0,
      prod_price: 150,
      disp_id: "bis2_d",
      minus_id: "bis2_m",
      plus_id: "bis2_p",
      add_btn_id: "bis2_b"


    },
    {
      product_id: 22,
      card_id: "biscuit_card",
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


    }
    
  ];


  dispProducts(list_items) {
    var x = document.getElementById(list_items.link_id);
    x.className += ' active';
    for (let i = 0; i < this.snack_page_cat.length; i++) {
      var temp = document.getElementById(this.snack_page_cat[i].link_id);
      if (temp != x)
        temp.className = temp.className.replace("active", "");
    }
    if (this.snack_activeSeg.length!=0){
     this.snack_activeSeg=[];
     this.snack_activeSeg=this.snack_activeSeg.concat(list_items.cards_array_id);
     console.log(this.snack_activeSeg);
    }
    else
    this.snack_activeSeg=this.snack_activeSeg.concat(list_items.cards_array_id);
 
    
     





  }























}
