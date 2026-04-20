import { computed, Injectable, signal } from '@angular/core';
import { PokemonCardModel } from '../models/pokemon-card';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  searchText = signal("");
  selectedPokemons = signal<PokemonCardModel[]>([
    {name:"Salamèche", number:"N°0004", img: "sprites/charmander.png", alt: "Image de Salamèche", type: "Feu"},
    {name:"Salamandre", number:"N°0005", img: "sprites/charmeleon.png", alt: "Image de Salamandre", type: "Feu"},
    {name:"Dracaufeu", number:"N°0006", img: "sprites/charizard.png", alt: "Image de Dracaufeu", type: "Feu"},
  ]);
  filteredPokemons = computed(() => (
    this.selectedPokemons().filter((pokemon) => (
      pokemon.name.toLocaleLowerCase().includes(this.searchText().toLocaleLowerCase())
    ))
  ))

  
}
