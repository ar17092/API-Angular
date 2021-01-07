import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    apellido : new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
    
  });

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form: User){
    this.apiservice.registrar(form).subscribe(data =>{
      console.log(data);
      
    });
console.log(form);

    
    
  }
}
