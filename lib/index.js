(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.checki = factory());
})(this, (function () { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var root = (require('find-root'))(__dirname);
    var pkg = require(root + '/package.json');
    var fs = require('fs').promises;
    var helper = /** @class */ (function () {
        function helper() {
            this.x_console = new (require('@concepto/console'))();
        }
        helper.prototype.copyright = function () {
            this.x_console.out({
                message: "\nCrafted with passion @ 2023 by ".concat(pkg.author, "."),
                color: 'dim'
            });
        };
        helper.prototype.decrypt = function (string) {
            var enc = require('simple-encryptor')(pkg.author + ' 2023-2023-2023-2023-2023-2023-2023-2023-2023');
            return enc.decrypt(string);
        };
        helper.prototype.extractKeys = function (str) {
            var extract = require('extractjs')({
                startExtract: '[',
                endExtract: ']',
            });
            var resp = [], str_ = str;
            if (str_.indexOf('{') != -1 && str_.indexOf('}') != -1) {
                var keys_ = extract('{[key]}', str_);
                if (keys_.key) {
                    resp.push(keys_.key);
                    str_ = str_.replaceAll('{' + keys_.key + '}', '');
                }
                if (str_.indexOf('{') != -1 && str_.indexOf('}') != -1) {
                    resp = resp.concat(this.extractKeys(str_));
                }
            }
            return resp;
        };
        helper.prototype.dirExists = function (dir) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fileExists(dir)];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        helper.prototype.createDir = function (dir) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fs.mkdir(dir, { recursive: true })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        helper.prototype.fileExists = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resp = false;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, fs.access(file)];
                        case 2:
                            resp = _a.sent();
                            resp = true;
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, resp];
                    }
                });
            });
        };
        helper.prototype.readFile = function (file, json) {
            if (json === void 0) { json = true; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fs.readFile(file, 'utf-8')];
                        case 1:
                            resp = _a.sent();
                            if (json)
                                return [2 /*return*/, JSON.parse(resp)];
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        helper.prototype.writeFile = function (file, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fs.writeFile(file, data, 'utf-8', {
                                    encoding: 'utf8',
                                    flag: 'w'
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        helper.prototype.isObjEmpty = function (obj) {
            //fastest algorithm
            for (var x in obj)
                return false;
            return true;
        };
        return helper;
    }());

    var helper_$1 = new helper();
    var prompts$1 = require('prompts');
    var x_console = new (require('@concepto/console'))();
    require('dotenv').config();
    var ref = {};
    //@todo read this from a theme.json file
    x_console.setColorTokens({
        '*': 'yellow',
        '#': 'cyan',
        '@': 'green'
    });
    var finish = function (exitcode) {
        // closing script
        console.log('\n');
        helper_$1.copyright();
        if (exitcode)
            process.exit(exitcode);
        process.exit();
    };
    var command = function (desc, usage, signature) {
        if (signature === void 0) { signature = ''; }
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var norm, _a, usage_1, option, aliases, short, main, ori, _b, _c, _d, _e, req, other_, _f, _g, err_1, other_, _h, _j, _k, _l, _m, _o, _p, _q;
                    return __generator(this, function (_r) {
                        switch (_r.label) {
                            case 0:
                                //let usage = target[key+'_usage']();
                                if (!this.usage)
                                    this.usage = {};
                                if (!this.commands)
                                    this.commands = {};
                                if (!this.signatures)
                                    this.signatures = {};
                                this.usage[key] = usage; //declare it for CLI knowledge
                                this.commands[key] = desc; //declare it for CLI knowledge
                                this.usage[key + ':validation'] = {}; //declare it for CLI knowledge
                                ref[key] = {};
                                if (signature == '' && usage && usage.length > 0) {
                                    this.signatures[key] = '[options]'; //default value when there are options
                                }
                                else {
                                    this.signatures[key] = signature; //assigned given value
                                }
                                norm = args[0] //cmdline args
                                ;
                                (norm._) ? norm._[0] : "";
                                if (!!('_init' in norm)) return [3 /*break*/, 22];
                                norm._.shift(); // remove command name
                                for (_a = 0, usage_1 = usage; _a < usage_1.length; _a++) {
                                    option = usage_1[_a];
                                    aliases = option;
                                    short = option[0][1] //first char
                                    ;
                                    //console.log('deco '+key+' dump',{aliases,short,usage,option});
                                    if (short != '-') {
                                        aliases.shift(); // remove short from aliases
                                        main = aliases.shift().replace('--', '');
                                        aliases.shift(); // remove desc
                                        if (aliases.length > 0 && typeof aliases[0] === 'object') {
                                            ref[key][main] = aliases[0];
                                            //console.log('deco dump '+key+' usage',{ option, aliases });
                                            aliases.pop(); // remove validation
                                        }
                                        if (norm[short]) {
                                            norm[main] = norm[short]; // assign value to 'main' property name
                                            delete norm[short]; //erases short type
                                        }
                                        // assign all posible combinations to main from norm
                                        for (ori in norm) {
                                            if (ori != '_' && aliases.includes(ori)) {
                                                if (norm[ori]) {
                                                    norm[main] = norm[ori];
                                                    delete norm[ori];
                                                }
                                            }
                                        }
                                    }
                                }
                                _b = ref[key];
                                _c = [];
                                for (_d in _b)
                                    _c.push(_d);
                                _e = 0;
                                _r.label = 1;
                            case 1:
                                if (!(_e < _c.length)) return [3 /*break*/, 21];
                                _d = _c[_e];
                                if (!(_d in _b)) return [3 /*break*/, 20];
                                req = _d;
                                if (!!(req in norm)) return [3 /*break*/, 20];
                                if (!(ref[key][req].error && ref[key][req].error != '')) return [3 /*break*/, 2];
                                //required file was not given and error message specified to halt process
                                if (ref[key][req].arg && norm[ref[key][req].arg]) {
                                    other_ = norm[ref[key][req].arg];
                                    if (ref[key][req].arg == '_') {
                                        if (other_.length > 0) {
                                            norm[req] = other_[0];
                                        }
                                        else {
                                            x_console.out({
                                                message: x_console.colorize(ref[key][req].error),
                                                color: 'brightRed'
                                            });
                                            finish(20);
                                        }
                                    }
                                    else {
                                        norm[req] = other_;
                                    }
                                }
                                else if (ref[key][req].arg) {
                                    x_console.out({
                                        message: x_console.colorize(ref[key][req].error),
                                        color: 'brightRed'
                                    });
                                    finish(20);
                                }
                                return [3 /*break*/, 20];
                            case 2:
                                if (!(ref[key][req].prompt && ref[key][req].prompt != '')) return [3 /*break*/, 8];
                                _r.label = 3;
                            case 3:
                                _r.trys.push([3, 6, , 7]);
                                if (!!norm[req]) return [3 /*break*/, 5];
                                _f = norm;
                                _g = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].prompt)
                                    })];
                            case 4:
                                _f[_g] = (_r.sent()).value;
                                if (!norm[req] && ref[key][req].default && ref[key][req].default != '')
                                    norm[req] = ref[key][req].default;
                                _r.label = 5;
                            case 5: return [3 /*break*/, 7];
                            case 6:
                                err_1 = _r.sent();
                                x_console.out({ message: 'error prompt', data: err_1 });
                                return [3 /*break*/, 7];
                            case 7: return [3 /*break*/, 20];
                            case 8:
                                if (!(ref[key][req].required && ref[key][req].required != '')) return [3 /*break*/, 20];
                                if (!(ref[key][req].arg && norm[ref[key][req].arg])) return [3 /*break*/, 14];
                                other_ = norm[ref[key][req].arg];
                                if (!(ref[key][req].arg == '_')) return [3 /*break*/, 12];
                                if (!(other_.length > 0)) return [3 /*break*/, 9];
                                norm[req] = other_[0];
                                return [3 /*break*/, 11];
                            case 9:
                                _h = norm;
                                _j = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 10:
                                _h[_j] = (_r.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _r.label = 11;
                            case 11: return [3 /*break*/, 13];
                            case 12:
                                norm[req] = other_;
                                _r.label = 13;
                            case 13: return [3 /*break*/, 16];
                            case 14:
                                if (!ref[key][req].arg) return [3 /*break*/, 16];
                                _k = norm;
                                _l = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 15:
                                _k[_l] = (_r.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _r.label = 16;
                            case 16:
                                //test if ENV key is defined; if so assign it
                                if (ref[key][req].env && process.env[ref[key][req].env]) {
                                    norm[req] = process.env[ref[key][req].env];
                                }
                                //test if DEFAULT key is defined; if so assign it
                                if (ref[key][req].default && ref[key][req].default.trim() != '') {
                                    norm[req] = ref[key][req].default;
                                }
                                //test if ENCRIPTED_DEFAULT key is defined; if so assign it
                                if (ref[key][req].encrypted_default && ref[key][req].encrypted_default.trim() != '') {
                                    norm[req] = helper_$1.decrypt(ref[key][req].encrypted_default);
                                }
                                if (!(!(req in norm) && !ref[key][req].options)) return [3 /*break*/, 18];
                                _m = norm;
                                _o = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 17:
                                _m[_o] = (_r.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _r.label = 18;
                            case 18:
                                if (!(!(req in norm) && ref[key][req].options)) return [3 /*break*/, 20];
                                _p = norm;
                                _q = req;
                                return [4 /*yield*/, prompts$1({
                                        type: 'select',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required),
                                        choices: ref[key][req].options
                                    })];
                            case 19:
                                _p[_q] = (_r.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _r.label = 20;
                            case 20:
                                _e++;
                                return [3 /*break*/, 1];
                            case 21:
                                //console.log('new args',norm);
                                //console.log('');
                                //call original method (only if not from constructor initialization)
                                original.apply(this, [norm]);
                                _r.label = 22;
                            case 22: return [2 /*return*/];
                        }
                    });
                });
            };
        };
    };
    var cli = function (constructor) {
        constructor.prototype.usage = {};
        constructor.prototype.commands = {};
        for (var method in constructor.prototype) {
            if (!['usage', 'commands'].includes(method)) {
                constructor.prototype[method]({ _init: true });
            }
        }
    };

    //generic command class
    var prompts = require('prompts');
    var helper_ = new helper();
    var Command = /** @class */ (function () {
        function Command(arg) {
            if (arg.silent) { // --silent
                this.x_console = new (require('@concepto/console'))({ silent: true });
            }
            else {
                this.x_console = new (require('@concepto/console'))();
            }
            if (arg.debug) {
                this.debug_ = true; // --debug
                this.x_console.out = this.x_console.outT;
            }
            this.arg = _assign(_assign({}, arg), { cmd_: '' }); //cmd_ is the 
            if (arg._ && arg._.length > 0)
                this.arg.cmd_ = arg._[0].toLowerCase();
            this.helper_ = helper_;
        }
        Command.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var a, b;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.init()];
                        case 1:
                            a = _a.sent();
                            if (a == false)
                                this.finish(1);
                            return [4 /*yield*/, this.process()];
                        case 2:
                            b = _a.sent();
                            if (b == false)
                                this.finish(2);
                            this.finish();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Command.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, true];
                });
            });
        };
        Command.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //this is for the command instance to overwrite
                    return [2 /*return*/, true];
                });
            });
        };
        Command.prototype.finish = function (exitcode) {
            // closing script
            console.log('\n');
            helper_.copyright();
            if (exitcode)
                process.exit(exitcode);
        };
        Command.prototype.ask = function (question, validation) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                validate: function (value) {
                                    if (validation)
                                        return validation(value);
                                    return true;
                                }
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.choose = function (question, options, selected) {
            if (selected === void 0) { selected = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'select',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                choices: options,
                                initial: selected
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.multi = function (question, options, max, hint) {
            if (max === void 0) { max = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'multiselect',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                choices: options,
                                max: max,
                                hint: (hint) ? hint : '- Space to select. Return to submit'
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.logPrefix = function (prefix, color) {
            if (color === void 0) { color = 'yellow'; }
            var params = { prefix: prefix, color: color };
            this.x_console.setPrefix(params);
        };
        Command.prototype.log = function (message, color, data) {
            var params = { message: message };
            var test = message.toLowerCase();
            if (test.indexOf('error:') != -1 || test.indexOf('error:') != -1)
                params.color = 'brightRed';
            if (data)
                params.data = data;
            if (color)
                params.color = color;
            params.message = this.x_console.colorize(params.message);
            this.x_console.out(params);
        };
        Command.prototype.debug = function (message, data) {
            var params = { prefix: 'debug:' + this.x_console.config.prefix, message: message, color: 'dim' };
            var test = message.toLowerCase();
            if (test.indexOf('error:') != -1 || test.indexOf('error:') != -1)
                params.color = 'brightRed';
            if (data)
                params.data = data;
            this.x_console.out(params);
        };
        Command.prototype.title = function (title, color, border) {
            if (border === void 0) { border = 'white'; }
            var params = { title: title };
            if (color)
                params.titleColor = color;
            if (border)
                params.color = border;
            this.x_console.title(params);
        };
        Command.prototype.spinner = function (color) {
            var params = {};
            if (color)
                params.color = color;
            return this.x_console.spinner(params);
        };
        Command.prototype.setColorTokens = function (colorTokens) {
            this.x_console.setColorTokens(colorTokens);
        };
        return Command;
    }());

    require('fs').promises; require('path');
    process;
    var Init = /** @class */ (function (_super) {
        __extends(Init, _super);
        function Init() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Init.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green'
                    });
                    //console.log('this.arg',this.arg);
                    //const file = path.join(process.cwd(), this.arg.data)
                    //set defaults
                    //output directory 
                    if (!this.arg.path)
                        this.arg.path = process.cwd(); // current path
                    //this.arg.path = path.join(process.cwd(), this.arg.output)
                    //this.log(`Processing *${this.arg.data}* as source`);
                    //this.spinner = this.x_console.spinner({ color:'yellow' });
                    return [2 /*return*/, true];
                });
            });
        };
        Init.prototype.validate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // ** VALIDATIONS **
                    // optional args: openai,path key
                    //read given JSON file, validate format
                    //self.finish(12);
                    return [2 /*return*/, true];
                });
            });
        };
        Init.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var spinner;
                return __generator(this, function (_a) {
                    // ** PROCESS **    
                    this.debug('using folder: ' + this.arg.path);
                    spinner = this.x_console.spinner({ color: 'yellow' });
                    spinner.start('Analyzing current folder ...');
                    // read current path
                    // read package.json of current path
                    // check that this project is a real react project
                    // add jest, react-testing-library, checki as dev dependencies
                    // add checki scripts to package.json
                    // create checki.config.json on root with default values
                    // ask openAI API key to user if not defined as env variable or within existing checki.config.json
                    spinner.succeed('Prepared for generating tests');
                    //ready
                    this.log("checki initialized", 'green');
                    return [2 /*return*/];
                });
            });
        };
        return Init;
    }(Command));

    require('fs').promises; require('path');
    process;
    var JsDoc = /** @class */ (function (_super) {
        __extends(JsDoc, _super);
        function JsDoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JsDoc.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green'
                    });
                    //console.log('this.arg',this.arg);
                    //const file = path.join(process.cwd(), this.arg.data)
                    //set defaults
                    //output directory 
                    //if (!this.arg.path) this.arg.path = process.cwd(); // current path
                    //this.arg.path = path.join(process.cwd(), this.arg.output)
                    //this.log(`Processing *${this.arg.data}* as source`);
                    //this.spinner = this.x_console.spinner({ color:'yellow' });
                    return [2 /*return*/, true];
                });
            });
        };
        JsDoc.prototype.validate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // ** VALIDATIONS **
                    // optional args: openai,path key
                    //read given JSON file, validate format
                    //self.finish(12);
                    return [2 /*return*/, true];
                });
            });
        };
        JsDoc.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var spinner;
                return __generator(this, function (_a) {
                    spinner = this.x_console.spinner({ color: 'yellow' });
                    spinner.start('Analyzing current folder ...');
                    // read current path
                    // check there is a checki.config.json file
                    // if not, run init cmd first
                    // if yes, continue 
                    // ask openAI API key to user if not defined as env variable or within existing checki.config.json
                    // read project structure
                    // read all jsx, or tsx files
                    // classify which are components
                    // read each component file and generate test stories for each one
                    // add them as jsdoc comment array on top of each component within @checki key
                    spinner.succeed('Prepared for generating tests');
                    //ready
                    this.log("checki initialized", 'green');
                    return [2 /*return*/];
                });
            });
        };
        return JsDoc;
    }(Command));

    var cmds = {
        Init: Init,
        JsDoc: JsDoc
    };

    require('dotenv').config();
    //
    var checki = /** @class */ (function () {
        function checki(arg) {
        }
        checki.prototype.init = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (new cmds.Init(arg)).run()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        checki.prototype.jsdoc = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (new cmds.JsDoc(arg)).run()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            command('Initializes a react project with checki scripts', [
                ['-o', '--openai', 'OpenAI apikey.'],
                ['-p', '--path', "Path of react project. Defaults to current path"],
            ], '[options]')
        ], checki.prototype, "init", null);
        __decorate([
            command('Generates jsdoc test stories for each component within project', [
                ['-o', '--openai', 'OpenAI apikey.'],
                ['-p', '--path', "Path of react project. Defaults to current path"],
            ], '[options]')
        ], checki.prototype, "jsdoc", null);
        checki = __decorate([
            cli
        ], checki);
        return checki;
    }());

    return checki;

}));
