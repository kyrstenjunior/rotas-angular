import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})

export class BoxesComponent {
  name: string = "Bulbasaur";
  attributesTypes: string[] = ['Earth', 'Poison'];

  constructor(private service:PokemonService) {
    this.service.getPokemon("pikachu").subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      }
    );
  }
}
