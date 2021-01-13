import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { UserLogin } from 'src/app/models/userlogin.interface';
import { ApiService } from "../../services/api/api.service";
import { NgxSpinnerService } from "ngx-spinner";

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

  constructor(private apiservice:ApiService, private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")=="true"){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form: UserLogin){
    this.spinner.show();
 
        
    this.apiservice.login(form).subscribe(data =>{
      if(data.exito){
        let email = form.email;
        this.apiservice.getByEmail(email).subscribe(data2=>{
         
          localStorage.setItem("currentUser",JSON.stringify(data2[0]));
          

      localStorage.setItem("token", "true");
      this.router.navigate(['dashboard']);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);
        });
        console.log(data.mensaje);
      }
      else if(data.errorPassword=="La contraseña que intenta ingresar es inválida, por favor intente nuevamente"){
        
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 300);
        this.errorMsj=data.errorPassword;
        this.error=true;
        
      }
      else{
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 300);
        this.error=true;
        this.errorMsj=data.errorEmail;
      }
    });
  }



}
