import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
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
    delivery = 8

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    numberPattern = /^[0-9]*$/

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
            name: this.formBuilder.control('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            email: this.formBuilder.control('', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]),
            emailConfirmation: this.formBuilder.control('', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]),
            address: this.formBuilder.control('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            number: this.formBuilder.control('', [
                Validators.required,
                Validators.pattern(this.numberPattern)
            ]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [
                Validators.required
            ]),
        }, { validator: OrderComponent.equalsTo })
    }

    static equalsTo(group: AbstractControl): { [key: string]: boolean } {
        const email = group.get('email')
        const emailConfirmation = group.get('emailConfirmation')
        if (!email || !emailConfirmation) return
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true }
        }
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
