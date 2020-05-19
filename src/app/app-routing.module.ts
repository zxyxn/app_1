import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './modules/components/components.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
