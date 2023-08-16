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
  
  hero: Hero = {
    id: 1,
    name: "Windstrom",
    power: "87%",
    superPower: "He drop fire",
    color: "Black and yellow"
  }
}
