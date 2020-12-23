import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    reviews: Observable<Array<{
        restaurantId: string
        name: string
        date: Date
        rating: number
        comments: string
    }>>

    constructor(
        private restaurantsService: RestaurantsService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.reviews = this.restaurantsService
            .reviewsOfRestaurant(this.activatedRoute.parent.snapshot.params['id'])
    }
}
