import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    
  }

  onLogout(){
    this.apiservice.logout();
  }

}
