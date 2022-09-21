import { HomeComponent } from './../home/home.component';
import { SnacksSegmentComponent } from './../snacks-segment/snacks-segment.component';
import { BakeryComponent } from './../bakery/bakery.component';
import { TeaCoffeeSegmentComponent } from './../tea-coffee-segment/tea-coffee-segment.component';
import { CartComponent } from './../cart/cart.component';
import { LoginSignupComponent } from './../login-signup/login-signup.component';
import { FruitsVegSecComponent } from './../fruits-veg-sec/fruits-veg-sec.component';
import { AppComponent } from './../app.component';
import { SampleComponent } from './../sample/sample.component';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [

  { path: 'sample', component: SampleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fruits_veg_sec', component: FruitsVegSecComponent },
  { path: 'login_signup' ,  component: LoginSignupComponent  },
  { path: 'shop_cart' ,  component: CartComponent         },
  { path: 'bakery', component: BakeryComponent          },
  { path:'snacks', component:SnacksSegmentComponent           },
  { path:'tea' , component:TeaCoffeeSegmentComponent                  },
  { path: '**', redirectTo:'/home'  ,pathMatch:'full' },



]

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class KStoryRoutesModule { }
