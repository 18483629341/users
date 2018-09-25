import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;  //typescript
   age:number;
   email:string;
   address:Address;
   hobbies:string[];
   hello:any;//不确定类型用any
   isEdit:boolean=false;
   users:string[];
  // obj:string=true; xx 

  constructor(public dateService:DataService) { 
    //console.log(this.dateService.getUsers());
    //this.users=this.dateService.getUsers();
    /*this.dataService.getUsersInHttp().subscribe(user=>{
      console.log(user);//由于的数据请求连接没有数据和map 不能使用
      this.users=user;
    })*/
  }
  
  ngOnInit() {
    console.log("ngOnInit run ");
    this.name="Hemiah";
    this.age=30;
    this.email="test@test.com";
    this.address={
      street:"定泗路",
     city:"北京",
     state:"昌平区"
    };
    this.hobbies=['写代码','打篮球'];
    this.hello="give me five";
  }
  onClick(){
    console.log(123);
    this.name="Mr.wu";
    this.hobbies.push("new Hobby");
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
  toggleEdit(){
     this.isEdit=!this.isEdit;
  }
  
 

}
interface Address{
    street:string,
     city:string,
     state:string
}
