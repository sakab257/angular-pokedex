import { Component, output } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  clicked = output<void>();
  onClick() {
    this.clicked.emit();
  }
}
