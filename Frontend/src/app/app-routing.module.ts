import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogviewComponent } from './blogview/blogview.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',component:BlogviewComponent},
  {path:'signin',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
