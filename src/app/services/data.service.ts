import {Injectable} from '@angular/core';
import { Observable } from "rxjs";//npm
//import { Observable } from "rxjs/Observable";//cnpm
import { Http } from '@angular/http';

//import  'rxjs/add/operator/map';//cnpm下载环境
import { map } from "rxjs/operators";





@Injectable()
export class DataService{
  users:string[];
  //Observable;
  data:Observable<Array<number>>;
  constructor(public http:Http){
    this.users=["米斯特吴","Ac总有一天","吴海洋"];

  }
  getSingleUser(id){
   return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
            .pipe(map(res=>res.json()))
  }
  getUsersInHttp(){
   return  this.http.get("http://jsonplaceholder.typicode.com/users/")
            .pipe(map(res=>res.json()));
  }
  addUser(user){

    return  this.http.post("http://jsonplaceholder.typicode.com/users",user)
                    .pipe(map(res=>res.json()))
  }
  getUsers(){
    return this.users;
    
  }
  deleteUser(id){
    return this.http.delete("http://jsonplaceholder.typicode.com/users/"+id)
                    .pipe(map(res=>res.json()))
  }
  updateUser(user){
    return this.http.put("http://jsonplaceholder.typicode.com/users/"+user.id,user)
                   .pipe(map(res=>res.json()))
    
  }
  getObser(){
   /* this.data=new Observable(observer=>{
      setTimeout(()=>{
         observer.next(1);
      },1000);
      setTimeout(()=>{
        observer.next(2);
      },2000);
      setTimeout(()=>{
        observer.next(3);
      },3000);
      setTimeout(()=>{
        observer.next(4);
      },4000);
      setTimeout(()=>{
        observer.complete;
      },5000);
    });
    return this.data;*/
  }
  
}