import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  heroe:Heroe;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) { 
    this._activatedRoute.params.subscribe( p => {
      // console.log(p['idH']);
      this.heroe = this._heroeService.getHeroeDetail(p['idH']);
    });
  }

  ngOnInit() {
  }

}
