
import {  Component,  OnInit, AfterViewInit } from '@angular/core';
import { DataServiceService } from './service/data-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'mdb-angular-ui-kit-free';


  constructor(private appData_serv: DataServiceService) { }

  newName: string;
  haiUser: boolean = false;
  haiAdmin: boolean = false;


  ngOnInit(): void {

    this.appData_serv.name.subscribe(data => {
      this.newName = data;

    });
    this.appData_serv.usera.subscribe(data => {
      this.haiUser = data;

    });
    this.appData_serv.admina.subscribe(data => {

      this.haiAdmin = data;

    });



  }

  ngAfterViewInit(): void {


    this.appData_serv.name.subscribe(data => {
      this.newName = data;

    });
    this.appData_serv.usera.subscribe(data => {
      this.haiUser = data;

    });
    this.appData_serv.admina.subscribe(data => {

      this.haiAdmin = data;


    });






  }


}
