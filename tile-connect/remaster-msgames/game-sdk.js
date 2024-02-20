(function () {var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// <define:__GAME_CONFIG__>
var define_GAME_CONFIG_default;
var init_define_GAME_CONFIG = __esm({
  "<define:__GAME_CONFIG__>"() {
    define_GAME_CONFIG_default = { AppId: "", ApiHost: "https://fbig-singleplay-apps.citigo.site", OtherHost: "https://fbig-leaderboards.citigo.site", Ads: { Enabled: true, ShowAdOnLoad: { Enabled: false, DelaySeconds: 0, PlacementId: "interstitial_demo" }, InterstitialAdOptions: [{ PlacementId: "interstitial_demo", SecondsFirstTime: 60, SecondsBetweenAds: 90 }], RewardedVideoAdOptions: [{ PlacementId: "rewarded_video_demo", SecondsFirstTime: 0, SecondsBetweenAds: 0 }], BannerDisplayAdOptions: [{ PlacementId: "banner_demo", Position: "bottom", BannerHeight: 50, SecondsReload: 60, Platform: "ALL" }] }, GameSDK: { MSGames: { GameName: "Localhost", UseLoginFeature: true } }, Core: { StartSDKAfterLoadGame: true }, GameEngine: { DynamicAtlas: { IOS: { Enabled: false, MaxAtlasCount: 6, MaxAtlasSize: 4096, MaxFrameSize: 2048 }, Android: { Enabled: false, MaxAtlasCount: 6, MaxAtlasSize: 4096, MaxFrameSize: 2048 }, Desktop: { Enabled: false, MaxAtlasCount: 6, MaxAtlasSize: 4096, MaxFrameSize: 2048 } }, ForceDesktopDPR: false }, Gameplay: { StartAdAtLevel: 1, MaxRescueCount: 1, Tutorial: { ForceUseTutorial: false } }, Firebase: { Enabled: false, Options: { AppId: "", ApiKey: "", ProjectId: "", AuthDomain: "", StorageBucket: "", MeasurementId: "", MessagingSenderId: "" }, Services: { Analytics: { Enabled: false }, Performance: { Enabled: false }, RemoteConfig: { Enabled: false } } }, Analytics: { GoogleAnalytics: { Enabled: false, ConsoleLog: false }, FirebaseAnalytics: { Enabled: false, ConsoleLog: false }, FacebookAnalytics: { Prefix: "fba", Enabled: false, ConsoleLog: false } }, PerformanceMonitor: { CoreFlows: true, EngineFlows: true, FpsTracking: { Enabled: true, TrackingDuration: 60, TrackingInterval: 10 }, LoadResources: true }, RemoteConfig: { Enabled: false, Options: { ForceReloadGame: false, FetchIntervalInSeconds: 300 }, ServiceType: "mockup", DefaultConfigId: "default", SupportedDataTypes: ["GameCore", "Gameplay"], MockupConfig: { Enabled: true }, SelfHostedConfig: { Enabled: false, AppId: "", ApiKey: "", ApiUrl: "" } }, Network: { MaximumRequest: 6, Timeout: 15e3, Retries: 3 }, Leaderboards: { Limit: 50, LeaderboardId: "", LeaderboardEndlessId: "" }, Notification: { Enabled: true, ApiUrl: "https://notifications.sunstudio.io", GameTitle: "Sun Studio", GameImage: "https://sunstudio.io/images/logo.png" }, DailyRewards: { MaxDays: 7, MockTime: 0, CheckInterrupt: false }, Mockup: { Ads: { Enabled: false, ErrorRate: 5, GiphyApiKey: "VmjHIRsfrwCAssDS4mDo9DoImxJm1lLM" }, Match: { Enabled: false, CreateFailRate: 5, PlayerInfo: { Id: "player-mock", Name: "Player Mock", Photo: "", Signature: "" }, OpponentInfo: { Id: "opponent-mock", Name: "Opponent Mock", Photo: "", Signature: "" } }, GameSDK: { Context: { Enabled: false }, Player: { SubscribeBot: { Enabled: true, CanSubscribeBot: true }, ConnectedPlayers: { Enabled: false, ErrorRate: 5, RandomDelayMs: 1e3, AvatarUrl: "https://picsum.photos/seed/%1/300/300", NumOfPlayers: 3 } }, AddShortcut: { Enabled: true }, Tournament: { Enabled: false, ErrorRates: 5, RandomDelayMs: 1e3, NumOfTournament: { Normal: 10, HostPage: 2 } } }, Profile: { Enabled: false, ErrorRate: 5, RandomDelayMs: 1e3, AvatarUrl: "https://picsum.photos/seed/%1/300/300" }, Leaderboards: { Enabled: false, MinScore: 10, MaxScore: 100, ErrorRate: 5, NumOfLeaders: 50, RandomDelayMs: 1e3 }, LoadingScreen: { Enabled: false } }, Debugger: { ShowConsole: false, ShowProfiler: false, EventLogging: false, CanvasRecorder: { Enabled: false, Options: { Type: "png", Quality: 0.85, RecordFps: 60, SyncFps: true } }, MonitorError: { Enabled: false, ApiKey: "", Service: "BugSnag", TrackUser: false, FilterErrors: { Codes: { Accepted: [], Ignored: ["USER_INPUT", "NETWORK_FAILURE"] }, Messages: { Accepted: [], Ignored: ["Load image failed"] } }, ListPlayerDevIds: [] } }, AdaptivePerformance: { Enabled: false, Quality: { Min: 1, Max: 2, AdjustStep: 0.1 }, Options: { FpsThreshold: 48, CheckInterval: 2e3, AutoUpgradeQuality: true, OnlyUpdateWhenSwitchScene: false }, TrackingSceneNames: ["GameScene"] }, FrameCapture: { Enabled: false, Options: { Quality: 0.85, RenderType: "jpeg", UseBlobIfPossible: true, FallbackWithWideframe: "Default" }, WideframeConfigs: { Default: { Width: 952, Height: 492, Wideframe: "./public/wideframes/default.png", RenderOptions: {} }, ShareScore: { Width: 1500, Height: 2e3, Wideframe: "./public/wideframes/share-score.png", RenderOptions: {} }, ShareLeaderboard: { Width: 1500, Height: 2e3, Wideframe: "./public/wideframes/share-leaderboard.png", RenderOptions: {} }, ResultChallenge: { Width: 952, Height: 492, Wideframe: "./public/wideframes/result-challenge.png", RenderOptions: {} } } } };
  }
});

// <define:__INIT_CONFIG__>
var init_define_INIT_CONFIG = __esm({
  "<define:__INIT_CONFIG__>"() {
  }
});

// libs/empty-script.js
var empty_script_exports = {};
__export(empty_script_exports, {
  default: () => empty_script_default
});
var empty_script_default;
var init_empty_script = __esm({
  "libs/empty-script.js"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    empty_script_default = {};
  }
});

// src/game-sdk/common/BaseAsyncPopup.ts
var html2, css2, _BaseAsyncPopup, BaseAsyncPopup, BaseAsyncPopup_default;
var init_BaseAsyncPopup = __esm({
  "src/game-sdk/common/BaseAsyncPopup.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    html2 = /*html*/
    `
<div id="async-popup">
    <div id="title"></div>
    <div id="content"></div>
    <div class="buttons">
        <button id="ok"></button>
        <button id="no"></button>
    </div>
</div>
`;
    css2 = /*css*/
    `
#async-popup {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    background: #202020;
    font-family: sans-serif;
    border-radius: 20px;
    align-items: center;
    padding: 20px
}

#async-popup #title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

#async-popup #content {
    display: flex;
    text-align: center;
    text-wrap: balance;
    font-size: large;
}

#async-popup .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

#async-popup .buttons button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
}
`;
    _BaseAsyncPopup = class _BaseAsyncPopup {
      constructor() {
        __publicField(this, "popup");
        __publicField(this, "title");
        __publicField(this, "content");
        __publicField(this, "okButton");
        __publicField(this, "noButton");
        __publicField(this, "onYes", /* @__PURE__ */ __name((callback) => {
          this.okButton.addEventListener("click", this.handleCallback(callback), { once: true });
        }, "onYes"));
        __publicField(this, "onNo", /* @__PURE__ */ __name((callback) => {
          this.noButton.addEventListener("click", this.handleCallback(callback), { once: true });
        }, "onNo"));
        __publicField(this, "handleCallback", /* @__PURE__ */ __name((callback) => (e) => {
          e.stopImmediatePropagation();
          this.hide();
          callback();
        }, "handleCallback"));
        this.createPopupElement();
        this.addPopupElementStyle();
        const observer = new MutationObserver(() => {
          const gameDiv = document.getElementById("GameDiv");
          if (!gameDiv)
            return;
          this.setupPopupElementSizeAndPosition();
        });
        const config = {
          attributes: true,
          childList: true,
          subtree: true
        };
        const target = document.body;
        observer.observe(target, config);
      }
      createPopupElement() {
        const popupElement = document.createElement("div");
        popupElement.id = this.constructor.name;
        popupElement.innerHTML = html2;
        popupElement.style.width = "100%";
        popupElement.style.height = "100%";
        popupElement.style.position = "absolute";
        popupElement.style.backgroundColor = "#0000001f";
        document.body.appendChild(popupElement);
        this.popup = popupElement;
        this.popup.style.display = "none";
        this.title = popupElement.querySelector("#title");
        this.content = popupElement.querySelector("#content");
        this.okButton = popupElement.querySelector("#ok");
        this.noButton = popupElement.querySelector("#no");
      }
      addPopupElementStyle() {
        const style = document.createElement("style");
        const head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(style);
        style.appendChild(document.createTextNode(css2));
      }
      setupPopupElementSizeAndPosition() {
        const element = document.getElementById(this.constructor.name);
        const popupElement = element?.querySelector("#async-popup");
        if (!popupElement)
          return;
        const gameDiv = document.getElementById("GameDiv");
        if (!gameDiv)
          return;
        const popWidth = 350;
        const popHeight = 250;
        const popup = popupElement;
        popup.style.width = `${popWidth}px`;
        popup.style.height = `${popHeight}px`;
        const { width: cWidth, height: cHeight } = document.body.getBoundingClientRect();
        popup.style.left = `${(cWidth - popWidth) / 2}px`;
        popup.style.top = `${(cHeight - popHeight) / 2}px`;
      }
      show(content) {
        this.content.textContent = `${content}`;
        this.popup.style.display = "flex";
      }
      hide() {
        this.popup.style.display = "none";
      }
    };
    __name(_BaseAsyncPopup, "BaseAsyncPopup");
    BaseAsyncPopup = _BaseAsyncPopup;
    BaseAsyncPopup_default = BaseAsyncPopup;
  }
});

// src/game-sdk/common/SubscribeBotAsyncPopup.ts
var SubscribeBotAsyncPopup_exports = {};
__export(SubscribeBotAsyncPopup_exports, {
  default: () => SubscribeBotAsyncPopup_default
});
var _SubscribeBotAsyncPopup, SubscribeBotAsyncPopup, SubscribeBotAsyncPopup_default;
var init_SubscribeBotAsyncPopup = __esm({
  "src/game-sdk/common/SubscribeBotAsyncPopup.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    init_BaseAsyncPopup();
    _SubscribeBotAsyncPopup = class _SubscribeBotAsyncPopup extends BaseAsyncPopup_default {
      show() {
        this.title.textContent = "Turn on message from this game";
        this.okButton.textContent = "Turn on";
        this.noButton.textContent = "Not now";
        super.show("This game wants to send messages, announcements and more");
      }
    };
    __name(_SubscribeBotAsyncPopup, "SubscribeBotAsyncPopup");
    SubscribeBotAsyncPopup = _SubscribeBotAsyncPopup;
    SubscribeBotAsyncPopup_default = SubscribeBotAsyncPopup;
  }
});

