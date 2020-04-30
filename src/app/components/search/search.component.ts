import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe( p => {
      console.log('En search');
      this.termino = p['termino'];
      this.heroes = this._heroesService.busquedaHeroe(p['termino']);
    });
   }

  ngOnInit() {
  }

}
