import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodBoxItemsComponent } from './food-box-items/food-box-items.component';
import { FoodBoxRoutesModule } from './food-box-routes/food-box-routes.module';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UpdateItemComponent } from './update-item/update-item.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import { CategoryAddDelComponent } from './category-add-del/category-add-del.component';
import { ItemByCategoryComponent } from './item-by-category/item-by-category.component';
import { FoodboxCartComponent } from './foodbox-cart/foodbox-cart.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSegmentComponent } from './user-segment/user-segment.component';
import { FoodboxSpecialsComponent } from './foodbox-specials/foodbox-specials.component';
import { AdminSegmentComponent } from './admin-segment/admin-segment.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { MenuComponent } from './menu/menu.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BeveragesComponent } from './beverages/beverages.component';

 
@NgModule({
  declarations: [
    AppComponent,
    FoodBoxItemsComponent,
    AddItemComponent,
    UpdateItemComponent,
    LoginSignupComponent,
    AdminDashboardComponent,
    CategoryAddDelComponent,
    ItemByCategoryComponent,
    FoodboxCartComponent,
    HomeComponent,
    NavbarComponent,
    UserSegmentComponent,
    FoodboxSpecialsComponent,
    AdminSegmentComponent,
    AllItemsComponent,
    MenuComponent,
    NonVegComponent,
    PizzaComponent,
      BeveragesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    FoodBoxRoutesModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
