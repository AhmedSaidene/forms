import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    email:['', Validators.required],
    password:['',Validators.required],
  });
 
  saveForm(){
    console.log('Form data is ', this.loginForm.value);
  }
 
 }
