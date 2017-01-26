export function ClassDecorator(construtor) {
    debugger
    console.log(construtor.prototype)
    console.log(construtor)
}




export function MethodDecorator(value) {
    return function (target, propertyKey, descriptor: PropertyDescriptor) {
        debugger
        descriptor.set('alfjsl')
        descriptor.enumerable = value
    }

}