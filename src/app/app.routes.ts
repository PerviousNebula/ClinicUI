import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
