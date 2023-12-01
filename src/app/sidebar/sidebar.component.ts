import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

declare const $ : any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() modulName: string = "";

  constructor(private router : Router) {
  }

  signOut(): void{
    console.log("signOut()");

    var userId = $("#idText").val();
    userId = encodeURIComponent(userId);

    sessionStorage.removeItem("userId");

    this.router.navigate(["/login"]);
  }
}
