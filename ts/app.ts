// tell typescript to put inputModel before this class
/// <reference path="./inputModel.ts" />
class Startup {
    //this has been adopted by babel stage 2 :transform-class-properties
    //see:https://babeljs.io/docs/plugins/preset-stage-2/
    //also see: http://www.webpackbin.com/Vys1jFkNf
    private name = "bo chen ";
    get Value(){
        return this.name;
    }
    set Value(newValue: string){
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
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
var startup = new Startup()
