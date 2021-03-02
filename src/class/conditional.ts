type Test = {
    name: string;
    age?: number;
  };
  
  type Complete<Test> = {
    [P in keyof Required<Test>]: Pick<Test, P> extends Required<Pick<Test, P>>
      ? Test[P]
      : Test[P] | undefined;
  };
  
  const test1: Complete<Test> = { name: "bo chen" }; // erro: age is missing
  const test2: Complete<Test> = { name: "joanna chen", age: undefined }; //ok