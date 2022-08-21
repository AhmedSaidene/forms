import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  registerForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required], 
    email:['', 
    [Validators.required, Validators.email]
  ],
  pwd:['',Validators.required],
  verifyPwd:['',Validators.required],
  gender:['', Validators.required],
  });
  ngOnInit(): void {
  }
  
  saveForm(){
    console.log('Form data is ', this.registerForm.value);
  }

}
