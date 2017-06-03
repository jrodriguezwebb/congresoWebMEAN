import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

  public url = "http://localhost:3977/api";

  constructor(private _http: Http){}    
  //application/x-www-form-urlencoded
  create(user_to_register){
      let json = JSON.stringify(user_to_register);
      let headers = new Headers({'Content-Type':'application/json'});
      return this._http.post(this.url+"/usuario/crear", json, {headers: headers})
                                                .map(res => res);
  }

  read(id){       
    return this._http.get(this.url+"/usuario/"+id).map(res => res);
  }

  readAll(){       
    return this._http.get(this.url+"/usuarios").map(res => res);
  }
  
  update(id,user_to_update){
      let json = JSON.stringify(user_to_update);
      let headers = new Headers({'Content-Type':'application/json'});
      return this._http.put(this.url+"/usuario/"+id, json, {headers: headers})
                                                .map(res => res);
  }

  delete(id){
      let headers = new Headers({'Content-Type':'application/application/json'});
      return this._http.delete(this.url+"/usuario/"+id, {headers: headers})
                                                .map(res => res);
  }
}
