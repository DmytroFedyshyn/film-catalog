import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Film } from "../models/film";
import { films } from "./stub/filmsData";
import { genreList } from "./stub/genreList";
import { actorsList } from "./stub/actorsList";
import { ModalService } from "./services/modal.service";
import { emptyFilm } from "./stub/images/emptyFilm";
import { BehaviorSubject } from "rxjs";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  resetSearch = 'resetSearch';
  title = 'Film Catalog';
  filmName = '';
  selectedGenreId = '';
  selectedActorId = '';
  films: Film[] = films;
  sortedFilms: Film[] = films;
  genreList = genreList;
  actorsList = actorsList;
  isLikedFilm$ = new BehaviorSubject<boolean>(true);

  constructor(public modalService: ModalService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getSelectedGenreID = (genreName: string) => {
    const genreFromList = genreList.find(el => el.genre === genreName);
    return genreFromList?.id;
  }

  getSelectedActorID = (actorName: string) => {
    const actorFromList = actorsList.find(el => el.actor === actorName);
    return actorFromList?.id;
  };

  // getLikedFilm = () => {
  //   const likedFilm = localStorage.getItem('likedFilm');
  //   if (!likedFilm) {
  //     this.isLikedFilm$.next(false);
  //     return emptyFilm;
  //   }
  //   const chosenFilm = films.find(film => film.id.toString() === likedFilm);
  //   if (!chosenFilm) {
  //     this.isLikedFilm$.next(false);
  //     return emptyFilm;
  //   } else {
  //     this.isLikedFilm$.next(true);
  //     return chosenFilm;
  //   }
  // }

  onSelectGenre = ($event: MatSelectChange) => {
    if ($event.value === this.resetSearch) {
      this.sortedFilms = this.films;
      return;
    }
    this.sortedFilms = this.films.filter(film => film.genre.find(genre => genre.toString() === $event.value));
  };

  onSelectActor = ($event: MatSelectChange) => {
    if ($event.value === this.resetSearch) {
      this.sortedFilms = this.films;
      return;
    }
    this.sortedFilms = this.films.filter(film => film.actors.find(actor => actor.toString() === $event.value));
  };
}
