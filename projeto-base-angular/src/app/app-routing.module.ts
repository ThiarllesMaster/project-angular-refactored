import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './components/account/authentication.guard';
import { AuthenticationComponent } from './components/account/authentication/authentication/authentication.component';
import { LoginComponent } from './components/account/login/login/login.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

//Here we define the politic routers
const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    children: [
      {
        path: '', component: MainLayoutComponent,  // This is the layout which shows the layout (Header, Navigation and Footer)
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'users', component: UserListComponent}, 
          { path: 'books', component: BookListComponent}, 
          { path: 'create-book', component: BookCreateComponent}
        ]
      },
    ], canActivate: [AuthenticationGuard]
  }, 
  {
    path: '', component: AuthenticationComponent, 
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
      { path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
