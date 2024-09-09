import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'] // Ensure you have this CSS file
})
export class FavouritesComponent implements OnInit {
  favouriteJobs: any[] = []; // Initialize with an empty array or fetch data from a service
  username: string = ''; // Initialize or fetch the username

  ngOnInit(): void {
    // Fetch favourite jobs from a service or API
    this.username = 'John Doe'; // Set a default or fetched username
  }

  removeFromFavourites(job: any): void {
    // Implement the logic to remove a job from favourites
    console.log(`Removing job: ${job.title}`);
  }
}
