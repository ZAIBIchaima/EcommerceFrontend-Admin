import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard//dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      },
      //path table-employe
      {
        path: 'table-employe',
        loadChildren: () => import('./Frontend/afficher-employe/afficher-employe.module').then(m => m.AfficherEmployeModule)
      },
      //path ajouter employe
      {
        path: 'AjouterEmploye',
        loadChildren: () => import('./Frontend/ajouter-employe/ajouter-employe.module').then(m => m.AjouterEmployeModule)
      },
      //path modifier employe
      {
        path: 'ModifierEmploye/:id',
        loadChildren: () => import('./Frontend/modifier-employe/modifier-employe.module').then(m => m.ModifierEmployeModule)
      },
      //path table facture
      {
        path: 'table-facture',
        loadChildren: () => import('./Frontend/facture/facture.module').then(m => m.FactureModule)
      },
      //path stock
      {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