// src/game-sdk/common/MockSubscribeBot.ts
var MockSubscribeBot_exports = {};
__export(MockSubscribeBot_exports, {
  default: () => MockSubscribeBot_default
});
var LOCAL_STORE_KEY, _MockSubscribeBot, MockSubscribeBot, MockSubscribeBot_default;
var init_MockSubscribeBot = __esm({
  "src/game-sdk/common/MockSubscribeBot.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    LOCAL_STORE_KEY = "MockSubscribeBot";
    _MockSubscribeBot = class _MockSubscribeBot {
      constructor(adapter) {
        __publicField(this, "adapter");
        __publicField(this, "extra");
        __publicField(this, "popup", null);
        __publicField(this, "handleOnYes", /* @__PURE__ */ __name((resolve) => () => {
          this.extra.isPopupShown = false;
          resolve(true);
        }, "handleOnYes"));
        __publicField(this, "handleOnNo", /* @__PURE__ */ __name((reject) => () => {
          this.extra.isPopupShown = false;
          try {
            this.extra.exceptionUserInput("Player closed the subscribe bot dialog");
          } catch (error) {
            reject(error);
          }
        }, "handleOnNo"));
        this.adapter = adapter;
        this.extra = adapter.extra;
        this.writeLocalStorage({ called: false, checked: false });
      }
      /**
       * @note Return false if the user has already subscribed the bot or called in this session.
       */
      async canSubscribeBotAsync() {
        try {
          this.validateCanSubscribeBotCalled();
          this.validateSubscribeBotAccepted();
          this.writeLocalStorage({ checked: true });
          return true;
        } catch (error) {
          return false;
        }
      }
      /**
       * @note Player can only see the subscription dialog once per session.
       * @requires Developer can only call {@link subscribeBotAsync} after checking {@link canSubscribeBotAsync}.
       */
      async subscribeBotAsync() {
        this.extra.checkPopupShown();
        this.validateCanSubscribeBotCalled();
        this.validateSubscribeBotAccepted();
        this.validateSubscribeBotCalled();
        await this.loadSubscribePopup();
        await new Promise((resolve, reject) => {
          if (!this.popup) {
            this.extra.exceptionUnsupported();
          }
          this.writeLocalStorage({ called: true });
          this.popup.onYes(this.handleOnYes(resolve));
          this.popup.onNo(this.handleOnNo(reject));
          this.popup.show();
          this.extra.isPopupShown = true;
        });
        this.writeLocalStorage({ subscribed: true });
      }
      async loadSubscribePopup() {
        if (this.popup)
          return;
        const SubscribePopup = (await Promise.resolve().then(() => (init_SubscribeBotAsyncPopup(), SubscribeBotAsyncPopup_exports))).default;
        if (typeof SubscribePopup !== "function")
          return;
        this.popup = new SubscribePopup();
      }
      validateCanSubscribeBotCalled() {
        const data = GameCore.Utils.Browser.getLocalStorage(LOCAL_STORE_KEY);
        if (!GameCore.Utils.Object.hasOwn(data, "checked"))
          return;
        if (data.checked) {
          this.extra.exceptionInvalidOperation(
            "Cannot directly use subscribeBotAsync(). Please check canSubscribeBotAsync() before calling this API."
          );
        }
      }
      validateSubscribeBotCalled() {
        const data = GameCore.Utils.Browser.getLocalStorage(LOCAL_STORE_KEY);
        if (!GameCore.Utils.Object.hasOwn(data, "called"))
          return;
        if (data.called) {
          this.extra.exceptionInvalidOperation(
            "Player can only see the subscription dialog once per session."
          );
        }
      }
      validateSubscribeBotAccepted() {
        const data = GameCore.Utils.Browser.getLocalStorage(LOCAL_STORE_KEY);
        if (!GameCore.Utils.Object.hasOwn(data, "subscribed"))
          return;
        if (data.subscribed) {
          this.extra.exceptionInvalidOperation("Player has already subscribed the bot.");
        }
      }
      writeLocalStorage(data) {
        GameCore.Utils.Browser.writeLocalStorage(LOCAL_STORE_KEY, data);
      }
    };
    __name(_MockSubscribeBot, "MockSubscribeBot");
    MockSubscribeBot = _MockSubscribeBot;
    MockSubscribeBot_default = MockSubscribeBot;
  }
});

// src/game-sdk/common/CreateShortcutAsyncPopup.ts
var CreateShortcutAsyncPopup_exports = {};
__export(CreateShortcutAsyncPopup_exports, {
  default: () => CreateShortcutAsyncPopup_default
});
var _CreateShortcutAsyncPopup, CreateShortcutAsyncPopup, CreateShortcutAsyncPopup_default;
var init_CreateShortcutAsyncPopup = __esm({
  "src/game-sdk/common/CreateShortcutAsyncPopup.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    init_BaseAsyncPopup();
    _CreateShortcutAsyncPopup = class _CreateShortcutAsyncPopup extends BaseAsyncPopup_default {
      show() {
        this.title.textContent = "Add shortcut for this game";
        this.okButton.textContent = "Yes";
        this.noButton.textContent = "No";
        super.show(`This game wants to add a shortcut`);
      }
    };
    __name(_CreateShortcutAsyncPopup, "CreateShortcutAsyncPopup");
    CreateShortcutAsyncPopup = _CreateShortcutAsyncPopup;
    CreateShortcutAsyncPopup_default = CreateShortcutAsyncPopup;
  }
});

// src/game-sdk/common/MockAddShortcut.ts
var MockAddShortcut_exports = {};
__export(MockAddShortcut_exports, {
  default: () => MockAddShortcut_default
});
var LOCAL_STORE_KEY2, _MockAddShortcut, MockAddShortcut, MockAddShortcut_default;
var init_MockAddShortcut = __esm({
  "src/game-sdk/common/MockAddShortcut.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_INIT_CONFIG();
    LOCAL_STORE_KEY2 = "MockAddShortcut";
    _MockAddShortcut = class _MockAddShortcut {
      constructor(adapter) {
        __publicField(this, "adapter");
        __publicField(this, "extra");
        __publicField(this, "popup", null);
        __publicField(this, "handleOnYes", /* @__PURE__ */ __name((resolve) => () => {
          this.extra.isPopupShown = false;
          resolve(true);
        }, "handleOnYes"));
        __publicField(this, "handleOnNo", /* @__PURE__ */ __name((reject) => () => {
          this.extra.isPopupShown = false;
          try {
            this.extra.exceptionUserInput("The player dismissed the dialog");
          } catch (error) {
            reject(error);
          }
        }, "handleOnNo"));
        this.adapter = adapter;
        this.extra = adapter.extra;
        this.writeLocalStorage({ called: false });
      }
      /**
       * @note Return false if the user has already created a shortcut.
       */
      async canCreateShortcutAsync() {
        let canCreate = true;
        const data = GameCore.Utils.Browser.getLocalStorage(LOCAL_STORE_KEY2);
        if (GameCore.Utils.Object.hasOwn(data, "success")) {
          canCreate = !data.success;
        }
        return canCreate;
      }
      /**
       * @see 19-12-2023 Always allow to create shortcut in FBInstant
       */
      async createShortcutAsync() {
        this.extra.checkPopupShown();
        await this.loadPopupAsync();
        await new Promise((resolve, reject) => {
          if (!this.popup) {
            this.extra.exceptionUnsupported();
          }
          this.writeLocalStorage({ called: true });
          this.popup.onYes(this.handleOnYes(resolve));
          this.popup.onNo(this.handleOnNo(reject));
          this.popup.show();
          this.extra.isPopupShown = true;
        });
        this.writeLocalStorage({ success: true });
      }
      async loadPopupAsync() {
        if (this.popup)
          return;
        const CreateShortcutAsyncPopup2 = (await Promise.resolve().then(() => (init_CreateShortcutAsyncPopup(), CreateShortcutAsyncPopup_exports))).default;
        if (typeof CreateShortcutAsyncPopup2 !== "function")
          return;
        this.popup = new CreateShortcutAsyncPopup2();
      }
      writeLocalStorage(data) {
        GameCore.Utils.Browser.writeLocalStorage(LOCAL_STORE_KEY2, data);
      }
    };
    __name(_MockAddShortcut, "MockAddShortcut");
    MockAddShortcut = _MockAddShortcut;
    MockAddShortcut_default = MockAddShortcut;
  }
});

