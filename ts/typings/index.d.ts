//approach 1:
declare function globalFunction1(name: string);
//could be a node function, jQuery function, whatwg-fetch method



//approach 2:
interface GlobalFunction2 {
    (para: string): any; //takes one string para, and returns any 
}
declare var globalFunction2: GlobalFunction2;