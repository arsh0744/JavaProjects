import { Router } from '@angular/router';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { FoodBoxUserServiceService } from '../service/food-box-user-service.service';
import { Cart } from '../entity/carts/cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewInit {

  constructor(private data_serv:DataServiceService, private route :Router,private cartServ:FoodBoxUserServiceService) { }
  


  newName: string;
  haiUser:boolean=false;
  haiAdmin:boolean=false;
  cartSize:number=0;
  cartItems : Cart[];
  call:any;
  

  ngOnInit(): void {

    

    
    
    this.data_serv.name.subscribe(data=>{
      this.newName = data;
      
    });
    this.data_serv.usera.subscribe(data=>{
      this.haiUser=data;
     
    });
    this.data_serv.admina.subscribe(data=>{

        this.haiAdmin=data;


    });


  

  }

  

  ngAfterViewInit(): void {

    
    //console.log("on view init  admina is" +this.haiAdmin);
    
    
    this.data_serv.name.subscribe(data=>{
      this.newName = data;
      
    });
    this.data_serv.usera.subscribe(data=>{
      this.haiUser=data;
     
    });
    this.data_serv.admina.subscribe(data=>{

        this.haiAdmin=data;
       // console.log("event fired after view init"+this.haiAdmin);

    });

    



   
  }



  fetchCart(){

    this.cartServ.foodbox_cart_items().subscribe(data=>{
        if(data!=null){

          this.cartItems=data;
       this.cartSize=this.cartItems.length;

        }
        else
        this.cartSize=0;
      

    },errors=>{});


  }

  


  logoutUser(){

    


    setTimeout(() => {
      this.haiUser=false;
    this.data_serv.userLogging(this.haiUser);
    }, 2000);
    
    

    setTimeout(() => {
      this.route.navigate(['home']);
     }, 2500);
    


  }

   id = setInterval(() => {
    this.fetchCart()
}, 1000);


 

  
  

}