// src/json/names-surnames.json
var require_names_surnames = __commonJS({
  "src/json/names-surnames.json"(exports, module) {
    module.exports = { data: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy", "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"] };
  }
});

// src/game-sdk/index.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
init_empty_script();
init_empty_script();
init_empty_script();
init_empty_script();
init_empty_script();

// src/utils/function/security.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var usedCallLocations = [];
var blockAccess = /* @__PURE__ */ __name((source) => {
  try {
    const error = new Error();
    if (error.stack == null) {
      throw new Error();
    }
    const stackLines = error.stack.split("\n");
    const stackLineCount = stackLines.length;
    const callerLine = stackLineCount >= 4 ? stackLines[3] : stackLines[0];
    if (!callerLine)
      return source;
    if (usedCallLocations.includes(callerLine)) {
      return source;
    }
    console.warn("Access:", callerLine);
    if (["eval", "at <", "(<"].some((keyword) => callerLine.includes(keyword))) {
      throw new Error();
    }
    usedCallLocations.push(callerLine);
    return source;
  } catch (error) {
    console.warn("Block access:", error);
    return void 0;
  }
}, "blockAccess");
var wrapGetterToBlockObjectAccess = /* @__PURE__ */ __name((source, key) => {
  if (true)
    return;
  if (false)
    return;
  const originalValue = Object.getOwnPropertyDescriptor(source, key)?.value;
  if (!originalValue)
    return;
  Object.defineProperty(source, key, {
    enumerable: false,
    get() {
      return blockAccess(originalValue);
    },
    set() {
      return;
    }
  });
}, "wrapGetterToBlockObjectAccess");
var security_default = wrapGetterToBlockObjectAccess;

// src/game-sdk/adapters/msgames/MsGamesAdapter.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/sdk/GameSDK.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/sdk/Context.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _Context = class _Context {
  constructor(adapter) {
    __publicField(this, "adapter");
    __publicField(this, "extra");
    __publicField(this, "currentContextID", null);
    __publicField(this, "currentContextType", "SOLO");
    __publicField(this, "currentContextPlayers", []);
    __publicField(this, "chooseAsyncPopup", null);
    __publicField(this, "createAsyncPopup", null);
    __publicField(this, "switchAsyncPopup", null);
    __publicField(this, "contextIdsByCreate");
    __publicField(this, "contextIdsByChoose", []);
    __publicField(this, "playerIdsInContexts");
    __publicField(this, "handleOnYes", /* @__PURE__ */ __name((resolve) => () => {
      this.extra.isPopupShown = false;
      resolve(true);
    }, "handleOnYes"));
    __publicField(this, "handleOnNo", /* @__PURE__ */ __name((reject) => () => {
      this.extra.isPopupShown = false;
      try {
        this.extra.exceptionUserInput("Player closed the context menu");
      } catch (error) {
        reject(error);
      }
    }, "handleOnNo"));
    this.adapter = adapter;
    this.extra = adapter.extra;
  }
  setCurrentContextId(contextId) {
    this.checkSameContext(contextId);
    this.currentContextID = contextId;
    this.currentContextType = "THREAD";
  }
  initContextInfo(contextId, contextType) {
    this.contextIdsByCreate = {};
    this.playerIdsInContexts = {};
    this.contextIdsByChoose = Array.from(
      { length: 10 },
      () => GameCore.Utils.Number.random(10).toString()
    );
    if (!contextId || !contextType)
      return;
    if (!["SOLO", "THREAD", "POST", "GROUP"].includes(contextType)) {
      console.warn(`Invalid context type: ${contextType}`);
      return;
    }
    this.currentContextID = contextId;
    this.currentContextType = contextType;
  }
  getID() {
    return this.currentContextID;
  }
  getType() {
    return this.currentContextType;
  }
  async loadSwitchAsyncPopup() {
    if (this.switchAsyncPopup)
      return;
    const SwitchAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof SwitchAsyncPopup !== "function")
      return;
    this.switchAsyncPopup = new SwitchAsyncPopup();
  }
  async loadChooseAsyncPopup() {
    if (this.chooseAsyncPopup)
      return;
    const ChooseAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof ChooseAsyncPopup !== "function")
      return;
    this.chooseAsyncPopup = new ChooseAsyncPopup();
  }
  async loadCreateAsyncPopup() {
    if (this.createAsyncPopup)
      return;
    const CreateAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof CreateAsyncPopup !== "function")
      return;
    this.createAsyncPopup = new CreateAsyncPopup();
  }
  async switchAsync(contextId, switchSilentlyIfSolo = false) {
    this.extra.checkPopupShown();
    await this.extra.awaitRandomDelay();
    this.validateSwitchAsyncContextId(contextId);
    if (contextId === "SOLO" && switchSilentlyIfSolo) {
      this.currentContextID = null;
      this.currentContextType = "SOLO";
      this.updatePlayers([]);
      return;
    }
    await this.loadSwitchAsyncPopup();
    await new Promise((resolve, reject) => {
      if (!this.switchAsyncPopup) {
        this.adapter.extra.exceptionUnsupported();
      }
      this.switchAsyncPopup.onYes(this.handleOnYes(resolve));
      this.switchAsyncPopup.onNo(this.handleOnNo(reject));
      this.switchAsyncPopup.show(contextId);
      this.extra.isPopupShown = true;
    });
    this.currentContextID = contextId;
    this.currentContextType = "THREAD";
    this.createPlayerIdsInContext(contextId, 10);
    const playerIds = this.playerIdsInContexts[contextId];
    const players = playerIds.map((playerId) => this.createPlayerInfo(playerId));
    this.updatePlayers(players);
  }
  async chooseAsync(_options) {
    this.extra.checkPopupShown();
    await this.extra.awaitRandomDelay();
    await this.loadChooseAsyncPopup();
    await new Promise((resolve, reject) => {
      if (!this.chooseAsyncPopup) {
        this.adapter.extra.exceptionUnsupported();
      }
      this.chooseAsyncPopup.onYes(this.handleOnYes(resolve));
      this.chooseAsyncPopup.onNo(this.handleOnNo(reject));
      this.chooseAsyncPopup.show();
      this.extra.isPopupShown = true;
    });
    const rand = Math.floor(Math.random() * this.contextIdsByChoose.length);
    const contextId = this.contextIdsByChoose[rand];
    this.checkSameContext(contextId);
    this.currentContextID = contextId;
    this.currentContextType = "THREAD";
    this.createPlayerIdsInContext(contextId, 2);
    const playerIds = this.playerIdsInContexts[contextId];
    const players = playerIds.map((playerId) => this.createPlayerInfo(playerId));
    this.updatePlayers(players);
  }
  async createAsync(playerId) {
    this.extra.checkPopupShown();
    await this.extra.awaitRandomDelay();
    await this.validateCreateAsyncPlayerId(playerId);
    await this.loadCreateAsyncPopup();
    await new Promise((resolve, reject) => {
      if (!this.createAsyncPopup) {
        this.adapter.extra.exceptionUnsupported();
      }
      this.createAsyncPopup.onYes(this.handleOnYes(resolve));
      this.createAsyncPopup.onNo(this.handleOnNo(reject));
      this.createAsyncPopup.show(playerId);
      this.extra.isPopupShown = true;
    });
    if (!this.contextIdsByCreate[playerId]) {
      this.contextIdsByCreate[playerId] = GameCore.Utils.Number.random(10).toString();
    }
    const contextId = this.contextIdsByCreate[playerId];
    this.checkSameContext(contextId);
    this.currentContextID = contextId;
    this.currentContextType = "THREAD";
    const player = this.createPlayerInfo(playerId);
    this.updatePlayers([player]);
  }
  async getPlayersAsync() {
    await this.extra.awaitRandomDelay();
    return this.currentContextPlayers;
  }
  createPlayerIdsInContext(contextId, maxPlayers) {
    if (!this.playerIdsInContexts[contextId]) {
      const rand = Math.floor(Math.random() * maxPlayers);
      const playerIds = Array.from(
        { length: rand },
        () => GameCore.Utils.Number.random(10).toString()
      );
      this.playerIdsInContexts[contextId] = playerIds;
    }
    return this.playerIdsInContexts[contextId];
  }
  createPlayerInfo(playerId) {
    return {
      getID: () => playerId,
      getName: () => `Player ${playerId}`,
      getPhoto: () => ""
    };
  }
  updatePlayers(players) {
    if (this.currentContextType === "SOLO") {
      this.currentContextPlayers = [];
      return;
    }
    this.currentContextPlayers = players;
  }
  checkSameContext(contextId) {
    if (this.currentContextID === contextId) {
      this.extra.exceptionSameContext();
    }
  }
  async validateCreateAsyncPlayerId(playerId) {
    if (!playerId || Array.isArray(playerId)) {
      const message2 = "Client does not support no player IDS or multiple player IDs yet" /* NOT_NO_OR_MULTIPLE_IDS */;
      this.extra.exceptionClientUnsupportedOperation(message2);
    }
    if (!GameCore.Utils.Valid.isString(playerId)) {
      const message2 = `Array of type String contained a value of another type: ${playerId}`;
      this.extra.exceptionInvalidParam(message2);
    }
    if (playerId === GameSDK.player.getID()) {
      const message2 = "'At least one player id besides the current player must be provided.'" /* ONE_BESIDES_CURRENT_PLAYER_ID */;
      this.extra.exceptionInvalidParam(message2);
    }
    const connectedPlayers = await GameSDK.player.getConnectedPlayersAsync();
    const providedIdInConnectedPlayers = connectedPlayers.some(
      (connectedPlayer) => connectedPlayer.getID() === playerId
    );
    if (providedIdInConnectedPlayers)
      return;
    const message = `Provided ID ${playerId} is not a connected player of the current player.`;
    this.extra.exceptionInvalidParam(message);
  }
  validateSwitchAsyncContextId(contextId) {
    this.checkSameContext(contextId);
    if (GameCore.Utils.Valid.isString(contextId))
      return;
    const message = "Client requires update to support this operation" /* REQUIRE_UPDATE */;
    this.extra.exceptionClientUnsupportedOperation(message);
  }
};
__name(_Context, "Context");
var Context = _Context;
var Context_default = Context;

// src/game-sdk/sdk/Extra.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/common/LoadingScreenElement.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var html = (
  /*html*/
  `
<div id="lds-dual-ring"></div>
<div id="lds-text">
    <span id="lds-percent">0</span>%
</div>
`
);
var css = (
  /*css*/
  `
#lds-dual-ring {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #515151 transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    -webkit-animation: lds-dual-ring 1.2s linear infinite;
}

#lds-text {
    color: #fff;
    font-family: monospace;
    display: flex;
    font-size: 1.2rem;
    position: absolute;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-shadow: 0 0.5px 1px #999;
}

#lds-content {
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #515151;
    pointer-events: none;
    transition: background-color 0.5s ease-in-out;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`
);
var loadingId = "lds-content";
var _LoadingScreenElement = class _LoadingScreenElement {
  constructor() {
    __publicField(this, "percentage", 0);
    document.addEventListener("DOMContentLoaded", () => {
      this.createLoadingElement();
      this.addLoadingElementStyle();
      const observer = new MutationObserver(() => {
        const gameDiv = document.getElementById("GameDiv");
        if (!gameDiv)
          return;
        this.setupLoadingElementSizeAndPosition();
      });
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      const target = document.body;
      observer.observe(target, config);
    });
  }
  createLoadingElement() {
    const loadingElement = document.createElement("div");
    loadingElement.id = loadingId;
    loadingElement.innerHTML = html;
    document.body.appendChild(loadingElement);
    return loadingElement;
  }
  addLoadingElementStyle() {
    const style = document.createElement("style");
    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }
  setupLoadingElementSizeAndPosition() {
    const loadingElement = document.getElementById(loadingId);
    if (!loadingElement)
      return;
    const gameDiv = document.getElementById("GameDiv");
    if (!gameDiv)
      return;
    const { width, height } = gameDiv.getBoundingClientRect();
    loadingElement.style.width = `${width}px`;
    loadingElement.style.height = `${height}px`;
    const { width: cWidth, height: cHeight } = document.body.getBoundingClientRect();
    loadingElement.style.left = `${(cWidth - width) / 2}px`;
    loadingElement.style.top = `${(cHeight - height) / 2}px`;
  }
  setLoadingProgress(percentage) {
    if (percentage === this.percentage)
      return;
    if (this.percentage > percentage)
      return;
    this.percentage = percentage;
    const loadingPercent = document.getElementById("lds-percent");
    if (!loadingPercent)
      return;
    loadingPercent.innerHTML = `${percentage}`;
    const loadingElement = document.getElementById(loadingId);
    if (!loadingElement)
      return;
    const opacity = 1 - percentage / 100;
    loadingElement.style.backgroundColor = `rgba(81, 81, 81, ${opacity})`;
  }
  removeLoadingElement() {
    const loadingElement = document.getElementById(loadingId);
    if (!loadingElement)
      return;
    loadingElement.style.backgroundColor = `rgba(81, 81, 81, 0)`;
    setTimeout(() => {
      loadingElement.remove();
    }, 300);
  }
};
__name(_LoadingScreenElement, "LoadingScreenElement");
var LoadingScreenElement = _LoadingScreenElement;
var LoadingScreenElement_default = LoadingScreenElement;

// src/game-sdk/exceptions/SDKCommonError.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _SDKCommonError = class _SDKCommonError extends Error {
  constructor(code, message) {
    super(message);
    __publicField(this, "code");
    this.code = code;
  }
};
__name(_SDKCommonError, "SDKCommonError");
var SDKCommonError = _SDKCommonError;
var SDKCommonError_default = SDKCommonError;

