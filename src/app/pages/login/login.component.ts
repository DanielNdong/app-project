import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public userData:any = {
    email: "aquilinondongbiang@gmail.com",
    password:"contraseñaeip",
  }
  
  public inputEmail:string = "";
  public inputPassword:string = "";

    
  public regex:any = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  public link:string = "";
  public goToPage:string = '/user';
  public validEmail:boolean = false;
  public validPassword:boolean = false;

  constructor(
  ) { }

  public validateEmail(){
    //We verify if the email format entered is correct
    let isValid  = this.regex.test(this.inputEmail)
      //If the format is correct we check that the data is valid
    if(isValid && this.userData.email === this.inputEmail){
      this.validEmail = true;
    }else{
      this.validEmail = false;
    }
  }

  public validatePassword(){
    //We check that the length of the input is greater than 9
    const HAS_CORRECT_LENGTH = this.inputPassword.length > 8;
    if(HAS_CORRECT_LENGTH){
      //If the length is correct we check that the data is valid
      if(this.userData.password === this.inputPassword){
        this.validPassword = true;
      }else{
        this.validPassword = false;
      }
    }else{
      this.validPassword = false;
    }
  }

  //Prevent data from being sent when pressing Enter on any form input
  public preventEnterSendForm(evt:KeyboardEvent):boolean{
 // If the key is Enter
  if (evt.key == 'Enter'){
    // We prevent events from being executed
    evt.preventDefault();
    // We return false
    return false;
  }
  return true;
  }
 
  ngOnInit(): void {
  }
  
  
}
