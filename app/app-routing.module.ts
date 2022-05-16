import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { MenuComponent } from './menu/menu.component';
import { BinariaComponent } from './binaria/binaria.component';
import { TecladoComponent } from './teclado/teclado.component';


const routes: Routes = [
  {path: 'cdigital', component: TecladoComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cbin', component: BinariaComponent},
  {path: 'apresentacao', component: ApresentacaoComponent},

  {path:'', redirectTo:'/menu', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