// src/game-sdk/sdk/Extra.ts
var _Extra = class _Extra {
  constructor(adapter) {
    __publicField(this, "adapter");
    __publicField(this, "isPopupShown", false);
    __publicField(this, "maxWaitGameCoreReadyTime", 1e4);
    __publicField(this, "loadingElement", null);
    this.adapter = adapter;
  }
  async subscribeBotAsync() {
    const canSubscribeBot = await this.adapter.player.canSubscribeBotAsync();
    if (!canSubscribeBot)
      return false;
    const { analytics } = window.game;
    const { BOT_SUBSCRIBE, BOT_SUBSCRIBE_POPUP } = GameCore.Plugins.Analytics.Events;
    analytics.event(BOT_SUBSCRIBE_POPUP);
    try {
      await this.waitSDKInitiatedAsync();
      await this.adapter.player.subscribeBotAsync();
      analytics.event(BOT_SUBSCRIBE, { success: true });
      return true;
    } catch (error) {
      analytics.event(BOT_SUBSCRIBE, { success: false });
      return false;
    }
  }
  async createShortcutAsync() {
    const canCreateShortcut = await this.adapter.canCreateShortcutAsync();
    if (!canCreateShortcut)
      return;
    const { analytics } = window.game;
    const { SHORTCUT_CREATE, SHORTCUT_CREATE_POPUP } = GameCore.Plugins.Analytics.Events;
    analytics.event(SHORTCUT_CREATE_POPUP);
    try {
      await this.waitSDKInitiatedAsync();
      await this.adapter.createShortcutAsync();
      analytics.event(SHORTCUT_CREATE, { success: true });
    } catch (error) {
      analytics.event(SHORTCUT_CREATE, { success: false });
    }
  }
  waitSDKInitiatedAsync() {
    return GameCore.Utils.Valid.isValueChangeAsync(window.__sdkInitiated, true);
  }
  async waitGameCoreReadyAsync() {
    let waitTime = 0;
    return new Promise((resolve) => {
      const waitInterval = setInterval(() => {
        if ("GameCore" in window) {
          clearInterval(waitInterval);
          resolve();
          return;
        }
        waitTime += 100;
        if (waitTime > this.maxWaitGameCoreReadyTime) {
          waitTime = 0;
          console.warn("GameCore is slow to load, please check your network connection.");
        }
      }, 100);
    });
  }
  createLoadingElement() {
    if (this.loadingElement)
      return;
    this.loadingElement = new LoadingScreenElement_default();
  }
  setLoadingElementProgress(progress) {
    if (!this.loadingElement)
      return;
    this.loadingElement.setLoadingProgress(progress);
  }
  destroyLoadingElement() {
    if (!this.loadingElement)
      return;
    this.loadingElement.removeLoadingElement();
  }
  checkPopupShown() {
    if (!this.isPopupShown)
      return;
    this.exceptionPendingRequest("Please wait for the popup to close");
  }
  awaitRandomDelay(randomDelayMs = 1e3) {
    return GameCore.Utils.Time.sleepAsync(Math.random() * randomDelayMs);
  }
  randomException(exceptions) {
    const rand = Math.floor(Math.random() * exceptions.length);
    const exception = exceptions[rand];
    console.warn("Random exception", exception);
    this[`exception${exception}`]();
  }
  // ? Why is this method here?
  // * Make reduce code size and make it easier to read
  throwNewCommonError(code, message) {
    throw new SDKCommonError_default(code, message);
  }
  exceptionUserInput(message) {
    this.throwNewCommonError("USER_INPUT" /* USER_INPUT */, message);
  }
  exceptionUnsupported() {
    this.throwNewCommonError("UNSUPPORTED" /* UNSUPPORTED */, "Unsupported method");
  }
  exceptionInvalidParam(message) {
    this.throwNewCommonError("INVALID_PARAM" /* INVALID_PARAM */, message);
  }
  exceptionPendingRequest(message) {
    this.throwNewCommonError("PENDING_REQUEST" /* PENDING_REQUEST */, message);
  }
  exceptionMethodNotImplemented() {
    this.throwNewCommonError("METHOD_NOT_IMPLEMENTED" /* METHOD_NOT_IMPLEMENTED */, "Method not implemented");
  }
  exceptionTournamentNotFound(message) {
    this.throwNewCommonError("TOURNAMENT_NOT_FOUND" /* TOURNAMENT_NOT_FOUND */, message);
  }
  exceptionSameContext() {
    this.throwNewCommonError(
      "SAME_CONTEXT" /* SAME_CONTEXT */,
      "Must specify a context other than the current one."
    );
  }
  exceptionInvalidOperation(message) {
    this.throwNewCommonError("INVALID_OPERATION" /* INVALID_OPERATION */, message);
  }
  exceptionNetworkFailure(message = "Request failed to be processed") {
    this.throwNewCommonError("NETWORK_FAILURE" /* NETWORK_FAILURE */, message);
  }
  exceptionUnknown(message) {
    this.throwNewCommonError("UNKNOWN" /* UNKNOWN */, message);
  }
  exceptionClientUnsupportedOperation(message) {
    this.throwNewCommonError("CLIENT_UNSUPPORTED_OPERATION" /* CLIENT_UNSUPPORTED_OPERATION */, message);
  }
  exceptionRateLimited(message) {
    this.throwNewCommonError("RATE_LIMITED" /* RATE_LIMITED */, message);
  }
};
__name(_Extra, "Extra");
var Extra = _Extra;
var Extra_default = Extra;

// src/game-sdk/sdk/Player.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var GameName = "Game Core".replace(/ /g, "-");
var _Player = class _Player {
  constructor(adapter) {
    __publicField(this, "adapter");
    __publicField(this, "extra");
    __publicField(this, "defaultPlayerInfo");
    __publicField(this, "currentPlayerInfo");
    __publicField(this, "infoKey", GameName + "_PlayerInfo");
    __publicField(this, "dataKey", GameName + "_PlayerData");
    __publicField(this, "subscribeBot", null);
    __publicField(this, "connectedPlayers", null);
    __publicField(this, "getSignature", /* @__PURE__ */ __name(() => {
      const token = this.getSignatureFormMockup();
      if (GameCore.Utils.Valid.isString(token))
        return token;
      return "default_token";
    }, "getSignature"));
    this.adapter = adapter;
    this.extra = adapter.extra;
    this.initDefaultPlayerInfo();
  }
  initDefaultPlayerInfo() {
    const playerId = "guest-007";
    this.defaultPlayerInfo = {
      playerId,
      playerName: "Guest",
      playerPhoto: `https://picsum.photos/seed/${playerId}/300/300`
    };
    this.currentPlayerInfo = { ...this.defaultPlayerInfo };
  }
  initPlayerInfo(playerId) {
    this.updateCurrentPlayerInfo(playerId);
    GameCore.Utils.Browser.writeLocalStorage(this.infoKey, this.currentPlayerInfo);
  }
  async canSubscribeBotAsync() {
    await this.loadMockSubscribeBot();
    if (!this.subscribeBot) {
      this.extra.exceptionUnsupported();
    }
    return this.subscribeBot.canSubscribeBotAsync();
  }
  async subscribeBotAsync() {
    await this.loadMockSubscribeBot();
    if (!this.subscribeBot) {
      this.extra.exceptionUnsupported();
    }
    return this.subscribeBot.subscribeBotAsync();
  }
  getID() {
    const { Browser, Valid, Object: O } = GameCore.Utils;
    const data = Browser.getLocalStorage(this.infoKey);
    const { playerId } = this.currentPlayerInfo;
    if (!Valid.isObject(data))
      return playerId;
    if (O.hasOwn(data, "playerId") && Valid.isString(data.playerId)) {
      return data.playerId;
    }
    return playerId;
  }
  getName() {
    const { Browser, Valid, Object: O } = GameCore.Utils;
    const data = Browser.getLocalStorage(this.infoKey);
    const { playerName } = this.currentPlayerInfo;
    if (!Valid.isObject(data))
      return playerName;
    if (O.hasOwn(data, "name") && Valid.isString(data.name)) {
      return data.name;
    }
    return playerName;
  }
  getPhoto() {
    const { Browser, Valid, Object: O } = GameCore.Utils;
    const data = Browser.getLocalStorage(this.infoKey);
    const { playerPhoto } = this.currentPlayerInfo;
    if (!Valid.isObject(data))
      return playerPhoto;
    if (O.hasOwn(data, "photo") && Valid.isString(data.photo)) {
      return data.photo;
    }
    return playerPhoto;
  }
  async getDataAsync(keys) {
    const { Browser, Valid, Object: O } = GameCore.Utils;
    const data = Browser.getLocalStorage(this.dataKey);
    if (!Valid.isObject(data))
      return {};
    if (keys.length === 0)
      return data;
    const dataObject = {};
    keys.forEach((key) => {
      if (O.hasOwn(data, key)) {
        dataObject[key] = data[key];
      }
    });
    return dataObject;
  }
  async setDataAsync(data) {
    GameCore.Utils.Browser.writeLocalStorage(this.dataKey, data);
  }
  async getSignedPlayerInfoAsync() {
    return {
      getPlayerID: () => {
        return this.getID() ?? "";
      },
      getSignature: this.getSignature
    };
  }
  async getConnectedPlayersAsync() {
    await this.loadMockConnectedPlayers();
    if (!this.connectedPlayers) {
      this.extra.exceptionUnsupported();
    }
    return this.connectedPlayers.getConnectedPlayersAsync();
  }
  updateCurrentPlayerInfo(playerId) {
    if (!playerId)
      return;
    const { Match } = GameCore.Configs.Mockup;
    const isPlayer = Match.PlayerInfo.Id === playerId;
    const isOpponent = Match.OpponentInfo.Id === playerId;
    if (isPlayer) {
      this.currentPlayerInfo.playerId = Match.PlayerInfo.Id;
      if (Match.PlayerInfo.Name) {
        this.currentPlayerInfo.playerName = Match.PlayerInfo.Name;
      }
      if (Match.PlayerInfo.Photo) {
        this.currentPlayerInfo.playerPhoto = Match.PlayerInfo.Photo;
      }
    }
    if (isOpponent) {
      this.currentPlayerInfo.playerId = Match.OpponentInfo.Id;
      if (Match.OpponentInfo.Name) {
        this.currentPlayerInfo.playerName = Match.OpponentInfo.Name;
      }
      if (Match.OpponentInfo.Photo) {
        this.currentPlayerInfo.playerPhoto = Match.OpponentInfo.Photo;
      }
    }
  }
  getSignatureFormMockup() {
    const { Match } = GameCore.Configs.Mockup;
    const isPlayer = Match.PlayerInfo.Id === this.getID();
    const isOpponent = Match.OpponentInfo.Id === this.getID();
    if (isPlayer)
      return Match.PlayerInfo.Signature;
    if (isOpponent)
      return Match.OpponentInfo.Signature;
    return null;
  }
  async loadMockSubscribeBot() {
    if (this.subscribeBot)
      return;
    const MockSubscribeBot2 = (await Promise.resolve().then(() => (init_MockSubscribeBot(), MockSubscribeBot_exports))).default;
    if (typeof MockSubscribeBot2 !== "function")
      return;
    this.subscribeBot = new MockSubscribeBot2(this.adapter);
  }
  async loadMockConnectedPlayers() {
    if (this.connectedPlayers)
      return;
    const MockConnectedPlayers = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof MockConnectedPlayers !== "function")
      return;
    this.connectedPlayers = new MockConnectedPlayers(this.extra);
  }
};
__name(_Player, "Player");
var Player = _Player;
var Player_default = Player;

// src/game-sdk/sdk/Tournament.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/sdk/TournamentInstance.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _TournamentInstance = class _TournamentInstance {
  constructor(id, payload, isPageHosted = false) {
    __publicField(this, "id");
    __publicField(this, "title");
    __publicField(this, "contextId");
    __publicField(this, "payload");
    __publicField(this, "endTime");
    __publicField(this, "tournamentType");
    const { config, data } = payload;
    this.id = id;
    this.title = config.title;
    this.contextId = `0123${this.id}`;
    this.payload = JSON.stringify(data ?? {});
    this.endTime = config.endTime ?? this.defaultEndTime();
    this.tournamentType = isPageHosted ? "PAGE_HOSTED" : "DEFAULT";
  }
  defaultEndTime() {
    return Math.round((Date.now() + 1e3 * 60 * 60 * 24 * 7) / 1e3);
  }
  getID() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getPayload() {
    return this.payload;
  }
  getEndTime() {
    return this.endTime;
  }
  getContextID() {
    return this.contextId;
  }
  getTournamentType() {
    return this.tournamentType;
  }
  // ! Use for process data in mock
  toObject() {
    return {
      id: this.id,
      title: this.title,
      payload: this.payload,
      endTime: this.endTime,
      contextId: this.contextId,
      tournamentType: this.tournamentType
    };
  }
};
__name(_TournamentInstance, "TournamentInstance");
var TournamentInstance = _TournamentInstance;
var TournamentInstance_default = TournamentInstance;

