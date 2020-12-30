import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MenuItem } from './menu-item.model'

@Component({
    selector: 'mt-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    animations: [
        trigger('menuItemAppeared', [
            state('ready', style({ opacity: 1 })),
            transition('void => ready', [
                style({ opacity: 0, transform: 'translateY(-10px)' }),
                animate('300ms 0s ease-in')
            ])
        ])
    ]
})
export class MenuItemComponent implements OnInit {
    @Input() menuItem: MenuItem
    @Output() eventEmitter = new EventEmitter

    constructor() { }

    ngOnInit() {
    }

    emitAddEvent() {
        this.eventEmitter.emit(this.menuItem)
    }
}
