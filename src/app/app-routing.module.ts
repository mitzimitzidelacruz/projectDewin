import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [

{path: '', redirectTo: '/login',
pathMatch: 'full'},
//ruta que necesita validacion
{path: 'private', component:PrivateTasksComponent, canActivate: [AuthGuard]},
{path: 'tasks', component: TasksComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'home', component: HomeComponent},
{path: 'careers', component: CareersComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
