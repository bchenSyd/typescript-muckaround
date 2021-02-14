interface Fish {
  swim(): number;
}

// d.ts output: declare const ross: Person;
const ross: Person = {
  name: "Ross S",
  age: 39,
};

// once you have `export` keywork, you convert you currnet file from "script" to "module"
// and Fish won't be visible globally
// export const Gareth: Person ={
//   name: "Gareth J",
//   age:40
// }

// declare type setStateFunction<T> = (value: T) => T;
type setStateFunction<T> = (value: T) => T;
// declare const TestFunction: setStateFunction<number>;
const TestFunction: setStateFunction<number> = (val) => val + 1;
TestFunction(1);
