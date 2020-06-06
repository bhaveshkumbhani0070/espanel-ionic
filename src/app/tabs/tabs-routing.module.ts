import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {HomeComponent} from '../components/home/home.component';
import {ConversacionesComponent} from '../components/conversaciones/conversaciones.component';
import {HistoriasComponent} from '../components/historias/historias.component';
import {NoticiasComponent} from '../components/noticias/noticias.component';
import {TraducirComponent} from '../components/traducir/traducir.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'home',
        component:HomeComponent
        // loadChildren:() => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'conversaciones',
        component:ConversacionesComponent
        // loadChildren:() => import('../pages/conversaciones/conversaciones.module').then(m => m.ConversacionesPageModule)
      },
      {
        path:'historias',
        component:HistoriasComponent
      },
      {
        path:'noticias',
        component:NoticiasComponent
      },
      {
        path:'traducir',
        component:TraducirComponent
      }
    ]
  },
  // {
  //   path:'profile',
  //   component:ProfileComponent
  // },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
