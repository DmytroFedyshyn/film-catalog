import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Оголошення AppComponent
import { FilmComponent } from "./components/film/film.component";
import { FormsModule } from "@angular/forms";
import { FilterFilmsPipe } from './pipes/filterFilms.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent, // Додаємо AppComponent до декларацій
    FilmComponent,
    FilterFilmsPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Завантаження AppComponent
})
export class AppModule { }
