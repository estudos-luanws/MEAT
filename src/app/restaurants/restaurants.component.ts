import { Component, OnInit } from '@angular/core'
import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'
import { animate, state, style, transition, trigger } from '@angular/animations'

type SearchBarState = 'hidden' | 'visible'

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css'],
    animations: [
        trigger('toggleSearch', [
            state('hidden', style({
                opacity: 0,
                'max-height': '0px',
            })),
            state('visible', style({
                opacity: 1,
                'max-height': '70px',
                'margin-top': '20px',
            })),
            transition('* => *', animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {
    restaurants: Restaurant[]
    searchBarState: SearchBarState = 'hidden'

    constructor(private restaurantService: RestaurantsService) { }

    ngOnInit() {
        this.restaurantService.restaurants()
            .subscribe(restaurants => this.restaurants = restaurants)
    }

    toggleSearch() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
    }
}
