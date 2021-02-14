import { Agent } from "http";

interface Fish {
  swim():number;
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