// src/game-sdk/sdk/Tournament.ts
var CommonErrorList = [
  "Unsupported",
  "NetworkFailure",
  "PendingRequest",
  "ClientUnsupportedOperation"
];
var CreateErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
var JoinErrorList = [...CommonErrorList, "InvalidOperation", "UserInput"];
var ShareErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
var PostScoreErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
var GetTournamentsErrorList = [...CommonErrorList, "NetworkFailure"];
var TOURNAMENTS_DATA_MOCK_KEY = "TournamentsDataMockKey";
var TOURNAMENT_LEADERS_MOCK_KEY = "TournamentLeadersMockKey";
var _Tournament = class _Tournament {
  constructor(adapter) {
    __publicField(this, "adapter");
    __publicField(this, "extra");
    __publicField(this, "context");
    __publicField(this, "shareAsyncPopup", null);
    __publicField(this, "createAsyncPopup", null);
    __publicField(this, "processEnterTournament", /* @__PURE__ */ __name(async (tournamentId) => {
      const tournamentData = this.getTournamentData(tournamentId);
      if (!tournamentData)
        return;
      await this.joinAsync(tournamentId);
    }, "processEnterTournament"));
    __publicField(this, "handleOnYes", /* @__PURE__ */ __name((resolve) => () => {
      this.extra.isPopupShown = false;
      resolve(true);
    }, "handleOnYes"));
    __publicField(this, "handleOnNo", /* @__PURE__ */ __name((reject) => () => {
      this.extra.isPopupShown = false;
      try {
        this.extra.exceptionUserInput("Player closed the context menu");
      } catch (error) {
        reject(error);
      }
    }, "handleOnNo"));
    this.adapter = adapter;
    this.extra = adapter.extra;
    this.context = adapter.context;
  }
  async initTournamentInfoAsync(tournamentId) {
    const { Tournament: Tournament2 } = GameCore.Configs.Mockup.GameSDK;
    if (!Tournament2.Enabled)
      return;
    await this.createMockTournamentsData();
    if (tournamentId) {
      await this.processEnterTournament(tournamentId);
    }
  }
  /**
   * @deprecated Only for testing
   */
  async createMockTournamentsData() {
    const { Tournament: Tournament2 } = GameCore.Configs.Mockup.GameSDK;
    const { Normal: NumOfNormal, HostPage: NumOfHostPaged } = Tournament2.NumOfTournament;
    if (!Tournament2.Enabled)
      return;
    const tournamentsData = this.getTournamentsData();
    const allTournaments = Object.values(tournamentsData);
    const tournaments = this.filterExpiredTournaments(allTournaments);
    const currentDefaultTournaments = tournaments.filter(
      (tournament) => tournament.tournamentType === "DEFAULT"
    );
    const currentHostPageTournaments = tournaments.filter(
      (tournament) => tournament.tournamentType === "PAGE_HOSTED"
    );
    const { length: defaultTournamentsLength } = currentDefaultTournaments;
    const { length: hostPageTournamentsLength } = currentHostPageTournaments;
    const remainingDefaultTournaments = NumOfNormal - defaultTournamentsLength;
    const remainingHostPageTournaments = NumOfHostPaged - hostPageTournamentsLength;
    const defaultTournaments = this.createDefaultTournaments(remainingDefaultTournaments);
    const hostPageTournaments = this.createGlobalTournaments(remainingHostPageTournaments);
    await Promise.all([...defaultTournaments, ...hostPageTournaments]);
  }
  filterExpiredTournaments(tournaments) {
    const now = Date.now() / 1e3;
    const validTournaments = tournaments.filter((tournament) => tournament.endTime > now);
    const newTournamentData = {};
    validTournaments.forEach((tournament) => {
      newTournamentData[tournament.id] = tournament;
    });
    this.writeTournamentsData(newTournamentData);
    return validTournaments;
  }
  createDefaultTournaments(length2) {
    const { String: S } = GameCore.Utils;
    const { leaderboard } = window.game;
    const playerId = GameSDK.player.getID();
    const playerName = GameSDK.player.getName();
    return Array.from({ length: length2 }, async () => {
      const title = `${playerName}'s Tournament ${S.generateObjectId()}`;
      const { ExtraPlayerTournamentPayload = {} } = GameCore.Configs.Mockup.GameSDK.Tournament;
      const leaderboardId = await leaderboard.createLeaderboardAsync({
        name: title
      });
      const tournament = this.createMockTournamentAsync({
        initialScore: 0,
        config: {
          title,
          tournamentTitle: title
        },
        data: {
          playerId,
          leaderboardId,
          ...ExtraPlayerTournamentPayload
        }
      });
      const tournamentId = tournament.getID().toString();
      if (this.getTournamentLeadersData(tournamentId))
        return;
      const playerLimit = GameCore.Utils.Number.random(2);
      const connectedPlayerIds = window.game.player.getConnectedPlayerIds(playerLimit, 0);
      const leaders = connectedPlayerIds.map((playerId2) => {
        return {
          playerId: playerId2,
          score: GameCore.Utils.Number.random(4)
        };
      });
      leaders.sort((a, b) => a.score - b.score);
      this.writeTournamentLeadersData(tournamentId, leaders);
    });
  }
  createGlobalTournaments(length2) {
    const { String: S } = GameCore.Utils;
    const { leaderboard } = window.game;
    const { ExtraGlobalTournamentPayload = {} } = GameCore.Configs.Mockup.GameSDK.Tournament;
    const playerId = GameSDK.player.getID();
    return Array.from({ length: length2 }, async () => {
      const id = S.generateObjectId();
      const payload = {
        playerId,
        leaderboardId: id,
        ...ExtraGlobalTournamentPayload
      };
      const title = `Global Tournament ${id}`;
      await leaderboard.createLeaderboardAsync({
        name: title,
        _id: id,
        type: "world_tournament_leaderboard",
        description: JSON.stringify(payload)
      });
      const tournament = this.createMockTournamentAsync(
        {
          initialScore: 0,
          config: {
            title,
            tournamentTitle: title
          },
          data: payload
        },
        true
      );
      const tournamentId = tournament.getID().toString();
      if (this.getTournamentLeadersData(tournamentId))
        return;
      const leaderLength = GameCore.Utils.Number.random(2);
      const leaders = Array.from({ length: leaderLength }, () => {
        return {
          playerId: S.generateObjectId(),
          score: GameCore.Utils.Number.random(4)
        };
      });
      leaders.sort((a, b) => a.score - b.score);
      this.writeTournamentLeadersData(tournamentId, leaders);
    });
  }
  async awaitRandomDelay() {
    const { Mockup } = GameCore.Configs;
    const { RandomDelayMs } = Mockup.GameSDK.Tournament;
    return this.extra.awaitRandomDelay(RandomDelayMs);
  }
  randomError(errors) {
    const { Mockup } = GameCore.Configs;
    const { ErrorRates } = Mockup.GameSDK.Tournament;
    const isError = Math.random() * 100 < ErrorRates;
    if (!isError)
      return;
    this.extra.randomException(errors);
  }
  async loadCreateTournamentPopupAsync() {
    if (this.createAsyncPopup)
      return;
    const CreateAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof CreateAsyncPopup !== "function")
      return;
    this.createAsyncPopup = new CreateAsyncPopup();
  }
  async loadSharePopupAsync() {
    if (this.shareAsyncPopup)
      return;
    const ShareAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
    if (typeof ShareAsyncPopup !== "function")
      return;
    this.shareAsyncPopup = new ShareAsyncPopup();
  }
  async createAsync(payload) {
    this.extra.checkPopupShown();
    await this.awaitRandomDelay();
    if (this.context.getID() !== null) {
      this.extra.exceptionInvalidOperation("Cannot create tournament while in a context");
    }
    this.validateCreatePayload(payload);
    this.randomError(CreateErrorList);
    await this.loadCreateTournamentPopupAsync();
    await new Promise((resolve, reject) => {
      if (!this.createAsyncPopup) {
        this.adapter.extra.exceptionUnsupported();
      }
      this.createAsyncPopup.onYes(this.handleOnYes(resolve));
      this.createAsyncPopup.onNo(this.handleOnNo(reject));
      this.createAsyncPopup.show(payload);
      this.extra.isPopupShown = true;
    });
    const tournament = this.createMockTournamentAsync(payload);
    const contextId = tournament.getContextID();
    this.setCurrentContextID(contextId);
    return tournament;
  }
  createMockTournamentAsync(payload, isPageHosted = false) {
    const id = GameCore.Utils.String.generateObjectId();
    const tournament = new TournamentInstance_default(id, payload, isPageHosted);
    const tournamentData = tournament.toObject();
    this.writeTournamentData(id, tournamentData);
    return tournament;
  }
  async postScoreAsync(score) {
    await this.awaitRandomDelay();
    this.validateAvailableTournament();
    if (!Number.isSafeInteger(score)) {
      this.extra.exceptionInvalidParam("Score must be an safe integer");
    }
    this.randomError(PostScoreErrorList);
    const playerId = window.game.player.getPlayerId();
    this.updateBestScore(playerId, score);
  }
  // ? shareAsync always show if score is less than best score
  async shareAsync(payload) {
    this.extra.checkPopupShown();
    await this.awaitRandomDelay();
    this.validateAvailableTournament();
    this.validateSharePayload(payload);
    this.randomError(ShareErrorList);
    await this.loadSharePopupAsync();
    const { score } = payload;
    let bestScore = score;
    const tournament = this.getCurrentTournament();
    if (tournament) {
      const playerId2 = window.game.player.getPlayerId();
      const tournamentId = tournament.getID().toString();
      const lastBestScore = this.getBestScore(tournamentId, playerId2);
      if (lastBestScore && lastBestScore < score) {
        bestScore = lastBestScore;
      }
    }
    await new Promise((resolve, reject) => {
      if (!this.shareAsyncPopup) {
        this.adapter.extra.exceptionUnsupported();
      }
      this.shareAsyncPopup.onYes(this.handleOnYes(resolve));
      this.shareAsyncPopup.onNo(this.handleOnNo(reject));
      this.shareAsyncPopup.show(bestScore);
      this.extra.isPopupShown = true;
    });
    const playerId = window.game.player.getPlayerId();
    this.updateBestScore(playerId, score);
  }
  async getTournamentsAsync() {
    await this.awaitRandomDelay();
    this.randomError(GetTournamentsErrorList);
    const tournamentsData = this.getTournamentsData();
    const tournaments = Object.values(tournamentsData);
    return tournaments.map((tournament) => this.getTournamentInstance(tournament.id));
  }
  async joinAsync(tournamentId) {
    await this.awaitRandomDelay();
    if (!GameCore.Utils.Valid.isString(tournamentId)) {
      this.extra.exceptionInvalidParam("Tournament ID must be a string");
    }
    const tournament = this.getTournamentInstance(tournamentId);
    if (!tournament) {
      this.extra.exceptionTournamentNotFound("Tournament could not be found.");
    }
    this.randomError(JoinErrorList);
    const tournamentContextId = tournament.getContextID();
    await GameSDK.context.switchAsync(tournamentContextId);
  }
  setCurrentContextID(contextId) {
    if (this.context instanceof Context_default) {
      this.context.setCurrentContextId(contextId);
    }
  }
  getCurrentTournament() {
    const contextId = this.context.getID();
    if (!contextId)
      return null;
    const tournamentsData = this.getTournamentsData();
    for (const tournamentId in tournamentsData) {
      if (Object.hasOwn(tournamentsData, tournamentId)) {
        const tournament = tournamentsData[tournamentId];
        if (tournament.contextId === contextId) {
          return this.getTournamentInstance(tournamentId);
        }
      }
    }
    return null;
  }
  validateCreatePayload(payload) {
    const { Object: O, Valid: V } = GameCore.Utils;
    if (!V.isObject(payload)) {
      this.extra.exceptionInvalidParam("Payload must be an object");
    }
    if (!O.hasOwn(payload, "initialScore")) {
      this.extra.exceptionInvalidParam("Payload must have initialScore");
    }
    if (!O.hasOwn(payload, "config")) {
      this.extra.exceptionInvalidParam("Payload must have config");
    }
    const { initialScore, config } = payload;
    if (!V.isNumber(initialScore)) {
      this.extra.exceptionInvalidParam("initialScore must be a number");
    }
    if (!V.isObject(config)) {
      this.extra.exceptionInvalidParam("Config must be an object");
    }
    if (!O.hasOwn(config, "title")) {
      this.extra.exceptionInvalidParam("Config must have title");
    }
    if (!O.hasOwn(config, "tournamentTitle")) {
      this.extra.exceptionInvalidParam("Config must have tournamentTitle");
    }
    if (O.hasOwn(payload, "data") && !V.isObject(payload.data)) {
      this.extra.exceptionInvalidParam("Data must be an object");
    }
  }
  validateSharePayload(payload) {
    const { Object: O, Valid: V } = GameCore.Utils;
    if (!V.isObject(payload)) {
      this.extra.exceptionInvalidParam("Payload must be an object");
    }
    if (!O.hasOwn(payload, "score")) {
      this.extra.exceptionInvalidParam("Payload must have score");
    }
    const { score } = payload;
    if (!V.isNumber(score)) {
      this.extra.exceptionInvalidParam("Score must be a number");
    }
    if (O.hasOwn(payload, "data") && !V.isObject(payload.data)) {
      this.extra.exceptionInvalidParam("Data must be an object");
    }
  }
  validateAvailableTournament() {
    const tournament = this.getCurrentTournament();
    if (tournament)
      return;
    this.extra.exceptionTournamentNotFound("There is no tournament for this context.");
  }
  getTournamentInstance(id) {
    const tournamentData = this.getTournamentData(id);
    if (!tournamentData)
      return null;
    return {
      getID: () => tournamentData.id,
      getTitle: () => tournamentData.title,
      getPayload: () => tournamentData.payload,
      getEndTime: () => tournamentData.endTime,
      getContextID: () => tournamentData.contextId,
      getTournamentType: () => tournamentData.tournamentType
    };
  }
  getTournamentData(id) {
    const tournaments = this.getTournamentsData();
    if (!tournaments[id])
      return null;
    return tournaments[id];
  }
  writeTournamentData(id, data) {
    const tournaments = this.getTournamentsData();
    tournaments[id] = data;
    this.writeTournamentsData(tournaments);
  }
  getTournamentsData() {
    const { Browser: B, Valid: V } = GameCore.Utils;
    const data = B.getLocalStorage(TOURNAMENTS_DATA_MOCK_KEY);
    if (!V.isObject(data))
      return {};
    return data;
  }
  writeTournamentsData(tournaments) {
    const { Browser: B, Valid: V } = GameCore.Utils;
    if (!V.isObject(tournaments))
      return;
    B.writeLocalStorage(TOURNAMENTS_DATA_MOCK_KEY, tournaments);
  }
  getBestScore(tournamentId, playerId) {
    const leader = this.getTournamentLeader(tournamentId, playerId);
    if (!leader)
      return null;
    return leader.score ?? null;
  }
  updateBestScore(playerId, score) {
    const tournament = this.getCurrentTournament();
    if (!tournament)
      return;
    const tournamentId = tournament.getID().toString();
    if (!tournamentId)
      return;
    const leader = this.getTournamentLeader(tournamentId, playerId);
    if (!leader) {
      this.writeTournamentLeader(tournamentId, {
        playerId,
        score
      });
      return;
    }
    if (leader.score < score) {
      leader.score = score;
      this.writeTournamentLeader(tournamentId, leader);
    }
  }
  getTournamentLeader(tournamentId, playerId) {
    const tournamentLeaders = this.getTournamentLeadersData(tournamentId);
    if (!tournamentLeaders.length)
      return null;
    return tournamentLeaders.find((leader) => leader.playerId === playerId) ?? null;
  }
  getTournamentLeadersData(tournamentId) {
    const { Browser: B, Object: O } = GameCore.Utils;
    const data = B.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY);
    if (!O.hasOwn(data, tournamentId))
      return [];
    const tournamentLeaders = data[tournamentId];
    if (!Array.isArray(tournamentLeaders))
      return [];
    tournamentLeaders.sort((a, b) => b.score - a.score);
    return tournamentLeaders;
  }
  writeTournamentLeader(tournamentId, leader) {
    const tournamentLeaders = this.getTournamentLeadersData(tournamentId);
    const leaderIndex = tournamentLeaders.findIndex(
      (tournamentLeader) => tournamentLeader.playerId === leader.playerId
    );
    if (leaderIndex === -1) {
      tournamentLeaders.push(leader);
    } else {
      tournamentLeaders[leaderIndex] = leader;
    }
    this.writeTournamentLeadersData(tournamentId, tournamentLeaders);
  }
  writeTournamentLeadersData(tournamentId, tournamentLeaders) {
    const { Browser: B } = GameCore.Utils;
    if (!Array.isArray(tournamentLeaders))
      return;
    const data = B.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY) ?? {};
    Object.assign(data, { [tournamentId]: tournamentLeaders });
    B.writeLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY, data);
  }
};
__name(_Tournament, "Tournament");
var Tournament = _Tournament;
var Tournament_default = Tournament;

