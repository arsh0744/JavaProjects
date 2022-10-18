import { DataServiceService } from './../service/data-service.service';
import { ItemCategory } from './../entity/category/category';
import { FoodBoxServiceService } from './../service/food-box-service.service';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginSignupComponent } from './../login-signup/login-signup.component';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {


  constructor(   private route : Router  ,private admin_serv:FoodBoxServiceService ,private dataServ : DataServiceService) { }





  ngOnInit(): void {

  }



  logout(){


    this.dataServ.adminLogging(false);

        this.route.navigate(['login_signup']);


  }

}
