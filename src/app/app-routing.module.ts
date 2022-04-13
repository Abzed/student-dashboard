import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'new-student', pathMatch: 'full', component: NewstudentComponent},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'profile', pathMatch: 'full', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
