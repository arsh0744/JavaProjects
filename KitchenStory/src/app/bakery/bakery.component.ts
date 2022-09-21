import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  products_cake = [
    {
      product_id: 15,
      card_id: "cake_card",
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
      product_id: 16,
      card_id: "cake_card",
      img: "/assets/images/vancake.jpg",
      header: "Featured",
      title: "Vanilla Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 400,
      disp_id: "cake2_d",
      minus_id: "cake2_m",
      plus_id: "cake2_p",
      add_btn_id: "cake2_b"

    },
    {
      product_id: 17,
      card_id: "cake_card",
      img: "/assets/images/butcake.jpg",
      header: "Featured",
      title: "Butterscotch Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 500,
      disp_id: "cake3_d",
      minus_id: "cake3_m",
      plus_id: "cake3_p",
      add_btn_id: "cake3_b"

    },
    {
      product_id: 18,
      card_id: "cake_card",
      img: "/assets/images/strawcake.jpg",
      header: "Featured",
      title: "Strawberry Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 350,
      disp_id: "cake4_d",
      minus_id: "cake4_m",
      plus_id: "cake4_p",
      add_btn_id: "cake4_b"

    }
    
  ]

  products_bake = [
    {
      product_id: 19,
      card_id: "bake_card",
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
    
  ]

 


  bak_page_cat = [
    {
      sec_id: "Cakes",
      link_id: "bak_li1",
      cards_array_id : this.products_cake,
      class : "nav-link active"
    },
    {
      sec_id: "Bakery",
      link_id: "bak_li2",
      cards_array_id : this.products_bake,
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

  bak_activeSeg = [
    {
      product_id: 15,
      card_id: "cake_card",
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
      product_id: 16,
      card_id: "cake_card",
      img: "/assets/images/vancake.jpg",
      header: "Featured",
      title: "Vanilla Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 400,
      disp_id: "cake2_d",
      minus_id: "cake2_m",
      plus_id: "cake2_p",
      add_btn_id: "cake2_b"

    },
    {
      product_id: 17,
      card_id: "cake_card",
      img: "/assets/images/butcake.jpg",
      header: "Featured",
      title: "Butterscotch Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 500,
      disp_id: "cake3_d",
      minus_id: "cake3_m",
      plus_id: "cake3_p",
      add_btn_id: "cake3_b"

    },
    {
      product_id: 18,
      card_id: "cake_card",
      img: "/assets/images/strawcake.jpg",
      header: "Featured",
      title: "Strawberry Cake ",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 350,
      disp_id: "cake4_d",
      minus_id: "cake4_m",
      plus_id: "cake4_p",
      add_btn_id: "cake4_b"

    }
    
  ];


  dispProducts(list_items) {
    var x = document.getElementById(list_items.link_id);
    x.className += ' active';
    for (let i = 0; i < this.bak_page_cat.length; i++) {
      var temp = document.getElementById(this.bak_page_cat[i].link_id);
      if (temp != x)
        temp.className = temp.className.replace("active", "");
    }
    if (this.bak_activeSeg.length!=0){
     this.bak_activeSeg=[];
     this.bak_activeSeg=this.bak_activeSeg.concat(list_items.cards_array_id);
     console.log(this.bak_activeSeg);
    }
    else
    this.bak_activeSeg=this.bak_activeSeg.concat(list_items.cards_array_id);
 
    
     





  }























}
