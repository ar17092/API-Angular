import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/response.interface';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://peopleserverjava.herokuapp.com/serverPeople/resources/datos/"

  constructor(private http: HttpClient ) { }

  registrar(form:User):Observable<ResponseI>{
    let direccion = this.url
    return this.http.post<ResponseI>(direccion,form)
  }
}
