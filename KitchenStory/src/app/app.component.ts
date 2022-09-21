import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';


 hide(){
  document.getElementById("veg-img").style.display="none";
  document.getElementById("explore").style.display="none";
  document.getElementById("explore2").style.display="none";
 }



}
