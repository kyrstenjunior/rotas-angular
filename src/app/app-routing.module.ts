import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  //Home
  {path: "", component: TitleComponent, pathMatch: "full"},
  // Rota pai portfolio
  {path: "portfolio", component: CardComponent, children: [
    // Rota filho portfolio
    {path: ":id", component: CardComponent, pathMatch: "prefix"},
    // Rota filho portfolio
    {path: ":id/:user", component: CardComponent, pathMatch: "prefix"}
  ]},
  // Qualquer (**) coisa que for digitada e não existir, será redirecionada para home
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
