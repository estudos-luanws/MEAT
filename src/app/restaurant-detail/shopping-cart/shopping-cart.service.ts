import { Injectable } from '@angular/core'
import { NotificationService } from 'app/shared/messages/notification.service'
import { MenuItem } from '../menu-item/menu-item.model'
import { CartItem } from './cart-item.model'

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(
        private notificationService: NotificationService
    ) { }

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        const foundItem = this.items.find((i => i.menuItem.id === item.id))
        if (foundItem) this.increaseQuantity(foundItem)
        else this.items.push(new CartItem(item))
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((sum, value) => sum + value, 0)
    }

    increaseQuantity(item: CartItem) {
        item.quantity++
    }

    decreaseQuantity(item: CartItem) {
        item.quantity--
        if (item.quantity <= 0) {
            this.removeItem(item)
        }
    }
}