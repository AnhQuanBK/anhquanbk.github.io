function _instanceof(left, right) {
    return null != right && "u" > typeof Symbol && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _type_of(obj) {
    return obj && "u" > typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (1 & t[0]) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), "function" == typeof Symbol && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw TypeError("Generator is already executing.");
        for(; g && (g = 0, op[0] && (_ = 0)), _;)try {
            if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            switch(y = 0, t && (op = [
                2 & op[0],
                t.value
            ]), op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    return _.label++, {
                        value: op[1],
                        done: !1
                    };
                case 5:
                    _.label++, y = op[1], op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop(), _.trys.pop();
                    continue;
                default:
                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                        _ = 0;
                        continue;
                    }
                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (6 === op[0] && _.label < t[1]) {
                        _.label = t[1], t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2], _.ops.push(op);
                        break;
                    }
                    t[2] && _.ops.pop(), _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ], y = 0;
        } finally{
            f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: !0
        };
    }
}
System.register([], function(_export, _context) {
    return {
        execute: function execute() {
            System.register("chunks:///TournamentUtils-ac3fab7d.js", [
                "cc"
            ], function(e) {
                var t, n, r, i, a, o, s, u, l, c, d, f, y, h, v, p, m, S, g, E, A, T, N, I;
                return {
                    setters: [
                        function(e) {
                            t = e.cclegacy, n = e.JsonAsset, r = e.Prefab, i = e.AnimationClip, a = e.ImageAsset, o = e.SpriteFrame, s = e.Font, u = e.assetManager, l = e.AudioClip, c = e.sp, d = e.tween, f = e.Animation, y = e.UITransform, h = e.view, v = e.screen, p = e.math, m = e.ccenum, S = e.director, g = e.find, E = e.loadWasmModuleBullet, A = e.loadWasmModulePhysX, T = e.loadWasmModuleBox2D, N = e.loadWasmModuleSpine, I = e.game;
                        }
                    ],
                    execute: function execute() {
                        function b(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })), n.push.apply(n, r);
                            }
                            return n;
                        }
                        function R(e) {
                            for(var t = 1; t < arguments.length; t++){
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? b(Object(n), !0).forEach(function(t) {
                                    O(e, t, n[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                            }
                            return e;
                        }
                        function w(t) {
                            return (w = e("_", "function" == typeof Symbol && "symbol" == _type_of(Symbol.iterator) ? function(e) {
                                return void 0 === e ? "undefined" : _type_of(e);
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _type_of(e);
                            }))(t);
                        }
                        function _(e, t, n, r, i, a, o) {
                            try {
                                var s = e[a](o), u = s.value;
                            } catch (e) {
                                return void n(e);
                            }
                            s.done ? t(u) : Promise.resolve(u).then(r, i);
                        }
                        function C(e) {
                            return function() {
                                var t = this, n = arguments;
                                return new Promise(function(r, i) {
                                    var a = e.apply(t, n);
                                    function o(e) {
                                        _(a, r, i, o, s, "next", e);
                                    }
                                    function s(e) {
                                        _(a, r, i, o, s, "throw", e);
                                    }
                                    o(void 0);
                                });
                            };
                        }
                        function D(e, t) {
                            if (!_instanceof(e, t)) throw TypeError("Cannot call a class as a function");
                        }
                        function L(e, t) {
                            for(var n = 0; n < t.length; n++){
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, q(r.key), r);
                            }
                        }
                        function k(e, t, n) {
                            return t && L(e.prototype, t), n && L(e, n), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), e;
                        }
                        function O(e, t, n) {
                            return (t = q(t)) in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e;
                        }
                        function $(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && B(e, t);
                        }
                        function P(t) {
                            return (P = e("m", Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }))(t);
                        }
                        function B(e, t) {
                            return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function B(e, t) {
                                return e.__proto__ = t, e;
                            })(e, t);
                        }
                        function F() {
                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        }
                        function x(e, t, n) {
                            return (x = F() ? Reflect.construct.bind() : function x(e, t, n) {
                                var r = [
                                    null
                                ];
                                r.push.apply(r, t);
                                var i = new (Function.bind.apply(e, r));
                                return n && B(i, n.prototype), i;
                            }).apply(null, arguments);
                        }
                        function G(t) {
                            var n = "function" == typeof Map ? new Map : void 0;
                            return (G = e("f", function(e) {
                                if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                                if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                                if (void 0 !== n) {
                                    if (n.has(e)) return n.get(e);
                                    n.set(e, r);
                                }
                                function r() {
                                    return x(e, arguments, P(this).constructor);
                                }
                                return r.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: r,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), B(r, e);
                            }))(t);
                        }
                        function M(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        }
                        function U(e, t) {
                            if (t && ("object" == (void 0 === t ? "undefined" : _type_of(t)) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                            return M(e);
                        }
                        function W(e) {
                            var t = F();
                            return function() {
                                var n, r = P(e);
                                return n = t ? Reflect.construct(r, arguments, P(this).constructor) : r.apply(this, arguments), U(this, n);
                            };
                        }
                        function H(e, t) {
                            for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = P(e)););
                            return e;
                        }
                        function j() {
                            return (j = "u" > typeof Reflect && Reflect.get ? e("l", Reflect.get.bind()) : e("l", function(e, t, n) {
                                var r = H(e, t);
                                if (r) {
                                    var i = Object.getOwnPropertyDescriptor(r, t);
                                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
                                }
                            })).apply(this, arguments);
                        }
                        function V(e) {
                            return function(e) {
                                if (Array.isArray(e)) return z(e);
                            }(e) || function(e) {
                                if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                            }(e) || K(e) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }();
                        }
                        function K(e, t) {
                            if (e) {
                                if ("string" == typeof e) return z(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(e, t) : void 0;
                            }
                        }
                        function z(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for(var n = 0, r = Array(t); n < t; n++)r[n] = e[n];
                            return r;
                        }
                        function Y(e, t) {
                            var n = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = K(e)) || t && e && "number" == typeof e.length) {
                                    n && (e = n);
                                    var r = 0, i = function i() {};
                                    return {
                                        s: i,
                                        n: function n() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            };
                                        },
                                        e: function e(e) {
                                            throw e;
                                        },
                                        f: i
                                    };
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                            var a, o = !0, s = !1;
                            return {
                                s: function s() {
                                    n = n.call(e);
                                },
                                n: function n1() {
                                    var _$e = n.next();
                                    return o = _$e.done, _$e;
                                },
                                e: function e(e) {
                                    s = !0, a = e;
                                },
                                f: function f() {
                                    try {
                                        o || null == n.return || n.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                            };
                        }
                        function q(e) {
                            var t = function(e, t) {
                                if ("object" != (void 0 === e ? "undefined" : _type_of(e)) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != (void 0 === r ? "undefined" : _type_of(r))) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === t ? String : Number)(e);
                            }(e, "string");
                            return "symbol" == (void 0 === t ? "undefined" : _type_of(t)) ? t : String(t);
                        }
                        e({
                            _: w,
                            a: C,
                            b: $,
                            c: W,
                            d: D,
                            e: k,
                            f: G,
                            g: Y,
                            h: function h(e, t, n, r, i) {
                                var a = {};
                                return Object.keys(r).forEach(function(e) {
                                    a[e] = r[e];
                                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, r) {
                                    return r(e, t, n) || n;
                                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a;
                            },
                            i: function i(e, t, n, r) {
                                n && Object.defineProperty(e, t, {
                                    enumerable: n.enumerable,
                                    configurable: n.configurable,
                                    writable: n.writable,
                                    value: n.initializer ? n.initializer.call(r) : void 0
                                });
                            },
                            j: M,
                            k: R,
                            l: j,
                            m: P,
                            s: function s(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var r, i, a, o, s = [], u = !0, l = !1;
                                        try {
                                            if (a = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                u = !1;
                                            } else for(; !(u = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); u = !0);
                                        } catch (e) {
                                            l = !0, i = e;
                                        } finally{
                                            try {
                                                if (!u && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally{
                                                if (l) throw i;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || K(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            },
                            u: O,
                            v: V
                        }), e("E", !1), e("K", !0), t._RF.push({}, "725f8u/lDtFbY1DMY0uJSL9", "Locales", void 0), e("w", [
                            "en",
                            "ru"
                        ]);
                        var J = e("L", {
                            en: "fonts/mikado-bold.ttf",
                            ru: "fonts/nunito-black.ttf"
                        });
                        e("N", {
                            ru: "locales/ru"
                        }), e("J", {
                            en: "104px",
                            ru: "96px"
                        }), t._RF.pop(), t._RF.push({}, "30f3eu78CVKp5+jOQ2m1GKG", "ResourceUtils", void 0);
                        var Z = Ludex.Utils, X = Z.Function, Q = Z.Time, ee = [
                            "loadable",
                            "animations"
                        ], te = (_$e = C(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return _state.trys.push([
                                            0,
                                            2,
                                            ,
                                            4
                                        ]), [
                                            4,
                                            Promise.all(ee.map(function(e) {
                                                return ne.loadBundle(e);
                                            }))
                                        ];
                                    case 1:
                                    case 3:
                                        return _state.sent(), [
                                            3,
                                            4
                                        ];
                                    case 2:
                                        return console.warn("ResourceUtils: initBundles failed", _state.sent()), [
                                            4,
                                            Q.sleepAsync(500)
                                        ];
                                    case 4:
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), function() {
                            return _$e.apply(this, arguments);
                        }), ne = e("R", function() {
                            var t, d, f, y, h, v, p, m, S, g, E, A, T, N, I, b, _$R;
                            function e() {
                                D(this, e), this.bundles = {
                                    loadable: null,
                                    animations: null
                                };
                            }
                            return k(e, [
                                {
                                    key: "getBundleNameByType",
                                    value: function value(e) {
                                        return e === i ? "animations" : "loadable";
                                    }
                                },
                                {
                                    key: "loadBundleByType",
                                    value: (_$R = C(function(t) {
                                        var n;
                                        return _ts_generator(this, function(_state) {
                                            return n = this.getBundleNameByType(t), [
                                                2,
                                                e.loadBundle(n)
                                            ];
                                        });
                                    }), function(e) {
                                        return _$R.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "getBundleByType",
                                    value: function value(e) {
                                        var t, n = this.getBundleNameByType(e);
                                        return null != (t = this.bundles[n]) ? t : null;
                                    }
                                },
                                {
                                    key: "preloadAsset",
                                    value: (b = C(function(e, t, n) {
                                        var r, i;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return r = this, [
                                                        4,
                                                        this.loadBundleByType(t)
                                                    ];
                                                case 1:
                                                    if (_state.sent(), i = this.getBundleByType(t)) return [
                                                        2,
                                                        new Promise(function(a, o) {
                                                            i.preload(e, t, function(i) {
                                                                i ? (console.warn("Failed to preload asset at path: ".concat(e), i), o(i)) : n ? r.loadAssetAsync(e, t).finally(a) : a();
                                                            });
                                                        })
                                                    ];
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e, t, n) {
                                        return b.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadAssetAsync",
                                    value: (I = C(function(e, t) {
                                        var n;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.loadBundleByType(t)
                                                    ];
                                                case 1:
                                                    if (_state.sent(), !(n = this.getBundleByType(t))) return [
                                                        2,
                                                        null
                                                    ];
                                                    return [
                                                        2,
                                                        this.getAsset(e, t) || new Promise(function(r, i) {
                                                            n.load(e, t, function(t, n) {
                                                                n ? r(n) : (console.warn("[ResourceUtils] Failed to load asset at path: ".concat(e), t), i(null));
                                                            });
                                                        })
                                                    ];
                                            }
                                        });
                                    }), function(e, t) {
                                        return I.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadAssetsAsync",
                                    value: (N = C(function(e, t) {
                                        var n, r, i, a, o, s, u;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.loadBundleByType(t)
                                                    ];
                                                case 1:
                                                    if (_state.sent(), !(n = this.getBundleByType(t))) return [
                                                        2,
                                                        null
                                                    ];
                                                    for(r = [], i = [], a = 0, o = e.length; a < o; a++)s = e[a], (u = this.getAsset(s, t)) ? r.push({
                                                        index: a,
                                                        asset: u
                                                    }) : i.push({
                                                        index: a,
                                                        path: s
                                                    });
                                                    return [
                                                        2,
                                                        0 === i.length ? Promise.resolve(r.map(function(e) {
                                                            return e.asset;
                                                        })) : new Promise(function(e) {
                                                            n.load(i.map(function(e) {
                                                                return e.path;
                                                            }), t, function(t, n) {
                                                                if (t || n.length !== i.length) e(null);
                                                                else {
                                                                    for(var a = 0, o = n.length; a < o; a++){
                                                                        var s, u = n[a];
                                                                        if (u) {
                                                                            var l = null == (s = i[a]) ? void 0 : s.index;
                                                                            if (!l) return;
                                                                            r.splice(l, 0, {
                                                                                index: l,
                                                                                asset: u
                                                                            });
                                                                        }
                                                                    }
                                                                    e(r.map(function(e) {
                                                                        return e.asset;
                                                                    }));
                                                                }
                                                            });
                                                        })
                                                    ];
                                            }
                                        });
                                    }), function(e, t) {
                                        return N.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadDirAsync",
                                    value: (T = C(function(e, t) {
                                        var n;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.loadBundleByType(t)
                                                    ];
                                                case 1:
                                                    return _state.sent(), [
                                                        2,
                                                        (n = this.getBundleByType(t)) ? new Promise(function(r) {
                                                            n.loadDir(e, t, function(t, n) {
                                                                n ? r(n) : (console.warn("Failed to load assets at path: ".concat(e), t), r([]));
                                                            });
                                                        }) : Promise.resolve([])
                                                    ];
                                            }
                                        });
                                    }), function(e, t) {
                                        return T.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "preloadDirAsync",
                                    value: (A = C(function(e, t, n) {
                                        var r, i;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return r = this, [
                                                        4,
                                                        this.loadBundleByType(t)
                                                    ];
                                                case 1:
                                                    if (_state.sent(), i = this.getBundleByType(t)) return [
                                                        2,
                                                        new Promise(function(a, o) {
                                                            i.preloadDir(e, t, function(i) {
                                                                i ? (console.warn("Failed to preload assets at path: ".concat(e), i), o(i)) : n ? r.loadDirAsync(e, t).finally(a) : a();
                                                            });
                                                        })
                                                    ];
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e, t, n) {
                                        return A.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "getAsset",
                                    value: function value(t, n) {
                                        var r = this.getBundleByType(n);
                                        if (!r) return null;
                                        var i = e.getAssetInfo(t, n);
                                        return i ? r.get(i.path, n) : null;
                                    }
                                },
                                {
                                    key: "loadFontAsync",
                                    value: function value(e) {
                                        var t = J[e].replace(/\.[^.]+$/, "");
                                        return this.loadAssetAsync(t, s);
                                    }
                                },
                                {
                                    key: "loadSpriteFramesAsync",
                                    value: (E = C(function(e) {
                                        var t, n, r, i, _arguments = arguments;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return t = !(_arguments.length > 1 && void 0 !== _arguments[1]) || _arguments[1], [
                                                        4,
                                                        this.loadAssetsAsync(e, o)
                                                    ];
                                                case 1:
                                                    if (n = _state.sent()) {
                                                        i = Y(n);
                                                        try {
                                                            for(i.s(); !(r = i.n()).done;)r.value.packable = t;
                                                        } catch (e) {
                                                            i.e(e);
                                                        } finally{
                                                            i.f();
                                                        }
                                                    }
                                                    return [
                                                        2,
                                                        n
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return E.apply(this, arguments);
                                    })
                                }
                            ], [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this._instance || (this._instance = new e), this._instance;
                                    }
                                },
                                {
                                    key: "loadBundle",
                                    value: (g = C(function(e) {
                                        var t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (t = this, this.inst.bundles[e]) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        new Promise(function(n, r) {
                                                            var i = setTimeout(r, 15e3);
                                                            u.loadBundle(e, null, function(a, o) {
                                                                clearTimeout(i);
                                                                var s = t.inst.bundles[e];
                                                                s || !a && o ? (t.inst.bundles[e] = null != s ? s : o, n(!0)) : r(a);
                                                            });
                                                        })
                                                    ];
                                                case 1:
                                                    _state.sent(), _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return g.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadAudioAsync",
                                    value: (S = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadAssetAsync(e, l)
                                            ];
                                        });
                                    }), function(e) {
                                        return S.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadJsonAsync",
                                    value: (m = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadAssetAsync(e, n)
                                            ];
                                        });
                                    }), function(e) {
                                        return m.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadPrefabAsync",
                                    value: (p = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadAssetAsync(e, r)
                                            ];
                                        });
                                    }), function(e) {
                                        return p.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadAnimClipAsync",
                                    value: (v = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadAssetAsync(e, i)
                                            ];
                                        });
                                    }), function(e) {
                                        return v.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadSkeletonDataAsync",
                                    value: (h = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadAssetAsync(e, c.SkeletonData)
                                            ];
                                        });
                                    }), function(e) {
                                        return h.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadImageSpriteFrameAsync",
                                    value: (y = C(function(e) {
                                        var t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.inst.loadAssetAsync(e, a)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        (t = _state.sent()) ? o.createWithImage(t) : null
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return y.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadSpriteFrameAsync",
                                    value: (f = C(function(e) {
                                        var t, n, _arguments = arguments;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return t = !(_arguments.length > 1 && void 0 !== _arguments[1]) || _arguments[1], [
                                                        4,
                                                        this.inst.loadAssetAsync(e, o)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        ((n = _state.sent()) && (n.packable = t), n)
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return f.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "loadSpriteFramesDirAsync",
                                    value: (d = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                this.inst.loadDirAsync(e, o)
                                            ];
                                        });
                                    }), function(e) {
                                        return d.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "preloadJson",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadAsset(e, n, t);
                                    }
                                },
                                {
                                    key: "preloadPrefab",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadAsset(e, r, t);
                                    }
                                },
                                {
                                    key: "preloadAnimClip",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadAsset(e, i, t);
                                    }
                                },
                                {
                                    key: "preloadImageSpriteFrame",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadAsset(e, a, t);
                                    }
                                },
                                {
                                    key: "preloadSpriteFrame",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadAsset(e, o, t);
                                    }
                                },
                                {
                                    key: "preloadSpriteFramesDir",
                                    value: function value(e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        this.inst.preloadDirAsync(e, o, t);
                                    }
                                },
                                {
                                    key: "getAssetInfo",
                                    value: function value(e, t) {
                                        var n = this.inst.getBundleByType(t);
                                        return n ? n.getInfoWithPath(e, t) : null;
                                    }
                                },
                                {
                                    key: "getAsset",
                                    value: function value(e, t) {
                                        return this.inst.getAsset(e, t);
                                    }
                                },
                                {
                                    key: "loadFontAsync",
                                    value: function value(e) {
                                        return this.inst.loadFontAsync(e);
                                    }
                                },
                                {
                                    key: "loadSpriteFramesAsync",
                                    value: (t = C(function(e) {
                                        var t, _arguments = arguments;
                                        return _ts_generator(this, function(_state) {
                                            return t = !(_arguments.length > 1 && void 0 !== _arguments[1]) || _arguments[1], [
                                                2,
                                                this.inst.loadSpriteFramesAsync(e, t)
                                            ];
                                        });
                                    }), function(e) {
                                        return t.apply(this, arguments);
                                    })
                                }
                            ]), e;
                        }());
                        X.retry(te, te), t._RF.pop(), t._RF.push({}, "a0999j91ytLSYSzNSPnMz3i", "AnimAbortSignalAdapter", void 0);
                        var re = Ludex.Utils.Signal, ie = function() {
                            function e(t) {
                                D(this, e), this.oldCallbacks = [], this.newCallbacks = [], this.signal = t;
                            }
                            return k(e, [
                                {
                                    key: "once",
                                    value: function value(e) {
                                        var t = this, n = function n() {
                                            return e(Error(t.signal.reason));
                                        };
                                        this.oldCallbacks.push(n), this.newCallbacks.push(e), this.signal.addAbortListener(n);
                                    }
                                },
                                {
                                    key: "off",
                                    value: function value(e) {
                                        var t = this.newCallbacks.indexOf(e);
                                        if (-1 !== t) {
                                            var n = this.oldCallbacks[t];
                                            this.signal.removeAbortListener(n), this.oldCallbacks.splice(t, 1), this.newCallbacks.splice(t, 1);
                                        }
                                    }
                                },
                                {
                                    key: "abort",
                                    value: function value(e) {
                                        var t = _instanceof(e, Error) ? e.message : e;
                                        this.signal.abort(t);
                                    }
                                },
                                {
                                    key: "aborted",
                                    get: function get() {
                                        return this.signal.aborted;
                                    }
                                },
                                {
                                    key: "reason",
                                    get: function get() {
                                        return "string" == typeof this.signal.reason ? Error(this.signal.reason) : void 0;
                                    }
                                },
                                {
                                    key: "wrap",
                                    value: function value(e) {
                                        if (!this.aborted) return e;
                                    }
                                },
                                {
                                    key: "chain",
                                    value: function value(e) {
                                        var t = this;
                                        _instanceof(e, re.Signal) ? e.once(function() {
                                            return t.abort();
                                        }) : e.addEventListener("abort", function() {
                                            return t.abort();
                                        });
                                    }
                                },
                                {
                                    key: "promise",
                                    value: function value() {
                                        var _$e = this;
                                        return this.aborted ? Promise.resolve(this.reason) : new Promise(function(t) {
                                            _$e.once(function(e) {
                                                return t(e);
                                            });
                                        });
                                    }
                                }
                            ]), e;
                        }();
                        t._RF.pop(), t._RF.push({}, "99b8eEF6WlE8pzPfD+whiJu", "AnimUtils", void 0);
                        var ae = Ludex.Utils.Signal;
                        function oe(e) {
                            return _instanceof(e, ae.Signal) ? e : new ie(e);
                        }
                        var se = e("A", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            function e() {
                                D(this, e);
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "elasticOut",
                                    value: function value(e, t, n) {
                                        var r = t || .1, i = n || .1;
                                        if (0 === e) return 0;
                                        if (1 === e) return 1;
                                        var a = i / 4;
                                        return r < 1 ? r = 1 : a = i * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - a) / i) + 1;
                                    }
                                },
                                {
                                    key: "easeOutExpo",
                                    value: function value(e) {
                                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                                    }
                                },
                                {
                                    key: "easeInExpo",
                                    value: function value(e) {
                                        return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
                                    }
                                },
                                {
                                    key: "runTweenAsync",
                                    value: function value(e, t) {
                                        if (void 0 === t) return new Promise(function(t) {
                                            e.call(function() {
                                                return t({
                                                    tween: e
                                                });
                                            }).start();
                                        });
                                        var n = oe(t);
                                        return n.aborted ? Promise.resolve({
                                            tween: e
                                        }) : new Promise(function(t) {
                                            var r = function r() {
                                                e.stop(), t({
                                                    tween: e
                                                });
                                            };
                                            n.once(r), e.call(function() {
                                                n.off(r), t({
                                                    tween: e
                                                });
                                            }).start();
                                        });
                                    }
                                },
                                {
                                    key: "runOnUpdateAsync",
                                    value: function value(e, t, n, r) {
                                        return new Promise(function(i, a) {
                                            var o = d(e).to(t, {}, {
                                                onUpdate: function onUpdate(e, t) {
                                                    if (void 0 !== t) try {
                                                        n(t);
                                                    } catch (e) {
                                                        a(_instanceof(e, Error) ? e : Error(String(e)));
                                                    }
                                                }
                                            });
                                            if (void 0 !== r) {
                                                var s = oe(r);
                                                if (s.aborted) i({
                                                    tween: o
                                                });
                                                else {
                                                    var u = function u() {
                                                        o.stop(), i({
                                                            tween: o
                                                        });
                                                    };
                                                    s.once(u), o.call(function() {
                                                        s.off(u), i({
                                                            tween: o
                                                        });
                                                    }).start();
                                                }
                                            } else o.call(function() {
                                                return i({
                                                    tween: o
                                                });
                                            }).start();
                                        });
                                    }
                                },
                                {
                                    key: "waitTweenAsync",
                                    value: function value(e, t) {
                                        return new Promise(function(n) {
                                            var r = d({}).delay(e);
                                            if (void 0 !== t) {
                                                var i = oe(t);
                                                if (i.aborted) n();
                                                else {
                                                    var a = function a() {
                                                        r.stop(), n();
                                                    };
                                                    i.once(a), r.call(function() {
                                                        i.off(a), n();
                                                    }).start();
                                                }
                                            } else r.call(function() {
                                                return n();
                                            }).start();
                                        });
                                    }
                                },
                                {
                                    key: "runAnimationAsync",
                                    value: function value(e, t, n) {
                                        if (void 0 === n) return new Promise(function(n) {
                                            e.once(f.EventType.FINISHED, n), e.play(t);
                                        });
                                        var r = oe(n);
                                        return r.aborted ? Promise.resolve() : new Promise(function(n) {
                                            var i = function i() {
                                                e.stop(), n();
                                            };
                                            r.once(i), e.once(f.EventType.FINISHED, function() {
                                                r.off(i), n();
                                            }), e.play(t);
                                        });
                                    }
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "244e9OHsmpDnpHQKeLzgiiX", "GameEvents", void 0);
                        var ue = e("G", {
                            VIEW_RESIZED: "view-resized",
                            LAYOUT_CHANGED: "layout-changed",
                            ORIENTATION_CHANGED: "orientation-changed",
                            WIDGET_RESIZED: "widget-resized",
                            GAMEPLAY_UPDATE_CONFIG: "gameplay-update-config",
                            OPENED_SKIP_OVERLAY: "opened-skip-overlay",
                            CLOSED_SKIP_OVERLAY: "closed-skip-overlay",
                            RESULT_SCENE_REPLAY: "result-scene-replay",
                            RESULT_SCENE_HOME: "result-scene-home",
                            REQUEST_DYNAMIC_ATLAS: "request-dynamic-atlas",
                            FINISHED_DYNAMIC_ATLAS: "finished-dynamic-atlas",
                            ASSET_QUALITY_CHANGE: "asset-quality-change",
                            REQUEST_UPGRADE_ASSET: "request-upgrade-asset",
                            CLEAR_HYBRID_FILE_CACHE: "clear-hybrid-file-cache",
                            PRELOAD_LANGUAGE: "preload-language",
                            CHOOSE_LANGUAGE: "choose-language",
                            LOCALIZE_APPLIED: "localize-applied"
                        });
                        t._RF.pop(), t._RF.push({}, "5c76fxO2ppOqYp4WNO+Kavm", "GameWorld", void 0);
                        var le = e("n", {
                            Layout: {
                                Portrait: "portrait",
                                Landscape: "landscape"
                            },
                            DesignSize: {
                                Portrait: {
                                    WIDTH: 750,
                                    HEIGHT: 1583
                                },
                                Landscape: {
                                    WIDTH: 2732,
                                    HEIGHT: 1536
                                },
                                Resolution: 2
                            },
                            AcceptPortraitRatio: 690 / 829,
                            PRIMARY_LAYOUT: "auto",
                            FULL_PORTRAIT_SIZE: !0,
                            FULL_LANDSCAPE_SIZE: !0
                        });
                        t._RF.pop(), t._RF.push({}, "05faedSJ2NHFqLe9b3g4RIl", "CocosUtils", void 0);
                        var ce = Ludex.Utils.Device, de = e("C", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            function e() {
                                var t = this;
                                D(this, e), this.getWindowSizeVsWorldGameRatio$ = function() {
                                    var _$e = h.getVisibleSize();
                                    return v.windowSize.width / t.self.getMaxPixelRatio() / _$e.width;
                                }, this.getBoundingBoxTo$ = function(e, n) {
                                    var r = p.mat4();
                                    p.Mat4.fromSRT(r, n.getRotation(), n.getPosition(), n.getScale());
                                    var i = n.getComponent(y);
                                    if (!i) throw Error("Node must have UITransform component");
                                    var a = i.anchorPoint, o = i.contentSize, s = o.width, u = o.height, l = new p.Rect(-a.x * s, -a.y * u, s, u), c = p.mat4();
                                    if (p.Mat4.multiply(c, e, r), l.transformMat4(c), !n.children || 0 === n.children.length) return l;
                                    var d, f = n.children, h = n.getWorldMatrix(), v = Y(f);
                                    try {
                                        for(v.s(); !(d = v.n()).done;){
                                            var m = d.value;
                                            if (null != m && m.active && m.getComponent(y)) {
                                                var S = t.getBoundingBoxTo$(h, m);
                                                S && p.Rect.union(l, l, S);
                                            }
                                        }
                                    } catch (e) {
                                        v.e(e);
                                    } finally{
                                        v.f();
                                    }
                                    return l;
                                };
                            }
                            return k(e, [
                                {
                                    key: "self",
                                    get: function get() {
                                        return this.constructor;
                                    }
                                }
                            ], [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "getBoundingBoxToWorld",
                                    value: function value(e) {
                                        if (e.parent) {
                                            var t = e.parent.getWorldMatrix();
                                            return this.inst.getBoundingBoxTo$(t, e);
                                        }
                                        var n = e.getComponent(y);
                                        if (!n) throw Error("Node must have UITransform component");
                                        return n.getBoundingBox();
                                    }
                                },
                                {
                                    key: "getMaxPixelRatio",
                                    value: function value() {
                                        return Math.min(ce.pixelRatio(), 3);
                                    }
                                },
                                {
                                    key: "worldSizeToCssSize",
                                    value: function value(e) {
                                        return Math.round(e * this.getMaxPixelRatio());
                                    }
                                },
                                {
                                    key: "cssSizeToWorldSize",
                                    value: function value(e) {
                                        return e / this.inst.getWindowSizeVsWorldGameRatio$();
                                    }
                                },
                                {
                                    key: "getScreenWidthCss",
                                    value: function value() {
                                        var _$e = document, t = _$e.body, n = _$e.documentElement, r = t.clientWidth;
                                        return Math.max(n.clientWidth, r) || 0;
                                    }
                                },
                                {
                                    key: "getScreenHeightCss",
                                    value: function value() {
                                        var _$e = document, t = _$e.body, n = _$e.documentElement, r = t.clientHeight;
                                        return Math.max(n.clientHeight, r) || 0;
                                    }
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "d159egaUVVLHKLg1UL865ub", "SoundKeys", void 0);
                        var fe = Ludex.Utils.Object, ye = "sounds/", he = e("r", {
                            BEE_FLYING: "".concat(ye, "bee-flying"),
                            BEE_STING_DOGE: "".concat(ye, "bee-sting-doge"),
                            BG_MUSIC: "".concat(ye, "bg-music"),
                            BUTTON_CLICK: "".concat(ye, "button-click"),
                            COLLECTING_COINS: "".concat(ye, "collecting-coins"),
                            DOGE_DIES: "".concat(ye, "doge-dies"),
                            DOGE_HURT: "".concat(ye, "doge-hurt"),
                            END_DRAW: "".concat(ye, "end-draw"),
                            HAND_CLAP: "".concat(ye, "hand-clap"),
                            LEVEL_FAIL: "".concat(ye, "level-fail"),
                            LEVEL_PASS: "".concat(ye, "level-pass"),
                            LOST_STAR_IN_GAMEPLAY: "".concat(ye, "lost-star-in-gameplay"),
                            RAISE_STAR: "".concat(ye, "raise-star"),
                            SPAWN_COINS: "".concat(ye, "spawn-coins"),
                            STAR_RAISE: "".concat(ye, "star-raise"),
                            TOUCH_START: "".concat(ye, "touch-start"),
                            BEE_BULLET_EXPLODE: "".concat(ye, "bee-bullet-explode")
                        }), pe = e("S", fe.vals(he).reduce(function(e, t, n) {
                            return fe.assign(e, O({}, t, n));
                        }, {}));
                        m(pe), e("o", fe.invert(pe)), t._RF.pop(), t._RF.push({}, "7ca06lc4HNFbaPBFusdm7/G", "ScreenKeys", void 0);
                        var ge = e("y", ((e1 = ge || {})[e1.LOADING_SCREEN = 1] = "LOADING_SCREEN", e1[e1.SETTINGS_SCREEN = 2] = "SETTINGS_SCREEN", e1[e1.NOTIFICATION_SCREEN = 3] = "NOTIFICATION_SCREEN", e1[e1.LOSE_SCREEN = 4] = "LOSE_SCREEN", e1[e1.WINNING_SCREEN = 5] = "WINNING_SCREEN", e1[e1.CONGRATULATION_SCREEN = 6] = "CONGRATULATION_SCREEN", e1)), Ee = e("F", (O(me = {}, ge.LOADING_SCREEN, "LoadingScreen"), O(me, ge.SETTINGS_SCREEN, "SettingsScreen"), O(me, ge.NOTIFICATION_SCREEN, "NotificationScreen"), O(me, ge.LOSE_SCREEN, "LoseScreen"), O(me, ge.WINNING_SCREEN, "WinningScreen"), O(me, ge.CONGRATULATION_SCREEN, "CongratulationScreen"), me)), Ae = (O(Se = {}, Ee[ge.LOADING_SCREEN], ge.LOADING_SCREEN), O(Se, Ee[ge.SETTINGS_SCREEN], ge.SETTINGS_SCREEN), O(Se, Ee[ge.NOTIFICATION_SCREEN], ge.NOTIFICATION_SCREEN), O(Se, Ee[ge.LOSE_SCREEN], ge.LOSE_SCREEN), O(Se, Ee[ge.WINNING_SCREEN], ge.WINNING_SCREEN), O(Se, Ee[ge.CONGRATULATION_SCREEN], ge.CONGRATULATION_SCREEN), [
                            Ee[ge.NOTIFICATION_SCREEN],
                            Ee[ge.LOADING_SCREEN]
                        ]);
                        t._RF.pop(), t._RF.push({}, "09bc071ZcpI978b1NdKUaqD", "AnalyticsUtils", void 0);
                        var Te = Ludex, Ne = Te.Utils.Array, Ie = Te.Configs.Analytics, be = codex.analytics, Re = function() {
                            function e() {
                                D(this, e);
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "trackCurrentPage",
                                    value: function value(e, t) {
                                        if (Ie.Enabled && !Ne.has(Ae, e) && (t || Ne.has(this.trackingPages$, e))) {
                                            this.trackingPages$ = this.trackingPages$.filter(function(t) {
                                                return t !== e;
                                            }), t && this.trackingPages$.push(e);
                                            var n = this.getCurrentPage();
                                            be.pageview(n);
                                        }
                                    }
                                },
                                {
                                    key: "switchSceneTracking",
                                    value: function value() {
                                        if (Ie.Enabled) {
                                            this.trackingPages$ = [];
                                            var _$e = this.getCurrentPage();
                                            be.pageview(_$e);
                                        }
                                    }
                                },
                                {
                                    key: "getCurrentPage",
                                    value: function value() {
                                        var _$e, t;
                                        return this.trackingPages$.length > 0 ? this.trackingPages$[this.trackingPages$.length - 1] || "Unknown Page" : null != (_$e = null == (t = S.getScene()) ? void 0 : t.name) ? _$e : "Unknown Scene";
                                    }
                                },
                                {
                                    key: "trackDeviceInfo",
                                    value: function value(e) {
                                        Ie.Enabled && be.event("device_info", e);
                                    }
                                }
                            ]), e;
                        }();
                        Re.trackingPages$ = [], e("q", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(Re)), t._RF.pop(), t._RF.push({}, "358fdIqjFdNzZGa95REWt2F", "Ads", void 0);
                        var we = e("D", {
                            MAX_BOTTOM_BANNER_RATIO: 1 / 6,
                            NUM_LEVEL_WITHOUT_BANNER_ADS: 0
                        });
                        t._RF.pop(), t._RF.push({}, "a0dcdDZxhZImZ8Cfg4Dc7SJ", "ScreenUtils", void 0);
                        var _e = codex.event, Ce = Ludex, De = Ce.Events, Le = Ce.Utils.Array, ke = e("x", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            var t, n, r;
                            function e() {
                                D(this, e), this.showedScreens$ = [];
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "preloadScreen",
                                    value: function value(e) {
                                        var t = Ee[e];
                                        t && _e.emit(De.PRELOAD_SCREEN, {
                                            screenName: t
                                        });
                                    }
                                },
                                {
                                    key: "preloadScreens",
                                    value: function value() {
                                        _e.emit(De.PRELOAD_SCREENS);
                                    }
                                },
                                {
                                    key: "openScreen",
                                    value: function value(e, t) {
                                        var n = Ee[e];
                                        return _e.emit(De.OPEN_SCREEN, {
                                            screenName: n,
                                            screenData: t
                                        }), new Promise(function(e) {
                                            _e.on(De.OPENED_SCREEN, function t(r) {
                                                r.screenName === n && (_e.off(De.OPENED_SCREEN, t), e());
                                            });
                                        });
                                    }
                                },
                                {
                                    key: "closeScreen",
                                    value: function value(e) {
                                        var t = Ee[e];
                                        return _e.emit(De.CLOSE_SCREEN, {
                                            screenName: t
                                        }), new Promise(function(e) {
                                            _e.on(De.CLOSED_SCREEN, function n(r) {
                                                r.screenName === t && (_e.off(De.CLOSED_SCREEN, n), e());
                                            });
                                        });
                                    }
                                },
                                {
                                    key: "openScreenAndWaitForClose",
                                    value: (r = C(function(e, t) {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.openScreen(e, t)
                                                    ];
                                                case 1:
                                                    return _state.sent(), [
                                                        4,
                                                        new Promise(function(t) {
                                                            _e.on(De.CLOSE_SCREEN, function n(r) {
                                                                r.screenName === Ee[e] && (_e.off(De.CLOSE_SCREEN, n), t(r));
                                                            });
                                                        })
                                                    ];
                                                case 2:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }), function(e, t) {
                                        return r.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "showLoadingScreen",
                                    value: function value(e) {
                                        return this.openScreen(ge.LOADING_SCREEN, {
                                            duration: e
                                        });
                                    }
                                },
                                {
                                    key: "closeLoadingScreen",
                                    value: function value() {
                                        return this.closeScreen(ge.LOADING_SCREEN);
                                    }
                                },
                                {
                                    key: "showNotificationScreen",
                                    value: function value(e, t) {
                                        return this.openScreen(ge.NOTIFICATION_SCREEN, {
                                            message: e,
                                            duration: t
                                        });
                                    }
                                },
                                {
                                    key: "showNotificationScreenWithLocalizedKey",
                                    value: function value(e, t) {
                                        return this.openScreen(ge.NOTIFICATION_SCREEN, {
                                            localizedMessageKey: e,
                                            duration: t
                                        });
                                    }
                                },
                                {
                                    key: "closeNotificationScreen",
                                    value: function value() {
                                        return this.closeScreen(ge.NOTIFICATION_SCREEN);
                                    }
                                },
                                {
                                    key: "addShowedScene",
                                    value: function value(e) {
                                        Le.has(this.inst.showedScreens$, e) || this.inst.showedScreens$.push(e);
                                    }
                                },
                                {
                                    key: "showLoadingFullScreen",
                                    value: (n = C(function(e) {
                                        var t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (Le.has(this.inst.showedScreens$, e) || (this.addShowedScene(e), !(t = g("Loading")))) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        t.getComponent("Loading").show(e)
                                                    ];
                                                case 1:
                                                    _state.sent(), _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return n.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "hideLoadingFullScreen",
                                    value: (t = C(function(e) {
                                        var t, n;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (Le.has(this.inst.showedScreens$, e)) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        null == (n = null == (t = g("Loading")) ? void 0 : t.getComponent("Loading")) ? void 0 : n.hide(e)
                                                    ];
                                                case 1:
                                                    _state.sent(), _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return t.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "showLoadingNotificationScreen",
                                    value: function value() {
                                        return this.openScreen(ge.NOTIFICATION_SCREEN, {
                                            message: "Loading",
                                            enableCloseOnTouch: !1
                                        });
                                    }
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "4a4bfX6KIJCcIozlNHuAwoi", "AdsUtils", void 0);
                        var Oe = Ludex, $e = Oe.Events, Pe = Oe.Configs, Be = Pe.Ads.Enabled, Fe = Pe.Gameplay.StartAdAtLevel, xe = Oe.Plugins.Ads, Ge = void 0 === xe ? {} : xe, Me = Ge.Types, Ue = Ge.Status, We = Oe.Utils, He = We.Array, je = We.Function, Ve = We.Object, Ke = codex, ze = Ke.ads, Ye = Ke.event, qe = Ke.player, Je = function(e) {
                            $(n, e);
                            var t = W(n);
                            function n(e) {
                                return D(this, n), t.call(this, "AdsUtils.loadAdAsync: Timed out after ".concat(e, "ms"));
                            }
                            return k(n);
                        }(G(Error)), Ze = e("t", function(e) {
                            $(r, e);
                            var t, n = W(r);
                            function r() {
                                return D(this, r), n.apply(this, arguments);
                            }
                            return k(r, null, [
                                {
                                    key: "preloadAds",
                                    value: (t = C(function() {
                                        return _ts_generator(this, function(_state) {
                                            return Me && (this.preloadAdsByType(Me.INTERSTITIAL), this.preloadAdsByType(Me.REWARDED_VIDEO)), [
                                                2
                                            ];
                                        });
                                    }), function() {
                                        return t.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "applyRemoveAds",
                                    value: function value() {
                                        if (Me) {
                                            var _$e = !this.isRemoveAdActive();
                                            this.setAdEnable(Me.BANNER, _$e), this.setAdEnable(Me.INTERSTITIAL, _$e), this.refreshBannerAdVisibility();
                                        }
                                    }
                                },
                                {
                                    key: "isRemoveAdActive",
                                    value: function value() {
                                        var _$e = (qe.getGameData() || {}).removeAdEndTime;
                                        return !!_$e && _$e > Date.now();
                                    }
                                },
                                {
                                    key: "isAdInProgress",
                                    value: function value() {
                                        if (!Me || !Ue) return !1;
                                        var _$e = ze.getAdsByType(Me.INTERSTITIAL), t = ze.getAdsByType(Me.REWARDED_VIDEO), n = ze.getAdsByType(Me.REWARDED_INTERSTITIAL), _$r = _$e.some(function(e) {
                                            return e.instance.status === Ue.SHOWING;
                                        }), i = t.some(function(e) {
                                            return e.instance.status === Ue.SHOWING;
                                        }), a = n.some(function(e) {
                                            return e.instance.status === Ue.SHOWING;
                                        });
                                        return _$r || i || a;
                                    }
                                }
                            ]), r;
                        }(function() {
                            var t, n, r, i;
                            function e() {
                                var _$e, t = this;
                                D(this, e), this.adsEnable$ = {}, this.visibleBannerConfigs$ = [], this.invisibleBannerConfigs$ = [], this.updateBannerAdsConfigByLayout$ = function(e) {
                                    if (Me) {
                                        var n = h.getVisibleSize(), r = de.worldSizeToCssSize(n.height * we.MAX_BOTTOM_BANNER_RATIO), i = e === le.Layout.Landscape, a = ze.getAdsByType(Me.BANNER).map(function(e) {
                                            return e.config;
                                        }).filter(function(e) {
                                            var t = e.Position, n = e.BannerHeight;
                                            return !("bottom" === t && n > r);
                                        });
                                        t.visibleBannerConfigs$ = a.filter(function(e) {
                                            var t = e.Position;
                                            return i || "bottom" === t || "top" === t;
                                        }), t.invisibleBannerConfigs$ = a.filter(function(e) {
                                            return !t.visibleBannerConfigs$.includes(e);
                                        });
                                    }
                                }, this.getAdReady$ = function(e, n) {
                                    if (!Ue || !t.self.isAdEnabled(e)) return null;
                                    if (n) return ze.getAdStatus(e, n) === Ue.FILLED ? n : null;
                                    var r, i = ze.getAdsByType(e).find(function(t) {
                                        return ze.getAdStatus(e, t.placementId) === Ue.FILLED;
                                    });
                                    return null != (r = null == i ? void 0 : i.placementId) ? r : null;
                                }, this.getPlacementIdByService$ = function(e, t) {
                                    if (!t || !Me) return !1;
                                    var n, r = ze.getAdsByType(e), i = He.search(r, function(e) {
                                        return e.config.AdService === t;
                                    });
                                    return null != (n = null == i ? void 0 : i.placementId) && n;
                                }, this.getAdIdByPayload$ = function(e, n) {
                                    var r = n || {}, i = r.adService, a = r.placementId;
                                    return t.getPlacementIdByService$(e, i) || a;
                                }, this.getAdErrorMessage$ = function(e, n) {
                                    if (!Me) return null;
                                    switch(e){
                                        case Me.REWARDED_VIDEO:
                                        case Me.REWARDED_INTERSTITIAL:
                                            return t.isUserCancelledAdError$(n) ? "ads.cancelled" : "error.noAd";
                                        default:
                                            return null;
                                    }
                                }, this.showAdByType$ = (_$e = C(function(e, n) {
                                    var r, i, a, o, s, u, l, c, d, f, y, h, v, p, m, e1, n1, S;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (!Me || !Ue || !t.self.isAdEnabled(e) || (i = (r = n || {}).placementId, a = r.includeSDK, o = r.excludeSDK, s = r.forceLoad, u = r.autoLoad, l = r.adService, d = void 0 === (c = r.timeout) ? 15e3 : c, f = r.showError, !t.canShowInSDK$(a, o))) return [
                                                    2,
                                                    !1
                                                ];
                                                y = t.getAdIdByPayload$(e, n), h = !1, v = !1, _state.label = 1;
                                            case 1:
                                                if (_state.trys.push([
                                                    1,
                                                    10,
                                                    11,
                                                    12
                                                ]), p = ze.getAdStatus(e, i), !(s || u && p !== Ue.FILLED)) return [
                                                    3,
                                                    3
                                                ];
                                                return ke.showLoadingScreen(), [
                                                    4,
                                                    je.timeOut(ze.loadAdAsync(e, y), d)
                                                ];
                                            case 2:
                                                _state.sent(), _state.label = 3;
                                            case 3:
                                                et.muteAudio(!0), _state.label = 4;
                                            case 4:
                                                if (h) return [
                                                    3,
                                                    9
                                                ];
                                                _state.label = 5;
                                            case 5:
                                                if (_state.trys.push([
                                                    5,
                                                    7,
                                                    ,
                                                    8
                                                ]), !(m = t.getAdReady$(e, y))) return [
                                                    2,
                                                    !1
                                                ];
                                                return y = m, [
                                                    4,
                                                    ze.showAdAsync(e, y)
                                                ];
                                            case 6:
                                                return _state.sent(), h = !0, [
                                                    3,
                                                    8
                                                ];
                                            case 7:
                                                if (e1 = _state.sent(), l || t.isUserCancelledAdError$(e1) || t.isRequestAdTimeoutError$(e1)) throw e1;
                                                return y = void 0, h = !1, v = !0, [
                                                    3,
                                                    8
                                                ];
                                            case 8:
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 9:
                                                return [
                                                    2,
                                                    !0
                                                ];
                                            case 10:
                                                return n1 = _state.sent(), v = !0, [
                                                    2,
                                                    ((S = t.getAdErrorMessage$(e, n1)) && f && ke.showNotificationScreenWithLocalizedKey(S, 2), !1)
                                                ];
                                            case 11:
                                                return et.muteAudio(!1), (s || u) && ke.closeLoadingScreen(), v && (y = i), t.self.preloadAdsByType(e, y), Ye.emit($e.REQUEST_RESIZE_GAME), [
                                                    7
                                                ];
                                            case 12:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }), function(t, n) {
                                    return _$e.apply(this, arguments);
                                }), this.canShowInSDK$ = function() {
                                    var _$e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = GameSDK.getSDKName();
                                    return (null == t || !t.length || !He.has(t, n)) && !(null != _$e && _$e.length && !He.has(_$e, n));
                                }, this.isUserCancelledAdError$ = function(e) {
                                    return Ve.hasOwn(e, "code") && "USER_INPUT" === e.code;
                                }, this.isRequestAdTimeoutError$ = function(e) {
                                    return _instanceof(e, Je) || !(!Ve.hasOwn(e, "code") || "SHOW_ADS_TIMEOUT" !== e.code);
                                };
                            }
                            return k(e, [
                                {
                                    key: "self",
                                    get: function get() {
                                        return this.constructor;
                                    }
                                }
                            ], [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "setAdEnable",
                                    value: function value(e, t) {
                                        this.inst.adsEnable$[e] = t;
                                    }
                                },
                                {
                                    key: "isAdEnabled",
                                    value: function value(e) {
                                        return !!Be && !1 !== this.inst.adsEnable$[e];
                                    }
                                },
                                {
                                    key: "preloadAds",
                                    value: (i = C(function() {
                                        return _ts_generator(this, function(_state) {
                                            return Me && (this.preloadAdsByType(Me.INTERSTITIAL), this.preloadAdsByType(Me.REWARDED_VIDEO), this.preloadAdsByType(Me.REWARDED_INTERSTITIAL)), [
                                                2
                                            ];
                                        });
                                    }), function() {
                                        return i.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "isServiceDegraded",
                                    value: function value() {
                                        return ze.isServiceDegraded();
                                    }
                                },
                                {
                                    key: "preloadAdsByType",
                                    value: function value(e, t) {
                                        if (this.isAdEnabled(e) && Ue) {
                                            var n = ze.getAdsByType(e);
                                            (t ? n.filter(function(e) {
                                                return e.placementId === t;
                                            }) : n).forEach(function(n) {
                                                ze.getAdStatus(e, n.placementId) !== Ue.FILLED && ze.getAdStatus(e, t) !== Ue.FILLED && ze.loadAdAsync(e, n.placementId).catch(function() {});
                                            });
                                        }
                                    }
                                },
                                {
                                    key: "updateBannerAdsByLayout",
                                    value: function value(e) {
                                        this.inst.updateBannerAdsConfigByLayout$(e);
                                    }
                                },
                                {
                                    key: "refreshBannerAdVisibility",
                                    value: function value() {
                                        if (Me && Ue) if (this.isAdEnabled(Me.BANNER)) {
                                            var _$e, t = Y(this.inst.invisibleBannerConfigs$);
                                            try {
                                                for(t.s(); !(_$e = t.n()).done;){
                                                    var n = _$e.value.PlacementId;
                                                    ze.getAdStatus(Me.BANNER, n) === Ue.SHOWING && this.hideBannerAd(n);
                                                }
                                            } catch (e) {
                                                t.e(e);
                                            } finally{
                                                t.f();
                                            }
                                            var r, i = Y(this.inst.visibleBannerConfigs$);
                                            try {
                                                for(i.s(); !(r = i.n()).done;){
                                                    var a = r.value.PlacementId, o = ze.getAdStatus(Me.BANNER, a);
                                                    !1 !== o && o !== Ue.SHOWING && this.showBannerAd(a);
                                                }
                                            } catch (e) {
                                                i.e(e);
                                            } finally{
                                                i.f();
                                            }
                                        } else this.hideBannerAds();
                                    }
                                },
                                {
                                    key: "getBannerAdHeight",
                                    value: function value() {
                                        try {
                                            if (!Me) return 0;
                                            var _$e = de.cssSizeToWorldSize(1), t = ze.getAd(Me.BANNER);
                                            return Math.round(ze.getBannerHeight(t.placementId, _$e));
                                        } catch (e) {
                                            return console.warn("[AdsUtils] getBannerAdHeight error:", e), 0;
                                        }
                                    }
                                },
                                {
                                    key: "showBannerAds",
                                    value: function value() {
                                        if (Me && Ue && this.isAdEnabled(Me.BANNER)) {
                                            var _$e, t = Y(ze.getAdsByType(Me.BANNER));
                                            try {
                                                for(t.s(); !(_$e = t.n()).done;){
                                                    var n = _$e.value;
                                                    ze.getAdStatus(Me.BANNER, n.placementId) !== Ue.IDLE && this.showBannerAd(n.placementId);
                                                }
                                            } catch (e) {
                                                t.e(e);
                                            } finally{
                                                t.f();
                                            }
                                        }
                                    }
                                },
                                {
                                    key: "hideBannerAds",
                                    value: function value() {
                                        if (Be && Me && Ue) {
                                            var _$e, t = Y(ze.getAdsByType(Me.BANNER));
                                            try {
                                                for(t.s(); !(_$e = t.n()).done;){
                                                    var n = _$e.value;
                                                    ze.getAdStatus(Me.BANNER, n.placementId) !== Ue.IDLE && this.hideBannerAd(n.placementId);
                                                }
                                            } catch (e) {
                                                t.e(e);
                                            } finally{
                                                t.f();
                                            }
                                        }
                                    }
                                },
                                {
                                    key: "showBannerAd",
                                    value: function value(e) {
                                        Me && this.isAdEnabled(Me.BANNER) && ze.showBannerAdAsync(e).catch(function() {});
                                    }
                                },
                                {
                                    key: "hideBannerAd",
                                    value: function value(e) {
                                        Be && ze.hideBannerAdAsync(e).catch(function() {});
                                    }
                                },
                                {
                                    key: "isReadyAdShowable",
                                    value: function value(e, t) {
                                        var n = this.inst.getAdReady$(e, t);
                                        return !!n && ze.canShowAd(e, n);
                                    }
                                },
                                {
                                    key: "isBannerAdShowing",
                                    value: function value() {
                                        if (!Me || !Ue) return !1;
                                        var _$e, t = Y(ze.getAdsByType(Me.BANNER));
                                        try {
                                            for(t.s(); !(_$e = t.n()).done;){
                                                var n = _$e.value;
                                                if (ze.getAdStatus(Me.BANNER, n.placementId) === Ue.SHOWING) return !0;
                                            }
                                        } catch (e) {
                                            t.e(e);
                                        } finally{
                                            t.f();
                                        }
                                        return !1;
                                    }
                                },
                                {
                                    key: "showInterstitialAdAsync",
                                    value: (r = C(function(e) {
                                        var t, n, r, i, a, o, s;
                                        return _ts_generator(this, function(_state) {
                                            return Me ? (i = (r = null != e ? e : {}).forLevel, a = r.contextType, o = r.forceLoad, i && Fe >= i) ? [
                                                2,
                                                !1
                                            ] : (a && (null == (t = window.GoogleAds) || t.setInterstitialType(a), null == (n = window.TranssionH5Ads) || n.setInterstitialType(a)), s = GameSDK.isGameSDK("MsGames"), [
                                                2,
                                                this.inst.showAdByType$(Me.INTERSTITIAL, R(R({}, e), {}, {
                                                    forceLoad: o || s
                                                }))
                                            ]) : [
                                                2,
                                                !1
                                            ];
                                        });
                                    }), function(e) {
                                        return r.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "showRewardVideoAdAsync",
                                    value: (n = C(function(e) {
                                        var t, n, r;
                                        return _ts_generator(this, function(_state) {
                                            return Me ? [
                                                2,
                                                ((r = (null != e ? e : {}).contextType) && (null == (t = window.GoogleAds) || t.setRewardType(r), null == (n = window.TranssionH5Ads) || n.setRewardType(r)), this.inst.showAdByType$(Me.REWARDED_VIDEO, R(R({
                                                    showError: !0
                                                }, e), {}, {
                                                    autoLoad: !0
                                                })))
                                            ] : [
                                                2,
                                                !1
                                            ];
                                        });
                                    }), function(e) {
                                        return n.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "showRewardedInterstitialAdAsync",
                                    value: (t = C(function(e) {
                                        var t, n, r;
                                        return _ts_generator(this, function(_state) {
                                            return Me ? [
                                                2,
                                                ((r = (null != e ? e : {}).contextType) && (null == (t = window.GoogleAds) || t.setRewardType(r), null == (n = window.TranssionH5Ads) || n.setRewardType(r)), this.inst.showAdByType$(Me.REWARDED_INTERSTITIAL, R(R({
                                                    showError: !0
                                                }, e), {}, {
                                                    autoLoad: !0
                                                })))
                                            ] : [
                                                2,
                                                !1
                                            ];
                                        });
                                    }), function(e) {
                                        return t.apply(this, arguments);
                                    })
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "31871PLRYRJu7yCCX5F6lWK", "AudioUtils", void 0);
                        var Xe = Ludex.Utils.Signal, Qe = codex.player, et = e("p", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "setMasterVolumeState",
                                    value: function value(e) {
                                        j(P(n), "setMasterVolumeState", this).call(this, e);
                                        var t = Ze.isAdInProgress();
                                        this.muteAudio(!e && !t);
                                    }
                                },
                                {
                                    key: "syncYoutubePlayableAudio",
                                    value: function value() {
                                        var _$e;
                                        if (GameSDK.isGameSDK("YoutubePlayables")) {
                                            null == (_$e = this.inst.music) || _$e.play(he.BG_MUSIC);
                                            var t = GameSDK.extra.isAudioEnabled();
                                            this.setMasterVolumeState(t);
                                        }
                                    }
                                }
                            ]), n;
                        }(function() {
                            var t, n, r, i, a;
                            function e() {
                                D(this, e), this.signalController$ = new Xe.SignalController, this.masterVolumeState$ = !0;
                            }
                            return k(e, [
                                {
                                    key: "sound",
                                    get: function get() {
                                        var _$e;
                                        return null == (_$e = g("Sound")) ? void 0 : _$e.getComponent("Sound");
                                    }
                                },
                                {
                                    key: "music",
                                    get: function get() {
                                        var _$e;
                                        return null == (_$e = g("Music")) ? void 0 : _$e.getComponent("Music");
                                    }
                                }
                            ], [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "setMasterVolumeState",
                                    value: function value(e) {
                                        this.inst.masterVolumeState$ = e, et.muteAudio(!e), e || et.stopAllSounds(), Qe.setSetting("sound", e), Qe.setSetting("music", e);
                                    }
                                },
                                {
                                    key: "muteAudio",
                                    value: function value(e) {
                                        (e || this.inst.masterVolumeState$) && (this.muteMusic(e), this.muteSound(e));
                                    }
                                },
                                {
                                    key: "muteSound",
                                    value: function value(e) {
                                        var t;
                                        null == (t = this.inst.sound) || t.mute(e);
                                    }
                                },
                                {
                                    key: "muteMusic",
                                    value: function value(e) {
                                        var t;
                                        null == (t = this.inst.music) || t.mute(e);
                                    }
                                },
                                {
                                    key: "getCurrentMusic",
                                    value: function value() {
                                        return this.inst.currentMusic$;
                                    }
                                },
                                {
                                    key: "turnUpMusic",
                                    value: (a = C(function() {
                                        var _$e, t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if ((null != (_$e = null == (t = this.inst.music) ? void 0 : t.getVolume()) ? _$e : 0) > .6) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        this.setVolumeMusic(.6, !0)
                                                    ];
                                                case 1:
                                                    _state.sent(), _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function() {
                                        return a.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "turnDownMusic",
                                    value: (i = C(function() {
                                        var _$e, t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if ((null != (_$e = null == (t = this.inst.music) ? void 0 : t.getVolume()) ? _$e : 0) < .2) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        this.setVolumeMusic(.2, !0)
                                                    ];
                                                case 1:
                                                    _state.sent(), _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function() {
                                        return i.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "turnOffMusic",
                                    value: (r = C(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.setVolumeMusic(0)
                                                    ];
                                                case 1:
                                                    return _state.sent(), [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function() {
                                        return r.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "getVolumeMusic",
                                    value: function value() {
                                        var _$e, t;
                                        return null != (_$e = null == (t = this.inst.music) ? void 0 : t.getVolume()) ? _$e : 0;
                                    }
                                },
                                {
                                    key: "setVolumeMusic",
                                    value: (n = C(function(e) {
                                        var t, n, r, i, a, o, _arguments = arguments;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (t = this, n = _arguments.length > 1 && void 0 !== _arguments[1] && _arguments[1], !this.inst.music) return [
                                                        3,
                                                        3
                                                    ];
                                                    if (r = this.inst.signalController$.renew(), !n) return [
                                                        3,
                                                        2
                                                    ];
                                                    return a = i = this.inst.music.getVolume(), [
                                                        4,
                                                        se.runOnUpdateAsync(this.inst.music.node, 1, function(n) {
                                                            t.inst.music && (a = i + (e - i) * n, t.inst.music.setVolume(a));
                                                        }, r)
                                                    ];
                                                case 1:
                                                    return _state.sent(), [
                                                        3,
                                                        3
                                                    ];
                                                case 2:
                                                    null == (o = this.inst.music) || o.setVolume(e), _state.label = 3;
                                                case 3:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return n.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "playSound",
                                    value: (t = C(function(e, t) {
                                        var n;
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                null == (n = this.inst.sound) ? void 0 : n.play(e, t)
                                            ];
                                        });
                                    }), function(e, n) {
                                        return t.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "pauseSound",
                                    value: function value(e) {
                                        var t;
                                        null == (t = this.inst.sound) || t.pause(e);
                                    }
                                },
                                {
                                    key: "resumeSound",
                                    value: function value(e) {
                                        var t;
                                        null == (t = this.inst.sound) || t.resume(e);
                                    }
                                },
                                {
                                    key: "stopSound",
                                    value: function value(e) {
                                        var t;
                                        null == (t = this.inst.sound) || t.stop(e);
                                    }
                                },
                                {
                                    key: "stopAllSounds",
                                    value: function value() {
                                        var _$e;
                                        null == (_$e = this.inst.sound) || _$e.stopAll();
                                    }
                                },
                                {
                                    key: "playMusic",
                                    value: function value(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                        this.inst.music && (this.inst.currentMusic$ !== e && this.pauseMusic(), this.inst.currentMusic$ = e, !t && this.inst.music.playing(e) || (t && this.inst.music.stop(e), this.inst.music.play(e)));
                                    }
                                },
                                {
                                    key: "pauseMusic",
                                    value: function value() {
                                        var _$e;
                                        null == (_$e = this.inst.music) || _$e.pause(this.inst.currentMusic$);
                                    }
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "f8533KH/fxOfYqya9sgLrSj", "GameData", void 0);
                        var _$e, e1, me, Se, tt, nt = e("I", {
                            level: 0,
                            coins: 0,
                            bestEndlessScore: 0,
                            firstLoginTime: 0,
                            removeAdEndTime: 0,
                            lastCreateTournamentShown: 0,
                            tournamentProgress: {}
                        });
                        t._RF.pop(), t._RF.push({}, "3b9bcPJBxpNOqG2I6exTOVn", "MatchCustomData", void 0);
                        var rt = Ludex.Dtos.Match, it = (void 0 === rt ? {} : rt).CustomData;
                        e("M", R(R({}, null != (tt = null == it ? void 0 : it.getDefaults()) ? tt : {}), {}, {
                            score: 0,
                            challengeData: null
                        })), t._RF.pop(), t._RF.push({}, "074c4KXFZ1Pq6d+66PrLd2+", "PlayerData", void 0), e("P", {
                            score: 0,
                            settings: {
                                sound: !0,
                                music: !0,
                                vibrate: !0,
                                language: "en"
                            },
                            gameData: nt,
                            isFirstLogin: !0,
                            dailyRewardedData: {
                                logDays: [],
                                firstReward: 0,
                                lastReward: 0
                            },
                            lastCallSwitchGame: 0,
                            notificationData: {},
                            missionsData: {
                                process: {}
                            }
                        }), t._RF.pop(), t._RF.push({}, "ff436w8KphN2o+jnnVL3RYx", "SceneKeys", void 0);
                        var ot = e("B", {
                            TEST_SCENE: "TestScene",
                            BOOT_SCENE: "BootScene",
                            DASHBOARD_SCENE: "DashboardScene",
                            GAME_SCENE: "GameScene",
                            ENDLESS_SCENE: "EndlessScene",
                            DRAFT_SCENE: "DraftScene",
                            PLAYABLE_SCENE: "PlayableScene",
                            TEST_LAYOUT_SCENE: "TestLayoutScene",
                            TEST_PERFORMANCE_SCENE: "TestPerformanceScene",
                            TEST_PARTICLE_SYSTEM_SCENE: "TestParticleSystemScene"
                        });
                        t._RF.pop(), t._RF.push({}, "58f4330KXRL77xyoA3903MY", "WasmUtils", void 0);
                        var st = Ludex.Utils.Function, ut = e("W", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            var t;
                            function e() {
                                D(this, e), this.mutex$ = st.mutex();
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "loadModuleAsync",
                                    value: (t = C(function(e) {
                                        var t;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        this.inst.mutex$.use("module-wasm-".concat(e))
                                                    ];
                                                case 1:
                                                    t = _state.sent(), _state.label = 2;
                                                case 2:
                                                    switch(_state.trys.push([
                                                        2,
                                                        ,
                                                        12,
                                                        13
                                                    ]), e){
                                                        case "spine":
                                                            return [
                                                                3,
                                                                3
                                                            ];
                                                        case "box2d":
                                                            return [
                                                                3,
                                                                5
                                                            ];
                                                        case "physx":
                                                            return [
                                                                3,
                                                                7
                                                            ];
                                                        case "bullet":
                                                            return [
                                                                3,
                                                                9
                                                            ];
                                                    }
                                                    return [
                                                        3,
                                                        11
                                                    ];
                                                case 3:
                                                    if ("function" != typeof N) return [
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        N()
                                                    ];
                                                case 4:
                                                case 6:
                                                case 8:
                                                    return _state.sent(), [
                                                        3,
                                                        11
                                                    ];
                                                case 5:
                                                    if ("function" != typeof T) return [
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        T()
                                                    ];
                                                case 7:
                                                    if ("function" != typeof A) return [
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        A()
                                                    ];
                                                case 9:
                                                    if ("function" != typeof E) return [
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        E()
                                                    ];
                                                case 10:
                                                    _state.sent(), _state.label = 11;
                                                case 11:
                                                    return [
                                                        3,
                                                        13
                                                    ];
                                                case 12:
                                                    return t.release(), [
                                                        7
                                                    ];
                                                case 13:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return t.apply(this, arguments);
                                    })
                                }
                            ]), e;
                        }()));
                        t._RF.pop(), t._RF.push({}, "97ca9J9nzNCeIjC1l+ZT/Hm", "SceneUtils", void 0);
                        var lt = codex.event, ct = Ludex.Events;
                        e("z", function(e) {
                            $(i, e);
                            var t, n, r = W(i);
                            function i() {
                                return D(this, i), r.apply(this, arguments);
                            }
                            return k(i, null, [
                                {
                                    key: "preloadDashboardScene",
                                    value: function value() {
                                        this.preloadScene(ot.DASHBOARD_SCENE);
                                    }
                                },
                                {
                                    key: "switchToDashboardScene",
                                    value: function value(e) {
                                        this.switchScene(ot.DASHBOARD_SCENE, e);
                                    }
                                },
                                {
                                    key: "preloadGameScene",
                                    value: (n = C(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        ut.loadModuleAsync("spine")
                                                    ];
                                                case 1:
                                                    return _state.sent(), this.preloadScene(ot.GAME_SCENE), [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function() {
                                        return n.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "switchToGameScene",
                                    value: (t = C(function(e) {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return et.stopAllSounds(), et.turnOffMusic(), [
                                                        4,
                                                        ut.loadModuleAsync("spine")
                                                    ];
                                                case 1:
                                                    return _state.sent(), this.switchScene(ot.GAME_SCENE, e), [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), function(e) {
                                        return t.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "switchToEndlessScene",
                                    value: function value(e) {
                                        et.stopAllSounds(), et.turnOffMusic(), this.switchScene(ot.ENDLESS_SCENE, e);
                                    }
                                }
                            ]), i;
                        }(function() {
                            function e() {
                                D(this, e), this.loadedScenes$ = {};
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "switchScene",
                                    value: function value(e, t) {
                                        lt.emit(ct.SWITCH_SCENE, {
                                            sceneName: e,
                                            sceneData: t
                                        });
                                    }
                                },
                                {
                                    key: "preloadScene",
                                    value: function value(e) {
                                        lt.emit(ct.PRELOAD_SCENE, {
                                            sceneName: e
                                        });
                                    }
                                },
                                {
                                    key: "isSceneLoaded",
                                    value: function value(e) {
                                        var t;
                                        return null != (t = this.inst.loadedScenes$[e]) && t;
                                    }
                                },
                                {
                                    key: "markIsSceneLoaded",
                                    value: function value(e) {
                                        this.inst.loadedScenes$[e] = !0;
                                    }
                                },
                                {
                                    key: "markIsTestScene",
                                    value: function value(e) {
                                        lt.emit(ct.MARK_IS_TEST_SCENE, {
                                            sceneName: e
                                        });
                                    }
                                },
                                {
                                    key: "getSceneData",
                                    value: function value(e) {
                                        return "data" in e.scene && e.scene.data || {};
                                    }
                                }
                            ]), e;
                        }())), t._RF.pop(), t._RF.push({}, "669a1OtNF9EDrMRLWTjxk4B", "GeneralUtils", void 0), e("O", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            function e() {
                                D(this, e);
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "setBlockInput",
                                    value: function value(e) {
                                        var t = g("Canvas/InputBlocker");
                                        t && (t.active = e);
                                    }
                                },
                                {
                                    key: "getBlockInput",
                                    value: function value() {
                                        var _$e = g("Canvas/InputBlocker");
                                        return !!_$e && _$e.active;
                                    }
                                }
                            ]), e;
                        }())), t._RF.pop(), t._RF.push({}, "ed5c6D+6KVEj5lrgtq+D9bJ", "LayoutUtils", void 0);
                        var ft = le.Layout;
                        e("H", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n);
                        }(function() {
                            function e() {
                                var t = this;
                                D(this, e), this.isListening$ = !1, this.currentLayout$ = ft.Portrait, this.onLayoutChanged$ = function(e) {
                                    t.currentLayout$ !== e && (t.currentLayout$ = e, I.emit(ue.ORIENTATION_CHANGED, e));
                                };
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "listenLayoutChanges",
                                    value: function value() {
                                        this.inst.isListening$ || (this.inst.isListening$ = !0, I.on(ue.LAYOUT_CHANGED, this.inst.onLayoutChanged$));
                                    }
                                },
                                {
                                    key: "getCurrentLayout",
                                    value: function value() {
                                        return this.inst.currentLayout$;
                                    }
                                },
                                {
                                    key: "isPortrait",
                                    value: function value() {
                                        return this.inst.currentLayout$ === ft.Portrait;
                                    }
                                },
                                {
                                    key: "isLandscape",
                                    value: function value() {
                                        return this.inst.currentLayout$ === ft.Landscape;
                                    }
                                },
                                {
                                    key: "getScreenRatio",
                                    value: function value() {
                                        return de.getScreenWidthCss() / de.getScreenHeightCss();
                                    }
                                }
                            ]), e;
                        }())), t._RF.pop(), t._RF.push({}, "58eae10lp9GX4EnVB/hLwAg", "LoaderUtils", void 0);
                        var yt = codex, ht = yt.event, vt = yt.match, pt = yt.player, mt = yt.context, St = e("Q", function(e) {
                            $(n, e);
                            var t = W(n);
                            function n() {
                                return D(this, n), t.apply(this, arguments);
                            }
                            return k(n, null, [
                                {
                                    key: "applyCustomFlows",
                                    value: function value() {
                                        var _$e = this;
                                        mt.configureFlows(function(t) {
                                            t.addBefore("ChallengeFromPostFlow", _$e.createNewUserChallengeFriendToSingleFlow$(t)), t.addBefore("ChallengeFromPostFlow", _$e.createStartSingleFromShareInviteContextFlow$(t)), t.addBefore("ChallengeFromMessageFlow", _$e.createFastChallengeFromMessageFlow$(t));
                                        });
                                    }
                                }
                            ]), n;
                        }(function() {
                            function e() {
                                D(this, e);
                            }
                            return k(e, null, [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                }
                            ]), e;
                        }()));
                        St.createNewUserChallengeFriendToSingleFlow$ = function(e) {
                            var t = mt.getSessionContextTypes().CHALLENGE_FRIEND;
                            return {
                                id: "NewUserChallengeFriendToSingleFlow",
                                when: function when(e) {
                                    var n = e.contextSessionType;
                                    return !!e.isFirstSession && n === t;
                                },
                                do: e.createSteps([
                                    St.createNewUserSingleModeStep$(),
                                    St.createSwitchSceneStep$()
                                ])
                            };
                        }, St.createStartSingleFromShareInviteContextFlow$ = function(e) {
                            var t = mt.getSessionContextTypes().CHALLENGE_FRIEND;
                            return {
                                id: "StartSingleFromChallengeContextFlow",
                                when: function when(e) {
                                    var n = e.contextSessionType;
                                    return !e.isFirstSession && n === t && null !== St.extractLevel$(e.contextData);
                                },
                                do: e.createSteps([
                                    St.createStartSingleMode$(),
                                    St.createSwitchSceneStep$()
                                ])
                            };
                        }, St.createFastChallengeFromMessageFlow$ = function(e) {
                            var t = mt.getSessionContextTypes().CHALLENGE_FRIEND;
                            return {
                                id: "FastChallengeFromMessageFlow",
                                when: function when(e) {
                                    var n = e.contextData, r = n.matchId, i = n.playerId, a = n.opponentId, o = e.contextSessionType;
                                    return !e.isFirstSession && "string" == typeof r && "string" == typeof i && "string" == typeof a && o === t && null !== St.extractLevel$(e.contextData);
                                },
                                do: e.createSteps([
                                    St.createPrepareChallengeLevelStep$()
                                ])
                            };
                        }, St.createSwitchSceneStep$ = function() {
                            var _$e;
                            return {
                                id: "SwitchScene",
                                runAsync: (_$e = C(function(e) {
                                    var t;
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            !(t = e.sceneName) || (ht.emit(Ludex.Events.SWITCH_SCENE, {
                                                sceneName: t,
                                                sceneData: {
                                                    isFromLoader: !0
                                                }
                                            }), !1)
                                        ];
                                    });
                                }), function(t) {
                                    return _$e.apply(this, arguments);
                                })
                            };
                        }, St.createNewUserSingleModeStep$ = function() {
                            var _$e;
                            return {
                                id: "NewUserSingleMode",
                                runAsync: (_$e = C(function(e) {
                                    var t;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return t = pt.getPlayerId(), [
                                                    4,
                                                    vt.handler.setMatchCustomData({
                                                        playerId: t,
                                                        contextId: "SOLO"
                                                    })
                                                ];
                                            case 1:
                                                return _state.sent(), [
                                                    4,
                                                    vt.single.start.processAsync({
                                                        playerId: t
                                                    })
                                                ];
                                            case 2:
                                                return [
                                                    2,
                                                    (_state.sent(), e.sceneName = ot.GAME_SCENE, !0)
                                                ];
                                        }
                                    });
                                }), function(t) {
                                    return _$e.apply(this, arguments);
                                })
                            };
                        }, St.createPrepareChallengeLevelStep$ = function() {
                            var _$e;
                            return {
                                id: "PrepareChallengeLevelFromMessage",
                                runAsync: (_$e = C(function(e) {
                                    var t;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if ("number" != typeof (t = St.extractLevel$(e.contextData))) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    vt.handler.setMatchCustomData({
                                                        level: t
                                                    })
                                                ];
                                            case 1:
                                                _state.sent(), _state.label = 2;
                                            case 2:
                                                return [
                                                    2,
                                                    !0
                                                ];
                                        }
                                    });
                                }), function(t) {
                                    return _$e.apply(this, arguments);
                                })
                            };
                        }, St.createStartSingleMode$ = function() {
                            var _$e;
                            return {
                                id: "StartSingleMode",
                                runAsync: (_$e = C(function(e) {
                                    var t, n;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if ("number" != typeof (t = St.extractLevel$(e.contextData))) return [
                                                    2,
                                                    !0
                                                ];
                                                return n = pt.getPlayerId(), [
                                                    4,
                                                    vt.handler.setMatchCustomData({
                                                        level: t
                                                    })
                                                ];
                                            case 1:
                                                return _state.sent(), [
                                                    4,
                                                    vt.single.start.processAsync({
                                                        playerId: n
                                                    })
                                                ];
                                            case 2:
                                                return [
                                                    2,
                                                    (_state.sent(), e.sceneName = ot.GAME_SCENE, !0)
                                                ];
                                        }
                                    });
                                }), function(t) {
                                    return _$e.apply(this, arguments);
                                })
                            };
                        }, St.extractLevel$ = function(e) {
                            var t = e.level;
                            return "number" == typeof t ? t : null;
                        }, t._RF.pop(), t._RF.push({}, "d6fb7/+FFxLs7k5w6K38JYb", "TournamentUtils", void 0);
                        var gt = Ludex, Et = gt.Utils, At = Et.String, Tt = Et.Valid, Nt = Et.Array, It = gt.Configs.Mockup.Leaderboards, bt = codex.language, Rt = codex, wt = Rt.leaderboard, _t = Rt.player;
                        e("T", function(e) {
                            $(r, e);
                            var t, n = W(r);
                            function r() {
                                return D(this, r), n.apply(this, arguments);
                            }
                            return k(r, [
                                {
                                    key: "processPlayerTournamentData",
                                    value: function value() {
                                        var _$e, t = [], n = Y(this.playerTournaments$);
                                        try {
                                            for(n.s(); !(_$e = n.n()).done;){
                                                var _$r, i, a = _$e.value, o = "".concat(a.getID()), s = a.getContextID(), u = a.getEndTime(), l = this.parseTournamentPayload(a.getPayload());
                                                if (this.validateGameSDKTournamentPayload(l) && !(u < Date.now() / 1e3)) {
                                                    var c = a.getTournamentType();
                                                    if ("PAGE_HOSTED" !== c) {
                                                        var d = null != (_$r = l.playerName) ? _$r : "Player", f = {
                                                            id: o,
                                                            title: null != (i = a.getTitle()) ? i : this.createDefaultTournamentName(d),
                                                            endTime: u,
                                                            contextId: s,
                                                            payload: l,
                                                            tournamentType: c
                                                        };
                                                        t.push(f);
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            n.e(e);
                                        } finally{
                                            n.f();
                                        }
                                        return t;
                                    }
                                },
                                {
                                    key: "processGlobalTournamentLeaderboardData",
                                    value: function value() {
                                        var _$e = [];
                                        if (It.Enabled) {
                                            var t, n = Y(this.playerTournaments$);
                                            try {
                                                for(n.s(); !(t = n.n()).done;){
                                                    var _$r, i = t.value, a = i.getTournamentType();
                                                    if ("PAGE_HOSTED" === a) {
                                                        var o = "".concat(i.getID()), s = i.getContextID(), u = i.getEndTime(), l = this.parseTournamentPayload(i.getPayload()), c = {
                                                            id: o,
                                                            title: null != (_$r = i.getTitle()) ? _$r : "Global Tournament",
                                                            endTime: u,
                                                            contextId: s,
                                                            payload: l,
                                                            tournamentType: a
                                                        };
                                                        _$e.push(c);
                                                    }
                                                }
                                            } catch (e) {
                                                n.e(e);
                                            } finally{
                                                n.f();
                                            }
                                            return _$e;
                                        }
                                        var d, f = Y(this.globalTournamentLBData$);
                                        try {
                                            for(f.s(); !(d = f.n()).done;){
                                                var y, h, v = d.value, p = void 0;
                                                try {
                                                    p = JSON.parse(v.description);
                                                } catch (e) {
                                                    continue;
                                                }
                                                if (this.validateExpireTime(v) && this.validateGlobalTournamentPayload(p)) {
                                                    var m = "isNEZP" in GameSDK.extra && GameSDK.extra.isNEZP(), S = "isRestricted" in GameSDK.extra && GameSDK.extra.isRestricted();
                                                    if (m || S) {
                                                        if (!p.restrict) continue;
                                                    } else if (p.restrict) continue;
                                                    var g = null != (y = null == (h = p.i18n) || null == (h = h[bt.getCurrentLocale()]) ? void 0 : h.title) ? y : v.name, E = {
                                                        id: p.tournamentId,
                                                        title: g,
                                                        endTime: this.getTournamentEndTime(v),
                                                        contextId: p.contextId,
                                                        payload: {
                                                            playerId: "global",
                                                            playerName: "global",
                                                            leaderboardId: v._id
                                                        },
                                                        tournamentType: "PAGE_HOSTED"
                                                    };
                                                    _$e.push(E);
                                                }
                                            }
                                        } catch (e) {
                                            f.e(e);
                                        } finally{
                                            f.f();
                                        }
                                        return _$e;
                                    }
                                },
                                {
                                    key: "createDefaultTournamentName",
                                    value: function value(e) {
                                        var t = e.substring(0, 7), n = "".concat(t.split(" ")[0] || t, "'s Tournament"), _$r = At.removeDiacritics(n);
                                        return "".concat(_$r);
                                    }
                                }
                            ], [
                                {
                                    key: "requestTournamentDataAsync",
                                    value: (t = C(function() {
                                        var _$e, t, n, _$r, i, a;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        Promise.all([
                                                            (_$e = this.inst).fetchTournamentsAsync$(),
                                                            _$e.fetchGlobalTournamentLeaderboardAsync$()
                                                        ])
                                                    ];
                                                case 1:
                                                    _state.sent(), t = _$e.processPlayerTournamentData(), n = _$e.processGlobalTournamentLeaderboardData(), t.sort(function(e, t) {
                                                        return e.endTime - t.endTime;
                                                    }), n.sort(function(e, t) {
                                                        return e.endTime - t.endTime;
                                                    }), _$e.tournamentData$ = [].concat(V(n), V(t)), i = Y(_$e.tournamentData$);
                                                    try {
                                                        for(i.s(); !(_$r = i.n()).done;)(a = _$r.value.payload.leaderboardId) && (wt.isExistLeaderboardId(a) || wt.addLeaderboard({
                                                            type: "tournament",
                                                            name: a,
                                                            autoSortRank: !0,
                                                            leaderboardId: a
                                                        }));
                                                    } catch (e) {
                                                        i.e(e);
                                                    } finally{
                                                        i.f();
                                                    }
                                                    return [
                                                        2,
                                                        _$e.tournamentData$
                                                    ];
                                            }
                                        });
                                    }), function() {
                                        return t.apply(this, arguments);
                                    })
                                },
                                {
                                    key: "saveTournamentProgress",
                                    value: function value(e, t, n) {
                                        var _$r, i, a, o, s = (null != (_$r = _t.getGameData()) ? _$r : {}).tournamentProgress, u = null == s ? void 0 : s[n], l = {
                                            level: Math.max(e, null != (i = null == u ? void 0 : u.level) ? i : 0),
                                            score: Math.max(t, null != (a = null == u ? void 0 : u.score) ? a : 0),
                                            replayCount: null != (o = null == u ? void 0 : u.replayCount) ? o : 0
                                        };
                                        _t.setGameData({
                                            tournamentProgress: R(R({}, s), {}, O({}, n, l))
                                        });
                                    }
                                },
                                {
                                    key: "syncTournamentProgress",
                                    value: function value() {
                                        var _$e, t = (null != (_$e = _t.getGameData()) ? _$e : {}).tournamentProgress;
                                        if (t) {
                                            var n = this.inst, _$r = function r(e) {
                                                Nt.search(n.tournamentData$, function(t) {
                                                    return t.id === e;
                                                }) || delete t[e];
                                            };
                                            for(var i in t)_$r(i);
                                            _t.setGameData({
                                                tournamentProgress: t
                                            });
                                        }
                                    }
                                }
                            ]), r;
                        }(function() {
                            function e() {
                                var t = this;
                                D(this, e), this.globalTournamentLBData$ = [], this.playerTournaments$ = [], this.tournamentData$ = [], this.maxTimeRefetch$ = 5e3, this.lastFetchTournamentsData$ = 0, this.lastFetchGlobalTournament$ = 0, this.fetchGlobalTournamentLeaderboardAsync$ = C(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (_state.trys.push([
                                                    0,
                                                    3,
                                                    ,
                                                    4
                                                ]), !(Date.now() - t.lastFetchGlobalTournament$ > t.maxTimeRefetch$)) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    wt.requestLeaderboardsAsync({
                                                        limit: 100,
                                                        type: "world_tournament_leaderboard"
                                                    })
                                                ];
                                            case 1:
                                                t.globalTournamentLBData$ = _state.sent(), t.globalTournamentLBData$.sort(function(e, t) {
                                                    return e.expireTime - t.expireTime;
                                                }), _state.label = 2;
                                            case 2:
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 3:
                                                return console.warn("fetchGlobalTournamentLeaderboardAsync", _state.sent()), [
                                                    3,
                                                    4
                                                ];
                                            case 4:
                                                return [
                                                    2,
                                                    t.globalTournamentLBData$
                                                ];
                                        }
                                    });
                                }), this.fetchTournamentsAsync$ = C(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (_state.trys.push([
                                                    0,
                                                    3,
                                                    ,
                                                    4
                                                ]), !(Date.now() - t.lastFetchTournamentsData$ > t.maxTimeRefetch$)) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    GameSDK.tournament.getTournamentsAsync()
                                                ];
                                            case 1:
                                                t.playerTournaments$ = _state.sent(), t.playerTournaments$.sort(function(e, t) {
                                                    return e.getEndTime() - t.getEndTime();
                                                }), _state.label = 2;
                                            case 2:
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 3:
                                                return console.warn("fetchTournamentsAsync", _state.sent()), [
                                                    3,
                                                    4
                                                ];
                                            case 4:
                                                return [
                                                    2,
                                                    t.playerTournaments$
                                                ];
                                        }
                                    });
                                });
                            }
                            return k(e, [
                                {
                                    key: "validateGlobalTournamentPayload",
                                    value: function value(e) {
                                        var t = e.tournamentId, n = e.contextId;
                                        return !(!Tt.isString(t) || "" === t) && !(!Tt.isString(n) || "" === n);
                                    }
                                },
                                {
                                    key: "getTournamentEndTime",
                                    value: function value(e) {
                                        var t = new Date(e.createdAt).getTime();
                                        return Math.round((1e3 * e.expireTime + t) / 1e3);
                                    }
                                },
                                {
                                    key: "validateExpireTime",
                                    value: function value(e) {
                                        return 1e3 * this.getTournamentEndTime(e) - Date.now() > 0;
                                    }
                                },
                                {
                                    key: "validateGameSDKTournamentPayload",
                                    value: function value(e) {
                                        return !(!Tt.isString(e.playerId) || "" === e.playerId) && !(!Tt.isString(e.playerName) || "" === e.playerName) && !(!Tt.isString(e.leaderboardId) || "" === e.leaderboardId);
                                    }
                                },
                                {
                                    key: "parseTournamentPayload",
                                    value: function value(e) {
                                        if ("string" != typeof e) return {};
                                        try {
                                            return JSON.parse(e);
                                        } catch (e) {
                                            return {};
                                        }
                                    }
                                }
                            ], [
                                {
                                    key: "inst",
                                    get: function get() {
                                        return this.inst$ || (this.inst$ = new this), this.inst$;
                                    }
                                },
                                {
                                    key: "getAllTournamentData",
                                    value: function value() {
                                        return this.inst.tournamentData$;
                                    }
                                },
                                {
                                    key: "getTournamentDataById",
                                    value: function value(e) {
                                        var t = this.inst;
                                        return Nt.search(t.tournamentData$, function(t) {
                                            return t.id === e;
                                        });
                                    }
                                },
                                {
                                    key: "getPlayerTournamentData",
                                    value: function value() {
                                        var _$e = this.inst, t = _t.getPlayerId();
                                        return _$e.tournamentData$.filter(function(e) {
                                            return e.payload.playerId === t;
                                        });
                                    }
                                },
                                {
                                    key: "getFriendsTournamentData",
                                    value: function value() {
                                        var _$e = this.inst, t = _t.getPlayerId();
                                        return _$e.tournamentData$.filter(function(e) {
                                            var n = e.payload;
                                            return n.playerId !== t && "global" !== n.playerId;
                                        });
                                    }
                                },
                                {
                                    key: "getGlobalTournamentData",
                                    value: function value() {
                                        return this.inst.tournamentData$.filter(function(e) {
                                            return "global" === e.payload.playerId;
                                        });
                                    }
                                },
                                {
                                    key: "validateTournamentExpired",
                                    value: function value(e) {
                                        var t = this.getTournamentDataById(e);
                                        return !!t && t.endTime < Date.now() / 1e3;
                                    }
                                }
                            ]), e;
                        }())), t._RF.pop();
                    }
                };
            });
        }
    };
});
