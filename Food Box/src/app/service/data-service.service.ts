import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private nameSource = new BehaviorSubject<string>('');
  name = this.nameSource.asObservable();


  private userLogger = new BehaviorSubject<boolean>(false);
  usera = this.userLogger.asObservable();


  private adminLogger = new BehaviorSubject<boolean>(false);
  admina = this.adminLogger.asObservable();

  constructor() { }

  //================================User Login Service-------------------------------------------------------------


  
 
 
  changeName(name: string) {
    this.nameSource.next(name);
  }

  userLogging(usera:boolean){
    this.userLogger.next(usera);
  }
  adminLogging(admina:boolean){
    this.adminLogger.next(admina);
}









//================================User Login Service-------------------------------------------------------------

//------------------------------Admin Login Service---------------------------------------------------------------

 



//------------------------------Admin Login Service---------------------------------------------------------------



}
