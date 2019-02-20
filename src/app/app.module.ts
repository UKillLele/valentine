import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { YesComponent } from './yes/yes.component';
import { NoComponent } from './no/no.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'yes', component:YesComponent },
  { path: 'no', component:NoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    YesComponent,
    NoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
