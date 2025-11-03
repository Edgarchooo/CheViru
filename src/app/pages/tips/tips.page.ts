import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tips',
  imports: [IonicModule, CommonModule],
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage {
  tips: string[] = [
    '💰 Ahorrá al menos el 10% de tus ingresos mensuales.',
    '📊 Llevá un control de tus gastos diarios.',
    '💳 Evitá financiar compras pequeñas.',
    '📆 Planificá tus compras grandes con anticipación.',
    '☕ Reducí gastos hormiga (café, snacks, apps, etc).',
  ];
}
