import { DataServiceService } from './../service/data-service.service';
import { FoodBoxServiceService } from './../service/food-box-service.service';
import { Admin } from './../entity/admins/admin';
import { CustomValidatorsService } from './../service/custom-validators.service';
import { toArray } from 'rxjs';


import { Router } from '@angular/router';
import { Users } from './../entity/user/users';
import { FormsModule,NgModel,  FormGroup ,FormControl,Validators} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodBoxUserServiceService } from '../service/food-box-user-service.service';
import { CustomValidator } from '../validation/custom-validator';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {


  //----------------------------------------------------------------Variables------------------------------------------------------------

  register_form :FormGroup;
  login_form :FormGroup;
  newUser = new Users();
  addRes= false;
  all_users : Users;
  admin_auth_form: FormGroup;
  admin_check = new Admin();
  admin_check_result : Admin;
  is_admin= false ;
  is_user = false;
  userLogin = new Users;
  userlogin_info : String;

  usernameCheckRes = true;
  emailCheckRes = true;
  passMatchRes = true;
  
  
  
  adminLoggedIn = false;

  
  
  
  




  //----------------------------------------------------------------Variables------------------------------------------------------------



  constructor(private addUser_serv : FoodBoxUserServiceService, private route : Router ,private val_serv :CustomValidatorsService,
    
    private adminLogin_serv : FoodBoxServiceService, private validator_serv:CustomValidatorsService,

    private data_serv: DataServiceService
    
    ) { }

    name: string;
    usera:boolean;
    admina:boolean;

  ngOnInit(): void {

    




    this.register_form= new FormGroup({

      name : new FormControl('',[Validators.required,
      
        Validators.minLength(3),
        Validators.maxLength(15),
      
      ]),
      username : new FormControl ('',Validators.required),
      email : new FormControl('',Validators.required),
      passGroup : new FormGroup ({

        pass  : new FormControl('',Validators.required),
        repeatpass  : new FormControl('',Validators.required)
      
      },
        
       

              ),
      
      contact : new FormControl(''),
      address  : new FormControl(''),


    });


//-----------------------------------Admin Form--------------------------------------------------------------

    this.admin_auth_form = new FormGroup({

      adminlogin: new FormControl('',Validators.required),
      adminpass : new FormControl('',Validators.required)





    })


//-----------------------------------Admin Form--------------------------------------------------------------



   





    this.login_form = new FormGroup({

          login :  new FormControl('',Validators.required),
          upass :  new FormControl('',Validators.required),


    });



    
    
  }

  // changeName() {
  //   console.log("changename fired");
  //   let rand = document.getElementById('rand') as HTMLInputElement;
  //   this.name=  rand.value;
  //   this.data_serv.changeName(this.name);
  // }

  // userLogging(){

  //   console.log("userLogging  fired");
  //   this.usera=true;
  //   this.data_serv.userLogging(this.usera);
    
  // }

  // adminLogging(){

  //   console.log("admin Logging Fired");
  //   this.admina=true;
  //     this.data_serv.adminLogging(this.admina);
  
  
  // }
  


 

 
  regSubmit(){
    
    
    let poadstyle = document.querySelector('.poadstyle');
           poadstyle.classList.add('active');
           setTimeout(() => {
           poadstyle.classList.remove('active');

           }, 1500);


                  this.newUser.name= this.register_form.value.name;
                  this.newUser.username=this.register_form.value.username;
                  this.newUser.email=this.register_form.value.email;
                  this.newUser.password=this.register_form.get('passGroup').get('pass').value;
                  this.newUser.contact=this.register_form.value.contact;
                  this.newUser.address=this.register_form.value.address;

                  let repeatPass = this.register_form.get('passGroup').get('repeatpass').value;

           
  //--------------------------------------------Username Validation-----------------------------------------


           this.addUser_serv.foodbox_unique_username(this.newUser.username).subscribe(data=>{

            

            if(data==false){

              setTimeout(() => {
                document.getElementById('reg_username_res').classList.add('active');
              }, 2000);

              setTimeout(() => {
                document.getElementById('reg_username_res').classList.remove('active');
              }, 5000);

              console.log("Username Already Exists");
              this.usernameCheckRes = false ;
              
              

            }
              

              else{

//-------------------------Email Validation--------------------------------------------------------------------------


                    this.addUser_serv.foodbox_unique_email(this.newUser.email).subscribe(data=>{

                        if(data==false){

                          setTimeout(() => {
                            document.getElementById('reg_email_res').classList.add('active');
                          }, 2000);

                          setTimeout(() => {
                            document.getElementById('reg_email_res').classList.remove('active');
                          }, 5000);

                          console.log("Email Already Exists");
                          this.emailCheckRes= false;

                        }
                            

                        else{


//----------------------------Password Match Verification-----------------------------------------------------------

                          if(this.validator_serv.passMatch(this.newUser.password,repeatPass)==false){
                            this.passMatchRes=false;

                            setTimeout(() => {
                              document.getElementById('reg_pass_res').classList.add('active');
                            }, 2000);

                            setTimeout(() => {
                              document.getElementById('reg_pass_res').classList.remove('active');
                            }, 5000);

                            console.log("Passwords Do Not Match");

                          }
//-----------------------------------------------Valid Form Add User-----------------------------------
                            else{


                              
                          setTimeout(() => {
                            document.getElementById('reg_res').classList.add('active');
                          }, 2000);

                          setTimeout(() => {
                            document.getElementById('reg_res').classList.remove('active');
                          }, 5000);
                             
                          


                                return this.addUser_serv.foodbox_addUser(this.newUser).subscribe(data=>{
                                 this.addRes= true;
                                 console.log("User Added");
                              
                              setTimeout(() => {
                              window.location.reload();
        
                                        }, 5500);
       

   },error=>{

                                  console.log("User Could Not be Added");

                                });


                        }



                      }


                    }, errors => { });


             }


           }, errors => {



              console.log("Username Could Not be Verified");





           });
          
}



login_submit(){ 



  let loadstyle = document.querySelector('.loadstyle');
  loadstyle.classList.add('active');
  setTimeout(() => {
  loadstyle.classList.remove('active');

  }, 1500);

  this.userlogin_info= this.login_form.value.login;
  this.userLogin.password=this.login_form.value.upass;

  return this.addUser_serv.foodbox_user_check(this.userLogin,this.userlogin_info).subscribe(data=>{

    if (data!=null){

      this.is_user=true;
      

      




      setTimeout(() => {
        document.getElementById('usercheckres').classList.add('active');
        
      }, 1500);


      
      setTimeout(() => {
        document.getElementById('usercheckres').classList.remove('active');

        
      }, 2500);

      setTimeout(() => {
        this.usera=true;
          this.data_serv.userLogging(this.usera);
        
      }, 3000);
      setTimeout(() => {
       this.route.navigate(['home']);
      }, 3500);


          

    }

    else {

      setTimeout(() => {
        document.getElementById('usercheckres').classList.add('active');
        
      }, 2000);

      setTimeout(() => {
        document.getElementById('usercheckres').classList.remove('active');

        
      }, 4000);

    }




  },errors=>{


    console.log("Some Error Occured")


  });
  

  

  


  



}
login_admin(){


  if(this.admin_auth_form.valid){

    this.admin_check.adminLogin=this.admin_auth_form.value.adminlogin;
    this.admin_check.adminPass=this.admin_auth_form.value.adminpass;
    return this.adminLogin_serv.foodbox_admin_check(this.admin_check, this.admin_check.adminPass).subscribe(

      data=>{

        this.admin_check_result =data;
        if(this.admin_check_result!=null){
            
            this.is_admin=true;
            
              document.getElementById('loadstyle_admin').classList.add('show');

              setTimeout(() => {

                document.getElementById('loadstyle_admin').classList.remove('show');
                
              }, 1000);

              setTimeout(() => {

                document.getElementById('admincheckres').classList.add('active');
                
              }, 1500);



            setTimeout(() => {
              document.getElementById('admincheckres').classList.remove('active');

              
            }, 3000);
            setTimeout(() => {
              this.admina=true;
      this.data_serv.adminLogging(this.admina);

             this.route.navigate(['main']);

            }, 4000);

            
        }
            else{

              
              document.getElementById('loadstyle_admin').classList.add('show');

              setTimeout(() => {

                document.getElementById('loadstyle_admin').classList.remove('show');
                
              }, 1000);

              setTimeout(() => {

                document.getElementById('admincheckres').classList.add('active');
                
              }, 1500);



            setTimeout(() => {
              document.getElementById('admincheckres').classList.remove('active');

              
            }, 4000);

            }
            




      },errors=>{

          console.log("Error Ocurred ");

      }


    )


  }


  

}







}

