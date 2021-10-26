import { Body6Component } from './home/body6/body6.component';
import { Body5Component } from './home/body5/body5.component';
import { Body4Component } from './home/body4/body4.component';
import { Body3Component } from './home/body3/body3.component';
import { Body2Component } from './home/body2/body2.component';
import { Body1Component } from './home/body1/body1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'body1',component:Body1Component},
  {path:'body2',component:Body2Component},
  {path:'body3',component:Body3Component},
  {path:'body4',component:Body4Component},
  {path:'body5',component:Body5Component},
  {path:'body6',component:Body6Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
