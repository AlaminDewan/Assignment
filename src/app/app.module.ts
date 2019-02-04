import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes=[
  {path:'personal-loan',component:AppComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
