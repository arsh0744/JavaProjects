import { MenuComponent } from './../menu/menu.component';
import { AppComponent } from './../app.component';
import { HomeComponent } from './../home/home.component';
import { FoodboxCartComponent } from './../foodbox-cart/foodbox-cart.component';
import { LoginSignupComponent } from './../login-signup/login-signup.component';
import { UpdateItemComponent } from './../update-item/update-item.component';
import { AddItemComponent } from './../add-item/add-item.component';
import { FoodBoxItemsComponent } from './../food-box-items/food-box-items.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AllItemsComponent } from '../all-items/all-items.component';

const foodboxroutes : Routes =[
{
  path:'items', component:FoodBoxItemsComponent
},
  {
    path:'addItem', component: AddItemComponent
  },
  {
    path:'updItem',component: UpdateItemComponent
  },
  {
    path:'login_signup',component:LoginSignupComponent
  },
  {
    path:'admin',component: AdminDashboardComponent
  },
  {
    path:'cart',component:FoodboxCartComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'main', component:AppComponent
  },
  {
    path: 'allItems', component:AllItemsComponent
  },
  {
    path:'menu',component:MenuComponent
  }


]

@NgModule({

  imports: [ RouterModule.forRoot(foodboxroutes) ],
  exports: [ RouterModule ]

})
export class FoodBoxRoutesModule { }
