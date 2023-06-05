//import is used to get function and variables from another file
//export is used to give access of functions and variables to another file
import { capitalizeString } from "./export_file";

const cap = capitalizeString("Hello!");

console.log(cap);

