type PaymentOption = 'MON' | 'DEB' | 'REF'

export class Order {
    constructor(
        public address: string,
        public number: string,
        public optionalAddress: string,
        public paymentOption: PaymentOption,
        public orderItems: OrderItem[] = []
    ) { }
}

export class OrderItem {
    constructor(
        public quantity: number,
        public menuId: string
    ) { }
}