import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'my-jobs', component: MyJobsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'job-profile', component: JobProfileComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'view-jobs', component: ViewJobsComponent },
  { path: 'create-jobs', component: CreateJobsComponent },
  { path: 'view-applications', component: ViewApplicationsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];
