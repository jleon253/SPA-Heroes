import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:idH', component: HeroeDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'busqueda/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

// export class AppRoutingModule {}
