import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core'
import { FormControlName, NgModel } from '@angular/forms'

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

    input: NgModel | FormControlName

    @ContentChild(NgModel) model: NgModel
    @ContentChild(FormControlName) control: FormControlName

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.input = this.model || this.control
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName')
        }
    }

    hasSuccess() { return this.input.valid && (this.input.dirty || this.input.touched) }
    hasError() { return !this.input.valid && (this.input.dirty || this.input.touched) }
}
