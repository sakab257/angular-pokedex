import { Component, computed, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { PokemonCardModel } from './models/pokemon-card';
import { PokemonCard } from './components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [Header, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  charmander = new PokemonCardModel();
  charmeleon = new PokemonCardModel();
  charizard = new PokemonCardModel();

  searchText = signal("");
  selectedPokemons = signal<PokemonCardModel[]>([this.charmander,this.charmeleon,this.charizard]);
  filteredPokemons = computed(() => (
    this.selectedPokemons().filter((pokemon) => (
      pokemon.name.toLocaleLowerCase().includes(this.searchText().toLocaleLowerCase())
    ))
  ))

  constructor() {
    this.charmander.name = "Salamèche";
    this.charmander.number = "N°0004";
    this.charmander.img = "sprites/charmander.png";
    this.charmander.alt = "Image de Salamèche";
    this.charmander.type = "Feu";

    this.charmeleon.name = "Salamandre";
    this.charmeleon.number = "N°0005";
    this.charmeleon.img = "sprites/charmeleon.png";
    this.charmeleon.alt = "Image de Salamandre";
    this.charmeleon.type = "Feu";

    this.charizard.name = "Dracaufeu";
    this.charizard.number = "N°0006";
    this.charizard.img = "sprites/charizard.png";
    this.charizard.alt = "Image de Dracaufeu";
    this.charizard.type = "Feu";
    
  }
}
