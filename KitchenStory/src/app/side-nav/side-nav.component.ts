import { FruitsVegSecComponent} from './../fruits-veg-sec/fruits-veg-sec.component';

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 

 
  @Input() page_cat =[];


  


  






}
imports: [FruitsVegSecComponent]
