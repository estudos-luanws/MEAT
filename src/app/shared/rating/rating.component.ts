import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'mt-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
    rates: number[] = [1, 2, 3, 4, 5]
    rate: number = 0
    viewRate: number = 0
    @Output() rated = new EventEmitter<number>()

    constructor() { }

    ngOnInit() {
    }

    setRate(rate: number) {
        this.rate = rate
        this.rated.emit(rate)
    }

    setViewRate(rate: number) {
        this.viewRate = rate
    }

    clearViewRate() {
        this.viewRate = this.rate
    }
}
