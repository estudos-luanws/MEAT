import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
    selector: 'mt-input-container',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
    @Input()
    label: string

    @Input()
    errorMessage: string

    input: NgModel

    @ContentChild(NgModel) model: NgModel

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.input = this.model
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
        }
    }

    hasSuccess() { return this.input.valid && (this.input.dirty || this.input.touched) }
    hasError() { return !this.input.valid && (this.input.dirty || this.input.touched) }
}
