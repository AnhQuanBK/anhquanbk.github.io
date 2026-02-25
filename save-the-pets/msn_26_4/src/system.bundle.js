!function() {
    "use strict";
    function e(e, t) {
        return (t || "") + " (SystemJS https://git.io/JvFET#" + e + ")";
    }
    var e1, t, n, r, i, o, s, t1, n1 = "u" > typeof Symbol, r1 = "u" > typeof self, i1 = "u" > typeof document, o1 = r1 ? self : global;
    if (i1) {
        var s1 = document.querySelector("base[href]");
        s1 && (t1 = s1.href);
    }
    if (!t1 && "u" > typeof location) {
        var u = (t1 = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== u && (t1 = t1.slice(0, u + 1));
    }
    var c = /\\/g;
    function a(e, t) {
        if (-1 !== e.indexOf("\\") && (e = e.replace(c, "/")), "/" === e[0] && "/" === e[1]) return t.slice(0, t.indexOf(":") + 1) + e;
        if ("." === e[0] && ("/" === e[1] || "." === e[1] && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === e[0]) {
            var n, r = t.slice(0, t.indexOf(":") + 1);
            if (n = "/" === t[r.length + 1] ? "file:" !== r ? (n = t.slice(r.length + 2)).slice(n.indexOf("/") + 1) : t.slice(8) : t.slice(r.length + ("/" === t[r.length])), "/" === e[0]) return t.slice(0, t.length - n.length - 1) + e;
            for(var i = n.slice(0, n.lastIndexOf("/") + 1) + e, o = [], s = -1, u = 0; u < i.length; u++)-1 !== s ? "/" === i[u] && (o.push(i.slice(s, u + 1)), s = -1) : "." === i[u] ? "." !== i[u + 1] || "/" !== i[u + 2] && u + 2 !== i.length ? "/" === i[u + 1] || u + 1 === i.length ? u += 1 : s = u : (o.pop(), u += 2) : s = u;
            return -1 !== s && o.push(i.slice(s)), t.slice(0, t.length - n.length) + o.join("");
        }
    }
    function f(e, t) {
        return a(e, t) || (-1 !== e.indexOf(":") ? e : a("./" + e, t));
    }
    function l(e, t, n, r, i) {
        for(var o in e){
            var s = a(o, n) || o, u = e[o];
            if ("string" == typeof u) {
                var c = d(r, a(u, n) || u, i);
                c ? t[s] = c : p("W1", o, u);
            }
        }
    }
    function h(e, t) {
        if (t[e]) return e;
        var n = e.length;
        do {
            var r = e.slice(0, n + 1);
            if (r in t) return r;
        }while (-1 !== (n = e.lastIndexOf("/", n - 1)));
    }
    function v(e, t) {
        var n = h(e, t);
        if (n) {
            var r = t[n];
            if (null === r) return;
            if (!(e.length > n.length && "/" !== r[r.length - 1])) return r + e.slice(n.length);
            p("W2", n, r);
        }
    }
    function p(t, n, r, i) {
        console.warn(e(t, [
            r,
            n
        ].join(", ")));
    }
    function d(e, t, n) {
        for(var r = e.scopes, i = n && h(n, r); i;){
            var o = v(t, r[i]);
            if (o) return o;
            i = h(i.slice(0, i.lastIndexOf("/")), r);
        }
        return v(t, e.imports) || -1 !== t.indexOf(":") && t;
    }
    var m = n1 && Symbol.toStringTag, g = n1 ? Symbol() : "@";
    function y() {
        this[g] = {};
    }
    var S, w = y.prototype;
    function b(t, n, r) {
        var i = t[g][n];
        if (i) return i;
        var o = [], s = Object.create(null);
        m && Object.defineProperty(s, m, {
            value: "Module"
        });
        var u = Promise.resolve().then(function() {
            return t.instantiate(n, r);
        }).then(function(r) {
            if (!r) throw Error(e(2, n));
            var u = r[1](function(e, t) {
                i.h = !0;
                var _$n = !1;
                if ("string" == typeof e) e in s && s[e] === t || (s[e] = t, _$n = !0);
                else {
                    for(var _$r in e)t = e[_$r], _$r in s && s[_$r] === t || (s[_$r] = t, _$n = !0);
                    e.__esModule && (s.__esModule = e.__esModule);
                }
                if (_$n) for(var u = 0; u < o.length; u++){
                    var c = o[u];
                    c && c(s);
                }
                return t;
            }, 2 === r[1].length ? {
                import: function _import(e) {
                    return t.import(e, n);
                },
                meta: t.createContext(n)
            } : void 0);
            return i.e = u.execute || function() {}, [
                r[0],
                u.setters || []
            ];
        }, function(e) {
            throw i.e = null, i.er = e, e;
        }), c = u.then(function(e) {
            return Promise.all(e[0].map(function(r, i) {
                var o = e[1][i];
                return Promise.resolve(t.resolve(r, n)).then(function(e) {
                    var _$r = b(t, e, n);
                    return Promise.resolve(_$r.I).then(function() {
                        return o && (_$r.i.push(o), !_$r.h && _$r.I || o(_$r.n)), _$r;
                    });
                });
            })).then(function(e) {
                i.d = e;
            });
        });
        return i = t[g][n] = {
            id: n,
            i: o,
            n: s,
            I: u,
            L: c,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0
        };
    }
    function E(e, t, n, r) {
        if (!r[t.id]) return r[t.id] = !0, Promise.resolve(t.L).then(function() {
            return t.p && null !== t.p.e || (t.p = n), Promise.all(t.d.map(function(t) {
                return E(e, t, n, r);
            }));
        }).catch(function(e) {
            if (t.er) throw e;
            throw t.e = null, e;
        });
    }
    w.import = function(e, t) {
        var n = this;
        return Promise.resolve(n.prepareImport()).then(function() {
            return n.resolve(e, t);
        }).then(function(e) {
            var t = b(n, e);
            return t.C || (t.C = E(n, t, t, {}).then(function() {
                return j(n, t, {});
            }).then(function() {
                return t.n;
            }));
        });
    }, w.createContext = function(e) {
        var t = this;
        return {
            url: e,
            resolve: function resolve(n, r) {
                return Promise.resolve(t.resolve(n, r || e));
            }
        };
    }, w.register = function(e, t) {
        S = [
            e,
            t
        ];
    }, w.getRegister = function() {
        var e = S;
        return S = void 0, e;
    };
    var O = Object.freeze(Object.create(null)), x = Promise.prototype.finally || function(e) {
        if ("function" != typeof e) return this.then(e, e);
        var t = this.constructor || Promise;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n;
            });
        }, function(n) {
            return t.resolve(e()).then(function() {
                throw n;
            });
        });
    };
    function j(e, t, n) {
        if (n[t.id]) return t.E;
        if (n[t.id] = !0, !t.e) {
            if (t.er) throw t.er;
            return t.E ? t.E : void 0;
        }
        var i, r = t.e;
        if (t.e = null, t.d.forEach(function(r) {
            try {
                var o = j(e, r, n);
                o && (i = i || []).push(o);
            } catch (e) {
                throw t.er = e, e;
            }
        }), i) return t.E = x.call(Promise.all(i).then(s), function() {
            t.E = null;
        });
        var o = s();
        if (o) return t.E = x.call(o, function() {
            t.E = null;
        });
        function s() {
            try {
                var _$e = r.call(O);
                if (_$e) return _$e = _$e.then(function() {
                    t.C = t.n;
                }, function(e) {
                    throw t.er = e, e;
                });
                t.C = t.n, t.L = t.I = void 0;
            } catch (e) {
                throw t.er = e, e;
            }
        }
    }
    o1.System = new y;
    var P = "u" > typeof $global ? $global : "function" == typeof getApp ? getApp().GameGlobal : void 0;
    (void 0 !== P ? P.System : System).constructor.prototype.instantiate = function(e, t) {
        throw Error("Unable to instantiate ".concat(e, " from ").concat(t));
    };
    var R = "u" > typeof Symbol && Symbol.toStringTag;
    w.get = function(e) {
        var t = this[g][e];
        if (t && null === t.e && !t.E) return t.er ? null : t.n;
    }, w.set = function(e, t) {
        R && "Module" === t[R] ? n = t : (n = Object.assign(Object.create(null), t), R && Object.defineProperty(n, R, {
            value: "Module"
        }));
        var n, r = Promise.resolve(n), i = this[g][e] || (this[g][e] = {
            id: e,
            i: [],
            h: !1,
            d: [],
            e: null,
            er: void 0,
            E: void 0
        });
        return !i.e && !i.E && (Object.assign(i, {
            n: n,
            I: void 0,
            L: void 0,
            C: r
        }), n);
    }, w.has = function(e) {
        return !!this[g][e];
    }, w.delete = function(e) {
        var t = this[g], n = t[e];
        if (!n || n.p && null !== n.p.e || n.E) return !1;
        var r = n.i;
        return n.d && n.d.forEach(function(e) {
            var t = e.i.indexOf(n);
            -1 !== t && e.i.splice(t, 1);
        }), delete t[e], function() {
            var n = t[e];
            if (!n || !r || null !== n.e || n.E) return !1;
            r.forEach(function(e) {
                n.i.push(e), e(n.n);
            }), r = null;
        };
    };
    var M = "u" > typeof Symbol && Symbol.iterator;
    w.entries = function() {
        var e, t, n = this, r = Object.keys(n[g]), i = 0, o = {
            next: function next() {
                for(; void 0 !== (t = r[i++]) && void 0 === (e = n.get(t)););
                return {
                    done: void 0 === t,
                    value: void 0 !== t && [
                        t,
                        e
                    ]
                };
            }
        };
        return o[M] = function() {
            return this;
        }, o;
    };
    var C, L, A = Promise.resolve(), I = {
        imports: {},
        scopes: {},
        depcache: {},
        integrity: {}
    }, W = i1;
    function T() {
        [].forEach.call(document.querySelectorAll("script"), function(n) {
            if (!n.sp) {
                if ("systemjs-module" === n.type) {
                    if (n.sp = !0, !n.src) return;
                    System.import("import:" === n.src.slice(0, 7) ? n.src.slice(7) : f(n.src, t1)).catch(function(e) {
                        if (e.message.indexOf("https://git.io/JvFET#3") > -1) {
                            var t = document.createEvent("Event");
                            t.initEvent("error", !1, !1), n.dispatchEvent(t);
                        }
                        return Promise.reject(e);
                    });
                } else if ("systemjs-importmap" === n.type) {
                    n.sp = !0;
                    var r = n.src ? fetch(n.src, {
                        integrity: n.integrity
                    }).then(function(e) {
                        if (!e.ok) throw Error(e.status);
                        return e.text();
                    }).catch(function(t) {
                        return t.message = e("W4", n.src) + "\n" + t.message, console.warn(t), "{}";
                    }) : n.innerHTML;
                    A = A.then(function() {
                        return r;
                    }).then(function(r) {
                        !function(t, n, r) {
                            var _$r, i = {};
                            try {
                                i = JSON.parse(n);
                            } catch (t) {
                                console.warn(Error(e("W5")));
                            }
                            var e1 = i;
                            for(_$r in e1.imports && l(e1.imports, t.imports, r, t, null), e1.scopes || {}){
                                var i1 = f(_$r, r);
                                l(e1.scopes[_$r], t.scopes[i1] || (t.scopes[i1] = {}), r, t, i1);
                            }
                            for(_$r in e1.depcache || {})t.depcache[f(_$r, r)] = e1.depcache[_$r];
                            for(_$r in e1.integrity || {})t.integrity[f(_$r, r)] = e1.integrity[_$r];
                        }(I, r, n.src || t1);
                    });
                }
            }
        });
    }
    if (w.prepareImport = function(e) {
        return (W || e) && (T(), W = !1), A;
    }, i1 && (T(), window.addEventListener("DOMContentLoaded", T)), i1) {
        window.addEventListener("error", function(e) {
            J = e.filename, _ = e.error;
        });
        var $ = location.origin;
    }
    w.createScript = function(e) {
        var t = document.createElement("script");
        t.async = !0, e.indexOf($ + "/") && (t.crossOrigin = "anonymous");
        var n = I.integrity[e];
        return n && (t.integrity = n), t.src = e, t;
    };
    var J, _, N = {}, F = w.register;
    w.register = function(e, t) {
        if (i1 && "loading" === document.readyState && "string" != typeof e) {
            var n = document.querySelectorAll("script[src]"), r = n[n.length - 1];
            if (r) {
                r.src, C = e;
                var o = this;
                L = setTimeout(function() {
                    N[r.src] = [
                        e,
                        t
                    ], o.import(r.src);
                });
            }
        } else C = void 0;
        return F.call(this, e, t);
    }, w.instantiate = function(t, n) {
        var r = N[t];
        if (r) return delete N[t], r;
        var i = this;
        return new Promise(function(r, o) {
            var s = w.createScript(t);
            s.addEventListener("error", function() {
                o(Error(e(3, [
                    t,
                    n
                ].join(", "))));
            }), s.addEventListener("load", function() {
                if (document.head.removeChild(s), J === t) o(_);
                else {
                    var e = i.getRegister();
                    e && e[0] === C && clearTimeout(L), r(e);
                }
            }), document.head.appendChild(s);
        });
    }, w.shouldFetch = function() {
        return !1;
    }, "u" > typeof fetch && (w.fetch = fetch);
    var k = w.instantiate, B = /^(text|application)\/(x-)?javascript(;|$)/;
    w.instantiate = function(t, n) {
        var r = this;
        return this.shouldFetch(t) ? this.fetch(t, {
            credentials: "same-origin",
            integrity: I.integrity[t]
        }).then(function(i) {
            if (!i.ok) throw Error(e(7, [
                i.status,
                i.statusText,
                t,
                n
            ].join(", ")));
            var o = i.headers.get("content-type");
            if (!o || !B.test(o)) throw Error(e(4, o));
            return i.text().then(function(e) {
                return 0 > e.indexOf("//# sourceURL=") && (e += "\n//# sourceURL=" + t), (0, eval)(e), r.getRegister();
            });
        }) : k.apply(this, arguments);
    }, w.resolve = function(n, r) {
        return d(I, a(n, r = r || t1) || n, r) || function(t, n) {
            throw Error(e(8, [
                t,
                n
            ].join(", ")));
        }(n, r);
    };
    var q = w.instantiate;
    w.instantiate = function(e, t) {
        var n = I.depcache[e];
        if (n) for(var r = 0; r < n.length; r++)b(this, this.resolve(n[r], e), e);
        return q.call(this, e, t);
    }, r1 && "function" == typeof importScripts && (w.instantiate = function(e) {
        var t = this;
        return Promise.resolve().then(function() {
            return importScripts(e), t.getRegister();
        });
    }), function(e) {
        var t, n, r, i = e.System.constructor.prototype, o = i.import;
        i.import = function(i, s) {
            return function() {
                for(var _$i in t = n = void 0, e)a(_$i) || (t ? n || (n = _$i) : t = _$i, r = _$i);
            }(), o.call(this, i, s);
        };
        var s = [
            [],
            function() {
                return {};
            }
        ], u = i.getRegister;
        i.getRegister = function() {
            var i = u.call(this);
            if (i) return i;
            var o, c = function(i) {
                var o, s, u = 0;
                for(var c in e)if (!a(c)) {
                    if (0 === u && c !== t || 1 === u && c !== n) return c;
                    o ? (r = c, s = i && s || c) : o = c === r, u++;
                }
                return s;
            }(this.firstGlobalProp);
            if (!c) return s;
            try {
                o = e[c];
            } catch (e) {
                return s;
            }
            return [
                [],
                function(e) {
                    return {
                        execute: function execute() {
                            e(o), e({
                                default: o,
                                __useDefault: !0
                            });
                        }
                    };
                }
            ];
        };
        var c = "u" > typeof navigator && -1 !== navigator.userAgent.indexOf("Trident");
        function a(t) {
            return !e.hasOwnProperty(t) || !isNaN(t) && t < e.length || c && e[t] && "u" > typeof window && e[t].parent === window;
        }
    }("u" > typeof self ? self : global), t = (e1 = "u" > typeof self ? self : global).System.constructor.prototype, n = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/, t.shouldFetch = function(e) {
        return n.test(e);
    }, r = /^application\/json(;|$)/, i = /^text\/css(;|$)/, o = /^application\/wasm(;|$)/, s = t.fetch, t.fetch = function(t, n) {
        return s(t, n).then(function(n) {
            if (!n.ok) return n;
            var s = n.headers.get("content-type");
            return r.test(s) ? n.json().then(function(e) {
                return new Response(new Blob([
                    'System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(e) + ")}}})"
                ], {
                    type: "application/javascript"
                }));
            }) : i.test(s) ? n.text().then(function(e) {
                return new Response(new Blob([
                    "System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(" + JSON.stringify(e) + ');e("default",s)}}})'
                ], {
                    type: "application/javascript"
                }));
            }) : o.test(s) ? (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(n) : n.arrayBuffer().then(WebAssembly.compile)).then(function(n) {
                e1.System.wasmModules || (e1.System.wasmModules = Object.create(null)), e1.System.wasmModules[t] = n;
                var r = [], i = [];
                return WebAssembly.Module.imports && WebAssembly.Module.imports(n).forEach(function(e) {
                    var _$t = JSON.stringify(e.module);
                    -1 === r.indexOf(_$t) && (r.push(_$t), i.push("function(m){i[" + _$t + "]=m}"));
                }), new Response(new Blob([
                    "System.register([" + r.join(",") + "],function(e){var i={};return{setters:[" + i.join(",") + "],execute:function(){return WebAssembly.instantiate(System.wasmModules[" + JSON.stringify(t) + "],i).then(function(m){e(m.exports)})}}})"
                ], {
                    type: "application/javascript"
                }));
            }) : n;
        });
    }, function(e) {
        var t = e.System;
        s(t);
        var n, r = t.constructor.prototype, i = t.constructor, o = function o() {
            i.call(this), s(this);
        };
        function s(e) {
            e.registerRegistry = Object.create(null);
        }
        o.prototype = r, t.constructor = o;
        var u = r.register;
        r.register = function(e, t, r) {
            if ("string" != typeof e) return u.apply(this, arguments);
            var i = [
                t,
                r
            ];
            return this.registerRegistry[e] = i, n || (n = i, Promise.resolve().then(function() {
                n = null;
            })), u.apply(this, arguments);
        };
        var c = r.resolve;
        r.resolve = function(e, t) {
            try {
                return c.call(this, e, t);
            } catch (t) {
                if (e in this.registerRegistry) return e;
                throw t;
            }
        };
        var a = r.instantiate;
        r.instantiate = function(e, t) {
            var n = this.registerRegistry[e];
            return n ? (this.registerRegistry[e] = null, n) : a.call(this, e, t);
        };
        var f = r.getRegister;
        r.getRegister = function() {
            var _$e = f.call(this), t = n || _$e;
            return n = null, t;
        };
    }("u" > typeof self ? self : global);
}();
