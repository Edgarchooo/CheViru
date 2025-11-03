import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'gastos',
        loadComponent: () => import('./pages/gastos/gastos.page').then(m => m.GastosPage),
      },
      {
        path: 'reportes',
        loadComponent: () => import('./pages/reportes/reportes.page').then(m => m.ReportesPage),
      },
      {
        path: 'tips',
        loadComponent: () => import('./pages/tips/tips.page').then(m => m.TipsPage),
      },
      {
        path: '',
        redirectTo: 'gastos',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
