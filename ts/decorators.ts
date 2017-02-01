//decorator 
export function ClassDecorator(construtor) {
    debugger
}

//decorator factory, class level; ==> deal with static members!!
export function ClassDecoratorFactory():ClassDecorator {
  return (target)=>{
      debugger
      //target here is construtor , remember that static methods are defined at construtor level!!!!!
      target.AnotherStaticMethod = function(){
          console.log('target is constructor. you deal with static members here;')
      }
  }
}

//declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// definition = <T>(target:Object) => TypedPropertyDescriptor<T> | void
// above code says: definition is a method, it's a generic method based on type <T>; 
// it takes a para named `target` and returns either void or TypedPropertyDescriptor<T>
export function MethodDecorator(value):MethodDecorator {
    return function (target, propertyKey, descriptor: PropertyDescriptor) {
        debugger
        console.log(`target is Myclass.prototype, you deal with prototype members here.propertyKey = ${propertyKey} descriptor is ${JSON.stringify(descriptor)}`)
        descriptor.value(); //we know that descriptor.value is the method we are decorating; so we can call the method here
        descriptor.enumerable = value
    }

}