import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceService } from 'src/service/place.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    PlaceFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
    
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
