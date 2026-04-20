import { Component, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { PokemonCard } from './components/pokemon-card/pokemon-card';
import { PokemonService } from './services/pokemon-service';

@Component({
  selector: 'app-root',
  imports: [Header, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private pokemonService = inject(PokemonService);

  filteredPokemons = this.pokemonService.filteredPokemons;

  onSearch(text: string) {
    this.pokemonService.searchText.set(text);
  }
}
