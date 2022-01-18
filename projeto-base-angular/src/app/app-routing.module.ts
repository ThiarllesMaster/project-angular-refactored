import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
          { path: 'home', component: HomeComponent }
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
