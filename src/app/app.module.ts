import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FavouritesComponent } from './favourites/favourites.component'; // Import FavouritesComponent

@NgModule({
  declarations: [ // Move FavouritesComponent here
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Keep FormsModule here
    RouterModule.forRoot(routes) // Import the routes
  ],
  providers: [],
  bootstrap: [] // No bootstrap component needed if using standalone components
})
export class AppModule { }
