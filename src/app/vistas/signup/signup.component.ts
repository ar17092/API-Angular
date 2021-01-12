import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  /**
   * Variable que verifica el estado de la notificación en el signup
   */
  public error:boolean=false;
  /**
   * Variable para almacenar el error e imprimirlo por pantalla
   */
  public errorMsj:any;

  /**
   * array para almacenar los generos e iterar sobre él en la vista
   */
  genres: any =['F','M'];

  signupForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    apellido : new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
    
  });

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    /**
     * Si el token existe y esta en true, significa que la sesión esta iniciada
     */
    if (localStorage.getItem("token")=="true"){
      this.router.navigate(['dashboard']);
    }
  }

  postForm(form: User){
    this.apiservice.registrar(form).subscribe( data =>{
      /**
       * Almaceno el error, igual al que envía el servidor para luego compararlo
       */
      let e: any = "El email "+form.email+" ya ha sido registrado";
      
      /**
       * Aquí ocupo la variable @e para ver si el error esta presente
       */
      if(data?.nombre ==e){
        this.error=true;
        this.errorMsj = e;
      }
      else{
        /**
         * Si todo sale bien, almacenamos un true en el localstorage
         * para simular la sesión activa
         */
        let email = form.email;
        this.apiservice.getByEmail(email).subscribe(data2=>{
          localStorage.setItem("currentUser",JSON.stringify(data2[0]));

      localStorage.setItem("token", "true");
      this.router.navigate(['dashboard']);
        });
        // localStorage.setItem("token","true");
        // this.router.navigate(['dashboard']);
      }
    }); 
       
  }
}
