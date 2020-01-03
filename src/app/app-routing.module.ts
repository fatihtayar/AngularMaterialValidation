import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DevextremeComponent } from './devextreme/devextreme.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {path:'',redirectTo:'material',pathMatch:'full'},
  {path:'bootstrap',component:BootstrapComponent},
  {path:'devextreme',component:DevextremeComponent},
  {path:'material',component:MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
