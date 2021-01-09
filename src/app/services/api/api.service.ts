import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/response.interface';
import { User } from 'src/app/models/user.interface';
import { UserLogin } from 'src/app/models/userlogin.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://peopleserverjava.herokuapp.com/serverPeople/resources/datos/"

  constructor(private http: HttpClient, private router:Router ) { }

  registrar(form:User):Observable<ResponseI>{
    let direccion = this.url +"crear";
    return this.http.post<ResponseI>(direccion,form)
  }

  login(form:UserLogin):Observable<any>{
    let direccion = this.url+"login";
    return this.http.post<any>(direccion, form);
  }

  logout(){
    localStorage.setItem("token","false");
    this.router.navigate(['login']);
  }
}
