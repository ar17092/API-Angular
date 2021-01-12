import { Component, OnInit } from '@angular/core';
import { UserL } from 'src/app/models/userL.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: UserL={nombre:"",apellido:"",genero:"",email:"",password:"",id:""};
  public nombreC: any;
  public headerBool: boolean =false;

  constructor(private apiservice:ApiService) { 
  }

  ngOnInit(): void {
    if (localStorage.getItem("token")=="true") {
      var usuario =localStorage.getItem("currentUser");
      this.headerBool = true;
      this.user = (usuario)? <UserL> JSON.parse(usuario):{nombre:"",apellido:"",genero:"",email:"",password:"",id:""};
    } 
    else{
      this.headerBool = false;
    }
  }

  onLogout(){
    this.apiservice.logout();
  }

}
