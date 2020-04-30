import { Component, OnInit, Input } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id: number;

  constructor(
    private _heroesService: HeroesService
  ) { }

  ngOnInit() {
  }

  verHeroeDetail(){
    // console.log(this.id);
    this._heroesService.verHeroe( this.id );
  }

}
