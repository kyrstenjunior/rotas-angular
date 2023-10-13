import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})

export class BoxesComponent {
  // Objeto inicializado e tipado
  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      other: {
        dream_world: {
          front_default: ''
        }
      }
    },
    types: []
  };
  

  constructor(private service:PokemonService) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          // Traz da API só os itens que vou usar. Usando o models (pokemonData)
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log(err)
      }
    );
  }

}
