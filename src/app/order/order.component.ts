import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model'
import { RadioOption } from 'app/shared/radio/radion-option.model'
import { Order, OrderItem } from './order.model'
import { OrderService } from './order.service'

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    form: FormGroup
    delivery: number = 8

    paymentOptions: RadioOption<string>[] = [
        { label: 'Dinheiro', value: 'MON' },
        { label: 'Cartão de débito', value: 'DEB' },
        { label: 'Cartão refeição', value: 'REF' },
    ]

    constructor(
        private orderService: OrderService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            email: this.formBuilder.control(''),
            emailConfirmation: this.formBuilder.control(''),
            address: this.formBuilder.control(''),
            number: this.formBuilder.control(''),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control(''),
        })
    }

    itemsValue(): number {
        return this.orderService.itemsValue()
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

    checkOrder(order: Order) {
        order.orderItems = this.cartItems()
            .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
        this.orderService.checkOrder(order).subscribe((orderId: string) => {
            this.orderService.clear()
            this.router.navigate(['/order-summary'])
        })
    }
}
