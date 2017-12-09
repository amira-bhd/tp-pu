import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CompteComponent } from './compte/compte.component';
import { FooterComponent } from './footer/footer.component';
import { bookFilterPipe } from './about/book-filter.pipe';
import { StarComponent } from './star/star.component';
import {HttpModule} from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './detail/book-detail.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    SubscribeComponent,
    CompteComponent,
    FooterComponent,
    bookFilterPipe,
    StarComponent,
    BookDetailComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     
      {path: 'book/:id/:n/:a/:d/:r/:p/:u', component: BookDetailComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
