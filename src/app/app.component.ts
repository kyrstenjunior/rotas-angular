import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Exclui o arquivo HTML e inseri as tags dos components aqui abaixo:
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    <app-boxes></app-boxes>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotas-angular';
}
