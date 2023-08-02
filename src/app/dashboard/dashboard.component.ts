import { Component } from '@angular/core';
import { MOVIES } from '../models/movies';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title:string="Trending Movies";
  movies:Movie[]=MOVIES;

  searchMovie:string="";
  go()
  {
    this.movies = this.movies.filter(name =>name.movieTitle==this.searchMovie);
  }
  click()
  {
    this.searchMovie="";
    this.movies=MOVIES;
  }
}
