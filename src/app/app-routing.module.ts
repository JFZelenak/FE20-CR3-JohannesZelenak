import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "home", component: HomeComponent
  },{
    path: "menu", component: MenuComponent
  },{
    path: "details/:id", component: DetailsComponent
  },{
    path: "cart", component: OrderComponent
  },{
    path: "about", component: AboutComponent
  },{
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
