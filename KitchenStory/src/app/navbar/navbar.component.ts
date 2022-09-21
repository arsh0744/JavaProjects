import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
 
 
  navhidefunc(){
    let navhide = new AppComponent ;
     navhide.hide();
  }
  


  ngOnInit(): void {

    
    


  }

}


