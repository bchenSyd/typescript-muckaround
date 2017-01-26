// tell typescript to put inputModel before this class. vs does that automatically for you
//             not required in vscode /// <reference path="./inputModel.ts" />
import {ClassDecorator, MethodDecorator} from './decorators'

@ClassDecorator /* when applying class level decorators, target passed into decorator/decorator factory is constructor */
/* you can refer to the compiled result in lib/app.js
MyClass = __decorate([
    decorators_1.ClassDecorator
], MyClass);

 */
class MyClass {
    //this has been adopted by babel stage 2 :transform-class-properties
    //see:https://babeljs.io/docs/plugins/preset-stage-2/
    //also see: http://www.webpackbin.com/Vys1jFkNf
    private name = "bo chen ";

    @MethodDecorator(true)
    /*
    when apply method decorators, target passed into decorator/decorator factory is prototype 
    you can refer to the compiled result in lib/app.ts
__decorate([
    decorators_1.MethodDecorator(true)
], MyClass.prototype, "myfunction", null);
     */
    myfunction(){

    }
    
    get NameGetter(){
        return this.name;
    }
    set NameSetter(newValue: string){
        this.name = newValue;
    }

    getName():string{
        return this.name
    }

    simpleFunc = (para: inputModel) :void=>{
            console.log(`this.name = ${this.name}`)
    }
    // becuase of type inference, specifying the return type is optional
    public static main(): number {
        console.log('static main method is called here');
        return 0;
    }
}

MyClass.main();
var instance = new MyClass()
console.log(instance.NameGetter)
