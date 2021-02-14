const yakka: Fish = {
  swim() {
    // https://github.com/typescript-eslint/typescript-eslint/issues/1856
    console.log(abc) // scopeManager issue; `no-undef`, @typescript-eslint doesn't want to 
    // reinvent the wheels while compile is already handling it;
    console.log("i can swim!");
    return 1;
  },
};