// src/game-sdk/sdk/GameSDK.ts
var _GameSDK = class _GameSDK {
  constructor() {
    __publicField(this, "extra");
    __publicField(this, "player");
    __publicField(this, "context");
    __publicField(this, "tournament");
    __publicField(this, "shortcut", null);
    __publicField(this, "isInitialized", false);
    __publicField(this, "bannerAdInstances", {});
    __publicField(this, "rewardedVideoInstance", null);
    __publicField(this, "interstitialAdInstance", null);
  }
  initialize() {
    this.extra = new Extra_default(this);
    this.player = new Player_default(this);
    this.context = new Context_default(this);
    this.tournament = new Tournament_default(this);
  }
  getLocale() {
    return GameCore.Utils.Browser.getLocale();
  }
  getPlatform() {
    const { Device } = GameCore.Utils;
    if (Device.isAndroid())
      return "ANDROID";
    if (Device.isIOS())
      return "IOS";
    if (Device.isDesktop())
      return "WEB";
    if (Device.isMobile())
      return "MOBILE_WEB";
    return null;
  }
  getSDKName() {
    return "GameCore";
  }
  getSDKVersion() {
    return "1.0.0";
  }
  async initializeAsync() {
    if (this.isInitialized)
      return;
    this.initialize();
    this.extra.createLoadingElement();
    await this.extra.waitGameCoreReadyAsync();
    const params = GameCore.Utils.Browser.getQueryParams();
    console.info("GameCore params:", params);
    const splashPreview = params["splashPreview"];
    if (splashPreview) {
      this.extra.destroyLoadingElement();
      return;
    }
    const playerIdInQuery = params["playerId"];
    this.player.initPlayerInfo(playerIdInQuery);
    const contextIdInQuery = params["context_source_id"];
    const contextTypeInQuery = params["context_type"];
    this.context.initContextInfo(contextIdInQuery, contextTypeInQuery);
    this.isInitialized = true;
  }
  async startGameAsync() {
    const initedPercent = 100;
    window.__sdkLoadingCount = initedPercent;
    this.setLoadingProgress(initedPercent);
    this.extra.destroyLoadingElement();
    const params = GameCore.Utils.Browser.getQueryParams();
    const tournamentIdInQuery = params["tournament_id"];
    await this.tournament.initTournamentInfoAsync(tournamentIdInQuery);
    window.game.event.emit(GameCore.Events.GAME_SDK_STARTED);
  }
  setLoadingProgress(percentage) {
    this.extra.setLoadingElementProgress(percentage);
  }
  getEntryPointData() {
    return {};
  }
  async getEntryPointAsync() {
    return "no_entry";
  }
  async loadBannerAdAsync(placementId) {
    if (!placementId)
      return;
    if (!this.bannerAdInstances[placementId]) {
      const MockBannerInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
      if (typeof MockBannerInstance !== "function") {
        this.extra.exceptionInvalidOperation("Banner ads mock is not enabled");
      }
      this.bannerAdInstances[placementId] = new MockBannerInstance("banner", placementId);
    }
    await this.bannerAdInstances[placementId].loadAsync();
    await this.bannerAdInstances[placementId].showAsync();
  }
  async hideBannerAdAsync(placementId) {
    if (!this.bannerAdInstances[placementId])
      return;
    await this.bannerAdInstances[placementId].hideAsync();
  }
  async getInterstitialAdAsync(placementId) {
    if (!this.interstitialAdInstance) {
      const MockAdInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
      if (typeof MockAdInstance !== "function") {
        this.extra.exceptionInvalidOperation("Interstitial ads mock is not enabled");
      }
      this.interstitialAdInstance = new MockAdInstance("interstitial", placementId);
    }
    return this.interstitialAdInstance;
  }
  async getRewardedVideoAsync(placementId) {
    if (!this.rewardedVideoInstance) {
      const MockAdInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).default;
      if (typeof MockAdInstance !== "function") {
        this.extra.exceptionInvalidOperation("Rewarded video ads mock is not enabled");
      }
      this.rewardedVideoInstance = new MockAdInstance("rewarded", placementId);
    }
    return this.rewardedVideoInstance;
  }
  async getTournamentAsync() {
    this.tournament.randomError(["Unsupported", "NetworkFailure"]);
    const currentContextID = this.context.getID();
    if (!GameCore.Utils.Valid.isString(currentContextID)) {
      this.extra.exceptionInvalidOperation("Not in a context");
    }
    const tournaments = await this.tournament.getTournamentsAsync();
    const wantedTournament = tournaments.find((tournament) => {
      return tournament.getContextID() === currentContextID;
    });
    if (!wantedTournament) {
      this.extra.exceptionTournamentNotFound(
        "A Tournament with current context was not found"
      );
    }
    return wantedTournament;
  }
  getSupportedAPIs() {
    const { CanSubscribeBot } = GameCore.Configs.Mockup.GameSDK.Player.SubscribeBot;
    if (CanSubscribeBot) {
      return ["player.canSubscribeBotAsync"];
    }
    return [];
  }
  async canCreateShortcutAsync() {
    await this.loadMockAddShortcut();
    if (!this.shortcut) {
      this.extra.exceptionUnsupported();
    }
    return this.shortcut.canCreateShortcutAsync();
  }
  async createShortcutAsync() {
    await this.loadMockAddShortcut();
    if (!this.shortcut) {
      this.extra.exceptionUnsupported();
    }
    return this.shortcut.createShortcutAsync();
  }
  async loadMockAddShortcut() {
    if (this.shortcut)
      return;
    const MockAddShortcut2 = (await Promise.resolve().then(() => (init_MockAddShortcut(), MockAddShortcut_exports))).default;
    if (typeof MockAddShortcut2 !== "function")
      return;
    this.shortcut = new MockAddShortcut2(this);
  }
};
__name(_GameSDK, "GameSDK");
var GameSDK2 = _GameSDK;
var GameSDK_default = GameSDK2;

// src/game-sdk/adapters/msgames/MsGamesAdInstance.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/sdk/AdInstance.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _AdInstance = class _AdInstance {
  constructor(type, placementId) {
    __publicField(this, "type");
    __publicField(this, "placementId");
    this.type = type;
    this.placementId = placementId;
  }
  getPlacementID() {
    return this.placementId;
  }
  async hideAsync() {
    return Promise.resolve();
  }
};
__name(_AdInstance, "AdInstance");
var AdInstance = _AdInstance;
var AdInstance_default = AdInstance;

// src/game-sdk/adapters/msgames/MsGamesAdInstance.ts
var defaultRespond = {
  instanceId: ""
};
var INTER_AD_SDK_DELAY = 30;
var _MsGamesAdInstance = class _MsGamesAdInstance extends AdInstance_default {
  constructor(type, sdk) {
    super(type, "");
    __publicField(this, "sdk");
    __publicField(this, "type");
    __publicField(this, "response");
    __publicField(this, "timer", null);
    this.sdk = sdk;
    this.type = type;
    this.response = defaultRespond;
  }
  getPlacementID() {
    return this.response.instanceId;
  }
  loadAsync() {
    return new Promise((resolve, reject) => {
      const isRewarded = this.type === "rewarded";
      if (!isRewarded) {
        const isDelayActive = this.isInterstitialAdDelayActive();
        if (isDelayActive) {
          reject(new Error("Interstitial ad delay is active."));
          return;
        }
      }
      this.sdk.loadAdsAsync(isRewarded).then((instance) => {
        this.response = instance;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        resolve();
      }).catch((error) => {
        if (this.isAdsAlreadyLoadedError(error)) {
          resolve();
          return;
        }
        reject(error);
      });
      this.timer = setTimeout(() => {
        reject(new Error("Ad loaded failed"));
      }, 1e4);
    });
  }
  isInterstitialAdDelayActive() {
    const lastShowAdRequestTime = window.game.ads.getLastShowAdRequestTime();
    const currentTime = window.performance.now() / 1e3;
    const isShowAdAlreadyRequested = currentTime - lastShowAdRequestTime <= INTER_AD_SDK_DELAY;
    return isShowAdAlreadyRequested;
  }
  isAdsAlreadyLoadedError(error) {
    let errorAsString = "";
    try {
      errorAsString = JSON.stringify(error);
    } catch (error2) {
      return false;
    }
    const isClientError = errorAsString.includes("LOAD_ADS_CLIENT_FAILURE");
    const isAlreadyLoadedError = errorAsString.includes("Ads already loaded.");
    return isClientError && isAlreadyLoadedError;
  }
  async showAsync() {
    return new Promise((resolve, reject) => {
      if (!this.response.instanceId) {
        reject(new Error("Ad is not loaded. InstanceId is empty"));
      }
      this.sdk.showAdsAsync(this.response.instanceId).then((instance) => {
        if (!instance.showAdsCompletedAsync) {
          reject(new Error("Ad is not loaded. showAdsCompletedAsync is empty"));
          return;
        }
        instance.showAdsCompletedAsync.then(() => {
          this.response = defaultRespond;
          resolve();
        }).catch((error) => {
          if (error.code && error.code === "SHOW_ADS_COMPLETED_FAILURE") {
            error.code = "USER_INPUT";
          }
          reject(error);
        }).finally(() => {
          window.game.ads.updateLastShowAdRequestTime();
        });
      }).catch((error) => {
        reject(error);
      }).finally(() => {
        window.game.ads.updateLastShowAdRequestTime();
      });
    });
  }
};
__name(_MsGamesAdInstance, "MsGamesAdInstance");
var MsGamesAdInstance = _MsGamesAdInstance;
var MsGamesAdInstance_default = MsGamesAdInstance;

