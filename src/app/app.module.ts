import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeRendererDirective } from './directive/tree-renderer.directive';
import { TestComponent } from './test/test.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'location', component: LocationComponent },
  {path: 'test', component: TestComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    HomeComponent,
    TreeRendererDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
