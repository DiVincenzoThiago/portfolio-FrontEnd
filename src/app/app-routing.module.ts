import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from "./components/page-one/page-one.component";
import { PageTwoComponent } from "./components/page-two/page-two.component";
import { PageAboutComponent } from "./components/page-about/page-about.component";
import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  
  {path: 'Inicio' ,component:PageOneComponent},
  {path: 'pagina2' ,component:PageTwoComponent},
  {path: 'about' ,component:PageAboutComponent},
  {path: '**' ,component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
