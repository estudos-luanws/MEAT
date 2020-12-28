import { Component, ContentChild, Input, OnInit } from '@angular/core'
import { FormControlName } from '@angular/forms'

@Component({
    selector: 'mt-input-container',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() label: string
    @Input() errorMessage: string

    @ContentChild(FormControlName) input: FormControlName

    constructor() { }

    ngOnInit() {
    }

    hasSuccess() { return this.input.valid && (this.input.dirty || this.input.touched) }
    hasError() { return this.input.invalid && (this.input.dirty || this.input.touched) }
}
