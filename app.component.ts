import { Component } from '@angular/core';

import { Validators,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPLY FOR CREDIT CARD';
  registerform:FormGroup;
  constructor(){
    this.registerform=new FormGroup({
      acnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]), 
      cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
       
    });
  }
  
  get acnum(){
    return this.registerform.get('acnum');
  }
  get cnum(){
    return this.registerform.get('cnum');
  }
  create(){
    console.log(this.registerform.value.acnum);
    console.log(this.registerform.value.cnum);
    alert("Successfully Registered");
    return this.registerform.reset();
}
}
