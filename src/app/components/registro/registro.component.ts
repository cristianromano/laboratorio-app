import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  email: string = '';
  password: string = '';
  constructor(
    private route: Router,
    private auth: AngularFireAuth,
    private toastr: ToastrService
  ) {}

  registrarse() {
    this.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((usuario) => {
        console.log(usuario.user);
        this.toastr.success('Registro Correcto');
        this.route.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
