import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string;
  togglePokemon: boolean;

  constructor(){
    this.title = "Mariana";
    this.togglePokemon = true;
  }
}
