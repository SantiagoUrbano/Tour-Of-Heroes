import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes = HEROES;
  
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("Selected hero: ",hero);
  }
  
  // Eventos de click y el mouse

  onMousedown(hero: Hero): void {
    console.log("Selected hero down: ", hero)
  }

  onMouseout(hero: Hero): void {
    console.log("Selected hero down: ", hero)
  }

  hero: Hero = {
    id: 1,
    name: "Windstrom",
    power: "87%",
    superPower: "He drop fire",
    color: "Black and yellow",
    imageUrl: ""
  }
}
