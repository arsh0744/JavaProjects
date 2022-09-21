import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-coffee-segment',
  templateUrl: './tea-coffee-segment.component.html',
  styleUrls: ['./tea-coffee-segment.component.scss']
})
export class TeaCoffeeSegmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  products_tea = [
    {
      product_id: 10,
      card_id: "tea_card",
      img: "/assets/images/tea.jpg",
      header: "Featured",
      title: "Gourmet Black Tea",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 100,
      disp_id: "t1_d",
      minus_id: "t1_m",
      plus_id: "t1_p",
      add_btn_id: "t1_b1"

    }
  
  ]

  products_coffee = [
    {
      product_id: 11,
      card_id: "coffee_card",
      img: "/assets/images/coffee.jpg",
      header: "Featured",
      title: "Bourbon Coffee Beans",
      card_text: "Small, Egg-Shaped, and sharply sweet with mellow Tropical Flavours and intense Aroma",
      prod_qty: 0,
      prod_price: 400,
      disp_id: "co1_d",
      minus_id: "co1_m",
      plus_id: "co1_p",
      add_btn_id: "co1_b1"


    }
  ]

  products_beverages=[
{
  product_id: 12,
  card_id: "beverages_card",
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
  product_id: 13,
  card_id: "beverages_card",
  img: "/assets/images/juice.jpg",
  header: "Featured",
  title: "Orange Juice",
  card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
  prod_qty: 0,
  prod_price: 90,
  disp_id: "bev2_d",
  minus_id: "bev2_m",
  plus_id: "bev2_p",
  add_btn_id: "bev2_b1"

},
{
  product_id: 14,
  card_id: "beverages_card",
  img: "/assets/images/milk.jpg",
  header: "Featured",
  title: "Milk",
  card_text: "Unique Sweet-Sour Flavour and has an aroma that is Matchless",
  prod_qty: 0,
  prod_price: 25,
  disp_id: "bev3_d",
  minus_id: "bev3_m",
  plus_id: "bev3_p",
  add_btn_id: "bev3_b1"

}
    

  ]


  t_page_cat = [
    {
      sec_id: "Tea",
      link_id: "t_li1",
      cards_array_id : this.products_tea,
      class : "nav-link active"
    },
    {
      sec_id: "Coffee",
      link_id: "t_li2",
      cards_array_id : this.products_coffee,
      class : "nav-link "
    },
    {
      sec_id: "Beverages",
      link_id: "li3",
      cards_array_id : this.products_beverages,
      class : "nav-link "
    }

  ]


  






  inc_fun(tea_cards) {

    if (tea_cards.prod_qty == 0) {

      tea_cards.prod_qty += 1;

      document.getElementById(tea_cards.add_btn_id).style.display = "none";
      document.getElementById(tea_cards.minus_id).style.display = "block";
      document.getElementById(tea_cards.plus_id).style.display = "block";
      document.getElementById(tea_cards.disp_id).style.display = "block";
      
    }
    else if (tea_cards.prod_qty > 0) {
      tea_cards.prod_qty += 1;
      document.getElementById(tea_cards.add_btn_id).style.display = "none";
      document.getElementById(tea_cards.minus_id).style.display = "block";
      document.getElementById(tea_cards.plus_id).style.display = "block";
      document.getElementById(tea_cards.disp_id).style.display = "block";
         console.log("abhi bhi chal raha ");
    }
    else{
      
      return
    }
      



  }


  dec_counter(tea_cards) {

    if (tea_cards.prod_qty > 1) {
      tea_cards.prod_qty -= 1;

    }

    else if (tea_cards.prod_qty == 1) {
      tea_cards.prod_qty -= 1;
      document.getElementById(tea_cards.add_btn_id).style.display = "block";
      document.getElementById(tea_cards.minus_id).style.display = "none";
      document.getElementById(tea_cards.plus_id).style.display = "none";
      document.getElementById(tea_cards.disp_id).style.display = "none";

    }



  }

  t_activeSeg = [

    {
      product_id: 10,
      card_id: "tea_card",
      img: "/assets/images/tea.jpg",
      header: "Featured",
      title: "Gourmet Black Tea",
      card_text: "Blush Red and Rmooth skinned apples which are superior in terms of Quality and Taste",
      prod_qty: 0,
      prod_price: 100,
      disp_id: "t1_d",
      minus_id: "t1_m",
      plus_id: "t1_p",
      add_btn_id: "t1_b1"

    }
  
  ];


  dispProducts(list_items) {
    var x = document.getElementById(list_items.link_id);
    x.className += ' active';
    for (let i = 0; i < this.t_page_cat.length; i++) {
      var temp = document.getElementById(this.t_page_cat[i].link_id);
      if (temp != x)
        temp.className = temp.className.replace("active", "");
    }
    if (this.t_activeSeg.length!=0){
     this.t_activeSeg=[];
     this.t_activeSeg=this.t_activeSeg.concat(list_items.cards_array_id);
     console.log(this.t_activeSeg);
    }
    else
    this.t_activeSeg=this.t_activeSeg.concat(list_items.cards_array_id);
 
    
     





  }
























}
