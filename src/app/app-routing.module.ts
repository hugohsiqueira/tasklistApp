import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'task-list',
    loadChildren: () => import('./tasks/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'task-list-item',
    loadChildren: () => import('./tasks/task-list-item/task-list-item.module').then( m => m.TaskListItemPageModule)
  },
  {
    path: 'task-form',
    loadChildren: () => import('./tasks/task-form/task-form.module').then( m => m.TaskFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
