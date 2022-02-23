import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { NavComponent } from './general/nav/nav.component';
import { FooterComponent } from './general/footer/footer.component';
import { DefaultPageComponent } from './general/default-page.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './general/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DefaultPageComponent,
    LoginComponent,
    PageNotFoundComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
