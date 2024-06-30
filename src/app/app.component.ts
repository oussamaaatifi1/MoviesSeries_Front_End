import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface movie {
  id : number;
  title : String;
  releaseDate : Date;
  genre : String;
  director : String;
  rating : number;
}
interface serie {
  title : String;
  startDate : Date;
  endDate : Date;
  genre : String;
  director : String;
  rating : number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet,NgFor],
  styleUrls: [
    '../assets/css/bootstrap-reboot.min.css',
    '../assets/css/bootstrap-grid.min.css',
    '../assets/css/owl.carousel.min.css',
    '../assets/css/slider-radio.css',
    '../assets/css/select2.min.css',
    '../assets/css/magnific-popup.css',
    '../assets/css/plyr.css',
    '../assets/css/main.css'
  ],
  standalone: true // Add this line to mark the component as standalone
})
export class AppComponent {
  title= 'Angular';
  movieList: movie[] = [];
  // UserList: User[] = [];
  serieList: serie[] = [];


  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.httpClient.get<movie[]>("http://localhost:8082/movies/api/all").subscribe(response =>{
      this.movieList = response;
      console.log(this.movieList);
    }, error =>{
      console.log("error occured while fetching film list");
    });
    this.httpClient.get<serie[]>("http://localhost:8082/series/api/all").subscribe(response => {
      this.serieList = response;
      console.log("Series fetched:", this.serieList);
    }, error => {
      console.log("Error occurred while fetching series list:", error);
    });
    
    
  }
  // getMovies() {
  //   this.httpClient.get<movie[]>("http://localhost:8082/movies/api/all").subscribe(response => {
  //     this.movieList = response;
  //     console.log(this.movieList);
  //   }, error => {
  //     console.log("Error occurred while fetching film list");
  //   });
  // }

  // addMovie(newMovie: movie) {
  //   this.httpClient.post<movie>("http://localhost:8082/movies/api/add", newMovie).subscribe(response => {
  //     this.movieList.push(response);
  //     console.log(this.movieList);
  //   }, error => {
  //     console.log("Error occurred while adding a new movie");
  //   });
  // }
}
