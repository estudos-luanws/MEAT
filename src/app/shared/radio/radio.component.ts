import { Component, forwardRef, Input, OnInit } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { RadioOption } from './radion-option.model'

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent<T> implements OnInit, ControlValueAccessor {
    @Input()
    options: RadioOption<T>[]

    value: T

    onChange: any

    constructor() { }

    ngOnInit() {
    }

    writeValue(obj: any): void {
        this.value = obj
    }
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {
    }

    setValue(value: T) {
        this.value = value
        this.onChange(this.value)
    }
}
