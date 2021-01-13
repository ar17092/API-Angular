import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserL } from 'src/app/models/userL.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: UserL={nombre:"",apellido:"",genero:"",email:"",password:"",id:""};
  public dashBool: boolean =false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")=="false" || !localStorage.getItem("token")){
      this.router.navigate(['login']);
    }
    if (localStorage.getItem("token")=="true") {
      var usuario =localStorage.getItem("currentUser");
      this.dashBool = true;
      this.user = (usuario)? <UserL> JSON.parse(usuario):{nombre:"",apellido:"",genero:"",email:"",password:"",id:""};
    } 
    else{
      this.dashBool = false;
    }
    
  }

}
