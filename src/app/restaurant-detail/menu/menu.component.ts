import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable'
import { MenuItem } from '../menu-item/menu-item.model'

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: Observable<MenuItem[]>

    constructor(
        private restaurantsService: RestaurantsService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.menuItems = this.restaurantsService
            .menuOfRestaurant(this.activatedRoute.parent.snapshot.params['id'])
    }
}
