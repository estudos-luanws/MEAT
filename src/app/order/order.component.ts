import { Component, OnInit } from '@angular/core'
import { RadioOption } from 'app/shared/radio/radion-option.model'

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    paymentOptions: RadioOption<string>[] = [
        { label: 'Dinheiro', value: 'MON' },
        { label: 'Cartão de débito', value: 'DEB' },
        { label: 'Cartão refeição', value: 'REF' },
    ]

    constructor() { }

    ngOnInit() {
    }

}
