// https://stackoverflow.com/a/12930147/6560291
// right... the `/// <reference>` tags is deprectead in favour of a tsconfig.json file
//   /// <reference path="../typings/jquery.d.ts"/>
//   /// <reference path="components/someclass.ts"/>
/** http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * If the "files" and "include" are both left unspecified, the compiler defaults to including all TypeScript (.ts, .d.ts and .tsx) files 
 * in the containing directory and subdirectories except those excluded using the "exclude" property. 
 * JS files (.js and .jsx) are also included if allowJs is set to true
 */
/*    /// <reference path="modules/react-redux/index.d.ts" />    */


/// <reference path="modules/redux/index.d.ts" />
