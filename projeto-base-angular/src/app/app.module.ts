import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/main-layout/structure/header/header.component';

//This is the component responsible to be at section header
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './layout/main-layout/structure/navigation/navigation.component';
//This is the component responsible to be at section navigator
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';


import { FooterComponent } from './layout/main-layout/structure/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

//This is the component to be used at Home section
import { MatCardModule } from '@angular/material/card';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

//This is the component responsible to add the buttons
import { MatButtonModule } from '@angular/material/button';
import { BookCreateComponent } from './components/book/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    BookListComponent,
    UserListComponent,
    BookCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
