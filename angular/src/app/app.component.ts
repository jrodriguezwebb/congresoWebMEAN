import { Component } from '@angular/core';
import { UserService } from "app/services/user.service";
import { User } from "app/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Stack MEAN';
  usuarios:User[];
  usuario:User;
  usuarioModificar:User;
  id:String;
  constructor(private servicioUsuario: UserService){
    this.usuario = new User();
    this.usuarioModificar = new User();
  }

  ngOnInit(){
    this.getUsers();
  }

  //create
  addUser(){
    this.servicioUsuario.create(this.usuario).subscribe(response =>{
      this.usuario = new User();
      this.getUsers();
    },
    error => {
        console.log(<any>error);
    });
  }

  //read
  getUsers(){
    this.servicioUsuario.readAll().subscribe(response => {    
        if(!response.json())
        {
            //console.log(response);
            return false;                    
        }
        else
        {
            let objectData=response.json();
            this.usuarios = objectData;
            //console.log(this.usuarios);
        }
    },
    error => {
        console.log(<any>error);
    });
  } 

  //update
  updateUser(){
    this.servicioUsuario.update(this.id,this.usuarioModificar).subscribe(response =>{
      //console.log(response);
      this.usuarioModificar = new User();
      this.getUsers();
    },
    error => {
        console.log(<any>error);
    });
  }

  //delete
  deleteUser(id:String){
    this.servicioUsuario.delete(id).subscribe(response =>{
      this.getUsers();
    },
    error => {
        console.log(<any>error);
    });
  }

  //seleccionar
  selectUser(id:string,_usuario:User){
    this.usuarioModificar = _usuario;
    this.id=id;
  }

}
