import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { PreloadAllModules, RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component'
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OrderSummaryComponent } from './order/order-summary/order-summary.component'
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NotFoundComponent } from './not-found/not-found.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        RestaurantsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        ShoppingCartComponent,
        MenuItemComponent,
        ReviewsComponent,
        OrderSummaryComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {
            preloadingStrategy: PreloadAllModules
        }),
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        BrowserAnimationsModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
