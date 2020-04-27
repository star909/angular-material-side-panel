import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelListComponent } from './modules/panel-list/panel-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'place', pathMatch: 'full' },
  {
    path: 'place',
    component: PanelListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
