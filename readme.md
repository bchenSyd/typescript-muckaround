# run
`tsc -p .`
or
`tsc ts/react/MyComponent.tsx  --jsx preserve  --outDir dist/react/`

# typings
`$typings install redux=https://raw.githubusercontent.com/andrew-w-ross/typings-redux/master/redux.d.ts  --save`
redux
`-- (No dependencies)


`$ typings install react-redux --save`
typings WARN badlocation "github:andrew-w-ross/typings-redux" is mutable and may change, consider specifying a commit hash
typings INFO reference Stripped reference "https://raw.githubusercontent.com/andrew-w-ross/typings-react-redux/21202533f75a73d4fa4c50e0357aaf23739fcabb/typings/main.d.ts" d
uring installation from "react-redux" (main)
react-redux
`-- redux

# tslint
1. install tslint vscode integration
2. switch on tslint by File->Preferences->Settings->Workspace Settings-> settings.json
`{ "tslint.enable": true }` //it's switched on by default, so no need to do this actually
you get an error from vscode output saying
 To use TSLint in this workspace please install tslint using 'npm install tslint' or globally using 'npm install -g tslint'.
You need to reopen the workspace after installing tslint.
3. npm install --save tslint (prefer to install `tslint` locally) and reopen the workspace
   * after this step, on vscode OUTPUT window, tslint dropdown, you are supposed to see `[Info  - 3:17:08 pm] Linter is running.`
4. config tslint.json and add rules
   * e.g. "semicolon": [true,"always"], //native rules
5. you should be able to see tslint warnings now