// src/game-sdk/adapters/msgames/MsGamesContext.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _MsGamesContext = class _MsGamesContext extends Context_default {
  constructor(adapter, sdk) {
    super(adapter);
    this.sdk = sdk;
  }
  getID() {
    return null;
  }
  getType() {
    return "SOLO";
  }
  switchAsync(_) {
    this.adapter.extra.exceptionUnsupported();
  }
  chooseAsync() {
    this.adapter.extra.exceptionUnsupported();
  }
  createAsync(_) {
    this.adapter.extra.exceptionUnsupported();
  }
  getPlayersAsync() {
    this.adapter.extra.exceptionUnsupported();
  }
};
__name(_MsGamesContext, "MsGamesContext");
var MsGamesContext = _MsGamesContext;
var MsGamesContext_default = MsGamesContext;

// src/game-sdk/adapters/msgames/MsGamesPlayer.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/game-sdk/adapters/msgames/commons/MsGamesUser.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/utils/string/generateName.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/utils/number/random.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var func = /* @__PURE__ */ __name((length2) => {
  return Math.floor(Math.random() * Math.pow(10, length2));
}, "func");
var random_default = func;

// src/utils/object/hasOwn.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();

// src/utils/valid/isObject.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var func2 = /* @__PURE__ */ __name((input) => {
  const isValidObject = typeof input === "object" || typeof input === "function";
  const isArray = Array.isArray(input);
  return input !== null && isValidObject && !isArray;
}, "func");
var isObject_default = func2;

// src/utils/object/hasOwn.ts
var func3 = /* @__PURE__ */ __name((obj, key) => {
  if (!isObject_default(obj))
    return false;
  if (typeof Object.hasOwn === "function") {
    return Object.hasOwn(obj, key);
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
}, "func");
var hasOwn_default = func3;

// src/utils/string/generateName.ts
var names = null;
var defaultName = "Anonymous";
var fetchNames = /* @__PURE__ */ __name(async () => {
  const surnames = (await Promise.resolve().then(() => __toESM(require_names_surnames()))).default;
  if (!isObject_default(surnames) || !hasOwn_default(surnames, "data") || !Array.isArray(surnames.data)) {
    throw new Error("Invalid names-surnames.json");
  }
  names = surnames.data;
}, "fetchNames");
var func4 = /* @__PURE__ */ __name(async () => {
  try {
    if (!names) {
      await fetchNames();
      if (!names) {
        throw new Error("Cannot fetch names");
      }
    }
    const firstName = names[random_default(length)];
    const lastName = names[random_default(length)];
    return `${firstName} ${lastName}`;
  } catch (_) {
    return defaultName;
  }
}, "func");
var generateName_default = func4;

// src/game-sdk/adapters/msgames/commons/MsGamesUser.ts
var GameName2 = "Game Core".replace(/ /g, "-");
var guestIDStore = GameName2 + "_GuestID";
var guestNameStore = GameName2 + "_GuestName";
var guestDataStore = GameName2 + "_GuestData";
var guestStatsStore = GameName2 + "GuestStats";
var _MsGamesUser = class _MsGamesUser {
  constructor(userInfo) {
    __publicField(this, "_personalInfo");
    __publicField(this, "_uniqueId");
    __publicField(this, "photo");
    __publicField(this, "_playerData");
    __publicField(this, "_playerStats");
    __publicField(this, "isGuest");
    this.isGuest = true;
    if (userInfo) {
      this._uniqueId = userInfo.playerId;
      localStorage.setItem(guestIDStore, this._uniqueId);
      this.isGuest = false;
    }
    this._personalInfo = {
      id: this._uniqueId,
      avatarIdHash: "0",
      lang: "en",
      publicName: "Guest",
      uniqueID: this._uniqueId,
      scopePermissions: {
        avatar: "forbid",
        public_name: "forbid"
      }
    };
    this.updatePublicName();
    this._playerData = this.getDataFromLocalStorage();
    this._playerStats = this.getStatsFromLocalStorage();
  }
  async updatePublicName() {
    this._personalInfo.publicName = await this.checkAndGetNameFromLocalStorage();
  }
  getUniqueID() {
    return this._uniqueId;
  }
  getName() {
    return this._personalInfo.publicName;
  }
  getPhoto() {
    return "";
  }
  getMode() {
    return this.isGuest ? "guest" : "logged";
  }
  getData(keys) {
    if (!keys) {
      return Promise.resolve(this._playerData);
    } else {
      const correctData = keys.reduce((p, c) => ({ ...p, [c]: this._playerData[c] }), {});
      return Promise.resolve(correctData);
    }
  }
  setData(data) {
    this._playerData = { ...this._playerData, ...data };
    this.writeDataToLocalStorage(this._playerData);
    return Promise.resolve(true);
  }
  setStats(stats) {
    this._playerStats = { ...this._playerStats, ...stats };
    this.writeStatsToLocalStorage(this._playerStats);
    return Promise.resolve(true);
  }
  incrementStats(increments) {
    for (const [key, value] of Object.entries(increments)) {
      this._playerStats[key] = (this._playerStats[key] || 0) + value;
    }
    this.writeStatsToLocalStorage(this._playerStats);
    return Promise.resolve(this._playerStats);
  }
  getStats(keys) {
    if (!keys) {
      return Promise.resolve(this._playerStats);
    } else {
      const correctData = keys.reduce((p, c) => ({ ...p, [c]: this._playerStats[c] }), {});
      return Promise.resolve(correctData);
    }
  }
  async checkAndGetNameFromLocalStorage() {
    const localName = localStorage.getItem(guestNameStore);
    if (localName != null) {
      return localName;
    } else {
      const randomName = await generateName_default();
      localStorage.setItem(guestNameStore, randomName);
      return randomName;
    }
  }
  getDataFromLocalStorage() {
    const data = localStorage.getItem(guestDataStore);
    if (data) {
      return JSON.parse(data);
    }
    return {};
  }
  writeDataToLocalStorage(data) {
    return localStorage.setItem(guestDataStore, JSON.stringify(data));
  }
  getStatsFromLocalStorage() {
    const data = localStorage.getItem(guestStatsStore);
    if (data) {
      return JSON.parse(data);
    }
    return {};
  }
  writeStatsToLocalStorage(data) {
    return localStorage.setItem(guestStatsStore, JSON.stringify(data));
  }
};
__name(_MsGamesUser, "MsGamesUser");
var MsGamesUser = _MsGamesUser;
var MsGamesUser_default = MsGamesUser;

// src/game-sdk/adapters/msgames/MsGamesPlayer.ts
var _MsGamesPlayer = class _MsGamesPlayer extends Player_default {
  constructor(adapter, sdk) {
    super(adapter);
    __publicField(this, "sdk");
    __publicField(this, "player");
    __publicField(this, "signature", "");
    __publicField(this, "isLoginEnabled", false);
    this.sdk = sdk;
    this.updateLoginEnabledConfig();
  }
  updateLoginEnabledConfig() {
    const gameConfig = define_GAME_CONFIG_default;
    if (!gameConfig)
      return;
    const { MSGames } = gameConfig.GameSDK;
    if (!MSGames)
      return;
    this.isLoginEnabled = MSGames.UseLoginFeature;
  }
  async initPlayerAsync() {
    let user = await this.tryGettingSignedInPlayer();
    if (this.isLoginEnabled && user === null) {
      user = await this.tryMakingPlayerSignedIn();
    }
    this.player = new MsGamesUser_default(user);
    if (user) {
      this.signature = `${user.playerId} ${user.signature}`;
    }
    return Promise.resolve();
  }
  async tryGettingSignedInPlayer() {
    let user = null;
    try {
      user = await this.sdk.getSignedInUserAsync();
    } catch (e) {
    }
    return Promise.resolve(user);
  }
  async tryMakingPlayerSignedIn() {
    let user = null;
    try {
      user = await this.sdk.signInAsync();
    } catch (e) {
    }
    return Promise.resolve(user);
  }
  rejectPlayerNotInitialized() {
    return Promise.reject(new Error("Player is not initialized"));
  }
  getID() {
    return this.player?.getUniqueID() ?? null;
  }
  getASIDAsync() {
    return Promise.resolve(this.getID() ?? "");
  }
  getSignedASIDAsync() {
    return Promise.resolve({
      getASID: () => {
        return this.getID() ?? "";
      },
      getSignature: () => {
        return this.signature;
      }
    });
  }
  getName() {
    const name = this.player?.getName() ?? null;
    return name === "" ? "Anonymous" : name;
  }
  getPhoto() {
    return this.player?.getPhoto() ?? null;
  }
  getDataAsync(keys) {
    return new Promise((resolve, reject) => {
      this.validateIsLogged(reject);
      this.player.getData(keys).then(resolve).catch(reject);
    });
  }
  setDataAsync(data) {
    return new Promise((resolve, reject) => {
      this.validateIsLogged(reject);
      this.getDataAsync().then((oldData) => {
        const correctData = { ...oldData, ...data };
        this.player.setData(correctData).then(() => {
          resolve();
        }).catch(reject);
      }).catch(reject);
    });
  }
  flushDataAsync() {
    return this.player?.setData({}).then() ?? this.rejectPlayerNotInitialized();
  }
  getSignedPlayerInfoAsync() {
    return Promise.resolve({
      getPlayerID: () => {
        return this.getID() ?? "10";
      },
      getSignature: () => {
        return this.signature;
      }
    });
  }
  canSubscribeBotAsync() {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
  subscribeBotAsync() {
    this.adapter.extra.exceptionUnsupported();
  }
  getStatsAsync(keys) {
    return new Promise((resolve, reject) => {
      this.validateIsLogged(reject);
      resolve(this.player.getStats(keys));
    });
  }
  setStatsAsync(stats) {
    return new Promise((resolve, reject) => {
      this.validateIsLogged(reject);
      this.player.setStats(stats).then(() => resolve()).catch(reject);
    });
  }
  incrementStatsAsync(increments) {
    return new Promise((resolve, reject) => {
      this.validateIsLogged(reject);
      this.player.incrementStats(increments).then(resolve).catch(reject);
    });
  }
  getConnectedPlayersAsync() {
    this.adapter.extra.exceptionUnsupported();
  }
  isGuest() {
    if (!this.player)
      return true;
    const mode = this.player.getMode();
    if (mode === "guest")
      return true;
    else
      return false;
  }
  validateIsLogged(reject) {
    if (!this.player) {
      reject(new Error("Player is not initialized"));
      return;
    }
  }
};
__name(_MsGamesPlayer, "MsGamesPlayer");
var MsGamesPlayer = _MsGamesPlayer;
var MsGamesPlayer_default = MsGamesPlayer;

// src/game-sdk/adapters/msgames/MsGamesTournaments.ts
init_define_GAME_CONFIG();
init_define_INIT_CONFIG();
var _MsGamesTournament = class _MsGamesTournament extends Tournament_default {
  createAsync(_payload) {
    this.adapter.extra.exceptionUnsupported();
  }
  shareAsync(_payload) {
    this.adapter.extra.exceptionUnsupported();
  }
  joinAsync(_tournamentID) {
    this.adapter.extra.exceptionUnsupported();
  }
  postScoreAsync(_score) {
    this.adapter.extra.exceptionUnsupported();
  }
  getTournamentsAsync() {
    this.adapter.extra.exceptionUnsupported();
  }
};
__name(_MsGamesTournament, "MsGamesTournament");
var MsGamesTournament = _MsGamesTournament;
var MsGamesTournaments_default = MsGamesTournament;

// src/game-sdk/adapters/msgames/MsGamesAdapter.ts
var GameName3 = "Game Core".replace(/ /g, "-");
var _MsGamesAdapter = class _MsGamesAdapter extends GameSDK_default {
  constructor(sdk) {
    super();
    __publicField(this, "sdk");
    __publicField(this, "shareImageBase64");
    __publicField(this, "notificationImageBase64");
    this.sdk = sdk;
  }
  initialize() {
    super.initialize();
    this.tournament = new MsGamesTournaments_default(this);
    this.player = new MsGamesPlayer_default(this, this.sdk);
    this.context = new MsGamesContext_default(this, this.sdk);
    this.rewardedVideoInstance = new MsGamesAdInstance_default("rewarded", this.sdk);
    this.interstitialAdInstance = new MsGamesAdInstance_default("interstitial", this.sdk);
    this.player.initPlayerAsync();
  }
  async loadImageAsync(path) {
    const base64 = await fetch(path).then((res) => res.blob()).then((blob) => {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        try {
          reader.onload = function() {
            resolve(this.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        } catch (error) {
          reject(error);
        }
      });
    });
    if (base64 && typeof base64 === "string") {
      return Promise.resolve(base64);
    }
    return Promise.reject(new Error("Cannot load image"));
  }
  getLocale() {
    return this.sdk.getLocale();
  }
  getSDKVersion() {
    return "v1.0.0-rc.12";
  }
  getSupportedAPIs() {
    const supportAPIs = [
      "getLocale",
      "getSDKVersion",
      "initializeAsync",
      "startGameAsync",
      "setLoadingProgress",
      "getInterstitialAdAsync",
      "getRewardedVideoAsync",
      "getPlatform",
      "loadBannerAdAsync",
      "hideBannerAdAsync",
      "getLeaderboardAsync",
      "canCreateShortcutAsync",
      "getPlayerEntryAsync"
    ];
    return supportAPIs;
  }
  async shareAsync(_) {
    if (!this.shareImageBase64) {
      this.shareImageBase64 = await this.loadImageAsync("./assets/images/others/share.jpg");
    }
    return new Promise((resolve, reject) => {
      this.sdk.shareAsync({
        title: GameName3,
        text: "Play now!",
        image: this.shareImageBase64
      }).then(() => resolve()).catch(reject);
    });
  }
  updateAsync(_) {
    this.extra.exceptionUnsupported();
  }
  switchGameAsync(appID, data) {
    return this.sdk.switchGameAsync({
      id: appID,
      payloadData: data
    });
  }
  canCreateShortcutAsync() {
    return Promise.resolve(true);
  }
  createShortcutAsync() {
    return new Promise((resolve, reject) => {
      console.info("\u{1F680} > createShortcutAsync");
      this.sdk.promptInstallAsync().then(() => resolve()).catch(reject);
    });
  }
  logEvent() {
    return null;
  }
  onPause(_) {
  }
  getInterstitialAdAsync(_) {
    return new Promise((resolve) => {
      resolve(this.interstitialAdInstance);
    });
  }
  getRewardedVideoAsync(_) {
    return new Promise((resolve) => {
      resolve(this.rewardedVideoInstance);
    });
  }
  matchPlayerAsync(_) {
    this.extra.exceptionUnsupported();
  }
  checkCanPlayerMatchAsync() {
    return new Promise((_, reject) => {
      reject(false);
    });
  }
  getLeaderboardAsync(_name) {
    this.extra.exceptionUnsupported();
  }
  getPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      return "ANDROID";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "IOS";
    }
    return "WEB";
  }
  postSessionScoreAsync(_score) {
    this.extra.exceptionUnsupported();
  }
  loadBannerAdAsync(_placementID) {
    const { BannerDisplayAdOptions } = GameCore.Configs.Ads;
    const config = BannerDisplayAdOptions.find((config2) => config2.PlacementId === _placementID);
    if (!config) {
      return Promise.reject(new Error("Banner ad config not found."));
    }
    const { Position, BannerWidth, BannerHeight } = config;
    if (!Position || !BannerWidth || !BannerHeight) {
      return Promise.reject(new Error("Invalid banner ad config."));
    }
    const placement = `${Position}:${BannerWidth}x${BannerHeight}`;
    if (!this.isValidDisplayAdPlacement(placement)) {
      return Promise.reject(new Error("Invalid banner ad placement"));
    } else {
      return new Promise((resolve, reject) => {
        this.sdk.showDisplayAdsAsync(placement).then(() => resolve()).catch(reject);
      });
    }
  }
  isValidDisplayAdPlacement(placement) {
    const listSupports = [
      "top:728x90",
      "bottom:728x90",
      "left:300x250",
      "right:300x250",
      "topleft:300x250",
      "topright:300x250",
      "bottomleft:300x250",
      "bottomright:300x250",
      "top:320x50",
      "right:320x50",
      "bottom:320x50",
      "left:320x50",
      "left:300x600",
      "right:300x600",
      "top:970x250",
      "bottom:970x250",
      "left:160x600",
      "right:160x600"
    ];
    if (listSupports.includes(placement)) {
      return true;
    }
    return false;
  }
  hideBannerAdAsync() {
    return new Promise((resolve, reject) => {
      this.sdk.hideDisplayAdsAsync().then(() => resolve()).catch(reject);
    });
  }
  async showGameRating() {
    this.extra.exceptionUnsupported();
  }
  getTournamentAsync() {
    this.extra.exceptionUnsupported();
  }
  getEntryPointAsync() {
    return Promise.resolve(this.sdk.getEntryPointInfo().entryPointId);
  }
  submitGameResultsAsync(score) {
    return this.sdk.submitGameResultsAsync(score);
  }
  async scheduleNotificationAsync(data) {
    if (!this.notificationImageBase64) {
      try {
        const base64 = await this.loadImageAsync("./assets/images/others/notification.jpg");
        this.notificationImageBase64 = base64;
      } catch (error) {
        console.warn("\u{1F680} > scheduleNotificationAsync > notificationImageBase64", error);
      }
    }
    let defaultData = {
      title: GameName3,
      description: "We miss you!",
      type: 0,
      minDelayInSeconds: 3.6,
      imageData: this.notificationImageBase64,
      callToAction: "Play now!"
    };
    defaultData = { ...defaultData, ...data };
    return new Promise((resolve, reject) => {
      console.info("\u{1F680} > scheduleNotificationAsync");
      this.sdk.scheduleNotificationAsync(defaultData).then(() => resolve()).catch(reject);
    });
  }
};
__name(_MsGamesAdapter, "MsGamesAdapter");
var MsGamesAdapter = _MsGamesAdapter;
var MsGamesAdapter_default = MsGamesAdapter;

