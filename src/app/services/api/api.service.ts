import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private url = "http://localhost:5000/api/v1.0/users";

  constructor(private http: HttpClient ) { }

  registrar(form:User):Observable<User>{
    let direccion = this.url+"/"
    return this.http.post<User>(direccion,form)
  }
}
