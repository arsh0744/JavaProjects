import { Cart } from './../entity/carts/cart';
import { Users } from './../entity/user/users';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodBoxUserServiceService {

  constructor(private http:HttpClient) { }

  url_addUser ="http://localhost:8080/addUser";

  foodbox_addUser(newUser :Users ):Observable<any>{
   
    return this.http.post<any>(this.url_addUser,newUser);
  }

  url_allUsers="http://localhost:8080/users";

 
  foodbox_allUsers ():Observable<any>{
  return this.http.get<any>(this.url_allUsers);
  
  }

  url_userCheck="http://localhost:8080/login_check/";

foodbox_user_check(userCheckValue : Users ,userlogin_info:String): Observable<any>{
  return this.http.post<Users>(this.url_userCheck+  `${userlogin_info}`,userCheckValue );
}


url_uniqueUsername="http://localhost:8080/checkUsername/";

foodbox_unique_username(nameCheck:String):Observable<any>{
  return this.http.get<boolean>(this.url_uniqueUsername+ `${nameCheck}`);
}

url_uniqueEmail="http://localhost:8080/checkEmail/";

foodbox_unique_email(emailCheck:String):Observable<any>{
  return this.http.get<boolean>(this.url_uniqueUsername+ `${emailCheck}`);
}

url_allCartItems ="http://localhost:8080/cartItems";

foodbox_cart_items():Observable<any>{
  return this.http.get<any>(this.url_allCartItems);
}


url_addCartItem="http://localhost:8080/addCartItem";

foodbox_addItem_toCart(newCartItem: Cart):Observable<any>{

  return this.http.post<any>(this.url_addCartItem,newCartItem);

}

url_delCartItem="http://localhost:8080/cartItem/";

foodbox_delCartItem(cartItemId:number):Observable<any>{
  
  return this.http.delete(this.url_delCartItem+`${cartItemId}`, {responseType:'text'});
  
}

url_delCartItem_byItemId="http://localhost:8080/cartItembyItemId/";

foodbox_delCartItem_byItemId(ItemId:number):Observable<any>{
  
  return this.http.delete(this.url_delCartItem_byItemId+`${ItemId}`, {responseType:'text'});
  
}



url_cartItemQtyUpdate="http://localhost:8080/cartItemQtyUpdate/";

foodbox_cart_qty_update(updateCartItem: Cart,updateOpt: number):Observable<any>{

  return this.http.put(this.url_cartItemQtyUpdate+ ` ${updateOpt}` ,updateCartItem   );
}






}
