import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import  { CrudServiceService } from "./crud-service.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users:User[];
user=new User();
  title = 'angular-firebase-realtimedb';
  constructor(public crudService:CrudServiceService){
   this.getUserList();
   //this.crudService.getListWithoutKey().subscribe(value=>console.log("aa",value))//burdan console yazıyo
   //console.log();
 }

  getUserList(){
  var users:User[];
  this.crudService.getListWithoutKey().subscribe(function(value: any[]){
    //console.log("x",value);

  /*  value.forEach(obj => {
      console.log(obj);
      Object.keys(obj).forEach((key, i) => {
        let user = new User();
        user.id = obj[key].id;
        user.name = obj[key].name;
        user.phone = obj[key].phone;

        users.push(user);
      });
    });*/
    value.forEach(obj => {
      console.log(obj);
      Object.keys(obj).forEach((key, i) => {
        let user = new User();
        user.id = obj[key].id;
        user.name = obj[key].name;
        user.phone = obj[key].phone;
        console.log("user",user);
        console.log("user",user.name);
        console.log("i",i);
        //users[i]=user;
        //users.push(user);
      });
    });
console.log(users);
    this.users = users;
  }.bind(this));
//this.user.id=(this.users.length)+1;
 //console.log("burda",this.userList);

} 
/*
 async getUserList(){
  var user:User[];
  await this.crudService.getUserFromDb().then(value=>{
    user=value as User[];
  });
 this.users=user;
 console.log("burda",this.users);
this.user.id=(this.users.length)+1;
console.log(this.user.id);
 return this.users;
 //console.log("burda",this.userList);

} 
*/
clearInput(){
  this.user.name="";
  this.user.phone="";
}
onSubmit(f: NgForm) {
  this.crudService.addUser(f.value);
  this.clearInput();
  this.getUserList();
}
updateUser(id){
var user=this.users.find(element=>{
  return element.id===id;
});
this.user.id=user.id;
this.user.name=user.name;
this.user.phone=user.phone;
}
}
