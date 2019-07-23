import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceListComponent } from './place-list/place-list.component';

const routes: Routes = [
  {path: 'places', component: PlaceListComponent},
  {path: 'addPlaces', component: PlaceFormComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
 
}
