import { Component, input, model, output } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  search = model("");
  updateSearch(searchText: string){
    this.search.set(searchText);
  }
}
