import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(
    private route: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  login() {
    this.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((credenciales) => {
        const col = this.firestore.collection('users');
        const data = {
          fecha: new Date(),
          nombre: this.email,
        };
        col
          .add(data)
          .then(() => {
            this.toastr.success('Login Correcto');
            this.route.navigate(['/home']);
            console.log(credenciales);
          })
          .catch(() => {
            this.toastr.error('No se pudo loguear');
          });
      })
      .catch((error) => {
        this.toastr.error(error.code);
      });
  }

  registro() {
    this.route.navigate(['/registro']);
  }

  logOut() {
    this.auth.signOut();
  }
}
