import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { UserLogin } from 'src/app/models/userlogin.interface';
import { ApiService } from "../../services/api/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: boolean=false;
  public errorMsj:any;
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")=="true"){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form: UserLogin){
    this.apiservice.login(form).subscribe(data =>{
      if(data.exito){
        let email = form.email;
        this.apiservice.getByEmail(email).subscribe(data2=>{
          localStorage.setItem("currentUser",JSON.stringify(data2[0]));

      localStorage.setItem("token", "true");
      this.router.navigate(['dashboard']);
        });
        console.log(data.mensaje);
      }
      else if(data.errorPassword=="La contraseña que intenta ingresar es inválida, por favor intente nuevamente"){
        this.router.navigate(['#']);
        this.errorMsj=data.errorPassword;
        this.error=true;
        
      }
      else{
        this.error=true;
        this.errorMsj=data.errorEmail;
      }
    });
  }



}
