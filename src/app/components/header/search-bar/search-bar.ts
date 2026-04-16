import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  search = input("");
  searchChange = output<string>();
  updateSearch(searchText:string){
    this.searchChange.emit(searchText);
  }
}
