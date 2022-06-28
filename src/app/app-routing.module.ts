import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"home", component:BodyComponent,
  },

  {
    path:"", component:BodyComponent,
  },

  {
    path:"about", component:AboutComponent,
  },

  {
    path:"contact", component:ContactComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
