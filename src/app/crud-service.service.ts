import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { stringify } from 'querystring';
import {User} from "../user"
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
formData:User;
  userList:User[];
  path:String="users"
  constructor(private db:AngularFireDatabase){
    //this.db.object('users/0').set({id:1,name:"Zeynep Y",phone:"5349286446"});
  }
  /*getUser():User[]{
    var user:User[];
    this.db.list("users").valueChanges().subscribe(value=>{user=value as User[]});
    console.log(user);
    return this.userList;
  }*//*
  async getUserList(){
    var user:User[];
    await this.getUserFromDb().then(value=>{
      user=value as User[];
    });
   this.userList=user;
   return this.userList;
   //console.log("burda",this.userList);
 
  }*/
  getUserFromDb(){
    return new Promise((resolve,reject)=>{
      this.db.list("users").valueChanges().subscribe(value=>{resolve(value);});
    })
  }
  getData() {
    return this.db.object("users").valueChanges()
  }
  
  getListWithoutKey() {
    return this.db.list("users")
      .snapshotChanges().map(changes => {
        return changes.map((c: any) => ({
          ...c.payload.val()
        }))
      })//.first() bunu yazdiginda realtime ozelligi calismaz bazi yerlerde kullanmak durumunda kalabiliriz. Test edersen daha iyi anlarsin
  }

  getListWithKey() {
    return this.db.list("users")
      .snapshotChanges().map(changes => {
        return changes.map((c: any) => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
  }
  async addUser(data){
    return new Promise((resolve) => {
      this.db.list("users/"+(String(data.id-1))).push(data)
      resolve()
    })
  }
  /*
  saveData(path, data) {
    return new Promise((resolve) => {
      this.db.list(`${path}/`).push(data)
      resolve()
    })
  }
  */ 

  /*
    removeData(path) {
    return new Promise((resolve) => {
      this.db.object(`${path}`).remove();
      resolve()
    })
  }*/ 
   deleteUser(id){
    return new Promise((resolve) => {
    this.db.object(`${id}`).remove();
    resolve()
  })
  }
}
