import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserStartPageComponent } from './user-start-page/user-start-page.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { AccountSettingsComponent } from 'src/app/account-settings/account-settings.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'userStartPage', component: UserStartPageComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: AccountSettingsComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
