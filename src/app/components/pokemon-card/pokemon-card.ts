import { Component, input } from '@angular/core';
import { PokemonCardModel } from '../../models/pokemon-card';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-pokemon-card',
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  pokemon = input.required<PokemonCardModel>();
}
