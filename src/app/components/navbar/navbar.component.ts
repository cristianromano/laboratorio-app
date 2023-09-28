import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: Router, public auth: AngularFireAuth) {}

  redirigirBio() {
    this.route.navigate(['/bio']);
  }

  logOut() {
    debugger;
    this.auth.signOut();
    this.route.navigate(['/']);
  }

  IrHome() {
    this.route.navigate(['/']);
  }
}
