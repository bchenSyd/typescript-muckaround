> https://stackoverflow.com/a/54813533/6560291
Decorators by design can't change the type of a class. This is stil in discussion and it appears until the decorator proposal is finalized the [team](https://github.com/Microsoft/TypeScript/issues/4881#issuecomment-450938639) will not change the behavior. You can use mixins for this task (read about mixins in ts)

Using mixins the code would look something like:
```ts
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

const Greeter = classDecorator(class {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
});
type Greeter = InstanceType<typeof Greeter> // have the instance type just as if we were to declare a class

console.log(new Greeter("world").newProperty);
```