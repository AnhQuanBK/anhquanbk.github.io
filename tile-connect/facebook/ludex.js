import {
  ResponseLeaderboard_default
} from "./chunks-5TZK7ZDK.js";
import {
  CoreEvents_default
} from "./chunks-NFEF52WB.js";
import {
  __commonJS,
  __decorateClass,
  __export,
  __objRest,
  __pow,
  __spreadProps,
  __spreadValues,
  __toESM,
  accessBlocker_default,
  define_GAME_CONFIG_default,
  empty_script_default,
  init_GameSDK,
  init_accessBlocker,
  init_define_GAME_CONFIG,
  init_define_GAME_SDK_CONFIG,
  init_empty_script,
  init_google_analytics,
  init_init_core,
  init_performance,
  init_resize_observer,
  init_track_errors,
  init_track_events
} from "./chunks-KSWD6GXM.js";

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK();
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events8() {
    }
    if (Object.create) {
      Events8.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events8().__proto__) prefix = false;
    }
    function EE(fn2, context, once) {
      this.fn = fn2;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn2, context, once) {
      if (typeof fn2 !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn2, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events8();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events8();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names2 = [], events, name2;
      if (this._eventsCount === 0) return names2;
      for (name2 in events = this._events) {
        if (has.call(events, name2)) names2.push(prefix ? name2.slice(1) : name2);
      }
      if (Object.getOwnPropertySymbols) {
        return names2.concat(Object.getOwnPropertySymbols(events));
      }
      return names2;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn2, context) {
      return addListener(this, event, fn2, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn2, context) {
      return addListener(this, event, fn2, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn2, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn2) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn2 && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn2 || once && !listeners[i].once || context && listeners[i].context !==
          context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events8();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// extensions/ludex/src/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/Ludex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/constants/MatchModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/constants/MatchModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchModes = /* @__PURE__ */ ((MatchModes3) => {
  MatchModes3["DRAFT"] = "draft";
  MatchModes3["SINGLE"] = "single";
  MatchModes3["TOURNAMENT"] = "tournament";
  MatchModes3["MATCHING_GROUP"] = "matching-group";
  MatchModes3["CHALLENGE_FRIEND"] = "challenge-friend";
  return MatchModes3;
})(MatchModes || {});
var MatchModes_default = MatchModes;

// extensions/ludex/src/constants/MatchModes.ts
var MatchModes2 = MatchModes_default;
var MatchModes_default2 = MatchModes2;

// extensions/ludex/src/type-guard/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/type-guard/common/asConst.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func = (data) => data;
var asConst_default = func;

// extensions/ludex/src/type-guard/common/noop.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func2 = () => {
};
var noop_default = func2;

// extensions/ludex/src/type-guard/index.ts
var type_guard_default = { asConst: asConst_default, noop: noop_default };

// extensions/ludex/src/utils/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/array/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/array/at.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var at = (arr, idx) => {
  if (!arr) return void 0;
  if (idx < 0) {
    return arr[arr.length + idx];
  }
  return arr[idx];
};
var at_default = at;

// extensions/ludex/src/utils/array/chunk.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/array/length.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/array/fillWith.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func3 = (size, mapFn) => {
  const result3 = [];
  for (let i = 0; i < size; i++) {
    result3.push(mapFn(i));
  }
  return result3;
};
var fillWith_default = func3;

// extensions/ludex/src/utils/array/length.ts
var func4 = (length) => {
  return fillWith_default(length, () => void 0);
};
var length_default = func4;

// extensions/ludex/src/utils/array/chunk.ts
var func5 = (array, size) => {
  const calc = Math.ceil(array.length / size);
  return length_default(calc).map((_v, i) => {
    return array.slice(i * size, i * size + size);
  });
};
var chunk_default = func5;

// extensions/ludex/src/utils/array/difference.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func6 = (source, target) => {
  return source.filter((x) => target.indexOf(x) < 0);
};
var difference_default = func6;

// extensions/ludex/src/utils/array/flatten.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func7 = (array) => {
  return array.reduce((acc, val) => acc.concat(val), []);
};
var flatten_default = func7;

// extensions/ludex/src/utils/array/has.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func8 = (array, target) => {
  return array.indexOf(target) >= 0;
};
var has_default = func8;

// extensions/ludex/src/utils/array/limit.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func9 = (array, limit) => {
  return array.slice(0, limit);
};
var limit_default = func9;

// extensions/ludex/src/utils/array/search.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func10 = (array, predicate) => {
  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return void 0;
};
var search_default = func10;

// extensions/ludex/src/utils/array/searchIndex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func11 = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
};
var searchIndex_default = func11;

// extensions/ludex/src/utils/array/shuffle.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func12 = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
var shuffle_default = func12;

// extensions/ludex/src/utils/array/toShuffled.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func13 = (array) => {
  const copy = [...array];
  shuffle_default(copy);
  return copy;
};
var toShuffled_default = func13;

// extensions/ludex/src/utils/array/unique.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var unique = (value, index, self2) => {
  return self2.indexOf(value) === index && value !== null && value !== void 0;
};
var func14 = (array) => {
  return array.filter(unique);
};
var unique_default = func14;

// extensions/ludex/src/utils/array/index.ts
var array_default = {
  at: at_default,
  chunk: chunk_default,
  difference: difference_default,
  fillWith: fillWith_default,
  length: length_default,
  limit: limit_default,
  search: search_default,
  searchIndex: searchIndex_default,
  has: has_default,
  shuffle: shuffle_default,
  toShuffled: toShuffled_default,
  unique: unique_default,
  flatten: flatten_default
};

// extensions/ludex/src/utils/browser/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/browser/createCanvas.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var isOffscreenCanvasSupported = () => "OffscreenCanvas" in window && typeof OffscreenCanvas !== "un\
defined";
var createOffscreenCanvas = (contextType2, contextAttributes) => {
  const canvas = new OffscreenCanvas(0, 0);
  const context = canvas.getContext(contextType2, contextAttributes);
  if (!context) {
    console.warn(`Failed to get ${contextType2} context from OffscreenCanvas`);
    return null;
  }
  return { canvas, context };
};
var createHTMLCanvas = (contextType2, contextAttributes) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext(contextType2, contextAttributes);
  if (!context) {
    console.warn(`Failed to get ${contextType2} context from HTMLCanvas`);
    return null;
  }
  return { canvas, context };
};
var func15 = (options) => {
  const { contextType: contextType2 = "2d", contextAttributes = {}, type = "auto" } = options;
  let result3 = null;
  if (type !== "canvas" && isOffscreenCanvasSupported()) {
    result3 = createOffscreenCanvas(contextType2, contextAttributes);
  }
  if (!result3 && type !== "offscreen") {
    result3 = createHTMLCanvas(contextType2, contextAttributes);
  }
  return result3;
};
var createCanvas_default = func15;

// extensions/ludex/src/utils/browser/getIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/browser/openIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/valid/isEmpty.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/valid/isFalsy.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func16 = (value) => {
  return !value || value === "" || value === 0 || typeof value === "number" && isNaN(value);
};
var isFalsy_default = func16;

// extensions/ludex/src/utils/valid/isEmpty.ts
var func17 = (value) => {
  if (isFalsy_default(value)) {
    return value !== false && value !== 0;
  }
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  }
  return false;
};
var isEmpty_default = func17;

// extensions/ludex/src/utils/browser/openIndexedDB.ts
var gameName = "Tile Connect";
var dbInstances = {};
var getDBName = (dbName) => {
  if (isEmpty_default(dbName)) {
    return GameSDK.getSDKName() ?? "Storage";
  }
  return dbName ?? "Storage";
};
var openIndexedDB = (dbName) => {
  const fullDBName = `${gameName}_${dbName}`;
  if (dbInstances[fullDBName]) {
    return Promise.resolve(dbInstances[fullDBName]);
  }
  return new Promise((resolve, reject) => {
    let latestVersion = 1;
    let request;
    const tryOpen = (version) => {
      request = indexedDB.open(gameName, version);
      request.onerror = (event) => {
        const error = event.target.error;
        if (error?.name === "VersionError") {
          latestVersion++;
          tryOpen(latestVersion);
        } else {
          reject(error);
        }
      };
      request.onsuccess = (_event) => {
        const db = request.result;
        dbInstances[fullDBName] = db;
        resolve(db);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        latestVersion = db.version;
        if (!db.objectStoreNames.contains(dbName)) {
          db.createObjectStore(dbName);
        }
      };
    };
    tryOpen(latestVersion);
  });
};
var openIndexedDB_default = openIndexedDB;

// extensions/ludex/src/utils/browser/getIndexedDB.ts
var func18 = async (key, dbName) => {
  try {
    const correctDbName = getDBName(dbName);
    const db = await openIndexedDB_default(correctDbName);
    if (!db.objectStoreNames.contains(correctDbName)) return {};
    const transaction = db.transaction(correctDbName, "readonly");
    const store = transaction.objectStore(correctDbName);
    return new Promise((resolve, reject) => {
      const getRequest = store.get(key);
      getRequest.onerror = () => reject(getRequest.error);
      getRequest.onsuccess = () => resolve(getRequest.result);
    });
  } catch (error) {
    console.error(error);
    return {};
  }
};
var getIndexedDB_default = func18;

// extensions/ludex/src/utils/browser/getLocalStorage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/json/decode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func19 = (string) => {
  try {
    return JSON.parse(string);
  } catch (error) {
    return null;
  }
};
var decode_default = func19;

// extensions/ludex/src/utils/browser/getLocalStorage.ts
var func20 = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data === null) return null;
    return decode_default(data);
  } catch (error) {
    return null;
  }
};
var getLocalStorage_default = func20;

// extensions/ludex/src/utils/browser/getLocale.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/json/clone.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/json/encode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func21 = (data) => {
  try {
    return JSON.stringify(data, null, 0);
  } catch (error) {
    return "";
  }
};
var encode_default = func21;

// extensions/ludex/src/utils/json/clone.ts
var func22 = (object) => {
  return decode_default(encode_default(object));
};
var clone_default = func22;

// extensions/ludex/src/utils/browser/getLocale.ts
var func23 = () => {
  const defaultLocale = "en_US";
  const languages = clone_default(window.navigator.languages) || [];
  const locale2 = search_default(languages, (lang) => lang.indexOf("-") > -1);
  if (!locale2) return defaultLocale;
  if (locale2.indexOf("-") === -1) {
    return defaultLocale;
  }
  return locale2.replace("-", "_");
};
var getLocale_default = func23;

// extensions/ludex/src/utils/browser/getQueryParams.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func24 = () => {
  const query = window.location.search.substring(1);
  if (!query) return {};
  const vars = query.split("&");
  const result3 = {};
  for (const element of vars) {
    const pair = element.split("=");
    result3[pair[0]] = decodeURIComponent(pair[1]);
  }
  return result3;
};
var getQueryParams_default = func24;

// extensions/ludex/src/utils/browser/getScreenHeight.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func25 = () => {
  const { body, documentElement } = document;
  const { clientHeight: bodyClientHeight } = body;
  const { clientHeight: docClientHeight } = documentElement;
  return Math.max(docClientHeight, bodyClientHeight) || 0;
};
var getScreenHeight_default = func25;

// extensions/ludex/src/utils/browser/getScreenWidth.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func26 = () => {
  const { body, documentElement } = document;
  const { clientWidth: bodyClientWidth } = body;
  const { clientWidth: docClientWidth } = documentElement;
  return Math.max(docClientWidth, bodyClientWidth) || 0;
};
var getScreenWidth_default = func26;

// extensions/ludex/src/utils/browser/removeKeyLocalStorage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func27 = (key) => {
  localStorage.removeItem(key);
};
var removeKeyLocalStorage_default = func27;

// extensions/ludex/src/utils/browser/setIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func28 = async (key, data, dbName) => {
  try {
    if (isEmpty_default(data)) return;
    const correctDbName = getDBName(dbName);
    const db = await openIndexedDB_default(correctDbName);
    if (!db.objectStoreNames.contains(correctDbName)) return;
    const transaction = db.transaction(correctDbName, "readwrite");
    const store = transaction.objectStore(correctDbName);
    return new Promise((resolve, reject) => {
      try {
        const request = store.put(data, key);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      } catch (error) {
        reject(error);
      }
    });
  } catch (error) {
    console.warn("SetIndexedDB", error);
  }
};
var setIndexedDB_default = func28;

// extensions/ludex/src/utils/browser/vibrate.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var isSupportVibrateApi = () => {
  const hasAPI = "vibrate" in window.navigator;
  if (hasAPI) {
    try {
      window.navigator.vibrate(0);
    } catch (e) {
      return false;
    }
  }
  return hasAPI;
};
var func29 = (value) => {
  try {
    if (!isSupportVibrateApi()) return false;
    window.navigator.vibrate(0);
    window.navigator.vibrate(value);
    return true;
  } catch (error) {
    return false;
  }
};
var vibrate_default = func29;

// extensions/ludex/src/utils/browser/webWorker.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/decorator/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/function/debounce.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func30 = (method, delay, firstCall) => {
  let timer;
  let isCalled = false;
  return function(...args) {
    if (firstCall && !isCalled) {
      isCalled = true;
      method.apply(this, args);
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      method.apply(this, args);
    }, delay);
  };
};
var debounce_default = func30;

// extensions/ludex/src/utils/function/memoize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func31 = (fn2) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return function(...args) {
    const key = `__memoize__${JSON.stringify(args)}`;
    if (key in cache) {
      return cache[key];
    }
    const result3 = fn2.apply(this, args);
    cache[key] = result3;
    return result3;
  };
};
var memoize_default = func31;

// extensions/ludex/src/utils/function/throttle.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func32 = (method, interval, firstCall) => {
  let timer;
  let shouldFire = false;
  let isCalled = false;
  return function(...args) {
    if (firstCall && !isCalled) {
      isCalled = true;
      method.apply(this, args);
      return;
    }
    if (shouldFire) {
      shouldFire = false;
      method.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      shouldFire = true;
    }, interval);
  };
};
var throttle_default = func32;

// extensions/ludex/src/utils/decorator/preStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func33 = (descriptor, startFn) => {
  const method = descriptor.value;
  descriptor.value = async function(...args) {
    await startFn.apply(this, args);
    const result3 = method.apply(this, args);
    if (result3 instanceof Promise) {
      return await result3;
    }
    return result3;
  };
  return descriptor;
};
var preStart_default = func33;

// extensions/ludex/src/utils/decorator/tryCatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/function/toError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func34 = (value) => {
  if (value instanceof Error) {
    return value;
  }
  if (value !== null && typeof value === "object" && "message" in value && typeof value.message === "\
string") {
    const error = new Error(value.message);
    if ("stack" in value && typeof value.stack === "string") {
      error.stack = value.stack;
    }
    if ("name" in value && typeof value.name === "string") {
      error.name = value.name;
    }
    return error;
  }
  if (value !== null && typeof value === "object") {
    try {
      return new Error(JSON.stringify(value, null, 2));
    } catch (e) {
      return new Error(`[Object conversion failed] ${String(value)}`);
    }
  }
  return new Error(String(value));
};
var toError_default = func34;

// extensions/ludex/src/utils/decorator/tryCatch.ts
var func35 = (descriptor, finallyFn) => {
  const method = descriptor.value;
  descriptor.value = async function(...args) {
    let error;
    try {
      const result3 = method.apply(this, args);
      if (result3 instanceof Promise) {
        return await result3;
      }
      return result3;
    } catch (err) {
      error = toError_default(err);
      console.warn("[Decorator:tryCatch]", error.message);
    } finally {
      finallyFn?.(error);
    }
  };
  return descriptor;
};
var tryCatch_default = func35;

// extensions/ludex/src/utils/decorator/validateParams.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/decorator/validateProperty.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/valid/isObject.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func36 = (input) => {
  const isValidObject = typeof input === "object" || typeof input === "function";
  const isArray = Array.isArray(input);
  return input !== null && isValidObject && !isArray;
};
var isObject_default = func36;

// extensions/ludex/src/utils/decorator/validateProperty.ts
var checkType = (target, type) => {
  if (typeof target !== type) {
    throw new Error(`Value ${target} is not type of ${type} (${typeof target})`);
  }
};
var func37 = (target, type, propertyKey) => {
  let value;
  if (!propertyKey) {
    checkType(target, type);
  }
  if (!isObject_default(target) || !propertyKey) {
    return target;
  }
  return Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue) {
      checkType(newValue, type);
      value = newValue;
    }
  });
};
var validateProperty_default = func37;

// extensions/ludex/src/utils/decorator/validateParams.ts
var func38 = (descriptor, types) => {
  const method = descriptor.value;
  descriptor.value = function(...args) {
    types.forEach((type, index) => {
      try {
        validateProperty_default(args[index], type);
      } catch (error) {
        const message = "[Decorator:validateParams]";
        if (error instanceof Error) {
          error.message = `${message}: ${error.message}`;
          throw error;
        }
        throw new Error(`${message}: ${error}`);
      }
    });
    return method.apply(this, args);
  };
  return descriptor;
};
var validateParams_default = func38;

// extensions/ludex/src/utils/decorator/validateReturn.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var isInvalidReturnType = (result3, types) => {
  for (const type of types) {
    try {
      validateProperty_default(result3, type);
      return false;
    } catch (error) {
    }
  }
  return true;
};
var func39 = (descriptor, types) => {
  const method = descriptor.value;
  descriptor.value = function(...args) {
    const result3 = method.apply(this, args);
    if (isInvalidReturnType(result3, types)) {
      throw new Error(
        `[Decorator:validateReturn] ${result3} (${typeof result3}) is not type of ${types.join(" | ")}`
      );
    }
    return result3;
  };
  return descriptor;
};
var validateReturn_default = func39;

// extensions/ludex/src/utils/decorator/index.ts
var DecoratorUtils = class _DecoratorUtils {
  static isProperty(name2, propertyKey, descriptor) {
    if (descriptor) {
      if (typeof descriptor.value !== "undefined") {
        return true;
      }
      if (descriptor.get || descriptor.set) {
        return true;
      }
    }
    console.warn(`[Decorator:${name2}] Unsupported decorator ${propertyKey}`, descriptor);
    return false;
  }
  static isFunction(name2, propertyKey, descriptor) {
    if (descriptor) {
      if (typeof descriptor.value === "function") {
        return true;
      }
      if (typeof descriptor.initializer === "function") {
        return true;
      }
    }
    console.warn(`[Decorator:${name2}] Unsupported decorator ${propertyKey}`, descriptor);
    return false;
  }
  static trace = (target, propertyKey, descriptor) => {
    try {
      const { value, initializer, get: get2, set } = descriptor ?? {};
      try {
        if (get2 || set) {
          console.warn("[Decorator:trace:accessor]", {
            getter: get2,
            setter: set
          });
        } else if (typeof value === "function") {
          console.warn("[Decorator:trace:method]", {
            method: value,
            params: value.length
          });
        } else if (typeof initializer === "function") {
          const initialValue = initializer?.();
          if (typeof initialValue === "function") {
            console.warn("[Decorator:trace:arrow]", {
              initializer,
              initialValue
            });
          } else if (typeof initialValue !== "undefined") {
            console.warn("[Decorator:trace:property]", {
              initializer,
              initialValue
            });
          } else {
            throw new Error("Initializer returned undefined");
          }
        } else if (value) {
          const type = typeof value;
          console.warn("[Decorator:trace:field]", {
            type,
            value
          });
        } else {
          throw new Error("Unsupported decorator");
        }
      } catch (error) {
        console.warn("[Decorator:trace:unknown]", {
          propertyKey,
          descriptor,
          reason: error instanceof Error ? error.message : error
        });
      }
    } catch (error) {
      console.error("[Decorator:trace] Fatal error:", error);
    } finally {
      console.debug("[Decorator:trace:info]", {
        target,
        propertyKey,
        value: descriptor?.value,
        type: typeof descriptor?.value,
        instanceProps: Object.getOwnPropertyNames(target)
      });
    }
    return descriptor;
  };
  static locked(_target, _propertyKey, descriptor) {
    return __spreadProps(__spreadValues({}, descriptor), {
      value: () => {
        throw new Error("Method is locked");
      }
    });
  }
  static preStart(startFn) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("preStart", propertyKey, descriptor)) {
        return descriptor;
      }
      return preStart_default(descriptor, startFn);
    };
  }
  static tryCatch(finallyFn) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("tryCatch", propertyKey, descriptor)) {
        return descriptor;
      }
      return tryCatch_default(descriptor, finallyFn);
    };
  }
  static debounce(wait) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("debounce", propertyKey, descriptor)) {
        return descriptor;
      }
      let fn2 = descriptor.value;
      if (fn2) {
        descriptor.value = debounce_default(fn2, wait);
      } else if (descriptor.initializer) {
        fn2 = descriptor.initializer;
        descriptor.initializer = function() {
          return debounce_default(fn2.call(this), wait);
        };
      }
      return descriptor;
    };
  }
  static throttle(wait) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("throttle", propertyKey, descriptor)) {
        return descriptor;
      }
      let fn2 = descriptor.value;
      if (fn2) {
        descriptor.value = throttle_default(fn2, wait);
      } else if (descriptor.initializer) {
        fn2 = descriptor.initializer;
        descriptor.initializer = function() {
          return throttle_default(fn2.call(this), wait, true);
        };
      }
      return descriptor;
    };
  }
  static memoize(_target, propertyKey, descriptor) {
    if (!_DecoratorUtils.isFunction("memoize", propertyKey, descriptor)) {
      return descriptor;
    }
    let fn2 = descriptor.value;
    if (fn2) {
      descriptor.value = memoize_default(fn2);
    } else if (descriptor.initializer) {
      fn2 = descriptor.initializer;
      descriptor.initializer = function() {
        return memoize_default(fn2.call(this));
      };
    }
    return descriptor;
  }
  static validateValue(type) {
    return (target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isProperty("validateValue", propertyKey, descriptor)) {
        return descriptor;
      }
      try {
        return validateProperty_default(target, type, propertyKey);
      } catch (error) {
        if (error instanceof Error) {
          console.warn(`[Decorator:validateValue] ${error.message}`);
        } else {
          console.warn("[Decorator:validateValue] unknown error", { cause: error });
        }
        return descriptor;
      }
    };
  }
  static validateReturn = (...types) => {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("validateReturn", propertyKey, descriptor)) {
        return descriptor;
      }
      return validateReturn_default(descriptor, types);
    };
  };
  static validateParams = (...types) => {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction("validateParams", propertyKey, descriptor)) {
        return descriptor;
      }
      return validateParams_default(descriptor, types);
    };
  };
};
var decorator_default = DecoratorUtils;

// extensions/ludex/src/utils/browser/webWorker.ts
var workerCode = () => {
  self.onmessage = (event) => {
    const { action, payload } = event.data;
    switch (action) {
      case "drawImage":
        drawImage(payload);
        break;
      case "saveData":
        saveData(payload);
        break;
      case "getData":
        getData(payload);
        break;
      default:
        console.error("Unknown action:", action);
    }
  };
  function drawImage(data) {
    console.log("Drawing image with data:", data);
  }
  function saveData(data) {
    console.log("Saving data:", data);
  }
  function getData(data) {
    console.log("Getting data:", data);
  }
};
var _WebWorker = class _WebWorker {
  worker = null;
  static _instance;
  constructor() {
    this.init();
  }
  static get inst() {
    if (!this._instance) {
      this._instance = new _WebWorker();
    }
    return this._instance;
  }
  init() {
    const blob = new Blob([`(${workerCode.toString()})()`], { type: "application/javascript" });
    this.worker = new Worker(URL.createObjectURL(blob));
  }
  static postMessage(action, payload) {
    if (!this.inst.worker) {
      throw new Error("Worker is not initialized");
    }
    this.inst.worker.postMessage({ action, payload });
  }
};
__decorateClass([
  decorator_default.tryCatch()
], _WebWorker.prototype, "init", 1);
__decorateClass([
  decorator_default.tryCatch()
], _WebWorker, "postMessage", 1);
var WebWorker = _WebWorker;
var webWorker_default = WebWorker;

// extensions/ludex/src/utils/browser/writeLocalStorage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/object/clear.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var isNotClear = (value) => value === void 0 || value === null;
var func40 = (object) => {
  if (!isObject_default(object)) return object;
  for (const key in object) {
    if (isNotClear(object[key])) {
      delete object[key];
    } else {
      const value = object[key];
      if (isObject_default(value)) {
        object[key] = func40(value);
      }
    }
  }
  return object;
};
var clear_default = func40;

// extensions/ludex/src/utils/object/clone.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/object/assign.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var o = Object;
var func41 = (target, data) => {
  if ("assign" in o) {
    return o.assign(target, data);
  }
  const obj = target;
  for (const key in data) {
    obj[key] = data[key];
  }
  return obj;
};
var assign_default = func41;

// extensions/ludex/src/utils/object/clone.ts
var func42 = (data) => {
  if (typeof data !== "object" || data === null) return null;
  return assign_default(data, {});
};
var clone_default2 = func42;

// extensions/ludex/src/utils/object/merge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func43 = (source, target) => {
  for (const key in target) {
    if (isObject_default(source[key]) && isObject_default(target[key])) {
      func43(source[key], target[key]);
    } else {
      assign_default(source, { [key]: target[key] });
    }
  }
  return source;
};
var merge_default = func43;

// extensions/ludex/src/utils/browser/writeLocalStorage.ts
var func44 = (key, data) => {
  try {
    const currentData = getLocalStorage_default(key);
    let correctData = {};
    if (isObject_default(currentData)) {
      correctData = currentData;
    }
    const cloneData = clone_default2(data);
    if (!isObject_default(cloneData)) return false;
    const cleanData = clear_default(cloneData);
    const newData = merge_default(correctData, cleanData);
    const dataEncoded = encode_default(newData);
    localStorage.setItem(key, dataEncoded);
    return true;
  } catch (error) {
    return false;
  }
};
var writeLocalStorage_default = func44;

// extensions/ludex/src/utils/browser/index.ts
var browser_default = {
  createCanvas: createCanvas_default,
  getLocale: getLocale_default,
  getLocalStorage: getLocalStorage_default,
  getQueryParams: getQueryParams_default,
  getScreenHeight: getScreenHeight_default,
  getScreenWidth: getScreenWidth_default,
  writeLocalStorage: writeLocalStorage_default,
  vibrate: vibrate_default,
  getIndexedDB: getIndexedDB_default,
  WebWorker: webWorker_default,
  setIndexedDB: setIndexedDB_default,
  removeKeyLocalStorage: removeKeyLocalStorage_default
};

// extensions/ludex/src/utils/device/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/device/getPhysicPixels.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/device/pixelRatio.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func45 = () => {
  return Math.round(window.devicePixelRatio) ?? 1;
};
var pixelRatio_default = func45;

// extensions/ludex/src/utils/device/getPhysicPixels.ts
var func46 = (value) => {
  return value * pixelRatio_default();
};
var getPhysicPixels_default = func46;

// extensions/ludex/src/utils/device/isAndroid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func47 = () => {
  return /Android/i.test(navigator.userAgent);
};
var isAndroid_default = func47;

// extensions/ludex/src/utils/device/isDesktop.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func48 = () => {
  return !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
var isDesktop_default = func48;

// extensions/ludex/src/utils/device/isIOS.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func49 = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};
var isIOS_default = func49;

// extensions/ludex/src/utils/device/isMobile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func50 = () => {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
var isMobile_default = func50;

// extensions/ludex/src/utils/device/index.ts
var device_default = { getPhysicPixels: getPhysicPixels_default, isDesktop: isDesktop_default, isMobile: isMobile_default,
isAndroid: isAndroid_default, isIOS: isIOS_default, pixelRatio: pixelRatio_default };

// extensions/ludex/src/utils/function/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
init_accessBlocker();

// extensions/ludex/src/utils/function/allSettled.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func51 = (promises) => {
  const wrappedPromises = promises.map(
    (p) => Promise.resolve(p).then(
      (value) => ({ status: "fulfilled", value }),
      (reason) => ({ status: "rejected", reason })
    )
  );
  return Promise.all(wrappedPromises);
};
var allSettled_default = func51;

// extensions/ludex/src/utils/function/any.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func52 = (promises) => {
  if (typeof Promise.any === "function") {
    return Promise.any(promises);
  }
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    const check = (idx) => {
      if (idx < promises.length) return;
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        const error = new Error("All promises were rejected");
        error.errors = results;
        reject(error);
      }
    };
    promises.forEach((promise, index) => {
      promise.then((value) => {
        results[index] = value;
        resolved++;
        check(resolved);
      }).catch((error) => {
        results[index] = error;
        resolved++;
        check(resolved);
      });
    });
  });
};
var any_default = func52;

// extensions/ludex/src/utils/function/handleAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func53 = async (promise) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    const err = toError_default(error);
    return [null, err];
  }
};
var handleAsync_default = func53;

// extensions/ludex/src/utils/function/retry.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func54 = (firstTry, secondTry) => {
  try {
    return firstTry();
  } catch (firstError) {
    try {
      return secondTry();
    } catch (secondError) {
      throw firstError;
    }
  }
};
var retry_default = func54;

// extensions/ludex/src/utils/function/retryAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func55 = async (firstTry, secondTry) => {
  try {
    return await firstTry();
  } catch (firstError) {
    try {
      return await secondTry();
    } catch (secondError) {
      throw firstError;
    }
  }
};
var retryAsync_default = func55;

// extensions/ludex/src/utils/function/rng.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func56 = (config) => {
  const { generate, generateSeed = () => Math.random() * 1e6, seed: startingSeed = Date.now() } = config;
  let seed = startingSeed;
  return (...args) => {
    seed = generateSeed(seed);
    return generate(seed, ...args);
  };
};
var rng_default = func56;

// extensions/ludex/src/utils/function/syncVarsFromSource.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var makeMutableTrick = (target, value) => {
  target.__proto__.valueOf = () => value;
  target.__proto__.toString = () => `${value}`;
};
var makeTypeTrick = (target) => {
  return target.constructor(__spreadProps(__spreadValues({}, target), {
    // @ts-expect-error - this is a trick
    __proto__: target.__proto__
  }));
};
var func57 = (source) => {
  const keys = Object.keys(source);
  for (const key of keys) {
    const origin = Object.getOwnPropertyDescriptor(source, key)?.value;
    if (isObject_default(origin)) {
      func57(origin);
      continue;
    }
    try {
      const draft = origin;
      makeMutableTrick(draft, origin);
      Object.defineProperty(source, key, {
        enumerable: false,
        configurable: true,
        get() {
          return makeTypeTrick(draft);
        },
        set(value) {
          assign_default(draft, value);
          makeMutableTrick(draft, value);
        }
      });
    } catch (error) {
    }
  }
};
var syncVarsFromSource_default = func57;

// extensions/ludex/src/utils/function/index.ts
var function_default = {
  debounce: debounce_default,
  throttle: throttle_default,
  syncVars: syncVarsFromSource_default,
  memoize: memoize_default,
  retry: retry_default,
  retryAsync: retryAsync_default,
  allSettled: allSettled_default,
  any: any_default,
  accessBlocker: accessBlocker_default,
  rng: rng_default,
  handleAsync: handleAsync_default,
  toError: toError_default
};

// extensions/ludex/src/utils/hash/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/hash/decodeMap.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/object/invert.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func58 = (data) => {
  const inverse = {};
  for (const key in data) {
    const value = data[key];
    inverse[value] = key;
  }
  return inverse;
};
var invert_default = func58;

// extensions/ludex/src/utils/hash/decodeMap.ts
var getValue = memoize_default((code, valueMap) => {
  const codeKey = code.toLowerCase();
  if (typeof code === "string") {
    const data = valueMap[codeKey];
    if (typeof data === "string") return data;
  }
  return "?";
});
var findGroups = memoize_default((str) => {
  const groups = [];
  const findGroup = /:([A-Z0-9?]+)/gm;
  let group = null;
  while (true) {
    group = findGroup.exec(str);
    if (group === null) break;
    groups.push(group[1]);
  }
  return groups;
});
var findHash = memoize_default((str) => {
  const hash = [];
  const findHash2 = /(\d+[A-Z?]|[A-Z?])/gm;
  let codes = null;
  while (true) {
    codes = findHash2.exec(str);
    if (codes === null) break;
    const code = codes[0];
    if (code.length >= 2) {
      const { length } = code;
      const loop = code.slice(0, length - 1);
      const key = code[length - 1];
      const list = length_default(+loop).map(() => key);
      hash.push(...list);
      continue;
    }
    hash.push(code);
  }
  return hash;
});
var func59 = (hash, codeMap) => {
  const str = hash;
  const valueMap = invert_default(codeMap);
  const data = {};
  let codeIndex = 0;
  let groupIndex = 0;
  const groups = findGroups(str);
  for (const hashList of groups) {
    codeIndex = 0;
    groupIndex++;
    if (!data[groupIndex]) data[groupIndex] = {};
    const hash2 = findHash(hashList);
    for (const code of hash2) {
      codeIndex++;
      const value = getValue(code, valueMap);
      data[groupIndex][codeIndex] = value;
    }
  }
  return data;
};
var decodeMap_default = func59;

// extensions/ludex/src/utils/hash/encodeMap.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/object/hasOwn.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func60 = (obj, key) => {
  if (!isObject_default(obj)) return false;
  if (typeof Object.hasOwn === "function") {
    return Object.hasOwn(obj, key);
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var hasOwn_default = func60;

// extensions/ludex/src/utils/valid/isString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func61 = (data) => typeof data === "string";
var isString_default = func61;

// extensions/ludex/src/utils/hash/encodeMap.ts
var getCode = memoize_default((value, codeMap) => {
  if (!isObject_default(codeMap)) return "?";
  if (!hasOwn_default(codeMap, value)) return "?";
  const code = codeMap[value];
  if (typeof code === "string") {
    return `${code.toUpperCase()}`;
  }
  return "?";
});
var func62 = (data, codeMap, isRecursive = false) => {
  let str = "";
  if (!isObject_default(data)) return str;
  let lastCode = "";
  let lastIndex = 1;
  for (const key in data) {
    if (!hasOwn_default(data, key)) continue;
    const value = data[key];
    if (isObject_default(value)) {
      str += `:${func62(value, codeMap, true)}`;
      continue;
    }
    if (!isString_default(value)) continue;
    const code = getCode(value, codeMap);
    if (code === lastCode) {
      lastIndex++;
      str = str.slice(0, -2);
    } else {
      lastIndex = 1;
    }
    str += `${lastIndex}${code}`;
    lastCode = code;
  }
  str = str.replace(/1([A-Z])/g, "$1");
  if (isRecursive) return str;
  return str;
};
var encodeMap_default = func62;

// extensions/ludex/src/utils/hash/hashToString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func63 = (hash, token) => {
  try {
    if (!hash) return "";
    if (token) {
      let hashString = atob(hash);
      const hashToken = btoa(token);
      hashString = hashString.replace(hashToken, "=");
      return atob(hashString);
    }
    return atob(hash);
  } catch (error) {
    console.warn("Error in hashToString", error);
    return "";
  }
};
var hashToString_default = func63;

// extensions/ludex/src/utils/hash/lzwCompress.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var createCompressDict = () => {
  const dict = {};
  return dict;
};
var compressDicts = {};
var getCompressionDict = (level2) => {
  if (!compressDicts[level2]) {
    compressDicts[level2] = createCompressDict();
  }
  return compressDicts[level2];
};
var setCompressionDict = (word, level2) => {
  const compressDict = getCompressionDict(level2);
  const dictSize = Object.keys(compressDict).length;
  compressDict[word] = dictSize + 1;
};
var func64 = (str, customDict, level2 = 1) => {
  let word = str[0];
  const result3 = [];
  let dict = getCompressionDict(level2);
  if (customDict) {
    for (const key in customDict) {
      setCompressionDict(key, level2);
    }
  }
  for (let i2 = 1; i2 < str.length; i2++) {
    const char = str[i2];
    const candidate = `${word}${char}`;
    i2++;
    word = str[i2];
    if (dict[candidate] === void 0) {
      setCompressionDict(candidate, level2);
      dict = getCompressionDict(level2);
    }
  }
  word = str[0];
  let i = 1;
  let wordIdx = 0;
  while (i < str.length) {
    const char = str[i];
    const candidate = `${word}${char}`;
    const potentialCandidate = getLongestAvailableKeyInCompressDict(str.slice(wordIdx), dict);
    if (potentialCandidate !== null) {
      result3.push(dict[potentialCandidate]);
      i += potentialCandidate.length - candidate.length;
      word = "";
      wordIdx = i + 1;
      i++;
      continue;
    }
    if (dict[candidate] === void 0) {
      word = candidate;
    } else {
      result3.push(dict[candidate]);
      word = "";
      wordIdx = i + 1;
    }
    i++;
  }
  console.debug("dict", dict, Object.keys(dict).length);
  return result3;
};
var getLongestAvailableKeyInCompressDict = (substring, dict) => {
  let keys = Object.keys(dict);
  keys = keys.filter((key) => {
    return substring.indexOf(key) > -1 && substring !== key;
  });
  if (keys.length === 0) return null;
  return keys.sort((a, b) => b.length - a.length)[0];
};
var lzwCompress_default = func64;

// extensions/ludex/src/utils/hash/lzwDecompress.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var createDecompressDict = (compressDict) => {
  const dict = {};
  for (const key in compressDict) {
    dict[compressDict[key]] = key;
  }
  return dict;
};
var func65 = (hash, customDict, level2 = 1) => {
  let entry = "";
  let result3 = "";
  let compressDict = getCompressionDict(level2);
  if (customDict) {
    compressDict = __spreadValues(__spreadValues({}, customDict), compressDict);
  }
  console.debug("compressDict", compressDict);
  const dict = createDecompressDict(compressDict);
  for (const i in hash) {
    const code = hash[i];
    if (dict[code] !== void 0) {
      entry = dict[code];
    } else {
      entry = "?";
    }
    result3 += entry;
  }
  return result3;
};
var lzwDecompress_default = func65;

// extensions/ludex/src/utils/hash/stringToHash.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func66 = (str, token) => {
  try {
    if (!str) return "";
    if (token) {
      let hashString = btoa(str);
      const hashToken = btoa(token);
      hashString = hashString.replace("=", hashToken);
      return btoa(hashString);
    }
    return btoa(str);
  } catch (error) {
    console.warn("Error in stringToHash", error);
    return "";
  }
};
var stringToHash_default = func66;

// extensions/ludex/src/utils/hash/index.ts
var hash_default = { decodeMap: decodeMap_default, encodeMap: encodeMap_default, hashToString: hashToString_default,
stringToHash: stringToHash_default, lwzCompress: lzwCompress_default, lwzDecompress: lzwDecompress_default };

// extensions/ludex/src/utils/image/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/image/base64ToFile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var base64ToFile = (base64, filename) => {
  const arr = base64.split(",");
  const regex = arr[0].match(/:(.*?);/);
  if (!regex) return null;
  const mime = regex[1];
  const bstr = atob(arr[arr.length - 1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
var base64ToFile_default = base64ToFile;

// extensions/ludex/src/utils/image/blobToDataImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func67 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
var blobToDataImage_default = func67;

// extensions/ludex/src/utils/image/blobToHtmlImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var img = new Image();
var func68 = (blob, forceNew = true, autoRevoke = true) => {
  return new Promise((resolve) => {
    if (forceNew) img = new Image();
    img.onload = () => {
      resolve(img);
      if (autoRevoke) {
        URL.revokeObjectURL(img.src);
      }
    };
    img.onerror = () => {
      resolve(null);
    };
    img.src = URL.createObjectURL(blob);
  });
};
var blobToHtmlImage_default = func68;

// extensions/ludex/src/utils/image/blobUrlToFile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func69 = async (blobUrl, fileName) => {
  const blob = await fetch(blobUrl).then((r) => r.blob()).catch(() => null);
  if (!blob) return null;
  return new File([blob], fileName);
};
var blobUrlToFile_default = func69;

// extensions/ludex/src/utils/image/elementToBase64.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var result = createCanvas_default({
  contextType: "2d",
  contextAttributes: { willReadFrequently: true }
});
var convertBlobToBase64 = async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
var func70 = async (element, type = "png") => {
  const { width, height } = element;
  if (!width || !height) throw new Error("Element has no width or height");
  if (!result) throw new Error("Failed to create canvas");
  result.canvas.width = width;
  result.canvas.height = height;
  result.context.drawImage(element, 0, 0, width, height);
  if (result.canvas instanceof HTMLCanvasElement) {
    return result.canvas.toDataURL(`image/${type}`, 0.85);
  }
  const blob = await result.canvas.convertToBlob({ type: `image/${type}` });
  return convertBlobToBase64(blob);
};
var elementToBase64_default = func70;

// extensions/ludex/src/utils/image/elementToBlob.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var result2 = createCanvas_default({
  contextType: "2d",
  contextAttributes: { willReadFrequently: true }
});
var func71 = async (element, type = "png") => {
  try {
    if (!result2) {
      throw new Error("Failed to create canvas");
    }
    const { canvas, context } = result2;
    canvas.width = element.width;
    canvas.height = element.height;
    context.drawImage(element, 0, 0, element.width, element.height);
    if (canvas instanceof HTMLCanvasElement) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), `image/${type}`, 0.9);
      });
    }
    return canvas.convertToBlob({
      type: `image/${type}`,
      quality: 0.9
    });
  } catch (error) {
    console.warn("elementToBlob error:", error);
    return null;
  }
};
var elementToBlob_default = func71;

// extensions/ludex/src/utils/image/fetchImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func72 = async (url) => {
  if (!url) throw new Error("url is empty");
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.blob();
  } catch (error) {
    throw error instanceof Error ? error : new Error("Failed to fetch image");
  }
};
var fetchImage_default = func72;

// extensions/ludex/src/utils/image/loadImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func73 = async (url) => {
  return new Promise((resolve, reject) => {
    if (!url) reject(new Error("url is empty"));
    const elementImage = new Image();
    elementImage.crossOrigin = "anonymous";
    elementImage.onload = () => {
      resolve(elementImage);
    };
    elementImage.onerror = (error) => {
      reject(error);
    };
    elementImage.src = url;
  });
};
var loadImage_default = func73;

// extensions/ludex/src/utils/image/logImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var getBox = (width, height) => {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("width and height must be numbers");
  }
  return {
    string: "+",
    style: `font-size: 1px; padding: ${Math.floor(height / 2)}px ${Math.floor(width / 2)}px;`
  };
};
var func74 = (url, scale = 1) => {
  const img2 = new Image();
  img2.onload = function() {
    const self2 = this;
    const width = self2.width * scale;
    const height = self2.height * scale;
    const dim = getBox(width, height);
    console.info(
      `%c ${dim.string}`,
      `${dim.style} background: transparent url(${url}) no-repeat center center; background-size: ${width}\
px ${height}px;`
    );
  };
  img2.src = url;
};
var logImage_default = func74;

// extensions/ludex/src/utils/image/index.ts
var image_default = {
  base64ToFile: base64ToFile_default,
  blobToDataImage: blobToDataImage_default,
  blobToHtmlImage: blobToHtmlImage_default,
  blobUrlToFile: blobUrlToFile_default,
  elementToBase64: elementToBase64_default,
  elementToBlob: elementToBlob_default,
  fetchImage: fetchImage_default,
  loadImage: loadImage_default,
  logImage: logImage_default
};

// extensions/ludex/src/utils/json/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var json_default = { clone: clone_default, decode: decode_default, encode: encode_default };

// extensions/ludex/src/utils/mark/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/mark/Mark.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var Mark = class _Mark {
  perf = null;
  static _inst;
  static get inst() {
    if (!this._inst) {
      this._inst = new _Mark();
    }
    return this._inst;
  }
  static setService(service) {
    this.inst.perf = service ?? null;
  }
  static measure(name2) {
    this.inst.perf?.measure(name2);
  }
  static start(name2) {
    this.inst.perf?.start(name2);
  }
  static stop(name2) {
    try {
      this.inst.perf?.stop(name2);
    } catch (error) {
      console.warn(error);
    }
  }
  static putMetric(name2, key, value = Date.now()) {
    this.inst.perf?.putMetric(name2, key, value);
  }
  static incMetric(name2, key, value = 1) {
    this.inst.perf?.incrementMetric(name2, key, value);
  }
  static putAttr(name2, key, value) {
    const correctValue = value.slice(0, 100);
    this.inst.perf?.putAttr(name2, key, correctValue);
  }
  static rmAttr(name2, key) {
    this.inst.perf?.removeAttr(name2, key);
  }
};
var Mark_default = Mark;

// extensions/ludex/src/utils/mark/index.ts
var mark_default = { Mark: Mark_default };

// extensions/ludex/src/utils/number/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/number/getShortNumber.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func75 = (value, maxLength) => {
  if (typeof value !== "number") {
    return "0";
  }
  const maxNumber = __pow(10, maxLength);
  let shortened = value;
  let numberSuffixCount = 0;
  while (shortened >= maxNumber) {
    shortened = Math.floor(shortened / 1e3);
    numberSuffixCount++;
  }
  const numberPrefix = shortened.toString();
  const SUFFIXES = [
    "",
    "K",
    "M",
    "B",
    "T",
    "Qa",
    "Qi",
    "Sx",
    "Sp",
    "Oc",
    "No",
    "Dc",
    "Ud",
    "Dd",
    "Td",
    "Qad",
    "Qid",
    "Sxd",
    "Spd"
  ];
  const numberSuffix = SUFFIXES[numberSuffixCount];
  return `${numberPrefix}${numberSuffix}`;
};
var getShortNumber_default = func75;

// extensions/ludex/src/utils/number/padEnd.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var padEnd = (value, maxLength, fillChar = "0") => {
  let res = value.toString();
  const valueLength = res.length;
  for (let i = 0; i < maxLength - valueLength; i++) {
    res = res + fillChar;
  }
  return res;
};
var padEnd_default = padEnd;

// extensions/ludex/src/utils/number/padStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var padStart = (value, maxLength, fillChar = "0") => {
  let res = value.toString();
  const valueLength = res.length;
  for (let i = 0; i < maxLength - valueLength; i++) {
    res = fillChar + res;
  }
  return res;
};
var padStart_default = padStart;

// extensions/ludex/src/utils/number/random.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func76 = (length, useNegative) => {
  const negative = useNegative ? Math.random() > 0.5 ? 1 : -1 : 1;
  return Math.floor(Math.random() * length) * negative;
};
var random_default = func76;

// extensions/ludex/src/utils/number/sign.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func77 = (num) => {
  if (num > 0) return 1;
  if (num < 0) return -1;
  if (num === 0) return 0;
  return Number.NaN;
};
var sign_default = func77;

// extensions/ludex/src/utils/number/toAbbreviatedString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var toAbbreviatedString = (value, config) => {
  const {
    fractionalDigits = 0,
    startAbbreviate = 1e3,
    abbreviateStep = 3,
    maxLength = -1,
    removeLastZero = true,
    suffixes = ["", "k", "m", "b", "t", "q"]
  } = config || {};
  const correctMaxLength = maxLength === -1 ? 99999999 : maxLength;
  if (value >= startAbbreviate) {
    const temp = Math.floor(value / __pow(10, abbreviateStep));
    const suffixNum = Math.floor((temp.toString().length - 1) / abbreviateStep) + 1;
    const shortValue = value / __pow(__pow(10, abbreviateStep), suffixNum);
    const fractionalString2 = shortValue.toFixed(fractionalDigits);
    const numberLength2 = correctMaxLength - suffixes[suffixNum].length;
    const numberString2 = fractionalString2.substring(0, numberLength2);
    return (removeLastZero ? removeZero(numberString2) : numberString2) + suffixes[suffixNum];
  }
  const fractionalString = value.toFixed(fractionalDigits);
  const numberLength = correctMaxLength - suffixes[0].length;
  const numberString = fractionalString.substring(0, numberLength);
  return removeLastZero ? removeZero(numberString) : numberString + suffixes[0];
};
var removeZero = (value) => {
  if (value.indexOf(".") < 0) return value;
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] === ".") return value.substring(0, i);
    if (value[i] !== "0") return value.substring(0, i + 1);
  }
  return value;
};
var toAbbreviatedString_default = toAbbreviatedString;

// extensions/ludex/src/utils/number/index.ts
var number_default = { getShortNumber: getShortNumber_default, sign: sign_default, padEnd: padEnd_default,
padStart: padStart_default, random: random_default, toAbbreviatedString: toAbbreviatedString_default };

// extensions/ludex/src/utils/object/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/object/camelCaseKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/string/camelize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var toUpperCamelCase = (str) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
  return text.substring(0, 1).toUpperCase() + text.substring(1);
};
var toCamelCase = (str) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
  return text.substring(0, 1).toLowerCase() + text.substring(1);
};

// extensions/ludex/src/utils/object/camelCaseKeys.ts
var func78 = (obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = toCamelCase(key);
    if (Array.isArray(value)) {
      newObj[newKey] = value.map((item) => {
        if (typeof item === "object") {
          return func78(item);
        }
        return item;
      });
    } else if (typeof value === "object") {
      newObj[newKey] = func78(value);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
};
var camelCaseKeys_default = func78;

// extensions/ludex/src/utils/object/diff.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func79 = (source, target) => {
  const result3 = {};
  for (const key in target) {
    if (hasOwn_default(target, key)) {
      if (hasOwn_default(source, key)) {
        const sourceValue = source[key];
        const targetValue = target[key];
        if (isObject_default(sourceValue) && isObject_default(targetValue) && sourceValue !== null &&
        targetValue !== null && typeof sourceValue !== "function" && typeof targetValue !== "functio\
n") {
          const diffResult = func79(sourceValue, targetValue);
          if (Object.keys(diffResult).length > 0) {
            result3[key] = diffResult;
          }
        } else if (!Object.is(sourceValue, targetValue)) {
          result3[key] = targetValue;
        }
      } else {
        result3[key] = target[key];
      }
    }
  }
  for (const key in source) {
    if (hasOwn_default(source, key) && !hasOwn_default(target, key)) {
      result3[key] = void 0;
    }
  }
  return result3;
};
var diff_default = func79;

// extensions/ludex/src/utils/object/filterDeep.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func80 = (source, input) => {
  const result3 = {};
  for (const key in input) {
    if (hasOwn_default(input, key)) {
      if (isObject_default(input[key]) && input[key] !== null) {
        if (isObject_default(source[key]) && source[key] !== null) {
          if (typeof input[key] === "function") continue;
          const filteredSubObject = func80(source[key], input[key]);
          if (Object.keys(filteredSubObject).length > 0) {
            result3[key] = filteredSubObject;
          }
        } else if (!hasOwn_default(source, key)) {
          result3[key] = assign_default({}, input[key]);
        }
      } else if (!hasOwn_default(source, key)) {
        result3[key] = input[key];
      }
    }
  }
  return result3;
};
var filterDeep_default = func80;

// extensions/ludex/src/utils/object/keyBy.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/valid/isPropertyKey.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func81 = (key) => {
  return ["string", "number", "symbol"].indexOf(typeof key) > -1;
};
var isPropertyKey_default = func81;

// extensions/ludex/src/utils/object/keyBy.ts
var func82 = (array, key) => {
  const result3 = {};
  for (const item of array) {
    const value = item[key];
    if (!isPropertyKey_default(value)) continue;
    result3[value] = item;
  }
  return result3;
};
var keyBy_default = func82;

// extensions/ludex/src/utils/object/snakeCaseKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/string/snake.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var toSnakeCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, "_").toLowerCase();
};

// extensions/ludex/src/utils/object/snakeCaseKeys.ts
var func83 = (obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = toSnakeCase(key);
    if (Array.isArray(value)) {
      newObj[newKey] = value.map((item) => {
        if (typeof item === "object") {
          return func83(item);
        }
        return item;
      });
    } else if (typeof value === "object") {
      newObj[newKey] = func83(value);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
};
var snakeCaseKeys_default = func83;

// extensions/ludex/src/utils/object/vals.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func84 = (object) => {
  return Object.keys(object).map((key) => {
    return object[key];
  });
};
var vals_default = func84;

// extensions/ludex/src/utils/object/index.ts
var object_default = {
  assign: assign_default,
  camelCaseKeys: camelCaseKeys_default,
  clone: clone_default2,
  clear: clear_default,
  diff: diff_default,
  hasOwn: hasOwn_default,
  invert: invert_default,
  keyBy: keyBy_default,
  merge: merge_default,
  snakeCaseKeys: snakeCaseKeys_default,
  vals: vals_default,
  filterDeep: filterDeep_default
};

// extensions/ludex/src/utils/signal/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/signal/Signal.ts
var Signal_exports = {};
__export(Signal_exports, {
  Signal: () => Signal,
  SignalAbortedError: () => SignalAbortedError,
  SignalController: () => SignalController
});
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SignalAbortedError = class extends Error {
  constructor(reason = "Signal aborted with no reason") {
    super(reason);
    this.name = "SignalAbortedStopped";
  }
};
var Signal = class _Signal {
  state = { type: "running" };
  callbacks = [];
  /**
   * Register a callback to be called when the signal is aborted.
   * If the signal is already aborted, the callback will be called immediately
   * and only once.
   *
   * @param callback The callback to be called.
   */
  once(callback) {
    this.callbacks.push(callback);
  }
  /**
   * Remove a callback from the list of callbacks to be called when the signal is aborted.
   * @param callback The callback to be removed.
   */
  off(callback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  }
  abort(reasonOrMessage) {
    const realReason = this.constructReason(reasonOrMessage);
    this.state = {
      type: "stopped",
      reason: realReason
    };
    for (const cb of this.callbacks) {
      cb(realReason);
    }
    this.callbacks = [];
  }
  /**
   * Check if the signal has been aborted.
   */
  get aborted() {
    return this.state.type === "stopped";
  }
  /**
   * Get the reason for the signal being aborted.
   * If the signal is not aborted, `undefined` is returned.
   */
  get reason() {
    if (this.state.type === "stopped") {
      return this.state.reason;
    }
    return void 0;
  }
  /**
   * Wrap a callback in a new function if the signal has not been aborted.
   * If the signal has been aborted, `undefined` is returned.
   *
   * @example
   * ```typescript
   * // step by step
   * const signal = new Signal()
   * const fn = (name: string) => `Hello, ${name}!`
   * const wrapped = signal.wrap(fn)
   * const output = wrapped?.('world') // output is 'Hello, world!' | undefined
   *
   * // in one line
   * const signal = new Signal()
   * const output = signal.wrap((name: string) => `Hello, ${name}!`)?.('world') // output is 'Hello, world!' | undefined
   * ```
   *
   * @param callback The callback to be wrapped.
   * @returns The wrapped callback or `undefined` if the signal has been aborted.
   */
  wrap(callback) {
    if (this.aborted) return void 0;
    return callback;
  }
  /**
   * Let another signal abort this signal.
   *
   * @param signal The signal to chain to.
   */
  chain(signal) {
    if (signal instanceof _Signal) {
      signal.once((reason) => this.abort(reason));
    } else {
      signal.addEventListener("abort", () => this.abort(signal.reason), {
        once: true
      });
    }
  }
  /**
   * Wait for the signal to be aborted.
   * @returns A promise that resolves when the signal is aborted.
   */
  promise() {
    if (this.aborted) {
      return Promise.resolve(this.reason);
    }
    return new Promise((resolve) => {
      this.once((reason) => resolve(reason));
    });
  }
  constructReason(reason) {
    if (reason instanceof Error) {
      return reason;
    }
    if (typeof reason === "string") {
      return new SignalAbortedError(reason);
    }
    return new SignalAbortedError();
  }
};
var SignalController = class {
  signal;
  /**
   * Abort an existing signal and create a new one.
   * Using this is preferred over creating a new signal manually.
   *
   * @returns A new signal
   */
  renew() {
    this.signal?.abort();
    const signal = new Signal();
    this.signal = signal;
    return signal;
  }
  /**
   * Abort the current signal if it exists.
   * If the signal does not exist, this method does nothing.
   */
  abort() {
    this.signal?.abort();
  }
  /**
   * Create a promise that resolves when the signal is aborted.
   * If the signal does not exist, the promise resolves immediately.
   * @returns A promise that resolves when the signal is aborted
   * or immediately if the signal does not exist.
   */
  promise() {
    if (this.signal === void 0) {
      return Promise.resolve(void 0);
    }
    return this.signal.promise();
  }
};

// extensions/ludex/src/utils/signal/index.ts
var signal_default = Signal_exports;

// extensions/ludex/src/utils/string/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/string/capitalize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func85 = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};
var capitalize_default = func85;

// extensions/ludex/src/utils/string/findDuplicateSubstrings.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
function fun(input, minLength = 2) {
  const result3 = [];
  const words = input.split(" ");
  const n = words.length;
  for (let len = n; len >= 1; len--) {
    for (let i = 0; i <= n - len; i++) {
      const substrWords = words.slice(i, i + len);
      const substr = substrWords.join(" ");
      if (input.split(substr).length - 1 >= minLength && result3.indexOf(substr) < 0 && substr.length >
      1) {
        result3.push(substr);
      }
    }
  }
  return result3.sort((a, b) => a.length - b.length);
}
var findDuplicateSubstrings_default = fun;

// extensions/ludex/src/utils/string/generateNameAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var names = null;
var defaultName = "Anonymous";
var fetchNames = async () => {
  const endpoint = "https://randommer.io/api/Name";
  const { RandomNameApiKey } = Ludex.Configs.Mockup.Profile;
  const payload = {
    nameType: "surname",
    quantity: 1e3
  };
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "X-Api-Key": RandomNameApiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error("Can't fetch names");
  }
  const data = await response.json();
  if (!isObject_default(data) || !hasOwn_default(data, "data") || !Array.isArray(data.data)) {
    throw new Error("Invalid names response");
  }
  return data.data;
};
var func86 = async () => {
  try {
    if (!names) {
      names = await fetchNames();
      if (!names) {
        throw new Error("Cannot fetch names");
      }
    }
    const firstName = names[random_default(names.length)];
    const lastName = names[random_default(names.length)];
    return `${firstName} ${lastName}`;
  } catch (_) {
    return defaultName;
  }
};
var generateNameAsync_default = func86;

// extensions/ludex/src/utils/string/generateObjectId.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func87 = (radix = 16) => {
  const s = (i) => Math.floor(i).toString(radix);
  const time = s(Date.now() / 1e3);
  const str = Array(radix + 1).join(" ");
  return time + str.replace(/./g, () => s(Math.random() * radix));
};
var generateObjectId_default = func87;

// extensions/ludex/src/utils/string/getLanguageCode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func88 = (locale2) => {
  const parts = locale2 ? locale2.split("_") : [];
  let code = parts.length > 0 ? parts[0] : "en_US";
  switch (code) {
    case "id":
    case "in":
      code = "id";
      break;
  }
  return code;
};
var getLanguageCode_default = func88;

// extensions/ludex/src/utils/string/getShortName.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func89 = (name2, length) => {
  const nameArr = name2.split(" ");
  const firstLastNameArr = nameArr.length <= 1 ? [...nameArr] : [nameArr[0], nameArr.pop()];
  const firstLastName = firstLastNameArr.join(" ");
  const lastIndexOfSpace = firstLastName.lastIndexOf(" ") || 0;
  const lastIndex = lastIndexOfSpace >= 0 ? lastIndexOfSpace : length;
  const shortName = firstLastName.length > length ? firstLastName.substring(0, lastIndex) : firstLastName;
  return shortName.substring(0, length);
};
var getShortName_default = func89;

// extensions/ludex/src/utils/string/hashCode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func90 = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
};
var hashCode_default = func90;

// extensions/ludex/src/utils/string/matchStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var fn = (str, searchString) => {
  for (let i = 0; i < searchString.length; i++) {
    if (str[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
};
var matchStart_default = fn;

// extensions/ludex/src/utils/string/padStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func91 = (value, length, pad = " ") => {
  const count = Math.floor(length);
  if (value.length >= count) return value;
  const paddingLength = count - value.length;
  let repeatedPadString = "";
  for (let i = 0; i < paddingLength; i++) {
    repeatedPadString += pad;
  }
  return repeatedPadString.slice(0, paddingLength) + value;
};
var padStart_default2 = func91;

// extensions/ludex/src/utils/string/params.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func92 = (payload) => {
  const params = Object.keys(payload).reduce((accumulator, key) => {
    const value = payload[key];
    if (value !== void 0) {
      accumulator.push(`${key}=${value}`);
    }
    return accumulator;
  }, []);
  return params.join("&");
};
var params_default = func92;

// extensions/ludex/src/utils/string/random.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func93 = (len, startWith) => {
  const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!";
  let word = "";
  let wordLen = len;
  if (startWith !== void 0) {
    wordLen -= startWith.length;
    word += startWith;
  }
  for (let i = 0; i < wordLen; i++) {
    const index = Math.floor(Math.random() * letters2.length);
    word += letters2.charAt(index);
  }
  return word;
};
var random_default2 = func93;

// extensions/ludex/src/utils/string/randomColor.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var letters = "0123456789ABCDEF";
var func94 = (prefix = "0x") => {
  let color = prefix;
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
var randomColor_default = func94;

// extensions/ludex/src/utils/string/removeDiacritics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func95 = (str) => {
  const result3 = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, (m) => m ===
  "\u0111" ? "d" : "D");
  return result3;
};
var removeDiacritics_default = func95;

// extensions/ludex/src/utils/string/index.ts
var string_default = {
  toCamelCase,
  toUpperCamelCase,
  capitalize: capitalize_default,
  generateObjectId: generateObjectId_default,
  getLanguageCode: getLanguageCode_default,
  getShortName: getShortName_default,
  hashCode: hashCode_default,
  matchStart: matchStart_default,
  padStart: padStart_default2,
  params: params_default,
  random: random_default2,
  randomColor: randomColor_default,
  removeDiacritics: removeDiacritics_default,
  findDuplicateSubstrings: findDuplicateSubstrings_default,
  generateNameAsync: generateNameAsync_default,
  toSnakeCase
};

// extensions/ludex/src/utils/time/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/time/getRelativeTime.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Number.POSITIVE_INFINITY];
var units = ["second", "minute", "hour", "day", "week", "month", "year"];
var func96 = (timestamp, locales, options, fallbackMessage = "Soon") => {
  try {
    const realLocales = locales ?? "en";
    const realOptions = options ?? { numeric: "auto" };
    const deltaSeconds = Math.round((timestamp * 1e3 - Date.now()) / 1e3);
    const positivedeltaSeconds = Math.abs(Math.round((timestamp * 1e3 - Date.now()) / 1e3));
    const unitIndex = searchIndex_default(cutoffs, (cutoff) => cutoff > positivedeltaSeconds);
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(realLocales, realOptions);
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
  } catch (error) {
    if (fallbackMessage !== void 0) {
      return "Soon";
    }
    throw error;
  }
};
var getRelativeTime_default = func96;

// extensions/ludex/src/utils/time/getTimeString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func97 = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();
  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let millisecondsString = `${milliseconds}`;
  if (milliseconds < 10) {
    millisecondsString = `00${milliseconds}`;
  } else if (milliseconds < 100) {
    millisecondsString = `0${milliseconds}`;
  }
  return `${hoursString}:${minutesString}:${secondsString}:${millisecondsString}`;
};
var getTimeString_default = func97;

// extensions/ludex/src/utils/time/isToday.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func98 = (timestamp) => {
  const last = new Date(timestamp);
  const today = /* @__PURE__ */ new Date();
  return last.getDate() === today.getDate() && last.getMonth() === today.getMonth() && last.getFullYear() ===
  today.getFullYear();
};
var isToday_default = func98;

// extensions/ludex/src/utils/time/sleepAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func99 = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
var sleepAsync_default = func99;

// extensions/ludex/src/utils/time/index.ts
var time_default = { isToday: isToday_default, sleepAsync: sleepAsync_default, getRelativeTime: getRelativeTime_default,
getTimeString: getTimeString_default };

// extensions/ludex/src/utils/valid/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/utils/valid/isBoolean.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func100 = (data) => typeof data === "boolean";
var isBoolean_default = func100;

// extensions/ludex/src/utils/valid/isDebugger.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func101 = () => {
  if (true) return true;
  return !!codex?.player?.getPlayerDataByKey("debug");
};
var isDebugger_default = func101;

// extensions/ludex/src/utils/valid/isFunction.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func102 = (input) => typeof input === "function";
var isFunction_default = func102;

// extensions/ludex/src/utils/valid/isNumber.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func103 = (data) => typeof data === "number";
var isNumber_default = func103;

// extensions/ludex/src/utils/valid/isPromise.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func104 = (input) => {
  if (!isFunction_default(input)) return false;
  if (input instanceof Promise || "then" in input && typeof input.then === "function") {
    return true;
  }
  return input.constructor.name === "AsyncFunction";
};
var isPromise_default = func104;

// extensions/ludex/src/utils/valid/isValueChangeAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var func105 = (from, to, options) => {
  const { timeout = 1e3, checkInterval = 16 } = options ?? {};
  let waitTimeout;
  let waitInterval;
  return new Promise((resolve, reject) => {
    if (typeof from !== "function") throw new Error("Input from must be a function");
    waitInterval = setInterval(() => {
      const aFrom = from();
      const aTo = typeof to === "function" ? to() : to;
      if (aFrom !== aTo) return;
      clearTimeout(waitTimeout);
      clearInterval(waitInterval);
      resolve(true);
    }, checkInterval);
    if (timeout > 0) {
      clearTimeout(waitTimeout);
      waitTimeout = setTimeout(() => {
        clearInterval(waitInterval);
        reject(new Error("Timeout"));
      }, timeout);
    }
  });
};
var isValueChangeAsync_default = func105;

// extensions/ludex/src/utils/valid/index.ts
var valid_default = {
  isBoolean: isBoolean_default,
  isDebugger: isDebugger_default,
  isEmpty: isEmpty_default,
  isFalsy: isFalsy_default,
  isFunction: isFunction_default,
  isNumber: isNumber_default,
  isObject: isObject_default,
  isPromise: isPromise_default,
  isPropertyKey: isPropertyKey_default,
  isString: isString_default,
  isValueChangeAsync: isValueChangeAsync_default
};

// extensions/ludex/src/utils/index.ts
var Utils = {
  Array: array_default,
  Browser: browser_default,
  Decorator: decorator_default,
  Device: device_default,
  Function: function_default,
  Hash: hash_default,
  Image: image_default,
  Json: json_default,
  Mark: mark_default.Mark,
  Object: object_default,
  Signal: signal_default,
  String: string_default,
  Number: number_default,
  Time: time_default,
  Valid: valid_default
};
var utils_default = Utils;

// extensions/ludex/src/Ludex.ts
console.groupCollapsed("\u{1F9EC} Ludex initiation");
var Ludex2 = Object.preventExtensions({
  Dtos: {},
  Utils: Object.freeze(utils_default),
  Match: Object.freeze({
    Modes: Object.freeze(MatchModes_default2)
  }),
  Events: Object.freeze(CoreEvents_default),
  Configs: Object.seal(define_GAME_CONFIG_default),
  Plugins: Object.seal({
    Ads: null,
    Audio: null,
    Analytics: null
  })
});
window.Ludex = Ludex2;
window.TypeGuard = type_guard_default;
console.warn("Env mode:", "development");
console.warn("Debugger:", Ludex2.Utils.Valid.isDebugger());
console.warn("DevIds:", Ludex2.Configs.Debugger.ListPlayerDevIds);

// extensions/ludex/src/dtos/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/dtos/BaseDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V, Object: O, String: S, Json: J } = Ludex.Utils;
var MESSAGE_INVALID = "is invalid";
var BaseDtos = class _BaseDtos {
  static strict = {};
  static data = {};
  static addDefaultData(data) {
    if (!V.isObject(data)) {
      this.prototype.exception$("default data", MESSAGE_INVALID);
    }
    data = J.clone(data);
    const { name: name2 } = this;
    if (!V.isObject(_BaseDtos.data[name2])) {
      _BaseDtos.data[name2] = {};
    }
    _BaseDtos.data[name2] = O.merge(_BaseDtos.data[name2], data);
    console.debug(`${name2} default data:`, _BaseDtos.data[name2]);
  }
  static getDefaultData() {
    const { name: name2 } = this;
    return J.clone(_BaseDtos.data[name2]);
  }
  static addValidateFunction(key, func106) {
    if (!V.isString(key)) {
      this.prototype.exception$("validate key", MESSAGE_INVALID);
    }
    if (typeof func106 !== "function") {
      this.prototype.exception$("validate function", MESSAGE_INVALID);
    }
    const funcName = `validate${S.capitalize(key)}`;
    O.assign(this.prototype, { [funcName]: func106 });
  }
  constructor(data) {
    this.defaultData();
    this.processData(data);
  }
  static makeStrict() {
    _BaseDtos.strict[this.name] = true;
  }
  static makeLoose() {
    _BaseDtos.strict[this.name] = false;
  }
  processData(data) {
    this.validateStructure$(data);
    this.validateData$(data);
    this.setupData(data);
  }
  defaultData() {
    const { name: name2 } = this.constructor;
    this.lazyDefaultData$(_BaseDtos.data[name2]);
  }
  lazyDefaultData$(data) {
    if (!V.isObject(data)) {
      this.exception$("data", MESSAGE_INVALID);
    }
    for (const key in data) {
      if (O.hasOwn(data, key)) {
        const value = data[key];
        O.assign(this, { [key]: value });
      }
    }
  }
  lazyValidateStructure$(data) {
    if (!V.isObject(data)) {
      this.exception$("structure", "is not object");
    }
    const keys = this.getKeys();
    for (const key of keys) {
      const current = this[key];
      if (current === void 0) {
        this.exception$("structure", `has no key ${key}`);
      }
      const isOwn = O.hasOwn(data, key);
      if (!isOwn && current !== void 0) {
        this.setDefaultData$(key, data);
      }
    }
  }
  setDefaultData$(key, data) {
    if (!V.isObject(data)) {
      this.exception$("data", MESSAGE_INVALID);
    }
    const value = this[key];
    if (value === void 0) {
      this.exception$("default", `has no key ${key}`);
    }
    O.assign(data, { [key]: value });
  }
  lazyValidateData$(data) {
    const keys = this.getKeys();
    for (const key of keys) {
      const value = data[key];
      const corrKey = S.removeDiacritics(key).replace(/[^a-zA-Z0-9]/g, "");
      const funcName = `validate${S.capitalize(corrKey)}`;
      const validate = this[funcName];
      if (typeof validate === "function") {
        try {
          validate.call(this, value);
        } catch (error) {
          if (_BaseDtos.strict[this.constructor.name]) throw error;
          console.warn(error);
          this.setDefaultData$(key, data);
        }
      } else {
        this.exception$("validate", `has no function ${funcName}`);
      }
    }
  }
  lazySetupData$(data) {
    const keys = this.getKeys();
    for (const key of keys) {
      const value = data[key];
      O.assign(this, { [key]: value });
    }
  }
  exception$(key, message) {
    throw new Error(`${this.constructor.name}: ${key} ${message}`);
  }
  toObject() {
    return Object.fromEntries(Object.entries(this).filter(([key]) => key !== "toObject"));
  }
  getKeys() {
    return Object.keys(this).filter((key) => key !== "toObject" && key !== "strict");
  }
};
var BaseDtos_default = BaseDtos;

// extensions/ludex/src/dtos/index.ts
Ludex.Dtos = { Base: BaseDtos_default };

// extensions/ludex/src/codex/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/codex/codex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/codex/plugins/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var Plugins = class {
  codex;
  plugins;
  constructor(codex2) {
    this.codex = codex2;
    this.plugins = {};
  }
  install(name2, plugin, mapping, property) {
    if (typeof plugin !== "function") {
      if (GameSDK.getSDKName() !== "Ludex") {
        console.error("Plugin install:", `${name2} plugin must be a class (${property})`);
      } else {
        console.warn("Plugin install:", `${name2} plugin may be disabled (${property})`);
      }
      return;
    }
    const pluginInstance = new plugin(this.codex);
    this.plugins[name2] = pluginInstance;
    if (mapping) {
      Object.defineProperty(this.codex, property, {
        get: () => pluginInstance
      });
    }
    pluginInstance.init();
  }
  get(name2) {
    return this.plugins[name2];
  }
};
var plugins_default = Plugins;

// extensions/ludex/src/codex/plugins/base.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BasePlugin = class {
  codex;
  constructor(codex2) {
    this.codex = codex2;
  }
  init() {
  }
};
var base_default = BasePlugin;

// extensions/ludex/src/codex/codex.ts
var Game = class {
  codex;
  plugins;
  ads;
  auth;
  audio;
  event;
  match;
  player;
  profile;
  context;
  storage;
  language;
  missions;
  analytics;
  visibility;
  leaderboard;
  dailyRewards;
  remoteConfig;
  frameCapture;
  // Lazy plugins
  firebase;
  monitorError;
  adaptivePerformance;
  inputRecorder;
  // Dev plugins
  console;
  profiler;
  canvasRecorder;
  constructor() {
    this.codex = this;
    this.plugins = new plugins_default(this.codex);
  }
  async boot() {
  }
  async start() {
  }
  getBuildVersion() {
    return 0;
  }
};
window.Ludex.Plugins = { BasePlugin: base_default };
var codex_default = Game;

// extensions/ludex/src/api/notification.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/api/clients/instance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/exceptions/BadRequest.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BadRequest = class extends Error {
  payload;
  constructor(message, payload) {
    super(message);
    this.name = "BadRequest";
    this.message = message ?? "This request is bad";
    this.payload = payload;
  }
};
var BadRequest_default = BadRequest;

// extensions/ludex/src/exceptions/RequestTimeout.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var RequestTimeout = class extends Error {
  payload;
  constructor(message, payload) {
    super(message);
    this.name = "RequestTimeout";
    this.message = message ?? "This request is timeout";
    this.payload = payload;
  }
};
var RequestTimeout_default = RequestTimeout;

// extensions/ludex/src/api/clients/instance.ts
var {
  Utils: { Valid: V2, Time: T },
  Configs: { AppId, Network }
} = Ludex;
var validateResponse = (response) => {
  if (response.ok) return;
  throw new BadRequest_default(void 0, { response });
};
var defaultConfig = () => {
  const token = codex.auth.getToken();
  return {
    token,
    timeout: Network.Timeout,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
};
var requester = (host, url, config, data) => async () => {
  try {
    if (!AppId) throw new BadRequest_default("AppId is not defined");
    const fullUrl = `${host}/apps/${AppId}/${url}`;
    const controller = new AbortController();
    config.signal = controller.signal;
    const timeout = setTimeout(() => {
      controller.abort();
    }, config.timeout);
    if (V2.isObject(data)) {
      config.body = JSON.stringify(data);
    }
    const response = await fetch(fullUrl, config);
    clearTimeout(timeout);
    validateResponse(response);
    const json = await response.json() || {};
    return json;
  } catch (error) {
    if (error instanceof BadRequest_default) return null;
    if (error instanceof Object && "name" in error) {
      if (error.name === "AbortError") {
        throw new RequestTimeout_default();
      }
    }
    throw error;
  }
};
var handleRequest = async (asyncFunc, retry) => {
  try {
    return asyncFunc();
  } catch (error) {
    if (error instanceof RequestTimeout_default && retry > 0) {
      try {
        await T.sleepAsync(600);
        return await handleRequest(asyncFunc, retry - 1);
      } catch (error2) {
        return {};
      }
    }
    if (error instanceof RequestTimeout_default) return {};
    console.warn("Request error", error);
    return {};
  }
};
var get = async (url, configs, host, retry = Network.Retries) => {
  try {
    const config = __spreadProps(__spreadValues(__spreadValues({}, defaultConfig()), configs), {
      method: "GET"
    });
    const request = requester(host, url, config);
    return await handleRequest(request, retry);
  } catch (error) {
    console.warn("Get error", error);
    return {};
  }
};
var post = async (url, data, configs, host, retry = Network.Retries) => {
  try {
    const config = __spreadProps(__spreadValues(__spreadValues({}, defaultConfig()), configs), {
      method: "POST"
    });
    const request = requester(host, url, config, data);
    return await handleRequest(request, retry);
  } catch (error) {
    console.warn("Post error", error);
    return {};
  }
};

// extensions/ludex/src/api/notification.ts
var {
  Configs: {
    Notification: { ApiUrl }
  },
  Utils: { Object: O2 }
} = Ludex;
var updatePlayerProfileNotificationAsync = async (payload) => {
  if (!O2.hasOwn(payload, "playerId")) {
    throw new Error("Missing playerId");
  }
  const { playerId: playerId2 } = payload;
  await post(`players/${playerId2}`, payload, {}, ApiUrl, 10);
};

// extensions/ludex/src/codex/StateInitiator.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/constants/PlayerDataKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlayerDataKeys = {
  score: "score",
  settings: "settings",
  isFirstLogin: "isFirstLogin",
  gameData: "gameData",
  missionsData: "missionsData",
  notificationData: "notificationData",
  dailyRewardedData: "dailyRewardedData",
  lastCallSwitchGame: "lastCallSwitchGame",
  remoteConfig: "remoteConfig"
};
var PlayerDataKeys_default = PlayerDataKeys;

// extensions/ludex/src/constants/SampleOpponent.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/player/dtos/PlayerInfo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/player/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState = {
  ASID: null,
  playerId: "0000",
  name: "Guest",
  photo: "",
  locale: "en_US",
  connectedPlayers: {},
  data: {
    score: 0,
    isFirstLogin: true,
    settings: {
      sound: true,
      music: true,
      vibrate: true,
      language: "en"
    },
    gameData: {
      coins: 0,
      level: 1
    },
    notificationData: {
      D1: {
        arrivalDate: 0
      },
      D2: {
        arrivalDate: 0
      },
      D3: {
        arrivalDate: 0
      },
      D4: {
        arrivalDate: 0
      },
      D5: {
        arrivalDate: 0
      },
      D6: {
        arrivalDate: 0
      },
      D7: {
        arrivalDate: 0
      }
    },
    missionsData: {
      process: {}
    },
    lastCallSwitchGame: 0
  }
};
var state_default = initState;

// extensions/ludex/src/plugins/player/dtos/PlayerInfo.ts
var { Valid: V3 } = Ludex.Utils;
var { playerId, name, photo, locale } = state_default;
var MESSAGE_INVALID2 = "is invalid";
var PlayerInfoDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateId(_id) {
    if (!V3.isString(_id) || !_id) {
      this.exception$("_id", MESSAGE_INVALID2);
    }
  }
  validatePlayerId(playerId2) {
    if (!V3.isString(playerId2) || !playerId2) {
      this.exception$("playerId", MESSAGE_INVALID2);
    }
  }
  validateName(name2) {
    if (!V3.isString(name2) || !name2) {
      this.exception$("name", MESSAGE_INVALID2);
    }
  }
  validatePhoto(photo2) {
    if (!V3.isString(photo2)) {
      this.exception$("photo", MESSAGE_INVALID2);
    }
  }
  validateLocale(locale2) {
    if (!V3.isString(locale2) || !locale2) {
      this.exception$("locale", MESSAGE_INVALID2);
    }
  }
  toObject() {
    return super.toObject();
  }
};
PlayerInfoDtos.addDefaultData({
  playerId,
  name,
  photo,
  locale
});
var PlayerInfo_default = PlayerInfoDtos;

// extensions/ludex/src/constants/SampleOpponent.ts
var SampleOpponent = new PlayerInfo_default({
  playerId: "10",
  name: "Your Friend"
}).toObject();
var SampleOpponent_default = SampleOpponent;

// extensions/ludex/src/plugins/match/exceptions/PlayerIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/abstract/ACreateMatchFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ACreateMatchFailed = class extends Error {
  code;
  constructor(message) {
    super(message);
    this.code = "CREATE_MATCH_FAILED";
  }
};
var ACreateMatchFailed_default = ACreateMatchFailed;

// extensions/ludex/src/plugins/match/exceptions/PlayerIdNotValid.ts
var PlayerIdNotValid = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "PlayerIdNotValid";
    this.message = message ?? "Player id is not valid";
  }
};
var PlayerIdNotValid_default = PlayerIdNotValid;

// extensions/ludex/src/codex/StateInitiator.ts
var {
  Dtos,
  Utils: { Array: A, Object: O3, Json: J2, Valid: V4 },
  Events
} = Ludex;
var StateInitiator = class {
  codex;
  constructor(codex2) {
    this.codex = codex2;
  }
  initContext = () => {
    const rawData = {
      contextId: GameSDK.context.getID() ?? "",
      contextType: GameSDK.context.getType(),
      entryPointData: GameSDK.getEntryPointData()
    };
    const context = new Dtos.Context.Info(rawData);
    const { contextId: contextId2, contextType: contextType2, entryPointData: entryPointData2 } = context.
    toObject();
    this.codex.context.receiveContext(contextId2, contextType2, entryPointData2);
  };
  initPlayer = async () => {
    try {
      const { player } = this.codex;
      const playerInfo = this.getPlayerInfo();
      console.info("playerInfo", J2.clone(playerInfo));
      const dataKeys = A.unique(O3.vals(PlayerDataKeys_default));
      console.debug("dataKeys", dataKeys);
      const rawData = await GameSDK.player.getDataAsync(dataKeys);
      console.debug("rawData", J2.clone(rawData));
      const playerData = new Dtos.Player.Data(rawData).toObject();
      console.info("playerData", J2.clone(playerData));
      player.receiveData(playerInfo, playerData);
    } catch (error) {
      console.warn("StateInitiator.initPlayer", error);
    } finally {
      this.codex.event.emit(Events.PLAYER_INFO_LOADED);
    }
  };
  getPlayerInfo = () => {
    try {
      const playerId2 = GameSDK.player.getID();
      let playerName = GameSDK.player.getName();
      const playerPhoto = GameSDK.player.getPhoto();
      let playerLocale = GameSDK.getLocale();
      if (!V4.isString(playerId2)) {
        throw new PlayerIdNotValid_default();
      }
      if (!V4.isString(playerName)) {
        playerName = "You";
      }
      if (!V4.isString(playerLocale) || !playerLocale) {
        playerLocale = "en";
      }
      return new Dtos.Player.Info({
        playerId: playerId2,
        name: playerName,
        photo: playerPhoto,
        locale: playerLocale
      }).toObject();
    } catch (error) {
      console.warn("StateInitiator.getPlayerInfo", error);
      return SampleOpponent_default;
    }
  };
};
var StateInitiator_default = StateInitiator;

// extensions/ludex/src/plugins/ads/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/ads/AdsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/ads/constants/AdsStatus.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var AdStatus = /* @__PURE__ */ ((AdStatus2) => {
  AdStatus2["IDLE"] = "idle";
  AdStatus2["LOADING"] = "loading";
  AdStatus2["FILLED"] = "filled";
  AdStatus2["SHOWING"] = "showing";
  return AdStatus2;
})(AdStatus || {});
var AdsStatus_default = AdStatus;

// extensions/ludex/src/plugins/ads/constants/AdsTypes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var Types = /* @__PURE__ */ ((Types3) => {
  Types3["BANNER"] = "banner";
  Types3["INTERSTITIAL"] = "interstitial";
  Types3["REWARDED_VIDEO"] = "rewarded_video";
  Types3["REWARDED_INTERSTITIAL"] = "rewarded_interstitial";
  return Types3;
})(Types || {});
var AdsTypes_default = Types;

// extensions/ludex/src/plugins/ads/exceptions/AdError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var AdError = class extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
};
var AdError_default = AdError;

// extensions/ludex/src/plugins/ads/instances/AdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/ads/instances/BaseInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BaseInstance = class {
  type;
  service;
  placementId;
  _status;
  constructor(type, placementId) {
    this.type = type;
    this._status = AdsStatus_default.IDLE;
    this.placementId = placementId;
  }
  setStatus(status) {
    if (this._status === status) return;
    this._status = status;
  }
  get status() {
    return this._status;
  }
  exception$(message) {
    throw new AdError_default("AD_INSTANCE_ERROR", message);
  }
};
var BaseInstance_default = BaseInstance;

// extensions/ludex/src/plugins/ads/instances/AdInstance.ts
var AdInstance = class extends BaseInstance_default {
  loadAsync() {
    this.exception$("This method is not implemented");
  }
  showAsync() {
    this.exception$("This method is not implemented");
  }
  hideAsync() {
    this.exception$("Unsupported method");
  }
};
var AdInstance_default = AdInstance;

// extensions/ludex/src/plugins/ads/AdsPlugin.ts
Ludex.Plugins.Ads = {
  Types: AdsTypes_default,
  Status: AdsStatus_default,
  AdError: AdError_default,
  AdInstance: AdInstance_default
};
var { Array: A2, Object: O4 } = Ludex.Utils;
var AdsPlugin = class extends Ludex.Plugins.BasePlugin {
  enabled;
  config;
  // ? That mean the last time an ad full size was shown
  lastCallAdShownTime;
  isAdFullSizeShowed;
  ads = {};
  safeAreaBottom;
  degradationTracking = {
    failedAttempts: 0,
    lastSuccessTime: 0
  };
  init() {
    const now = 0;
    this.lastCallAdShownTime = {
      [AdsTypes_default.BANNER]: now,
      [AdsTypes_default.INTERSTITIAL]: now,
      [AdsTypes_default.REWARDED_VIDEO]: now,
      [AdsTypes_default.REWARDED_INTERSTITIAL]: now
    };
    this.isAdFullSizeShowed = false;
    this.calculateSafeAreaBottom();
    this.resetDegradationTracking();
  }
  calculateSafeAreaBottom() {
    try {
      const sab = getComputedStyle(document.documentElement).getPropertyValue("--sab");
      this.safeAreaBottom = parseInt(sab, 10);
      if (isNaN(this.safeAreaBottom)) {
        this.safeAreaBottom = 0;
      }
    } catch (e) {
      this.safeAreaBottom = 0;
    }
  }
  configure(config) {
    this.config = config;
    this.enabled = this.config.Enabled;
  }
  checkEnabled() {
    if (!this.enabled) {
      throw new AdError_default("ADS_NOT_ENABLED", "Ads is't enabled");
    }
  }
  isAdFullSizeShowing() {
    return this.isAdFullSizeShowed;
  }
  setAdInstance(type, placementId, adInstance) {
    const id = `${type}-${placementId}`;
    if (this.ads[id]) {
      console.warn(`AdsPlugin: Ad instance with placementId ${placementId} already exists`);
      return;
    }
    this.ads[id] = {
      type,
      placementId,
      interval: null,
      instance: new adInstance(type, placementId)
    };
  }
  async loadAdAsync(type, placementId) {
    this.checkEnabled();
    try {
      const ad = this.getAd(type, placementId);
      await ad.instance.loadAsync();
    } catch (error) {
      this.degradationTracking.failedAttempts++;
      throw error;
    }
  }
  async showAdAsync(type, placementId) {
    this.checkEnabled();
    if (!this.canShowAd(type, placementId)) {
      console.warn(`AdsPlugin: This ad ${type} is not ready to be shown`);
      return;
    }
    const { event } = this.codex;
    const ad = this.getAd(type, placementId);
    try {
      event.emit(Ludex.Events.AD_SHOWING, { type, placementId });
      this.isAdFullSizeShowed = true;
      await ad.instance.showAsync();
      this.resetDegradationTracking();
      this.lastCallAdShownTime[type] = Date.now() / 1e3;
    } catch (error) {
      this.degradationTracking.failedAttempts++;
      throw error;
    } finally {
      event.emit(Ludex.Events.AD_CLOSED, { type, placementId });
      this.isAdFullSizeShowed = false;
    }
  }
  getAdStatus(type, placementId) {
    this.checkEnabled();
    const ad = this.getAd(type, placementId);
    return ad.instance.status;
  }
  getAd(type, placementId) {
    let ad = null;
    if (placementId) {
      ad = this.getAdByPlacementId(placementId, type);
    } else {
      ad = this.getPriorityAdByType(type);
    }
    if (!ad) {
      throw new AdError_default("AD_INSTANCE_NOT_INITIATED", "The instance ads not yet initiated");
    }
    return ad;
  }
  getAdsByType(type) {
    return O4.vals(this.ads).filter((ad) => ad.type === type);
  }
  getAdByPlacementId(placementId, type) {
    const ads = O4.vals(this.ads);
    const ad = A2.search(ads, (ad2) => ad2.placementId === placementId && (!type || ad2.type === type));
    if (!ad) return null;
    return ad;
  }
  getPriorityAdByType(type) {
    const ads = this.getAdsByType(type);
    if (!ads.length) return null;
    const ad = A2.search(ads, (ad2) => ad2.type === type);
    if (!ad) return null;
    return ad;
  }
  canShowAd(type, placementId) {
    return this.canShowAdByTime(type, placementId);
  }
  canShowAdByTime(type, placementId) {
    try {
      const now = Date.now() / 1e3;
      let adConfig;
      if (!placementId) {
        const ad = this.getPriorityAdByType(type);
        if (!ad) return false;
        adConfig = this.getCommonAdConfig(ad.placementId);
      } else {
        adConfig = this.getCommonAdConfig(placementId);
      }
      const { SecondsBetweenAds, SecondsFirstTime } = adConfig;
      const period = now - this.lastCallAdShownTime[type];
      const canShowByTime = period > SecondsBetweenAds;
      const canShowFirstTime = period > SecondsFirstTime;
      console.debug("[AdsPlugin] canShowAdByTime", {
        type,
        now,
        lastShownTime: this.lastCallAdShownTime[type],
        period,
        adConfig,
        canShowByTime,
        canShowFirstTime
      });
      if (this.lastCallAdShownTime[type] > 0) {
        return canShowByTime;
      }
      return canShowFirstTime;
    } catch (error) {
      console.warn(`Error while checking can show ${type} ad by time`, error);
      return false;
    }
  }
  canShowBannerAd(placementId) {
    try {
      const bannerConfig = this.getBannerConfig(placementId);
      const { Platform } = bannerConfig;
      if (Platform === "ALL") return true;
      const currentPlatform = GameSDK.getPlatform();
      if (!currentPlatform) return false;
      return currentPlatform === Platform;
    } catch (error) {
      console.warn("Error while checking canShowBannerAd", error);
      return false;
    }
  }
  async showBannerAdAsync(placementId, autoRefresh = true) {
    this.checkEnabled();
    const ad = this.getAd(AdsTypes_default.BANNER, placementId);
    if (!this.canShowBannerAd(ad.placementId)) {
      throw new Error("Banner ad can not be shown");
    }
    this.cleanBannerReloadTimer(ad);
    if (autoRefresh) {
      await this.showBannerAdWithSchedule(ad);
    } else {
      await this.showBannerAdOnce(ad);
    }
  }
  async showBannerAdOnce(ad) {
    const { event } = this.codex;
    if (this.isAdFullSizeShowing()) {
      console.warn("Show banner ad skipped because ad full size is showing");
      return;
    }
    try {
      await ad.instance.showAsync();
      event.emit(Ludex.Events.AD_SHOWING, {
        type: AdsTypes_default.BANNER,
        placementId: ad.placementId
      });
    } catch (error) {
      const err = error instanceof Error ? error : new Error("AdsPlugin.startShowBannerAdInterval: F\
ailed to show banner ad");
      try {
        await ad.instance.hideAsync();
      } catch (error2) {
        console.warn(
          "AdsPlugin.startShowBannerAdInterval: Failed to call ad.instance.hideAsync after show bann\
er ad failed",
          error2
        );
      }
      event.emit(Ludex.Events.AD_FAILED, {
        type: AdsTypes_default.BANNER,
        placementId: ad.placementId,
        error: err
      });
    }
  }
  async showBannerAdWithSchedule(ad) {
    await this.showBannerAdOnce(ad);
    const bannerConfig = this.getBannerConfig(ad.placementId);
    const { SecondsReload } = bannerConfig;
    if (SecondsReload <= 0 || !SecondsReload) {
      console.warn("Banner ad reload time is less than 0");
      return;
    }
    const cb = () => this.showBannerAdWithSchedule(ad);
    ad.interval = setTimeout(cb, SecondsReload * 1e3);
  }
  async hideBannerAdAsync(placementId) {
    this.checkEnabled();
    const ad = this.getAd(AdsTypes_default.BANNER, placementId);
    this.cleanBannerReloadTimer(ad);
    await ad.instance.hideAsync();
    const { event } = this.codex;
    event.emit(Ludex.Events.AD_CLOSED, { type: AdsTypes_default.BANNER, placementId });
  }
  cleanBannerReloadTimer(ad) {
    try {
      const { interval } = ad;
      if (!interval) return;
      clearInterval(interval);
    } catch (error) {
      console.warn("Error while cleaning banner reload timer", error);
    }
  }
  getCommonAdConfig(placementId) {
    const configs = [
      ...this.config.InterstitialAdOptions,
      ...this.config.RewardedVideoAdOptions,
      ...this.config.RewardedInterstitialAdOptions
    ];
    const adConfig = A2.search(configs, (config) => config.PlacementId === placementId);
    if (!adConfig) {
      throw new Error(`Ad config with placementId ${placementId} not found`);
    }
    return adConfig;
  }
  getBannerConfig(placementId) {
    const bannerConfig = A2.search(
      this.config.BannerDisplayAdOptions,
      (config) => config.PlacementId === placementId
    );
    if (!bannerConfig) {
      throw new Error(`Banner config with placementId ${placementId} not found`);
    }
    return bannerConfig;
  }
  getBannerHeight(placementId, gameZoom, includeSAB = true) {
    this.checkEnabled();
    const bannerConfig = this.getBannerConfig(placementId);
    const bannerHeight = GameSDK.getBannerHeight(bannerConfig);
    if (includeSAB) {
      if (this.safeAreaBottom <= 0) {
        this.calculateSafeAreaBottom();
      }
      return (bannerHeight + this.safeAreaBottom) * gameZoom;
    }
    return bannerHeight * gameZoom;
  }
  getSafeAreaBottom(gameZoom) {
    if (this.safeAreaBottom <= 0) {
      this.calculateSafeAreaBottom();
    }
    return this.safeAreaBottom * gameZoom;
  }
  resetDegradationTracking() {
    this.degradationTracking = {
      failedAttempts: 0,
      lastSuccessTime: Date.now()
    };
  }
  isServiceDegraded() {
    const now = Date.now();
    const { MaxFailedAttempts, ResetTimeMinutes } = this.config.DegradationTracking;
    const { lastSuccessTime, failedAttempts } = this.degradationTracking;
    if (now - lastSuccessTime > ResetTimeMinutes * 60 * 1e3) {
      this.resetDegradationTracking();
    }
    return failedAttempts >= MaxFailedAttempts;
  }
};
var AdsPlugin_default = AdsPlugin;

// extensions/ludex/src/plugins/ads/index.ts
var ads_default = AdsPlugin_default;

// extensions/ludex/src/plugins/analytics/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/analytics/AnalyticsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/analytics/constants/Events.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var AnalyticsEvents = {
  // Core Events
  APP_LAUNCH: "app_launch",
  APP_INITIALIZED: "app_initialized",
  // Engine Events
  ENGINE_READY: "engine_ready",
  LOAD_START: "load_start",
  LOAD_COMPLETE: "load_complete",
  APP_READY: "app_ready",
  // Game Events
  PAGE_VIEW: "page_view",
  SCREEN_OPEN: "screen_open",
  BUTTON_CLICK: "button_click",
  // Tutorial Events
  TUTORIAL_BEGIN: "tutorial_begin",
  TUTORIAL_STEP: "tutorial_step",
  TUTORIAL_COMPLETE: "tutorial_complete",
  // Match Events
  MATCH_START: "match_start",
  MATCH_RESCUE: "match_rescue",
  MATCH_END: "match_end",
  // Level Events
  LEVEL_START: "level_start",
  LEVEL_RESCUE: "level_rescue",
  LEVEL_END: "level_end",
  // Item Events
  USE_ITEM: "use_item",
  EARN_ITEM: "earn_item",
  GET_FREE_ITEM: "get_free_item",
  // Share Events
  SHARE: "share",
  INVITE: "invite",
  MESSAGE: "message",
  // Shortcut Events
  SHORTCUT_CREATE: "shortcut_create",
  SHORTCUT_CREATE_POPUP: "shortcut_create_popup",
  // Bot Events
  BOT_SUBSCRIBE: "bot_subscribe",
  BOT_SUBSCRIBE_POPUP: "bot_subscribe_popup",
  // Ads Events
  AD_INIT: "ad_init",
  AD_LOAD: "ad_load",
  AD_LOAD_FAILED: "ad_load_failed",
  AD_SHOWING: "ad_showing",
  AD_SHOW: "ad_show",
  AD_SHOW_FAILED: "ad_show_failed",
  AD_REWARD: "ad_reward",
  // User Events
  NEW_USER: "new_user",
  RETURNING_USER: "returning_user",
  // Group Events
  JOIN_GROUP: "join_group",
  // Tournaments
  TOURNAMENT_START: "tournament_start",
  TOURNAMENT_SHARE: "tournament_share",
  TOURNAMENT_CREATE: "tournament_create",
  TOURNAMENT_POST_SCORE: "tournament_post_score",
  // MSN Switch Game
  SWITCH_GAME_POPUP: "switch_game_popup",
  SWITCH_GAME: "switch_game"
};
var Events_default = AnalyticsEvents;

// extensions/ludex/src/plugins/analytics/funnels/AdsenseFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/analytics/funnels/BaseFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BaseFunnel = class {
  history = [];
  missing = [];
  outOfOrder = [];
  completed = false;
  failed = false;
  warned = [];
  debug = false;
  addEvent(event, _payload) {
    if (this.completed || this.failed) {
      this.debugLog("Skip event:", event);
      return;
    }
    this.history.push(event);
    this.validateAndUpdate(event);
  }
  validateAndUpdate(event) {
    const validationResult = this.validateFunnelState();
    if (validationResult.hasFailed) {
      this.failed = true;
      this.logValidationError();
      return;
    }
    if (validationResult.hasWarnings) {
      this.handleWarnings(validationResult.warnings);
    }
    this.checkFunnelCompletion(event);
  }
  validateFunnelState() {
    const result3 = {
      hasFailed: false,
      hasWarnings: false,
      warnings: []
    };
    const currentSteps = this.getCurrentSteps();
    const requiredSteps = currentSteps.filter((step) => step.required$);
    for (let i = 0; i < requiredSteps.length; i++) {
      const step = requiredSteps[i];
      const stepIndex = this.history.indexOf(step.name);
      if (stepIndex === -1) {
        this.missing = [step.name];
        result3.hasFailed = true;
        return result3;
      }
      if (i > 0) {
        const prevStep = requiredSteps[i - 1];
        const prevIndex = this.history.indexOf(prevStep.name);
        if (prevIndex > stepIndex) {
          this.missing = [prevStep.name];
          result3.hasFailed = true;
          return result3;
        }
      }
    }
    const outOfOrderEvents = this.validateDependencies();
    if (outOfOrderEvents.length > 0) {
      result3.hasWarnings = true;
      result3.warnings = outOfOrderEvents;
      this.outOfOrder = outOfOrderEvents;
    }
    return result3;
  }
  getCurrentSteps() {
    const lastEvent = this.history[this.history.length - 1];
    const currentIdx = this.funnelSteps.findIndex((step) => step.name === lastEvent);
    return this.funnelSteps.slice(0, currentIdx + 1);
  }
  validateDependencies() {
    const outOfOrder = [];
    this.history.forEach((event, index) => {
      const step = this.funnelSteps.find((s) => s.name === event);
      if (!step?.dependencies$?.length) return;
      const missingDep = step.dependencies$.find(
        (dep) => !this.history.includes(dep) || this.history.indexOf(dep) > index
      );
      if (missingDep && !this.warned.includes(event)) {
        outOfOrder.push({ event, missingDependency: missingDep });
        this.warned.push(event);
      }
    });
    return outOfOrder;
  }
  checkFunnelCompletion(event) {
    const lastStep = this.funnelSteps[this.funnelSteps.length - 1];
    if (event !== lastStep.name) return;
    const allRequired = this.funnelSteps.filter((step) => step.required$).every((step) => this.history.
    includes(step.name));
    if (allRequired) {
      this.completed = true;
      this.logCompletion();
    }
  }
  handleWarnings(warnings) {
    for (const warning of warnings) {
      console.warn(
        `\u26A0\uFE0F [${this.constructor.name}] Event ${warning.event} is out of order. Missing: ${warning.
        missingDependency}`
      );
    }
  }
  logValidationError() {
    const name2 = this.constructor.name;
    if (this.missing.length) {
      console.error(`\u26A0\uFE0F [${name2}] Missing required: ${this.missing.join(", ")}`);
    }
    console.debug(`\u2139\uFE0F [${name2}] History:`, this.history);
  }
  logCompletion() {
    const name2 = this.constructor.name;
    const hasWrongOrder = this.outOfOrder.length > 0;
    if (hasWrongOrder) {
      console.warn(`\u26A0\uFE0F [${name2}] Completed with out of order events:`, {
        history: this.history,
        outOfOrder: this.outOfOrder
      });
    } else {
      console.info(`\u{1F3AF} [${name2}] Completed`, { history: this.history });
    }
  }
  debugLog(...args) {
    if (this.debug) {
      console.debug(`\u{1F50D} [${this.constructor.name}]`, ...args);
    }
  }
  // Public getters
  isFunnelCompleted() {
    return this.completed;
  }
  isFunnelFailed() {
    return this.failed;
  }
  getEventHistory() {
    return [...this.history];
  }
  getMissingEvents() {
    return [...this.missing];
  }
  getOutOfOrderEvents() {
    return [...this.outOfOrder];
  }
};
var BaseFunnel_default = BaseFunnel;

// extensions/ludex/src/plugins/analytics/funnels/AdsenseFunnel.ts
var AdsenseFunnel = class extends BaseFunnel_default {
  debug = false;
  funnelSteps = [
    {
      name: Events_default.AD_INIT,
      required$: true,
      payload$: { service: "adsense" },
      description$: "Init adsense ad"
    },
    {
      name: Events_default.AD_LOAD_FAILED,
      required$: false,
      payload$: { service: this.service },
      description$: "Platform ad load failed (trigger for adsense)"
    },
    {
      name: Events_default.AD_LOAD,
      required$: true,
      payload$: { service: "adsense" },
      description$: "Start loading adsense ad"
    },
    {
      name: Events_default.AD_LOAD_FAILED,
      required$: false,
      dependencies$: [Events_default.AD_LOAD],
      payload$: { service: "adsense" },
      description$: "Adsense ad load failed"
    },
    {
      name: Events_default.AD_SHOWING,
      required$: true,
      dependencies$: [Events_default.AD_LOAD],
      payload$: { service: "adsense" },
      description$: "Adsense ad is showing"
    },
    {
      name: Events_default.AD_SHOW,
      required$: false,
      dependencies$: [Events_default.AD_SHOWING],
      payload$: { service: "adsense" },
      description$: "Adsense ad shown successfully"
    },
    {
      name: Events_default.AD_SHOW_FAILED,
      required$: false,
      dependencies$: [Events_default.AD_SHOWING],
      payload$: { service: "adsense" },
      description$: "Adsense ad show failed"
    },
    {
      name: Events_default.AD_LOAD,
      required$: false,
      payload$: { service: "adsense" },
      description$: "Preload adsense ad"
    }
  ];
  get service() {
    return GameSDK?.getSDKName() ?? "Ludex";
  }
  addEvent(event, payload) {
    const { service } = payload ?? {};
    if (!service) return;
    const isRelevantEvent = service === "adsense" || event === Events_default.AD_LOAD_FAILED && service ===
    "platform";
    if (!isRelevantEvent) return;
    super.addEvent(event, payload);
  }
};
var AdsenseFunnel_default = AdsenseFunnel;

// extensions/ludex/src/plugins/analytics/funnels/LudexFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var LudexFunnel = class extends BaseFunnel_default {
  debug = false;
  funnelSteps = [
    {
      name: Events_default.APP_LAUNCH,
      required$: true,
      description$: "Application launched"
    },
    {
      name: Events_default.APP_INITIALIZED,
      required$: true,
      dependencies$: [Events_default.APP_LAUNCH],
      description$: "Application initialized"
    },
    {
      name: Events_default.ENGINE_READY,
      required$: true,
      dependencies$: [Events_default.APP_INITIALIZED],
      description$: "Game engine initialized"
    },
    {
      name: Events_default.LOAD_START,
      required$: true,
      dependencies$: [Events_default.ENGINE_READY],
      description$: "Start loading game assets"
    },
    {
      name: Events_default.LOAD_COMPLETE,
      required$: true,
      dependencies$: [Events_default.LOAD_START],
      description$: "Game assets loaded completely"
    },
    {
      name: Events_default.APP_READY,
      required$: true,
      dependencies$: [Events_default.LOAD_COMPLETE],
      description$: "Game is ready to play"
    }
  ];
};
var LudexFunnel_default = LudexFunnel;

// extensions/ludex/src/plugins/analytics/funnels/PlatformAdsFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlatformAdsFunnel = class extends BaseFunnel_default {
  debug = false;
  funnelSteps = [
    {
      name: Events_default.AD_INIT,
      required$: true,
      payload$: { service: this.service },
      description$: "Init platform ad"
    },
    {
      name: Events_default.AD_LOAD,
      required$: true,
      payload$: { service: this.service },
      description$: "Start loading platform ad"
    },
    {
      name: Events_default.AD_LOAD_FAILED,
      required$: false,
      dependencies$: [Events_default.AD_LOAD],
      payload$: { service: this.service },
      description$: "Platform ad load failed"
    },
    {
      name: Events_default.AD_SHOWING,
      required$: true,
      dependencies$: [Events_default.AD_LOAD],
      payload$: { service: this.service },
      description$: "Platform ad is showing"
    },
    {
      name: Events_default.AD_SHOW,
      required$: false,
      dependencies$: [Events_default.AD_SHOWING],
      payload$: { service: this.service },
      description$: "Platform ad shown successfully"
    },
    {
      name: Events_default.AD_SHOW_FAILED,
      required$: false,
      dependencies$: [Events_default.AD_SHOWING],
      payload$: { service: this.service },
      description$: "Platform ad show failed"
    },
    {
      name: Events_default.AD_LOAD,
      required$: false,
      payload$: { service: this.service },
      description$: "Preload platform ad"
    }
  ];
  get service() {
    return GameSDK?.getSDKName() ?? "Ludex";
  }
  addEvent(event, payload) {
    if (payload?.service !== this.service) return;
    super.addEvent(event, payload);
  }
};
var PlatformAdsFunnel_default = PlatformAdsFunnel;

// extensions/ludex/src/plugins/analytics/template/Analytics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Utils: { String: S2, Valid: V5 }
} = Ludex;
var BaseAnalytics = class {
  codex;
  name;
  color;
  options;
  selfLog;
  currentPath;
  constructor(codex2, name2, options) {
    this.codex = codex2;
    this.name = name2;
    this.options = options;
    this.color = options.color || "#FFF";
    this.selfLog = options.log;
    this.currentPath = "/";
    console.info(`%c${this.name}: init`, `color: ${this.color}`, this.options);
  }
  event(name2, payload) {
    this.logInfo("event", { name: name2, payload });
    const event = this.formatEventName(name2);
    this.processEvent(event, payload);
  }
  logInfo(message, payload) {
    if (!this.selfLog) return;
    console.info(`%c${this.name}: ${message}`, `color: ${this.color}`, payload);
  }
  pageview(pagePath) {
    let pageTitle = this.getPageTitle(pagePath);
    pageTitle = this.addGameModeToPageTitle(pageTitle);
    document.title = pageTitle;
    this.event(Events_default.PAGE_VIEW, {
      path_path: pagePath,
      page_title: pageTitle
    });
  }
  levelStart(level2, score2, mode) {
    this.event(Events_default.LEVEL_START, {
      level: level2,
      score: score2,
      level_name: this.getLevelName(level2),
      game_mode: mode ? S2.toUpperCamelCase(mode) : void 0
    });
  }
  levelFail(level2, score2, mode) {
    this.event(Events_default.LEVEL_END, {
      level: level2,
      score: score2,
      success: false,
      level_name: this.getLevelName(level2),
      game_mode: mode ? S2.toUpperCamelCase(mode) : void 0
    });
  }
  levelRescue(level2, score2, mode) {
    this.event(Events_default.LEVEL_RESCUE, {
      level: level2,
      score: score2,
      level_name: this.getLevelName(level2),
      game_mode: mode ? S2.toUpperCamelCase(mode) : void 0
    });
  }
  levelComplete(level2, score2, mode) {
    this.event(Events_default.LEVEL_END, {
      level: level2,
      score: score2,
      success: true,
      level_name: this.getLevelName(level2),
      game_mode: mode ? S2.toUpperCamelCase(mode) : void 0
    });
  }
  initAdEvent(payload) {
    const { adService, state } = payload;
    this.event(Events_default.AD_INIT, {
      ad_service: adService,
      state
    });
  }
  loadAdEvent(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_LOAD, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  showAdEvent(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_SHOW, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  loadInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.loadAdEvent({
      type: "interstitial",
      placement,
      service: adService
    });
  }
  showInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent({
      type: "interstitial",
      placement,
      service: adService
    });
  }
  loadRewardedVideoAd(payload) {
    const { placement, service: adService } = payload;
    this.loadAdEvent({
      type: "rewarded_video",
      placement,
      service: adService
    });
  }
  showRewardedVideoAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent({
      type: "rewarded_video",
      placement,
      service: adService
    });
  }
  receiveVideoReward(payload) {
    const { placement, service: adService } = payload;
    this.event(Events_default.AD_REWARD, {
      screen_name: placement,
      ad_service: adService
    });
  }
  loadRewardedInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.loadAdEvent({
      type: "rewarded_interstitial",
      placement,
      service: adService
    });
  }
  showRewardedInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent({
      type: "rewarded_interstitial",
      placement,
      service: adService
    });
  }
  receiveInterstitialReward(payload) {
    const { placement, service: adService } = payload;
    this.event(Events_default.AD_REWARD, {
      screen_name: placement,
      ad_service: adService
    });
  }
  loadAdFail(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_LOAD_FAILED, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  showAdFail(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_SHOW_FAILED, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  showingAd(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_SHOWING, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  formatEventName(rawName) {
    return rawName.toLowerCase().replace(/:/g, "_");
  }
  getLevelName(level2) {
    return `Level ${S2.padStart(level2.toString(), 5, "0")}`;
  }
  getPageTitle(pagePath) {
    const pageName = pagePath.split("/").pop();
    if (!V5.isString(pageName)) return pagePath;
    const pageTitle = pageName.replace(/([-_\s.])/g, " $1");
    return S2.toUpperCamelCase(pageTitle);
  }
  addGameModeToPageTitle(pageTitle) {
    const { match } = this.codex;
    const matchState = match.getMatchState();
    let { mode } = matchState;
    if (!mode) {
      mode = "Normal";
    }
    const modeTitle = S2.toUpperCamelCase(mode);
    return `${modeTitle}::${pageTitle}`;
  }
};
var Analytics_default = BaseAnalytics;

// extensions/ludex/src/plugins/analytics/AnalyticsPlugin.ts
Ludex.Plugins.Analytics = {
  Events: Events_default,
  BaseFunnel: BaseFunnel_default,
  BaseAnalytics: Analytics_default
};
var AnalyticsPlugin = class extends Ludex.Plugins.BasePlugin {
  analytics = [];
  placement = "unknown";
  funnels = [];
  constructor(codex2) {
    super(codex2);
    this.initFunnels();
  }
  add(analytic) {
    const index = this.analytics.findIndex((item) => item.name === analytic.name);
    if (index !== -1) {
      this.analytics[index] = analytic;
    } else {
      this.analytics.push(analytic);
    }
  }
  isActive() {
    return this.analytics.length >= 1;
  }
  initFunnels() {
    this.addFunnel(new LudexFunnel_default());
    this.addFunnel(new AdsenseFunnel_default());
    this.addFunnel(new PlatformAdsFunnel_default());
  }
  addFunnel(funnel) {
    this.funnels.push(funnel);
  }
  logFunnelEvent$(name2, payload) {
    for (const funnel of this.funnels) {
      funnel.addEvent(name2, payload);
    }
  }
  pageview = (key) => {
    if (!this.isActive()) return;
    this.placement = key;
    const path = this.getPageByKey(key);
    for (const analytic of this.analytics) {
      analytic.pageview(path);
    }
    this.logFunnelEvent$(Events_default.PAGE_VIEW);
  };
  event(name2, payload) {
    if (!this.isActive()) return;
    for (const analytic of this.analytics) {
      analytic.event(name2, payload);
    }
    this.logFunnelEvent$(name2, payload);
  }
  levelStart(level2, score2, mode) {
    if (!this.isActive()) return;
    for (const analytic of this.analytics) {
      analytic.levelStart(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_START, { score: score2, mode });
  }
  levelRescue(level2, score2, mode) {
    if (!this.isActive()) return;
    for (const analytic of this.analytics) {
      analytic.levelRescue(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_RESCUE, { score: score2, mode });
  }
  levelFail(level2, score2, mode) {
    if (!this.isActive()) return;
    for (const analytic of this.analytics) {
      analytic.levelFail(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_END, { score: score2, mode });
  }
  levelComplete(level2, score2, mode) {
    if (!this.isActive()) return;
    for (const analytic of this.analytics) {
      analytic.levelComplete(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_END, { score: score2, mode });
  }
  async initAdEvent(payload) {
    if (!this.isActive()) return;
    await this.codex.event.waitTo(Events_default.APP_READY);
    for (const analytic of this.analytics) {
      analytic.initAdEvent(payload);
    }
  }
  loadInterstitialAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.loadInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showInterstitialAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.showInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  loadRewardedVideoAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.loadRewardedVideoAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showRewardedVideoAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.showRewardedVideoAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  receiveVideoReward(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.receiveVideoReward(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_REWARD, payloadWithPage);
  }
  loadRewardedInterstitialAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.loadRewardedInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showRewardedInterstitialAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.showRewardedInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  receiveInterstitialReward(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.receiveInterstitialReward(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_REWARD, payloadWithPage);
  }
  loadAdFail(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.loadAdFail(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD_FAILED, payloadWithPage);
  }
  showAdFail(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.showAdFail(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW_FAILED, payloadWithPage);
  }
  showingAd(payload) {
    if (!this.isActive()) return;
    const payloadWithPage = __spreadProps(__spreadValues({}, payload), { placement: this.placement });
    for (const analytic of this.analytics) {
      analytic.showingAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOWING, payloadWithPage);
  }
  getPageByKey(key) {
    let page = key;
    if (page.indexOf("_") > -1) {
      let path = page.replace(/_/g, "-");
      path = path.toLowerCase();
      return path;
    }
    let i = page.length - 1;
    let character = "";
    while (i > 0) {
      character = page.charAt(i);
      const isNaNumber = isNaN(parseInt(character, 10));
      const isUpperCase = character === character.toUpperCase();
      if (isNaNumber && isUpperCase) {
        page = `${page.slice(0, i)}-${page.slice(i)}`;
      }
      i--;
    }
    return page.toLowerCase();
  }
};
var AnalyticsPlugin_default = AnalyticsPlugin;

// extensions/ludex/src/plugins/analytics/index.ts
var analytics_default = AnalyticsPlugin_default;

// extensions/ludex/src/plugins/audio/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/audio/AudioPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/audio/template/AudioPlayer.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BaseAudioPlayer = class {
  key;
  constructor(key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
};
var AudioPlayer_default = BaseAudioPlayer;

// extensions/ludex/src/plugins/audio/template/ChannelManager.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Decorator } = Ludex.Utils;
var BaseChannelManager = class {
  id;
  isMuteAll;
  masterVolume;
  audioClips;
  constructor(channelId) {
    this.id = channelId;
    this.masterVolume = 1;
    this.isMuteAll = false;
    this.audioClips = {};
  }
  getId() {
    return this.id;
  }
  getAudioClip(key) {
    const clip = this.audioClips[key];
    if (!clip) return null;
    return this.audioClips[key];
  }
  setAudioClip(key, audioClip) {
    this.audioClips[key] = __spreadValues(__spreadValues({}, this.audioClips[key]), audioClip);
  }
  async play(key, config) {
    const audioClip = this.getAudioClip(key);
    if (audioClip) {
      const { audioPlayer } = audioClip;
      this.playWithRealConfig(audioPlayer, config);
    } else {
      await this.loadAndPlay(key, config);
    }
  }
  async loadAndPlay(key, config) {
    const audioPlayer = await this.onLoadAudio(key, config);
    if (!audioPlayer) return;
    const { volume = 1 } = config || {};
    this.setAudioClip(key, {
      volume,
      audioPlayer
    });
    this.playWithRealConfig(audioPlayer, config);
  }
  playWithRealConfig(audioPlayer, config) {
    if (config) {
      const { volume = 1 } = config;
      config.volume = this.masterVolume * volume;
    }
    audioPlayer.play(config);
  }
  pause(key) {
    const audioClip = this.getAudioClip(key);
    if (!audioClip) return false;
    const { audioPlayer } = audioClip;
    audioPlayer.pause();
    return true;
  }
  resume(key) {
    const audioClip = this.getAudioClip(key);
    if (!audioClip) return false;
    const { audioPlayer } = audioClip;
    audioPlayer.resume();
    return true;
  }
  stop(key) {
    const audioClip = this.getAudioClip(key);
    if (!audioClip) return false;
    const { audioPlayer } = audioClip;
    audioPlayer.stop();
    return true;
  }
  stopAll() {
    this.callAudioPlayers("stop");
  }
  muteAll() {
    if (this.isMuteAll) return;
    this.isMuteAll = true;
    this.callAudioPlayers("mute");
  }
  unmuteAll() {
    if (!this.isMuteAll) return;
    this.isMuteAll = false;
    this.callAudioPlayers("unmute");
  }
  setVolume(value) {
    this.masterVolume = value;
    this.callAudioPlayers("setVolume");
  }
  getVolume() {
    return this.masterVolume;
  }
  queueAudioPlayer(clip, funcName) {
    try {
      const { audioPlayer, volume = 1 } = clip;
      switch (funcName) {
        case "play":
          audioPlayer.play();
          break;
        case "pause":
          audioPlayer.pause();
          break;
        case "resume":
          audioPlayer.resume();
          break;
        case "stop":
          audioPlayer.stop();
          break;
        case "mute":
          audioPlayer.setVolume(0);
          break;
        case "unmute":
        case "setVolume":
          audioPlayer.setVolume(this.masterVolume * volume);
          break;
        default:
          throw new Error(`Unsupported function: ${funcName}`);
      }
    } catch (error) {
      console.warn("queueAudioPlayer", error);
    }
  }
  callAudioPlayers(funcName) {
    const { Object: O36 } = Ludex.Utils;
    const audioClips = O36.vals(this.audioClips);
    for (const audioClip of audioClips) {
      this.queueAudioPlayer(audioClip, funcName);
    }
  }
};
__decorateClass([
  Decorator.tryCatch(),
  Decorator.validateParams("string")
], BaseChannelManager.prototype, "loadAndPlay", 1);
var ChannelManager_default = BaseChannelManager;

// extensions/ludex/src/plugins/audio/AudioPlugin.ts
Ludex.Plugins.Audio = {
  BaseAudioPlayer: AudioPlayer_default,
  // @ts-expect-error - pass for protected abstract class
  BaseChannelManager: ChannelManager_default
};
var { Decorator: Decorator2 } = Ludex.Utils;
var AudioPlugin = class extends Ludex.Plugins.BasePlugin {
  firstChannelId;
  channels = {};
  addChannel(channel) {
    const id = channel.getId();
    this.channels[id] = channel;
    if (!this.firstChannelId) {
      this.firstChannelId = id;
    }
  }
  getChannel(channelId) {
    if (channelId === void 0) {
      return this.channels[this.firstChannelId];
    }
    const channel = this.channels[channelId];
    if (!channel) {
      throw new Error(`Channel ${channelId} not found`);
    }
    return channel;
  }
  async play(key, config, channelId) {
    const channel = this.getChannel(channelId);
    await channel.play(key, config);
  }
  pause(key, channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.pause(key);
    } catch (error) {
      console.warn("pauseSound", error);
    }
  }
  resume(key, channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.resume(key);
    } catch (error) {
      console.warn("resumeSound", error);
    }
  }
  stop(key, channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.stop(key);
    } catch (error) {
      console.warn("stopSound", error);
    }
  }
  stopAll(channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.stopAll();
    } catch (error) {
      console.warn("stopAllSounds", error);
    }
  }
  mute(channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.muteAll();
    } catch (error) {
      console.warn("mute", error);
    }
  }
  unmute(channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.unmuteAll();
    } catch (error) {
      console.warn("unmute", error);
    }
  }
  setVolume(volume, channelId) {
    try {
      const channel = this.getChannel(channelId);
      channel.setVolume(volume);
    } catch (error) {
      console.warn("setSoundVolume", error);
    }
  }
  getVolume(channelId) {
    try {
      const channel = this.getChannel(channelId);
      return channel.getVolume();
    } catch (error) {
      console.warn("getSoundVolume", error);
      return -1;
    }
  }
};
__decorateClass([
  Decorator2.tryCatch(),
  Decorator2.validateParams("string")
], AudioPlugin.prototype, "play", 1);
var AudioPlugin_default = AudioPlugin;

// extensions/ludex/src/plugins/audio/index.ts
var audio_default = AudioPlugin_default;

// extensions/ludex/src/plugins/auth/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/auth/AuthPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/auth/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState2 = {
  token: "",
  isRequesting: false
};
var state_default2 = initState2;

// extensions/ludex/src/plugins/auth/AuthPlugin.ts
var {
  Utils: { Object: O5 }
} = Ludex;
var AuthPlugin = class extends Ludex.Plugins.BasePlugin {
  init() {
    const { storage } = this.codex;
    storage.addStorage("auth", state_default2);
  }
  async requestToken() {
    const { storage } = this.codex;
    try {
      const isRequesting = storage.getStorageData("auth", "isRequesting");
      if (isRequesting) return;
      const token = storage.getStorageData("auth", "token");
      if (token !== "") return;
      storage.setStorageData("auth", "isRequesting", true);
      const signedPlayerInfo = await GameSDK.player.getSignedPlayerInfoAsync();
      const signedPlayer = signedPlayerInfo.getSignature();
      storage.setStorageData("auth", "token", signedPlayer);
    } catch (error) {
      if (O5.hasOwn(error, "code")) {
        if (error.code === "PENDING_REQUEST") return;
      }
      storage.setStorageData("auth", "token", "");
    } finally {
      storage.setStorageData("auth", "isRequesting", false);
    }
  }
  getToken() {
    const { storage } = this.codex;
    return storage.getStorageData("auth", "token") ?? "";
  }
};
var AuthPlugin_default = AuthPlugin;

// extensions/ludex/src/plugins/auth/index.ts
var auth_default = AuthPlugin_default;

// extensions/ludex/src/plugins/context/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/context/ContextPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/context/constants/ContextTypes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextGameTypes = /* @__PURE__ */ ((ContextGameTypes2) => {
  ContextGameTypes2["SOLO"] = "solo";
  ContextGameTypes2["TOURNAMENT"] = "tournament";
  ContextGameTypes2["SHARE_INVITE"] = "share_invite";
  ContextGameTypes2["MATCHING_GROUP"] = "matching_group_match";
  ContextGameTypes2["CHALLENGE_FRIEND"] = "challenge_friend_match";
  return ContextGameTypes2;
})(ContextGameTypes || {});
var ContextTypes_default = ContextGameTypes;

// extensions/ludex/src/plugins/context/context.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/context/constants/ContextModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextGameModes = MatchModes_default2;
var ContextModes_default = ContextGameModes;

// extensions/ludex/src/plugins/context/context.ts
var {
  Configs,
  Utils: { Array: A3, Valid: V6, Browser: B }
} = Ludex;
var Context = class {
  codex;
  constructor(codex2) {
    this.codex = codex2;
  }
  isValidContextType(contextType2) {
    return ["THREAD", "POST", "SOLO", "GROUP"].indexOf(contextType2) >= 0;
  }
  isValidEntryPointData(entryPointData2) {
    return V6.isObject(entryPointData2);
  }
  isTournamentEntryPoint(entryPoint) {
    return A3.has(
      ["facebook~game_list~tournaments", "fb_feed_tournament_unit", "messenger~bot_thread~tournament\
s"],
      entryPoint
    );
  }
  receiveContext(contextId2, contextType2, entryPointData2) {
    const { storage } = this.codex;
    storage.setStorageData("context", "contextId", contextId2);
    if (this.isValidEntryPointData(entryPointData2)) {
      storage.setStorageData("context", "entryPointData", entryPointData2);
    } else {
      console.warn(`Invalid context type: ${contextType2}`);
    }
    if (this.isValidContextType(contextType2)) {
      storage.setStorageData("context", "contextType", contextType2);
    } else {
      console.warn(`Invalid context type: ${contextType2}`);
    }
  }
  async detectContextSessionType() {
    const { storage } = this.codex;
    const entryPointData2 = storage.getStorageData("context", "entryPointData");
    const { type } = entryPointData2 ?? {};
    const { SOLO, TOURNAMENT, MATCHING_GROUP, SHARE_INVITE, CHALLENGE_FRIEND } = ContextTypes_default;
    let sessionContextType = SOLO;
    if (type === TOURNAMENT) {
      sessionContextType = TOURNAMENT;
    }
    if (type === MATCHING_GROUP) {
      sessionContextType = MATCHING_GROUP;
    }
    if (type === CHALLENGE_FRIEND || type === SHARE_INVITE) {
      sessionContextType = CHALLENGE_FRIEND;
    }
    if (sessionContextType === SOLO) {
      if (Configs.Core.FastCheckTournamentContext) {
        sessionContextType = this.fastCheckTournamentContext() || sessionContextType;
      } else {
        sessionContextType = await this.outdatedCheckTournamentContext() || sessionContextType;
      }
    }
    storage.setStorageData("context", "sessionContextType", sessionContextType);
  }
  // ? This is a trick to detect if the user is in a tournament
  fastCheckTournamentContext() {
    const params = B.getQueryParams();
    const entryPoint = params.entry_point;
    if (typeof entryPoint !== "string") return false;
    if (!this.isTournamentEntryPoint(entryPoint)) return false;
    return ContextTypes_default.TOURNAMENT;
  }
  async outdatedCheckTournamentContext() {
    const { storage } = this.codex;
    if (!("getTournamentAsync" in GameSDK)) return false;
    try {
      const tournament = await GameSDK.getTournamentAsync();
      storage.setStorageData("context", "contextId", tournament.getContextID());
      if (tournament.getEndTime() > Date.now() / 1e3) {
        return ContextTypes_default.TOURNAMENT;
      }
      return false;
    } catch (error) {
      console.warn("outdatedCheckTournamentContext", error);
      return false;
    }
  }
  detectContextGameMode() {
    const { player, storage } = this.codex;
    const entryPointData2 = storage.getStorageData("context", "entryPointData");
    const contextSessionType = storage.getStorageData("context", "sessionContextType");
    const currentPlayerId = player.getPlayerId();
    const { matchId, playerId: playerId2, opponentId = SampleOpponent_default.playerId } = entryPointData2 ??
    {};
    const isPlayer = currentPlayerId === playerId2;
    const isNewOpponent = opponentId === SampleOpponent_default.playerId;
    const isOwnerContext = isNewOpponent || [opponentId, playerId2].indexOf(currentPlayerId) >= 0;
    const { TOURNAMENT, MATCHING_GROUP, SHARE_INVITE, CHALLENGE_FRIEND } = ContextTypes_default;
    let contextGameMode = ContextModes_default.SINGLE;
    if (contextSessionType === TOURNAMENT) {
      contextGameMode = ContextModes_default.TOURNAMENT;
    }
    if (contextSessionType === SHARE_INVITE && !isPlayer) {
      contextGameMode = ContextModes_default.CHALLENGE_FRIEND;
    }
    if (contextSessionType === CHALLENGE_FRIEND && matchId && isOwnerContext) {
      contextGameMode = ContextModes_default.CHALLENGE_FRIEND;
    }
    if (contextSessionType === MATCHING_GROUP) {
      contextGameMode = ContextModes_default.MATCHING_GROUP;
    }
    storage.setStorageData("context", "contextGameMode", contextGameMode);
  }
};
var context_default = Context;

// extensions/ludex/src/plugins/context/loader.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/PlayerHasFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlayerHasFinishedMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerHasFinishedMatch";
    this.message = message ?? "Player has finished match";
  }
};
var PlayerHasFinishedMatch_default = PlayerHasFinishedMatch;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotJoinInMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlayerNotJoinInMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotJoinInMatch";
    this.message = message || "Player is not join in match";
  }
};
var PlayerNotJoinInMatch_default = PlayerNotJoinInMatch;

// extensions/ludex/src/plugins/context/loader.ts
var {
  Events: Events2,
  Plugins: { Analytics },
  Utils: { Valid: V7 }
} = Ludex;
var Loader = class {
  codex;
  constructor(codex2) {
    this.codex = codex2;
  }
  async processContextData() {
    const { player, storage, monitorError } = this.codex;
    const contextId2 = storage.getStorageData("context", "contextId") ?? "";
    const entryPointData2 = storage.getStorageData("context", "entryPointData") ?? {};
    const contextSessionType = storage.getStorageData("context", "sessionContextType") ?? "";
    const { type, matchId, playerId: playerId2, opponentId, playerScore, action } = entryPointData2;
    if (action) {
      await this.processEntryPointAction(action);
    }
    const isFirstSession = player.isFirstSession();
    setTimeout(() => {
      this.logUserAnalytics(isFirstSession);
    }, 1e3);
    const { TOURNAMENT, SHARE_INVITE, MATCHING_GROUP, CHALLENGE_FRIEND } = ContextTypes_default;
    if (contextSessionType === TOURNAMENT) {
      try {
        await this.processTournamentModeAsync(contextId2);
        return;
      } catch (error) {
        monitorError?.sendException(new Error("Process Tournament Fail"), {
          contextId: contextId2,
          isFirstSession,
          entryPointData: entryPointData2,
          playerData: player.getPlayerData()
        });
      }
    }
    if (contextSessionType === CHALLENGE_FRIEND) {
      if (type === SHARE_INVITE && typeof playerId2 === "string") {
        await this.processChallengeFromPostAsync(playerId2);
        return;
      }
      if (type === CHALLENGE_FRIEND && typeof matchId === "string" && typeof playerId2 === "string" &&
      typeof opponentId === "string") {
        await this.processChallengeFromMessageAsync({
          contextId: contextId2,
          matchId,
          playerId: playerId2,
          opponentId
        });
        return;
      }
    }
    if (contextSessionType === MATCHING_GROUP && typeof playerId2 === "string" && typeof playerScore ===
    "number") {
      await this.processMatchingGroupModeAsync(playerId2, playerScore);
      return;
    }
    if (isFirstSession) {
      await this.processSingleModeAsync(true);
      player.loggedIn();
      return;
    }
    this.switchToDashboardScene();
  }
  logUserAnalytics(isFirstSession) {
    try {
      const { player, analytics } = this.codex;
      if (isFirstSession) {
        analytics.event(Analytics.Events.NEW_USER);
      } else {
        const { coins: coins2 } = player.getPlayerData().gameData;
        analytics.event(Analytics.Events.RETURNING_USER, { coins: coins2 });
      }
    } catch (_) {
    }
  }
  async processEntryPointAction(action) {
    try {
      const { player } = this.codex;
      switch (action) {
        case "reset_data":
          player.setPlayerDataByName("score", 0);
          player.setGameData({
            coins: 0,
            level: 1
          });
          await player.syncProfileToServer();
          break;
        case "enable_debug":
          player.setPlayerDataByName("debug", true);
          break;
        case "set_locale_en":
          this.requestSetLocale("en");
          break;
        case "set_locale_ru":
          this.requestSetLocale("ru");
          break;
      }
    } catch (error) {
      console.warn("processEntryPointAction", error);
    }
  }
  requestSetLocale(locale2) {
    const { event } = this.codex;
    event.emit(Events2.REQUEST_LANGUAGE, {
      locale: locale2
    });
  }
  async processTournamentModeAsync(contextId2) {
    const { match, player } = this.codex;
    const playerId2 = player.getPlayerId();
    if (V7.isEmpty(contextId2)) {
      throw new Error("Cannot get contextId");
    }
    await match.tournament.continue.processAsync({ playerId: playerId2, contextId: contextId2 });
    this.switchToGameScene();
  }
  async processChallengeFromPostAsync(opponentId) {
    const { match, player } = this.codex;
    const playerId2 = player.getPlayerId();
    const isCurrentPlayer = playerId2 === opponentId;
    if (isCurrentPlayer) {
      await match.single.start.processAsync({ playerId: playerId2 });
    } else {
      try {
        await match.challenge.friend.processAsync({ playerId: playerId2, opponentId });
      } catch (error) {
        console.warn("processChallengeFromPostAsync", error);
        await match.single.start.processAsync({ playerId: playerId2 });
      }
    }
    this.switchToGameScene();
  }
  async processChallengeFromMessageAsync(payload) {
    try {
      await this.processContinueChallengeFromMessageAsync(payload);
    } catch (error) {
      console.warn("processContinueChallengeFromMessageAsync", error);
      if (error instanceof PlayerHasFinishedMatch_default) {
        await this.processAwaitChallengeFromMessageAsync(payload);
        return;
      }
      if (error instanceof PlayerNotJoinInMatch_default) {
        await this.processJoinChallengeFromMessageAsync(payload);
        return;
      }
      this.switchToDashboardScene();
    }
  }
  async processContinueChallengeFromMessageAsync(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId, opponentId: receiverId } = payload;
    const { match, player } = this.codex;
    const curPlayerId = player.getPlayerId();
    const isInviterPlayer = inviterId === curPlayerId;
    if (isInviterPlayer) {
      await match.challenge.continue.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        opponentId: receiverId
      });
    } else {
      const isSampleOpponent = receiverId === SampleOpponent_default.playerId;
      await match.challenge.continue.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        // ? If SampleOpponent and not challenger, inviterId will be opponentId
        opponentId: isSampleOpponent ? receiverId : inviterId
      });
    }
    this.switchToGameScene();
  }
  async processJoinChallengeFromMessageAsync(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex;
    const curPlayerId = player.getPlayerId();
    await match.challenge.join.processAsync({
      contextId: contextId2,
      matchId,
      playerId: curPlayerId,
      opponentId: inviterId
    });
    this.switchToGameScene();
  }
  async processAwaitChallengeFromMessageAsync(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex;
    const curPlayerId = player.getPlayerId();
    try {
      await match.challenge.await.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        opponentId: inviterId
      });
      this.switchToChallengeResultScene();
    } catch (error) {
      console.warn("processAwaitChallengeFromMessageAsync", error);
      await this.processResultChallengeFromMessageAsync(payload);
    }
  }
  async processResultChallengeFromMessageAsync(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex;
    const curPlayerId = player.getPlayerId();
    try {
      await match.challenge.result.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        opponentId: inviterId
      });
      this.switchToChallengeResultScene();
    } catch (error) {
      this.switchToDashboardScene();
    }
  }
  async processMatchingGroupModeAsync(opponentId, opponentScore) {
    const { match, player } = this.codex;
    await match.group.join.processAsync({
      playerId: player.getPlayerId(),
      opponentId,
      opponentScore
    });
    this.switchToGameScene();
  }
  async processSingleModeAsync(isFirstSession) {
    const { match, player } = this.codex;
    const playerId2 = player.getPlayerId();
    if (isFirstSession) {
      await match.handler.setMatchCustomData({ playerId: playerId2, contextId: "SOLO" });
    }
    await match.single.start.processAsync({ playerId: playerId2 });
    this.switchToGameScene();
  }
  switchToDashboardScene() {
    const { event } = this.codex;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "DashboardScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
  switchToGameScene() {
    const { event } = this.codex;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "GameScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
  switchToChallengeResultScene() {
    const { event } = this.codex;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "ChallengeResultScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
};
var loader_default = Loader;

// extensions/ludex/src/plugins/context/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState3 = {
  processed: false,
  contextId: "",
  contextType: "SOLO",
  entryPointData: {},
  contextGameMode: "",
  sessionContextType: ""
};
var state_default3 = initState3;

// extensions/ludex/src/plugins/context/ContextPlugin.ts
var { Events: Events3 } = Ludex;
var ContextPlugin = class extends Ludex.Plugins.BasePlugin {
  context;
  loader;
  constructor(game) {
    super(game);
    this.loader = new loader_default(game);
    this.context = new context_default(game);
  }
  init() {
    const { storage } = this.codex;
    storage.addStorage("context", state_default3);
  }
  getSessionContextTypes() {
    return ContextTypes_default;
  }
  async processContextData() {
    const { event, monitorError } = this.codex;
    try {
      const isEventEmitted = event.getEventEmitCount(Events3.CONTEXT_SESSION_TYPE_DETECTED) > 0;
      if (!isEventEmitted) {
        await event.waitTo(Events3.CONTEXT_SESSION_TYPE_DETECTED, 3e3);
      }
      await this.loader.processContextData();
      event.emit(Events3.CONTEXT_DATA_PROCESSED);
    } catch (error) {
      console.debug("processContextData", error);
      this.switchToDashboardScene();
      if (monitorError) {
        const err = error instanceof Error ? error : new Error(JSON.stringify(error));
        monitorError.sendException(err);
      }
    }
  }
  async detectContextSessionType() {
    const { event, monitorError } = this.codex;
    try {
      await this.context.detectContextSessionType();
      event.emit(Events3.CONTEXT_SESSION_TYPE_DETECTED);
    } catch (error) {
      console.debug("detectContextSessionType", error);
      if (monitorError) {
        const err = error instanceof Error ? error : new Error(JSON.stringify(error));
        monitorError.sendException(err);
      }
    }
  }
  detectContextGameMode() {
    this.context.detectContextGameMode();
  }
  receiveContext(contextId2, contextType2, entryPointData2) {
    this.context.receiveContext(contextId2, contextType2, entryPointData2);
  }
  switchToDashboardScene() {
    const { event } = this.codex;
    event.emit(Events3.SWITCH_SCENE, { sceneName: "DashboardScene" });
  }
};
var ContextPlugin_default = ContextPlugin;

// extensions/ludex/src/plugins/context/dtos/ContextInfo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V8 } = Ludex.Utils;
var { contextId, contextType, entryPointData } = state_default3;
var MESSAGE_INVALID3 = "is invalid";
var ContextInfoDtos = class extends BaseDtos_default {
  data;
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateContextId(contextId2) {
    if (!V8.isString(contextId2)) {
      this.exception$("contextId", MESSAGE_INVALID3);
    }
  }
  validateContextType(contextType2) {
    if (!V8.isString(contextType2) || !contextType2) {
      this.exception$("contextType", MESSAGE_INVALID3);
    }
  }
  validateEntryPointData(entryPointData2) {
    if (!V8.isObject(entryPointData2)) {
      this.exception$("entryPointData", MESSAGE_INVALID3);
    }
  }
  toObject() {
    return super.toObject();
  }
};
ContextInfoDtos.addDefaultData({
  contextId,
  contextType,
  entryPointData
});
var ContextInfo_default = ContextInfoDtos;

// extensions/ludex/src/plugins/context/index.ts
Ludex.Dtos.Context = {
  Info: ContextInfo_default
};
var context_default2 = ContextPlugin_default;

// extensions/ludex/src/plugins/daily-rewards/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/daily-rewards/DailyRewardsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/daily-rewards/api/DailyRewardsAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/daily-rewards/constants/DefaultDailyRewards.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultDailyRewards = {
  0: {
    id: 1,
    type: "coin",
    value: 300
  },
  1: {
    id: 2,
    type: "coin",
    value: 500
  },
  2: {
    id: 3,
    type: "coin",
    value: 1e3
  },
  3: {
    id: 4,
    type: "coin",
    value: 2e3
  },
  4: {
    id: 5,
    type: "coin",
    value: 3e3
  },
  5: {
    id: 6,
    type: "coin",
    value: 5e3
  },
  6: {
    id: 7,
    type: "coin",
    value: 1e3
  }
};
var DefaultDailyRewards_default = DefaultDailyRewards;

// extensions/ludex/src/plugins/daily-rewards/api/DailyRewardsAPI.ts
var { Object: O6 } = Ludex.Utils;
var DailyRewardsAPI = class {
  async getDailyRewardsAsync() {
    const result3 = O6.vals(DefaultDailyRewards_default);
    return result3;
  }
};
var DailyRewardsAPI_default = DailyRewardsAPI;

// extensions/ludex/src/plugins/daily-rewards/constants/DailyRewardsStatus.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DAY_STATUS = {
  REWARDED: "rewarded",
  SKIPPED: "skipped",
  READY: "ready",
  WAITING: "waiting"
};
var DailyRewardsStatus_default = DAY_STATUS;

// extensions/ludex/src/plugins/daily-rewards/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState4 = {
  dailyRewards: {}
};
var state_default4 = initState4;

// extensions/ludex/src/plugins/daily-rewards/DailyRewardsPlugin.ts
var {
  Configs: {
    DailyRewards: { CheckInterrupt, MaxDays, MockTime }
  },
  Utils: { Array: A4, Valid: V9 }
} = Ludex;
var DAY_LENGTH = MockTime > 0 ? MockTime : 864e5;
var DailyRewardsPlugin = class extends Ludex.Plugins.BasePlugin {
  dailyRewardsApi = new DailyRewardsAPI_default();
  init() {
    const { storage } = this.codex;
    storage.addStorage("dailyRewards", state_default4);
  }
  async requestDailyRewardsAsync() {
    const rewardsFromApi = await this.dailyRewardsApi.getDailyRewardsAsync();
    const { logs, rewards } = this.parseDailyRewards(rewardsFromApi);
    this.setRewardsLog(logs);
    this.setDailyRewards(rewards);
  }
  getDailyRewards() {
    const { storage } = this.codex;
    const dailyRewards = storage.getStorageData("dailyRewards", "dailyRewards");
    if (!dailyRewards) return null;
    return dailyRewards;
  }
  logLoginReward() {
    if (CheckInterrupt) {
      this.logFromFirstReward();
    } else {
      this.logFromLastReward();
    }
  }
  logFromFirstReward() {
    const { player } = this.codex;
    const { dailyRewardedData: dailyRewardedData2 } = player.getPlayerData();
    if (!V9.isObject(dailyRewardedData2)) return;
    const { logDays, firstReward } = dailyRewardedData2;
    const now = /* @__PURE__ */ new Date();
    const correctLogDays = [...logDays];
    if (firstReward === 0) {
      correctLogDays[0] = true;
      if (!V9.isDebugger()) now.setHours(0, 0, 0, 0);
      this.setRewardsLog({
        logDays: correctLogDays,
        firstReward: now.valueOf(),
        lastReward: now.valueOf()
      });
      return;
    }
    const timePassed = now.valueOf() - firstReward;
    const daysPassed = Math.floor(timePassed / DAY_LENGTH);
    if (daysPassed >= MaxDays || daysPassed >= logDays.length) return;
    correctLogDays[daysPassed] = true;
    if (!V9.isDebugger()) now.setHours(0, 0, 0, 0);
    this.setRewardsLog({ logDays: correctLogDays, lastReward: now.valueOf() });
  }
  logFromLastReward() {
    const { player } = this.codex;
    const { dailyRewardedData: dailyRewardedData2 } = player.getPlayerData();
    if (!V9.isObject(dailyRewardedData2)) return;
    const { logDays, lastReward } = dailyRewardedData2;
    const now = /* @__PURE__ */ new Date();
    const correctLogDays = [...logDays];
    if (lastReward === 0) {
      correctLogDays[0] = true;
      if (!V9.isDebugger()) now.setHours(0, 0, 0, 0);
      this.setRewardsLog({
        logDays: correctLogDays,
        firstReward: now.valueOf(),
        lastReward: now.valueOf()
      });
      return;
    }
    const timePassed = now.valueOf() - lastReward;
    const daysPassed = Math.floor(timePassed / DAY_LENGTH);
    if (daysPassed < 1) return;
    const firstWaitingReward = A4.searchIndex(correctLogDays, (i) => i === false);
    if (firstWaitingReward === void 0) return;
    correctLogDays[firstWaitingReward] = true;
    if (!V9.isDebugger()) now.setHours(0, 0, 0, 0);
    this.setRewardsLog({ logDays: correctLogDays, lastReward: now.valueOf() });
  }
  setRewardsLog(config) {
    const { logDays, firstReward, lastReward } = config;
    const { player } = this.codex;
    const { dailyRewardedData: dailyRewardedData2 } = player.getPlayerData();
    if (!V9.isObject(dailyRewardedData2)) return;
    if (this.isSameLog(dailyRewardedData2, config)) return;
    player.setPlayerDataByName("dailyRewardedData", {
      logDays: logDays !== void 0 ? [...logDays] : [...dailyRewardedData2.logDays],
      firstReward: firstReward ?? dailyRewardedData2.firstReward,
      lastReward: lastReward ?? dailyRewardedData2.lastReward
    });
  }
  isSameLog(oldConfig, config) {
    if (config.firstReward !== void 0 && oldConfig.firstReward !== config.firstReward) return false;
    if (config.lastReward !== void 0 && oldConfig.lastReward !== config.lastReward) return false;
    if (config.logDays !== void 0) {
      if (oldConfig.logDays.length !== config.logDays.length) return false;
      for (let index = 0; index < config.logDays.length; index++) {
        if (oldConfig.logDays[index] !== config.logDays[index]) return false;
      }
    }
    return true;
  }
  parseDailyRewards(rewardsData) {
    const { player } = this.codex;
    const { dailyRewardedData: dailyRewardedData2 } = player.getPlayerData();
    const { logDays, firstReward, lastReward } = dailyRewardedData2 ?? {};
    if (logDays === void 0 || firstReward === void 0 || firstReward === 0 || lastReward === void 0 ||
    lastReward === 0 || logDays.length !== rewardsData.length) {
      const defaultData = this.getDefaultDailyRewards(rewardsData);
      return {
        logs: {
          logDays: defaultData.logDays,
          firstReward: 0,
          lastReward: 0
        },
        rewards: defaultData.rewards
      };
    }
    if (CheckInterrupt) {
      return this.parseFromFirstReward(rewardsData, logDays, firstReward, lastReward);
    }
    return this.parseFromLastReward(rewardsData, logDays, firstReward, lastReward);
  }
  parseFromFirstReward(rewardsData, logDays, firstReward, lastReward) {
    const now = Date.now();
    const timePassed = now - firstReward;
    if (timePassed < 0) {
      const defaultData = this.getDefaultDailyRewards(rewardsData);
      return {
        logs: {
          logDays: defaultData.logDays,
          firstReward: 0,
          lastReward: 0
        },
        rewards: defaultData.rewards
      };
    }
    const daysPassed = Math.floor(timePassed / DAY_LENGTH);
    const isOverMaxDays = daysPassed >= MaxDays || daysPassed >= logDays.length;
    const hasSkippedDays = A4.search(logDays.slice(0, daysPassed), (i) => i === false) !== void 0;
    const isReset = isOverMaxDays || hasSkippedDays;
    if (isReset) {
      const defaultData = this.getDefaultDailyRewards(rewardsData);
      return {
        logs: {
          logDays: defaultData.logDays,
          firstReward: 0,
          lastReward
        },
        rewards: defaultData.rewards
      };
    }
    const parsedLogDays = [];
    const rewards = {};
    for (let index = 0; index < rewardsData.length; index++) {
      const reward = rewardsData[index];
      const isInTheFuture = parsedLogDays.length > daysPassed;
      const isToday = parsedLogDays.length === daysPassed;
      const logged = logDays[index];
      if (isInTheFuture) {
        parsedLogDays.push(false);
        rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
          status: DailyRewardsStatus_default.WAITING
        });
        continue;
      }
      parsedLogDays.push(logged);
      if (isToday) {
        rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
          status: logged ? DailyRewardsStatus_default.REWARDED : DailyRewardsStatus_default.READY
        });
        continue;
      }
      rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
        status: logged ? DailyRewardsStatus_default.REWARDED : DailyRewardsStatus_default.SKIPPED
      });
    }
    return {
      logs: {
        logDays: parsedLogDays,
        firstReward,
        lastReward
      },
      rewards
    };
  }
  parseFromLastReward(rewardsData, logDays, firstReward, lastReward) {
    const now = Date.now();
    const timePassed = now - lastReward;
    if (timePassed < 0) {
      const defaultData = this.getDefaultDailyRewards(rewardsData);
      return {
        logs: {
          logDays: defaultData.logDays,
          firstReward: 0,
          lastReward: 0
        },
        rewards: defaultData.rewards
      };
    }
    const daysPassed = Math.floor(timePassed / DAY_LENGTH);
    const passedAtLeastOneDay = daysPassed >= 1;
    const firstWaitingReward = A4.searchIndex(logDays, (i) => i === false);
    const isReset = firstWaitingReward === -1 && passedAtLeastOneDay;
    if (isReset) {
      const defaultData = this.getDefaultDailyRewards(rewardsData);
      defaultData.rewards[rewardsData[0].id].status = passedAtLeastOneDay ? DailyRewardsStatus_default.
      READY : DailyRewardsStatus_default.WAITING;
      return {
        logs: {
          logDays: defaultData.logDays,
          firstReward: 0,
          lastReward
        },
        rewards: defaultData.rewards
      };
    }
    const parsedLogDays = [];
    const rewards = {};
    for (let index = 0, len = rewardsData.length; index < len; index++) {
      const reward = rewardsData[index];
      const isInTheFuture = firstWaitingReward !== -1 && index > firstWaitingReward;
      const isToday = index === firstWaitingReward;
      if (isInTheFuture) {
        parsedLogDays.push(false);
        rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
          status: DailyRewardsStatus_default.WAITING
        });
        continue;
      }
      if (isToday) {
        parsedLogDays.push(false);
        rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
          status: passedAtLeastOneDay ? DailyRewardsStatus_default.READY : DailyRewardsStatus_default.
          WAITING
        });
        continue;
      }
      parsedLogDays.push(true);
      rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
        status: DailyRewardsStatus_default.REWARDED
      });
    }
    return {
      logs: {
        logDays: parsedLogDays,
        firstReward,
        lastReward
      },
      rewards
    };
  }
  getDefaultDailyRewards(rewardsData) {
    const logDays = [];
    const rewards = {};
    for (const reward of rewardsData) {
      logDays.push(false);
      rewards[reward.id] = __spreadProps(__spreadValues({}, reward), {
        status: DailyRewardsStatus_default.WAITING
      });
    }
    rewards[rewardsData[0].id].status = DailyRewardsStatus_default.READY;
    return {
      logDays,
      rewards
    };
  }
  setDailyRewards(data) {
    const { storage } = this.codex;
    storage.setStorageData("dailyRewards", "dailyRewards", data);
  }
};
var DailyRewardsPlugin_default = DailyRewardsPlugin;

// extensions/ludex/src/plugins/daily-rewards/index.ts
var daily_rewards_default = DailyRewardsPlugin_default;

// extensions/ludex/src/plugins/event/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/event/EventPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/event/emitter.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// node_modules/eventemitter3/index.mjs
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// extensions/ludex/src/plugins/event/emitter.ts
var Emitter = new eventemitter3_default();
var emitter_default = Emitter;

// extensions/ludex/src/plugins/event/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState5 = {
  names: [],
  history: []
};
var state_default5 = initState5;

// extensions/ludex/src/plugins/event/EventPlugin.ts
var {
  Utils: { Decorator: Decorator3 }
} = Ludex;
var EventPlugin = class extends Ludex.Plugins.BasePlugin {
  enableLog = false;
  muteEvents = [];
  init() {
    const { storage } = this.codex;
    storage.addStorage("event", state_default5);
  }
  enableLogEvent() {
    this.enableLog = true;
  }
  on(event, callback) {
    this.addEventName(event);
    this.addHistory(event, "on", "listening");
    emitter_default.on(event, callback);
  }
  once(event, callback) {
    this.addEventName(event);
    this.addHistory(event, "once", "listening");
    emitter_default.once(event, callback);
  }
  waitTo(event, timeout) {
    return new Promise((resolve, reject) => {
      let timeoutId;
      const callback = (payload) => {
        clearTimeout(timeoutId);
        resolve(payload);
      };
      this.once(event, callback);
      if (timeout && timeout > 0) {
        timeoutId = setTimeout(() => {
          this.off(event, callback);
          reject(new Error(`Event ${event} timeout`));
        }, timeout);
      }
    });
  }
  catchUp(event, callback) {
    this.once(event, callback);
    const isCalled = this.getEventEmitCount(event) > 0;
    if (!isCalled) return;
    const { payload } = this.getLastEventInfo(event) ?? {};
    this.emit(event, payload);
  }
  off(event, callback) {
    emitter_default.off(event, callback);
    this.addHistory(event, "action", "removed");
  }
  mute(event) {
    if (this.muteEvents.indexOf(event) > -1) return;
    this.muteEvents.push(event);
  }
  clear(event) {
    emitter_default.removeAllListeners(event);
    this.addHistory(event, "action", "removed");
  }
  emit(event, payload) {
    if (this.muteEvents.indexOf(event) > -1) return;
    let args = [];
    if (payload) {
      args = [payload];
    }
    this.addHistory(event, "action", "called", payload);
    emitter_default.emit(event, ...args);
  }
  addEventName(event) {
    const { storage } = this.codex;
    const names2 = storage.getStorageData("event", "names");
    if (!names2) return;
    if (names2.indexOf(event) < 0) {
      names2.push(event);
    }
  }
  limitHistory(history) {
    const limit = 1e4;
    if (history.length <= limit) return history;
    const {
      Utils: { Array: A11 }
    } = Ludex;
    return A11.limit(history, limit);
  }
  getEventListeners(event) {
    const history = this.getHistory();
    return history.filter((item) => {
      return item.name === event && item.status === "listening";
    }).map((item) => {
      return item.name;
    });
  }
  getHistory() {
    const { storage } = this.codex;
    const history = storage.getStorageData("event", "history") ?? [];
    return this.limitHistory(history);
  }
  getEventEmitCount(event) {
    const history = this.getHistory();
    return history.filter((item) => {
      return item.name === event && item.status === "called";
    }).length;
  }
  getLastEventInfo(event) {
    const history = this.getHistory();
    let eventInfo = null;
    for (let i = history.length - 1; i >= 0; i--) {
      if (history[i].name === event) {
        eventInfo = history[i];
        break;
      }
    }
    return eventInfo;
  }
  getTypeFromHistory(event) {
    const lastEvent = this.getLastEventInfo(event);
    return lastEvent?.type ?? null;
  }
  getCallsFromHistory(event) {
    const lastEvent = this.getLastEventInfo(event);
    return lastEvent?.called ?? 0;
  }
  addHistory(event, type, status, payload) {
    const typeFromHistory = this.getTypeFromHistory(event);
    const correctType = typeFromHistory ?? type;
    const currentCalled = this.getCallsFromHistory(event);
    const correctCalled = status === "called" ? currentCalled + 1 : currentCalled;
    const history = this.getHistory();
    history.push({
      type: correctType,
      status,
      name: event,
      called: correctCalled,
      payload: payload ?? {}
    });
    this.logEventInfo(event, correctType, status, correctCalled);
  }
  logEventInfo(event, type, status, called) {
    if (!this.enableLog) return;
    if (status === "listening") {
      console.debug(`Event (${type}) ${event}: ${status}`);
      const listenerCount = emitter_default.listenerCount(event);
      if (listenerCount > 1) {
        console.warn(`Event ${event} has ${listenerCount} listener`);
      }
    } else if (type !== "action") {
      console.debug(`Event (${type}) ${event}: ${status} (${called} times)`);
    }
    if (status === "called") {
      const listenerCount = emitter_default.listenerCount(event);
      if (listenerCount <= 0) {
        console.warn(`Event ${event} is called but not listening`);
      }
    }
  }
};
__decorateClass([
  Decorator3.validateParams("string", "function")
], EventPlugin.prototype, "on", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], EventPlugin.prototype, "once", 1);
__decorateClass([
  Decorator3.validateParams("string")
], EventPlugin.prototype, "waitTo", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], EventPlugin.prototype, "catchUp", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], EventPlugin.prototype, "off", 1);
__decorateClass([
  Decorator3.validateParams("string")
], EventPlugin.prototype, "mute", 1);
__decorateClass([
  Decorator3.validateParams("string")
], EventPlugin.prototype, "clear", 1);
__decorateClass([
  Decorator3.validateParams("string")
], EventPlugin.prototype, "emit", 1);
var EventPlugin_default = EventPlugin;

// extensions/ludex/src/plugins/event/index.ts
var event_default = EventPlugin_default;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/frame-capture/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/frame-capture/FrameCapturePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/frame-capture/constants/font.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var FONT_SYS_FAMILY = `nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Canta\
rell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif`;

// extensions/ludex/src/plugins/frame-capture/wideframes/renderResultChallenge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: {
    FrameCapture: { Enabled, WideframeConfigs }
  },
  Utils: { Object: O7 }
} = Ludex;
var renderResultChallenge = async (payload) => {
  if (!Enabled) {
    console.warn("FrameCapture is not enabled");
    return null;
  }
  const renderOptions = getRenderOptions(payload);
  if (!renderOptions) return null;
  addWideframe(renderOptions, WideframeConfigs.ResultChallenge);
  const { frameCapture } = codex;
  const { Width, Height } = WideframeConfigs.ResultChallenge;
  return frameCapture.captureAsync({
    name: "ResultChallenge",
    width: Width,
    height: Height,
    renderOptions
  });
};
var addWideframe = (renderOptions, wideframe) => {
  const { Width, Height, Wideframe } = wideframe;
  renderOptions.wideframe = {
    name: "result-challenge",
    type: "image",
    depth: 0,
    image: Wideframe,
    size: [Width, Height],
    position: [0, 0]
  };
};
var getRenderOptions = (payload) => {
  try {
    const {
      playerId: playerId2 = "10",
      playerPhoto = "",
      playerScore = 0,
      opponentId = "20",
      opponentPhoto = "",
      opponentScore = 0,
      isPlayerFinished,
      isOpponentFinished
    } = payload;
    const { RenderOptions } = WideframeConfigs.ResultChallenge;
    const renderOptionsClone = O7.clone(RenderOptions);
    if (!renderOptionsClone) return null;
    const renderOptionsCleared = O7.clear(renderOptionsClone);
    const renderOptions = O7.camelCaseKeys(renderOptionsCleared);
    const { playerPhoto: playerPhotoRender, opponentPhoto: opponentPhotoRender } = renderOptions;
    const isDraw = playerScore === opponentScore;
    const isPlayerWin = playerScore > opponentScore;
    const isGameWaiting = isPlayerFinished ?? isOpponentFinished;
    const isGameFinished = isPlayerFinished && isOpponentFinished;
    if (playerPhotoRender.type === "image") {
      playerPhotoRender.name = `${playerId2}`;
      playerPhotoRender.image = playerPhoto;
    }
    if (opponentPhotoRender.type === "image") {
      opponentPhotoRender.name = `${opponentId}`;
      opponentPhotoRender.image = opponentPhoto;
    }
    if (isGameWaiting) {
      addRenderScores(renderOptions, {
        playerScore,
        opponentScore,
        isPlayerFinished,
        isOpponentFinished
      });
    } else {
      delete renderOptions.leftScore;
      delete renderOptions.rightScore;
    }
    if (!isGameFinished || isDraw) {
      delete renderOptions.leftCrown;
      delete renderOptions.rightCrown;
      return renderOptions;
    }
    if (isPlayerWin) {
      delete renderOptions.rightCrown;
    } else {
      delete renderOptions.leftCrown;
    }
    return renderOptions;
  } catch (error) {
    console.warn("getRenderOptionsShareScore", error);
    return null;
  }
};
var addRenderScores = (renderOptions, payload) => {
  const { leftScore, rightScore } = renderOptions;
  const { playerScore = 0, opponentScore = 0, isPlayerFinished, isOpponentFinished } = payload;
  if (leftScore?.type === "text") {
    leftScore.text = isPlayerFinished ? `${playerScore}` : "???";
  }
  if (rightScore?.type === "text") {
    rightScore.text = isOpponentFinished ? `${opponentScore}` : "???";
  }
};
var renderResultChallenge_default = renderResultChallenge;

// extensions/ludex/src/plugins/frame-capture/wideframes/renderShareLeaderboard.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: {
    FrameCapture: { Enabled: Enabled2, WideframeConfigs: WideframeConfigs2 }
  },
  Utils: { Object: O8 }
} = Ludex;
var renderShareLeaderboard = async (payload) => {
  if (!Enabled2) {
    console.warn("FrameCapture is not enabled");
    return null;
  }
  const renderOptions = getRenderOptions2(payload);
  if (!renderOptions) return null;
  addWideframe2(renderOptions, WideframeConfigs2.ShareLeaderboard);
  const { frameCapture } = codex;
  const { Width, Height } = WideframeConfigs2.ShareLeaderboard;
  return frameCapture.captureAsync({
    name: "ShareLeaderboard",
    width: Width,
    height: Height,
    renderOptions
  });
};
var addWideframe2 = (renderOptions, wideframe) => {
  const { Width, Height, Wideframe } = wideframe;
  renderOptions.wideframe = {
    name: "share-leaderboard",
    type: "image",
    depth: 0,
    image: Wideframe,
    size: [Width, Height],
    position: [0, 0]
  };
};
var getRenderOptions2 = (payload) => {
  try {
    const { playerId: playerId2, playerPhoto, leaders } = payload;
    const { RenderOptions } = WideframeConfigs2.ShareLeaderboard;
    const renderOptionsClone = O8.clone(RenderOptions);
    if (!renderOptionsClone) return null;
    const renderOptionsCleared = O8.clear(renderOptionsClone);
    const renderOptions = O8.camelCaseKeys(renderOptionsCleared);
    const { avatar: avatarRender } = renderOptions;
    if (avatarRender.type === "image") {
      avatarRender.name = `${playerId2}`;
      avatarRender.image = playerPhoto;
    }
    addLeaders(renderOptions, leaders);
    return renderOptions;
  } catch (error) {
    console.warn("getRenderOptionsShareScore", error);
    return null;
  }
};
var addLeaders = (renderOptions, leaders) => {
  const font = "600 48px";
  leaders.forEach((leader, index) => {
    const { id, name: name2, photo: photo2, score: score2 } = leader;
    let posY = 1294 + 180 * index;
    renderOptions[`photo_${id}`] = {
      depth: -1,
      name: id,
      type: "image",
      image: photo2,
      size: [96, 96],
      position: [436, posY]
    };
    posY = 1360 + 180 * index;
    renderOptions[`name_${id}`] = {
      font,
      depth: 1,
      name: id,
      type: "text",
      text: name2,
      position: [600, posY]
    };
    renderOptions[`score_${id}`] = {
      font,
      depth: 1,
      name: id,
      type: "text",
      text: `${score2}`,
      position: [100, posY]
    };
  });
};
var renderShareLeaderboard_default = renderShareLeaderboard;

// extensions/ludex/src/plugins/frame-capture/wideframes/renderShareScore.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: {
    FrameCapture: { Enabled: Enabled3, WideframeConfigs: WideframeConfigs3 }
  },
  Utils: { Object: O9 }
} = Ludex;
var renderShareScore = async (payload) => {
  if (!Enabled3) {
    console.warn("FrameCapture is not enabled");
    return null;
  }
  const renderOptions = getRenderOptions3(payload);
  if (!renderOptions) return null;
  addWideframe3(renderOptions, WideframeConfigs3.ShareScore);
  const { frameCapture } = codex;
  const { Width, Height } = WideframeConfigs3.ShareScore;
  return frameCapture.captureAsync({
    name: "ShareScore",
    width: Width,
    height: Height,
    renderOptions
  });
};
var addWideframe3 = (renderOptions, wideframe) => {
  const { Width, Height, Wideframe } = wideframe;
  renderOptions.wideframe = {
    name: "share-score",
    type: "image",
    depth: 0,
    image: Wideframe,
    size: [Width, Height],
    position: [0, 0]
  };
};
var getRenderOptions3 = (payload) => {
  try {
    const { playerId: playerId2, playerPhoto, playerScore } = payload;
    const { RenderOptions } = WideframeConfigs3.ShareScore;
    const renderOptionsClone = O9.clone(RenderOptions);
    if (!renderOptionsClone) return null;
    const renderOptionsCleared = O9.clear(renderOptionsClone);
    const renderOptions = O9.camelCaseKeys(renderOptionsCleared);
    console.log("renderOptions", renderOptions);
    const { avatar: avatarRender, playerScore: playerScoreRender } = renderOptions;
    if (avatarRender.type === "image") {
      avatarRender.name = `${playerId2}`;
      avatarRender.image = playerPhoto;
    }
    if (playerScoreRender.type === "text") {
      playerScoreRender.text = `${playerScore}`;
    }
    return renderOptions;
  } catch (error) {
    console.warn("getRenderOptionsShareScore", error);
    return null;
  }
};
var renderShareScore_default = renderShareScore;

// extensions/ludex/src/plugins/frame-capture/wideframes/renderUpdateChallenge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: {
    FrameCapture: { Enabled: Enabled4, WideframeConfigs: WideframeConfigs4 }
  },
  Utils: { Object: O10 }
} = Ludex;
var renderUpdateChallenge = async (payload) => {
  if (!Enabled4) {
    console.warn("FrameCapture is not enabled");
    return null;
  }
  const renderOptions = getRenderOptions4(payload);
  if (!renderOptions) return null;
  addWideframe4(renderOptions, WideframeConfigs4.UpdateChallenge);
  const { frameCapture } = codex;
  const { Width, Height } = WideframeConfigs4.UpdateChallenge;
  return frameCapture.captureAsync({
    name: "UpdateChallenge",
    width: Width,
    height: Height,
    renderOptions
  });
};
var addWideframe4 = (renderOptions, wideframe) => {
  const { Width, Height, Wideframe } = wideframe;
  renderOptions.wideframe = {
    name: "update-challenge",
    type: "image",
    depth: 0,
    image: Wideframe,
    size: [Width, Height],
    position: [0, 0]
  };
};
var getRenderOptions4 = (payload) => {
  try {
    const { playerId: playerId2, playerPhoto } = payload;
    const { RenderOptions } = WideframeConfigs4.UpdateChallenge;
    const renderOptionsClone = O10.clone(RenderOptions);
    if (!renderOptionsClone) return null;
    const renderOptionsCleared = O10.clear(renderOptionsClone);
    const renderOptions = O10.camelCaseKeys(renderOptionsCleared);
    console.log("renderOptions", renderOptions);
    const { avatar: avatarRender } = renderOptions;
    if (avatarRender.type === "image") {
      avatarRender.name = `${playerId2}`;
      avatarRender.image = playerPhoto;
    }
    return renderOptions;
  } catch (error) {
    console.warn("getRenderOptionsUpdateChallenge", error);
    return null;
  }
};
var renderUpdateChallenge_default = renderUpdateChallenge;

// extensions/ludex/src/plugins/frame-capture/FrameCapturePlugin.ts
var {
  Configs: {
    FrameCapture: { Options }
  },
  Utils: { Browser: B2, Image: I, Object: O11, Valid: V10 }
} = Ludex;
var FrameCapturePlugin = class extends Ludex.Plugins.BasePlugin {
  width;
  height;
  canvas = null;
  context = null;
  testRenderOptions = null;
  caches = {};
  wideframe = {};
  init() {
    this.addWideframeRender("renderShareScore", renderShareScore_default);
    this.addWideframeRender("renderUpdateChallenge", renderUpdateChallenge_default);
    this.addWideframeRender("renderResultChallenge", renderResultChallenge_default);
    this.addWideframeRender("renderShareLeaderboard", renderShareLeaderboard_default);
  }
  async preloadAsync(payload) {
    const { renderOptions } = payload;
    await this.loadImages(renderOptions);
  }
  async captureAsync(payload) {
    const { width, height, renderOptions } = payload;
    await this.loadImages(renderOptions);
    this.width = width;
    this.height = height;
    this.createCanvas();
    this.drawObjects(renderOptions);
    return this.snapshotFrameAsync();
  }
  addWideframeRender(name2, render) {
    this.wideframe[name2] = render;
  }
  setTestRenderOptions(payload) {
    if (!payload) {
      this.testRenderOptions = null;
      return;
    }
    const options = O11.camelCaseKeys(payload);
    this.testRenderOptions = O11.merge(this.testRenderOptions, options);
  }
  createCanvas() {
    if (!this.canvas) {
      const result3 = B2.createCanvas({
        type: "canvas",
        contextAttributes: { alpha: false, desynchronized: true, willReadFrequently: true },
        contextType: "2d"
      });
      this.canvas = result3?.canvas;
      this.context = result3?.context;
    }
    if (!this.canvas) throw new Error("Failed to create canvas");
    if (this.context) {
      this.context.clearRect(0, 0, this.width, this.height);
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  async loadImages(payload) {
    const images = O11.vals(payload).filter((option) => option.type === "image");
    const queue = this.prepareLoadImages(images);
    const promises = O11.vals(queue);
    if (promises.length < 1) return;
    const result3 = await Promise.all(promises);
    this.cacheImages(queue, result3);
  }
  prepareLoadImages(images) {
    const queue = {};
    for (const img2 of images) {
      const { name: name2, image, fallbackImage } = img2;
      const cached = this.caches[name2];
      if (!V10.isString(image) || cached) continue;
      if (image === "" && V10.isString(fallbackImage)) {
        img2.image = fallbackImage;
      }
      console.debug("prepareLoadImages", img2);
      queue[name2] = new Promise((resolve) => {
        const loadImagePromise = I.loadImage(image);
        loadImagePromise.then((img3) => {
          resolve(img3);
        }).catch(() => {
          if (!V10.isString(fallbackImage)) {
            resolve(null);
          } else {
            img2.image = fallbackImage;
            I.loadImage(img2.image).then((img3) => {
              resolve(img3);
            }).catch(() => {
              resolve(null);
            });
          }
        });
      });
    }
    return queue;
  }
  cacheImages(queue, result3) {
    for (const id in queue) {
      const image = result3.shift();
      if (!image) continue;
      this.caches[id] = image;
    }
  }
  drawObjects(payload) {
    const options = O11.vals(payload).sort((a, b) => a.depth - b.depth);
    for (const option of options) {
      switch (option.type) {
        case "text":
          this.drawText(option);
          break;
        case "image":
          this.drawImage(option);
          break;
      }
    }
  }
  drawText(option) {
    if (!this.canvas || !this.context) return;
    const { position, font, text, color, lineWidth, textAlign } = option;
    this.context.font = `${font} ${FONT_SYS_FAMILY}`;
    this.context.fillStyle = color ?? "#ffffff";
    if (lineWidth) {
      this.context.lineWidth = lineWidth;
    }
    if (textAlign) {
      this.context.textAlign = textAlign;
    }
    console.debug("drawText", option);
    const [x, y] = position;
    this.context.fillText(text, x, y);
  }
  drawImage(option) {
    if (!this.canvas || !this.context) return;
    const { name: name2, size, position, fallbackImage } = option;
    let source = this.caches[name2];
    if (!source && fallbackImage) {
      source = this.caches[fallbackImage];
    }
    if (!source) {
      throw new Error(`Image ${name2} not found`);
    }
    console.debug("drawImage", option);
    const [x, y] = position;
    const [width, height] = size;
    this.context.drawImage(source, x, y, width, height);
  }
  async snapshotFrameAsync() {
    if (!this.canvas) return null;
    let imageData = null;
    if (Options.UseBlobIfPossible && "toBlob" in this.canvas) {
      imageData = await this.createAsBlob();
    } else {
      imageData = this.createAsDataImage();
    }
    if (!imageData) {
      throw new Error("Image data is null");
    }
    if (V10.isDebugger()) {
      I.logImage(imageData);
    }
    return imageData;
  }
  createAsDataImage() {
    if (!this.canvas || !this.context) return null;
    const { Quality, RenderType } = Options;
    return this.context.canvas.toDataURL(`image/${RenderType}`, Quality);
  }
  createAsBlob() {
    return new Promise((resolve) => {
      if (!this.canvas) {
        resolve(null);
        return;
      }
      const { Quality, RenderType } = Options;
      this.canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(null);
            return;
          }
          I.blobToDataImage(blob).then((image) => {
            resolve(image);
          });
        },
        `image/${RenderType}`,
        Quality
      );
    });
  }
};
var FrameCapturePlugin_default = FrameCapturePlugin;

// extensions/ludex/src/plugins/frame-capture/index.ts
var frame_capture_default = FrameCapturePlugin_default;

// extensions/ludex/src/plugins/language/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/language/LanguagePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/language/exceptions/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/language/exceptions/LocaleNotFoundError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var LocaleNotFoundError = class extends Error {
  locale;
  constructor(locale2) {
    super(`Locale "${locale2}" not found`);
    this.name = "LocaleNotFoundError";
    this.locale = locale2;
  }
};
var LocaleNotFoundError_default = LocaleNotFoundError;

// extensions/ludex/src/plugins/language/exceptions/MissingKeyInLocaleError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MissingKeyInLocaleError = class extends Error {
  key;
  locale;
  constructor(key, locale2) {
    const keyString = String(key);
    super(`Text with key "${keyString}" not found in locale "${locale2}"`);
    this.name = "MissingKeyInLocaleError";
    this.key = keyString;
    this.locale = locale2;
  }
};
var MissingKeyInLocaleError_default = MissingKeyInLocaleError;

// extensions/ludex/src/plugins/language/LanguagePlugin.ts
var {
  Utils: { Object: O12, Function: F, Browser: B3 },
  Configs: {
    Languages: { DetectPlayerLocale }
  }
} = Ludex;
var LanguagePlugin = class extends Ludex.Plugins.BasePlugin {
  locale;
  fallbackLocale;
  data = {};
  setFallbackLocale(locale2) {
    this.fallbackLocale = locale2;
  }
  hasTextKey(key, locale2) {
    const l = locale2 ?? this.getCurrentLocale();
    const { text } = this.getLocaleData(l);
    return O12.hasOwn(text, key);
  }
  hasTextureKey(key, locale2) {
    const l = locale2 ?? this.getCurrentLocale();
    const { texture } = this.getLocaleData(l);
    return O12.hasOwn(texture, key);
  }
  add(locale2, data, setAsFallback = false) {
    this.data[locale2] = data;
    if (setAsFallback) {
      this.setFallbackLocale(locale2);
    }
  }
  choose(locale2) {
    this.locale = locale2;
    const { event } = this.codex;
    event.emit(Ludex.Events.LANGUAGE_CHANGED, { locale: locale2 });
  }
  getText(key, variables, locale2, disableFallback = false) {
    try {
      return this.uncaughtGetText(key, variables, locale2, !disableFallback);
    } catch (error) {
      if (error instanceof MissingKeyInLocaleError_default || error instanceof LocaleNotFoundError_default) {
        console.warn(error.message);
      } else {
        console.error(error);
      }
      return String(key);
    }
  }
  getTexture(key, locale2, disableFallback = false) {
    return this.uncaughtGetTexture(key, locale2, !disableFallback);
  }
  uncaughtGetText(key, variables = [], locale2, enableFallback = true) {
    if (!enableFallback || this.fallbackLocale === void 0) {
      const text2 = this.getRawText(key, locale2 ?? this.getCurrentLocale());
      return this.replaceVariables(text2, variables);
    }
    const fallbackLocale = this.fallbackLocale;
    const text = F.retry(
      () => this.getRawText(key, locale2 ?? this.getCurrentLocale()),
      () => this.getRawText(key, fallbackLocale)
    );
    return this.replaceVariables(text, variables);
  }
  getRawText(key, locale2) {
    if (!this.hasTextKey(key, locale2)) {
      throw new MissingKeyInLocaleError_default(key, locale2);
    }
    const { text } = this.getLocaleData(locale2);
    return text[key];
  }
  uncaughtGetTexture(key, locale2, enableFallback = true) {
    if (!enableFallback || this.fallbackLocale === void 0) {
      return this.getRawTexture(key, locale2 ?? this.getCurrentLocale());
    }
    const fallbackLocale = this.fallbackLocale;
    return F.retry(
      () => this.getRawTexture(key, locale2 ?? this.getCurrentLocale()),
      () => this.getRawTexture(key, fallbackLocale)
    );
  }
  getRawTexture(key, locale2) {
    if (!this.hasTextureKey(key, locale2)) {
      throw new MissingKeyInLocaleError_default(key, locale2);
    }
    const { texture } = this.getLocaleData(locale2);
    return texture[key];
  }
  getCurrentLocale() {
    return this.locale ?? "en";
  }
  getLocaleData(locale2) {
    const correctLocale = locale2 ?? this.getCurrentLocale();
    if (!O12.hasOwn(this.data, correctLocale)) {
      throw new LocaleNotFoundError_default(correctLocale);
    }
    return this.data[correctLocale];
  }
  replaceVariables(text, variables) {
    const length = variables.length;
    if (length === 0) return text;
    let result3 = text;
    for (let i = 0; i < length; i++) {
      const variable = variables[i];
      const key = `%{${i}}`;
      result3 = result3.replace(key, variable);
    }
    return result3;
  }
  getPlayerLanguage() {
    const { player } = this.codex;
    const localeStringBySDK = GameSDK.getLocale();
    const localeBySDK = localeStringBySDK?.trim().split(/[-_]/)[0];
    const currentLocale = this.getBrowserLanguage();
    if (localeBySDK !== currentLocale) {
      return localeBySDK ?? currentLocale;
    }
    if (player.isFirstSession()) {
      return currentLocale;
    }
    return player.getPlayerSetting("language") ?? currentLocale;
  }
  getBrowserLanguage() {
    if (DetectPlayerLocale === false) {
      return "en";
    }
    const locale2 = B3.getLocale();
    const language2 = locale2?.trim()?.split(/[-_]/)[0];
    return language2;
  }
};
var LanguagePlugin_default = LanguagePlugin;

// extensions/ludex/src/plugins/language/index.ts
var language_default = LanguagePlugin_default;

// extensions/ludex/src/plugins/leaderboards/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/leaderboards/LeaderboardPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/leaderboards/api/LeaderboardAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: { OtherHost, Mockup, AppId: AppId2 },
  Utils: { Object: O13, String: S3, Valid: V11 }
} = Ludex;
var LeaderboardAPI = class {
  mockAPI;
  async initMockAPI() {
    if (this.mockAPI) return;
    const LeaderboardAPIMock = (await import("./chunks-IZIYIAGD.js")).default;
    if (typeof LeaderboardAPIMock !== "function") {
      throw new Error("Cannot load LeaderboardAPIMock");
    }
    this.mockAPI = new LeaderboardAPIMock();
  }
  async getLeadersAsync(id, url, payload) {
    const params = S3.params(payload);
    let result3;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI();
      if ("playerIds" in payload) {
        result3 = await this.mockAPI.getPlayers(id, payload);
      } else {
        result3 = await this.mockAPI.getLeaders(id, payload);
      }
    } else {
      result3 = await get(`${url}?${params}`, {}, OtherHost);
    }
    if (!O13.hasOwn(result3, "data") || !Array.isArray(result3.data)) return [];
    return result3.data;
  }
  async getLeaderboardAsync(id) {
    let result3;
    const url = `leaderboards/${id}`;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI();
      result3 = await this.mockAPI.getLeaderboardAsync(id);
    } else {
      result3 = await get(url, {}, OtherHost);
      if (O13.hasOwn(result3, "data") && V11.isObject(result3.data)) {
        result3 = result3.data;
      }
    }
    return result3;
  }
  async getLeaderboardsAsync(options) {
    let result3;
    const params = Ludex.Utils.String.params(options);
    const url = "leaderboards";
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI();
      result3 = await this.mockAPI.getLeaderboardsAsync(options);
    } else {
      result3 = await get(`${url}?${params}`, {}, OtherHost);
      if (O13.hasOwn(result3, "data") && Array.isArray(result3.data)) {
        result3 = result3.data;
      } else {
        result3 = [];
      }
    }
    return result3;
  }
  async setLeaderboardScoreAsync(payload) {
    const { leaderboardId, playerId: playerId2, score: score2 } = payload;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI();
      await this.mockAPI.setScoreAsync(leaderboardId, playerId2, score2);
    } else {
      await post(`leaderboards/${leaderboardId}/players/${playerId2}`, { score: score2 }, {}, OtherHost);
    }
  }
  async createLeaderboardAsync(payload) {
    const id = payload._id ?? S3.generateObjectId();
    const numberOfLeaders = payload.numberOfLeaders;
    const leaderboardPayload = __spreadProps(__spreadValues(__spreadValues({}, ResponseLeaderboard_default),
    payload), {
      _id: id,
      appId: AppId2,
      numberOfLeaders
    });
    const url = "leaderboards";
    let result3;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI();
      result3 = await this.mockAPI.createLeaderboard(leaderboardPayload);
    } else {
      result3 = await post(url, leaderboardPayload, {}, OtherHost);
      if (O13.hasOwn(result3, "data") && V11.isObject(result3.data)) {
        result3 = result3.data;
      }
    }
    if (!O13.hasOwn(result3, "_id") || result3._id !== id) {
      throw new Error("Create leaderboard failed");
    }
    return id;
  }
};
var LeaderboardAPI_default = LeaderboardAPI;

// extensions/ludex/src/plugins/leaderboards/constants/DefaultLeaderboard.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultLeaderboard = {
  limit: 0,
  offset: 0,
  leaders: {},
  isRequesting: false,
  amountPlayer: 0
};
var DefaultLeaderboard_default = DefaultLeaderboard;

// extensions/ludex/src/plugins/leaderboards/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState6 = {
  leaderboards: {}
};
var state_default6 = initState6;

// extensions/ludex/src/plugins/leaderboards/LeaderboardPlugin.ts
var {
  Utils: { Array: A5, Valid: V12, Json: J3, Object: O14 }
} = Ludex;
var LeaderboardPlugin = class extends Ludex.Plugins.BasePlugin {
  lbAPI = new LeaderboardAPI_default();
  configs;
  init() {
    const { storage } = this.codex;
    storage.addStorage("leaderboard", state_default6);
    this.configs = {};
  }
  addLeaderboard(options) {
    const { name: name2, type, leaderboardId, autoSortRank } = options;
    const leaderboard = this.getLeaderboard(name2);
    if (leaderboard) {
      console.warn(`Leaderboard with name ${name2} already exists`);
      return;
    }
    let host = `leaderboards/${leaderboardId}/`;
    if (type === "global" || type === "tournament") {
      host += "leaders";
    }
    if (type === "friends") {
      host += "players";
    }
    this.configs[name2] = { id: leaderboardId, name: name2, type, host, autoSortRank };
    const defaultData = J3.clone(DefaultLeaderboard_default);
    this.setLeaderboard(name2, __spreadValues({}, defaultData));
  }
  async requestLeaderboardsAsync(options) {
    try {
      const result3 = await this.lbAPI.getLeaderboardsAsync(options);
      return result3;
    } catch (error) {
      console.warn("requestGlobalLeaderboardsAsync", error);
      return [];
    }
  }
  async requestLeaderboardAsync(name2, limit) {
    try {
      this.validateLeaderboard(name2);
      this.clearLeaderboard(name2);
      this.setLeaderboard(name2, { isRequesting: true });
      const { id, type, host } = this.configs[name2];
      let leaders = [];
      if (type === "friends") {
        const { player } = this.codex;
        const playerId2 = player.getPlayerId();
        const playerIds = player.getConnectedPlayerIds(limit, 0);
        const paramsPlayerIds = [playerId2, ...playerIds];
        this.configs[name2].playerIds = [...paramsPlayerIds];
        leaders = await this.lbAPI.getLeadersAsync(id, host, {
          playerIds: paramsPlayerIds
        });
      } else {
        leaders = await this.lbAPI.getLeadersAsync(id, host, {
          limit,
          offset: 0
        });
      }
      if (leaders.length === 0) return;
      await this.receiveLeaderboardAsync(name2, leaders);
      this.setLeaderboard(name2, { limit, offset: 0 });
    } finally {
      const res = await this.lbAPI.getLeaderboardAsync(this.configs[name2].id);
      const resettable = res ? res.resettable : "";
      const amountPlayer = res ? res.amountPlayer : 0;
      this.setLeaderboard(name2, { isRequesting: false, resettable, amountPlayer });
    }
  }
  async loadMoreLeaderboardAsync(name2, limit) {
    const leaderboard = this.getLeaderboard(name2);
    if (!leaderboard) return;
    if (this.configs[name2].type === "friends") {
      console.warn("Cannot load more leaderboard with type friend");
      return;
    }
    try {
      this.setLeaderboard(name2, { isRequesting: true });
      const { id, host } = this.configs[name2];
      const { offset: oldOffset, limit: oldLimit } = leaderboard;
      const newOffset = oldOffset + oldLimit;
      const leaders = await this.lbAPI.getLeadersAsync(id, host, {
        limit,
        offset: newOffset
      });
      if (leaders.length === 0) return;
      this.receiveLeaderboardAsync(name2, leaders);
      this.setLeaderboard(name2, { limit, offset: newOffset });
    } finally {
      this.setLeaderboard(name2, { isRequesting: false });
    }
  }
  getLeaderboard(name2) {
    const { storage } = this.codex;
    const leaderboards = storage.getStorageData("leaderboard", "leaderboards");
    if (!leaderboards) return null;
    if (!leaderboards[name2]) return null;
    return leaderboards[name2];
  }
  async getLeadersByPlayerIdsAsync(name2, playerIds) {
    try {
      this.validateLeaderboard(name2);
      const { id } = this.configs[name2];
      const host = `leaderboards/${id}/players`;
      const res = await this.lbAPI.getLeadersAsync(id, host, { playerIds });
      if (res.length === 0) return [];
      return this.toLeaders(res);
    } catch (error) {
      console.warn(error);
      return [];
    }
  }
  async getLeaderboardResponseAsync(id) {
    return await this.lbAPI.getLeaderboardAsync(id);
  }
  clearLeaderboard(name2) {
    try {
      this.validateLeaderboard(name2);
      const defaultData = J3.clone(DefaultLeaderboard_default);
      this.setLeaderboard(name2, null);
      this.setLeaderboard(name2, __spreadValues({}, defaultData));
    } catch (error) {
      console.warn(error);
    }
  }
  isLeaderboardEmpty(name2) {
    const leaderboard = this.getLeaderboard(name2);
    if (!leaderboard) return true;
    const { leaders } = leaderboard;
    return Object.keys(leaders).length === 0;
  }
  isExistLeaderboardId(leaderboardId) {
    const { configs } = this;
    return O14.vals(configs).some((config) => config.id === leaderboardId);
  }
  getLeaderboardName(leaderboardId) {
    const { configs } = this;
    const config = A5.search(O14.vals(configs), (config2) => config2.id === leaderboardId);
    if (!config) return null;
    return config.name;
  }
  async setLeaderboardScoreAsync(name2, playerId2, score2) {
    try {
      if (GameSDK.extra.isGuest) return;
      this.validateLeaderboard(name2);
      const { id } = this.configs[name2];
      const previousScore = await this.getLastScoreOnLeaderboard(name2, playerId2);
      if (previousScore && score2 <= previousScore) return;
      await this.lbAPI.setLeaderboardScoreAsync({
        leaderboardId: id,
        playerId: playerId2,
        score: score2
      });
    } catch (error) {
      console.warn(error);
    }
  }
  async getLastScoreOnLeaderboard(name2, playerId2) {
    const playerLeaders = await this.getLeadersByPlayerIdsAsync(name2, [playerId2]);
    if (playerLeaders.length === 0) return null;
    return playerLeaders[0].score;
  }
  async createLeaderboardAsync(payload) {
    return this.lbAPI.createLeaderboardAsync(payload);
  }
  validateLeaderboard(name2) {
    const leaderboard = this.getLeaderboard(name2);
    if (!V12.isObject(leaderboard)) {
      throw new Error(`Leaderboard with name ${name2} not found`);
    }
  }
  setLeaderboard(name2, leaderboard) {
    if (!leaderboard) return;
    const { storage } = this.codex;
    storage.setStorageData("leaderboard", "leaderboards", { [name2]: leaderboard });
  }
  async receiveLeaderboardAsync(name2, responses) {
    this.validateLeaderboard(name2);
    const leaders = await this.toLeaders(responses);
    const cleanLeaders = leaders.filter((leader) => leader.name && leader.photo);
    const { leaders: currentLeaders = {} } = this.getLeaderboard(name2) ?? {};
    const uniqueLeaders = cleanLeaders.filter((leader) => {
      if (currentLeaders[leader.playerId]) {
        currentLeaders[leader.playerId] = leader;
        return false;
      }
      return true;
    });
    const rawLeaders = O14.vals(currentLeaders);
    if (uniqueLeaders.length > 0) {
      rawLeaders.unshift(...uniqueLeaders);
    }
    let sortedLeaders = rawLeaders.sort((a, b) => b.score - a.score);
    if (this.configs[name2].autoSortRank) {
      sortedLeaders = sortedLeaders.map((leader, index) => __spreadProps(__spreadValues({}, leader),
      { rank: index + 1 }));
    }
    const keyedLeaders = O14.keyBy(sortedLeaders, "playerId");
    this.setLeaderboard(name2, { leaders: keyedLeaders });
  }
  async toLeaders(leaders) {
    const { profile } = this.codex;
    const leaderIds = leaders.map((leader) => leader.playerId);
    await profile.requestProfiles(leaderIds);
    const profiles = profile.getProfiles();
    const leadersWithProfile = leaders.map((leader) => {
      const { playerId: playerId2 } = leader;
      const profile2 = profiles[playerId2];
      if (!profile2) {
        const { language: language2 } = this.codex;
        const name2 = language2.getText("core.nameless") ?? "Nameless";
        return __spreadProps(__spreadValues({}, leader), { name: name2, photo: "default" });
      }
      return __spreadProps(__spreadValues({}, leader), {
        name: profile2.name,
        photo: profile2.photo
      });
    });
    const leadersWithScore = leadersWithProfile.map((leader) => __spreadProps(__spreadValues({}, leader),
    {
      score: parseInt(leader.score, 10)
    }));
    return leadersWithScore;
  }
};
var LeaderboardPlugin_default = LeaderboardPlugin;

// extensions/ludex/src/plugins/leaderboards/index.ts
var leaderboards_default = LeaderboardPlugin_default;

// extensions/ludex/src/plugins/match/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/MatchPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/api/APIHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/api/MatchAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/api/BaseAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BaseAPI = class {
  APIHost;
  setAPIHost(host) {
    this.APIHost = host;
  }
  getAPIHost() {
    return this.APIHost;
  }
};
var BaseAPI_default = BaseAPI;

// extensions/ludex/src/plugins/match/api/MatchAPI.ts
var { Utils: Utils2 } = Ludex;
var MatchAPI = class extends BaseAPI_default {
  // Single mode
  async createSingleMatchAsync(payload) {
    const url = "single-matches";
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async getSingleMatchDetailAsync() {
    const url = "single-matches/active";
    const result3 = await get(url, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async updateSingleMatchMoveAsync(matchId, payload) {
    const url = `single-matches/${matchId}/move`;
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async finishSingleMatchAsync(matchId) {
    const url = `single-matches/${matchId}/finish`;
    const result3 = await post(url, {}, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  // Context mode
  async createMatchAsync(payload) {
    const url = "matches";
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async joinMatchAsync(matchId) {
    const url = `matches/${matchId}/join`;
    const result3 = await post(url, {}, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async getMatchDetailByIdAsync(matchId) {
    const url = `matches/${matchId}`;
    const result3 = await get(url, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  async finishMatchAsync(payload) {
    const { matchId = "", score: score2 = 0, level: level2 = 0, extraData = {} } = payload;
    const url = `matches/${matchId}/finish`;
    const result3 = await post(url, { matchId, score: score2, level: level2, extraData }, {}, this.getAPIHost());
    return this.returnValidMatchData(result3);
  }
  returnValidMatchData(result3) {
    if (!Utils2.Valid.isObject(result3)) return {};
    if (!Utils2.Object.hasOwn(result3, "data")) return {};
    return result3.data ?? {};
  }
};
var MatchAPI_default = MatchAPI;

// extensions/ludex/src/plugins/match/api/APIHandler.ts
var APIHandler = class {
  matchAPI;
  constructor(apiConfig) {
    this.createAPI();
    this.setAPIConfig(apiConfig);
  }
  createAPI() {
    this.matchAPI = new MatchAPI_default();
  }
  setAPIConfig(apiConfig) {
    if (apiConfig.matchAPIHost) {
      this.matchAPI.setAPIHost(apiConfig.matchAPIHost);
    }
  }
  setMatchAPIInstance(matchAPI) {
    this.matchAPI = matchAPI;
  }
  getMatchAPI() {
    return this.matchAPI;
  }
};
var APIHandler_default = APIHandler;

// extensions/ludex/src/plugins/match/concretes/BaseConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BaseConcrete = class {
  codex;
  match;
  constructor(codex2, match) {
    this.codex = codex2;
    this.match = match;
  }
  startLog(payload) {
    if (this.match.useCPUProfile) {
      console.profile(this.constructor.name);
    }
    console.group(`\u{1F680} ${this.constructor.name}`);
    if (payload) {
      console.log("\u{1F4E6} ? Payload:", payload);
    }
  }
  endLog() {
    console.groupEnd();
    if (this.match.useCPUProfile) {
      console.profileEnd();
    }
  }
  async processAsync(_payload) {
    throw new Error("Not implemented");
  }
};
var BaseConcrete_default = BaseConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/AwaitChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/NothingHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/BaseHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Object: O15, Valid: V13, Json: J4 } = Ludex.Utils;
var BaseHandler = class {
  codex;
  match;
  nextHandler;
  stateData;
  constructor(concrete) {
    this.codex = concrete.codex;
    this.match = concrete.match;
    this.nextHandler = null;
    this.stateData = {
      Before: null,
      After: null
    };
  }
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  async processAsync(matchState) {
    console.groupCollapsed(`\u27A1\uFE0F ${this.constructor.name}`);
    this.logData$("Before", matchState);
  }
  async nextAsync(matchState) {
    this.logData$("After", matchState);
    this.logDiff$();
    console.groupEnd();
    if (!this.nextHandler) return;
    await this.nextHandler.processAsync(matchState);
  }
  logData$(name2, matchState) {
    if (!V13.isDebugger()) return;
    console.groupCollapsed(`\u{1F4E6} MatchState: ${name2}`);
    this.stateData[name2] = J4.clone(matchState);
    const _a = matchState, { profiles, customData } = _a, base = __objRest(_a, ["profiles", "customD\
ata"]);
    console.info("\u{1F4BE} Base");
    console.table(O15.clone(base));
    console.info("\u{1F4BE} Profile");
    console.table(O15.clone(profiles));
    console.info("\u{1F4BE} Custom");
    console.table(O15.clone(customData));
    console.groupEnd();
  }
  logDiff$() {
    const { After, Before } = this.stateData;
    if (!After || !Before) return;
    const diff = O15.diff(Before, After);
    if (!V13.isEmpty(diff)) {
      const _a = diff, { profiles = {}, customData = {} } = _a, base = __objRest(_a, ["profiles", "c\
ustomData"]);
      console.group("\u{1F4E6} MatchState: Diff");
      if (!V13.isEmpty(base)) {
        console.info("\u{1F4BE} Base");
        console.table(O15.clone(base));
      }
      if (!V13.isEmpty(profiles)) {
        console.info("\u{1F4BE} Profile");
        console.table(O15.clone(profiles));
      }
      if (!V13.isEmpty(customData)) {
        console.info("\u{1F4BE} Custom");
        console.table(O15.clone(customData));
      }
      console.groupEnd();
    }
    this.stateData.After = null;
    this.stateData.Before = null;
  }
};
var BaseHandler_default = BaseHandler;

// extensions/ludex/src/plugins/match/handlers/NothingHandler.ts
var NothingHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    await this.nextAsync(matchState);
  }
  async nextAsync(matchState) {
    if (!this.nextHandler) return;
    await this.nextHandler.processAsync(matchState);
  }
};
var NothingHandler_default = NothingHandler;

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchStartHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/LevelNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var LevelNotDefined = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "LevelNotDefined";
    this.message = message ?? "Level is not defined";
  }
};
var LevelNotDefined_default = LevelNotDefined;

// extensions/ludex/src/plugins/match/exceptions/MatchModeNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchModeNotDefined = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchModeNotDefined";
    this.message = message ?? "Match id is not defined";
  }
};
var MatchModeNotDefined_default = MatchModeNotDefined;

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchStartHandler.ts
var { Plugins: Plugins2, Utils: Utils3 } = Ludex;
var { Analytics: Analytics2 } = Plugins2;
var { String: S4, Valid: V14 } = Utils3;
var LogMatchStartHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, customData } = matchState;
    const { level: level2 } = customData;
    this.validateMode(mode);
    this.validateLevel(level2);
    const { analytics } = this.codex;
    analytics.event(Analytics2.Events.MATCH_START, {
      level: level2,
      game_mode: S4.toUpperCamelCase(mode),
      level_name: this.getLevelName(level2)
    });
    await this.nextAsync(matchState);
  }
  validateMode(mode) {
    if (!V14.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
  validateLevel(level2) {
    if (!V14.isNumber(level2)) {
      throw new LevelNotDefined_default();
    }
  }
  getLevelName(level2) {
    return `Level ${S4.padStart(level2.toString(), 5, "0")}`;
  }
};
var LogMatchStartHandler_default = LogMatchStartHandler;

// extensions/ludex/src/plugins/match/handlers/context/ContextGameModeHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/constants/MatchStatus.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchStatus = {
  OPEN: "open",
  ACTIVE: "active",
  FINISHED: "finished"
};
var MatchStatus_default = MatchStatus;

// extensions/ludex/src/plugins/match/handlers/context/ContextGameModeHandler.ts
var ContextGameModeHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, status } = matchState;
    let gameMode = mode ?? ContextModes_default.SINGLE;
    if (status === MatchStatus_default.FINISHED) {
      gameMode = ContextModes_default.SINGLE;
    }
    this.contextGameModeDetected(gameMode);
    await this.nextAsync(matchState);
  }
  contextGameModeDetected(gameMode) {
    const { storage } = this.codex;
    storage.setStorageData("context", "contextGameMode", gameMode);
  }
};
var ContextGameModeHandler_default = ContextGameModeHandler;

// extensions/ludex/src/plugins/match/handlers/match/AwaitMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/GetMatchDetailFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var GetMatchDetailFailed = class extends Error {
  constructor(message) {
    super(message);
    this.name = "GetMatchDetailFailed";
    this.message = message ?? "Get match detail failed";
  }
};
var GetMatchDetailFailed_default = GetMatchDetailFailed;

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotActive.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchAreNotActive = class extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotActive";
    this.message = message ?? "Match are not active";
  }
};
var MatchAreNotActive_default = MatchAreNotActive;

// extensions/ludex/src/plugins/match/exceptions/MatchIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchIdNotValid = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchIdNotValid";
    this.message = message ?? "Match id is not valid";
  }
};
var MatchIdNotValid_default = MatchIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/OpponentHasFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var OpponentHasFinishedMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "OpponentHasFinishedMatch";
    this.message = message || "Opponent has finished match";
  }
};
var OpponentHasFinishedMatch_default = OpponentHasFinishedMatch;

// extensions/ludex/src/plugins/match/exceptions/OpponentIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var OpponentIdNotValid = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "OpponentIdNotValid";
    this.message = message ?? "Opponent id is not valid";
  }
};
var OpponentIdNotValid_default = OpponentIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotCurrentInMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlayerNotCurrentInMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotCurrentInMatch";
    this.message = message ?? "The player is not currently in this match";
  }
};
var PlayerNotCurrentInMatch_default = PlayerNotCurrentInMatch;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var PlayerNotFinishedMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotFinishedMatch";
    this.message = message || "Player not finished match";
  }
};
var PlayerNotFinishedMatch_default = PlayerNotFinishedMatch;

// extensions/ludex/src/plugins/match/handlers/match/AwaitMatchHandler.ts
var {
  Dtos: Dtos2,
  Utils: { Object: O16 }
} = Ludex;
var AwaitMatchHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData(matchState);
    const respMatchData = await this.getMatchAsync(matchState);
    const respMatchDataValidated = new Dtos2.Match.Data(respMatchData).toObject();
    this.validateAwaitMatchData(matchState, respMatchDataValidated);
    this.updateMatchData(matchState, respMatchDataValidated);
    this.validateMatchStatus(matchState);
    this.validatePlayerTurn(matchState);
    this.validateOpponentTurn(matchState);
    await this.nextAsync(matchState);
  }
  validateMatchData(matchState) {
    const { id } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
  }
  validateMatchStatus(matchState) {
    const { status } = matchState;
    if (status !== MatchStatus_default.ACTIVE) {
      throw new MatchAreNotActive_default();
    }
  }
  validateAwaitMatchData(matchState, matchData) {
    const { id, customData } = matchState;
    const { _id, whitePlayerId, blackPlayerId } = matchData;
    if (typeof _id !== "string" || _id !== id) {
      throw new GetMatchDetailFailed_default();
    }
    const { playerId: playerId2 } = customData;
    const isPlayerWhite = whitePlayerId === playerId2;
    const isPlayerBlack = blackPlayerId === playerId2;
    if (!isPlayerWhite && blackPlayerId === SampleOpponent_default.playerId) {
      throw new PlayerNotJoinInMatch_default();
    }
    if (!isPlayerWhite && !isPlayerBlack) {
      throw new PlayerNotCurrentInMatch_default();
    }
  }
  validatePlayerTurn(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const { finished } = profiles[playerId2];
    if (!finished) {
      throw new PlayerNotFinishedMatch_default();
    }
  }
  validateOpponentTurn(matchState) {
    const { profiles, customData } = matchState;
    const { opponentId } = customData;
    if (typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
    const { finished } = profiles[opponentId];
    if (finished) {
      throw new OpponentHasFinishedMatch_default();
    }
  }
  async getMatchAsync(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData(matchState, matchData) {
    this.updateMatchGeneral(matchState, matchData);
    this.updatePlayerIds(matchState, matchData);
    this.initializeProfiles(matchState);
    this.updateScoresAndStatus(matchState, matchData);
  }
  updateMatchGeneral(matchState, matchData) {
    const { status, extraData } = matchData;
    matchState.status = status;
    matchState.customData = O16.merge(matchState.customData, extraData);
  }
  updatePlayerIds(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.customData.playerId = isPlayerWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
  }
  initializeProfiles(matchState) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const defaultProfile = {
      name: "",
      photo: "",
      finished: false
    };
    if (!matchState.profiles[playerId2]) {
      matchState.profiles[playerId2] = __spreadValues({ id: playerId2 }, defaultProfile);
    }
    if (!matchState.profiles[opponentId]) {
      matchState.profiles[opponentId] = __spreadValues({ id: opponentId }, defaultProfile);
    }
  }
  updateScoresAndStatus(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const { whitePlayerId, whitePlayerScore, whitePlayerFinish, blackPlayerScore, blackPlayerFinish } = matchData;
    const isPlayerWhite = whitePlayerId === playerId2;
    matchState.profiles[playerId2].score = isPlayerWhite ? whitePlayerScore : blackPlayerScore;
    matchState.profiles[opponentId].score = isPlayerWhite ? blackPlayerScore : whitePlayerScore;
    matchState.profiles[playerId2].finished = isPlayerWhite ? whitePlayerFinish : blackPlayerFinish;
    matchState.profiles[opponentId].finished = isPlayerWhite ? blackPlayerFinish : whitePlayerFinish;
  }
};
var AwaitMatchHandler_default = AwaitMatchHandler;

// extensions/ludex/src/plugins/match/handlers/match/PrepareMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/data/DefaultCustomData.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultCustomData = {
  level: 1,
  rescued: 0,
  contextId: null,
  playerId: null,
  opponentId: null,
  tournamentId: null,
  leaderboardId: null
};
var DefaultCustomData_default = DefaultCustomData;

// extensions/ludex/src/plugins/match/handlers/match/PrepareMatchHandler.ts
var PrepareMatchHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.initializeMatch(matchState);
    await this.nextAsync(matchState);
  }
  initializeMatch(matchState) {
    const { id, mode, customData } = this.payload;
    matchState.id = id ?? null;
    matchState.mode = mode || null;
    matchState.status = MatchStatus_default.OPEN;
    matchState.startAt = 0;
    matchState.finishAt = 0;
    matchState.profiles = {};
    matchState.customData = __spreadValues(__spreadValues(__spreadValues({}, DefaultCustomData_default),
    matchState.customData), customData);
  }
};
var PrepareMatchHandler_default = PrepareMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendAwaitingMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/constants/ContextTypes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextTypes = ContextTypes_default;
var ContextTypes_default2 = ContextTypes;

// extensions/ludex/src/exceptions/UnavailableFeature.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var UnavailableFeature = class extends Error {
  constructor(message) {
    super(message);
    this.name = "UnavailableFeature";
    this.message = `Unavailable feature: ${message}`;
  }
};
var UnavailableFeature_default = UnavailableFeature;

// extensions/ludex/src/plugins/match/exceptions/ContextIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextIdNotValid = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "ContextIdNotValid";
    this.message = message ?? "Context id is not valid";
  }
};
var ContextIdNotValid_default = ContextIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/ProfileNotFound.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ProfileNotFound = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "ProfileNotFound";
    this.message = message ?? "Profile not found";
  }
};
var ProfileNotFound_default = ProfileNotFound;

// extensions/ludex/src/plugins/match/handlers/message/SendAwaitingMessageHandler.ts
var SendAwaitingMessageHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const imageResult = await this.createWideframesAwaitingAsync(matchState);
    if (imageResult) {
      this.sendMessageAsync(matchState, imageResult);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  // TODO: use other wideframe for awaiting message
  async createWideframesAwaitingAsync(matchState) {
    try {
      const { frameCapture } = this.codex;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0, finished: playerFinished } = playerProfile;
      if (!playerFinished) return null;
      const { photo: opponentPhoto, score: opponentScore = 0, finished: opponentFinished } = opponentProfile;
      if (opponentFinished) return null;
      return await frameCapture.wideframe.renderResultChallenge({
        playerId: playerId2,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished: true,
        isOpponentFinished: false
      });
    } catch (error) {
      console.warn("createWideframesAwaitingAsync", error);
      return null;
    }
  }
  async sendMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId
      },
      action: "CUSTOM",
      template: "challenge",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} is waiting for you to finish this game. Play now!`,
        localizations: {
          vi_VN: `${playerName} \u0111ang ch\u1EDD b\u1EA1n k\u1EBFt th\xFAc tr\u1EADn \u0111\u1EA5u. Ch\u01A1i ngay!`
        }
      },
      image: wideframes,
      // ? LAST is mean a message draft will be replaced by the latest message
      strategy: "LAST",
      notification: "PUSH"
    };
    await GameSDK.extra.updateAsync(message);
  }
};
var SendAwaitingMessageHandler_default = SendAwaitingMessageHandler;

// extensions/ludex/src/plugins/match/handlers/profile/GetMatchProfilesHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Dtos: Dtos3 } = Ludex;
var GetMatchProfilesHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const { customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    let profileId = playerId2;
    const playerProfile = await this.getProfile(profileId);
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    this.updateMatchProfile(matchState, profileId, playerProfile);
    profileId = opponentId;
    if (profileId !== SampleOpponent_default.playerId) {
      const opponentProfile = await this.getProfile(profileId);
      if (!opponentProfile) {
        throw new ProfileNotFound_default();
      }
      this.updateMatchProfile(matchState, profileId, opponentProfile);
    } else {
      this.updateMatchProfile(matchState, profileId);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async getProfile(profileId) {
    const { profile } = this.codex;
    await profile.requestProfiles([profileId]);
    const profiles = profile.getProfiles();
    return profiles[profileId];
  }
  updateMatchProfile(matchState, profileId, data) {
    const { name: name2, photo: photo2 } = data ?? SampleOpponent_default;
    const profile = new Dtos3.Match.Profile({ id: profileId, name: name2, photo: photo2 }).toObject();
    if (matchState.profiles[profileId]) {
      matchState.profiles[profileId].name = profile.name;
      matchState.profiles[profileId].photo = profile.photo;
    } else {
      matchState.profiles[profileId] = profile;
    }
  }
};
var GetMatchProfilesHandler_default = GetMatchProfilesHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/AwaitChallengeMatchConcrete.ts
var AwaitChallengeMatchConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { matchId, playerId: playerId2, opponentId } = payload;
      const flow = new NothingHandler_default(this);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: matchId,
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      flow.setNext(prepareMatch);
      const getMatch = new AwaitMatchHandler_default(this);
      prepareMatch.setNext(getMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      getMatch.setNext(getMatchProfiles);
      const sendMessage = new SendAwaitingMessageHandler_default(this);
      getMatchProfiles.setNext(sendMessage);
      const logStart = new LogMatchStartHandler_default(this);
      sendMessage.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var AwaitChallengeMatchConcrete_default = AwaitChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ChallengeFriendConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/CreateContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/CreateContextFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var CreateContextFailed = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "CreateContextFailed";
    this.message = message ?? "Create context failed";
  }
};
var CreateContextFailed_default = CreateContextFailed;

// extensions/ludex/src/plugins/match/handlers/context/CreateContextHandler.ts
var { Valid: V15, Object: O17 } = Ludex.Utils;
var CreateContextHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { opponentId } = this.payload;
    const contextId2 = await this.createAsync(opponentId);
    matchState.customData.contextId = contextId2;
    await this.nextAsync(matchState);
  }
  async createAsync(opponentId) {
    try {
      await GameSDK.context.createAsync(opponentId);
    } catch (error) {
      this.validateError(error);
    }
    const contextId2 = GameSDK.context.getID();
    if (!V15.isString(contextId2)) {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
  validateError(error) {
    if (!O17.hasOwn(error, "code")) throw error;
    if (error.code === "SAME_CONTEXT") return;
    if (error.code === "INVALID_PARAM") {
      if (!this.isNotConnectedPlayerError(error)) {
        throw error;
      }
      return;
    }
    throw error;
  }
  validateErrorMessage(error) {
    if (!O17.hasOwn(error, "message")) throw error;
    if (!V15.isString(error.message)) throw error;
  }
  isNotConnectedPlayerError(error) {
    this.validateErrorMessage(error);
    return error.message.indexOf("is not a connected player of the current player") > -1;
  }
};
var CreateContextHandler_default = CreateContextHandler;

// extensions/ludex/src/plugins/match/handlers/match/CreateMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotOpen.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchAreNotOpen = class extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotOpen";
    this.message = message ?? "Match are not open";
  }
};
var MatchAreNotOpen_default = MatchAreNotOpen;

// extensions/ludex/src/plugins/match/handlers/match/CreateMatchHandler.ts
var {
  Dtos: Dtos4,
  Utils: { Object: O18 }
} = Ludex;
var CreateMatchHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const respMatchData = await this.createMatchAsync(matchState);
    const respMatchDataValidated = new Dtos4.Match.Data(respMatchData).toObject();
    this.updateMatchState(matchState, respMatchDataValidated);
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { status, customData } = matchState;
    const { opponentId } = customData;
    if (typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  async createMatchAsync(matchState) {
    const { opponentId } = matchState.customData;
    const { extraData } = this.payload;
    if (!opponentId) return {};
    const payload = {
      opponentPlayerId: opponentId,
      extraData
    };
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.createMatchAsync(payload);
  }
  updateMatchState(matchState, matchData) {
    this.updateMatchGeneral(matchState, matchData);
    this.updatePlayerIds(matchState, matchData);
    this.initializeProfiles(matchState);
    this.updateFinishStatus(matchState, matchData);
  }
  updateMatchGeneral(matchState, matchData) {
    const { _id, extraData } = matchData;
    matchState.id = _id || null;
    matchState.customData = O18.merge(matchState.customData, extraData);
  }
  updatePlayerIds(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isOpponentWhite = whitePlayerId === customData.opponentId;
    const playerId2 = isOpponentWhite ? blackPlayerId : whitePlayerId;
    const opponentId = isOpponentWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles(matchState) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const defaultProfile = {
      name: "",
      photo: "",
      finished: false
    };
    if (!matchState.profiles[playerId2]) {
      matchState.profiles[playerId2] = __spreadValues({ id: playerId2 }, defaultProfile);
    }
    if (!matchState.profiles[opponentId]) {
      matchState.profiles[opponentId] = __spreadValues({ id: opponentId }, defaultProfile);
    }
  }
  updateFinishStatus(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const { whitePlayerId, whitePlayerFinish, blackPlayerFinish } = matchData;
    const isOpponentWhite = whitePlayerId === matchState.customData.opponentId;
    const playerFinished = isOpponentWhite ? blackPlayerFinish : whitePlayerFinish;
    const opponentFinished = isOpponentWhite ? whitePlayerFinish : blackPlayerFinish;
    matchState.profiles[playerId2].finished = playerFinished;
    matchState.profiles[opponentId].finished = opponentFinished;
  }
};
var CreateMatchHandler_default = CreateMatchHandler;

// extensions/ludex/src/plugins/match/handlers/match/StartMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var StartMatchHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (matchState.status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
    this.startMatch(matchState);
    await this.nextAsync(matchState);
  }
  startMatch(matchState) {
    matchState.status = MatchStatus_default.ACTIVE;
    matchState.startAt = Date.now();
  }
};
var StartMatchHandler_default = StartMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendChallengeMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SendChallengeMessageHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const imageResult = await this.createWideframesChallengeAsync(matchState);
    if (imageResult) {
      this.sendMessageAsync(matchState, imageResult);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async createWideframesChallengeAsync(matchState) {
    try {
      const { frameCapture } = this.codex;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0 } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0 } = opponentProfile;
      return await frameCapture.wideframe.renderResultChallenge({
        playerId: playerId2,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished: false,
        isOpponentFinished: false
      });
    } catch (error) {
      console.warn("createWideframesChallengeAsync", error);
      return null;
    }
  }
  async sendMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const { name: playerName } = profiles[playerId2];
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId
      },
      action: "CUSTOM",
      template: "challenge",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} challenges you`,
        localizations: {
          vi_VN: `${playerName} th\u1EED th\xE1ch b\u1EA1n trong tr\u1EADn \u0111\u1EA5u n\xE0y. Ch\u01A1i ngay!`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    await GameSDK.extra.updateAsync(message);
  }
};
var SendChallengeMessageHandler_default = SendChallengeMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ChallengeFriendConcrete.ts
var ChallengeFriendConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, opponentId, extraData } = payload;
      const flow = new NothingHandler_default(this);
      const createContext = new CreateContextHandler_default(this, { opponentId });
      flow.setNext(createContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      createContext.setNext(prepareMatch);
      const createMatch = new CreateMatchHandler_default(this, { extraData });
      prepareMatch.setNext(createMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      createMatch.setNext(getMatchProfiles);
      const startMatch = new StartMatchHandler_default(this);
      getMatchProfiles.setNext(startMatch);
      const logStart = new LogMatchStartHandler_default(this);
      startMatch.setNext(logStart);
      const sendMessage = new SendChallengeMessageHandler_default(this);
      logStart.setNext(sendMessage);
      const detectGameMode = new ContextGameModeHandler_default(this);
      sendMessage.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var ChallengeFriendConcrete_default = ChallengeFriendConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ContinueChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/SwitchContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/SameContext.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SameContext = class extends Error {
  constructor(message) {
    super(message);
    this.name = "SameContext";
    this.message = message ?? "Same context";
  }
};
var SameContext_default = SameContext;

// extensions/ludex/src/plugins/match/handlers/context/SwitchContextHandler.ts
var { Utils: Utils4 } = Ludex;
var SwitchContextHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { contextId: contextId2 } = this.payload;
    await this.switchAsync(contextId2);
    matchState.customData.contextId = contextId2;
    await this.nextAsync(matchState);
  }
  checkSameContext(contextId2) {
    const isSoloContext = contextId2 === "SOLO";
    const currentContextId = GameSDK.context.getID();
    if (currentContextId === contextId2) throw new SameContext_default();
    if (isSoloContext && currentContextId === null) throw new SameContext_default();
  }
  async switchAsync(contextId2) {
    const isSoloContext = contextId2 === "SOLO";
    try {
      this.checkSameContext(contextId2);
      await GameSDK.context.switchAsync(contextId2, isSoloContext);
    } catch (error) {
      if (error instanceof SameContext_default) return;
      if (!Utils4.Object.hasOwn(error, "code")) throw error;
      const isAndroid = Utils4.Device.isAndroid();
      if (isAndroid && isSoloContext && error.code === "INVALID_PARAM") return;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
  }
};
var SwitchContextHandler_default = SwitchContextHandler;

// extensions/ludex/src/plugins/match/handlers/match/ContinueMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Dtos: Dtos5,
  Utils: { Object: O19 }
} = Ludex;
var ContinueMatchHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData(matchState);
    const respMatchData = await this.getMatchAsync(matchState);
    const respMatchDataValidated = new Dtos5.Match.Data(respMatchData).toObject();
    this.validateContinueMatchData(matchState, respMatchDataValidated);
    this.updateMatchData(matchState, respMatchDataValidated);
    this.validatePlayerTurn(matchState);
    await this.nextAsync(matchState);
  }
  validateMatchData(matchState) {
    const { id, status } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  validateContinueMatchData(matchState, matchData) {
    const { id, customData } = matchState;
    const { _id, whitePlayerId, blackPlayerId } = matchData;
    if (typeof _id !== "string" || _id !== id) {
      console.warn("\u{1F916} ? respMatchDataValidated", matchData);
      throw new GetMatchDetailFailed_default();
    }
    const { playerId: playerId2 } = customData;
    const isPlayerWhite = whitePlayerId === playerId2;
    const isPlayerBlack = blackPlayerId === playerId2;
    if (!isPlayerWhite && blackPlayerId === SampleOpponent_default.playerId) {
      throw new PlayerNotJoinInMatch_default();
    }
    if (!isPlayerWhite && !isPlayerBlack) {
      throw new PlayerNotCurrentInMatch_default();
    }
  }
  validatePlayerTurn(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const { finished } = profiles[playerId2];
    if (finished) {
      throw new PlayerHasFinishedMatch_default();
    }
  }
  async getMatchAsync(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData(matchState, matchData) {
    this.updateMatchGeneral(matchState, matchData);
    this.updatePlayerIds(matchState, matchData);
    this.initializeProfiles(matchState);
    this.updateScoresAndStatus(matchState, matchData);
  }
  updateMatchGeneral(matchState, matchData) {
    const { extraData } = matchData;
    matchState.customData = O19.merge(matchState.customData, extraData);
  }
  updatePlayerIds(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.customData.playerId = isPlayerWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
  }
  initializeProfiles(matchState) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const defaultProfile = {
      name: "",
      photo: "",
      finished: false
    };
    if (!matchState.profiles[playerId2]) {
      matchState.profiles[playerId2] = __spreadValues({ id: playerId2 }, defaultProfile);
    }
    if (!matchState.profiles[opponentId]) {
      matchState.profiles[opponentId] = __spreadValues({ id: opponentId }, defaultProfile);
    }
  }
  updateScoresAndStatus(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const { whitePlayerId, whitePlayerScore, whitePlayerFinish, blackPlayerScore, blackPlayerFinish } = matchData;
    const isPlayerWhite = whitePlayerId === playerId2;
    matchState.profiles[playerId2].score = isPlayerWhite ? whitePlayerScore : blackPlayerScore;
    matchState.profiles[opponentId].score = isPlayerWhite ? blackPlayerScore : whitePlayerScore;
    matchState.profiles[playerId2].finished = isPlayerWhite ? whitePlayerFinish : blackPlayerFinish;
    matchState.profiles[opponentId].finished = isPlayerWhite ? blackPlayerFinish : whitePlayerFinish;
  }
};
var ContinueMatchHandler_default = ContinueMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendUpdateMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SendUpdateMessageHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (this.payload.ignore) {
      await this.nextAsync(matchState);
      return;
    }
    this.validateData(matchState);
    const imageResult = await this.createWideframesCurrentScoreAsync();
    if (imageResult) {
      this.sendMessageAsync(matchState, imageResult);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async createWideframesCurrentScoreAsync() {
    try {
      const { player, frameCapture } = this.codex;
      const { playerId: playerId2, photo: playerPhoto } = player.getPlayer();
      return await frameCapture.wideframe.renderUpdateChallenge({
        playerId: playerId2,
        playerPhoto
      });
    } catch (error) {
      console.warn("createWideframesCurrentScoreAsync", error);
      return null;
    }
  }
  async sendMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId
      },
      action: "CUSTOM",
      template: "challenge",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} made an update.`,
        localizations: {
          vi_VN: `${playerName} \u0111\xE3 c\u1EADp nh\u1EADt tr\u1EADn \u0111\u1EA5u. Ch\u01A1i ngay!`
        }
      },
      image: wideframes,
      // ? LAST is mean a message draft will be replaced by the latest message
      strategy: "LAST",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
};
var SendUpdateMessageHandler_default = SendUpdateMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ContinueChallengeMatchConcrete.ts
var ContinueChallengeMatchConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { contextId: contextId2, matchId, playerId: playerId2, opponentId, sendUpdateMessage = true } = payload;
      const flow = new NothingHandler_default(this);
      const switchContext = new SwitchContextHandler_default(this, { contextId: contextId2 });
      flow.setNext(switchContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: matchId,
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      switchContext.setNext(prepareMatch);
      const continueMatch = new ContinueMatchHandler_default(this);
      prepareMatch.setNext(continueMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      continueMatch.setNext(getMatchProfiles);
      const startMatch = new StartMatchHandler_default(this);
      getMatchProfiles.setNext(startMatch);
      const sendMessage = new SendUpdateMessageHandler_default(this, {
        ignore: !sendUpdateMessage
      });
      startMatch.setNext(sendMessage);
      const logStart = new LogMatchStartHandler_default(this);
      sendMessage.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var ContinueChallengeMatchConcrete_default = ContinueChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/FinishChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchFinishedHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Plugins: Plugins3, Utils: Utils5 } = Ludex;
var { Analytics: Analytics3 } = Plugins3;
var { String: S5, Valid: V16 } = Utils5;
var LogMatchFinishedHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { customData, mode, startAt, finishAt } = matchState;
    const { level: level2 } = customData;
    this.validateMode(mode);
    this.validateLevel(level2);
    const { analytics } = this.codex;
    const seconds = Math.floor((finishAt - startAt) / 1e3);
    analytics.event(Analytics3.Events.MATCH_END, {
      level: level2,
      game_mode: S5.toUpperCamelCase(mode),
      level_name: this.getLevelName(level2),
      time_played: seconds
    });
    await this.nextAsync(matchState);
  }
  validateMode(mode) {
    if (!V16.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
  validateLevel(level2) {
    if (!V16.isNumber(level2)) {
      throw new LevelNotDefined_default();
    }
  }
  getLevelName(level2) {
    return `Level ${S5.padStart(level2.toString(), 5, "0")}`;
  }
};
var LogMatchFinishedHandler_default = LogMatchFinishedHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostGlobalLeaderboardsScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/LeaderboardNotExist.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var LeaderboardNotExist = class extends Error {
  constructor(message) {
    super(message);
    this.name = "LeaderboardNotExist";
    this.message = message ?? "Leaderboard not exist in game";
  }
};
var LeaderboardNotExist_default = LeaderboardNotExist;

// extensions/ludex/src/plugins/match/exceptions/ScoreNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ScoreNotValid = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ScoreNotValid";
    this.message = message ?? "Score is not valid";
  }
};
var ScoreNotValid_default = ScoreNotValid;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostGlobalLeaderboardsScoreHandler.ts
var {
  Utils: { Valid: V17 },
  Configs: {
    Leaderboards: { LeaderboardList }
  }
} = Ludex;
var PostGlobalLeaderboardsScoreHandler = class extends BaseHandler_default {
  payload;
  skipPostScore;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = { score: 0, playerId: "" };
    this.skipPostScore = !!payload?.ignore;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (this.skipPostScore) {
      await this.nextAsync(matchState);
      return;
    }
    this.setupSetScorePayload(matchState);
    if ("submitGameResultsAsync" in GameSDK.extra) {
      await GameSDK.extra.submitGameResultsAsync(this.payload.score);
    }
    for (const LeaderboardConfig of LeaderboardList) {
      const { Id, Mode } = LeaderboardConfig;
      if (!matchState.mode || !this.isValidMode(Mode, matchState.mode)) continue;
      this.setLeaderboardScoreAsync(__spreadValues({
        leaderboardId: Id
      }, this.payload));
    }
    await this.nextAsync(matchState);
  }
  isValidMode(leaderboardMode, matchMode) {
    return leaderboardMode === matchMode;
  }
  async setupSetScorePayload(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { score: score2 } = profiles[playerId2];
    if (!V17.isNumber(score2)) {
      throw new ScoreNotValid_default();
    }
    this.payload = {
      score: score2,
      playerId: playerId2
    };
  }
  async setLeaderboardScoreAsync(payload) {
    try {
      const { playerId: playerId2, score: score2, leaderboardId } = payload;
      const name2 = this.codex.leaderboard.getLeaderboardName(leaderboardId);
      if (!name2) {
        throw new LeaderboardNotExist_default();
      }
      await this.codex.leaderboard.setLeaderboardScoreAsync(name2, playerId2, score2);
    } catch (error) {
      console.warn("setLeaderboardScoreAsync", error);
    }
  }
};
var PostGlobalLeaderboardsScoreHandler_default = PostGlobalLeaderboardsScoreHandler;

// extensions/ludex/src/plugins/match/handlers/match/FinishMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Dtos: Dtos6, Utils: Utils6 } = Ludex;
var { Valid: V18, Object: O20 } = Utils6;
var FinishMatchHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData(matchState);
    const { useAPI } = this.payload;
    if (useAPI) {
      const respMatchData = await this.finishMatchAsync(matchState);
      const respMatchDataValidated = new Dtos6.Match.Data(respMatchData).toObject();
      this.updateMatchFromAPI(matchState, respMatchDataValidated);
    } else {
      this.updateMatchData(matchState);
    }
    this.updateMatchState(matchState);
    await this.nextAsync(matchState);
  }
  validateMatchData(matchState) {
    const { status, profiles, customData } = matchState;
    if (status !== MatchStatus_default.ACTIVE) {
      throw new MatchAreNotActive_default();
    }
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !O20.hasOwn(profiles, playerId2)) {
      throw new PlayerNotCurrentInMatch_default();
    }
  }
  updateMatchData(matchState) {
    const { playerId: playerId2 } = matchState.customData;
    if (!V18.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
    matchState.profiles[playerId2].finished = true;
  }
  updateMatchState(matchState) {
    matchState.status = MatchStatus_default.FINISHED;
    matchState.finishAt = Date.now();
  }
  async finishMatchAsync(matchState) {
    const { id, profiles, customData } = matchState;
    const { level: level2, playerId: playerId2 } = customData;
    if (!V18.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
    const { score: score2 } = profiles[playerId2];
    const { extraData } = this.payload;
    const payload = {
      matchId: id ?? "",
      score: score2,
      level: level2,
      extraData
    };
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.finishMatchAsync(payload);
  }
  updateMatchFromAPI(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!V18.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
    if (!V18.isString(opponentId)) {
      throw new OpponentIdNotValid_default();
    }
    const { whitePlayerId, whitePlayerScore, blackPlayerScore, whitePlayerFinish, blackPlayerFinish } = matchData;
    const isPlayerWhite = playerId2 === whitePlayerId;
    const playerScore = isPlayerWhite ? whitePlayerScore : blackPlayerScore;
    const opponentScore = isPlayerWhite ? blackPlayerScore : whitePlayerScore;
    const playerFinish = isPlayerWhite ? whitePlayerFinish : blackPlayerFinish;
    const opponentFinish = isPlayerWhite ? blackPlayerFinish : whitePlayerFinish;
    matchState.profiles[playerId2].score = playerScore;
    matchState.profiles[opponentId].score = opponentScore;
    matchState.profiles[playerId2].finished = playerFinish;
    matchState.profiles[opponentId].finished = opponentFinish;
  }
};
var FinishMatchHandler_default = FinishMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendFinishedMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SendFinishedMessageHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const imageResult = await this.createWideframesResultAsync(matchState);
    if (imageResult) {
      this.progressSendFinishedMessage(matchState, imageResult);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async createWideframesResultAsync(matchState) {
    try {
      const { frameCapture } = this.codex;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0, finished: playerFinished } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0, finished: opponentFinished } = opponentProfile;
      return await frameCapture.wideframe.renderResultChallenge({
        playerId: playerId2,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished: !!playerFinished,
        isOpponentFinished: !!opponentFinished
      });
    } catch (error) {
      console.warn("createWideframesResultAsync", error);
      return null;
    }
  }
  progressSendFinishedMessage(matchState, wideframes) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
    if (!profiles[playerId2] || !profiles[opponentId]) {
      throw new ProfileNotFound_default();
    }
    const { score: playerScore = 0, finished: playerFinished } = profiles[playerId2];
    const { score: opponentScore = 0, finished: opponentFinished } = profiles[opponentId];
    if (playerFinished) {
      this.sendFinishMessageAsync(matchState, wideframes);
    } else if (opponentFinished && playerScore > opponentScore) {
      this.sendBestScoreMessageAsync(matchState, wideframes);
    } else {
      this.sendPlayTurnMessageAsync(matchState, wideframes);
    }
  }
  async sendFinishMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId,
        status: MatchStatus_default.FINISHED
      },
      action: "CUSTOM",
      template: "finished",
      cta: {
        default: "See result",
        localizations: {
          vi_VN: "Xem k\u1EBFt qu\u1EA3"
        }
      },
      text: {
        default: `${playerName} just finished. Check them now.`,
        localizations: {
          vi_VN: `${playerName} v\u1EEBa ho\xE0n th\xE0nh m\xE0n ch\u01A1i. Nh\u1EA5n \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 tr\u1EADn \u0111\u1EA5u.`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
  async sendPlayTurnMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName, score: playerScore } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId,
        status: MatchStatus_default.ACTIVE
      },
      action: "CUSTOM",
      template: "finished",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} got ${playerScore} scores. So easy! Can you?`,
        localizations: {
          vi_VN: `${playerName} \u0111\xE3 \u0111\u1EA1t ${playerScore} \u0111i\u1EC3m! Nh\u1EA5n Ch\u01A1i \u0111\u1EC3 so t\xE0i!`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
  async sendBestScoreMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName, score: playerScore } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId,
        status: MatchStatus_default.FINISHED
      },
      action: "CUSTOM",
      template: "pass_score",
      cta: {
        default: "See result",
        localizations: {
          vi_VN: "Xem k\u1EBFt qu\u1EA3"
        }
      },
      text: {
        default: `${playerName} beat your high score. Their score: ${playerScore}`,
        localizations: {
          vi_VN: `${playerName} \u0111\xE3 v\u01B0\u1EE3t qua \u0111i\u1EC3m s\u1ED1 c\u1EE7a b\u1EA1n, v\u1EDBi ${playerScore}\
 \u0111i\u1EC3m!`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
};
var SendFinishedMessageHandler_default = SendFinishedMessageHandler;

// extensions/ludex/src/plugins/match/handlers/player/SetPlayerBestScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SetPlayerBestScoreHandler = class extends BaseHandler_default {
  ignore;
  constructor(concrete, payload) {
    super(concrete);
    this.ignore = !!payload?.ignore;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.setPlayerBestScore(matchState);
    await this.nextAsync(matchState);
  }
  setPlayerBestScore(matchState) {
    if (this.ignore) return;
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { player } = this.codex;
    const bestScore = player.getBestScore() || 0;
    const { score: score2 = 0 } = profiles[playerId2];
    if (score2 <= bestScore) return;
    player.setBestScore(score2);
    profiles[playerId2].bestScore = score2;
  }
};
var SetPlayerBestScoreHandler_default = SetPlayerBestScoreHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/FinishChallengeMatchConcrete.ts
var FinishChallengeMatchConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { extraData } = payload ?? {};
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: true, extraData });
      flow.setNext(finishMatch);
      const sendMessage = new SendFinishedMessageHandler_default(this);
      finishMatch.setNext(sendMessage);
      const logFinish = new LogMatchFinishedHandler_default(this);
      sendMessage.setNext(logFinish);
      const setPlayerBestScore = new SetPlayerBestScoreHandler_default(this);
      logFinish.setNext(setPlayerBestScore);
      const postLeaderboardsScore = new PostGlobalLeaderboardsScoreHandler_default(this);
      setPlayerBestScore.setNext(postLeaderboardsScore);
      const detectGameMode = new ContextGameModeHandler_default(this);
      postLeaderboardsScore.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var FinishChallengeMatchConcrete_default = FinishChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/InviteFriendsConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/challenge/GetOpponentChallengeContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/ContextAreSolo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextAreSolo = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextAreSolo";
    this.message = message ?? "Context are solo";
  }
};
var ContextAreSolo_default = ContextAreSolo;

// extensions/ludex/src/plugins/match/exceptions/ContextNotChallenge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextNotChallenge = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextNotChallenge";
    this.message = message ?? "Context is not a challenge";
  }
};
var ContextNotChallenge_default = ContextNotChallenge;

// extensions/ludex/src/plugins/match/exceptions/NetworkFailure.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var NetworkFailure = class extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkFailure";
    this.message = message ?? "Network failure";
  }
};
var NetworkFailure_default = NetworkFailure;

// extensions/ludex/src/plugins/match/handlers/context/challenge/GetOpponentChallengeContextHandler.ts
var { Utils: Utils7, Dtos: Dtos7 } = Ludex;
var { Array: A6, Object: O21 } = Utils7;
var GetOpponentChallengeContextHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.checkCurrentContext();
    const opponentId = await this.getOpponentIdFromContextAsync();
    matchState.customData.opponentId = opponentId;
    await this.nextAsync(matchState);
  }
  checkCurrentContext() {
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (contextId2 === "SOLO") {
      throw new ContextAreSolo_default();
    }
  }
  async getOpponentIdFromContextAsync() {
    const { ignoreId } = this.payload;
    const players = await this.getContextPlayers([ignoreId]);
    if (players.length > 1) {
      throw new ContextNotChallenge_default();
    }
    let opponent = SampleOpponent_default;
    if (players.length === 1) {
      opponent = players[0];
    }
    return opponent.playerId;
  }
  async getContextPlayers(ignorePlayers) {
    try {
      const playersData = await GameSDK.context.getPlayersAsync();
      const players = [];
      for (const player of playersData) {
        const playerId2 = player.getID();
        if (ignorePlayers.indexOf(playerId2) > -1) continue;
        const name2 = player.getName();
        if (!name2) continue;
        const photo2 = player.getPhoto();
        players.push(new Dtos7.Player.Info({ playerId: playerId2, name: name2, photo: photo2 }).toObject());
      }
      return A6.unique(players);
    } catch (error) {
      if (O21.hasOwn(error, "code") && error.code === "NETWORK_FAILURE") {
        throw new NetworkFailure_default();
      }
      return [];
    }
  }
};
var GetOpponentChallengeContextHandler_default = GetOpponentChallengeContextHandler;

// extensions/ludex/src/plugins/match/handlers/context/friend/ChooseContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/ContextIsTournament.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ContextIsTournament = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextIsTournament";
    this.message = message ?? "Context is a tournament";
  }
};
var ContextIsTournament_default = ContextIsTournament;

// extensions/ludex/src/plugins/match/handlers/context/friend/ChooseContextHandler.ts
var { Object: O22 } = Ludex.Utils;
var ChooseContextHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const contextId2 = await this.chooseAsync();
    await this.checkContextTournament();
    matchState.customData.contextId = contextId2;
    await this.nextAsync(matchState);
  }
  async chooseAsync() {
    try {
      await GameSDK.context.chooseAsync({
        filters: ["INCLUDE_EXISTING_CHALLENGES"],
        minSize: 2,
        maxSize: 2
      });
    } catch (error) {
      if (!O22.hasOwn(error, "code")) throw error;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
  async checkContextTournament() {
    try {
      const contextId2 = GameSDK.context.getID();
      if (!contextId2) return;
      if (!("getTournamentAsync" in GameSDK)) {
        throw new UnavailableFeature_default("getTournamentAsync");
      }
      await GameSDK.getTournamentAsync();
      throw new ContextIsTournament_default();
    } catch (error) {
      if (error instanceof ContextIsTournament_default) throw error;
    }
  }
};
var ChooseContextHandler_default = ChooseContextHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/InviteFriendsConcrete.ts
var InviteFriendsConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, extraData } = payload;
      const flow = new NothingHandler_default(this);
      const chooseContext = new ChooseContextHandler_default(this);
      flow.setNext(chooseContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2
        }
      });
      chooseContext.setNext(prepareMatch);
      const getOpponentId = new GetOpponentChallengeContextHandler_default(this, {
        ignoreId: playerId2
      });
      prepareMatch.setNext(getOpponentId);
      const createMatch = new CreateMatchHandler_default(this, { extraData });
      getOpponentId.setNext(createMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      createMatch.setNext(getMatchProfiles);
      const startMatch = new StartMatchHandler_default(this);
      getMatchProfiles.setNext(startMatch);
      const logStart = new LogMatchStartHandler_default(this);
      startMatch.setNext(logStart);
      const sendMessage = new SendChallengeMessageHandler_default(this);
      logStart.setNext(sendMessage);
      const detectGameMode = new ContextGameModeHandler_default(this);
      sendMessage.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var InviteFriendsConcrete_default = InviteFriendsConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/JoinChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/match/JoinMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/JoinMatchFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var JoinMatchFailed = class extends Error {
  constructor(message) {
    super(message);
    this.name = "JoinMatchFailed";
    this.message = message ?? "Join match failed";
  }
};
var JoinMatchFailed_default = JoinMatchFailed;

// extensions/ludex/src/plugins/match/exceptions/MatchAreFinished.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchAreFinished = class extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreFinished";
    this.message = message ?? "Match are finished";
  }
};
var MatchAreFinished_default = MatchAreFinished;

// extensions/ludex/src/plugins/match/exceptions/OtherPlayerHasJoinedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var OtherPlayerHasJoinedMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "OtherPlayerHasJoinedMatch";
    this.message = message ?? "Other player has joined match";
  }
};
var OtherPlayerHasJoinedMatch_default = OtherPlayerHasJoinedMatch;

// extensions/ludex/src/plugins/match/handlers/match/JoinMatchHandler.ts
var {
  Dtos: Dtos8,
  Utils: { Object: O23 }
} = Ludex;
var JoinMatchHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData(matchState);
    const respMatchData = await this.joinMatchAsync(matchState);
    const respMatchDataValidated = new Dtos8.Match.Data(respMatchData).toObject();
    this.validateJoinMatchData(matchState, respMatchDataValidated);
    this.updateMatchData(matchState, respMatchDataValidated);
    await this.nextAsync(matchState);
  }
  validateMatchData(matchState) {
    const { status } = matchState;
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  validateJoinMatchData(matchState, matchData) {
    const { id, customData } = matchState;
    const { _id, blackPlayerId, whitePlayerId, whitePlayerFinish, blackPlayerFinish } = matchData;
    const isPlayerBlack = blackPlayerId === customData.playerId;
    const isPlayerWhite = whitePlayerId === customData.opponentId;
    if (typeof _id !== "string" || _id !== id || !isPlayerWhite) {
      console.warn("\u{1F916} ? matchData", matchData);
      throw new JoinMatchFailed_default();
    }
    const isMatchFinished = whitePlayerFinish && blackPlayerFinish;
    if (isMatchFinished) {
      throw new MatchAreFinished_default();
    }
    if (!isPlayerBlack) {
      throw new OtherPlayerHasJoinedMatch_default();
    }
  }
  async joinMatchAsync(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.joinMatchAsync(id);
  }
  updateMatchData(matchState, matchData) {
    this.updateMatchGeneral(matchState, matchData);
    this.updatePlayerIds(matchState, matchData);
    this.initializeProfiles(matchState);
    this.updateScoresAndStatus(matchState, matchData);
  }
  updateMatchGeneral(matchState, matchData) {
    const { extraData } = matchData;
    matchState.customData = O23.merge(matchState.customData, extraData);
  }
  updatePlayerIds(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isPlayerWhite = whitePlayerId === customData.playerId;
    const playerId2 = isPlayerWhite ? whitePlayerId : blackPlayerId;
    const opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles(matchState) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const defaultProfile = {
      name: "",
      photo: "",
      finished: false
    };
    if (!matchState.profiles[playerId2]) {
      matchState.profiles[playerId2] = __spreadValues({ id: playerId2 }, defaultProfile);
    }
    if (!matchState.profiles[opponentId]) {
      matchState.profiles[opponentId] = __spreadValues({ id: opponentId }, defaultProfile);
    }
  }
  updateScoresAndStatus(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const { whitePlayerId, whitePlayerScore, whitePlayerFinish, blackPlayerScore, blackPlayerFinish } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.profiles[playerId2].score = isPlayerWhite ? whitePlayerScore : blackPlayerScore;
    matchState.profiles[opponentId].score = isPlayerWhite ? blackPlayerScore : whitePlayerScore;
    matchState.profiles[playerId2].finished = isPlayerWhite ? whitePlayerFinish : blackPlayerFinish;
    matchState.profiles[opponentId].finished = isPlayerWhite ? blackPlayerFinish : whitePlayerFinish;
  }
};
var JoinMatchHandler_default = JoinMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendAcceptedMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SendAcceptedMessageHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    const imageResult = await this.createWideframesAcceptedAsync(matchState);
    if (imageResult) {
      this.sendMessageAsync(matchState, imageResult);
    }
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  // TODO: use other wideframe for accepted message
  async createWideframesAcceptedAsync(matchState) {
    try {
      const { frameCapture } = this.codex;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0, finished: playerFinished } = playerProfile;
      if (playerFinished) return null;
      const { photo: opponentPhoto, score: opponentScore = 0, finished: opponentFinished } = opponentProfile;
      if (!opponentFinished) return null;
      return await frameCapture.wideframe.renderResultChallenge({
        playerId: playerId2,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished: false,
        isOpponentFinished: true
      });
    } catch (error) {
      console.warn("createWideframesAcceptedAsync", error);
      return null;
    }
  }
  async sendMessageAsync(matchState, wideframes) {
    const { id, profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName } = playerProfile;
    const message = {
      data: {
        type: ContextTypes_default2.CHALLENGE_FRIEND,
        matchId: id,
        playerId: playerId2,
        opponentId
      },
      action: "CUSTOM",
      template: "challenge",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} accepted the challenge.`,
        localizations: {
          vi_VN: `${playerName} \u0111\xE3 ch\u1EA5p nh\u1EADn tham gia tr\u1EADn \u0111\u1EA5u.`
        }
      },
      image: wideframes,
      // ? LAST is mean a message draft will be replaced by the latest message
      strategy: "LAST",
      notification: "PUSH"
    };
    await GameSDK.extra.updateAsync(message);
  }
};
var SendAcceptedMessageHandler_default = SendAcceptedMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/JoinChallengeMatchConcrete.ts
var JoinChallengeMatchConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { matchId, playerId: playerId2, opponentId } = payload;
      const flow = new NothingHandler_default(this);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: matchId,
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      flow.setNext(prepareMatch);
      const getMatch = new JoinMatchHandler_default(this);
      prepareMatch.setNext(getMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      getMatch.setNext(getMatchProfiles);
      const startMatch = new StartMatchHandler_default(this);
      getMatchProfiles.setNext(startMatch);
      const sendMessage = new SendAcceptedMessageHandler_default(this);
      startMatch.setNext(sendMessage);
      const logStart = new LogMatchStartHandler_default(this);
      sendMessage.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var JoinChallengeMatchConcrete_default = JoinChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ResultChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/match/ResultMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/dtos/RespMatchDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/data/DefaultRespMatchDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultRespMatchDataDtos = {
  _id: "",
  status: "",
  appId: "",
  createdAt: "",
  startedAt: null,
  finishedAt: null,
  winnerId: "",
  whitePlayerId: "",
  blackPlayerId: "",
  whitePlayerScore: 0,
  blackPlayerScore: 0,
  whitePlayerFinish: false,
  blackPlayerFinish: false,
  extraData: {}
};
var DefaultRespMatchDataDtos_default = DefaultRespMatchDataDtos;

// extensions/ludex/src/plugins/match/dtos/RespMatchDataDtos.ts
var {
  Configs: { AppId: AppId3 },
  Utils: { Valid: V19 }
} = Ludex;
var MESSAGE_INVALID4 = "is invalid";
var RespMatchDataDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  // * Special validation
  // ? Field names with special characters will be automatically removed.
  // For example, _id becomes id => validateId.
  validateId(_id) {
    if (!V19.isString(_id) || !_id) {
      this.exception$("_id", MESSAGE_INVALID4);
    }
  }
  validateStatus(status) {
    if (!V19.isString(status) || !status) {
      this.exception$("status", MESSAGE_INVALID4);
    }
  }
  validateAppId(appId) {
    if (!V19.isString(appId) || appId !== AppId3) {
      this.exception$("appId", MESSAGE_INVALID4);
    }
  }
  validateCreatedAt(createdAt) {
    if (!V19.isString(createdAt)) {
      this.exception$("createdAt", MESSAGE_INVALID4);
    }
  }
  validateStartedAt(startedAt) {
    if (startedAt === null) return;
    if (!V19.isString(startedAt)) {
      this.exception$("startedAt", MESSAGE_INVALID4);
    }
  }
  validateFinishedAt(finishedAt) {
    if (finishedAt === null) return;
    if (!V19.isString(finishedAt)) {
      this.exception$("finishedAt", MESSAGE_INVALID4);
    }
  }
  validateExtraData(extraData) {
    if (extraData === null) return;
    if (!V19.isObject(extraData)) {
      this.exception$("extraData", MESSAGE_INVALID4);
    }
  }
  validateWinnerId(winnerId) {
    if (winnerId === null) return;
    if (!V19.isString(winnerId) || !winnerId) {
      this.exception$("winnerId", MESSAGE_INVALID4);
    }
  }
  validateWhitePlayerId(whitePlayerId) {
    if (!V19.isString(whitePlayerId) || !whitePlayerId) {
      this.exception$("whitePlayerId", MESSAGE_INVALID4);
    }
  }
  validateBlackPlayerId(blackPlayerId) {
    if (!V19.isString(blackPlayerId) || !blackPlayerId) {
      this.exception$("blackPlayerId", MESSAGE_INVALID4);
    }
  }
  validateWhitePlayerScore(whitePlayerScore) {
    if (!V19.isNumber(whitePlayerScore)) {
      this.exception$("whitePlayerScore", MESSAGE_INVALID4);
    }
  }
  validateBlackPlayerScore(blackPlayerScore) {
    if (!V19.isNumber(blackPlayerScore)) {
      this.exception$("blackPlayerScore", MESSAGE_INVALID4);
    }
  }
  validateWhitePlayerFinish(whitePlayerFinish) {
    if (!V19.isBoolean(whitePlayerFinish)) {
      this.exception$("whitePlayerFinish", MESSAGE_INVALID4);
    }
  }
  validateBlackPlayerFinish(blackPlayerFinish) {
    if (!V19.isBoolean(blackPlayerFinish)) {
      this.exception$("blackPlayerFinish", MESSAGE_INVALID4);
    }
  }
  toObject() {
    return super.toObject();
  }
};
RespMatchDataDtos.makeStrict();
RespMatchDataDtos.addDefaultData(DefaultRespMatchDataDtos_default);
var RespMatchDataDtos_default = RespMatchDataDtos;

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotFinished.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchAreNotFinished = class extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotFinished";
    this.message = message || "Match are not finished";
  }
};
var MatchAreNotFinished_default = MatchAreNotFinished;

// extensions/ludex/src/plugins/match/exceptions/OpponentNotFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var OpponentNotFinishedMatch = class extends Error {
  constructor(message) {
    super(message);
    this.name = "OpponentNotFinishedMatch";
    this.message = message || "Opponent not finished match";
  }
};
var OpponentNotFinishedMatch_default = OpponentNotFinishedMatch;

// extensions/ludex/src/plugins/match/handlers/match/ResultMatchHandler.ts
var {
  Utils: { Object: O24 }
} = Ludex;
var ResultMatchHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData(matchState);
    const respMatchData = await this.getMatchAsync(matchState);
    const respMatchDataValidated = new RespMatchDataDtos_default(respMatchData).toObject();
    this.validateResultMatchData(matchState, respMatchDataValidated);
    this.updateMatchData(matchState, respMatchDataValidated);
    this.validatePlayerTurn(matchState);
    this.validateOpponentTurn(matchState);
    await this.nextAsync(matchState);
  }
  validateMatchData(matchState) {
    const { id } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
  }
  validateResultMatchData(matchState, matchData) {
    const { id } = matchState;
    const { _id, whitePlayerFinish, blackPlayerFinish } = matchData;
    if (typeof _id !== "string" || _id !== id) {
      throw new GetMatchDetailFailed_default();
    }
    if (!whitePlayerFinish && !blackPlayerFinish) {
      throw new MatchAreNotFinished_default();
    }
  }
  validatePlayerTurn(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const { finished } = profiles[playerId2];
    if (!finished) {
      throw new PlayerNotFinishedMatch_default();
    }
  }
  validateOpponentTurn(matchState) {
    const { profiles, customData } = matchState;
    const { opponentId } = customData;
    if (typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
    const { finished } = profiles[opponentId];
    if (!finished) {
      throw new OpponentNotFinishedMatch_default();
    }
  }
  async getMatchAsync(matchState) {
    const { id } = matchState;
    if (!id) return null;
    const matchAPI = this.match.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData(matchState, matchData) {
    this.updateMatchGeneral(matchState, matchData);
    this.updatePlayerIds(matchState, matchData);
    this.initializeProfiles(matchState);
    this.updateScoresAndStatus(matchState, matchData);
  }
  updateMatchGeneral(matchState, matchData) {
    const { extraData } = matchData;
    matchState.status = MatchStatus_default.FINISHED;
    matchState.customData = O24.merge(matchState.customData, extraData);
  }
  updatePlayerIds(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isPlayerWhite = whitePlayerId === customData.playerId;
    const playerId2 = isPlayerWhite ? whitePlayerId : blackPlayerId;
    const opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles(matchState) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const defaultProfile = {
      name: "",
      photo: "",
      finished: true
    };
    if (!matchState.profiles[playerId2]) {
      matchState.profiles[playerId2] = __spreadValues({ id: playerId2 }, defaultProfile);
    }
    if (!matchState.profiles[opponentId]) {
      matchState.profiles[opponentId] = __spreadValues({ id: opponentId }, defaultProfile);
    }
  }
  updateScoresAndStatus(matchState, matchData) {
    const { playerId: playerId2, opponentId } = matchState.customData;
    if (!playerId2 || !opponentId) return;
    const { whitePlayerId, whitePlayerScore, whitePlayerFinish, blackPlayerScore, blackPlayerFinish } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.profiles[playerId2].score = isPlayerWhite ? whitePlayerScore : blackPlayerScore;
    matchState.profiles[opponentId].score = isPlayerWhite ? blackPlayerScore : whitePlayerScore;
    matchState.profiles[playerId2].finished = isPlayerWhite ? whitePlayerFinish : blackPlayerFinish;
    matchState.profiles[opponentId].finished = isPlayerWhite ? blackPlayerFinish : whitePlayerFinish;
  }
};
var ResultMatchHandler_default = ResultMatchHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ResultChallengeMatchConcrete.ts
var ResultChallengeMatchConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { matchId, playerId: playerId2, opponentId } = payload;
      const flow = new NothingHandler_default(this);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: matchId,
        mode: MatchModes_default.CHALLENGE_FRIEND,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      flow.setNext(prepareMatch);
      const getMatch = new ResultMatchHandler_default(this);
      prepareMatch.setNext(getMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      getMatch.setNext(getMatchProfiles);
      const detectGameMode = new ContextGameModeHandler_default(this);
      getMatchProfiles.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var ResultChallengeMatchConcrete_default = ResultChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/context/ChooseContextConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ChooseContextConcrete = class extends BaseConcrete_default {
  fallbackSingleMode;
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, extraData, fallbackSingleMode } = payload;
      this.fallbackSingleMode = fallbackSingleMode;
      const response = await this.startFLowChallengeFriend({
        playerId: playerId2,
        extraData
      });
      if (response === true) return;
      if (response instanceof ContextIsTournament_default) {
        await this.startFlowTournament(playerId2);
      } else {
        if (this.fallbackSingleMode) {
          await this.startFlowSingle(playerId2);
        } else {
          throw response;
        }
      }
    } finally {
      this.endLog();
    }
  }
  startFLowChallengeFriend = async (payload) => {
    try {
      await this.match.challenge.invite.processAsync(payload);
      return true;
    } catch (error) {
      return error;
    }
  };
  startFlowTournament = async (playerId2) => {
    try {
      const contextId2 = GameSDK.context.getID();
      if (typeof contextId2 !== "string") {
        throw new ContextIdNotValid_default();
      }
      await this.match.tournament.continue.processAsync({ playerId: playerId2, contextId: contextId2 });
    } catch (error) {
      await this.startFlowSingle(playerId2);
    }
  };
  startFlowSingle = async (playerId2) => {
    return this.match.single.start.processAsync({ playerId: playerId2 });
  };
};
var ChooseContextConcrete_default = ChooseContextConcrete;

// extensions/ludex/src/plugins/match/concretes/group/FinishGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostLeaderboardScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/LeaderboardIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var LeaderboardIdNotValid = class extends Error {
  constructor(message) {
    super(message);
    this.name = "LeaderboardIdNotValid";
    this.message = message ?? "Leaderboard id is not valid";
  }
};
var LeaderboardIdNotValid_default = LeaderboardIdNotValid;

// extensions/ludex/src/plugins/match/handlers/leaderboard/SetLeaderboardScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V20 } = Ludex.Utils;
var SetLeaderboardScoreHandler = class extends BaseHandler_default {
  payload;
  leaderboardPayload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.setupSetScorePayload(matchState);
    if ("submitGameResultsAsync" in GameSDK.extra) {
      await GameSDK.extra.submitGameResultsAsync(this.payload.score);
    }
    this.setLeaderboardScoreAsync();
    await this.nextAsync(matchState);
  }
  async setupSetScorePayload(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { score: score2, leaderboardId } = this.payload;
    if (!V20.isNumber(score2)) {
      throw new ScoreNotValid_default();
    }
    if (!V20.isString(leaderboardId)) {
      throw new LeaderboardIdNotValid_default();
    }
    this.leaderboardPayload = {
      score: score2,
      playerId: playerId2,
      leaderboardId
    };
  }
  async setLeaderboardScoreAsync() {
    try {
      const { playerId: playerId2, score: score2, leaderboardId } = this.leaderboardPayload;
      const name2 = this.codex.leaderboard.getLeaderboardName(leaderboardId);
      if (!name2) {
        throw new LeaderboardNotExist_default();
      }
      await this.codex.leaderboard.setLeaderboardScoreAsync(name2, playerId2, score2);
    } catch (error) {
      console.warn("setLeaderboardScoreAsync", error);
    }
  }
};
var SetLeaderboardScoreHandler_default = SetLeaderboardScoreHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostLeaderboardScoreHandler.ts
var {
  Utils: { Valid: V21 }
} = Ludex;
var PostLeaderboardScoreHandler = class extends SetLeaderboardScoreHandler_default {
  constructor(concrete) {
    super(concrete, { score: 0, leaderboardId: "" });
  }
  async setupSetScorePayload(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2, leaderboardId } = customData;
    if (!leaderboardId) {
      throw new LeaderboardIdNotValid_default();
    }
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { score: score2 } = profiles[playerId2];
    if (!V21.isNumber(score2)) {
      throw new ScoreNotValid_default();
    }
    this.payload.score = score2;
    this.payload.leaderboardId = leaderboardId;
    super.setupSetScorePayload(matchState);
  }
};
var PostLeaderboardScoreHandler_default = PostLeaderboardScoreHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendGroupMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var SendGroupMessageHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    this.progressSendGroupMessage(matchState);
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { id, customData } = matchState;
    const { contextId: contextId2, opponentId } = customData;
    if (!id || typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (!contextId2 || typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async createWideframesResultGroupAsync(matchState) {
    try {
      const { frameCapture } = this.codex;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0 } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0 } = opponentProfile;
      return await frameCapture.wideframe.renderResultChallenge({
        playerId: playerId2,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished: true,
        isOpponentFinished: true
      });
    } catch (error) {
      console.warn("createWideframesResultGroupAsync", error);
      return null;
    }
  }
  async createWideframesBestScoreAsync(matchState) {
    try {
      const { player, frameCapture } = this.codex;
      const { playerId: matchPlayerId } = matchState.customData;
      const { playerId: playerId2, photo: playerPhoto, data } = player.getPlayer();
      if (matchPlayerId !== playerId2) return null;
      const { score: playerScore } = data || {};
      return await frameCapture.wideframe.renderShareScore({
        playerId: playerId2,
        playerPhoto,
        playerScore
      });
    } catch (error) {
      console.warn("createWideframesBestScoreAsync", error);
      return null;
    }
  }
  async progressSendGroupMessage(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (opponentId && typeof opponentId === "string") {
      if (!playerId2 || typeof playerId2 !== "string") {
        throw new PlayerIdNotValid_default();
      }
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return;
      const { score: playerScore = 0 } = playerProfile;
      const { score: opponentScore = 0 } = opponentProfile;
      if (playerScore > opponentScore) {
        const imageResult = await this.createWideframesResultGroupAsync(matchState);
        if (!imageResult) return;
        this.sendBestScoreMessageAsync(matchState, imageResult);
        return;
      }
    }
    const imageScore = await this.createWideframesBestScoreAsync(matchState);
    if (!imageScore) return;
    this.sendChallengeMessageAsync(matchState, imageScore);
  }
  async sendBestScoreMessageAsync(matchState, wideframes) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName, score: playerScore } = playerProfile;
    const ContextGameTypes2 = this.codex.context.getSessionContextTypes();
    const message = {
      data: {
        type: ContextGameTypes2.MATCHING_GROUP,
        playerId: playerId2,
        playerName,
        playerScore
      },
      action: "CUSTOM",
      template: "play_turn",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i"
        }
      },
      text: {
        default: `${playerName} beats your high score. Their score: ${playerScore}.`,
        localizations: {
          vi_VN: `${playerName} v\u1EEBa v\u01B0\u1EE3t \u0111i\u1EC3m s\u1ED1 cao nh\u1EA5t c\u1EE7a b\u1EA1n! Ch\u01A1i l\u1EA7n n\u1EEFa ch\u1EE9?`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
  async sendChallengeMessageAsync(matchState, wideframes) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    const playerProfile = profiles[playerId2];
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    const { name: playerName, score: playerScore } = playerProfile;
    const ContextGameTypes2 = this.codex.context.getSessionContextTypes();
    const message = {
      data: {
        type: ContextGameTypes2.MATCHING_GROUP,
        playerId: playerId2,
        playerName,
        playerScore
      },
      action: "CUSTOM",
      template: "play_turn",
      cta: {
        default: "Play",
        localizations: {
          vi_VN: "Ch\u01A1i ngay"
        }
      },
      text: {
        default: `${playerName} got ${playerScore} scores. So easy! Can you?`,
        localizations: {
          vi_VN: `${playerName} \u0111\xE3 \u0111\u1EA1t ${playerScore} \u0111i\u1EC3m! Qu\xE1 d\u1EC5 lu\xF4n. Ch\u01A1i l\u1EA1i \
n\xE0o!`
        }
      },
      image: wideframes,
      strategy: "IMMEDIATE",
      notification: "PUSH"
    };
    if (!("updateAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("updateAsync");
    }
    await GameSDK.extra.updateAsync(message);
  }
};
var SendGroupMessageHandler_default = SendGroupMessageHandler;

// extensions/ludex/src/plugins/match/concretes/group/FinishGroupConcrete.ts
var FinishGroupConcrete = class extends BaseConcrete_default {
  async processAsync() {
    try {
      this.startLog();
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: false });
      flow.setNext(finishMatch);
      const sendMessage = new SendGroupMessageHandler_default(this);
      finishMatch.setNext(sendMessage);
      const logFinish = new LogMatchFinishedHandler_default(this);
      sendMessage.setNext(logFinish);
      const setPlayerBestScore = new SetPlayerBestScoreHandler_default(this);
      logFinish.setNext(setPlayerBestScore);
      const postLeaderboardScore = new PostLeaderboardScoreHandler_default(this);
      setPlayerBestScore.setNext(postLeaderboardScore);
      const detectGameMode = new ContextGameModeHandler_default(this);
      postLeaderboardScore.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var FinishGroupConcrete_default = FinishGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/group/JoinGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/profile/SetProfileDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Dtos: Dtos9 } = Ludex;
var SetProfileDataHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.updateProfileMatchData(matchState);
    await this.nextAsync(matchState);
  }
  updateProfileMatchData(matchState) {
    const { id } = this.payload;
    const { profiles } = matchState;
    if (!profiles[id]) {
      throw new ProfileNotFound_default();
    }
    const profileMerged = __spreadValues(__spreadValues({}, profiles[id]), this.payload);
    const profile = new Dtos9.Match.Profile(profileMerged).toObject();
    profiles[profile.id] = profile;
  }
};
var SetProfileDataHandler_default = SetProfileDataHandler;

// extensions/ludex/src/plugins/match/concretes/group/JoinGroupConcrete.ts
var JoinGroupConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, opponentId, opponentScore } = payload;
      const flow = new NothingHandler_default(this);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: "7749",
        mode: MatchModes_default.MATCHING_GROUP,
        customData: {
          playerId: playerId2,
          opponentId
        }
      });
      flow.setNext(prepareMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      prepareMatch.setNext(getMatchProfiles);
      const setProfileData = new SetProfileDataHandler_default(this, {
        id: playerId2,
        score: opponentScore
      });
      getMatchProfiles.setNext(setProfileData);
      const startMatch = new StartMatchHandler_default(this);
      setProfileData.setNext(startMatch);
      const logStart = new LogMatchStartHandler_default(this);
      startMatch.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var JoinGroupConcrete_default = JoinGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/group/StartGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/group/GroupContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/MatchGroupNotSupported.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var MatchGroupNotSupported = class extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchGroupNotSupported";
    this.message = message ?? "Match group is not supported";
  }
};
var MatchGroupNotSupported_default = MatchGroupNotSupported;

// extensions/ludex/src/plugins/match/handlers/context/group/GroupContextHandler.ts
var GroupContextHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    await this.checkMatchGroupSupported();
    const contextId2 = await this.matchingGroup();
    matchState.customData.contextId = contextId2;
    await this.nextAsync(matchState);
  }
  async checkMatchGroupSupported() {
    if (!("getSupportedAPIs" in GameSDK)) {
      throw new UnavailableFeature_default("getSupportedAPIs");
    }
    if (!("checkCanPlayerMatchAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("checkCanPlayerMatchAsync");
    }
    const isSupported = GameSDK.getSupportedAPIs().indexOf("checkCanPlayerMatchAsync") > -1;
    if (!isSupported) throw new MatchGroupNotSupported_default();
    const canPlayerMatch = await GameSDK.extra.checkCanPlayerMatchAsync();
    if (!canPlayerMatch) throw new MatchGroupNotSupported_default();
  }
  async matchingGroup() {
    if (!("matchPlayerAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("matchPlayerAsync");
    }
    const { matchTag, autoSwitch = false, onlyExisting = false } = this.payload;
    await GameSDK.extra.matchPlayerAsync(matchTag, autoSwitch, onlyExisting);
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
};
var GroupContextHandler_default = GroupContextHandler;

// extensions/ludex/src/plugins/match/concretes/group/StartGroupConcrete.ts
var StartGroupConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { matchTag, playerId: playerId2, options } = payload;
      const flow = new NothingHandler_default(this);
      const groupContext = new GroupContextHandler_default(this, __spreadValues({ matchTag }, options));
      flow.setNext(groupContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: "7749",
        mode: MatchModes_default.MATCHING_GROUP,
        customData: {
          playerId: playerId2
        }
      });
      groupContext.setNext(prepareMatch);
      const getOpponentId = new GetOpponentChallengeContextHandler_default(this, {
        ignoreId: playerId2
      });
      prepareMatch.setNext(getOpponentId);
      const startMatch = new StartMatchHandler_default(this);
      getOpponentId.setNext(startMatch);
      const getMatchProfiles = new GetMatchProfilesHandler_default(this);
      startMatch.setNext(getMatchProfiles);
      const logStart = new LogMatchStartHandler_default(this);
      getMatchProfiles.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var StartGroupConcrete_default = StartGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/single/FinishSingleConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var FinishSingleConcrete = class extends BaseConcrete_default {
  async processAsync() {
    try {
      this.startLog();
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: false });
      flow.setNext(finishMatch);
      const logFinish = new LogMatchFinishedHandler_default(this);
      finishMatch.setNext(logFinish);
      const setPlayerBestScore = new SetPlayerBestScoreHandler_default(this);
      logFinish.setNext(setPlayerBestScore);
      const postGlobalLBScore = new PostGlobalLeaderboardsScoreHandler_default(this);
      setPlayerBestScore.setNext(postGlobalLBScore);
      const detectGameMode = new ContextGameModeHandler_default(this);
      postGlobalLBScore.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var FinishSingleConcrete_default = FinishSingleConcrete;

// extensions/ludex/src/plugins/match/concretes/single/StartSingleConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/profile/GetProfileHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/ProfileIdNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var ProfileIdNotDefined = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ProfileIdNotDefined";
    this.message = message ?? "Profile id is not defined";
  }
};
var ProfileIdNotDefined_default = ProfileIdNotDefined;

// extensions/ludex/src/plugins/match/handlers/profile/GetProfileHandler.ts
var { Dtos: Dtos10 } = Ludex;
var GetProfileHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { profileId } = this.payload;
    if (!profileId) {
      throw new ProfileIdNotDefined_default();
    }
    const { player } = this.codex;
    const playerId2 = player.getPlayerId();
    let profile;
    if (profileId === playerId2) {
      profile = this.getPlayerProfile();
    } else {
      profile = await this.getProfileAsync(profileId);
      if (!profile) {
        throw new ProfileNotFound_default();
      }
    }
    this.updateMatchData(profile, matchState);
    await this.nextAsync(matchState);
  }
  getPlayerProfile() {
    const { player } = this.codex;
    const { playerId: playerId2, name: name2, photo: photo2, locale: locale2 } = player.getPlayer();
    return { playerId: playerId2, name: name2, photo: photo2, locale: locale2 };
  }
  async getProfileAsync(profileId) {
    const { profile } = this.codex;
    await profile.requestProfiles([profileId]);
    const profiles = profile.getProfiles();
    return profiles[profileId];
  }
  updateMatchData(data, matchState) {
    const { playerId: playerId2, name: name2, photo: photo2 } = data;
    const profile = new Dtos10.Match.Profile({ id: playerId2, name: name2, photo: photo2 }).toObject();
    matchState.profiles[playerId2] = profile;
  }
};
var GetProfileHandler_default = GetProfileHandler;

// extensions/ludex/src/plugins/match/concretes/single/StartSingleConcrete.ts
var StartSingleConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2 } = payload;
      const flow = new NothingHandler_default(this);
      const switchContext = new SwitchContextHandler_default(this, { contextId: "SOLO" });
      flow.setNext(switchContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: "123456",
        mode: MatchModes_default.SINGLE,
        customData: {
          playerId: playerId2
        }
      });
      switchContext.setNext(prepareMatch);
      const startMatch = new StartMatchHandler_default(this);
      prepareMatch.setNext(startMatch);
      const getPlayerProfile = new GetProfileHandler_default(this, {
        profileId: playerId2
      });
      startMatch.setNext(getPlayerProfile);
      const logStart = new LogMatchStartHandler_default(this);
      getPlayerProfile.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var StartSingleConcrete_default = StartSingleConcrete;

// extensions/ludex/src/plugins/match/concretes/strategy/FinishStrategyConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var FinishStrategyConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { setPlayerBestScore = false, postGlobalLeaderboard = false } = payload ?? {};
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: false });
      flow.setNext(finishMatch);
      const logFinish = new LogMatchFinishedHandler_default(this);
      finishMatch.setNext(logFinish);
      const setPlayerBS = new SetPlayerBestScoreHandler_default(this, {
        ignore: !setPlayerBestScore
      });
      logFinish.setNext(setPlayerBS);
      const postGlobalLBScore = new PostGlobalLeaderboardsScoreHandler_default(this, {
        ignore: !postGlobalLeaderboard
      });
      setPlayerBS.setNext(postGlobalLBScore);
      const detectGameMode = new ContextGameModeHandler_default(this);
      postGlobalLBScore.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var FinishStrategyConcrete_default = FinishStrategyConcrete;

// extensions/ludex/src/plugins/match/concretes/strategy/StartStrategyConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var StartStrategyConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { matchId, playerId: playerId2, gameMode, extraData = {} } = payload;
      const flow = new NothingHandler_default(this);
      const switchContext = new SwitchContextHandler_default(this, { contextId: "SOLO" });
      flow.setNext(switchContext);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: matchId,
        mode: gameMode,
        customData: __spreadValues({
          playerId: playerId2
        }, extraData)
      });
      switchContext.setNext(prepareMatch);
      const startMatch = new StartMatchHandler_default(this);
      prepareMatch.setNext(startMatch);
      const getPlayerProfile = new GetProfileHandler_default(this, {
        profileId: playerId2
      });
      startMatch.setNext(getPlayerProfile);
      const logStart = new LogMatchStartHandler_default(this);
      getPlayerProfile.setNext(logStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var StartStrategyConcrete_default = StartStrategyConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/ContinueTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/analytic/LogTournamentStartHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Plugins: Plugins4, Utils: Utils8 } = Ludex;
var { Analytics: Analytics4 } = Plugins4;
var { String: S6, Valid: V22 } = Utils8;
var LogTournamentStartHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, customData } = matchState;
    this.validateMode(mode);
    const { analytics } = this.codex;
    const { tournamentId, leaderboardId } = customData;
    analytics.event(Analytics4.Events.TOURNAMENT_START, {
      success: true,
      game_mode: S6.toUpperCamelCase(mode),
      tournament_id: tournamentId,
      leaderboard_id: leaderboardId
    });
    await this.nextAsync(matchState);
  }
  validateMode(mode) {
    if (!V22.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
};
var LogTournamentStartHandler_default = LogTournamentStartHandler;

// extensions/ludex/src/plugins/match/handlers/context/tournament/ContinueTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/exceptions/TournamentIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var TournamentIdNotValid = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TournamentIdNotValid";
    this.message = message ?? "Tournament id is not valid";
  }
};
var TournamentIdNotValid_default = TournamentIdNotValid;

// extensions/ludex/src/plugins/match/handlers/context/tournament/ContinueTournamentHandler.ts
var { Valid: V23 } = Ludex.Utils;
var ContinueTournamentHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { contextId: contextId2 } = this.payload;
    this.validateContextId(contextId2);
    const tournament = await GameSDK.getTournamentAsync();
    const tournamentId = tournament.getID().toString();
    this.validateTournamentId(tournamentId);
    const tournamentPayload = JSON.parse(tournament.getPayload() || "{}");
    const { leaderboardId } = tournamentPayload;
    this.validateLeaderboardId(leaderboardId);
    matchState.customData.contextId = contextId2;
    matchState.customData.tournamentId = tournamentId;
    matchState.customData.leaderboardId = leaderboardId;
    await this.nextAsync(matchState);
  }
  validateContextId(contextId2) {
    if (!V23.isString(contextId2)) {
      throw new ContextIdNotValid_default();
    }
  }
  validateTournamentId(tournamentId) {
    if (!V23.isString(tournamentId)) {
      throw new TournamentIdNotValid_default();
    }
  }
  validateLeaderboardId(leaderboardId) {
    if (!V23.isString(leaderboardId) || leaderboardId === "") {
      throw new LeaderboardIdNotValid_default();
    }
  }
};
var ContinueTournamentHandler_default = ContinueTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/ContinueTournamentConcrete.ts
var ContinueTournamentConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, contextId: contextId2 } = payload;
      const flow = new NothingHandler_default(this);
      const continueTournament = new ContinueTournamentHandler_default(this, { contextId: contextId2 });
      flow.setNext(continueTournament);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: "1997",
        mode: MatchModes_default.TOURNAMENT,
        customData: {
          playerId: playerId2
        }
      });
      continueTournament.setNext(prepareMatch);
      const startMatch = new StartMatchHandler_default(this);
      prepareMatch.setNext(startMatch);
      const getPlayerProfile = new GetProfileHandler_default(this, {
        profileId: playerId2
      });
      startMatch.setNext(getPlayerProfile);
      const logMatchStart = new LogMatchStartHandler_default(this);
      getPlayerProfile.setNext(logMatchStart);
      const logTournamentStart = new LogTournamentStartHandler_default(this);
      logMatchStart.setNext(logTournamentStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logMatchStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var ContinueTournamentConcrete_default = ContinueTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/CreateTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/analytic/LogTournamentCreateHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Plugins: Plugins5 } = Ludex;
var { Analytics: Analytics5 } = Plugins5;
var LogTournamentCreateHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { customData } = matchState;
    const { analytics } = this.codex;
    const { tournamentId, leaderboardId } = customData;
    analytics.event(Analytics5.Events.TOURNAMENT_CREATE, {
      success: true,
      tournament_id: tournamentId,
      leaderboard_id: leaderboardId
    });
    await this.nextAsync(matchState);
  }
};
var LogTournamentCreateHandler_default = LogTournamentCreateHandler;

// extensions/ludex/src/plugins/match/handlers/context/tournament/CreateTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var CreateTournamentHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    await this.createTournamentAsync();
    await this.updateMatchStateAsync(matchState);
    await this.nextAsync(matchState);
  }
  async createTournamentAsync() {
    const { name: name2, score: score2, customData } = this.payload;
    await GameSDK.tournament.createAsync({
      initialScore: score2,
      config: {
        title: name2,
        tournamentTitle: name2
      },
      data: customData
    });
  }
  async updateMatchStateAsync(matchState) {
    try {
      if (!("getTournamentAsync" in GameSDK)) {
        throw new UnavailableFeature_default("getTournamentAsync");
      }
      const tournament = await GameSDK.getTournamentAsync();
      const contextId2 = tournament.getContextID();
      const tournamentId = tournament.getID().toString();
      const { playerId: playerId2 } = this.payload;
      matchState.customData.playerId = playerId2;
      matchState.customData.contextId = contextId2;
      matchState.customData.tournamentId = tournamentId;
    } catch (error) {
      if (error instanceof UnavailableFeature_default) return;
    }
  }
};
var CreateTournamentHandler_default = CreateTournamentHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/CreateLeaderboardHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V24 } = Ludex.Utils;
var CreateLeaderboardHandler = class extends BaseHandler_default {
  payload;
  leaderboardPayload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validatePayload();
    await this.setupCreatePayload(matchState);
    await this.createLeaderboardAsync(matchState);
    await this.nextAsync(matchState);
  }
  validatePayload() {
    const { leaderboardId } = this.payload;
    if (!V24.isString(leaderboardId)) {
      throw new LeaderboardIdNotValid_default();
    }
  }
  validatePlayerId(playerId2) {
    if (!V24.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
  }
  async setupCreatePayload(matchState) {
    const { playerId: playerId2 } = matchState.customData;
    this.validatePlayerId(playerId2);
    const { name: name2, leaderboardId, customData } = this.payload;
    this.leaderboardPayload = {
      _id: leaderboardId,
      name: name2 ?? "",
      createdBy: playerId2,
      description: JSON.stringify(customData)
    };
  }
  async createLeaderboardAsync(matchState) {
    const leaderboardId = await this.codex.leaderboard.createLeaderboardAsync(this.leaderboardPayload);
    matchState.customData.leaderboardId = leaderboardId;
  }
};
var CreateLeaderboardHandler_default = CreateLeaderboardHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/CreateTournamentConcrete.ts
var CreateTournamentConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, name: name2, score: score2, leaderboardId, payload: customData } = payload;
      const flow = new NothingHandler_default(this);
      const switchContext = new SwitchContextHandler_default(this, { contextId: "SOLO" });
      flow.setNext(switchContext);
      const createTournament = new CreateTournamentHandler_default(this, {
        name: name2,
        score: score2,
        playerId: playerId2,
        customData
      });
      switchContext.setNext(createTournament);
      const getPlayerProfile = new GetProfileHandler_default(this, {
        profileId: playerId2
      });
      createTournament.setNext(getPlayerProfile);
      const setProfileData = new SetProfileDataHandler_default(this, {
        id: playerId2,
        score: score2
      });
      getPlayerProfile.setNext(setProfileData);
      const createLeaderboard = new CreateLeaderboardHandler_default(this, {
        name: name2,
        customData,
        leaderboardId
      });
      setProfileData.setNext(createLeaderboard);
      const postLeaderboardScore = new PostLeaderboardScoreHandler_default(this);
      createLeaderboard.setNext(postLeaderboardScore);
      const logCreate = new LogTournamentCreateHandler_default(this);
      postLeaderboardScore.setNext(logCreate);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var CreateTournamentConcrete_default = CreateTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/FinishTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/tournament/PostScoreTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Plugins: { Analytics: Analytics6 },
  Utils: { Valid: V25 }
} = Ludex;
var PostScoreTournamentHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData(matchState);
    await this.postScoreTournamentAsync(matchState);
    await this.nextAsync(matchState);
  }
  validateData(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    this.validatePlayerId(playerId2);
    if (!profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
  }
  validatePlayerId(playerId2) {
    if (!V25.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
  }
  getPlayerProfile(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    this.validatePlayerId(playerId2);
    return profiles[playerId2];
  }
  isNewBestScore(matchState) {
    const profile = this.getPlayerProfile(matchState);
    const { score: score2 = 0, bestScore = 0 } = profile;
    return score2 > bestScore;
  }
  async postScoreTournamentAsync(matchState) {
    const { analytics } = codex;
    const profile = this.getPlayerProfile(matchState);
    const { score: score2 = 0 } = profile;
    let eventName = null;
    let postSuccess = false;
    const { checkBestScore } = this.payload;
    const isBestScore = this.isNewBestScore(matchState);
    try {
      if (!("getTournamentAsync" in GameSDK)) {
        throw new UnavailableFeature_default("getTournamentAsync");
      }
      await GameSDK.getTournamentAsync();
      if (!checkBestScore || isBestScore) {
        eventName = Analytics6.Events.TOURNAMENT_SHARE;
        await GameSDK.tournament.shareAsync({ score: score2 });
      } else {
        eventName = Analytics6.Events.TOURNAMENT_POST_SCORE;
        await GameSDK.tournament.postScoreAsync(score2);
      }
      postSuccess = true;
    } catch (error) {
      console.warn("Post Score Tournament", error);
    } finally {
      eventName && analytics.event(eventName, { success: postSuccess });
    }
  }
};
var PostScoreTournamentHandler_default = PostScoreTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/FinishTournamentConcrete.ts
var FinishTournamentConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, bestScore, checkBestScore = false } = payload;
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: false });
      flow.setNext(finishMatch);
      const setProfileData = new SetProfileDataHandler_default(this, {
        id: playerId2,
        bestScore
      });
      finishMatch.setNext(setProfileData);
      const postTournament = new PostScoreTournamentHandler_default(this, { checkBestScore });
      setProfileData.setNext(postTournament);
      const logFinish = new LogMatchFinishedHandler_default(this);
      postTournament.setNext(logFinish);
      const setPlayerBestScore = new SetPlayerBestScoreHandler_default(this);
      logFinish.setNext(setPlayerBestScore);
      const postLeaderboardScore = new PostLeaderboardScoreHandler_default(this);
      setPlayerBestScore.setNext(postLeaderboardScore);
      const setGlobalLBScore = new PostGlobalLeaderboardsScoreHandler_default(this);
      postLeaderboardScore.setNext(setGlobalLBScore);
      const detectGameMode = new ContextGameModeHandler_default(this);
      setGlobalLBScore.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var FinishTournamentConcrete_default = FinishTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/JoinTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/match/handlers/context/tournament/JoinTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V26, Object: O25 } = Ludex.Utils;
var JoinTournamentHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { tournamentId } = this.payload;
    this.validateTournamentId(tournamentId);
    await this.joinTournamentAsync(tournamentId);
    const tournament = await GameSDK.getTournamentAsync();
    const contextId2 = tournament.getContextID();
    this.validateContextId(contextId2);
    const tournamentPayload = JSON.parse(tournament.getPayload() || "{}");
    const { leaderboardId } = tournamentPayload;
    this.validateLeaderboardId(leaderboardId);
    matchState.customData.contextId = contextId2;
    matchState.customData.tournamentId = tournamentId;
    matchState.customData.leaderboardId = leaderboardId;
    await this.nextAsync(matchState);
  }
  validateTournamentId(tournamentId) {
    if (!V26.isString(tournamentId)) {
      throw new TournamentIdNotValid_default();
    }
  }
  validateContextId(contextId2) {
    if (!V26.isString(contextId2)) {
      throw new ContextIdNotValid_default();
    }
  }
  validateLeaderboardId(leaderboardId) {
    if (!V26.isString(leaderboardId) || leaderboardId === "") {
      throw new LeaderboardIdNotValid_default();
    }
  }
  async joinTournamentAsync(tournamentId) {
    if (!("tournament" in GameSDK)) {
      throw new UnavailableFeature_default("tournament");
    }
    try {
      await GameSDK.tournament.joinAsync(tournamentId);
    } catch (error) {
      if (!O25.hasOwn(error, "code")) throw error;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
  }
};
var JoinTournamentHandler_default = JoinTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/JoinTournamentConcrete.ts
var JoinTournamentConcrete = class extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog(payload);
      const { playerId: playerId2, tournamentId } = payload;
      const flow = new NothingHandler_default(this);
      const joinTournament = new JoinTournamentHandler_default(this, { tournamentId });
      flow.setNext(joinTournament);
      const prepareMatch = new PrepareMatchHandler_default(this, {
        id: "1997",
        mode: MatchModes_default.TOURNAMENT,
        customData: {
          playerId: playerId2
        }
      });
      joinTournament.setNext(prepareMatch);
      const startMatch = new StartMatchHandler_default(this);
      prepareMatch.setNext(startMatch);
      const getPlayerProfile = new GetProfileHandler_default(this, {
        profileId: playerId2
      });
      startMatch.setNext(getPlayerProfile);
      const logMatchStart = new LogMatchStartHandler_default(this);
      getPlayerProfile.setNext(logMatchStart);
      const logTournamentStart = new LogTournamentStartHandler_default(this);
      logMatchStart.setNext(logTournamentStart);
      const detectGameMode = new ContextGameModeHandler_default(this);
      logTournamentStart.setNext(detectGameMode);
      const matchState = this.match.getMatchState();
      await flow.processAsync(matchState);
    } finally {
      this.endLog();
    }
  }
};
var JoinTournamentConcrete_default = JoinTournamentConcrete;

// extensions/ludex/src/plugins/match/handlers/match/GetMatchCustomDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Dtos: Dtos11, Utils: Utils9 } = Ludex;
var { Object: O26 } = Utils9;
var GetMatchCustomDataHandler = class extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const extraData = await this.getMatchCustomData(matchState);
    this.updateMatchCustomData(matchState, extraData);
    await this.nextAsync(matchState);
  }
  async getMatchCustomData(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match.api.getMatchAPI();
    const matchData = await matchAPI.getMatchDetailByIdAsync(id);
    return matchData?.extraData ?? {};
  }
  updateMatchCustomData(matchState, extraData) {
    const dataMerged = O26.merge(matchState.customData, extraData);
    const customData = new Dtos11.Match.CustomData(dataMerged).toObject();
    matchState.customData = customData;
  }
};
var GetMatchCustomDataHandler_default = GetMatchCustomDataHandler;

// extensions/ludex/src/plugins/match/handlers/match/SetMatchCustomDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Dtos: Dtos12, Utils: Utils10 } = Ludex;
var { Object: O27 } = Utils10;
var SetMatchCustomDataHandler = class extends BaseHandler_default {
  payload;
  constructor(concrete, payload) {
    super(concrete);
    this.payload = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.updateMatchCustomData(matchState);
    await this.nextAsync(matchState);
  }
  updateMatchCustomData(matchState) {
    const customDataMerged = O27.merge(matchState.customData, this.payload);
    const customData = new Dtos12.Match.CustomData(customDataMerged).toObject();
    matchState.customData = customData;
  }
};
var SetMatchCustomDataHandler_default = SetMatchCustomDataHandler;

// extensions/ludex/src/plugins/match/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState7 = {
  id: null,
  mode: null,
  status: null,
  startAt: 0,
  finishAt: 0,
  profiles: {},
  customData: __spreadValues({}, DefaultCustomData_default)
};
var state_default7 = initState7;

// extensions/ludex/src/plugins/match/MatchPlugin.ts
var { Configs: Configs2 } = Ludex;
var MatchPlugin = class extends Ludex.Plugins.BasePlugin {
  base;
  group;
  single;
  context;
  strategy;
  challenge;
  tournament;
  api;
  handler;
  useCPUProfile;
  init() {
    this.createMatchData();
    this.createAPIHandler();
    this.createBaseConcrete();
    this.createConcreteFlows();
    this.createConcreteHandlers();
  }
  setUseCPUProfile(enable) {
    this.useCPUProfile = enable;
  }
  createMatchData() {
    const { storage } = this.codex;
    storage.addStorage("match", state_default7);
  }
  getMatchState() {
    const { storage } = this.codex;
    return storage.getStorage("match");
  }
  createBaseConcrete() {
    this.base = new BaseConcrete_default(this.codex, this);
  }
  createConcreteFlows() {
    this.createGroupFlows();
    this.createSingleFlows();
    this.createContextFlows();
    this.createStrategyFlows();
    this.createChallengeFlows();
    this.createTournamentFlows();
  }
  createConcreteHandlers() {
    this.handler = {
      setProfileData: async (payload) => {
        const handler = new SetProfileDataHandler_default(this.base, payload);
        await this.processHandlerAsync(handler);
      },
      setMatchCustomData: async (payload) => {
        const handler = new SetMatchCustomDataHandler_default(this.base, payload);
        await this.processHandlerAsync(handler);
      },
      getMatchCustomData: async () => {
        const handler = new GetMatchCustomDataHandler_default(this.base);
        await this.processHandlerAsync(handler);
      },
      setLeaderboardScore: async (payload) => {
        const handler = new SetLeaderboardScoreHandler_default(this.base, payload);
        await this.processHandlerAsync(handler);
      }
    };
  }
  createAPIHandler() {
    const APIConfig = {
      appId: Configs2.AppId,
      matchAPIHost: Configs2.ApiHost
    };
    this.api = new APIHandler_default(APIConfig);
  }
  createGroupFlows() {
    this.group = {
      join: new JoinGroupConcrete_default(this.codex, this),
      start: new StartGroupConcrete_default(this.codex, this),
      finish: new FinishGroupConcrete_default(this.codex, this)
    };
  }
  createSingleFlows() {
    this.single = {
      start: new StartSingleConcrete_default(this.codex, this),
      finish: new FinishSingleConcrete_default(this.codex, this)
    };
  }
  createStrategyFlows() {
    this.strategy = {
      start: new StartStrategyConcrete_default(this.codex, this),
      finish: new FinishStrategyConcrete_default(this.codex, this)
    };
  }
  createContextFlows() {
    this.context = {
      choose: new ChooseContextConcrete_default(this.codex, this)
    };
  }
  createChallengeFlows() {
    this.challenge = {
      invite: new InviteFriendsConcrete_default(this.codex, this),
      friend: new ChallengeFriendConcrete_default(this.codex, this),
      join: new JoinChallengeMatchConcrete_default(this.codex, this),
      await: new AwaitChallengeMatchConcrete_default(this.codex, this),
      result: new ResultChallengeMatchConcrete_default(this.codex, this),
      finish: new FinishChallengeMatchConcrete_default(this.codex, this),
      continue: new ContinueChallengeMatchConcrete_default(this.codex, this)
    };
  }
  createTournamentFlows() {
    this.tournament = {
      join: new JoinTournamentConcrete_default(this.codex, this),
      create: new CreateTournamentConcrete_default(this.codex, this),
      finish: new FinishTournamentConcrete_default(this.codex, this),
      continue: new ContinueTournamentConcrete_default(this.codex, this)
    };
  }
  processHandlerAsync(handler) {
    const matchState = this.getMatchState();
    return handler.processAsync(matchState);
  }
};
var MatchPlugin_default = MatchPlugin;

// extensions/ludex/src/plugins/match/dtos/MatchCustomDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V27 } = Ludex.Utils;
var MESSAGE_INVALID5 = "is invalid";
var MatchCustomDataDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateLevel(level2) {
    if (!V27.isNumber(level2) || level2 < 0) {
      this.exception$("level", MESSAGE_INVALID5);
    }
  }
  validateRescued(rescued) {
    if (!V27.isNumber(rescued) || rescued < 0) {
      this.exception$("rescued", MESSAGE_INVALID5);
    }
  }
  validateContextId(contextId2) {
    if (!V27.isString(contextId2)) {
      this.exception$("contextId", MESSAGE_INVALID5);
    }
  }
  validatePlayerId(playerId2) {
    if (!V27.isString(playerId2)) {
      this.exception$("playerId", MESSAGE_INVALID5);
    }
  }
  validateOpponentId(opponentId) {
    if (!V27.isString(opponentId) && opponentId !== null) {
      this.exception$("opponentId", MESSAGE_INVALID5);
    }
  }
  validateTournamentId(tournamentId) {
    if (!V27.isString(tournamentId) && tournamentId !== null) {
      this.exception$("tournamentId", MESSAGE_INVALID5);
    }
  }
  validateLeaderboardId(leaderboardId) {
    if (!V27.isString(leaderboardId) && leaderboardId !== null) {
      this.exception$("leaderboardId", MESSAGE_INVALID5);
    }
  }
  toObject() {
    return super.toObject();
  }
};
MatchCustomDataDtos.makeStrict();
MatchCustomDataDtos.addDefaultData(DefaultCustomData_default);
var MatchCustomDataDtos_default = MatchCustomDataDtos;

// extensions/ludex/src/plugins/match/dtos/MatchProfileDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V28 } = Ludex.Utils;
var MESSAGE_INVALID6 = "is invalid";
var MatchProfileDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateId(id) {
    if (!V28.isString(id) || !id) {
      this.exception$("id", MESSAGE_INVALID6);
    }
  }
  validateName(name2) {
    if (!V28.isString(name2) || !name2) {
      this.exception$("name", MESSAGE_INVALID6);
    }
  }
  validatePhoto(photo2) {
    if (!V28.isString(photo2)) {
      this.exception$("photo", MESSAGE_INVALID6);
    }
  }
  validateScore(score2) {
    if (!V28.isNumber(score2) || score2 < 0) {
      this.exception$("score", MESSAGE_INVALID6);
    }
  }
  validateBestScore(bestScore) {
    if (!V28.isNumber(bestScore) || bestScore < 0) {
      this.exception$("bestScore", MESSAGE_INVALID6);
    }
  }
  validateFinished(finished) {
    if (!V28.isBoolean(finished)) {
      this.exception$("finished", MESSAGE_INVALID6);
    }
  }
  toObject() {
    return super.toObject();
  }
};
MatchProfileDtos.addDefaultData({
  id: "",
  name: "Your Friend",
  photo: "./assets/images/others/avatar.png",
  score: 0,
  bestScore: 0,
  finished: false
});
var MatchProfileDtos_default = MatchProfileDtos;

// extensions/ludex/src/plugins/match/index.ts
Ludex.Dtos.Match = {
  Data: RespMatchDataDtos_default,
  Profile: MatchProfileDtos_default,
  CustomData: MatchCustomDataDtos_default
};
var match_default = MatchPlugin_default;

// extensions/ludex/src/plugins/missions/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/missions/MissionsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/missions/api/MissionsAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/missions/data/DefaultMissions.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultMissions_default = [
  {
    id: "finish-level",
    title: "Finish 1 level",
    require: {
      level: 1
    },
    reward: {
      coin: 300
    },
    duration: 1e3 * 60 * 60 * 24
  }
];

// extensions/ludex/src/plugins/missions/api/MissionsAPI.ts
var MissionsAPI = class {
  async getMissionsAsync() {
    const result3 = [...DefaultMissions_default];
    return result3;
  }
};
var MissionsAPI_default = MissionsAPI;

// extensions/ludex/src/plugins/missions/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState8 = {
  tasks: [],
  process: {}
};
var state_default8 = initState8;

// extensions/ludex/src/plugins/missions/MissionsPlugin.ts
var {
  Utils: { Json: J5, Valid: V29, Object: O28 }
} = Ludex;
var MissionsPlugin = class extends Ludex.Plugins.BasePlugin {
  api;
  init() {
    const { storage } = this.codex;
    const useWebStorage = true;
    storage.addStorage("missions", state_default8, useWebStorage);
    this.api = new MissionsAPI_default();
  }
  async requestMissions() {
    const tasks = await this.api.getMissionsAsync();
    const currentTime = Date.now();
    for (const task of tasks) {
      task.expirationTime = currentTime + task.duration;
    }
    this.receivePlayerMissionData(tasks);
  }
  addMission(payload) {
    const { storage } = this.codex;
    const { id, duration, expirationTime } = payload;
    if (!expirationTime) {
      payload.expirationTime = Date.now() + duration;
    }
    const currentTasks = storage.getStorageData("missions", "tasks") ?? [];
    const existingTaskIndex = currentTasks.findIndex((task) => task.id === id);
    if (existingTaskIndex !== -1) {
      const newTask = O28.merge(currentTasks[existingTaskIndex], payload);
      currentTasks[existingTaskIndex] = newTask;
    } else {
      currentTasks.push(payload);
    }
    const newTasks = [...currentTasks];
    storage.setStorageData("missions", "tasks", newTasks);
    this.addProcessLog(payload);
    this.updatePlayerMissionProcess();
    storage.updateToWebStorage("missions");
  }
  addProcessLog(payload) {
    const { storage } = this.codex;
    const { id, require: require2 } = payload;
    const requiredParams = {};
    const keys = Object.keys(require2);
    for (const type of keys) {
      requiredParams[type] = 0;
    }
    const currentProcessLogs = storage.getStorageData("missions", "process") ?? {};
    currentProcessLogs[id] = { require: requiredParams, rewarded: false };
    storage.setStorageData("missions", "process", currentProcessLogs);
  }
  removeMission(id) {
    const { storage } = this.codex;
    const currentTasks = storage.getStorageData("missions", "tasks");
    if (!currentTasks) return;
    const newTasks = currentTasks.filter((task) => task.id !== id);
    storage.setStorageData("missions", "tasks", newTasks);
    this.removeProcessLog(id);
    storage.updateToWebStorage("missions");
  }
  removeProcessLog(id) {
    const { storage } = this.codex;
    const currentProcessLogs = storage.getStorageData("missions", "process") ?? {};
    if (currentProcessLogs[id]) {
      const { require: require2 } = currentProcessLogs[id];
      const keys = Object.keys(require2);
      for (const key of keys) {
        require2[key] = 0;
      }
      currentProcessLogs[id] = { require: require2, rewarded: false };
    }
    storage.setStorageData("missions", "process", currentProcessLogs);
  }
  receivePlayerMissionData(tasks) {
    const { storage } = this.codex;
    const savedTasks = storage.getStorageData("missions", "tasks") ?? [];
    const existingSavedTasks = this.filterMissionByExpirationTime(savedTasks);
    const resultTasks = this.combineMissions(tasks, existingSavedTasks);
    storage.setStorageData("missions", "tasks", resultTasks);
    const existingSavedTasksProcess = this.filterExistingSavedProcess(existingSavedTasks);
    this.receiveProcessLogs(resultTasks, existingSavedTasksProcess);
    this.updatePlayerMissionProcess();
    storage.updateToWebStorage("missions");
  }
  filterExistingSavedProcess(existingSavedMissions) {
    const { player } = this.codex;
    const playerMissions = player.getPlayerDataByKey("missionsData");
    const { process: logTasks = {} } = playerMissions || {};
    const existingMissionIds = existingSavedMissions.map((task) => task.id);
    const filteredMissions = Object.keys(logTasks).filter((key) => {
      return !existingMissionIds.includes(key);
    });
    const filteredProcess = {};
    for (const key of filteredMissions) {
      filteredProcess[key] = logTasks[key];
    }
    return filteredProcess;
  }
  filterMissionByExpirationTime(missions) {
    const currentTime = Date.now();
    return missions.filter((mission) => {
      const { expirationTime } = mission;
      if (!expirationTime) return false;
      return currentTime < expirationTime;
    });
  }
  combineMissions(missions, existingMissions) {
    const existingMissionsIds = existingMissions.map((mission) => mission.id);
    const filteredMissions = missions.filter((mission) => {
      const { id } = mission;
      return !existingMissionsIds.includes(id);
    });
    return [...existingMissions, ...filteredMissions];
  }
  receiveProcessLogs(missions, existingProcessLogs) {
    const process = {};
    for (const mission of missions) {
      const { id, require: require2 } = mission;
      if (O28.hasOwn(existingProcessLogs, id)) {
        process[id] = J5.clone(existingProcessLogs[id]);
        return;
      }
      const requiredParams = {};
      const keys = Object.keys(require2);
      for (const type of keys) {
        requiredParams[type] = 0;
      }
      process[id] = { require: requiredParams, rewarded: false };
    }
    this.updateMissionProcess(process);
  }
  updateMissionProcess(process) {
    const { storage } = this.codex;
    storage.setStorageData("missions", "process", process);
    storage.updateToWebStorage("missions");
  }
  getPlayerMissionProcess() {
    const { player } = this.codex;
    const dailyTasks = player.getPlayerDataByKey("missionsData");
    const { process: logTasks } = dailyTasks || {};
    return J5.clone(logTasks);
  }
  addMissionValue(payload) {
    const { id, type, value } = payload;
    const playerMissionProcess = this.getPlayerMissionProcess();
    if (!V29.isObject(playerMissionProcess)) return;
    const log = playerMissionProcess;
    const keys = Object.keys(log);
    const sameMissionKeys = keys.filter((key) => key.includes(id));
    for (const key of sameMissionKeys) {
      const mission = log[key];
      if (!mission || mission.rewarded) continue;
      mission.require[type] += value;
    }
    this.updateMissionProcess(log);
    this.updatePlayerMissionProcess();
  }
  setMissionRewardClaimed(id) {
    const playerMissionProcess = this.getPlayerMissionProcess();
    if (!V29.isObject(playerMissionProcess)) return;
    const log = playerMissionProcess;
    if (!O28.hasOwn(log, id)) return;
    log[id].rewarded = true;
    this.updateMissionProcess(log);
    this.updatePlayerMissionProcess();
  }
  updatePlayerMissionProcess() {
    const { player } = this.codex;
    const playerMissionProcess = this.codex.storage.getStorageData("missions", "process");
    const currentPlayerData = this.getPlayerMissionProcess();
    const newPlayerData = O28.merge(currentPlayerData, playerMissionProcess);
    player.setPlayerDataByName("missionsData", {
      process: newPlayerData
    });
  }
};
var MissionsPlugin_default = MissionsPlugin;

// extensions/ludex/src/plugins/missions/index.ts
var missions_default = MissionsPlugin_default;

// extensions/ludex/src/plugins/player/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/player/PlayerPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/player/api/player.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Utils: { Object: O29 },
  Configs: { ApiHost }
} = Ludex;
var getUrl = () => {
  const sdkName = GameSDK.getSDKName();
  let url = "players";
  switch (sdkName) {
    case "MsGames":
      url += "?platform=ms-games";
      break;
    case "Yandex":
      url += "?platform=yandex";
      break;
    default:
      break;
  }
  return url;
};
var updatePlayerProfileAsync = async (payload) => {
  if (!ApiHost) return {};
  const url = getUrl();
  const result3 = await post(url, payload, {}, ApiHost, 10);
  if (!O29.hasOwn(result3, "data")) return {};
  return result3.data || {};
};

// extensions/ludex/src/plugins/player/PlayerPlugin.ts
var {
  Utils: { Array: A7, Object: O30, Valid: V30 },
  Configs: { AppId: AppId4 }
} = Ludex;
var PlayerPlugin = class extends Ludex.Plugins.BasePlugin {
  isLoggedIn = false;
  init() {
    const { storage } = this.codex;
    storage.addStorage("player", state_default);
  }
  receiveData(playerInfo, playerData) {
    const { storage } = this.codex;
    const { playerId: playerId2, name: name2, photo: photo2, locale: locale2 } = playerInfo;
    storage.setStorageData("player", "playerId", playerId2);
    storage.setStorageData("player", "name", name2);
    storage.setStorageData("player", "photo", photo2);
    storage.setStorageData("player", "locale", locale2);
    if (playerData) {
      this.setPlayerData(playerData);
      this.isLoggedIn = !playerData.isFirstLogin;
    }
  }
  async syncDataToSDK() {
    try {
      const playerData = this.getPlayerData();
      await GameSDK.player.setDataAsync(playerData);
    } catch (error) {
      console.warn(error);
    }
  }
  async syncProfileToServer() {
    if (GameSDK.extra.isGuest) {
      throw new Error("Guest player cannot sync profile to server");
    }
    const { storage } = this.codex;
    const player = this.getPlayer();
    const { playerId: playerId2, name: name2, photo: photo2, locale: locale2 } = player;
    let ASID = this.getPlayerASID();
    if (!V30.isString(ASID) && "getASIDAsync" in GameSDK.player) {
      ASID = await GameSDK.player.getASIDAsync() ?? ASID;
      storage.setStorageData("player", "ASID", `${ASID}`);
    }
    const profile = {
      appId: AppId4,
      ASID,
      playerId: playerId2,
      name: name2,
      photo: photo2,
      locale: locale2
    };
    await updatePlayerProfileAsync(profile);
  }
  setPlayerDataByName(name2, data) {
    this.setPlayerData({ [name2]: data });
  }
  setPlayerData(data) {
    const { storage } = this.codex;
    storage.setStorageData("player", "data", data);
    this.syncDataToSDK();
  }
  setBestScore(score2) {
    this.setPlayerDataByName("score", score2);
  }
  setSetting(name2, value) {
    this.setPlayerDataByName("settings", { [name2]: value });
  }
  setGameData(data) {
    const currentData = this.getGameData() ?? {};
    const newData = O30.merge(currentData, data);
    this.setPlayerDataByName("gameData", newData);
  }
  async requestConnectedPlayers() {
    const { storage } = this.codex;
    const players = await GameSDK.player.getConnectedPlayersAsync();
    const connectedPlayers = players.map((player) => {
      const playerId2 = player.getID();
      const name2 = player.getName();
      const photo2 = player.getPhoto();
      if (!playerId2 || !name2 || !photo2) return null;
      return new PlayerInfo_default({ playerId: playerId2, name: name2, photo: photo2 }).toObject();
    });
    const connectedPlayersUnique = A7.unique(connectedPlayers);
    if (connectedPlayersUnique.length < 1) return;
    const connectedPlayersKeyed = O30.keyBy(connectedPlayersUnique, "playerId");
    storage.setStorageData("player", "connectedPlayers", connectedPlayersKeyed);
  }
  getPlayer() {
    const { storage } = this.codex;
    return storage.getStorage("player");
  }
  getPlayerId() {
    const { storage } = this.codex;
    return storage.getStorageData("player", "playerId") ?? "";
  }
  getPlayerASID() {
    const { storage } = this.codex;
    return storage.getStorageData("player", "ASID") ?? null;
  }
  getPlayerLocale() {
    const { storage } = this.codex;
    return storage.getStorageData("player", "locale") ?? "";
  }
  getPlayerData() {
    const { storage } = this.codex;
    return storage.getStorageData("player", "data") ?? state_default.data;
  }
  getPlayerDataByKey(name2) {
    const data = this.getPlayerData();
    if (O30.hasOwn(data, name2)) {
      return data[name2];
    }
    return null;
  }
  getGameData() {
    return this.getPlayerDataByKey("gameData");
  }
  getPlayerSetting(name2) {
    const settings2 = this.getPlayerSettings();
    if (O30.hasOwn(settings2, name2)) {
      return settings2[name2];
    }
    return null;
  }
  getPlayerSettings() {
    const { settings: settings2 } = this.getPlayerData();
    return settings2;
  }
  isFirstLogin() {
    return this.getPlayerDataByKey("isFirstLogin") ?? state_default.data.isFirstLogin;
  }
  isFirstSession() {
    return !this.isLoggedIn;
  }
  loggedIn() {
    this.setPlayerDataByName("isFirstLogin", false);
  }
  getBestScore() {
    const { score: score2 } = this.getPlayerData();
    return score2;
  }
  getConnectedPlayers() {
    const { storage } = this.codex;
    return storage.getStorageData("player", "connectedPlayers") ?? {};
  }
  getConnectedPlayerIds(limit, offset) {
    const connectedPlayers = this.getConnectedPlayers();
    return Object.keys(connectedPlayers).slice(offset, offset + limit);
  }
  getNotificationData() {
    return this.getPlayerDataByKey("notificationData") ?? state_default.data.notificationData;
  }
};
var PlayerPlugin_default = PlayerPlugin;

// extensions/ludex/src/plugins/player/dtos/PlayerData.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Dtos: Dtos13,
  Utils: { Valid: V31 }
} = Ludex;
var {
  score,
  settings,
  gameData,
  isFirstLogin,
  missionsData,
  notificationData,
  dailyRewardedData,
  lastCallSwitchGame
} = state_default.data;
var MESSAGE_INVALID7 = "is invalid";
var PlayerDataDtos = class extends BaseDtos_default {
  processData(data) {
    this.validateStructure$(data);
    data.settings = new Dtos13.Player.Settings(data.settings).toObject();
    data.gameData = new Dtos13.Player.GameData(data.gameData).toObject();
    this.validateData$(data);
    this.setupData(data);
  }
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateScore(score2) {
    if (!V31.isNumber(score2) || score2 < 0) {
      this.exception$("score", MESSAGE_INVALID7);
    }
  }
  validateSettings(settings2) {
    if (!V31.isObject(settings2)) {
      this.exception$("settings", MESSAGE_INVALID7);
    }
  }
  validateMissionsData(missionsData2) {
    if (!V31.isObject(missionsData2)) {
      this.exception$("missionsData", MESSAGE_INVALID7);
    }
    if (!("process" in missionsData2) || !V31.isObject(missionsData2.process)) {
      this.exception$("missionsData.process", MESSAGE_INVALID7);
    }
  }
  validateNotificationData(notificationData2) {
    if (!V31.isObject(notificationData2)) {
      this.exception$("notificationData", MESSAGE_INVALID7);
    }
    if (!("D1" in notificationData2) || !V31.isObject(notificationData2.D1)) {
      this.exception$("notificationData.D1", MESSAGE_INVALID7);
    }
    if (!("D2" in notificationData2) || !V31.isObject(notificationData2.D2)) {
      this.exception$("notificationData.D2", MESSAGE_INVALID7);
    }
    if (!("D3" in notificationData2) || !V31.isObject(notificationData2.D3)) {
      this.exception$("notificationData.D3", MESSAGE_INVALID7);
    }
    if (!("D4" in notificationData2) || !V31.isObject(notificationData2.D4)) {
      this.exception$("notificationData.D4", MESSAGE_INVALID7);
    }
    if (!("D5" in notificationData2) || !V31.isObject(notificationData2.D5)) {
      this.exception$("notificationData.D5", MESSAGE_INVALID7);
    }
    if (!("D6" in notificationData2) || !V31.isObject(notificationData2.D6)) {
      this.exception$("notificationData.D6", MESSAGE_INVALID7);
    }
    if (!("D7" in notificationData2) || !V31.isObject(notificationData2.D7)) {
      this.exception$("notificationData.D7", MESSAGE_INVALID7);
    }
  }
  validateGameData(gameData2) {
    if (!V31.isObject(gameData2)) {
      this.exception$("gameData", MESSAGE_INVALID7);
    }
  }
  validateIsFirstLogin(isFirstLogin2) {
    if (!V31.isBoolean(isFirstLogin2)) {
      this.exception$("isFirstLogin", MESSAGE_INVALID7);
    }
  }
  validateDailyRewardedData(dailyRewardedData2) {
    if (!V31.isObject(dailyRewardedData2)) {
      this.exception$("dailyRewardedData", MESSAGE_INVALID7);
    }
  }
  validateLastCallSwitchGame(lastCallSwitchGame2) {
    if (!V31.isNumber(lastCallSwitchGame2)) {
      this.exception$("lastCallSwitchGame", MESSAGE_INVALID7);
    }
    if (lastCallSwitchGame2 < 0) {
      this.exception$("lastCallSwitchGame", MESSAGE_INVALID7);
    }
  }
  toObject() {
    return super.toObject();
  }
};
PlayerDataDtos.addDefaultData({
  score,
  settings,
  gameData,
  isFirstLogin,
  missionsData,
  notificationData,
  dailyRewardedData,
  lastCallSwitchGame
});
var PlayerData_default = PlayerDataDtos;

// extensions/ludex/src/plugins/player/dtos/PlayerGameData.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V32 } = Ludex.Utils;
var { level, coins } = state_default.data.gameData;
var PlayerGameDataDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateLevel(level2) {
    if (!V32.isNumber(level2) || level2 < 0) {
      this.exception$("level", "is invalid");
    }
  }
  validateCoins(coins2) {
    if (!V32.isNumber(coins2) || coins2 < 0) {
      this.exception$("coins", "is invalid");
    }
  }
  toObject() {
    return super.toObject();
  }
};
PlayerGameDataDtos.addDefaultData({
  level,
  coins
});
var PlayerGameData_default = PlayerGameDataDtos;

// extensions/ludex/src/plugins/player/dtos/PlayerSettings.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { Valid: V33 } = Ludex.Utils;
var { sound, music, vibrate, language } = state_default.data.settings;
var MESSAGE_INVALID8 = "is invalid";
var PlayerSettingsDtos = class extends BaseDtos_default {
  setupData(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateSound(sound2) {
    if (!V33.isBoolean(sound2)) {
      this.exception$("sound", MESSAGE_INVALID8);
    }
  }
  validateMusic(music2) {
    if (!V33.isBoolean(music2)) {
      this.exception$("music", MESSAGE_INVALID8);
    }
  }
  validateVibrate(vibrate2) {
    if (!V33.isBoolean(vibrate2)) {
      this.exception$("vibrate", MESSAGE_INVALID8);
    }
  }
  validateLanguage(language2) {
    if (!V33.isString(language2) || !language2) {
      this.exception$("language", MESSAGE_INVALID8);
    }
  }
  toObject() {
    return super.toObject();
  }
};
PlayerSettingsDtos.addDefaultData({
  sound,
  music,
  vibrate,
  language
});
var PlayerSettings_default = PlayerSettingsDtos;

// extensions/ludex/src/plugins/player/index.ts
Ludex.Dtos.Player = {
  Info: PlayerInfo_default,
  Data: PlayerData_default,
  Settings: PlayerSettings_default,
  GameData: PlayerGameData_default
};
var player_default = PlayerPlugin_default;

// extensions/ludex/src/plugins/profile/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/profile/ProfilePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/profile/api/ProfileAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: { ApiHost: ApiHost2, Mockup: Mockup2 },
  Utils: { Object: O31, String: S7 }
} = Ludex;
var ProfileAPI = class {
  mockAPI;
  async initMockAPI() {
    if (this.mockAPI) return;
    const ProfileAPIMock = (await import("./chunks-5BRQD5I6.js")).default;
    if (typeof ProfileAPIMock !== "function") {
      throw new Error("Cannot load ProfileAPIMock");
    }
    this.mockAPI = new ProfileAPIMock();
  }
  async getPlayersAsync(payload) {
    const params = S7.params(payload);
    let result3;
    if (Mockup2.Profile.Enabled) {
      await this.initMockAPI();
      result3 = await this.mockAPI.getPlayersAsync(payload);
    } else {
      if (!ApiHost2) return [];
      result3 = await get(`players?${params}`, {}, ApiHost2);
    }
    if (!O31.hasOwn(result3, "data") || !Array.isArray(result3.data)) return [];
    return result3.data;
  }
};
var ProfileAPI_default = ProfileAPI;

// extensions/ludex/src/plugins/profile/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var initState9 = {
  profiles: {},
  profileIds: []
};
var state_default9 = initState9;

// extensions/ludex/src/plugins/profile/ProfilePlugin.ts
var { Utils: Utils11, Dtos: Dtos14 } = Ludex;
var { Array: A8, Valid: V34, Object: O32, Function: F2 } = Utils11;
var ProfilePlugin = class extends Ludex.Plugins.BasePlugin {
  profileAPI = new ProfileAPI_default();
  init() {
    const { storage } = this.codex;
    storage.addStorage("profile", state_default9);
  }
  async requestProfiles(playerIds) {
    const profileIds = this.getProfileIds();
    const needPlayerIds = A8.difference(playerIds, profileIds);
    if (needPlayerIds.length < 1) return;
    const playerIdsChunks = A8.chunk(needPlayerIds, 400);
    const profilePromises = playerIdsChunks.map((playerIds2) => this.profileAPI.getPlayersAsync({ playerIds: playerIds2 }));
    const profilesResponses = await F2.allSettled(profilePromises);
    const result3 = profilesResponses.reduce((acc, response) => {
      if (response.status === "fulfilled") {
        return acc.concat(response.value);
      }
      return acc;
    }, []);
    if (!this.validateProfilesResponse(result3)) return;
    const profiles = this.convertToProfiles(result3);
    this.setProfiles(profiles);
  }
  getProfile(playerId2) {
    const profiles = this.getProfiles();
    const profile = profiles[playerId2];
    return profile ?? null;
  }
  getProfiles() {
    const { storage } = this.codex;
    return storage.getStorageData("profile", "profiles") ?? state_default9.profiles;
  }
  setProfiles(profiles) {
    const { storage } = this.codex;
    storage.setStorageData("profile", "profiles", profiles);
    storage.setStorageData("profile", "profileIds", Object.keys(profiles));
  }
  getProfileIds() {
    const { storage } = this.codex;
    return storage.getStorageData("profile", "profileIds") ?? [];
  }
  validateProfilesResponse(profiles) {
    if (!Array.isArray(profiles)) return false;
    if (profiles.length < 1) return false;
    return true;
  }
  convertToProfiles(result3) {
    const profiles = {};
    for (const data of result3) {
      if (!O32.hasOwn(data, "playerId")) continue;
      if (!V34.isString(data.playerId)) continue;
      profiles[data.playerId] = new Dtos14.Player.Info(data).toObject();
    }
    return profiles;
  }
};
var ProfilePlugin_default = ProfilePlugin;

// extensions/ludex/src/plugins/profile/index.ts
var profile_default = ProfilePlugin_default;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/storage/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/storage/StoragePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var gameName2 = "Tile Connect";
var {
  Utils: { Object: O33, Valid: V35, Browser: B4 }
} = Ludex;
var StoragePlugin = class extends Ludex.Plugins.BasePlugin {
  storages;
  storageLocalKeys = {};
  constructor(game) {
    super(game);
    this.storages = {};
  }
  async addStorage(name2, initState10, useWebStorage = false) {
    console.info("addStorage", name2, initState10);
    this.storages[name2] = initState10;
    if (useWebStorage) {
      await this.initFromWebStorage(name2, initState10);
    }
  }
  async initFromWebStorage(name2, initState10) {
    this.storageLocalKeys[name2] = true;
    const data = await B4.getIndexedDB(`${gameName2}_S_${name2}`);
    if (!V35.isObject(data)) return;
    const keys = Object.keys(initState10);
    for (const key of keys) {
      if (!O33.hasOwn(data, key)) continue;
      if (typeof initState10[key] !== typeof data[key]) continue;
      this.setStorageData(name2, key, data[key]);
    }
  }
  initStorageData(storage, field, initData) {
    this.storages[storage][field] = initData;
  }
  setStorageData(storage, field, data) {
    let nextData;
    if (V35.isObject(data)) {
      const currentData = this.getStorageData(storage, field);
      nextData = O33.merge(currentData, data);
    } else {
      nextData = data;
    }
    this.storages[storage][field] = nextData;
  }
  getStorageData(storage, field) {
    const data = this.getStorage(storage);
    return data[field];
  }
  getStorage(storage) {
    return this.storages[storage];
  }
  async updateToWebStorage(storage) {
    if (!this.storageLocalKeys[storage]) return;
    return this.saveToWebStorage(storage);
  }
  async saveToWebStorage(storage) {
    const data = this.getStorage(storage);
    return B4.setIndexedDB(`${gameName2}_S_${storage}`, data);
  }
};
var StoragePlugin_default = StoragePlugin;

// extensions/ludex/src/plugins/storage/index.ts
var storage_default = StoragePlugin_default;

// extensions/ludex/src/plugins/visibility/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/visibility/VisibilityPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var VisibilityPlugin = class extends Ludex.Plugins.BasePlugin {
  isVisible = true;
  browserPrefixes = ["moz", "ms", "o", "", "webkit"];
  init() {
    const browserPrefix = this.getBrowserPrefix();
    const visibilityEventName = this.getVisibilityEvent(browserPrefix);
    const basicEvents = [visibilityEventName, "focus", "blur"];
    for (const event of basicEvents) {
      this.registerEvent(window, event);
      this.registerEvent(document, event);
    }
    if (GameSDK.extra) {
      if ("onPause" in GameSDK.extra) {
        GameSDK.extra.onPause(() => this.handleVisibilityChange("blur"));
      }
      if ("onResume" in GameSDK.extra) {
        GameSDK.extra.onResume(() => this.handleVisibilityChange("focus"));
      }
    }
    this.registerEvent(window, "pageshow");
    this.registerEvent(window, "pagehide");
    window.addEventListener(
      "message",
      (event) => {
        if (event.data === "nativePause" || event.data === "nativeResume") {
          this.handleVisibilityChange(event.data);
        }
      },
      false
    );
  }
  isGameVisible() {
    return this.isVisible;
  }
  getHiddenPropertyName(prefix) {
    return prefix ? `${prefix}Hidden` : "hidden";
  }
  getVisibilityEvent(prefix) {
    return `${prefix || ""}visibilitychange`;
  }
  getBrowserPrefix() {
    for (const element of this.browserPrefixes) {
      if (this.getHiddenPropertyName(element) in document) {
        return element;
      }
    }
    return "";
  }
  onVisibleEvent() {
    if (this.isVisible) return;
    this.isVisible = true;
    this.codex.event.emit(Ludex.Events.VISIBILITY_VISIBLE);
  }
  onHiddenEvent() {
    if (!this.isVisible) return;
    this.isVisible = false;
    this.codex.event.emit(Ludex.Events.VISIBILITY_HIDDEN);
  }
  /**
   * Registers an event listener on the given target for visibility changes.
   * @param target - The event target (window or document).
   * @param eventName - The event name to listen for.
   */
  registerEvent(target, eventName) {
    target.addEventListener(
      eventName,
      () => {
        this.handleVisibilityChange(eventName);
      },
      false
    );
  }
  handleVisibilityChange = (event) => {
    const eventHandlerMap = {
      focus: this.onVisibleEvent.bind(this),
      pageshow: this.onVisibleEvent.bind(this),
      nativeResume: this.onVisibleEvent.bind(this),
      blur: this.onHiddenEvent.bind(this),
      pagehide: this.onHiddenEvent.bind(this),
      nativePause: this.onHiddenEvent.bind(this)
    };
    if (eventHandlerMap[event]) {
      eventHandlerMap[event]();
      return;
    }
    const browserPrefix = this.getBrowserPrefix();
    const hiddenPropertyName = this.getHiddenPropertyName(browserPrefix);
    if (hiddenPropertyName in document) {
      this.onHiddenEvent();
    } else {
      this.onVisibleEvent();
    }
  };
};
var VisibilityPlugin_default = VisibilityPlugin;

// extensions/ludex/src/plugins/visibility/index.ts
var visibility_default = VisibilityPlugin_default;

// extensions/ludex/src/codex/index.ts
init_accessBlocker();
init_empty_script();

// extensions/ludex/src/ads/BannerAdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/ads/instances/BannerInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var BannerInstance = class extends AdInstance_default {
  async loadAsync() {
    this.exception$("Unsupported method");
  }
  async showAsync() {
    this.exception$("This method is not implemented");
  }
  async hideAsync() {
    this.exception$("This method is not implemented");
  }
};
var BannerInstance_default = BannerInstance;

// extensions/ludex/src/ads/BannerAdInstance.ts
var { Status } = Ludex.Plugins.Ads;
var BannerAdInstance = class extends BannerInstance_default {
  async showAsync() {
    await GameSDK.loadBannerAdAsync(this.placementId);
    this.setStatus(Status.SHOWING);
  }
  async hideAsync() {
    await GameSDK.hideBannerAdAsync(this.placementId);
    this.setStatus(Status.IDLE);
  }
};
var BannerAdInstance_default = BannerAdInstance;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/ads/NormalAdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Utils: { Object: O34 },
  Plugins: {
    Ads: { Status: Status2, Types: Types2, AdError: AdError2, AdInstance: AdInstance2 }
  }
} = Ludex;
var NormalAdInstance = class extends AdInstance2 {
  service;
  instance;
  instanceQueue = [];
  constructor(type, placementId) {
    super(type, placementId);
    this.service = GameSDK.getSDKName();
    this.instance = null;
  }
  async loadAsync() {
    console.debug("AdInstance", "loadAsync called", {
      type: this.type,
      status: this.status,
      service: this.service,
      placementId: this.placementId
    });
    if (this.instance && this.status === Status2.FILLED) return;
    if (this.status !== Status2.IDLE) {
      throw new AdError2("AD_NOT_READY", "Ad is not ready.");
    }
    try {
      this.instance = await this.createInstanceByType(this.type);
      if (this.instance === null) {
        throw new AdError2("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
      }
      this.setStatus(Status2.LOADING);
      await this.instance.loadAsync();
      this.setStatus(Status2.FILLED);
      console.debug("AdInstance", "loadAsync success", {
        type: this.type,
        status: this.status,
        service: this.service
      });
      this.logAdLoad();
    } catch (error) {
      console.warn("AdInstance", "loadAsync failed", {
        type: this.type,
        status: this.status,
        service: this.service
      });
      console.warn(error);
      this.setStatus(Status2.IDLE);
      if (error instanceof Object && "code" in error) {
        if (error.code === "INVALID_PARAM") {
          this.instance = null;
        }
      }
      if (this.instance) {
        this.pushInstanceToQueue(this.instance);
      }
      self.codex.analytics.loadAdFail({
        type: this.type,
        service: this.service
      });
      throw error;
    }
  }
  async showAsync() {
    console.debug("AdInstance", "showAsync called", {
      type: this.type,
      status: this.status,
      service: this.service
    });
    if (this.status !== Status2.FILLED) {
      throw new AdError2("AD_NOT_FILLED", "Ad is not filled.");
    }
    if (this.instance === null) {
      throw new AdError2("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
    }
    let logShowed = false;
    try {
      this.setStatus(Status2.SHOWING);
      self.codex.analytics.showingAd({
        type: this.type,
        service: this.service
      });
      await this.instance.showAsync();
      logShowed = true;
      this.setStatus(Status2.IDLE);
      this.instance = null;
      console.debug("AdInstance", "showAsync success", {
        type: this.type,
        status: this.status,
        service: this.service
      });
    } catch (error) {
      console.warn("AdInstance", "showAsync failed", {
        type: this.type,
        status: this.status,
        service: this.service,
        error
      });
      if (O34.hasOwn(error, "code")) {
        if (error.code === "AD_NOT_LOADED") {
          this.setStatus(Status2.IDLE);
        }
        const codeList = ["INVALID_PARAM", "INVALID_OPERATION", "USER_INPUT"];
        if (codeList.indexOf(`${error.code}`) > -1) {
          this.setStatus(Status2.IDLE);
          this.instance = null;
        }
        if (error.code === "USER_INPUT") {
          logShowed = true;
        }
      }
      if (this.status === Status2.SHOWING) {
        this.setStatus(Status2.IDLE);
        this.instance = null;
      }
      throw error;
    } finally {
      if (logShowed) {
        this.logAdShown();
      } else {
        self.codex.analytics.showAdFail({
          type: this.type,
          service: this.service
        });
      }
    }
  }
  async createInstanceByType(type) {
    try {
      return await this.getAdInstanceByType(type);
    } catch (error) {
      if (!O34.hasOwn(error, "code")) return null;
      if (error.code === "ADS_TOO_MANY_INSTANCES") {
        return this.getAdInstanceFailed();
      }
      return null;
    }
  }
  async getAdInstanceByType(type) {
    switch (type) {
      case Types2.REWARDED_VIDEO:
        return await GameSDK.getRewardedVideoAsync(this.placementId);
      case Types2.INTERSTITIAL:
        return await GameSDK.getInterstitialAdAsync(this.placementId);
      case Types2.REWARDED_INTERSTITIAL:
        return await GameSDK.getRewardedInterstitialAsync(this.placementId);
      default:
        return null;
    }
  }
  getAdInstanceFailed() {
    if ("canBeLoadedAd" in GameSDK.extra) {
      for (const instance of this.instanceQueue) {
        if (GameSDK.extra.canBeLoadedAd(instance)) {
          this.instanceQueue.splice(this.instanceQueue.indexOf(instance), 1);
          return instance;
        }
      }
    } else {
      return this.instanceQueue.shift() || null;
    }
    return null;
  }
  logAdLoad() {
    switch (this.type) {
      case Types2.INTERSTITIAL:
        self.codex.analytics.loadInterstitialAd({
          service: this.service
        });
        break;
      case Types2.REWARDED_VIDEO:
        self.codex.analytics.loadRewardedVideoAd({
          service: this.service
        });
        break;
      case Types2.REWARDED_INTERSTITIAL:
        self.codex.analytics.loadRewardedInterstitialAd({
          service: this.service
        });
        break;
    }
  }
  logAdShown() {
    switch (this.type) {
      case Types2.INTERSTITIAL:
        self.codex.analytics.showInterstitialAd({
          service: this.service
        });
        break;
      case Types2.REWARDED_VIDEO:
        self.codex.analytics.showRewardedVideoAd({
          service: this.service
        });
        break;
      case Types2.REWARDED_INTERSTITIAL:
        self.codex.analytics.showRewardedInterstitialAd({
          service: this.service
        });
        break;
    }
  }
  pushInstanceToQueue(instance) {
    this.instanceQueue.push(instance);
  }
};
var NormalAdInstance_default = NormalAdInstance;

// extensions/ludex/src/codex/index.ts
init_empty_script();
init_empty_script();
init_empty_script();

// extensions/ludex/src/analytics/FacebookAnalytics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { BaseAnalytics: BaseAnalytics2, Events: Events4 } = Ludex.Plugins.Analytics;
var excludeEvents = [Events4.BUTTON_CLICK, Events4.SCREEN_OPEN];
var {
  Utils: { Array: A9 }
} = Ludex;
var FacebookAnalytics = class extends BaseAnalytics2 {
  prefix;
  constructor(ld, options) {
    super(ld, "FacebookAnalytics", __spreadProps(__spreadValues({}, options), { color: "#0F52BA" }));
    this.prefix = options.prefix;
  }
  processEvent(name2, payload) {
    if (!GameSDK.extra) return;
    if (!("logEvent" in GameSDK.extra)) return;
    if (A9.has(excludeEvents, name2)) return;
    try {
      const event = this.addPrefixToEventName(name2);
      GameSDK.extra.logEvent(event, 1, payload);
    } catch (error) {
      console.warn("FacebookAnalytics.processEvent", error);
    }
  }
  addPrefixToEventName(name2) {
    return `${this.prefix}_${name2}`;
  }
};
var FacebookAnalytics_default = FacebookAnalytics;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/analytics/GoogleAnalytics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var { BaseAnalytics: BaseAnalytics3, Events: Events5 } = Ludex.Plugins.Analytics;
var excludeEvents2 = [Events5.SCREEN_OPEN, Events5.ENGINE_READY];
var {
  Utils: { Array: A10 }
} = Ludex;
var GoogleAnalytics = class extends BaseAnalytics3 {
  constructor(ld, options) {
    super(ld, "GoogleAnalytics", __spreadProps(__spreadValues({}, options), { color: "#E35335" }));
  }
  processEvent(event, payload) {
    if (A10.has(excludeEvents2, event)) return;
    this.customEvent(event, payload);
    gtag("event", event, payload);
  }
  customEvent(event, payload) {
    switch (event) {
      case Events5.AD_SHOW:
      case Events5.AD_SHOW_FAILED:
      case Events5.AD_SHOWING:
      case Events5.USE_ITEM:
      case Events5.EARN_ITEM:
        this.addLevelName(payload);
        break;
      default:
        break;
    }
  }
  addLevelName(payload) {
    if (!payload) return;
    if (!this.codex?.match) return;
    const matchState = this.codex.match.getMatchState();
    const level2 = matchState.customData.level;
    if (!level2 || level2 < 0) return;
    payload.level_name = this.getLevelName(level2);
  }
};
var GoogleAnalytics_default = GoogleAnalytics;

// extensions/ludex/src/codex/index.ts
init_empty_script();
init_empty_script();
init_empty_script();
var NODE_ENV = "development";
var BUILD_VERSION = 110;
var {
  Dtos: Dtos15,
  Events: Events6,
  Configs: {
    AppId: AppId5,
    Ads,
    Analytics: Analytics7,
    Debugger,
    Firebase,
    Notification,
    RemoteConfig,
    PerformanceMonitor,
    AdaptivePerformance
  },
  Plugins: {
    Ads: { Types: AdsTypes }
  },
  Utils: { Device: D, Object: O35, Json: J6, String: S8, Valid: V36, Time: T2, Function: F3, Mark: Mark2 }
} = Ludex;
var MagicCodex = class extends codex_default {
  markName = "Core Initialize";
  modulePlugins = [];
  // ? Use in production mode, console
  getBuildVersion() {
    return parseInt(`${BUILD_VERSION}`) || 0;
  }
  async boot() {
    console.groupEnd();
    console.groupCollapsed("\u{1F9EC} Ludex Boot");
    super.boot();
    this.addPlugins();
    this.initEventPlugin();
    this.event.emit(Events6.CORE_BOOTING);
    this.validateCoreFlow$();
    this.initFirebasePlugin();
    this.initMarkCoreInitialize();
    Mark2.putAttr(this.markName, "Step", "Init Analytics");
    this.initGoogleAnalytics();
    this.initClarityAnalytics();
    this.initFirebaseAnalytics();
    this.initYandexAnalytics();
    this.initXiaomiAnalytics();
    this.initFacebookAnalytics();
    this.initTranssionH5Analytics();
    Mark2.putAttr(this.markName, "Step", "Init Plugins");
    this.initAds();
    this.initMatchPlugin();
    this.initRemoteConfig();
    Mark2.putAttr(this.markName, "Step", "Load Lazy Plugins");
    if (!V36.isDebugger()) {
      this.event.on(Events6.MODULE_PLUGIN_READY, this.handleProtectGameInstance);
    }
    this.addMonitorPlugin().then(this.initMonitorErrorPlugin);
    this.addCanvasRecorderPlugin().then(this.initCanvasRecorderPlugin);
    this.addAdaptivePerformancePlugin().then(this.initAdaptivePerformancePlugin);
    this.addInputRecorderPlugin().then(this.initInputRecorderPlugin);
    Mark2.putAttr(this.markName, "Step", "Load Dev Plugins");
    this.event.catchUp(Events6.GAME_SDK_READY, this.addDevPlugins);
    console.groupEnd();
  }
  async validateCoreFlow$() {
    await T2.sleepAsync(2e3);
    const eventInfo = this.event.getEventListeners(Events6.CORE_BOOTING);
    if (eventInfo.length === 0) {
      console.groupEnd();
      console.groupEnd();
      console.log(
        "%c Your game is not listening CORE_BOOTING event!!",
        "color: #f17f4a; font-size: 14px; font-weight: bold;"
      );
      console.log("%c Or init flow is slower!", "color: #26a0f0; font-weight: bold;");
    }
  }
  async start() {
    console.groupEnd();
    console.groupCollapsed("\u{1F9EC} Ludex Start");
    super.start();
    Mark2.putAttr(this.markName, "Step", "Core Start");
    this.event.emit(Events6.CORE_STARTING);
    Mark2.putAttr(this.markName, "Step", "Request Token");
    await this.auth.requestToken();
    Mark2.putAttr(this.markName, "Step", "Init States");
    await this.initState();
    Mark2.putAttr(this.markName, "Step", "Process Player Profile");
    this.processPlayerProfile();
    if (GameSDK.getSDKName() === "FacebookInstant" && D.isIOS()) {
      this.event.catchUp(Events6.GAME_SDK_STARTED, this.processContextSession);
    } else {
      await this.processContextSession();
    }
    if (false) {
      console.info("Ludex start completed");
      console.info("Your game is ready to load!");
    }
    Mark2.putAttr(this.markName, "Step", "Core Ready");
    Mark2.putAttr(this.markName, "Success", "true");
    this.event.emit(Events6.CORE_READY);
  }
  processContextSession = async () => {
    Mark2.putAttr(this.markName, "Step", "Process Context Payload");
    await this.context.detectContextSessionType();
    this.context.detectContextGameMode();
    const contextSessionType = this.storage.getStorageData("context", "sessionContextType") || "unkn\
own";
    Mark2.putAttr(this.markName, "Context Mode", contextSessionType);
    console.warn("Ludex start completed", contextSessionType);
    Mark2.stop(this.markName);
  };
  /* private testLWZUtils(): void {
          const { Hash, String } = Ludex.Utils
  
          const str = 'abracadabra'
          
          console.info('str', str, str.length)
  
          const doubleStr = String.findDuplicateSubstrings(str)
          console.info('doubleStr', doubleStr)
  
          const customDict: Ludex.Utils.Hash.CompressDict = {}
          for (const subStr of doubleStr) {
              const size = Object.keys(customDict).length
              customDict[subStr] = size + 1
          }
  
          console.info('customDict', customDict, Object.keys(customDict).length)
  
          let compressed = Hash.lwzCompress(str, customDict)
          console.info('compressed', compressed, compressed.toString().length)
  
          let decompressed = Hash.lwzDecompress(compressed, customDict)
          console.info('decompressed', decompressed, decompressed.length)
  
          const str2 = compressed.join(' ')
          console.info('str2', str2, str2.length)
  
          const doubleStr2 = String.findDuplicateSubstrings(str2)
          console.info('doubleStr2', doubleStr2)
  
          const customDict2: Ludex.Utils.Hash.CompressDict = {}
          for (const subStr of doubleStr2) {
              const size = Object.keys(customDict2).length
              customDict2[subStr] = size + 1
          }
  
          console.info('customDict2', customDict2, Object.keys(customDict2).length)
  
          compressed = Hash.lwzCompress(str2, customDict2, 2)
          console.info('compressed2', compressed, compressed.length)
  
          decompressed = Hash.lwzDecompress(compressed, customDict2, 2)
          console.info('decompressed2', decompressed, decompressed.length)
  
          compressed = decompressed.split(' ').map((str) => parseInt(str))
          console.info('compressed', compressed)
  
          decompressed = Hash.lwzDecompress(compressed, customDict)
          console.info('decompressed', decompressed, decompressed.length)
      } */
  addPlugins() {
    this.installPlugin("Storage", storage_default);
    this.installPlugin("Event", event_default);
    this.installPlugin("Ads", ads_default);
    this.installPlugin("Auth", auth_default);
    this.installPlugin("Audio", audio_default);
    this.installPlugin("Match", match_default);
    this.installPlugin("Player", player_default);
    this.installPlugin("Profile", profile_default);
    this.installPlugin("Context", context_default2);
    this.installPlugin("Language", language_default);
    this.installPlugin("Missions", missions_default);
    this.installPlugin("Analytics", analytics_default);
    this.installPlugin("Visibility", visibility_default);
    this.installPlugin("Leaderboard", leaderboards_default);
    this.installPlugin("DailyRewards", daily_rewards_default);
    this.installPlugin("FrameCapture", frame_capture_default);
    this.installPlugin("RemoteConfig", empty_script_default);
    if ("Proxy" in window) {
      this.installPlugin("Firebase", empty_script_default);
    }
  }
  installPlugin(name2, plugin, isModule = false) {
    const property = S8.toCamelCase(S8.capitalize(name2));
    this.plugins.install(name2, plugin, true, property);
    if (name2 === "Storage") return;
    if (!isModule) {
      this.emitCorePluginReady(name2);
    } else {
      this.emitModulePluginReady(name2);
    }
  }
  async addMonitorPlugin() {
    try {
      const { MonitorError } = Debugger;
      if (!MonitorError.Enabled) return;
      this.modulePlugins.push("MonitorError");
      const MonitorErrorPlugin = (await import("./chunks-T2I3ZXJK.js")).default;
      if (typeof MonitorErrorPlugin !== "function") return;
      this.installPlugin("MonitorError", MonitorErrorPlugin, true);
    } catch (error) {
      console.error("Error importing Monitor Error plugin:", error);
    }
  }
  async addCanvasRecorderPlugin() {
    try {
      const { CanvasRecorder } = Debugger;
      if (!CanvasRecorder.Enabled) return;
      this.modulePlugins.push("CanvasRecorder");
      const CanvasRecorderPlugin = (await import("./chunks-T2I3ZXJK.js")).default;
      if (typeof CanvasRecorderPlugin !== "function") {
        throw new Error("CanvasRecorderPlugin is not a function");
      }
      this.installPlugin("CanvasRecorder", CanvasRecorderPlugin, true);
    } catch (error) {
      console.error("Error importing Canvas Recorder plugin:", error);
    }
  }
  async addAdaptivePerformancePlugin() {
    try {
      if (!AdaptivePerformance.Enabled) return;
      this.modulePlugins.push("AdaptivePerformance");
      const AdaptivePerformancePlugin = (await import("./chunks-J2MVCK2Z.js")).default;
      if (typeof AdaptivePerformancePlugin !== "function") return;
      this.installPlugin("AdaptivePerformance", AdaptivePerformancePlugin, true);
    } catch (error) {
      console.error("Error importing Adaptive Performance plugin:", error);
    }
  }
  async addInputRecorderPlugin() {
    try {
      const { InputRecorder } = Debugger;
      if (!InputRecorder.Enabled) return;
      this.modulePlugins.push("InputRecorder");
      const InputRecorderPlugin = (await import("./chunks-T2I3ZXJK.js")).default;
      if (typeof InputRecorderPlugin !== "function") return;
      this.installPlugin("InputRecorder", InputRecorderPlugin, true);
    } catch (error) {
      console.error("Error importing Input Recorder plugin:", error);
    }
  }
  addDevPlugins = () => {
    const { ListPlayerDevIds } = Debugger;
    const playerId2 = GameSDK?.player?.getID();
    if (NODE_ENV !== "development" && (!playerId2 || ListPlayerDevIds.indexOf(playerId2) < 0)) {
      console.warn("PlayerId is not in the list of dev IDs", playerId2);
      return;
    }
    this.addConsolePlugin();
    this.addProfilerPlugin();
  };
  async addConsolePlugin() {
    try {
      const { Console } = Debugger;
      if (!Console.Enabled) return;
      this.modulePlugins.push("Console");
      const ConsolePlugin = (await import("./chunks-3BCM4VOY.js")).default;
      if (typeof ConsolePlugin !== "function") {
        throw new Error("ConsolePlugin is not a function");
      }
      this.installPlugin("Console", ConsolePlugin, true);
      this.initConsolePlugin();
    } catch (error) {
      console.error("Error importing Console plugin:", error);
    }
  }
  async addProfilerPlugin() {
    try {
      const { Profiler } = Debugger;
      if (!Profiler.Enabled) return;
      this.modulePlugins.push("Profiler");
      const ProfilerPlugin = (await import("./chunks-T2I3ZXJK.js")).default;
      if (typeof ProfilerPlugin !== "function") {
        throw new Error("ProfilerPlugin is not a function");
      }
      this.installPlugin("Profiler", ProfilerPlugin, true);
      this.initProfilerPlugin();
    } catch (error) {
      console.error("Error importing Profiler plugin:", error);
    }
  }
  emitCorePluginReady(name2) {
    this.event.emit(CoreEvents_default.CORE_PLUGIN_READY, { name: name2 });
  }
  emitModulePluginReady(name2) {
    this.event.emit(CoreEvents_default.MODULE_PLUGIN_READY, { name: name2 });
  }
  handleProtectGameInstance = () => {
    const eventCount = this.event.getEventEmitCount(CoreEvents_default.MODULE_PLUGIN_READY);
    const moduleCount = this.modulePlugins.length;
    if (eventCount < moduleCount) return;
    window.codex = Object.freeze(window.codex);
    console.warn("window.codex", window.codex);
    accessBlocker_default(window, "codex");
  };
  initEventPlugin() {
    const { EventLogging } = Debugger;
    if (!EventLogging.Enabled) return;
    this.event.enableLogEvent();
  }
  initMatchPlugin() {
    this.match.setUseCPUProfile(false);
  }
  initAds() {
    this.ads.configure(Ads);
    this.initGoogleAds();
    this.initTranssionH5Ads();
    this.initAdInstance();
    if (!Ads.Enabled) return;
    this.analytics.initAdEvent({
      adService: "platform",
      state: "loaded"
    });
  }
  async initGoogleAds() {
    try {
      if (!Ads.Enabled) return;
      const { AdSense } = Ads.AdServiceConfigs;
      if (!AdSense.Enabled) return;
      const googleAds = new empty_script_default(this);
      await googleAds.initAsync({
        usePreload: AdSense.UsePreload,
        dataAdHost: AdSense.DataAdHost,
        dataAdClient: AdSense.DataAdClient,
        dataAdChannel: AdSense.DataAdChannel,
        dataAdBreakTest: AdSense.DataAdBreakTest,
        dataAdFrequencyHint: AdSense.DataAdFrequencyHint
      });
      window.GoogleAds = googleAds;
    } catch (error) {
      console.warn("initGoogleAds", error);
    }
  }
  async initTranssionH5Ads() {
    try {
      if (!Ads.Enabled) return;
      const { Savana } = Ads.AdServiceConfigs;
      if (!Savana.Enabled) return;
      const transsionH5Ads = new empty_script_default(this);
      await transsionH5Ads.initAsync({
        usePreload: Savana.UsePreload,
        dataAdHost: Savana.DataAdHost,
        dataAdClient: Savana.DataAdClient,
        dataAdChannel: Savana.DataAdChannel,
        dataAdBreakTest: Savana.DataAdBreakTest,
        dataAdFrequencyHint: Savana.DataAdFrequencyHint
      });
      window.TranssionH5Ads = transsionH5Ads;
    } catch (error) {
      console.warn("initTranssionH5Ads", error);
    }
  }
  getAdInstanceByService(service, isBanner = false) {
    const { AdSense, AppLovin, Savana } = Ads.AdServiceConfigs;
    switch (service) {
      case "adsense":
        if (AdSense.Enabled) {
          return empty_script_default;
        }
        break;
      case "applovin":
        if (AppLovin.Enabled) {
        }
        break;
      case "savana":
        if (Savana.Enabled) {
          return empty_script_default;
        }
        break;
      default:
        if (isBanner) return BannerAdInstance_default;
        return NormalAdInstance_default;
    }
    return null;
  }
  initAdInstance() {
    for (const option of Ads.InterstitialAdOptions) {
      const instance = this.getAdInstanceByService(option.AdService);
      if (!instance) continue;
      this.ads.setAdInstance(AdsTypes.INTERSTITIAL, option.PlacementId, instance);
    }
    for (const option of Ads.RewardedVideoAdOptions) {
      const instance = this.getAdInstanceByService(option.AdService);
      if (!instance) continue;
      this.ads.setAdInstance(AdsTypes.REWARDED_VIDEO, option.PlacementId, instance);
    }
    for (const option of Ads.RewardedInterstitialAdOptions) {
      const instance = this.getAdInstanceByService(option.AdService);
      if (!instance) continue;
      this.ads.setAdInstance(AdsTypes.REWARDED_INTERSTITIAL, option.PlacementId, instance);
    }
    const isBanner = true;
    for (const option of Ads.BannerDisplayAdOptions) {
      const instance = this.getAdInstanceByService(option.AdService, isBanner);
      if (!instance) continue;
      this.ads.setAdInstance(AdsTypes.BANNER, option.PlacementId, instance);
    }
  }
  async initState() {
    try {
      const initiator = new StateInitiator_default(this);
      initiator.initContext();
      await initiator.initPlayer();
    } catch (error) {
      console.error("StateInitiator", error);
    }
  }
  initConsolePlugin() {
    if (!this.console) return;
    this.console.configure();
  }
  initProfilerPlugin() {
    if (!this.profiler) return;
    this.profiler.configure();
  }
  initCanvasRecorderPlugin = () => {
    if (!this.canvasRecorder) return;
    const { CanvasRecorder } = Debugger;
    const { Type, Quality, RecordFps, SyncFps } = CanvasRecorder.Options;
    this.canvasRecorder.configure({
      type: Type,
      quality: Quality,
      syncFps: SyncFps,
      recordFps: RecordFps
    });
    this.canvasRecorder.setPanelExpanded(CanvasRecorder.PanelExpanded);
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }
    this.canvasRecorder.setCanvas(canvas);
  };
  initMonitorErrorPlugin = () => {
    if (!this.monitorError) return;
    const { MonitorError, ListPlayerDevIds } = Debugger;
    const { ApiKey, Service, Feedback, TrackUser, FilterErrors } = MonitorError;
    const { playerId: playerId2, name: name2 } = this.player.getPlayer();
    if (playerId2 && ListPlayerDevIds.indexOf(playerId2) >= 0) return;
    window.disableSimpleTrackErrors?.();
    this.monitorError.configure({
      apiKey: ApiKey,
      service: Service,
      feedback: Feedback,
      trackUser: TrackUser,
      releaseStage: NODE_ENV,
      buildVersion: `${BUILD_VERSION ?? 1}`
    });
    this.monitorError.setUser({ id: playerId2, name: name2 });
    this.monitorError.addFilterErrors(FilterErrors);
    this.monitorError.initFeedbackTrackErrors();
    this.updateMonitorErrorUserAndMetadata();
    this.processErrorsQueue();
  };
  updateMonitorErrorUserAndMetadata = () => {
    this.event.catchUp(Events6.PLAYER_INFO_LOADED, this.processWhenPlayerInfoLoaded);
  };
  processErrorsQueue = () => {
    if (!this.monitorError) return;
    if (!window.__errorQueue) return;
    for (const error of window.__errorQueue) {
      if (error instanceof Error) {
        this.monitorError.sendException(error);
      } else {
        const errorObj = F3.toError(error);
        this.monitorError.sendException(errorObj);
      }
    }
    window.__errorQueue = null;
  };
  processWhenPlayerInfoLoaded = () => {
    if (!this.monitorError) return;
    const { playerId: playerId2, name: name2 } = this.player.getPlayer();
    this.monitorError.setUser({
      id: playerId2,
      name: name2
    });
    this.monitorError.addMetadata({
      isFirstSession: this.player.isFirstSession()
    });
  };
  initRemoteConfig() {
    if (!RemoteConfig.Enabled) return;
    const config = J6.clone(RemoteConfig);
    this.remoteConfig.configure(config);
    this.event.on(CoreEvents_default.REQUEST_SAVE_CONFIG, this.handleSaveRemoteConfig);
    this.event.on(CoreEvents_default.REQUEST_UPDATE_CONFIG, this.handleUpdateLudexConfig);
    this.event.catchUp(CoreEvents_default.PLAYER_INFO_LOADED, this.handleStorageCurrentRemoteConfig);
  }
  handleSaveRemoteConfig = (data) => {
    try {
      const config = {
        [data.type]: data
      };
      this.player.setPlayerDataByName("remoteConfig", config);
    } catch (error) {
      console.warn("handleSaveLudexConfig", error);
    }
  };
  handleUpdateLudexConfig = (data) => {
    try {
      const { id, type } = data;
      if (type !== "Ludex") return;
      Ludex.Configs = O35.merge(Ludex.Configs, data.config);
      const { Ads: Ads2 } = Ludex.Configs;
      this.ads.configure(Ads2);
      this.event.emit(CoreEvents_default.REMOTE_CONFIG_UPDATED, { id, type });
    } catch (error) {
      console.warn("handleUpdateLudexConfig", error);
    }
  };
  handleStorageCurrentRemoteConfig = () => {
    const playerRemoteConfig = this.player.getPlayerDataByKey("remoteConfig");
    console.debug("playerRemoteConfig", J6.clone(playerRemoteConfig));
    if (!playerRemoteConfig) return;
    for (const key in playerRemoteConfig) {
      if (O35.hasOwn(playerRemoteConfig, key)) {
        const remoteConfig = playerRemoteConfig[key];
        const newRemoteConfig = J6.clone(remoteConfig);
        console.log("newRemoteConfig", newRemoteConfig);
        const remoteConfigValid = new Dtos15.RemoteConfig.Data(newRemoteConfig).toObject();
        console.debug("remoteConfigValid", remoteConfigValid);
        this.remoteConfig.setRemoteConfig(remoteConfigValid);
        this.remoteConfig.processUpdateConfig(remoteConfigValid.id, remoteConfigValid.type);
      }
    }
  };
  initFirebasePlugin() {
    if (!Firebase.Enabled) return;
    if (!this.firebase) return;
    const config = J6.clone(Firebase);
    this.firebase.configure(config);
    Mark2.setService(this.firebase.services.performance);
  }
  initMarkCoreInitialize() {
    if (!PerformanceMonitor.CoreFlows) return;
    Mark2.measure(this.markName);
    Mark2.putAttr(this.markName, "Build", `${BUILD_VERSION}`);
    Mark2.putAttr(this.markName, "GameSDK", GameSDK.getSDKName());
    Mark2.putAttr(this.markName, "Platform", GameSDK.getPlatform());
    Mark2.putAttr(this.markName, "Success", "false");
    Mark2.start(this.markName);
  }
  initAdaptivePerformancePlugin = () => {
    if (!this.adaptivePerformance) return;
    const config = J6.clone(AdaptivePerformance);
    this.adaptivePerformance.configure(config);
  };
  initInputRecorderPlugin = () => {
    if (!this.inputRecorder) return;
    const { InputRecorder } = Debugger;
    const config = J6.clone(InputRecorder);
    if (!config) {
      console.warn("Input Recorder is not configured");
      return;
    }
    this.inputRecorder.configure(config);
  };
  async processPlayerProfile() {
    try {
      await this.player.syncProfileToServer();
      this.processAfterSyncProfile();
    } catch (error) {
      console.warn("processPlayerProfile fail", error);
    }
  }
  processAfterSyncProfile = () => {
    if (!Notification.Enabled) return;
    this.updatePlayerProfileToNotificationService();
  };
  async updatePlayerProfileToNotificationService() {
    try {
      const player = this.player.getPlayer();
      const { ASID, playerId: playerId2, name: name2, photo: photo2, locale: locale2 } = player;
      const profileData = {
        appId: AppId5,
        ASID,
        playerId: playerId2,
        name: name2,
        photo: photo2,
        locale: locale2
      };
      await updatePlayerProfileNotificationAsync(profileData);
    } catch (error) {
      console.warn("updatePlayerProfileToNotificationService", error);
    }
  }
  initGoogleAnalytics() {
    const { Enabled: Enabled5, ConsoleLog } = Analytics7.GoogleAnalytics ?? {};
    if (!Enabled5) return;
    if (typeof GoogleAnalytics_default !== "function" || !(GoogleAnalytics_default.prototype instanceof
    Object)) {
      console.warn("GoogleAnalytics is not a constructor");
      return;
    }
    this.analytics.add(
      new GoogleAnalytics_default(this.codex, {
        log: !!ConsoleLog
      })
    );
  }
  initClarityAnalytics() {
    const { Enabled: Enabled5, ConsoleLog } = Analytics7.ClarityAnalytics ?? {};
    if (!Enabled5) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("ClarityAnalytics is not a constructor");
      return;
    }
    const instance = new empty_script_default(this.codex, {
      log: !!ConsoleLog
    });
    const player = this.player.getPlayer();
    const { playerId: playerId2 } = player;
    instance.setUser(playerId2, GameSDK.extra.isGuest);
    this.analytics.add(instance);
  }
  initFirebaseAnalytics() {
    const { Enabled: Enabled5, ConsoleLog } = Analytics7.FirebaseAnalytics ?? {};
    if (!Enabled5) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("FirebaseAnalytics is not a constructor");
      return;
    }
    const instance = new empty_script_default(this.codex, {
      log: !!ConsoleLog
    });
    this.analytics.add(instance);
    let entryPoint = "no_entry";
    GameSDK.getEntryPointAsync().then((entry) => {
      entryPoint = entry;
    }).catch((error) => {
      console.warn(error);
    }).finally(() => {
      const player = this.player.getPlayer();
      const { playerId: playerId2, locale: locale2 } = player;
      const {
        // ? Old fields
        fbig_ad_id,
        fbig_adset_id,
        fbig_campaign_id,
        // ? New fields
        fb_instant_game_adset_id,
        fb_instant_game_ad_id,
        fb_instant_game_campaign_id
      } = GameSDK.getEntryPointData() || {};
      const ad_id = fbig_ad_id || fb_instant_game_ad_id;
      const adset_id = fbig_adset_id || fb_instant_game_adset_id;
      const campaign_id = fbig_campaign_id || fb_instant_game_campaign_id;
      instance.setUser(playerId2, {
        locale: locale2,
        ad_id,
        adset_id,
        campaign_id,
        traffic_source: entryPoint
      });
    });
  }
  initYandexAnalytics() {
    const sdkName = GameSDK.getSDKName();
    if (sdkName !== "Yandex") return;
    this.analytics.add(new empty_script_default(this.codex));
  }
  initXiaomiAnalytics() {
    const sdkName = GameSDK.getSDKName();
    if (sdkName !== "Xiaomi") return;
    this.analytics.add(new empty_script_default(this.codex));
  }
  initFacebookAnalytics() {
    const sdkName = GameSDK.getSDKName();
    const { Enabled: Enabled5, Prefix, ConsoleLog } = Analytics7.FacebookAnalytics ?? {};
    if (!Enabled5 || sdkName !== "FacebookInstant") return;
    if (typeof Prefix !== "string") {
      console.warn("Facebook Analytics is not configured");
      return;
    }
    this.analytics.add(
      new FacebookAnalytics_default(this.codex, {
        prefix: Prefix,
        log: !!ConsoleLog
      })
    );
  }
  initTranssionH5Analytics() {
    const sdkName = GameSDK.getSDKName();
    if (sdkName !== "TranssionH5") return;
    this.analytics.add(new empty_script_default(this.codex));
  }
};
var codex_default2 = MagicCodex;

// extensions/ludex/src/index.ts
var {
  Configs: {
    GameEngine: { ForceDesktopDPR }
  },
  Utils: { Device: D2 },
  Events: Events7
} = Ludex;
var initGame = async () => {
  const codex2 = new codex_default2();
  window.codex = codex2;
  globalThis.codex = codex2;
  const initPercent = 20;
  if (window.__sdkLoadingCount < initPercent) {
    window.__sdkLoadingCount = initPercent;
  }
  window.__ludexStart = true;
  await codex2.boot();
  codex2.event.catchUp(Events7.REQUEST_CORE_START, startGame);
  waitGameSDK(codex2);
};
var startGame = () => {
  if (!window.__sdkInitiated) {
    codex.event.catchUp(Events7.GAME_SDK_READY, startGame);
    return;
  }
  codex.start();
  console.warn("Game started");
  const startPercent = 25;
  if (window.__sdkLoadingCount < startPercent) {
    window.__sdkLoadingCount = startPercent;
  }
};
var waitGameSDK = (game) => {
  const intervalWaitSDK = 5;
  const waitInitiatedTimer = setInterval(() => {
    if (!window.__sdkInitiated) return;
    clearInterval(waitInitiatedTimer);
    const initGameSdkPercent = 10;
    if (window.__sdkLoadingCount < initGameSdkPercent) {
      window.__sdkLoadingCount = initGameSdkPercent;
    }
    game.event.emit(Events7.GAME_SDK_READY);
  }, intervalWaitSDK);
};
if (ForceDesktopDPR !== false && D2.isDesktop()) {
  if (typeof ForceDesktopDPR === "number" && ForceDesktopDPR > 0) {
    window.devicePixelRatio = ForceDesktopDPR;
  }
}
window.originalRequestAnimationFrame = window.requestAnimationFrame;
window.isCustomRequestAnimationFrame = window.isCustomRequestAnimationFrame ?? true;
if (window.isCustomRequestAnimationFrame) {
  window.requestAnimationFrame = (callback) => {
    if (window.isCustomRequestAnimationFrame) {
      setTimeout(callback, 1e3 / 60);
      return 0;
    }
    return window.originalRequestAnimationFrame(callback);
  };
}
initGame();
