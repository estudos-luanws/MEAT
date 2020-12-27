import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MenuItem } from './menu-item.model'

@Component({
    selector: 'mt-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
    @Input()
    menuItem: MenuItem

    @Output()
    eventEmitter = new EventEmitter

    constructor() { }

    ngOnInit() {
    }

    emitAddEvent() {
        this.eventEmitter.emit(this.menuItem)
    }
}
