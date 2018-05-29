import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule'},
  {path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
  {path: '**', redirectTo: 'homepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
