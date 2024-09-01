import {Component, Input} from "@angular/core";
import {Film} from "../../../models/film";
import {genreList} from "../../stub/genreList";
import { actorsList } from "../../stub/actorsList";
import {films} from "../../stub/filmsData"

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent {

  @Input() film: Film
  genreList = genreList
  actorsList = actorsList
  films = films
  details = false

  getFilmGenres = (film: Film) => {
    const sortedFilmGenres = film.genre.map((genreNumber) => genreList.filter(el => Number(el.id) === genreNumber))
    return sortedFilmGenres.flat(1).map(el => el.genre).join(', ')
  }

  getFilmActors = (film: Film) => {
    const sortedFilmActors = film.actors.map((actorNumber) => actorsList.filter(el => Number(el.id) === actorNumber));
    return sortedFilmActors.flat(1).map(actor => actor.actor).join(', ');
  }
}
