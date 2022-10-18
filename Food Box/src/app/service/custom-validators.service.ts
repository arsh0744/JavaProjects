import { ValidationErrors } from '@angular/forms';
import { FoodBoxUserServiceService } from './food-box-user-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

   
  
  

  constructor(private http : HttpClient,private validation_serv:FoodBoxUserServiceService ) { }


  
  

  //  validateUserNameNotTaken(username_for_verif:String): Promise<ValidationErrors| null> |null {

    


  //   return new Promise((resolve,reject)=>{

  //     let userNameCheckResult = this.validation_serv.foodbox_unique_username(username_for_verif).subscribe(data=>{

  //       console.log(userNameCheckResult);

  //     },errors=>{});
  //   console.log(userNameCheckResult);

  //     userNameCheckResult ? resolve (null) : resolve({usernameTaken :true});

  //   })
  //       //return userNameCheckResult ? null : {usernameTaken :true};
  // }



  
 passMatch (pass : String,pass_repeat : String): boolean{

    

  return pass==pass_repeat  ? true: false ;
  

}

  




}
