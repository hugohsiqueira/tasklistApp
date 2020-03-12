import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
  { path: 'task-list', loadChildren: './tasks/task-list/task-list.module#TaskListPageModule'},
  { path: 'new', loadChildren: './tasks/task-form/task-form.module#TaskFormPageModule'},
  { path: 'edit/:id', loadChildren: './tasks/task-form/task-form.module#TaskFormPageModule'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
