import * as wasm from "./utils_bg.wasm";
import { __wbg_set_wasm } from "./utils_bg.js";
__wbg_set_wasm(wasm);
export * from "./utils_bg.js";
