import { Injectable } from '@angular/core'
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model'
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service'
import { Observable } from 'rxjs/Observable'
import { Order } from './order.model'
import 'rxjs/add/operator/map'
import { Headers, Http, RequestOptions } from '@angular/http'
import { MEAT_API } from 'app.api'

@Injectable()
export class OrderService {
    constructor(
        private cartService: ShoppingCartService,
        private http: Http
    ) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers })
        ).map(response => response.json()).map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }
}