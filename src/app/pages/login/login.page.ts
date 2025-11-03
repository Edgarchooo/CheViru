import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [IonicModule, CommonModule, FormsModule, NgIf],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario = '';
  contrasena = '';
  error = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      this.error = '';
      this.router.navigateByUrl('/tabs/gastos');
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
