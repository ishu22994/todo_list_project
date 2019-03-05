import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserloggedIn : boolean = false;
  constructor(private hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserloggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
