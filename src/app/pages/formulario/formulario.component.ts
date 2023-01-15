import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public inputsValue:any = {
    nameForm: '',
    email: ''
  };
  public showData = false;

  constructor() { }

//method to verify that the data has been entered in the two fields
  public validateSending(){
    const HAS_NAME = this.inputsValue.nameForm.length > 0;
    const HAS_EMAIL = this.inputsValue.email.length > 0;

    if(HAS_NAME && HAS_EMAIL){
      return this.showData = true;
    }

//In case any input is empty we apply effects and show error in console
    if(!HAS_NAME){
      document.getElementById('nameForm')!.style.outline="solid 2px red"
    }
    if(!HAS_EMAIL){
      document.getElementById('email')!.style.outline="solid 2px red"
    }
     throw new Error("You must fill all the fields");   
  }

  ngOnInit(): void {
  }

}
