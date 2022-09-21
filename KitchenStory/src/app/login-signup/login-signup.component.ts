import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

users_list =[
{
  name:'Arsh',
  username:'arsh',
  mail:'ashu@ks.com',
  pass:'arsh',

}
];



submit(signupForm){

  
 let new_User = {
name :signupForm.value.user_name,
username : signupForm.value.user_username,
mail : signupForm.value.user_mail,
pass : signupForm.value.user_pass,



 }
 console.log(signupForm.value.user_mail);
 this.users_list.push(new_User);
 alert("User Created, Please Login");
 signupForm.reset();
 

}




login(loginForm){

  let login_id = loginForm.value.l_id,
      login_pass = loginForm.value.l_pass ;

      for(let i =0;i<this.users_list.length;i++){
        if((login_id == this.users_list[i].mail || login_pass == this.users_list[i].username) && login_pass == this.users_list[i].pass){
          alert("Welcome " + this.users_list[i].name)
        }
        else
        alert("tatti khaaa")


      }
      

}




}

