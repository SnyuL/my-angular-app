import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// 导出 routes 常量
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];