import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInventoryComponent } from './display-inventory/display-inventory.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';


const routes: Routes = [
  { path: 'create', pathMatch: 'full', component: CreateInventoryComponent },
  { path: 'display', pathMatch: 'full', component: DisplayInventoryComponent},
  {path:'', pathMatch:'full',redirectTo:'display' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
