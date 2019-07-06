import { NgModule, Component } from '@angular/core';
import { SistemaAddComponent} from './sistema-add/sistema-add.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    //path é caminho que crio para aparecer na url
    path:'sistema/add',
    component:SistemaAddComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
