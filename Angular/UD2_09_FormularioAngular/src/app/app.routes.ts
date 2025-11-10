import { Routes } from '@angular/router';
import { RegisterFormPage } from './pages/register-form-page/register-form-page';

export const routes: Routes = [
    {path: '', redirectTo: 'formulario', pathMatch: 'full' },
    {path: 'formulario', component: RegisterFormPage}
];
