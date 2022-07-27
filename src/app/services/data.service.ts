import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUsername:any
  currentAcno:any

  userDetails:any ={
    1000:{acno:1000,username:'neer',password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,username:'laisha',password:1001,balance:6000,transaction:[]},
    1002:{acno:1002,username:'vyom',password:1002,balance:4000,transaction:[]}
  }

  constructor() { }

  register (acno:any,password:any,username:any){
    let userDetails = this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      return true
    }
  }
  login(acno:any,pswd:any){
   
  
    let userDetails = this.userDetails
  
    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        this.currentUsername = userDetails[acno]['username']
        this.currentAcno = acno
        return true
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('user dosenot exist')
      return false
    }
   }

   //deposit
   deposit(acno:any,pswd:any,amt:any){
    let userDetails = this.userDetails
    var amount= parseInt(amt)

    if(acno in userDetails){
      if(pswd== userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        userDetails[acno]['transaction'].push({
          type:'CREDIT',
          amount
        })
        return userDetails[acno]['balance']

      }
      else{
        alert('incorrect password')
        return false
      }

    }
    else{
      alert('user dosent exit')
      return false
    }
   }

   //withdraw
   withdraw(acno:any,pswd:any,amt:any){
    let userDetails = this.userDetails
    var amount= parseInt(amt)

    if(acno in userDetails){
      if(pswd== userDetails[acno]['password']){
        if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount
        userDetails[acno]['transaction'].push({
          type:'DEBIT',
          amount
        })
        return userDetails[acno]['balance']

      }

      else{
        alert('insufficient balance')
        return false
      }
    }
      else{
        alert('incorrect password')
        return false
      }

    }
    else{
      alert('user dosent exit')
      return false
    }

   
    
   }
    //transaction
    getTransaction(acno:any){
      return this.userDetails[acno]['transaction']
    }
}
