import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth-guard';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 @NgModule ({
     imports : [RouterModule.forRoot(appRoutes)],
     exports :[RouterModule]
 })
 export class AppRoutingModule {

 }

//export const routing = RouterModule.forRoot(appRoutes);