import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from "./components/page-one/page-one.component";
import { PageOneBComponent } from "./components/page-one-b/page-one-b.component";
import { PageOneCComponent } from "./components/page-one-c/page-one-c.component";
import { PageTwoComponent } from "./components/page-two/page-two.component";
import { PageAboutComponent } from "./components/page-about/page-about.component";
import { Page404Component } from "./components/page404/page404.component";
import { PageLobbyComponent } from "./components/page-lobby/page-lobby.component";

const routes: Routes = [
  
  {path: 'proyectos' ,component:PageOneComponent},
  {path: 'proyectos_B' ,component:PageOneBComponent},
  {path: 'proyectos_C' ,component:PageOneCComponent},  
  {path: 'capacitaciones' ,component:PageTwoComponent},
  {path: 'about' ,component:PageAboutComponent},
  {path: 'lobby' ,component:PageLobbyComponent},
  {path: '**' ,component:Page404Component},
  {path: '', redirectTo: './Lobby', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
