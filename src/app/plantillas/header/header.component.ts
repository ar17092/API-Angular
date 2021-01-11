import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerBool: boolean =false;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")=="true") {
      this.headerBool = true;
    }else{
      this.headerBool = false;
    }
  }

  onLogout(){
    this.apiservice.logout();
  }

}
