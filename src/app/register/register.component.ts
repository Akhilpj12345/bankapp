import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
// call register data services
const result =this.ds.register(acno,pswd,uname)
if(result){
  alert("sucessfully register")
  this.router.navigateByUrl("")
}
else{
  alert('user already exist.. please log in')
  this.router.navigateByUrl("")
}



  }

}
