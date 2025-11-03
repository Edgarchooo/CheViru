import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Gasto {
  descripcion: string;
  categoria: string;
  monto: number;
}

@Component({
  standalone: true,
  selector: 'app-gastos',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage {
  nuevo: Gasto = { descripcion: '', categoria: '', monto: 0 };
  gastos: Gasto[] = [];

  agregar() {
    if (!this.nuevo.descripcion || !this.nuevo.categoria || this.nuevo.monto <= 0) return;
    this.gastos.push({ ...this.nuevo });
    this.nuevo = { descripcion: '', categoria: '', monto: 0 };
  }

  eliminar(i: number) {
    this.gastos.splice(i, 1);
  }

  get totalGastos() {
    return this.gastos.reduce((acc, g) => acc + g.monto, 0);
  }
}
