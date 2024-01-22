System.register("chunks:///main.js", ['cc'], function () {
  var cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component, game$1, Animation, UIOpacity, profiler, AssetManager, macro, DynamicAtlasManager, View, ResolutionPolicy, CCString, CCInteger, Director, AudioSource, resources, AudioClip, Sprite, ccenum, math, CCBoolean, EventTouch, Vec3, Input, find, Camera, screen, sys, Graphics, Font, ERigidBody2DType, RigidBody2D, sp, Vec2, Collider2D, Contact2DType, SpriteFrame, HingeJoint2D, RelativeJoint2D, BoxCollider2D, Prefab, CircleCollider2D, Mask, PolygonCollider2D, NodePool, tween, Tween, PhysicsSystem2D, ERaycast2DType, Intersection2D, JsonAsset, ProgressBar, EPhysics2DDrawFlags, Widget, Layout$3, ParticleSystem2D;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
      game$1 = module.game;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
      profiler = module.profiler;
      AssetManager = module.AssetManager;
      macro = module.macro;
      DynamicAtlasManager = module.DynamicAtlasManager;
      View = module.View;
      ResolutionPolicy = module.ResolutionPolicy;
      CCString = module.CCString;
      CCInteger = module.CCInteger;
      Director = module.Director;
      AudioSource = module.AudioSource;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Sprite = module.Sprite;
      ccenum = module.ccenum;
      math = module.math;
      CCBoolean = module.CCBoolean;
      EventTouch = module.EventTouch;
      Vec3 = module.Vec3;
      Input = module.Input;
      find = module.find;
      Camera = module.Camera;
      screen = module.screen;
      sys = module.sys;
      Graphics = module.Graphics;
      Font = module.Font;
      ERigidBody2DType = module.ERigidBody2DType;
      RigidBody2D = module.RigidBody2D;
      sp = module.sp;
      Vec2 = module.Vec2;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      SpriteFrame = module.SpriteFrame;
      HingeJoint2D = module.HingeJoint2D;
      RelativeJoint2D = module.RelativeJoint2D;
      BoxCollider2D = module.BoxCollider2D;
      Prefab = module.Prefab;
      CircleCollider2D = module.CircleCollider2D;
      Mask = module.Mask;
      PolygonCollider2D = module.PolygonCollider2D;
      NodePool = module.NodePool;
      tween = module.tween;
      Tween = module.Tween;
      PhysicsSystem2D = module.PhysicsSystem2D;
      ERaycast2DType = module.ERaycast2DType;
      Intersection2D = module.Intersection2D;
      JsonAsset = module.JsonAsset;
      ProgressBar = module.ProgressBar;
      EPhysics2DDrawFlags = module.EPhysics2DDrawFlags;
      Widget = module.Widget;
      Layout$3 = module.Layout;
      ParticleSystem2D = module.ParticleSystem2D;
    }],
    execute: function () {
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }

        return target;
      }

      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = function () {
          return exports;
        };

        var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty = Object.defineProperty || function (obj, key, desc) {
          obj[key] = desc.value;
        },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), obj[key];
        }

        try {
          define({}, "");
        } catch (err) {
          define = function (obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
          return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
          }), generator;
        }

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        exports.wrap = wrap;
        var ContinueSentinel = {};

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}

        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if ("throw" !== record.type) {
              var result = record.arg,
                  value = result.value;
              return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                result.value = unwrapped, resolve(result);
              }, function (error) {
                return invoke("throw", error, resolve, reject);
              });
            }

            reject(record.arg);
          }

          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function (method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }

        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");

            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }

            for (context.method = method, context.arg = arg;;) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                if ("suspendedStart" === state) throw state = "completed", context.arg;
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);

              if ("normal" === record.type) {
                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }

              "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
          };
        }

        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
              method = delegate.iterator[methodName];
          if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
          var info = record.arg;
          return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
        }

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal", delete record.arg, entry.completion = record;
        }

        function Context(tryLocsList) {
          this.tryEntries = [{
            tryLoc: "root"
          }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

                return next.value = undefined, next.done = !0, next;
              };

              return next.next = next;
            }
          }

          return {
            next: doneResult
          };
        }

        function doneResult() {
          return {
            value: undefined,
            done: !0
          };
        }

        return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
          var ctor = "function" == typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function (genFun) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
        }, exports.awrap = function (arg) {
          return {
            __await: arg
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          void 0 === PromiseImpl && (PromiseImpl = Promise);
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
          return this;
        }), define(Gp, "toString", function () {
          return "[object Generator]";
        }), exports.keys = function (val) {
          var object = Object(val),
              keys = [];

          for (var key in object) keys.push(key);

          return keys.reverse(), function next() {
            for (; keys.length;) {
              var key = keys.pop();
              if (key in object) return next.value = key, next.done = !1, next;
            }

            return next.done = !0, next;
          };
        }, exports.values = values, Context.prototype = {
          constructor: Context,
          reset: function (skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
          },
          stop: function () {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function (exception) {
            if (this.done) throw exception;
            var context = this;

            function handle(loc, caught) {
              return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i],
                  record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                } else {
                  if (!hasFinally) throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
          },
          complete: function (record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
          },
          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          },
          catch: function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function (iterable, resultName, nextLoc) {
            return this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
          }
        }, exports;
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);

        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get.bind();
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(arguments.length < 3 ? target : receiver);
            }

            return desc.value;
          };
        }

        return _get.apply(this, arguments);
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;

            var F = function () {};

            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
      }

      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");

        return typeof key === "symbol" ? key : String(key);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inherits(DebugViewRuntimeControl, _Component);

        var _super = _createSuper(DebugViewRuntimeControl);

        function DebugViewRuntimeControl() {
          var _this;

          _classCallCheck(this, DebugViewRuntimeControl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        _createClass(DebugViewRuntimeControl, [{
          key: "start",
          value: function start() {
            // get canvas resolution
            var canvas = this.node.parent.getComponent(Canvas);

            if (!canvas) {
              console.error('debug-view-runtime-control should be child of Canvas');
              return;
            }

            var uiTransform = this.node.parent.getComponent(UITransform);
            var halfScreenWidth = uiTransform.width * 0.5;
            var halfScreenHeight = uiTransform.height * 0.5;
            var x = -halfScreenWidth + halfScreenWidth * 0.1,
                y = halfScreenHeight - halfScreenHeight * 0.1;
            var width = 200,
                height = 20; // new nodes

            var miscNode = this.node.getChildByName('MiscMode');
            var buttonNode = instantiate(miscNode);
            buttonNode.parent = this.node;
            buttonNode.name = 'Buttons';
            var titleNode = instantiate(miscNode);
            titleNode.parent = this.node;
            titleNode.name = 'Titles'; // title

            for (var i = 0; i < 2; i++) {
              var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
              newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
              newLabel.setScale(0.75, 0.75, 0.75);
              newLabel.parent = titleNode;

              var _labelComponent = newLabel.getComponent(Label);

              _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
              _labelComponent.color = Color.WHITE;
              _labelComponent.overflow = 0;
              this.labelComponentList[this.labelComponentList.length] = _labelComponent;
            }

            y -= height; // single

            var currentRow = 0;

            for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
              if (_i === this.strSingle.length >> 1) {
                x += width;
                currentRow = 0;
              }

              var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
              newNode.setPosition(x, y - height * currentRow, 0.0);
              newNode.setScale(0.5, 0.5, 0.5);
              newNode.parent = this.singleModeToggle.parent;
              var textComponent = newNode.getComponentInChildren(RichText);
              textComponent.string = this.strSingle[_i];
              this.textComponentList[this.textComponentList.length] = textComponent;
              this.textContentList[this.textContentList.length] = textComponent.string;
              newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
              this.singleModeToggleList[_i] = newNode;
            }

            x += width; // buttons

            this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
            this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
            this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
            this.EnableAllCompositeModeButton.parent = buttonNode;
            var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
            var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
            changeColorButton.setPosition(x + 90, y, 0.0);
            changeColorButton.setScale(0.5, 0.5, 0.5);
            changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
            changeColorButton.parent = buttonNode;
            labelComponent = changeColorButton.getComponentInChildren(Label);
            labelComponent.string = 'TextColor';
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
            var HideButton = instantiate(this.EnableAllCompositeModeButton);
            HideButton.setPosition(x + 200, y, 0.0);
            HideButton.setScale(0.5, 0.5, 0.5);
            HideButton.on(Button.EventType.CLICK, this.hideUI, this);
            HideButton.parent = this.node.parent;
            labelComponent = HideButton.getComponentInChildren(Label);
            labelComponent.string = 'Hide UI';
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
            this.hideButtonLabel = labelComponent; // misc

            y -= 40;

            for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
              var _newNode = instantiate(this.compositeModeToggle);

              _newNode.setPosition(x, y - height * _i2, 0.0);

              _newNode.setScale(0.5, 0.5, 0.5);

              _newNode.parent = miscNode;

              var _textComponent = _newNode.getComponentInChildren(RichText);

              _textComponent.string = this.strMisc[_i2];
              this.textComponentList[this.textComponentList.length] = _textComponent;
              this.textContentList[this.textContentList.length] = _textComponent.string;

              var toggleComponent = _newNode.getComponent(Toggle);

              toggleComponent.isChecked = _i2 ? true : false;

              _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

              this.miscModeToggleList[_i2] = _newNode;
            } // composite


            y -= 150;

            for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
              var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

              _newNode2.setPosition(x, y - height * _i3, 0.0);

              _newNode2.setScale(0.5, 0.5, 0.5);

              _newNode2.parent = this.compositeModeToggle.parent;

              var _textComponent2 = _newNode2.getComponentInChildren(RichText);

              _textComponent2.string = this.strComposite[_i3];
              this.textComponentList[this.textComponentList.length] = _textComponent2;
              this.textContentList[this.textContentList.length] = _textComponent2.string;

              _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

              this.compositeModeToggleList[_i3] = _newNode2;
            }
          }
        }, {
          key: "isTextMatched",
          value: function isTextMatched(textUI, textDescription) {
            var tempText = new String(textUI);
            var findIndex = tempText.search('>');

            if (findIndex === -1) {
              return textUI === textDescription;
            } else {
              tempText = tempText.substr(findIndex + 1);
              tempText = tempText.substr(0, tempText.search('<'));
              return tempText === textDescription;
            }
          }
        }, {
          key: "toggleSingleMode",
          value: function toggleSingleMode(toggle) {
            var debugView = director.root.debugView;
            var textComponent = toggle.getComponentInChildren(RichText);

            for (var i = 0; i < this.strSingle.length; i++) {
              if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
                debugView.singleMode = i;
              }
            }
          }
        }, {
          key: "toggleCompositeMode",
          value: function toggleCompositeMode(toggle) {
            var debugView = director.root.debugView;
            var textComponent = toggle.getComponentInChildren(RichText);

            for (var i = 0; i < this.strComposite.length; i++) {
              if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
                debugView.enableCompositeMode(i, toggle.isChecked);
              }
            }
          }
        }, {
          key: "toggleLightingWithAlbedo",
          value: function toggleLightingWithAlbedo(toggle) {
            var debugView = director.root.debugView;
            debugView.lightingWithAlbedo = toggle.isChecked;
          }
        }, {
          key: "toggleCSMColoration",
          value: function toggleCSMColoration(toggle) {
            var debugView = director.root.debugView;
            debugView.csmLayerColoration = toggle.isChecked;
          }
        }, {
          key: "enableAllCompositeMode",
          value: function enableAllCompositeMode(button) {
            var debugView = director.root.debugView;
            debugView.enableAllCompositeMode(true);

            for (var i = 0; i < this.compositeModeToggleList.length; i++) {
              var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

              _toggleComponent.isChecked = true;
            }

            var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
            toggleComponent.isChecked = false;
            debugView.csmLayerColoration = false;
            toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
            toggleComponent.isChecked = true;
            debugView.lightingWithAlbedo = true;
          }
        }, {
          key: "hideUI",
          value: function hideUI(button) {
            var titleNode = this.node.getChildByName('Titles');
            var activeValue = !titleNode.active;
            this.singleModeToggleList[0].parent.active = activeValue;
            this.miscModeToggleList[0].parent.active = activeValue;
            this.compositeModeToggleList[0].parent.active = activeValue;
            this.EnableAllCompositeModeButton.parent.active = activeValue;
            titleNode.active = activeValue;
            this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
          }
        }, {
          key: "changeTextColor",
          value: function changeTextColor(button) {
            this._currentColorIndex++;

            if (this._currentColorIndex >= this.strColor.length) {
              this._currentColorIndex = 0;
            }

            for (var i = 0; i < this.textComponentList.length; i++) {
              this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
            }

            for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
              this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "update",
          value: function update(deltaTime) {}
        }]);

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();

      var EDITOR = false;
      var enData = {
        text: {
          level: 'Level',
          settings: 'SETTINGS',
          music: 'Music',
          sound: 'Sound',
          vibrate: 'Vibrate',
          resume: 'CONTINUE',
          on: 'ON',
          off: 'OFF',
          notification: 'Notification',
          adsNotComplete: 'Sorry, No Rewards!\nYou have cancelled the ad!',
          loadingAds: 'Loading ads...',
          loading: 'Loading...',
          load: 'Loading',
          rewardNotReady: 'No ads to display!',
          next: 'NEXT',
          completed: 'COMPLETED',
          tryAgain: 'TRY AGAIN',
          retry: 'RETRY',
          congratulation: 'CONGRATULATION',
          you_have_pass_all_levels: 'You have passed all levels.',
          please_come_back_later: 'Please come back later,\nwe will update soon!',
          start_over: 'START OVER',
          confirmation: 'CONFIRMATION',
          are_you_sure_to_start_over: 'ARE YOU SURE TO START OVER?',
          you_will_play_the_game_again: 'You will play the game again\nfrom the beginning, at level 1.',
          no: 'NO',
          yes: 'YES'
        },
        texture: {
          image: 'image'
        }
      };
      var ruData = {
        text: {
          level: 'Уровень',
          settings: 'НАСТРОЙКИ',
          music: 'Музыка',
          sound: 'Звук',
          vibrate: 'Вибрация',
          resume: 'ПРОДОЛЖАТЬ',
          on: 'ВКЛ',
          off: 'ВЫКЛ',
          notification: 'Уведомление',
          adsNotComplete: 'Извините, наград нет! Вы \nотменили рекламу!',
          loadingAds: 'Загрузка Рекламы...',
          loading: 'Загрузка...',
          load: 'Загрузка',
          rewardNotReady: 'Нет рекламы для отображения!',
          next: 'СЛЕДУЮЩИЙ',
          completed: 'ЗАВЕРШЕННЫЙ',
          tryAgain: 'ЗАПУСТИТЬ СНОВА',
          retry: 'СНОВА ПРОБОВАТЬ',
          congratulation: 'ПОЗДРАВЛЕНИЕ',
          you_have_pass_all_levels: 'Вы прошли все уровни.',
          please_come_back_later: 'Пожалуйста, зайдите позже,\nмы скоро обновим!',
          start_over: 'НАЧАТЬ СНАЧАЛА',
          confirmation: 'ПОДТВЕРЖДЕНИЕ',
          are_you_sure_to_start_over: 'ВЫ УВЕРЕНЫ, ЧТО НАЧАТЬ СНАЧАЛА?',
          you_will_play_the_game_again: 'Вы снова будете играть в игру\nс самого начала, на уровне 1.',
          no: 'НЕТ',
          yes: 'ДА'
        },
        texture: {
          image: 'image'
        }
      };

      var _dec$1, _dec2$1, _dec3$1, _dec4$1, _class$1, _class2$1, _class3;

      cclegacy._RF.push({}, "48d82pk15tE8o5T2fEjVv3u", "Localization", undefined);

      var ccclass$1 = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode,
          disallowMultiple = _decorator.disallowMultiple,
          executionOrder = _decorator.executionOrder,
          property$1 = _decorator.property;
      var _GameCore = GameCore,
          Events = _GameCore.Events;
      var _globalThis$game = globalThis.game,
          event = _globalThis$game.event,
          language = _globalThis$game.language;
      var Localization = (_dec$1 = ccclass$1('Localization'), _dec2$1 = executionOrder(-100), _dec3$1 = executeInEditMode(true), _dec4$1 = property$1({
        readonly: true
      }), _dec$1(_class$1 = _dec2$1(_class$1 = disallowMultiple(_class$1 = _dec3$1(_class$1 = (_class2$1 = (_class3 = /*#__PURE__*/function (_Component) {
        _inherits(Localization, _Component);

        var _super = _createSuper(Localization);

        function Localization() {
          var _this;

          _classCallCheck(this, Localization);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleLanguageChanged = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(eventPayload) {
              var locale;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    locale = eventPayload.locale;

                    _this.node.scene.emit('update-language', locale);

                    _this.locale = locale;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }();

          return _this;
        }

        _createClass(Localization, [{
          key: "locale",
          get: function get() {
            return Localization._key;
          },
          set: function set(value) {
            Localization._key = value;
          }
        }, {
          key: "__preload",
          value: function __preload() {
            this.addLanguage('en');
            this.addLanguage('ru');
          }
        }, {
          key: "start",
          value: function start() {
            this.listenEvent();
            {
              this.makePersistent();
            }
          } // ? Localization must be exist in all scenes

        }, {
          key: "makePersistent",
          value: function makePersistent() {
            director.addPersistRootNode(this.node);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            event.off(Events.LANGUAGE_CHANGED, this.handleLanguageChanged);
          }
        }, {
          key: "listenEvent",
          value: function listenEvent() {
            event.on(Events.LANGUAGE_CHANGED, this.handleLanguageChanged);
          }
        }, {
          key: "addLanguage",
          value: function addLanguage(lang) {
            var langData = this.getLangData(lang);
            language.add(lang, langData);
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(lang) {
            language.choose(lang);
          }
        }, {
          key: "getLangData",
          value: function getLangData(lang) {
            switch (lang) {
              case 'en':
                return enData;

              case 'ru':
                return ruData;

              default:
                throw new Error("Language ".concat(lang, " not supported"));
            }
          }
        }]);

        return Localization;
      }(Component), _class3._key = 'en', _class3), _applyDecoratedDescriptor(_class2$1.prototype, "locale", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "locale"), _class2$1.prototype), _class2$1)) || _class$1) || _class$1) || _class$1) || _class$1);

      cclegacy._RF.pop();

      var _dec$2, _class$2;

      cclegacy._RF.push({}, "99ab1dYv8xPSazFgS5X9NV2", "SceneManager", undefined);

      var ccclass$2 = _decorator.ccclass,
          disallowMultiple$1 = _decorator.disallowMultiple;
      var event$1 = globalThis.game.event;
      var _GameCore$1 = GameCore,
          Events$1 = _GameCore$1.Events;
      var SceneManager = (_dec$2 = ccclass$2('SceneManager'), _dec$2(_class$2 = disallowMultiple$1(_class$2 = /*#__PURE__*/function (_Component) {
        _inherits(SceneManager, _Component);

        var _super = _createSuper(SceneManager);

        function SceneManager() {
          var _this;

          _classCallCheck(this, SceneManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.scene = null;
          _this.scenes = {};

          _this.switchScene = function (sceneName, sceneData) {
            console.log('SceneManager.switchScene', {
              sceneName: sceneName,
              sceneData: sceneData
            });

            if (!_this.scene) {
              throw new Error('SceneManager.switchScene: scene is null');
            }

            if (_this.scene.name === sceneName) return; // ? Disable current scene

            _this.scene.active = false;

            if (!_this.isSceneLoaded(sceneName)) {
              _this.startScene(sceneName, sceneData);

              return;
            }

            _this.runScene(sceneName, sceneData);
          };

          _this.onSceneLoaded = function (error, sceneAsset) {
            // console.log('SceneManager.onSceneLoaded', { error, sceneAsset })
            if (error) {
              console.warn('SceneManager.onSceneLoaded', error);
              return;
            }

            if (!sceneAsset) return;
            var sceneName = sceneAsset.name;
            _this.scenes[sceneName] = sceneAsset.scene;
          };

          _this.onSceneLaunched = function (sceneData) {
            return function (error, scene) {
              // console.log('SceneManager.onSceneLaunched', { error, scene })
              if (error) {
                console.warn('SceneManager.onSceneLaunched', error);
                return;
              }

              if (!scene) return;
              var sceneName = scene.name;

              _this.createSceneList();

              _this.scenes[sceneName] = scene;

              _this.setSceneData(sceneName, sceneData || {});
            };
          };

          _this.hotReload = function () {
            game$1.restart();
          };

          return _this;
        }

        _createClass(SceneManager, [{
          key: "onLoad",
          value: function onLoad() {
            this.scene = this.node.scene;
            event$1.on(Events$1.HOT_RELOAD, this.hotReload);
          }
        }, {
          key: "listenSwitchSceneEvent",
          value: function listenSwitchSceneEvent(callback) {
            event$1.clear(Events$1.SWITCH_SCENE);
            event$1.on(Events$1.SWITCH_SCENE, callback);
          }
        }, {
          key: "getScene",
          value: function getScene(sceneName) {
            this.createSceneList();
            return this.scenes[sceneName];
          }
        }, {
          key: "startScene",
          value: function startScene(sceneName, sceneData) {
            console.log('SceneManager.startScene', {
              sceneName: sceneName,
              sceneData: sceneData
            });
            director.loadScene(sceneName, this.onSceneLaunched(sceneData));
          }
        }, {
          key: "runScene",
          value: function runScene(sceneName, sceneData) {
            console.log('SceneManager.runScene', {
              sceneName: sceneName,
              sceneData: sceneData
            });
            this.setSceneData(sceneName, sceneData || {});
            var scene = this.getScene(sceneName);
            director.runScene(scene);
          }
        }, {
          key: "setSceneData",
          value: function setSceneData(sceneName, sceneData) {
            if (!sceneData) return;
            var scene = this.getScene(sceneName);

            if (!scene) {
              console.warn('SceneManager.setSceneData', "Scene ".concat(sceneName, " not found"));
              return;
            }

            if (!('data' in scene.scene)) return; // Merge current data

            var currentData = scene.scene.data || {};
            scene.attr({
              data: _objectSpread2(_objectSpread2({}, currentData), sceneData)
            }); // console.log('SceneManager.setSceneData', { sceneName, sceneData, currentData })
          }
        }, {
          key: "getSceneData",
          value: function getSceneData(sceneName) {
            var scene = this.getScene(sceneName);
            if (!scene) return {};
            if (!('data' in scene.scene)) return {};
            return scene.scene.data || {};
          }
        }, {
          key: "createSceneList",
          value: function createSceneList() {
            if (this.scenes) return;
            this.scenes = {};
          }
        }, {
          key: "isSceneLoaded",
          value: function isSceneLoaded(sceneName) {
            this.createSceneList();
            return !!this.scenes[sceneName];
          }
        }, {
          key: "preloadScene",
          value: function preloadScene(sceneName) {
            director.preloadScene(sceneName, this.onSceneLoaded);
          }
        }]);

        return SceneManager;
      }(Component)) || _class$2) || _class$2);

      cclegacy._RF.pop();

      var _dec$3, _dec2$2, _dec3$2, _class$3, _class2$2, _descriptor$1, _descriptor2$1;

      cclegacy._RF.push({}, "acb0egHPppFmYJalVNrDDv/", "BaseScreen", undefined);

      var ccclass$3 = _decorator.ccclass,
          property$2 = _decorator.property,
          disallowMultiple$2 = _decorator.disallowMultiple;
      var _GameCore$2 = GameCore,
          Events$2 = _GameCore$2.Events;
      var event$2 = globalThis.game.event;
      var BaseScreen = (_dec$3 = ccclass$3('BaseScreen'), _dec2$2 = property$2(Node), _dec3$2 = property$2(Node), _dec$3(_class$3 = disallowMultiple$2(_class$3 = (_class2$2 = /*#__PURE__*/function (_Component) {
        _inherits(BaseScreen, _Component);

        var _super = _createSuper(BaseScreen);

        function BaseScreen() {
          var _this;

          _classCallCheck(this, BaseScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "container", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "backgroundMask", _descriptor2$1, _assertThisInitialized(_this));

          _this.data = {};
          return _this;
        }

        _createClass(BaseScreen, [{
          key: "onLoad",
          value: function onLoad() {
            this.animation = this.getComponent(Animation);
            this.validateRequiredComponents();
            this.initializeNodes();
          }
        }, {
          key: "initializeNodes",
          value: function initializeNodes() {
            var maskOpacity = this.getMaskOpacity();
            var containerOpacity = this.getContainerOpacity();
            if (!maskOpacity || !containerOpacity) return;
            maskOpacity.opacity = 0;
            containerOpacity.opacity = 0;
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.animation) {
              throw new Error("".concat(this.node.name, ": animation not found"));
            }

            if (!this.container) {
              throw new Error("".concat(this.node.name, ": container not found"));
            }

            if (!this.backgroundMask) {
              throw new Error("".concat(this.node.name, ": backgroundMask not found"));
            }
          }
        }, {
          key: "open",
          value: function open(data) {
            if (data) {
              this.data = data;
            }

            this.runAnimation('OpenScreen');
            this.logEventOpenScreen();
          }
        }, {
          key: "close",
          value: function close() {
            var _this2 = this;

            if (!this.node.active) return;
            this.animation.once(Animation.EventType.FINISHED, function () {
              event$2.emit(Events$2.CLOSED_SCREEN, {
                screenName: _this2.node.name
              });
              _this2.node.active = false;
            });
            this.runAnimation('CloseScreen');
            this.logEventCloseScreen();
          }
        }, {
          key: "runAnimation",
          value: function runAnimation(name) {
            if (!this.isAnimationExist(name)) {
              throw new Error("".concat(this.node.name, ": Animation component must have ").concat(name, " clip"));
            }

            this.animation.play(name);
          }
        }, {
          key: "isAnimationExist",
          value: function isAnimationExist(name) {
            return this.animation.clips.some(function (clip) {
              if (clip && clip.name === name) return true;
              return false;
            });
          }
        }, {
          key: "getMaskOpacity",
          value: function getMaskOpacity() {
            var maskOpacity = this.backgroundMask.getComponent(UIOpacity);

            if (!maskOpacity) {
              console.warn('BaseScreen: maskOpacity not found');
              return null;
            }

            return maskOpacity;
          }
        }, {
          key: "getContainerOpacity",
          value: function getContainerOpacity() {
            var containerOpacity = this.container.getComponent(UIOpacity);

            if (!containerOpacity) {
              console.warn('BaseScreen: containerOpacity not found');
              return null;
            }

            return containerOpacity;
          }
        }, {
          key: "logEventOpenScreen",
          value: function logEventOpenScreen() {
            var screenName = this.node.name;
            this.logPageview(screenName);
          }
        }, {
          key: "logEventCloseScreen",
          value: function logEventCloseScreen(nextPage) {
            if (!nextPage) return;
            this.logPageview(nextPage);
          }
        }, {
          key: "logPageview",
          value: function logPageview(screenName) {
            var analytics = globalThis.game.analytics;
            analytics.setPlacement(screenName);
            analytics.pageview(screenName);
          } // TODO: add closeable when click outside

        }]);

        return BaseScreen;
      }(Component), (_descriptor$1 = _applyDecoratedDescriptor(_class2$2.prototype, "container", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$2.prototype, "backgroundMask", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$2)) || _class$3) || _class$3);

      cclegacy._RF.pop();

      var _dec$4, _class$4;

      cclegacy._RF.push({}, "00dcd//LMhJA4U/K/BvrB4h", "ScreenManager", undefined);

      var ccclass$4 = _decorator.ccclass,
          disallowMultiple$3 = _decorator.disallowMultiple;
      var event$3 = globalThis.game.event;
      var _GameCore$3 = GameCore,
          Events$3 = _GameCore$3.Events;
      var ScreenManager = (_dec$4 = ccclass$4('ScreenManager'), _dec$4(_class$4 = disallowMultiple$3(_class$4 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenManager, _Component);

        var _super = _createSuper(ScreenManager);

        function ScreenManager() {
          var _this;

          _classCallCheck(this, ScreenManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.screens = {};

          _this.handleOpenScreen = function (payload) {
            var screenName = payload.screenName,
                screenData = payload.screenData;

            _this.openScreen(screenName, screenData);
          };

          _this.handleCloseScreen = function (payload) {
            var screenName = payload.screenName;

            _this.closeScreen(screenName);
          };

          return _this;
        }

        _createClass(ScreenManager, [{
          key: "__preload",
          value: function __preload() {
            var _this2 = this;

            var baseScenes = this.getComponentsInChildren(BaseScreen); // ? Add all screens in this scene

            baseScenes.forEach(function (screen) {
              _this2.addScreen(screen);
            }); // ? Listen events by plugin Event of GameCore

            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            event$3.on(Events$3.OPEN_SCREEN, this.handleOpenScreen);
            event$3.on(Events$3.CLOSE_SCREEN, this.handleCloseScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$3.off(Events$3.OPEN_SCREEN, this.handleOpenScreen);
            event$3.off(Events$3.CLOSE_SCREEN, this.handleCloseScreen);
          }
        }, {
          key: "addScreen",
          value: function addScreen(screen) {
            this.screens[screen.node.name] = screen;
          }
        }, {
          key: "getScreen",
          value: function getScreen(screenName) {
            return this.screens[screenName];
          }
        }, {
          key: "openScreen",
          value: function openScreen(screenName, screenData) {
            var screen = this.getScreen(screenName);

            if (!screen) {
              console.warn('ScreenManager.openScreen', "Screen ".concat(screenName, " not found"));
              return;
            } // ? Active this screen before emit opening event


            screen.node.active = true;
            var eventPayload = {
              screenName: screenName,
              screenData: screenData
            };
            event$3.emit(Events$3.OPENING_SCREEN, eventPayload);
            screen.open(screenData);
            event$3.emit(Events$3.OPENED_SCREEN, eventPayload);
          }
        }, {
          key: "closeScreen",
          value: function closeScreen(screenName) {
            var screen = this.getScreen(screenName);

            if (!screen) {
              console.warn('ScreenManager.closeScreen', "Screen ".concat(screenName, " not found"));
              return;
            }

            if (!screen.node.active) return;
            var eventPayload = {
              screenName: screenName
            };
            event$3.emit(Events$3.CLOSING_SCREEN, eventPayload);
            screen.close();
          }
        }]);

        return ScreenManager;
      }(Component)) || _class$4) || _class$4);

      cclegacy._RF.pop();

      var _dec$5, _dec2$3, _dec3$3, _class$5;

      cclegacy._RF.push({}, "f9920yQC5RD4re/F5Vd3tvT", "SystemManager", undefined);

      var ccclass$5 = _decorator.ccclass,
          disallowMultiple$4 = _decorator.disallowMultiple,
          executionOrder$1 = _decorator.executionOrder,
          requireComponent = _decorator.requireComponent;
      var SystemManager = (_dec$5 = ccclass$5('SystemManager'), _dec2$3 = executionOrder$1(-900), _dec3$3 = requireComponent(Canvas), _dec$5(_class$5 = disallowMultiple$4(_class$5 = _dec2$3(_class$5 = _dec3$3(_class$5 = /*#__PURE__*/function (_Component) {
        _inherits(SystemManager, _Component);

        var _super = _createSuper(SystemManager);

        function SystemManager() {
          var _this;

          _classCallCheck(this, SystemManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.waitProfilerReady = function () {
            if (!profiler) return; // @ts-expect-error - private property

            profiler._showFPS = false; // @ts-expect-error - private property

            var _rootNode = profiler._rootNode;

            if (_rootNode) {
              _rootNode.active = false;

              if (_rootNode.isValid) {
                _rootNode.destroyAllChildren();

                _rootNode.removeAllChildren();

                _rootNode.destroy();
              }
            }
          };

          return _this;
        }

        _createClass(SystemManager, [{
          key: "__preload",
          value: // private isSpritesLoadCalled = false
          function __preload() {
            this.validateRequiredComponents();
            this.setupGameConfig();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            var canvas = this.getComponent(Canvas);

            if (!canvas) {
              throw new Error('SystemManager: Canvas not found');
            }
          }
        }, {
          key: "setupGameConfig",
          value: function setupGameConfig() {
            this.hideCocosStats();
            this.setupAutoAtlas();
            this.setupDynamicAtlas();
            this.setupResolutionPolicy();
          }
        }, {
          key: "setupAutoAtlas",
          value: function setupAutoAtlas() {
            AssetManager.instance.cacheAsset = true;
          }
        }, {
          key: "setupDynamicAtlas",
          value: function setupDynamicAtlas() {
            var enabled = true;
            macro.CLEANUP_IMAGE_CACHE = !enabled;
            DynamicAtlasManager.instance.enabled = enabled;
            DynamicAtlasManager.instance.maxAtlasCount = 10;
            DynamicAtlasManager.instance.textureSize = 4096;
            DynamicAtlasManager.instance.maxFrameSize = 2048;
          }
        }, {
          key: "setupResolutionPolicy",
          value: function setupResolutionPolicy() {
            View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            View.instance.setResolutionPolicy(ResolutionPolicy.SHOW_ALL);
          } // ? Only hide the cocos stats UI

        }, {
          key: "hideCocosStats",
          value: function hideCocosStats() {
            this.schedule(this.waitProfilerReady, 0.2, 60);
          }
        }]);

        return SystemManager;
      }(Component)) || _class$5) || _class$5) || _class$5) || _class$5);

      cclegacy._RF.pop();

      var _dec$6, _dec2$4, _dec3$4, _dec4$2, _dec5, _class$6, _class2$3, _descriptor$2, _descriptor2$2, _descriptor3$1;

      cclegacy._RF.push({}, "60ac3vor0dMT5bXi8D3VSJN", "BubbleAnimation", undefined);

      var ccclass$6 = _decorator.ccclass,
          requireComponent$1 = _decorator.requireComponent,
          property$3 = _decorator.property;
      var BubbleAnimation = (_dec$6 = ccclass$6('BubbleAnimation'), _dec2$4 = requireComponent$1([Animation]), _dec3$4 = property$3(Animation), _dec4$2 = property$3(CCString), _dec5 = property$3(CCInteger), _dec$6(_class$6 = _dec2$4(_class$6 = (_class2$3 = /*#__PURE__*/function (_Component) {
        _inherits(BubbleAnimation, _Component);

        var _super = _createSuper(BubbleAnimation);

        function BubbleAnimation() {
          var _this;

          _classCallCheck(this, BubbleAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "animation", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clipName", _descriptor2$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "repeat", _descriptor3$1, _assertThisInitialized(_this));

          _this.currentRepeat = -1;
          return _this;
        }

        _createClass(BubbleAnimation, [{
          key: "onLoad",
          value: function onLoad() {
            this.animation = this.getComponent(Animation);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.animation) {
              throw new Error('BubbleAnimation: Animation component not found');
            }
          }
        }, {
          key: "play",
          value: function play() {
            var _this2 = this;

            if (!this.animation) return;
            var animClip = this.animation.clips.find(function (clip) {
              return (clip === null || clip === void 0 ? void 0 : clip.name) === _this2.clipName;
            });

            if (!animClip) {
              console.warn("BubbleAnimation: Animation component must have ".concat(this.clipName, " clip"));
              return;
            }

            this.currentRepeat = -1;
            this.animation.play(this.clipName);
          }
          /**
           * `bubble` anim event callback
           */

        }, {
          key: "onBubbleAnimationLoop",
          value: function onBubbleAnimationLoop() {
            if (!this.animation) return;
            if (this.repeat === -1) return;
            this.currentRepeat++;

            if (this.currentRepeat > this.repeat) {
              this.animation.stop();
            }
          }
        }]);

        return BubbleAnimation;
      }(Component), (_descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "animation", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$3.prototype, "clipName", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Bubble';
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$3.prototype, "repeat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      })), _class2$3)) || _class$6) || _class$6);

      cclegacy._RF.pop();

      var _dec$7, _dec2$5, _dec3$5, _class$7, _class2$4, _descriptor$3;

      cclegacy._RF.push({}, "56b92F9LoxNs5aCgvw+tkq6", "LoadingSceneTransition", undefined);

      var ccclass$7 = _decorator.ccclass,
          requireComponent$2 = _decorator.requireComponent,
          property$4 = _decorator.property;
      /**
       * `LoadingSceneTransition` require Scene not use `AutoRelease` options
       */

      var LoadingSceneTransition = (_dec$7 = ccclass$7('LoadingSceneTransition'), _dec2$5 = requireComponent$2([Canvas]), _dec3$5 = property$4([Node]), _dec$7(_class$7 = _dec2$5(_class$7 = (_class2$4 = /*#__PURE__*/function (_Component) {
        _inherits(LoadingSceneTransition, _Component);

        var _super = _createSuper(LoadingSceneTransition);

        function LoadingSceneTransition() {
          var _this;

          _classCallCheck(this, LoadingSceneTransition);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "targets", _descriptor$3, _assertThisInitialized(_this));

          _this.realTargets = [];
          return _this;
        }

        _createClass(LoadingSceneTransition, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            for (var i = 0; i < this.targets.length; i++) {
              var target = this.targets[i];
              if (!target) continue;
              var clone = instantiate(target);
              clone.setParent(this.node);
              clone.active = false;
              this.realTargets.push(clone);
            }

            director.addPersistRootNode(this.node);
            director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
              _this2.playFadeOutAnimationClip();
            });
          }
        }, {
          key: "playFadeOutAnimationClip",
          value: function playFadeOutAnimationClip() {
            var _this3 = this; // const targets = this.targets.map((target) => {
            //     const clone = instantiate(target)
            //     clone.setParent(this.node)
            //     return clone
            // })


            var numOfAnimFinish = 0;
            if (!this.realTargets || this.realTargets.length === 0) return;
            this.realTargets.forEach(function (target) {
              target.active = true;
              var animCom = target.getComponent(Animation);
              if (!animCom) return;
              var isFadeOutExist = animCom.clips.some(function (clip) {
                return (clip === null || clip === void 0 ? void 0 : clip.name) === 'FadeOut';
              });

              if (!isFadeOutExist) {
                _this3.node.destroy();

                console.warn('Not have FadeOut clip');
                return;
              }

              animCom.play('FadeOut');
              animCom.once(Animation.EventType.FINISHED, function () {
                numOfAnimFinish++;

                if (numOfAnimFinish === _this3.realTargets.length) {
                  _this3.node.destroy();
                }
              });
            });
          }
        }]);

        return LoadingSceneTransition;
      }(Component), _descriptor$3 = _applyDecoratedDescriptor(_class2$4.prototype, "targets", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2$4)) || _class$7) || _class$7);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "cc0a5OvhdRCMZRZuRscaz+7", "AudioPlayer", undefined);

      var AudioPlayer = /*#__PURE__*/function (_GameCore$Plugins$Aud) {
        _inherits(AudioPlayer, _GameCore$Plugins$Aud);

        var _super = _createSuper(AudioPlayer);

        function AudioPlayer(key, audioSource) {
          var _this;

          _classCallCheck(this, AudioPlayer);

          _this = _super.call(this, key);
          _this.audioSource = audioSource;
          return _this;
        }

        _createClass(AudioPlayer, [{
          key: "play",
          value: function play(config) {
            if (config) {
              var _config$volume = config.volume,
                  volume = _config$volume === void 0 ? 1 : _config$volume,
                  _config$loop = config.loop,
                  loop = _config$loop === void 0 ? false : _config$loop;
              this.audioSource.volume = volume;
              this.audioSource.loop = loop;
            }

            this.audioSource.play();
          }
        }, {
          key: "pause",
          value: function pause() {
            this.audioSource.pause();
          }
        }, {
          key: "resume",
          value: function resume() {
            if (this.audioSource.state === AudioSource.AudioState.PAUSED) {
              this.audioSource.play();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            this.audioSource.stop();
          }
        }, {
          key: "setVolume",
          value: function setVolume(volume) {
            this.audioSource.volume = volume;
          }
        }, {
          key: "getAudioSource",
          value: function getAudioSource() {
            return this.audioSource;
          }
        }]);

        return AudioPlayer;
      }(GameCore.Plugins.Audio.BaseAudioPlayer);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "8b5ecHv/+BJiorK1kiVbTcf", "AudioChannel", undefined);

      var BaseChannelManager = GameCore.Plugins.Audio.BaseChannelManager;

      var AudioChannel = /*#__PURE__*/function (_BaseChannelManager) {
        _inherits(AudioChannel, _BaseChannelManager);

        var _super = _createSuper(AudioChannel);

        function AudioChannel(node, channelId) {
          var _this;

          _classCallCheck(this, AudioChannel);

          _this = _super.call(this, channelId);
          _this.allowMultipleTracking = {};

          _this.handleLoadedAudio = function (key, clip) {
            var audioSource = _this.node.addComponent(AudioSource);

            audioSource.clip = clip;
            var audioPlayer = new AudioPlayer(key, audioSource);
            return audioPlayer;
          };

          _this.node = node;
          return _this;
        }

        _createClass(AudioChannel, [{
          key: "onLoadAudio",
          value: function () {
            var _onLoadAudio = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, _config) {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      resources.load(key, AudioClip, function (error, clip) {
                        try {
                          if (error) {
                            throw error;
                          }

                          var audioPlayer = _this2.handleLoadedAudio(key, clip);

                          resolve(audioPlayer);
                        } catch (error) {
                          reject(error);
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));

            function onLoadAudio(_x, _x2) {
              return _onLoadAudio.apply(this, arguments);
            }

            return onLoadAudio;
          }()
        }, {
          key: "playWithRealConfig",
          value: function playWithRealConfig(audioPlayer, config) {
            if (!this.isCanPlay(config)) return;

            if (config) {
              var _config$volume = config.volume,
                  volume = _config$volume === void 0 ? 1 : _config$volume,
                  _config$allowMultiple = config.allowMultiple,
                  allowMultiple = _config$allowMultiple === void 0 ? false : _config$allowMultiple;
              config.volume = this.getVolume() * volume;

              if (allowMultiple) {
                var newAudioPlayer = this.requestDuplicateAudioPlayer(audioPlayer.getKey(), audioPlayer.getAudioSource().clip, config);
                newAudioPlayer.play(config);
                return;
              }
            }

            audioPlayer.play(config);
          }
        }, {
          key: "isCanPlay",
          value: function isCanPlay(config) {
            var _this3 = this;

            if (config) {
              var _config$checkList = config.checkList,
                  checkList = _config$checkList === void 0 ? [] : _config$checkList;
              var isPlayingExist = checkList.some(function (key) {
                var audioClip = _this3.getAudioClip(key);

                if (audioClip) {
                  var audioPlayer = audioClip.audioPlayer;
                  return audioPlayer.getAudioSource().state === AudioSource.AudioState.PLAYING;
                }

                return false;
              });

              if (isPlayingExist) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "requestDuplicateAudioPlayer",
          value: function requestDuplicateAudioPlayer(key, clip, config) {
            var existingAudioPlayer = this.getDuplicateAudioFromPool(key);

            if (existingAudioPlayer) {
              if (config) {
                var _dupKey = existingAudioPlayer.key;
                var _config$volume2 = config.volume,
                    volume = _config$volume2 === void 0 ? 1 : _config$volume2;
                this.setAudioClip(_dupKey, {
                  volume: volume
                });
              }

              return existingAudioPlayer.audioPlayer;
            }

            var dupKey = "".concat(key, "_").concat(this.allowMultipleTracking[key].currentPostFix);
            var newAudioPlayer = this.handleLoadedAudio(dupKey, clip);
            this.allowMultipleTracking[key].list.push({
              audioPlayer: newAudioPlayer,
              key: dupKey
            });
            this.allowMultipleTracking[key].currentPostFix += 1;
            this.setAudioClip(dupKey, {
              audioPlayer: newAudioPlayer,
              volume: 1
            });
            return newAudioPlayer;
          }
        }, {
          key: "getDuplicateAudioFromPool",
          value: function getDuplicateAudioFromPool(key) {
            if (this.allowMultipleTracking[key]) {
              var list = this.allowMultipleTracking[key].list;
              var audioClip = list.find(function (audioClip) {
                return audioClip.audioPlayer.getAudioSource().state !== AudioSource.AudioState.PLAYING;
              });

              if (audioClip) {
                return audioClip;
              }
            } else {
              this.allowMultipleTracking[key] = {
                currentPostFix: 1,
                list: []
              };
            }

            return null;
          }
        }]);

        return AudioChannel;
      }(BaseChannelManager);

      cclegacy._RF.pop();

      var _dec$8, _dec2$6, _class$8, _class2$5, _descriptor$4;

      cclegacy._RF.push({}, "1a025mmN7BL7r5cF6gWR4b/", "Music", undefined);

      var ccclass$8 = _decorator.ccclass,
          property$5 = _decorator.property;
      var _globalThis$game$1 = globalThis.game,
          audio = _globalThis$game$1.audio,
          player = _globalThis$game$1.player;
      var Music = (_dec$8 = ccclass$8('Music'), _dec2$6 = property$5(CCString), _dec$8(_class$8 = (_class2$5 = /*#__PURE__*/function (_Component) {
        _inherits(Music, _Component);

        var _super = _createSuper(Music);

        function Music() {
          var _this;

          _classCallCheck(this, Music);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "channelId", _descriptor$4, _assertThisInitialized(_this));

          _this.channel = null;
          return _this;
        }

        _createClass(Music, [{
          key: "__preload",
          value: function __preload() {
            // * Only call new a class (not component) in _preload method
            this.channel = new AudioChannel(this.node, this.channelId);
            audio.addChannel(this.channel);
          } // ? Sometime music background must be play in all scenes

        }, {
          key: "makePersistent",
          value: function makePersistent() {
            director.addPersistRootNode(this.node);
          }
        }, {
          key: "removePersistent",
          value: function removePersistent() {
            director.removePersistRootNode(this.node);
          }
        }, {
          key: "play",
          value: function play(key, options) {
            if (!this.isMusicEnable()) return;

            if (!options || !options.loop) {
              options = _objectSpread2(_objectSpread2({}, options), {}, {
                loop: true
              });
            }

            audio.play(key, options, this.channelId);
          }
        }, {
          key: "isMusicEnable",
          value: function isMusicEnable() {
            return !!player.getPlayerSetting('music');
          }
        }, {
          key: "setVolume",
          value: function setVolume(volume) {
            audio.setVolume(volume, this.channelId);
          }
        }, {
          key: "pause",
          value: function pause(key) {
            audio.pause(key, this.channelId);
          }
        }, {
          key: "resume",
          value: function resume(key) {
            if (!this.isMusicEnable()) return;
            audio.resume(key, this.channelId);
          }
        }, {
          key: "stop",
          value: function stop(key) {
            audio.stop(key, this.channelId);
          }
        }, {
          key: "mute",
          value: function mute(isMute) {
            if (isMute) {
              audio.mute(this.channelId);
            } else {
              audio.unmute(this.channelId);
            }
          }
        }]);

        return Music;
      }(Component), _descriptor$4 = _applyDecoratedDescriptor(_class2$5.prototype, "channelId", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'global_music';
        }
      }), _class2$5)) || _class$8);

      cclegacy._RF.pop();

      var _dec$9, _dec2$7, _class$9, _class2$6, _descriptor$5;

      cclegacy._RF.push({}, "1299a7X1XNNEKxSKMV6E5jQ", "Sound", undefined);

      var ccclass$9 = _decorator.ccclass,
          property$6 = _decorator.property;
      var _globalThis$game$2 = globalThis.game,
          audio$1 = _globalThis$game$2.audio,
          player$1 = _globalThis$game$2.player;
      var Sound = (_dec$9 = ccclass$9('Sound'), _dec2$7 = property$6(CCString), _dec$9(_class$9 = (_class2$6 = /*#__PURE__*/function (_Component) {
        _inherits(Sound, _Component);

        var _super = _createSuper(Sound);

        function Sound() {
          var _this;

          _classCallCheck(this, Sound);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "channelId", _descriptor$5, _assertThisInitialized(_this));

          _this.channel = null;
          return _this;
        }

        _createClass(Sound, [{
          key: "__preload",
          value: function __preload() {
            // * Only call new a class (not component) in _preload method
            this.channel = new AudioChannel(this.node, this.channelId);
            audio$1.addChannel(this.channel);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            if (this.channelId === '') {
              this.channelId = this.node.uuid;
            }
          } // ? Sometime we need some sound effect must be play when scene is changed

        }, {
          key: "makePersistent",
          value: function makePersistent() {
            director.addPersistRootNode(this.node);
          }
        }, {
          key: "removePersistent",
          value: function removePersistent() {
            director.removePersistRootNode(this.node);
          }
        }, {
          key: "play",
          value: function play(key, options) {
            if (!this.isSoundEnable()) return;
            audio$1.play(key, options, this.channelId);
          }
        }, {
          key: "isSoundEnable",
          value: function isSoundEnable() {
            return !!player$1.getPlayerSetting('sound');
          }
        }, {
          key: "setVolume",
          value: function setVolume(volume) {
            audio$1.setVolume(volume, this.channelId);
          }
        }, {
          key: "pause",
          value: function pause(key) {
            audio$1.pause(key, this.channelId);
          }
        }, {
          key: "resume",
          value: function resume(key) {
            if (!this.isSoundEnable()) return;
            audio$1.resume(key, this.channelId);
          }
        }, {
          key: "stop",
          value: function stop(key) {
            audio$1.stop(key, this.channelId);
          }
        }, {
          key: "stopAll",
          value: function stopAll() {
            audio$1.stopAll(this.channelId);
          }
        }, {
          key: "mute",
          value: function mute(_boolean) {
            if (_boolean) {
              audio$1.mute(this.channelId);
            } else {
              audio$1.unmute(this.channelId);
            }
          }
        }]);

        return Sound;
      }(Component), _descriptor$5 = _applyDecoratedDescriptor(_class2$6.prototype, "channelId", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _class2$6)) || _class$9);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "244e9OHsmpDnpHQKeLzgiiX", "GameEvents", undefined);

      var GameEvents = {
        VIEW_RESIZE: 'view-resize',
        LAYOUT_CHANGED: 'layout-changed'
      };

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "5c76fxO2ppOqYp4WNO+Kavm", "GameWorld", undefined);

      var GameWorld = {
        WIDTH: 375,
        HEIGHT: 667,
        Layout: {
          Portrait: 'portrait',
          Landscape: 'landscape'
        },
        DesignSize: {
          Portrait: {
            WIDTH: 750,
            HEIGHT: 1366
          },
          Landscape: {
            WIDTH: 1920,
            HEIGHT: 1300
          }
        },
        // Default is true
        // ? This mean on portrait mode, the game will be stretched to full height
        FULL_PORTRAIT_SIZE: true,
        // Default is true
        // ? This mean on landscape mode, the game will be stretched to full width
        FULL_LANDSCAPE_SIZE: true
      };

      cclegacy._RF.pop();

      var _dec$a, _class$a;

      cclegacy._RF.push({}, "ca427NpeqpC3bUoGTd9I/BM", "Background", undefined);

      var ccclass$a = _decorator.ccclass;
      var Layout = GameWorld.Layout;
      var Background = (_dec$a = ccclass$a('Background'), _dec$a(_class$a = /*#__PURE__*/function (_Component) {
        _inherits(Background, _Component);

        var _super = _createSuper(Background);

        function Background() {
          var _this;

          _classCallCheck(this, Background);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleSpriteTypeWhenLayoutChanged = function (layout) {
            if (layout === Layout.Landscape) {
              _this.setBackgroundType(Sprite.Type.TILED);

              _this.setActiveBlockLines(true);
            } else {
              _this.setBackgroundType(Sprite.Type.SIMPLE);

              _this.setActiveBlockLines(false);
            }
          };

          return _this;
        }

        _createClass(Background, [{
          key: "__preload",
          value: function __preload() {
            this.sprite = this.getComponent(Sprite);
            this.blockLines = this.getComponentsInChildren(Sprite);
            this.validateRequiredComponents();
            this.listenGameEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.sprite) {
              throw new Error('Background: Sprite not found');
            }

            if (!this.blockLines) {
              throw new Error('Background: Block lines not found');
            }
          }
        }, {
          key: "listenGameEvents",
          value: function listenGameEvents() {
            this.node.scene.on(GameEvents.LAYOUT_CHANGED, this.handleSpriteTypeWhenLayoutChanged);
          }
        }, {
          key: "setBackgroundType",
          value: function setBackgroundType(type) {
            this.sprite.type = type;
          }
        }, {
          key: "setActiveBlockLines",
          value: function setActiveBlockLines(enable) {
            var _this2 = this;

            this.blockLines.forEach(function (component) {
              if (component.node === _this2.node) return;
              component.node.active = enable;
            });
          }
        }]);

        return Background;
      }(Component)) || _class$a);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "d159egaUVVLHKLg1UL865ub", "SoundKeys", undefined);

      var SoundKeys = /*#__PURE__*/function (SoundKeys) {
        SoundKeys[SoundKeys["sounds/bee-flying"] = 0] = "sounds/bee-flying";
        SoundKeys[SoundKeys["sounds/bee-sting-doge"] = 1] = "sounds/bee-sting-doge";
        SoundKeys[SoundKeys["sounds/bg-music"] = 2] = "sounds/bg-music";
        SoundKeys[SoundKeys["sounds/button-click"] = 3] = "sounds/button-click";
        SoundKeys[SoundKeys["sounds/collecting-coins"] = 4] = "sounds/collecting-coins";
        SoundKeys[SoundKeys["sounds/doge-dies"] = 5] = "sounds/doge-dies";
        SoundKeys[SoundKeys["sounds/doge-hurt"] = 6] = "sounds/doge-hurt";
        SoundKeys[SoundKeys["sounds/end-draw"] = 7] = "sounds/end-draw";
        SoundKeys[SoundKeys["sounds/hand-clap"] = 8] = "sounds/hand-clap";
        SoundKeys[SoundKeys["sounds/level-fail"] = 9] = "sounds/level-fail";
        SoundKeys[SoundKeys["sounds/level-pass"] = 10] = "sounds/level-pass";
        SoundKeys[SoundKeys["sounds/lost-star-in-gameplay"] = 11] = "sounds/lost-star-in-gameplay";
        SoundKeys[SoundKeys["sounds/raise-star"] = 12] = "sounds/raise-star";
        SoundKeys[SoundKeys["sounds/spawn-coins"] = 13] = "sounds/spawn-coins";
        SoundKeys[SoundKeys["sounds/star-raise"] = 14] = "sounds/star-raise";
        SoundKeys[SoundKeys["sounds/writing-1"] = 15] = "sounds/writing-1";
        SoundKeys[SoundKeys["sounds/writing-2"] = 16] = "sounds/writing-2";
        SoundKeys[SoundKeys["sounds/writing-3"] = 17] = "sounds/writing-3";
        SoundKeys[SoundKeys["sounds/writing-4"] = 18] = "sounds/writing-4";
        SoundKeys[SoundKeys["sounds/bee-bullet-explode"] = 19] = "sounds/bee-bullet-explode";
        return SoundKeys;
      }(SoundKeys || {});

      ccenum(SoundKeys); //? In realtime, numeric enums contains number keys

      var keys = Object.keys(SoundKeys).filter(function (key) {
        return isNaN(Number(key));
      });
      var SoundKeysMapping = keys.reduce(function (acc, key) {
        acc[SoundKeys[key]] = key;
        return acc;
      }, {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "05faedSJ2NHFqLe9b3g4RIl", "CocosUtils", undefined);

      var CocosUtils = /*#__PURE__*/function () {
        function CocosUtils() {
          _classCallCheck(this, CocosUtils);
        }

        _createClass(CocosUtils, null, [{
          key: "getBoundingBoxToWorld",
          value:
          /**
           * Fix `uiTransformComponent.getBoundingBoxToWorld()` work incorrectly if have children
           * @param node Node need to get BoundingBox, must have a UITransform component
           */
          function getBoundingBoxToWorld(node) {
            if (node.parent) {
              var m = node.parent.getWorldMatrix();
              return this.getBoundingBoxTo(m, node);
            }

            var uiTransformComponent = node.getComponent(UITransform);

            if (!uiTransformComponent) {
              throw new Error('Node must have UITransform component');
            }

            return uiTransformComponent.getBoundingBox();
          }
        }, {
          key: "getBoundingBoxTo",
          value: function getBoundingBoxTo(parentMat, currentNode) {
            var _matrix = math.mat4();

            math.Mat4.fromRTS(_matrix, currentNode.getRotation(), currentNode.getPosition(), currentNode.getScale());
            var uiTransformComponent = currentNode.getComponent(UITransform);

            if (!uiTransformComponent) {
              throw new Error('Node must have UITransform component');
            }

            var width = uiTransformComponent.contentSize.width;
            var height = uiTransformComponent.contentSize.height;
            var rect = new math.Rect(-uiTransformComponent.anchorPoint.x * width, -uiTransformComponent.anchorPoint.y * height, width, height);

            var _worldMatrix = math.mat4();

            math.Mat4.multiply(_worldMatrix, parentMat, _matrix);
            rect.transformMat4(_worldMatrix); // query child's BoundingBox

            if (!currentNode.children || currentNode.children.length === 0) {
              return rect;
            }

            var locChildren = currentNode.children;

            var _iterator = _createForOfIteratorHelper(locChildren),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;

                if (child && child.active) {
                  var uiTransform = child.getComponent(UITransform);

                  if (uiTransform) {
                    var childRect = this.getBoundingBoxTo(currentNode.getWorldMatrix(), child);

                    if (childRect) {
                      math.Rect.union(rect, rect, childRect);
                    }
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return rect;
          }
        }]);

        return CocosUtils;
      }();

      cclegacy._RF.pop();

      var _dec$b, _dec2$8, _dec3$6, _dec4$3, _dec5$1, _dec6, _dec7, _dec8, _dec9, _class$b, _class2$7, _descriptor$6, _descriptor2$3, _descriptor3$2, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "4b299Dv1kVGcqQmJC9yBPAV", "ButtonReleased", undefined);

      var ccclass$b = _decorator.ccclass,
          requireComponent$3 = _decorator.requireComponent,
          property$7 = _decorator.property,
          disallowMultiple$5 = _decorator.disallowMultiple,
          executionOrder$2 = _decorator.executionOrder;
      var ButtonReleased = (_dec$b = ccclass$b('ButtonReleased'), _dec2$8 = requireComponent$3([UITransform, Button, Animation]), _dec3$6 = executionOrder$2(111), _dec4$3 = property$7(CCString), _dec5$1 = property$7(CCString), _dec6 = property$7(CCBoolean), _dec7 = property$7({
        visible: function visible() {
          return this.useSound;
        },
        type: SoundKeys
      }), _dec8 = property$7({
        tooltip: 'Add a delay after click to prevent spamming (not apply for cancel click)'
      }), _dec9 = property$7({
        visible: function visible() {
          return this.disableSpamClick;
        },
        tooltip: 'Delay time in seconds'
      }), _dec$b(_class$b = disallowMultiple$5(_class$b = _dec2$8(_class$b = _dec3$6(_class$b = (_class2$7 = /*#__PURE__*/function (_Component) {
        _inherits(ButtonReleased, _Component);

        var _super = _createSuper(ButtonReleased);

        function ButtonReleased() {
          var _this;

          _classCallCheck(this, ButtonReleased);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "downClipName", _descriptor$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "upClipName", _descriptor2$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "useSound", _descriptor3$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundKey", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "disableSpamClick", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "disableSpamDelay", _descriptor6, _assertThisInitialized(_this));
          /**
           * Handle anim scales the click area result in cancelling click
           */


          _this.currentClickBoundingBox = null;
          /**
           * Handle double click case
           */

          _this.hasDown = false;
          /**
           * Handle double click case
           */

          _this.hasUp = false;

          _this.onTouchStart = function (_event) {
            if (!_this.buttonComponent.interactable) return;
            if (_this.hasDown) return;
            _this.currentClickBoundingBox = CocosUtils.getBoundingBoxToWorld(_this.node);
            _this.hasDown = true;

            _this.runAnimation(_this.downClipName);

            if (_this.useSound) {
              _this.playSound(SoundKeysMapping[_this.soundKey]);
            }
          };

          _this.onTouchEnd = function (event) {
            if (!_this.buttonComponent.interactable) return;
            if (!_this.hasDown) return;
            if (_this.hasUp) return;

            _this.handleUp(event);
          };

          _this.onTouchCancel = function (event) {
            var _this$currentClickBou;

            if (!_this.buttonComponent.interactable) return;
            if (!_this.hasDown) return;
            if (_this.hasUp) return;

            if (event instanceof EventTouch && (_this$currentClickBou = _this.currentClickBoundingBox) !== null && _this$currentClickBou !== void 0 && _this$currentClickBou.contains(event.getUILocation())) {
              _this.handleUp(event);

              return;
            }

            _this.hasUp = true;

            _this.runAnimation(_this.upClipName);

            _this.animationComponent.once(Animation.EventType.FINISHED, function () {
              _this.handleResetButtonState();
            });
          };

          _this.handleResetButtonState = function () {
            var _this$buttonComponent;

            _this.hasDown = false;
            _this.hasUp = false;
            if (!_this.buttonComponent) return; //Reset button scale to normal before animation

            var scaleX = _this.buttonComponent.node.scale.x;
            var scaleZ = _this.buttonComponent.node.scale.z;
            (_this$buttonComponent = _this.buttonComponent) === null || _this$buttonComponent === void 0 ? void 0 : _this$buttonComponent.node.setScale(new Vec3(scaleX, 1, scaleZ));
          };

          return _this;
        }

        _createClass(ButtonReleased, [{
          key: "onLoad",
          value: function onLoad() {
            this.buttonComponent = this.getComponent(Button);
            this.animationComponent = this.getComponent(Animation);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.buttonComponent) {
              throw new Error('ButtonAnimAddition: Button component not found');
            }

            if (!this.animationComponent) {
              throw new Error('ButtonAnimAddition: Animation component not found');
            }
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            if (this.animationComponent.clips.length < 2) {
              console.warn("ButtonAnimAddition: Animation component must have 2 clips in ".concat(this.node.name));
              return;
            } //? remove origin Button Event


            this.node.off(Input.EventType.TOUCH_END, //@ts-expect-error TS2339: Property '_onTouchEnded' does not exist on type 'Button'.
            this.buttonComponent._onTouchEnded, this.buttonComponent); // this.node.off(Input.EventType.TOUCH_START)
            // this.node.off(Input.EventType.TOUCH_CANCEL)
            //? add onClick custom handle

            this.node.on(Node.EventType.TOUCH_START, this.onTouchStart);
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd);
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.node.off(Node.EventType.TOUCH_START, this.onTouchStart);
            this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd);
            this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel);
            this.unschedule(this.handleResetButtonState);
            this.handleResetButtonState();
          }
        }, {
          key: "handleUp",
          value: function handleUp(event) {
            var _this2 = this;

            this.hasUp = true;
            this.runAnimation(this.upClipName);
            this.animationComponent.once(Animation.EventType.FINISHED, function () {
              var _this2$buttonComponen;

              if (_this2.disableSpamClick) {
                _this2.scheduleOnce(_this2.handleResetButtonState, _this2.disableSpamDelay);
              } else {
                _this2.handleResetButtonState();
              }

              if (_this2.buttonComponent && !_this2.buttonComponent.interactable) return;
              (_this2$buttonComponen = _this2.buttonComponent) === null || _this2$buttonComponen === void 0 ? void 0 : _this2$buttonComponen.clickEvents.forEach(function (clickEvent) {
                clickEvent.emit([event, clickEvent.customEventData]);
              });
            });
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name);
          }
        }, {
          key: "runAnimation",
          value: function runAnimation(name) {
            if (!this.isAnimationExist(name)) {
              throw new Error("".concat(this.node.name, ": Animation component must have ").concat(name, " clip"));
            }

            this.animationComponent.play(name);
          }
        }, {
          key: "isAnimationExist",
          value: function isAnimationExist(name) {
            return this.animationComponent.clips.some(function (clip) {
              if (clip && clip.name === name) return true;
              return false;
            });
          }
        }]);

        return ButtonReleased;
      }(Component), (_descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "downClipName", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'ButtonDown';
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$7.prototype, "upClipName", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'ButtonUp';
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$7.prototype, "useSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$7.prototype, "soundKey", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SoundKeys['sounds/button-click'];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$7.prototype, "disableSpamClick", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$7.prototype, "disableSpamDelay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2$7)) || _class$b) || _class$b) || _class$b) || _class$b);

      cclegacy._RF.pop();

      var _dec$c, _dec2$9, _dec3$7, _class$c;

      cclegacy._RF.push({}, "28583YOWYJLYqOTxK/1CK7p", "Orientation", undefined);

      var ccclass$c = _decorator.ccclass,
          executionOrder$3 = _decorator.executionOrder,
          requireComponent$4 = _decorator.requireComponent,
          disallowMultiple$6 = _decorator.disallowMultiple;
      var Function = GameCore.Utils.Function;
      var Layout$1 = GameWorld.Layout,
          DesignSize = GameWorld.DesignSize;
      var Portrait = DesignSize.Portrait,
          Landscape = DesignSize.Landscape;
      var Orientation = (_dec$c = ccclass$c('Orientation'), _dec2$9 = executionOrder$3(-999), _dec3$7 = requireComponent$4([Camera]), _dec$c(_class$c = disallowMultiple$6(_class$c = _dec2$9(_class$c = _dec3$7(_class$c = /*#__PURE__*/function (_Component) {
        _inherits(Orientation, _Component);

        var _super = _createSuper(Orientation);

        function Orientation() {
          var _this;

          _classCallCheck(this, Orientation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.currentLayout = '';
          _this.handleViewResize = Function.debounce(function () {
            var _screen$resolution = screen.resolution,
                width = _screen$resolution.width,
                height = _screen$resolution.height;

            _this.node.scene.emit(GameEvents.VIEW_RESIZE, {
              width: width,
              height: height
            });

            _this.setupOrientationByScreenSize();
          }, 200);
          return _this;
        }

        _createClass(Orientation, [{
          key: "__preload",
          value: function __preload() {
            this.camera = this.getComponent(Camera);
            this.canvas = this.node.scene.getComponentInChildren(Canvas);
            this.validateRequiredComponents();
            this.listenResizeEvent();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.camera) {
              throw new Error('Orientation: Camera not found');
            }

            if (!this.canvas) {
              throw new Error('Orientation: Canvas not found');
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.attachCameraToCanvas();
            this.setupOrientationByScreenSize();
          }
        }, {
          key: "attachCameraToCanvas",
          value: function attachCameraToCanvas() {
            this.canvas.cameraComponent = this.camera;
          }
        }, {
          key: "setupOrientationByScreenSize",
          value: function setupOrientationByScreenSize() {
            var _screen$resolution2 = screen.resolution,
                width = _screen$resolution2.width,
                height = _screen$resolution2.height;

            if (width <= height) {
              this.setPortraitView();
            } else {
              this.setLandscapeView();
            }
          }
        }, {
          key: "setPortraitView",
          value: function setPortraitView() {
            var resolution = screen.resolution;
            View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            var worldRatio = this.getWorldRatio();
            var screenRatio = this.getScreenRatio(); // ? Keep landscape ratio, change FULL_PORTRAIT_SIZE if you want to stretch the game

            var resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;

            if (worldRatio > screenRatio && !GameWorld.FULL_PORTRAIT_SIZE) {
              resolutionPolicy = ResolutionPolicy.SHOW_ALL;
            }

            View.instance.setDesignResolutionSize(Portrait.WIDTH, Portrait.HEIGHT, resolutionPolicy);
            console.info('setPortraitView', {
              resolution: resolution,
              worldRatio: worldRatio,
              screenRatio: screenRatio
            });

            if (this.currentLayout !== Layout$1.Portrait) {
              this.node.scene.emit(GameEvents.LAYOUT_CHANGED, Layout$1.Portrait);
              this.currentLayout = Layout$1.Portrait;
            }
          }
        }, {
          key: "setLandscapeView",
          value: function setLandscapeView() {
            var resolution = screen.resolution;
            View.instance.setOrientation(macro.ORIENTATION_LANDSCAPE);
            var worldRatio = this.getWorldRatio();
            var screenRatio = this.getScreenRatio(); // ? Keep landscape ratio, change FULL_LANDSCAPE_SIZE if you want to support full screen size

            var resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;

            if (worldRatio < screenRatio && !GameWorld.FULL_LANDSCAPE_SIZE) {
              resolutionPolicy = ResolutionPolicy.EXACT_FIT; // resolutionPolicy = ResolutionPolicy.SHOW_ALL
            }

            View.instance.setDesignResolutionSize(Landscape.WIDTH, Landscape.HEIGHT, resolutionPolicy);
            console.info('setLandscapeView', {
              resolution: resolution,
              worldRatio: worldRatio,
              screenRatio: screenRatio
            });

            if (this.currentLayout !== Layout$1.Landscape) {
              this.node.scene.emit(GameEvents.LAYOUT_CHANGED, Layout$1.Landscape);
              this.currentLayout = Layout$1.Landscape;
            }
          }
        }, {
          key: "listenResizeEvent",
          value: function listenResizeEvent() {
            if (sys.isBrowser) {
              View.instance.setResizeCallback(this.handleViewResize);
            } else if (sys.isMobile) {
              window.addEventListener('resize', this.handleViewResize);
            }
          }
        }, {
          key: "getScreenRatio",
          value: function getScreenRatio() {
            var resolution = screen.resolution;
            return resolution.width / resolution.height;
          }
        }, {
          key: "getWorldRatio",
          value: function getWorldRatio() {
            var _View$instance$getDes = View.instance.getDesignResolutionSize(),
                width = _View$instance$getDes.width,
                height = _View$instance$getDes.height;

            return width / height;
          }
        }]);

        return Orientation;
      }(Component)) || _class$c) || _class$c) || _class$c) || _class$c);

      cclegacy._RF.pop();

      var _dec$d, _dec2$a, _dec3$8, _dec4$4, _dec5$2, _class$d, _class2$8, _descriptor$7, _descriptor2$4, _descriptor3$3;

      cclegacy._RF.push({}, "0e570DdAIZPKY6DNtNerFmX", "OpacityToggler", undefined);

      var ccclass$d = _decorator.ccclass,
          requireComponent$5 = _decorator.requireComponent,
          property$8 = _decorator.property;
      var OpacityToggler = (_dec$d = ccclass$d('OpacityToggler'), _dec2$a = requireComponent$5([UIOpacity]), _dec3$8 = property$8(CCBoolean), _dec4$4 = property$8(CCBoolean), _dec5$2 = property$8(CCBoolean), _dec$d(_class$d = _dec2$a(_class$d = (_class2$8 = /*#__PURE__*/function (_Component) {
        _inherits(OpacityToggler, _Component);

        var _super = _createSuper(OpacityToggler);

        function OpacityToggler() {
          var _this;

          _classCallCheck(this, OpacityToggler);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "isActive", _descriptor$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "activeValue", _descriptor2$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "inActiveValue", _descriptor3$3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(OpacityToggler, [{
          key: "onLoad",
          value: function onLoad() {
            this.opacityComponent = this.getComponent(UIOpacity);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.opacityComponent) {
              throw new Error('OpacityToggler: UIOpacity not found');
            }
          }
        }, {
          key: "changeState",
          value: function changeState(active) {
            if (active === undefined) {
              active = !this.isActive;
            } else if (active) {
              this.opacityComponent.opacity = this.activeValue;
              this.isActive = true;
            } else {
              this.opacityComponent.opacity = this.inActiveValue;
              this.isActive = false;
            }
          }
        }]);

        return OpacityToggler;
      }(Component), (_descriptor$7 = _applyDecoratedDescriptor(_class2$8.prototype, "isActive", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$8.prototype, "activeValue", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$8.prototype, "inActiveValue", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 128;
        }
      })), _class2$8)) || _class$d) || _class$d);

      cclegacy._RF.pop();

      var _dec$e, _dec2$b, _dec3$9, _class$e, _class2$9, _class3$1;

      cclegacy._RF.push({}, "7ef37Q3PZpKYaeik5JzGwNy", "DebugResolution", undefined);

      var ccclass$e = _decorator.ccclass,
          property$9 = _decorator.property,
          requireComponent$6 = _decorator.requireComponent,
          disallowMultiple$7 = _decorator.disallowMultiple,
          executeInEditMode$1 = _decorator.executeInEditMode;
      var _GameWorld$DesignSize = GameWorld.DesignSize,
          Portrait$1 = _GameWorld$DesignSize.Portrait,
          Landscape$1 = _GameWorld$DesignSize.Landscape;
      var DebugResolution = (_dec$e = ccclass$e('DebugResolution'), _dec2$b = requireComponent$6([Graphics]), _dec3$9 = executeInEditMode$1(true), _dec$e(_class$e = disallowMultiple$7(_class$e = _dec2$b(_class$e = _dec3$9(_class$e = (_class2$9 = (_class3$1 = /*#__PURE__*/function (_Component) {
        _inherits(DebugResolution, _Component);

        var _super = _createSuper(DebugResolution);

        function DebugResolution() {
          var _this;

          _classCallCheck(this, DebugResolution);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleLayoutChange = function () {
            _this.graphics.clear();

            _this.start();
          };

          return _this;
        }

        _createClass(DebugResolution, [{
          key: "drawPortrait",
          get: function get() {
            return DebugResolution._drawPortrait;
          },
          set: function set(value) {
            if (value === DebugResolution._drawPortrait) return;

            if (value) {
              this.drawPortraitResolution();
            } else {
              this.graphics.clear();
            }

            DebugResolution._drawPortrait = value;

            if (DebugResolution._drawLandscape) {
              this.drawLandscapeResolution();
            }
          }
        }, {
          key: "drawLandscape",
          get: function get() {
            return DebugResolution._drawLandscape;
          },
          set: function set(value) {
            if (value === DebugResolution._drawLandscape) return;

            if (value) {
              this.drawLandscapeResolution();
            } else {
              this.graphics.clear();
            }

            DebugResolution._drawLandscape = value;

            if (DebugResolution._drawPortrait) {
              this.drawPortraitResolution();
            }
          }
        }, {
          key: "__preload",
          value: function __preload() {
            this.graphics = this.getComponent(Graphics);
            this.validateRequiredComponents();
            this.listenGameEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphics) {
              throw new Error('DebugResolution: Graphics not found');
            }
          }
        }, {
          key: "listenGameEvents",
          value: function listenGameEvents() {
            this.node.scene.on(GameEvents.LAYOUT_CHANGED, this.handleLayoutChange);
          }
        }, {
          key: "start",
          value: function start() {
            if (this.drawPortrait) {
              this.drawPortraitResolution();
            }

            if (this.drawLandscape) {
              this.drawLandscapeResolution();
            }
          }
        }, {
          key: "drawPortraitResolution",
          value: function drawPortraitResolution() {
            var graphics = this.graphics;
            var width = Portrait$1.WIDTH;
            var height = Portrait$1.HEIGHT;
            var x = -width / 2;
            var y = -height / 2;
            graphics.strokeColor = Color.GREEN;
            graphics.rect(x, y, width, height);
            graphics.stroke();
          }
        }, {
          key: "drawLandscapeResolution",
          value: function drawLandscapeResolution() {
            var graphics = this.graphics;
            var width = Landscape$1.WIDTH;
            var height = Landscape$1.HEIGHT;
            var x = -width / 2;
            var y = -height / 2;
            graphics.strokeColor = Color.CYAN;
            graphics.rect(x, y, width, height);
            graphics.stroke();
          }
        }]);

        return DebugResolution;
      }(Component), _class3$1._drawPortrait = true, _class3$1._drawLandscape = true, _class3$1), (_applyDecoratedDescriptor(_class2$9.prototype, "drawPortrait", [property$9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "drawPortrait"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "drawLandscape", [property$9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "drawLandscape"), _class2$9.prototype)), _class2$9)) || _class$e) || _class$e) || _class$e) || _class$e);

      cclegacy._RF.pop();

      var _dec$f, _dec2$c, _dec3$a, _dec4$5, _dec5$3, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _class$f, _class2$a, _descriptor$8, _descriptor2$5, _descriptor3$4, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7;

      cclegacy._RF.push({}, "0e2d6yn/BVObK1kyTJ5a09a", "GameStats", undefined);

      var ccclass$f = _decorator.ccclass,
          executionOrder$4 = _decorator.executionOrder,
          property$a = _decorator.property;
      var NORMAL_COLOR = Color.BLACK;
      var WARNING_COLOR = Color.MAGENTA;
      var DANGER_COLOR = Color.RED;
      var GameStats = (_dec$f = ccclass$f('GameStats'), _dec2$c = executionOrder$4(-1000), _dec3$a = property$a(Label), _dec4$5 = property$a(Label), _dec5$3 = property$a(Label), _dec6$1 = property$a(Label), _dec7$1 = property$a(Label), _dec8$1 = property$a(Label), _dec9$1 = property$a(Label), _dec$f(_class$f = _dec2$c(_class$f = (_class2$a = /*#__PURE__*/function (_Component) {
        _inherits(GameStats, _Component);

        var _super = _createSuper(GameStats);

        function GameStats() {
          var _this;

          _classCallCheck(this, GameStats);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "fpsLabel", _descriptor$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "drawCountLabel", _descriptor2$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "logicTimeLabel", _descriptor3$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "physicTimeLabel", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "renderTimeLabel", _descriptor5$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "objectMemoryUsageLabel", _descriptor6$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "textureMemoryUsageLabel", _descriptor7, _assertThisInitialized(_this));

          _this.refreshInterval = 0.5;

          _this.handleMouseDown = function () {
            _this.bg.enabled = !_this.bg.enabled;
          };

          _this.waitForStats = function () {
            if (!profiler._stats) return;

            _this.unschedule(_this.waitForStats);

            _this.node.active = true;
            _this.stats = profiler._stats;

            _this.hideCocosStats();

            _this.startUpdateStats();
          };

          _this.updateStats = function () {
            _this.updateFps();

            _this.updateDrawCalls();

            _this.updateLogicTime();

            _this.updatePhysicTime();

            _this.updateRenderTime();

            _this.updateObjectMemoryUsage();

            _this.updateTextureMemoryUsage();

            _this.hideCocosStats();
          };

          return _this;
        }

        _createClass(GameStats, [{
          key: "onLoad",
          value: function onLoad() {
            this.bg = this.getComponent(Sprite);
            this.validateRequiredComponents();
            this.listenInputEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.bg) throw new Error('Missing background sprite');
            if (!this.fpsLabel) throw new Error('Missing fpsLabel');
            if (!this.drawCountLabel) throw new Error('Missing drawCountLabel');
            if (!this.logicTimeLabel) throw new Error('Missing logicTimeLabel');
            if (!this.physicTimeLabel) throw new Error('Missing physicTimeLabel');
            if (!this.renderTimeLabel) throw new Error('Missing renderTimeLabel');
            if (!this.objectMemoryUsageLabel) throw new Error('Missing objectMemoryUsageLabel');
            if (!this.textureMemoryUsageLabel) throw new Error('Missing textureMemoryUsageLabel');
          }
        }, {
          key: "listenInputEvents",
          value: function listenInputEvents() {
            this.node.on(Input.EventType.TOUCH_START, this.handleMouseDown);
          }
        }, {
          key: "start",
          value: function start() {
            this.bg.enabled = false;
            this.node.active = false;
            if (!profiler) return;

            if (!GameCore.Utils.Valid.isDebugger()) {
              profiler.hideStats();
              return;
            }

            profiler.showStats();
            this.schedule(this.waitForStats, 0.5, 20);
          }
        }, {
          key: "hideCocosStats",
          value: // ? Only hide the cocos stats UI
          function hideCocosStats() {
            if (!profiler) return; // @ts-expect-error - private property

            profiler._showFPS = false; // @ts-expect-error - private property

            var _rootNode = profiler._rootNode;

            if (_rootNode) {
              _rootNode.active = false;

              if (_rootNode.isValid) {
                _rootNode.destroyAllChildren();

                _rootNode.removeAllChildren();

                _rootNode.destroy();
              }
            }
          }
        }, {
          key: "startUpdateStats",
          value: function startUpdateStats() {
            this.schedule(this.updateStats, this.refreshInterval);
          }
        }, {
          key: "updateFps",
          value: function updateFps() {
            var fps = this.getFps();
            this.updateFpsColor(fps);
            this.fpsLabel.string = "FPS: ".concat(fps);
          } // ? Good fps is 60, so 1 frame is 16.6ms, that mean renderTime + logicTime + physicTime
          // ? If renderTime, logicTime or physicTime is bigger than 5ms, it's not good

        }, {
          key: "updateFpsColor",
          value: function updateFpsColor(fps) {
            if (fps < 30) {
              this.fpsLabel.color = DANGER_COLOR;
            } else if (fps < 48) {
              this.fpsLabel.color = WARNING_COLOR;
            } else {
              this.fpsLabel.color = NORMAL_COLOR;
            }
          } // ? The draw calls is the number of draw calls in the scene
          // ? If draw calls is bigger than 15, it's not good

        }, {
          key: "updateDrawCalls",
          value: function updateDrawCalls() {
            var drawCount = this.getDrawCalls();
            this.updateDrawCallsColor(drawCount);
            this.drawCountLabel.string = "Draw Calls: ".concat(drawCount);
          }
        }, {
          key: "updateDrawCallsColor",
          value: function updateDrawCallsColor(drawCount) {
            // * Special case: on iOS, drawCount higher will be ok.
            // ! But! only good to use with AutoAtlas and disable DynamicAtlas, if not, it's not good
            // ? Double check: setupDynamicAtlas in SystemManager.ts
            var isIOS = sys.os === sys.OS.IOS;
            var dangerDrawCount = isIOS ? 80 : 25;
            var warningDrawCount = isIOS ? 60 : 15;

            if (drawCount > dangerDrawCount) {
              this.drawCountLabel.color = DANGER_COLOR;
            } else if (drawCount > warningDrawCount) {
              this.drawCountLabel.color = WARNING_COLOR;
            } else {
              this.drawCountLabel.color = NORMAL_COLOR;
            }
          }
        }, {
          key: "updateLogicTime",
          value: function updateLogicTime() {
            var logicTime = this.getLogicTime();
            this.updateLogicTimeColor(logicTime);
            this.logicTimeLabel.string = "Logic Time: ".concat(logicTime.toFixed(2), "ms");
          }
        }, {
          key: "updateLogicTimeColor",
          value: function updateLogicTimeColor(logicTime) {
            if (logicTime > 10) {
              this.logicTimeLabel.color = DANGER_COLOR;
            } else if (logicTime > 5) {
              this.logicTimeLabel.color = WARNING_COLOR;
            } else {
              this.logicTimeLabel.color = NORMAL_COLOR;
            }
          }
        }, {
          key: "updatePhysicTime",
          value: function updatePhysicTime() {
            var physicTime = this.getPhysicTime();
            this.updatePhysicTimeColor(physicTime);
            this.physicTimeLabel.string = "Physic Time: ".concat(physicTime.toFixed(2), "ms");
          }
        }, {
          key: "updatePhysicTimeColor",
          value: function updatePhysicTimeColor(physicTime) {
            if (physicTime > 10) {
              this.physicTimeLabel.color = DANGER_COLOR;
            } else if (physicTime > 5) {
              this.physicTimeLabel.color = WARNING_COLOR;
            } else {
              this.physicTimeLabel.color = NORMAL_COLOR;
            }
          }
        }, {
          key: "updateRenderTime",
          value: function updateRenderTime() {
            var renderTime = this.getRenderTime();
            this.updateRenderTimeColor(renderTime);
            this.renderTimeLabel.string = "Render Time: ".concat(renderTime.toFixed(2), "ms");
          }
        }, {
          key: "updateRenderTimeColor",
          value: function updateRenderTimeColor(renderTime) {
            if (renderTime > 10) {
              this.renderTimeLabel.color = DANGER_COLOR;
            } else if (renderTime > 5) {
              this.renderTimeLabel.color = WARNING_COLOR;
            } else {
              this.renderTimeLabel.color = NORMAL_COLOR;
            }
          } // ? The object memory usage is the memory used by the objects in the scene
          // ? If it's bigger than 40MB, it's not good

        }, {
          key: "updateObjectMemoryUsage",
          value: function updateObjectMemoryUsage() {
            var objectMemoryUsage = this.getObjectMemoryUsage();
            this.updateObjectMemoryUsageColor(objectMemoryUsage);
            this.objectMemoryUsageLabel.string = "Object Mem: ".concat(objectMemoryUsage.toFixed(2), "MB");
          }
        }, {
          key: "updateObjectMemoryUsageColor",
          value: function updateObjectMemoryUsageColor(objectMemoryUsage) {
            if (objectMemoryUsage > 40) {
              this.objectMemoryUsageLabel.color = DANGER_COLOR;
            } else if (objectMemoryUsage > 25) {
              this.objectMemoryUsageLabel.color = WARNING_COLOR;
            } else {
              this.objectMemoryUsageLabel.color = NORMAL_COLOR;
            }
          } // ? The texture memory usage is the memory used by the textures in the scene
          // ? If it's bigger than 50MB, it's not good

        }, {
          key: "updateTextureMemoryUsage",
          value: function updateTextureMemoryUsage() {
            var textureMemoryUsage = this.getTextureMemoryUsage();
            this.updateTextureMemoryUsageColor(textureMemoryUsage);
            this.textureMemoryUsageLabel.string = "Texture Mem: ".concat(textureMemoryUsage.toFixed(2), "MB");
          }
        }, {
          key: "updateTextureMemoryUsageColor",
          value: function updateTextureMemoryUsageColor(textureMemoryUsage) {
            if (textureMemoryUsage > 50) {
              this.textureMemoryUsageLabel.color = DANGER_COLOR;
            } else if (textureMemoryUsage > 35) {
              this.textureMemoryUsageLabel.color = WARNING_COLOR;
            } else {
              this.textureMemoryUsageLabel.color = NORMAL_COLOR;
            }
          } // Frames per second

        }, {
          key: "getFps",
          value: function getFps() {
            var counter = this.stats.fps.counter;
            return Math.floor(counter.value) || 0;
          }
        }, {
          key: "getDrawCalls",
          value: function getDrawCalls() {
            // Draw calls per frame
            // * Maybe minus a draw call by GameStats
            var counter = this.stats.draws.counter;
            return counter.value || 0;
          }
        }, {
          key: "getLogicTime",
          value: function getLogicTime() {
            // Time spent in logic in ms
            var counter = this.stats.logic.counter;
            return Math.floor(counter.value * 1000) / 1000 || 0;
          }
        }, {
          key: "getPhysicTime",
          value: function getPhysicTime() {
            // Time spent in physics in ms
            var counter = this.stats.physics.counter;
            return Math.floor(counter.value * 1000) / 1000 || 0;
          }
        }, {
          key: "getRenderTime",
          value: function getRenderTime() {
            // Time spent in rendering in ms
            var counter = this.stats.render.counter;
            return Math.floor(counter.value * 1000) / 1000 || 0;
          }
        }, {
          key: "getObjectMemoryUsage",
          value: function getObjectMemoryUsage() {
            // Memory used by objects in MB
            var counter = this.stats.bufferMemory.counter;
            return Math.floor(counter.value * 1000) / 1000 || 0;
          }
        }, {
          key: "getTextureMemoryUsage",
          value: function getTextureMemoryUsage() {
            // Memory used by textures in MB
            var counter = this.stats.textureMemory.counter;
            return Math.floor(counter.value * 1000) / 1000 || 0;
          }
        }]);

        return GameStats;
      }(Component), (_descriptor$8 = _applyDecoratedDescriptor(_class2$a.prototype, "fpsLabel", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$a.prototype, "drawCountLabel", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$a.prototype, "logicTimeLabel", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$a.prototype, "physicTimeLabel", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$a.prototype, "renderTimeLabel", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$a.prototype, "objectMemoryUsageLabel", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$a.prototype, "textureMemoryUsageLabel", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$a)) || _class$f) || _class$f);

      cclegacy._RF.pop();

      var _dec$g, _dec2$d, _dec3$b, _dec4$6, _dec5$4, _dec6$2, _dec7$2, _class$g, _class2$b, _descriptor$9, _descriptor2$6, _descriptor3$5, _descriptor4$2, _descriptor5$2;

      cclegacy._RF.push({}, "aa4b0d0u0hLeqd3+/PQZ/QD", "SwitchButton", undefined);

      var ccclass$g = _decorator.ccclass,
          property$b = _decorator.property,
          requireComponent$7 = _decorator.requireComponent;
      var analytics = globalThis.game.analytics;
      var SwitchButton = (_dec$g = ccclass$g('SwitchButton'), _dec2$d = requireComponent$7([Button]), _dec3$b = property$b(CCBoolean), _dec4$6 = property$b(Node), _dec5$4 = property$b(Node), _dec6$2 = property$b(CCBoolean), _dec7$2 = property$b({
        visible: function visible() {
          return this.useSound;
        },
        type: SoundKeys
      }), _dec$g(_class$g = _dec2$d(_class$g = (_class2$b = /*#__PURE__*/function (_Component) {
        _inherits(SwitchButton, _Component);

        var _super = _createSuper(SwitchButton);

        function SwitchButton() {
          var _this;

          _classCallCheck(this, SwitchButton);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "enable", _descriptor$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeOn", _descriptor2$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeOff", _descriptor3$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "useSound", _descriptor4$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundKey", _descriptor5$2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SwitchButton, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.nodeOn) {
              throw new Error('SwitchButton: nodeOn not found');
            }

            if (!this.nodeOff) {
              throw new Error('SwitchButton: nodeOff not found');
            }
          }
        }, {
          key: "switch",
          value: function _switch() {
            if (!this.node.active) return false; // TODO: handle event from component button

            analytics.event(GameCore.Plugins.Analytics.Events.BUTTON_CLICK, {
              switch_name: this.node.name,
              enable: !this.enable
            });

            if (this.useSound) {
              this.playSound(SoundKeysMapping[this.soundKey]);
            }

            return this.updateStatus(!this.enable);
          }
        }, {
          key: "setEnabled",
          value: function setEnabled(enable) {
            if (!this.node.active) return;
            this.updateStatus(enable);
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(enable) {
            this.enable = enable;
            this.nodeOn.active = enable;
            this.nodeOff.active = !enable;
            return enable;
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name);
          }
        }]);

        return SwitchButton;
      }(Component), (_descriptor$9 = _applyDecoratedDescriptor(_class2$b.prototype, "enable", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$b.prototype, "nodeOn", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$b.prototype, "nodeOff", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$b.prototype, "useSound", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$b.prototype, "soundKey", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SoundKeys['sounds/button-click'];
        }
      })), _class2$b)) || _class$g) || _class$g);

      cclegacy._RF.pop();

      var _dec$h, _dec2$e, _dec3$c, _dec4$7, _dec5$5, _dec6$3, _class$h, _class2$c, _descriptor$a, _descriptor2$7;

      cclegacy._RF.push({}, "bce15LcVrxOfYMa9rbXN/qi", "Localize", undefined);

      var ccclass$h = _decorator.ccclass,
          property$c = _decorator.property,
          requireComponent$8 = _decorator.requireComponent,
          executeInEditMode$2 = _decorator.executeInEditMode,
          disallowMultiple$8 = _decorator.disallowMultiple;
      var language$1 = globalThis.game.language;
      var Localize = (_dec$h = ccclass$h('Localize'), _dec2$e = requireComponent$8(Label), _dec3$c = executeInEditMode$2(true), _dec4$7 = property$c({
        visible: true
      }), _dec5$5 = property$c({
        group: {
          name: 'Fonts',
          id: 'fonts',
          displayOrder: 1
        },
        type: Font
      }), _dec6$3 = property$c({
        group: {
          name: 'Fonts',
          id: 'fonts',
          displayOrder: 2
        },
        type: Font
      }), _dec$h(_class$h = disallowMultiple$8(_class$h = _dec2$e(_class$h = _dec3$c(_class$h = (_class2$c = /*#__PURE__*/function (_Component) {
        _inherits(Localize, _Component);

        var _super = _createSuper(Localize);

        function Localize() {
          var _this;

          _classCallCheck(this, Localize);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this._key = '';

          _initializerDefineProperty(_this, "enFont", _descriptor$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ruFont", _descriptor2$7, _assertThisInitialized(_this));

          _this.handleLanguageChanged = function () {
            _this.updateTransToNode();
          };

          return _this;
        }

        _createClass(Localize, [{
          key: "key",
          get: function get() {
            return this._key;
          },
          set: function set(value) {
            this._key = value;
            this.updateTransToNode();
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.label = this.getComponent(Label);
            this.validateRequiredComponents();
            this.updateTransToNode();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.label) {
              throw new Error('Label component is not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.listenEvent();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.node.scene.off('update-language', this.handleLanguageChanged);
          }
        }, {
          key: "listenEvent",
          value: function listenEvent() {
            this.node.scene.on('update-language', this.handleLanguageChanged);
          }
        }, {
          key: "updateTransToNode",
          value: function updateTransToNode() {
            if (!this.node.active) return;
            if (!this.key) return;

            try {
              var trans = language$1.getText(this.key); // ? Update font

              var font = this.getFontByLang();
              this.label.font = font;
              this.label.string = trans; // ? Emit event use for other components

              this.node.emit('update-trans', trans);
            } catch (error) {
              console.warn(error);
            }
          }
        }, {
          key: "getFontByLang",
          value: function getFontByLang() {
            if (!this.enFont || !this.ruFont) {
              throw new Error('Font is not found');
            }

            var locale = language$1.getCurrentLocale();

            switch (locale) {
              case 'en':
                return this.enFont;

              case 'ru':
                return this.ruFont;

              default:
                return this.enFont;
            }
          }
          /* public fontSize(size: number): number {
              // ? modSize is number modify for the font size, after update new font
              const modSize = this.getModSizeByLang()
               return size / modSize
          }
           private getModSizeByLang(): number {
              const locale = language.getCurrentLocale()
               switch (locale) {
                  case 'en':
                      return 1
                  case 'ru':
                      return 1.15
                  default:
                      return 1
              }
          } */

        }]);

        return Localize;
      }(Component), (_applyDecoratedDescriptor(_class2$c.prototype, "key", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$c.prototype, "key"), _class2$c.prototype), _descriptor$a = _applyDecoratedDescriptor(_class2$c.prototype, "enFont", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$c.prototype, "ruFont", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$c)) || _class$h) || _class$h) || _class$h) || _class$h);

      cclegacy._RF.pop();

      var _dec$i, _class$i;

      cclegacy._RF.push({}, "9b958Lf6PFClb/JuJfTLzxG", "Vibrate", undefined);

      var ccclass$i = _decorator.ccclass;
      var _GameCore$4 = GameCore,
          Utils = _GameCore$4.Utils;
      var player$2 = globalThis.game.player;
      var Vibrate = (_dec$i = ccclass$i('Vibrate'), _dec$i(_class$i = /*#__PURE__*/function (_Component) {
        _inherits(Vibrate, _Component);

        var _super = _createSuper(Vibrate);

        function Vibrate() {
          _classCallCheck(this, Vibrate);

          return _super.apply(this, arguments);
        }

        _createClass(Vibrate, [{
          key: "vibrate",
          value: function vibrate(time) {
            if (!this.isVibrateEnable()) return;
            Utils.Device.vibrate(time);
          }
        }, {
          key: "isVibrateEnable",
          value: function isVibrateEnable() {
            return !!player$2.getPlayerSetting('vibrate');
          }
        }]);

        return Vibrate;
      }(Component)) || _class$i);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "ad867amogBFGJo9jp78EnQP", "DevTools", undefined);

      var Events$4 = /*#__PURE__*/function (Events) {
        Events["UNLOCK_DEV_TOOLS"] = "unlock-dev-tools";
        Events["TRIGGER_UNLOCK_KEY"] = "trigger-unlock-key";
        Events["TRIGGER_RESET_SEQUENCE"] = "trigger-reset-sequence";
        return Events;
      }(Events$4 || {});

      var DevTools = {
        Events: Events$4,
        UNLOCK_SEQUENCE: '101013012031'
      };

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "adb272QtfxDGZ+87PwkWEiN", "GameSettings", undefined);

      var GameSettings = {
        // ? Use in UI/Clock
        waitForPassSecs: 6
      };

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "32598ObpVZK/pecmWIdcs+7", "SceneKeys", undefined); // ? Scene key mush match the scene name in the editor


      var SceneKeys = {
        TEST_SCENE: 'TestScene',
        LOAD_SCENE: 'LoadScene',
        GAME_SCENE: 'GameScene'
      };

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "0eeb868JeVE67iFwhbkRCmE", "ScreenKeys", undefined);

      var ScreenKeys = {
        MAP_SCREEN: 'MapScreen',
        LOSE_SCREEN: 'LoseScreen',
        LOADING_SCREEN: 'LoadingScreen',
        WINNING_SCREEN: 'WinningScreen',
        SETTINGS_SCREEN: 'SettingsScreen',
        NOTIFICATION_SCREEN: 'NotificationScreen',
        CONGRATULATION_SCREEN: 'CongratulationScreen'
      };

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "ab23abxgeZD0KDVdLYEeAQS", "BeeState", undefined);

      var BeeState = /*#__PURE__*/function (BeeState) {
        BeeState[BeeState["IDLE"] = 0] = "IDLE";
        BeeState[BeeState["FLYING"] = 1] = "FLYING";
        BeeState[BeeState["WAITING_TO_SEEK_PATH"] = 2] = "WAITING_TO_SEEK_PATH";
        BeeState[BeeState["SEEKING_PATH"] = 3] = "SEEKING_PATH";
        BeeState[BeeState["ATTACKING"] = 4] = "ATTACKING";
        BeeState[BeeState["DIE"] = 5] = "DIE";
        return BeeState;
      }(BeeState || {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "9ef7e8FlFJOS5DAWzwBrkww", "GameObject", undefined);

      var ObjectNames = /*#__PURE__*/function (ObjectNames) {
        ObjectNames["AIR_FAN"] = "air-fan";
        ObjectNames["BALLOON"] = "balloon";
        ObjectNames["DOGE"] = "doge";
        ObjectNames["BEE"] = "bee";
        ObjectNames["BIG_BEE"] = "big-bee";
        ObjectNames["BIG_BEE_BULLET"] = "big-bee-bullet";
        ObjectNames["BEEHIVE"] = "beehive";
        ObjectNames["BRICK"] = "brick";
        ObjectNames["GRASS"] = "grass";
        ObjectNames["GRASS_DARK"] = "grass-dark";
        ObjectNames["COLLIDER"] = "collider";
        ObjectNames["THORN"] = "thorn";
        ObjectNames["THORN_BALL"] = "thorn-ball";
        ObjectNames["MAP_LINE"] = "line";
        ObjectNames["WOOD"] = "wood";
        ObjectNames["WOOD_STROKE"] = "wood-stroke";
        ObjectNames["BALLON"] = "balloon";
        ObjectNames["POISON"] = "poison";
        ObjectNames["POISON_BUBBLE"] = "poison-bubble";
        ObjectNames["POISON_SURFACE"] = "poison-surface";
        ObjectNames["WATER"] = "water";
        ObjectNames["WATER_SURFACE"] = "water-surface";
        ObjectNames["DANGER_AREA"] = "danger-area";
        ObjectNames["DUST_PARTICLE"] = "dust-particle";
        ObjectNames["ROPE"] = "rope";
        ObjectNames["JOINT"] = "joint";
        ObjectNames["DRAW_LINE"] = "draw-line";
        return ObjectNames;
      }({});

      var COLLIDER = ObjectNames.COLLIDER,
          DANGER_AREA = ObjectNames.DANGER_AREA,
          DOGE = ObjectNames.DOGE,
          GRASS = ObjectNames.GRASS,
          GRASS_DARK = ObjectNames.GRASS_DARK,
          BRICK = ObjectNames.BRICK,
          LINE = ObjectNames.MAP_LINE,
          POISON = ObjectNames.POISON,
          POISON_SURFACE = ObjectNames.POISON_SURFACE,
          POISON_BUBBLE = ObjectNames.POISON_BUBBLE,
          AIR_FAN = ObjectNames.AIR_FAN,
          WOOD = ObjectNames.WOOD,
          WOOD_STROKE = ObjectNames.WOOD_STROKE,
          THORN_BALL = ObjectNames.THORN_BALL,
          THORN = ObjectNames.THORN,
          BEE = ObjectNames.BEE,
          BEEHIVE = ObjectNames.BEEHIVE,
          ROPE = ObjectNames.ROPE,
          BALLOON = ObjectNames.BALLOON,
          WATER = ObjectNames.WATER,
          WATER_SURFACE = ObjectNames.WATER_SURFACE,
          JOINT = ObjectNames.JOINT,
          DUST_PARTICLE = ObjectNames.DUST_PARTICLE,
          DRAW_LINE = ObjectNames.DRAW_LINE;
      var depthOrder = [COLLIDER, DANGER_AREA, GRASS, GRASS_DARK, BRICK, LINE, POISON, POISON_SURFACE, POISON_BUBBLE, AIR_FAN, WOOD, WOOD_STROKE, THORN_BALL, THORN, BEE, BEEHIVE, ROPE, DOGE, BALLOON, WATER, WATER_SURFACE, JOINT, DUST_PARTICLE, DRAW_LINE];
      var objectDepths = {};

      for (var i = 0; i < depthOrder.length; i++) {
        objectDepths[depthOrder[i]] = i;
      }

      var ObjectDepths = objectDepths; // export enum ObjectDepths {
      //     COLLIDER,
      //     DANGER_AREA,
      //     DOGE,
      //     GRASS,
      //     BRICK,
      //     LINE,
      //     POISON,
      //     POISON_SURFACE,
      //     POISON_BUBBLE,
      //     AIR_FAN,
      //     WOOD,
      //     WOOD_STROKE,
      //     THORN_BALL,
      //     THORN,
      //     BEE,
      //     BEEHIVE,
      //     ROPE,
      //     BALLOON,
      //     WATER,
      //     WATER_SURFACE,
      //     JOINT,
      //     DUST_PARTICLE,
      // }

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "4c577T9x2FPKpyFoVPXbav0", "ObjectIds", undefined);

      var ObjectIds = /*#__PURE__*/function (ObjectIds) {
        ObjectIds[ObjectIds["BRICK"] = 1] = "BRICK";
        ObjectIds[ObjectIds["STROKE"] = 3] = "STROKE";
        ObjectIds[ObjectIds["GRASS_DARK"] = 4] = "GRASS_DARK";
        ObjectIds[ObjectIds["GRASS"] = 5] = "GRASS";
        ObjectIds[ObjectIds["COLLIDER"] = 6] = "COLLIDER";
        ObjectIds[ObjectIds["THORN"] = 7] = "THORN";
        ObjectIds[ObjectIds["WATER"] = 8] = "WATER";
        ObjectIds[ObjectIds["WATER_SURFACE"] = 9] = "WATER_SURFACE";
        ObjectIds[ObjectIds["LINE"] = 10] = "LINE";
        ObjectIds[ObjectIds["POISON_SURFACE"] = 11] = "POISON_SURFACE";
        ObjectIds[ObjectIds["POISON"] = 12] = "POISON";
        ObjectIds[ObjectIds["WOOD"] = 13] = "WOOD";
        ObjectIds[ObjectIds["THORN_BALL"] = 14] = "THORN_BALL";
        ObjectIds[ObjectIds["CONNECT"] = 15] = "CONNECT";
        ObjectIds[ObjectIds["DANGER_AREA"] = 16] = "DANGER_AREA";
        ObjectIds[ObjectIds["BALLOON"] = 17] = "BALLOON";
        ObjectIds[ObjectIds["AIR_FAN"] = 18] = "AIR_FAN";
        ObjectIds[ObjectIds["SPIDER"] = 19] = "SPIDER";
        ObjectIds[ObjectIds["DOGE_A"] = 101] = "DOGE_A";
        ObjectIds[ObjectIds["DOGE_B"] = 106] = "DOGE_B";
        ObjectIds[ObjectIds["BIG_BEE"] = 107] = "BIG_BEE";
        ObjectIds[ObjectIds["BEEHIVE_A"] = 102] = "BEEHIVE_A";
        ObjectIds[ObjectIds["BEEHIVE_B"] = 103] = "BEEHIVE_B";
        ObjectIds[ObjectIds["BEEHIVE_C"] = 104] = "BEEHIVE_C";
        ObjectIds[ObjectIds["BEEHIVE_D"] = 105] = "BEEHIVE_D";
        return ObjectIds;
      }(ObjectIds || {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "7bb7ftpsjJCX5G6+WtNYJ2x", "PhysicsGroup", undefined);

      var PhysicsGroup = /*#__PURE__*/function (PhysicsGroup) {
        PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
        PhysicsGroup[PhysicsGroup["BEE"] = 2] = "BEE";
        PhysicsGroup[PhysicsGroup["MAIN_OBJECT"] = 4] = "MAIN_OBJECT";
        PhysicsGroup[PhysicsGroup["WORLD_BOUND"] = 8] = "WORLD_BOUND";
        PhysicsGroup[PhysicsGroup["ROPE"] = 16] = "ROPE";
        return PhysicsGroup;
      }(PhysicsGroup || {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "a6e4bjV/RVH17qBEx1mZaFg", "ResourcePaths", undefined);

      var ResourcePaths = /*#__PURE__*/function (ResourcePaths) {
        ResourcePaths["WATER_SURFACE_FRAME"] = "loadable/sprites/water-surface/spriteFrame";
        ResourcePaths["IC_HAND_FRAME"] = "loadable/sprites/ic-hand/spriteFrame";
        ResourcePaths["POISON_CIRCLE_FRAME"] = "loadable/sprites/poison-circle/spriteFrame";
        ResourcePaths["POISON_BUBBLE_PREFAB"] = "loadable/prefabs/PoisonBubble";
        ResourcePaths["DUST_PARTICLE_SPINE"] = "loadable/spines/dust-particle/siwang_texiao";
        ResourcePaths["MAP_JSON_PREFIX"] = "loadable/maps-json/";
        return ResourcePaths;
      }(ResourcePaths || {});

      cclegacy._RF.pop();

      var _dec$j, _class$j;

      cclegacy._RF.push({}, "476e6UyMHFJyI2GmFP4KpHY", "BaseObject", undefined);

      var ccclass$j = _decorator.ccclass;
      var BaseObject = (_dec$j = ccclass$j('BaseObject'), _dec$j(_class$j = /*#__PURE__*/function (_Component) {
        _inherits(BaseObject, _Component);

        var _super = _createSuper(BaseObject);

        function BaseObject() {
          var _this;

          _classCallCheck(this, BaseObject);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.id = 0;
          _this.points = [];
          _this.body = null;
          _this.bodyType = ERigidBody2DType.Static;
          return _this;
        }

        _createClass(BaseObject, [{
          key: "sleep",
          value: function sleep() {
            if (!this.body) {
              this.body = this.getComponent(RigidBody2D);
              if (!this.body) return;
              this.bodyType = this.body.type;
            }

            this.enabled = false;
            this.body.sleep();
            this.body.type = ERigidBody2DType.Static;
          }
        }, {
          key: "wake",
          value: function wake() {
            this.enabled = true;

            if (!this.body) {
              this.body = this.getComponent(RigidBody2D);
              if (!this.body) return;
              this.bodyType = this.body.type;
            } else {
              this.body.wakeUp();
              this.body.type = this.bodyType;
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this$body;

            this.enabled = false;
            (_this$body = this.body) === null || _this$body === void 0 ? void 0 : _this$body.sleep();
            var skeleton = this.getComponent(sp.Skeleton);
            if (skeleton) skeleton.enabled = false;
            var sprite = this.getComponent(Sprite);
            if (sprite) sprite.enabled = false;
          }
        }, {
          key: "preHide",
          value: function preHide() {
            var _this$body2;

            this.enabled = false;
            (_this$body2 = this.body) === null || _this$body2 === void 0 ? void 0 : _this$body2.sleep();
            this.scheduleOnce(this.hide, 0.2);
          }
        }, {
          key: "appear",
          value: function appear() {
            this.enabled = true;
            var skeleton = this.getComponent(sp.Skeleton);
            if (skeleton) skeleton.enabled = true;
          }
        }, {
          key: "setSpineAnimation",
          value: function setSpineAnimation(animationName, isLoop) {
            var skeleton = this.getComponent(sp.Skeleton);
            skeleton && skeleton.setAnimation(0, animationName, isLoop);
          }
        }, {
          key: "getCurrentSpineAnimation",
          value: function getCurrentSpineAnimation() {
            var skeleton = this.getComponent(sp.Skeleton);
            if (!skeleton) return null;
            return skeleton.animation;
          }
        }, {
          key: "setEnable",
          value: function setEnable(enabled) {
            this.enabled = enabled;
          }
        }, {
          key: "angle",
          value: function angle(x, y) {
            var angle = Math.atan2(y, x);

            if (angle < 0) {
              angle += 2 * Math.PI;
            }

            return angle;
          }
        }, {
          key: "getVectorDataFromAToB",
          value: function getVectorDataFromAToB(a, b) {
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var vector = new Vec2(dx, dy).normalize();
            return {
              vector: vector,
              dx: dx,
              dy: dy
            };
          }
        }, {
          key: "kill",
          value: function kill() {
            this.node.active = false;
          }
        }, {
          key: "revive",
          value: function revive() {
            this.node.active = true;
          }
        }]);

        return BaseObject;
      }(Component)) || _class$j);

      cclegacy._RF.pop();

      var _dec$k, _dec2$f, _class$k, _class2$d, _descriptor$b;

      cclegacy._RF.push({}, "15b7bvQaXpFgItiEHCr7GsP", "AirFan", undefined);

      var ccclass$k = _decorator.ccclass,
          property$d = _decorator.property;
      var AirFan = (_dec$k = ccclass$k('AirFan'), _dec2$f = property$d(CCInteger), _dec$k(_class$k = (_class2$d = /*#__PURE__*/function (_BaseObject) {
        _inherits(AirFan, _BaseObject);

        var _super = _createSuper(AirFan);

        function AirFan() {
          var _this;

          _classCallCheck(this, AirFan);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "pushForce", _descriptor$b, _assertThisInitialized(_this));

          _this.force = new Vec2(0, 0);
          _this.affectedObjects = [];
          _this.colliders = [];

          _this.onBeginContact = function (_, b) {
            if (_this.affectedObjects.includes(b.node.name)) {
              if (_this.colliders.findIndex(function (n) {
                return n.node == b.node;
              }) == -1) {
                _this.colliders.push(b);
              }
            }
          };

          _this.onEndContact = function (_, b) {
            var index = _this.colliders.indexOf(b);

            if (index != -1) {
              _this.colliders.splice(index, 1);
            }
          };

          return _this;
        }

        _createClass(AirFan, [{
          key: "onLoad",
          value: function onLoad() {
            this.collider = this.getComponent(Collider2D);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.collider) {
              throw new Error('AirFan: Collider2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.colliders = [];
            this.affectedObjects = [ObjectNames.DOGE, ObjectNames.THORN_BALL, ObjectNames.DRAW_LINE, ObjectNames.WOOD, ObjectNames.BALLON];
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
            this.collider.on(Contact2DType.END_CONTACT, this.onEndContact);
          }
        }, {
          key: "update",
          value: function update(_deltaTime) {
            var _this2 = this;

            this.colliders.forEach(function (collider) {
              var rigidBody = collider.getComponent(RigidBody2D);
              if (!rigidBody) return;
              var applyForce = _this2.force;

              if (collider.node.name === ObjectNames.DRAW_LINE) {
                applyForce = _this2.force.clone().multiplyScalar(collider.density / 3);
              }

              if (collider.node.name === ObjectNames.DOGE) {
                applyForce = _this2.force.clone().multiplyScalar(250 / _this2.pushForce);
              }

              rigidBody.applyForceToCenter(applyForce, true);
            });
          }
        }, {
          key: "setForceDirection",
          value: function setForceDirection(angle) {
            var direction = new Vec2(0, 1).rotate(math.toRadian(angle));
            this.force = direction.clone().normalize().multiplyScalar(this.pushForce);
          }
        }, {
          key: "sleep",
          value: function sleep() {
            _get(_getPrototypeOf(AirFan.prototype), "sleep", this).call(this);

            this.enabled = false;
          }
        }, {
          key: "wake",
          value: function wake() {
            _get(_getPrototypeOf(AirFan.prototype), "wake", this).call(this);

            this.enabled = true;
          }
        }]);

        return AirFan;
      }(BaseObject), _descriptor$b = _applyDecoratedDescriptor(_class2$d.prototype, "pushForce", [_dec2$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 400;
        }
      }), _class2$d)) || _class$k);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "8a02eYTwSpP9IpQ4MrTsAiL", "SpineAnimationName", undefined);

      var SpineAnimNames = {
        DOGE: {
          IDLE: 'normal',
          SMILE: 'smile',
          HURT: 'hurt',
          INACTIVE: 'cry',
          DROWNING: 'troll',
          FREAK_OUT: 'freak out',
          THORN_INACTIVE: 'die'
        },
        DOGE_WINNING_SCREEN: {
          APPEAR: 'animation',
          SMILE: 'animation1'
        },
        HORN: {
          APPEAR: 'laba1',
          PLAYING: 'laba2'
        },
        BEE: {
          FLAP_WINGS: 'animation',
          SMOKE_DISAPPEAR: 'animation3'
        },
        BALLOON: {
          APPEAR: 'animation',
          EXPLODE: 'animation2'
        }
      };

      cclegacy._RF.pop();

      var _dec$l, _dec2$g, _dec3$d, _class$l, _class2$e, _descriptor$c, _descriptor2$8;

      cclegacy._RF.push({}, "ff37brNpltMuaZm+M+x9+1N", "Rope", undefined);

      var ccclass$l = _decorator.ccclass,
          property$e = _decorator.property;
      var Rope = (_dec$l = ccclass$l('Rope'), _dec2$g = property$e(SpriteFrame), _dec3$d = property$e(CCInteger), _dec$l(_class$l = (_class2$e = /*#__PURE__*/function (_Component) {
        _inherits(Rope, _Component);

        var _super = _createSuper(Rope);

        function Rope() {
          var _this;

          _classCallCheck(this, Rope);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "frame", _descriptor$c, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "length", _descriptor2$8, _assertThisInitialized(_this));

          _this.nodes = [];
          return _this;
        }

        _createClass(Rope, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.frame) {
              throw new Error('Rope: SpriteFrame not found');
            }

            if (!this.headJoint) {
              throw new Error('Rope: headJoint not found');
            }

            if (!this.tailJoint) {
              throw new Error('Rope: tailJoint not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.nodes = [];
            this.node.setPosition(this.headJoint.getPosition());
            console.log(this.headJoint.getPosition(), this.tailJoint.getPosition(), this.node.getPosition());
            var startingHeadJointVector = this.headJoint.getPosition().clone().add(new Vec3(0, 4)).multiplyScalar(-1);
            var dir = this.tailJoint.getPosition().clone().add(new Vec3(0, 115)).add(startingHeadJointVector).multiplyScalar(1 / this.length);
            var ropeSegmentLength = dir.length();
            var dogeToBalloonVector3 = dir.clone().multiplyScalar(this.length * -1);
            var dogeToBalloonVector2 = new Vec2(dogeToBalloonVector3.x, dogeToBalloonVector3.y);

            for (var i = 0; i < this.length; i++) {
              var node = this.createNode(ropeSegmentLength);

              if (!node) {
                console.warn("Rope: node-".concat(i, " not found"));
                return;
              }

              this.node.addChild(node);
              node.name = "node-".concat(i);
              node.setPosition(dir.clone().multiplyScalar(i));
              this.nodes.push(node);
            }

            for (var _i = 0; _i < this.nodes.length; _i++) {
              var _node = this.nodes[_i];

              if (_i == 0) {
                var headJoint = _node.addComponent(HingeJoint2D);

                headJoint.enabled = false;
                headJoint.connectedBody = this.headJoint.getComponent(RigidBody2D);
                headJoint.anchor = new Vec2(0, -4);
                headJoint.connectedAnchor = new Vec2(0, 4);
                headJoint.enableLimit = true;
                headJoint.collideConnected = false;
                headJoint.enabled = true;
                continue;
              }

              var lastNode = this.nodes[_i - 1];

              var hingeJoint = _node.addComponent(HingeJoint2D);

              hingeJoint.enabled = false;
              hingeJoint.anchor = new Vec2(0, -4);
              hingeJoint.connectedAnchor = new Vec2(0, 4);
              hingeJoint.connectedBody = lastNode.getComponent(RigidBody2D);
              hingeJoint.collideConnected = false;
              hingeJoint.enableLimit = true;
              hingeJoint.enabled = true;

              var distanceJoint = _node.addComponent(RelativeJoint2D);

              distanceJoint.enabled = false;
              distanceJoint.connectedBody = this.headJoint.getComponent(RigidBody2D);
              distanceJoint.anchor = new Vec2(0, -4);
              distanceJoint.connectedAnchor = new Vec2(0, 4);
              distanceJoint.collideConnected = false;
              distanceJoint.maxForce = 160;
              distanceJoint.enabled = true;

              if (_i == this.nodes.length - 1) {
                var tailJoint = this.tailJoint.addComponent(HingeJoint2D);
                tailJoint.enabled = false;
                tailJoint.anchor = new Vec2(0, 115);
                tailJoint.connectedBody = _node.getComponent(RigidBody2D);
                tailJoint.connectedAnchor = new Vec2(0, 4);
                tailJoint.collideConnected = false;
                tailJoint.enableLimit = true;
                tailJoint.enabled = true;
              }
            }

            var specialJoint = this.tailJoint.addComponent(RelativeJoint2D);
            specialJoint.enabled = false;
            specialJoint.connectedBody = this.headJoint.getComponent(RigidBody2D);
            specialJoint.anchor = new Vec2(0, 118);
            specialJoint.connectedAnchor = new Vec2(0, -4);
            specialJoint.linearOffset = dogeToBalloonVector2;
            specialJoint.maxForce = 500;
            specialJoint.enabled = true;
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            console.log('Disconnecting rope');
            var hingeJoint = this.nodes[0].getComponent(HingeJoint2D);

            if (!hingeJoint) {
              console.warn('Rope: Starting joint not found');
              return;
            }

            hingeJoint.connectedBody = null;
            hingeJoint.enabled = false;
            var finalHingeJoint = this.tailJoint.getComponent(HingeJoint2D);

            if (!finalHingeJoint) {
              console.warn('Rope: Final joint not found');
              return;
            }

            finalHingeJoint.connectedBody = null;
            finalHingeJoint.enabled = false;
            var specialJoint = this.tailJoint.getComponent(RelativeJoint2D);

            if (specialJoint) {
              specialJoint.enabled = false;
              specialJoint.connectedBody = null;
            }

            this.nodes.forEach(function (node) {
              var sprite = node.getComponent(Sprite);

              if (!sprite) {
                console.warn('Rope: Sprite not found');
                return;
              }

              sprite.enabled = false;
            });
          }
        }, {
          key: "createNode",
          value: function createNode(length) {
            var node = new Node('node');
            node.layer = this.node.layer;
            var sprite = node.addComponent(Sprite);
            sprite.spriteFrame = this.frame;
            var uiTransform = node.addComponent(UITransform);
            uiTransform.setAnchorPoint(0.5, 0.5);
            uiTransform.setContentSize(6, length * 1.2);
            var body = node.addComponent(RigidBody2D);
            body.linearDamping = 5;
            body.angularDamping = 50;
            body.gravityScale = 0.1;
            body.group = PhysicsGroup.ROPE;
            var collider = node.addComponent(BoxCollider2D);
            collider.size = uiTransform.contentSize;
            node.name = ObjectNames.ROPE;
            return node;
          }
        }]);

        return Rope;
      }(Component), (_descriptor$c = _applyDecoratedDescriptor(_class2$e.prototype, "frame", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$e.prototype, "length", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$e)) || _class$l);

      cclegacy._RF.pop();

      var _dec$m, _dec2$h, _class$m, _class2$f, _descriptor$d;

      cclegacy._RF.push({}, "a8a47NhLJ9C1ahfjfiJ2xjc", "Balloon", undefined);

      var ccclass$m = _decorator.ccclass,
          property$f = _decorator.property;
      var Balloon = (_dec$m = ccclass$m('Balloon'), _dec2$h = property$f(Prefab), _dec$m(_class$m = (_class2$f = /*#__PURE__*/function (_BaseObject) {
        _inherits(Balloon, _BaseObject);

        var _super = _createSuper(Balloon);

        function Balloon() {
          var _this;

          _classCallCheck(this, Balloon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "ropePrefab", _descriptor$d, _assertThisInitialized(_this));

          _this.rope = null;

          _this.onBeginContact = function (_, b) {
            if (!_this.rope) return;
            var dangerousList = [ObjectNames.BEE, ObjectNames.THORN, ObjectNames.THORN_BALL];

            if (dangerousList.includes(b.node.name)) {
              _this.rope.disconnect();

              _this.setSpineAnimation(SpineAnimNames.BALLOON.EXPLODE, false);

              _this.scheduleOnce(function () {
                _this.rigidBody.enabled = false;
              });
            }
          };

          return _this;
        }

        _createClass(Balloon, [{
          key: "onLoad",
          value: function onLoad() {
            this.collider = this.getComponent(Collider2D);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.ropePrefab) {
              throw new Error('Balloon: Rope prefab is not assigned');
            }

            if (!this.collider) {
              throw new Error('Balloon: Collider2D not found');
            }

            if (!this.rigidBody) {
              throw new Error('Balloon: RigidBody2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.setSpineAnimation(SpineAnimNames.BALLOON.APPEAR, true);
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
          }
        }, {
          key: "connectToDoge",
          value: function connectToDoge(doge) {
            var rope = instantiate(this.ropePrefab).getComponent(Rope);

            if (!rope) {
              console.warn('Balloon: Rope component not found');
              return;
            }

            rope.headJoint = this.node;
            rope.tailJoint = doge; // rope.node.parent = doge.parent

            rope.node.name = ObjectNames.ROPE;
            this.rope = rope;
            return rope;
          }
        }]);

        return Balloon;
      }(BaseObject), _descriptor$d = _applyDecoratedDescriptor(_class2$f.prototype, "ropePrefab", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$f)) || _class$m);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "27033qxh65F25R336CXMYGV", "BeeRole", undefined);

      var BeeRole = /*#__PURE__*/function (BeeRole) {
        BeeRole[BeeRole["NORMAL"] = 0] = "NORMAL";
        BeeRole[BeeRole["PATH_SEEKER"] = 1] = "PATH_SEEKER";
        BeeRole[BeeRole["PUSHER"] = 2] = "PUSHER";
        return BeeRole;
      }(BeeRole || {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "ca922n1V0RLioEyUJg8hQXH", "GameEvents", undefined);

      var GameplayEvents = /*#__PURE__*/function (GameplayEvents) {
        GameplayEvents["NEXT_LEVEL"] = "next-level";
        GameplayEvents["START_OVER"] = "start-over";
        GameplayEvents["SELECT_LEVEL"] = "select-level";
        GameplayEvents["GAME_START"] = "game-start";
        GameplayEvents["GAME_PAUSE"] = "game-pause";
        GameplayEvents["GAME_RESUME"] = "game-resume";
        GameplayEvents["GAME_REPLAY"] = "game-replay";
        GameplayEvents["SHOW_HINT"] = "show-hint";
        GameplayEvents["SKIP_LEVEL"] = "skip-level";
        GameplayEvents["TIME_OUT"] = "time-out";
        GameplayEvents["DRAWING"] = "drawing";
        GameplayEvents["DOGE_DIE"] = "doge-die";
        GameplayEvents["DOGE_SURVIVE"] = "doge-survive";
        GameplayEvents["BEE_DIE"] = "bee-die";
        GameplayEvents["BEE_ATTACK"] = "bee-attack";
        GameplayEvents["BIG_BEE_DIE"] = "big-bee-die";
        GameplayEvents["GAME_OBJECTS_SPAWNED"] = "game-objects-spawned";
        return GameplayEvents;
      }(GameplayEvents || {});

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "744a5WT+0VHFLma6AT7mXct", "NormalBehavior", undefined);

      var NormalBehavior = /*#__PURE__*/function () {
        function NormalBehavior(bee) {
          _classCallCheck(this, NormalBehavior);

          this.touchCount = 0;
          this.bee = bee;
          this.timeToAttack = math.randomRange(0.7, 0.8);
          this.countTimeToAttack = 0;
        }

        _createClass(NormalBehavior, [{
          key: "onBeginContact",
          value: function onBeginContact() {
            var _this = this;

            if (this.touchCount == 1) {
              this.bee.scheduleOnce(function () {
                _this.touchCount >= 3 && _this.activePusher();
                _this.touchCount = 0;
              }, 0.75);
            }

            this.touchCount++;
          }
        }, {
          key: "activePusher",
          value: function activePusher() {
            this.bee.setRole(BeeRole.PUSHER);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.bee.state !== BeeState.ATTACKING) return;
            this.countTimeToAttack += deltaTime;

            if (this.countTimeToAttack > this.timeToAttack) {
              this.bee.findTarget();
              this.bee.attackTarget();
              this.timeToAttack = math.randomRange(0.4, 0.6);
              this.countTimeToAttack = 0;
            }
          }
        }]);

        return NormalBehavior;
      }();

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "ec831BZISdLgp8vKNuRirUM", "PusherBehavior", undefined);

      var PusherBehavior = /*#__PURE__*/function () {
        function PusherBehavior(bee) {
          _classCallCheck(this, PusherBehavior);

          this.bee = bee;
        }

        _createClass(PusherBehavior, [{
          key: "onBeginContact",
          value: function onBeginContact() {
            var bee = this.bee;
            if (!bee.target) return;
            var speed = math.randomRange(20, 30);
            var vectorData = bee.getVectorDataFromAToB(bee.node.getWorldPosition(), bee.target.getWorldPosition());
            vectorData.vector.rotate(Math.random() > 0.5 ? -Math.PI / 2 : Math.PI / 2).multiplyScalar(speed);
            bee.move(vectorData);
            var collider = bee.getComponent(CircleCollider2D);
            if (!collider) return;
            collider.density *= 1.1;

            if (collider.density >= 2.5) {
              collider.density = 1;
              bee.setRole(BeeRole.NORMAL);
              bee.setState(BeeState.ATTACKING);
            }
          }
        }]);

        return PusherBehavior;
      }();

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "19c52/F5VRPcbm2BqdbChIp", "BaseBehavior", undefined);

      var BeeBehavior = /*#__PURE__*/function () {
        function BeeBehavior(bee) {
          _classCallCheck(this, BeeBehavior);

          this.bee = bee;
          this.normalBehavior = new NormalBehavior(bee);
          this.pusherBehavior = new PusherBehavior(bee);
          this.seekingPathBehavior = null;
        }

        _createClass(BeeBehavior, [{
          key: "onBeginContact",
          value: function onBeginContact(a, b) {
            switch (this.bee.role) {
              case BeeRole.NORMAL:
                this.normalBehavior.onBeginContact();
                break;

              case BeeRole.PATH_SEEKER:
                if (!this.seekingPathBehavior) {
                  console.warn('Bee: Seeking path behavior is null');
                  return;
                }

                this.seekingPathBehavior.onBeginContact(a, b);
                break;

              case BeeRole.PUSHER:
                this.pusherBehavior.onBeginContact();
                break;
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.updateSpecialRole(deltaTime) == false) {
              this.normalBehavior.update(deltaTime);
            }
          }
        }, {
          key: "updateSpecialRole",
          value: function updateSpecialRole(deltaTime) {
            switch (this.bee.role) {
              case BeeRole.PATH_SEEKER:
                if (!this.seekingPathBehavior) {
                  return false;
                }

                return this.seekingPathBehavior.update(deltaTime);

              default:
                return false;
            }
          }
        }]);

        return BeeBehavior;
      }();

      cclegacy._RF.pop();

      var _dec$n, _dec2$i, _dec3$e, _class$n, _class2$g, _descriptor$e, _descriptor2$9;

      cclegacy._RF.push({}, "0b146P+xAlN5LGe2MJHlJDc", "Bee", undefined);

      var ccclass$n = _decorator.ccclass,
          property$g = _decorator.property;
      var Bee = (_dec$n = ccclass$n('Bee'), _dec2$i = property$g(Node), _dec3$e = property$g(sp.Skeleton), _dec$n(_class$n = (_class2$g = /*#__PURE__*/function (_BaseObject) {
        _inherits(Bee, _BaseObject);

        var _super = _createSuper(Bee);

        function Bee() {
          var _this;

          _classCallCheck(this, Bee);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "flipNode", _descriptor$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteNode", _descriptor2$9, _assertThisInitialized(_this));

          _this.target = null;
          _this.isSpawnLeftSide = false;
          _this.role = BeeRole.NORMAL;
          _this.state = BeeState.IDLE;
          _this.behavior = new BeeBehavior(_assertThisInitialized(_this));
          _this.speed = 0;
          _this.wanderingOriginHeight = null;
          _this.isWandering = false;

          _this.onBeginContact = function (a, b) {
            if (!_this.enabled) return;
            _this.rigidBody.linearDamping = math.randomRangeInt(6, 8);

            if (b.node.name == ObjectNames.THORN || b.node.name == ObjectNames.POISON || b.node.name === ObjectNames.BIG_BEE_BULLET) {
              _this.smokeDisappear();

              return;
            }

            if (b.node.name === ObjectNames.WATER) {
              _this.drown();

              return;
            }

            if (b.node.name == ObjectNames.DOGE) {
              _this.playSound('sounds/bee-sting-doge', {
                volume: 0.3
              });
            }

            _this.behavior.onBeginContact(a, b);
          };

          return _this;
        }

        _createClass(Bee, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.collider = this.getComponent(Collider2D);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('Bee: GameObjects not found');
            }

            if (!this.collider) {
              throw new Error('Bee: Collider2D not found');
            }

            if (!this.rigidBody) {
              throw new Error('Bee: RigidBody2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.setState(BeeState.IDLE);
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
            this.collider.enabled = false;
          }
        }, {
          key: "followTarget",
          value: function followTarget(doge) {
            this.target = doge;
            this.collider.enabled = true;
            this.attackTarget();
          }
        }, {
          key: "findTarget",
          value: function findTarget() {
            var doge = this.gameObjects.getNearestDogeToBee(this);

            if (!doge || doge.isCantBeTargeted()) {
              this.target = null;
              return;
            }

            this.target = doge.node;
          }
        }, {
          key: "smokeDisappear",
          value: function smokeDisappear() {
            this.preHide();
            this.setSpineAnimation(SpineAnimNames.BEE.SMOKE_DISAPPEAR, false);
            this.setState(BeeState.DIE);
            this.node.scene.emit(GameplayEvents.BEE_DIE);
          }
        }, {
          key: "flap",
          value: function flap() {
            this.setSpineAnimation(SpineAnimNames.BEE.FLAP_WINGS, true);
          }
        }, {
          key: "attackTarget",
          value: function attackTarget() {
            var _this2 = this;

            if (!this.target) {
              //? wandering around
              if (this.isWandering) return;
              this.isWandering = true;
              this.scheduleOnce(function () {
                _this2.isWandering = false;
              }, 0.5);
              this.speed = math.randomRange(40, 50);
              var target = this.node.getWorldPosition();

              if (this.wanderingOriginHeight === null) {
                this.wanderingOriginHeight = target.y + 50;
              }

              target.x += math.randomRange(-300, 300);
              target.y = math.randomRange(this.wanderingOriginHeight, this.wanderingOriginHeight - 50);

              var _vectorData = this.getVectorDataFromAToB(this.node.getWorldPosition(), target);

              this.move(_vectorData);
              this.rigidBody.linearDamping = 0;
              return;
            }

            this.speed = math.randomRange(20, 30);
            var vectorData = this.getVectorDataFromAToB(this.node.getWorldPosition(), this.target.getWorldPosition());
            vectorData.vector.rotate(math.randomRange(-0.3, 0.3)).multiplyScalar(this.speed);
            this.move(vectorData);
            this.rigidBody.linearDamping = 0;
            this.setState(BeeState.ATTACKING);
          }
        }, {
          key: "sleep",
          value: function sleep() {
            _get(_getPrototypeOf(Bee.prototype), "sleep", this).call(this);

            this.target = null;
          }
        }, {
          key: "rotateToVector",
          value: function rotateToVector(vector) {
            this.node.angle = math.toDegree(this.angle(vector.x, vector.y)); //? prefab bee is in left side

            this.node.angle += 180;
            var percentage = this.node.angle / 360 - Math.floor(this.node.angle / 360);

            if (percentage > 0.25 && percentage < 0.75) {
              this.flipNode.setScale(new Vec3(1, -1, 1));
            } else {
              this.flipNode.setScale(new Vec3(1, 1, 1));
            }
          }
        }, {
          key: "move",
          value: function move(vector) {
            this.rigidBody.linearVelocity = vector.vector;
            this.rotateToVector({
              x: vector.dx,
              y: vector.dy
            });
          }
        }, {
          key: "fly",
          value: function fly(direction) {
            this.rigidBody.linearVelocity = direction;
            this.rigidBody.linearDamping = 0;
            this.flap();
            this.setState(BeeState.FLYING);
          }
        }, {
          key: "setState",
          value: function setState(state) {
            this.state = state;
          }
        }, {
          key: "setRole",
          value: function setRole(role) {
            this.role = role;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.behavior.update(deltaTime);
          }
        }, {
          key: "drown",
          value: function drown() {
            this.collider.enabled = false;
            this.speed = 20;
            var target = this.node.getWorldPosition();
            target.y = target.y - 1000;
            var vectorData = this.getVectorDataFromAToB(this.node.getWorldPosition(), target);
            this.move(vectorData);
            this.rigidBody.linearDamping = 0;
            this.spriteNode.paused = true;
            this.setState(BeeState.DIE);
            this.node.scene.emit(GameplayEvents.BEE_DIE);
          }
        }, {
          key: "setSpineAnimation",
          value: function setSpineAnimation(animationName, isLoop) {
            this.spriteNode.setAnimation(0, animationName, isLoop);
          }
        }, {
          key: "playSound",
          value: function playSound(name, options) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name, options);
          }
        }]);

        return Bee;
      }(BaseObject), (_descriptor$e = _applyDecoratedDescriptor(_class2$g.prototype, "flipNode", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$g.prototype, "spriteNode", [_dec3$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$g)) || _class$n);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "23d64mdR6VPRoojd1BBKwos", "World", undefined);

      var MAP_SCALE = 28;
      var GameZone = {
        WIDTH: 42 * MAP_SCALE,
        HEIGHT: 64 * MAP_SCALE
      };
      var DRAW_COLLIDER_RADIUS = 2;
      var LINE_COLLIDER_RADIUS = 8;
      var DISTANCE_NEAR_DOGE = 200;

      cclegacy._RF.pop();

      var _dec$o, _class$o;

      cclegacy._RF.push({}, "5f264eibqlEH7PqbJQqHTF7", "Line", undefined);

      var ccclass$o = _decorator.ccclass;
      var Line = (_dec$o = ccclass$o('Line'), _dec$o(_class$o = /*#__PURE__*/function (_BaseObject) {
        _inherits(Line, _BaseObject);

        var _super = _createSuper(Line);

        function Line() {
          var _this;

          _classCallCheck(this, Line);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.points = [];
          _this.colliderInterval = 20;
          _this.colliders = [];
          _this.colliderTag = 0;
          return _this;
        }

        _createClass(Line, [{
          key: "onLoad",
          value: function onLoad() {
            this.graphic = this.getComponent(Graphics);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphic) {
              throw new Error('Line: Graphics not found');
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.points = [];
            this.colliders = [];
            this.colliderTag = 0;
          }
        }, {
          key: "drawTo",
          value: function drawTo(fromX, fromY, x, y) {
            this.graphic.moveTo(fromX, fromY);
            this.graphic.lineTo(x, y);
            this.graphic.stroke();
          }
        }, {
          key: "addBody",
          value: function addBody(x, y) {
            var collider = this.node.addComponent(CircleCollider2D);
            collider.offset = new Vec2(x, y);
            collider.radius = LINE_COLLIDER_RADIUS;
            collider.density = 5;
            collider.tag = this.colliderTag;
            collider.apply();
            this.colliderTag += 1;
            this.colliders.push(collider);
          }
        }, {
          key: "deActiveColliders",
          value: function deActiveColliders() {
            this.colliders.forEach(function (collider) {
              collider.enabled = false;
            });
          }
        }, {
          key: "storePoints",
          value: function storePoints(x, y) {
            this.points.push(new Vec2(x, y));
          }
        }, {
          key: "addPhysics",
          value: function addPhysics() {
            var _this2 = this;

            for (var i = 0; i < this.points.length - 1; i++) {
              var a = this.points[i];
              var b = this.points[i + 1];
              var points = this.getInternalPoints(a, b);

              if (i < this.points.length - 2) {
                var _lastPoint = points.pop();

                if (!_lastPoint) {
                  console.warn('Line: lastPoint not found');
                  return;
                }

                this.points[i + 1] = _lastPoint;
              }

              points.forEach(function (point) {
                var isWithinCollider = false;

                _this2.colliders.forEach(function (collider) {
                  if (math.Vec2.distance(point, collider.offset) < collider.radius * 2) {
                    isWithinCollider = true;
                  }
                });

                if (isWithinCollider) return;

                _this2.addBody(point.x, point.y);
              });
            }

            var lastPoint = this.points[this.points.length - 1];
            lastPoint && this.addBody(lastPoint.x, lastPoint.y);
          }
        }, {
          key: "getInternalPoints",
          value: function getInternalPoints(a, b) {
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var vec = new Vec2(dx, dy).normalize().multiplyScalar(this.colliderInterval);
            var dis = math.Vec2.distance(a, b);
            var divideTo = Math.floor(dis / this.colliderInterval);
            var points = [a];

            for (var i = 0; i < divideTo; i++) {
              var pointA = points[points.length - 1];
              var pointB = pointA.clone().add(vec);
              points.push(pointB);
            }

            return points;
          }
        }]);

        return Line;
      }(BaseObject)) || _class$o);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "afc3eWzi4tHNYb9W7f6QpCX", "SeekingPathBehavior", undefined);

      var SeekingPathBehavior = /*#__PURE__*/function () {
        function SeekingPathBehavior(bee, isSeekToLastPoint) {
          _classCallCheck(this, SeekingPathBehavior);

          this.isFinishSeeking = false;
          this.vectorDataGroup = [];
          this.index = 0;
          this.bee = bee;
          this.isSeekToLastPoint = isSeekToLastPoint;
          this.vectorDataGroup = [];
          this.isFinishSeeking = false;
          this.time = 0.02;
          this.remaining = 0;
          this.index = 0;
        }

        _createClass(SeekingPathBehavior, [{
          key: "seek",
          value: function seek(lineCollider) {
            var line = this.bee.node.scene.getComponentInChildren(Line);

            if (!line) {
              console.warn('Bee: Line is null');
              return false;
            }

            var colliderIndex = line.colliders.findIndex(function (collider) {
              if (collider.tag == lineCollider.tag) return true;
            });
            if (colliderIndex == -1) return false;
            this.vectorDataGroup = [];
            this.isFinishSeeking = false;
            this.time = 0.04;
            this.remaining = 0;
            this.index = 0;
            var speed = this.bee.speed;
            if (!speed) speed = math.randomRange(20, 30);

            if (this.isSeekToLastPoint) {
              this.seekToLastPoint(colliderIndex, line, speed);
            } else {
              this.seekToFirstPoint(colliderIndex, line, speed);
            }

            return true;
          }
        }, {
          key: "seekToLastPoint",
          value: function seekToLastPoint(index, line, speed) {
            for (var i = index; i < line.colliders.length - 1; i++) {
              var a = line.colliders[i];
              var b = line.colliders[i + 1];
              var vectorData = this.bee.getVectorDataFromAToB(a.worldPosition, b.worldPosition);
              vectorData.vector.multiplyScalar(speed);
              this.vectorDataGroup.push(vectorData);
            }
          }
        }, {
          key: "seekToFirstPoint",
          value: function seekToFirstPoint(index, line, speed) {
            for (var i = index; i > 0; i--) {
              var a = line.colliders[i];
              var b = line.colliders[i - 1];
              var vectorData = this.bee.getVectorDataFromAToB(a.worldPosition, b.worldPosition);
              vectorData.vector.multiplyScalar(speed);
              this.vectorDataGroup.push(vectorData);
            }
          }
        }, {
          key: "flyToNextDirection",
          value: function flyToNextDirection() {
            var vectorData = this.vectorDataGroup[this.index];
            this.index += 1;

            if (!vectorData) {
              this.isFinishSeeking = true;
              this.bee.setRole(BeeRole.NORMAL);
              this.bee.setState(BeeState.ATTACKING);
              return;
            }

            this.bee.move(vectorData);
          }
        }, {
          key: "fly",
          value: function fly(deltaTime) {
            this.remaining += deltaTime;

            if (this.remaining > this.time) {
              this.flyToNextDirection();
              this.time = 0.02;
              this.remaining = 0;
            }
          }
        }, {
          key: "onBeginContact",
          value: function onBeginContact(_, b) {
            if (this.bee.state == BeeState.SEEKING_PATH && b.node.name != ObjectNames.DRAW_LINE) {
              this.isFinishSeeking = true;
              this.bee.setRole(BeeRole.NORMAL);
              this.bee.setState(BeeState.ATTACKING);
              return;
            }

            if (this.isFinishSeeking || this.bee.state == BeeState.WAITING_TO_SEEK_PATH || b.node.name != ObjectNames.DRAW_LINE) return;
            this.handlePathSeekerTouchLine(b);
          }
        }, {
          key: "handlePathSeekerTouchLine",
          value: function handlePathSeekerTouchLine(collider) {
            var _this = this;

            var isSuccess = this.seek(collider);
            if (!isSuccess || this.bee.state == BeeState.SEEKING_PATH) return;
            this.bee.setState(BeeState.WAITING_TO_SEEK_PATH);
            this.bee.scheduleOnce(function () {
              _this.bee.setState(BeeState.SEEKING_PATH);
            }, 0.3);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.bee.state == BeeState.SEEKING_PATH) {
              this.fly(deltaTime);
              return true;
            } else {
              return false;
            }
          }
        }]);

        return SeekingPathBehavior;
      }();

      cclegacy._RF.pop();

      var _dec$p, _class$p;

      cclegacy._RF.push({}, "2181aAj+ElOoL2tBGH10euY", "Beehive", undefined);

      var ccclass$p = _decorator.ccclass;
      var Beehive = (_dec$p = ccclass$p('Beehive'), _dec$p(_class$p = /*#__PURE__*/function (_BaseObject) {
        _inherits(Beehive, _BaseObject);

        var _super = _createSuper(Beehive);

        function Beehive() {
          var _this;

          _classCallCheck(this, Beehive);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.totalPathSeekers = 0;
          _this.isSeekToLastPoint = true;
          return _this;
        }

        _createClass(Beehive, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('Beehive: GameObjects not found');
            }
          }
        }, {
          key: "releaseBee",
          value: function releaseBee(bee) {
            var _this2 = this;

            this.updateTotalPathSeekers();
            this.scheduleOnce(function () {
              var beeComponent = bee.getComponent(Bee);
              if (!beeComponent) return;

              _this2.createPathSeeker(beeComponent);

              if ('isRightSide' in _this2.node && _this2.node.isRightSide === true) {
                _this2.spawnInRightSide(beeComponent);
              } else {
                _this2.spawnInLeftSide(beeComponent);
              }

              beeComponent.wake();

              var doge = _this2.gameObjects.getRandomDogeToBee();

              if (!doge) return;

              _this2.scheduleOnce(function () {
                return beeComponent.followTarget(doge.node);
              }, 0.2);
            }, math.randomRange(0.1, 0.4));
          }
        }, {
          key: "updateTotalPathSeekers",
          value: function updateTotalPathSeekers() {
            if (!('totalPathSeekers' in this.node)) return;
            if (typeof this.node.totalPathSeekers !== 'number') return;
            this.totalPathSeekers = this.node.totalPathSeekers;
          }
        }, {
          key: "spawnInLeftSide",
          value: function spawnInLeftSide(bee) {
            var _this$node$getPositio = this.node.getPosition(),
                x = _this$node$getPositio.x,
                y = _this$node$getPositio.y;

            var xr = math.randomRangeInt(-10, 0);
            var yr = math.randomRangeInt(38, 48);
            bee.isSpawnLeftSide = true;
            bee.node.setScale(new Vec3(1, 1, 1));
            bee.node.setPosition(x + xr, y + yr);
            bee.fly(new Vec2(-2, -1).normalize().multiplyScalar(2));
          }
        }, {
          key: "spawnInRightSide",
          value: function spawnInRightSide(bee) {
            var _this$node$getPositio2 = this.node.getPosition(),
                x = _this$node$getPositio2.x,
                y = _this$node$getPositio2.y;

            var xr = math.randomRangeInt(0, 10);
            var yr = math.randomRangeInt(38, 48);
            bee.isSpawnLeftSide = false;
            bee.node.setScale(new Vec3(1, 1, 1));
            bee.node.setPosition(x + xr, y + yr);
            bee.fly(new Vec2(2, -1).normalize().multiplyScalar(2));
          }
        }, {
          key: "createPathSeeker",
          value: function createPathSeeker(bee) {
            if (this.totalPathSeekers === 0) return;
            bee.setRole(BeeRole.PATH_SEEKER);
            bee.behavior.seekingPathBehavior = new SeekingPathBehavior(bee, this.isSeekToLastPoint);
            this.isSeekToLastPoint = !this.isSeekToLastPoint;
            this.totalPathSeekers -= 1;
          }
        }]);

        return Beehive;
      }(BaseObject)) || _class$p);

      cclegacy._RF.pop();

      var _dec$q, _dec2$j, _dec3$f, _class$q, _class2$h, _descriptor$f, _descriptor2$a;

      cclegacy._RF.push({}, "a17a07Pu/tAGb4MdM3jxHke", "BigBeeBullet", undefined);

      var ccclass$q = _decorator.ccclass,
          property$h = _decorator.property;
      var BigBeeBullet = (_dec$q = ccclass$q('BigBeeBullet'), _dec2$j = property$h(Sprite), _dec3$f = property$h(sp.Skeleton), _dec$q(_class$q = (_class2$h = /*#__PURE__*/function (_BaseObject) {
        _inherits(BigBeeBullet, _BaseObject);

        var _super = _createSuper(BigBeeBullet);

        function BigBeeBullet() {
          var _this;

          _classCallCheck(this, BigBeeBullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "stinger", _descriptor$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ci", _descriptor2$a, _assertThisInitialized(_this));

          _this.onBeginContact = function () {
            _this.stinger.active = false;
            _this.ci.active = true;

            var ske = _this.ci.getComponent(sp.Skeleton);

            if (!ske) {
              console.warn('BigBeeBullet: ske not found');
              return;
            }

            ske.enabled = true;
            _this.rigidBody.enabled = false;
            ske.setAnimation(0, 'animation', false);

            _this.playSound('sounds/bee-bullet-explode', {
              allowMultiple: true
            });

            ske.setCompleteListener(function () {
              _this.kill();
            });
          };

          return _this;
        }

        _createClass(BigBeeBullet, [{
          key: "onLoad",
          value: function onLoad() {
            this.collider = this.getComponent(Collider2D);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.stinger) {
              throw new Error('BigBeeBullet: stinger not found');
            }

            if (!this.ci) {
              throw new Error('BigBeeBullet: ci not found');
            }

            if (!this.collider) {
              throw new Error('BigBeeBullet: Collider2D not found');
            }

            if (!this.rigidBody) {
              throw new Error('BigBeeBullet: RigidBody2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.revive();
          }
        }, {
          key: "revive",
          value: function revive() {
            _get(_getPrototypeOf(BigBeeBullet.prototype), "revive", this).call(this);

            this.stinger.active = true;
            this.ci.active = false;
            this.rigidBody.enabled = true; //? temporarily fix bug auto in setup pose of skeleton

            this.ci.getComponent(sp.Skeleton).enabled = false;
            this.collider.once(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
          }
        }, {
          key: "kill",
          value: function kill() {
            _get(_getPrototypeOf(BigBeeBullet.prototype), "kill", this).call(this);

            this.stinger.active = false;
            this.ci.active = false;
          }
        }, {
          key: "forwardToDoge",
          value: function forwardToDoge(doge) {
            var speed = math.randomRange(20, 30);
            var vectorData = this.getVectorDataFromAToB(this.node.getWorldPosition(), doge.getWorldPosition());
            vectorData.vector.rotate(math.randomRange(-0.3, 0.3)).multiplyScalar(speed);
            this.rigidBody.linearVelocity = vectorData.vector;
            this.node.angle = math.toDegree(this.angle(vectorData.dx, vectorData.dy));
          }
        }, {
          key: "playSound",
          value: function playSound(name, config) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name, config);
          }
        }]);

        return BigBeeBullet;
      }(BaseObject), (_descriptor$f = _applyDecoratedDescriptor(_class2$h.prototype, "stinger", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$a = _applyDecoratedDescriptor(_class2$h.prototype, "ci", [_dec3$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$h)) || _class$q);

      cclegacy._RF.pop();

      var _dec$r, _dec2$k, _class$r, _class2$i, _descriptor$g;

      cclegacy._RF.push({}, "2b15b1CihdEf60Zy/wIYirK", "BigBee", undefined);

      var ccclass$r = _decorator.ccclass,
          property$i = _decorator.property;
      var BigBee = (_dec$r = ccclass$r('BigBee'), _dec2$k = property$i(Prefab), _dec$r(_class$r = (_class2$i = /*#__PURE__*/function (_Component) {
        _inherits(BigBee, _Component);

        var _super = _createSuper(BigBee);

        function BigBee() {
          var _this;

          _classCallCheck(this, BigBee);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor$g, _assertThisInitialized(_this));

          _this.state = BeeState.IDLE;
          _this.target = null;
          _this.bulletPool = [];
          _this.timeToAttack = 0;
          _this.countTimeToAttack = 0;

          _this.onBeginContact = function (_a, b) {
            if (!_this.enabled) return;

            if (b.node.name == ObjectNames.THORN || b.node.name == ObjectNames.POISON) {
              _this.smokeDisappear();

              return;
            }
          };

          return _this;
        }

        _createClass(BigBee, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.skeleton = this.getComponent(sp.Skeleton);
            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.collider = this.getComponent(CircleCollider2D);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('BigBee: GameObjects not found');
            }

            if (!this.bulletPrefab) {
              throw new Error('BigBee: Bullet prefab not found');
            }

            if (!this.skeleton) {
              throw new Error('BigBee: Skeleton not found');
            }

            if (!this.collider) {
              throw new Error('BigBee: Collider2D not found');
            }

            if (!this.rigidBody) {
              throw new Error('BigBee: RigidBody2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.node.setScale(new Vec3(0.7, 0.7, 0.7));
            this.timeToAttack = math.randomRange(1, 2);
            this.countTimeToAttack = 0;
            this.createBulletPool();
            this.initDustParticle();
            var target = this.gameObjects.getRandomDogeToBee();

            if (!target) {
              console.warn('BigBee: Target not found');
              return;
            }

            this.target = target.node;
            this.state = BeeState.FLYING;
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.state !== BeeState.ATTACKING) return;
            this.countTimeToAttack += deltaTime;

            if (this.countTimeToAttack > this.timeToAttack) {
              this.attackTarget();
              this.timeToAttack = math.randomRange(1, 2);
              this.countTimeToAttack = 0;
            }
          }
        }, {
          key: "createBulletPool",
          value: function createBulletPool() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
            this.bulletPool = [];

            for (var i = 0; i < number; i++) {
              this.createBullet();
            }
          }
        }, {
          key: "initDustParticle",
          value: function initDustParticle() {
            var _this2 = this;

            if (!this.node.parent) return;
            var node = new Node(ObjectNames.DUST_PARTICLE);
            node.layer = Math.pow(2, 25);
            node.active = false;
            var skeleton = node.addComponent(sp.Skeleton);
            resources.load(ResourcePaths.DUST_PARTICLE_SPINE, sp.SkeletonData, function (error, json) {
              if (error) {
                console.error('initDustParticle', error);
                return;
              }

              if (!_this2.node.isValid) return;
              skeleton.skeletonData = json;
              skeleton.setAnimation(0, 'animation', false);
            });
            this.node.parent.addChild(node);
            this.dustParticle = node;
          }
        }, {
          key: "createDust",
          value: function createDust() {
            var _this3 = this;

            if (!this.dustParticle) return;
            this.dustParticle.active = true;

            var _this$node$getWorldPo = this.node.getWorldPosition(),
                x = _this$node$getWorldPo.x,
                y = _this$node$getWorldPo.y;

            this.dustParticle.setWorldPosition(new Vec3(x, y));
            this.scheduleOnce(function () {
              if (!_this3.dustParticle) return;
              _this3.dustParticle.active = false;
            }, 0.5);
          }
        }, {
          key: "createBullet",
          value: function createBullet() {
            if (!this.node.parent) {
              console.warn('BigBee: Parent not found');
              return null;
            }

            var bullet = instantiate(this.bulletPrefab);
            var bulletComponent = bullet.getComponent(BigBeeBullet);
            bullet.name = ObjectNames.BIG_BEE_BULLET;

            if (bulletComponent) {
              bulletComponent.kill();
            }

            this.node.parent.addChild(bullet);
            this.bulletPool.push(bullet);
            return bullet;
          }
        }, {
          key: "smokeDisappear",
          value: function smokeDisappear() {
            this.hide();
            this.createDust();
            this.state = BeeState.DIE;
            this.node.scene.emit(GameplayEvents.BIG_BEE_DIE);
          }
        }, {
          key: "hide",
          value: function hide() {
            this.enabled = false;
            this.rigidBody.sleep();
            this.skeleton.enabled = false;
          }
        }, {
          key: "attackTarget",
          value: function attackTarget() {
            var _this4 = this;

            this.skeleton.setAnimation(0, 'attack', false);
            this.skeleton.setCompleteListener(function () {
              _this4.skeleton.setAnimation(0, 'fly', true);
            });
            this.scheduleOnce(function () {
              if (!_this4.target) {
                console.warn('BigBee: Target not found');
                return;
              }

              var bullet = _this4.bulletPool.filter(function (e) {
                return e.active == false;
              })[0];

              if (!bullet) {
                bullet = _this4.createBullet();
                if (!bullet) return;
              }

              var bigBeeBullet = bullet.getComponent(BigBeeBullet);

              if (!bigBeeBullet) {
                console.warn('BigBee: Bullet component not found');
                return;
              }

              bigBeeBullet.revive();

              var _this4$node$getPositi = _this4.node.getPosition(),
                  x = _this4$node$getPositi.x,
                  y = _this4$node$getPositi.y;

              bullet.setPosition(x, y);
              bigBeeBullet.forwardToDoge(_this4.target);
            }, 0.5);
          }
        }]);

        return BigBee;
      }(Component), _descriptor$g = _applyDecoratedDescriptor(_class2$i.prototype, "bulletPrefab", [_dec2$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$i)) || _class$r);

      cclegacy._RF.pop();

      var _dec$s, _dec2$l, _dec3$g, _dec4$8, _class$s, _class2$j, _descriptor$h, _descriptor2$b;

      cclegacy._RF.push({}, "8e16aARuABAK56lFGhIfeH+", "Brick", undefined);

      var ccclass$s = _decorator.ccclass,
          property$j = _decorator.property,
          requireComponent$9 = _decorator.requireComponent;
      var Brick = (_dec$s = ccclass$s('Brick'), _dec2$l = requireComponent$9([Mask]), _dec3$g = property$j({
        tooltip: 'Use batch draw all bricks'
      }), _dec4$8 = property$j(Sprite), _dec$s(_class$s = _dec2$l(_class$s = (_class2$j = /*#__PURE__*/function (_Component) {
        _inherits(Brick, _Component);

        var _super = _createSuper(Brick);

        function Brick() {
          var _this;

          _classCallCheck(this, Brick);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "useBatch", _descriptor$h, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sprite", _descriptor2$b, _assertThisInitialized(_this));

          _this.brickPolygons = [];
          return _this;
        }

        _createClass(Brick, [{
          key: "__preload",
          value: function __preload() {
            this.mask = this.getComponent(Mask);
            this.graphic = this.getComponent(Graphics);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.polygonCollider = this.getComponent(PolygonCollider2D);
            this.validateRequiredComponents();
            this.listenGameplayEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.mask) {
              throw new Error('Brick: Mask not found');
            }

            if (!this.graphic) {
              throw new Error('Brick: Graphics not found');
            }

            if (!this.rigidBody) {
              throw new Error('Brick: RigidBody2D not found');
            }

            if (!this.polygonCollider) {
              throw new Error('Brick: PolygonCollider2D not found');
            }

            if (!this.sprite) {
              throw new Error('Brick: Sprite not found');
            }
          }
        }, {
          key: "listenGameplayEvents",
          value: function listenGameplayEvents() {
            return;
          }
        }, {
          key: "addBrickPolygon",
          value: function addBrickPolygon(polygon) {
            this.brickPolygons.push(polygon);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var polygon = this.getPolygon();
            if (!polygon) return;

            if (this.useBatch) {
              this.mask.enabled = false;
              this.graphic.enabled = false;
              this.addBrickPolygon(polygon);
            } else {
              this.updateTransform(polygon);
              this.drawMask(polygon);
              this.applyCollider(polygon);
            }
          }
        }, {
          key: "getPolygon",
          value: function getPolygon() {
            if (!('polygon' in this.node)) return null;
            var polygon = this.node['polygon'];
            if (!Array.isArray(polygon)) return null;
            return polygon;
          }
        }, {
          key: "updateTransform",
          value: function updateTransform(polygon) {
            var _this$calculatePolygo = this.calculatePolygonDimensions(polygon),
                width = _this$calculatePolygo.width,
                height = _this$calculatePolygo.height;

            this.setPosition(0, 0);
            this.setContentSize(width, height);
          }
        }, {
          key: "setPosition",
          value: function setPosition(x, y) {
            this.node.setPosition(x, y);
          }
        }, {
          key: "setContentSize",
          value: function setContentSize(width, height) {
            var transform = this.sprite.getComponent(UITransform);
            if (!transform) return;
            transform.setContentSize(width, height);
          }
        }, {
          key: "updateContentSizeForBatchDraw",
          value: function updateContentSizeForBatchDraw() {
            var allPointArrays = this.brickPolygons.map(function (polygon) {
              return polygon.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return new Vec2(x, y);
              });
            });
            var allPoints = allPointArrays.flat();

            var _this$calculatePolygo2 = this.calculatePolygonDimensions(allPoints),
                width = _this$calculatePolygo2.width,
                height = _this$calculatePolygo2.height;

            var spritePos = this.calculateSpritePositionForBatchDraw(allPoints);
            var transform = this.sprite.getComponent(UITransform);
            if (!transform) return;
            transform.setContentSize(width, height);
            var sprite = this.sprite.getComponent(Sprite);
            if (!sprite) return;
            sprite.node.setPosition(spritePos.x, spritePos.y);
          }
        }, {
          key: "calculateSpritePositionForBatchDraw",
          value: function calculateSpritePositionForBatchDraw(points) {
            var xMin = points[0].x;
            var xMax = points[0].x;
            var yMin = points[0].y;
            var yMax = points[0].y;

            for (var i = 1; i < points.length; i++) {
              var _points$i = points[i],
                  x = _points$i.x,
                  y = _points$i.y;

              if (x < xMin) {
                xMin = x;
              } else if (x > xMax) {
                xMax = x;
              }

              if (y < yMin) {
                yMin = y;
              } else if (y > yMax) {
                yMax = y;
              }
            }

            return {
              x: xMin,
              y: yMin
            };
          }
        }, {
          key: "calculatePolygonDimensions",
          value: function calculatePolygonDimensions(points) {
            var xMin = points[0].x;
            var xMax = points[0].x;
            var yMin = points[0].y;
            var yMax = points[0].y;

            for (var i = 1; i < points.length; i++) {
              var _points$i2 = points[i],
                  x = _points$i2.x,
                  y = _points$i2.y;

              if (x < xMin) {
                xMin = x;
              } else if (x > xMax) {
                xMax = x;
              }

              if (y < yMin) {
                yMin = y;
              } else if (y > yMax) {
                yMax = y;
              }
            }

            var width = Math.abs(xMax - xMin);
            var height = Math.abs(yMax - yMin);
            return {
              width: width,
              height: height
            };
          }
        }, {
          key: "drawMask",
          value: function drawMask(polygon) {
            this.graphic.moveTo(polygon[0].x, polygon[0].y);

            var _iterator = _createForOfIteratorHelper(polygon),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                this.graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.graphic.close();
            this.graphic.fill();
          }
        }, {
          key: "batchDrawAllBrick",
          value: function batchDrawAllBrick() {
            if (this.brickPolygons.length < 1) return;
            this.mask.enabled = true;
            this.graphic.enabled = true;
            this.updateContentSizeForBatchDraw();

            var _iterator2 = _createForOfIteratorHelper(this.brickPolygons),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var polygon = _step2.value;
                this.drawMask(polygon);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.applyColliderForBatchDraw();
            this.brickPolygons = [];
          }
        }, {
          key: "applyCollider",
          value: function applyCollider(polygon) {
            this.polygonCollider.points = polygon.map(function (_ref2) {
              var x = _ref2.x,
                  y = _ref2.y;
              return new Vec2(x, y);
            });
            this.polygonCollider.apply();
          }
        }, {
          key: "applyColliderForBatchDraw",
          value: function applyColliderForBatchDraw() {
            var allPointsArray = this.brickPolygons.map(function (polygon) {
              return polygon.map(function (_ref3) {
                var x = _ref3.x,
                    y = _ref3.y;
                return new Vec2(x, y);
              });
            });

            var _iterator3 = _createForOfIteratorHelper(allPointsArray),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var points = _step3.value;
                var child = new Node();
                child.name = ObjectNames.BRICK;
                this.node.addChild(child);
                child.setPosition(0, 0);
                var body = child.addComponent(RigidBody2D);
                body.type = ERigidBody2DType.Static;
                body.group = PhysicsGroup.MAIN_OBJECT;
                var collider = child.addComponent(PolygonCollider2D);
                collider.points = points;
                collider.apply();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }]);

        return Brick;
      }(Component), (_descriptor$h = _applyDecoratedDescriptor(_class2$j.prototype, "useBatch", [_dec3$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2$b = _applyDecoratedDescriptor(_class2$j.prototype, "sprite", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$j)) || _class$s) || _class$s);

      cclegacy._RF.pop();

      var _dec$t, _class$t;

      cclegacy._RF.push({}, "46fa0f/kl1Heo/JvM2kAEAf", "GraphicsPattern", undefined);

      var ccclass$t = _decorator.ccclass;
      var GraphicsPattern = (_dec$t = ccclass$t('GraphicsPattern'), _dec$t(_class$t = /*#__PURE__*/function (_BaseObject) {
        _inherits(GraphicsPattern, _BaseObject);

        var _super = _createSuper(GraphicsPattern);

        function GraphicsPattern() {
          _classCallCheck(this, GraphicsPattern);

          return _super.apply(this, arguments);
        }

        _createClass(GraphicsPattern, [{
          key: "onLoad",
          value: function onLoad() {
            this.graphic = this.getComponent(Graphics);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphic) {
              throw new Error('GraphicsPattern: Graphics not found');
            }
          }
        }, {
          key: "start",
          value: function start() {// const polygon = [
            //     { x: 0, y: 0 },
            //     { x: -100, y: 100 },
            //     { x: 200, y: 200 },
            //     { x: 100, y: -200 },
            //     { x: 0, y: 0 },
            // ].map(({ x, y }) => new Vec2(x, y))
            // this.draw(polygon)
          }
        }, {
          key: "draw",
          value: function draw(polygon) {
            this.graphic.moveTo(polygon[0].x, polygon[0].y);

            var _iterator = _createForOfIteratorHelper(polygon),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                this.graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.graphic.close();
            this.graphic.fill();
          }
        }, {
          key: "applyCollider",
          value: function applyCollider(polygon) {
            var polygonCollider = this.getComponent(PolygonCollider2D);

            if (!polygonCollider) {
              console.warn('GraphicsPattern: PolygonCollider2D not found');
              return;
            }

            polygonCollider.points = polygon.map(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              return new Vec2(x, y);
            });
            polygonCollider.apply();
          }
        }, {
          key: "setColor",
          value: function setColor(hexStr) {
            var color = new Color();
            Color.fromHEX(color, hexStr);
            this.graphic.fillColor = color;
          }
        }]);

        return GraphicsPattern;
      }(BaseObject)) || _class$t);

      cclegacy._RF.pop();

      var _dec$u, _class$u;

      cclegacy._RF.push({}, "bfd3fZcEttGVawFb2B3Gmqu", "DangerArea", undefined);

      var ccclass$u = _decorator.ccclass;
      var DangerArea = (_dec$u = ccclass$u('DangerArea'), _dec$u(_class$u = /*#__PURE__*/function (_Component) {
        _inherits(DangerArea, _Component);

        var _super = _createSuper(DangerArea);

        function DangerArea() {
          var _this;

          _classCallCheck(this, DangerArea);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.useBatch = false;
          _this.dangerPolygons = [];
          return _this;
        }

        _createClass(DangerArea, [{
          key: "addDangerAreaPolygon",
          value: function addDangerAreaPolygon(polygon) {
            this.dangerPolygons.push(polygon);
          }
        }, {
          key: "addRigidBody",
          value: function addRigidBody() {
            var body = this.node.addComponent(RigidBody2D);

            if (!body) {
              console.warn('Cannot add RigidBody2D');
              return;
            }

            body.group = PhysicsGroup.MAIN_OBJECT;
            body.type = ERigidBody2DType.Static;
          }
        }, {
          key: "addPolygonCollider",
          value: function addPolygonCollider() {
            var collider = this.node.addComponent(PolygonCollider2D);

            if (!collider) {
              console.warn('Cannot add PolygonCollider2D');
              return;
            }

            collider.sensor = true;
          }
        }, {
          key: "applyColliderForBatchDraw",
          value: function applyColliderForBatchDraw() {
            var allPointsArray = this.dangerPolygons.map(function (polygon) {
              return polygon.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return new Vec2(x, y);
              });
            });

            var _iterator = _createForOfIteratorHelper(allPointsArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var points = _step.value;
                var child = new Node();
                child.name = ObjectNames.DANGER_AREA;
                this.node.addChild(child);
                child.setPosition(0, 0);
                var body = child.addComponent(RigidBody2D);
                body.type = ERigidBody2DType.Static;
                body.group = PhysicsGroup.MAIN_OBJECT;
                var collider = child.addComponent(PolygonCollider2D);
                collider.points = points;
                collider.apply();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "batchDrawAllDangerAreas",
          value: function batchDrawAllDangerAreas() {
            if (this.dangerPolygons.length < 1) return;
            var graphicPattern = this.node.getComponent(GraphicsPattern);

            if (!graphicPattern) {
              console.warn('DangerArea: GraphicsPattern not found');
              return null;
            }

            this.addRigidBody();
            graphicPattern.setColor('#fc03036d');
            this.dangerPolygons.forEach(function (polygon) {
              graphicPattern.draw(polygon);
            });
            this.applyColliderForBatchDraw();
          }
        }]);

        return DangerArea;
      }(Component)) || _class$u);

      cclegacy._RF.pop();

      var _dec$v, _dec2$m, _dec3$h, _class$v, _class2$k, _descriptor$i;

      cclegacy._RF.push({}, "959bd9NhYpMTK0O78HSl4rc", "Pattern", undefined);

      var ccclass$v = _decorator.ccclass,
          property$k = _decorator.property,
          requireComponent$a = _decorator.requireComponent;
      var Pattern = (_dec$v = ccclass$v('Pattern'), _dec2$m = requireComponent$a([Graphics, PolygonCollider2D, RigidBody2D]), _dec3$h = property$k(Sprite), _dec$v(_class$v = _dec2$m(_class$v = (_class2$k = /*#__PURE__*/function (_BaseObject) {
        _inherits(Pattern, _BaseObject);

        var _super = _createSuper(Pattern);

        function Pattern() {
          var _this;

          _classCallCheck(this, Pattern);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "sprite", _descriptor$i, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Pattern, [{
          key: "onLoad",
          value: function onLoad() {
            this.graphic = this.getComponent(Graphics);
            this.rigidBody = this.getComponent(RigidBody2D);
            this.polygonCollider = this.getComponent(PolygonCollider2D);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.sprite) {
              throw new Error('Pattern: Sprite not found');
            }

            if (!this.graphic) {
              throw new Error('Pattern: Graphics not found');
            }

            if (!this.rigidBody) {
              throw new Error('Pattern: RigidBody2D not found');
            }

            if (!this.polygonCollider) {
              throw new Error('Pattern: PolygonCollider2D not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            /* const polygon = [
                { x: 0, y: 0 },
                { x: -100, y: 100 },
                { x: 200, y: 200 },
                { x: 100, y: -200 },
                { x: 0, y: 0 },
            ].map(({ x, y }) => new Vec2(x, y))
            this.draw(polygon) */
          }
        }, {
          key: "draw",
          value: function draw(polygon) {
            var transform = this.sprite.getComponent(UITransform);
            if (!transform) return;

            var _this$getBottomLeftPo = this.getBottomLeftPosition(polygon),
                x1 = _this$getBottomLeftPo.x,
                y1 = _this$getBottomLeftPo.y;

            var _this$getTopRightPosi = this.getTopRightPosition(polygon),
                x2 = _this$getTopRightPosi.x,
                y2 = _this$getTopRightPosi.y;

            transform.setContentSize(x2 - x1, y2 - y1);
            transform.node.setPosition(x1, y1);
            this.graphic.moveTo(polygon[0].x, polygon[0].y);

            var _iterator = _createForOfIteratorHelper(polygon),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                this.graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.graphic.close();
            this.graphic.fill();
          }
          /**
           * Use by `Wood Prefab` to use with `Connect Prefab`
           */

        }, {
          key: "savePolygonPoints",
          value: function savePolygonPoints(polygon) {
            this.points = polygon;
          }
        }, {
          key: "getPolygonPoints",
          value: function getPolygonPoints() {
            return this.points;
          }
        }, {
          key: "applyCollider",
          value: function applyCollider(polygon) {
            this.polygonCollider.points = polygon.map(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              return new Vec2(x, y);
            });
            this.polygonCollider.apply();
          }
        }, {
          key: "setRigidBodyType",
          value: function setRigidBodyType(type) {
            this.rigidBody.type = type;
          }
        }, {
          key: "getBottomLeftPosition",
          value: function getBottomLeftPosition(polygon) {
            var x = polygon[0].x;
            var y = polygon[0].y;

            var _iterator2 = _createForOfIteratorHelper(polygon),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var vec = _step2.value;

                if (x > vec.x) {
                  x = vec.x;
                }

                if (y > vec.y) {
                  y = vec.y;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return {
              x: x,
              y: y
            };
          }
        }, {
          key: "getTopRightPosition",
          value: function getTopRightPosition(polygon) {
            var x = polygon[0].x;
            var y = polygon[0].y;

            var _iterator3 = _createForOfIteratorHelper(polygon),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var vec = _step3.value;

                if (x < vec.x) {
                  x = vec.x;
                }

                if (y < vec.y) {
                  y = vec.y;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return {
              x: x,
              y: y
            };
          }
        }]);

        return Pattern;
      }(BaseObject), _descriptor$i = _applyDecoratedDescriptor(_class2$k.prototype, "sprite", [_dec3$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$k)) || _class$v) || _class$v);

      cclegacy._RF.pop();

      var _dec$w, _dec2$n, _class$w;

      cclegacy._RF.push({}, "a08960ZMBtFcLD/1nWNbAM9", "Poison", undefined);

      var ccclass$w = _decorator.ccclass,
          requireComponent$b = _decorator.requireComponent;
      var Poison = (_dec$w = ccclass$w('Poison'), _dec2$n = requireComponent$b([GraphicsPattern]), _dec$w(_class$w = _dec2$n(_class$w = /*#__PURE__*/function (_Component) {
        _inherits(Poison, _Component);

        var _super = _createSuper(Poison);

        function Poison() {
          var _this;

          _classCallCheck(this, Poison);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.polygon = []; //For batching

          _this.useBatch = false;
          _this.poisonPolygons = [];
          _this.bubbleFrame = null;
          _this.bubblePool = null;
          _this.remaining = 0;
          _this.maxPoolSize = 0;
          _this.totalBubble = 0;
          return _this;
        }

        _createClass(Poison, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.graphicPattern = this.getComponent(GraphicsPattern);
            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('Poison: GameObjects not found');
            }

            if (!this.graphicPattern) {
              throw new Error('Poison: GraphicsPattern not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.addRigidBody();
            if (this.useBatch) return;
            this.addPolygonCollider();
            this.drawPattern();
            this.loadCircleFrame();
            this.setTimeSpawnBubble(0.2);
          }
        }, {
          key: "addPoisonPolygon",
          value: function addPoisonPolygon(polygons) {
            this.poisonPolygons.push(polygons);
          }
        }, {
          key: "batchDrawAllPoisonPools",
          value: function batchDrawAllPoisonPools() {
            var _this2 = this;

            if (this.poisonPolygons.length < 1) return; //? #683988d1

            this.graphicPattern.setColor('#774798d1');
            this.poisonPolygons.forEach(function (polygon) {
              _this2.graphicPattern.draw(polygon);
            });
            this.applyColliderForBatchDraw();
            this.loadCircleFrame();
            this.setTimeSpawnBubble(0.2);
          }
        }, {
          key: "applyColliderForBatchDraw",
          value: function applyColliderForBatchDraw() {
            var allPointsArray = this.poisonPolygons.map(function (polygon) {
              return polygon.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return new Vec2(x, y);
              });
            });

            var _iterator = _createForOfIteratorHelper(allPointsArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var points = _step.value;
                var child = new Node();
                child.name = ObjectNames.POISON;
                this.node.addChild(child);
                child.setPosition(0, 0);
                var body = child.addComponent(RigidBody2D);
                body.group = PhysicsGroup.MAIN_OBJECT;
                body.type = ERigidBody2DType.Static;
                var collider = child.addComponent(PolygonCollider2D);
                collider.points = points;
                collider.sensor = true;
                collider.apply();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "addRigidBody",
          value: function addRigidBody() {
            var body = this.addComponent(RigidBody2D);

            if (!body) {
              console.warn('Cannot add RigidBody2D');
              return;
            }

            body.group = PhysicsGroup.MAIN_OBJECT;
            body.type = ERigidBody2DType.Static;
          }
        }, {
          key: "addPolygonCollider",
          value: function addPolygonCollider() {
            var collider = this.addComponent(PolygonCollider2D);

            if (!collider) {
              console.warn('Cannot add PolygonCollider2D');
              return;
            }

            collider.sensor = true;
          }
        }, {
          key: "drawPattern",
          value: function drawPattern() {
            this.graphicPattern.setColor('#774798d1');
            this.graphicPattern.draw(this.polygon);
            this.graphicPattern.applyCollider(this.polygon);
          }
        }, {
          key: "loadCircleFrame",
          value: function loadCircleFrame() {
            var _this3 = this;

            resources.load(ResourcePaths.POISON_CIRCLE_FRAME, SpriteFrame, function (error, spriteFrame) {
              if (error) {
                console.error('loadCircleFrame', error);
                return;
              }

              if (!_this3.node.isValid) return;
              _this3.bubbleFrame = spriteFrame;
              var maxSize = _this3.useBatch ? _this3.poisonPolygons.length * 20 : 20;

              _this3.initPool(10, maxSize);
            });
          }
        }, {
          key: "initPool",
          value: function initPool(initCount, maxSize) {
            this.bubblePool = new NodePool();
            this.maxPoolSize = maxSize;

            for (var i = 0; i < initCount; i++) {
              this.spawnBubble();
            }
          }
        }, {
          key: "setTimeSpawnBubble",
          value: function setTimeSpawnBubble(time) {
            this.remaining = time;
          }
        }, {
          key: "spawnBubble",
          value: function spawnBubble() {
            if (!this.bubblePool) return null;
            if (this.totalBubble >= this.maxPoolSize) return null;
            var bubble = null;

            if (this.bubblePool.size() > 0) {
              bubble = this.bubblePool.get();
            } else {
              bubble = new Node(ObjectNames.POISON_BUBBLE);
              this.initBubble(bubble);
              this.killBubble(bubble);
              this.bubblePool.put(bubble);
            }

            if (!bubble) return null;
            this.gameObjects.addObject(bubble);
            this.totalBubble += 1;
            return bubble;
          }
        }, {
          key: "releaseBubble",
          value: function releaseBubble(bubble) {
            if (!this.bubblePool) return;
            this.killBubble(bubble);
            this.bubblePool.put(bubble);
            this.totalBubble -= 1;
          }
        }, {
          key: "killBubble",
          value: function killBubble(bubble) {
            if (!bubble) return;
            var sprite = bubble.getComponent(Sprite);

            if (sprite) {
              sprite.enabled = false;
            }
          }
        }, {
          key: "reviveBubble",
          value: function reviveBubble(bubble, polygon) {
            var _this$getPosition = this.getPosition(polygon),
                minX = _this$getPosition.minX,
                minY = _this$getPosition.minY,
                maxX = _this$getPosition.maxX;

            var randomX = math.randomRange(minX, maxX);
            var opacity = bubble.getComponent(UIOpacity);

            if (!opacity) {
              console.warn('UIOpacity not found in bubble');
            } else {
              opacity.opacity = 125;
            }

            var sprite = bubble.getComponent(Sprite);

            if (sprite) {
              sprite.enabled = true;
            }

            bubble.setPosition(new Vec3(randomX, minY));
          }
        }, {
          key: "initBubble",
          value: function initBubble(bubble) {
            bubble.layer = this.node.layer;
            bubble.addComponent(Sprite).spriteFrame = this.bubbleFrame;
            bubble.addComponent(UIOpacity);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.remaining -= deltaTime;

            if (this.remaining <= 0) {
              if (!this.useBatch) {
                var bubble = this.spawnBubble();
                if (!bubble) return;
                this.reviveBubble(bubble, this.polygon);
                this.playBubbleTween(bubble, this.polygon);

                var _time = math.randomRange(0.3, 0.5);

                this.setTimeSpawnBubble(_time);
                return;
              }

              var time = math.randomRange(0.3, 0.5);

              var _iterator2 = _createForOfIteratorHelper(this.poisonPolygons),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var polygon = _step2.value;

                  var _bubble = this.spawnBubble();

                  if (!_bubble) return;
                  this.reviveBubble(_bubble, polygon);
                  this.playBubbleTween(_bubble, polygon);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.setTimeSpawnBubble(time);
            }
          }
        }, {
          key: "playBubbleTween",
          value: function playBubbleTween(bubble, polygon) {
            var _this4 = this;

            if (!bubble) return;

            var _this$getPosition2 = this.getPosition(polygon),
                minY = _this$getPosition2.minY,
                maxY = _this$getPosition2.maxY;

            var curPos = bubble.getPosition();
            var velocity = math.randomRange(80, 120);
            var distance = Math.abs(maxY - minY);
            var toX = curPos.x;
            var toY = curPos.y + (maxY - minY) - 10;
            var duration = distance / velocity;
            tween(bubble).to(duration, {
              position: new Vec3(toX, toY)
            }, {
              easing: 'smooth'
            }).start();
            var opacity = bubble.getComponent(UIOpacity);

            if (!opacity) {
              console.warn('UIOpacity not found in bubble');
            } else {
              var time = duration - 0.4 > 0 ? 0.4 : duration;
              opacity.opacity = 160;
              tween(opacity).delay(duration - time).to(time, {
                opacity: 0
              }, {
                easing: 'smooth'
              }).start();
            }

            this.scheduleOnce(function () {
              _this4.releaseBubble(bubble);
            }, duration);
          }
        }, {
          key: "getPosition",
          value: function getPosition(points) {
            var minX = 10000,
                maxX = 0;
            var minY = 10000,
                maxY = 0;
            points.forEach(function (_ref2) {
              var x = _ref2.x,
                  y = _ref2.y;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            });
            minX += 20;
            maxX -= 20;
            minY += 13;
            maxY -= 13;
            return {
              minX: minX,
              minY: minY,
              maxX: maxX,
              maxY: maxY
            };
          }
        }]);

        return Poison;
      }(Component)) || _class$w) || _class$w);

      cclegacy._RF.pop();

      var _dec$x, _class$x;

      cclegacy._RF.push({}, "8633c11nMJN7I7TAFaGu3Fg", "PoisonSurface", undefined);

      var ccclass$x = _decorator.ccclass;
      var PoisonSurface = (_dec$x = ccclass$x('PoisonSurface'), _dec$x(_class$x = /*#__PURE__*/function (_Component) {
        _inherits(PoisonSurface, _Component);

        var _super = _createSuper(PoisonSurface);

        function PoisonSurface() {
          var _this;

          _classCallCheck(this, PoisonSurface);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.poisonBubblePrefab = null;
          _this.polygon = []; //For batching

          _this.useBatch = false;
          _this.surfacePolygon = [];
          _this.bubblePool = null;
          _this.remaining = 0;
          _this.maxPoolSize = 0;
          _this.totalBubble = 0;
          return _this;
        }

        _createClass(PoisonSurface, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.graphicPattern = this.getComponent(GraphicsPattern);
            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('PoisonSurface: GameObjects not found');
            }

            if (!this.graphicPattern) {
              throw new Error('PoisonSurface: GraphicsPattern not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            if (this.useBatch) return;
            this.drawPattern();
            this.loadBubbleFrame();
          }
        }, {
          key: "drawPattern",
          value: function drawPattern() {
            this.graphicPattern.setColor('#9757bcb0');
            this.graphicPattern.draw(this.polygon);
          }
        }, {
          key: "addPoisonSurfacePolygon",
          value: function addPoisonSurfacePolygon(polygons) {
            this.surfacePolygon.push(polygons);
          }
        }, {
          key: "batchDrawAllPoisonSurfaces",
          value: function batchDrawAllPoisonSurfaces() {
            var _this2 = this;

            if (this.surfacePolygon.length < 1) return;
            this.graphicPattern.setColor('#9757bcb0');
            this.surfacePolygon.forEach(function (polygon) {
              _this2.graphicPattern.draw(polygon);
            });
            this.loadBubbleFrame();
          }
        }, {
          key: "loadBubbleFrame",
          value: function loadBubbleFrame() {
            var _this3 = this;

            resources.load(ResourcePaths.POISON_BUBBLE_PREFAB, Prefab, function (error, prefab) {
              if (error) {
                console.error('loadBubbleFrame', error);
                return;
              }

              if (!_this3.node.isValid) return;
              _this3.poisonBubblePrefab = prefab;
              var maxSize = _this3.useBatch ? _this3.surfacePolygon.length * 12 : 12;

              _this3.initPool(10, maxSize);

              _this3.setTimeSpawnBubble(0.3);
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.remaining -= deltaTime;

            if (this.remaining <= 0) {
              if (!this.useBatch) {
                var bubble = this.spawnPoisonBubblePop();
                if (!bubble) return;
                this.reviveBubble(bubble, this.polygon);

                var _time = math.randomRange(0.3, 0.5);

                this.setTimeSpawnBubble(_time);
                return;
              }

              var time = math.randomRange(0.3, 0.5);

              var _iterator = _createForOfIteratorHelper(this.surfacePolygon),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var polygon = _step.value;

                  var _bubble = this.spawnPoisonBubblePop();

                  if (!_bubble) return;
                  this.reviveBubble(_bubble, polygon);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.setTimeSpawnBubble(time);
            }
          }
        }, {
          key: "initPool",
          value: function initPool(initCount, maxSize) {
            this.bubblePool = new NodePool();
            this.maxPoolSize = maxSize;

            for (var i = 0; i < initCount; i++) {
              this.spawnPoisonBubblePop();
            }
          }
        }, {
          key: "setTimeSpawnBubble",
          value: function setTimeSpawnBubble(time) {
            this.remaining = time;
          }
        }, {
          key: "spawnPoisonBubblePop",
          value: function spawnPoisonBubblePop() {
            if (!this.bubblePool) return null;
            if (this.totalBubble >= this.maxPoolSize) return null;
            var bubble = null;

            if (this.bubblePool.size() > 0) {
              bubble = this.bubblePool.get();
            } else {
              bubble = instantiate(this.poisonBubblePrefab);
              if (!(bubble instanceof Node)) return null;
              this.bubblePool.put(bubble);
            }

            if (!bubble) return null;
            this.gameObjects.addObject(bubble);
            this.totalBubble += 1;
            return bubble;
          }
        }, {
          key: "releasePoisonBubblePop",
          value: function releasePoisonBubblePop(bubble) {
            if (!this.bubblePool) return;
            this.bubblePool.put(bubble);
            this.totalBubble -= 1;
          }
        }, {
          key: "reviveBubble",
          value: function reviveBubble(bubble, polygon) {
            var _this4 = this;

            if (!bubble) return;

            var _this$getRandomPositi = this.getRandomPosition(polygon),
                x = _this$getRandomPositi.x,
                y = _this$getRandomPositi.y;

            bubble.setPosition(new Vec3(x, y));
            var skeleton = bubble.getComponent(sp.Skeleton);
            if (!skeleton) return;
            skeleton.setAnimation(0, 'animation', false);
            skeleton.setCompleteListener(function () {
              _this4.releasePoisonBubblePop(bubble);
            });
          }
        }, {
          key: "getRandomPosition",
          value: function getRandomPosition(points) {
            var minX = 10000,
                maxX = 0;
            var minY = 10000,
                maxY = 0;
            points.forEach(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            });
            var x = math.randomRange(minX + 25, maxX - 25);
            var y = math.randomRange(minY + 5, maxY - 5);
            return {
              x: x,
              y: y
            };
          }
        }]);

        return PoisonSurface;
      }(Component)) || _class$x);

      cclegacy._RF.pop();

      var _dec$y, _dec2$o, _class$y;

      cclegacy._RF.push({}, "9aa6cp2xqhK1LJeA0kz2hWR", "Water", undefined);

      var ccclass$y = _decorator.ccclass,
          requireComponent$c = _decorator.requireComponent;
      var Water = (_dec$y = ccclass$y('Water'), _dec2$o = requireComponent$c([GraphicsPattern]), _dec$y(_class$y = _dec2$o(_class$y = /*#__PURE__*/function (_Component) {
        _inherits(Water, _Component);

        var _super = _createSuper(Water);

        function Water() {
          var _this;

          _classCallCheck(this, Water);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.polygon = []; //For batching

          _this.useBatch = false;
          _this.waterPolygon = [];
          return _this;
        }

        _createClass(Water, [{
          key: "onLoad",
          value: function onLoad() {
            this.graphicPattern = this.getComponent(GraphicsPattern);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphicPattern) {
              throw new Error('Water: GraphicsPattern not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.addRigidBody();
            if (this.useBatch) return;
            this.addPolygonCollider();
            this.drawPattern();
          }
        }, {
          key: "addWaterPolygon",
          value: function addWaterPolygon(polygons) {
            this.waterPolygon.push(polygons);
          }
        }, {
          key: "batchDrawAllWater",
          value: function batchDrawAllWater() {
            var _this2 = this;

            if (this.waterPolygon.length < 1) return;
            this.graphicPattern.setColor('#58cef0d0');
            this.waterPolygon.forEach(function (polygon) {
              _this2.graphicPattern.draw(polygon);
            });
            this.applyColliderForBatchDraw();
          }
        }, {
          key: "applyColliderForBatchDraw",
          value: function applyColliderForBatchDraw() {
            var allPointsArray = this.waterPolygon.map(function (polygon) {
              return polygon.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return new Vec2(x, y);
              });
            });

            var _iterator = _createForOfIteratorHelper(allPointsArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var points = _step.value;
                var child = new Node();
                child.name = ObjectNames.WATER;
                this.node.addChild(child);
                child.setPosition(0, 0);
                var body = child.addComponent(RigidBody2D);
                body.group = PhysicsGroup.MAIN_OBJECT;
                body.type = ERigidBody2DType.Static;
                var collider = child.addComponent(PolygonCollider2D);
                collider.points = points;
                collider.sensor = true;
                collider.apply();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "addRigidBody",
          value: function addRigidBody() {
            var rigidBody = this.addComponent(RigidBody2D);

            if (!rigidBody) {
              console.warn('Cannot add RigidBody2D');
              return;
            }

            rigidBody.group = PhysicsGroup.MAIN_OBJECT;
            rigidBody.type = ERigidBody2DType.Static;
          }
        }, {
          key: "addPolygonCollider",
          value: function addPolygonCollider() {
            var collider = this.addComponent(PolygonCollider2D);

            if (!collider) {
              console.warn('Cannot add PolygonCollider2D');
              return;
            }

            collider.sensor = true;
          }
        }, {
          key: "drawPattern",
          value: function drawPattern() {
            this.graphicPattern.setColor('#58cef0d0');
            this.graphicPattern.draw(this.polygon);
            this.graphicPattern.applyCollider(this.polygon);
          }
        }]);

        return Water;
      }(Component)) || _class$y) || _class$y);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "169a1O0ruFLoI6OnJUZap7V", "DogeState", undefined);

      var DogeState = /*#__PURE__*/function (DogeState) {
        DogeState[DogeState["IDLE"] = 0] = "IDLE";
        DogeState[DogeState["SMILE"] = 1] = "SMILE";
        DogeState[DogeState["SCARE"] = 2] = "SCARE";
        DogeState[DogeState["BEE_STING"] = 3] = "BEE_STING";
        DogeState[DogeState["THORN_STAB"] = 4] = "THORN_STAB";
        DogeState[DogeState["OUT_OF_SCREEN"] = 5] = "OUT_OF_SCREEN";
        DogeState[DogeState["POISONED"] = 6] = "POISONED";
        DogeState[DogeState["DROWNING"] = 7] = "DROWNING";
        DogeState[DogeState["OVER_VIEW"] = 8] = "OVER_VIEW";
        return DogeState;
      }(DogeState || {});

      cclegacy._RF.pop();

      var _dec$z, _class$z;

      cclegacy._RF.push({}, "852f9XjNUVJ3Zt1Kd/EbqXU", "Eye", undefined);

      var ccclass$z = _decorator.ccclass;
      var Eye = (_dec$z = ccclass$z('Eye'), _dec$z(_class$z = /*#__PURE__*/function (_Component) {
        _inherits(Eye, _Component);

        var _super = _createSuper(Eye);

        function Eye() {
          var _this;

          _classCallCheck(this, Eye);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.scaleTween = null;
          _this.initialPosition = null;
          return _this;
        }

        _createClass(Eye, [{
          key: "createScaleAnimation",
          value: function createScaleAnimation() {
            var scaleUp = tween(this.node).to(0.3, {
              scale: new Vec3(1.1, 1.1, 1)
            }, {
              easing: 'smooth'
            });
            this.scaleTween = tween(this.node).reverseTime(scaleUp).repeatForever();
          }
        }, {
          key: "saveInitialPosition",
          value: function saveInitialPosition() {
            if (this.initialPosition) return;
            this.initialPosition = this.node.position.clone();
          }
        }, {
          key: "show",
          value: function show() {
            this.node.active = true;
            this.playAnimation();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.stopAnimation();
            this.node.active = false;
          }
        }, {
          key: "toward",
          value: function toward(direction) {
            if (!this.initialPosition) return;
            this.node.setPosition(this.initialPosition);
            this.node.position.add(direction);
          }
        }, {
          key: "playAnimation",
          value: function playAnimation() {
            var _this$scaleTween;

            if (!this.scaleTween) {
              this.createScaleAnimation();
            }

            (_this$scaleTween = this.scaleTween) === null || _this$scaleTween === void 0 ? void 0 : _this$scaleTween.start();
          }
        }, {
          key: "stopAnimation",
          value: function stopAnimation() {
            var _this$scaleTween2;

            (_this$scaleTween2 = this.scaleTween) === null || _this$scaleTween2 === void 0 ? void 0 : _this$scaleTween2.stop();
          }
        }]);

        return Eye;
      }(Component)) || _class$z);

      cclegacy._RF.pop();

      var _dec$A, _dec2$p, _dec3$i, _class$A, _class2$l, _descriptor$j, _descriptor2$c;

      cclegacy._RF.push({}, "df218vrmOtEH5vRQXxIZ3yS", "Eyes", undefined);

      var ccclass$A = _decorator.ccclass,
          property$l = _decorator.property;
      var Eyes = (_dec$A = ccclass$A('Eyes'), _dec2$p = property$l(Eye), _dec3$i = property$l(Eye), _dec$A(_class$A = (_class2$l = /*#__PURE__*/function (_Component) {
        _inherits(Eyes, _Component);

        var _super = _createSuper(Eyes);

        function Eyes() {
          var _this;

          _classCallCheck(this, Eyes);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "leftEye", _descriptor$j, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightEye", _descriptor2$c, _assertThisInitialized(_this));

          _this.time = 0;
          _this.remaining = 0;
          _this.running = false;
          return _this;
        }

        _createClass(Eyes, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.leftEye) {
              throw new Error('Eyes: leftEye not found');
            }

            if (!this.rightEye) {
              throw new Error('Eyes: rightEye not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.remaining = 0;
            this.running = false;
            this.setTimeChangeDirection(0.8);
            this.leftEye.saveInitialPosition();
            this.rightEye.saveInitialPosition();
          }
        }, {
          key: "setTimeChangeDirection",
          value: function setTimeChangeDirection(time) {
            this.time = time;
          }
        }, {
          key: "show",
          value: function show() {
            this.running = true;
            this.remaining = this.time;
            this.leftEye.show();
            this.rightEye.show();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.running = false;
            this.leftEye.hide();
            this.rightEye.hide();
          }
        }, {
          key: "stopLook",
          value: function stopLook() {
            this.running = false;
          }
        }, {
          key: "look",
          value: function look() {
            if (!this.node.parent) return;
            var doge = this.node.parent.getComponent(Doge);
            if (!doge) return;
            var bee = doge.getNearbyBee();
            if (!bee) return;
            var initialPosition = this.leftEye.initialPosition;
            if (!initialPosition) return;
            var x = initialPosition.x,
                y = initialPosition.y;
            var localPos = new Vec3();
            this.leftEye.node.inverseTransformPoint(localPos, bee.node.worldPosition);
            var direction = new Vec3(localPos.x - x, localPos.y - y, 0).normalize().multiplyScalar(5);
            this.leftEye.toward(direction);
            this.rightEye.toward(direction);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this.running) return;

            if (this.remaining <= 0) {
              this.look();
              this.remaining = this.time;
            }

            this.remaining -= deltaTime;
          }
        }]);

        return Eyes;
      }(Component), (_descriptor$j = _applyDecoratedDescriptor(_class2$l.prototype, "leftEye", [_dec2$p], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$c = _applyDecoratedDescriptor(_class2$l.prototype, "rightEye", [_dec3$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$l)) || _class$A);

      cclegacy._RF.pop();

      var _dec$B, _dec2$q, _class$B, _class2$m, _descriptor$k;

      cclegacy._RF.push({}, "14172TbYDBAeISJqcpvLYV7", "Doge", undefined);

      var ccclass$B = _decorator.ccclass,
          property$m = _decorator.property;
      var dangerousList = [DogeState.OVER_VIEW, DogeState.BEE_STING, DogeState.THORN_STAB, DogeState.POISONED, DogeState.OUT_OF_SCREEN];
      var Doge = (_dec$B = ccclass$B('Doge'), _dec2$q = property$m(Eyes), _dec$B(_class$B = (_class2$m = /*#__PURE__*/function (_BaseObject) {
        _inherits(Doge, _BaseObject);

        var _super = _createSuper(Doge);

        function Doge() {
          var _this;

          _classCallCheck(this, Doge);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "eyes", _descriptor$k, _assertThisInitialized(_this));

          _this.state = DogeState.IDLE;
          _this.dustParticle = null;
          _this.gameHeight = 0;

          _this.onBeginContact = function (_, b) {
            if (b.node.name == ObjectNames.BEE || b.node.name == ObjectNames.BIG_BEE || b.node.name == ObjectNames.BIG_BEE_BULLET) {
              _this.beeSting();
            }

            if (b.node.name == ObjectNames.THORN || b.node.name == ObjectNames.THORN_BALL) {
              _this.stabbedByThorn();

              return;
            }

            if (b.node.name == ObjectNames.POISON) {
              _this.poisoned();

              return;
            }

            if (b.node.name == ObjectNames.WATER) {
              _this.drowning();
            }
          };

          return _this;
        }

        _createClass(Doge, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent;

            this.collider = this.getComponent(Collider2D);
            this.gameObjects = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(GameObjects);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.eyes) {
              throw new Error('Doge: Eyes not found');
            }

            if (!this.collider) {
              throw new Error('Doge: Collider2D not found');
            }

            if (!this.gameObjects) {
              throw new Error('BigBee: GameObjects not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            var _find;

            this.initDustParticle();
            this.idle(); // ? Is this dangerous?

            var transform = (_find = find('Canvas')) === null || _find === void 0 ? void 0 : _find.getComponent(UITransform);
            if (transform) this.gameHeight = transform.height;
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact);
          }
        }, {
          key: "idle",
          value: function idle() {
            if (this.setState(DogeState.IDLE) === false) return;
            this.hideEyes();
            this.setSpineAnimation(SpineAnimNames.DOGE.IDLE, true);
          }
        }, {
          key: "smile",
          value: function smile() {
            if (this.setState(DogeState.SMILE) === false) return;
            this.hideEyes();
            this.setSpineAnimation(SpineAnimNames.DOGE.SMILE, true);
          }
        }, {
          key: "beeSting",
          value: function beeSting() {
            var _this2 = this;

            if (this.setState(DogeState.BEE_STING) === false) return;
            this.hideEyes();
            this.setSpineAnimation(SpineAnimNames.DOGE.HURT, false);
            this.scareOtherDoges();
            this.scheduleOnce(function () {
              if (_this2.state === DogeState.BEE_STING) {
                _this2.setSpineAnimation(SpineAnimNames.DOGE.INACTIVE, false);
              }
            }, 0.3);
            this.playSound('sounds/doge-hurt');
          }
        }, {
          key: "stabbedByThorn",
          value: function stabbedByThorn() {
            if (this.setState(DogeState.THORN_STAB) === false) return;
            this.hideEyes();
            this.createDust();
            this.setSpineAnimation(SpineAnimNames.DOGE.THORN_INACTIVE, false);
            this.scareOtherDoges();
            this.playSound('sounds/doge-dies');
          }
        }, {
          key: "poisoned",
          value: function poisoned() {
            if (this.setState(DogeState.POISONED) === false) return;
            this.hide();
            this.hideEyes();
            this.createDust();
            this.scareOtherDoges();
            this.playSound('sounds/doge-dies');
          }
        }, {
          key: "drowning",
          value: function drowning() {
            if (this.setState(DogeState.DROWNING) === false) return;
            this.hideEyes();
            this.setSpineAnimation(SpineAnimNames.DOGE.DROWNING, false); // TODO: make a sound for downing
            // this.playSound('sounds/doge-dies')
          }
        }, {
          key: "isCantBeTargeted",
          value: function isCantBeTargeted() {
            var THORN_STAB = DogeState.THORN_STAB,
                OUT_OF_SCREEN = DogeState.OUT_OF_SCREEN,
                POISONED = DogeState.POISONED,
                DROWNING = DogeState.DROWNING;
            return [THORN_STAB, OUT_OF_SCREEN, POISONED, DROWNING].indexOf(this.state) != -1;
          }
        }, {
          key: "scare",
          value: function scare() {
            var _this$eyes;

            if (this.setState(DogeState.SCARE) === false) return;
            this.showEyes();
            (_this$eyes = this.eyes) === null || _this$eyes === void 0 ? void 0 : _this$eyes.look();
            this.setSpineAnimation(SpineAnimNames.DOGE.FREAK_OUT, true);
          }
        }, {
          key: "hideEyes",
          value: function hideEyes() {
            this.eyes.hide();
          }
        }, {
          key: "showEyes",
          value: function showEyes() {
            this.eyes.show();
          }
        }, {
          key: "setState",
          value: function setState(state) {
            if (dangerousList.indexOf(state) == -1) {
              if (dangerousList.indexOf(this.state) != -1) {
                // danger => no danger: NO ACCEPT
                return false;
              } // no danger => no danger: ACCEPT


              this.state = state;
              return true;
            } else {
              if (dangerousList.indexOf(state) > dangerousList.indexOf(this.state)) {
                // danger => more danger: ACCEPT
                this.state = state;
                this.node.scene.emit(GameplayEvents.DOGE_DIE);
                return true;
              } else {
                // NO ACCEPT
                return false;
              }
            }
          }
        }, {
          key: "scareOtherDoges",
          value: function scareOtherDoges() {
            this.gameObjects.getDoges(this).forEach(function (doge) {
              doge.scare();
            });
          }
        }, {
          key: "update",
          value: function update() {
            var y = this.node.worldPosition.y;

            if (y > this.gameHeight || y < 0) {
              this.setState(DogeState.OUT_OF_SCREEN);
            }

            if (this.isBeeNearBy()) {
              this.scare();
            }
          }
        }, {
          key: "isBeeNearBy",
          value: function isBeeNearBy() {
            if (this.state !== DogeState.IDLE || dangerousList.includes(this.state)) return false;
            var bee = this.getNearbyBee();
            return bee ? true : false;
          }
        }, {
          key: "getNearbyBee",
          value: function getNearbyBee() {
            var _this3 = this;

            if (!this.node.parent) return null;
            var bees = this.node.parent.getComponentsInChildren(Bee);
            var bee = bees.find(function (bee) {
              var distance = Vec3.distance(_this3.node.getWorldPosition(), bee.node.getWorldPosition());
              if (bee.enabled && distance <= DISTANCE_NEAR_DOGE) return true;
            });
            return bee ? bee : null;
          }
        }, {
          key: "createDust",
          value: function createDust() {
            var _this4 = this;

            if (!this.dustParticle) return;
            this.dustParticle.active = true;

            var _this$node$getWorldPo = this.node.getWorldPosition(),
                x = _this$node$getWorldPo.x,
                y = _this$node$getWorldPo.y;

            this.dustParticle.setWorldPosition(new Vec3(x, y));
            this.scheduleOnce(function () {
              if (!_this4.dustParticle) return;
              _this4.dustParticle.active = false;
            }, 0.5);
          }
        }, {
          key: "initDustParticle",
          value: function initDustParticle() {
            var _this5 = this;

            if (!this.node.parent) return;
            var node = new Node(ObjectNames.DUST_PARTICLE);
            node.layer = Math.pow(2, 25);
            node.active = false;
            var skeleton = node.addComponent(sp.Skeleton);
            resources.load(ResourcePaths.DUST_PARTICLE_SPINE, sp.SkeletonData, function (error, json) {
              if (error) {
                console.error('initDustParticle', error);
                return;
              }

              if (!_this5.node.isValid) return;
              skeleton.skeletonData = json;
              skeleton.setAnimation(0, 'animation', false);
            });
            this.node.parent.addChild(node);
            this.dustParticle = node;
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find2, _find2$getComponent;

            (_find2 = find('Sound')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Sound)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.play(name);
          }
        }]);

        return Doge;
      }(BaseObject), _descriptor$k = _applyDecoratedDescriptor(_class2$m.prototype, "eyes", [_dec2$q], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$m)) || _class$B);

      cclegacy._RF.pop();

      var _dec$C, _dec2$r, _dec3$j, _class$C, _class2$n, _descriptor$l;

      cclegacy._RF.push({}, "2ca763+kElPuqiAkECtFMMS", "Grass", undefined);

      var ccclass$C = _decorator.ccclass,
          property$n = _decorator.property,
          requireComponent$d = _decorator.requireComponent;
      var Grass = (_dec$C = ccclass$C('Grass'), _dec2$r = requireComponent$d(Graphics), _dec3$j = property$n({
        tooltip: 'Use batch draw all grass polygons'
      }), _dec$C(_class$C = _dec2$r(_class$C = (_class2$n = /*#__PURE__*/function (_BaseObject) {
        _inherits(Grass, _BaseObject);

        var _super = _createSuper(Grass);

        function Grass() {
          var _this;

          _classCallCheck(this, Grass);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "useBatch", _descriptor$l, _assertThisInitialized(_this));

          _this.grassPolygons = [];
          return _this;
        }

        _createClass(Grass, [{
          key: "__preload",
          value: function __preload() {
            this.graphic = this.getComponent(Graphics);
            this.validateRequiredComponents();
            this.listenGameplayEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphic) {
              throw new Error('Grass: Graphics not found');
            }
          }
        }, {
          key: "listenGameplayEvents",
          value: function listenGameplayEvents() {
            return;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var polygon = this.getPolygon();
            if (!polygon) return;
            var type = this.isDark() ? ObjectNames.GRASS_DARK : ObjectNames.GRASS;

            if (this.useBatch) {
              this.addGrassPolygon(type, polygon);
            } else {
              this.updateFillColor(type);
              this.drawGrass(polygon);
            }
          }
        }, {
          key: "drawGrass",
          value: function drawGrass(polygon) {
            this.graphic.moveTo(polygon[0].x, polygon[0].y);

            var _iterator = _createForOfIteratorHelper(polygon),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                this.graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.graphic.close();
            this.graphic.fill();
          }
        }, {
          key: "getPolygon",
          value: function getPolygon() {
            if (!('polygon' in this.node)) return null;
            var polygon = this.node['polygon'];
            if (!Array.isArray(polygon)) return null;
            return polygon;
          }
        }, {
          key: "isDark",
          value: function isDark() {
            return 'isDark' in this.node && !!this.node['isDark'];
          }
        }, {
          key: "addGrassPolygon",
          value: function addGrassPolygon(type, polygon) {
            this.grassPolygons.push({
              type: type,
              polygon: polygon
            });
          }
        }, {
          key: "updateFillColor",
          value: function updateFillColor(type) {
            if (type === ObjectNames.GRASS_DARK) {
              this.graphic.fillColor.fromHEX('#5e9c35');
            } else {
              this.graphic.fillColor.fromHEX('#8bdd55');
            }
          }
        }, {
          key: "batchDrawAllGrass",
          value: function batchDrawAllGrass() {
            if (this.grassPolygons.length < 1) return;

            var _iterator2 = _createForOfIteratorHelper(this.grassPolygons),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var grass = _step2.value;
                this.updateFillColor(grass.type);
                this.drawGrass(grass.polygon);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.grassPolygons = [];
          }
        }]);

        return Grass;
      }(BaseObject), _descriptor$l = _applyDecoratedDescriptor(_class2$n.prototype, "useBatch", [_dec3$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _class2$n)) || _class$C) || _class$C);

      cclegacy._RF.pop();

      var _dec$D, _dec2$s, _class$D, _class2$o, _descriptor$m;

      cclegacy._RF.push({}, "7027fhYTgdDe6EinMz7XLC6", "MapLine", undefined);

      var ccclass$D = _decorator.ccclass,
          property$o = _decorator.property,
          requireComponent$e = _decorator.requireComponent;
      var MapLine = (_dec$D = ccclass$D('MapLine'), _dec2$s = property$o(Graphics), _dec$D(_class$D = (_class2$o = /*#__PURE__*/function (_Component) {
        _inherits(MapLine, _Component);

        var _super = _createSuper(MapLine);

        function MapLine() {
          var _this;

          _classCallCheck(this, MapLine);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "graphics", _descriptor$m, _assertThisInitialized(_this));

          _this.useBatch = false;
          _this.mapLines = [];
          return _this;
        }

        _createClass(MapLine, [{
          key: "__preload",
          value: function __preload() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphics) {
              throw new Error('MapLine: Graphics not found');
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            var polygon = this.getPolygon();
            if (!polygon) return;

            if (this.useBatch) {
              this.graphics.enabled = false;
              this.addLine(polygon);
            } else {
              this.drawLine(polygon);
            }
          }
        }, {
          key: "getPolygon",
          value: function getPolygon() {
            if (!('polygon' in this.node)) return null;
            var polygon = this.node['polygon'];
            if (!Array.isArray(polygon)) return null;
            return polygon;
          }
        }, {
          key: "addLine",
          value: function addLine(mapLine) {
            this.mapLines.push(mapLine);
          }
        }, {
          key: "drawLine",
          value: function drawLine(polyline) {
            this.graphics.moveTo(polyline[0].x, polyline[0].y);

            var _iterator = _createForOfIteratorHelper(polyline.slice(1)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                this.graphics.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.graphics.stroke();
          }
        }, {
          key: "batchDrawAllLines",
          value: function batchDrawAllLines() {
            if (this.mapLines.length < 1) return;

            var _iterator2 = _createForOfIteratorHelper(this.mapLines),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var line = _step2.value;
                this.drawLine(line);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.mapLines = [];
          }
        }]);

        return MapLine;
      }(Component), _descriptor$m = _applyDecoratedDescriptor(_class2$o.prototype, "graphics", [_dec2$s], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$o)) || _class$D);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "87767KZVqpEgIbdzZdGh1CJ", "BatchObjectManager", undefined);

      var BatchObjectManager = /*#__PURE__*/function () {
        function BatchObjectManager() {
          _classCallCheck(this, BatchObjectManager);

          this.isBrickInitialized = false;
          this.isGrassInitialized = false;
          this.isLineInitialized = false;
          this.isPoisonInitialized = false;
          this.isPoisonSurfaceInitialized = false;
          this.isWaterInitialized = false;
          this.isDangerAreaInitialized = false;
          this.mainBrickComponent = null;
          this.mainGrassComponent = null;
          this.mainLineComponent = null;
          this.mainPoisonComponent = null;
          this.mainPoisonSurfaceComponent = null;
          this.mainWaterComponent = null;
          this.mainDangerAreaComponent = null;
          return;
        }

        _createClass(BatchObjectManager, [{
          key: "assignMainBrickComponent",
          value: function assignMainBrickComponent(component) {
            this.mainBrickComponent = component;
          }
        }, {
          key: "assignMainGrassComponent",
          value: function assignMainGrassComponent(component) {
            this.mainGrassComponent = component;
          }
        }, {
          key: "assignMainLineComponent",
          value: function assignMainLineComponent(component) {
            this.mainLineComponent = component;
          }
        }, {
          key: "assignMainPoisonComponent",
          value: function assignMainPoisonComponent(component) {
            this.mainPoisonComponent = component;
          }
        }, {
          key: "assignMainPoisonSurfaceComponent",
          value: function assignMainPoisonSurfaceComponent(component) {
            this.mainPoisonSurfaceComponent = component;
          }
        }, {
          key: "assignMainWaterComponent",
          value: function assignMainWaterComponent(component) {
            this.mainWaterComponent = component;
          }
        }, {
          key: "assignMainDangerAreaComponent",
          value: function assignMainDangerAreaComponent(component) {
            this.mainDangerAreaComponent = component;
          }
        }, {
          key: "isBrickBatchingEnabled",
          value: function isBrickBatchingEnabled() {
            var _this$mainBrickCompon, _this$mainBrickCompon2;

            return (_this$mainBrickCompon = (_this$mainBrickCompon2 = this.mainBrickComponent) === null || _this$mainBrickCompon2 === void 0 ? void 0 : _this$mainBrickCompon2.useBatch) !== null && _this$mainBrickCompon !== void 0 ? _this$mainBrickCompon : false;
          }
        }, {
          key: "isGrassBatchingEnabled",
          value: function isGrassBatchingEnabled() {
            var _this$mainGrassCompon, _this$mainGrassCompon2;

            return (_this$mainGrassCompon = (_this$mainGrassCompon2 = this.mainGrassComponent) === null || _this$mainGrassCompon2 === void 0 ? void 0 : _this$mainGrassCompon2.useBatch) !== null && _this$mainGrassCompon !== void 0 ? _this$mainGrassCompon : false;
          }
        }, {
          key: "isLineBatchingEnabled",
          value: function isLineBatchingEnabled() {
            var _this$mainLineCompone, _this$mainLineCompone2;

            return (_this$mainLineCompone = (_this$mainLineCompone2 = this.mainLineComponent) === null || _this$mainLineCompone2 === void 0 ? void 0 : _this$mainLineCompone2.useBatch) !== null && _this$mainLineCompone !== void 0 ? _this$mainLineCompone : false;
          }
        }, {
          key: "isPoisonBatchingEnabled",
          value: function isPoisonBatchingEnabled() {
            var _this$mainPoisonCompo, _this$mainPoisonCompo2;

            return (_this$mainPoisonCompo = (_this$mainPoisonCompo2 = this.mainPoisonComponent) === null || _this$mainPoisonCompo2 === void 0 ? void 0 : _this$mainPoisonCompo2.useBatch) !== null && _this$mainPoisonCompo !== void 0 ? _this$mainPoisonCompo : false;
          }
        }, {
          key: "isPoisonSurfaceBatchingEnabled",
          value: function isPoisonSurfaceBatchingEnabled() {
            var _this$mainPoisonSurfa, _this$mainPoisonSurfa2;

            return (_this$mainPoisonSurfa = (_this$mainPoisonSurfa2 = this.mainPoisonSurfaceComponent) === null || _this$mainPoisonSurfa2 === void 0 ? void 0 : _this$mainPoisonSurfa2.useBatch) !== null && _this$mainPoisonSurfa !== void 0 ? _this$mainPoisonSurfa : false;
          }
        }, {
          key: "isWaterBatchingEnabled",
          value: function isWaterBatchingEnabled() {
            var _this$mainWaterCompon, _this$mainWaterCompon2;

            return (_this$mainWaterCompon = (_this$mainWaterCompon2 = this.mainWaterComponent) === null || _this$mainWaterCompon2 === void 0 ? void 0 : _this$mainWaterCompon2.useBatch) !== null && _this$mainWaterCompon !== void 0 ? _this$mainWaterCompon : false;
          }
        }, {
          key: "isDangerAreaBatchingEnabled",
          value: function isDangerAreaBatchingEnabled() {
            var _this$mainDangerAreaC, _this$mainDangerAreaC2;

            return (_this$mainDangerAreaC = (_this$mainDangerAreaC2 = this.mainDangerAreaComponent) === null || _this$mainDangerAreaC2 === void 0 ? void 0 : _this$mainDangerAreaC2.useBatch) !== null && _this$mainDangerAreaC !== void 0 ? _this$mainDangerAreaC : false;
          }
        }, {
          key: "updateBrickPolygon",
          value: function updateBrickPolygon(polygon) {
            if (!this.mainBrickComponent) {
              console.warn('BatchObjectManager: mainBrickComponent is not assigned');
              return;
            }

            this.mainBrickComponent.addBrickPolygon(polygon);
          }
        }, {
          key: "updateGrassPolygon",
          value: function updateGrassPolygon(type, polygon) {
            if (!this.mainGrassComponent) {
              console.warn('BatchObjectManager: mainGrassComponent is not assigned');
              return;
            }

            this.mainGrassComponent.addGrassPolygon(type, polygon);
          }
        }, {
          key: "updateMapLine",
          value: function updateMapLine(polygon) {
            if (!this.mainLineComponent) {
              console.warn('BatchObjectManager: mainLineNode is not assigned');
              return;
            }

            this.mainLineComponent.addLine(polygon);
          }
        }, {
          key: "updatePoisonPolygon",
          value: function updatePoisonPolygon(polygon) {
            if (!this.mainPoisonComponent) {
              console.warn('BatchObjectManager: mainPoisonComponent is not assigned');
              return;
            }

            this.mainPoisonComponent.addPoisonPolygon(polygon);
          }
        }, {
          key: "updatePoisonSurfacePolygon",
          value: function updatePoisonSurfacePolygon(polygon) {
            if (!this.mainPoisonSurfaceComponent) {
              console.warn('BatchObjectManager: mainPoisonSurfaceComponent is not assigned');
              return;
            }

            this.mainPoisonSurfaceComponent.addPoisonSurfacePolygon(polygon);
          }
        }, {
          key: "updateWaterPolygon",
          value: function updateWaterPolygon(polygon) {
            if (!this.mainWaterComponent) {
              console.warn('BatchObjectManager: mainWaterComponent is not assigned');
              return;
            }

            this.mainWaterComponent.addWaterPolygon(polygon);
          }
        }, {
          key: "updateDangerAreaPolygon",
          value: function updateDangerAreaPolygon(polygon) {
            if (!this.mainDangerAreaComponent) {
              console.warn('BatchObjectManager: mainDangerAreaComponent is not assigned');
              return;
            }

            this.mainDangerAreaComponent.addDangerAreaPolygon(polygon);
          }
        }, {
          key: "batchDraw",
          value: function batchDraw() {
            var _this$mainBrickCompon3, _this$mainGrassCompon3, _this$mainLineCompone3, _this$mainPoisonCompo3, _this$mainPoisonSurfa3, _this$mainWaterCompon3, _this$mainDangerAreaC3;

            (_this$mainBrickCompon3 = this.mainBrickComponent) === null || _this$mainBrickCompon3 === void 0 ? void 0 : _this$mainBrickCompon3.batchDrawAllBrick();
            (_this$mainGrassCompon3 = this.mainGrassComponent) === null || _this$mainGrassCompon3 === void 0 ? void 0 : _this$mainGrassCompon3.batchDrawAllGrass();
            (_this$mainLineCompone3 = this.mainLineComponent) === null || _this$mainLineCompone3 === void 0 ? void 0 : _this$mainLineCompone3.batchDrawAllLines();
            (_this$mainPoisonCompo3 = this.mainPoisonComponent) === null || _this$mainPoisonCompo3 === void 0 ? void 0 : _this$mainPoisonCompo3.batchDrawAllPoisonPools();
            (_this$mainPoisonSurfa3 = this.mainPoisonSurfaceComponent) === null || _this$mainPoisonSurfa3 === void 0 ? void 0 : _this$mainPoisonSurfa3.batchDrawAllPoisonSurfaces();
            (_this$mainWaterCompon3 = this.mainWaterComponent) === null || _this$mainWaterCompon3 === void 0 ? void 0 : _this$mainWaterCompon3.batchDrawAllWater();
            (_this$mainDangerAreaC3 = this.mainDangerAreaComponent) === null || _this$mainDangerAreaC3 === void 0 ? void 0 : _this$mainDangerAreaC3.batchDrawAllDangerAreas();
          }
        }, {
          key: "clearObjects",
          value: function clearObjects() {
            this.isBrickInitialized = false;
            this.isGrassInitialized = false;
            this.isLineInitialized = false;
            this.isPoisonInitialized = false;
            this.isPoisonSurfaceInitialized = false;
            this.isWaterInitialized = false;
            this.isDangerAreaInitialized = false;
            this.mainBrickComponent = null;
            this.mainGrassComponent = null;
            this.mainLineComponent = null;
            this.mainPoisonComponent = null;
            this.mainPoisonSurfaceComponent = null;
            this.mainWaterComponent = null;
            this.mainDangerAreaComponent = null;
          }
        }]);

        return BatchObjectManager;
      }();

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "4c04ffCcRhGsqEZlVWUHd8s", "MapTransformer", undefined);

      var FIX_OFFSET_X = 200;
      var FIX_OFFSET_Y = 270;

      var MapTransformer = /*#__PURE__*/function () {
        function MapTransformer() {
          _classCallCheck(this, MapTransformer);
        }

        _createClass(MapTransformer, null, [{
          key: "getPointObject",
          value: function getPointObject(payload) {
            var id = payload.id,
                point = payload.point,
                data = payload.data,
                connect = payload.connect;
            var newPoint = {
              x: point.x * MAP_SCALE + MAP_SCALE / 2 - FIX_OFFSET_X,
              y: GameZone.HEIGHT - point.y * MAP_SCALE - MAP_SCALE / 2 - FIX_OFFSET_Y
            };
            return {
              id: id,
              point: newPoint,
              data: data,
              connect: connect
            };
          }
        }, {
          key: "getPointObjectB\u1EF5HalfCoord",
          value: function getPointObjectBỵHalfCoord(payload) {
            var id = payload.id,
                point = payload.point,
                data = payload.data,
                connect = payload.connect;
            var newPoint = {
              x: point.x * MAP_SCALE / 2 - FIX_OFFSET_X,
              y: GameZone.HEIGHT - point.y * MAP_SCALE / 2 - FIX_OFFSET_Y
            };
            return {
              id: id,
              point: newPoint,
              data: data,
              connect: connect
            };
          }
        }, {
          key: "getPolygonObject",
          value: function getPolygonObject(payload) {
            var id = payload.id,
                point = payload.point,
                data = payload.data,
                connect = payload.connect;
            var newPoint = point.map(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              return {
                x: x * MAP_SCALE - FIX_OFFSET_X,
                y: GameZone.HEIGHT - y * MAP_SCALE - FIX_OFFSET_Y
              };
            });
            return {
              id: id,
              point: newPoint,
              data: data,
              connect: connect
            };
          }
        }, {
          key: "getDoublePolygon",
          value: function getDoublePolygon(payload) {
            var id = payload.id,
                point = payload.point,
                data = payload.data,
                connect = payload.connect;
            var newPoint = point.map(function (_ref2) {
              var x = _ref2.x,
                  y = _ref2.y;
              return {
                x: x * MAP_SCALE / 2 - FIX_OFFSET_X,
                y: GameZone.HEIGHT - y * MAP_SCALE / 2 - FIX_OFFSET_Y
              };
            });
            return {
              id: id,
              point: newPoint,
              data: data,
              connect: connect
            };
          }
        }, {
          key: "transformPointsFromMapToDrawAreaCoordinate",
          value: function transformPointsFromMapToDrawAreaCoordinate(points) {
            var newPoint = points.map(function (_ref3) {
              var x = _ref3.x,
                  y = _ref3.y;
              return {
                x: x * MAP_SCALE - FIX_OFFSET_X,
                y: GameZone.HEIGHT - y * MAP_SCALE - FIX_OFFSET_Y
              };
            });
            return newPoint;
          }
        }]);

        return MapTransformer;
      }();

      cclegacy._RF.pop();

      var _dec$E, _dec2$t, _dec3$k, _dec4$9, _dec5$6, _dec6$4, _dec7$3, _dec8$2, _dec9$2, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class$E, _class2$p, _descriptor$n, _descriptor2$d, _descriptor3$6, _descriptor4$3, _descriptor5$3, _descriptor6$2, _descriptor7$1, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;

      cclegacy._RF.push({}, "75ad9uPflhLL4N96NmHF2Sk", "GameObjects", undefined);

      var ccclass$E = _decorator.ccclass,
          property$p = _decorator.property;
      var GameObjects = (_dec$E = ccclass$E('GameObjects'), _dec2$t = property$p(Prefab), _dec3$k = property$p(Prefab), _dec4$9 = property$p(Prefab), _dec5$6 = property$p(Prefab), _dec6$4 = property$p(Prefab), _dec7$3 = property$p(Prefab), _dec8$2 = property$p(Prefab), _dec9$2 = property$p(Prefab), _dec10 = property$p(Prefab), _dec11 = property$p(Prefab), _dec12 = property$p(Prefab), _dec13 = property$p(Prefab), _dec14 = property$p(Prefab), _dec15 = property$p(Prefab), _dec16 = property$p({
        tooltip: 'Use batch draw all map lines.'
      }), _dec17 = property$p({
        tooltip: 'Use batch draw all poison pools.'
      }), _dec18 = property$p({
        tooltip: 'Use batch draw all poison surfaces.'
      }), _dec19 = property$p({
        tooltip: 'Use batch draw all water pools.'
      }), _dec20 = property$p({
        tooltip: 'Use batch draw all danger areas.'
      }), _dec$E(_class$E = (_class2$p = /*#__PURE__*/function (_Component) {
        _inherits(GameObjects, _Component);

        var _super = _createSuper(GameObjects);

        function GameObjects() {
          var _this;

          _classCallCheck(this, GameObjects);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "dogePrefab", _descriptor$n, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "beePrefab", _descriptor2$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "beehivePrefab", _descriptor3$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bigBeePrefab", _descriptor4$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "thornPrefab", _descriptor5$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "thornBallPrefab", _descriptor6$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "airFanPrefab", _descriptor7$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "grassPrefab", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "balloonPrefab", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "brickPrefab", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arenaPrefab", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "woodPrefab", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "connectPrefab", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapLinePrefab", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchMapLines", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchPoisonPool", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchPoisonSurface", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchWaterPool", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchDangerArea", _descriptor19, _assertThisInitialized(_this));

          _this.batchObjects = new BatchObjectManager();
          _this.objects = new Map();
          return _this;
        }

        _createClass(GameObjects, [{
          key: "spawnObjects",
          value: function spawnObjects(levelData) {
            var map = levelData.map;

            var mapReverse = _toConsumableArray(map).reverse();

            for (var i = 0; i < mapReverse.length; i++) {
              var object = mapReverse[i];
              var node = null;

              if (Array.isArray(object.point)) {
                node = this.spawnPolygonObjectType(object);
              } else {
                node = this.spawnPointObjectType(object);
              }

              if (!node) continue;
              this.objects.set(i, node);
            } // ? Need spawn all objects before spawn some objects like connect, balloon


            var _iterator = _createForOfIteratorHelper(map),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _object = _step.value;
                if (Array.isArray(_object.point)) continue;
                var obj = _object; // ? Why objects right here is not add to this.objects @Ngan

                if (obj.id == ObjectIds.BALLOON) {
                  var newObject = MapTransformer.getPointObject(obj);
                  var _newObject$point = newObject.point,
                      x = _newObject$point.x,
                      y = _newObject$point.y;
                  if (!obj.connect) continue;
                  var doge = this.findObjectIndex(map, obj.connect);
                  if (!doge) continue;
                  this.spawnBalloon(x, y, doge);
                }

                if (_object.id == ObjectIds.CONNECT) {
                  if (!_object.connect) return null;
                  if (!Array.isArray(_object.connect.point)) return null;
                  var connect = MapTransformer.getDoublePolygon(_object.connect);

                  var _newObject = MapTransformer.getPointObjectBỵHalfCoord(_object);

                  var _newObject$point2 = _newObject.point,
                      _x = _newObject$point2.x,
                      _y = _newObject$point2.y;
                  this.spawnConnect(_x, _y, connect.point);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.batchObjects.batchDraw();
            this.sortObjects();
            this.sleepObjects();
          }
        }, {
          key: "spawnPolygonObjectType",
          value: function spawnPolygonObjectType(object) {
            var newObject = MapTransformer.getPolygonObject(object);
            var points = newObject.point;
            if (points.length == 0) return null;

            switch (object.id) {
              case ObjectIds.BRICK:
                return this.spawnBrick(points);

              case ObjectIds.GRASS:
                return this.spawnGrass(points, false);

              case ObjectIds.GRASS_DARK:
                return this.spawnGrass(points, true);

              case ObjectIds.LINE:
                return this.spawnLine(points);

              case ObjectIds.POISON:
                return this.spawnPoison(points);

              case ObjectIds.POISON_SURFACE:
                return this.spawnPoisonSurface(points);

              case ObjectIds.WATER:
                return this.spawnWater(points);

              case ObjectIds.DANGER_AREA:
                return this.spawnDangerAreaNormal(points);

              case ObjectIds.CONNECT:
                return null;
              // Double polygon

              case ObjectIds.WOOD:
                {
                  var _newObject2 = MapTransformer.getDoublePolygon(object);

                  return this.spawnWood(_newObject2.point);
                }

              case ObjectIds.COLLIDER:
                {
                  var _newObject3 = MapTransformer.getDoublePolygon(object);

                  return this.spawnCollider(0, 0, _newObject3.point);
                }
              // ? Unknown

              case ObjectIds.STROKE:
                return null;

              default:
                return null;
            }
          }
        }, {
          key: "spawnPointObjectType",
          value: function spawnPointObjectType(object) {
            var newObject = MapTransformer.getPointObject(object);
            var _newObject$point3 = newObject.point,
                x = _newObject$point3.x,
                y = _newObject$point3.y;

            switch (object.id) {
              case ObjectIds.DOGE_A:
                return this.spawnDoge(x, y);

              case ObjectIds.DOGE_B:
                return this.spawnDoge(x, y, true);

              case ObjectIds.BEEHIVE_A:
              case ObjectIds.BEEHIVE_C:
                return this.spawnBeehive(x, y);

              case ObjectIds.BEEHIVE_B:
              case ObjectIds.BEEHIVE_D:
                return this.spawnBeehive(x, y, true);

              case ObjectIds.THORN_BALL:
                return this.spawnThornBall(x, y);

              case ObjectIds.BIG_BEE:
                return this.spawnBigBee(x, y);

              case ObjectIds.WATER_SURFACE:
                return this.spawnWaterSurface(x, y);
              // With angle

              case ObjectIds.THORN:
                {
                  var _object$data;

                  var a = ((_object$data = object.data) === null || _object$data === void 0 ? void 0 : _object$data.a) || 0;
                  return this.spawnThorn(x, y, a);
                }

              case ObjectIds.AIR_FAN:
                {
                  var _object$data2;

                  var _a = ((_object$data2 = object.data) === null || _object$data2 === void 0 ? void 0 : _object$data2.a) || 0;

                  return this.spawnAirFan(x, y, _a);
                }

              default:
                return null;
            }
          }
        }, {
          key: "spawnObjectForDevTools",
          value: function spawnObjectForDevTools(objectData) {
            this.spawnPointObjectType(objectData);
            this.sortObjects();
          }
        }, {
          key: "spawnPolygonObjectForDevTools",
          value: function spawnPolygonObjectForDevTools(objectData) {
            this.spawnPolygonObjectType(objectData);
            this.sortObjects();
          }
        }, {
          key: "addObject",
          value: function addObject(object) {
            this.node.insertChild(object, this.getSiblingIndex(object.name));
          }
        }, {
          key: "sortObjects",
          value: function sortObjects() {
            var child = _toConsumableArray(this.node.children);

            child.sort(function (a, b) {
              return ObjectDepths[a.name] - ObjectDepths[b.name];
            });
            child.forEach(function (node, index) {
              node.setSiblingIndex(index);
            });
          }
        }, {
          key: "findObjectIndex",
          value: function findObjectIndex(map, object) {
            var _this2 = this;

            var index = map.findIndex(function (obj) {
              return JSON.stringify(obj) === JSON.stringify(object);
            });
            var objPosition = map[index].point; //Polygon objects not supported, this method currently only for point objects

            if (!objPosition || Array.isArray(objPosition)) return;
            var convertedObj = MapTransformer.getPointObject(map[index]);
            var _convertedObj$point = convertedObj.point,
                x = _convertedObj$point.x,
                y = _convertedObj$point.y;
            var objNode = this.node.children.find(function (node) {
              var position = node.position;
              return position.x == x && position.y == y && node.name == _this2.getObjNameFromId(object.id);
            });
            if (!objNode) return;
            return objNode;
          }
        }, {
          key: "getObjNameFromId",
          value: function getObjNameFromId(id) {
            switch (id) {
              case ObjectIds.DOGE_A:
              case ObjectIds.DOGE_B:
                return ObjectNames.DOGE;

              case ObjectIds.BEEHIVE_A:
              case ObjectIds.BEEHIVE_B:
              case ObjectIds.BEEHIVE_C:
              case ObjectIds.BEEHIVE_D:
                return ObjectNames.BEEHIVE;

              case ObjectIds.THORN_BALL:
                return ObjectNames.THORN_BALL;

              case ObjectIds.BIG_BEE:
                return ObjectNames.BIG_BEE;

              case ObjectIds.WATER_SURFACE:
                return ObjectNames.WATER_SURFACE;

              case ObjectIds.THORN:
                return ObjectNames.THORN;

              case ObjectIds.AIR_FAN:
                return ObjectNames.AIR_FAN;

              case ObjectIds.BRICK:
                return ObjectNames.BRICK;

              case ObjectIds.GRASS:
                return ObjectNames.GRASS;

              case ObjectIds.GRASS_DARK:
                return ObjectNames.GRASS_DARK;

              case ObjectIds.LINE:
                return ObjectNames.MAP_LINE;

              case ObjectIds.POISON:
                return ObjectNames.POISON;

              case ObjectIds.POISON_SURFACE:
                return ObjectNames.POISON_SURFACE;

              case ObjectIds.WATER:
                return ObjectNames.WATER;

              case ObjectIds.DANGER_AREA:
                return ObjectNames.DANGER_AREA;

              case ObjectIds.WOOD:
                return ObjectNames.WOOD;

              case ObjectIds.COLLIDER:
                return ObjectNames.COLLIDER;

              default:
                return '';
            }
          }
        }, {
          key: "getSiblingIndex",
          value: function getSiblingIndex(name) {
            var children = this.node.children;
            var inputIdx = ObjectDepths[name];
            if (!inputIdx) return children.length + 1;
            var childrenIdx = children.map(function (child) {
              return ObjectDepths[child.name];
            });
            var idx = childrenIdx.findIndex(function (idx) {
              return inputIdx < idx;
            });
            if (idx < 0) return childrenIdx.length + 1;
            return idx;
          }
        }, {
          key: "clearObjects",
          value: function clearObjects() {
            this.node.destroyAllChildren();
            this.node.removeAllChildren();
            this.batchObjects.clearObjects();
          }
        }, {
          key: "stopBeeBehavior",
          value: function stopBeeBehavior() {
            this.node.getComponentsInChildren(Bee).forEach(function (bee) {
              bee.state = BeeState.IDLE;
            });
          }
        }, {
          key: "sleepObjects",
          value: function sleepObjects() {
            var objects = this.getComponentsInChildren(BaseObject);
            objects.forEach(function (obj) {
              return obj.sleep();
            });
            this.node.getComponentsInChildren(BigBee).forEach(function (bigBee) {
              bigBee.state = BeeState.IDLE;
            });
          }
        }, {
          key: "deActiveColliders",
          value: function deActiveColliders() {
            var colliders = this.getComponentsInChildren(Collider2D);
            colliders.forEach(function (collider) {
              return collider.enabled = false;
            });
          }
        }, {
          key: "wakeUpObjects",
          value: function wakeUpObjects() {
            var objects = this.getComponentsInChildren(BaseObject);
            objects.forEach(function (obj) {
              return obj.wake();
            });
          }
        }, {
          key: "spawnBeehive",
          value: function spawnBeehive(x, y) {
            var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var beehive = instantiate(this.beehivePrefab);
            if (!(beehive instanceof Node)) return null;
            beehive.name = ObjectNames.BEEHIVE;
            beehive.setPosition(x, y);
            beehive.setScale(right ? -1 : 1, 1);
            beehive.attr({
              isRightSide: right
            });
            this.addObject(beehive);
            return beehive;
          }
        }, {
          key: "spawnBees",
          value: function spawnBees() {
            var _this3 = this;

            var beehives = this.node.getComponentsInChildren(Beehive);
            var count = beehives.length == 1 ? 8 : 4;
            beehives.forEach(function (beehive) {
              beehive.node.attr({
                totalPathSeekers: Math.floor(count / 3)
              });

              for (var i = 0; i < count; i++) {
                var bee = _this3.spawnBee();

                if (!bee) continue;
                beehive.releaseBee(bee);
              }
            });
            this.sortObjects();
          }
        }, {
          key: "spawnBee",
          value: function spawnBee() {
            var bee = instantiate(this.beePrefab);
            if (!(bee instanceof Node)) return null;
            bee.name = ObjectNames.BEE;
            this.addObject(bee);
            return bee;
          }
        }, {
          key: "checkAllBeeDie",
          value: function checkAllBeeDie() {
            var bees = this.node.getComponentsInChildren(Bee);
            var bigBees = this.node.getComponentsInChildren(BigBee);
            var hasBeeLive = bees.some(function (bee) {
              return bee.enabled;
            });
            var hasBigBeeLive = bigBees.some(function (bigBee) {
              return bigBee.enabled;
            });
            return !hasBeeLive && !hasBigBeeLive;
          }
        }, {
          key: "spawnDoge",
          value: function spawnDoge(x, y) {
            var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var doge = instantiate(this.dogePrefab);
            if (!(doge instanceof Node)) return null;
            doge.name = ObjectNames.DOGE;
            doge.setPosition(x, y);
            doge.setScale(right ? -1 : 1, 1);
            this.addObject(doge);
            return doge;
          }
        }, {
          key: "spawnBigBee",
          value: function spawnBigBee(x, y) {
            var bigBee = instantiate(this.bigBeePrefab);
            if (!(bigBee instanceof Node)) return null;
            bigBee.name = ObjectNames.BIG_BEE;
            bigBee.setPosition(x, y);
            this.addObject(bigBee);
            return bigBee;
          }
        }, {
          key: "reviveBigBees",
          value: function reviveBigBees() {
            this.node.getComponentsInChildren(BigBee).forEach(function (bigBee) {
              bigBee.state = BeeState.ATTACKING;
            });
          }
        }, {
          key: "spawnBrick",
          value: function spawnBrick(polygon) {
            if (!this.batchObjects.isBrickInitialized) {
              var brick = this.spawnBrickNormal(polygon);
              if (!brick) return null;
              var brickComponent = brick.getComponent(Brick);
              if (!brickComponent) return null;
              this.batchObjects.isBrickInitialized = true;

              if (brickComponent.useBatch) {
                this.batchObjects.assignMainBrickComponent(brickComponent);
              }

              this.addObject(brick);
              return brick;
            }

            if (this.batchObjects.isBrickBatchingEnabled()) {
              this.batchObjects.updateBrickPolygon(polygon);
              return null;
            }

            return this.spawnBrickNormal(polygon);
          }
        }, {
          key: "spawnBrickNormal",
          value: function spawnBrickNormal(polygon) {
            var brick = instantiate(this.brickPrefab);
            if (!(brick instanceof Node)) return null;
            brick.name = ObjectNames.BRICK;
            brick.attr({
              polygon: polygon
            });
            this.addObject(brick);
            return brick;
          }
        }, {
          key: "spawnWood",
          value: function spawnWood(polygon) {
            var wood = instantiate(this.woodPrefab);
            if (!(wood instanceof Node)) return null;
            wood.name = ObjectNames.WOOD;
            var pattern = wood.getComponent(Pattern);

            if (!pattern) {
              console.warn('Pattern not found');
              return null;
            }

            pattern.savePolygonPoints(polygon.map(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              return {
                x: x,
                y: y
              };
            }));
            this.addObject(wood);
            pattern.draw(polygon);
            pattern.applyCollider(polygon);
            pattern.setRigidBodyType(ERigidBody2DType.Dynamic);
            var stroke = this.spawnWoodStroke(polygon);
            stroke.setParent(wood, false);
            wood.addChild(stroke);
            return wood;
          }
        }, {
          key: "spawnWoodStroke",
          value: function spawnWoodStroke(polyline) {
            var wood = new Node();
            wood.name = ObjectNames.WOOD_STROKE;
            wood.layer = 33554432;
            this.addObject(wood);
            var graphic = wood.addComponent(Graphics);
            graphic.lineWidth = 4;
            var color = new Color();
            Color.fromHEX(color, '#0d0d15');
            graphic.strokeColor = color;
            graphic.moveTo(polyline[0].x, polyline[0].y);

            var _iterator2 = _createForOfIteratorHelper(polyline.slice(1)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var point = _step2.value;
                graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            graphic.close();
            graphic.stroke();
            return wood;
          }
        }, {
          key: "spawnGrass",
          value: function spawnGrass(polygon, isDarkGrass) {
            if (!this.batchObjects.isGrassInitialized) {
              var grass = this.spawnGrassNormal(polygon, false);
              if (!grass) return null;
              var grassComponent = grass.getComponent(Grass);
              if (!grassComponent) return null;
              this.batchObjects.isGrassInitialized = true;

              if (grassComponent.useBatch) {
                this.batchObjects.assignMainGrassComponent(grassComponent);
              }

              this.addObject(grass);
              return grass;
            }

            var grassType = isDarkGrass ? ObjectNames.GRASS_DARK : ObjectNames.GRASS;

            if (this.batchObjects.isGrassBatchingEnabled()) {
              this.batchObjects.updateGrassPolygon(grassType, polygon);
              return null;
            }

            return this.spawnGrassNormal(polygon, isDarkGrass);
          }
        }, {
          key: "spawnGrassNormal",
          value: function spawnGrassNormal(polygon, isDarkGrass) {
            var grass = instantiate(this.grassPrefab);
            if (!(grass instanceof Node)) return null;
            grass.name = isDarkGrass ? ObjectNames.GRASS_DARK : ObjectNames.GRASS;
            grass.attr({
              polygon: polygon,
              isDark: isDarkGrass
            });
            this.addObject(grass);
            return grass;
          }
        }, {
          key: "spawnPoison",
          value: function spawnPoison(polygon) {
            if (!this.batchPoisonPool) {
              return this.spawnPoisonNormal(polygon);
            }

            if (!this.batchObjects.isPoisonInitialized) {
              var poisonArena = instantiate(this.arenaPrefab);
              if (!(poisonArena instanceof Node)) return null;
              poisonArena.name = ObjectNames.POISON;
              this.addObject(poisonArena);
              var poison = poisonArena.addComponent(Poison);
              poison.useBatch = true;
              this.batchObjects.isPoisonInitialized = true;
              this.batchObjects.assignMainPoisonComponent(poison);
              this.batchObjects.updatePoisonPolygon(polygon);
              return poisonArena;
            }

            this.batchObjects.updatePoisonPolygon(polygon);
            return null;
          }
        }, {
          key: "spawnPoisonNormal",
          value: function spawnPoisonNormal(polygon) {
            var poisonArena = instantiate(this.arenaPrefab);
            if (!(poisonArena instanceof Node)) return null;
            poisonArena.name = ObjectNames.POISON;
            this.addObject(poisonArena);
            var poison = poisonArena.addComponent(Poison);
            poison.polygon = polygon;
            return poisonArena;
          }
        }, {
          key: "spawnPoisonSurface",
          value: function spawnPoisonSurface(polygon) {
            if (!this.batchPoisonPool) {
              return this.spawnPoisonSurfaceNormal(polygon);
            }

            if (!this.batchObjects.isPoisonSurfaceInitialized) {
              var poisonSurfaceArena = instantiate(this.arenaPrefab);
              if (!(poisonSurfaceArena instanceof Node)) return null;
              poisonSurfaceArena.name = ObjectNames.POISON_SURFACE;
              this.addObject(poisonSurfaceArena);
              var poisonSurface = poisonSurfaceArena.addComponent(PoisonSurface);
              poisonSurface.useBatch = true;
              this.batchObjects.isPoisonSurfaceInitialized = true;
              this.batchObjects.assignMainPoisonSurfaceComponent(poisonSurface);
              this.batchObjects.updatePoisonSurfacePolygon(polygon);
              return poisonSurfaceArena;
            }

            this.batchObjects.updatePoisonSurfacePolygon(polygon);
            return null;
          }
        }, {
          key: "spawnPoisonSurfaceNormal",
          value: function spawnPoisonSurfaceNormal(polygon) {
            var poisonSurfaceArena = instantiate(this.arenaPrefab);
            if (!(poisonSurfaceArena instanceof Node)) return null;
            poisonSurfaceArena.name = ObjectNames.POISON_SURFACE;
            this.addObject(poisonSurfaceArena);
            var poisonSurface = poisonSurfaceArena.addComponent(PoisonSurface);
            poisonSurface.polygon = polygon;
            return poisonSurfaceArena;
          }
        }, {
          key: "spawnWater",
          value: function spawnWater(polygon) {
            if (!this.batchWaterPool) {
              return this.spawnWaterNormal(polygon);
            }

            if (!this.batchObjects.isWaterInitialized) {
              var waterArena = instantiate(this.arenaPrefab);
              if (!(waterArena instanceof Node)) return null;
              waterArena.name = ObjectNames.WATER;
              this.addObject(waterArena);
              var water = waterArena.addComponent(Water);
              water.useBatch = true;
              var opacity = waterArena.addComponent(UIOpacity);
              opacity.opacity = 0.75;
              this.batchObjects.isWaterInitialized = true;
              this.batchObjects.assignMainWaterComponent(water);
              this.batchObjects.updateWaterPolygon(polygon);
              return waterArena;
            }

            this.batchObjects.updateWaterPolygon(polygon);
            return null;
          }
        }, {
          key: "spawnWaterNormal",
          value: function spawnWaterNormal(polygon) {
            var waterArena = instantiate(this.arenaPrefab);
            if (!(waterArena instanceof Node)) return null;
            waterArena.name = ObjectNames.WATER;
            this.addObject(waterArena);
            var water = waterArena.addComponent(Water);
            water.polygon = polygon;
            var opacity = waterArena.addComponent(UIOpacity);
            opacity.opacity = 0.75;
            return waterArena;
          }
        }, {
          key: "spawnDangerArea",
          value: function spawnDangerArea(polygon) {
            if (!this.batchDangerArea) {
              return this.spawnDangerAreaNormal(polygon);
            }

            if (!this.batchObjects.isDangerAreaInitialized) {
              var dangerArena = instantiate(this.arenaPrefab);
              if (!(dangerArena instanceof Node)) return null;
              dangerArena.name = ObjectNames.DANGER_AREA;
              this.addObject(dangerArena);
              var areaComponent = dangerArena.addComponent(DangerArea);
              areaComponent.useBatch = true;
              areaComponent.addRigidBody();
              this.batchObjects.isDangerAreaInitialized = true;
              this.batchObjects.assignMainDangerAreaComponent(areaComponent);
              this.batchObjects.updateDangerAreaPolygon(polygon);
              return dangerArena;
            }

            this.batchObjects.updateDangerAreaPolygon(polygon);
            return null;
          }
        }, {
          key: "spawnDangerAreaNormal",
          value: function spawnDangerAreaNormal(polygon) {
            var dangerArena = instantiate(this.arenaPrefab);
            if (!(dangerArena instanceof Node)) return null;
            dangerArena.name = ObjectNames.DANGER_AREA;
            var graphicPattern = dangerArena.getComponent(GraphicsPattern);

            if (!graphicPattern) {
              console.warn('GraphicsPattern not found');
              return null;
            }

            this.addObject(dangerArena);
            graphicPattern.setColor('#fc03036d');
            graphicPattern.draw(polygon);
            var rigidBody = dangerArena.addComponent(RigidBody2D);
            rigidBody.type = ERigidBody2DType.Static;
            rigidBody.group = PhysicsGroup.DEFAULT;
            dangerArena.addComponent(PolygonCollider2D);
            graphicPattern.applyCollider(polygon);
            return dangerArena;
          }
        }, {
          key: "spawnWaterSurface",
          value: function spawnWaterSurface(x, y) {
            var waterSurface = new Node();
            waterSurface.name = ObjectNames.WATER_SURFACE;
            waterSurface.layer = this.node.layer;
            waterSurface.setPosition(x, y);
            resources.load(ResourcePaths.WATER_SURFACE_FRAME, SpriteFrame, function (error, sprite) {
              if (error) {
                console.warn('spawnWaterSurface', error);
                return;
              }

              if (!waterSurface.isValid) return;
              waterSurface.addComponent(Sprite).spriteFrame = sprite;
            });
            this.addObject(waterSurface);
            return waterSurface;
          }
        }, {
          key: "spawnThorn",
          value: function spawnThorn(x, y) {
            var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var thorn = instantiate(this.thornPrefab);
            if (!(thorn instanceof Node)) return null;
            thorn.name = ObjectNames.THORN;
            thorn.angle = angle;
            thorn.setPosition(x, y);
            this.addObject(thorn);
            return thorn;
          }
        }, {
          key: "spawnThornBall",
          value: function spawnThornBall(x, y) {
            var thornBall = instantiate(this.thornBallPrefab);
            if (!(thornBall instanceof Node)) return null;
            thornBall.name = ObjectNames.THORN_BALL;
            thornBall.setPosition(x, y);
            this.addObject(thornBall);
            return thornBall;
          }
        }, {
          key: "spawnAirFan",
          value: function spawnAirFan(x, y) {
            var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var airFan = instantiate(this.airFanPrefab);
            if (!(airFan instanceof Node)) return null;
            airFan.name = ObjectNames.AIR_FAN;
            airFan.angle = angle;
            airFan.setPosition(x, y);
            airFan.attr({
              id: ObjectIds.AIR_FAN
            });
            var airFanComponent = airFan.getComponent(AirFan);

            if (!airFanComponent) {
              console.warn('AirFan not found');
              return null;
            }

            airFanComponent.setForceDirection(angle);
            this.addObject(airFan);
            return airFan;
          }
        }, {
          key: "spawnCollider",
          value: function spawnCollider(x, y, polygon) {
            var collider = new Node();
            collider.name = ObjectNames.COLLIDER;
            this.addObject(collider);
            collider.setPosition(x, y);
            var rigidBody = collider.addComponent(RigidBody2D);
            rigidBody.type = ERigidBody2DType.Static;
            rigidBody.group = PhysicsGroup.MAIN_OBJECT;
            var polygonCollider = collider.addComponent(PolygonCollider2D);
            polygonCollider.restitution = 0.2;
            polygonCollider.points = polygon.map(function (_ref2) {
              var x = _ref2.x,
                  y = _ref2.y;
              return new Vec2(x, y);
            });
            polygonCollider.apply();
            return collider;
          }
        }, {
          key: "spawnLine",
          value: function spawnLine(polyline) {
            if (!this.batchMapLines) {
              return this.spawnLineNormal(polyline);
            }

            if (!this.batchObjects.isLineInitialized) {
              var mainMapLine = this.spawnLineNormal(polyline);
              if (!mainMapLine) return null;
              this.addObject(mainMapLine);
              var mapLineComponent = mainMapLine.getComponent(MapLine);
              if (!mapLineComponent) return null;
              this.batchObjects.isLineInitialized = true;
              this.batchObjects.assignMainLineComponent(mapLineComponent);
              return mainMapLine;
            }

            this.batchObjects.updateMapLine(polyline);
            return null;
          }
        }, {
          key: "spawnLineNormal",
          value: function spawnLineNormal(polyline) {
            var mapLine = instantiate(this.mapLinePrefab);
            if (!(mapLine instanceof Node)) return null;
            var mapLineComponent = mapLine.getComponent(MapLine);

            if (!mapLineComponent) {
              console.warn('MapLine not found');
              return null;
            }

            mapLine.name = ObjectNames.MAP_LINE;
            mapLine.attr({
              polygon: polyline
            });
            this.addObject(mapLine);
            return mapLine;
          }
        }, {
          key: "spawnConnect",
          value: function spawnConnect(x, y, polygon) {
            var pattern = this.getComponentsInChildren(Pattern).find(function (pattern) {
              var points = pattern.getPolygonPoints();
              if (points.length != polygon.length) return;

              for (var i = 0; i < polygon.length; i++) {
                var _points$i = points[i],
                    _x2 = _points$i.x,
                    _y2 = _points$i.y;
                var _polygon$i = polygon[i],
                    _x3 = _polygon$i.x,
                    _y3 = _polygon$i.y;
                if (_x2 != _x3 || _y2 != _y3) return;
              }

              return true;
            });
            var connect = instantiate(this.connectPrefab);
            if (!(connect instanceof Node)) return null;
            connect.setPosition(x, y);
            this.node.insertChild(connect, this.getSiblingIndex(connect.name));
            if (!pattern) return;

            var _connect$getWorldPosi = connect.getWorldPosition(),
                x2 = _connect$getWorldPosi.x,
                y2 = _connect$getWorldPosi.y;

            var _pattern$node$getWorl = pattern.node.getWorldPosition(),
                x1 = _pattern$node$getWorl.x,
                y1 = _pattern$node$getWorl.y;

            var hingeJoint2DComp = connect.getComponent(HingeJoint2D);
            hingeJoint2DComp.connectedBody = pattern.node.getComponent(RigidBody2D);
            hingeJoint2DComp.connectedAnchor = new Vec2(x2 - x1, y2 - y1); //? Fix bug connect not init correctly when instantiate from prefab

            hingeJoint2DComp.enabled = false;
            hingeJoint2DComp.enabled = true;
          }
        }, {
          key: "spawnBalloon",
          value: function spawnBalloon(x, y, doge) {
            var balloon = instantiate(this.balloonPrefab);
            if (!(balloon instanceof Node)) return null;
            balloon.name = ObjectNames.BALLOON;
            balloon.setPosition(x, y);
            var balloonComponent = balloon.getComponent(Balloon);

            if (!balloonComponent) {
              console.warn('Balloon not found');
              return null;
            }

            var rope = balloonComponent.connectToDoge(doge);
            this.addObject(balloon);

            if (rope) {
              this.addObject(rope.node);
            }

            return balloon;
          }
        }, {
          key: "getRandomDogeToBee",
          value: function getRandomDogeToBee() {
            if (!this.node.parent) return null;
            var doges = this.node.parent.getComponentsInChildren(Doge);
            var length = doges.length;
            var randomIndex = Math.floor(Math.random() * length);
            return doges[randomIndex];
          }
        }, {
          key: "getNearestDogeToBee",
          value: function getNearestDogeToBee(bee) {
            if (!this.node.parent) return null;
            var doges = this.node.parent.getComponentsInChildren(Doge);
            doges = doges.filter(function (doge) {
              return !doge.isCantBeTargeted();
            });
            if (doges.length === 0) return null;
            doges.sort(function (a, b) {
              var disA = Vec2.distance(a.node.worldPosition, bee.node.worldPosition);
              var disB = Vec2.distance(b.node.worldPosition, bee.node.worldPosition);
              return disA - disB;
            });
            return doges[0];
          }
        }, {
          key: "getDoges",
          value: function getDoges(excludeDoge) {
            if (!this.node.parent) return [];
            var doges = this.node.parent.getComponentsInChildren(Doge);
            doges = doges.filter(function (doge) {
              return doge != excludeDoge;
            });
            return doges;
          }
        }]);

        return GameObjects;
      }(Component), (_descriptor$n = _applyDecoratedDescriptor(_class2$p.prototype, "dogePrefab", [_dec2$t], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$d = _applyDecoratedDescriptor(_class2$p.prototype, "beePrefab", [_dec3$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$p.prototype, "beehivePrefab", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$p.prototype, "bigBeePrefab", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$p.prototype, "thornPrefab", [_dec6$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$p.prototype, "thornBallPrefab", [_dec7$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$p.prototype, "airFanPrefab", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$p.prototype, "grassPrefab", [_dec9$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$p.prototype, "balloonPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$p.prototype, "brickPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$p.prototype, "arenaPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$p.prototype, "woodPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$p.prototype, "connectPrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$p.prototype, "mapLinePrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$p.prototype, "batchMapLines", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$p.prototype, "batchPoisonPool", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2$p.prototype, "batchPoisonSurface", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2$p.prototype, "batchWaterPool", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2$p.prototype, "batchDangerArea", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2$p)) || _class$E);

      cclegacy._RF.pop();

      var _dec$F, _class$F;

      cclegacy._RF.push({}, "97f21hkFElI0YdBDCgAkt9+", "Hint", undefined);

      var ccclass$F = _decorator.ccclass;
      var Hint = (_dec$F = ccclass$F('Hint'), _dec$F(_class$F = /*#__PURE__*/function (_Component) {
        _inherits(Hint, _Component);

        var _super = _createSuper(Hint);

        function Hint() {
          var _this;

          _classCallCheck(this, Hint);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.hintLine = null;
          _this.hintHand = null;
          _this.isHintShown = false;
          return _this;
        }

        _createClass(Hint, [{
          key: "showHint",
          value: function showHint(points, showHand) {
            if (this.isHintShown) return;
            this.isHintShown = true;
            this.hintLine = this.createHintLine();
            this.hintLine.active = true;
            this.drawHintLine(this.hintLine, points);

            if (showHand) {
              this.showHand(points);
            }
          }
        }, {
          key: "drawHintLine",
          value: function drawHintLine(line, points) {
            var graphic = line.getComponent(Graphics);

            if (!graphic) {
              throw new Error('drawHintLine: Graphics is null');
            }

            graphic.clear();
            graphic.moveTo(points[0].x, points[0].y);

            var _iterator = _createForOfIteratorHelper(points.slice(1)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var point = _step.value;
                graphic.lineTo(point.x, point.y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            graphic.stroke();
          }
        }, {
          key: "hideHint",
          value: function hideHint() {
            if (this.hintLine) {
              this.hintLine.active = false;
            }

            if (this.hintHand) {
              Tween.stopAllByTarget(this.hintHand);
              this.hintHand.active = false;
            }
          }
        }, {
          key: "showHand",
          value: function showHand(points) {
            var _this2 = this;

            this.hintHand = this.createHintHand(points);
            resources.load(ResourcePaths.IC_HAND_FRAME, SpriteFrame, function (error, sprite) {
              if (error) {
                console.error(error);

                _this2.removeHintHand();

                return;
              }

              _this2.addSpriteToHand(sprite);

              _this2.runHandHintAnimation(points);
            });
          }
        }, {
          key: "addSpriteToHand",
          value: function addSpriteToHand(sprite) {
            var _this$hintHand$getCom;

            if (!this.hintHand) return;
            this.hintHand.addComponent(Sprite).spriteFrame = sprite;
            (_this$hintHand$getCom = this.hintHand.getComponent(UITransform)) === null || _this$hintHand$getCom === void 0 ? void 0 : _this$hintHand$getCom.setAnchorPoint(0.15, 0.9);
          }
        }, {
          key: "runHandHintAnimation",
          value: function runHandHintAnimation(points) {
            var _this3 = this;

            if (!this.hintHand) return;
            var handTween = tween(this.hintHand);
            var sequence = [];

            for (var i = 1; i < points.length; i++) {
              var p0 = points[i - 1];
              var p1 = points[i];
              var dx = p0.x - p1.x;
              var dy = p0.y - p1.y;
              var length = Math.sqrt(dx * dx + dy * dy);
              var moveTween = tween(this.hintHand).to(length / 250, {
                position: new Vec3(p1.x, p1.y)
              });
              sequence.push(moveTween);
            }

            var lastTween = tween(this.hintHand).delay(0.5).call(function () {
              if (!_this3.hintHand) return;

              _this3.hintHand.setPosition(points[0].x, points[0].y);
            });
            sequence.push(lastTween);
            handTween.sequence.apply(handTween, sequence).repeatForever().start();
          }
        }, {
          key: "getIsHintShow",
          value: function getIsHintShow() {
            return this.isHintShown;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.isHintShown = false;
            this.removeHintLine();
            this.removeHintHand();
          }
        }, {
          key: "createHintLine",
          value: function createHintLine() {
            if (this.hintLine) {
              return this.hintLine;
            }

            var hintLine = new Node();
            var graphic = hintLine.addComponent(Graphics);
            graphic.lineWidth = 10;
            graphic.lineCap = Graphics.LineCap.ROUND;
            graphic.lineJoin = Graphics.LineJoin.ROUND;
            var color = new Color();
            Color.fromHEX(color, '#fc03036d');
            graphic.strokeColor = color;
            this.node.insertChild(hintLine, 0);
            return hintLine;
          }
        }, {
          key: "createHintHand",
          value: function createHintHand(points) {
            if (this.hintHand) {
              return this.hintHand;
            }

            var hand = new Node();
            hand.setPosition(points[0].x, points[0].y);
            this.hintHand = hand;
            this.node.addChild(hand);
            return hand;
          }
        }, {
          key: "removeHintLine",
          value: function removeHintLine() {
            if (!this.hintLine) return;
            this.hintLine.destroyAllChildren();
            this.hintLine.removeAllChildren();
            this.hintLine = null;
          }
        }, {
          key: "removeHintHand",
          value: function removeHintHand() {
            if (!this.hintHand) return;
            this.hintHand.destroyAllChildren();
            this.hintHand.removeAllChildren();
            this.hintHand = null;
          }
        }]);

        return Hint;
      }(Component)) || _class$F);

      cclegacy._RF.pop();

      var _dec$G, _class$G;

      cclegacy._RF.push({}, "33281kEO4dMXLCvmfkrwqQM", "CollisionDetectLine", undefined);

      var ccclass$G = _decorator.ccclass;
      var CollisionDetectLine = (_dec$G = ccclass$G('CollisionDetectLine'), _dec$G(_class$G = /*#__PURE__*/function (_BaseObject) {
        _inherits(CollisionDetectLine, _BaseObject);

        var _super = _createSuper(CollisionDetectLine);

        function CollisionDetectLine() {
          _classCallCheck(this, CollisionDetectLine);

          return _super.apply(this, arguments);
        }

        _createClass(CollisionDetectLine, [{
          key: "onLoad",
          value: function onLoad() {
            this.graphic = this.getComponent(Graphics);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.graphic) {
              throw new Error('CollisionDetectLine: Graphics not found');
            }
          }
        }, {
          key: "drawFromTo",
          value: function drawFromTo(fromPoint, toPoint) {
            this.graphic.clear();
            this.graphic.moveTo(fromPoint.x, fromPoint.y);
            this.graphic.lineTo(toPoint.x, toPoint.y);
            this.graphic.stroke();
          }
        }]);

        return CollisionDetectLine;
      }(BaseObject)) || _class$G);

      cclegacy._RF.pop();

      var _dec$H, _dec2$u, _dec3$l, _dec4$a, _dec5$7, _dec6$5, _class$H, _class2$q, _descriptor$o, _descriptor2$e, _descriptor3$7, _descriptor4$4;

      cclegacy._RF.push({}, "00eeawrUitLxLgSANaGHhcv", "LineDrawer", undefined);

      var ccclass$H = _decorator.ccclass,
          property$q = _decorator.property,
          executionOrder$5 = _decorator.executionOrder;
      var LineDrawer = (_dec$H = ccclass$H('LineDrawer'), _dec2$u = executionOrder$5(3), _dec3$l = property$q(Prefab), _dec4$a = property$q(Prefab), _dec5$7 = property$q(Color), _dec6$5 = property$q(CCInteger), _dec$H(_class$H = _dec2$u(_class$H = (_class2$q = /*#__PURE__*/function (_Component) {
        _inherits(LineDrawer, _Component);

        var _super = _createSuper(LineDrawer);

        function LineDrawer() {
          var _this;

          _classCallCheck(this, LineDrawer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "linePrefab", _descriptor$o, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "collisionDetectLinePrefab", _descriptor2$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "transparentColor", _descriptor3$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "minDistance", _descriptor4$4, _assertThisInitialized(_this));

          _this.lastPointer = null;
          _this.currentLine = null;
          _this.collisionDetectLine = null;
          _this.isColliding = false;
          return _this;
        }

        _createClass(LineDrawer, [{
          key: "beginDraw",
          value: function beginDraw(position) {
            this.createLine();
            this.createCollisionDetectLine();
            this.initLine();
            this.lastPointer = null;
            this.isColliding = false;
            this.draw(position);
          }
        }, {
          key: "createLine",
          value: function createLine() {
            var line = instantiate(this.linePrefab);
            if (!(line instanceof Node)) return;
            line.name = ObjectNames.DRAW_LINE;
            var graphics = line.getComponent(Graphics);
            if (!graphics) return;
            this.node.addChild(line);
            this.currentLine = line;
          }
        }, {
          key: "createCollisionDetectLine",
          value: function createCollisionDetectLine() {
            if (!this.currentLine) return;
            var collisionDetectLine = instantiate(this.collisionDetectLinePrefab);
            if (!(collisionDetectLine instanceof Node)) return;
            var graphicsLine = collisionDetectLine.getComponent(Graphics);
            if (!graphicsLine) return;
            var lineGraphics = this.currentLine.getComponent(Graphics);
            if (!lineGraphics) return;
            var lineWidth = lineGraphics.lineWidth,
                strokeColor = lineGraphics.strokeColor;
            graphicsLine.strokeColor = new Color(strokeColor.r, strokeColor.g, strokeColor.b, 128);
            graphicsLine.lineWidth = lineWidth;
            this.node.addChild(collisionDetectLine);
            this.collisionDetectLine = collisionDetectLine;
          }
        }, {
          key: "initLine",
          value: function initLine() {
            var _this$currentLine;

            var lineComponent = (_this$currentLine = this.currentLine) === null || _this$currentLine === void 0 ? void 0 : _this$currentLine.getComponent(Line);
            if (!lineComponent) return;
            lineComponent.sleep();
            lineComponent.init();
          }
        }, {
          key: "draw",
          value: function draw(position) {
            var _this2 = this;

            if (!position) return;
            if (!this.currentLine) return;
            if (!this.collisionDetectLine) return;
            var line = this.currentLine.getComponent(Line);
            if (!line) return;
            var detectLine = this.collisionDetectLine.getComponent(CollisionDetectLine);
            if (!detectLine) return;

            if (this.isPointOverlapWithMap(position)) {
              if (this.lastPointer) {
                if (this.isColliding) {
                  detectLine.drawFromTo(this.lastPointer, position);
                } else {
                  var _points$;

                  var points = this.isCurrentLineOverlapWithMap(position, this.lastPointer);
                  points.sort(function (a, b) {
                    if (_this2.lastPointer == null) return 0;
                    return Vec2.distance(a.point, _this2.lastPointer) - Vec2.distance(b.point, _this2.lastPointer);
                  });
                  var point = (_points$ = points[0]) === null || _points$ === void 0 ? void 0 : _points$.point;
                  if (!point) return;
                  this.isColliding = true;
                  var vec = new Vec2(point.x + this.lastPointer.x, point.y + this.lastPointer.y).normalize();
                  point.x -= vec.x * DRAW_COLLIDER_RADIUS;
                  point.y -= vec.y * DRAW_COLLIDER_RADIUS; //line.drawTo(this.lastPointer.x, this.lastPointer.y, point.x, point.y)
                  //line.storePoints(point.x, point.y)
                  //this.lastPointer = point
                }
              }

              return;
            }

            if (this.lastPointer && this.isCurrentLineOverlapWithMap(position, this.lastPointer).length > 0) {
              detectLine.drawFromTo(this.lastPointer, position);
              return;
            }

            if (!this.lastPointer) {
              this.lastPointer = position.clone();
              var _x = position.x,
                  _y = position.y;
              line.storePoints(_x, _y);
            }

            var _this$lastPointer = this.lastPointer,
                xc = _this$lastPointer.x,
                yc = _this$lastPointer.y;
            var x = position.x,
                y = position.y;
            var dx = xc - x;
            var dy = yc - y;
            if (dx * dx + dy * dy < this.minDistance * this.minDistance) return;
            var dist = Math.sqrt(dx * dx + dy * dy);
            this.lastPointer = position.clone();
            line.drawTo(xc, yc, x, y);
            line.storePoints(x, y);
            var graphic = this.collisionDetectLine.getComponent(Graphics);
            graphic === null || graphic === void 0 ? void 0 : graphic.clear();
            this.isColliding = false;
            return dist;
          }
        }, {
          key: "isPointOverlapWithMap",
          value: function isPointOverlapWithMap(point) {
            return this.getCollision(point).length > 0;
          }
        }, {
          key: "isCurrentLineOverlapWithMap",
          value: function isCurrentLineOverlapWithMap(point1, point2) {
            var radius = DRAW_COLLIDER_RADIUS;

            var _this$getParallelLine = this.getParallelLines(point2, point1, radius),
                leftLine = _this$getParallelLine.leftLine,
                rightLine = _this$getParallelLine.rightLine;

            var midCheck = PhysicsSystem2D.instance.raycast(point2, point1, ERaycast2DType.All).filter(function (c) {
              return c.collider.sensor == false;
            }).filter(function (c) {
              var _c$collider$node$pare;

              return ((_c$collider$node$pare = c.collider.node.parent) === null || _c$collider$node$pare === void 0 ? void 0 : _c$collider$node$pare.name) !== 'rope';
            });
            var leftCheck = PhysicsSystem2D.instance.raycast(leftLine.p1, leftLine.p2, ERaycast2DType.All).filter(function (c) {
              return c.collider.sensor == false;
            }).filter(function (c) {
              var _c$collider$node$pare2;

              return ((_c$collider$node$pare2 = c.collider.node.parent) === null || _c$collider$node$pare2 === void 0 ? void 0 : _c$collider$node$pare2.name) !== 'rope';
            });
            var rightCheck = PhysicsSystem2D.instance.raycast(rightLine.p1, rightLine.p2, ERaycast2DType.All).filter(function (c) {
              return c.collider.sensor == false;
            }).filter(function (c) {
              var _c$collider$node$pare3;

              return ((_c$collider$node$pare3 = c.collider.node.parent) === null || _c$collider$node$pare3 === void 0 ? void 0 : _c$collider$node$pare3.name) !== 'rope';
            });
            return [].concat(_toConsumableArray(midCheck), _toConsumableArray(leftCheck), _toConsumableArray(rightCheck));
          }
        }, {
          key: "endDraw",
          value: function endDraw() {
            if (!this.currentLine) return;
            if (!this.collisionDetectLine) return;
            var line = this.currentLine.getComponent(Line);

            if (!line) {
              console.warn('Line component not found');
              return;
            }

            line.addPhysics();
            line.wake();
            var graphic = this.collisionDetectLine.getComponent(Graphics);

            if (!graphic) {
              console.warn('Graphics component not found');
              return;
            }

            graphic.clear();
            this.lastPointer = null;
            this.isColliding = false;
            this.currentLine = null;
          }
        }, {
          key: "deActivePhysics",
          value: function deActivePhysics() {
            var _this$currentLine2;

            var lineComponent = (_this$currentLine2 = this.currentLine) === null || _this$currentLine2 === void 0 ? void 0 : _this$currentLine2.getComponent(Line);
            if (!lineComponent) return; //! do not sort, it will cause bug

            lineComponent.deActiveColliders();
            lineComponent.sleep();
          }
        }, {
          key: "clearLines",
          value: function clearLines() {
            this.node.destroyAllChildren();
            this.node.removeAllChildren();
          }
        }, {
          key: "getParallelLines",
          value: function getParallelLines(p1, p2, dis) {
            var dx = p2.x - p1.x;
            var dy = p2.y - p1.y;
            var len = math.Vec2.distance(p1, p2);
            var udx = dx / len;
            var udy = dy / len;
            var leftP1 = new Vec2(p1.x - udy * dis, p1.y + udx * dis);
            var rightP1 = new Vec2(p1.x + udy * dis, p1.y - udx * dis);
            var leftP2 = new Vec2(leftP1.x + dx, leftP1.y + dy);
            var rightP2 = new Vec2(rightP1.x + dx, rightP1.y + dy);
            return {
              leftLine: {
                p1: leftP1,
                p2: leftP2
              },
              rightLine: {
                p1: rightP1,
                p2: rightP2
              }
            };
          }
        }, {
          key: "getCollision",
          value: function getCollision(currentPoint) {
            var radius = DRAW_COLLIDER_RADIUS;
            var collider = PhysicsSystem2D.instance.testAABB(new math.Rect(currentPoint.x - radius, currentPoint.y - radius, radius * 2, radius * 2)).filter(function (c) {
              return c.sensor == false;
            }).filter(function (c) {
              var _c$node$parent;

              return ((_c$node$parent = c.node.parent) === null || _c$node$parent === void 0 ? void 0 : _c$node$parent.name) !== 'rope';
            });
            return collider.filter(function (c) {
              if (c instanceof PolygonCollider2D) {
                var point = new Vec3();
                c.node.inverseTransformPoint(point, new Vec3(currentPoint.x, currentPoint.y));
                /* Checking if the point is inside the polygon. */

                return Intersection2D.polygonCircle(c.points, new Vec2(point.x, point.y), radius);
              }

              if (c instanceof CircleCollider2D) {
                var _c$node$getWorldPosit = c.node.getWorldPosition(),
                    xc = _c$node$getWorldPosit.x,
                    yc = _c$node$getWorldPosit.y;

                return Intersection2D.circleCircle(new Vec2(xc, yc + c.worldPosition.y), c.radius, new Vec2(currentPoint.x, currentPoint.y), radius);
              }

              return !c.sensor;
            });
          }
        }]);

        return LineDrawer;
      }(Component), (_descriptor$o = _applyDecoratedDescriptor(_class2$q.prototype, "linePrefab", [_dec3$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$e = _applyDecoratedDescriptor(_class2$q.prototype, "collisionDetectLinePrefab", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$q.prototype, "transparentColor", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color();
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$q.prototype, "minDistance", [_dec6$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2$q)) || _class$H) || _class$H);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "463cfEelRVL4KYgc4n5FJNz", "Map", undefined);

      var MAP = [{
        id: 1,
        map: 1,
        type: 1
      }, {
        id: 2,
        map: 2,
        type: 1
      }, {
        id: 3,
        map: 3,
        type: 1
      }, {
        id: 4,
        map: 8,
        type: 1
      }, {
        id: 5,
        map: 9,
        type: 1
      }, {
        id: 6,
        map: 16,
        type: 1
      }, {
        id: 7,
        map: 4,
        type: 1
      }, {
        id: 8,
        map: 7,
        type: 1
      }, {
        id: 9,
        map: 6,
        type: 1
      }, {
        id: 10,
        map: 18,
        type: 1
      }, {
        id: 11,
        map: 10,
        type: 2
      }, {
        id: 12,
        map: 11,
        type: 2
      }, {
        id: 13,
        map: 12,
        type: 2
      }, {
        id: 14,
        map: 13,
        type: 2
      }, {
        id: 15,
        map: 14,
        type: 2
      }, {
        id: 16,
        map: 15,
        type: 2
      }, {
        id: 17,
        map: 5,
        type: 2
      }, {
        id: 18,
        map: 17,
        type: 2
      }, {
        id: 19,
        map: 19,
        type: 2
      }, {
        id: 20,
        map: 20,
        type: 2
      }, {
        id: 21,
        map: 21,
        type: 3
      }, {
        id: 22,
        map: 22,
        type: 3
      }, {
        id: 23,
        map: 23,
        type: 3
      }, {
        id: 24,
        map: 24,
        type: 3
      }, {
        id: 25,
        map: 25,
        type: 3
      }, {
        id: 26,
        map: 26,
        type: 3
      }, {
        id: 27,
        map: 27,
        type: 3
      }, {
        id: 28,
        map: 28,
        type: 3
      }, {
        id: 29,
        map: 29,
        type: 3
      }, {
        id: 30,
        map: 30,
        type: 3
      }, {
        id: 31,
        map: 31,
        type: 4
      }, {
        id: 32,
        map: 32,
        type: 4
      }, {
        id: 33,
        map: 33,
        type: 4
      }, {
        id: 34,
        map: 34,
        type: 4
      }, {
        id: 35,
        map: 35,
        type: 4
      }, {
        id: 36,
        map: 36,
        type: 4
      }, {
        id: 37,
        map: 37,
        type: 4
      }, {
        id: 38,
        map: 38,
        type: 4
      }, {
        id: 39,
        map: 39,
        type: 4
      }, {
        id: 40,
        map: 40,
        type: 4
      }, {
        id: 41,
        map: 41,
        type: 5
      }, {
        id: 42,
        map: 42,
        type: 5
      }, {
        id: 43,
        map: 43,
        type: 5
      }, {
        id: 44,
        map: 44,
        type: 5
      }, {
        id: 45,
        map: 45,
        type: 5
      }, {
        id: 46,
        map: 46,
        type: 5
      }, {
        id: 47,
        map: 47,
        type: 5
      }, {
        id: 48,
        map: 48,
        type: 5
      }, {
        id: 49,
        map: 49,
        type: 5
      }, {
        id: 50,
        map: 50,
        type: 5
      }, {
        id: 51,
        map: 51,
        type: 6
      }, {
        id: 52,
        map: 52,
        type: 6
      }, {
        id: 53,
        map: 53,
        type: 6
      }, {
        id: 54,
        map: 54,
        type: 6
      }, {
        id: 55,
        map: 55,
        type: 6
      }, {
        id: 56,
        map: 56,
        type: 6
      }, {
        id: 57,
        map: 57,
        type: 6
      }, {
        id: 58,
        map: 58,
        type: 6
      }, {
        id: 59,
        map: 59,
        type: 6
      }, {
        id: 60,
        map: 60,
        type: 6
      }, {
        id: 61,
        map: 61,
        type: 7
      }, {
        id: 62,
        map: 62,
        type: 7
      }, {
        id: 63,
        map: 63,
        type: 7
      }, {
        id: 64,
        map: 64,
        type: 7
      }, {
        id: 65,
        map: 65,
        type: 7
      }, {
        id: 66,
        map: 66,
        type: 7
      }, {
        id: 67,
        map: 67,
        type: 7
      }, {
        id: 68,
        map: 68,
        type: 7
      }, {
        id: 69,
        map: 69,
        type: 7
      }, {
        id: 70,
        map: 70,
        type: 7
      }, {
        id: 71,
        map: 71,
        type: 8
      }, {
        id: 72,
        map: 72,
        type: 8
      }, {
        id: 73,
        map: 73,
        type: 8
      }, {
        id: 74,
        map: 74,
        type: 8
      }, {
        id: 75,
        map: 75,
        type: 8
      }, {
        id: 76,
        map: 76,
        type: 8
      }, {
        id: 77,
        map: 77,
        type: 8
      }, {
        id: 78,
        map: 78,
        type: 8
      }, {
        id: 79,
        map: 79,
        type: 8
      }, {
        id: 80,
        map: 80,
        type: 8
      }, {
        id: 81,
        map: 81,
        type: 9
      }, {
        id: 82,
        map: 82,
        type: 9
      }, {
        id: 83,
        map: 83,
        type: 9
      }, {
        id: 84,
        map: 84,
        type: 9
      }, {
        id: 85,
        map: 85,
        type: 9
      }, {
        id: 86,
        map: 86,
        type: 9
      }, {
        id: 87,
        map: 87,
        type: 9
      }, {
        id: 88,
        map: 88,
        type: 9
      }, {
        id: 89,
        map: 89,
        type: 9
      }, {
        id: 90,
        map: 90,
        type: 9
      }, {
        id: 91,
        map: 91,
        type: 10
      }, {
        id: 92,
        map: 92,
        type: 10
      }, {
        id: 93,
        map: 93,
        type: 10
      }, {
        id: 94,
        map: 94,
        type: 10
      }, {
        id: 95,
        map: 95,
        type: 10
      }, {
        id: 96,
        map: 96,
        type: 10
      }, {
        id: 97,
        map: 97,
        type: 10
      }, {
        id: 98,
        map: 98,
        type: 10
      }, {
        id: 99,
        map: 99,
        type: 10
      }, {
        id: 100,
        map: 100,
        type: 10
      }, {
        id: 101,
        map: 101,
        type: 11
      }, {
        id: 102,
        map: 102,
        type: 11
      }, {
        id: 103,
        map: 103,
        type: 11
      }, {
        id: 104,
        map: 104,
        type: 11
      }, {
        id: 105,
        map: 105,
        type: 11
      }, {
        id: 106,
        map: 106,
        type: 11
      }, {
        id: 107,
        map: 107,
        type: 11
      }, {
        id: 108,
        map: 108,
        type: 11
      }, {
        id: 109,
        map: 109,
        type: 11
      }, {
        id: 110,
        map: 110,
        type: 11
      }, {
        id: 111,
        map: 111,
        type: 12
      }, {
        id: 112,
        map: 112,
        type: 12
      }, {
        id: 113,
        map: 113,
        type: 12
      }, {
        id: 114,
        map: 114,
        type: 12
      }, {
        id: 115,
        map: 115,
        type: 12
      }, {
        id: 116,
        map: 116,
        type: 12
      }, {
        id: 117,
        map: 117,
        type: 12
      }, {
        id: 118,
        map: 118,
        type: 12
      }, {
        id: 119,
        map: 119,
        type: 12
      }, {
        id: 120,
        map: 120,
        type: 12
      }, {
        id: 121,
        map: 121,
        type: 13
      }, {
        id: 122,
        map: 122,
        type: 13
      }, {
        id: 123,
        map: 123,
        type: 13
      }, {
        id: 124,
        map: 124,
        type: 13
      }, {
        id: 125,
        map: 125,
        type: 13
      }, {
        id: 126,
        map: 126,
        type: 13
      }, {
        id: 127,
        map: 127,
        type: 13
      }, {
        id: 128,
        map: 128,
        type: 13
      }, {
        id: 129,
        map: 129,
        type: 13
      }, {
        id: 130,
        map: 130,
        type: 13
      }, {
        id: 131,
        map: 131,
        type: 14
      }, {
        id: 132,
        map: 132,
        type: 14
      }, {
        id: 133,
        map: 133,
        type: 14
      }, {
        id: 134,
        map: 134,
        type: 14
      }, {
        id: 135,
        map: 135,
        type: 14
      }, {
        id: 136,
        map: 136,
        type: 14
      }, {
        id: 137,
        map: 137,
        type: 14
      }, {
        id: 138,
        map: 138,
        type: 14
      }, {
        id: 139,
        map: 139,
        type: 14
      }, {
        id: 140,
        map: 140,
        type: 14
      }, {
        id: 141,
        map: 141,
        type: 15
      }, {
        id: 142,
        map: 142,
        type: 15
      }, {
        id: 143,
        map: 143,
        type: 15
      }, {
        id: 144,
        map: 144,
        type: 15
      }, {
        id: 145,
        map: 145,
        type: 15
      }, {
        id: 146,
        map: 146,
        type: 15
      }, {
        id: 147,
        map: 147,
        type: 15
      }, {
        id: 148,
        map: 148,
        type: 15
      }, {
        id: 149,
        map: 149,
        type: 15
      }, {
        id: 150,
        map: 150,
        type: 15
      }, {
        id: 151,
        map: 184,
        type: 16
      }, {
        id: 152,
        map: 185,
        type: 16
      }, {
        id: 153,
        map: 186,
        type: 16
      }, {
        id: 154,
        map: 187,
        type: 16
      }, {
        id: 155,
        map: 188,
        type: 16
      }, {
        id: 156,
        map: 189,
        type: 16
      }, {
        id: 157,
        map: 190,
        type: 16
      }, {
        id: 158,
        map: 191,
        type: 16
      }, {
        id: 159,
        map: 192,
        type: 16
      }, {
        id: 160,
        map: 193,
        type: 16
      }, {
        id: 161,
        map: 194,
        type: 17
      }, {
        id: 162,
        map: 195,
        type: 17
      }, {
        id: 163,
        map: 196,
        type: 17
      }, {
        id: 164,
        map: 197,
        type: 17
      }, {
        id: 165,
        map: 198,
        type: 17
      }, {
        id: 166,
        map: 199,
        type: 17
      }, {
        id: 167,
        map: 200,
        type: 17
      }, {
        id: 168,
        map: 167,
        type: 17
      }, {
        id: 169,
        map: 168,
        type: 17
      }, {
        id: 170,
        map: 169,
        type: 17
      }, {
        id: 171,
        map: 170,
        type: 18
      }, {
        id: 172,
        map: 171,
        type: 18
      }, {
        id: 173,
        map: 172,
        type: 18
      }, {
        id: 174,
        map: 173,
        type: 18
      }, {
        id: 175,
        map: 174,
        type: 18
      }, {
        id: 176,
        map: 175,
        type: 18
      }, {
        id: 177,
        map: 176,
        type: 18
      }, {
        id: 178,
        map: 177,
        type: 18
      }, {
        id: 179,
        map: 178,
        type: 18
      }, {
        id: 180,
        map: 179,
        type: 18
      }, {
        id: 181,
        map: 180,
        type: 19
      }, {
        id: 182,
        map: 181,
        type: 19
      }, {
        id: 183,
        map: 182,
        type: 19
      }, {
        id: 184,
        map: 183,
        type: 19
      }, {
        id: 185,
        map: 151,
        type: 19
      }, {
        id: 186,
        map: 152,
        type: 19
      }, {
        id: 187,
        map: 153,
        type: 19
      }, {
        id: 188,
        map: 154,
        type: 19
      }, {
        id: 189,
        map: 155,
        type: 19
      }, {
        id: 190,
        map: 156,
        type: 19
      }, {
        id: 191,
        map: 157,
        type: 20
      }, {
        id: 192,
        map: 158,
        type: 20
      }, {
        id: 193,
        map: 159,
        type: 20
      }, {
        id: 194,
        map: 160,
        type: 20
      }, {
        id: 195,
        map: 161,
        type: 20
      }, {
        id: 196,
        map: 162,
        type: 20
      }, {
        id: 197,
        map: 163,
        type: 20
      }, {
        id: 198,
        map: 164,
        type: 20
      }, {
        id: 199,
        map: 165,
        type: 20
      }, {
        id: 200,
        map: 166,
        type: 20
      }, {
        id: 201,
        map: 201,
        type: 21
      }, {
        id: 202,
        map: 202,
        type: 21
      }, {
        id: 203,
        map: 203,
        type: 21
      }, {
        id: 204,
        map: 204,
        type: 21
      }, {
        id: 205,
        map: 205,
        type: 21
      }, {
        id: 206,
        map: 206,
        type: 21
      }, {
        id: 207,
        map: 207,
        type: 21
      }, {
        id: 208,
        map: 208,
        type: 21
      }, {
        id: 209,
        map: 209,
        type: 21
      }, {
        id: 210,
        map: 210,
        type: 21
      }, {
        id: 211,
        map: 211,
        type: 22
      }, {
        id: 212,
        map: 212,
        type: 22
      }, {
        id: 213,
        map: 213,
        type: 22
      }, {
        id: 214,
        map: 214,
        type: 22
      }, {
        id: 215,
        map: 215,
        type: 22
      }, {
        id: 216,
        map: 216,
        type: 22
      }, {
        id: 217,
        map: 217,
        type: 22
      }, {
        id: 218,
        map: 218,
        type: 22
      }, {
        id: 219,
        map: 219,
        type: 22
      }, {
        id: 220,
        map: 220,
        type: 22
      }, {
        id: 221,
        map: 221,
        type: 23
      }, {
        id: 222,
        map: 222,
        type: 23
      }, {
        id: 223,
        map: 223,
        type: 23
      }, {
        id: 224,
        map: 224,
        type: 23
      }, {
        id: 225,
        map: 225,
        type: 23
      }, {
        id: 226,
        map: 226,
        type: 23
      }, {
        id: 227,
        map: 227,
        type: 23
      }, {
        id: 228,
        map: 228,
        type: 23
      }, {
        id: 229,
        map: 229,
        type: 23
      }, {
        id: 230,
        map: 230,
        type: 23
      }, {
        id: 231,
        map: 231,
        type: 24
      }, {
        id: 232,
        map: 232,
        type: 24
      }, {
        id: 233,
        map: 233,
        type: 24
      }, {
        id: 234,
        map: 234,
        type: 24
      }, {
        id: 235,
        map: 235,
        type: 24
      }, {
        id: 236,
        map: 236,
        type: 24
      }, {
        id: 237,
        map: 237,
        type: 24
      }, {
        id: 238,
        map: 238,
        type: 24
      }, {
        id: 239,
        map: 239,
        type: 24
      }, {
        id: 240,
        map: 240,
        type: 24
      }, {
        id: 241,
        map: 241,
        type: 25
      }, {
        id: 242,
        map: 242,
        type: 25
      }, {
        id: 243,
        map: 243,
        type: 25
      }, {
        id: 244,
        map: 244,
        type: 25
      }, {
        id: 245,
        map: 245,
        type: 25
      }, {
        id: 246,
        map: 246,
        type: 25
      }, {
        id: 247,
        map: 247,
        type: 25
      }, {
        id: 248,
        map: 248,
        type: 25
      }, {
        id: 249,
        map: 249,
        type: 25
      }, {
        id: 250,
        map: 250,
        type: 25
      }, {
        id: 251,
        map: 251,
        type: 26
      }, {
        id: 252,
        map: 252,
        type: 26
      }, {
        id: 253,
        map: 253,
        type: 26
      }, {
        id: 254,
        map: 254,
        type: 26
      }, {
        id: 255,
        map: 255,
        type: 26
      }, {
        id: 256,
        map: 256,
        type: 26
      }, {
        id: 257,
        map: 257,
        type: 26
      }, {
        id: 258,
        map: 258,
        type: 26
      }, {
        id: 259,
        map: 259,
        type: 26
      }, {
        id: 260,
        map: 260,
        type: 26
      }, {
        id: 261,
        map: 261,
        type: 27
      }, {
        id: 262,
        map: 262,
        type: 27
      }, {
        id: 263,
        map: 263,
        type: 27
      }, {
        id: 264,
        map: 264,
        type: 27
      }, {
        id: 265,
        map: 265,
        type: 27
      }, {
        id: 266,
        map: 266,
        type: 27
      }, {
        id: 267,
        map: 267,
        type: 27
      }, {
        id: 268,
        map: 268,
        type: 27
      }, {
        id: 269,
        map: 269,
        type: 27
      }, {
        id: 270,
        map: 270,
        type: 27
      }, {
        id: 271,
        map: 271,
        type: 28
      }, {
        id: 272,
        map: 272,
        type: 28
      }, {
        id: 273,
        map: 273,
        type: 28
      }, {
        id: 274,
        map: 274,
        type: 28
      }, {
        id: 275,
        map: 275,
        type: 28
      }, {
        id: 276,
        map: 276,
        type: 28
      }, {
        id: 277,
        map: 277,
        type: 28
      }, {
        id: 278,
        map: 278,
        type: 28
      }, {
        id: 279,
        map: 279,
        type: 28
      }, {
        id: 280,
        map: 280,
        type: 28
      }, {
        id: 281,
        map: 281,
        type: 29
      }, {
        id: 282,
        map: 282,
        type: 29
      }, {
        id: 283,
        map: 283,
        type: 29
      }, {
        id: 284,
        map: 284,
        type: 29
      }, {
        id: 285,
        map: 285,
        type: 29
      }, {
        id: 286,
        map: 286,
        type: 29
      }, {
        id: 287,
        map: 287,
        type: 29
      }, {
        id: 288,
        map: 288,
        type: 29
      }, {
        id: 289,
        map: 289,
        type: 29
      }, {
        id: 290,
        map: 290,
        type: 29
      }, {
        id: 291,
        map: 291,
        type: 30
      }, {
        id: 292,
        map: 292,
        type: 30
      }, {
        id: 293,
        map: 293,
        type: 30
      }, {
        id: 294,
        map: 294,
        type: 30
      }, {
        id: 295,
        map: 295,
        type: 30
      }, {
        id: 296,
        map: 296,
        type: 30
      }, {
        id: 297,
        map: 297,
        type: 30
      }, {
        id: 298,
        map: 298,
        type: 30
      }, {
        id: 299,
        map: 299,
        type: 30
      }, {
        id: 300,
        map: 300,
        type: 30
      }, {
        id: 301,
        map: 301,
        type: 31
      }, {
        id: 302,
        map: 302,
        type: 31
      }, {
        id: 303,
        map: 303,
        type: 31
      }, {
        id: 304,
        map: 304,
        type: 31
      }, {
        id: 305,
        map: 305,
        type: 31
      }, {
        id: 306,
        map: 306,
        type: 31
      }, {
        id: 307,
        map: 307,
        type: 31
      }, {
        id: 308,
        map: 308,
        type: 31
      }, {
        id: 309,
        map: 309,
        type: 31
      }, {
        id: 310,
        map: 310,
        type: 31
      }, {
        id: 311,
        map: 311,
        type: 32
      }, {
        id: 312,
        map: 312,
        type: 32
      }, {
        id: 313,
        map: 313,
        type: 32
      }, {
        id: 314,
        map: 314,
        type: 32
      }, {
        id: 315,
        map: 315,
        type: 32
      }, {
        id: 316,
        map: 316,
        type: 32
      }, {
        id: 317,
        map: 317,
        type: 32
      }, {
        id: 318,
        map: 318,
        type: 32
      }, {
        id: 319,
        map: 319,
        type: 32
      }, {
        id: 320,
        map: 320,
        type: 32
      }, {
        id: 321,
        map: 321,
        type: 33
      }, {
        id: 322,
        map: 322,
        type: 33
      }, {
        id: 323,
        map: 323,
        type: 33
      }, {
        id: 324,
        map: 324,
        type: 33
      }, {
        id: 325,
        map: 325,
        type: 33
      }];

      cclegacy._RF.pop();

      var _dec$I, _class$I;

      cclegacy._RF.push({}, "45df2RUUZZNhaXqOADOV0HC", "MapLoader", undefined);

      var ccclass$I = _decorator.ccclass;
      var MapLoader = (_dec$I = ccclass$I('MapLoader'), _dec$I(_class$I = /*#__PURE__*/function (_Component) {
        _inherits(MapLoader, _Component);

        var _super = _createSuper(MapLoader);

        function MapLoader() {
          _classCallCheck(this, MapLoader);

          return _super.apply(this, arguments);
        }

        _createClass(MapLoader, [{
          key: "paddingZero",
          value: function paddingZero(str, length) {
            return Array(length - str.length).fill('0').join('') + str;
          }
        }, {
          key: "getMapByLevel",
          value: function getMapByLevel(level) {
            var map = MAP.find(function (map) {
              return map.id == level;
            });
            if (map) return map.map;
            return 1;
          }
        }, {
          key: "preloadLevel",
          value: function preloadLevel(level) {
            var mapId = this.getMapByLevel(level);
            var levelStr = this.paddingZero(mapId.toString(), 3);
            resources.preload("".concat(ResourcePaths.MAP_JSON_PREFIX).concat(levelStr), JsonAsset);
          }
        }, {
          key: "loadLevel",
          value: function loadLevel(level, callback) {
            var mapId = this.getMapByLevel(level);
            var levelStr = this.paddingZero(mapId.toString(), 3);
            resources.load("".concat(ResourcePaths.MAP_JSON_PREFIX).concat(levelStr), JsonAsset, callback);
          }
        }, {
          key: "isLevelAlreadyLoaded",
          value: function isLevelAlreadyLoaded(level) {
            var mapId = this.getMapByLevel(level);
            var levelStr = this.paddingZero(mapId.toString(), 3);
            return resources.getInfoWithPath("".concat(ResourcePaths.MAP_JSON_PREFIX).concat(levelStr)) !== null;
          }
        }]);

        return MapLoader;
      }(Component)) || _class$I);

      cclegacy._RF.pop();

      var _dec$J, _class$J;

      cclegacy._RF.push({}, "8d3c7nuQGRNgpZcqAOCJY6O", "InkCapacityController", undefined);

      var ccclass$J = _decorator.ccclass;
      var InkCapacityController = (_dec$J = ccclass$J('InkCapacityController'), _dec$J(_class$J = /*#__PURE__*/function (_Component) {
        _inherits(InkCapacityController, _Component);

        var _super = _createSuper(InkCapacityController);

        function InkCapacityController() {
          var _this;

          _classCallCheck(this, InkCapacityController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.maxInkLevel = 0;
          _this.currentInkLevel = 0;
          return _this;
        }

        _createClass(InkCapacityController, [{
          key: "init",
          value: function init(inkData) {
            var inkLength = this.getDrawLength(inkData);
            this.maxInkLevel = inkLength;
            this.currentInkLevel = inkLength;
          }
        }, {
          key: "getCurrentInkLevel",
          value: function getCurrentInkLevel() {
            return Math.floor(this.currentInkLevel);
          }
        }, {
          key: "addInkLevel",
          value: function addInkLevel(volume) {
            var newVolume = this.currentInkLevel + volume;
            this.setInkLevel(newVolume);
          }
        }, {
          key: "removeInkLevel",
          value: function removeInkLevel(volume) {
            var newVolume = this.currentInkLevel - volume;
            this.setInkLevel(newVolume);
          }
        }, {
          key: "setInkLevel",
          value: function setInkLevel(inkLevel) {
            this.currentInkLevel = inkLevel;

            if (this.currentInkLevel < 0) {
              this.currentInkLevel = 0;
            } else if (this.currentInkLevel > this.maxInkLevel) {
              this.currentInkLevel = this.maxInkLevel;
            }
          }
        }, {
          key: "isInkEmpty",
          value: function isInkEmpty() {
            return this.currentInkLevel <= 0;
          }
        }, {
          key: "getMaxInkLevel",
          value: function getMaxInkLevel() {
            return this.maxInkLevel;
          }
        }, {
          key: "getInkLevelPercentage",
          value: function getInkLevelPercentage() {
            return this.currentInkLevel / this.maxInkLevel * 100;
          }
        }, {
          key: "getStarRating",
          value: function getStarRating() {
            var maxStars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
            var starStep = this.maxInkLevel / maxStars;
            var stars = Math.ceil(this.getCurrentInkLevel() / starStep);
            return stars == 0 ? 1 : stars;
          }
        }, {
          key: "getDrawLength",
          value: function getDrawLength(inkData) {
            var length = 0;

            for (var i = 1; i < inkData.length; i++) {
              var p0 = inkData[i - 1];
              var p1 = inkData[i];
              var dx = p0.x - p1.x;
              var dy = p0.y - p1.y;
              length += Math.sqrt(dx * dx + dy * dy);
            }

            return length * 3;
          }
        }]);

        return InkCapacityController;
      }(Component)) || _class$J);

      cclegacy._RF.pop();

      var _dec$K, _class$K;

      cclegacy._RF.push({}, "014cbNey8JEV4aPhDm9R5W4", "InputController", undefined);

      var ccclass$K = _decorator.ccclass;
      var InputController = (_dec$K = ccclass$K('InputController'), _dec$K(_class$K = /*#__PURE__*/function (_Component) {
        _inherits(InputController, _Component);

        var _super = _createSuper(InputController);

        function InputController() {
          var _this;

          _classCallCheck(this, InputController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.pointerDownOutSideCanvas = false;

          _this.handleElementPointerDown = function () {
            _this.pointerDownOutSideCanvas = true;
          };

          _this.handleElementPointerUp = function (_ev) {
            console.log(_assertThisInitialized(_this));

            _this.onTouchEnd();

            _this.pointerDownOutSideCanvas = false;
          };

          _this.onTouchStart = function (pointer) {
            _this.node.scene.emit(GameplayEvents.GAME_START, {
              pointer: pointer
            });
          };

          _this.onTouchMove = function (pointer) {
            if (_this.pointerDownOutSideCanvas) {
              _this.node.scene.emit(GameplayEvents.GAME_START, {
                pointer: pointer
              });

              _this.pointerDownOutSideCanvas = false;
              return;
            }

            _this.node.scene.emit(GameplayEvents.DRAWING, {
              pointer: pointer
            });
          };

          _this.onTouchEnd = function (_pointer) {
            _this.node.scene.emit(GameplayEvents.BEE_ATTACK);
          };

          return _this;
        }

        _createClass(InputController, [{
          key: "onLoad",
          value: function onLoad() {
            this.listenInputEvents();
          }
        }, {
          key: "listenInputEvents",
          value: function listenInputEvents() {
            if (sys.os == sys.OS.WINDOWS || sys.os == sys.OS.OSX) {
              document.addEventListener('pointerup', this.handleElementPointerUp);
              document.addEventListener('pointerdown', this.handleElementPointerDown);
              this.node.on(Node.EventType.MOUSE_DOWN, this.onTouchStart);
              this.node.on(Node.EventType.MOUSE_MOVE, this.onTouchMove);
              this.node.on(Node.EventType.MOUSE_UP, this.onTouchEnd);
            } else {
              this.node.on(Node.EventType.TOUCH_START, this.onTouchStart);
              this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove);
              this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd);
              this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd);
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (sys.os == sys.OS.WINDOWS || sys.os == sys.OS.OSX) {
              document.removeEventListener('pointerup', this.handleElementPointerUp);
              document.removeEventListener('pointerdown', this.handleElementPointerDown);
              this.node.off(Node.EventType.MOUSE_DOWN, this.onTouchStart);
              this.node.off(Node.EventType.MOUSE_MOVE, this.onTouchMove);
              this.node.off(Node.EventType.MOUSE_UP, this.onTouchEnd);
            } else {
              this.node.off(Node.EventType.TOUCH_START, this.onTouchStart);
              this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove);
              this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd);
              this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd);
            }
          }
        }]);

        return InputController;
      }(Component)) || _class$K);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "e6116mseMNPD6VcLUtkvez6", "BaseState", undefined);

      var BaseState = /*#__PURE__*/function () {
        function BaseState(manager) {
          _classCallCheck(this, BaseState);

          this.game = null;
          this.data = {};
          this.game = manager.node.getComponent(Gameplay);

          if (!this.game) {
            throw new Error('Gameplay component not found');
          }

          this.manager = manager;
          this.updateStateData();
          this.logDebug();
        }

        _createClass(BaseState, [{
          key: "logDebug",
          value: function logDebug() {
            var stateName = this.constructor.name;
            console.info("[STATE] ".concat(stateName), this.data);
          }
        }, {
          key: "updateStateData",
          value: function updateStateData() {
            if (!this.game) return;
            var gameData = this.game.getGameData();
            if (!gameData) return;
            this.data = gameData; // console.info('[STATE] updateStateData', this.data)
          }
        }, {
          key: "updateGameData",
          value: function updateGameData(data) {
            var _this$game;

            (_this$game = this.game) === null || _this$game === void 0 ? void 0 : _this$game.setGameData(data);
          }
        }]);

        return BaseState;
      }();

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "71778iMCmVDQKkpW1Ag0dZz", "DrawingState", undefined);

      var DrawingState = /*#__PURE__*/function (_BaseState) {
        _inherits(DrawingState, _BaseState);

        var _super = _createSuper(DrawingState);

        function DrawingState(manager) {
          var _this;

          _classCallCheck(this, DrawingState);

          _this = _super.call(this, manager);
          _this.dist = 0;
          _this.isEmptyDraw = false;

          _this.initDrawer();

          return _this;
        }

        _createClass(DrawingState, [{
          key: "load",
          value: function load() {// Don't allow load in drawing state
          }
        }, {
          key: "ready",
          value: function ready() {
            var state = new ReadyState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "draw",
          value: function draw() {
            if (!this.isEmptyDraw) return; //Reset state if user has not drawn anything from last touch

            var state = new DrawingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "attack",
          value: function attack() {
            var _this$game;

            var currentInkPercentage = ((_this$game = this.game) === null || _this$game === void 0 ? void 0 : _this$game.inkCapacityController.getInkLevelPercentage()) || 0;

            if (currentInkPercentage === 100) {
              var _this$game2;

              (_this$game2 = this.game) === null || _this$game2 === void 0 ? void 0 : _this$game2.lineDrawer.endDraw();
              this.isEmptyDraw = true;
              return;
            }

            var state = new AttackingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "escape",
          value: function escape() {// Don't allow win in drawing state
          }
        }, {
          key: "death",
          value: function death() {// Don't allow lose in drawing state
          }
        }, {
          key: "finish",
          value: function finish() {// Don't allow finish in drawing state
          }
        }, {
          key: "update",
          value: function update() {
            //Disable update until drawing state reset if empty draw
            if (this.isEmptyDraw) return;

            if (this.isInkEmpty()) {
              var _this$game3;

              (_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : _this$game3.node.scene.emit(GameplayEvents.BEE_ATTACK);
              return;
            }

            this.updateStateData();
            this.drawLines();
            this.updateInkLevel();
            this.updateProgressBar();
          }
        }, {
          key: "initDrawer",
          value: function initDrawer() {
            var _this$game4;

            if (!((_this$game4 = this.game) !== null && _this$game4 !== void 0 && _this$game4.lineDrawer)) return;
            var pointer = this.data.pointer;
            this.game.lineDrawer.beginDraw(pointer.getUILocation());
            this.playSound('sounds/button-click');
          }
        }, {
          key: "isInkEmpty",
          value: function isInkEmpty() {
            if (!this.game) return false;
            return this.game.inkCapacityController.isInkEmpty();
          }
        }, {
          key: "drawLines",
          value: function drawLines() {
            var _this$game5;

            if (!((_this$game5 = this.game) !== null && _this$game5 !== void 0 && _this$game5.lineDrawer)) return;
            var pointer = this.data.pointer;
            var position = pointer.getUILocation();
            this.dist = this.game.lineDrawer.draw(position) || 0;

            if (this.dist > 0) {
              var listSounds = ['sounds/writing-1', 'sounds/writing-2', 'sounds/writing-3', 'sounds/writing-4'];
              var randomSoundKey = listSounds[Math.floor(Math.random() * listSounds.length)];
              this.playSound(randomSoundKey, {
                checkList: listSounds
              });
            }
          }
        }, {
          key: "updateInkLevel",
          value: function updateInkLevel() {
            var _this$game6;

            (_this$game6 = this.game) === null || _this$game6 === void 0 ? void 0 : _this$game6.inkCapacityController.removeInkLevel(this.dist);
          }
        }, {
          key: "updateProgressBar",
          value: function updateProgressBar() {
            if (!this.game) return;
            var stars = this.game.inkCapacityController.getStarRating();
            this.game.uiManager.setProgressStars(stars);
            var percentage = this.game.inkCapacityController.getInkLevelPercentage();
            this.game.uiManager.setProgressBarPercentage(percentage);
          }
        }, {
          key: "playSound",
          value: function playSound(name, options) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name, options);
          }
        }]);

        return DrawingState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "d600e+7dHhGOYCGrcOjxVcl", "EscapeState", undefined);

      var _GameCore$5 = GameCore,
          Events$5 = _GameCore$5.Events;
      var _globalThis$game$3 = globalThis.game,
          player$3 = _globalThis$game$3.player,
          event$4 = _globalThis$game$3.event;

      var EscapeState = /*#__PURE__*/function (_BaseState) {
        _inherits(EscapeState, _BaseState);

        var _super = _createSuper(EscapeState);

        function EscapeState(manager) {
          var _this$game;

          var _this;

          _classCallCheck(this, EscapeState);

          _this = _super.call(this, manager);

          _this.disableUI();

          _this.stopAllSounds();

          _this.vibrateDevice();

          _this.makeDogesSmile();

          _this.pauseCountdown();

          _this.showCompletedMark();

          _this.updatePlayerProgress();

          _this.stopBeeBehavior();

          (_this$game = _this.game) === null || _this$game === void 0 ? void 0 : _this$game.scheduleOnce(function () {
            _this.sleepObjects();

            _this.showWiningScreen();

            _this.manager.finish();
          }, 0.5);

          _this.playSound('sounds/level-pass');

          _this.stopSound('sounds/bee-flying');

          return _this;
        }

        _createClass(EscapeState, [{
          key: "load",
          value: function load() {// Don't allow load in escape state
          }
        }, {
          key: "ready",
          value: function ready() {// Don't allow ready in escape state
          }
        }, {
          key: "draw",
          value: function draw() {// Don't draw again in escape state
          }
        }, {
          key: "attack",
          value: function attack() {// Don't allow attack in escape state
          }
        }, {
          key: "escape",
          value: function escape() {// This is escape state, do nothing
          }
        }, {
          key: "death",
          value: function death() {// Don't allow lose in escape state
          }
        }, {
          key: "finish",
          value: function finish() {
            var state = new FinishState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "disableUI",
          value: function disableUI() {
            var _this$game2;

            (_this$game2 = this.game) === null || _this$game2 === void 0 ? void 0 : _this$game2.uiManager.disableUI();
          }
        }, {
          key: "stopBeeBehavior",
          value: function stopBeeBehavior() {
            var _this$game3, _this$game3$gameObjec;

            (_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : (_this$game3$gameObjec = _this$game3.gameObjects) === null || _this$game3$gameObjec === void 0 ? void 0 : _this$game3$gameObjec.stopBeeBehavior();
          }
        }, {
          key: "sleepObjects",
          value: function sleepObjects() {
            var _this$game4, _this$game4$lineDrawe, _this$game5, _this$game5$gameObjec;

            (_this$game4 = this.game) === null || _this$game4 === void 0 ? void 0 : (_this$game4$lineDrawe = _this$game4.lineDrawer) === null || _this$game4$lineDrawe === void 0 ? void 0 : _this$game4$lineDrawe.deActivePhysics();
            (_this$game5 = this.game) === null || _this$game5 === void 0 ? void 0 : (_this$game5$gameObjec = _this$game5.gameObjects) === null || _this$game5$gameObjec === void 0 ? void 0 : _this$game5$gameObjec.sleepObjects();
          }
        }, {
          key: "stopAllSounds",
          value: function stopAllSounds() {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.stopAll();
          }
        }, {
          key: "makeDogesSmile",
          value: function makeDogesSmile() {
            var _this$game6;

            if (!((_this$game6 = this.game) !== null && _this$game6 !== void 0 && _this$game6.gameObjects)) return;
            var gameObjects = this.game.gameObjects;
            var doges = gameObjects.getComponentsInChildren(Doge);
            doges.forEach(function (doge) {
              doge.smile();
              doge.setEnable(false);
            });
          }
        }, {
          key: "vibrateDevice",
          value: function vibrateDevice() {
            var _find2, _find2$getComponent;

            (_find2 = find('Vibrate')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Vibrate)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.vibrate(500);
          }
        }, {
          key: "pauseCountdown",
          value: function pauseCountdown() {
            var _this$game7;

            (_this$game7 = this.game) === null || _this$game7 === void 0 ? void 0 : _this$game7.uiManager.pauseCountdown();
          }
        }, {
          key: "showCompletedMark",
          value: function showCompletedMark() {
            var _this$game8;

            (_this$game8 = this.game) === null || _this$game8 === void 0 ? void 0 : _this$game8.uiManager.showCompletedMark();
          }
        }, {
          key: "updatePlayerProgress",
          value: function updatePlayerProgress() {
            if (!this.game) return;
            var level = this.data.level;
            if (!level) return;
            var inkCapacityController = this.game.inkCapacityController;
            var stars = inkCapacityController.getStarRating();
            var gameData = player$3.getGameData();
            if (!gameData) return;
            var preStars = gameData.levelProgress[level] || 0;
            var totalLevel = gameData.totalLevel;

            var newGameData = _objectSpread2({}, gameData);

            if (level >= totalLevel) {
              newGameData.passAllLevels = true;
            } else if (level < gameData.level) {
              newGameData.level = level + 1;
            }

            var maxStars = Math.max(preStars, stars);
            newGameData.levelProgress[level] = maxStars;
            player$3.setGameData(newGameData);
          }
        }, {
          key: "showWiningScreen",
          value: function showWiningScreen() {
            if (!this.game) return;
            var level = this.data.level;
            var stars = this.game.inkCapacityController.getStarRating();
            event$4.emit(Events$5.OPEN_SCREEN, {
              screenName: ScreenKeys.WINNING_SCREEN,
              screenData: {
                level: level,
                stars: stars
              }
            });
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find3, _find3$getComponent;

            (_find3 = find('Sound')) === null || _find3 === void 0 ? void 0 : (_find3$getComponent = _find3.getComponent(Sound)) === null || _find3$getComponent === void 0 ? void 0 : _find3$getComponent.play(name);
          }
        }, {
          key: "stopSound",
          value: function stopSound(name) {
            var _find4, _find4$getComponent;

            (_find4 = find('Sound')) === null || _find4 === void 0 ? void 0 : (_find4$getComponent = _find4.getComponent(Sound)) === null || _find4$getComponent === void 0 ? void 0 : _find4$getComponent.stop(name);
          }
        }]);

        return EscapeState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "5ef69tJ5eNNv7o22H/XfSD2", "ReadyState", undefined);

      var _GameCore$6 = GameCore,
          Events$6 = _GameCore$6.Events;
      var _globalThis$game$4 = globalThis.game,
          player$4 = _globalThis$game$4.player,
          match = _globalThis$game$4.match,
          analytics$1 = _globalThis$game$4.analytics,
          event$5 = _globalThis$game$4.event;

      var ReadyState = /*#__PURE__*/function (_BaseState) {
        _inherits(ReadyState, _BaseState);

        var _super = _createSuper(ReadyState);

        function ReadyState(manager) {
          var _this;

          _classCallCheck(this, ReadyState);

          _this = _super.call(this, manager);
          _this.isFirstReady = true;

          _this.enableUI();

          _this.stopAllSounds();

          _this.turnUpBackgroundMusic();

          _this.clearHint();

          _this.clearGameObjects();

          _this.createGameObjects();

          _this.initInkCapacity();

          _this.initCountdown();

          _this.updateHeader();

          _this.showTutorialUI();

          _this.startMatchAsync();

          _this.logAnalytics();

          _this.closeLoadingScreen();

          _this.startGameAsync();

          return _this;
        } // ? Close fb loading screen after first level initialized


        _createClass(ReadyState, [{
          key: "startGameAsync",
          value: function () {
            var _startGameAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;

                    if (this.isFirstReady) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return FBInstant.startGameAsync();

                  case 5:
                    this.isFirstReady = false;
                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    console.warn('FBInstant.startGameAsync: error', _context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 8]]);
            }));

            function startGameAsync() {
              return _startGameAsync.apply(this, arguments);
            }

            return startGameAsync;
          }()
        }, {
          key: "load",
          value: function load() {
            // ? Allow load by dev tools
            var state = new LoadingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "ready",
          value: function ready() {// This is ready state, do nothing
          }
        }, {
          key: "draw",
          value: function draw() {
            var state = new DrawingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "attack",
          value: function attack() {// Don't allow attack in ready state
          }
        }, {
          key: "escape",
          value: function escape() {
            // ? Allow escape by skip level feature
            var state = new EscapeState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "death",
          value: function death() {
            // ? Allow death by dev tools
            var state = new DeathState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "finish",
          value: function finish() {// Don't allow finish in ready state
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$5.emit(Events$6.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "enableUI",
          value: function enableUI() {
            var _this$game;

            (_this$game = this.game) === null || _this$game === void 0 ? void 0 : _this$game.uiManager.enableUI();
          }
        }, {
          key: "clearHint",
          value: function clearHint() {
            var _this$game2, _this$game2$hint;

            (_this$game2 = this.game) === null || _this$game2 === void 0 ? void 0 : (_this$game2$hint = _this$game2.hint) === null || _this$game2$hint === void 0 ? void 0 : _this$game2$hint.reset();
          }
        }, {
          key: "stopAllSounds",
          value: function stopAllSounds() {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.stopAll();
          }
        }, {
          key: "turnUpBackgroundMusic",
          value: function turnUpBackgroundMusic() {
            var _find2, _find2$getComponent;

            (_find2 = find('Music')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Music)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.setVolume(0.8);
          }
        }, {
          key: "clearGameObjects",
          value: function clearGameObjects() {
            var _this$game3, _this$game4;

            if (!((_this$game3 = this.game) !== null && _this$game3 !== void 0 && _this$game3.lineDrawer)) return;
            if (!((_this$game4 = this.game) !== null && _this$game4 !== void 0 && _this$game4.gameObjects)) return;
            this.game.lineDrawer.clearLines();
            this.game.gameObjects.clearObjects();
          }
        }, {
          key: "createGameObjects",
          value: function createGameObjects() {
            var _this$game5, _this$game5$gameObjec;

            var levelData = this.data.levelData;
            if (!levelData) return;
            (_this$game5 = this.game) === null || _this$game5 === void 0 ? void 0 : (_this$game5$gameObjec = _this$game5.gameObjects) === null || _this$game5$gameObjec === void 0 ? void 0 : _this$game5$gameObjec.spawnObjects(levelData);
          }
        }, {
          key: "initInkCapacity",
          value: function initInkCapacity() {
            if (!this.game) return;
            var levelData = this.data.levelData;
            if (!levelData) return;
            var inkCapacityController = this.game.inkCapacityController;
            var _levelData$lnk = levelData.lnk,
                lnk = _levelData$lnk === void 0 ? [] : _levelData$lnk;
            inkCapacityController.init(lnk);
          }
        }, {
          key: "initCountdown",
          value: function initCountdown() {
            var _this$game6;

            (_this$game6 = this.game) === null || _this$game6 === void 0 ? void 0 : _this$game6.uiManager.initCountdown();
          }
        }, {
          key: "updateHeader",
          value: function updateHeader() {
            var _this$game7;

            if (!((_this$game7 = this.game) !== null && _this$game7 !== void 0 && _this$game7.hint)) return;
            var stars = this.game.inkCapacityController.getStarRating();
            this.game.uiManager.setProgressStars(stars);
            var percentage = this.game.inkCapacityController.getInkLevelPercentage();
            this.game.uiManager.setProgressBarPercentage(percentage);

            if (!this.game.hint.getIsHintShow()) {
              this.game.uiManager.startCountDownHeaderHintBubbleAnim();
            }
          }
        }, {
          key: "showTutorialUI",
          value: function showTutorialUI() {
            var _this$game8, _this$game9;

            if (!this.game) return;
            var _this$data = this.data,
                level = _this$data.level,
                levelData = _this$data.levelData;
            if (!level || !levelData) return;
            if (level > 3) return;
            if (!((_this$game8 = this.game) !== null && _this$game8 !== void 0 && _this$game8.hint)) return;
            if (!((_this$game9 = this.game) !== null && _this$game9 !== void 0 && _this$game9.uiManager)) return;
            var rawPoints = levelData.tips;
            var points = MapTransformer.transformPointsFromMapToDrawAreaCoordinate(rawPoints);
            this.game.hint.showHint(points, true);
            this.game.uiManager.stopCountDownHeaderHintBubbleAnim();
          }
        }, {
          key: "startMatchAsync",
          value: function () {
            var _startMatchAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var playerId;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.data.isContextProcessing) {
                      _context2.next = 3;
                      break;
                    }

                    this.updateGameData({
                      isContextProcessing: false
                    });
                    return _context2.abrupt("return");

                  case 3:
                    _context2.prev = 3;
                    playerId = player$4.getPlayerId();
                    _context2.next = 7;
                    return match.single.start.processAsync({
                      playerId: playerId
                    });

                  case 7:
                    _context2.next = 12;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](3);
                    console.warn('ReadyState', _context2.t0);

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[3, 9]]);
            }));

            function startMatchAsync() {
              return _startMatchAsync.apply(this, arguments);
            }

            return startMatchAsync;
          }()
        }, {
          key: "logAnalytics",
          value: function logAnalytics() {
            if (!this.game) return;
            var _this$data$level = this.data.level,
                level = _this$data$level === void 0 ? 0 : _this$data$level;
            var inkCapacityController = this.game.inkCapacityController;
            var stars = inkCapacityController.getStarRating();
            analytics$1.levelStart(level, stars);
          }
        }]);

        return ReadyState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "a8496IbdA1EnY7sv4ApuaJW", "LoadingState", undefined);

      var _GameCore$7 = GameCore,
          Events$7 = _GameCore$7.Events;
      var event$6 = globalThis.game.event;

      var LoadingState = /*#__PURE__*/function (_BaseState) {
        _inherits(LoadingState, _BaseState);

        var _super = _createSuper(LoadingState);

        function LoadingState(manager) {
          var _this;

          _classCallCheck(this, LoadingState);

          _this = _super.call(this, manager);

          _this.handleMapLoaded = function (error, asset) {
            if (error) {
              console.error('Failed to load level', error);
              return;
            }

            var levelData = asset.json;

            _this.updateGameData({
              levelData: levelData
            }); // Load next level


            var level = _this.data.level;

            if (level) {
              var _this$game, _this$game$gameMap;

              (_this$game = _this.game) === null || _this$game === void 0 ? void 0 : (_this$game$gameMap = _this$game.gameMap) === null || _this$game$gameMap === void 0 ? void 0 : _this$game$gameMap.preloadLevel(level + 1);
            } //! wait until loading screen open then ready to reduce stuttering


            if (_this.loadingScreenFlag) {
              var _this$game2;

              (_this$game2 = _this.game) === null || _this$game2 === void 0 ? void 0 : _this$game2.scheduleOnce(function () {
                _this.ready();
              }, 0.5);
            } else {
              _this.ready();
            }
          };

          _this.loadingScreenFlag = !_this.isLevelAlreadyLoaded();

          if (_this.loadingScreenFlag) {
            _this.showLoadingScreen();
          }

          _this.stopHint();

          _this.loadGameMap();

          _this.updateLevelText();

          return _this;
        }

        _createClass(LoadingState, [{
          key: "load",
          value: function load() {// This is loading state, do nothing
          }
        }, {
          key: "ready",
          value: function ready() {
            var state = new ReadyState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "draw",
          value: function draw() {// Don't allow draw in loading state
          }
        }, {
          key: "attack",
          value: function attack() {// Don't allow attack in loading state
          }
        }, {
          key: "escape",
          value: function escape() {// Don't allow win in loading state
          }
        }, {
          key: "death",
          value: function death() {// Don't allow lose in loading state
          }
        }, {
          key: "finish",
          value: function finish() {// Don't allow finish in loading state
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "isLevelAlreadyLoaded",
          value: function isLevelAlreadyLoaded() {
            var _this$game$gameMap$is, _this$game3, _this$game3$gameMap;

            var level = this.data.level;

            if (!level) {
              throw new Error('Level is not defined');
            }

            return (_this$game$gameMap$is = (_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : (_this$game3$gameMap = _this$game3.gameMap) === null || _this$game3$gameMap === void 0 ? void 0 : _this$game3$gameMap.isLevelAlreadyLoaded(level)) !== null && _this$game$gameMap$is !== void 0 ? _this$game$gameMap$is : false;
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen() {
            event$6.emit(Events$7.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: 0
              }
            });
          }
        }, {
          key: "stopHint",
          value: function stopHint() {
            var _this$game4, _this$game4$hint;

            (_this$game4 = this.game) === null || _this$game4 === void 0 ? void 0 : (_this$game4$hint = _this$game4.hint) === null || _this$game4$hint === void 0 ? void 0 : _this$game4$hint.hideHint();
          }
        }, {
          key: "loadGameMap",
          value: function loadGameMap() {
            var _this$game5, _this$game5$gameMap;

            var level = this.data.level;

            if (!level) {
              throw new Error('Level is not defined');
            }

            (_this$game5 = this.game) === null || _this$game5 === void 0 ? void 0 : (_this$game5$gameMap = _this$game5.gameMap) === null || _this$game5$gameMap === void 0 ? void 0 : _this$game5$gameMap.loadLevel(level, this.handleMapLoaded);
          }
        }, {
          key: "updateLevelText",
          value: function updateLevelText() {
            var _this$game6;

            var level = this.data.level;
            if (!level) return;
            (_this$game6 = this.game) === null || _this$game6 === void 0 ? void 0 : _this$game6.uiManager.setLevelText(level);
          }
        }]);

        return LoadingState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "a9bc11SkV9L/5L+Y+fhswfJ", "FinishState", undefined);

      var Facebook = GameCore.Utils.Facebook;
      var _globalThis$game$5 = globalThis.game,
          player$5 = _globalThis$game$5.player,
          match$1 = _globalThis$game$5.match,
          analytics$2 = _globalThis$game$5.analytics;

      var FinishState = /*#__PURE__*/function (_BaseState) {
        _inherits(FinishState, _BaseState);

        var _super = _createSuper(FinishState);

        function FinishState(manager) {
          var _this;

          _classCallCheck(this, FinishState);

          _this = _super.call(this, manager);

          _this.turnUpBackgroundMusic();

          _this.finishMatchAsync();

          _this.logAnalytics();

          _this.attemptCallCreateShortcut();

          return _this;
        }

        _createClass(FinishState, [{
          key: "load",
          value: function load() {
            var state = new LoadingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "ready",
          value: function ready() {
            // ? For relay game, it doesn't need to reload the map
            var state = new ReadyState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "draw",
          value: function draw() {// Don't draw again in finish state
          }
        }, {
          key: "attack",
          value: function attack() {// Don't allow attack in finish state
          }
        }, {
          key: "escape",
          value: function escape() {// Don't allow win in finish state
          }
        }, {
          key: "death",
          value: function death() {// Don't allow lose in finish state
          }
        }, {
          key: "finish",
          value: function finish() {// This is finish state, do nothing
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "turnUpBackgroundMusic",
          value: function turnUpBackgroundMusic() {
            var _find, _find$getComponent;

            (_find = find('Music')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Music)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.setVolume(0.8);
          }
        }, {
          key: "finishMatchAsync",
          value: function () {
            var _finishMatchAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var inkCapacityController, _this$data$level, level, stars, levelScore;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;

                    if (this.game) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    inkCapacityController = this.game.inkCapacityController;

                    if (inkCapacityController) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    _this$data$level = this.data.level, level = _this$data$level === void 0 ? 0 : _this$data$level;
                    stars = inkCapacityController.getStarRating(); // TODO: implement calculate score

                    levelScore = level * 1000 + stars * 100;
                    player$5.setPlayerDataByName('score', levelScore);
                    _context.next = 12;
                    return match$1.single.finish.processAsync();

                  case 12:
                    _context.next = 17;
                    break;

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](0);
                    console.warn('FinishState', _context.t0);

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 14]]);
            }));

            function finishMatchAsync() {
              return _finishMatchAsync.apply(this, arguments);
            }

            return finishMatchAsync;
          }()
        }, {
          key: "logAnalytics",
          value: function logAnalytics() {
            if (!this.game) return;
            var inkCapacityController = this.game.inkCapacityController;
            if (!inkCapacityController) return;
            var _this$data$level2 = this.data.level,
                level = _this$data$level2 === void 0 ? 0 : _this$data$level2;
            var stars = inkCapacityController.getStarRating();
            analytics$2.levelFail(level, stars);
          }
        }, {
          key: "attemptCallCreateShortcut",
          value: function attemptCallCreateShortcut() {
            var _this$data$level3 = this.data.level,
                level = _this$data$level3 === void 0 ? 0 : _this$data$level3;

            if (level >= 3) {
              Facebook.createShortcut()["catch"](function (error) {
                console.warn('attemptToAddShortcut', error);
              });
            }
          }
        }]);

        return FinishState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "17461foCjdJ276bG2jcxA06", "DeathState", undefined);

      var _GameCore$8 = GameCore,
          Events$8 = _GameCore$8.Events;
      var event$7 = globalThis.game.event;

      var DeathState = /*#__PURE__*/function (_BaseState) {
        _inherits(DeathState, _BaseState);

        var _super = _createSuper(DeathState);

        function DeathState(manager) {
          var _this$game, _this$game2;

          var _this;

          _classCallCheck(this, DeathState);

          _this = _super.call(this, manager);

          _this.disableUI();

          _this.stopAllSounds();

          _this.vibrateDevice();

          _this.pauseCountdown();

          (_this$game = _this.game) === null || _this$game === void 0 ? void 0 : _this$game.scheduleOnce(function () {
            _this.stopDogesLooking();

            _this.showUncompletedMark();

            _this.playSound('sounds/level-fail', {
              volume: 0.3
            });
          }, 0.5);
          (_this$game2 = _this.game) === null || _this$game2 === void 0 ? void 0 : _this$game2.scheduleOnce(function () {
            _this.sleepObjects();

            _this.showLoseScreen();

            _this.manager.finish();
          }, 1.8);
          return _this;
        }

        _createClass(DeathState, [{
          key: "load",
          value: function load() {// Don't allow load in death state
          }
        }, {
          key: "ready",
          value: function ready() {// Don't allow ready in death state
          }
        }, {
          key: "draw",
          value: function draw() {// Don't draw again in death state
          }
        }, {
          key: "attack",
          value: function attack() {// Don't allow attack in death state
          }
        }, {
          key: "escape",
          value: function escape() {// Don't allow win in death state
          }
        }, {
          key: "death",
          value: function death() {// This is death state, do nothing
          }
        }, {
          key: "finish",
          value: function finish() {
            var state = new FinishState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "disableUI",
          value: function disableUI() {
            var _this$game3;

            (_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : _this$game3.uiManager.disableUI();
          }
        }, {
          key: "sleepObjects",
          value: function sleepObjects() {
            var _this$game4, _this$game4$lineDrawe, _this$game5, _this$game5$gameObjec;

            (_this$game4 = this.game) === null || _this$game4 === void 0 ? void 0 : (_this$game4$lineDrawe = _this$game4.lineDrawer) === null || _this$game4$lineDrawe === void 0 ? void 0 : _this$game4$lineDrawe.deActivePhysics();
            (_this$game5 = this.game) === null || _this$game5 === void 0 ? void 0 : (_this$game5$gameObjec = _this$game5.gameObjects) === null || _this$game5$gameObjec === void 0 ? void 0 : _this$game5$gameObjec.sleepObjects();
          }
        }, {
          key: "stopAllSounds",
          value: function stopAllSounds() {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.stopAll();
          }
        }, {
          key: "pauseCountdown",
          value: function pauseCountdown() {
            var _this$game6;

            (_this$game6 = this.game) === null || _this$game6 === void 0 ? void 0 : _this$game6.uiManager.pauseCountdown();
          }
        }, {
          key: "stopDogesLooking",
          value: function stopDogesLooking() {
            var _this$game7;

            if (!((_this$game7 = this.game) !== null && _this$game7 !== void 0 && _this$game7.gameObjects)) return;
            var doges = this.game.gameObjects.getComponentsInChildren(Doge);
            doges.forEach(function (doge) {
              var _doge$eyes;

              (_doge$eyes = doge.eyes) === null || _doge$eyes === void 0 ? void 0 : _doge$eyes.stopLook();
              doge.setEnable(false);
            });
          }
        }, {
          key: "vibrateDevice",
          value: function vibrateDevice() {
            var _find2, _find2$getComponent;

            (_find2 = find('Vibrate')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Vibrate)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.vibrate(500);
          }
        }, {
          key: "showUncompletedMark",
          value: function showUncompletedMark() {
            var _this$game8;

            (_this$game8 = this.game) === null || _this$game8 === void 0 ? void 0 : _this$game8.uiManager.showUncompletedMark();
          }
        }, {
          key: "showLoseScreen",
          value: function showLoseScreen() {
            var level = this.data.level;
            event$7.emit(Events$8.OPEN_SCREEN, {
              screenName: ScreenKeys.LOSE_SCREEN,
              screenData: {
                level: level
              }
            });
          }
        }, {
          key: "playSound",
          value: function playSound(name, options) {
            var _find3, _find3$getComponent;

            (_find3 = find('Sound')) === null || _find3 === void 0 ? void 0 : (_find3$getComponent = _find3.getComponent(Sound)) === null || _find3$getComponent === void 0 ? void 0 : _find3$getComponent.play(name, options);
          }
        }]);

        return DeathState;
      }(BaseState);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "a79a7LT0s5BuZrk5mvYsyKr", "AttackingState", undefined);

      var AttackingState = /*#__PURE__*/function (_BaseState) {
        _inherits(AttackingState, _BaseState);

        var _super = _createSuper(AttackingState);

        function AttackingState(manager) {
          var _this;

          _classCallCheck(this, AttackingState);

          _this = _super.call(this, manager);

          _this.stopHint();

          _this.stopDrawing();

          _this.wakeUpObjects();

          _this.spawnEnemies();

          _this.startCountdown();

          _this.turnDownBackgroundMusic(); // TODO: maybe update stars here?


          return _this;
        }

        _createClass(AttackingState, [{
          key: "load",
          value: function load() {
            // ? For skip level feature on attack state
            var state = new LoadingState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "ready",
          value: function ready() {
            var state = new ReadyState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "draw",
          value: function draw() {// Don't allow drawing in attack state
          }
        }, {
          key: "attack",
          value: function attack() {// This is attack state, do nothing
          }
        }, {
          key: "escape",
          value: function escape() {
            var state = new EscapeState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "death",
          value: function death() {
            var state = new DeathState(this.manager);
            this.manager.change(state);
          }
        }, {
          key: "finish",
          value: function finish() {// Don't allow finish in attack state
          }
        }, {
          key: "update",
          value: function update() {//
          }
        }, {
          key: "stopDrawing",
          value: function stopDrawing() {
            var _this$game, _this$game$lineDrawer;

            (_this$game = this.game) === null || _this$game === void 0 ? void 0 : (_this$game$lineDrawer = _this$game.lineDrawer) === null || _this$game$lineDrawer === void 0 ? void 0 : _this$game$lineDrawer.endDraw();
          }
        }, {
          key: "stopHint",
          value: function stopHint() {
            var _this$game2, _this$game2$hint;

            (_this$game2 = this.game) === null || _this$game2 === void 0 ? void 0 : (_this$game2$hint = _this$game2.hint) === null || _this$game2$hint === void 0 ? void 0 : _this$game2$hint.hideHint();
          }
        }, {
          key: "wakeUpObjects",
          value: function wakeUpObjects() {
            var _this$game3, _this$game3$gameObjec;

            (_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : (_this$game3$gameObjec = _this$game3.gameObjects) === null || _this$game3$gameObjec === void 0 ? void 0 : _this$game3$gameObjec.wakeUpObjects();
          }
        }, {
          key: "spawnEnemies",
          value: function spawnEnemies() {
            if (!this.game) return;
            if (!this.game.gameObjects) return;
            this.game.gameObjects.spawnBees();
            this.game.gameObjects.reviveBigBees();
            this.playSound('sounds/bee-flying');
            this.playSound('sounds/end-draw');
          }
        }, {
          key: "startCountdown",
          value: function startCountdown() {
            var _this$game4;

            (_this$game4 = this.game) === null || _this$game4 === void 0 ? void 0 : _this$game4.uiManager.startCountdown();
          }
        }, {
          key: "turnDownBackgroundMusic",
          value: function turnDownBackgroundMusic() {
            var _find, _find$getComponent;

            (_find = find('Music')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Music)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.setVolume(0.3);
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find2, _find2$getComponent;

            (_find2 = find('Sound')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Sound)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.play(name);
          }
        }]);

        return AttackingState;
      }(BaseState);

      cclegacy._RF.pop();

      var _dec$L, _class$L;

      cclegacy._RF.push({}, "bb0e3beWSxOOLCv7gjyg2s0", "StateManager", undefined);

      var ccclass$L = _decorator.ccclass; // ? "isX" methods only used for specific state checking, don't use it for other purpose. ex: check when switch state

      var StateManager = (_dec$L = ccclass$L('StateManager'), _dec$L(_class$L = /*#__PURE__*/function (_Component) {
        _inherits(StateManager, _Component);

        var _super = _createSuper(StateManager);

        function StateManager() {
          _classCallCheck(this, StateManager);

          return _super.apply(this, arguments);
        }

        _createClass(StateManager, [{
          key: "init",
          value: function init() {
            this.state = new LoadingState(this);
          }
        }, {
          key: "change",
          value: function change(state) {
            this.state = state;
          }
        }, {
          key: "load",
          value: function load() {
            this.state.load();
          }
        }, {
          key: "isLoading",
          value: function isLoading() {
            return this.state instanceof LoadingState;
          }
        }, {
          key: "ready",
          value: function ready() {
            this.state.ready();
          }
        }, {
          key: "isReady",
          value: function isReady() {
            return this.state instanceof ReadyState;
          }
        }, {
          key: "draw",
          value: function draw() {
            this.state.draw();
          }
        }, {
          key: "isDrawing",
          value: function isDrawing() {
            return this.state instanceof DrawingState;
          }
        }, {
          key: "attack",
          value: function attack() {
            this.state.attack();
          }
        }, {
          key: "isAttacking",
          value: function isAttacking() {
            return this.state instanceof AttackingState;
          }
        }, {
          key: "escape",
          value: function escape() {
            this.state.escape();
          }
        }, {
          key: "isSurviving",
          value: function isSurviving() {
            return this.state instanceof EscapeState;
          }
        }, {
          key: "death",
          value: function death() {
            this.state.death();
          }
        }, {
          key: "isFailed",
          value: function isFailed() {
            return this.state instanceof DeathState;
          }
        }, {
          key: "finish",
          value: function finish() {
            this.state.finish();
          }
        }, {
          key: "isFinished",
          value: function isFinished() {
            return this.state instanceof FinishState;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this.state) return;
            this.state.update(deltaTime);
          }
        }]);

        return StateManager;
      }(Component)) || _class$L);

      cclegacy._RF.pop();

      var _dec$M, _dec2$v, _dec3$m, _dec4$b, _dec5$8, _dec6$6, _dec7$4, _class$M, _class2$r, _descriptor$p, _descriptor2$f, _descriptor3$8, _descriptor4$5, _descriptor5$4, _descriptor6$3;

      cclegacy._RF.push({}, "9e40aEq56tMKLFoeACyl+eH", "Clock", undefined);

      var ccclass$M = _decorator.ccclass,
          disallowMultiple$9 = _decorator.disallowMultiple,
          property$r = _decorator.property;
      var waitForPassSecs = GameSettings.waitForPassSecs;
      var Clock = (_dec$M = ccclass$M('Clock'), _dec2$v = property$r(Label), _dec3$m = property$r(Node), _dec4$b = property$r(Sprite), _dec5$8 = property$r(Node), _dec6$6 = property$r(Node), _dec7$4 = property$r(Animation), _dec$M(_class$M = disallowMultiple$9(_class$M = (_class2$r = /*#__PURE__*/function (_Component) {
        _inherits(Clock, _Component);

        var _super = _createSuper(Clock);

        function Clock() {
          var _this;

          _classCallCheck(this, Clock);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "timeText", _descriptor$p, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockContainer", _descriptor2$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockFill", _descriptor3$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "successIcon", _descriptor4$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "failIcon", _descriptor5$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation", _descriptor6$3, _assertThisInitialized(_this));

          _this.time = 0;
          _this.remaining = 0;
          _this.running = false;
          _this.timeShake = 0;
          _this.remainingToShake = 0;
          return _this;
        }

        _createClass(Clock, [{
          key: "start",
          value: function start() {
            this.init();
            this.setTime(waitForPassSecs);
            this.setTimeToShake(1);
          }
        }, {
          key: "init",
          value: function init() {
            this.remaining = 0;
            this.running = false;
            this.node.active = false;
          }
        }, {
          key: "setTime",
          value: function setTime(time) {
            this.time = time;
            this.timeText.string = Math.ceil(time).toString();
          }
        }, {
          key: "setTimeToShake",
          value: function setTimeToShake(time) {
            this.timeShake = time;
            this.remainingToShake = 0;
          }
        }, {
          key: "startCountdown",
          value: function startCountdown() {
            this.running = true;
            this.remaining = this.time;
            this.remainingToShake = this.timeShake;
            this.node.active = true;
            this.failIcon.active = false;
            this.successIcon.active = false;
          }
        }, {
          key: "pause",
          value: function pause() {
            this.running = false;
          }
        }, {
          key: "resume",
          value: function resume() {
            this.running = true;
          }
        }, {
          key: "showUncompletedMark",
          value: function showUncompletedMark() {
            this.failIcon.active = true;
            tween(this.failIcon).set({
              scale: new Vec3(0, 0, 1)
            }).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'smooth'
            }).start();
          }
        }, {
          key: "showCompletedMark",
          value: function showCompletedMark() {
            this.successIcon.active = true;
            tween(this.successIcon).set({
              scale: new Vec3(0, 0, 1)
            }).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'smooth'
            }).start();
          }
        }, {
          key: "endCountDown",
          value: function endCountDown() {
            this.running = false;
            this.node.scene.emit(GameplayEvents.TIME_OUT);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this.running) return;

            if (this.remaining <= 0) {
              return this.endCountDown();
            }

            if (this.remainingToShake <= 0) {
              this.playShakeAnimation();
              this.remainingToShake = this.timeShake;
            }

            this.remaining -= deltaTime;
            this.remainingToShake -= deltaTime;
            this.updateLabel();
            this.clockFill.fillRange = this.remaining / this.time;
          }
        }, {
          key: "updateLabel",
          value: function updateLabel() {
            var time = Math.ceil(this.remaining).toString();
            this.timeText.string = time;
          }
        }, {
          key: "playShakeAnimation",
          value: function playShakeAnimation() {
            var clipName = 'Shake';
            var isClipExist = this.animation.clips.some(function (clip) {
              if (clip && clip.name === clipName) return true;
              return false;
            });

            if (isClipExist) {
              this.animation.play(clipName);
            } else {
              console.warn('SettingsScreen: clip not found');
            }
          }
        }]);

        return Clock;
      }(Component), (_descriptor$p = _applyDecoratedDescriptor(_class2$r.prototype, "timeText", [_dec2$v], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$f = _applyDecoratedDescriptor(_class2$r.prototype, "clockContainer", [_dec3$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$8 = _applyDecoratedDescriptor(_class2$r.prototype, "clockFill", [_dec4$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$r.prototype, "successIcon", [_dec5$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$r.prototype, "failIcon", [_dec6$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class2$r.prototype, "animation", [_dec7$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$r)) || _class$M) || _class$M);

      cclegacy._RF.pop();

      var _dec$N, _dec2$w, _dec3$n, _dec4$c, _class$N, _class2$s, _descriptor$q, _descriptor2$g;

      cclegacy._RF.push({}, "7c115t9HKlH6ZfnhCnLAnpe", "Star", undefined);

      var ccclass$N = _decorator.ccclass,
          property$s = _decorator.property,
          requireComponent$f = _decorator.requireComponent;
      var Star = (_dec$N = ccclass$N('Star'), _dec2$w = requireComponent$f(Animation), _dec3$n = property$s(Component), _dec4$c = property$s(Animation), _dec$N(_class$N = _dec2$w(_class$N = (_class2$s = /*#__PURE__*/function (_Component) {
        _inherits(Star, _Component);

        var _super = _createSuper(Star);

        function Star() {
          var _this;

          _classCallCheck(this, Star);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "starAppearance", _descriptor$q, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation", _descriptor2$g, _assertThisInitialized(_this));

          _this.isAppear = false;
          _this.initialPosition = new Vec3();
          return _this;
        }

        _createClass(Star, [{
          key: "onLoad",
          value: function onLoad() {
            this.initialPosition = this.node.position.clone();
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.starAppearance) {
              throw new Error('Star: StarAppearance not found');
            }
          }
        }, {
          key: "resetPosition",
          value: function resetPosition() {
            this.node.setPosition(this.initialPosition);
          }
        }, {
          key: "show",
          value: function show() {
            this.starAppearance.node.active = true;
            this.isAppear = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            this.starAppearance.node.active = false;
            this.isAppear = false;
          }
        }, {
          key: "playAnimation",
          value: function playAnimation() {
            this.animation.stop();
            var clipName = 'UpAndDown';
            var isClipExist = this.animation.clips.some(function (clip) {
              if (clip && clip.name === clipName) return true;
              return false;
            });

            if (isClipExist) {
              this.animation.play('UpAndDown');
            } else {
              console.warn('SettingsScreen: clip not found');
            }
          }
        }, {
          key: "stopAnimation",
          value: function stopAnimation() {
            this.animation.stop();
          }
        }]);

        return Star;
      }(Component), (_descriptor$q = _applyDecoratedDescriptor(_class2$s.prototype, "starAppearance", [_dec3$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$g = _applyDecoratedDescriptor(_class2$s.prototype, "animation", [_dec4$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$s)) || _class$N) || _class$N);

      cclegacy._RF.pop();

      var _dec$O, _dec2$x, _dec3$o, _dec4$d, _dec5$9, _class$O, _class2$t, _descriptor$r, _descriptor2$h, _descriptor3$9, _descriptor4$6;

      cclegacy._RF.push({}, "09f0bRvi+1OQZiIGBFqdNzq", "LevelProgressBar", undefined);

      var ccclass$O = _decorator.ccclass,
          property$t = _decorator.property;
      var LevelProgressBar = (_dec$O = ccclass$O('LevelProgressBar'), _dec2$x = property$t(ProgressBar), _dec3$o = property$t(Star), _dec4$d = property$t(Star), _dec5$9 = property$t(Star), _dec$O(_class$O = (_class2$t = /*#__PURE__*/function (_Component) {
        _inherits(LevelProgressBar, _Component);

        var _super = _createSuper(LevelProgressBar);

        function LevelProgressBar() {
          var _this;

          _classCallCheck(this, LevelProgressBar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "progressBar", _descriptor$r, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftStar", _descriptor2$h, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "midStar", _descriptor3$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightStar", _descriptor4$6, _assertThisInitialized(_this));

          _this.toProgress = 1;
          _this.progressStep = 0;
          return _this;
        }

        _createClass(LevelProgressBar, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.progressBar) {
              throw new Error('LevelProgressBar: ProgressBar not found');
            }

            if (!this.leftStar) {
              throw new Error('LevelProgressBar: LeftStar not found');
            }

            if (!this.midStar) {
              throw new Error('LevelProgressBar: MidStar not found');
            }

            if (!this.rightStar) {
              throw new Error('LevelProgressBar: RightStar not found');
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.toProgress = 1;
            this.progressStep = 0;
            this.runStartsAnimation();
          }
        }, {
          key: "update",
          value: function update() {
            if (this.progressBar.progress - this.progressStep < this.toProgress) {
              if (this.progressBar.progress != this.toProgress) {
                this.progressBar.progress = this.toProgress;
              }
            } else {
              this.progressBar.progress -= this.progressStep;
            }
          }
        }, {
          key: "runStartsAnimation",
          value: function runStartsAnimation() {
            if (this.leftStar.isAppear && this.midStar.isAppear && this.rightStar.isAppear) return;
            this.leftStar.show();
            this.midStar.show();
            this.rightStar.show();
            this.runStarAnimation(this.leftStar);
            this.runStarAnimation(this.midStar);
            this.runStarAnimation(this.rightStar);
          }
        }, {
          key: "runStarAnimation",
          value: function runStarAnimation(star) {
            star.resetPosition();
            star.playAnimation();
          }
        }, {
          key: "stopStarAnimation",
          value: function stopStarAnimation(star) {
            if (!star.isAppear) return;
            star.hide();
            star.stopAnimation();
            star.resetPosition();
            this.playSound('sounds/lost-star-in-gameplay');
          }
        }, {
          key: "setProgress",
          value: function setProgress(progress) {
            this.toProgress = progress / 100;
            this.progressStep = (this.progressBar.progress - this.toProgress) / 60 * 16;
          }
        }, {
          key: "setStars",
          value: function setStars(stars) {
            switch (stars) {
              case 1:
                this.stopStarAnimation(this.rightStar);
                this.stopStarAnimation(this.midStar);
                break;

              case 2:
                this.stopStarAnimation(this.rightStar);
                break;

              default:
                this.runStartsAnimation();
                break;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.progressBar.progress = 1;
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.play(name);
          }
        }]);

        return LevelProgressBar;
      }(Component), (_descriptor$r = _applyDecoratedDescriptor(_class2$t.prototype, "progressBar", [_dec2$x], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$h = _applyDecoratedDescriptor(_class2$t.prototype, "leftStar", [_dec3$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$9 = _applyDecoratedDescriptor(_class2$t.prototype, "midStar", [_dec4$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$t.prototype, "rightStar", [_dec5$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$t)) || _class$O);

      cclegacy._RF.pop();

      var _dec$P, _dec2$y, _dec3$p, _dec4$e, _dec5$a, _dec6$7, _dec7$5, _dec8$3, _dec9$3, _class$P, _class2$u, _descriptor$s, _descriptor2$i, _descriptor3$a, _descriptor4$7, _descriptor5$5, _descriptor6$4, _descriptor7$2, _descriptor8$1;

      cclegacy._RF.push({}, "61791zAr2tJR4p22EZ5QRfk", "Header", undefined);

      var ccclass$P = _decorator.ccclass,
          property$u = _decorator.property;
      var _GameCore$9 = GameCore,
          Events$9 = _GameCore$9.Events;
      var _globalThis$game$6 = globalThis.game,
          language$2 = _globalThis$game$6.language,
          event$8 = _globalThis$game$6.event,
          player$6 = _globalThis$game$6.player;
      var Header = (_dec$P = ccclass$P('Header'), _dec2$y = property$u(Label), _dec3$p = property$u(LevelProgressBar), _dec4$e = property$u(BubbleAnimation), _dec5$a = property$u(Node), _dec6$7 = property$u(Node), _dec7$5 = property$u(Node), _dec8$3 = property$u(Node), _dec9$3 = property$u(Node), _dec$P(_class$P = (_class2$u = /*#__PURE__*/function (_Component) {
        _inherits(Header, _Component);

        var _super = _createSuper(Header);

        function Header() {
          var _this;

          _classCallCheck(this, Header);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "levelText", _descriptor$s, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "levelProgressBar", _descriptor2$i, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hintBubbleAnim", _descriptor3$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pauseNode", _descriptor4$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "replayNode", _descriptor5$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hintNode", _descriptor6$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "skipNode", _descriptor7$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "reloadAlert", _descriptor8$1, _assertThisInitialized(_this));

          _this.handlePlayBubble = function () {
            _this.hintBubbleAnim.play();

            _this.startCountDownHintBubble();
          };

          _this.handleReloadAlert = function () {
            _this.reloadAlert.active = true;
          };

          return _this;
        }

        _createClass(Header, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
            this.listenEvents();
          }
        }, {
          key: "listenEvents",
          value: function listenEvents() {
            event$8.on(Events$9.NEW_CONFIG_DETECTED, this.handleReloadAlert);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.levelText) {
              throw new Error('Header: LevelText not found');
            }

            if (!this.levelProgressBar) {
              throw new Error('Header: LevelProgressBar not found');
            }

            if (!this.hintBubbleAnim) {
              throw new Error('Header: HintBubbleAnim not found');
            }
          } // ? Callback for click event of PauseButton

        }, {
          key: "handleClickedPauseGame",
          value: function handleClickedPauseGame() {
            this.showSettingScreen();
            this.node.scene.emit(GameplayEvents.GAME_PAUSE);
          } // ? Callback for click event of ReplayButton

        }, {
          key: "handleClickedReplayGame",
          value: function handleClickedReplayGame() {
            var _ref = player$6.getGameData() || {},
                _ref$level = _ref.level,
                level = _ref$level === void 0 ? 1 : _ref$level;

            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: level
            });
          } // ? Callback for click event of HintButton

        }, {
          key: "handleClickedHintGame",
          value: function handleClickedHintGame() {
            this.node.scene.emit(GameplayEvents.SHOW_HINT);
          } // ? Callback for click event of SkipButton

        }, {
          key: "handleClickedSkipLevel",
          value: function () {
            var _handleClickedSkipLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.node.scene.emit(GameplayEvents.SKIP_LEVEL);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));

            function handleClickedSkipLevel() {
              return _handleClickedSkipLevel.apply(this, arguments);
            }

            return handleClickedSkipLevel;
          }()
        }, {
          key: "showSettingScreen",
          value: function showSettingScreen() {
            event$8.emit(Events$9.OPEN_SCREEN, {
              screenName: ScreenKeys.SETTINGS_SCREEN,
              screenData: {}
            });
          }
        }, {
          key: "setLevelText",
          value: function setLevelText(level) {
            var levelText = language$2.getText('level');
            this.levelText.string = levelText + " ".concat(level);
          }
        }, {
          key: "setProgress",
          value: function setProgress(progress) {
            this.levelProgressBar.setProgress(progress);
          }
        }, {
          key: "setProgressStars",
          value: function setProgressStars(stars) {
            this.levelProgressBar.setStars(stars);
          }
        }, {
          key: "startCountDownHintBubble",
          value: function startCountDownHintBubble() {
            this.schedule(this.handlePlayBubble, 30);
          }
        }, {
          key: "stopCountDownHintBubble",
          value: function stopCountDownHintBubble() {
            this.unschedule(this.handlePlayBubble);
          }
        }, {
          key: "disableButtons",
          value: function disableButtons() {
            this.enableBtnNode(this.pauseNode, false);
            this.enableBtnNode(this.replayNode, false);
            this.enableBtnNode(this.hintNode, false);
            this.enableBtnNode(this.skipNode, false);
          }
        }, {
          key: "enableButtons",
          value: function enableButtons() {
            this.enableBtnNode(this.pauseNode, true);
            this.enableBtnNode(this.replayNode, true);
            this.enableBtnNode(this.hintNode, true);
            this.enableBtnNode(this.skipNode, true);
          }
        }, {
          key: "enableBtnNode",
          value: function enableBtnNode(node, enable) {
            var button = node.getComponent(Button);

            if (button) {
              button.interactable = enable;
            } // TODO: use grayscale texture instead of OpacityToggler


            var opacityToggler = node.getComponent(OpacityToggler);

            if (opacityToggler) {
              opacityToggler.changeState(enable);
            }
          }
        }, {
          key: "handlePressedReloadAlert",
          value: function handlePressedReloadAlert() {
            console.log('Reload game');
            event$8.emit(Events$9.HOT_RELOAD);
          }
        }]);

        return Header;
      }(Component), (_descriptor$s = _applyDecoratedDescriptor(_class2$u.prototype, "levelText", [_dec2$y], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$i = _applyDecoratedDescriptor(_class2$u.prototype, "levelProgressBar", [_dec3$p], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$a = _applyDecoratedDescriptor(_class2$u.prototype, "hintBubbleAnim", [_dec4$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class2$u.prototype, "pauseNode", [_dec5$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$u.prototype, "replayNode", [_dec6$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$u.prototype, "hintNode", [_dec7$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$u.prototype, "skipNode", [_dec8$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$u.prototype, "reloadAlert", [_dec9$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$u)) || _class$P);

      cclegacy._RF.pop();

      var _dec$Q, _dec2$z, _dec3$q, _dec4$f, _dec5$b, _dec6$8, _dec7$6, _dec8$4, _dec9$4, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21, _dec22, _dec23, _class$Q, _class2$v, _descriptor$t, _descriptor2$j, _descriptor3$b, _descriptor4$8, _descriptor5$6, _descriptor6$5, _descriptor7$3, _descriptor8$2, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15$1, _descriptor16$1, _descriptor17$1, _descriptor18$1, _descriptor19$1, _descriptor20, _descriptor21, _descriptor22;

      cclegacy._RF.push({}, "151afQBVDpOYpTjtwP+wYH+", "DevTools", undefined);

      var ccclass$Q = _decorator.ccclass,
          property$v = _decorator.property;
      var DevToolsContainer = (_dec$Q = ccclass$Q('DevToolsContainer'), _dec2$z = property$v(Node), _dec3$q = property$v(Node), _dec4$f = property$v(Node), _dec5$b = property$v(Node), _dec6$8 = property$v(Node), _dec7$6 = property$v(Node), _dec8$4 = property$v(Node), _dec9$4 = property$v(Node), _dec10$1 = property$v(Node), _dec11$1 = property$v(Node), _dec12$1 = property$v(Node), _dec13$1 = property$v(Node), _dec14$1 = property$v(Node), _dec15$1 = property$v(Node), _dec16$1 = property$v(Node), _dec17$1 = property$v(Node), _dec18$1 = property$v(Node), _dec19$1 = property$v(Node), _dec20$1 = property$v(Node), _dec21 = property$v(Node), _dec22 = property$v(Node), _dec23 = property$v(Node), _dec$Q(_class$Q = (_class2$v = /*#__PURE__*/function (_Component) {
        _inherits(DevToolsContainer, _Component);

        var _super = _createSuper(DevToolsContainer);

        function DevToolsContainer() {
          var _this;

          _classCallCheck(this, DevToolsContainer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "devToolsButton", _descriptor$t, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winLevelButton", _descriptor2$j, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loseLevelButton", _descriptor3$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prevLevelButton", _descriptor4$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelButton", _descriptor5$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "selectLevelButton", _descriptor6$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hintButton", _descriptor7$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "physicButton", _descriptor8$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "beehiveButton", _descriptor9$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dogeButton", _descriptor10$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "thornBallButton", _descriptor11$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bigBeeButton", _descriptor12$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "thornButton", _descriptor13$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "airFanButton", _descriptor14$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "brickButton", _descriptor15$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "grassButton", _descriptor16$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "grassDarkButton", _descriptor17$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lineButton", _descriptor18$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "poisonButton", _descriptor19$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "poisonSurfaceButton", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "waterButton", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dangerAreaButton", _descriptor22, _assertThisInitialized(_this));

          _this.isActive = true;
          _this.gameplay = null;
          _this.gameObjects = null;
          _this.currentSpawnObjId = -1;

          _this.handleClickDevToolsButton = function () {
            if (_this.isActive) {
              _this.hideAllButtons();

              _this.isActive = false;
            } else {
              _this.showAllButtons();

              _this.isActive = true;
            }
          };

          _this.handleClickPrevLevelButton = function () {
            var level = _this.getCurrentLevel();

            if (!level) return;

            _this.node.scene.emit(GameplayEvents.SELECT_LEVEL, {
              level: level - 1
            });
          };

          _this.handleClickNextLevelButton = function () {
            var level = _this.getCurrentLevel();

            if (!level) return;

            _this.node.scene.emit(GameplayEvents.SELECT_LEVEL, {
              level: level + 1
            });
          };

          _this.handleClickHintButton = function () {
            _this.node.scene.emit(GameplayEvents.SHOW_HINT, {
              noAd: true
            });
          };

          _this.handleClickPhysicButton = function () {
            var Aabb = EPhysics2DDrawFlags.Aabb,
                Pair = EPhysics2DDrawFlags.Pair,
                CenterOfMass = EPhysics2DDrawFlags.CenterOfMass,
                Joint = EPhysics2DDrawFlags.Joint,
                Shape = EPhysics2DDrawFlags.Shape;
            PhysicsSystem2D.instance.debugDrawFlags = Aabb | Pair | CenterOfMass | Joint | Shape; // * Don't set None flag when enabled debug draw, it will cause error
          };

          _this.handleClickWinLevelButton = function () {
            _this.node.scene.emit(GameplayEvents.DOGE_SURVIVE);
          };

          _this.handleClickLoseLevelButton = function () {
            _this.node.scene.emit(GameplayEvents.DOGE_DIE);
          }; //Point Objects


          _this.handleClickBeehiveButton = function () {
            _this.currentSpawnObjId = ObjectIds.BEEHIVE_A;

            _this.handleSpawnObject();
          };

          _this.handleClickDogeButton = function () {
            _this.currentSpawnObjId = ObjectIds.DOGE_A;

            _this.handleSpawnObject();
          };

          _this.handleClickThornBallButton = function () {
            _this.currentSpawnObjId = ObjectIds.THORN_BALL;

            _this.handleSpawnObject();
          };

          _this.handleClickBigBeeButton = function () {
            _this.currentSpawnObjId = ObjectIds.BIG_BEE;

            _this.handleSpawnObject();
          };

          _this.handleClickThornButton = function () {
            _this.currentSpawnObjId = ObjectIds.THORN;

            _this.handleSpawnObject();
          };

          _this.handleClickAirFanButton = function () {
            _this.currentSpawnObjId = ObjectIds.AIR_FAN;

            _this.handleSpawnObject();
          }; //Polygon Objects


          _this.handleClickBrickButton = function () {
            _this.currentSpawnObjId = ObjectIds.BRICK;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickGrassButton = function () {
            _this.currentSpawnObjId = ObjectIds.GRASS;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickGrassDarkButton = function () {
            _this.currentSpawnObjId = ObjectIds.GRASS_DARK;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickLineButton = function () {
            _this.currentSpawnObjId = ObjectIds.LINE;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickPoisonButton = function () {
            _this.currentSpawnObjId = ObjectIds.POISON;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickPoisonSurfaceButton = function () {
            _this.currentSpawnObjId = ObjectIds.POISON_SURFACE;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickWaterButton = function () {
            _this.currentSpawnObjId = ObjectIds.WATER;

            _this.handleSpawnPolygonObject();
          };

          _this.handleClickDangerAreaButton = function () {
            _this.currentSpawnObjId = ObjectIds.DANGER_AREA;

            _this.handleSpawnPolygonObject();
          };

          return _this;
        }

        _createClass(DevToolsContainer, [{
          key: "start",
          value: function start() {
            this.handleToggleDevToolsButton();
            this.handleGameLevelButtons();
            this.handleItemButtons();
            this.handleEngineButtons();
            this.handleSpawnObjectButtons();
          }
        }, {
          key: "handleToggleDevToolsButton",
          value: function handleToggleDevToolsButton() {
            this.devToolsButton.on(Node.EventType.TOUCH_START, this.handleClickDevToolsButton);
          }
        }, {
          key: "handleGameLevelButtons",
          value: function handleGameLevelButtons() {
            this.winLevelButton.on(Node.EventType.TOUCH_START, this.handleClickWinLevelButton);
            this.loseLevelButton.on(Node.EventType.TOUCH_START, this.handleClickLoseLevelButton);
            this.prevLevelButton.on(Node.EventType.TOUCH_START, this.handleClickPrevLevelButton);
            this.nextLevelButton.on(Node.EventType.TOUCH_START, this.handleClickNextLevelButton);
          }
        }, {
          key: "handleItemButtons",
          value: function handleItemButtons() {
            this.hintButton.on(Node.EventType.TOUCH_START, this.handleClickHintButton);
          }
        }, {
          key: "handleEngineButtons",
          value: function handleEngineButtons() {
            this.physicButton.on(Node.EventType.TOUCH_START, this.handleClickPhysicButton);
          }
        }, {
          key: "handleSpawnObjectButtons",
          value: function handleSpawnObjectButtons() {
            this.beehiveButton.on(Node.EventType.TOUCH_START, this.handleClickBeehiveButton);
            this.dogeButton.on(Node.EventType.TOUCH_START, this.handleClickDogeButton);
            this.thornBallButton.on(Node.EventType.TOUCH_START, this.handleClickThornBallButton);
            this.bigBeeButton.on(Node.EventType.TOUCH_START, this.handleClickBigBeeButton);
            this.thornButton.on(Node.EventType.TOUCH_START, this.handleClickThornButton);
            this.airFanButton.on(Node.EventType.TOUCH_START, this.handleClickAirFanButton);
            this.brickButton.on(Node.EventType.TOUCH_START, this.handleClickBrickButton);
            this.grassButton.on(Node.EventType.TOUCH_START, this.handleClickGrassButton);
            this.grassDarkButton.on(Node.EventType.TOUCH_START, this.handleClickGrassDarkButton);
            this.lineButton.on(Node.EventType.TOUCH_START, this.handleClickLineButton);
            this.poisonButton.on(Node.EventType.TOUCH_START, this.handleClickPoisonButton);
            this.poisonSurfaceButton.on(Node.EventType.TOUCH_START, this.handleClickPoisonSurfaceButton, this);
            this.waterButton.on(Node.EventType.TOUCH_START, this.handleClickWaterButton);
            this.dangerAreaButton.on(Node.EventType.TOUCH_START, this.handleClickDangerAreaButton);
          }
        }, {
          key: "injectGameplay",
          value: function injectGameplay(gameplay) {
            this.gameplay = gameplay;
            this.gameObjects = gameplay.gameObjects;
          }
        }, {
          key: "hideAllButtons",
          value: function hideAllButtons() {
            var _this2 = this;

            this.getComponentsInChildren(Button).forEach(function (button) {
              if (button.node.name === _this2.devToolsButton.name) return;
              button.node.active = false;
            });
          }
        }, {
          key: "showAllButtons",
          value: function showAllButtons() {
            var _this3 = this;

            this.getComponentsInChildren(Button).forEach(function (button) {
              if (button.node.name === _this3.devToolsButton.name) return;
              button.node.active = true;
            });
          }
        }, {
          key: "getCurrentLevel",
          value: function getCurrentLevel() {
            if (!this.gameplay) return null;
            var gameData = this.gameplay.getGameData();
            if (!gameData) return null;
            return gameData.level || null;
          }
        }, {
          key: "handleEnterSelectLevel",
          value: // ? Callback for SelectLevelButton
          function handleEnterSelectLevel(editBox) {
            var level = Number(editBox.string);
            this.node.scene.emit(GameplayEvents.SELECT_LEVEL, {
              level: level
            });
          }
        }, {
          key: "handleSpawnObject",
          value: function handleSpawnObject() {
            var _this$gameObjects;

            this.validateRequiredComponents();
            if (this.currentSpawnObjId === -1) return;
            var randomPosition = {
              x: Math.floor(Math.random() * 40),
              y: Math.floor(Math.random() * 40)
            };
            var payload = {
              id: this.currentSpawnObjId,
              point: randomPosition
            };
            (_this$gameObjects = this.gameObjects) === null || _this$gameObjects === void 0 ? void 0 : _this$gameObjects.spawnObjectForDevTools(payload);
          }
        }, {
          key: "handleSpawnPolygonObject",
          value: function handleSpawnPolygonObject() {
            var _this$gameObjects2;

            this.validateRequiredComponents();
            if (this.currentSpawnObjId === -1) return;
            var topLeft = {
              x: Math.floor(Math.random() * 40),
              y: Math.floor(Math.random() * 40)
            };
            var topRight = {
              x: topLeft.x + Math.floor(Math.random() * 10),
              y: topLeft.y
            };
            var bottomLeft = {
              x: topLeft.x,
              y: topLeft.y + Math.floor(Math.random() * 10)
            };
            var bottomRight = {
              x: topRight.x,
              y: bottomLeft.y
            };
            var randomPoints = [topLeft, topRight, bottomLeft, bottomRight];
            var payload = {
              id: this.currentSpawnObjId,
              point: randomPoints
            };
            (_this$gameObjects2 = this.gameObjects) === null || _this$gameObjects2 === void 0 ? void 0 : _this$gameObjects2.spawnPolygonObjectForDevTools(payload);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.gameObjects) {
              throw new Error('DevTools: GameObjects is not assigned');
            }
          }
        }]);

        return DevToolsContainer;
      }(Component), (_descriptor$t = _applyDecoratedDescriptor(_class2$v.prototype, "devToolsButton", [_dec2$z], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$j = _applyDecoratedDescriptor(_class2$v.prototype, "winLevelButton", [_dec3$q], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$b = _applyDecoratedDescriptor(_class2$v.prototype, "loseLevelButton", [_dec4$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$8 = _applyDecoratedDescriptor(_class2$v.prototype, "prevLevelButton", [_dec5$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$6 = _applyDecoratedDescriptor(_class2$v.prototype, "nextLevelButton", [_dec6$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$5 = _applyDecoratedDescriptor(_class2$v.prototype, "selectLevelButton", [_dec7$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$v.prototype, "hintButton", [_dec8$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$v.prototype, "physicButton", [_dec9$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$v.prototype, "beehiveButton", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$v.prototype, "dogeButton", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11$1 = _applyDecoratedDescriptor(_class2$v.prototype, "thornBallButton", [_dec12$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$v.prototype, "bigBeeButton", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$v.prototype, "thornButton", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$v.prototype, "airFanButton", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$v.prototype, "brickButton", [_dec16$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$v.prototype, "grassButton", [_dec17$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17$1 = _applyDecoratedDescriptor(_class2$v.prototype, "grassDarkButton", [_dec18$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18$1 = _applyDecoratedDescriptor(_class2$v.prototype, "lineButton", [_dec19$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19$1 = _applyDecoratedDescriptor(_class2$v.prototype, "poisonButton", [_dec20$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2$v.prototype, "poisonSurfaceButton", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2$v.prototype, "waterButton", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2$v.prototype, "dangerAreaButton", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$v)) || _class$Q);

      cclegacy._RF.pop();

      var _dec$R, _dec2$A, _dec3$r, _dec4$g, _class$R, _class2$w, _descriptor$u, _descriptor2$k, _descriptor3$c;

      cclegacy._RF.push({}, "a3b0f6zU+1D97PyszsgST1H", "UIManager", undefined);

      var ccclass$R = _decorator.ccclass,
          property$w = _decorator.property;
      var Valid = GameCore.Utils.Valid;
      var UIManager = (_dec$R = ccclass$R('UIManager'), _dec2$A = property$w(Clock), _dec3$r = property$w(Header), _dec4$g = property$w(DevToolsContainer), _dec$R(_class$R = (_class2$w = /*#__PURE__*/function (_Component) {
        _inherits(UIManager, _Component);

        var _super = _createSuper(UIManager);

        function UIManager() {
          var _this;

          _classCallCheck(this, UIManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "clock", _descriptor$u, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "header", _descriptor2$k, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "devTools", _descriptor3$c, _assertThisInitialized(_this));

          _this.showDevTools = function () {
            if (!_this.devTools) return;
            _this.devTools.node.active = true;
          };

          return _this;
        }

        _createClass(UIManager, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
            this.listensDevToolsEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.clock) {
              throw new Error("".concat(this.node.name, ": clock not found"));
            }

            if (!this.header) {
              throw new Error("".concat(this.node.name, ": header not found"));
            }
          }
        }, {
          key: "listensDevToolsEvents",
          value: function listensDevToolsEvents() {
            this.node.scene.on(DevTools.Events.UNLOCK_DEV_TOOLS, this.showDevTools);
          }
        }, {
          key: "initDevTools",
          value: function initDevTools(gameplay) {
            if (!this.devTools) return;
            this.devTools.node.active = Valid.isDebugger();
            this.devTools.injectGameplay(gameplay);
          }
        }, {
          key: "setLevelText",
          value: function setLevelText(level) {
            this.header.setLevelText(level);
          }
        }, {
          key: "initCountdown",
          value: function initCountdown() {
            this.clock.init();
          }
        }, {
          key: "startCountdown",
          value: function startCountdown() {
            this.clock.startCountdown();
          }
        }, {
          key: "pauseCountdown",
          value: function pauseCountdown() {
            this.clock.pause();
          }
        }, {
          key: "resumeCountdown",
          value: function resumeCountdown() {
            this.clock.resume();
          }
        }, {
          key: "showUncompletedMark",
          value: function showUncompletedMark() {
            this.clock.showUncompletedMark();
          }
        }, {
          key: "showCompletedMark",
          value: function showCompletedMark() {
            this.clock.showCompletedMark();
          }
        }, {
          key: "setProgressBarPercentage",
          value: function setProgressBarPercentage(percentage) {
            this.header.setProgress(percentage);
          }
        }, {
          key: "setProgressStars",
          value: function setProgressStars(stars) {
            this.header.setProgressStars(stars);
          }
        }, {
          key: "startCountDownHeaderHintBubbleAnim",
          value: function startCountDownHeaderHintBubbleAnim() {
            this.header.startCountDownHintBubble();
          }
        }, {
          key: "stopCountDownHeaderHintBubbleAnim",
          value: function stopCountDownHeaderHintBubbleAnim() {
            this.header.stopCountDownHintBubble();
          }
        }, {
          key: "disableUI",
          value: function disableUI() {
            this.header.disableButtons();
          }
        }, {
          key: "enableUI",
          value: function enableUI() {
            this.header.enableButtons();
          }
        }]);

        return UIManager;
      }(Component), (_descriptor$u = _applyDecoratedDescriptor(_class2$w.prototype, "clock", [_dec2$A], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$k = _applyDecoratedDescriptor(_class2$w.prototype, "header", [_dec3$r], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$c = _applyDecoratedDescriptor(_class2$w.prototype, "devTools", [_dec4$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$w)) || _class$R);

      cclegacy._RF.pop();

      var _dec$S, _dec2$B, _dec3$s, _dec4$h, _dec5$c, _dec6$9, _class$S, _class2$x, _descriptor$v, _descriptor2$l, _descriptor3$d, _descriptor4$9;

      cclegacy._RF.push({}, "157f203vjtMma2FDvAlyM6h", "Gameplay", undefined);

      var ccclass$S = _decorator.ccclass,
          requireComponent$g = _decorator.requireComponent,
          property$x = _decorator.property;
      var _globalThis$game$7 = globalThis.game,
          player$7 = _globalThis$game$7.player,
          ads = _globalThis$game$7.ads,
          event$9 = _globalThis$game$7.event,
          language$3 = _globalThis$game$7.language;
      var Gameplay = (_dec$S = ccclass$S('Gameplay'), _dec2$B = requireComponent$g([StateManager, InputController, InkCapacityController]), _dec3$s = property$x(Hint), _dec4$h = property$x(MapLoader), _dec5$c = property$x(LineDrawer), _dec6$9 = property$x(GameObjects), _dec$S(_class$S = _dec2$B(_class$S = (_class2$x = /*#__PURE__*/function (_Component) {
        _inherits(Gameplay, _Component);

        var _super = _createSuper(Gameplay);

        function Gameplay() {
          var _this;

          _classCallCheck(this, Gameplay);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args)); // ? Why Managers and Controllers are not marked as @property?
          // * Because they are partial of Gameplay (system) and not a component of Gameplay (node)
          // ? Why use non-null assertion operator (!) for Managers, Controllers and Components?
          // * Because they are required components of Gameplay (node)
          // Managers (System)
          // Controllers (System)
          // Components

          _initializerDefineProperty(_this, "hint", _descriptor$v, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameMap", _descriptor2$l, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lineDrawer", _descriptor3$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameObjects", _descriptor4$9, _assertThisInitialized(_this));

          _this.gameData = null;
          _this.defaultData = null;

          _this.handleStartGame = function (gameEvent) {
            if (!gameEvent) {
              throw new Error('handleStartGame: GameEvent payload is not defined');
            }

            _this.setGameData(gameEvent);

            _this.stateManager.draw();
          };

          _this.handlePauseGame = function (_gameEvent) {
            _this.pauseGame();

            _this.pauseSound('sounds/bee-flying');
          };

          _this.handleResumeGame = function (_gameEvent) {
            _this.resumeGame();

            _this.resumeSound('sounds/bee-flying');
          };

          _this.handleReplayGame = function (gameEvent) {
            var data = _objectSpread2(_objectSpread2({}, _this.defaultData), gameEvent);

            _this.setGameData(data);

            _this.stateManager.ready();
          };

          _this.handleNextLevel = function (gameEvent) {
            if (!_this.gameData) return;

            if (!gameEvent) {
              throw new Error('handleNextLevel: GameEvent payload is not defined');
            }

            var currentLevel = _this.gameData.level;
            var _gameEvent$level = gameEvent.level,
                level = _gameEvent$level === void 0 ? currentLevel : _gameEvent$level;

            if (!level) {
              throw new Error('Level is not defined');
            }

            var nextLevel = level + 1;
            player$7.setGameData({
              level: nextLevel
            });

            var data = _objectSpread2(_objectSpread2(_objectSpread2({}, _this.defaultData), gameEvent), {}, {
              level: nextLevel
            });

            _this.setGameData(data);

            _this.stateManager.load();

            console.log('Next level', nextLevel);
          };

          _this.handleStartOver = function (gameEvent) {
            var beginLevel = 1;
            player$7.setGameData({
              level: beginLevel,
              passAllLevels: false
            });

            var data = _objectSpread2(_objectSpread2(_objectSpread2({}, _this.defaultData), gameEvent), {}, {
              level: beginLevel
            });

            _this.setGameData(data);

            _this.stateManager.load();
          };

          _this.handleSelectLevel = function (gameEvent) {
            if (!gameEvent) {
              throw new Error('handleSelectLevel: GameEvent payload is not defined');
            }

            var level = gameEvent.level;
            if (!level) return;

            var _ref = player$7.getGameData() || {},
                _ref$totalLevel = _ref.totalLevel,
                totalLevel = _ref$totalLevel === void 0 ? level : _ref$totalLevel;

            var correctLevel = level < 1 ? 1 : level;
            correctLevel = correctLevel > totalLevel ? totalLevel : correctLevel;

            var data = _objectSpread2(_objectSpread2(_objectSpread2({}, _this.defaultData), gameEvent), {}, {
              level: correctLevel
            });

            player$7.setGameData({
              level: correctLevel
            });

            _this.setGameData(data);

            _this.stateManager.load();
          };

          _this.handleClockTimeout = function (_gameEvent) {
            _this.stateManager.escape();
          };

          _this.handleDrawing = function (gameEvent) {
            if (!gameEvent) {
              throw new Error('handleDrawing: GameEvent payload is not defined');
            }

            _this.setGameData(gameEvent);
          };

          _this.handleBeeDie = function (_gameEvent) {
            var _this$gameObjects;

            var isAllDie = (_this$gameObjects = _this.gameObjects) === null || _this$gameObjects === void 0 ? void 0 : _this$gameObjects.checkAllBeeDie();
            if (!isAllDie) return;

            _this.stateManager.escape();
          };

          _this.handleBigBeeDie = function (_gameEvent) {
            var _this$gameObjects2;

            var isAllDie = (_this$gameObjects2 = _this.gameObjects) === null || _this$gameObjects2 === void 0 ? void 0 : _this$gameObjects2.checkAllBeeDie();
            if (!isAllDie) return;

            _this.stateManager.escape();
          };

          _this.handleBeeAttack = function (_gameEvent) {
            _this.stateManager.attack();
          };

          _this.handleDogeDie = function (_gameEvent) {
            _this.stateManager.death();
          };

          _this.handleDogeSurvive = function (_gameEvent) {
            _this.stateManager.escape();
          };
          /* private handleGameFinish = (gameEvent: GameEvent): void => {
              this.setGameData(gameEvent)
              this.stateManager.finish()
          } */


          _this.handleShowHint = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(gameEvent) {
              var _this$hint;

              var _ref3, _ref3$noAd, noAd, _this$hint2, loadingText, _ref4, levelData, rawPoints, points;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!((_this$hint = _this.hint) !== null && _this$hint !== void 0 && _this$hint.getIsHintShow())) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    if (!(!_this.stateManager.isAttacking() && !_this.stateManager.isReady())) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    // ? Current use in DevTools
                    _ref3 = gameEvent || {}, _ref3$noAd = _ref3.noAd, noAd = _ref3$noAd === void 0 ? false : _ref3$noAd;

                    _this.uiManager.stopCountDownHeaderHintBubbleAnim();

                    _context.prev = 6;

                    _this.muteAudio(true);

                    if (noAd) {
                      _context.next = 15;
                      break;
                    }

                    _this.node.scene.emit(GameplayEvents.GAME_PAUSE);

                    loadingText = language$3.getText('loading');

                    _this.showNotificationScreen(loadingText);

                    _context.next = 14;
                    return ads.showRewardedVideoAsync();

                  case 14:
                    _this.closeNotificationScreen();

                  case 15:
                    _ref4 = _this.gameData || {}, levelData = _ref4.levelData;

                    if (levelData) {
                      _context.next = 18;
                      break;
                    }

                    throw new Error('Level data is not defined');

                  case 18:
                    rawPoints = levelData.tips;
                    points = MapTransformer.transformPointsFromMapToDrawAreaCoordinate(rawPoints);
                    (_this$hint2 = _this.hint) === null || _this$hint2 === void 0 ? void 0 : _this$hint2.showHint(points, false);
                    _context.next = 30;
                    break;

                  case 23:
                    _context.prev = 23;
                    _context.t0 = _context["catch"](6);
                    console.warn('showTips failed', _context.t0);

                    if (!(_context.t0 instanceof Object && 'code' in _context.t0 && _context.t0.code === 'USER_INPUT')) {
                      _context.next = 29;
                      break;
                    }

                    _this.showNotificationScreen('Sorry, no rewards!\n You have cancelled the ad.', 2);

                    return _context.abrupt("return");

                  case 29:
                    _this.showNotificationScreen('No ads to display.', 2);

                  case 30:
                    _context.prev = 30;

                    _this.muteAudio(false);

                    _this.node.scene.emit(GameplayEvents.GAME_RESUME);

                    ads.preloadRewardedVideoAsync()["catch"](function () {// Safe to ignore
                    });
                    return _context.finish(30);

                  case 35:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[6, 23, 30, 35]]);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }();

          _this.handleSkipLevel = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_gameEvent) {
              var loadingText;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!_this.stateManager.isAttacking() && !_this.stateManager.isReady())) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.prev = 2;

                    _this.muteAudio(true);

                    _this.node.scene.emit(GameplayEvents.GAME_PAUSE);

                    loadingText = language$3.getText('loading');

                    _this.showNotificationScreen(loadingText);

                    _context2.next = 9;
                    return ads.showRewardedVideoAsync();

                  case 9:
                    _this.closeNotificationScreen();

                    _this.node.scene.emit(GameplayEvents.DOGE_SURVIVE);

                    _context2.next = 20;
                    break;

                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](2);
                    console.error('showInterstitialAdAsync failed', _context2.t0);

                    if (!(_context2.t0 instanceof Object && 'code' in _context2.t0 && _context2.t0.code === 'USER_INPUT')) {
                      _context2.next = 19;
                      break;
                    }

                    _this.showNotificationScreen('Sorry, no rewards!\n You have cancelled the ad.', 2);

                    return _context2.abrupt("return");

                  case 19:
                    _this.showNotificationScreen('No ads to display.', 2);

                  case 20:
                    _context2.prev = 20;

                    _this.muteAudio(false);

                    _this.node.scene.emit(GameplayEvents.GAME_RESUME);

                    ads.preloadRewardedVideoAsync()["catch"](function () {// Safe to ignore
                    });
                    return _context2.finish(20);

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[2, 13, 20, 25]]);
            }));

            return function (_x2) {
              return _ref5.apply(this, arguments);
            };
          }();

          return _this;
        }

        _createClass(Gameplay, [{
          key: "onLoad",
          value: function onLoad() {
            this.initComponents();
            this.validateRequiredComponents();
            this.listenInputEvents();
          }
        }, {
          key: "initComponents",
          value: function initComponents() {
            this.initUIManager();
            this.initStateManager();
            this.initInputController();
            this.initInkCapacityController();
          }
        }, {
          key: "initUIManager",
          value: function initUIManager() {
            var _this$node$parent;

            this.uiManager = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponentInChildren(UIManager);
          }
        }, {
          key: "initStateManager",
          value: function initStateManager() {
            this.stateManager = this.getComponent(StateManager);
          }
        }, {
          key: "initInputController",
          value: function initInputController() {
            this.inputController = this.getComponent(InputController);
          }
        }, {
          key: "initInkCapacityController",
          value: function initInkCapacityController() {
            this.inkCapacityController = this.getComponent(InkCapacityController);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.hint) {
              throw new Error("".concat(this.node.name, ": Hint not found"));
            }

            if (!this.gameMap) {
              throw new Error("".concat(this.node.name, ": GameMap not found"));
            }

            if (!this.lineDrawer) {
              throw new Error("".concat(this.node.name, ": LineDrawer not found"));
            }

            if (!this.gameObjects) {
              throw new Error("".concat(this.node.name, ": GameObjects not found"));
            }
          }
        }, {
          key: "listenInputEvents",
          value: function listenInputEvents() {
            this.node.scene.on(GameplayEvents.GAME_START, this.handleStartGame);
            this.node.scene.on(GameplayEvents.GAME_PAUSE, this.handlePauseGame);
            this.node.scene.on(GameplayEvents.GAME_RESUME, this.handleResumeGame);
            this.node.scene.on(GameplayEvents.GAME_REPLAY, this.handleReplayGame);
            this.node.scene.on(GameplayEvents.NEXT_LEVEL, this.handleNextLevel);
            this.node.scene.on(GameplayEvents.START_OVER, this.handleStartOver);
            this.node.scene.on(GameplayEvents.SELECT_LEVEL, this.handleSelectLevel);
            this.node.scene.on(GameplayEvents.DRAWING, this.handleDrawing);
            this.node.scene.on(GameplayEvents.TIME_OUT, this.handleClockTimeout);
            this.node.scene.on(GameplayEvents.BEE_DIE, this.handleBeeDie);
            this.node.scene.on(GameplayEvents.BIG_BEE_DIE, this.handleBigBeeDie);
            this.node.scene.on(GameplayEvents.BEE_ATTACK, this.handleBeeAttack);
            this.node.scene.on(GameplayEvents.DOGE_DIE, this.handleDogeDie);
            this.node.scene.on(GameplayEvents.DOGE_SURVIVE, this.handleDogeSurvive);
            this.node.scene.on(GameplayEvents.SHOW_HINT, this.handleShowHint);
            this.node.scene.on(GameplayEvents.SKIP_LEVEL, this.handleSkipLevel);
          }
        }, {
          key: "start",
          value: function start() {
            this.initData();
            this.initGame();
            this.initDevTools();
          }
        }, {
          key: "initDevTools",
          value: function initDevTools() {
            this.uiManager.initDevTools(this);
          }
        }, {
          key: "initData",
          value: function initData() {
            // ! Debug only

            /* player.setGameData({
                level: 1,
                levelProgress: {},
                passAllLevels: false,
            }) */
            var _ref6 = player$7.getGameData() || {},
                _ref6$level = _ref6.level,
                level = _ref6$level === void 0 ? 1 : _ref6$level;

            var sceneData = this.getSceneData();

            var _ref7 = sceneData || {},
                _ref7$isContextProces = _ref7.isContextProcessing,
                isContextProcessing = _ref7$isContextProces === void 0 ? false : _ref7$isContextProces;

            this.defaultData = {
              level: level,
              isContextProcessing: false
            };
            this.setGameData(this.defaultData);
            this.setGameData({
              isContextProcessing: isContextProcessing
            });
          }
        }, {
          key: "initGame",
          value: function initGame() {
            if (!this.stateManager) {
              throw new Error('StateManager is not initialized');
            }

            this.stateManager.init();
            this.stateManager.load();
          }
        }, {
          key: "setGameData",
          value: function setGameData(data) {
            if (!data) return;
            this.gameData = _objectSpread2(_objectSpread2({}, this.gameData), data);
          }
        }, {
          key: "getGameData",
          value: function getGameData() {
            return this.gameData;
          }
        }, {
          key: "getSceneData",
          value: function getSceneData() {
            var scene = this.node.scene.getComponent(SceneManager);
            return (scene === null || scene === void 0 ? void 0 : scene.getSceneData(this.node.scene.name)) || null;
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message, duration) {
            event$9.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message,
                isCloseButtonVisible: false,
                duration: duration
              }
            });
          }
        }, {
          key: "closeNotificationScreen",
          value: function closeNotificationScreen() {
            event$9.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN
            });
          }
        }, {
          key: "pauseGame",
          value: function pauseGame() {
            // ? This node are game world, not UI or Screens
            this.node.active = false;
            this.node.pauseSystemEvents(true);
            this.uiManager.pauseCountdown();
          }
        }, {
          key: "resumeGame",
          value: function resumeGame() {
            // ? This node are game world, not UI or Screens
            this.node.active = true;
            this.node.resumeSystemEvents(true);
            this.uiManager.resumeCountdown();
          }
        }, {
          key: "resumeSound",
          value: function resumeSound(name) {
            var _find, _find$getComponent;

            (_find = find('Sound')) === null || _find === void 0 ? void 0 : (_find$getComponent = _find.getComponent(Sound)) === null || _find$getComponent === void 0 ? void 0 : _find$getComponent.resume(name);
          }
        }, {
          key: "pauseSound",
          value: function pauseSound(name) {
            var _find2, _find2$getComponent;

            (_find2 = find('Sound')) === null || _find2 === void 0 ? void 0 : (_find2$getComponent = _find2.getComponent(Sound)) === null || _find2$getComponent === void 0 ? void 0 : _find2$getComponent.pause(name);
          }
        }, {
          key: "muteAudio",
          value: function muteAudio(isMute) {
            this.muteMusic(isMute);
            this.muteSound(isMute);
          }
        }, {
          key: "muteMusic",
          value: function muteMusic(isMute) {
            var _find3, _find3$getComponent;

            (_find3 = find('Music')) === null || _find3 === void 0 ? void 0 : (_find3$getComponent = _find3.getComponent(Music)) === null || _find3$getComponent === void 0 ? void 0 : _find3$getComponent.mute(isMute);
          }
        }, {
          key: "muteSound",
          value: function muteSound(isMute) {
            var _find4, _find4$getComponent;

            (_find4 = find('Sound')) === null || _find4 === void 0 ? void 0 : (_find4$getComponent = _find4.getComponent(Sound)) === null || _find4$getComponent === void 0 ? void 0 : _find4$getComponent.mute(isMute);
          }
        }]);

        return Gameplay;
      }(Component), (_descriptor$v = _applyDecoratedDescriptor(_class2$x.prototype, "hint", [_dec3$s], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$l = _applyDecoratedDescriptor(_class2$x.prototype, "gameMap", [_dec4$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$d = _applyDecoratedDescriptor(_class2$x.prototype, "lineDrawer", [_dec5$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$9 = _applyDecoratedDescriptor(_class2$x.prototype, "gameObjects", [_dec6$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$x)) || _class$S) || _class$S);

      cclegacy._RF.pop();

      var _dec$T, _dec2$C, _class$T;

      cclegacy._RF.push({}, "22d76GFn6BEoKFiZCFN1HmA", "DraftScene", undefined);

      var ccclass$T = _decorator.ccclass,
          disallowMultiple$a = _decorator.disallowMultiple,
          requireComponent$h = _decorator.requireComponent;
      var DraftScene = (_dec$T = ccclass$T('DraftScene'), _dec2$C = requireComponent$h(SceneManager), _dec$T(_class$T = disallowMultiple$a(_class$T = _dec2$C(_class$T = /*#__PURE__*/function (_Component) {
        _inherits(DraftScene, _Component);

        var _super = _createSuper(DraftScene);

        function DraftScene() {
          _classCallCheck(this, DraftScene);

          return _super.apply(this, arguments);
        }

        _createClass(DraftScene, [{
          key: "__preload",
          value: function __preload() {
            this.scene = this.getComponent(SceneManager);
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.scene) {
              throw new Error('DraftScene: SceneManager not found');
            }
          }
        }]);

        return DraftScene;
      }(Component)) || _class$T) || _class$T) || _class$T);

      cclegacy._RF.pop();

      var _dec$U, _dec2$D, _class$U;

      cclegacy._RF.push({}, "27217ZS55VNqbq0d9w9Cc+3", "Component", undefined);

      var ccclass$U = _decorator.ccclass,
          executeInEditMode$3 = _decorator.executeInEditMode,
          disallowMultiple$b = _decorator.disallowMultiple;
      var _GameCore$a = GameCore,
          Events$a = _GameCore$a.Events;
      var event$a = globalThis.game.event;
      var DraftComponent = (_dec$U = ccclass$U('DraftComponent'), _dec2$D = executeInEditMode$3(true), _dec$U(_class$U = disallowMultiple$b(_class$U = _dec2$D(_class$U = /*#__PURE__*/function (_Component) {
        _inherits(DraftComponent, _Component);

        var _super = _createSuper(DraftComponent);

        function DraftComponent() {
          var _this;

          _classCallCheck(this, DraftComponent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.locale = 'en';
          _this.eventPayload = {
            screenName: 'DraftScene'
          };
          return _this;
        }

        _createClass(DraftComponent, [{
          key: "__preload",
          value: function __preload() {
            console.log('DraftComponent', Events$a);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            console.log('DraftComponent', event$a);
          }
        }, {
          key: "start",
          value: function start() {
            console.log('DraftComponent', EDITOR);
            {
              this.makePersistent();
            }
          }
        }, {
          key: "makePersistent",
          value: function makePersistent() {
            director.addPersistRootNode(this.node);
          }
        }]);

        return DraftComponent;
      }(Component)) || _class$U) || _class$U) || _class$U);

      cclegacy._RF.pop();

      var _dec$V, _dec2$E, _class$V;

      cclegacy._RF.push({}, "9b83boaSv9PE6mRFqy0MSI8", "GameScene", undefined);

      var ccclass$V = _decorator.ccclass,
          disallowMultiple$c = _decorator.disallowMultiple,
          requireComponent$i = _decorator.requireComponent;
      var audio$2 = globalThis.game.audio;
      var Layout$2 = GameWorld.Layout;
      var GameScene = (_dec$V = ccclass$V('GameScene'), _dec2$E = requireComponent$i([SceneManager]), _dec$V(_class$V = disallowMultiple$c(_class$V = _dec2$E(_class$V = /*#__PURE__*/function (_Component) {
        _inherits(GameScene, _Component);

        var _super = _createSuper(GameScene);

        function GameScene() {
          var _this;

          _classCallCheck(this, GameScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleGameMaskWhenLayoutChanged = function (layout) {
            var gameObjectsNode = find('Canvas/Game/GameObjects');
            if (!gameObjectsNode) return;
            var maskComponent = gameObjectsNode.getComponent(Mask);
            if (!maskComponent) return;
            maskComponent.enabled = layout === Layout$2.Landscape;
          };

          _this.handleSwitchSceneEvent = function (payload) {
            var sceneName = payload.sceneName,
                sceneData = payload.sceneData;

            _this.scene.switchScene(sceneName, sceneData);
          };

          return _this;
        }

        _createClass(GameScene, [{
          key: "__preload",
          value: function __preload() {
            this.scene = this.getComponent(SceneManager);
            this.validateRequiredComponents();
            this.listenGameEvents();
            this.scene.listenSwitchSceneEvent(this.handleSwitchSceneEvent);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.scene) {
              throw new Error('GameScene: SceneManager not found');
            }
          }
        }, {
          key: "listenGameEvents",
          value: function listenGameEvents() {
            this.node.scene.on(GameEvents.LAYOUT_CHANGED, this.handleGameMaskWhenLayoutChanged);
          }
        }, {
          key: "start",
          value: function start() {
            this.updateVolumeBackgroundMusic();
          }
        }, {
          key: "updateVolumeBackgroundMusic",
          value: function updateVolumeBackgroundMusic() {
            // ? Channel 'global_music' has been created in 'LoadScene' as a persistent node for playing background music across all scenes.
            audio$2.setVolume(1, 'global_music');
          }
        }]);

        return GameScene;
      }(Component)) || _class$V) || _class$V) || _class$V);

      cclegacy._RF.pop();

      var _dec$W, _dec2$F, _class$W;

      cclegacy._RF.push({}, "254d3fxjCBGlbC4XNKvKhF6", "LoadScene", undefined);

      var ccclass$W = _decorator.ccclass,
          disallowMultiple$d = _decorator.disallowMultiple,
          requireComponent$j = _decorator.requireComponent;
      var _GameCore$b = GameCore,
          Plugins = _GameCore$b.Plugins,
          Utils$1 = _GameCore$b.Utils,
          Events$b = _GameCore$b.Events;
      var _globalThis$game$8 = globalThis.game,
          ads$1 = _globalThis$game$8.ads,
          event$b = _globalThis$game$8.event,
          player$8 = _globalThis$game$8.player,
          language$4 = _globalThis$game$8.language,
          analytics$3 = _globalThis$game$8.analytics,
          context = _globalThis$game$8.context;
      var LoadScene = (_dec$W = ccclass$W('LoadScene'), _dec2$F = requireComponent$j(SceneManager), _dec$W(_class$W = disallowMultiple$d(_class$W = _dec2$F(_class$W = /*#__PURE__*/function (_Component) {
        _inherits(LoadScene, _Component);

        var _super = _createSuper(LoadScene);

        function LoadScene() {
          var _this;

          _classCallCheck(this, LoadScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.isProgressContextData = false;

          _this.handleCoreReady = function () {
            _this.playBackgroundMusic();

            _this.startProcessContextData();
          };

          _this.handleSubscribeBot = function () {
            Utils$1.Facebook.subscribeBot()["catch"](function (error) {
              console.warn('Utils.Facebook.subscribeBot', error);
            });
          };

          _this.handleSwitchSceneEvent = function (payload) {
            var sceneName = payload.sceneName,
                sceneData = payload.sceneData; // ? If your game don't have DashboardScene, ResultScene,.. you can handle it here

            _this.scene.switchScene(sceneName, sceneData);
          };

          return _this;
        }

        _createClass(LoadScene, [{
          key: "__preload",
          value: function __preload() {
            this.setupGameData();
            this.setupLanguage();
            this.scene = this.getComponent(SceneManager);
            this.validateRequiredComponents();
            this.scene.listenSwitchSceneEvent(this.handleSwitchSceneEvent);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.scene) {
              throw new Error('GameScene: SceneManager not found');
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.runLoadingTextAnimation();
            var gameData = globalThis.game.player.getGameData(); //Preload game level

            if (gameData && gameData.level > 0) {
              var mapId = this.getMapByLevel(gameData.level);
              var levelStr = this.paddingZero(mapId.toString(), 3);
              resources.preload("".concat(ResourcePaths.MAP_JSON_PREFIX).concat(levelStr));
            }

            this.scene.preloadScene(SceneKeys.GAME_SCENE);
            event$b.once(Events$b.CORE_READY, this.handleCoreReady);
          }
        }, {
          key: "start",
          value: function start() {
            analytics$3.event(Plugins.Analytics.Events.LOAD_COMPLETE); // Check GameCore has emit CORE_READY event

            var isGameCoreReady = event$b.getEventEmitCount(Events$b.CORE_READY) > 0;

            if (isGameCoreReady && !this.isProgressContextData) {
              this.startProcessContextData();
            } // TODO: check can be preload ads before startGameAsync


            this.preloadAds(); // ? Show subscribe bot popup of facebook instant game

            this.scheduleOnce(this.handleSubscribeBot, 0.5);
          }
        }, {
          key: "startProcessContextData",
          value: function () {
            var _startProcessContextData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.isProgressContextData = true; // processContextData method will be auto switch to next scene
                    // * It will also automatically call the flows from the match plugin and context plugin
                    // ? This means that the match flow of the GameScene will need to be skipped when first entering your game

                    context.processContextData()["catch"](function (error) {
                      console.error('ContextPlugin.processContextData', error);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));

            function startProcessContextData() {
              return _startProcessContextData.apply(this, arguments);
            }

            return startProcessContextData;
          }()
        }, {
          key: "playBackgroundMusic",
          value: function playBackgroundMusic() {
            var _find;

            var music = (_find = find('Music')) === null || _find === void 0 ? void 0 : _find.getComponent(Music);
            if (!music) return;
            music.makePersistent();
            music.play('sounds/bg-music', {
              volume: 0.5
            });
          }
        }, {
          key: "getMapByLevel",
          value: function getMapByLevel(level) {
            var map = MAP.find(function (map) {
              return map.id == level;
            });
            if (map) return map.map;
            return 1;
          }
        }, {
          key: "paddingZero",
          value: function paddingZero(str, length) {
            return Array(length - str.length).fill('0').join('') + str;
          }
        }, {
          key: "runLoadingTextAnimation",
          value: function runLoadingTextAnimation() {
            var count = 0;
            var loadingText = find('Canvas/LoadingText');
            if (!loadingText) return;
            var label = loadingText.getComponent(Label);
            if (!label) return;
            var currentText = label.string;
            this.schedule(function () {
              label.string = currentText + '.'.repeat(count++ > 2 ? count = 0 : count);
            }, 0.5);
          }
        }, {
          key: "setupGameData",
          value: function setupGameData() {
            var gameData = player$8.getGameData();
            if (!gameData) return; // TODO: move to config

            var maxLevel = 325; // * Add default game data
            // ? Add interface from /types/game-core/player.d.ts

            player$8.setGameData({
              level: gameData.level || 1,
              totalLevel: gameData.totalLevel === maxLevel ? gameData.totalLevel : maxLevel,
              passAllLevels: gameData.passAllLevels || false,
              levelProgress: gameData.levelProgress || {}
            });
          }
        }, {
          key: "setupLanguage",
          value: function setupLanguage() {
            var locale = player$8.getPlayerSetting('language');
            if (!locale) return;
            language$4.choose(locale);
          }
        }, {
          key: "preloadAds",
          value: function preloadAds() {
            ads$1.preloadInterstitialAdAsync()["catch"](function () {// Safe to ignore
            });
            ads$1.preloadRewardedVideoAsync()["catch"](function () {// Safe to ignore
            });
          }
        }]);

        return LoadScene;
      }(Component)) || _class$W) || _class$W) || _class$W);

      cclegacy._RF.pop();

      var _dec$X, _dec2$G, _class$X;

      cclegacy._RF.push({}, "2b2ebUm0nFD64V/fcD8RPF/", "TestLayoutScene", undefined);

      var ccclass$X = _decorator.ccclass,
          disallowMultiple$e = _decorator.disallowMultiple,
          requireComponent$k = _decorator.requireComponent;
      var _GameCore$c = GameCore,
          Events$c = _GameCore$c.Events;
      var event$c = globalThis.game.event;
      var TestLayoutScene = (_dec$X = ccclass$X('TestLayoutScene'), _dec2$G = requireComponent$k(SceneManager), _dec$X(_class$X = disallowMultiple$e(_class$X = _dec2$G(_class$X = /*#__PURE__*/function (_Component) {
        _inherits(TestLayoutScene, _Component);

        var _super = _createSuper(TestLayoutScene);

        function TestLayoutScene() {
          var _this;

          _classCallCheck(this, TestLayoutScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleLayoutChange = function () {
            _this.closeNotificationScreen();

            _this.openNotificationScreen();
          };

          return _this;
        }

        _createClass(TestLayoutScene, [{
          key: "__preload",
          value: function __preload() {
            this.scene = this.getComponent(SceneManager);
            this.validateRequiredComponents();
            this.listenGameEvents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.scene) {
              throw new Error('TestLayoutScene: SceneManager not found');
            }
          }
        }, {
          key: "listenGameEvents",
          value: function listenGameEvents() {
            this.node.scene.on(GameEvents.LAYOUT_CHANGED, this.handleLayoutChange);
          }
        }, {
          key: "openNotificationScreen",
          value: function openNotificationScreen() {
            event$c.emit(Events$c.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                duration: 1.5,
                message: 'Layout changed'
              }
            });
          }
        }, {
          key: "closeNotificationScreen",
          value: function closeNotificationScreen() {
            event$c.emit(Events$c.CLOSE_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN
            });
          }
        }]);

        return TestLayoutScene;
      }(Component)) || _class$X) || _class$X) || _class$X);

      cclegacy._RF.pop();

      var _dec$Y, _dec2$H, _class$Y;

      cclegacy._RF.push({}, "0a4aeK2lAdAjq0xWi6SCbV+", "TestScene", undefined);

      var ccclass$Y = _decorator.ccclass,
          disallowMultiple$f = _decorator.disallowMultiple,
          requireComponent$l = _decorator.requireComponent;
      var _GameCore$d = GameCore,
          Events$d = _GameCore$d.Events;
      var event$d = globalThis.game.event;
      var TestScene = (_dec$Y = ccclass$Y('TestScene'), _dec2$H = requireComponent$l(SceneManager), _dec$Y(_class$Y = disallowMultiple$f(_class$Y = _dec2$H(_class$Y = /*#__PURE__*/function (_Component) {
        _inherits(TestScene, _Component);

        var _super = _createSuper(TestScene);

        function TestScene() {
          var _this;

          _classCallCheck(this, TestScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleSwitchSceneEvent = function (payload) {
            var _this$scene;

            var sceneName = payload.sceneName,
                sceneData = payload.sceneData;
            (_this$scene = _this.scene) === null || _this$scene === void 0 ? void 0 : _this$scene.switchScene(sceneName, sceneData);
          };

          return _this;
        }

        _createClass(TestScene, [{
          key: "__preload",
          value: function __preload() {
            this.scene = this.getComponent(SceneManager);
            this.validateRequiredComponents(); // ? Listen events by plugin Event of GameCore

            this.scene.listenSwitchSceneEvent(this.handleSwitchSceneEvent);
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.scene) {
              throw new Error('GameScene: SceneManager not found');
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.listenScreenEvents(); // TODO: add demo play sound in buttons, screen,..
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            event$d.once(Events$d.CLOSED_SCREEN, function (payload) {
              var screenName = payload.screenName;
              if (screenName !== ScreenKeys.LOADING_SCREEN) return;
              event$d.emit(Events$d.OPEN_SCREEN, {
                screenName: ScreenKeys.NOTIFICATION_SCREEN,
                screenData: {
                  message: 'Test screen events pass!',
                  duration: 2,
                  isCloseButtonVisible: false
                }
              });
            });
          }
        }, {
          key: "start",
          value: function start() {
            console.log('TestScene.start');
            event$d.emit(Events$d.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: 0.5
              }
            });
          }
        }]);

        return TestScene;
      }(Component)) || _class$Y) || _class$Y) || _class$Y);

      cclegacy._RF.pop();

      var _dec$Z, _class$Z;

      cclegacy._RF.push({}, "56a103phldKO7/xShKcD3bI", "AnimationDemo", undefined);

      var ccclass$Z = _decorator.ccclass;
      var AnimationDemo = (_dec$Z = ccclass$Z('AnimationDemo'), _dec$Z(_class$Z = /*#__PURE__*/function (_Component) {
        _inherits(AnimationDemo, _Component);

        var _super = _createSuper(AnimationDemo);

        function AnimationDemo() {
          _classCallCheck(this, AnimationDemo);

          return _super.apply(this, arguments);
        }

        _createClass(AnimationDemo, [{
          key: "onLoad",
          value: // public __preload(): void {
          //     // called before onLoad, use for initialization
          // }
          function onLoad() {
            var _this$node$parent; // called once when the component first activated, before any start methods


            this.scene = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(SceneManager);
          } // public start(): void {
          //     // called once when the component enabled for first time
          // }

        }, {
          key: "switchToTestScene2",
          value: function switchToTestScene2() {
            this.scene.switchScene('TestTransitionScene');
          }
        }]);

        return AnimationDemo;
      }(Component)) || _class$Z);

      cclegacy._RF.pop();

      var _dec$_, _class$_;

      cclegacy._RF.push({}, "a3b8adQtftPmKSSoumHWY1e", "AudioDemo", undefined);

      var ccclass$_ = _decorator.ccclass;
      var AudioDemo = (_dec$_ = ccclass$_('AudioDemo'), _dec$_(_class$_ = /*#__PURE__*/function (_Component) {
        _inherits(AudioDemo, _Component);

        var _super = _createSuper(AudioDemo);

        function AudioDemo() {
          var _this;

          _classCallCheck(this, AudioDemo);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.isMusicMute = false;
          _this.isSoundMute = false;
          _this.listSounds = [];
          return _this;
        }

        _createClass(AudioDemo, [{
          key: "onLoad",
          value: function onLoad() {
            var _find, _find2;

            this.musicComp = (_find = find('Music')) === null || _find === void 0 ? void 0 : _find.getComponent(Music);
            this.soundComp = (_find2 = find('Sound')) === null || _find2 === void 0 ? void 0 : _find2.getComponent(Sound);
            this.validateRequiredComponents();
            this.listSounds = ['sounds/bee-flying', 'sounds/bee-sting-doge', 'sounds/button-click', 'sounds/collecting-coins', 'sounds/doge-dies', 'sounds/doge-hurt', 'sounds/end-draw', 'sounds/hand-clap', 'sounds/level-fail', 'sounds/level-pass', 'sounds/lost-star-in-gameplay', 'sounds/raise-star', 'sounds/spawn-coins', 'sounds/star-raise'];
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.musicComp) {
              throw new Error('AudioDemo: Music not found');
            }

            if (!this.soundComp) {
              throw new Error('AudioDemo: Sound not found');
            }
          }
        }, {
          key: "playBackgroundMusic",
          value: function playBackgroundMusic() {
            this.musicComp.play('sounds/bg-music');
          }
        }, {
          key: "pauseBackgroundMusic",
          value: function pauseBackgroundMusic() {
            this.musicComp.pause('sounds/bg-music');
          }
        }, {
          key: "stopBackgroundMusic",
          value: function stopBackgroundMusic() {
            this.musicComp.stop('sounds/bg-music');
          }
        }, {
          key: "randomMusicChannelVolume",
          value: function randomMusicChannelVolume() {
            var random = Math.random();
            this.musicComp.setVolume(random);
          }
        }, {
          key: "toggleMuteMusicChannel",
          value: function toggleMuteMusicChannel() {
            if (this.isMusicMute) {
              this.musicComp.mute(false);
              this.isMusicMute = false;
            } else {
              this.musicComp.mute(true);
              this.isMusicMute = true;
            }
          }
        }, {
          key: "playRandomSound",
          value: function playRandomSound() {
            this.soundComp.play(this.listSounds[Math.floor(Math.random() * this.listSounds.length)]);
          }
        }, {
          key: "toggleMuteSoundChannel",
          value: function toggleMuteSoundChannel() {
            if (this.isSoundMute) {
              this.soundComp.mute(false);
              this.isSoundMute = false;
            } else {
              this.soundComp.mute(true);
              this.isSoundMute = true;
            }
          }
        }, {
          key: "randomSoundChannelVolume",
          value: function randomSoundChannelVolume() {
            var random = Math.random();
            this.soundComp.setVolume(random);
          }
        }]);

        return AudioDemo;
      }(Component)) || _class$_);

      cclegacy._RF.pop();

      var _dec$$, _class$$;

      cclegacy._RF.push({}, "9e6b330nHBK2oNz8N9/lpDx", "FlowChallenge", undefined);

      var ccclass$$ = _decorator.ccclass;
      var _globalThis$game$9 = globalThis.game,
          match$2 = _globalThis$game$9.match,
          player$9 = _globalThis$game$9.player,
          event$e = _globalThis$game$9.event;
      var FlowChallenge = (_dec$$ = ccclass$$('FlowChallenge'), _dec$$(_class$$ = /*#__PURE__*/function (_Component) {
        _inherits(FlowChallenge, _Component);

        var _super = _createSuper(FlowChallenge);

        function FlowChallenge() {
          var _this;

          _classCallCheck(this, FlowChallenge);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.playerId = '';
          return _this;
        }

        _createClass(FlowChallenge, [{
          key: "onLoad",
          value: function onLoad() {
            this.playerId = player$9.getPlayerId();
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen(duration) {
            event$e.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$e.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$e.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "inviteFriends",
          value: function () {
            var _inviteFriends = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.showLoadingScreen(0);
                    _context.next = 4;
                    return match$2.challenge.invite.processAsync({
                      playerId: this.playerId
                    });

                  case 4:
                    _context.next = 10;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    console.warn('inviteFriends', _context.t0);

                    if (_context.t0 instanceof Error) {
                      this.showNotificationScreen(_context.t0.message);
                    }

                  case 10:
                    _context.prev = 10;
                    this.closeLoadingScreen();
                    return _context.finish(10);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 6, 10, 13]]);
            }));

            function inviteFriends() {
              return _inviteFriends.apply(this, arguments);
            }

            return inviteFriends;
          }()
        }, {
          key: "challengeFriend",
          value: function () {
            var _challengeFriend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context2.prev = 1;
                    this.showLoadingScreen(0);
                    _context2.next = 5;
                    return match$2.challenge.friend.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    console.warn('challengeFriend', _context2.t0);

                    if (_context2.t0 instanceof Error) {
                      this.showNotificationScreen(_context2.t0.message);
                    }

                  case 11:
                    _context2.prev = 11;
                    this.closeLoadingScreen();
                    return _context2.finish(11);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[1, 7, 11, 14]]);
            }));

            function challengeFriend(_x, _x2) {
              return _challengeFriend.apply(this, arguments);
            }

            return challengeFriend;
          }()
        }, {
          key: "joinChallenge",
          value: function () {
            var _joinChallenge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context3.prev = 1;
                    this.showLoadingScreen(0);
                    _context3.next = 5;
                    return match$2.challenge.join.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context3.next = 11;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    console.warn('joinChallenge', _context3.t0);

                    if (_context3.t0 instanceof Error) {
                      this.showNotificationScreen(_context3.t0.message);
                    }

                  case 11:
                    _context3.prev = 11;
                    this.closeLoadingScreen();
                    return _context3.finish(11);

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[1, 7, 11, 14]]);
            }));

            function joinChallenge(_x3, _x4) {
              return _joinChallenge.apply(this, arguments);
            }

            return joinChallenge;
          }()
        }, {
          key: "continueChallenge",
          value: function () {
            var _continueChallenge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context4.prev = 1;
                    this.showLoadingScreen(0);
                    _context4.next = 5;
                    return match$2.challenge["continue"].processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context4.next = 11;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](1);
                    console.warn('continueChallenge', _context4.t0);

                    if (_context4.t0 instanceof Error) {
                      this.showNotificationScreen(_context4.t0.message);
                    }

                  case 11:
                    _context4.prev = 11;
                    this.closeLoadingScreen();
                    return _context4.finish(11);

                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[1, 7, 11, 14]]);
            }));

            function continueChallenge(_x5, _x6) {
              return _continueChallenge.apply(this, arguments);
            }

            return continueChallenge;
          }()
        }, {
          key: "finishChallenge",
          value: function () {
            var _finishChallenge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    this.showLoadingScreen(0);
                    player$9.setPlayerDataByName('score', Math.floor(Math.random() * 2));
                    _context5.next = 5;
                    return match$2.challenge.finish.processAsync({});

                  case 5:
                    _context5.next = 11;
                    break;

                  case 7:
                    _context5.prev = 7;
                    _context5.t0 = _context5["catch"](0);
                    console.warn('finishChallenge', _context5.t0);

                    if (_context5.t0 instanceof Error) {
                      this.showNotificationScreen(_context5.t0.message);
                    }

                  case 11:
                    _context5.prev = 11;
                    this.closeLoadingScreen();
                    return _context5.finish(11);

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[0, 7, 11, 14]]);
            }));

            function finishChallenge() {
              return _finishChallenge.apply(this, arguments);
            }

            return finishChallenge;
          }()
        }]);

        return FlowChallenge;
      }(Component)) || _class$$);

      cclegacy._RF.pop();

      var _dec$10, _class$10;

      cclegacy._RF.push({}, "f3decJ3ZlRLt6CDMHpl1XCe", "FlowContext", undefined);

      var ccclass$10 = _decorator.ccclass;
      var _globalThis$game$a = globalThis.game,
          match$3 = _globalThis$game$a.match,
          player$a = _globalThis$game$a.player,
          context$1 = _globalThis$game$a.context,
          event$f = _globalThis$game$a.event;
      var FlowContext = (_dec$10 = ccclass$10('FlowContext'), _dec$10(_class$10 = /*#__PURE__*/function (_Component) {
        _inherits(FlowContext, _Component);

        var _super = _createSuper(FlowContext);

        function FlowContext() {
          var _this;

          _classCallCheck(this, FlowContext);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.playerId = '';

          _this.changeContext = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(contextId, contextType, entryPointData) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    context$1.receiveContext(contextId, contextType, entryPointData);
                    _context.next = 3;
                    return context$1.detectContextSessionType();

                  case 3:
                    game.context.detectContextGameMode();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));

            return function (_x, _x2, _x3) {
              return _ref.apply(this, arguments);
            };
          }();

          return _this;
        }

        _createClass(FlowContext, [{
          key: "onLoad",
          value: function onLoad() {
            this.playerId = player$a.getPlayerId();
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen(duration) {
            event$f.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$f.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$f.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "chooseFriends",
          value: function () {
            var _chooseFriends = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context2.prev = 1;
                    this.showLoadingScreen(0);
                    _context2.next = 5;
                    return match$3.context.choose.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    console.warn('chooseFriends', _context2.t0);

                    if (_context2.t0 instanceof Error) {
                      this.showNotificationScreen(_context2.t0.message);
                    }

                  case 11:
                    _context2.prev = 11;
                    this.closeLoadingScreen();
                    return _context2.finish(11);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[1, 7, 11, 14]]);
            }));

            function chooseFriends(_x4, _x5) {
              return _chooseFriends.apply(this, arguments);
            }

            return chooseFriends;
          }()
        }, {
          key: "processContextData",
          value: function () {
            var _processContextData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    this.showLoadingScreen(0);
                    _context3.next = 4;
                    return context$1.processContextData();

                  case 4:
                    _context3.next = 10;
                    break;

                  case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3["catch"](0);
                    console.warn('processContext', _context3.t0);

                    if (_context3.t0 instanceof Error) {
                      this.showNotificationScreen(_context3.t0.message);
                    }

                  case 10:
                    _context3.prev = 10;
                    this.closeLoadingScreen();
                    return _context3.finish(10);

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 6, 10, 13]]);
            }));

            function processContextData() {
              return _processContextData.apply(this, arguments);
            }

            return processContextData;
          }()
        }, {
          key: "setSingleContext",
          value: function setSingleContext() {
            var contextId = '';
            var contextType = 'SOLO';
            var entryPointData = {};
            this.changeContext(contextId, contextType, entryPointData);
          }
        }, {
          key: "setTournamentContext",
          value: function setTournamentContext() {
            var contextId = 'mocked-context-id-tournament';
            var contextType = 'THREAD';
            var entryPointData = {}; //? for tournament = true for FBInstant.getTournamentAsync() mock check

            this.changeUrl("/?context_source_id=123&context_type=GENERIC&tournament=true");
            this.changeContext(contextId, contextType, entryPointData);
          }
        }, {
          key: "setShareInviteContext",
          value: function setShareInviteContext() {
            var sessionContextType = context$1.getSessionContextTypes();
            var SHARE_INVITE = sessionContextType.SHARE_INVITE;
            var contextId = 'mocked-context-id-share-invite';
            var contextType = 'THREAD';
            var entryPointData = {
              type: SHARE_INVITE,
              playerId: '4766619483409000',
              playerName: 'Player',
              playerPhoto: ''
            };
            this.changeContext(contextId, contextType, entryPointData);
          }
        }, {
          key: "setMatchingGroupContext",
          value: function setMatchingGroupContext() {
            var sessionContextType = context$1.getSessionContextTypes();
            var MATCHING_GROUP = sessionContextType.MATCHING_GROUP;
            var contextId = 'mocked-context-id-matching-group';
            var contextType = 'GROUP';
            var entryPointData = {
              type: MATCHING_GROUP,
              playerId: '4766619483409000',
              playerName: 'Player',
              playerPhoto: '',
              playerScore: 100
            };
            this.changeContext(contextId, contextType, entryPointData);
          }
        }, {
          key: "setChallengeFriendContext",
          value: function setChallengeFriendContext() {
            var sessionContextType = context$1.getSessionContextTypes();
            var CHALLENGE_FRIEND = sessionContextType.CHALLENGE_FRIEND;
            var contextId = 'mocked-context-id-challenge-friend';
            var contextType = 'THREAD';
            var entryPointData = {
              type: CHALLENGE_FRIEND,
              playerId: '4766619483409000',
              playerName: 'Player',
              playerPhoto: ''
            };
            this.changeContext(contextId, contextType, entryPointData);
          }
        }, {
          key: "changeUrl",
          value: function changeUrl(urlPath) {
            window.history.pushState({}, '', urlPath);
          }
        }]);

        return FlowContext;
      }(Component)) || _class$10);

      cclegacy._RF.pop();

      var _dec$11, _class$11;

      cclegacy._RF.push({}, "36562c8k/RF2p/1aLUWFaf8", "FlowGroup", undefined);

      var ccclass$11 = _decorator.ccclass;
      var _globalThis$game$b = globalThis.game,
          match$4 = _globalThis$game$b.match,
          player$b = _globalThis$game$b.player,
          event$g = _globalThis$game$b.event;
      var FlowGroup = (_dec$11 = ccclass$11('FlowGroup'), _dec$11(_class$11 = /*#__PURE__*/function (_Component) {
        _inherits(FlowGroup, _Component);

        var _super = _createSuper(FlowGroup);

        function FlowGroup() {
          var _this;

          _classCallCheck(this, FlowGroup);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.playerId = '';
          return _this;
        }

        _createClass(FlowGroup, [{
          key: "onLoad",
          value: function onLoad() {
            this.playerId = player$b.getPlayerId();
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen(duration) {
            event$g.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$g.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$g.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "startGroup",
          value: function () {
            var _startGroup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context.prev = 1;
                    this.showLoadingScreen(0);
                    _context.next = 5;
                    return match$4.group.start.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context.next = 11;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    console.warn('startGroup', _context.t0);

                    if (_context.t0 instanceof Error) {
                      this.showNotificationScreen(_context.t0.message);
                    }

                  case 11:
                    _context.prev = 11;
                    this.closeLoadingScreen();
                    return _context.finish(11);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[1, 7, 11, 14]]);
            }));

            function startGroup(_x, _x2) {
              return _startGroup.apply(this, arguments);
            }

            return startGroup;
          }()
        }, {
          key: "joinGroup",
          value: function () {
            var _joinGroup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context2.prev = 1;
                    this.showLoadingScreen(0);
                    _context2.next = 5;
                    return match$4.group.join.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    console.warn('joinGroup', _context2.t0);

                    if (_context2.t0 instanceof Error) {
                      this.showNotificationScreen(_context2.t0.message);
                    }

                  case 11:
                    _context2.prev = 11;
                    this.closeLoadingScreen();
                    return _context2.finish(11);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[1, 7, 11, 14]]);
            }));

            function joinGroup(_x3, _x4) {
              return _joinGroup.apply(this, arguments);
            }

            return joinGroup;
          }()
        }, {
          key: "finishGroup",
          value: function () {
            var _finishGroup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    this.showLoadingScreen(0);
                    player$b.setPlayerDataByName('score', Math.floor(Math.random() * 2));
                    _context3.next = 5;
                    return match$4.group.finish.processAsync();

                  case 5:
                    _context3.next = 11;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    console.warn('finishGroup', _context3.t0);

                    if (_context3.t0 instanceof Error) {
                      this.showNotificationScreen(_context3.t0.message);
                    }

                  case 11:
                    _context3.prev = 11;
                    this.closeLoadingScreen();
                    return _context3.finish(11);

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 7, 11, 14]]);
            }));

            function finishGroup() {
              return _finishGroup.apply(this, arguments);
            }

            return finishGroup;
          }()
        }]);

        return FlowGroup;
      }(Component)) || _class$11);

      cclegacy._RF.pop();

      var _dec$12, _class$12;

      cclegacy._RF.push({}, "46e6dOzDGJMa48+tVKTAEIT", "FlowSingle", undefined);

      var ccclass$12 = _decorator.ccclass;
      var _globalThis$game$c = globalThis.game,
          match$5 = _globalThis$game$c.match,
          player$c = _globalThis$game$c.player,
          event$h = _globalThis$game$c.event;
      var FlowSingle = (_dec$12 = ccclass$12('FlowSingle'), _dec$12(_class$12 = /*#__PURE__*/function (_Component) {
        _inherits(FlowSingle, _Component);

        var _super = _createSuper(FlowSingle);

        function FlowSingle() {
          var _this;

          _classCallCheck(this, FlowSingle);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.playerId = '';
          return _this;
        }

        _createClass(FlowSingle, [{
          key: "onLoad",
          value: function onLoad() {
            this.playerId = player$c.getPlayerId();
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen(duration) {
            event$h.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$h.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$h.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "startSingle",
          value: function () {
            var _startSingle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.showLoadingScreen(0);
                    _context.next = 4;
                    return match$5.single.start.processAsync({
                      playerId: this.playerId
                    });

                  case 4:
                    _context.next = 10;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    console.warn('startSingle', _context.t0);

                    if (_context.t0 instanceof Error) {
                      this.showNotificationScreen(_context.t0.message);
                    }

                  case 10:
                    _context.prev = 10;
                    this.closeLoadingScreen();
                    return _context.finish(10);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 6, 10, 13]]);
            }));

            function startSingle() {
              return _startSingle.apply(this, arguments);
            }

            return startSingle;
          }()
        }, {
          key: "finishSingle",
          value: function () {
            var _finishSingle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    player$c.setPlayerDataByName('score', Math.floor(Math.random() * 2));
                    _context2.next = 4;
                    return match$5.single.finish.processAsync();

                  case 4:
                    _context2.next = 10;
                    break;

                  case 6:
                    _context2.prev = 6;
                    _context2.t0 = _context2["catch"](0);
                    console.warn('finishSingle', _context2.t0);

                    if (_context2.t0 instanceof Error) {
                      this.showNotificationScreen(_context2.t0.message);
                    }

                  case 10:
                    _context2.prev = 10;
                    this.closeLoadingScreen();
                    return _context2.finish(10);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0, 6, 10, 13]]);
            }));

            function finishSingle() {
              return _finishSingle.apply(this, arguments);
            }

            return finishSingle;
          }()
        }]);

        return FlowSingle;
      }(Component)) || _class$12);

      cclegacy._RF.pop();

      var _dec$13, _class$13;

      cclegacy._RF.push({}, "943b1Zkv9BAaZVhinus8Bkv", "FlowTournament", undefined);

      var ccclass$13 = _decorator.ccclass;
      var _globalThis$game$d = globalThis.game,
          match$6 = _globalThis$game$d.match,
          player$d = _globalThis$game$d.player,
          event$i = _globalThis$game$d.event;
      var FlowTournament = (_dec$13 = ccclass$13('FlowTournament'), _dec$13(_class$13 = /*#__PURE__*/function (_Component) {
        _inherits(FlowTournament, _Component);

        var _super = _createSuper(FlowTournament);

        function FlowTournament() {
          var _this;

          _classCallCheck(this, FlowTournament);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));
          _this.playerId = '';
          return _this;
        }

        _createClass(FlowTournament, [{
          key: "onLoad",
          value: function onLoad() {
            this.playerId = player$d.getPlayerId();
          }
        }, {
          key: "showLoadingScreen",
          value: function showLoadingScreen(duration) {
            event$i.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "closeLoadingScreen",
          value: function closeLoadingScreen() {
            event$i.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$i.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "startTournament",
          value: function () {
            var _startTournament = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.showLoadingScreen(0);
                    _context.next = 4;
                    return match$6.tournament.start.processAsync({
                      playerId: this.playerId
                    });

                  case 4:
                    _context.next = 10;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    console.warn('startTournament', _context.t0);

                    if (_context.t0 instanceof Error) {
                      this.showNotificationScreen(_context.t0.message);
                    }

                  case 10:
                    _context.prev = 10;
                    this.closeLoadingScreen();
                    return _context.finish(10);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 6, 10, 13]]);
            }));

            function startTournament() {
              return _startTournament.apply(this, arguments);
            }

            return startTournament;
          }()
        }, {
          key: "joinTournament",
          value: function () {
            var _joinTournament = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context2.prev = 1;
                    this.showLoadingScreen(0);
                    _context2.next = 5;
                    return match$6.tournament.join.processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    console.warn('joinTournament', _context2.t0);

                    if (_context2.t0 instanceof Error) {
                      this.showNotificationScreen(_context2.t0.message);
                    }

                  case 11:
                    _context2.prev = 11;
                    this.closeLoadingScreen();
                    return _context2.finish(11);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[1, 7, 11, 14]]);
            }));

            function joinTournament(_x, _x2) {
              return _joinTournament.apply(this, arguments);
            }

            return joinTournament;
          }()
        }, {
          key: "continueTournament",
          value: function () {
            var _continueTournament = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, customEventData) {
              var payload;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    payload = JSON.parse(customEventData);
                    _context3.prev = 1;
                    this.showLoadingScreen(0);
                    _context3.next = 5;
                    return match$6.tournament["continue"].processAsync(_objectSpread2(_objectSpread2({}, payload), {}, {
                      playerId: this.playerId
                    }));

                  case 5:
                    _context3.next = 11;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    console.warn('continueTournament', _context3.t0);

                    if (_context3.t0 instanceof Error) {
                      this.showNotificationScreen(_context3.t0.message);
                    }

                  case 11:
                    _context3.prev = 11;
                    this.closeLoadingScreen();
                    return _context3.finish(11);

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[1, 7, 11, 14]]);
            }));

            function continueTournament(_x3, _x4) {
              return _continueTournament.apply(this, arguments);
            }

            return continueTournament;
          }()
        }, {
          key: "finishTournament",
          value: function () {
            var _finishTournament = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    this.showLoadingScreen(0);
                    player$d.setPlayerDataByName('score', Math.floor(Math.random() * 2));
                    _context4.next = 5;
                    return match$6.single.finish.processAsync();

                  case 5:
                    _context4.next = 11;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);
                    console.warn('finishTournament', _context4.t0);

                    if (_context4.t0 instanceof Error) {
                      this.showNotificationScreen(_context4.t0.message);
                    }

                  case 11:
                    _context4.prev = 11;
                    this.closeLoadingScreen();
                    return _context4.finish(11);

                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[0, 7, 11, 14]]);
            }));

            function finishTournament() {
              return _finishTournament.apply(this, arguments);
            }

            return finishTournament;
          }()
        }, {
          key: "createTournament",
          value: function () {
            var _createTournament = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    this.showLoadingScreen(0);
                    _context5.next = 4;
                    return match$6.tournament.create.processAsync({
                      playerId: this.playerId
                    });

                  case 4:
                    _context5.next = 10;
                    break;

                  case 6:
                    _context5.prev = 6;
                    _context5.t0 = _context5["catch"](0);
                    console.warn('createTournament', _context5.t0);

                    if (_context5.t0 instanceof Error) {
                      this.showNotificationScreen(_context5.t0.message);
                    }

                  case 10:
                    _context5.prev = 10;
                    this.closeLoadingScreen();
                    return _context5.finish(10);

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[0, 6, 10, 13]]);
            }));

            function createTournament() {
              return _createTournament.apply(this, arguments);
            }

            return createTournament;
          }()
        }]);

        return FlowTournament;
      }(Component)) || _class$13);

      cclegacy._RF.pop();

      var _dec$14, _class$14;

      cclegacy._RF.push({}, "64311EGU4RKDpfjDUran9nc", "RewardedAdsTest", undefined);

      var ccclass$14 = _decorator.ccclass;
      var _globalThis$game$e = globalThis.game,
          ads$2 = _globalThis$game$e.ads,
          event$j = _globalThis$game$e.event;
      var RewardedAdsTest = (_dec$14 = ccclass$14('RewardedAdsTest'), _dec$14(_class$14 = /*#__PURE__*/function (_Component) {
        _inherits(RewardedAdsTest, _Component);

        var _super = _createSuper(RewardedAdsTest);

        function RewardedAdsTest() {
          _classCallCheck(this, RewardedAdsTest);

          return _super.apply(this, arguments);
        }

        _createClass(RewardedAdsTest, [{
          key: "show",
          value: function show() {
            this.showRewardedAds();
          }
        }, {
          key: "showRewardedAds",
          value: function () {
            var _showRewardedAds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    event$j.emit(GameCore.Events.OPEN_SCREEN, {
                      screenName: ScreenKeys.LOADING_SCREEN,
                      screenData: {
                        message: 'Loading ads...'
                      }
                    });
                    _context.next = 4;
                    return ads$2.preloadRewardedVideoAsync();

                  case 4:
                    _context.next = 6;
                    return ads$2.showRewardedVideoAsync();

                  case 6:
                    event$j.emit(GameCore.Events.CLOSE_SCREEN, {
                      screenName: ScreenKeys.LOADING_SCREEN
                    });
                    event$j.emit(GameCore.Events.OPEN_SCREEN, {
                      screenName: ScreenKeys.NOTIFICATION_SCREEN,
                      screenData: {
                        message: 'Ads finished.',
                        duration: 2,
                        isCloseButtonVisible: false
                      }
                    });
                    _context.next = 17;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](0);
                    console.warn('showTips failed', _context.t0);

                    if (!(_typeof(_context.t0) === 'object' && _context.t0 && 'code' in _context.t0 && _context.t0.code === 'USER_INPUT')) {
                      _context.next = 16;
                      break;
                    }

                    event$j.emit(GameCore.Events.OPEN_SCREEN, {
                      screenName: ScreenKeys.NOTIFICATION_SCREEN,
                      screenData: {
                        message: 'Sorry, no rewards!\n You have cancelled the ad.',
                        duration: 2,
                        isCloseButtonVisible: false
                      }
                    });
                    return _context.abrupt("return");

                  case 16:
                    event$j.emit(GameCore.Events.OPEN_SCREEN, {
                      screenName: ScreenKeys.NOTIFICATION_SCREEN,
                      screenData: {
                        message: 'No ads to display.',
                        duration: 2,
                        isCloseButtonVisible: false
                      }
                    });

                  case 17:
                    _context.prev = 17;
                    event$j.emit(GameCore.Events.CLOSE_SCREEN, {
                      screenName: ScreenKeys.LOADING_SCREEN
                    });
                    return _context.finish(17);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 10, 17, 20]]);
            }));

            function showRewardedAds() {
              return _showRewardedAds.apply(this, arguments);
            }

            return showRewardedAds;
          }()
        }, {
          key: "close",
          value: function close() {
            event$j.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }]);

        return RewardedAdsTest;
      }(Component)) || _class$14);

      cclegacy._RF.pop();

      var _dec$15, _class$15;

      cclegacy._RF.push({}, "0fd01MYjfdD+4IeN6PtQl3m", "ScreenCongratulation", undefined);

      var ccclass$15 = _decorator.ccclass;
      var event$k = globalThis.game.event;
      var ScreenCongratulation = (_dec$15 = ccclass$15('ScreenCongratulation'), _dec$15(_class$15 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenCongratulation, _Component);

        var _super = _createSuper(ScreenCongratulation);

        function ScreenCongratulation() {
          _classCallCheck(this, ScreenCongratulation);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenCongratulation, [{
          key: "show",
          value: function show() {
            event$k.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.CONGRATULATION_SCREEN
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$k.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.CONGRATULATION_SCREEN
            });
          }
        }]);

        return ScreenCongratulation;
      }(Component)) || _class$15);

      cclegacy._RF.pop();

      var _dec$16, _class$16;

      cclegacy._RF.push({}, "26c13nB9ZtEeJG0W7g08Tp6", "ScreenLevel", undefined);

      var ccclass$16 = _decorator.ccclass;
      var event$l = globalThis.game.event;
      var ScreenLose = (_dec$16 = ccclass$16('ScreenMap'), _dec$16(_class$16 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenLose, _Component);

        var _super = _createSuper(ScreenLose);

        function ScreenLose() {
          _classCallCheck(this, ScreenLose);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenLose, [{
          key: "show",
          value: function show() {
            event$l.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.MAP_SCREEN,
              screenData: {}
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$l.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.MAP_SCREEN
            });
          }
        }]);

        return ScreenLose;
      }(Component)) || _class$16);

      cclegacy._RF.pop();

      var _dec$17, _class$17;

      cclegacy._RF.push({}, "bb2dcIUQjhPDLt7B6ga20s/", "ScreenLoading", undefined);

      var ccclass$17 = _decorator.ccclass;
      var event$m = globalThis.game.event;
      var ScreenLoading = (_dec$17 = ccclass$17('ScreenLoading'), _dec$17(_class$17 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenLoading, _Component);

        var _super = _createSuper(ScreenLoading);

        function ScreenLoading() {
          _classCallCheck(this, ScreenLoading);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenLoading, [{
          key: "show",
          value: function show(_, customEventData) {
            var duration = Number(customEventData);
            event$m.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN,
              screenData: {
                duration: duration
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$m.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }]);

        return ScreenLoading;
      }(Component)) || _class$17);

      cclegacy._RF.pop();

      var _dec$18, _class$18;

      cclegacy._RF.push({}, "f3a15oYustB1aev6BrFD/7Y", "ScreenLose", undefined);

      var ccclass$18 = _decorator.ccclass;
      var event$n = globalThis.game.event;
      var ScreenLose$1 = (_dec$18 = ccclass$18('ScreenLose'), _dec$18(_class$18 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenLose, _Component);

        var _super = _createSuper(ScreenLose);

        function ScreenLose() {
          _classCallCheck(this, ScreenLose);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenLose, [{
          key: "show",
          value: function show() {
            event$n.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.LOSE_SCREEN,
              screenData: {
                level: 1
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$n.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOSE_SCREEN
            });
          }
        }]);

        return ScreenLose;
      }(Component)) || _class$18);

      cclegacy._RF.pop();

      var _dec$19, _class$19;

      cclegacy._RF.push({}, "71603KupFhNAYktx1isDcrj", "ScreenNotification", undefined);

      var ccclass$19 = _decorator.ccclass;
      var event$o = globalThis.game.event;
      var ScreenNotification = (_dec$19 = ccclass$19('ScreenNotification'), _dec$19(_class$19 = /*#__PURE__*/function (_Component) {
        _inherits(ScreenNotification, _Component);

        var _super = _createSuper(ScreenNotification);

        function ScreenNotification() {
          _classCallCheck(this, ScreenNotification);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenNotification, [{
          key: "show",
          value: function show(_, customEventData) {
            var message = String(customEventData);
            event$o.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message,
                isCloseButtonVisible: true
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$o.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.LOADING_SCREEN
            });
          }
        }]);

        return ScreenNotification;
      }(Component)) || _class$19);

      cclegacy._RF.pop();

      var _dec$1a, _class$1a;

      cclegacy._RF.push({}, "1fb3eggYuVBQo5Uuzm/Nmjh", "ScreenSettings", undefined);

      var ccclass$1a = _decorator.ccclass;
      var event$p = globalThis.game.event;
      var ScreenSettings = (_dec$1a = ccclass$1a('ScreenSettings'), _dec$1a(_class$1a = /*#__PURE__*/function (_Component) {
        _inherits(ScreenSettings, _Component);

        var _super = _createSuper(ScreenSettings);

        function ScreenSettings() {
          _classCallCheck(this, ScreenSettings);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenSettings, [{
          key: "show",
          value: function show(_, customEventData) {
            var message = String(customEventData);
            event$p.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.SETTINGS_SCREEN,
              screenData: {
                message: message
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$p.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.SETTINGS_SCREEN
            });
          }
        }]);

        return ScreenSettings;
      }(Component)) || _class$1a);

      cclegacy._RF.pop();

      var _dec$1b, _class$1b;

      cclegacy._RF.push({}, "ae2cdksVsdJUKhhznchh9wJ", "ScreenWinning", undefined);

      var ccclass$1b = _decorator.ccclass;
      var event$q = globalThis.game.event;
      var ScreenWinning = (_dec$1b = ccclass$1b('ScreenWinning'), _dec$1b(_class$1b = /*#__PURE__*/function (_Component) {
        _inherits(ScreenWinning, _Component);

        var _super = _createSuper(ScreenWinning);

        function ScreenWinning() {
          _classCallCheck(this, ScreenWinning);

          return _super.apply(this, arguments);
        }

        _createClass(ScreenWinning, [{
          key: "show",
          value: function show() {
            event$q.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.WINNING_SCREEN,
              screenData: {
                stars: 2,
                level: 12
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            event$q.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.WINNING_SCREEN
            });
          }
        }]);

        return ScreenWinning;
      }(Component)) || _class$1b);

      cclegacy._RF.pop();

      var _dec$1c, _class$1c;

      cclegacy._RF.push({}, "abf91gNohBK7arKnziqu2PF", "AnimationDemo2", undefined);

      var ccclass$1c = _decorator.ccclass;
      var AnimationDemo2 = (_dec$1c = ccclass$1c('AnimationDemo2'), _dec$1c(_class$1c = /*#__PURE__*/function (_Component) {
        _inherits(AnimationDemo2, _Component);

        var _super = _createSuper(AnimationDemo2);

        function AnimationDemo2() {
          _classCallCheck(this, AnimationDemo2);

          return _super.apply(this, arguments);
        }

        _createClass(AnimationDemo2, [{
          key: "onLoad",
          value: function onLoad() {
            var _this$node$parent; // called once when the component first activated, before any start methods


            this.scene = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(SceneManager);
          }
        }, {
          key: "switchToTestScene2",
          value: function switchToTestScene2() {
            this.scene.switchScene('TestScene');
          }
        }]);

        return AnimationDemo2;
      }(Component)) || _class$1c);

      cclegacy._RF.pop();

      var _dec$1d, _dec2$I, _class$1d;

      cclegacy._RF.push({}, "f3521L4Mn5I3bhxr0QZJ9y9", "BackgroundMask", undefined);

      var ccclass$1d = _decorator.ccclass,
          requireComponent$m = _decorator.requireComponent;

      var changeElementMaskAlpha = function changeElementMaskAlpha(alpha) {
        var appMask = document.getElementById('app-mask');
        if (!appMask) return;
        appMask.style.background = "rgb(0 0 0 / ".concat(alpha, ")");
      };
      /**
       * Yandex only
       */


      var BackgroundMask = (_dec$1d = ccclass$1d('BackgroundMask'), _dec2$I = requireComponent$m([UIOpacity]), _dec$1d(_class$1d = _dec2$I(_class$1d = /*#__PURE__*/function (_Component) {
        _inherits(BackgroundMask, _Component);

        var _super = _createSuper(BackgroundMask);

        function BackgroundMask() {
          _classCallCheck(this, BackgroundMask);

          return _super.apply(this, arguments);
        }

        _createClass(BackgroundMask, [{
          key: "onLoad",
          value: function onLoad() {
            var opacity = this.getComponent(UIOpacity);

            if (!opacity) {
              console.warn('BackgroundMask: UIOpacity not found');
              return;
            }

            this.opacity = opacity;
            this.updateMaskAlpha();
          }
        }, {
          key: "updateMaskAlpha",
          value: function updateMaskAlpha() {
            var nodeAlpha = this.opacity.opacity / 255;
            changeElementMaskAlpha(nodeAlpha);
          }
        }]);

        return BackgroundMask;
      }(Component)) || _class$1d) || _class$1d);

      cclegacy._RF.pop();

      var _dec$1e, _dec2$J, _dec3$t, _dec4$i, _dec5$d, _dec6$a, _dec7$7, _class$1e, _class2$y, _descriptor$w, _descriptor2$m, _descriptor3$e, _descriptor4$a, _descriptor5$7;

      cclegacy._RF.push({}, "cecf2nUBzhIWZw7uJgVliXz", "CongratulationScreen", undefined);

      var ccclass$1e = _decorator.ccclass,
          property$y = _decorator.property,
          disallowMultiple$g = _decorator.disallowMultiple,
          requireComponent$n = _decorator.requireComponent;
      var _GameCore$e = GameCore,
          Events$e = _GameCore$e.Events;
      var event$r = globalThis.game.event;
      var CongratulationScreen = (_dec$1e = ccclass$1e('CongratulationScreen'), _dec2$J = requireComponent$n(BaseScreen), _dec3$t = property$y(Node), _dec4$i = property$y(Node), _dec5$d = property$y(Button), _dec6$a = property$y(Button), _dec7$7 = property$y(Button), _dec$1e(_class$1e = disallowMultiple$g(_class$1e = _dec2$J(_class$1e = (_class2$y = /*#__PURE__*/function (_Component) {
        _inherits(CongratulationScreen, _Component);

        var _super = _createSuper(CongratulationScreen);

        function CongratulationScreen() {
          var _this;

          _classCallCheck(this, CongratulationScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "congratulation", _descriptor$w, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "confirmation", _descriptor2$m, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButtonComponent", _descriptor3$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "yesButtonComponent", _descriptor4$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "noButtonComponent", _descriptor5$7, _assertThisInitialized(_this));

          _this.handleOpeningScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;
            _this.closeButtonComponent.interactable = true;
            _this.yesButtonComponent.interactable = true;
            _this.noButtonComponent.interactable = true;
          };

          _this.handleOpenedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.open();
          };

          return _this;
        }

        _createClass(CongratulationScreen, [{
          key: "__preload",
          value: function __preload() {
            this.getBaseScreen();
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "getBaseScreen",
          value: function getBaseScreen() {
            var baseScreen = this.getComponent(BaseScreen);

            if (!baseScreen) {
              console.warn('CongratulationScreen: BaseScreen not found');
              return;
            }

            this.screen = baseScreen;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.enabled = false;
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.congratulation) {
              throw new Error('CongratulationScreen: congratulation not found');
            }

            if (!this.confirmation) {
              throw new Error('CongratulationScreen: confirmation not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            // ? Here's a demo of all the events a screen has
            event$r.on(Events$e.OPENING_SCREEN, this.handleOpeningScreen);
            event$r.on(Events$e.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$r.off(Events$e.OPENING_SCREEN, this.handleOpeningScreen);
            event$r.off(Events$e.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.enabled) return;
            this.confirmation.active = false;
            this.congratulation.active = true;
          }
        }, {
          key: "close",
          value: function close() {
            this.closeButtonComponent.interactable = false;
            this.yesButtonComponent.interactable = false;
            this.noButtonComponent.interactable = false;
            event$r.emit(Events$e.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          } // ? Callback for click event of StartOverButton

        }, {
          key: "handleStartOver",
          value: function handleStartOver() {
            this.confirmation.active = true;
            this.congratulation.active = false;
            var opacity = this.confirmation.getComponent(UIOpacity);

            if (!opacity) {
              console.warn('CongratulationScreen: UIOpacity not found');
              return;
            }

            tween(opacity).set({
              opacity: 0
            }).to(0.2, {
              opacity: 255
            }, {
              easing: 'smooth'
            }).start();
            tween(this.confirmation).set({
              scale: new Vec3(0, 0, 0)
            }).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'smooth'
            }).start();
          } // ? Callback for click event of YesButton

        }, {
          key: "handleYesStartOver",
          value: function handleYesStartOver() {
            this.close();
            this.node.scene.emit(GameplayEvents.START_OVER);
          } // ? Callback for click event of NoButton

        }, {
          key: "handleNoStartOver",
          value: function handleNoStartOver() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: this.screen.data['level']
            });
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: this.screen.data['level']
            });
          }
          /* public closeConfirmation() {
              this.confirmation.active = true
              const opacity = this.confirmation.getComponent(UIOpacity)
              opacity.opacity = 255
              tween(opacity).to(0.2, { opacity: 0 }, { easing: 'smooth' }).start()
              tween(this.confirmation)
                  .to(0.2, { scale: new Vec3(0, 0, 0) }, { easing: 'smooth' })
                  .call(() => {
                      this.confirmation.active = false
                  })
                  .start()
          } */

        }]);

        return CongratulationScreen;
      }(Component), (_descriptor$w = _applyDecoratedDescriptor(_class2$y.prototype, "congratulation", [_dec3$t], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$m = _applyDecoratedDescriptor(_class2$y.prototype, "confirmation", [_dec4$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$e = _applyDecoratedDescriptor(_class2$y.prototype, "closeButtonComponent", [_dec5$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$a = _applyDecoratedDescriptor(_class2$y.prototype, "yesButtonComponent", [_dec6$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$7 = _applyDecoratedDescriptor(_class2$y.prototype, "noButtonComponent", [_dec7$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$y)) || _class$1e) || _class$1e) || _class$1e);

      cclegacy._RF.pop();

      var _dec$1f, _dec2$K, _class$1f;

      cclegacy._RF.push({}, "61985gSEDBMY6nVNc9Q1D6W", "LoadingScreen", undefined);

      var ccclass$1f = _decorator.ccclass,
          disallowMultiple$h = _decorator.disallowMultiple,
          requireComponent$o = _decorator.requireComponent;
      var _GameCore$f = GameCore,
          Events$f = _GameCore$f.Events;
      var event$s = globalThis.game.event;
      var LoadingScreen = (_dec$1f = ccclass$1f('LoadingScreen'), _dec2$K = requireComponent$o(BaseScreen), _dec$1f(_class$1f = disallowMultiple$h(_class$1f = _dec2$K(_class$1f = /*#__PURE__*/function (_Component) {
        _inherits(LoadingScreen, _Component);

        var _super = _createSuper(LoadingScreen);

        function LoadingScreen() {
          var _this;

          _classCallCheck(this, LoadingScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _this.handleOpeningScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;
            _this.enabled = true;
          };

          _this.handleOpenedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.open();
          };

          _this.handleClosingScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.unscheduleAllCallbacks();
          };

          _this.handleClosedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;
            _this.enabled = false;
          };

          _this.handleOnCloseScreen = function () {
            event$s.emit(Events$f.CLOSE_SCREEN, {
              screenName: _this.node.name
            });
          };

          return _this;
        }

        _createClass(LoadingScreen, [{
          key: "__preload",
          value: function __preload() {
            this.getBaseScreen();
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "getBaseScreen",
          value: function getBaseScreen() {
            var baseScreen = this.getComponent(BaseScreen);

            if (!baseScreen) {
              console.warn('LoadingScreen: BaseScreen not found');
              return;
            }

            this.screen = baseScreen;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.enabled = false;
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            // ? Here's a demo of all the events a screen has
            event$s.on(Events$f.OPENING_SCREEN, this.handleOpeningScreen);
            event$s.on(Events$f.OPENED_SCREEN, this.handleOpenedScreen);
            event$s.on(Events$f.CLOSING_SCREEN, this.handleClosingScreen);
            event$s.on(Events$f.CLOSED_SCREEN, this.handleClosedScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$s.off(Events$f.OPENING_SCREEN, this.handleOpeningScreen);
            event$s.off(Events$f.OPENED_SCREEN, this.handleOpenedScreen);
            event$s.off(Events$f.CLOSING_SCREEN, this.handleClosingScreen);
            event$s.off(Events$f.CLOSED_SCREEN, this.handleClosedScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.enabled) return;
            var duration = this.screen.data['duration'];

            if (duration > 0) {
              this.scheduleOnce(this.handleOnCloseScreen, duration);
            }
          }
        }]);

        return LoadingScreen;
      }(Component)) || _class$1f) || _class$1f) || _class$1f);

      cclegacy._RF.pop();

      var _dec$1g, _dec2$L, _dec3$u, _dec4$j, _dec5$e, _dec6$b, _dec7$8, _dec8$5, _class$1g, _class2$z, _descriptor$x, _descriptor2$n, _descriptor3$f, _descriptor4$b, _descriptor5$8, _descriptor6$6;

      cclegacy._RF.push({}, "15681ka+CZC45B7BdUhsnhF", "LoseScreen", undefined);

      var ccclass$1g = _decorator.ccclass,
          property$z = _decorator.property,
          disallowMultiple$i = _decorator.disallowMultiple,
          requireComponent$p = _decorator.requireComponent;
      var _GameCore$g = GameCore,
          Events$g = _GameCore$g.Events,
          Configs = _GameCore$g.Configs;
      var _globalThis$game$f = globalThis.game,
          ads$3 = _globalThis$game$f.ads,
          language$5 = _globalThis$game$f.language,
          event$t = _globalThis$game$f.event;
      var LoseScreen = (_dec$1g = ccclass$1g('LoseScreen'), _dec2$L = requireComponent$p(BaseScreen), _dec3$u = property$z(Label), _dec4$j = property$z(Button), _dec5$e = property$z(Node), _dec6$b = property$z(Node), _dec7$8 = property$z(Button), _dec8$5 = property$z(Button), _dec$1g(_class$1g = disallowMultiple$i(_class$1g = _dec2$L(_class$1g = (_class2$z = /*#__PURE__*/function (_Component) {
        _inherits(LoseScreen, _Component);

        var _super = _createSuper(LoseScreen);

        function LoseScreen() {
          var _this;

          _classCallCheck(this, LoseScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "levelText", _descriptor$x, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryButton", _descriptor2$n, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "titleRibbon", _descriptor3$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dogeHead", _descriptor4$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryButtonComponent", _descriptor5$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButtonComponent", _descriptor6$6, _assertThisInitialized(_this));

          _this.handleOpeningScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;
            _this.retryButtonComponent.interactable = true;
            _this.closeButtonComponent.interactable = true;
          };

          _this.handleOpenedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.open();
          };

          _this.showInterstitialAdAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var level, status, beforeTime, loadingText, displayTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  level = _this.screen.data['level'];

                  if (!(Configs.Gameplay.StartAdAtLevel > level)) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  if (ads$3.canbeShowInterstitialAd()) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  status = ads$3.getAdStatus(GameCore.Plugins.Ads.Types.INTERSTITIAL);

                  if (!(status !== GameCore.Plugins.Ads.Status.FILLED)) {
                    _context.next = 9;
                    break;
                  }

                  ads$3.preloadInterstitialAdAsync()["catch"](function () {// Safe to ignore
                  });
                  return _context.abrupt("return");

                case 9:
                  beforeTime = Date.now();
                  _context.prev = 10;

                  _this.muteAudio(true);

                  loadingText = language$5.getText('loading');

                  _this.showNotificationScreen(loadingText);

                  _context.next = 16;
                  return ads$3.showInterstitialAdAsync();

                case 16:
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](10);
                  console.error('showInterstitialAdAsync failed', _context.t0);

                case 21:
                  _context.prev = 21;

                  _this.muteAudio(false);

                  displayTime = (Date.now() - beforeTime) / 1000;

                  _this.scheduleOnce(function () {
                    _this.closeNotificationScreen();
                  }, displayTime > 0.5 ? 0 : 0.5);

                  ads$3.preloadInterstitialAdAsync()["catch"](function () {// Safe to ignore
                  });
                  return _context.finish(21);

                case 27:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[10, 18, 21, 27]]);
          }));
          return _this;
        }

        _createClass(LoseScreen, [{
          key: "__preload",
          value: function __preload() {
            this.getBaseScreen();
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "getBaseScreen",
          value: function getBaseScreen() {
            var baseScreen = this.getComponent(BaseScreen);

            if (!baseScreen) {
              console.warn('LoseScreen: BaseScreen not found');
              return;
            }

            this.screen = baseScreen;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.enabled = false;
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.levelText) {
              throw new Error('LoseScreen: levelText not found');
            }

            if (!this.retryButton) {
              throw new Error('LoseScreen: retryButton not found');
            }

            if (!this.titleRibbon) {
              throw new Error('LoseScreen: titleRibbon not found');
            }

            if (!this.dogeHead) {
              throw new Error('LoseScreen: dogeHead not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            // ? Here's a demo of all the events a screen has
            event$t.on(Events$g.OPENING_SCREEN, this.handleOpeningScreen);
            event$t.on(Events$g.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$t.off(Events$g.OPENING_SCREEN, this.handleOpeningScreen);
            event$t.off(Events$g.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "open",
          value: function open() {
            this.setLevelText();
            this.resetState();
            this.runOpenAnimation();
          }
        }, {
          key: "close",
          value: function close() {
            this.closeButtonComponent.interactable = false;
            this.retryButtonComponent.interactable = false;
            event$t.emit(Events$g.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          }
        }, {
          key: "runOpenAnimation",
          value: function runOpenAnimation() {
            var ribbonAnim = this.createRibbonAnim();
            var levelAnim = this.createLevelAnim();
            var dogeHeadAnim = this.createDogeHeadAnim();
            var retryButtonAnim = this.createRetryButtonAnim();

            if (!ribbonAnim || !levelAnim || !dogeHeadAnim || !retryButtonAnim) {
              console.warn('LoseScreen: animations not found');
              return;
            } // * This is a demo of how to use tween for parallel any type of tween


            tween({}).delay(0.2).call(function () {
              return ribbonAnim.start();
            }).delay(0.2).call(function () {
              return levelAnim.start();
            }).delay(0.3).call(function () {
              return dogeHeadAnim.start();
            }).delay(0.2).call(function () {
              return retryButtonAnim.start();
            }).start();
          }
        }, {
          key: "resetState",
          value: function resetState() {
            var retryOpacity = this.retryButton.getComponent(UIOpacity);
            var ribbonOpacity = this.titleRibbon.getComponent(UIOpacity);
            var levelOpacity = this.levelText.getComponent(UIOpacity);
            var dogeOpacity = this.dogeHead.getComponent(UIOpacity);

            if (!retryOpacity || !ribbonOpacity || !levelOpacity || !dogeOpacity) {
              console.warn('LoseScreen: UIOpacity of some component not found');
              return;
            }

            retryOpacity.opacity = 0;
            ribbonOpacity.opacity = 0;
            levelOpacity.opacity = 0;
            dogeOpacity.opacity = 0;
            this.dogeHead.setPosition(1000, -19);
            this.retryButton.node.active = false;
          }
        }, {
          key: "setLevelText",
          value: function setLevelText() {
            var level = this.screen.data['level'];
            var levelText = language$5.getText('level');
            this.levelText.string = levelText + " ".concat(level);
          }
        }, {
          key: "createRibbonAnim",
          value: function createRibbonAnim() {
            var opacity = this.titleRibbon.getComponent(UIOpacity);
            if (!opacity) return null;
            return tween(opacity).set({
              opacity: 0
            }).to(0.3, {
              opacity: 255
            }, {
              easing: 'smooth'
            });
          }
        }, {
          key: "createLevelAnim",
          value: function createLevelAnim() {
            var opacity = this.levelText.getComponent(UIOpacity);
            if (!opacity) return null;
            return tween(opacity).set({
              opacity: 0
            }).to(0.3, {
              opacity: 255
            }, {
              easing: 'smooth'
            });
          }
        }, {
          key: "createDogeHeadAnim",
          value: function createDogeHeadAnim() {
            var opacity = this.dogeHead.getComponent(UIOpacity);
            if (!opacity) return null;
            this.dogeHead.setPosition(0, -97);
            return tween(opacity).set({
              opacity: 0
            }).to(0.3, {
              opacity: 255
            }, {
              easing: 'smooth'
            });
          }
        }, {
          key: "createRetryButtonAnim",
          value: function createRetryButtonAnim() {
            var opacity = this.retryButton.getComponent(UIOpacity);
            if (!opacity) return null;
            this.retryButton.node.active = true;
            return tween(opacity).set({
              opacity: 0
            }).to(0.4, {
              opacity: 255
            }, {
              easing: 'smooth'
            }).call(this.showInterstitialAdAsync);
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$t.emit(GameCore.Events.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message,
                isCloseButtonVisible: false
              }
            });
          }
        }, {
          key: "closeNotificationScreen",
          value: function closeNotificationScreen() {
            event$t.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN
            });
          }
        }, {
          key: "muteAudio",
          value: function muteAudio(isMute) {
            this.muteMusic(isMute);
            this.muteSound(isMute);
          }
        }, {
          key: "getMusicComponent",
          value: function getMusicComponent() {
            var _find;

            var music = (_find = find('Music')) === null || _find === void 0 ? void 0 : _find.getComponent(Music);

            if (!music) {
              console.warn('LoseScreen: Music not found');
              return null;
            }

            return music;
          }
        }, {
          key: "getSoundComponent",
          value: function getSoundComponent() {
            var _find2;

            var sound = (_find2 = find('Sound')) === null || _find2 === void 0 ? void 0 : _find2.getComponent(Sound);

            if (!sound) {
              console.warn('LoseScreen: Sound not found');
              return null;
            }

            return sound;
          }
        }, {
          key: "muteMusic",
          value: function muteMusic(isMute) {
            var music = this.getMusicComponent();
            if (!music) return;
            music.mute(isMute);
          }
        }, {
          key: "muteSound",
          value: function muteSound(isMute) {
            var sound = this.getSoundComponent();
            if (!sound) return;
            sound.mute(isMute);
          } // ? Callback for click event of RetryButton

        }, {
          key: "handleClickedRetryGame",
          value: function handleClickedRetryGame() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: this.screen.data['level']
            });
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: this.screen.data['level']
            });
          }
        }]);

        return LoseScreen;
      }(Component), (_descriptor$x = _applyDecoratedDescriptor(_class2$z.prototype, "levelText", [_dec3$u], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$n = _applyDecoratedDescriptor(_class2$z.prototype, "retryButton", [_dec4$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$f = _applyDecoratedDescriptor(_class2$z.prototype, "titleRibbon", [_dec5$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$b = _applyDecoratedDescriptor(_class2$z.prototype, "dogeHead", [_dec6$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$8 = _applyDecoratedDescriptor(_class2$z.prototype, "retryButtonComponent", [_dec7$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$6 = _applyDecoratedDescriptor(_class2$z.prototype, "closeButtonComponent", [_dec8$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$z)) || _class$1g) || _class$1g) || _class$1g);

      cclegacy._RF.pop();

      var _dec$1h, _dec2$M, _dec3$v, _dec4$k, _dec5$f, _dec6$c, _dec7$9, _class$1h, _class2$A, _descriptor$y, _descriptor2$o, _descriptor3$g, _descriptor4$c, _descriptor5$9, _descriptor6$7;

      cclegacy._RF.push({}, "bbd34WHFjJCmq50BjGX3b5M", "Level", undefined);

      var ccclass$1h = _decorator.ccclass,
          property$A = _decorator.property;
      var Level = (_dec$1h = ccclass$1h('Level'), _dec2$M = property$A(Component), _dec3$v = property$A(Star), _dec4$k = property$A(Star), _dec5$f = property$A(Star), _dec6$c = property$A(Label), _dec7$9 = property$A(Component), _dec$1h(_class$1h = (_class2$A = /*#__PURE__*/function (_Component) {
        _inherits(Level, _Component);

        var _super = _createSuper(Level);

        function Level() {
          var _this;

          _classCallCheck(this, Level);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "mapCompleteBg", _descriptor$y, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftStar", _descriptor2$o, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "midStar", _descriptor3$g, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightStar", _descriptor4$c, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "levelLabel", _descriptor5$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lockImage", _descriptor6$7, _assertThisInitialized(_this));

          _this.level = 0;
          return _this;
        }

        _createClass(Level, [{
          key: "onLoad",
          value: function onLoad() {
            this.button = this.button;
            this.opacity = this.opacity;
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.mapCompleteBg) {
              throw new Error('Level: mapCompleteBg not found');
            }

            if (!this.leftStar) {
              throw new Error('Level: leftStar not found');
            }

            if (!this.midStar) {
              throw new Error('Level: midStar not found');
            }

            if (!this.rightStar) {
              throw new Error('Level: rightStar not found');
            }

            if (!this.levelLabel) {
              throw new Error('Level: levelLabel not found');
            }

            if (!this.lockImage) {
              throw new Error('Level: lockImage not found');
            }

            if (!this.button) {
              throw new Error('Level: button not found');
            }

            if (!this.opacity) {
              throw new Error('Level: opacity not found');
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            this.opacity.opacity = 0;
            this.button.interactable = false;
          }
        }, {
          key: "showLevel",
          value: function showLevel(level) {
            this.opacity.opacity = 255;
            this.level = level;
            this.levelLabel.string = "".concat(level);
          }
        }, {
          key: "lock",
          value: function lock() {
            this.mapCompleteBg.node.active = false;
            this.lockImage.node.active = true;
            this.leftStar.hide();
            this.midStar.hide();
            this.rightStar.hide();
            this.button.interactable = false;
          }
        }, {
          key: "unlock",
          value: function unlock(starsCollected) {
            this.mapCompleteBg.node.active = true;
            this.lockImage.node.active = false;
            var stars = [this.leftStar, this.midStar, this.rightStar];
            stars.forEach(function (star) {
              star.hide();
            });

            for (var i = 0; i < starsCollected; i++) {
              stars[i].show();
            }

            this.button.interactable = true;
          } // ? Callback for click event of Level prefab (Button)

        }, {
          key: "handleClickLevel",
          value: function handleClickLevel() {
            var mapScreen = this.node.scene.getComponentInChildren(MapScreen);

            if (!mapScreen) {
              throw new Error('Level: mapScreen not found');
            }

            mapScreen.onClickLevelHandler(this.level);
          }
        }]);

        return Level;
      }(Component), (_descriptor$y = _applyDecoratedDescriptor(_class2$A.prototype, "mapCompleteBg", [_dec2$M], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$o = _applyDecoratedDescriptor(_class2$A.prototype, "leftStar", [_dec3$v], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$g = _applyDecoratedDescriptor(_class2$A.prototype, "midStar", [_dec4$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$c = _applyDecoratedDescriptor(_class2$A.prototype, "rightStar", [_dec5$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$9 = _applyDecoratedDescriptor(_class2$A.prototype, "levelLabel", [_dec6$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$7 = _applyDecoratedDescriptor(_class2$A.prototype, "lockImage", [_dec7$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$A)) || _class$1h);

      cclegacy._RF.pop();

      var _dec$1i, _dec2$N, _class$1i, _class2$B, _descriptor$z;

      cclegacy._RF.push({}, "41251lOicdCvobjHPW9e2O/", "LevelRow", undefined);

      var ccclass$1i = _decorator.ccclass,
          property$B = _decorator.property;
      var player$e = globalThis.game.player;
      var LevelRow = (_dec$1i = ccclass$1i('LevelRow'), _dec2$N = property$B(Prefab), _dec$1i(_class$1i = (_class2$B = /*#__PURE__*/function (_Component) {
        _inherits(LevelRow, _Component);

        var _super = _createSuper(LevelRow);

        function LevelRow() {
          var _this;

          _classCallCheck(this, LevelRow);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "levelPrefab", _descriptor$z, _assertThisInitialized(_this));

          _this.numberOfLevels = 0;
          _this.idx = 0;
          return _this;
        }

        _createClass(LevelRow, [{
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.levelPrefab) {
              throw new Error('LevelRow: levelPrefab not found');
            }
          }
        }, {
          key: "initLevels",
          value: function initLevels(levels) {
            this.numberOfLevels = levels;

            for (var i = 0; i < this.numberOfLevels; i++) {
              var level = instantiate(this.levelPrefab);
              this.node.addChild(level);
            }
          }
        }, {
          key: "updateLevels",
          value: function updateLevels() {
            var levels = this.getComponentsInChildren(Level);
            var levelNumber = this.numberOfLevels * this.idx + 1;
            var gameData = player$e.getGameData();
            var totalLevel = gameData.totalLevel;
            levels.forEach(function (level) {
              if (levelNumber > totalLevel) {
                level.hide();
                return;
              }

              var stars = gameData.levelProgress[levelNumber];
              level.showLevel(levelNumber);

              if (stars === undefined) {
                level.lock();
              } else {
                level.unlock(stars);
              }

              levelNumber++;
            });
          }
        }]);

        return LevelRow;
      }(Component), _descriptor$z = _applyDecoratedDescriptor(_class2$B.prototype, "levelPrefab", [_dec2$N], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$B)) || _class$1i);

      cclegacy._RF.pop();

      var _dec$1j, _dec2$O, _dec3$w, _dec4$l, _dec5$g, _dec6$d, _dec7$a, _class$1j, _class2$C, _descriptor$A, _descriptor2$p, _descriptor3$h, _descriptor4$d, _descriptor5$a;

      cclegacy._RF.push({}, "e9d44/Jje1Ckr/By+X44J7B", "MapScreen", undefined);

      var ccclass$1j = _decorator.ccclass,
          property$C = _decorator.property,
          disallowMultiple$j = _decorator.disallowMultiple,
          requireComponent$q = _decorator.requireComponent;
      var _GameCore$h = GameCore,
          Events$h = _GameCore$h.Events;
      var _globalThis$game$g = globalThis.game,
          player$f = _globalThis$game$g.player,
          event$u = _globalThis$game$g.event;
      var MapScreen = (_dec$1j = ccclass$1j('MapScreen'), _dec2$O = requireComponent$q(BaseScreen), _dec3$w = property$C(Mask), _dec4$l = property$C(Prefab), _dec5$g = property$C(Component), _dec6$d = property$C(CCInteger), _dec7$a = property$C(CCInteger), _dec$1j(_class$1j = disallowMultiple$j(_class$1j = _dec2$O(_class$1j = (_class2$C = /*#__PURE__*/function (_Component) {
        _inherits(MapScreen, _Component);

        var _super = _createSuper(MapScreen);

        function MapScreen() {
          var _this;

          _classCallCheck(this, MapScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "mask", _descriptor$A, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "levelRowPrefab", _descriptor2$p, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapContent", _descriptor3$h, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "column", _descriptor4$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "row", _descriptor5$a, _assertThisInitialized(_this));

          _this.maxLevelRow = 0;
          _this.beginContentY = 0;
          _this.isSetup = false;

          _this.handleOpenedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.open();
          };

          return _this;
        }

        _createClass(MapScreen, [{
          key: "__preload",
          value: function __preload() {
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.enabled = false;
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.mask) {
              throw new Error('MapScreen: mask not found');
            }

            if (!this.levelRowPrefab) {
              throw new Error('MapScreen: levelRowPrefab not found');
            }

            if (!this.mapContent) {
              throw new Error('MapScreen: mapContent not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            // ? Here's a demo of all the events a screen has
            event$u.on(Events$h.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$u.off(Events$h.OPENED_SCREEN, this.handleOpenedScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.enabled) return;

            if (!this.isSetup) {
              this.isSetup = true;
              this.setUpMap();
            }

            var widget = this.mapContent.getComponent(Widget);

            if (!widget) {
              console.warn('MapScreen: widget not found');
              return;
            }

            widget.updateAlignment();
            this.showCurrentLevel();
          }
        }, {
          key: "close",
          value: function close() {
            event$u.emit(GameCore.Events.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          }
        }, {
          key: "showCurrentLevel",
          value: function showCurrentLevel() {
            var gameData = player$f.getGameData();

            if (!gameData) {
              console.warn('MapScreen: gameData not found');
              return;
            }

            var currentLevel = gameData.level;
            var rowIdx = this.getRowIndexBylLevel(currentLevel);

            if (rowIdx > 0) {
              rowIdx -= 1;
            }

            var rows = this.mapContent.node.getComponentsInChildren(LevelRow);

            for (var i = 0; i < rows.length; i++) {
              var row = rows[i];
              row.idx = rowIdx;
              row.updateLevels();
              rowIdx++;
            }
          }
        }, {
          key: "getRowIndexBylLevel",
          value: function getRowIndexBylLevel(level) {
            var rowIdx = Math.floor(level / this.column);
            var isLevelAtLastColumn = level % this.column === 0;
            if (isLevelAtLastColumn) rowIdx -= 1;
            return rowIdx;
          }
        }, {
          key: "update",
          value: function update(_deltaTime) {
            var content = this.mapContent.node;
            var isScrollUpNeedRow = content.position.y > -this.beginContentY;
            var isScrollDownNeedRow = content.position.y < this.beginContentY;
            if (isScrollDownNeedRow) this.handleScrollDown();else if (isScrollUpNeedRow) this.handleScrollUp();
          }
        }, {
          key: "addRows",
          value: function addRows(rows) {
            for (var i = 0; i < rows; i++) {
              var row = instantiate(this.levelRowPrefab);
              if (!row) continue;
              var levelRow = row.getComponent(LevelRow);
              if (!levelRow) continue;
              levelRow.initLevels(this.column);
              this.mapContent.node.addChild(row);
            }
          }
        }, {
          key: "updateMaskHeight",
          value: function updateMaskHeight() {
            var maskUITransform = this.mask.getComponent(UITransform);
            var mapContentUITransform = this.mapContent.getComponent(UITransform);

            if (!maskUITransform || !mapContentUITransform) {
              console.warn('MapScreen: UITransform of some node not found');
              return;
            }

            var width = maskUITransform.width;
            var height = mapContentUITransform.height;
            maskUITransform.setContentSize(new math.Size(width, height));
          }
        }, {
          key: "initRow",
          value: function initRow() {
            var gameData = player$f.getGameData();

            if (!gameData) {
              console.warn('MapScreen: gameData not found');
              return;
            }

            var totalLevel = gameData.totalLevel;
            this.maxLevelRow = Math.ceil(totalLevel / this.column);
            this.row = Math.min(this.row, this.maxLevelRow);
            this.addRows(this.row);
          }
        }, {
          key: "setUpMap",
          value: function setUpMap() {
            this.initRow();
            this.updateMaskHeight();

            if (this.maxLevelRow > this.row) {
              var extendsRow = this.maxLevelRow - this.row >= 2 ? 2 : 1;
              this.addRows(extendsRow);
            }

            var layout = this.mapContent.getComponent(Layout$3);

            if (!layout) {
              console.warn('MapScreen: layout not found');
              return;
            }

            layout.updateLayout(true);
            var widget = this.mapContent.getComponent(Widget);

            if (!widget) {
              console.warn('MapScreen: widget not found');
              return;
            }

            widget.updateAlignment();
            this.beginContentY = this.mapContent.node.position.y;
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            this.close();
          }
        }, {
          key: "onClickLevelHandler",
          value: function onClickLevelHandler(level) {
            this.node.scene.emit(GameplayEvents.SELECT_LEVEL, {
              level: level
            });
          }
        }, {
          key: "handleScrollDown",
          value: function handleScrollDown() {
            var content = this.mapContent.node;
            var length = content.children.length;
            var firstRow = content.children[0].getComponent(LevelRow);
            if (!firstRow || firstRow.idx === 0) return;
            var row = content.children[length - 1];
            var levelRow = row.getComponent(LevelRow);
            if (!levelRow) return;
            levelRow.idx = firstRow.idx - 1;
            levelRow.updateLevels();
            content.removeChild(row);
            content.insertChild(row, 0);
            this.mapContent.node.setPosition(new Vec3(0, 0));
          }
        }, {
          key: "handleScrollUp",
          value: function handleScrollUp() {
            var content = this.mapContent.node;
            var length = content.children.length;
            var lastRow = content.children[length - 1].getComponent(LevelRow);
            if (!lastRow || lastRow.idx === this.maxLevelRow - 1) return;
            var row = content.children[0];
            var levelRow = row.getComponent(LevelRow);
            if (!levelRow) return;
            levelRow.idx = lastRow.idx + 1;
            levelRow.updateLevels();
            content.removeChild(row);
            content.addChild(row);
            this.mapContent.node.setPosition(new Vec3(0, 0));
          }
        }]);

        return MapScreen;
      }(Component), (_descriptor$A = _applyDecoratedDescriptor(_class2$C.prototype, "mask", [_dec3$w], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$p = _applyDecoratedDescriptor(_class2$C.prototype, "levelRowPrefab", [_dec4$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$h = _applyDecoratedDescriptor(_class2$C.prototype, "mapContent", [_dec5$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$d = _applyDecoratedDescriptor(_class2$C.prototype, "column", [_dec6$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor5$a = _applyDecoratedDescriptor(_class2$C.prototype, "row", [_dec7$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      })), _class2$C)) || _class$1j) || _class$1j) || _class$1j);

      cclegacy._RF.pop();

      var _dec$1k, _dec2$P, _dec3$x, _dec4$m, _class$1k, _class2$D, _descriptor$B, _descriptor2$q;

      cclegacy._RF.push({}, "6460akNFfhP9pDOT2Z0+s2R", "NotificationScreen", undefined);

      var ccclass$1k = _decorator.ccclass,
          disallowMultiple$k = _decorator.disallowMultiple,
          requireComponent$r = _decorator.requireComponent,
          property$D = _decorator.property;
      var _GameCore$i = GameCore,
          Events$i = _GameCore$i.Events;
      var event$v = globalThis.game.event;
      var NotificationScreen = (_dec$1k = ccclass$1k('NotificationScreen'), _dec2$P = requireComponent$r(BaseScreen), _dec3$x = property$D(Label), _dec4$m = property$D(Button), _dec$1k(_class$1k = disallowMultiple$k(_class$1k = _dec2$P(_class$1k = (_class2$D = /*#__PURE__*/function (_Component) {
        _inherits(NotificationScreen, _Component);

        var _super = _createSuper(NotificationScreen);

        function NotificationScreen() {
          var _this;

          _classCallCheck(this, NotificationScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "message", _descriptor$B, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButton", _descriptor2$q, _assertThisInitialized(_this));

          _this.handleOpeningScreen = function (payload) {
            console.log('NotificationScreen.OPENING_SCREEN', payload);
            if (!_this.validateEventPayload(payload)) return; // ? this.screen.data only available after OPENING_SCREEN event
            // ? Or use this.screen.data as payload.screenData

            _this.updateScreenData(payload);
          };

          _this.handleClosingScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.unscheduleAllCallbacks();
          };

          return _this;
        }

        _createClass(NotificationScreen, [{
          key: "__preload",
          value: function __preload() {
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.message) {
              throw new Error('NotificationScreen: message not found');
            }

            if (!this.closeButton) {
              throw new Error('NotificationScreen: closeButton not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            event$v.on(Events$i.OPENING_SCREEN, this.handleOpeningScreen);
            event$v.on(Events$i.CLOSING_SCREEN, this.handleClosingScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$v.off(Events$i.OPENING_SCREEN, this.handleOpeningScreen);
            event$v.off(Events$i.CLOSING_SCREEN, this.handleClosingScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "updateScreenData",
          value: function updateScreenData(payload) {
            var _this2 = this;

            if (!payload.screenData) return;
            var screenData = payload.screenData;

            if (screenData['message']) {
              this.message.string = screenData['message'];
            }

            if (screenData['duration'] && screenData['duration'] > 0) {
              this.scheduleOnce(function () {
                event$v.emit(Events$i.CLOSE_SCREEN, {
                  screenName: _this2.node.name
                });
              }, screenData['duration']);
            }

            this.closeButton.node.active = true;

            if (screenData['isCloseButtonVisible'] === false) {
              this.closeButton.node.active = false;
            }
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            event$v.emit(Events$i.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          }
        }]);

        return NotificationScreen;
      }(Component), (_descriptor$B = _applyDecoratedDescriptor(_class2$D.prototype, "message", [_dec3$x], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$q = _applyDecoratedDescriptor(_class2$D.prototype, "closeButton", [_dec4$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$D)) || _class$1k) || _class$1k) || _class$1k);

      cclegacy._RF.pop();

      var _dec$1l, _dec2$Q, _dec3$y, _dec4$n, _dec5$h, _dec6$e, _dec7$b, _class$1l, _class2$E, _descriptor$C, _descriptor2$r, _descriptor3$i, _descriptor4$e, _descriptor5$b;

      cclegacy._RF.push({}, "61932YLC/5CFrE0eD0ez8Zg", "SettingsScreen", undefined);

      var ccclass$1l = _decorator.ccclass,
          property$E = _decorator.property,
          requireComponent$s = _decorator.requireComponent;
      var _GameCore$j = GameCore,
          Events$j = _GameCore$j.Events,
          Utils$2 = _GameCore$j.Utils;
      var _globalThis$game$h = globalThis.game,
          player$g = _globalThis$game$h.player,
          event$w = _globalThis$game$h.event;
      var SettingsScreen = (_dec$1l = ccclass$1l('SettingsScreen'), _dec2$Q = requireComponent$s(BaseScreen), _dec3$y = property$E(Node), _dec4$n = property$E(Node), _dec5$h = property$E(Node), _dec6$e = property$E(Button), _dec7$b = property$E(Button), _dec$1l(_class$1l = _dec2$Q(_class$1l = (_class2$E = /*#__PURE__*/function (_Component) {
        _inherits(SettingsScreen, _Component);

        var _super = _createSuper(SettingsScreen);

        function SettingsScreen() {
          var _this;

          _classCallCheck(this, SettingsScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "musicSetting", _descriptor$C, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundSetting", _descriptor2$r, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "vibrateSetting", _descriptor3$i, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButtonComponent", _descriptor4$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "resumeButtonComponent", _descriptor5$b, _assertThisInitialized(_this)); // ! For Unlocking DevTools


          _this.triggerSequence = '';

          _this.handleOpeningScreen = function (payload) {
            console.log('NotificationScreen.OPENING_SCREEN', payload);
            if (!_this.validateEventPayload(payload)) return;
            _this.closeButtonComponent.interactable = true;
            _this.resumeButtonComponent.interactable = true;

            _this.updateStatus();
          };

          _this.handleResetSequence = function () {
            _this.triggerSequence = '';
          };

          _this.handleTriggerUnlockKey = function (payload) {
            var code = payload.code;
            var UNLOCK_SEQUENCE = DevTools.UNLOCK_SEQUENCE;
            if (typeof code !== 'number') return;
            if (UNLOCK_SEQUENCE.indexOf(code.toString()) === -1) return;
            _this.triggerSequence += code.toString();
            console.log('SettingsScreen: handleTriggerUnlockKey', code, _this.triggerSequence, _this.triggerSequence === UNLOCK_SEQUENCE);

            if (_this.triggerSequence === UNLOCK_SEQUENCE) {
              _this.node.scene.emit(DevTools.Events.UNLOCK_DEV_TOOLS);

              _this.node.off(DevTools.Events.TRIGGER_UNLOCK_KEY);
            }
          };

          _this.updateVibrateButton = function () {
            var button = _this.vibrateSetting.getComponentInChildren(Button);

            var switchState = _this.vibrateSetting.getComponentInChildren(SwitchButton);

            var opacityState = _this.vibrateSetting.getComponentInChildren(OpacityToggler);

            if (!button || !switchState || !opacityState) {
              console.warn('SettingsScreen: vibrate button missing components');
              return;
            }

            if (!Utils$2.Device.isAndroid() && !Utils$2.Device.isIOS()) {
              button.interactable = false;
              switchState.setEnabled(false);
              opacityState.changeState(false);
            } else {
              var vibrate = player$g.getPlayerSetting('vibrate') || false; // switchState.updateStatus(vibrate)

              switchState.setEnabled(vibrate);
            }
          };

          return _this;
        }

        _createClass(SettingsScreen, [{
          key: "__preload",
          value: function __preload() {
            this.getBaseScreen();
            this.listenScreenEvents();
            this.listenUnlockDevTools();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
            this.unListenUnlockDevTools();
          }
        }, {
          key: "getBaseScreen",
          value: function getBaseScreen() {
            var baseScreen = this.getComponent(BaseScreen);

            if (!baseScreen) {
              console.warn('SettingsScreen: BaseScreen not found');
              return;
            }

            this.screen = baseScreen;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.musicSetting) {
              throw new Error('SettingsScreen: musicSetting not found');
            }

            if (!this.soundSetting) {
              throw new Error('SettingsScreen: soundSetting not found');
            }

            if (!this.vibrateSetting) {
              throw new Error('SettingsScreen: vibrateSetting not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            event$w.on(Events$j.OPENING_SCREEN, this.handleOpeningScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$w.off(Events$j.OPENING_SCREEN, this.handleOpeningScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          } // * Music setting switch on/off will have a code: 0 for off, 1 for on
          // * Sound setting switch on/off will have a code: 2 for off, 3 for on

        }, {
          key: "listenUnlockDevTools",
          value: function listenUnlockDevTools() {
            this.node.off(DevTools.Events.TRIGGER_UNLOCK_KEY);
            this.node.on(DevTools.Events.TRIGGER_RESET_SEQUENCE, this.handleResetSequence);
            this.node.on(DevTools.Events.TRIGGER_UNLOCK_KEY, this.handleTriggerUnlockKey);
          }
        }, {
          key: "unListenUnlockDevTools",
          value: function unListenUnlockDevTools() {
            this.node.off(DevTools.Events.TRIGGER_RESET_SEQUENCE, this.handleResetSequence);
            this.node.off(DevTools.Events.TRIGGER_UNLOCK_KEY, this.handleTriggerUnlockKey);
          }
        }, {
          key: "open",
          value: function open() {
            this.updateStatus();
            this.runPopUpAnimation();
            this.node.emit(DevTools.Events.TRIGGER_RESET_SEQUENCE);
          }
        }, {
          key: "close",
          value: function close() {
            this.closeButtonComponent.interactable = false;
            this.resumeButtonComponent.interactable = false;
            this.node.emit(DevTools.Events.TRIGGER_RESET_SEQUENCE);
            event$w.emit(Events$j.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus() {
            var settings = {
              music: player$g.getPlayerSetting('music') || false,
              sound: player$g.getPlayerSetting('sound') || false,
              vibrate: player$g.getPlayerSetting('vibrate') || false
            };
            var musicSwitch = this.musicSetting.getComponentInChildren(SwitchButton);
            var soundSwitch = this.soundSetting.getComponentInChildren(SwitchButton);

            if (!musicSwitch) {
              console.warn('SettingsScreen: musicSwitch not found');
              return;
            }

            if (!soundSwitch) {
              console.warn('SettingsScreen: soundSwitch not found');
              return;
            }

            musicSwitch.setEnabled(settings.music);
            soundSwitch.setEnabled(settings.sound);
            this.scheduleOnce(this.updateVibrateButton, 0.1);
          }
        }, {
          key: "runPopUpAnimation",
          value: function runPopUpAnimation() {
            if (!this.screen.container) {
              console.warn('SettingsScreen: screen not found');
              return;
            }
          }
        }, {
          key: "switchMusicButton",
          value: function switchMusicButton() {
            var musicSwitch = this.musicSetting.getComponentInChildren(SwitchButton);

            if (!musicSwitch) {
              console.warn('SettingsScreen: musicSwitch not found');
              return;
            }

            var state = musicSwitch["switch"]();
            player$g.setSetting('music', state); // ! For Unlocking DevTools

            this.node.emit(DevTools.Events.TRIGGER_UNLOCK_KEY, {
              code: state ? 1 : 0
            });

            if (state) {
              this.playMusic();
            } else {
              this.pauseMusic();
            }
          }
        }, {
          key: "switchSoundButton",
          value: function switchSoundButton() {
            var soundSwitch = this.soundSetting.getComponentInChildren(SwitchButton);

            if (!soundSwitch) {
              console.warn('SettingsScreen: soundSwitch not found');
              return;
            }

            var state = soundSwitch["switch"]();
            player$g.setSetting('sound', state); // ! For Unlocking DevTools

            this.node.emit(DevTools.Events.TRIGGER_UNLOCK_KEY, {
              code: state ? 3 : 2
            });
          }
        }, {
          key: "switchVibrateButton",
          value: function switchVibrateButton() {
            var vibrateSwitch = this.vibrateSetting.getComponentInChildren(SwitchButton);

            if (!vibrateSwitch) {
              console.warn('SettingsScreen: vibrateSwitch not found');
              return;
            }

            var state = vibrateSwitch["switch"]();
            player$g.setSetting('vibrate', state);
          }
        }, {
          key: "handleClickedResume",
          value: // ? Callback for click event of ResumeButton
          function handleClickedResume() {
            this.resumeGame();
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            this.resumeGame();
          }
        }, {
          key: "resumeGame",
          value: function resumeGame() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_RESUME);
          }
        }, {
          key: "pauseMusic",
          value: function pauseMusic() {
            var music = this.getMusicComponent();
            if (!music) return;
            music.pause('sounds/bg-music');
          }
        }, {
          key: "playMusic",
          value: function playMusic() {
            var music = this.getMusicComponent();
            if (!music) return;
            music.play('sounds/bg-music');
          }
        }, {
          key: "getMusicComponent",
          value: function getMusicComponent() {
            var _find;

            var music = (_find = find('Music')) === null || _find === void 0 ? void 0 : _find.getComponent(Music);

            if (!music) {
              console.warn('SettingsScreen: Music not found');
              return null;
            }

            return music;
          }
        }]);

        return SettingsScreen;
      }(Component), (_descriptor$C = _applyDecoratedDescriptor(_class2$E.prototype, "musicSetting", [_dec3$y], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$r = _applyDecoratedDescriptor(_class2$E.prototype, "soundSetting", [_dec4$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$i = _applyDecoratedDescriptor(_class2$E.prototype, "vibrateSetting", [_dec5$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$e = _applyDecoratedDescriptor(_class2$E.prototype, "closeButtonComponent", [_dec6$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$b = _applyDecoratedDescriptor(_class2$E.prototype, "resumeButtonComponent", [_dec7$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$E)) || _class$1l) || _class$1l);

      cclegacy._RF.pop();

      var _dec$1m, _dec2$R, _dec3$z, _dec4$o, _dec5$i, _dec6$f, _dec7$c, _dec8$6, _dec9$5, _dec10$2, _dec11$2, _dec12$2, _class$1m, _class2$F, _descriptor$D, _descriptor2$s, _descriptor3$j, _descriptor4$f, _descriptor5$c, _descriptor6$8, _descriptor7$4, _descriptor8$3, _descriptor9$2, _descriptor10$2;

      cclegacy._RF.push({}, "35c09YGmdFA4pHOJFDg1tw5", "WinningScreen", undefined);

      var ccclass$1m = _decorator.ccclass,
          property$F = _decorator.property,
          disallowMultiple$l = _decorator.disallowMultiple,
          requireComponent$t = _decorator.requireComponent;
      var _GameCore$k = GameCore,
          Events$k = _GameCore$k.Events,
          Configs$1 = _GameCore$k.Configs;
      var _globalThis$game$i = globalThis.game,
          ads$4 = _globalThis$game$i.ads,
          player$h = _globalThis$game$i.player,
          event$x = _globalThis$game$i.event,
          language$6 = _globalThis$game$i.language;
      var WinningScreen = (_dec$1m = ccclass$1m('WinningScreen'), _dec2$R = requireComponent$t(BaseScreen), _dec3$z = property$F(Node), _dec4$o = property$F(Sprite), _dec5$i = property$F(Button), _dec6$f = property$F(Button), _dec7$c = property$F(Node), _dec8$6 = property$F(Node), _dec9$5 = property$F(Label), _dec10$2 = property$F(Button), _dec11$2 = property$F(Button), _dec12$2 = property$F(Button), _dec$1m(_class$1m = disallowMultiple$l(_class$1m = _dec2$R(_class$1m = (_class2$F = /*#__PURE__*/function (_Component) {
        _inherits(WinningScreen, _Component);

        var _super = _createSuper(WinningScreen);

        function WinningScreen() {
          var _this;

          _classCallCheck(this, WinningScreen);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _initializerDefineProperty(_this, "starsContainer", _descriptor$D, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "titleRibbon", _descriptor2$s, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelButton", _descriptor3$j, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryLevelButton", _descriptor4$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "confettiGroup", _descriptor5$c, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dogeHead", _descriptor6$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "levelText", _descriptor7$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButtonComponent", _descriptor8$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextLevelButtonComponent", _descriptor9$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "retryLevelButtonComponent", _descriptor10$2, _assertThisInitialized(_this));

          _this.starsCollected = 3;

          _this.handleOpeningScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;
            _this.closeButtonComponent.interactable = true;
            _this.retryLevelButtonComponent.interactable = true;
            _this.nextLevelButtonComponent.interactable = true;
          };

          _this.handleOpenedScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.open();
          };

          _this.handleClosingScreen = function (payload) {
            if (!_this.validateEventPayload(payload)) return;

            _this.unscheduleAllCallbacks();
          };

          _this.showInterstitialAdAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var level, status, beforeTime, loadingText, displayTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  level = _this.screen.data['level'];

                  if (!(Configs$1.Gameplay.StartAdAtLevel > level)) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  if (ads$4.canbeShowInterstitialAd()) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  status = ads$4.getAdStatus(GameCore.Plugins.Ads.Types.INTERSTITIAL);

                  if (!(status !== GameCore.Plugins.Ads.Status.FILLED)) {
                    _context.next = 9;
                    break;
                  }

                  ads$4.preloadInterstitialAdAsync()["catch"](function () {// Safe to ignore
                  });
                  return _context.abrupt("return");

                case 9:
                  beforeTime = Date.now();
                  _context.prev = 10;

                  _this.muteAudio(true);

                  loadingText = language$6.getText('loading');

                  _this.showNotificationScreen(loadingText);

                  _context.next = 16;
                  return ads$4.showInterstitialAdAsync();

                case 16:
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](10);
                  console.error('showInterstitialAdAsync failed', _context.t0);

                case 21:
                  _context.prev = 21;

                  _this.muteAudio(false);

                  displayTime = (Date.now() - beforeTime) / 1000;

                  _this.scheduleOnce(function () {
                    _this.closeNotificationScreen();
                  }, displayTime > 0.5 ? 0 : 0.5);

                  ads$4.preloadInterstitialAdAsync()["catch"](function () {// Safe to ignore
                  });
                  return _context.finish(21);

                case 27:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[10, 18, 21, 27]]);
          }));
          return _this;
        }

        _createClass(WinningScreen, [{
          key: "__preload",
          value: function __preload() {
            this.getBaseScreen();
            this.listenScreenEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.unListenScreenEvents();
          }
        }, {
          key: "getBaseScreen",
          value: function getBaseScreen() {
            var baseScreen = this.getComponent(BaseScreen);

            if (!baseScreen) {
              console.warn('WinningScreen: BaseScreen not found');
              return;
            }

            this.screen = baseScreen;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.validateRequiredComponents();
          }
        }, {
          key: "validateRequiredComponents",
          value: function validateRequiredComponents() {
            if (!this.starsContainer) {
              throw new Error('WinningScreen: starsContainer not found');
            }

            if (!this.titleRibbon) {
              throw new Error('WinningScreen: titleRibbon not found');
            }

            if (!this.nextLevelButton) {
              throw new Error('WinningScreen: nextLevelButton not found');
            }

            if (!this.retryLevelButton) {
              throw new Error('WinningScreen: retryLevelButton not found');
            }

            if (!this.confettiGroup) {
              throw new Error('WinningScreen: confettiGroup not found');
            }

            if (!this.dogeHead) {
              throw new Error('WinningScreen: dogeHead not found');
            }

            if (!this.levelText) {
              throw new Error('WinningScreen: levelText not found');
            }
          }
        }, {
          key: "listenScreenEvents",
          value: function listenScreenEvents() {
            // ? Here's a demo of all the events a screen has
            event$x.on(Events$k.OPENING_SCREEN, this.handleOpeningScreen);
            event$x.on(Events$k.OPENED_SCREEN, this.handleOpenedScreen);
            event$x.on(Events$k.CLOSING_SCREEN, this.handleClosingScreen);
          }
        }, {
          key: "unListenScreenEvents",
          value: function unListenScreenEvents() {
            event$x.off(Events$k.OPENING_SCREEN, this.handleOpeningScreen);
            event$x.off(Events$k.OPENED_SCREEN, this.handleOpenedScreen);
            event$x.off(Events$k.CLOSING_SCREEN, this.handleClosingScreen);
          }
        }, {
          key: "validateEventPayload",
          value: function validateEventPayload(payload) {
            var screenName = payload.screenName;
            if (screenName !== this.node.name) return false;
            return true;
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.dogeHead.translate(new Vec3(-1000, 0));
            this.scheduleOnce(function () {
              _this2.dogeHead.translate(new Vec3(1000, 0));
            }, 0.1);
          }
        }, {
          key: "open",
          value: function open() {
            var _this3 = this;

            this.nextLevelButton.node.active = false;
            this.retryLevelButton.node.active = false;
            this.updateLevel();
            this.updateStars();
            this.runRibbonAnimation();
            var delay = this.runStarsAnimation(); // this.runLevelAnimation(delay)

            this.runConfetti(delay);
            this.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var nextButtonOpacity, retryButtonOpacity;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this3.showInterstitialAdAsync();

                  case 2:
                    _this3.nextLevelButton.node.active = true;
                    _this3.retryLevelButton.node.active = true;
                    nextButtonOpacity = _this3.nextLevelButton.getComponent(UIOpacity);
                    tween(nextButtonOpacity).set({
                      opacity: 0
                    }).to(0.4, {
                      opacity: 255
                    }, {
                      easing: 'smooth'
                    }).start();
                    retryButtonOpacity = _this3.retryLevelButton.getComponent(UIOpacity);
                    tween(retryButtonOpacity).set({
                      opacity: 0
                    }).delay(0.5).to(0.4, {
                      opacity: 255
                    }, {
                      easing: 'smooth'
                    }).start();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })), delay);
            this.playSound('sounds/hand-clap');
          }
        }, {
          key: "close",
          value: function close() {
            this.closeButtonComponent.interactable = false;
            this.retryLevelButtonComponent.interactable = false;
            this.nextLevelButtonComponent.interactable = false;
            event$x.emit(Events$k.CLOSE_SCREEN, {
              screenName: this.node.name
            });
          }
        }, {
          key: "showNotificationScreen",
          value: function showNotificationScreen(message) {
            event$x.emit(Events$k.OPEN_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN,
              screenData: {
                message: message,
                isCloseButtonVisible: false
              }
            });
          }
        }, {
          key: "closeNotificationScreen",
          value: function closeNotificationScreen() {
            event$x.emit(Events$k.CLOSE_SCREEN, {
              screenName: ScreenKeys.NOTIFICATION_SCREEN
            });
          }
        }, {
          key: "showCongratulationScreen",
          value: function showCongratulationScreen() {
            event$x.emit(Events$k.OPEN_SCREEN, {
              screenName: ScreenKeys.CONGRATULATION_SCREEN,
              screenData: {
                level: this.screen.data['level']
              }
            });
          } // ? Callback for click event of NextButton

        }, {
          key: "handleClickedNextLevel",
          value: function handleClickedNextLevel() {
            var level = this.screen.data['level'];
            var gameData = player$h.getGameData();

            if (!gameData) {
              console.warn('WinningScreen: gameData not found');
              return;
            }

            var isLevelEnd = level >= gameData.totalLevel;

            if (isLevelEnd) {
              this.showCongratulationScreen();
            } else {
              this.node.scene.emit(GameplayEvents.NEXT_LEVEL, {
                level: level
              });
            }

            this.close();
          } // ? Callback for click event of RetryButton

        }, {
          key: "handleClickedRetry",
          value: function handleClickedRetry() {
            this.close();
            this.node.scene.emit(GameplayEvents.GAME_REPLAY, {
              level: this.screen.data['level']
            });
          } // ? Callback for click event of CloseButton

        }, {
          key: "handleClickedClose",
          value: function handleClickedClose() {
            this.close();
            var level = this.screen.data['level'];
            this.node.scene.emit(GameplayEvents.NEXT_LEVEL, {
              level: level
            });
          }
        }, {
          key: "updateStars",
          value: function updateStars() {
            this.starsCollected = this.screen.data['stars'];
          }
        }, {
          key: "updateLevel",
          value: function updateLevel() {
            var level = this.screen.data['level'];
            var levelText = language$6.getText('level');
            this.levelText.string = "".concat(levelText, " ").concat(level);
          }
        }, {
          key: "runRibbonAnimation",
          value: function runRibbonAnimation() {
            this.titleRibbon.fillRange = 0;
            tween(this.titleRibbon).to(0.5, {
              fillRange: 1
            }, {
              easing: 'backInOut'
            }).start();
          }
        }, {
          key: "runStarsAnimation",
          value: function runStarsAnimation() {
            var _this4 = this;

            var rightStar = find('Container/Stars/RightStar', this.node);
            var leftStar = find('Container/Stars/LeftStar', this.node);
            var midStar = find('Container/Stars/MidStar', this.node);
            var stars = [leftStar, midStar, rightStar];

            if (!rightStar || !leftStar || !midStar) {
              console.warn('WinningScreen: stars not found');
              return 0;
            }

            stars.forEach(function (star) {
              if (!star) return;
              var starComponent = star.getChildByName('Star');

              if (!starComponent) {
                console.warn('WinningScreen: starComponent not found');
                return;
              }

              starComponent.active = false;
            });

            for (var i = 0; i < stars.length; i++) {
              var starEmpty = stars[i];

              if (!starEmpty) {
                console.warn('WinningScreen: starEmpty not found');
                return 0;
              }

              var fromScale = new Vec3(0, 0, 1);
              var toScale = new Vec3(1, 1, 1);

              if (i == 1) {
                toScale.set(1.2, 1.2, 1);
              }

              tween(starEmpty).set({
                scale: fromScale
              }).delay(0.7).to(0.4, {
                scale: toScale
              }, {
                easing: 'backOut'
              }).start();
            }

            var delay = 1.32;

            var _loop = function _loop() {
              var star = stars[_i];

              if (!star) {
                console.warn('WinningScreen: stars not found');
                return {
                  v: 0
                };
              }

              var starComponent = star.getChildByName('Star');

              if (!starComponent) {
                console.warn('WinningScreen: starComponent not found');
                return {
                  v: 0
                };
              }

              _this4.scheduleOnce(function () {
                starComponent.active = true;

                _this4.playSound('sounds/star-raise');
              }, delay);

              tween(starComponent).set({
                scale: new Vec3(1.7, 1.7, 1)
              }).delay(delay).to(0.35, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).start();
              delay += 0.3;
            };

            for (var _i = 0; _i < this.starsCollected; _i++) {
              var _ret = _loop();

              if (_typeof(_ret) === "object") return _ret.v;
            }

            return delay;
          }
          /* private runLevelAnimation(delay: number): void {
              zoom(this.levelText.node, {
                  fromScale: new Vec3(0, 0, 1),
                  toScale: new Vec3(1, 1, 1),
                  duration: 0.38,
                  delay: delay,
                  easing: 'backOut',
              })
          } */

        }, {
          key: "runConfetti",
          value: function runConfetti(delay) {
            this.stopConfetti();
            var particles = this.confettiGroup.getComponentsInChildren(ParticleSystem2D);
            this.scheduleOnce(function () {
              particles.forEach(function (particle) {
                particle.resetSystem();
              });
            }, delay);
          }
        }, {
          key: "stopConfetti",
          value: function stopConfetti() {
            var particles = this.confettiGroup.getComponentsInChildren(ParticleSystem2D);
            particles.forEach(function (particle) {
              particle.stopSystem();
            });
          }
        }, {
          key: "getSoundComponent",
          value: function getSoundComponent() {
            var _find;

            var sound = (_find = find('Sound')) === null || _find === void 0 ? void 0 : _find.getComponent(Sound);

            if (!sound) {
              console.warn('WinningScreen: Sound not found');
              return null;
            }

            return sound;
          }
        }, {
          key: "getMusicComponent",
          value: function getMusicComponent() {
            var _find2;

            var music = (_find2 = find('Music')) === null || _find2 === void 0 ? void 0 : _find2.getComponent(Music);

            if (!music) {
              console.warn('WinningScreen: Music not found');
              return null;
            }

            return music;
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var sound = this.getSoundComponent();
            if (!sound) return;
            sound.play(name);
          }
        }, {
          key: "muteAudio",
          value: function muteAudio(isMute) {
            this.muteMusic(isMute);
            this.muteSound(isMute);
          }
        }, {
          key: "muteMusic",
          value: function muteMusic(isMute) {
            var music = this.getMusicComponent();
            if (!music) return;
            music.mute(isMute);
          }
        }, {
          key: "muteSound",
          value: function muteSound(isMute) {
            var sound = this.getSoundComponent();
            if (!sound) return;
            sound.mute(isMute);
          }
        }]);

        return WinningScreen;
      }(Component), (_descriptor$D = _applyDecoratedDescriptor(_class2$F.prototype, "starsContainer", [_dec3$z], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$s = _applyDecoratedDescriptor(_class2$F.prototype, "titleRibbon", [_dec4$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$j = _applyDecoratedDescriptor(_class2$F.prototype, "nextLevelButton", [_dec5$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$f = _applyDecoratedDescriptor(_class2$F.prototype, "retryLevelButton", [_dec6$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$c = _applyDecoratedDescriptor(_class2$F.prototype, "confettiGroup", [_dec7$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6$8 = _applyDecoratedDescriptor(_class2$F.prototype, "dogeHead", [_dec8$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7$4 = _applyDecoratedDescriptor(_class2$F.prototype, "levelText", [_dec9$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8$3 = _applyDecoratedDescriptor(_class2$F.prototype, "closeButtonComponent", [_dec10$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$F.prototype, "nextLevelButtonComponent", [_dec11$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10$2 = _applyDecoratedDescriptor(_class2$F.prototype, "retryLevelButtonComponent", [_dec12$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$F)) || _class$1m) || _class$1m) || _class$1m);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});