import { Component, OnInit } from '@angular/core';
import { DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    users:any[];
    user={
      id:'',
      name:"",
      email:"",
      phone:""
    };
    isEdit:boolean=false;


  constructor( public dataService:DataService) { 
   
    console.log(this.dataService.getUsers());
   // this.users=this.dataService.getUsers();
   // this.dataService.getObser().subscribe(res=>{this.data.push(res);});
    this.dataService.getUsersInHttp().subscribe(users=>{
       this.users=users;
    });
    
  }
  
  
  onSubmit(isEdit){
    console.log(2);
    if(isEdit){
    console.log(this.user);      
       this.dataService.updateUser(this.user).subscribe(user=>{
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].id==this.user.id){
            this.users.splice(i,1);
          }
        }
        this.users.unshift(this.user);
      })

    }else{
      console.log(this.user);
      this.dataService.addUser(this.user).subscribe(user=>{
        console.log(this.user);
        this.users.unshift(this.user);//由于map 不能使用
      })
    }
  }

  onDeleteClick(id){
    console.log(id);
     this.dataService.deleteUser(id).subscribe(res=>{
         for(let i=0;i<this.users.length;i++){
           if(this.users[i].id == id){
             this.users.splice(i,1);
           }
         }
     })
  }

  onEditClick(user){
    this.isEdit=true;
    this.user=user;
  }

  ngOnInit() {
    //this.users=this.dataService.getUsers();
  }

}
