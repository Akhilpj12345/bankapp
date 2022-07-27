import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno=""

  pswd=""
  // properties / variables
aim ='your perfect banking  partner'

 
  //constructors - 

  constructor(private router:Router,private ds:DataService) { }
  
  //life cycle hook - angular
  ngOnInit(): void {
  }
 // angular defined function

 login(){
  var acno = this.acno
  var pswd = this.pswd

 const result = this.ds.login(acno,pswd)

 if(result){
      alert('login sucessfull')
      this.router.navigateByUrl('dashboard')
    }
   
 }


}
