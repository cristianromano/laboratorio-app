import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private route: Router, private auth: AngularFireAuth) {}

  redirigirBio() {
    this.route.navigate(['/bio']);
  }

  login() {
    this.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((credenciales) => {
        this.route.navigate(['/home']);
        console.log(credenciales);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  registro() {
    this.route.navigate(['/registro']);
  }
}
