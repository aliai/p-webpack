import { log } from "./helper";
import something from "./my-loader?foo=bar!./me.ali";

log(something);
log("Hello world");
