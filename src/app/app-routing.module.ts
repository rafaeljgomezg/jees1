import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SmallGroupsComponent } from './components/small-groups/small-groups.component';
import { BaptismComponent } from './components/baptism/baptism.component';
import { ServicesComponent } from './components/services/services.component';
import { ServeComponent } from './components/serve/serve.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'involucrarse/smallgroups', component:SmallGroupsComponent},
  {path:'involucrarse/baptism', component:BaptismComponent},
  {path:'involucrarse/services', component:ServicesComponent},
  {path:'serve', component:ServeComponent},
  {path:'contact', component:ContactComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
