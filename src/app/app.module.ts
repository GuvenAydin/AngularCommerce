import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopComponent } from './components/top/top.component';
import { HeadComponent } from './components/head/head.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeTrendingProductsComponent } from './components/home-trending-products/home-trending-products.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    HeadComponent,
    HomeComponent,
    CartComponent,
    NavigationComponent,
    HomeTrendingProductsComponent,
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
