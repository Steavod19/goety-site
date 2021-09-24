import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './routes/home/home.component';
// import {ContactComponent} from './routes/contact';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    // {
    //   path: 'search',
    //   component: SearchComponent
    // }
  ]
},
// {
//   path: 'contact',
//   loadChildren: '.routes/contact/contact.module#ContactModule'
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
