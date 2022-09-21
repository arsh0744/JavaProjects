import { KStoryRoutesModule } from './k-story-routes/k-story-routes.module';
import { NgModule } from '@angular/core';
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
import { NavbarComponent } from './navbar/navbar.component';
import { ExploreComponent } from './explore/explore.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FruitsVegSecComponent } from './fruits-veg-sec/fruits-veg-sec.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CartComponent } from './cart/cart.component';
import { TeaCoffeeSegmentComponent } from './tea-coffee-segment/tea-coffee-segment.component';
import { BakeryComponent } from './bakery/bakery.component';
import { SnacksSegmentComponent } from './snacks-segment/snacks-segment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExploreComponent,
    SideNavComponent,
    FruitsVegSecComponent,
    LoginSignupComponent,
    CartComponent,
    TeaCoffeeSegmentComponent,
    BakeryComponent,
    SnacksSegmentComponent,
    HomeComponent
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
    KStoryRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,ExploreComponent,SideNavComponent]
})
export class AppModule { AppComponent}
