import { Component, OnInit } from '@angular/core'
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model'
import { RadioOption } from 'app/shared/radio/radion-option.model'
import { OrderService } from './order.service'

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    paymentOptions: RadioOption<string>[] = [
        { label: 'Dinheiro', value: 'MON' },
        { label: 'Cartão de débito', value: 'DEB' },
        { label: 'Cartão refeição', value: 'REF' },
    ]

    constructor(private orderService: OrderService) { }

    ngOnInit() {
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems()
    }

    increaseQuantity(item: CartItem) {
        this.orderService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this.orderService.decreaseQuantity(item)
    }

    remove(item: CartItem) {
        this.orderService.remove(item)
    }
}