// src/game-sdk/index.ts
console.groupCollapsed("\u26A1\uFE0F Corecos initialized");
function autoDetectAndInitializeSDKAdapter() {
  let sdkAdapter;
  const w = window;
  let sdkName = "GameSDK";
  if ("FBInstant" in w) {
    sdkName = "FBInstant";
    sdkAdapter = new empty_script_default(window.FBInstant);
  } else if ("gdsdk" in w) {
    sdkName = "GameDistribution";
    sdkAdapter = new empty_script_default(window.gdsdk);
  } else if ("CrazyGames" in w) {
    sdkName = "CrazyGames";
    sdkAdapter = new empty_script_default(window.CrazyGames.SDK);
  } else if ("GlanceGamingAdInterface" in w) {
    sdkName = "Glance";
    sdkAdapter = new empty_script_default(window.GlanceGamingAdInterface);
  } else if ("$msstart" in w) {
    sdkName = "MsGames";
    sdkAdapter = new MsGamesAdapter_default(window.$msstart);
  } else if (false) {
    sdkName = "AndroidNative";
    sdkAdapter = new ANAdapter();
  } else {
    sdkAdapter = new GameSDK_default();
  }
  console.info(`GameSDK loaded (${sdkName})`);
  return sdkAdapter;
}
__name(autoDetectAndInitializeSDKAdapter, "autoDetectAndInitializeSDKAdapter");
console.groupCollapsed(`\u{1F579}\uFE0F GameSDK`);
window.GameSDK = Object.seal(autoDetectAndInitializeSDKAdapter());
security_default(window, "GameSDK");
})();(function () {var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// <define:__INIT_CONFIG__>
var define_INIT_CONFIG_default = { GA_MEASUREMENT_ID: "null" };

// libs/init-game-sdk.js
var initConfig = define_INIT_CONFIG_default;
var lastProgress = 0;
var stepProgressLoading = /* @__PURE__ */ __name(() => {
  const gameSdkLoadingTimer = setInterval(() => {
    if (window.__sdkLoadingCount >= 99) {
      clearInterval(gameSdkLoadingTimer);
      return;
    }
    if (lastProgress === window.__sdkLoadingCount)
      return;
    lastProgress = window.__sdkLoadingCount;
    GameSDK.setLoadingProgress(window.__sdkLoadingCount);
  }, 100);
}, "stepProgressLoading");
var initGameSDK = /* @__PURE__ */ __name(async () => {
  try {
    console.info("GameSDK initializing...");
    window.__sdkLoadingCount = 1;
    if (true) {
      stepProgressLoading();
    } else {
      autoProgressLoading();
    }
    console.groupEnd();
    await GameSDK.initializeAsync();
    console.groupEnd();
    await processGoogleAnalytics();
    console.info("GameSDK initialized");
    window.__sdkInitiated = true;
  } catch (error) {
    console.error("GameSDK initializeAsync:", error);
  }
}, "initGameSDK");
var processGoogleAnalytics = /* @__PURE__ */ __name(async () => {
  if (!initConfig)
    return;
  const { BUILD_VERSION = 0, GA_MEASUREMENT_ID } = initConfig || {};
  const userId = GameSDK.player.getID();
  let entryPoint = "no_entry";
  try {
    entryPoint = await GameSDK.getEntryPointAsync();
  } catch (error) {
    console.warn("GameSDK", error);
  }
  initGoogleAnalytics(GA_MEASUREMENT_ID, BUILD_VERSION, userId, entryPoint);
}, "processGoogleAnalytics");
var initGoogleAnalytics = /* @__PURE__ */ __name((gaId, buildVer, userId, entryPoint) => {
  if (gaId == "null")
    return;
  try {
    const { fbig_ad_id, fbig_adset_id, fbig_campaign_id } = GameSDK.getEntryPointData() || {};
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/window.gtag/js?id=" + gaId;
    document.head.appendChild(gaScript);
    window.focus();
    window.gtag("set", "client_id", `100.${userId}`);
    window.gtag("set", "user_id", userId);
    window.gtag("set", "send_page_view", false);
    window.gtag("config", gaId, {
      groups: "GA",
      build: buildVer,
      medium: entryPoint,
      campaign: fbig_campaign_id,
      cookie_flags: "SameSite=None;Secure"
    });
    window.gtag("set", "user_properties", {
      user_id: userId,
      ad_id: fbig_ad_id,
      adset_id: fbig_adset_id,
      campaign_id: fbig_campaign_id,
      traffic_source: entryPoint
    });
    window.gtag("event", "app_launch", {
      send_to: "GA"
    });
  } catch (error) {
    console.warn("GameSDK initGoogleAnalytics:", error);
  }
}, "initGoogleAnalytics");
initGameSDK();
})();