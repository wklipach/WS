import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { RouterModule, Routes } from '@angular/router';


// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'location', component: LocationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
