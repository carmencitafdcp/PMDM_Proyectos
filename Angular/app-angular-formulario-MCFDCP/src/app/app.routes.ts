import { Routes } from '@angular/router';
import { StudentCreatePage } from './pages/student-create-page/student-create-page';
import { StudentListPage } from './pages/student-list-page/student-list-page';

export const routes: Routes = [
    {path: '', redirectTo: 'student-create', pathMatch: 'full' },
    {path: 'student-create', component: StudentCreatePage},
    {path: '', redirectTo:'student-list', pathMatch: 'full' },
    {path: 'student-list', component: StudentListPage},
];
