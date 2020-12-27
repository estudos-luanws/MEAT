import { MenuItem } from '../menu-item/menu-item.model'
import { CartItem } from './cart-item.model'

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        const foundItem = this.items.find((i => i.menuItem.id === item.id))
        if (foundItem) this.increaseQuantity(foundItem)
        else this.items.push(new CartItem(item))
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
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