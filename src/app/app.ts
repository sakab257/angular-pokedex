import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { PokemonCard } from "./components/pokemon-card/pokemon-card";
import { PokemonCardModel } from './models/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [Header, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);
  
  incrementCount(){
    this.count.update(val => val + 1);
  }

  charmander = new PokemonCardModel();
  charmeleon = new PokemonCardModel();
  charizard = new PokemonCardModel();

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
