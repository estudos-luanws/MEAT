import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Input, OnInit } from '@angular/core'
import { Restaurant } from './restaurant.model'

type RestaurantAnimationState = 'ready' | 'void'

@Component({
    selector: 'mt-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css'],
    animations: [
        trigger('restaurantAppeared', [
            state('ready', style({ opacity: 1 })),
            transition('void => ready', [
                style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
                animate('300ms 0s ease-in-out')
            ])
        ])
    ]
})
export class RestaurantComponent implements OnInit {
    @Input() restaurant: Restaurant

    restaurantAnimationState: RestaurantAnimationState = 'ready'

    constructor() { }

    ngOnInit() {
    }
}
