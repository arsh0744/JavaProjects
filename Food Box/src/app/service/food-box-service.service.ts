import { Specials } from './../entity/specialItems/specials';
import { Users } from './../entity/users';
import { Admin } from './../entity/admins/admin';
import { ItemCategory } from './../entity/category/category';
import { Item } from './../entity/items/item';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodBoxServiceService {

  constructor(private http : HttpClient) { }

url_getallitems = "http://localhost:8080/items";

foodbox_items ():Observable<any>{
return this.http.get<Item[]>(this.url_getallitems);

}

url_getitem = "http://localhost:8080/item/";
foodbox_items_Id (item_id:number):Observable<any>{
  return this.http.get<any>(this.url_getitem + `${item_id}` );
  
  }


url_addItem ="http://localhost:8080/addItem";

foodbox_addItem(newItem :Item ):Observable<any>{
  
  return this.http.post<any>(this.url_addItem,newItem);
}

url_delItem ="http://localhost:8080/item/";

foodbox_deleteItem(item_id:number ):Observable<any>{

  return this.http.delete(this.url_delItem+`${item_id}`, {responseType:'text'});
  

}
url_updItem ="http://localhost:8080/item/";

foodbox_updateItem(updatedItem:Item,item_id:number):Observable<any>{


return this.http.put(this.url_updItem + `${item_id}`,updatedItem,{responseType:'text'});


}


url_addCateg="http://localhost:8080/addCateg";

foodbox_addCateg(newCateg:ItemCategory):Observable<any>{
  return this.http.post<any>(this.url_addCateg,newCateg);


}


url_getallCateg = "http://localhost:8080/categ";

foodbox_items_categ ():Observable<any>{
return this.http.get<any>(this.url_getallCateg);

}


url_DelCategbyName="http://localhost:8080/categName/";

foodbox_delCategByName(delCategName:String):Observable<any>{
  
  return this.http.delete(this.url_DelCategbyName+`${delCategName}`, {responseType:'text'});


}

url_ItembyCateg="http://localhost:8080/itemsbycat/";

foodbox_item_by_categ (itemCateg: String):Observable<any>{

return this.http.get<Item[]>(this.url_ItembyCateg + `${itemCateg}`);
}


url_AdminCheck="http://localhost:8080/adminCheck/";

foodbox_admin_check (admincheckvalue : Admin ,adminLogin : String):Observable<any>{

  return this.http.post<Admin[]>(this.url_AdminCheck + `${adminLogin}`,admincheckvalue);

}

url_addSpecialItem="http://localhost:8080/addSpecialItem";


foodbox_addSpecialItem(newSpecialItem:Specials):Observable<any>{
  return this.http.post<any>(this.url_addSpecialItem,newSpecialItem);

}


url_getallSpecialItems = "http://localhost:8080/allSpecialItems";

foodbox_all_specialItems ():Observable<any>{
  
return this.http.get<any>(this.url_getallSpecialItems);

}

url_delSpecialItem ="http://localhost:8080/delSpec/";

foodbox_delete_specialItem (specialId:number):Observable<any>{
  
  return this.http.delete(this.url_delSpecialItem+`${specialId}`, {responseType:'text'});
}


url_uploadImage="http://localhost:8080/upload";

foodbox_image_upload(file:any):Observable<any>{
  
  return this.http.post(this.url_uploadImage, file, {responseType:'text'});
} 






}
