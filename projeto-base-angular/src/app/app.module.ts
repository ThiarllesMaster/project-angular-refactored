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

//This is the component responsible by the forms
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AuthenticationComponent } from './components/account/authentication/authentication/authentication.component';
import { LoginComponent } from './components/account/login/login/login.component';
//End elements of form

//Enable the interceptors and integration
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './https-interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { DialogComponent } from './components/dialog/dialog/dialog.component';

//Dialogs 
import { MatDialogModule } from '@angular/material/dialog';

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
    AuthenticationComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatSortModule, 
    HttpClientModule, 
    MatDialogModule
  ],
  providers: [
    AuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
