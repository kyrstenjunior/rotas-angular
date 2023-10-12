import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  constructor(private qualquerNome: ActivatedRoute, private outroNome: Router) {

    // Recupera o id da url -> https://localhost:4200/portfolio/1 -> retorna {id: "1"}
    this.qualquerNome.params.subscribe(
      res => console.log(res)
    )

    // Recupera as querys params das rotas filhas da url -> https://localhost:4200/portfolio/1/kyrsten -> retorna {id: "1", user: "kyrsten"} estes params foram setados no app-routing
    this.qualquerNome.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // Recupera as querys params da url -> http://localhost:4200/portfolio/1/kyrsten?token=12345 -> retorna {token: "12345"}
    this.qualquerNome.queryParams.subscribe(
      res => console.log(res)
    )
  }

  // Força um componente a navegar para outra página
  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.outroNome.navigate(['/']);
  //   }, 8000)
  // }

}
