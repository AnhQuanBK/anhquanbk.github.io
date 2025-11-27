"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true,
writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) ||
        desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {},
__copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) :
  target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result3 = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result3 = (kind ? decorator(target, key, result3) : decorator(result3)) || result3;
  if (kind && result3) __defProp(target, key, result3);
  return result3;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key,
value);

// <define:__GAME_CONFIG__>
var define_GAME_CONFIG_default;
var init_define_GAME_CONFIG = __esm({
  "<define:__GAME_CONFIG__>"() {
    define_GAME_CONFIG_default = { AppId: "tile-connect-remaster", AppDescription: "Tile Connect Rem\
aster", ApiHost: "https://fbig-singleplay-apps.citigo.site", OtherHost: "https://fbig-leaderboards.c\
itigo.site", Ads: { Enabled: true, PreloadAds: true, NotifyPlayerBeforeShow: false, ShowAdOnLoad: { Enabled: false,
    DelaySeconds: 0, PlacementId: "ad_demo_01" }, DegradationTracking: { ResetTimeMinutes: 5, MaxFailedAttempts: 8 },
    AdServiceConfigs: { AdSense: { Enabled: false, UsePreload: false, DataAdClient: "ca-pub-12345678\
90", DataAdChannel: "1234567890", DataAdBreakTest: false, DataAdFrequencyHint: 30 }, Savana: { Enabled: false,
    UsePreload: false, DataAdClient: "ca-pub-1234567890", DataAdChannel: "1234567890", DataAdBreakTest: false,
    DataAdFrequencyHint: 45, BannerAdSlotId: "1234567890" }, AppLovin: { Enabled: false, UsePreload: false } },
    InterstitialAdOptions: [{ DeviceOS: "ios", AdService: "platform", PlacementId: "interstitial_01",
    SecondsFirstTime: 30, SecondsBetweenAds: 45 }, { DeviceOS: "android", AdService: "platform", PlacementId: "\
interstitial_02", SecondsFirstTime: 30, SecondsBetweenAds: 45 }, { DeviceOS: "default", AdService: "\
platform", PlacementId: "interstitial_03", SecondsFirstTime: 30, SecondsBetweenAds: 45 }, { DeviceOS: "\
default", AdService: "adsense", PlacementId: "interstitial_04", SecondsFirstTime: 30, SecondsBetweenAds: 45 }],
    RewardedVideoAdOptions: [{ DeviceOS: "ios", AdService: "platform", PlacementId: "rewarded_video_\
01", SecondsFirstTime: 0, SecondsBetweenAds: 0 }, { DeviceOS: "android", AdService: "platform", PlacementId: "\
rewarded_video_02", SecondsFirstTime: 0, SecondsBetweenAds: 0 }, { DeviceOS: "default", AdService: "\
platform", PlacementId: "rewarded_video_03", SecondsFirstTime: 0, SecondsBetweenAds: 0 }, { AdService: "\
adsense", PlacementId: "rewarded_video_04", SecondsFirstTime: 0, SecondsBetweenAds: 0, DeviceOS: "de\
fault" }], RewardedInterstitialAdOptions: [{ AdService: "platform", PlacementId: "rewarded_interstit\
ial_01", SecondsFirstTime: 0, SecondsBetweenAds: 0, DeviceOS: "ios" }, { AdService: "platform", PlacementId: "\
rewarded_interstitial_02", SecondsFirstTime: 0, SecondsBetweenAds: 0, DeviceOS: "android" }, { AdService: "\
platform", PlacementId: "rewarded_interstitial_03", SecondsFirstTime: 0, SecondsBetweenAds: 0, DeviceOS: "\
default" }, { AdService: "adsense", PlacementId: "rewarded_interstitial_04", SecondsFirstTime: 0, SecondsBetweenAds: 0,
    DeviceOS: "default" }], BannerDisplayAdOptions: [{ AdService: "platform", PlacementId: "banner_0\
1", Position: "bottom", BannerHeight: 50, SecondsReload: 60, DeviceOS: "ios" }, { AdService: "platfo\
rm", PlacementId: "banner_02", Position: "bottom", BannerHeight: 50, SecondsReload: 60, DeviceOS: "a\
ndroid" }, { AdService: "platform", PlacementId: "banner_03", Position: "bottom", BannerHeight: 50, SecondsReload: 60,
    DeviceOS: "default" }] }, Languages: { Enabled: true, DetectPlayerLocale: true }, GameSDKOptions: {
    AllowWithoutSDK: true, UseNameGenerator: true, MSGames: { LoginOnStart: false, MaxLoginAttemptsPerDay: 1,
    DevPlaygroundAppId: "9p630z8prmnx" }, Yandex: { LoginOnStart: false, MaxLoginAttemptsPerDay: 1 },
    Playable: { AppleAppStoreUrl: "", GooglePlayStoreUrl: "" }, TranssionH5: { GaId: "G-XXXXXXXXXX" } },
    Core: { InitAsync: true, AverageLoadTime: 5, StartSDKAfterLoadGame: true, FastCheckTournamentContext: true },
    GameEngine: { ForceDesktopDPR: 2, AutoResizeCanvas: true, PreferredFPS: { Mobile: 60, Desktop: 60 },
    DynamicAtlas: { IOS: { Enabled: true, MaxAtlasSize: 8192, MaxFrameSize: 2048, MaxAtlasCount: 1 },
    Android: { Enabled: true, MaxAtlasSize: 4096, MaxFrameSize: 2048, MaxAtlasCount: 1 }, Desktop: {
    Enabled: true, MaxAtlasSize: 8192, MaxFrameSize: 2048, MaxAtlasCount: 1 }, OptimizeAtlas: { Enabled: true,
    AtlasDebug: false, AutoAtlasSize: true, UsePowerOfTwo: false, TextureBleeding: true, AllowNonePackable: false,
    OnlyOptimizeWhenRenderTooLong: true } }, DynamicAssets: { Enabled: true, Resolution: { Source: 2,
    Available: [1, 2] }, Compression: { Debug: false, Enabled: false, PNG: { colors: 256, quality: 80,
    dither: 0.6, palette: true, compressionLevel: 6 }, JPEG: { quality: 80, mozjpeg: true }, WEBP: {
    quality: 80, lossless: false, alphaQuality: 60, smartSubsample: true, preset: "drawing" } }, IgnoreFiles: [] },
    HybridFileCache: { Enabled: true, BuildMode: { Enabled: true, InvalidateMode: "both", SupportedExtensions: [
    ".json"] }, PreviewMode: { Enabled: false, CacheScene: false, CachePrefab: false, CacheUuidExtension: false,
    InvalidateMode: "commitId", SupportedExtensions: [".json"] } } }, Gameplay: { StartAdAtLevel: 1,
    MaxRescueCount: 1, Tutorial: { Enabled: true, ForceUseTutorial: false } }, Firebase: { Enabled: false,
    Options: { AppId: "", ApiKey: "", ProjectId: "", AuthDomain: "", StorageBucket: "", MeasurementId: "",
    MessagingSenderId: "" }, Services: { Analytics: { Enabled: false }, Performance: { Enabled: false },
    RemoteConfig: { Enabled: false } } }, Analytics: { Enabled: true, GoogleAnalytics: { Enabled: true,
    ConsoleLog: false }, ClarityAnalytics: { Enabled: false, ConsoleLog: false, ScreenshotCanvas: { Interval: 1500,
    ByEvent: ["APP_READY", "PAGE_VIEW", "BUTTON_CLICK", "AD_SHOWING", "LEVEL_START", "LEVEL_END"] } },
    FirebaseAnalytics: { Enabled: false, ConsoleLog: false }, FacebookAnalytics: { Prefix: "fba", Enabled: false,
    ConsoleLog: false } }, PerformanceMonitor: { CoreFlows: false, EngineFlows: false, GameSDKFlows: false,
    LoadResources: false, FpsTracking: { Enabled: false, TrackingDuration: 60, TrackingInterval: 10 } },
    RemoteConfig: { Enabled: false, Options: { ForceReloadGame: false, FetchIntervalInSeconds: 300 },
    ServiceType: "mockup", DefaultConfigId: "default", SupportedDataTypes: ["Ludex", "Gameplay"], MockupConfig: {
    Enabled: true }, SelfHostedConfig: { Enabled: false, AppId: "", ApiKey: "", ApiUrl: "" } }, Network: {
    MaximumRequest: 6, Timeout: 15e3, Retries: 3 }, Leaderboards: { Enabled: true, LeaderboardList: [] },
    Notification: { Enabled: false, ApiUrl: "https://notifications.sunstudio.io" }, DailyRewards: { Enabled: false,
    MaxDays: 7, MockTime: 0, CheckInterrupt: false }, Mockup: { Ads: { Enabled: false, ErrorRate: 5,
    GiphyApiKey: "VmjHIRsfrwCAssDS4mDo9DoImxJm1lLM", SafeAreaBottom: 0 }, Match: { Enabled: false, ErrorRate: 5,
    PlayerInfo: { Id: "player-mock", Name: "Player Mock", Photo: "", Signature: "" }, OpponentInfo: {
    Id: "opponent-mock", Name: "Opponent Mock", Photo: "", Signature: "" } }, GameSDK: { SlowAPI: { Enabled: false,
    ErrorRate: 5, StartDelay: 1e3, InitialDelay: 1e3, PlayerDataDelay: 1e3 }, Context: { Enabled: false },
    Player: { SubscribeBot: { Enabled: false, CanSubscribeBot: true }, ConnectedPlayers: { Enabled: false,
    ErrorRate: 5, RandomDelayMs: 1e3, NumOfPlayers: 3 } }, AddShortcut: { Enabled: false, CanCreateShortcut: true },
    Tournament: { Enabled: false, ErrorRates: 5, RandomDelayMs: 1e3, NumOfTournament: { Normal: 10, HostPage: 2 } },
    Payments: { Enabled: false, ErrorRates: 5, RandomDelayMs: 1e3, Products: [] } }, Profile: { Enabled: false,
    ErrorRate: 5, RandomDelayMs: 1e3, AvatarUrl: "https://picsum.photos/seed/%1/300/300", RandomNameApiKey: "\
a1f7164dc9d2468b953aef67b0a19355" }, Leaderboards: { Enabled: false, MinScore: 10, MaxScore: 100, ErrorRate: 5,
    NumOfLeaders: { Min: 10, Max: 50 }, DefaultLimit: 60, RandomDelayMs: 1e3 } }, Debugger: { Console: {
    Enabled: true, UseGroup: true, UseInGameConsole: false }, Profiler: { Enabled: false }, EventLogging: {
    Enabled: false }, CanvasRecorder: { Enabled: false, OnlyCore: false, PanelExpanded: false, Options: {
    Type: "png", Quality: 0.85, RecordFps: 60, SyncFps: true } }, MonitorError: { Enabled: false, ApiKey: "",
    Service: "BugSnag", TrackUser: false, TrackPerformance: false, FilterErrors: { Codes: { Accepted: [],
    Ignored: ["USER_INPUT", "NETWORK_FAILURE"] }, Messages: { Accepted: [], Ignored: ["Load image fa\
iled"] } }, Feedback: false }, ListPlayerDevIds: ["0000"], InputRecorder: { Enabled: false, Logging: true,
    PlaybackDelay: 0, TimeScale: 1, UseVisualizer: true, SkipInactivity: { Enabled: true, MinTime: 3e3 },
    MouseEvents: { mousedown: true, mouseup: true, mousemove: true, mouseenter: true, mouseleave: true,
    mouseout: true, mouseover: true } } }, AdaptivePerformance: { Enabled: false, Quality: { Min: 1,
    Max: 2, AdjustStep: 0.1 }, Options: { FpsThreshold: 48, CheckInterval: 2e3, AutoUpgradeQuality: true,
    OnlyUpdateWhenSwitchScene: false }, TrackingSceneNames: ["GameScene"] }, FrameCapture: { Enabled: true,
    Options: { Quality: 0.85, RenderType: "jpeg", UseBlobIfPossible: true, FallbackWithWideframe: "D\
efault" } }, Auth: { Enabled: true }, Audio: { Enabled: true }, Match: { Enabled: true }, Player: { Enabled: true },
    Profile: { Enabled: true }, Context: { Enabled: true }, Missions: { Enabled: false } };
  }
});

// <define:__GAME_SDK_CONFIG__>
var define_GAME_SDK_CONFIG_default;
var init_define_GAME_SDK_CONFIG = __esm({
  "<define:__GAME_SDK_CONFIG__>"() {
    define_GAME_SDK_CONFIG_default = { AllowWithoutSDK: true, UseNameGenerator: true, MSGames: { LoginOnStart: false,
    MaxLoginAttemptsPerDay: 1, DevPlaygroundAppId: "9p630z8prmnx" } };
  }
});

// extensions/ludex/libs/common/console.ts
var wc;
var init_console = __esm({
  "extensions/ludex/libs/common/console.ts"() {
    "use strict";
    wc = window.console;
    if (false) {
      wc.debug = () => {
      };
    }
    if (false) {
      wc.group = wc.groupEnd = wc.groupCollapsed = wc.info;
    }
    if (false) {
      wc.info = wc.log = wc.dir = wc.warn = wc.error = wc.debug = wc.table = wc.trace = wc.group = wc.
      groupEnd = wc.groupCollapsed = () => {
      };
    }
  }
});

// extensions/ludex/libs/common/track-events.ts
var wev, listeners, originalAddEventListener, MAX_LISTENERS_SIZE;
var init_track_events = __esm({
  "extensions/ludex/libs/common/track-events.ts"() {
    "use strict";
    wev = window;
    listeners = {};
    wev.__listeners = listeners;
    originalAddEventListener = wev.addEventListener.bind(wev);
    MAX_LISTENERS_SIZE = 100;
    wev.addEventListener = (name2, listener, options) => {
      if (!listeners[name2]) {
        listeners[name2] = [];
      }
      if (listeners[name2].length >= MAX_LISTENERS_SIZE) {
        listeners[name2].length = 0;
      }
      listeners[name2].push(listener);
      originalAddEventListener(name2, listener, options);
    };
  }
});

// extensions/ludex/libs/common/track-errors.ts
function disableSimpleTrackErrors() {
  const list = ["error", "unhandledrejection"];
  const listeners2 = wer.__listeners ?? [];
  for (const name2 of list) {
    if (!listeners2[name2]?.[0]) continue;
    wer.removeEventListener(name2, wer.__listeners[name2].shift());
  }
}
function errorHandler(error) {
  if (!wer.__errorQueue) return;
  if (wer.__errorQueue.length >= MAX_QUEUE_SIZE) {
    wer.__errorQueue.length = 0;
  }
  wer.__errorQueue.push(typeof error === "string" ? new Error(error) : error);
}
function init() {
  wer.addEventListener("error", (event) => {
    errorHandler(event.error);
  });
  wer.addEventListener("unhandledrejection", (event) => {
    errorHandler(event.reason);
  });
}
var wer, MAX_QUEUE_SIZE;
var init_track_errors = __esm({
  "extensions/ludex/libs/common/track-errors.ts"() {
    "use strict";
    wer = window;
    wer.__errorQueue = [];
    MAX_QUEUE_SIZE = 100;
    __name(disableSimpleTrackErrors, "disableSimpleTrackErrors");
    __name(errorHandler, "errorHandler");
    __name(init, "init");
    wer.addEventListener("load", () => {
      disableSimpleTrackErrors();
      init();
    });
  }
});

// extensions/ludex/libs/progress.ts
var clamp, sdk;
var init_progress = __esm({
  "extensions/ludex/libs/progress.ts"() {
    "use strict";
    clamp = /* @__PURE__ */ __name((value) => Math.max(0, Math.min(100, ~~value)), "clamp");
    sdk = null;
    window.__sdkLoad = {
      percent: 0,
      ensure(minPercent) {
        if (this.percent > minPercent) return;
        const clamped = clamp(minPercent);
        if (clamped <= this.percent) {
          console.debug("[Progress] set: skipped (clamped <= current)", { clamped, currentPercent: this.
          percent });
          return;
        }
        this.percent = clamped;
        if (!sdk) sdk = GameSDK;
        if (!sdk) return;
        sdk.setLoadingProgress(clamped);
      }
    };
  }
});

// extensions/ludex/libs/init-core.ts
var AVG_LOAD_MS, MAX_RETRY, RETRY_DELAY, MIN_INTERVAL, SLOW_LOADING_MS, GA_TIMEOUT_MS, INITIAL_PERCENT,
TARGET_PERCENT, SDK_WAIT_MS, SDK_MAX_WAIT, progressTimer, stopProgressTimer, startProgressTimer, logError,
MARK_NAME, monitorGameSDKFlows, logAnalyticsEvent, slowLoadingTimer, startSlowLoadingCheck, clearSlowLoadingCheck,
isGAScriptInit, loadGAScript, initGoogleAnalytics, processGoogleAnalytics, updateUserProperties, finalizeAnalyticsInitialization,
initGameSDK, waitForGameSDKAndInitialize;
var init_init_core = __esm({
  "extensions/ludex/libs/init-core.ts"() {
    "use strict";
    AVG_LOAD_MS = 5 * 1e3;
    MAX_RETRY = 5;
    RETRY_DELAY = 2e3;
    MIN_INTERVAL = 50;
    SLOW_LOADING_MS = 8e3;
    GA_TIMEOUT_MS = 1e4;
    INITIAL_PERCENT = 5;
    TARGET_PERCENT = 100;
    SDK_WAIT_MS = 50;
    SDK_MAX_WAIT = 1e4;
    window.__errorQueue = window.__errorQueue ?? [];
    progressTimer = null;
    stopProgressTimer = /* @__PURE__ */ __name(() => {
      if (progressTimer) clearInterval(progressTimer);
      progressTimer = null;
    }, "stopProgressTimer");
    startProgressTimer = /* @__PURE__ */ __name((target) => {
      if (true) return;
      const { percent: currentPercent } = window.__sdkLoad;
      const remain = target - currentPercent;
      if (remain <= 0) return;
      const calculatedInterval = AVG_LOAD_MS / remain;
      const interval = Math.max(calculatedInterval, MIN_INTERVAL);
      progressTimer = setInterval(() => {
        const { percent: currentPercent2 } = window.__sdkLoad;
        const nextPercent = currentPercent2 + 1;
        if (nextPercent > target) {
          stopProgressTimer();
          return;
        }
        window.__sdkLoad.ensure(nextPercent);
      }, interval);
    }, "startProgressTimer");
    logError = /* @__PURE__ */ __name((error) => {
      const errorInfo = Ludex?.Utils.Function.toError(error);
      if (!errorInfo?.message) return;
      logAnalyticsEvent("app_crash_handle", { error: errorInfo.message });
      window.__errorQueue?.push(errorInfo);
      codex?.monitorError?.sendException(errorInfo);
    }, "logError");
    MARK_NAME = "GameSDK Initialize";
    monitorGameSDKFlows = /* @__PURE__ */ __name(() => {
      if (false) return;
      const originalTime = console.time;
      const originalTimeEnd = console.timeEnd;
      const originalTimeLog = console.timeLog;
      const skipMark = /* @__PURE__ */ __name((args) => {
        if (args[0] === MARK_NAME) {
          return true;
        }
        return false;
      }, "skipMark");
      console.time = (...args) => {
        if (skipMark(args)) return;
        originalTime.call(console, ...args);
      };
      console.timeEnd = (...args) => {
        if (skipMark(args)) return;
        originalTimeEnd.call(console, ...args);
      };
      console.timeLog = (...args) => {
        if (skipMark(args)) return;
        originalTimeLog.call(console, ...args);
      };
    }, "monitorGameSDKFlows");
    logAnalyticsEvent = /* @__PURE__ */ __name((eventName, eventData) => {
      if (!eventName) return;
      codex?.analytics?.event(eventName, eventData);
    }, "logAnalyticsEvent");
    slowLoadingTimer = null;
    startSlowLoadingCheck = /* @__PURE__ */ __name(() => {
      clearSlowLoadingCheck();
      slowLoadingTimer = setTimeout(() => {
        const { percent: currentPercent } = window.__sdkLoad;
        if (currentPercent <= INITIAL_PERCENT) {
          GameSDK?.extra?.displayWarnLoading?.(true);
        }
      }, SLOW_LOADING_MS);
    }, "startSlowLoadingCheck");
    clearSlowLoadingCheck = /* @__PURE__ */ __name(() => {
      if (slowLoadingTimer !== null) {
        clearTimeout(slowLoadingTimer);
        slowLoadingTimer = null;
      }
      GameSDK?.extra?.displayWarnLoading?.(false);
    }, "clearSlowLoadingCheck");
    isGAScriptInit = false;
    loadGAScript = /* @__PURE__ */ __name(async (tagId) => {
      if (isGAScriptInit) return;
      isGAScriptInit = true;
      const gaScript = document.createElement("script");
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
      gaScript.async = true;
      return new Promise((resolve, reject) => {
        let isHandled = false;
        let timeout = null;
        let loadHandler = null;
        let errorHandler2 = null;
        const cleanup = /* @__PURE__ */ __name(() => {
          if (timeout !== null) clearTimeout(timeout);
          if (loadHandler) gaScript.removeEventListener("load", loadHandler);
          if (errorHandler2) gaScript.removeEventListener("error", errorHandler2);
        }, "cleanup");
        timeout = setTimeout(() => {
          if (isHandled) return;
          isHandled = true;
          cleanup();
          reject(new Error(`Timeout loading GA script after ${GA_TIMEOUT_MS / 1e3}s`));
        }, GA_TIMEOUT_MS);
        loadHandler = /* @__PURE__ */ __name(() => {
          if (isHandled) return;
          isHandled = true;
          cleanup();
          resolve();
        }, "loadHandler");
        errorHandler2 = /* @__PURE__ */ __name(() => {
          if (isHandled) return;
          isHandled = true;
          cleanup();
          reject(new Error("Failed to load GA script"));
        }, "errorHandler");
        gaScript.addEventListener("load", loadHandler);
        gaScript.addEventListener("error", errorHandler2);
        document.head.appendChild(gaScript);
      });
    }, "loadGAScript");
    initGoogleAnalytics = /* @__PURE__ */ __name((userId, entryPoint, tagIds) => {
      try {
        if (typeof window.gtag !== "function") return;
        const entryPointData2 = GameSDK?.getEntryPointData() || {};
        const {
          fbig_ad_id,
          fbig_adset_id,
          fbig_campaign_id,
          fb_instant_game_adset_id,
          fb_instant_game_ad_id,
          fb_instant_game_campaign_id
        } = entryPointData2;
        const ad_id = fbig_ad_id ?? fb_instant_game_ad_id ?? void 0;
        const adset_id = fbig_adset_id ?? fb_instant_game_adset_id ?? void 0;
        const campaign_id = fbig_campaign_id ?? fb_instant_game_campaign_id ?? void 0;
        window.dataLayer = window.dataLayer || [];
        window.gtag("js", /* @__PURE__ */ new Date());
        window.gtag("set", {
          client_id: `100.${userId}`,
          user_id: userId,
          send_page_view: false
        });
        const buildVersion = 9;
        for (const tagId of tagIds) {
          window.gtag("config", tagId, {
            cookie_flags: "SameSite=None;Secure",
            build: buildVersion,
            medium: entryPoint,
            campaign: campaign_id,
            groups: "GA"
          });
        }
        const params = Ludex?.Utils?.Browser?.getQueryParams() || {};
        const trafficSourceDetail = params.entry_point || entryPoint;
        const initialUserProperties = {
          user_id: userId,
          player_id: userId,
          app_version: buildVersion,
          traffic_source: entryPoint,
          traffic_source_detail: trafficSourceDetail,
          ad_id,
          adset_id,
          campaign_id,
          new_user: void 0,
          coins: void 0,
          score: void 0
        };
        window.gtag("set", "user_properties", initialUserProperties);
      } catch (error) {
        logError(error);
      }
    }, "initGoogleAnalytics");
    processGoogleAnalytics = /* @__PURE__ */ __name(async () => {
      const tagIdsRaw = null;
      let tagList = [];
      let primaryTagId;
      try {
        if (!tagIdsRaw) {
          console.warn("GA_TAGS_IDS not defined, skipping GA initialization.");
          return;
        }
        tagList = tagIdsRaw.split(" ").filter(Boolean);
        if (tagList.length === 0) {
          tagList.push("G-3ZG4F3ZNXH");
        }
        primaryTagId = tagList[0];
        if (!primaryTagId || primaryTagId === "null") {
          throw new Error("Primary GA Tag ID is invalid.");
        }
        await loadGAScript(primaryTagId);
        const userId = GameSDK?.player?.getID();
        if (!userId) {
          console.warn("User ID not available from GameSDK when initializing GA.");
        }
        let entryPoint = "no_entry";
        if (GameSDK) {
          try {
            entryPoint = await GameSDK.getEntryPointAsync() ?? entryPoint;
          } catch (error) {
            console.warn("Failed to get entry point asynchronously.", error);
          }
        } else {
          console.warn("GameSDK not available to get entry point.");
        }
        initGoogleAnalytics(userId || "unknown_user", entryPoint, tagList);
      } catch (error) {
        logError(error);
      } finally {
        finalizeAnalyticsInitialization();
      }
    }, "processGoogleAnalytics");
    updateUserProperties = /* @__PURE__ */ __name(() => {
      try {
        if (!codex?.player || typeof window.gtag !== "function") {
          console.warn("Cannot update user properties: codex.player or gtag not available.");
          return;
        }
        const score2 = codex.player.getBestScore() ?? 0;
        const coins2 = codex.player.getGameData()?.coins ?? 0;
        const isNewUser = codex.player.isFirstSession() ?? void 0;
        const entryPointData2 = GameSDK?.getEntryPointData() || {};
        const { content, notif_id } = entryPointData2;
        const propertiesToUpdate = {
          new_user: isNewUser,
          coins: coins2,
          score: score2
        };
        if (content || notif_id) {
          propertiesToUpdate.traffic_source_detail = content ?? `notif_${notif_id}`;
        }
        const filteredProps = Object.entries(propertiesToUpdate).filter(([_, value]) => value !== void 0).
        reduce(
          (obj, [key, value]) => {
            obj[key] = value;
            return obj;
          },
          {}
        );
        if (Object.keys(filteredProps).length > 0) {
          window.gtag("set", "user_properties", filteredProps);
        }
      } catch (error) {
        logError(error);
      }
    }, "updateUserProperties");
    finalizeAnalyticsInitialization = /* @__PURE__ */ __name(() => {
      try {
        const { Events: Events11, Plugins: Plugins3 } = Ludex;
        const { Events: AnalyticsEvents2 } = Plugins3.Analytics ?? {};
        if (!AnalyticsEvents2) return;
        logAnalyticsEvent(AnalyticsEvents2.APP_LAUNCH);
        codex.event.catchUp(Events11.GAME_SDK_READY, () => {
          logAnalyticsEvent(AnalyticsEvents2.APP_INITIALIZED);
        });
        codex.event.catchUp(Ludex.Events.PLAYER_INFO_LOADED, updateUserProperties);
      } catch (error) {
        logError(error);
      } finally {
        codex.event.emit(Ludex.Events.ANALYTICS_READY);
      }
    }, "finalizeAnalyticsInitialization");
    initGameSDK = /* @__PURE__ */ __name(async (retryCount = 0) => {
      try {
        console.time(MARK_NAME);
        startSlowLoadingCheck();
        await GameSDK.initializeAsync();
        console.timeLog(MARK_NAME, "GameSDK initialized");
        clearSlowLoadingCheck();
        startProgressTimer(TARGET_PERCENT);
        const gaPromise = processGoogleAnalytics();
        if (false) {
          await gaPromise;
        }
        codex.event.emit(Ludex.Events.GAME_SDK_READY);
      } catch (error) {
        clearSlowLoadingCheck();
        stopProgressTimer();
        if (retryCount >= MAX_RETRY) {
          logError(error);
          return;
        }
        console.warn(`GameSDK initialize failed (Attempt ${retryCount + 1}), retrying in ${RETRY_DELAY /
        1e3}s...`);
        setTimeout(() => initGameSDK(retryCount + 1), RETRY_DELAY);
      } finally {
        console.timeEnd(MARK_NAME);
      }
    }, "initGameSDK");
    waitForGameSDKAndInitialize = /* @__PURE__ */ __name(() => {
      let elapsedTime = 0;
      const check = /* @__PURE__ */ __name(() => {
        if ("GameSDK" in window) {
          initGameSDK();
        } else if (elapsedTime < SDK_MAX_WAIT) {
          elapsedTime += SDK_WAIT_MS;
          setTimeout(check, SDK_WAIT_MS);
        } else {
          logError(new Error(`GameSDK not found after ${SDK_MAX_WAIT / 1e3}s`));
        }
      }, "check");
      check();
    }, "waitForGameSDKAndInitialize");
    monitorGameSDKFlows();
    waitForGameSDKAndInitialize();
  }
});

// extensions/ludex/libs/polyfill/navigator.ts
var getGamepads;
var init_navigator = __esm({
  "extensions/ludex/libs/polyfill/navigator.ts"() {
    "use strict";
    getGamepads = window.navigator.getGamepads;
    window.navigator.getGamepads = () => {
      try {
        return getGamepads();
      } catch (e) {
        return [];
      }
    };
  }
});

// extensions/ludex/libs/polyfill/performance.ts
var init_performance = __esm({
  "extensions/ludex/libs/polyfill/performance.ts"() {
    "use strict";
    window.performance = window.performance || {};
    if (typeof performance.mark !== "function" || typeof performance.measure !== "function") {
      window.performance = {
        // @ts-expect-error - Provide empty implementations for mark
        mark: /* @__PURE__ */ __name(() => {
        }, "mark"),
        // @ts-expect-error - Provide empty implementations for measure
        measure: /* @__PURE__ */ __name(() => {
        }, "measure")
      };
    }
    performance.mark("load-start");
  }
});

// extensions/ludex/libs/cocos/browser.ts
var noToolbar, noVConsole, initUtils, setupNoToolbar, setupNoVConsole, MARK_NAMES, monitorEngineFlows;
var init_browser = __esm({
  "extensions/ludex/libs/cocos/browser.ts"() {
    "use strict";
    noToolbar = "0";
    noVConsole = "0";
    initUtils = /* @__PURE__ */ __name(() => {
      if (!URLSearchParams) return;
      const urlParams = new URLSearchParams(window.location.search);
      noToolbar = urlParams.get("no-toolbar") || noToolbar;
      noVConsole = urlParams.get("no-vconsole") || noVConsole;
      noToolbar === "1" && setupNoToolbar();
      noVConsole === "1" && setupNoVConsole();
    }, "initUtils");
    setupNoToolbar = /* @__PURE__ */ __name(() => {
      const wait = setInterval(() => {
        const toolbar = document.querySelector(".toolbar");
        if (!(toolbar instanceof HTMLDivElement)) return;
        clearInterval(wait);
        toolbar.style.display = "none";
      }, 100);
    }, "setupNoToolbar");
    setupNoVConsole = /* @__PURE__ */ __name(() => {
      Object.defineProperty(window, "VConsole", {
        value: void 0,
        writable: false,
        configurable: false
      });
      const script = document.querySelector('script[src="/node_modules/vconsole/dist/vconsole.min.js\
"]');
      if (!script) return;
      script.remove();
    }, "setupNoVConsole");
    initUtils();
    MARK_NAMES = ["Init Base", "Init Infrastructure", "Init SubSystem", "Init Project"];
    monitorEngineFlows = /* @__PURE__ */ __name(() => {
      if (false) return;
      const originalTime = console.time;
      const originalTimeEnd = console.timeEnd;
      const originalTimeLog = console.timeLog;
      const skipMark = /* @__PURE__ */ __name((args) => {
        if (MARK_NAMES.includes(args[0])) {
          return true;
        }
        return false;
      }, "skipMark");
      console.time = (...args) => {
        if (skipMark(args)) return;
        originalTime.call(console, ...args);
      };
      console.timeEnd = (...args) => {
        if (skipMark(args)) return;
        originalTimeEnd.call(console, ...args);
      };
      console.timeLog = (...args) => {
        if (skipMark(args)) return;
        originalTimeLog.call(console, ...args);
      };
    }, "monitorEngineFlows");
    monitorEngineFlows();
  }
});

// extensions/ludex/libs/cocos/init.ts
var initCocos, injectFlushSystem, waitSystemForInitCocos;
var init_init = __esm({
  "extensions/ludex/libs/cocos/init.ts"() {
    "use strict";
    initCocos = /* @__PURE__ */ __name(() => {
      System.register(["../application.js"], () => {
        let Application2;
        function topLevelImport(url) {
          return System.import(url);
        }
        __name(topLevelImport, "topLevelImport");
        function execute() {
          const canvas = document.getElementById("GameCanvas");
          const $p = canvas?.parentElement;
          if (!$p) {
            setTimeout(execute, 300);
            return;
          }
          canvas.style.position = "relative";
          const bcr = $p.getBoundingClientRect();
          canvas.width = bcr.width;
          canvas.height = bcr.height;
          const application = new Application2();
          topLevelImport("cc").then((engine) => {
            console.warn("Cocos loaded");
            return new Promise((resolve) => {
              codex.event.catchUp(Ludex.Events.CORE_BOOTING, () => {
                window.__sdkLoad.ensure(20);
                console.warn("Cocos initializing");
                resolve(application.init(engine));
              });
            });
          }).then(() => {
            window.__sdkLoad.ensure(30);
            console.warn("Cocos application starting");
            return application.start();
          }).then(() => {
            window.__sdkLoad.ensure(40);
            console.warn("Cocos application started");
          }).catch((error) => {
            const err = Ludex.Utils.Function.toError(error);
            codex.monitorError?.sendException(err);
          });
        }
        __name(execute, "execute");
        return {
          setters: [
            (applicationJs) => {
              Application2 = applicationJs.Application;
            }
          ],
          execute
        };
      });
    }, "initCocos");
    injectFlushSystem = /* @__PURE__ */ __name(() => {
      const S9 = System;
      const originalImport = S9.import;
      const originalRegister = S9.register;
      const deleteModule = /* @__PURE__ */ __name((name2) => {
        setTimeout(() => S9.delete(name2), 8e3);
      }, "deleteModule");
      S9.import = (...args) => {
        deleteModule(args[0]);
        return originalImport.call(S9, ...args);
      };
      S9.register = (...args) => {
        const modules = Array.isArray(args[0]) ? args[0] : [args[0]];
        modules.forEach(deleteModule);
        return originalRegister.call(S9, ...args);
      };
    }, "injectFlushSystem");
    waitSystemForInitCocos = setInterval(() => {
      if (!("System" in window)) return;
      clearInterval(waitSystemForInitCocos);
      injectFlushSystem();
      initCocos();
    }, 5);
  }
});

// extensions/ludex/libs/platforms/google-analytics.ts
function trace() {
  const args = arguments;
  if (args[0] === "event") {
    if (typeof args[2] !== "object") {
      args[2] = {};
    }
    args[2].build = 9;
    args[2].send_to = "GA";
    args[2].extend_session = 1;
  }
  window.dataLayer.push(args);
}
function addGoogleAnalyticsScript() {
  try {
    const tagIds = null;
    if (!tagIds) return;
    const GA = tagIds.split(" ")[0];
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = `https://www.googletagmanager.com/gtag/js?id=${GA}`;
    link.as = "script";
    document.head.appendChild(link);
  } catch (error) {
    console.warn("Error adding preload google analytics script", error);
  }
}
var init_google_analytics = __esm({
  "extensions/ludex/libs/platforms/google-analytics.ts"() {
    "use strict";
    window.dataLayer = window.dataLayer || [];
    __name(trace, "trace");
    window.gtag = trace;
    __name(addGoogleAnalyticsScript, "addGoogleAnalyticsScript");
    addGoogleAnalyticsScript();
  }
});

// extensions/ludex/libs/empty-script.ts
var empty_script_exports = {};
__export(empty_script_exports, {
  default: () => empty_script_default
});
var empty_script_default;
var init_empty_script = __esm({
  "extensions/ludex/libs/empty-script.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    empty_script_default = null;
  }
});

// extensions/ludex/src/game-sdk/sdk/Context.ts
var _Context, Context, Context_default;
var init_Context = __esm({
  "extensions/ludex/src/game-sdk/sdk/Context.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    _Context = class _Context {
      adapter$;
      extra$;
      currentContextID$ = null;
      currentContextType$ = "SOLO";
      currentContextPlayers$ = [];
      chooseAsyncPopup$ = null;
      createAsyncPopup$ = null;
      switchAsyncPopup$ = null;
      contextIdsByCreate$;
      contextIdsByChoose$ = [];
      playerIdsInContexts$;
      constructor(adapter) {
        this.adapter$ = adapter;
        this.extra$ = adapter.extra;
      }
      setCurrentContextId(contextId2) {
        this.checkSameContext$(contextId2);
        this.currentContextID$ = contextId2;
        this.currentContextType$ = "THREAD";
      }
      initContextInfo(contextId2, contextType2) {
        const { Array: A10, String: S9 } = Ludex.Utils;
        this.contextIdsByCreate$ = {};
        this.playerIdsInContexts$ = {};
        this.contextIdsByChoose$ = A10.fillWith(10, () => S9.generateObjectId());
        if (!contextId2 || !contextType2) return;
        if (["SOLO", "THREAD", "POST", "GROUP"].indexOf(contextType2) < 0) {
          console.warn(`Invalid context type: ${contextType2}`);
          return;
        }
        this.currentContextID$ = contextId2;
        this.currentContextType$ = contextType2;
      }
      getID() {
        return this.currentContextID$;
      }
      getType() {
        return this.currentContextType$;
      }
      async loadSwitchAsyncPopup$() {
        if (this.switchAsyncPopup$) return;
        const SwitchAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof SwitchAsyncPopup !== "function") return;
        this.switchAsyncPopup$ = new SwitchAsyncPopup();
        await this.switchAsyncPopup$.setupTemplate();
      }
      async loadChooseAsyncPopup$() {
        if (this.chooseAsyncPopup$) return;
        const ChooseAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof ChooseAsyncPopup !== "function") return;
        this.chooseAsyncPopup$ = new ChooseAsyncPopup();
        await this.chooseAsyncPopup$.setupTemplate();
      }
      async loadCreateAsyncPopup$() {
        if (this.createAsyncPopup$) return;
        const CreateAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof CreateAsyncPopup !== "function") return;
        this.createAsyncPopup$ = new CreateAsyncPopup();
        await this.createAsyncPopup$.setupTemplate();
      }
      async switchAsync(contextId2, switchSilentlyIfSolo = false) {
        this.extra$.checkPopupShown();
        await this.extra$.awaitRandomDelay();
        this.validateSwitchAsyncContextId$(contextId2);
        if (contextId2 === "SOLO" && switchSilentlyIfSolo) {
          this.currentContextID$ = null;
          this.currentContextType$ = "SOLO";
          this.updatePlayers$([]);
          return;
        }
        await this.loadSwitchAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.switchAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.switchAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.switchAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.switchAsyncPopup$.show(contextId2);
          this.extra$.isPopupShown = true;
        });
        this.currentContextID$ = contextId2;
        this.currentContextType$ = "THREAD";
        this.createPlayerIdsInContext$(contextId2, 10);
        const playerIds = this.playerIdsInContexts$[contextId2];
        const players = playerIds.map((playerId2) => this.createPlayerInfo$(playerId2));
        this.updatePlayers$(players);
      }
      async chooseAsync(_options) {
        this.extra$.checkPopupShown();
        await this.extra$.awaitRandomDelay();
        await this.loadChooseAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.chooseAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.chooseAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.chooseAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.chooseAsyncPopup$.show();
          this.extra$.isPopupShown = true;
        });
        const rand = Math.floor(Math.random() * this.contextIdsByChoose$.length);
        const contextId2 = this.contextIdsByChoose$[rand];
        this.checkSameContext$(contextId2);
        this.currentContextID$ = contextId2;
        this.currentContextType$ = "THREAD";
        this.createPlayerIdsInContext$(contextId2, 2);
        const playerIds = this.playerIdsInContexts$[contextId2];
        const players = playerIds.map((playerId2) => this.createPlayerInfo$(playerId2));
        this.updatePlayers$(players);
      }
      async createAsync(playerId2) {
        this.extra$.checkPopupShown();
        await this.extra$.awaitRandomDelay();
        await this.validateCreateAsyncPlayerId$(playerId2);
        await this.loadCreateAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.createAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.createAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.createAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.createAsyncPopup$.show(playerId2);
          this.extra$.isPopupShown = true;
        });
        if (!this.contextIdsByCreate$[playerId2]) {
          const {
            Utils: { String: S9 }
          } = Ludex;
          this.contextIdsByCreate$[playerId2] = S9.generateObjectId();
        }
        const contextId2 = this.contextIdsByCreate$[playerId2];
        this.checkSameContext$(contextId2);
        this.currentContextID$ = contextId2;
        this.currentContextType$ = "THREAD";
        const player = this.createPlayerInfo$(playerId2);
        this.updatePlayers$([player]);
      }
      handleOnYes$ = /* @__PURE__ */ __name((resolve) => () => {
        this.extra$.isPopupShown = false;
        resolve(true);
      }, "handleOnYes$");
      handleOnNo$ = /* @__PURE__ */ __name((reject) => () => {
        this.extra$.isPopupShown = false;
        try {
          this.extra$.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      }, "handleOnNo$");
      async getPlayersAsync() {
        await this.extra$.awaitRandomDelay();
        return this.currentContextPlayers$;
      }
      createPlayerIdsInContext$(contextId2, maxPlayers) {
        if (!this.playerIdsInContexts$[contextId2]) {
          const { Array: A10, String: S9 } = Ludex.Utils;
          const rand = Math.floor(Math.random() * maxPlayers);
          const playerIds = A10.fillWith(rand, () => S9.generateObjectId());
          this.playerIdsInContexts$[contextId2] = playerIds;
        }
        return this.playerIdsInContexts$[contextId2];
      }
      createPlayerInfo$(playerId2) {
        return {
          getID: /* @__PURE__ */ __name(() => playerId2, "getID"),
          getName: /* @__PURE__ */ __name(() => `Player ${playerId2}`, "getName"),
          getPhoto: /* @__PURE__ */ __name(() => "", "getPhoto")
        };
      }
      updatePlayers$(players) {
        if (this.currentContextType$ === "SOLO") {
          this.currentContextPlayers$ = [];
          return;
        }
        this.currentContextPlayers$ = players;
      }
      checkSameContext$(contextId2) {
        if (this.currentContextID$ === contextId2) {
          this.extra$.exceptionSameContext();
        }
      }
      async validateCreateAsyncPlayerId$(playerId2) {
        if (!playerId2 || Array.isArray(playerId2)) {
          const message2 = "Client does not support no player IDS or multiple player IDs yet" /* NOT_NO_OR_MULTIPLE_IDS */;
          this.extra$.exceptionClientUnsupportedOperation(message2);
        }
        if (!Ludex.Utils.Valid.isString(playerId2)) {
          const message2 = `Array of type String contained a value of another type: ${playerId2}`;
          this.extra$.exceptionInvalidParam(message2);
        }
        if (playerId2 === GameSDK.player.getID()) {
          const message2 = "At least one player id besides the current player must be provided." /* ONE_BESIDES_CURRENT_PLAYER_ID */;
          this.extra$.exceptionInvalidParam(message2);
        }
        const connectedPlayers = await GameSDK.player.getConnectedPlayersAsync();
        const providedIdInConnectedPlayers = connectedPlayers.some(
          (connectedPlayer) => connectedPlayer.getID() === playerId2
        );
        if (providedIdInConnectedPlayers) return;
        const message = `Provided ID ${playerId2} is not a connected player of the current player.`;
        this.extra$.exceptionInvalidParam(message);
      }
      validateSwitchAsyncContextId$(contextId2) {
        this.checkSameContext$(contextId2);
        if (Ludex.Utils.Valid.isString(contextId2)) return;
        const message = "Client requires update to support this operation" /* REQUIRE_UPDATE */;
        this.extra$.exceptionClientUnsupportedOperation(message);
      }
    };
    __name(_Context, "Context");
    Context = _Context;
    Context_default = Context;
  }
});

// extensions/ludex/src/game-sdk/exceptions/SDKCommonError.ts
var _SDKCommonError, SDKCommonError, SDKCommonError_default;
var init_SDKCommonError = __esm({
  "extensions/ludex/src/game-sdk/exceptions/SDKCommonError.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    _SDKCommonError = class _SDKCommonError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
      }
    };
    __name(_SDKCommonError, "SDKCommonError");
    SDKCommonError = _SDKCommonError;
    SDKCommonError_default = SDKCommonError;
  }
});

// extensions/ludex/src/game-sdk/elements/loading.html
var loading_default;
var init_loading = __esm({
  "extensions/ludex/src/game-sdk/elements/loading.html"() {
    loading_default = "./assets/loading.html";
  }
});

// extensions/ludex/src/game-sdk/elements/TemplateManager.ts
var isTemplateExist, prompts, addTemplate, addLoadingTemplate;
var init_TemplateManager = __esm({
  "extensions/ludex/src/game-sdk/elements/TemplateManager.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_loading();
    isTemplateExist = /* @__PURE__ */ __name((selector) => {
      return !!document.querySelector(selector);
    }, "isTemplateExist");
    prompts = {};
    addTemplate = /* @__PURE__ */ __name(async (config) => {
      const { template, selector } = config;
      if (template in prompts) {
        await prompts[template];
        return document.querySelector(selector);
      }
      const prompt = (await fetch(template)).text();
      prompts[template] = prompt;
      const templateContent = await prompts[template];
      if (!isTemplateExist(selector)) {
        document.body.insertAdjacentHTML("beforeend", templateContent);
      }
      return document.querySelector(selector);
    }, "addTemplate");
    addLoadingTemplate = /* @__PURE__ */ __name(async () => {
      return addTemplate({
        template: loading_default,
        selector: "#loading-screen"
      });
    }, "addLoadingTemplate");
  }
});

// extensions/ludex/src/game-sdk/common/LoadingScreenElement.ts
var LoadingScreenElement_exports = {};
__export(LoadingScreenElement_exports, {
  default: () => LoadingScreenElement_default
});
var displayWarnTimer, _LoadingScreenElement, LoadingScreenElement, LoadingScreenElement_default;
var init_LoadingScreenElement = __esm({
  "extensions/ludex/src/game-sdk/common/LoadingScreenElement.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_TemplateManager();
    _LoadingScreenElement = class _LoadingScreenElement {
      percentage$ = 0;
      loadingElement$ = null;
      constructor() {
        this.setupTemplate$();
      }
      async setupTemplate$() {
        this.loadingElement$ = await addLoadingTemplate();
        if (!this.loadingElement$) return;
        this.loadingElement$.setAttribute("data-clarity-unmask", "true");
        this.updateLoadingStyle$();
        const { percent } = window.__sdkLoad;
        this.setLoadingProgress(percent);
      }
      updateLoadingStyle$() {
        if (!this.loadingElement$) return;
        const logoUrl = "logo-128x128.png";
        const gameIcon = this.loadingElement$.querySelector("#lds-game-icon");
        if (gameIcon && gameIcon instanceof HTMLElement) {
          gameIcon.style.backgroundImage = `url(${logoUrl})`;
          gameIcon.style.backgroundColor = "transparent";
        }
        const gameIconBlur = this.loadingElement$.querySelector("#lds-game-icon-blur");
        if (gameIconBlur && gameIconBlur instanceof HTMLElement) {
          gameIconBlur.style.backgroundImage = `url(${logoUrl})`;
          gameIconBlur.style.backgroundColor = "transparent";
        }
      }
      setLoadingProgress(percentage) {
        if (this.percentage$ >= percentage || !percentage) return;
        this.percentage$ = percentage;
        if (this.percentage$ >= 100) {
          this.percentage$ = 100;
        }
        const loadingPercent = document.getElementById("lds-percent");
        if (!loadingPercent) return;
        loadingPercent.innerHTML = `${percentage}`;
      }
      displayWarnLoading(enable) {
        const warnText = document.getElementById("lds-warn-text");
        if (!warnText) return;
        clearTimeout(displayWarnTimer);
        if (enable) {
          warnText.style.display = "block";
          void warnText.offsetWidth;
          warnText.style.opacity = "0.8";
        } else {
          warnText.style.opacity = "0";
          displayWarnTimer = setTimeout(() => {
            warnText.style.display = "none";
          }, 300);
        }
      }
      removeLoadingElement() {
        if (!this.loadingElement$) return;
        this.loadingElement$.style.opacity = "0";
        setTimeout(() => {
          this.loadingElement$?.remove();
        }, 300);
      }
    };
    __name(_LoadingScreenElement, "LoadingScreenElement");
    LoadingScreenElement = _LoadingScreenElement;
    LoadingScreenElement_default = LoadingScreenElement;
  }
});

// extensions/ludex/src/game-sdk/sdk/Extra.ts
var MAX_WAIT_LUDEX_READY_TIME, _Extra, Extra, Extra_default;
var init_Extra = __esm({
  "extensions/ludex/src/game-sdk/sdk/Extra.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_SDKCommonError();
    MAX_WAIT_LUDEX_READY_TIME = 1e4;
    _Extra = class _Extra {
      adapter$;
      isGuest = false;
      isPopupShown = false;
      loadingElement$ = null;
      constructor(adapter) {
        this.adapter$ = adapter;
      }
      async checkAndSubscribeBotAsync() {
        const canSubscribeBot = await this.adapter$.player.canSubscribeBotAsync();
        if (!canSubscribeBot) return false;
        const { analytics } = codex;
        const {
          Plugins: { Analytics: { Events: Events11 } = {} }
        } = Ludex;
        Events11 && analytics.event(Events11.BOT_SUBSCRIBE_POPUP);
        try {
          await this.waitSDKInitiatedAsync();
          await this.adapter$.player.subscribeBotAsync();
          Events11 && analytics.event(Events11.BOT_SUBSCRIBE, { success: true });
          return true;
        } catch (error) {
          console.warn(error);
          Events11 && analytics.event(Events11.BOT_SUBSCRIBE, { success: false });
          return false;
        }
      }
      async checkAndCreateShortcutAsync() {
        const canCreateShortcut = await this.adapter$.canCreateShortcutAsync();
        if (!canCreateShortcut) return;
        const { analytics } = codex;
        const {
          Plugins: { Analytics: { Events: Events11 } = {} }
        } = Ludex;
        Events11 && analytics.event(Events11.SHORTCUT_CREATE_POPUP);
        try {
          await this.waitSDKInitiatedAsync();
          await this.adapter$.createShortcutAsync();
          Events11 && analytics.event(Events11.SHORTCUT_CREATE, { success: true });
        } catch (error) {
          console.warn(error);
          Events11 && analytics.event(Events11.SHORTCUT_CREATE, { success: false });
        }
      }
      waitSDKInitiatedAsync() {
        const {
          Events: { GAME_SDK_READY }
        } = Ludex;
        return new Promise((resolve) => {
          codex.event.catchUp(GAME_SDK_READY, resolve);
        });
      }
      async waitLudexReadyAsync() {
        let waitTime = 0;
        return new Promise((resolve) => {
          const waitInterval = setInterval(() => {
            if ("Ludex" in window) {
              clearInterval(waitInterval);
              resolve();
              return;
            }
            waitTime += 10;
            if (waitTime > MAX_WAIT_LUDEX_READY_TIME) {
              waitTime = 0;
              console.warn("Ludex is slow to load, please check your network connection.");
            }
          }, 10);
        });
      }
      async createLoadingElement() {
        if (this.loadingElement$) return;
        const LoadingScreenElement2 = (await Promise.resolve().then(() => (init_LoadingScreenElement(), LoadingScreenElement_exports))).
        default;
        if (typeof LoadingScreenElement2 !== "function") return;
        this.loadingElement$ = new LoadingScreenElement2();
      }
      setLoadingElementProgress(progress) {
        if (!this.loadingElement$) return;
        this.loadingElement$.setLoadingProgress(progress);
      }
      displayWarnLoading(enable) {
        if (!this.loadingElement$) return;
        this.loadingElement$.displayWarnLoading(enable);
      }
      destroyLoadingElement() {
        if (!this.loadingElement$) return;
        this.loadingElement$.removeLoadingElement();
      }
      checkPopupShown() {
        if (!this.isPopupShown) return;
        this.exceptionPendingRequest("Please wait for the popup to close");
      }
      async delayInitialAsync() {
        const {
          Utils: { Time: T3 },
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.InitialDelay <= 0) return;
        await T3.sleepAsync(SlowAPI.InitialDelay);
      }
      async delayStartAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          },
          Utils: { Time: T3 }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.StartDelay <= 0) return;
        await T3.sleepAsync(SlowAPI.StartDelay);
      }
      async delayPlayerDataAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          },
          Utils: { Time: T3 }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.PlayerDataDelay <= 0) return;
        await T3.sleepAsync(SlowAPI.PlayerDataDelay);
      }
      awaitRandomDelay(randomDelayMs = 1e3) {
        const {
          Utils: { Time: T3 }
        } = Ludex;
        return T3.sleepAsync(Math.random() * randomDelayMs);
      }
      randomException(exceptions) {
        const rand = Math.floor(Math.random() * exceptions.length);
        const exception = exceptions[rand];
        console.warn("Random exception", exception);
        this[`exception${exception}`]();
      }
      // ? Why is this method here?
      // * Make reduce code size and make it easier to read
      getErrorMessage(error) {
        const { Valid: V36, Object: O32 } = Ludex.Utils;
        if (!O32.hasOwn(error, "message") || !V36.isString(error.message)) return null;
        return error.message;
      }
      throwNewCommonError$(code, message) {
        throw new SDKCommonError_default(code, message);
      }
      exceptionUserInput(message) {
        this.throwNewCommonError$("USER_INPUT" /* USER_INPUT */, message);
      }
      exceptionUnsupported() {
        this.throwNewCommonError$("UNSUPPORTED" /* UNSUPPORTED */, "Unsupported method");
      }
      exceptionInvalidParam(message) {
        this.throwNewCommonError$("INVALID_PARAM" /* INVALID_PARAM */, message);
      }
      exceptionPendingRequest(message) {
        this.throwNewCommonError$("PENDING_REQUEST" /* PENDING_REQUEST */, message);
      }
      exceptionMethodNotImplemented() {
        this.throwNewCommonError$("METHOD_NOT_IMPLEMENTED" /* METHOD_NOT_IMPLEMENTED */, "Method not\
 implemented");
      }
      exceptionTournamentNotFound(message) {
        this.throwNewCommonError$("TOURNAMENT_NOT_FOUND" /* TOURNAMENT_NOT_FOUND */, message);
      }
      exceptionSameContext() {
        this.throwNewCommonError$("SAME_CONTEXT" /* SAME_CONTEXT */, "Must specify a context other t\
han the current one.");
      }
      exceptionInvalidOperation(message) {
        this.throwNewCommonError$("INVALID_OPERATION" /* INVALID_OPERATION */, message);
      }
      exceptionNetworkFailure(message = "Request failed to be processed") {
        this.throwNewCommonError$("NETWORK_FAILURE" /* NETWORK_FAILURE */, message);
      }
      exceptionUnknown(message) {
        this.throwNewCommonError$("UNKNOWN" /* UNKNOWN */, message);
      }
      exceptionClientUnsupportedOperation(message) {
        this.throwNewCommonError$("CLIENT_UNSUPPORTED_OPERATION" /* CLIENT_UNSUPPORTED_OPERATION */,
        message);
      }
      exceptionRateLimited(message) {
        this.throwNewCommonError$("RATE_LIMITED" /* RATE_LIMITED */, message);
      }
    };
    __name(_Extra, "Extra");
    Extra = _Extra;
    Extra_default = Extra;
  }
});

// extensions/ludex/src/game-sdk/sdk/Payments.ts
var CommonErrorList, GetCatalogErrorList, PurchaseErrorList, GetPurchasesErrorList, ConsumePurchaseErrorList,
PRODUCTS_DATA_MOCK_KEY, PURCHASES_DATA_MOCK_KEY, _Payments, Payments, Payments_default;
var init_Payments = __esm({
  "extensions/ludex/src/game-sdk/sdk/Payments.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    CommonErrorList = ["Unsupported", "NetworkFailure", "PendingRequest", "ClientUnsupportedOperatio\
n"];
    GetCatalogErrorList = [...CommonErrorList, "InvalidParam"];
    PurchaseErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
    GetPurchasesErrorList = [...CommonErrorList, "NetworkFailure"];
    ConsumePurchaseErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
    PRODUCTS_DATA_MOCK_KEY = "ProductsDataMockKey";
    PURCHASES_DATA_MOCK_KEY = "PurchasesDataMockKey";
    _Payments = class _Payments {
      adapter$;
      extra$;
      context$;
      purchaseAsyncPopup$ = null;
      constructor(adapter) {
        this.adapter$ = adapter;
        this.extra$ = adapter.extra;
        this.context$ = adapter.context;
      }
      async initPaymentInfoAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { Enabled: Enabled2 }
              }
            }
          }
        } = Ludex;
        if (!Enabled2) return;
        await this.createMockProductsData$();
      }
      async getCatalogAsync() {
        await this.awaitRandomDelay$();
        this.randomError$(GetCatalogErrorList);
        const productsData = this.getProductsData$();
        const products = Object.values(productsData);
        return products;
      }
      async loadPurchasePopupAsync$() {
        if (this.purchaseAsyncPopup$) return;
        const PurchaseAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof PurchaseAsyncPopup !== "function") return;
        this.purchaseAsyncPopup$ = new PurchaseAsyncPopup();
        await this.purchaseAsyncPopup$.setupTemplate();
      }
      async purchaseAsync(purchaseConfig) {
        this.extra$.checkPopupShown();
        await this.awaitRandomDelay$();
        this.validatePurchaseConfig$(purchaseConfig);
        this.randomError$(PurchaseErrorList);
        await this.loadPurchasePopupAsync$();
        await new Promise((resolve, reject) => {
          if (!this.purchaseAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.purchaseAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.purchaseAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.purchaseAsyncPopup$.show(purchaseConfig);
          this.extra$.isPopupShown = true;
        });
        const purchase = this.createMockPurchaseAsync$(purchaseConfig);
        return purchase;
      }
      async getPurchasesAsync() {
        await this.awaitRandomDelay$();
        this.randomError$(GetPurchasesErrorList);
        const playerId2 = this.adapter$.player.getID();
        if (!playerId2) return [];
        const purchasesData = this.getPurchasesData$();
        const playerPurchases = purchasesData[playerId2] || [];
        return playerPurchases;
      }
      async consumePurchaseAsync(purchaseToken) {
        await this.awaitRandomDelay$();
        this.validatePurchaseToken$(purchaseToken);
        this.randomError$(ConsumePurchaseErrorList);
        const playerId2 = this.adapter$.player.getID();
        if (!playerId2) return;
        const purchasesData = this.getPurchasesData$();
        const playerPurchases = purchasesData[playerId2] || [];
        const updatedPurchases = playerPurchases.filter((purchase) => purchase.purchaseToken !== purchaseToken);
        this.writePurchasesData$(playerId2, updatedPurchases);
      }
      onReady(callback) {
        callback();
      }
      async awaitRandomDelay$() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { RandomDelayMs }
              }
            }
          }
        } = Ludex;
        return this.extra$.awaitRandomDelay(RandomDelayMs);
      }
      randomError$(errors) {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { ErrorRates }
              }
            }
          }
        } = Ludex;
        const isError = Math.random() * 100 < ErrorRates;
        if (!isError) return;
        this.extra$.randomException(errors);
      }
      validatePurchaseConfig$(config) {
        const {
          Utils: { Object: O32, Valid: V36 }
        } = Ludex;
        if (!V36.isObject(config)) {
          this.extra$.exceptionInvalidParam("Config must be an object");
        }
        if (!O32.hasOwn(config, "productID")) {
          this.extra$.exceptionInvalidParam("Config must have productID");
        }
        const { productID } = config;
        if (!V36.isString(productID)) {
          this.extra$.exceptionInvalidParam("productID must be a string");
        }
        if (O32.hasOwn(config, "developerPayload") && !V36.isString(config.developerPayload)) {
          this.extra$.exceptionInvalidParam("developerPayload must be a string");
        }
      }
      validatePurchaseToken$(token) {
        const {
          Utils: { Valid: V36 }
        } = Ludex;
        if (!V36.isString(token)) {
          this.extra$.exceptionInvalidParam("Purchase token must be a string");
        }
      }
      createMockPurchaseAsync$(config) {
        const {
          Utils: { String: S9 }
        } = Ludex;
        const purchase = {
          productID: config.productID,
          paymentID: S9.generateObjectId(),
          purchaseToken: S9.generateObjectId(),
          purchaseTime: (/* @__PURE__ */ new Date()).toISOString(),
          developerPayload: config.developerPayload,
          signedRequest: S9.generateObjectId()
        };
        const playerId2 = this.adapter$.player.getID();
        if (playerId2) {
          const purchasesData = this.getPurchasesData$();
          const playerPurchases = purchasesData[playerId2] || [];
          playerPurchases.push(purchase);
          this.writePurchasesData$(playerId2, playerPurchases);
        }
        return purchase;
      }
      async createMockProductsData$() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { Enabled: Enabled2, Products }
              }
            }
          }
        } = Ludex;
        if (!Enabled2) return;
        const productsData = this.getProductsData$();
        const allProducts = Object.values(productsData);
        if (allProducts.length >= Products.length) return;
        const newProducts = this.createDefaultProducts$();
        await Promise.all(newProducts);
      }
      createDefaultProducts$() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { Products }
              }
            }
          }
        } = Ludex;
        return Products.map((product) => {
          const mockProduct = {
            productID: product.id,
            title: `Product ${product.id}`,
            description: `Description for ${product.id}`,
            price: product.price.toString(),
            priceCurrencyCode: "USD",
            priceAmount: product.price
          };
          this.writeProductData$(product.id, mockProduct);
          return mockProduct;
        });
      }
      getProductsData$() {
        const {
          Utils: { Browser: B5, Valid: V36 }
        } = Ludex;
        const data = B5.getLocalStorage(PRODUCTS_DATA_MOCK_KEY);
        if (!V36.isObject(data)) return {};
        return data;
      }
      writeProductData$(id, data) {
        const products = this.getProductsData$();
        products[id] = data;
        this.writeProductsData$(products);
      }
      writeProductsData$(products) {
        const {
          Utils: { Browser: B5, Valid: V36 }
        } = Ludex;
        if (!V36.isObject(products)) return;
        B5.writeLocalStorage(PRODUCTS_DATA_MOCK_KEY, products);
      }
      getPurchasesData$() {
        const {
          Utils: { Browser: B5, Valid: V36 }
        } = Ludex;
        const data = B5.getLocalStorage(PURCHASES_DATA_MOCK_KEY);
        if (!V36.isObject(data)) return {};
        return data;
      }
      writePurchasesData$(playerId2, purchases) {
        const {
          Utils: { Browser: B5 }
        } = Ludex;
        if (!Array.isArray(purchases)) return;
        const data = B5.getLocalStorage(PURCHASES_DATA_MOCK_KEY) ?? {};
        data[playerId2] = purchases;
        B5.writeLocalStorage(PURCHASES_DATA_MOCK_KEY, data);
      }
      handleOnYes$ = /* @__PURE__ */ __name((resolve) => () => {
        this.extra$.isPopupShown = false;
        resolve(true);
      }, "handleOnYes$");
      handleOnNo$ = /* @__PURE__ */ __name((reject) => () => {
        this.extra$.isPopupShown = false;
        try {
          this.extra$.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      }, "handleOnNo$");
    };
    __name(_Payments, "Payments");
    Payments = _Payments;
    Payments_default = Payments;
  }
});

// extensions/ludex/src/game-sdk/sdk/Player.ts
var GameName, avatarUrl, _Player, Player, Player_default;
var init_Player = __esm({
  "extensions/ludex/src/game-sdk/sdk/Player.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    GameName = "Tile-Connect-Deluxe".replace(/ /g, "-");
    avatarUrl = "https://picsum.photos/seed/%1/300/300";
    _Player = class _Player {
      adapter$;
      extra$;
      defaultPlayerInfo$;
      currentPlayerInfo$;
      infoKey$ = `${GameName}_PlayerInfo`;
      dataKey$ = `${GameName}_PlayerData`;
      subscribeBot$ = null;
      connectedPlayers$ = null;
      constructor(adapter) {
        this.adapter$ = adapter;
        this.extra$ = adapter.extra;
        this.initDefaultPlayerInfo$();
      }
      initDefaultPlayerInfo$() {
        const playerId2 = "guest-007";
        this.defaultPlayerInfo$ = {
          playerId: playerId2,
          playerName: "Guest",
          playerPhoto: avatarUrl.replace("%1", playerId2)
        };
        this.extra$.isGuest = true;
        this.currentPlayerInfo$ = __spreadValues({}, this.defaultPlayerInfo$);
      }
      initPlayerInfo(playerId2) {
        this.updateCurrentPlayerInfo$(playerId2);
        const {
          Utils: { Browser: B5 }
        } = Ludex;
        B5.writeLocalStorage(this.infoKey$, this.currentPlayerInfo$);
      }
      async canSubscribeBotAsync() {
        await this.loadMockSubscribeBot$();
        if (!this.subscribeBot$) {
          this.extra$.exceptionUnsupported();
        }
        return this.subscribeBot$.canSubscribeBotAsync();
      }
      async subscribeBotAsync() {
        await this.loadMockSubscribeBot$();
        if (!this.subscribeBot$) {
          this.extra$.exceptionUnsupported();
        }
        return this.subscribeBot$.subscribeBotAsync();
      }
      getID() {
        return this.currentPlayerInfo$.playerId;
      }
      getName() {
        return this.currentPlayerInfo$.playerName;
      }
      getPhoto() {
        return this.currentPlayerInfo$.playerPhoto;
      }
      async getDataAsync(keys) {
        if (keys.length < 1) return {};
        await this.extra$.delayPlayerDataAsync();
        const {
          Utils: { Browser: B5, Valid: V36, Object: O32 }
        } = Ludex;
        const data = B5.getLocalStorage(this.dataKey$);
        if (!V36.isObject(data)) return {};
        const dataObject = {};
        for (const key of keys) {
          if (O32.hasOwn(data, key)) {
            dataObject[key] = data[key];
          }
        }
        return dataObject;
      }
      async setDataAsync(data) {
        await this.extra$.delayPlayerDataAsync();
        const {
          Utils: { Browser: B5 }
        } = Ludex;
        B5.writeLocalStorage(this.dataKey$, data);
      }
      async getSignedPlayerInfoAsync() {
        return {
          getPlayerID: /* @__PURE__ */ __name(() => {
            return this.getID() ?? "";
          }, "getPlayerID"),
          getSignature: this.getSignature$
        };
      }
      async getConnectedPlayersAsync() {
        await this.loadMockConnectedPlayers$();
        if (!this.connectedPlayers$) {
          this.extra$.exceptionUnsupported();
        }
        return this.connectedPlayers$.getConnectedPlayersAsync();
      }
      updateCurrentPlayerInfo$(playerId2) {
        const {
          Utils: { Browser: B5, Valid: V36, Object: O32, String: S9 }
        } = Ludex;
        let currentId = playerId2 ?? "";
        let currentName = "Nameless";
        if (this.extra$.isGuest) {
          const data = B5.getLocalStorage(this.infoKey$);
          if (V36.isObject(data) && O32.hasOwn(data, "playerId") && V36.isString(data.playerId)) {
            currentId = data.playerId;
          }
          if (V36.isObject(data) && O32.hasOwn(data, "playerName") && V36.isString(data.playerName)) {
            currentName = data.playerName;
          }
        }
        if (V36.isEmpty(currentId)) {
          currentId = S9.generateObjectId();
        }
        if (currentName === "Nameless" && this.isUseNameGenerator$()) {
          currentName = S9.generateNameUsingString(currentId);
        }
        this.currentPlayerInfo$.playerId = currentId;
        this.currentPlayerInfo$.playerName = currentName;
        this.currentPlayerInfo$.playerPhoto = avatarUrl.replace("%1", currentId);
        this.updateMockupPlayerInfo$(currentId);
      }
      isUseNameGenerator$() {
        const gameConfig = define_GAME_SDK_CONFIG_default;
        return gameConfig?.UseNameGenerator === true;
      }
      getMockPlayerInfo$() {
        const { Match } = Ludex.Configs.Mockup;
        if (!Match.Enabled) return null;
        return Match.PlayerInfo;
      }
      getMockOpponentInfo$() {
        const { Match } = Ludex.Configs.Mockup;
        if (!Match.Enabled) return null;
        return Match.OpponentInfo;
      }
      // ! Only work with playerId url param
      updateMockupPlayerInfo$(playerId2) {
        let info = this.getMockOpponentInfo$();
        if (playerId2 !== info?.Id) {
          info = this.getMockPlayerInfo$();
        }
        if (!info) return;
        this.currentPlayerInfo$.playerId = info.Id;
        if (info.Name) {
          this.currentPlayerInfo$.playerName = info.Name;
        }
        if (info.Photo) {
          this.currentPlayerInfo$.playerPhoto = info.Photo;
        }
      }
      getSignature$ = /* @__PURE__ */ __name(() => {
        const token = this.getSignatureFormMockup$();
        if (Ludex.Utils.Valid.isString(token)) return token;
        return "default_token";
      }, "getSignature$");
      getSignatureFormMockup$() {
        const {
          Configs: {
            Mockup: { Match }
          }
        } = Ludex;
        const isPlayer = Match.PlayerInfo.Id === this.getID();
        const isOpponent = Match.OpponentInfo.Id === this.getID();
        if (isPlayer) return Match.PlayerInfo.Signature;
        if (isOpponent) return Match.OpponentInfo.Signature;
        return null;
      }
      async loadMockSubscribeBot$() {
        if (this.subscribeBot$) return;
        const MockSubscribeBot = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof MockSubscribeBot !== "function") return;
        this.subscribeBot$ = new MockSubscribeBot(this.adapter$);
      }
      async loadMockConnectedPlayers$() {
        if (this.connectedPlayers$) return;
        const MockConnectedPlayers = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof MockConnectedPlayers !== "function") return;
        this.connectedPlayers$ = new MockConnectedPlayers(this.extra$);
      }
    };
    __name(_Player, "Player");
    Player = _Player;
    Player_default = Player;
  }
});

// extensions/ludex/src/game-sdk/sdk/TournamentInstance.ts
var _TournamentInstance, TournamentInstance, TournamentInstance_default;
var init_TournamentInstance = __esm({
  "extensions/ludex/src/game-sdk/sdk/TournamentInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    _TournamentInstance = class _TournamentInstance {
      id$;
      title$;
      contextId$;
      payload$;
      endTime$;
      tournamentType$;
      constructor(id, payload, isPageHosted = false) {
        const { config, data } = payload;
        this.id$ = id;
        this.title$ = config.title;
        this.contextId$ = `0123${this.id$}`;
        this.payload$ = JSON.stringify(data ?? {});
        this.endTime$ = config.endTime ?? this.defaultEndTime$();
        this.tournamentType$ = isPageHosted ? "PAGE_HOSTED" : "DEFAULT";
      }
      defaultEndTime$() {
        return Math.round((Date.now() + 1e3 * 60 * 60 * 24 * 7) / 1e3);
      }
      getID() {
        return this.id$;
      }
      getTitle() {
        return this.title$;
      }
      getPayload() {
        return this.payload$;
      }
      getEndTime() {
        return this.endTime$;
      }
      getContextID() {
        return this.contextId$;
      }
      getTournamentType() {
        return this.tournamentType$;
      }
      // ! Use for process data in mock
      toObject() {
        return {
          id: this.id$,
          title: this.title$,
          payload: this.payload$,
          endTime: this.endTime$,
          contextId: this.contextId$,
          tournamentType: this.tournamentType$
        };
      }
    };
    __name(_TournamentInstance, "TournamentInstance");
    TournamentInstance = _TournamentInstance;
    TournamentInstance_default = TournamentInstance;
  }
});

// extensions/ludex/src/game-sdk/sdk/Tournament.ts
var CommonErrorList2, CreateErrorList, JoinErrorList, ShareErrorList, PostScoreErrorList, GetTournamentsErrorList,
TOURNAMENTS_DATA_MOCK_KEY, TOURNAMENT_LEADERS_MOCK_KEY, _Tournament, Tournament, Tournament_default;
var init_Tournament = __esm({
  "extensions/ludex/src/game-sdk/sdk/Tournament.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Context();
    init_TournamentInstance();
    CommonErrorList2 = ["Unsupported", "NetworkFailure", "PendingRequest", "ClientUnsupportedOperati\
on"];
    CreateErrorList = [...CommonErrorList2, "InvalidParam", "UserInput"];
    JoinErrorList = [...CommonErrorList2, "InvalidOperation", "UserInput"];
    ShareErrorList = [...CommonErrorList2, "InvalidParam", "UserInput"];
    PostScoreErrorList = [...CommonErrorList2, "InvalidParam", "UserInput"];
    GetTournamentsErrorList = [...CommonErrorList2, "NetworkFailure"];
    TOURNAMENTS_DATA_MOCK_KEY = "TournamentsDataMockKey";
    TOURNAMENT_LEADERS_MOCK_KEY = "TournamentLeadersMockKey";
    _Tournament = class _Tournament {
      adapter$;
      extra$;
      context$;
      shareAsyncPopup$ = null;
      createAsyncPopup$ = null;
      constructor(adapter) {
        this.adapter$ = adapter;
        this.extra$ = adapter.extra;
        this.context$ = adapter.context;
      }
      async initTournamentInfoAsync(tournamentId) {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { Enabled: Enabled2 }
              }
            }
          }
        } = Ludex;
        if (!Enabled2) return;
        await this.createMockTournamentsData$();
        if (tournamentId) {
          await this.processEnterTournament$(tournamentId);
        }
      }
      processEnterTournament$ = /* @__PURE__ */ __name(async (tournamentId) => {
        const tournamentData = this.getTournamentData$(tournamentId);
        if (!tournamentData) return;
        await this.joinAsync(tournamentId);
      }, "processEnterTournament$");
      /**
       * @deprecated Only for testing
       */
      async createMockTournamentsData$() {
        const {
          Utils: { Object: O32 },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { Enabled: Enabled2, NumOfTournament }
              }
            }
          }
        } = Ludex;
        const { Normal: NumOfNormal, HostPage: NumOfHostPaged } = NumOfTournament;
        if (!Enabled2) return;
        const tournamentsData = this.getTournamentsData$();
        const allTournaments = O32.vals(tournamentsData);
        const tournaments = this.filterExpiredTournaments$(allTournaments);
        const currentDefaultTournaments = tournaments.filter((tournament) => tournament.tournamentType ===
        "DEFAULT");
        const currentHostPageTournaments = tournaments.filter(
          (tournament) => tournament.tournamentType === "PAGE_HOSTED"
        );
        const { length: defaultTournamentsLength } = currentDefaultTournaments;
        const { length: hostPageTournamentsLength } = currentHostPageTournaments;
        const remainingDefaultTournaments = NumOfNormal - defaultTournamentsLength;
        const remainingHostPageTournaments = NumOfHostPaged - hostPageTournamentsLength;
        const defaultTournaments = this.createDefaultTournaments$(remainingDefaultTournaments);
        const hostPageTournaments = this.createGlobalTournaments$(remainingHostPageTournaments);
        await Promise.all([...defaultTournaments, ...hostPageTournaments]);
      }
      filterExpiredTournaments$(tournaments) {
        const now = Date.now() / 1e3;
        const validTournaments = tournaments.filter((tournament) => tournament.endTime > now);
        const newTournamentData = {};
        for (const tournament of validTournaments) {
          newTournamentData[tournament.id] = tournament;
        }
        this.writeTournamentsData$(newTournamentData);
        return validTournaments;
      }
      createDefaultTournaments$(length) {
        const {
          Utils: { String: S9, Array: A10, Number: N },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { ExtraPlayerTournamentPayload }
              }
            }
          }
        } = Ludex;
        const { leaderboard } = codex;
        const playerId2 = GameSDK.player.getID();
        const playerName = GameSDK.player.getName();
        return A10.length(length).map(async () => {
          const title = `${playerName}'s Tournament ${S9.generateObjectId()}`;
          const leaderboardId = await leaderboard.createLeaderboardAsync({
            name: title
          });
          const tournament = this.createMockTournamentAsync$({
            initialScore: 0,
            config: {
              title,
              tournamentTitle: title
            },
            data: __spreadValues({
              playerId: playerId2,
              playerName,
              leaderboardId
            }, ExtraPlayerTournamentPayload)
          });
          const tournamentId = tournament.getID().toString();
          if (this.getTournamentLeadersData$(tournamentId)) return;
          const playerLimit = N.random(2);
          const connectedPlayerIds = codex.player.getConnectedPlayerIds(playerLimit, 0);
          const leaders = connectedPlayerIds.map((playerId3) => {
            return {
              playerId: playerId3,
              score: N.random(4)
            };
          });
          leaders.sort((a, b) => a.score - b.score);
          this.writeTournamentLeadersData$(tournamentId, leaders);
        });
      }
      createGlobalTournaments$(length) {
        const {
          Utils: { String: S9, Array: A10, Number: N },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { ExtraGlobalTournamentPayload }
              }
            }
          }
        } = Ludex;
        const { leaderboard } = codex;
        return A10.length(length).map(async () => {
          const id = S9.generateObjectId();
          const payload = __spreadValues({
            leaderboardId: id,
            playerId: "global"
          }, ExtraGlobalTournamentPayload);
          const title = `Global Tournament ${id}`;
          await leaderboard.createLeaderboardAsync({
            name: title,
            _id: id,
            type: "world_tournament_leaderboard",
            description: JSON.stringify(payload)
          });
          const tournament = this.createMockTournamentAsync$(
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
          if (this.getTournamentLeadersData$(tournamentId)) return;
          const leaderLength = N.random(2);
          const leaders = A10.length(leaderLength).map(() => {
            return {
              playerId: S9.generateObjectId(),
              score: N.random(4)
            };
          });
          leaders.sort((a, b) => a.score - b.score);
          this.writeTournamentLeadersData$(tournamentId, leaders);
        });
      }
      async awaitRandomDelay$() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { RandomDelayMs }
              }
            }
          }
        } = Ludex;
        return this.extra$.awaitRandomDelay(RandomDelayMs);
      }
      randomError(errors) {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { ErrorRates }
              }
            }
          }
        } = Ludex;
        const isError = Math.random() * 100 < ErrorRates;
        if (!isError) return;
        this.extra$.randomException(errors);
      }
      async loadCreateTournamentPopupAsync$() {
        if (this.createAsyncPopup$) return;
        const CreateAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof CreateAsyncPopup !== "function") return;
        this.createAsyncPopup$ = new CreateAsyncPopup();
        await this.createAsyncPopup$.setupTemplate();
      }
      async loadSharePopupAsync$() {
        if (this.shareAsyncPopup$) return;
        const ShareAsyncPopup = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof ShareAsyncPopup !== "function") return;
        this.shareAsyncPopup$ = new ShareAsyncPopup();
        await this.shareAsyncPopup$.setupTemplate();
      }
      async createAsync(payload) {
        this.extra$.checkPopupShown();
        await this.awaitRandomDelay$();
        if (this.context$.getID() !== null) {
          this.extra$.exceptionInvalidOperation("Cannot create tournament while in a context");
        }
        this.validateCreatePayload$(payload);
        this.randomError(CreateErrorList);
        await this.loadCreateTournamentPopupAsync$();
        await new Promise((resolve, reject) => {
          if (!this.createAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.createAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.createAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.createAsyncPopup$.show(payload);
          this.extra$.isPopupShown = true;
        });
        const tournament = this.createMockTournamentAsync$(payload);
        const contextId2 = tournament.getContextID();
        this.setCurrentContextID$(contextId2);
        return tournament;
      }
      createMockTournamentAsync$(payload, isPageHosted = false) {
        const {
          Utils: { String: S9 }
        } = Ludex;
        const id = S9.generateObjectId();
        const tournament = new TournamentInstance_default(id, payload, isPageHosted);
        const tournamentData = tournament.toObject();
        this.writeTournamentData$(id, tournamentData);
        return tournament;
      }
      async postScoreAsync(score2) {
        await this.awaitRandomDelay$();
        this.validateAvailableTournament$();
        if (score2 < 0) {
          this.extra$.exceptionInvalidParam("Score must be a positive number");
        }
        this.randomError(PostScoreErrorList);
        const playerId2 = codex.player.getPlayerId();
        this.updateBestScore$(playerId2, score2);
      }
      // ? shareAsync always show if score is less than best score
      async shareAsync(payload) {
        this.extra$.checkPopupShown();
        await this.awaitRandomDelay$();
        this.validateAvailableTournament$();
        this.validateSharePayload$(payload);
        this.randomError(ShareErrorList);
        await this.loadSharePopupAsync$();
        const { score: score2 } = payload;
        let bestScore = score2;
        const tournament = this.getCurrentTournament$();
        if (tournament) {
          const playerId3 = codex.player.getPlayerId();
          const tournamentId = tournament.getID().toString();
          const lastBestScore = this.getBestScore$(tournamentId, playerId3);
          if (lastBestScore && lastBestScore < score2) {
            bestScore = lastBestScore;
          }
        }
        await new Promise((resolve, reject) => {
          if (!this.shareAsyncPopup$) {
            this.adapter$.extra.exceptionUnsupported();
          }
          this.shareAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.shareAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.shareAsyncPopup$.show(bestScore);
          this.extra$.isPopupShown = true;
        });
        const playerId2 = codex.player.getPlayerId();
        this.updateBestScore$(playerId2, score2);
      }
      async getTournamentsAsync() {
        await this.awaitRandomDelay$();
        this.randomError(GetTournamentsErrorList);
        const tournamentsData = this.getTournamentsData$();
        const {
          Utils: { Object: O32 }
        } = Ludex;
        const tournaments = O32.vals(tournamentsData);
        const tournamentInstances = tournaments.map((tournament) => this.getTournamentInstance$(tournament.
        id));
        return tournamentInstances.filter((tournament) => tournament !== null);
      }
      async joinAsync(tournamentId) {
        await this.awaitRandomDelay$();
        const {
          Utils: { Valid: V36 }
        } = Ludex;
        if (!V36.isString(tournamentId)) {
          this.extra$.exceptionInvalidParam("Tournament ID must be a string");
        }
        const tournament = this.getTournamentInstance$(tournamentId);
        if (!tournament) {
          this.extra$.exceptionTournamentNotFound("Tournament could not be found.");
        }
        this.randomError(JoinErrorList);
        const tournamentContextId = tournament.getContextID();
        await GameSDK.context.switchAsync(tournamentContextId);
      }
      setCurrentContextID$(contextId2) {
        if (this.context$ instanceof Context_default) {
          this.context$.setCurrentContextId(contextId2);
        }
      }
      handleOnYes$ = /* @__PURE__ */ __name((resolve) => () => {
        this.extra$.isPopupShown = false;
        resolve(true);
      }, "handleOnYes$");
      handleOnNo$ = /* @__PURE__ */ __name((reject) => () => {
        this.extra$.isPopupShown = false;
        try {
          this.extra$.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      }, "handleOnNo$");
      getCurrentTournament$() {
        const contextId2 = this.context$.getID();
        if (!contextId2) return null;
        const tournamentsData = this.getTournamentsData$();
        for (const tournamentId in tournamentsData) {
          if (Object.hasOwn(tournamentsData, tournamentId)) {
            const tournament = tournamentsData[tournamentId];
            if (tournament.contextId === contextId2) {
              return this.getTournamentInstance$(tournamentId);
            }
          }
        }
        return null;
      }
      validateCreatePayload$(payload) {
        const {
          Utils: { Object: O32, Valid: V36 }
        } = Ludex;
        if (!V36.isObject(payload)) {
          this.extra$.exceptionInvalidParam("Payload must be an object");
        }
        if (!O32.hasOwn(payload, "initialScore")) {
          this.extra$.exceptionInvalidParam("Payload must have initialScore");
        }
        if (!O32.hasOwn(payload, "config")) {
          this.extra$.exceptionInvalidParam("Payload must have config");
        }
        const { initialScore, config } = payload;
        if (!V36.isNumber(initialScore)) {
          this.extra$.exceptionInvalidParam("initialScore must be a number");
        }
        if (!V36.isObject(config)) {
          this.extra$.exceptionInvalidParam("Config must be an object");
        }
        if (!O32.hasOwn(config, "title")) {
          this.extra$.exceptionInvalidParam("Config must have title");
        }
        if (!O32.hasOwn(config, "tournamentTitle")) {
          this.extra$.exceptionInvalidParam("Config must have tournamentTitle");
        }
        if (O32.hasOwn(payload, "data") && !V36.isObject(payload.data)) {
          this.extra$.exceptionInvalidParam("Data must be an object");
        }
      }
      validateSharePayload$(payload) {
        const {
          Utils: { Object: O32, Valid: V36 }
        } = Ludex;
        if (!V36.isObject(payload)) {
          this.extra$.exceptionInvalidParam("Payload must be an object");
        }
        if (!O32.hasOwn(payload, "score")) {
          this.extra$.exceptionInvalidParam("Payload must have score");
        }
        const { score: score2 } = payload;
        if (!V36.isNumber(score2)) {
          this.extra$.exceptionInvalidParam("Score must be a number");
        }
        if (O32.hasOwn(payload, "data") && !V36.isObject(payload.data)) {
          this.extra$.exceptionInvalidParam("Data must be an object");
        }
      }
      validateAvailableTournament$() {
        const tournament = this.getCurrentTournament$();
        if (tournament) return;
        this.extra$.exceptionTournamentNotFound("There is no tournament for this context.");
      }
      getTournamentInstance$(id) {
        const tournamentData = this.getTournamentData$(id);
        if (!tournamentData) return null;
        return {
          getID: /* @__PURE__ */ __name(() => tournamentData.id, "getID"),
          getTitle: /* @__PURE__ */ __name(() => tournamentData.title, "getTitle"),
          getPayload: /* @__PURE__ */ __name(() => tournamentData.payload, "getPayload"),
          getEndTime: /* @__PURE__ */ __name(() => tournamentData.endTime, "getEndTime"),
          getContextID: /* @__PURE__ */ __name(() => tournamentData.contextId, "getContextID"),
          getTournamentType: /* @__PURE__ */ __name(() => tournamentData.tournamentType, "getTournam\
entType")
        };
      }
      getTournamentData$(id) {
        const tournaments = this.getTournamentsData$();
        if (!tournaments[id]) return null;
        return tournaments[id];
      }
      writeTournamentData$(id, data) {
        const tournaments = this.getTournamentsData$();
        tournaments[id] = data;
        this.writeTournamentsData$(tournaments);
      }
      getTournamentsData$() {
        const {
          Utils: { Browser: B5, Valid: V36 }
        } = Ludex;
        const data = B5.getLocalStorage(TOURNAMENTS_DATA_MOCK_KEY);
        if (!V36.isObject(data)) return {};
        return data;
      }
      writeTournamentsData$(tournaments) {
        const {
          Utils: { Browser: B5, Valid: V36 }
        } = Ludex;
        if (!V36.isObject(tournaments)) return;
        B5.writeLocalStorage(TOURNAMENTS_DATA_MOCK_KEY, tournaments);
      }
      getBestScore$(tournamentId, playerId2) {
        const leader = this.getTournamentLeader$(tournamentId, playerId2);
        if (!leader) return null;
        return leader.score ?? null;
      }
      updateBestScore$(playerId2, score2) {
        const tournament = this.getCurrentTournament$();
        if (!tournament) return;
        const tournamentId = tournament.getID().toString();
        if (!tournamentId) return;
        const leader = this.getTournamentLeader$(tournamentId, playerId2);
        if (!leader) {
          this.writeTournamentLeader$(tournamentId, {
            playerId: playerId2,
            score: score2
          });
          return;
        }
        if (leader.score < score2) {
          leader.score = score2;
          this.writeTournamentLeader$(tournamentId, leader);
        }
      }
      getTournamentLeader$(tournamentId, playerId2) {
        const tournamentLeaders = this.getTournamentLeadersData$(tournamentId);
        if (!tournamentLeaders.length) return null;
        const {
          Utils: { Array: A10 }
        } = Ludex;
        return A10.search(tournamentLeaders, (leader) => leader.playerId === playerId2) ?? null;
      }
      getTournamentLeadersData$(tournamentId) {
        const {
          Utils: { Browser: B5, Object: O32 }
        } = Ludex;
        const data = B5.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY);
        if (!O32.hasOwn(data, tournamentId)) return [];
        const tournamentLeaders = data[tournamentId];
        if (!Array.isArray(tournamentLeaders)) return [];
        tournamentLeaders.sort((a, b) => b.score - a.score);
        return tournamentLeaders;
      }
      writeTournamentLeader$(tournamentId, leader) {
        const {
          Utils: { Array: A10 }
        } = Ludex;
        const tournamentLeaders = this.getTournamentLeadersData$(tournamentId);
        const leaderIndex = A10.searchIndex(
          tournamentLeaders,
          (tournamentLeader) => tournamentLeader.playerId === leader.playerId
        );
        if (leaderIndex === -1) {
          tournamentLeaders.push(leader);
        } else {
          tournamentLeaders[leaderIndex] = leader;
        }
        this.writeTournamentLeadersData$(tournamentId, tournamentLeaders);
      }
      writeTournamentLeadersData$(tournamentId, tournamentLeaders) {
        const {
          Utils: { Browser: B5, Object: O32 }
        } = Ludex;
        if (!Array.isArray(tournamentLeaders)) return;
        const data = B5.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY) ?? {};
        O32.assign(data, { [tournamentId]: tournamentLeaders });
        B5.writeLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY, data);
      }
    };
    __name(_Tournament, "Tournament");
    Tournament = _Tournament;
    Tournament_default = Tournament;
  }
});

// extensions/ludex/src/game-sdk/sdk/GameSDK.ts
var _GameSDK, GameSDK2, GameSDK_default2;
var init_GameSDK = __esm({
  "extensions/ludex/src/game-sdk/sdk/GameSDK.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Context();
    init_Extra();
    init_Payments();
    init_Player();
    init_Tournament();
    _GameSDK = class _GameSDK {
      extra;
      player;
      context;
      tournament;
      payments;
      shortcut$ = null;
      isInitialized = false;
      bannerAdInstances$ = {};
      rewardedVideoInstance$ = null;
      interstitialAdInstance$ = null;
      rewardedInterstitialInstance$ = null;
      initialize$() {
        this.extra = new Extra_default(this);
        this.player = new Player_default(this);
        this.context = new Context_default(this);
        this.payments = new Payments_default(this);
        this.tournament = new Tournament_default(this);
      }
      isNeedSDK$() {
        const gameConfig = define_GAME_SDK_CONFIG_default;
        return gameConfig?.AllowWithoutSDK !== true;
      }
      getLocale() {
        return Ludex.Utils.Browser.getLocale();
      }
      getPlatform() {
        const { Device: D4 } = Ludex.Utils;
        if (D4.isAndroid()) return "ANDROID";
        if (D4.isIOS()) return "IOS";
        if (D4.isDesktop()) return "WEB";
        if (D4.isMobile()) return "MOBILE_WEB";
        return null;
      }
      isGameSDK(name2) {
        return this.getSDKName() === name2;
      }
      getSDKName() {
        return "Ludex";
      }
      getSDKVersion() {
        return "1.0.0";
      }
      async initializeAsync() {
        if (this.isInitialized) return;
        this.initialize$();
        await this.extra.createLoadingElement();
        window.__sdkLoad.ensure(1);
        if (this.isNeedSDK$()) {
          await this.checkSDKInitialized$();
        }
        await this.extra.waitLudexReadyAsync();
        await this.extra.delayInitialAsync();
        const params = Ludex.Utils.Browser.getQueryParams();
        console.debug("Browser params:", params);
        const splashPreview = params.splashPreview;
        if (splashPreview) {
          this.extra.destroyLoadingElement();
        }
        const playerIdInQuery = params.playerId;
        this.player.initPlayerInfo(playerIdInQuery);
        const contextIdInQuery = params.context_source_id;
        const contextTypeInQuery = params.context_type;
        this.context.initContextInfo(contextIdInQuery, contextTypeInQuery);
        this.isInitialized = true;
      }
      async checkSDKInitialized$() {
        this.extra.exceptionInvalidOperation("GameSDK requires AllowWithoutSDK=true in game config");
      }
      async startGameAsync(withEvent = true) {
        if (!this.isInitialized) {
          this.extra.exceptionInvalidOperation("GameSDK is not initialized");
        }
        await this.extra.delayStartAsync();
        window.__sdkLoad.ensure(95);
        this.extra.destroyLoadingElement();
        const {
          Events: Events11,
          Utils: {
            Browser: { getQueryParams }
          }
        } = Ludex;
        const params = getQueryParams();
        const tournamentIdInQuery = params.tournament_id;
        await this.tournament.initTournamentInfoAsync(tournamentIdInQuery);
        await this.payments.initPaymentInfoAsync();
        if (withEvent) {
          codex.event.emit(Events11.GAME_SDK_STARTED);
        }
      }
      setLoadingProgress(percentage) {
        this.extra?.setLoadingElementProgress?.(percentage);
      }
      getEntryPointData() {
        const {
          Utils: { Browser: B5, Json: J6 }
        } = Ludex;
        const { payload = "{}" } = B5.getQueryParams();
        if (typeof payload !== "string") return {};
        return J6.decode(payload);
      }
      async getEntryPointAsync() {
        return "no_entry";
      }
      async loadBannerAdAsync(placementId) {
        if (!placementId) return;
        if (!this.bannerAdInstances$[placementId]) {
          const MockBannerInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
          default;
          if (typeof MockBannerInstance !== "function") {
            this.extra.exceptionInvalidOperation("Banner ads mock is not enabled");
          }
          this.bannerAdInstances$[placementId] = new MockBannerInstance("banner", placementId);
        }
        await this.bannerAdInstances$[placementId].loadAsync();
        await this.bannerAdInstances$[placementId].showAsync();
      }
      async hideBannerAdAsync(placementId) {
        if (!this.bannerAdInstances$[placementId]) return;
        await this.bannerAdInstances$[placementId].hideAsync();
      }
      getBannerHeight(bannerConfig) {
        return bannerConfig.BannerHeight;
      }
      async getInterstitialAdAsync(placementId) {
        if (!this.interstitialAdInstance$) {
          const MockAdInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
          default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Interstitial ads mock is not enabled");
          }
          this.interstitialAdInstance$ = new MockAdInstance("interstitial", placementId);
        }
        return this.interstitialAdInstance$;
      }
      async getRewardedVideoAsync(placementId) {
        if (!this.rewardedVideoInstance$) {
          const MockAdInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
          default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Rewarded video ads mock is not enabled");
          }
          this.rewardedVideoInstance$ = new MockAdInstance("rewarded", placementId);
        }
        return this.rewardedVideoInstance$;
      }
      async getRewardedInterstitialAsync(placementId) {
        if (!this.rewardedInterstitialInstance$) {
          const MockAdInstance = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
          default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Rewarded interstitial ads mock is not enabled");
          }
          this.rewardedInterstitialInstance$ = new MockAdInstance("rewarded_interstitial", placementId);
        }
        return this.rewardedInterstitialInstance$;
      }
      async getTournamentAsync() {
        this.tournament.randomError(["Unsupported", "NetworkFailure"]);
        const currentContextID = this.context.getID();
        const { Array: A10, Valid: V36 } = Ludex.Utils;
        if (!V36.isString(currentContextID)) {
          this.extra.exceptionInvalidOperation("Not in a context");
        }
        const tournaments = await this.tournament.getTournamentsAsync();
        const wantedTournament = A10.search(tournaments, (tournament) => {
          return tournament.getContextID() === currentContextID;
        });
        if (!wantedTournament) {
          this.extra.exceptionTournamentNotFound("A Tournament with current context was not found");
        }
        return wantedTournament;
      }
      getSupportedAPIs() {
        const {
          Player: {
            SubscribeBot: { CanSubscribeBot }
          },
          AddShortcut: { CanCreateShortcut }
        } = Ludex.Configs.Mockup.GameSDK;
        const apis = [];
        if (CanSubscribeBot) {
          apis.push("player.canSubscribeBotAsync");
        }
        if (CanCreateShortcut) {
          apis.push("canCreateShortcutAsync");
        }
        return apis;
      }
      async canCreateShortcutAsync() {
        await this.loadMockAddShortcut$();
        if (!this.shortcut$) {
          this.extra.exceptionUnsupported();
        }
        return this.shortcut$.canCreateShortcutAsync();
      }
      async createShortcutAsync() {
        await this.loadMockAddShortcut$();
        if (!this.shortcut$) {
          this.extra.exceptionUnsupported();
        }
        return this.shortcut$.createShortcutAsync();
      }
      async loadMockAddShortcut$() {
        if (this.shortcut$) return;
        const MockAddShortcut = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
        default;
        if (typeof MockAddShortcut !== "function") return;
        this.shortcut$ = new MockAddShortcut(this);
      }
    };
    __name(_GameSDK, "GameSDK");
    GameSDK2 = _GameSDK;
    GameSDK_default2 = GameSDK2;
  }
});

// extensions/ludex/src/game-sdk/sdk/AdInstance.ts
var _AdInstance, AdInstance, AdInstance_default;
var init_AdInstance = __esm({
  "extensions/ludex/src/game-sdk/sdk/AdInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    _AdInstance = class _AdInstance {
      type$;
      placementId$;
      constructor(type, placementId) {
        this.type$ = type;
        this.placementId$ = placementId;
      }
      getPlacementID() {
        return this.placementId$;
      }
      async hideAsync() {
      }
    };
    __name(_AdInstance, "AdInstance");
    AdInstance = _AdInstance;
    AdInstance_default = AdInstance;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSAdInstance.ts
var defaultInstance, ErrorCodes, _MSAdInstance, MSAdInstance, MSAdInstance_default;
var init_MSAdInstance = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSAdInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_SDKCommonError();
    init_AdInstance();
    defaultInstance = {
      instanceId: ""
    };
    ErrorCodes = {
      AD_NOT_LOADED: "AD_NOT_LOADED",
      LOAD_ADS_FAILURE: "LOAD_ADS_FAILURE",
      INVALID_OPERATION: "INVALID_OPERATION",
      SHOW_ADS_FAILURE: "SHOW_ADS_FAILURE",
      SHOW_ADS_TIMEOUT: "SHOW_ADS_TIMEOUT",
      SHOW_ADS_COMPLETED_FAILURE: "SHOW_ADS_COMPLETED_FAILURE"
    };
    _MSAdInstance = class _MSAdInstance extends AdInstance_default {
      type$;
      sdk$;
      instance$;
      isAdDisplayed$ = false;
      isAdShowInProgress$ = false;
      constructor(type, sdk2) {
        super(type, "");
        this.sdk$ = sdk2;
        this.type$ = type;
        this.instance$ = defaultInstance;
      }
      getPlacementID() {
        return this.instance$.instanceId;
      }
      resetInstance$() {
        this.instance$ = defaultInstance;
      }
      async loadAsync() {
        try {
          if (this.isAdShowInProgress$) {
            throw this.makeErrorWithCode$(ErrorCodes.INVALID_OPERATION, "Can't load ads while showin\
g ads");
          }
          if (this.instance$.instanceId) {
            console.debug("MSAdInstance loadAsync already loaded");
            return;
          }
          const instance = await this.sdk$.loadAdsAsync({
            isRewardedAd: this.type$ === "rewarded",
            // ? Disable backfill for now
            canBackfill: false
          });
          this.instance$ = instance;
        } catch (error) {
          throw this.makeErrorWithCode$(ErrorCodes.LOAD_ADS_FAILURE, error);
        }
      }
      async showAsync() {
        if (!this.instance$.instanceId) {
          throw this.makeErrorWithCode$(ErrorCodes.AD_NOT_LOADED, "Ad is not loaded. InstanceId is e\
mpty");
        }
        if (this.isAdShowInProgress$) {
          throw this.makeErrorWithCode$(ErrorCodes.INVALID_OPERATION, "Can't show ads while showing \
ads");
        }
        try {
          this.isAdDisplayed$ = false;
          this.isAdShowInProgress$ = true;
          const showAdPromise = this.processShowAd$(this.instance$.instanceId);
          const timeoutPromise = this.scheduleShowingAdTimeout$(30 * 1e3);
          await Promise.race([showAdPromise, timeoutPromise]);
          console.debug("MSAdInstance showAsync completed");
        } catch (error) {
          if (error instanceof SDKCommonError_default) {
            throw error;
          }
          throw this.makeErrorWithCode$(ErrorCodes.SHOW_ADS_FAILURE, error);
        } finally {
          this.isAdShowInProgress$ = false;
        }
      }
      async processShowAd$(instanceId) {
        try {
          const instance = await this.sdk$.showAdsAsync(instanceId);
          if (!this.isPromise$(instance.showAdsCompletedAsync)) {
            throw this.makeErrorWithCode$(
              ErrorCodes.SHOW_ADS_FAILURE,
              new Error("The showAdsCompletedAsync promise is empty")
            );
          }
          this.isAdDisplayed$ = true;
          const result3 = await instance.showAdsCompletedAsync;
          console.debug("MSAdInstance processShowAd:", result3);
        } catch (error) {
          if (this.isErrorWithCode$(error) && error.code === ErrorCodes.SHOW_ADS_COMPLETED_FAILURE) {
            error.code = "USER_INPUT";
          }
          throw this.makeErrorWithCode$(ErrorCodes.SHOW_ADS_FAILURE, error);
        } finally {
          this.resetInstance$();
        }
      }
      async scheduleShowingAdTimeout$(timeout) {
        const {
          Utils: { Valid: V36 }
        } = Ludex;
        return new Promise((resolve, reject) => {
          setTimeout(async () => {
            if (!this.isAdDisplayed$) {
              reject(this.makeErrorWithCode$(ErrorCodes.SHOW_ADS_TIMEOUT, "Showing ad is timed out"));
            } else if (this.isAdShowInProgress$) {
              await V36.isValueChangeAsync(() => this.isAdShowInProgress$, false, {
                timeout: 0,
                checkInterval: 100
              });
              console.debug("MSAdInstance scheduleShowingAdTimeout completed");
              resolve();
            } else {
              resolve();
            }
          }, timeout);
        });
      }
      isPromise$(value) {
        return typeof value === "object" && value !== null && typeof value.then === "function";
      }
      isErrorWithCode$(error) {
        const {
          Utils: { Object: O32 }
        } = Ludex;
        return O32.hasOwn(error, "code") && typeof error.code === "string";
      }
      getErrorReason$(error) {
        const {
          Utils: { Object: O32 }
        } = Ludex;
        if (O32.hasOwn(error, "message") && typeof error.message === "string") {
          return { reason: error.message };
        }
        if (O32.hasOwn(error, "description") && typeof error.description === "string") {
          return { reason: error.description };
        }
        return null;
      }
      parseError$(error) {
        try {
          return typeof error === "string" ? error : JSON.stringify(error);
        } catch (e) {
          return "Unknown error";
        }
      }
      makeErrorWithCode$(code, error) {
        let errCode = code;
        let message = this.getErrorReason$(error)?.reason ?? "";
        if (!message) {
          message = this.parseError$(error);
        }
        if (this.isErrorWithCode$(error)) {
          errCode = error.code;
        }
        return new SDKCommonError_default(errCode, message);
      }
    };
    __name(_MSAdInstance, "MSAdInstance");
    MSAdInstance = _MSAdInstance;
    MSAdInstance_default = MSAdInstance;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSContext.ts
var _MSContext, MSContext, MSContext_default;
var init_MSContext = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSContext.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Context();
    _MSContext = class _MSContext extends Context_default {
      getID() {
        return this.currentContextID$;
      }
      getType() {
        return this.currentContextType$;
      }
      async switchAsync(contextId2, switchSilentlyIfSolo = false) {
        this.validateSwitchAsyncContextId$(contextId2);
        if (contextId2 === "SOLO" && switchSilentlyIfSolo) {
          this.currentContextID$ = null;
          this.currentContextType$ = "SOLO";
          return;
        }
        this.currentContextID$ = contextId2;
        this.currentContextType$ = "THREAD";
      }
      async getPlayersAsync() {
        await this.extra$.awaitRandomDelay();
        return this.currentContextPlayers$;
      }
    };
    __name(_MSContext, "MSContext");
    MSContext = _MSContext;
    MSContext_default = MSContext;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/functions/MSDailyNotification.ts
var DEFAULT_MESSAGE, _MSDailyNotification, MSDailyNotification, MSDailyNotification_default;
var init_MSDailyNotification = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/functions/MSDailyNotification.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    DEFAULT_MESSAGE = "How about diving into the game for a relaxing experience?";
    _MSDailyNotification = class _MSDailyNotification {
      async sendDailyNotification() {
        return this.sendDailyNotificationInstance$();
      }
      async sendDailyNotificationInstance$() {
        try {
          const {
            Configs: {
              GameSDKOptions: {
                MSGames: { ScheduleNotification }
              }
            }
          } = Ludex;
          if (!ScheduleNotification) {
            throw new Error("MsGamesNotification content not set up!");
          }
          const notificationPayloads = this.getNotificationPayloads$();
          this.batchSendNotification$(notificationPayloads);
          this.updatePlayerNotificationData$(notificationPayloads);
        } catch (error) {
          console.warn(error);
        }
      }
      getNotificationPayloads$() {
        const { player } = codex;
        const notificationData2 = player.getNotificationData();
        const result3 = {};
        const requiredDays = [];
        const currentTime = Date.now();
        let highestArrivalTime = currentTime;
        for (let i = 1; i <= 7; i++) {
          const dayKey = `D${i}`;
          const notificationArrivalTime = notificationData2[dayKey]?.arrivalDate || 0;
          if (currentTime < notificationArrivalTime) {
            highestArrivalTime = Math.max(highestArrivalTime, notificationArrivalTime);
            continue;
          }
          requiredDays.push(dayKey);
        }
        if (requiredDays.length === 0) {
          return result3;
        }
        const baseWaitDuration = Math.floor(highestArrivalTime - currentTime) / 1e3;
        for (let i = 0; i < requiredDays.length; i++) {
          const dayKey = requiredDays[i];
          const day = parseInt(dayKey.replace("D", ""));
          const payload = {
            description: this.getNotificationContent$(dayKey),
            minDelayInSeconds: 24 * 3600 * (i + 1) + baseWaitDuration,
            type: day
            // type 1-7
          };
          result3[dayKey] = payload;
        }
        return result3;
      }
      getNotificationContent$(key) {
        const {
          Configs: {
            GameSDKOptions: {
              MSGames: { ScheduleNotification }
            }
          }
        } = Ludex;
        if (!ScheduleNotification) {
          throw new Error("MsGamesNotification content not set up!");
        }
        if (this.validateNotificationKey$(key)) {
          const notificationContent = ScheduleNotification[key];
          if (!notificationContent || notificationContent === "") {
            return DEFAULT_MESSAGE;
          }
          return notificationContent;
        }
        return DEFAULT_MESSAGE;
      }
      updatePlayerNotificationData$(notificationPayloads) {
        const { player } = codex;
        const notificationData2 = player.getNotificationData();
        const currentTime = Date.now();
        for (let i = 1; i <= 7; i++) {
          const dayKey = `D${i}`;
          const payload = notificationPayloads[dayKey];
          if (!payload) {
            continue;
          }
          const { minDelayInSeconds } = payload;
          if (!minDelayInSeconds) {
            continue;
          }
          notificationData2[dayKey] = {
            arrivalDate: currentTime + minDelayInSeconds * 1e3
          };
        }
        player.setPlayerDataByName("notificationData", notificationData2);
      }
      batchSendNotification$(notificationPayloads) {
        if (!("scheduleNotificationAsync" in GameSDK.extra)) {
          throw new Error("scheduleNotificationAsync is not available!");
        }
        for (let i = 1; i <= 7; i++) {
          const dayKey = `D${i}`;
          const payload = notificationPayloads[dayKey];
          if (!payload) {
            continue;
          }
          GameSDK.extra.scheduleNotificationAsync(payload);
        }
      }
      validateNotificationKey$(key) {
        const {
          Utils: { Array: A10 }
        } = Ludex;
        return A10.has(["D1", "D2", "D3", "D4", "D5", "D6", "D7"], key);
      }
    };
    __name(_MSDailyNotification, "MSDailyNotification");
    MSDailyNotification = _MSDailyNotification;
    MSDailyNotification_default = MSDailyNotification;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSExtra.ts
var GameName2, _MSExtra, MSExtra, MSExtra_default;
var init_MSExtra = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSExtra.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_SDKCommonError();
    init_Extra();
    init_MSDailyNotification();
    GameName2 = "Tile-Connect-Deluxe";
    _MSExtra = class _MSExtra extends Extra_default {
      sdk$;
      dailyNotification$;
      shareImageBase64$ = void 0;
      notificationImageBase64$ = void 0;
      devPlaygroundAppId$;
      constructor(adapter) {
        super(adapter);
        this.sdk$ = adapter.sdk;
        this.adapter$ = adapter;
        this.dailyNotification$ = new MSDailyNotification_default();
        this.updateDevPlaygroundAppId$();
      }
      updateDevPlaygroundAppId$() {
        const gameConfig = define_GAME_SDK_CONFIG_default;
        if (!gameConfig) return;
        const { MSGames } = gameConfig;
        if (!MSGames) return;
        this.devPlaygroundAppId$ = MSGames.DevPlaygroundAppId;
      }
      async shareAsync() {
        try {
          if (!this.shareImageBase64$) {
            const base64 = await this.loadImageAsync$("./share-95x95.jpg");
            if (base64) {
              this.shareImageBase64$ = base64;
            }
          }
          await this.sdk$.shareAsync({
            title: GameName2,
            text: "Play now!",
            image: this.shareImageBase64$
          });
        } catch (error) {
          console.warn("shareAsync", error);
        }
      }
      switchGameAsync(appId) {
        const payload = {
          id: appId
        };
        return this.sdk$.switchGameAsync(payload);
      }
      submitGameResultsAsync(score2) {
        return this.sdk$.submitGameResultsAsync(score2);
      }
      async scheduleNotificationAsync(data) {
        if (!this.notificationImageBase64$) {
          try {
            const base64 = await this.loadImageAsync$("./notification-364x180.jpg");
            if (base64) {
              this.notificationImageBase64$ = base64;
            }
          } catch (error) {
            console.warn("scheduleNotificationAsync > notificationImageBase64", error);
          }
        }
        const notificationPayload = {
          playerId: this.adapter$.player.getID() || "Anonymous"
        };
        let defaultData = {
          title: GameName2,
          description: "We miss you!",
          type: 0,
          minDelayInSeconds: 300,
          imageData: this.notificationImageBase64$,
          callToAction: "Play now!",
          payload: JSON.stringify(notificationPayload)
        };
        defaultData = __spreadValues(__spreadValues({}, defaultData), data);
        try {
          await this.sdk$.scheduleNotificationAsync(defaultData);
        } catch (error) {
          console.warn("scheduleNotificationAsync", error);
        }
      }
      async sendDailyNotificationAsync() {
        return this.dailyNotification$.sendDailyNotification();
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
        return listSupports.indexOf(placement) > -1;
      }
      getBannerOffset() {
        return 20;
      }
      async loadImageAsync$(path) {
        const {
          Utils: {
            Image: { fetchImage, blobToDataImage }
          }
        } = Ludex;
        const blob = await fetchImage(path);
        const base64 = await blobToDataImage(blob);
        return base64;
      }
      notifyGameMuted() {
        this.sdk$.notifyGameMuted();
      }
      notifyGameUnmuted() {
        this.sdk$.notifyGameUnmuted();
      }
      getDevPlaygroundAppId() {
        const { Valid: V36 } = Ludex.Utils;
        if (this.devPlaygroundAppId$ && V36.isDebugger()) {
          return this.devPlaygroundAppId$;
        }
        return null;
      }
      throwMSSDKError$(code, message) {
        throw new SDKCommonError_default(code, message);
      }
      exceptionSetCloudSaveDataError(message) {
        this.throwMSSDKError$("SET_CLOUD_SAVE_DATA_ERROR" /* SET_CLOUD_SAVE_DATA_ERROR */, message);
      }
      exceptionGetCloudSaveDataError(message) {
        this.throwMSSDKError$("GET_CLOUD_SAVE_DATA_ERROR" /* GET_CLOUD_SAVE_DATA_ERROR */, message);
      }
      exceptionGetAllPurchasesFailedError(message) {
        this.throwMSSDKError$("GET_ALL_PURCHASES_FAILED_ERROR" /* GET_ALL_PURCHASES_FAILED_ERROR */,
        message);
      }
      exceptionGetPreviousPurchaseFailedError(message) {
        this.throwMSSDKError$("GET_PREVIOUS_PURCHASE_FAILED_ERROR" /* GET_PREVIOUS_PURCHASE_FAILED_ERROR */,
        message);
      }
      exceptionGetAddOnFailedError(message) {
        this.throwMSSDKError$("GET_ADD_ON_FAILED_ERROR" /* GET_ADD_ON_FAILED_ERROR */, message);
      }
      exceptionGetCatalogFailedError(message) {
        this.throwMSSDKError$("GET_CATALOG_FAILED_ERROR" /* GET_CATALOG_FAILED_ERROR */, message);
      }
      exceptionConsumeFailedError(message) {
        this.throwMSSDKError$("CONSUME_FAILED_ERROR" /* CONSUME_FAILED_ERROR */, message);
      }
      exceptionPurchaseFailedError(message) {
        this.throwMSSDKError$("PURCHASE_FAILED_ERROR" /* PURCHASE_FAILED_ERROR */, message);
      }
      exceptionSignatureVerificationFailed(message) {
        this.throwMSSDKError$("SIGNATURE_VERIFICATION_FAILED" /* SIGNATURE_VERIFICATION_FAILED */, message);
      }
    };
    __name(_MSExtra, "MSExtra");
    MSExtra = _MSExtra;
    MSExtra_default = MSExtra;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSPayments.ts
var PUBLIC_KEY, _MSPayments, MSPayments, MSPayments_default;
var init_MSPayments = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSPayments.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Payments();
    PUBLIC_KEY = "<RSAKeyValue><Modulus>0hFO5sN1aB78G7NxMCdgAnHga8CmptR1Gq5WQ0L3OmkIU+XEQT0bq9JgzSIf\
W0K3pYkkO1dmDYoVmHWF13GCqPQYVENhRRA5jGKRpo+efXJ/dkodB3D8rsAOPN0BUjvYZxf2FgfWHkrblpkWZ6iTpZ5LobSeTTW9\
7ZURGsdpolGQLSp8xsap38tBk0db0Pn1nn9It5vun/nJxthccM2rerc1rVI0inLVID/qvwBUM/iXBt4uwnOqIg/egLDewaySg2+S\
Vt4SWTaGHB+qYoSrcceO1eHVGjRUemX6/dsAcVSOZDiszEEcDxY3EwhcPbKU762SX9jUQIeFi4UB+9ckMQ==</Modulus><Expon\
ent>AQAB</Exponent></RSAKeyValue>";
    _MSPayments = class _MSPayments extends Payments_default {
      iap$;
      publicKey$ = null;
      constructor(adapter) {
        super(adapter);
        this.iap$ = adapter.sdk.iap;
        this.extra$ = adapter.extra;
      }
      base64ToArrayBuffer$(base64) {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
      }
      async getRSAKeyFromXML$(xmlString) {
        if (this.publicKey$) {
          return this.publicKey$;
        }
        const modulusMatch = xmlString.match(/<Modulus>([^<]+)<\/Modulus>/);
        const exponentMatch = xmlString.match(/<Exponent>([^<]+)<\/Exponent>/);
        if (!modulusMatch || !exponentMatch) {
          throw new Error("Invalid XML format: Missing Modulus or Exponent");
        }
        const convertToUrl = /* @__PURE__ */ __name((base64) => base64.replace(/\+/g, "-").replace(/\//g,
        "_").replace(/=/g, ""), "convertToUrl");
        const jwk = {
          kty: "RSA",
          n: convertToUrl(modulusMatch[1]),
          e: convertToUrl(exponentMatch[1]),
          alg: "RS256",
          ext: true
        };
        this.publicKey$ = await crypto.subtle.importKey(
          "jwk",
          jwk,
          {
            name: "RSASSA-PKCS1-v1_5",
            hash: "SHA-256"
          },
          true,
          ["verify"]
        );
        return this.publicKey$;
      }
      async verifySignature$(data, signature) {
        try {
          const encoder = new TextEncoder();
          const dataBuffer = encoder.encode(data);
          const signatureBuffer = this.base64ToArrayBuffer$(signature);
          const rsaPublicKey = await this.getRSAKeyFromXML$(PUBLIC_KEY);
          return crypto.subtle.verify("RSASSA-PKCS1-v1_5", rsaPublicKey, signatureBuffer, dataBuffer);
        } catch (error) {
          console.error("Signature verification error:", error);
          return false;
        }
      }
      async verifyPurchaseSuccessResponse$(response) {
        const receiptString = JSON.stringify(response.receipt);
        return this.verifySignature$(receiptString, response.receiptSignature);
      }
      async verifyConsumeSuccessResponse$(response) {
        const consumptionString = JSON.stringify(response.consumptionResult);
        return this.verifySignature$(consumptionString, response.consumptionSignature);
      }
      async verifyReceiptListResponse$(response) {
        const receiptString = JSON.stringify(response.receipts);
        return this.verifySignature$(receiptString, response.receiptSignature);
      }
      async purchaseAsync(purchaseConfig) {
        const { productID } = purchaseConfig;
        const result3 = await this.handleMSPurchaseAsync$(productID);
        const basePurchaseData = {
          productID,
          purchaseToken: "",
          paymentID: "",
          purchaseTime: "",
          signedRequest: "",
          developerPayload: ""
        };
        if ("code" in result3) {
          this.extra$.exceptionPurchaseFailedError(result3.description);
        }
        return __spreadProps(__spreadValues({}, basePurchaseData), {
          receipt: result3.receipt,
          receiptSignature: result3.receiptSignature
        });
      }
      async handleMSPurchaseAsync$(productId) {
        const response = await this.iap$.purchaseAsync({
          productId
        });
        if ("code" in response) {
          this.extra$.exceptionPurchaseFailedError(response.description);
        }
        const isValid = await this.verifyPurchaseSuccessResponse$(response);
        if (!isValid) {
          this.extra$.exceptionSignatureVerificationFailed("Purchase signature verification failed.");
        }
        return response;
      }
      async consumePurchaseAsync(productId) {
        const response = await this.iap$.consumeAsync({
          productId
        });
        if ("code" in response) {
          this.extra$.exceptionConsumeFailedError(response.description);
        }
        const isValid = await this.verifyConsumeSuccessResponse$(response);
        if (!isValid) {
          this.extra$.exceptionSignatureVerificationFailed("Consume signature verification failed.");
        }
      }
      async getAddOnAsync(productId) {
        const response = await this.iap$.getAddOnAsync({
          productId
        });
        if ("code" in response) {
          this.extra$.exceptionGetAddOnFailedError(response.description);
        }
        return response;
      }
      async getCatalogAsync() {
        const allProducts = await this.getAllAddOnsAsync$();
        if ("code" in allProducts) {
          this.extra$.exceptionGetCatalogFailedError(allProducts.description);
        }
        return allProducts.map((product) => ({
          productID: product.productId,
          title: product.title,
          description: product.description,
          price: product.price.listPrice.toString(),
          priceCurrencyCode: product.price.currencyCode,
          priceAmount: product.price.listPrice,
          inAppOfferToken: product.inAppOfferToken,
          publisherName: product.publisherName,
          isConsumable: product.isConsumable,
          msPriceData: product.price
        }));
      }
      async getAllAddOnsAsync$() {
        const gameId = this.extra$.getDevPlaygroundAppId();
        let payload;
        if (gameId) {
          payload = {
            productId: gameId
          };
        }
        const response = await this.iap$.getAllAddOnsAsync(payload);
        if ("code" in response) {
          this.extra$.exceptionGetPreviousPurchaseFailedError(response.description);
        }
        return response;
      }
      async getPreviousPurchaseAsync(productId) {
        const response = await this.iap$.getPurchasesAsync({
          productId
        });
        if ("code" in response) {
          this.extra$.exceptionGetPreviousPurchaseFailedError(response.description);
        }
        const isValid = await this.verifyPurchaseSuccessResponse$(response);
        if (!isValid) {
          this.extra$.exceptionSignatureVerificationFailed("Previous purchase signature verification\
 failed.");
        }
        return response;
      }
      async getPurchasesAsync() {
        const result3 = await this.getAllPurchasesAsync$();
        const basePurchaseData = [];
        if ("code" in result3) {
          this.extra$.exceptionGetCatalogFailedError(result3.description);
        }
        for (const receipt of result3.receipts) {
          basePurchaseData.push({
            productID: receipt.productId,
            purchaseToken: "",
            paymentID: "",
            purchaseTime: "",
            signedRequest: "",
            developerPayload: "",
            receipt,
            receiptSignature: result3.receiptSignature
          });
        }
        return basePurchaseData;
      }
      async getAllPurchasesAsync$() {
        const response = await this.iap$.getAllPurchasesAsync();
        if ("code" in response) {
          this.extra$.exceptionGetAllPurchasesFailedError(response.description);
        }
        const isValid = await this.verifyReceiptListResponse$(response);
        if (!isValid) {
          this.extra$.exceptionSignatureVerificationFailed("All purchases signature verification fai\
led.");
        }
        return response;
      }
    };
    __name(_MSPayments, "MSPayments");
    MSPayments = _MSPayments;
    MSPayments_default = MSPayments;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSPlayer.ts
var LOCAL_STORE_KEY, _MSPlayer, MSPlayer, MSPlayer_default;
var init_MSPlayer = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSPlayer.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Player();
    LOCAL_STORE_KEY = "MSPlayer";
    _MSPlayer = class _MSPlayer extends Player_default {
      cloudSave$;
      personalInfo$;
      signature$ = "";
      canLogin$ = false;
      maxLoginAttempts$ = 0;
      constructor(adapter) {
        super(adapter);
        this.cloudSave$ = adapter.sdk.cloudSave;
        this.extra$ = adapter.extra;
        this.updatePlatformConfigs$();
      }
      updatePlatformConfigs$() {
        const gameConfig = define_GAME_SDK_CONFIG_default;
        if (!gameConfig) return;
        const { MSGames } = gameConfig;
        if (!MSGames) return;
        this.canLogin$ = MSGames.LoginOnStart;
        this.maxLoginAttempts$ = MSGames.MaxLoginAttemptsPerDay;
      }
      async initPlayerAsync() {
        try {
          let user = await this.tryGettingSignedInPlayer$();
          if (this.canLogin$ && !user) {
            user = await this.tryMakingPlayerSignedIn$();
          }
          if (user) {
            await this.initLoggedMode$(user);
          } else {
            await this.initGuestMode$();
          }
        } catch (e) {
          await this.initGuestMode$();
        } finally {
          this.canLogin$ = true;
        }
      }
      async initLoggedMode$(user) {
        const { playerId: playerId2, signature, publisherPlayerId, playerDisplayName } = user;
        this.currentPlayerInfo$.playerId = playerId2;
        this.currentPlayerInfo$.playerName = playerDisplayName;
        this.signature$ = `${playerId2} ${signature}`;
        this.personalInfo$ = {
          id: playerId2,
          avatarIdHash: "0",
          lang: "en",
          publicName: playerDisplayName,
          uniqueID: publisherPlayerId,
          scopePermissions: {
            avatar: "forbid",
            public_name: "forbid"
          }
        };
        this.extra$.isGuest = false;
        this.initPlayerInfo(playerId2);
      }
      async initGuestMode$() {
        try {
          const playerId2 = this.getID();
          this.extra$.isGuest = true;
          this.initPlayerInfo(playerId2);
          const playerName = this.getName();
          this.personalInfo$ = {
            id: playerId2,
            avatarIdHash: "0",
            lang: "en",
            publicName: playerName,
            uniqueID: playerId2,
            scopePermissions: {
              avatar: "forbid",
              public_name: "forbid"
            }
          };
        } catch (e) {
        }
      }
      async tryGettingSignedInPlayer$(retries = 0) {
        try {
          return await this.adapter$.sdk.getSignedInUserAsync();
        } catch (error) {
          const {
            Utils: { Object: O32 }
          } = Ludex;
          if (O32.hasOwn(error, "code")) {
            if (error.code === "SERVICE_REQUEST_FAILED" && retries < 3) {
              return await this.tryGettingSignedInPlayer$(retries + 1);
            }
          }
          console.warn("tryGettingSignedInPlayer", error);
          return null;
        }
      }
      async tryMakingPlayerSignedIn$(retries = 0) {
        const {
          Utils: { Object: O32 }
        } = Ludex;
        try {
          this.validateLoginAttempts$();
          return await this.adapter$.sdk.signInAsync();
        } catch (error) {
          if (O32.hasOwn(error, "code")) {
            if (error.code === "SERVICE_REQUEST_FAILED" && retries < 3) {
              return await this.tryMakingPlayerSignedIn$(retries + 1);
            }
          }
          console.warn("tryMakingPlayerSignedIn", error);
          return null;
        }
      }
      validateLoginAttempts$() {
        const { Browser: B5, Valid: V36, Object: O32, Time: T3 } = Ludex.Utils;
        const data = B5.getLocalStorage(LOCAL_STORE_KEY);
        let attempts = 0;
        const now = Date.now();
        if (O32.hasOwn(data, "loginAttempts") && V36.isNumber(data.loginAttempts)) {
          attempts = data.loginAttempts;
        }
        if (O32.hasOwn(data, "lastLoginAttempt") && V36.isNumber(data.lastLoginAttempt)) {
          if (!T3.isToday(data.lastLoginAttempt)) {
            attempts = 0;
          }
        } else {
          attempts = 0;
        }
        if (attempts >= this.maxLoginAttempts$) {
          this.extra$.exceptionInvalidOperation("Maximum login attempts reached for today.");
        }
        B5.writeLocalStorage(LOCAL_STORE_KEY, {
          loginAttempts: attempts,
          lastLoginAttempt: now
        });
      }
      async getASIDAsync() {
        const { uniqueID } = this.personalInfo$;
        return uniqueID ?? "";
      }
      async getSignedASIDAsync() {
        const asid = await this.getASIDAsync();
        return {
          getASID: /* @__PURE__ */ __name(() => {
            return asid;
          }, "getASID"),
          getSignature: /* @__PURE__ */ __name(() => {
            return this.signature$;
          }, "getSignature")
        };
      }
      async getSignedPlayerInfoAsync() {
        return {
          getPlayerID: /* @__PURE__ */ __name(() => {
            return this.getID() ?? "10";
          }, "getPlayerID"),
          getSignature: /* @__PURE__ */ __name(() => {
            return this.signature$;
          }, "getSignature")
        };
      }
      async canSubscribeBotAsync() {
        return false;
      }
      subscribeBotAsync() {
        this.adapter$.extra.exceptionUnsupported();
      }
      getConnectedPlayersAsync() {
        this.adapter$.extra.exceptionUnsupported();
      }
      /* public async getDataAsync(keys: string[]): Promise<GameSDK.DataObject> {
              const { Object: O } = Ludex.Utils
      
              const gameId = this.extra$.getDevPlaygroundAppId()
              const data = await this.requestCloudSaveDataAsync$(gameId ?? undefined)
              const requiredData: GameSDK.DataObject = {}
              for (const key of keys) {
                  if (O.hasOwn(data, key)) {
                      requiredData[key] = data[key]
                  }
              }
      
              return requiredData
          }
      
          public async setDataAsync(data: GameSDK.DataObject): Promise<void> {
              const gameId = this.extra$.getDevPlaygroundAppId() ?? undefined
              return this.updateCloudSaveDataAsync$(data, gameId)
          } */
      async requestCloudSaveDataAsync$(gameId) {
        let response = {};
        if (gameId) {
          response = await this.cloudSave$.getDataAsync({ gameId });
        } else {
          response = await this.cloudSave$.getDataAsync();
        }
        this.validateCloudSaveData$(response);
        return this.parseCloudSaveResponse$(response);
      }
      validateCloudSaveData$(response) {
        const { code, description } = response;
        const isCodePresent = code && typeof code === "string";
        const isDescriptionPresent = description && typeof description === "string";
        if (isCodePresent && isDescriptionPresent) {
          this.extra$.exceptionGetCloudSaveDataError(description);
        }
      }
      async updateCloudSaveDataAsync$(data, gameId) {
        const config = {
          gameId,
          data: {
            stringContent: JSON.stringify(data)
          }
        };
        const response = await this.cloudSave$.saveDataAsync(config);
        if ("code" in response) {
          this.extra$.exceptionSetCloudSaveDataError(response.description);
        }
        return;
      }
      parseCloudSaveResponse$(response) {
        if ("stringContent" in response && typeof response.stringContent === "string") {
          return JSON.parse(response.stringContent);
        }
        this.extra$.exceptionGetCloudSaveDataError("Invalid cloud save response");
      }
    };
    __name(_MSPlayer, "MSPlayer");
    MSPlayer = _MSPlayer;
    MSPlayer_default = MSPlayer;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSTournamentInstance.ts
var _MSTournamentInstance, MSTournamentInstance, MSTournamentInstance_default;
var init_MSTournamentInstance = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSTournamentInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    _MSTournamentInstance = class _MSTournamentInstance {
      id$;
      title$;
      contextId$;
      payload$;
      endTime$;
      tournamentType$;
      constructor(leaderboardPayload) {
        const { _id, name: name2, type, createdAt, expireTime } = leaderboardPayload;
        const description = JSON.parse(leaderboardPayload.description);
        const payload = __spreadValues({
          leaderboardId: _id
        }, description);
        this.id$ = description.tournamentId;
        this.title$ = name2;
        this.contextId$ = description.contextId;
        this.payload$ = JSON.stringify(payload);
        this.endTime$ = Math.round((new Date(createdAt).getTime() + expireTime * 1e3) / 1e3);
        this.tournamentType$ = type === "world_tournament_leaderboard" ? "PAGE_HOSTED" : "DEFAULT";
      }
      getID() {
        return this.id$;
      }
      getTitle() {
        return this.title$;
      }
      getPayload() {
        return this.payload$;
      }
      getEndTime() {
        return this.endTime$;
      }
      getContextID() {
        return this.contextId$;
      }
      getTournamentType() {
        return this.tournamentType$;
      }
    };
    __name(_MSTournamentInstance, "MSTournamentInstance");
    MSTournamentInstance = _MSTournamentInstance;
    MSTournamentInstance_default = MSTournamentInstance;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSTournament.ts
var _MSTournament, MSTournament, MSTournament_default;
var init_MSTournament = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSTournament.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_Tournament();
    init_MSTournamentInstance();
    _MSTournament = class _MSTournament extends Tournament_default {
      async joinAsync(tournamentId) {
        const { Array: A10 } = Ludex.Utils;
        const tournaments = await this.getTournamentsAsync();
        const tournament = A10.search(tournaments, (tournament2) => tournament2.getID() === tournamentId);
        if (!tournament) {
          this.extra$.exceptionTournamentNotFound("Tournament could not be found.");
        }
        await GameSDK.context.switchAsync(tournament.getContextID());
      }
      async getTournamentsAsync() {
        const tournaments = [];
        try {
          const { leaderboard } = codex;
          const leaderboardData = await leaderboard.requestLeaderboardsAsync({
            limit: 100,
            type: "world_tournament_leaderboard"
          });
          for (const data of leaderboardData) {
            const tournament = new MSTournamentInstance_default(data);
            tournaments.push(tournament);
          }
        } catch (error) {
          console.warn("fetchGlobalTournamentLeaderboardAsync", error);
        }
        return tournaments;
      }
    };
    __name(_MSTournament, "MSTournament");
    MSTournament = _MSTournament;
    MSTournament_default = MSTournament;
  }
});

// extensions/ludex/src/game-sdk/adapters/msgames/MSAdapter.ts
var _MSAdapter, MSAdapter, MSAdapter_default;
var init_MSAdapter = __esm({
  "extensions/ludex/src/game-sdk/adapters/msgames/MSAdapter.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    init_GameSDK();
    init_MSAdInstance();
    init_MSContext();
    init_MSExtra();
    init_MSPayments();
    init_MSPlayer();
    init_MSTournament();
    _MSAdapter = class _MSAdapter extends GameSDK_default2 {
      sdk;
      adPlacementList$ = /* @__PURE__ */ new Set();
      constructor(sdk2) {
        super();
        this.sdk = sdk2;
      }
      initialize$() {
        super.initialize$();
        this.extra = new MSExtra_default(this);
        this.player = new MSPlayer_default(this);
        this.context = new MSContext_default(this);
        this.tournament = new MSTournament_default(this);
        this.payments = new MSPayments_default(this);
        this.rewardedVideoInstance$ = new MSAdInstance_default("rewarded", this.sdk);
        this.interstitialAdInstance$ = new MSAdInstance_default("interstitial", this.sdk);
      }
      async checkSDKInitialized$() {
        if (!this.sdk || !this.sdk.isInMicrosoftStart()) {
          this.extra.exceptionInvalidOperation("Microsoft Games SDK is not initialized");
        }
      }
      async initializeAsync() {
        if (this.isInitialized) return;
        await super.initializeAsync();
        this.isInitialized = false;
        try {
          this.extra.displayWarnLoading(false);
          await this.player.initPlayerAsync();
          this.isInitialized = true;
        } catch (error) {
          console.debug(error);
          if (this.isNeedSDK$()) {
            throw new Error("Microsoft Games SDK not initialized");
          }
          console.warn("Microsoft Games SDK not initialized, running without platform sdk");
        }
      }
      getLocale() {
        return this.sdk.getLocale();
      }
      getSDKVersion() {
        return "v1.0.0-rc.21";
      }
      getSDKName() {
        return "MsGames";
      }
      async canCreateShortcutAsync() {
        return true;
      }
      async createShortcutAsync() {
        try {
          await this.sdk.promptInstallAsync();
        } catch (error) {
          console.warn("createShortcutAsync", error);
        }
      }
      async getInterstitialAdAsync() {
        return this.interstitialAdInstance$;
      }
      async getRewardedVideoAsync() {
        return this.rewardedVideoInstance$;
      }
      async getRewardedInterstitialAsync() {
        return this.rewardedVideoInstance$;
      }
      async loadBannerAdAsync(_placementId) {
        const {
          Configs: {
            Ads: { BannerDisplayAdOptions }
          }
        } = Ludex;
        for (const ad of BannerDisplayAdOptions) {
          const { Position, BannerWidth, BannerHeight } = ad;
          const placement = `${Position}:${BannerWidth}x${BannerHeight}`;
          if (this.extra.isValidDisplayAdPlacement(placement)) {
            this.adPlacementList$.add(placement);
          }
        }
        await this.showBannerAdsAsync$();
      }
      async hideBannerAdAsync(_placementId) {
        try {
          await this.sdk.hideDisplayAdsAsync();
        } catch (error) {
          console.warn("\u{1F680} > hideBannerAdAsync", error);
        }
      }
      async getEntryPointAsync() {
        const entryPointInfo = this.sdk.getEntryPointInfo();
        if (this.sdk.getNotificationPayload()) {
          return "msn_notification";
        }
        return entryPointInfo.entryPointId;
      }
      async showBannerAdsAsync$() {
        if (this.adPlacementList$.size === 0) {
          this.extra.exceptionInvalidOperation("Invalid banner ad placement");
        } else {
          try {
            const placements = [...this.adPlacementList$];
            await this.sdk.showDisplayAdsAsync(placements);
          } catch (error) {
          }
        }
        this.adPlacementList$.clear();
      }
      async getTournamentAsync() {
        const currentContextID = this.context.getID();
        const {
          Utils: { Array: A10, Valid: V36 }
        } = Ludex;
        if (!V36.isString(currentContextID)) {
          this.extra.exceptionInvalidOperation("Not in a context");
        }
        const tournaments = await this.tournament.getTournamentsAsync();
        const wantedTournament = A10.search(tournaments, (tournament) => {
          return tournament.getContextID() === currentContextID;
        });
        if (!wantedTournament) {
          this.extra.exceptionTournamentNotFound("A Tournament with current context was not found");
        }
        return wantedTournament;
      }
    };
    __name(_MSAdapter, "MSAdapter");
    MSAdapter = _MSAdapter;
    MSAdapter_default = MSAdapter;
  }
});

// extensions/ludex/src/utils/function/accessBlocker.ts
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
var _AccessBlocker, AccessBlocker, accessBlocker, wrapGetterToBlockObjectAccess, accessBlocker_default;
var init_accessBlocker = __esm({
  "extensions/ludex/src/utils/function/accessBlocker.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    __name(simpleHash, "simpleHash");
    _AccessBlocker = class _AccessBlocker {
      usedCallLocationHashes$;
      constructor() {
        this.usedCallLocationHashes$ = /* @__PURE__ */ new Set();
      }
      getCallerLine$() {
        const stack = new Error().stack;
        if (!stack) return null;
        let lineStart = 0;
        for (let i = 0; i < 4; i++) {
          const nextNl = stack.indexOf("\n", lineStart);
          if (nextNl === -1) return null;
          lineStart = nextNl + 1;
        }
        const lineEnd = stack.indexOf("\n", lineStart);
        const callerLine = lineEnd === -1 ? stack.substring(lineStart) : stack.substring(lineStart, lineEnd);
        return callerLine ? callerLine.trim() : null;
      }
      blockAccess() {
        try {
          const callerLine = this.getCallerLine$();
          if (!callerLine) return false;
          const locationHash = simpleHash(callerLine);
          if (this.usedCallLocationHashes$.has(locationHash)) return false;
          const blockedKeywords = ["eval", "at <", "(<"];
          if (blockedKeywords.some((keyword) => callerLine.includes(keyword))) {
            throw new Error(`Access blocked for the caller: ${callerLine}`);
          }
          this.usedCallLocationHashes$.add(locationHash);
          return false;
        } catch (error) {
          console.warn("Block access encountered an error:", error);
          return true;
        }
      }
    };
    __name(_AccessBlocker, "AccessBlocker");
    AccessBlocker = _AccessBlocker;
    accessBlocker = new AccessBlocker();
    wrapGetterToBlockObjectAccess = /* @__PURE__ */ __name((source, key) => {
      if (true) return;
      if (false) return;
      const propertyDescriptor = Object.getOwnPropertyDescriptor(source, key);
      if (!propertyDescriptor) {
        console.debug(`Property descriptor not found for key: ${key}`);
        return;
      }
      const { value, get: get2, initializer } = propertyDescriptor;
      if (value && typeof value !== "object") {
        console.debug(`Property value is not an object for key: ${key}`);
        return;
      }
      if (get2 && typeof get2 !== "function") {
        console.debug(`Getter is not a function for key: ${key}`);
        return;
      }
      if (initializer && typeof initializer !== "function") {
        console.debug(`Initializer is not a function for key: ${key}`);
        return;
      }
      Object.defineProperty(source, key, {
        enumerable: false,
        get() {
          if (accessBlocker.blockAccess()) return;
          return value ?? initializer?.call(this) ?? get2?.call(this);
        },
        set() {
          console.debug(`Setter called for key: ${key}, modification is blocked.`);
        }
      });
    }, "wrapGetterToBlockObjectAccess");
    accessBlocker_default = wrapGetterToBlockObjectAccess;
  }
});

// extensions/ludex/src/GameSDK.ts
function autoDetectAndInitializeSDKAdapter() {
  let sdkAdapter;
  const w = window;
  let sdkName = "GameSDK";
  if ("FBInstant" in w) {
    sdkName = "FBInstant";
    sdkAdapter = new empty_script_default(w.FBInstant);
  } else if ("YaGames" in w) {
    sdkName = "Yandex";
    sdkAdapter = new empty_script_default(window.YaGames);
  } else if ("funmax" in w) {
    sdkName = "Xiaomi";
    sdkAdapter = new empty_script_default(window.funmax);
  } else if ("$msstart" in w) {
    sdkName = "MsGames";
    sdkAdapter = new MSAdapter_default(window.$msstart);
  } else if ("gdsdk" in w) {
    sdkName = "GameDistribution";
    sdkAdapter = new empty_script_default(window.gdsdk);
  } else if ("h5sdk" in w) {
    sdkName = "TranssionH5";
    sdkAdapter = new empty_script_default(window.h5sdk);
  } else if ("CrazyGames" in w) {
    sdkName = "CrazyGames";
    sdkAdapter = new empty_script_default(window.CrazyGames.SDK);
  } else if ("GlanceGamingAdInterface" in w) {
    sdkName = "Glance";
    sdkAdapter = new empty_script_default(window.GlanceGamingAdInterface);
  } else if ("mraid" in w && true) {
    sdkName = "Playable";
    sdkAdapter = new empty_script_default(window.mraid);
  } else if ("MetaHorizon" in w) {
    sdkName = "Horizon";
    sdkAdapter = new empty_script_default(window.MetaHorizon);
  } else {
    sdkAdapter = new GameSDK_default2();
  }
  console.info(`GameSDK loaded (${sdkName})`);
  console.groupEnd();
  return sdkAdapter;
}
var init_GameSDK2 = __esm({
  "extensions/ludex/src/GameSDK.ts"() {
    "use strict";
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_MSAdapter();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_GameSDK();
    init_accessBlocker();
    console.groupCollapsed("\u26A1\uFE0F Ludex initialized");
    __name(autoDetectAndInitializeSDKAdapter, "autoDetectAndInitializeSDKAdapter");
    console.groupCollapsed("\u{1F579}\uFE0F GameSDK");
    window.GameSDK = Object.seal(autoDetectAndInitializeSDKAdapter());
    accessBlocker_default(window, "GameSDK");
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module2) {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_console();
    init_track_events();
    init_track_errors();
    init_GameSDK2();
    init_progress();
    init_init_core();
    init_navigator();
    init_performance();
    init_browser();
    init_init();
    init_google_analytics();
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events11() {
    }
    __name(Events11, "Events");
    if (Object.create) {
      Events11.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events11().__proto__) prefix = false;
    }
    function EE(fn2, context, once) {
      this.fn = fn2;
      this.context = context;
      this.once = once || false;
    }
    __name(EE, "EE");
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
    __name(addListener, "addListener");
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events11();
      else delete emitter._events[evt];
    }
    __name(clearEvent, "clearEvent");
    function EventEmitter2() {
      this._events = new Events11();
      this._eventsCount = 0;
    }
    __name(EventEmitter2, "EventEmitter");
    EventEmitter2.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
      var names2 = [], events, name2;
      if (this._eventsCount === 0) return names2;
      for (name2 in events = this._events) {
        if (has.call(events, name2)) names2.push(prefix ? name2.slice(1) : name2);
      }
      if (Object.getOwnPropertySymbols) {
        return names2.concat(Object.getOwnPropertySymbols(events));
      }
      return names2;
    }, "eventNames");
    EventEmitter2.prototype.listeners = /* @__PURE__ */ __name(function listeners2(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    }, "listeners");
    EventEmitter2.prototype.listenerCount = /* @__PURE__ */ __name(function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners2 = this._events[evt];
      if (!listeners2) return 0;
      if (listeners2.fn) return 1;
      return listeners2.length;
    }, "listenerCount");
    EventEmitter2.prototype.emit = /* @__PURE__ */ __name(function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners2 = this._events[evt], len = arguments.length, args, i;
      if (listeners2.fn) {
        if (listeners2.once) this.removeListener(event, listeners2.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners2.fn.call(listeners2.context), true;
          case 2:
            return listeners2.fn.call(listeners2.context, a1), true;
          case 3:
            return listeners2.fn.call(listeners2.context, a1, a2), true;
          case 4:
            return listeners2.fn.call(listeners2.context, a1, a2, a3), true;
          case 5:
            return listeners2.fn.call(listeners2.context, a1, a2, a3, a4), true;
          case 6:
            return listeners2.fn.call(listeners2.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners2.fn.apply(listeners2.context, args);
      } else {
        var length = listeners2.length, j;
        for (i = 0; i < length; i++) {
          if (listeners2[i].once) this.removeListener(event, listeners2[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners2[i].fn.call(listeners2[i].context);
              break;
            case 2:
              listeners2[i].fn.call(listeners2[i].context, a1);
              break;
            case 3:
              listeners2[i].fn.call(listeners2[i].context, a1, a2);
              break;
            case 4:
              listeners2[i].fn.call(listeners2[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners2[i].fn.apply(listeners2[i].context, args);
          }
        }
      }
      return true;
    }, "emit");
    EventEmitter2.prototype.on = /* @__PURE__ */ __name(function on(event, fn2, context) {
      return addListener(this, event, fn2, context, false);
    }, "on");
    EventEmitter2.prototype.once = /* @__PURE__ */ __name(function once(event, fn2, context) {
      return addListener(this, event, fn2, context, true);
    }, "once");
    EventEmitter2.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(event, fn2, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn2) {
        clearEvent(this, evt);
        return this;
      }
      var listeners2 = this._events[evt];
      if (listeners2.fn) {
        if (listeners2.fn === fn2 && (!once || listeners2.once) && (!context || listeners2.context ===
        context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners2.length; i < length; i++) {
          if (listeners2[i].fn !== fn2 || once && !listeners2[i].once || context && listeners2[i].context !==
          context) {
            events.push(listeners2[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    }, "removeListener");
    EventEmitter2.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events11();
        this._eventsCount = 0;
      }
      return this;
    }, "removeAllListeners");
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter2;
    }
  }
});

// extensions/ludex/src/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/Ludex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/constants/CoreEvents.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var CoreEvents = {
  // Core
  /**
   * Event fired when the core is booting.
   */
  CORE_BOOTING: "core-booting",
  /**
   * Event fired to request the core to start. This is a trigger event.
   *
   * This event is fired after the game engine had initiated successfully
   */
  REQUEST_CORE_START: "core-start",
  /**
   * Event fired when the core has begun the starting process.
   */
  CORE_STARTING: "core-starting",
  /**
   * Event fired when the core is ready.
   */
  CORE_READY: "core-ready",
  // Analytics
  /**
   * Event fired when the analytics is ready.
   */
  ANALYTICS_READY: "analytics-ready",
  // Game SDK
  /**
   * Event fired when the game SDK is ready.
   *
   * This event is fired after `GameSDK.initializeAsync()` finished.
   */
  GAME_SDK_READY: "game-sdk-ready",
  /**
   * Event fired when the game SDK is started.
   *
   * This event is fired after `GameSDK.startGameAsync()` finished.
   */
  GAME_SDK_STARTED: "game-sdk-started",
  // Context
  /**
   * Event fired when the context data is processed.
   *
   * This event is fired after `PLAYER_INFO_LOADED`.
   */
  CONTEXT_DATA_PROCESSED: "context-data-processed",
  /**
   * Event fired when the context session type is detected.
   */
  CONTEXT_SESSION_TYPE_DETECTED: "context-session-type-detected",
  // Game app
  /**
   * Event fired when the game is ready.
   *
   * This event is fired after `CONTEXT_DATA_PROCESSED`.
   */
  GAME_READY: "game-ready",
  /**
   * Event fired when the bundle is ready.
   *
   * This event is fired after all critical bundles have finished being downloaded (excluding the main scene).
   */
  BUNDLE_READY: "bundle-ready",
  // Player
  /**
   * Event fired when the player info is loaded.
   *
   * This event is fired from within the following flow: `CORE_STARTING -> PLAYER_INFO_LOADED -> CORE_READY`.
   */
  PLAYER_INFO_LOADED: "player-info-loaded",
  // Ads
  /**
   * Event fired when the request to show banner ads is made.
   */
  REQUEST_SHOW_BANNER_ADS: "request-show-banner-ads",
  // Scene
  /**
   * Event fired when the scene is switched.
   */
  SWITCH_SCENE: "switch-scene",
  /**
   * Event fired when the scene is loaded.
   */
  SCENE_LOADED: "scene-loaded",
  /**
   * Event fired when the scene is preloaded.
   */
  PRELOAD_SCENE: "preload-scene",
  /**
   * Event fired when the scene progress is updated.
   */
  SCENE_PROGRESS: "scene-progress",
  /**
   * Event fired when the scene is launched.
   */
  SCENE_LAUNCHED: "scene-launched",
  /**
   * Event fired when the scene is rendered.
   */
  SCENE_RENDERED: "scene-rendered",
  /**
   * Event fired when the scene is before rendered.
   */
  SCENE_BEFORE_RENDERED: "scene-before-rendered",
  /**
   * Event fired when the scene is marked as test scene.
   */
  MARK_IS_TEST_SCENE: "mark-is-test-scene",
  // Screen
  /**
   * Event fired when the screen is preloaded.
   */
  PRELOAD_SCREEN: "preload-screen",
  /**
   * Event fired when the screens are preloaded.
   */
  PRELOAD_SCREENS: "preload-screens",
  /**
   * Event fired when the opening screen is opened.
   */
  OPENING_SCREEN: "opening-screen",
  /**
   * Event fired to request opening a screen.
   */
  OPEN_SCREEN: "open-screen",
  /**
   * Event fired when a screen has been successfully opened.
   */
  OPENED_SCREEN: "opened-screen",
  /**
   * Event fired when a screen is being closed.
   */
  CLOSING_SCREEN: "closing-screen",
  /**
   * Event fired to request closing a screen.
   */
  CLOSE_SCREEN: "close-screen",
  /**
   * Event fired when the screen is closed.
   */
  CLOSED_SCREEN: "closed-screen",
  // Plugins
  /**
   * Event fired when the core plugin is ready.
   */
  CORE_PLUGIN_READY: "core-plugin-ready",
  /**
   * Event fired when the module plugin is ready.
   */
  MODULE_PLUGIN_READY: "module-plugin-ready",
  // Ads plugin
  /**
   * Event fired when the ad is loading.
   */
  AD_LOADING: "ad-loading",
  /**
   * Event fired when the ad is loaded.
   */
  AD_LOADED: "ad-loaded",
  /**
   * Event fired when the ad is loading failed.
   */
  AD_LOAD_FAILED: "ad-load-failed",
  /**
   * Event fired when the ad is showing.
   */
  AD_SHOWING: "ad-showing",
  /**
   * Event fired when the ad is shown.
   */
  AD_SHOW: "ad-show",
  /**
   * Event fired when the ad is closed.
   */
  AD_CLOSED: "ad-closed",
  /**
   * Event fired when the ad show is failed.
   */
  AD_SHOW_FAILED: "ad-show-failed",
  // Language plugin
  /**
   * Event fired when the language is changed.
   */
  LANGUAGE_CHANGED: "language-changed",
  /**
   * Event fired when the language is requested.
   */
  REQUEST_LANGUAGE: "request-language",
  // Remote Config plugin
  /**
   * Event fired when the hot reload is requested.
   */
  REQUEST_HOT_RELOAD: "request-hot-reload",
  /**
   * Event fired when the config is saved.
   */
  REQUEST_SAVE_CONFIG: "request-save-config",
  /**
   * Command to request an update to the configuration.
   */
  REQUEST_UPDATE_CONFIG: "request-update-config",
  /**
   * Event fired when the configuration update is completed.
   */
  REMOTE_CONFIG_UPDATED: "remote-config-updated",
  // Visibility plugin
  /**
   * Event fired when the visibility is hidden.
   */
  VISIBILITY_HIDDEN: "visibility-hidden",
  /**
   * Event fired when the visibility is visible.
   */
  VISIBILITY_VISIBLE: "visibility-visible",
  // Adaptive Performance plugin
  /**
   * Event fired when the game is resized.
   */
  REQUEST_RESIZE_GAME: "request-resize-game",
  /**
   * Event fired when the quality is upgraded.
   */
  REQUEST_QUALITY_UPGRADED: "request-quality-upgraded",
  /**
   * Event fired when the quality is downgraded.
   */
  REQUEST_QUALITY_DOWNGRADED: "request-quality-downgraded",
  // POP-UPS
  /**
   * Event fired when the game SDK popup is responded.
   */
  GAME_SDK_POPUP_RESPONDED: "game-sdk-popup-responded"
};
var CoreEvents_default = CoreEvents;

// extensions/ludex/src/constants/MatchModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/constants/MatchModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/type-guard/common/asConst.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func = /* @__PURE__ */ __name((data) => data, "func");
var asConst_default = func;

// extensions/ludex/src/type-guard/common/noop.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func2 = /* @__PURE__ */ __name(() => {
}, "func");
var noop_default = func2;

// extensions/ludex/src/type-guard/index.ts
var type_guard_default = { asConst: asConst_default, noop: noop_default };

// extensions/ludex/src/utils/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/array/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/array/at.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var at = /* @__PURE__ */ __name((arr, idx) => {
  if (!arr) return void 0;
  if (idx < 0) {
    return arr[arr.length + idx];
  }
  return arr[idx];
}, "at");
var at_default = at;

// extensions/ludex/src/utils/array/chunk.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/array/length.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/array/fillWith.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func3 = /* @__PURE__ */ __name((size, mapFn) => {
  const result3 = [];
  for (let i = 0; i < size; i++) {
    result3.push(mapFn(i));
  }
  return result3;
}, "func");
var fillWith_default = func3;

// extensions/ludex/src/utils/array/length.ts
var func4 = /* @__PURE__ */ __name((length) => {
  return fillWith_default(length, () => void 0);
}, "func");
var length_default = func4;

// extensions/ludex/src/utils/array/chunk.ts
var func5 = /* @__PURE__ */ __name((array, size) => {
  const calc = Math.ceil(array.length / size);
  return length_default(calc).map((_v, i) => {
    return array.slice(i * size, i * size + size);
  });
}, "func");
var chunk_default = func5;

// extensions/ludex/src/utils/array/difference.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func6 = /* @__PURE__ */ __name((source, target) => {
  return source.filter((x) => target.indexOf(x) < 0);
}, "func");
var difference_default = func6;

// extensions/ludex/src/utils/array/dod.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func7 = /* @__PURE__ */ __name((data, keys = []) => {
  const result3 = {};
  for (const value of data) {
    for (const key in value) {
      const K = key;
      if (!keys.includes(K)) continue;
      if (!result3[K]) {
        result3[K] = [];
      }
      result3[K].push(value[K]);
    }
  }
  return result3;
}, "func");
var dod_default = func7;

// extensions/ludex/src/utils/array/flatten.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func8 = /* @__PURE__ */ __name((array) => {
  return array.reduce((acc, val) => acc.concat(val), []);
}, "func");
var flatten_default = func8;

// extensions/ludex/src/utils/array/has.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func9 = /* @__PURE__ */ __name((array, target) => {
  return array.indexOf(target) >= 0;
}, "func");
var has_default = func9;

// extensions/ludex/src/utils/array/limit.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func10 = /* @__PURE__ */ __name((array, limit) => {
  array.length = Math.min(array.length, limit);
  return array;
}, "func");
var limit_default = func10;

// extensions/ludex/src/utils/array/reverse.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func11 = /* @__PURE__ */ __name((array) => {
  for (let i = 0; i < array.length / 2; i++) {
    ;
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }
}, "func");
var reverse_default = func11;

// extensions/ludex/src/utils/array/search.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func12 = /* @__PURE__ */ __name((array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      return array[i];
    }
  }
  return void 0;
}, "func");
var search_default = func12;

// extensions/ludex/src/utils/array/searchIndex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func13 = /* @__PURE__ */ __name((array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      return i;
    }
  }
  return -1;
}, "func");
var searchIndex_default = func13;

// extensions/ludex/src/utils/array/shuffle.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func14 = /* @__PURE__ */ __name((array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}, "func");
var shuffle_default = func14;

// extensions/ludex/src/utils/array/split.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var split = /* @__PURE__ */ __name((array, isLeft) => array.reduce(
  (acc, item, index) => {
    if (isLeft(item, index, array)) {
      acc.left.push(item);
    } else {
      acc.right.push(item);
    }
    return acc;
  },
  { left: [], right: [] }
), "split");
var split_default = split;

// extensions/ludex/src/utils/array/toShuffled.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func15 = /* @__PURE__ */ __name((array) => {
  const copy = [...array];
  shuffle_default(copy);
  return copy;
}, "func");
var toShuffled_default = func15;

// extensions/ludex/src/utils/array/unique.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var unique = /* @__PURE__ */ __name((value, index, self2) => {
  return self2.indexOf(value) === index && value !== null && value !== void 0;
}, "unique");
var func16 = /* @__PURE__ */ __name((array) => {
  return array.filter(unique);
}, "func");
var unique_default = func16;

// extensions/ludex/src/utils/array/index.ts
var array_default = {
  at: at_default,
  chunk: chunk_default,
  difference: difference_default,
  dod: dod_default,
  fillWith: fillWith_default,
  length: length_default,
  limit: limit_default,
  reverse: reverse_default,
  search: search_default,
  searchIndex: searchIndex_default,
  has: has_default,
  shuffle: shuffle_default,
  toShuffled: toShuffled_default,
  unique: unique_default,
  flatten: flatten_default,
  split: split_default
};

// extensions/ludex/src/utils/browser/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/browser/createCanvas.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isOffscreenCanvasSupported = /* @__PURE__ */ __name(() => "OffscreenCanvas" in window && typeof OffscreenCanvas !==
"undefined", "isOffscreenCanvasSupported");
var createOffscreenCanvas = /* @__PURE__ */ __name((contextType2, contextAttributes) => {
  const canvas = new OffscreenCanvas(0, 0);
  const context = canvas.getContext(contextType2, contextAttributes);
  if (!context) {
    console.warn(`Failed to get ${contextType2} context from OffscreenCanvas`);
    return null;
  }
  return { canvas, context };
}, "createOffscreenCanvas");
var createHTMLCanvas = /* @__PURE__ */ __name((contextType2, contextAttributes) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext(contextType2, contextAttributes);
  if (!context) {
    console.warn(`Failed to get ${contextType2} context from HTMLCanvas`);
    return null;
  }
  return { canvas, context };
}, "createHTMLCanvas");
var func17 = /* @__PURE__ */ __name((options) => {
  const { contextType: contextType2 = "2d", contextAttributes = {}, type = "canvas" } = options;
  if (type === "canvas") {
    return createHTMLCanvas(contextType2, contextAttributes);
  }
  if (type === "offscreen" && isOffscreenCanvasSupported()) {
    return createOffscreenCanvas(contextType2, contextAttributes);
  }
  return null;
}, "func");
var createCanvas_default = func17;

// extensions/ludex/src/utils/browser/getIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/browser/openIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/valid/isEmpty.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/valid/isFalsy.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func18 = /* @__PURE__ */ __name((value) => {
  return !value || value === "" || value === 0 || typeof value === "number" && isNaN(value);
}, "func");
var isFalsy_default = func18;

// extensions/ludex/src/utils/valid/isEmpty.ts
var func19 = /* @__PURE__ */ __name((value) => {
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
}, "func");
var isEmpty_default = func19;

// extensions/ludex/src/utils/browser/openIndexedDB.ts
var gameName = "Tile-Connect-Deluxe";
var dbInstances = {};
var getDBName = /* @__PURE__ */ __name((dbName) => {
  if (isEmpty_default(dbName)) {
    return GameSDK.getSDKName() ?? "Storage";
  }
  return dbName ?? "Storage";
}, "getDBName");
var openIndexedDB = /* @__PURE__ */ __name((dbName) => {
  const fullDBName = `${gameName}_${dbName}`;
  if (dbInstances[fullDBName]) {
    return Promise.resolve(dbInstances[fullDBName]);
  }
  return new Promise((resolve, reject) => {
    let latestVersion = 1;
    let request;
    const tryOpen = /* @__PURE__ */ __name((version) => {
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
        if (!db.objectStoreNames.contains(dbName)) {
          latestVersion++;
          tryOpen(latestVersion);
          return;
        }
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
    }, "tryOpen");
    tryOpen(latestVersion);
  });
}, "openIndexedDB");
var openIndexedDB_default = openIndexedDB;

// extensions/ludex/src/utils/browser/getIndexedDB.ts
var func20 = /* @__PURE__ */ __name(async (key, dbName) => {
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
}, "func");
var getIndexedDB_default = func20;

// extensions/ludex/src/utils/browser/getLocalStorage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/json/decode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func21 = /* @__PURE__ */ __name((string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
}, "func");
var decode_default = func21;

// extensions/ludex/src/utils/browser/getLocalStorage.ts
var func22 = /* @__PURE__ */ __name((key) => {
  try {
    if (!localStorage) return null;
    const data = localStorage.getItem(key);
    if (data === null) return null;
    return decode_default(data);
  } catch (error) {
    console.error("getLocalStorage error", error);
    return null;
  }
}, "func");
var getLocalStorage_default = func22;

// extensions/ludex/src/utils/browser/getLocale.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/json/clone.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/json/encode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func23 = /* @__PURE__ */ __name((data) => {
  try {
    return JSON.stringify(data, null, 0);
  } catch (e) {
    return "";
  }
}, "func");
var encode_default = func23;

// extensions/ludex/src/utils/json/clone.ts
var func24 = /* @__PURE__ */ __name((object) => {
  return decode_default(encode_default(object));
}, "func");
var clone_default = func24;

// extensions/ludex/src/utils/browser/getLocale.ts
var func25 = /* @__PURE__ */ __name(() => {
  const defaultLocale = "en_US";
  const languages = clone_default(window.navigator.languages) || [];
  const locale2 = search_default(languages, (lang) => lang.indexOf("-") > -1);
  if (!locale2) return defaultLocale;
  if (locale2.indexOf("-") === -1) {
    return defaultLocale;
  }
  return locale2.replace("-", "_");
}, "func");
var getLocale_default = func25;

// extensions/ludex/src/utils/browser/getQueryParams.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func26 = /* @__PURE__ */ __name(() => {
  const query = window.location.search.substring(1);
  if (!query) return {};
  const vars = query.split("&");
  const result3 = {};
  for (const element of vars) {
    const pair = element.split("=");
    result3[pair[0]] = decodeURIComponent(pair[1]);
  }
  return result3;
}, "func");
var getQueryParams_default = func26;

// extensions/ludex/src/utils/browser/getScreenHeight.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func27 = /* @__PURE__ */ __name(() => {
  const { body, documentElement } = document;
  const { clientHeight: bodyClientHeight } = body;
  const { clientHeight: docClientHeight } = documentElement;
  return Math.max(docClientHeight, bodyClientHeight) || 0;
}, "func");
var getScreenHeight_default = func27;

// extensions/ludex/src/utils/browser/getScreenWidth.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func28 = /* @__PURE__ */ __name(() => {
  const { body, documentElement } = document;
  const { clientWidth: bodyClientWidth } = body;
  const { clientWidth: docClientWidth } = documentElement;
  return Math.max(docClientWidth, bodyClientWidth) || 0;
}, "func");
var getScreenWidth_default = func28;

// extensions/ludex/src/utils/browser/removeKeyLocalStorage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func29 = /* @__PURE__ */ __name((key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("removeKeyLocalStorage error", error);
  }
}, "func");
var removeKeyLocalStorage_default = func29;

// extensions/ludex/src/utils/browser/setIndexedDB.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func30 = /* @__PURE__ */ __name(async (key, data, dbName) => {
  try {
    if (isEmpty_default(data)) return;
    const correctDbName = getDBName(dbName);
    const db = await openIndexedDB_default(correctDbName);
    if (!db.objectStoreNames.contains(correctDbName)) {
      console.warn("SetIndexedDB: db not found", correctDbName);
      return;
    }
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
}, "func");
var setIndexedDB_default = func30;

// extensions/ludex/src/utils/browser/vibrate.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isSupportVibrateApi = /* @__PURE__ */ __name(() => {
  const hasAPI = "vibrate" in window.navigator;
  if (hasAPI) {
    try {
      window.navigator.vibrate(0);
    } catch (e) {
      return false;
    }
  }
  return hasAPI;
}, "isSupportVibrateApi");
var func31 = /* @__PURE__ */ __name((value) => {
  try {
    if (!isSupportVibrateApi()) return false;
    window.navigator.vibrate(0);
    window.navigator.vibrate(value);
    return true;
  } catch (error) {
    return false;
  }
}, "func");
var vibrate_default = func31;

// extensions/ludex/src/utils/browser/webWorker.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/decorator/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/function/debounce.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func32 = /* @__PURE__ */ __name((method, delay, firstCall) => {
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
}, "func");
var debounce_default = func32;

// extensions/ludex/src/utils/function/memoize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func33 = /* @__PURE__ */ __name((fn2) => {
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
}, "func");
var memoize_default = func33;

// extensions/ludex/src/utils/function/throttle.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func34 = /* @__PURE__ */ __name((method, interval, firstCall) => {
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
}, "func");
var throttle_default = func34;

// extensions/ludex/src/utils/decorator/preStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func35 = /* @__PURE__ */ __name((descriptor, startFn) => {
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
}, "func");
var preStart_default = func35;

// extensions/ludex/src/utils/decorator/tryCatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/function/toError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/assign.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var o = Object;
var func36 = /* @__PURE__ */ __name((target, data) => {
  if ("assign" in o) {
    return o.assign(target, data);
  }
  const obj = target;
  for (const key in data) {
    obj[key] = data[key];
  }
  return obj;
}, "func");
var assign_default = func36;

// extensions/ludex/src/utils/function/toError.ts
var func37 = /* @__PURE__ */ __name((value) => {
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
    if ("code" in value && typeof value.code === "string") {
      assign_default(error, { code: value.code });
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
}, "func");
var toError_default = func37;

// extensions/ludex/src/utils/decorator/tryCatch.ts
var func38 = /* @__PURE__ */ __name((descriptor, finallyFn) => {
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
}, "func");
var tryCatch_default = func38;

// extensions/ludex/src/utils/decorator/validateParams.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/decorator/validateProperty.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/valid/isObject.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func39 = /* @__PURE__ */ __name((input) => {
  const isValidObject = typeof input === "object" || typeof input === "function";
  const isArray = Array.isArray(input);
  return input !== null && isValidObject && !isArray;
}, "func");
var isObject_default = func39;

// extensions/ludex/src/utils/decorator/validateProperty.ts
var checkType = /* @__PURE__ */ __name((target, type) => {
  if (typeof target !== type) {
    throw new Error(`Value ${target} is not type of ${type} (${typeof target})`);
  }
}, "checkType");
var func40 = /* @__PURE__ */ __name((target, type, propertyKey) => {
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
}, "func");
var validateProperty_default = func40;

// extensions/ludex/src/utils/decorator/validateParams.ts
var func41 = /* @__PURE__ */ __name((descriptor, types) => {
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
}, "func");
var validateParams_default = func41;

// extensions/ludex/src/utils/decorator/validateReturn.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isInvalidReturnType = /* @__PURE__ */ __name((result3, types) => {
  for (const type of types) {
    try {
      validateProperty_default(result3, type);
      return false;
    } catch (error) {
    }
  }
  return true;
}, "isInvalidReturnType");
var func42 = /* @__PURE__ */ __name((descriptor, types) => {
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
}, "func");
var validateReturn_default = func42;

// extensions/ludex/src/utils/decorator/index.ts
var _DecoratorUtils = class _DecoratorUtils {
  static isProperty$(name2, propertyKey, descriptor) {
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
  static isFunction$(name2, propertyKey, descriptor) {
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
  static locked(_target, _propertyKey, descriptor) {
    return __spreadProps(__spreadValues({}, descriptor), {
      value: /* @__PURE__ */ __name(() => {
        throw new Error("Method is locked");
      }, "value")
    });
  }
  static preStart(startFn) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction$("preStart", propertyKey, descriptor)) {
        return descriptor;
      }
      return preStart_default(descriptor, startFn);
    };
  }
  static tryCatch(finallyFn) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction$("tryCatch", propertyKey, descriptor)) {
        return descriptor;
      }
      return tryCatch_default(descriptor, finallyFn);
    };
  }
  static debounce(wait) {
    return (_target, propertyKey, descriptor) => {
      if (!_DecoratorUtils.isFunction$("debounce", propertyKey, descriptor)) {
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
      if (!_DecoratorUtils.isFunction$("throttle", propertyKey, descriptor)) {
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
    if (!_DecoratorUtils.isFunction$("memoize", propertyKey, descriptor)) {
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
      if (!_DecoratorUtils.isProperty$("validateValue", propertyKey, descriptor)) {
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
};
__name(_DecoratorUtils, "DecoratorUtils");
__publicField(_DecoratorUtils, "trace", /* @__PURE__ */ __name((target, propertyKey, descriptor) => {
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
}, "trace"));
__publicField(_DecoratorUtils, "validateReturn", /* @__PURE__ */ __name((...types) => {
  return (_target, propertyKey, descriptor) => {
    if (!_DecoratorUtils.isFunction$("validateReturn", propertyKey, descriptor)) {
      return descriptor;
    }
    return validateReturn_default(descriptor, types);
  };
}, "validateReturn"));
__publicField(_DecoratorUtils, "validateParams", /* @__PURE__ */ __name((...types) => {
  return (_target, propertyKey, descriptor) => {
    if (!_DecoratorUtils.isFunction$("validateParams", propertyKey, descriptor)) {
      return descriptor;
    }
    return validateParams_default(descriptor, types);
  };
}, "validateParams"));
var DecoratorUtils = _DecoratorUtils;
var decorator_default = DecoratorUtils;

// extensions/ludex/src/utils/browser/webWorker.ts
var workerCode = /* @__PURE__ */ __name(() => {
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
  __name(drawImage, "drawImage");
  function saveData(data) {
    console.log("Saving data:", data);
  }
  __name(saveData, "saveData");
  function getData(data) {
    console.log("Getting data:", data);
  }
  __name(getData, "getData");
}, "workerCode");
var _WebWorker = class _WebWorker {
  worker$ = null;
  constructor() {
    this.init();
  }
  static get inst() {
    if (!this._inst$) {
      this._inst$ = new _WebWorker();
    }
    return this._inst$;
  }
  init() {
    const blob = new Blob([`(${workerCode.toString()})()`], { type: "application/javascript" });
    this.worker$ = new Worker(URL.createObjectURL(blob));
  }
  static postMessage(action, payload) {
    if (!this.inst.worker$) {
      throw new Error("Worker is not initialized");
    }
    this.inst.worker$.postMessage({ action, payload });
  }
};
__name(_WebWorker, "WebWorker");
__publicField(_WebWorker, "_inst$");
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/clear.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isNotClear = /* @__PURE__ */ __name((value) => value === void 0 || value === null, "isNotClear");
var func43 = /* @__PURE__ */ __name((object) => {
  if (!isObject_default(object)) return object;
  for (const key in object) {
    if (isNotClear(object[key])) {
      delete object[key];
    } else {
      const value = object[key];
      if (isObject_default(value)) {
        object[key] = func43(value);
      }
    }
  }
  return object;
}, "func");
var clear_default = func43;

// extensions/ludex/src/utils/object/clone.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func44 = /* @__PURE__ */ __name((data) => {
  if (typeof data !== "object" || data === null) return null;
  return assign_default(data, {});
}, "func");
var clone_default2 = func44;

// extensions/ludex/src/utils/object/merge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func45 = /* @__PURE__ */ __name((source, target) => {
  for (const key in target) {
    if (isObject_default(source[key]) && isObject_default(target[key])) {
      func45(source[key], target[key]);
    } else {
      assign_default(source, { [key]: target[key] });
    }
  }
  return source;
}, "func");
var merge_default = func45;

// extensions/ludex/src/utils/browser/writeLocalStorage.ts
var func46 = /* @__PURE__ */ __name((key, data) => {
  try {
    if (!localStorage) return false;
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
    console.debug("writeLocalStorage error", error);
    return false;
  }
}, "func");
var writeLocalStorage_default = func46;

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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/device/audioState.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func47 = /* @__PURE__ */ __name(() => {
  try {
    const Context5 = window.AudioContext || window.webkitAudioContext;
    if (!Context5) return "unknown";
    const audioContext = new Context5();
    audioContext.resume();
    const state = audioContext.state;
    audioContext.close();
    return state;
  } catch (e) {
    return "unknown";
  }
}, "func");
var audioState_default = func47;

// extensions/ludex/src/utils/device/getPhysicPixels.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/device/pixelRatio.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func48 = /* @__PURE__ */ __name(() => {
  return Number((window.devicePixelRatio ?? 1).toFixed(1));
}, "func");
var pixelRatio_default = func48;

// extensions/ludex/src/utils/device/getPhysicPixels.ts
var func49 = /* @__PURE__ */ __name((value) => {
  return value * pixelRatio_default();
}, "func");
var getPhysicPixels_default = func49;

// extensions/ludex/src/utils/device/gpuRenderer.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func50 = /* @__PURE__ */ __name(() => {
  try {
    const { context, canvas } = createCanvas_default({ contextType: "webgl", type: "canvas" }) ?? {};
    if (!context || !canvas) return "unknown";
    const gpuRenderer = context.getParameter(context.RENDERER);
    canvas.remove();
    return gpuRenderer.substring(0, 70);
  } catch (e) {
    return "unknown";
  }
}, "func");
var gpuRenderer_default = func50;

// extensions/ludex/src/utils/device/hardwareConcurrency.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func51 = /* @__PURE__ */ __name(() => {
  try {
    const w = window.navigator;
    if (!("hardwareConcurrency" in w) || typeof w.hardwareConcurrency !== "number") return 0;
    return w.hardwareConcurrency;
  } catch (e) {
    return 0;
  }
}, "func");
var hardwareConcurrency_default = func51;

// extensions/ludex/src/utils/device/heapMemory.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func52 = /* @__PURE__ */ __name(() => {
  try {
    const w = window.performance;
    if (!("memory" in w) || typeof w.memory !== "object") return "unknown";
    const { usedJSHeapSize, jsHeapSizeLimit } = w.memory;
    if (!usedJSHeapSize || !jsHeapSizeLimit) return "unknown";
    const max = Math.round(jsHeapSizeLimit / 1024 / 1024);
    const used = Math.round(usedJSHeapSize / 1024 / 1024);
    const free = max - used;
    return `T:${max}MB U:${used}MB F:${free}MB`;
  } catch (e) {
    return "unknown";
  }
}, "func");
var heapMemory_default = func52;

// extensions/ludex/src/utils/device/isAndroid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func53 = /* @__PURE__ */ __name(() => {
  return /Android/i.test(navigator.userAgent);
}, "func");
var isAndroid_default = func53;

// extensions/ludex/src/utils/device/isDesktop.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func54 = /* @__PURE__ */ __name(() => {
  return !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}, "func");
var isDesktop_default = func54;

// extensions/ludex/src/utils/device/isES5.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func55 = /* @__PURE__ */ __name(() => {
  try {
    eval("try{const func = ()=>{}}catch(e){}");
    return false;
  } catch (e) {
    return true;
  }
}, "func");
var isES5_default = func55;

// extensions/ludex/src/utils/device/isIOS.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func56 = /* @__PURE__ */ __name(() => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}, "func");
var isIOS_default = func56;

// extensions/ludex/src/utils/device/isMobile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func57 = /* @__PURE__ */ __name(() => {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}, "func");
var isMobile_default = func57;

// extensions/ludex/src/utils/device/isSupportWebp.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func58 = /* @__PURE__ */ __name(() => {
  try {
    const { canvas, context } = createCanvas_default({ contextType: "2d", type: "canvas" }) ?? {};
    if (!canvas || !context) return false;
    const supportWebp = canvas.toDataURL("image/webp").startsWith("data:image/webp");
    canvas.remove();
    return supportWebp;
  } catch (e) {
    return false;
  }
}, "func");
var isSupportWebp_default = func58;

// extensions/ludex/src/utils/device/maxTextureSize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func59 = /* @__PURE__ */ __name(() => {
  try {
    const { context, canvas } = createCanvas_default({ contextType: "webgl", type: "canvas" }) ?? {};
    if (!context || !canvas) return -1;
    const maxTextureSize = context.getParameter(context.MAX_TEXTURE_SIZE);
    canvas.remove();
    if (maxTextureSize < 1) return -1;
    return maxTextureSize;
  } catch (e) {
    return -1;
  }
}, "func");
var maxTextureSize_default = func59;

// extensions/ludex/src/utils/device/orientation.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func60 = /* @__PURE__ */ __name(() => {
  if (window.screen?.orientation?.type) {
    return window.screen.orientation.type;
  }
  if ("matchMedia" in window) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait-primary";
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape-primary";
    }
  }
  if (window.innerHeight > window.innerWidth) {
    return "portrait-primary";
  }
  if (window.innerWidth > window.innerHeight) {
    return "landscape-primary";
  }
  return "unknown";
}, "func");
var orientation_default = func60;

// extensions/ludex/src/utils/device/webglVersion.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func61 = /* @__PURE__ */ __name(() => {
  try {
    const { context, canvas } = createCanvas_default({ contextType: "webgl", type: "canvas" }) ?? {};
    if (!context || !canvas) return "unknown";
    const version = context.getParameter(context.VERSION);
    canvas.remove();
    return version.substring(0, 70);
  } catch (e) {
    return "unknown";
  }
}, "func");
var webglVersion_default = func61;

// extensions/ludex/src/utils/device/index.ts
var device_default = {
  isES5: isES5_default,
  isIOS: isIOS_default,
  isMobile: isMobile_default,
  isAndroid: isAndroid_default,
  isDesktop: isDesktop_default,
  heapMemory: heapMemory_default,
  audioState: audioState_default,
  pixelRatio: pixelRatio_default,
  orientation: orientation_default,
  gpuRenderer: gpuRenderer_default,
  webglVersion: webglVersion_default,
  isSupportWebp: isSupportWebp_default,
  maxTextureSize: maxTextureSize_default,
  getPhysicPixels: getPhysicPixels_default,
  hardwareConcurrency: hardwareConcurrency_default
};

// extensions/ludex/src/utils/error/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/error/apply.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/error/failure.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var failure = /* @__PURE__ */ __name((error) => [null, error], "failure");
var failure_default = failure;

// extensions/ludex/src/utils/error/isFailure.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isFailure = /* @__PURE__ */ __name((value) => value[1] !== null, "isFailure");
var isFailure_default = isFailure;

// extensions/ludex/src/utils/error/success.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var success = /* @__PURE__ */ __name((value) => [value, null], "success");
var success_default = success;

// extensions/ludex/src/utils/error/apply.ts
var apply = /* @__PURE__ */ __name((fn2) => (value) => {
  if (isFailure_default(value)) {
    return value;
  }
  try {
    return success_default(fn2(value[0]));
  } catch (error) {
    return failure_default(toError_default(error));
  }
}, "apply");
var apply_default = apply;

// extensions/ludex/src/utils/error/applyAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var applyAsync = /* @__PURE__ */ __name((fn2) => async (value) => {
  if (isFailure_default(value)) {
    return value;
  }
  try {
    return success_default(await fn2(value[0]));
  } catch (error) {
    return failure_default(toError_default(error));
  }
}, "applyAsync");
var applyAsync_default = applyAsync;

// extensions/ludex/src/utils/error/applyImmediate.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var applyImmediate = /* @__PURE__ */ __name((fn2) => {
  try {
    return success_default(fn2());
  } catch (error) {
    return failure_default(toError_default(error));
  }
}, "applyImmediate");
var applyImmediate_default = applyImmediate;

// extensions/ludex/src/utils/error/applyImmediateAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var applyImmediateAsync = /* @__PURE__ */ __name(async (fn2) => {
  try {
    return success_default(await fn2());
  } catch (error) {
    return failure_default(toError_default(error));
  }
}, "applyImmediateAsync");
var applyImmediateAsync_default = applyImmediateAsync;

// extensions/ludex/src/utils/error/extractFailure.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var extractFailure = /* @__PURE__ */ __name((result3) => result3[1], "extractFailure");
var extractFailure_default = extractFailure;

// extensions/ludex/src/utils/error/extractSuccess.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var extractSuccess = /* @__PURE__ */ __name((result3) => result3[0], "extractSuccess");
var extractSuccess_default = extractSuccess;

// extensions/ludex/src/utils/error/isSuccess.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var isSuccess = /* @__PURE__ */ __name((value) => value[1] === null, "isSuccess");
var isSuccess_default = isSuccess;

// extensions/ludex/src/utils/error/lift.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var lift = success_default;
var lift_default = lift;

// extensions/ludex/src/utils/error/pipe.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var pipe = /* @__PURE__ */ __name((...fns) => (value) => fns.reduce((acc, fn2) => apply_default(fn2)(
acc), value), "pipe");
var pipe_default = pipe;

// extensions/ludex/src/utils/error/pipeAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var pipeAsync = /* @__PURE__ */ __name((...fns) => async (value) => {
  let result3 = value;
  for (const fn2 of fns) {
    result3 = await applyAsync_default(fn2)(result3);
  }
  return result3;
}, "pipeAsync");
var pipeAsync_default = pipeAsync;

// extensions/ludex/src/utils/error/index.ts
var error_default = {
  apply: apply_default,
  applyAsync: applyAsync_default,
  applyImmediate: applyImmediate_default,
  applyImmediateAsync: applyImmediateAsync_default,
  lift: lift_default,
  success: success_default,
  pipe: pipe_default,
  pipeAsync: pipeAsync_default,
  extractSuccess: extractSuccess_default,
  extractFailure: extractFailure_default,
  isFailure: isFailure_default,
  isSuccess: isSuccess_default
};

// extensions/ludex/src/utils/function/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
init_accessBlocker();

// extensions/ludex/src/utils/function/allSettled.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func62 = /* @__PURE__ */ __name((promises) => {
  const wrappedPromises = promises.map(
    (p) => Promise.resolve(p).then(
      (value) => ({ status: "fulfilled", value }),
      (reason) => ({ status: "rejected", reason })
    )
  );
  return Promise.all(wrappedPromises);
}, "func");
var allSettled_default = func62;

// extensions/ludex/src/utils/function/any.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func63 = /* @__PURE__ */ __name((promises) => {
  if (typeof Promise.any === "function") {
    return Promise.any(promises);
  }
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    const check = /* @__PURE__ */ __name((idx) => {
      if (idx < promises.length) return;
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        const error = new Error("All promises were rejected");
        error.errors = results;
        reject(error);
      }
    }, "check");
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
}, "func");
var any_default = func63;

// extensions/ludex/src/utils/function/handleAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func64 = /* @__PURE__ */ __name(async (promise, timeout) => {
  try {
    if (timeout) {
      const timeoutPromise = new Promise(
        (_, reject) => setTimeout(() => reject(new Error("Timeout")), timeout)
      );
      const data2 = await Promise.race([promise, timeoutPromise]);
      return [data2, null];
    }
    const data = await promise;
    return [data, null];
  } catch (error) {
    const err = toError_default(error);
    return [null, err];
  }
}, "func");
var handleAsync_default = func64;

// extensions/ludex/src/utils/function/latch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func65 = /* @__PURE__ */ __name(() => {
  let next = null;
  const actions = /* @__PURE__ */ new Set();
  const defer = /* @__PURE__ */ __name((action) => {
    actions.add(action);
  }, "defer");
  const cancel = /* @__PURE__ */ __name((action) => {
    actions.delete(action);
  }, "cancel");
  const clear = /* @__PURE__ */ __name(() => {
    actions.clear();
  }, "clear");
  const successor = /* @__PURE__ */ __name((inst) => {
    if (inst === void 0) throw new Error("Latch cannot be its own successor");
    next = inst;
  }, "successor");
  const trigger = /* @__PURE__ */ __name(async () => {
    actions.add(clear);
    const promises = [...actions].map((action) => Promise.resolve().then(action));
    await allSettled_default(promises);
    if (next) {
      await next.trigger();
      next = null;
    }
  }, "trigger");
  return { defer, cancel, successor, trigger, clear };
}, "func");
var latch_default = func65;

// extensions/ludex/src/utils/function/mutex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var mutex = /* @__PURE__ */ __name(() => {
  const queue = {};
  const release = /* @__PURE__ */ __name((key) => {
    const next = queue[key]?.shift();
    if (next) {
      next();
    } else {
      delete queue[key];
    }
  }, "release");
  const use = /* @__PURE__ */ __name((key) => {
    let unlocked = false;
    const lock = {
      release: /* @__PURE__ */ __name(() => {
        if (unlocked) return;
        unlocked = true;
        release(key);
      }, "release")
    };
    if (!queue[key]) {
      queue[key] = [];
      return Promise.resolve(lock);
    }
    return new Promise((resolve) => {
      queue[key].push(() => resolve(lock));
    });
  }, "use");
  return { use };
}, "mutex");
var mutex_default = mutex;

// extensions/ludex/src/utils/function/retry.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func66 = /* @__PURE__ */ __name((firstTry, secondTry) => {
  try {
    return firstTry();
  } catch (firstError) {
    try {
      return secondTry();
    } catch (secondError) {
      throw firstError;
    }
  }
}, "func");
var retry_default = func66;

// extensions/ludex/src/utils/function/retryAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func67 = /* @__PURE__ */ __name(async (firstTry, secondTry) => {
  try {
    return await firstTry();
  } catch (firstError) {
    try {
      return await secondTry();
    } catch (secondError) {
      throw firstError;
    }
  }
}, "func");
var retryAsync_default = func67;

// extensions/ludex/src/utils/function/rng.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func68 = /* @__PURE__ */ __name((config) => {
  const { generate, generateSeed = /* @__PURE__ */ __name(() => Math.random() * 1e6, "generateSeed"),
  seed: startingSeed = Date.now() } = config;
  let seed = startingSeed;
  return (...args) => {
    seed = generateSeed(seed);
    return generate(seed, ...args);
  };
}, "func");
var rng_default = func68;

// extensions/ludex/src/utils/function/syncVarsFromSource.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var makeMutableTrick = /* @__PURE__ */ __name((target, value) => {
  target.__proto__.valueOf = () => value;
  target.__proto__.toString = () => `${value}`;
}, "makeMutableTrick");
var makeTypeTrick = /* @__PURE__ */ __name((target) => {
  return target.constructor(__spreadProps(__spreadValues({}, target), {
    // @ts-expect-error - this is a trick
    __proto__: target.__proto__
  }));
}, "makeTypeTrick");
var func69 = /* @__PURE__ */ __name((source) => {
  const keys = Object.keys(source);
  for (const key of keys) {
    const origin = Object.getOwnPropertyDescriptor(source, key)?.value;
    if (isObject_default(origin)) {
      func69(origin);
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
}, "func");
var syncVarsFromSource_default = func69;

// extensions/ludex/src/utils/function/timeOut.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func70 = /* @__PURE__ */ __name((promise, duration) => {
  if (duration <= 0) {
    return promise;
  }
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Timeout")), duration);
    })
  ]);
}, "func");
var timeOut_default = func70;

// extensions/ludex/src/utils/function/timeSlice.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func71 = /* @__PURE__ */ __name((duration) => {
  let startMs = performance.now();
  return async () => {
    const now = performance.now();
    if (now - startMs > duration) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      startMs = performance.now();
    }
  };
}, "func");
var timeSlice_default = func71;

// extensions/ludex/src/utils/function/unwrapAllSettled.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var unwrapAllSettled = /* @__PURE__ */ __name((data) => {
  return data.reduce(
    (acc, d) => {
      if (d.status === "fulfilled") {
        acc.successes.push(d.value);
      } else {
        acc.failures.push(d.reason);
      }
      return acc;
    },
    { successes: [], failures: [] }
  );
}, "unwrapAllSettled");
var unwrapAllSettled_default = unwrapAllSettled;

// extensions/ludex/src/utils/function/index.ts
var function_default = {
  accessBlocker: accessBlocker_default,
  allSettled: allSettled_default,
  any: any_default,
  debounce: debounce_default,
  handleAsync: handleAsync_default,
  latch: latch_default,
  memoize: memoize_default,
  mutex: mutex_default,
  retry: retry_default,
  retryAsync: retryAsync_default,
  rng: rng_default,
  syncVars: syncVarsFromSource_default,
  throttle: throttle_default,
  timeOut: timeOut_default,
  timeSlice: timeSlice_default,
  toError: toError_default,
  unwrapAllSettled: unwrapAllSettled_default
};

// extensions/ludex/src/utils/hash/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/hash/decodeMap.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/invert.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func72 = /* @__PURE__ */ __name((data) => {
  const inverse = {};
  for (const key in data) {
    const value = data[key];
    inverse[value] = key;
  }
  return inverse;
}, "func");
var invert_default = func72;

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
var func73 = /* @__PURE__ */ __name((hash, codeMap) => {
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
}, "func");
var decodeMap_default = func73;

// extensions/ludex/src/utils/hash/encodeMap.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/hasOwn.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func74 = /* @__PURE__ */ __name((obj, key) => {
  if (!isObject_default(obj)) return false;
  try {
    if (isObject_default(obj[key])) return true;
  } catch (e) {
    return false;
  }
  if (typeof Object.hasOwn === "function") {
    return Object.hasOwn(obj, key);
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
}, "func");
var hasOwn_default = func74;

// extensions/ludex/src/utils/valid/isString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func75 = /* @__PURE__ */ __name((data) => typeof data === "string", "func");
var isString_default = func75;

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
var func76 = /* @__PURE__ */ __name((data, codeMap, isRecursive = false) => {
  let str = "";
  if (!isObject_default(data)) return str;
  let lastCode = "";
  let lastIndex = 1;
  for (const key in data) {
    if (!hasOwn_default(data, key)) continue;
    const value = data[key];
    if (isObject_default(value)) {
      str += `:${func76(value, codeMap, true)}`;
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
}, "func");
var encodeMap_default = func76;

// extensions/ludex/src/utils/hash/hashToString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func77 = /* @__PURE__ */ __name((hash, token) => {
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
}, "func");
var hashToString_default = func77;

// extensions/ludex/src/utils/hash/lzwCompress.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var createCompressDict = /* @__PURE__ */ __name(() => {
  const dict = {};
  return dict;
}, "createCompressDict");
var compressDicts = {};
var getCompressionDict = /* @__PURE__ */ __name((level2) => {
  if (!compressDicts[level2]) {
    compressDicts[level2] = createCompressDict();
  }
  return compressDicts[level2];
}, "getCompressionDict");
var setCompressionDict = /* @__PURE__ */ __name((word, level2) => {
  const compressDict = getCompressionDict(level2);
  const dictSize = Object.keys(compressDict).length;
  compressDict[word] = dictSize + 1;
}, "setCompressionDict");
var func78 = /* @__PURE__ */ __name((str, customDict, level2 = 1) => {
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
}, "func");
var getLongestAvailableKeyInCompressDict = /* @__PURE__ */ __name((substring, dict) => {
  let keys = Object.keys(dict);
  keys = keys.filter((key) => {
    return substring.indexOf(key) > -1 && substring !== key;
  });
  if (keys.length === 0) return null;
  return keys.sort((a, b) => b.length - a.length)[0];
}, "getLongestAvailableKeyInCompressDict");
var lzwCompress_default = func78;

// extensions/ludex/src/utils/hash/lzwDecompress.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var createDecompressDict = /* @__PURE__ */ __name((compressDict) => {
  const dict = {};
  for (const key in compressDict) {
    dict[compressDict[key]] = key;
  }
  return dict;
}, "createDecompressDict");
var func79 = /* @__PURE__ */ __name((hash, customDict, level2 = 1) => {
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
}, "func");
var lzwDecompress_default = func79;

// extensions/ludex/src/utils/hash/stringToHash.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func80 = /* @__PURE__ */ __name((str, token) => {
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
}, "func");
var stringToHash_default = func80;

// extensions/ludex/src/utils/hash/index.ts
var hash_default = { decodeMap: decodeMap_default, encodeMap: encodeMap_default, hashToString: hashToString_default,
stringToHash: stringToHash_default, lwzCompress: lzwCompress_default, lwzDecompress: lzwDecompress_default };

// extensions/ludex/src/utils/image/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/image/base64ToFile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var base64ToFile = /* @__PURE__ */ __name((base64, filename) => {
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
}, "base64ToFile");
var base64ToFile_default = base64ToFile;

// extensions/ludex/src/utils/image/blobToDataImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func81 = /* @__PURE__ */ __name((blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}, "func");
var blobToDataImage_default = func81;

// extensions/ludex/src/utils/image/blobToHtmlImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var img = new Image();
var func82 = /* @__PURE__ */ __name((blob, forceNew = true, autoRevoke = true) => {
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
}, "func");
var blobToHtmlImage_default = func82;

// extensions/ludex/src/utils/image/blobUrlToFile.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func83 = /* @__PURE__ */ __name(async (blobUrl, fileName) => {
  const blob = await fetch(blobUrl).then((r) => r.blob()).catch(() => null);
  if (!blob) return null;
  return new File([blob], fileName);
}, "func");
var blobUrlToFile_default = func83;

// extensions/ludex/src/utils/image/elementToBase64.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var result = createCanvas_default({
  contextType: "2d",
  contextAttributes: { willReadFrequently: true }
});
var convertBlobToBase64 = /* @__PURE__ */ __name(async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}, "convertBlobToBase64");
var func84 = /* @__PURE__ */ __name(async (element, type = "png") => {
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
}, "func");
var elementToBase64_default = func84;

// extensions/ludex/src/utils/image/elementToBlob.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var result2 = createCanvas_default({
  contextType: "2d",
  contextAttributes: { willReadFrequently: true }
});
var func85 = /* @__PURE__ */ __name(async (element, type = "png") => {
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
}, "func");
var elementToBlob_default = func85;

// extensions/ludex/src/utils/image/fetchImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func86 = /* @__PURE__ */ __name(async (url) => {
  if (!url) throw new Error("url is empty");
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.blob();
  } catch (error) {
    throw error instanceof Error ? error : new Error("Failed to fetch image");
  }
}, "func");
var fetchImage_default = func86;

// extensions/ludex/src/utils/image/loadImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func87 = /* @__PURE__ */ __name(async (url) => {
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
}, "func");
var loadImage_default = func87;

// extensions/ludex/src/utils/image/logImage.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var getBox = /* @__PURE__ */ __name((width, height) => {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("width and height must be numbers");
  }
  return {
    string: "+",
    style: `font-size: 1px; padding: ${Math.floor(height / 2)}px ${Math.floor(width / 2)}px;`
  };
}, "getBox");
var func88 = /* @__PURE__ */ __name((url, scale = 1) => {
  return new Promise((resolve) => {
    const img2 = new Image();
    img2.onerror = () => {
      resolve(false);
    };
    img2.onload = () => {
      const width = img2.width * scale;
      const height = img2.height * scale;
      const dim = getBox(width, height);
      console.info(
        `%c ${dim.string}`,
        `${dim.style} background: transparent url(${url}) no-repeat center center; background-size: ${width}\
px ${height}px;`
      );
      resolve(true);
    };
    img2.src = url;
  });
}, "func");
var logImage_default = func88;

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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var json_default = { clone: clone_default, decode: decode_default, encode: encode_default };

// extensions/ludex/src/utils/mark/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/mark/Mark.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _Mark = class _Mark {
  perf$ = console;
  static get inst() {
    if (!this._inst$) {
      this._inst$ = new _Mark();
    }
    return this._inst$;
  }
  static isConsole$(service) {
    return service === console;
  }
  static isPerformance$(service) {
    return service instanceof Performance;
  }
  static isBaseService$(service) {
    return !this.isConsole$(service) && !this.isPerformance$(service);
  }
  static setService(service) {
    if (!service) return;
    this.inst.perf$ = service;
  }
  static measure(name2) {
    const perf = this.inst.perf$;
    if (this.isBaseService$(perf)) {
      perf.measure(name2);
    }
  }
  static start(name2) {
    const perf = this.inst.perf$;
    if (this.isConsole$(perf)) {
      perf.time(name2);
    } else if (this.isPerformance$(perf)) {
      perf.mark(`${name2}_start`);
    } else if (this.isBaseService$(perf)) {
      perf.start(name2);
    }
  }
  static stop(name2) {
    const perf = this.inst.perf$;
    if (this.isConsole$(perf)) {
      perf.timeEnd(name2);
    } else if (this.isPerformance$(perf)) {
      try {
        perf.mark(`${name2}_end`);
        perf.measure(name2, `${name2}_start`, `${name2}_end`);
      } catch (e) {
      }
      try {
        perf.clearMarks(`${name2}_start`);
        perf.clearMarks(`${name2}_end`);
      } catch (e) {
      }
    } else if (this.isBaseService$(perf)) {
      perf.stop(name2);
    }
  }
  static putMetric(name2, key, value = Date.now()) {
    const perf = this.inst.perf$;
    if (this.isConsole$(perf)) {
      perf.timeLog(name2, `${key}: ${value}`);
    } else if (this.isBaseService$(perf)) {
      perf.putMetric(name2, key, value);
    }
  }
  static incMetric(name2, key, value = 1) {
    const perf = this.inst.perf$;
    if (this.isConsole$(perf)) {
      perf.timeLog(name2, `${key}: increment by ${value}`);
    } else if (this.isBaseService$(perf)) {
      perf.incrementMetric(name2, key, value);
    }
  }
  static putAttr(name2, key, value) {
    const perf = this.inst.perf$;
    const correctValue = value.slice(0, 100);
    if (this.isConsole$(perf)) {
      perf.timeLog(name2, `${key}: ${correctValue}`);
    } else if (this.isBaseService$(perf)) {
      perf.putAttr(name2, key, correctValue);
    }
  }
  static rmAttr(name2, key) {
    const perf = this.inst.perf$;
    if (this.isConsole$(perf)) {
      perf.timeLog(name2, `${key}: removed`);
    } else if (this.isBaseService$(perf)) {
      perf.removeAttr(name2, key);
    }
  }
};
__name(_Mark, "Mark");
__publicField(_Mark, "_inst$");
var Mark = _Mark;
var Mark_default = Mark;

// extensions/ludex/src/utils/mark/index.ts
var mark_default = { Mark: Mark_default };

// extensions/ludex/src/utils/number/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/number/getShortNumber.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func89 = /* @__PURE__ */ __name((value, maxLength) => {
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
}, "func");
var getShortNumber_default = func89;

// extensions/ludex/src/utils/number/padEnd.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var padEnd = /* @__PURE__ */ __name((value, maxLength, fillChar = "0") => {
  let res = value.toString();
  const valueLength = res.length;
  for (let i = 0; i < maxLength - valueLength; i++) {
    res = res + fillChar;
  }
  return res;
}, "padEnd");
var padEnd_default = padEnd;

// extensions/ludex/src/utils/number/padStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var padStart = /* @__PURE__ */ __name((value, maxLength, fillChar = "0") => {
  let res = value.toString();
  const valueLength = res.length;
  for (let i = 0; i < maxLength - valueLength; i++) {
    res = fillChar + res;
  }
  return res;
}, "padStart");
var padStart_default = padStart;

// extensions/ludex/src/utils/number/random.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func90 = /* @__PURE__ */ __name((length, useNegative) => {
  const negative = useNegative ? Math.random() > 0.5 ? 1 : -1 : 1;
  return Math.floor(Math.random() * length) * negative;
}, "func");
var random_default = func90;

// extensions/ludex/src/utils/number/sign.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func91 = /* @__PURE__ */ __name((num) => {
  if (num > 0) return 1;
  if (num < 0) return -1;
  if (num === 0) return 0;
  return Number.NaN;
}, "func");
var sign_default = func91;

// extensions/ludex/src/utils/number/toAbbreviatedString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var toAbbreviatedString = /* @__PURE__ */ __name((value, config) => {
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
}, "toAbbreviatedString");
var removeZero = /* @__PURE__ */ __name((value) => {
  if (value.indexOf(".") < 0) return value;
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] === ".") return value.substring(0, i);
    if (value[i] !== "0") return value.substring(0, i + 1);
  }
  return value;
}, "removeZero");
var toAbbreviatedString_default = toAbbreviatedString;

// extensions/ludex/src/utils/number/index.ts
var number_default = { getShortNumber: getShortNumber_default, sign: sign_default, padEnd: padEnd_default,
padStart: padStart_default, random: random_default, toAbbreviatedString: toAbbreviatedString_default };

// extensions/ludex/src/utils/object/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/camelCaseKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/string/camelize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var toUpperCamelCase = /* @__PURE__ */ __name((str) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
  return text.substring(0, 1).toUpperCase() + text.substring(1);
}, "toUpperCamelCase");
var toCamelCase = /* @__PURE__ */ __name((str) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
  return text.substring(0, 1).toLowerCase() + text.substring(1);
}, "toCamelCase");

// extensions/ludex/src/utils/object/camelCaseKeys.ts
var func92 = /* @__PURE__ */ __name((obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = toCamelCase(key);
    if (Array.isArray(value)) {
      newObj[newKey] = value.map((item) => {
        if (typeof item === "object") {
          return func92(item);
        }
        return item;
      });
    } else if (typeof value === "object") {
      newObj[newKey] = func92(value);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}, "func");
var camelCaseKeys_default = func92;

// extensions/ludex/src/utils/object/diff.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/object/is.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func93 = /* @__PURE__ */ __name((x, y) => {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y;
}, "func");
var is_default = func93;

// extensions/ludex/src/utils/object/diff.ts
var diffRecursive = /* @__PURE__ */ __name((source, target, compared) => {
  const result3 = {};
  if (compared.has(source) && compared.get(source)?.has(target)) {
    return result3;
  }
  if (!compared.has(source)) {
    compared.set(source, /* @__PURE__ */ new WeakSet());
  }
  compared.get(source)?.add(target);
  for (const key in target) {
    if (!hasOwn_default(target, key)) continue;
    let targetValue;
    try {
      targetValue = target[key];
    } catch (e) {
      continue;
    }
    if (hasOwn_default(source, key)) {
      let sourceValue;
      try {
        sourceValue = source[key];
      } catch (e) {
        result3[key] = targetValue;
        continue;
      }
      if (isObject_default(sourceValue) && isObject_default(targetValue) && sourceValue !== null && targetValue !==
      null && typeof sourceValue !== "function" && typeof targetValue !== "function") {
        const diffResult = diffRecursive(sourceValue, targetValue, compared);
        if (Object.keys(diffResult).length > 0) {
          result3[key] = diffResult;
        }
      } else if (!is_default(sourceValue, targetValue)) {
        result3[key] = targetValue;
      }
    } else {
      result3[key] = targetValue;
    }
  }
  for (const key in source) {
    if (hasOwn_default(source, key) && !hasOwn_default(target, key)) {
      result3[key] = void 0;
    }
  }
  return result3;
}, "diffRecursive");
var func94 = /* @__PURE__ */ __name((source, target) => {
  return diffRecursive(source, target, /* @__PURE__ */ new WeakMap());
}, "func");
var diff_default = func94;

// extensions/ludex/src/utils/object/dod.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func95 = /* @__PURE__ */ __name((data, keys = []) => {
  const result3 = {};
  for (const value of Object.values(data)) {
    for (const key in value) {
      const K = key;
      if (!keys.includes(K)) continue;
      if (!result3[K]) {
        result3[K] = [];
      }
      result3[K].push(value[K]);
    }
  }
  return result3;
}, "func");
var dod_default2 = func95;

// extensions/ludex/src/utils/object/filterDeep.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func96 = /* @__PURE__ */ __name((source, input) => {
  const result3 = {};
  for (const key in input) {
    if (hasOwn_default(input, key)) {
      if (isObject_default(input[key]) && input[key] !== null) {
        if (isObject_default(source[key]) && source[key] !== null) {
          if (typeof input[key] === "function") continue;
          const filteredSubObject = func96(source[key], input[key]);
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
}, "func");
var filterDeep_default = func96;

// extensions/ludex/src/utils/object/isIn.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func97 = /* @__PURE__ */ __name((value, object) => {
  return Object.values(object).includes(value);
}, "func");
var isIn_default = func97;

// extensions/ludex/src/utils/object/keyBy.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/valid/isPropertyKey.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func98 = /* @__PURE__ */ __name((key) => {
  return ["string", "number", "symbol"].indexOf(typeof key) > -1;
}, "func");
var isPropertyKey_default = func98;

// extensions/ludex/src/utils/object/keyBy.ts
var func99 = /* @__PURE__ */ __name((array, key) => {
  const result3 = {};
  for (const item of array) {
    const value = item[key];
    if (!isPropertyKey_default(value)) continue;
    result3[value] = item;
  }
  return result3;
}, "func");
var keyBy_default = func99;

// extensions/ludex/src/utils/object/snakeCaseKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/string/snake.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var toSnakeCase = /* @__PURE__ */ __name((str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, "_").toLowerCase();
}, "toSnakeCase");

// extensions/ludex/src/utils/object/snakeCaseKeys.ts
var func100 = /* @__PURE__ */ __name((obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = toSnakeCase(key);
    if (Array.isArray(value)) {
      newObj[newKey] = value.map((item) => {
        if (typeof item === "object") {
          return func100(item);
        }
        return item;
      });
    } else if (typeof value === "object") {
      newObj[newKey] = func100(value);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}, "func");
var snakeCaseKeys_default = func100;

// extensions/ludex/src/utils/object/vals.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func101 = /* @__PURE__ */ __name((object) => {
  return Object.keys(object).map((key) => {
    return object[key];
  });
}, "func");
var vals_default = func101;

// extensions/ludex/src/utils/object/index.ts
var object_default = {
  assign: assign_default,
  camelCaseKeys: camelCaseKeys_default,
  clone: clone_default2,
  clear: clear_default,
  diff: diff_default,
  dod: dod_default2,
  hasOwn: hasOwn_default,
  invert: invert_default,
  is: is_default,
  isIn: isIn_default,
  keyBy: keyBy_default,
  merge: merge_default,
  snakeCaseKeys: snakeCaseKeys_default,
  vals: vals_default,
  filterDeep: filterDeep_default
};

// extensions/ludex/src/utils/signal/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/signal/Signal.ts
var Signal_exports = {};
__export(Signal_exports, {
  Signal: () => Signal,
  SignalAbortedError: () => SignalAbortedError,
  SignalController: () => SignalController
});
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SignalAbortedError = class _SignalAbortedError extends Error {
  constructor(reason = "Signal aborted with no reason") {
    super(reason);
    this.name = "SignalAbortedStopped";
  }
};
__name(_SignalAbortedError, "SignalAbortedError");
var SignalAbortedError = _SignalAbortedError;
var _Signal = class _Signal {
  state$ = { type: "running" };
  callbacks$ = [];
  /**
   * Register a callback to be called when the signal is aborted.
   * If the signal is already aborted, the callback will be called immediately
   * and only once.
   *
   * @param callback The callback to be called.
   */
  once(callback) {
    this.callbacks$.push(callback);
  }
  /**
   * Remove a callback from the list of callbacks to be called when the signal is aborted.
   * @param callback The callback to be removed.
   */
  off(callback) {
    this.callbacks$ = this.callbacks$.filter((cb) => cb !== callback);
  }
  abort(reasonOrMessage) {
    const realReason = this.constructReason(reasonOrMessage);
    this.state$ = {
      type: "stopped",
      reason: realReason
    };
    for (const cb of this.callbacks$) {
      cb(realReason);
    }
    this.callbacks$ = [];
  }
  /**
   * Check if the signal has been aborted.
   */
  get aborted() {
    return this.state$.type === "stopped";
  }
  /**
   * Get the reason for the signal being aborted.
   * If the signal is not aborted, `undefined` is returned.
   */
  get reason() {
    if (this.state$.type === "stopped") {
      return this.state$.reason;
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
__name(_Signal, "Signal");
var Signal = _Signal;
var _SignalController = class _SignalController {
  signal$;
  /**
   * Abort an existing signal and create a new one.
   * Using this is preferred over creating a new signal manually.
   *
   * @returns A new signal
   */
  renew() {
    this.signal$?.abort();
    const signal = new Signal();
    this.signal$ = signal;
    return signal;
  }
  /**
   * Abort the current signal if it exists.
   * If the signal does not exist, this method does nothing.
   */
  abort() {
    this.signal$?.abort();
  }
  /**
   * Create a promise that resolves when the signal is aborted.
   * If the signal does not exist, the promise resolves immediately.
   * @returns A promise that resolves when the signal is aborted
   * or immediately if the signal does not exist.
   */
  promise() {
    if (this.signal$ === void 0) {
      return Promise.resolve(void 0);
    }
    return this.signal$.promise();
  }
};
__name(_SignalController, "SignalController");
var SignalController = _SignalController;

// extensions/ludex/src/utils/signal/index.ts
var signal_default = Signal_exports;

// extensions/ludex/src/utils/string/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/string/capitalize.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func102 = /* @__PURE__ */ __name((str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}, "func");
var capitalize_default = func102;

// extensions/ludex/src/utils/string/findDuplicateSubstrings.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
__name(fun, "fun");
var findDuplicateSubstrings_default = fun;

// extensions/ludex/src/utils/string/generateNameAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var names = null;
var defaultName = "Anonymous";
var fetchNames = /* @__PURE__ */ __name(async () => {
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
}, "fetchNames");
var func103 = /* @__PURE__ */ __name(async () => {
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
  } catch (e) {
    return defaultName;
  }
}, "func");
var generateNameAsync_default = func103;

// extensions/ludex/src/utils/string/generateObjectId.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func104 = /* @__PURE__ */ __name((radix = 16) => {
  const s = /* @__PURE__ */ __name((i) => Math.floor(i).toString(radix), "s");
  const time = s(Date.now() / 1e3);
  const str = Array(radix + 1).join(" ");
  return time + str.replace(/./g, () => s(Math.random() * radix));
}, "func");
var generateObjectId_default = func104;

// extensions/ludex/src/utils/string/getLanguageCode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func105 = /* @__PURE__ */ __name((locale2) => {
  const parts = locale2 ? locale2.split("_") : [];
  let code = parts.length > 0 ? parts[0] : "en_US";
  switch (code) {
    case "id":
    case "in":
      code = "id";
      break;
  }
  return code;
}, "func");
var getLanguageCode_default = func105;

// extensions/ludex/src/utils/string/getShortName.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func106 = /* @__PURE__ */ __name((name2, length) => {
  const nameArr = name2.split(" ");
  const firstLastNameArr = nameArr.length <= 1 ? [...nameArr] : [nameArr[0], nameArr.pop()];
  const firstLastName = firstLastNameArr.join(" ");
  const lastIndexOfSpace = firstLastName.lastIndexOf(" ") || 0;
  const lastIndex = lastIndexOfSpace >= 0 ? lastIndexOfSpace : length;
  const shortName = firstLastName.length > length ? firstLastName.substring(0, lastIndex) : firstLastName;
  return shortName.substring(0, length);
}, "func");
var getShortName_default = func106;

// extensions/ludex/src/utils/string/hashCode.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func107 = /* @__PURE__ */ __name((str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}, "func");
var hashCode_default = func107;

// extensions/ludex/src/utils/string/matchStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var fn = /* @__PURE__ */ __name((str, searchString) => {
  for (let i = 0; i < searchString.length; i++) {
    if (str[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}, "fn");
var matchStart_default = fn;

// extensions/ludex/src/utils/string/padStart.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func108 = /* @__PURE__ */ __name((value, length, pad = " ") => {
  const count = Math.floor(length);
  if (value.length >= count) return value;
  const paddingLength = count - value.length;
  let repeatedPadString = "";
  for (let i = 0; i < paddingLength; i++) {
    repeatedPadString += pad;
  }
  return repeatedPadString.slice(0, paddingLength) + value;
}, "func");
var padStart_default2 = func108;

// extensions/ludex/src/utils/string/params.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func109 = /* @__PURE__ */ __name((payload) => {
  const params = Object.keys(payload).reduce((accumulator, key) => {
    const value = payload[key];
    if (value !== void 0) {
      accumulator.push(`${key}=${value}`);
    }
    return accumulator;
  }, []);
  return params.join("&");
}, "func");
var params_default = func109;

// extensions/ludex/src/utils/string/random.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func110 = /* @__PURE__ */ __name((len, startWith) => {
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
}, "func");
var random_default2 = func110;

// extensions/ludex/src/utils/string/randomColor.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var letters = "0123456789ABCDEF";
var func111 = /* @__PURE__ */ __name((prefix = "0x") => {
  let color = prefix;
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}, "func");
var randomColor_default = func111;

// extensions/ludex/src/utils/string/removeDiacritics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func112 = /* @__PURE__ */ __name((str) => {
  const result3 = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, (m) => m ===
  "\u0111" ? "d" : "D");
  return result3;
}, "func");
var removeDiacritics_default = func112;

// extensions/ludex/src/utils/string/generateNameUsingString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
function generateNameUsingString(seed) {
  const hash = createHash(seed);
  const firstNameIndex = hash % firstNames.length;
  const lastNameIndex = (hash >> 8) % lastNames.length;
  const numberValue = (hash >> 16) % 1e4;
  return `${firstNames[firstNameIndex]}${lastNames[lastNameIndex]}${numberValue}`;
}
__name(generateNameUsingString, "generateNameUsingString");
var createHash = /* @__PURE__ */ __name((seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash | 0;
  }
  hash = Math.abs(hash);
  return hash;
}, "createHash");
var firstNames = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Susan",
  "Richard",
  "Jessica",
  "Joseph",
  "Sarah",
  "Thomas",
  "Karen",
  "Charles",
  "Nancy",
  "Christopher",
  "Lisa",
  "Daniel",
  "Margaret",
  "Matthew",
  "Betty",
  "Anthony",
  "Sandra",
  "Mark",
  "Ashley",
  "Donald",
  "Dorothy",
  "Steven",
  "Kimberly",
  "Paul",
  "Emily",
  "Andrew",
  "Donna",
  "Joshua",
  "Michelle",
  "Kenneth",
  "Carol",
  "Kevin",
  "Amanda",
  "Brian",
  "Melissa",
  "George",
  "Deborah"
];
var lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Gonzalez",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans"
];

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
  toSnakeCase,
  generateNameUsingString
};

// extensions/ludex/src/utils/time/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/time/getRelativeTime.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Number.POSITIVE_INFINITY];
var units = ["second", "minute", "hour", "day", "week", "month", "year"];
var func113 = /* @__PURE__ */ __name((timestamp, locales, options, fallbackMessage = "Soon") => {
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
}, "func");
var getRelativeTime_default = func113;

// extensions/ludex/src/utils/time/getTimeString.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func114 = /* @__PURE__ */ __name((timestamp) => {
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
}, "func");
var getTimeString_default = func114;

// extensions/ludex/src/utils/time/isToday.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func115 = /* @__PURE__ */ __name((timestamp) => {
  const last = new Date(timestamp);
  const today = /* @__PURE__ */ new Date();
  return last.getDate() === today.getDate() && last.getMonth() === today.getMonth() && last.getFullYear() ===
  today.getFullYear();
}, "func");
var isToday_default = func115;

// extensions/ludex/src/utils/time/sleepAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func116 = /* @__PURE__ */ __name((milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}, "func");
var sleepAsync_default = func116;

// extensions/ludex/src/utils/time/index.ts
var time_default = { isToday: isToday_default, sleepAsync: sleepAsync_default, getRelativeTime: getRelativeTime_default,
getTimeString: getTimeString_default };

// extensions/ludex/src/utils/valid/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/utils/valid/isBoolean.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func117 = /* @__PURE__ */ __name((data) => typeof data === "boolean", "func");
var isBoolean_default = func117;

// extensions/ludex/src/utils/valid/isDebugger.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func118 = /* @__PURE__ */ __name(() => {
  if (true) return true;
  return !!codex?.player?.getPlayerDataByKey("debug");
}, "func");
var isDebugger_default = func118;

// extensions/ludex/src/utils/valid/isFunction.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func119 = /* @__PURE__ */ __name((input) => typeof input === "function", "func");
var isFunction_default = func119;

// extensions/ludex/src/utils/valid/isNumber.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func120 = /* @__PURE__ */ __name((data) => typeof data === "number", "func");
var isNumber_default = func120;

// extensions/ludex/src/utils/valid/isPromise.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func121 = /* @__PURE__ */ __name((input) => {
  if (!isFunction_default(input)) return false;
  if (input instanceof Promise || "then" in input && typeof input.then === "function") {
    return true;
  }
  return input.constructor.name === "AsyncFunction";
}, "func");
var isPromise_default = func121;

// extensions/ludex/src/utils/valid/isValueChangeAsync.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var func122 = /* @__PURE__ */ __name((from, to, options) => {
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
}, "func");
var isValueChangeAsync_default = func122;

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
  Valid: valid_default,
  Error: error_default
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
window.GameName = "Tile-Connect-Deluxe";
window.CommitId = "f74f5c41-51c284c9";
window.BuildVersion = 9;
console.warn("Env mode:", "development");
console.warn("Debugger:", Ludex2.Utils.Valid.isDebugger());
console.warn("DevIds:", Ludex2.Configs.Debugger.ListPlayerDevIds);

// extensions/ludex/src/dtos/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/dtos/BaseDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V, Object: O, String: S, Json: J } = Ludex.Utils;
var MESSAGE_INVALID = "is invalid";
var DtosData = {};
var _BaseDtos = class _BaseDtos {
  static getName$() {
    const rawName = Object.getOwnPropertyNames(this.prototype).join("");
    if (typeof rawName !== "string") return this.name ?? "unknown";
    return rawName.replaceAll("validate", "").replaceAll("constructor", "").replaceAll("toObject", "");
  }
  getSelf$() {
    return this.constructor;
  }
  static addDefaults(data) {
    if (!V.isObject(data)) {
      this.prototype.exception$("default data", MESSAGE_INVALID);
    }
    const clonedData = J.clone(data);
    const name2 = this.getName$();
    if (!V.isObject(DtosData[name2])) {
      DtosData[name2] = {};
    }
    const existingDefaults = DtosData[name2];
    DtosData[name2] = O.merge(existingDefaults, clonedData);
  }
  static getDefaults() {
    const name2 = this.getName$();
    return J.clone(DtosData[name2]) ?? {};
  }
  static addValidator(key, func123) {
    if (!V.isString(key)) {
      this.prototype.exception$("validate key", MESSAGE_INVALID);
    }
    if (typeof func123 !== "function") {
      this.prototype.exception$("validate function", MESSAGE_INVALID);
    }
    let name2 = this.getName$();
    const existData = DtosData[name2];
    const existLoose = this.loose[name2];
    O.assign(this.loose, { [name2]: null });
    O.assign(DtosData, { [name2]: null });
    const funcName = `validate${S.capitalize(key)}`;
    O.assign(this.prototype, { [funcName]: func123 });
    name2 = this.getName$();
    this.loose[name2] = existLoose;
    DtosData[name2] = existData;
  }
  constructor(data) {
    this.processData$(data);
  }
  static makeStrict() {
    const name2 = this.getName$();
    this.loose[name2] = false;
  }
  static makeLoose() {
    const name2 = this.getName$();
    this.loose[name2] = true;
  }
  processData$(data) {
    if (!V.isObject(data)) {
      this.exception$("input data", "is not an object");
    }
    const self2 = this.getSelf$();
    const defaults = self2.getDefaults();
    const finalData = O.merge(defaults, data);
    this.processNestedDtos$(finalData);
    this.validateStructure$(finalData);
    this.validateData$(finalData);
    this.setupData$(finalData);
  }
  processNestedDtos$(_data) {
  }
  lazyValidateStructure$(data) {
    if (!V.isObject(data)) {
      this.exception$("structure", "is not an object");
    }
    const keys = this.getKeys$();
    const dataKeys = Object.keys(data);
    const self2 = this.getSelf$();
    const name2 = self2.getName$();
    if (!self2.loose[name2]) {
      const extraKeys = dataKeys.filter((key) => !keys.includes(key));
      if (extraKeys.length > 0) {
        if (V.isObject(data)) {
          for (const key of extraKeys) {
            O.assign(data, { [key]: null });
          }
        }
      }
    }
    for (const key of keys) {
      if (!O.hasOwn(data, key)) {
        this.exception$("structure", `is missing key: ${key}`);
      }
    }
  }
  lazyValidateData$(data) {
    const self2 = this.getSelf$();
    const name2 = self2.getName$();
    for (const key of this.getKeys$()) {
      const value = data[key];
      const corrKey = S.removeDiacritics(key).replace(/[^a-zA-Z0-9]/g, "");
      const funcName = `validate${S.capitalize(corrKey)}`;
      const validate = this[funcName];
      if (typeof validate === "function") {
        try {
          validate.call(this, value);
        } catch (error) {
          if (!self2.loose[name2]) throw error;
          const defaultValue = DtosData[name2]?.[key];
          if (defaultValue !== void 0) {
            data[key] = J.clone(defaultValue);
          }
        }
      } else {
        if (!self2.loose[name2]) {
          this.exception$("validator", `is missing for key '${key}'`);
        }
      }
    }
  }
  lazySetupData$(data) {
    for (const key of this.getKeys$()) {
      O.assign(this, { [key]: data[key] });
    }
  }
  exception$(key, message) {
    const self2 = this.getSelf$();
    const name2 = self2.getName$();
    throw new Error(`${name2}: ${key} ${message}`);
  }
  toObject() {
    const result3 = {};
    for (const key of this.getKeys$()) {
      result3[key] = this[key];
    }
    return result3;
  }
  getKeys$() {
    const self2 = this.getSelf$();
    const name2 = self2.getName$();
    const defaults = DtosData[name2];
    if (V.isObject(defaults)) {
      return Object.keys(defaults);
    }
    return [];
  }
};
__name(_BaseDtos, "BaseDtos");
__publicField(_BaseDtos, "loose", {});
var BaseDtos = _BaseDtos;
var BaseDtos_default = BaseDtos;

// extensions/ludex/src/dtos/index.ts
Ludex.Dtos = { Base: BaseDtos_default };

// extensions/ludex/src/codex/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/codex/codex.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/codex/plugins/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _Plugins = class _Plugins {
  codex;
  plugins$;
  constructor(codex2) {
    this.codex = codex2;
    this.plugins$ = {};
  }
  install(name2, plugin, mapping, property) {
    if (typeof plugin !== "function") {
      console.warn("Plugin install:", `${name2} plugin is disabled (${property})`);
      return false;
    }
    const pluginInstance = new plugin(this.codex);
    this.plugins$[name2] = pluginInstance;
    if (mapping) {
      Object.defineProperty(this.codex, property, {
        get: /* @__PURE__ */ __name(() => pluginInstance, "get")
      });
    }
    pluginInstance.init();
    console.debug("Plugin install:", `${name2} plugin is installed (${property})`);
    return true;
  }
  get(name2) {
    return this.plugins$[name2];
  }
};
__name(_Plugins, "Plugins");
var Plugins = _Plugins;
var plugins_default = Plugins;

// extensions/ludex/src/codex/plugins/base.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BasePlugin = class _BasePlugin {
  codex;
  constructor(codex2) {
    this.codex = codex2;
  }
  init() {
  }
};
__name(_BasePlugin, "BasePlugin");
var BasePlugin = _BasePlugin;
var base_default = BasePlugin;

// extensions/ludex/src/codex/codex.ts
var _Game = class _Game {
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
__name(_Game, "Game");
var Game = _Game;
window.Ludex.Plugins = { BasePlugin: base_default };
var codex_default = Game;

// extensions/ludex/src/api/notification.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/api/clients/instance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/exceptions/BadRequest.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BadRequest = class _BadRequest extends Error {
  payload;
  constructor(message, payload) {
    super(message);
    this.name = "BadRequest";
    this.message = message ?? "This request is bad";
    this.payload = payload;
  }
};
__name(_BadRequest, "BadRequest");
var BadRequest = _BadRequest;
var BadRequest_default = BadRequest;

// extensions/ludex/src/exceptions/RequestTimeout.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _RequestTimeout = class _RequestTimeout extends Error {
  payload;
  constructor(message, payload) {
    super(message);
    this.name = "RequestTimeout";
    this.message = message ?? "This request is timeout";
    this.payload = payload;
  }
};
__name(_RequestTimeout, "RequestTimeout");
var RequestTimeout = _RequestTimeout;
var RequestTimeout_default = RequestTimeout;

// extensions/ludex/src/api/clients/instance.ts
var {
  Utils: { Valid: V2, Time: T },
  Configs: { AppId, Network }
} = Ludex;
var validateResponse = /* @__PURE__ */ __name((response) => {
  if (response.ok) return;
  throw new BadRequest_default(void 0, { response });
}, "validateResponse");
var defaultConfig = /* @__PURE__ */ __name(() => {
  const token = codex.auth?.getToken();
  return {
    token,
    timeout: Network.Timeout,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
}, "defaultConfig");
var requester = /* @__PURE__ */ __name((host, url, config, data) => async () => {
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
}, "requester");
var handleRequest = /* @__PURE__ */ __name(async (asyncFunc, retry) => {
  try {
    return asyncFunc();
  } catch (error) {
    if (error instanceof RequestTimeout_default && retry > 0) {
      try {
        await T.sleepAsync(600);
        return await handleRequest(asyncFunc, retry - 1);
      } catch (e) {
        return {};
      }
    }
    if (error instanceof RequestTimeout_default) return {};
    console.warn("Request error", error);
    return {};
  }
}, "handleRequest");
var get = /* @__PURE__ */ __name(async (url, configs, host, retry = Network.Retries) => {
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
}, "get");
var post = /* @__PURE__ */ __name(async (url, data, configs, host, retry = Network.Retries) => {
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
}, "post");

// extensions/ludex/src/api/notification.ts
var {
  Configs: {
    Notification: { ApiUrl }
  },
  Utils: { Object: O2 }
} = Ludex;
var updatePlayerProfileNotificationAsync = /* @__PURE__ */ __name(async (payload) => {
  if (!O2.hasOwn(payload, "playerId")) {
    throw new Error("Missing playerId");
  }
  const { playerId: playerId2 } = payload;
  await post(`players/${playerId2}`, payload, {}, ApiUrl, 10);
}, "updatePlayerProfileNotificationAsync");

// extensions/ludex/src/codex/StateInitiator.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/constants/PlayerDataKeys.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/player/dtos/PlayerInfo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/player/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
    dailyRewardedData: {
      logDays: [],
      firstReward: 0,
      lastReward: 0
    },
    lastCallSwitchGame: 0
  }
};
var state_default = initState;

// extensions/ludex/src/plugins/player/dtos/PlayerInfo.ts
var { Valid: V3 } = Ludex.Utils;
var { playerId, name, photo, locale } = state_default;
var MESSAGE_INVALID2 = "is invalid";
var _PlayerInfoDtos = class _PlayerInfoDtos extends BaseDtos_default {
  setupData$(data) {
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
__name(_PlayerInfoDtos, "PlayerInfoDtos");
var PlayerInfoDtos = _PlayerInfoDtos;
PlayerInfoDtos.addDefaults({
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/abstract/ACreateMatchFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ACreateMatchFailed = class _ACreateMatchFailed extends Error {
  code;
  constructor(message) {
    super(message);
    this.code = "CREATE_MATCH_FAILED";
  }
};
__name(_ACreateMatchFailed, "ACreateMatchFailed");
var ACreateMatchFailed = _ACreateMatchFailed;
var ACreateMatchFailed_default = ACreateMatchFailed;

// extensions/ludex/src/plugins/match/exceptions/PlayerIdNotValid.ts
var _PlayerIdNotValid = class _PlayerIdNotValid extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "PlayerIdNotValid";
    this.message = message ?? "Player id is not valid";
  }
};
__name(_PlayerIdNotValid, "PlayerIdNotValid");
var PlayerIdNotValid = _PlayerIdNotValid;
var PlayerIdNotValid_default = PlayerIdNotValid;

// extensions/ludex/src/codex/StateInitiator.ts
var {
  Dtos,
  Utils: { Array: A, Object: O3, Json: J2, Valid: V4 },
  Events,
  Configs: { Context: Context2, Player: Player2 }
} = Ludex;
var _StateInitiator = class _StateInitiator {
  codex$;
  constructor(codex2) {
    this.codex$ = codex2;
  }
  initContext = /* @__PURE__ */ __name(() => {
    if (!Context2.Enabled) return;
    const rawData = {
      contextId: GameSDK.context.getID() ?? "",
      contextType: GameSDK.context.getType(),
      entryPointData: GameSDK.getEntryPointData()
    };
    const context = new Dtos.Context.Info(rawData);
    const { contextId: contextId2, contextType: contextType2, entryPointData: entryPointData2 } = context.
    toObject();
    console.debug("contextInfo", J2.clone(context));
    this.codex$.context.receiveContext(contextId2, contextType2, entryPointData2);
  }, "initContext");
  initPlayer = /* @__PURE__ */ __name(async () => {
    try {
      if (!Player2.Enabled) return;
      const { player } = this.codex$;
      const playerInfo = this.getPlayerInfo$();
      console.debug("playerInfo", J2.clone(playerInfo));
      const dataKeys = A.unique(O3.vals(PlayerDataKeys_default));
      console.debug("dataKeys", dataKeys);
      const rawData = await GameSDK.player.getDataAsync(dataKeys);
      console.debug("rawData", J2.clone(rawData));
      const playerData = new Dtos.Player.Data(rawData).toObject();
      console.debug("playerData", J2.clone(playerData));
      player.receiveData(playerInfo, playerData);
    } catch (error) {
      console.warn("StateInitiator.initPlayer", error);
    } finally {
      this.codex$.event.emit(Events.PLAYER_INFO_LOADED);
    }
  }, "initPlayer");
  getPlayerInfo$ = /* @__PURE__ */ __name(() => {
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
  }, "getPlayerInfo$");
};
__name(_StateInitiator, "StateInitiator");
var StateInitiator = _StateInitiator;
var StateInitiator_default = StateInitiator;

// extensions/ludex/src/plugins/ads/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/ads/AdsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/ads/constants/AdsStatus.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _AdError = class _AdError extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
};
__name(_AdError, "AdError");
var AdError = _AdError;
var AdError_default = AdError;

// extensions/ludex/src/plugins/ads/instances/AdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/ads/instances/BaseInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BaseInstance = class _BaseInstance {
  type;
  service;
  placementId;
  status$;
  constructor(type, placementId) {
    this.type = type;
    this.status$ = AdsStatus_default.IDLE;
    this.placementId = placementId;
  }
  setStatus(status) {
    if (this.status$ === status) return;
    this.status$ = status;
  }
  get status() {
    return this.status$;
  }
  exception$(message) {
    throw new AdError_default("AD_INSTANCE_ERROR", message);
  }
};
__name(_BaseInstance, "BaseInstance");
var BaseInstance = _BaseInstance;
var BaseInstance_default = BaseInstance;

// extensions/ludex/src/plugins/ads/instances/AdInstance.ts
var _AdInstance2 = class _AdInstance2 extends BaseInstance_default {
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
__name(_AdInstance2, "AdInstance");
var AdInstance2 = _AdInstance2;
var AdInstance_default2 = AdInstance2;

// extensions/ludex/src/plugins/ads/AdsPlugin.ts
Ludex.Plugins.Ads = {
  Types: AdsTypes_default,
  Status: AdsStatus_default,
  AdError: AdError_default,
  AdInstance: AdInstance_default2
};
var {
  Utils: { Array: A2, Object: O4, Function: F, Device: D }
} = Ludex;
var _AdsPlugin = class _AdsPlugin extends Ludex.Plugins.BasePlugin {
  enabled;
  config$;
  deviceOS$;
  // ? That mean the last time an ad full size was shown
  lastCallAdShownTime$;
  isAdFullSizeShowed$;
  ads$ = {};
  safeAreaBottom$;
  degradationTracking$ = {
    failedAttempts: 0,
    lastSuccessTime: 0
  };
  // ! For testing purposes
  getAdsInstances() {
    return this.ads$;
  }
  getDeviceOS() {
    return this.deviceOS$;
  }
  getDegradationTracking() {
    return this.degradationTracking$;
  }
  getLastCallAdShownTime() {
    return this.lastCallAdShownTime$;
  }
  init() {
    const now = Date.now() / 1e3;
    this.deviceOS$ = this.getDeviceFromPlatform$();
    this.lastCallAdShownTime$ = {
      [AdsTypes_default.BANNER]: now,
      [AdsTypes_default.INTERSTITIAL]: now,
      [AdsTypes_default.REWARDED_VIDEO]: now,
      [AdsTypes_default.REWARDED_INTERSTITIAL]: now
    };
    this.isAdFullSizeShowed$ = false;
    this.calculateSafeAreaBottom$();
    this.resetDegradationTracking$();
  }
  getDeviceFromPlatform$() {
    const platform = GameSDK.getPlatform();
    if (platform === "IOS") return "ios";
    if (platform === "WEB") return "desktop";
    if (platform === "ANDROID") return "android";
    if (D.isIOS()) return "ios";
    if (D.isAndroid()) return "android";
    if (D.isDesktop()) return "desktop";
    return "default";
  }
  calculateSafeAreaBottom$() {
    try {
      const sab = getComputedStyle(document.documentElement).getPropertyValue("--sab");
      this.safeAreaBottom$ = parseInt(sab, 10);
      if (isNaN(this.safeAreaBottom$)) {
        this.safeAreaBottom$ = 0;
      }
    } catch (e) {
      this.safeAreaBottom$ = 0;
    }
  }
  configure(config) {
    this.config$ = config;
    this.enabled = this.config$.Enabled;
  }
  checkEnabled$() {
    if (!this.enabled) {
      throw new AdError_default("ADS_NOT_ENABLED", "Ads is't enabled");
    }
  }
  isAdFullSizeShowing() {
    return this.isAdFullSizeShowed$;
  }
  setAdInstance(type, placementId, adInstance, deviceOS) {
    if (deviceOS !== this.deviceOS$ && deviceOS !== "default") return;
    const id = `${type}-${placementId}-${deviceOS}`;
    if (this.ads$[id]) {
      console.warn(`AdsPlugin: Ad instance with placementId ${placementId} already exists`);
      return;
    }
    const config = this.findAdConfig$(type, deviceOS, placementId);
    if (!config) {
      console.warn(`AdsPlugin: No config found for ${type} ${placementId} on ${deviceOS}`);
      return;
    }
    const ads = this.getAdsByType(type);
    const isDeviceOSAdInited = !!A2.search(ads, (ad) => {
      const { AdService, DeviceOS: adDeviceOS } = ad.config;
      return AdService === config.AdService && adDeviceOS !== deviceOS && adDeviceOS === this.deviceOS$;
    });
    if (isDeviceOSAdInited) return;
    try {
      const instance = new adInstance(type, placementId);
      this.ads$[id] = {
        type,
        config,
        deviceOS,
        placementId,
        interval: null,
        instance
      };
    } catch (error) {
      console.warn(`AdsPlugin: Failed to create ad instance for ${type} ${placementId}`, error);
      return;
    }
  }
  async loadAdAsync(type, placementId) {
    this.checkEnabled$();
    const { event } = this.codex;
    const payload = { type, placementId };
    const ad = this.getAd(type, placementId);
    payload.placementId = ad.placementId;
    try {
      event.emit(Ludex.Events.AD_LOADING, payload);
      await ad.instance.loadAsync();
      event.emit(Ludex.Events.AD_LOADED, payload);
    } catch (error) {
      event.emit(Ludex.Events.AD_LOAD_FAILED, payload);
      this.degradationTracking$.failedAttempts++;
      throw error;
    }
  }
  async showAdAsync(type, placementId) {
    this.checkEnabled$();
    if (!this.canShowAd(type, placementId)) {
      console.warn(`AdsPlugin: This ad ${type} is not ready to be shown`);
      return;
    }
    const { event } = this.codex;
    const payload = { type, placementId };
    const ad = this.getAd(type, placementId);
    payload.placementId = ad.placementId;
    try {
      event.emit(Ludex.Events.AD_SHOWING, payload);
      this.isAdFullSizeShowed$ = true;
      await ad.instance.showAsync();
      event.emit(Ludex.Events.AD_SHOW, payload);
      this.resetDegradationTracking$();
      this.lastCallAdShownTime$[type] = Date.now() / 1e3;
    } catch (error) {
      event.emit(Ludex.Events.AD_SHOW_FAILED, payload);
      this.degradationTracking$.failedAttempts++;
      throw error;
    } finally {
      event.emit(Ludex.Events.AD_CLOSED, payload);
      this.isAdFullSizeShowed$ = false;
    }
  }
  getAdStatus(type, placementId) {
    this.checkEnabled$();
    try {
      const ad = this.getAd(type, placementId);
      return ad.instance.status;
    } catch (error) {
      console.warn("Error getting ad status:", error);
      return false;
    }
  }
  getAd(type, placementId) {
    let ad = null;
    if (placementId) {
      ad = this.getAdByPlacementId(placementId, type);
    } else {
      ad = this.getPriorityAdByType$(type);
    }
    if (!ad) {
      throw new AdError_default("AD_INSTANCE_NOT_INITIATED", "The instance ads not yet initiated");
    }
    return ad;
  }
  getAdsByType(type) {
    return O4.vals(this.ads$).filter((ad) => ad.type === type);
  }
  getAdByPlacementId(placementId, type) {
    const ads = O4.vals(this.ads$);
    const ad = A2.search(ads, (ad2) => ad2.placementId === placementId && (!type || ad2.type === type));
    if (!ad) return null;
    return ad;
  }
  getPriorityAdByType$(type) {
    const ads = this.getAdsByType(type);
    return ads.length > 0 ? ads[0] : null;
  }
  canShowAd(type, placementId) {
    return this.canShowAdByTime$(type, placementId);
  }
  canShowAdByTime$(type, placementId) {
    try {
      const now = Date.now() / 1e3;
      let ad;
      if (!placementId) {
        const priorityAd = this.getPriorityAdByType$(type);
        if (!priorityAd) return false;
        ad = priorityAd;
      } else {
        ad = this.getAd(type, placementId);
      }
      const adConfig = ad.config;
      const { SecondsBetweenAds = 0, SecondsFirstTime = 0 } = adConfig;
      const period = now - this.lastCallAdShownTime$[type];
      const canShowByTime = period > SecondsBetweenAds;
      const canShowFirstTime = period > SecondsFirstTime;
      console.debug("[AdsPlugin] canShowAdByTime", {
        type,
        now,
        lastShownTime: this.lastCallAdShownTime$[type],
        period,
        adConfig,
        canShowByTime,
        canShowFirstTime
      });
      if (this.lastCallAdShownTime$[type] > 0) {
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
      const ad = this.getAdByPlacementId(placementId, AdsTypes_default.BANNER);
      return !!ad;
    } catch (error) {
      console.warn("Error while checking canShowBannerAd", error);
      return false;
    }
  }
  async showBannerAdAsync(placementId, autoRefresh = true) {
    this.checkEnabled$();
    const ad = this.getAd(AdsTypes_default.BANNER, placementId);
    if (!this.canShowBannerAd(ad.placementId)) {
      throw new Error("Banner ad can not be shown");
    }
    this.cleanBannerReloadTimer$(ad);
    if (autoRefresh) {
      await this.showBannerAdWithSchedule$(ad);
    } else {
      await this.showBannerAdOnce$(ad);
    }
  }
  async showBannerAdOnce$(ad) {
    const { event } = this.codex;
    if (this.isAdFullSizeShowing()) {
      console.warn("Show banner ad skipped because ad full size is showing");
      return;
    }
    const payload = { type: AdsTypes_default.BANNER, placementId: ad.placementId };
    try {
      await ad.instance.loadAsync();
      event.emit(Ludex.Events.AD_SHOWING, payload);
      await ad.instance.showAsync();
      event.emit(Ludex.Events.AD_SHOW, payload);
      this.lastCallAdShownTime$[AdsTypes_default.BANNER] = Date.now() / 1e3;
    } catch (error) {
      const err = F.toError(error);
      if (err.code !== "AD_NOT_FILLED") {
        try {
          await ad.instance.hideAsync();
        } catch (error2) {
          console.warn("Failed to call ad.instance.hideAsync after show banner ad failed", error2);
        }
      }
      event.emit(Ludex.Events.AD_SHOW_FAILED, payload);
    }
  }
  async showBannerAdWithSchedule$(ad) {
    await this.showBannerAdOnce$(ad);
    const bannerConfig = ad.config;
    const { SecondsReload = 0 } = bannerConfig;
    if (SecondsReload <= 0 || !SecondsReload) {
      console.warn("Banner ad reload time is less than 0");
      return;
    }
    const cb = /* @__PURE__ */ __name(() => this.showBannerAdWithSchedule$(ad), "cb");
    ad.interval = setTimeout(cb, SecondsReload * 1e3);
  }
  async hideBannerAdAsync(placementId) {
    this.checkEnabled$();
    const ad = this.getAd(AdsTypes_default.BANNER, placementId);
    this.cleanBannerReloadTimer$(ad);
    await ad.instance.hideAsync();
    const { event } = this.codex;
    event.emit(Ludex.Events.AD_CLOSED, { type: AdsTypes_default.BANNER, placementId });
  }
  cleanBannerReloadTimer$(ad) {
    try {
      const { interval } = ad;
      if (!interval) return;
      clearInterval(interval);
    } catch (error) {
      console.warn("Error while cleaning banner reload timer", error);
    }
  }
  findAdConfig$(type, device, placementId) {
    let configs;
    switch (type) {
      case AdsTypes_default.BANNER:
        configs = this.config$.BannerDisplayAdOptions;
        break;
      case AdsTypes_default.INTERSTITIAL:
        configs = this.config$.InterstitialAdOptions;
        break;
      case AdsTypes_default.REWARDED_VIDEO:
        configs = this.config$.RewardedVideoAdOptions;
        break;
      case AdsTypes_default.REWARDED_INTERSTITIAL:
        configs = this.config$.RewardedInterstitialAdOptions;
        break;
      default:
        return null;
    }
    const config = A2.search(configs, (config2) => {
      const { PlacementId, DeviceOS } = config2;
      return PlacementId === placementId && (DeviceOS === device || DeviceOS === "default");
    });
    return config || null;
  }
  getBannerConfig(placementId) {
    const ad = this.getAdByPlacementId(placementId, AdsTypes_default.BANNER);
    if (!ad) {
      throw new Error(`Banner ad instance with placementId ${placementId} not found`);
    }
    return ad.config;
  }
  getBannerHeight(placementId, gameZoom, includeSAB = true) {
    this.checkEnabled$();
    const ad = this.getAdByPlacementId(placementId, AdsTypes_default.BANNER);
    if (!ad) {
      throw new Error(`Banner ad instance with placementId ${placementId} not found`);
    }
    const bannerConfig = ad.config;
    const bannerHeight = GameSDK.getBannerHeight(bannerConfig);
    if (includeSAB) {
      if (this.safeAreaBottom$ <= 0) {
        this.calculateSafeAreaBottom$();
      }
      return (bannerHeight + this.safeAreaBottom$) * gameZoom;
    }
    return bannerHeight * gameZoom;
  }
  getSafeAreaBottom(gameZoom) {
    if (this.safeAreaBottom$ <= 0) {
      this.calculateSafeAreaBottom$();
    }
    return this.safeAreaBottom$ * gameZoom;
  }
  resetDegradationTracking$() {
    this.degradationTracking$ = {
      failedAttempts: 0,
      lastSuccessTime: Date.now()
    };
  }
  isServiceDegraded() {
    const now = Date.now();
    const { MaxFailedAttempts, ResetTimeMinutes } = this.config$.DegradationTracking;
    const { lastSuccessTime, failedAttempts } = this.degradationTracking$;
    if (now - lastSuccessTime > ResetTimeMinutes * 60 * 1e3) {
      this.resetDegradationTracking$();
    }
    return failedAttempts >= MaxFailedAttempts;
  }
};
__name(_AdsPlugin, "AdsPlugin");
var AdsPlugin = _AdsPlugin;
var AdsPlugin_default = AdsPlugin;

// extensions/ludex/src/plugins/ads/index.ts
var ads_default = AdsPlugin_default;

// extensions/ludex/src/plugins/analytics/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/analytics/AnalyticsPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/analytics/constants/Events.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
  // { level_mode: 'journey', game_mode: 'single', level: 1, level_name: 'level_0001', score: 100 }
  LEVEL_START: "level_start",
  LEVEL_RESCUE: "level_rescue",
  LEVEL_END: "level_end",
  // TODO: [entity]_[action]: 'item_use', 'item_earn', 'item_get_free',
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
  // TODO: ad_start_show {ad_uid: string}
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
  SWITCH_GAME: "switch_game",
  // New Events, maybe use item_use.
  // {booster_name: 'hint', level_name: 'level_0001', level: 1, game_mode: 'single'}
  BOOSTER_USE: "booster_use"
};
var Events_default = AnalyticsEvents;

// extensions/ludex/src/plugins/analytics/funnels/AdsenseFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/analytics/funnels/BaseFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BaseFunnel = class _BaseFunnel {
  history$ = [];
  missing$ = [];
  outOfOrder$ = [];
  completed$ = false;
  failed$ = false;
  warned$ = [];
  debug$ = false;
  // ? Whether the funnel will be stopped at any point
  restrict$ = false;
  addEvent(event, _payload) {
    if (this.completed$ || this.failed$) {
      this.debugLog$("Skip event:", event);
      return;
    }
    this.history$.push(event);
    this.validateAndUpdate$(event);
  }
  validateAndUpdate$(event) {
    const validationResult = this.validateFunnelState$();
    if (validationResult.hasFailed) {
      this.failed$ = true;
      this.logValidationError$();
      return;
    }
    if (validationResult.hasWarnings) {
      this.handleWarnings$(validationResult.warnings);
    }
    this.checkFunnelCompletion$(event);
  }
  validateFunnelState$() {
    const result3 = {
      hasFailed: false,
      hasWarnings: false,
      warnings: []
    };
    const currentSteps = this.getCurrentSteps$();
    const requiredSteps = currentSteps.filter((step) => step.required$);
    for (let i = 0; i < requiredSteps.length; i++) {
      const step = requiredSteps[i];
      const stepIndex = this.history$.indexOf(step.name);
      if (stepIndex === -1) {
        this.missing$ = [step.name];
        result3.hasFailed = true;
        return result3;
      }
      if (i > 0) {
        const prevStep = requiredSteps[i - 1];
        const prevIndex = this.history$.indexOf(prevStep.name);
        if (prevIndex > stepIndex) {
          this.missing$ = [prevStep.name];
          result3.hasFailed = true;
          return result3;
        }
      }
    }
    const outOfOrderEvents = this.validateDependencies$();
    if (outOfOrderEvents.length > 0) {
      result3.hasWarnings = true;
      result3.warnings = outOfOrderEvents;
      this.outOfOrder$ = outOfOrderEvents;
    }
    return result3;
  }
  getCurrentSteps$() {
    const lastEvent = this.history$[this.history$.length - 1];
    const currentIdx = this.funnelSteps$.findIndex((step) => step.name === lastEvent);
    return this.funnelSteps$.slice(0, currentIdx + 1);
  }
  validateDependencies$() {
    const outOfOrder = [];
    this.history$.forEach((event, index) => {
      const step = this.funnelSteps$.find((s) => s.name === event);
      if (!step?.dependencies$?.length) return;
      const missingDep = step.dependencies$.find(
        (dep) => !this.history$.includes(dep) || this.history$.indexOf(dep) > index
      );
      if (missingDep && !this.warned$.includes(event)) {
        outOfOrder.push({ event, missingDependency: missingDep });
        this.warned$.push(event);
      }
    });
    return outOfOrder;
  }
  checkFunnelCompletion$(event) {
    const lastStep = this.funnelSteps$[this.funnelSteps$.length - 1];
    if (event !== lastStep.name) return;
    const allRequired = this.funnelSteps$.filter((step) => step.required$).every((step) => this.history$.
    includes(step.name));
    if (allRequired) {
      this.completed$ = true;
      this.logCompletion$();
    }
  }
  handleWarnings$(warnings) {
    for (const warning of warnings) {
      console.warn(
        `\u26A0\uFE0F [${this.constructor.name}] Event ${warning.event} is out of order. Missing: ${warning.
        missingDependency}`
      );
    }
  }
  logValidationError$() {
    const name2 = this.constructor.name;
    if (this.missing$.length) {
      console.error(`\u26A0\uFE0F [${name2}] Missing required: ${this.missing$.join(", ")}`);
    }
    console.debug(`\u2139\uFE0F [${name2}] History:`, this.history$);
    if (this.restrict$) {
      throw new Error(`[${name2}] Funnel is required to be completed ! (missing: ${this.missing$.join(
      ", ")})`);
    }
  }
  logCompletion$() {
    const name2 = this.constructor.name;
    const hasWrongOrder = this.outOfOrder$.length > 0;
    if (hasWrongOrder) {
      console.warn(`\u26A0\uFE0F [${name2}] Completed with out of order events:`, {
        history: this.history$,
        outOfOrder: this.outOfOrder$
      });
    } else {
      console.info(`\u{1F3AF} [${name2}] Completed`, { history: this.history$ });
    }
  }
  debugLog$(...args) {
    if (this.debug$) {
      console.debug(`\u{1F50D} [${this.constructor.name}]`, ...args);
    }
  }
  // Public getters
  isFunnelCompleted() {
    return this.completed$;
  }
  isFunnelFailed() {
    return this.failed$;
  }
  getEventHistory() {
    return [...this.history$];
  }
  getMissingEvents() {
    return [...this.missing$];
  }
  getOutOfOrderEvents() {
    return [...this.outOfOrder$];
  }
};
__name(_BaseFunnel, "BaseFunnel");
var BaseFunnel = _BaseFunnel;
var BaseFunnel_default = BaseFunnel;

// extensions/ludex/src/plugins/analytics/funnels/AdsenseFunnel.ts
var _AdsenseFunnel = class _AdsenseFunnel extends BaseFunnel_default {
  debug$ = false;
  funnelSteps$ = [
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
__name(_AdsenseFunnel, "AdsenseFunnel");
var AdsenseFunnel = _AdsenseFunnel;
var AdsenseFunnel_default = AdsenseFunnel;

// extensions/ludex/src/plugins/analytics/funnels/LudexFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _LudexFunnel = class _LudexFunnel extends BaseFunnel_default {
  debug$ = false;
  restrict$ = false;
  funnelSteps$ = [
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
__name(_LudexFunnel, "LudexFunnel");
var LudexFunnel = _LudexFunnel;
var LudexFunnel_default = LudexFunnel;

// extensions/ludex/src/plugins/analytics/funnels/PlatformAdsFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _PlatformAdsFunnel = class _PlatformAdsFunnel extends BaseFunnel_default {
  debug$ = false;
  funnelSteps$ = [
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
    return "platform";
  }
  addEvent(event, payload) {
    if (payload?.service !== this.service) return;
    super.addEvent(event, payload);
  }
};
__name(_PlatformAdsFunnel, "PlatformAdsFunnel");
var PlatformAdsFunnel = _PlatformAdsFunnel;
var PlatformAdsFunnel_default = PlatformAdsFunnel;

// extensions/ludex/src/plugins/analytics/funnels/SingleMatchFunnel.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Match: { Modes }
} = Ludex;
var _SingleMatchFunnel = class _SingleMatchFunnel extends BaseFunnel_default {
  debug$ = false;
  funnelSteps$ = [
    {
      name: Events_default.MATCH_START,
      required$: true,
      payload$: {
        game_mode: Modes.SINGLE
      },
      description$: "Match started"
    },
    {
      name: Events_default.LEVEL_START,
      required$: true,
      dependencies$: [Events_default.MATCH_START],
      payload$: {
        game_mode: Modes.SINGLE
      },
      description$: "Level started"
    },
    {
      name: Events_default.LEVEL_RESCUE,
      required$: false,
      dependencies$: [Events_default.LEVEL_START],
      payload$: {
        game_mode: Modes.SINGLE
      },
      description$: "User was rescued"
    },
    {
      name: Events_default.LEVEL_END,
      required$: true,
      dependencies$: [Events_default.LEVEL_START],
      payload$: {
        game_mode: Modes.SINGLE
      },
      description$: "Level ended"
    },
    {
      name: Events_default.MATCH_END,
      required$: true,
      dependencies$: [Events_default.LEVEL_START],
      payload$: {
        game_mode: Modes.SINGLE
      },
      description$: "Match ended"
    }
  ];
  addEvent(event, payload) {
    const { game_mode } = payload ?? {};
    if (!game_mode) return;
    const isRelevantEvent = game_mode.toLowerCase() === Modes.SINGLE;
    if (!isRelevantEvent) return;
    super.addEvent(event, payload);
  }
};
__name(_SingleMatchFunnel, "SingleMatchFunnel");
var SingleMatchFunnel = _SingleMatchFunnel;
var SingleMatchFunnel_default = SingleMatchFunnel;

// extensions/ludex/src/plugins/analytics/template/Analytics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Utils: { String: S2, Valid: V5 }
} = Ludex;
var _BaseAnalytics = class _BaseAnalytics {
  codex;
  name;
  color$;
  options$;
  selfLog$;
  currentPath$;
  constructor(codex2, name2, options) {
    this.codex = codex2;
    this.name = name2;
    this.options$ = options;
    this.color$ = options.color || "#FFF";
    this.selfLog$ = options.log;
    this.currentPath$ = "/";
    console.info(`%c${this.name}: init`, `color: ${this.color$}`, this.options$);
  }
  event(name2, payload) {
    this.logInfo$("event", { name: name2, payload });
    const event = this.formatEventName$(name2);
    this.processEvent$(event, payload);
  }
  logInfo$(message, payload) {
    if (!this.selfLog$) return;
    console.info(`%c${this.name}: ${message}`, `color: ${this.color$}`, payload);
  }
  pageview(pagePath) {
    let pageTitle = this.getPageTitle$(pagePath);
    pageTitle = this.addGameModeToPageTitle$(pageTitle);
    document.title = pageTitle;
    this.event(Events_default.PAGE_VIEW, {
      page_path: pagePath,
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
  loadAdEvent$(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_LOAD, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  showAdEvent$(payload) {
    const { type, placement, service: adService } = payload;
    this.event(Events_default.AD_SHOW, {
      ad_type: type,
      screen_name: placement,
      ad_service: adService
    });
  }
  loadInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.loadAdEvent$({
      type: "interstitial",
      placement,
      service: adService
    });
  }
  showInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent$({
      type: "interstitial",
      placement,
      service: adService
    });
  }
  loadRewardedVideoAd(payload) {
    const { placement, service: adService } = payload;
    this.loadAdEvent$({
      type: "rewarded_video",
      placement,
      service: adService
    });
  }
  showRewardedVideoAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent$({
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
    this.loadAdEvent$({
      type: "rewarded_interstitial",
      placement,
      service: adService
    });
  }
  showRewardedInterstitialAd(payload) {
    const { placement, service: adService } = payload;
    this.showAdEvent$({
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
  formatEventName$(rawName) {
    return rawName.toLowerCase().replace(/:/g, "_");
  }
  getLevelName(level2) {
    return `Level ${S2.padStart(level2.toString(), 5, "0")}`;
  }
  getPageTitle$(pagePath) {
    const pageName = pagePath.split("/").pop();
    if (!V5.isString(pageName)) return pagePath;
    const pageTitle = pageName.replace(/([-_\s.])/g, " $1");
    return S2.toUpperCamelCase(pageTitle);
  }
  addGameModeToPageTitle$(pageTitle) {
    const { match } = this.codex;
    if (!match) return pageTitle;
    const matchState = match.getMatchState();
    let { mode } = matchState;
    if (!mode) {
      mode = "Normal";
    }
    const modeTitle = S2.toUpperCamelCase(mode);
    return `${modeTitle}::${pageTitle}`;
  }
};
__name(_BaseAnalytics, "BaseAnalytics");
var BaseAnalytics = _BaseAnalytics;
var Analytics_default = BaseAnalytics;

// extensions/ludex/src/plugins/analytics/AnalyticsPlugin.ts
Ludex.Plugins.Analytics = {
  Events: Events_default,
  BaseFunnel: BaseFunnel_default,
  BaseAnalytics: Analytics_default
};
var _AnalyticsPlugin = class _AnalyticsPlugin extends Ludex.Plugins.BasePlugin {
  analytics$ = [];
  placement$ = "unknown";
  funnels$ = [];
  constructor(codex2) {
    super(codex2);
    this.initFunnels$();
  }
  mergePayload$(source, target) {
    const {
      Utils: { Object: O32 }
    } = Ludex;
    return O32.merge(source, target);
  }
  add(analytic) {
    const index = this.analytics$.findIndex((item) => item.name === analytic.name);
    if (index !== -1) {
      this.analytics$[index] = analytic;
    } else {
      this.analytics$.push(analytic);
    }
  }
  isActive$() {
    return this.analytics$.length >= 1;
  }
  initFunnels$() {
    this.addFunnel(new LudexFunnel_default());
    this.addFunnel(new AdsenseFunnel_default());
    this.addFunnel(new PlatformAdsFunnel_default());
    this.addFunnel(new SingleMatchFunnel_default());
  }
  addFunnel(funnel) {
    this.funnels$.push(funnel);
  }
  logFunnelEvent$(name2, payload) {
    for (const funnel of this.funnels$) {
      funnel.addEvent(name2, payload);
    }
  }
  pageview = /* @__PURE__ */ __name((key) => {
    if (!this.isActive$()) return;
    this.placement$ = key;
    const path = this.getPageByKey$(key);
    for (const analytic of this.analytics$) {
      analytic.pageview(path);
    }
    this.logFunnelEvent$(Events_default.PAGE_VIEW);
  }, "pageview");
  event(name2, payload) {
    if (!this.isActive$()) return;
    for (const analytic of this.analytics$) {
      analytic.event(name2, payload);
    }
    this.logFunnelEvent$(name2, payload);
  }
  levelStart(level2, score2, mode) {
    if (!this.isActive$()) return;
    for (const analytic of this.analytics$) {
      analytic.levelStart(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_START, { score: score2, game_mode: mode });
  }
  levelRescue(level2, score2, mode) {
    if (!this.isActive$()) return;
    for (const analytic of this.analytics$) {
      analytic.levelRescue(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_RESCUE, { score: score2, game_mode: mode });
  }
  levelFail(level2, score2, mode) {
    if (!this.isActive$()) return;
    for (const analytic of this.analytics$) {
      analytic.levelFail(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_END, { score: score2, game_mode: mode });
  }
  levelComplete(level2, score2, mode) {
    if (!this.isActive$()) return;
    for (const analytic of this.analytics$) {
      analytic.levelComplete(level2, score2, mode);
    }
    this.logFunnelEvent$(Events_default.LEVEL_END, { score: score2, game_mode: mode });
  }
  async initAdEvent(payload) {
    if (!this.isActive$()) return;
    await new Promise((resolve) => {
      const { Events: Events11 } = Ludex;
      this.codex.event.catchUp(Events11.GAME_READY, resolve);
    });
    for (const analytic of this.analytics$) {
      analytic.initAdEvent(payload);
    }
  }
  loadInterstitialAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.loadInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showInterstitialAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.showInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  loadRewardedVideoAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.loadRewardedVideoAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showRewardedVideoAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.showRewardedVideoAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  receiveVideoReward(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.receiveVideoReward(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_REWARD, payloadWithPage);
  }
  loadRewardedInterstitialAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.loadRewardedInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD, payloadWithPage);
  }
  showRewardedInterstitialAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.showRewardedInterstitialAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW, payloadWithPage);
  }
  receiveInterstitialReward(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.receiveInterstitialReward(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_REWARD, payloadWithPage);
  }
  loadAdFail(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.loadAdFail(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_LOAD_FAILED, payloadWithPage);
  }
  showAdFail(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.showAdFail(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOW_FAILED, payloadWithPage);
  }
  showingAd(payload) {
    if (!this.isActive$()) return;
    const payloadWithPage = this.mergePayload$(payload, { placement: this.placement$ });
    for (const analytic of this.analytics$) {
      analytic.showingAd(payloadWithPage);
    }
    this.logFunnelEvent$(Events_default.AD_SHOWING, payloadWithPage);
  }
  getPageByKey$(key) {
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
__name(_AnalyticsPlugin, "AnalyticsPlugin");
var AnalyticsPlugin = _AnalyticsPlugin;
var AnalyticsPlugin_default = AnalyticsPlugin;

// extensions/ludex/src/plugins/analytics/index.ts
var analytics_default = AnalyticsPlugin_default;

// extensions/ludex/src/plugins/audio/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/audio/AudioPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/audio/template/AudioPlayer.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BaseAudioPlayer = class _BaseAudioPlayer {
  key$;
  constructor(key) {
    this.key$ = key;
  }
  getKey() {
    return this.key$;
  }
};
__name(_BaseAudioPlayer, "BaseAudioPlayer");
var BaseAudioPlayer = _BaseAudioPlayer;
var AudioPlayer_default = BaseAudioPlayer;

// extensions/ludex/src/plugins/audio/template/ChannelManager.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Decorator } = Ludex.Utils;
var _BaseChannelManager = class _BaseChannelManager {
  id$;
  isMuteAll$;
  masterVolume$;
  audioClips$;
  constructor(channelId) {
    this.id$ = channelId;
    this.masterVolume$ = 1;
    this.isMuteAll$ = false;
    this.audioClips$ = {};
  }
  getId() {
    return this.id$;
  }
  getAudioClip(key) {
    const clip = this.audioClips$[key];
    if (!clip) return null;
    return this.audioClips$[key];
  }
  setAudioClip(key, audioClip) {
    this.audioClips$[key] = __spreadValues(__spreadValues({}, this.audioClips$[key]), audioClip);
  }
  async play(key, config) {
    const audioClip = this.getAudioClip(key);
    if (audioClip) {
      const { audioPlayer } = audioClip;
      this.playWithRealConfig$(audioPlayer, config);
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
    this.playWithRealConfig$(audioPlayer, config);
  }
  playWithRealConfig$(audioPlayer, config) {
    if (config) {
      const { volume = 1 } = config;
      config.volume = this.masterVolume$ * volume;
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
    this.callAudioPlayers$("stop");
  }
  muteAll() {
    if (this.isMuteAll$) return;
    this.isMuteAll$ = true;
    this.callAudioPlayers$("mute");
  }
  unmuteAll() {
    if (!this.isMuteAll$) return;
    this.isMuteAll$ = false;
    this.callAudioPlayers$("unmute");
  }
  setVolume(value) {
    this.masterVolume$ = value;
    this.callAudioPlayers$("setVolume");
  }
  getVolume() {
    return this.masterVolume$;
  }
  queueAudioPlayer$(clip, funcName) {
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
          audioPlayer.setVolume(this.masterVolume$ * volume);
          break;
        default:
          throw new Error(`Unsupported function: ${funcName}`);
      }
    } catch (error) {
      console.warn("queueAudioPlayer", error);
    }
  }
  callAudioPlayers$(funcName) {
    const { Object: O32 } = Ludex.Utils;
    const audioClips = O32.vals(this.audioClips$);
    for (const audioClip of audioClips) {
      this.queueAudioPlayer$(audioClip, funcName);
    }
  }
};
__name(_BaseChannelManager, "BaseChannelManager");
__decorateClass([
  Decorator.tryCatch(),
  Decorator.validateParams("string")
], _BaseChannelManager.prototype, "loadAndPlay", 1);
var BaseChannelManager = _BaseChannelManager;
var ChannelManager_default = BaseChannelManager;

// extensions/ludex/src/plugins/audio/AudioPlugin.ts
Ludex.Plugins.Audio = {
  BaseAudioPlayer: AudioPlayer_default,
  // @ts-expect-error - pass for protected abstract class
  BaseChannelManager: ChannelManager_default
};
var { Decorator: Decorator2 } = Ludex.Utils;
var _AudioPlugin = class _AudioPlugin extends Ludex.Plugins.BasePlugin {
  firstChannelId$;
  channels$ = {};
  addChannel(channel) {
    const id = channel.getId();
    this.channels$[id] = channel;
    if (!this.firstChannelId$) {
      this.firstChannelId$ = id;
    }
  }
  getChannel$(channelId) {
    if (channelId === void 0) {
      return this.channels$[this.firstChannelId$];
    }
    const channel = this.channels$[channelId];
    if (!channel) {
      throw new Error(`Channel ${channelId} not found`);
    }
    return channel;
  }
  async play(key, config, channelId) {
    const channel = this.getChannel$(channelId);
    await channel.play(key, config);
  }
  pause(key, channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.pause(key);
    } catch (error) {
      console.warn("pauseSound", error);
    }
  }
  resume(key, channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.resume(key);
    } catch (error) {
      console.warn("resumeSound", error);
    }
  }
  stop(key, channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.stop(key);
    } catch (error) {
      console.warn("stopSound", error);
    }
  }
  stopAll(channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.stopAll();
    } catch (error) {
      console.warn("stopAllSounds", error);
    }
  }
  mute(channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.muteAll();
    } catch (error) {
      console.warn("mute", error);
    }
  }
  unmute(channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.unmuteAll();
    } catch (error) {
      console.warn("unmute", error);
    }
  }
  setVolume(volume, channelId) {
    try {
      const channel = this.getChannel$(channelId);
      channel.setVolume(volume);
    } catch (error) {
      console.warn("setSoundVolume", error);
    }
  }
  getVolume(channelId) {
    try {
      const channel = this.getChannel$(channelId);
      return channel.getVolume();
    } catch (error) {
      console.warn("getSoundVolume", error);
      return -1;
    }
  }
};
__name(_AudioPlugin, "AudioPlugin");
__decorateClass([
  Decorator2.tryCatch(),
  Decorator2.validateParams("string")
], _AudioPlugin.prototype, "play", 1);
var AudioPlugin = _AudioPlugin;
var AudioPlugin_default = AudioPlugin;

// extensions/ludex/src/plugins/audio/index.ts
var audio_default = AudioPlugin_default;

// extensions/ludex/src/plugins/auth/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/auth/AuthPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/auth/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var initState2 = {
  token: "",
  isRequesting: false
};
var state_default2 = initState2;

// extensions/ludex/src/plugins/auth/AuthPlugin.ts
var {
  Utils: { Object: O5 }
} = Ludex;
var _AuthPlugin = class _AuthPlugin extends Ludex.Plugins.BasePlugin {
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
__name(_AuthPlugin, "AuthPlugin");
var AuthPlugin = _AuthPlugin;
var AuthPlugin_default = AuthPlugin;

// extensions/ludex/src/plugins/auth/index.ts
var auth_default = AuthPlugin_default;

// extensions/ludex/src/plugins/context/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/context/ContextPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/context/constants/ContextTypes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/context/constants/ContextModes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var ContextGameModes = MatchModes_default2;
var ContextModes_default = ContextGameModes;

// extensions/ludex/src/plugins/context/context.ts
var {
  Configs,
  Utils: { Array: A3, Valid: V6, Browser: B }
} = Ludex;
var _Context2 = class _Context2 {
  codex$;
  constructor(codex2) {
    this.codex$ = codex2;
  }
  isValidContextType$(contextType2) {
    return ["THREAD", "POST", "SOLO", "GROUP"].indexOf(contextType2) >= 0;
  }
  isValidEntryPointData$(entryPointData2) {
    return V6.isObject(entryPointData2);
  }
  isTournamentEntryPoint$(entryPoint) {
    return A3.has(
      ["facebook~game_list~tournaments", "fb_feed_tournament_unit", "messenger~bot_thread~tournament\
s"],
      entryPoint
    );
  }
  receiveContext(contextId2, contextType2, entryPointData2) {
    const { storage } = this.codex$;
    storage.setStorageData("context", "contextId", contextId2);
    if (this.isValidEntryPointData$(entryPointData2)) {
      storage.setStorageData("context", "entryPointData", entryPointData2);
    } else {
      console.warn("Invalid entry point data:", entryPointData2);
    }
    if (this.isValidContextType$(contextType2)) {
      storage.setStorageData("context", "contextType", contextType2);
    } else {
      console.warn(`Invalid context type: ${contextType2}`);
    }
  }
  getContextId() {
    const { storage } = this.codex$;
    return storage.getStorageData("context", "contextId") ?? "";
  }
  getContextType() {
    const { storage } = this.codex$;
    return storage.getStorageData("context", "contextType") ?? "SOLO";
  }
  getContextData() {
    const { storage } = this.codex$;
    return storage.getStorageData("context", "entryPointData") ?? {};
  }
  getSessionContextType() {
    const { storage } = this.codex$;
    return storage.getStorageData("context", "sessionContextType") ?? "unknown";
  }
  async detectContextSessionType() {
    const { storage } = this.codex$;
    const entryPointData2 = this.getContextData();
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
        sessionContextType = this.fastCheckTournamentContext$() || sessionContextType;
      } else {
        sessionContextType = await this.outdatedCheckTournamentContext$() || sessionContextType;
      }
    }
    storage.setStorageData("context", "sessionContextType", sessionContextType);
  }
  // ? This is a trick to detect if the user is in a tournament
  fastCheckTournamentContext$() {
    const params = B.getQueryParams();
    const entryPoint = params.entry_point;
    if (typeof entryPoint !== "string") return false;
    if (!this.isTournamentEntryPoint$(entryPoint)) return false;
    return ContextTypes_default.TOURNAMENT;
  }
  async outdatedCheckTournamentContext$() {
    const { storage } = this.codex$;
    if (!("getTournamentAsync" in GameSDK)) return false;
    try {
      const tournament = await GameSDK.getTournamentAsync();
      storage.setStorageData("context", "contextId", tournament.getContextID());
      if (tournament.getEndTime() > Date.now() / 1e3) {
        return ContextTypes_default.TOURNAMENT;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  detectContextGameMode() {
    const { player, storage } = this.codex$;
    const entryPointData2 = this.getContextData();
    const contextSessionType = this.getSessionContextType();
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
__name(_Context2, "Context");
var Context3 = _Context2;
var context_default = Context3;

// extensions/ludex/src/plugins/context/loader.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/PlayerHasFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _PlayerHasFinishedMatch = class _PlayerHasFinishedMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerHasFinishedMatch";
    this.message = message ?? "Player has finished match";
  }
};
__name(_PlayerHasFinishedMatch, "PlayerHasFinishedMatch");
var PlayerHasFinishedMatch = _PlayerHasFinishedMatch;
var PlayerHasFinishedMatch_default = PlayerHasFinishedMatch;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotJoinInMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _PlayerNotJoinInMatch = class _PlayerNotJoinInMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotJoinInMatch";
    this.message = message || "Player is not join in match";
  }
};
__name(_PlayerNotJoinInMatch, "PlayerNotJoinInMatch");
var PlayerNotJoinInMatch = _PlayerNotJoinInMatch;
var PlayerNotJoinInMatch_default = PlayerNotJoinInMatch;

// extensions/ludex/src/plugins/context/loader.ts
var {
  Events: Events2,
  Plugins: { Analytics },
  Utils: { Valid: V7 }
} = Ludex;
var _Loader = class _Loader {
  codex$;
  constructor(codex2) {
    this.codex$ = codex2;
  }
  async processContextData() {
    const { player, context } = this.codex$;
    const contextId2 = context.getContextId();
    const contextData = context.getContextData();
    const contextSessionType = context.getSessionContextType();
    const { type, matchId, playerId: playerId2, opponentId, playerScore, action } = contextData;
    if (action) {
      await this.processEntryPointAction$(action);
    }
    const isFirstSession = player.isFirstSession();
    setTimeout(() => {
      this.logUserAnalytics$(isFirstSession);
    }, 1e3);
    const { TOURNAMENT, SHARE_INVITE, MATCHING_GROUP, CHALLENGE_FRIEND } = ContextTypes_default;
    if (contextSessionType === TOURNAMENT) {
      try {
        await this.processTournamentModeAsync$(contextId2);
        return;
      } catch (e) {
      }
    }
    if (contextSessionType === CHALLENGE_FRIEND) {
      if (type === SHARE_INVITE && typeof playerId2 === "string") {
        await this.processChallengeFromPostAsync$(playerId2);
        return;
      }
      if (type === CHALLENGE_FRIEND && typeof matchId === "string" && typeof playerId2 === "string" &&
      typeof opponentId === "string") {
        await this.processChallengeFromMessageAsync$({
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
      await this.processMatchingGroupModeAsync$(playerId2, playerScore);
      return;
    }
    if (isFirstSession) {
      await this.processSingleModeAsync$(true);
      player.loggedIn();
      return;
    }
    this.switchToDashboardScene$();
  }
  logUserAnalytics$(isFirstSession) {
    try {
      const { player, analytics } = this.codex$;
      if (isFirstSession) {
        analytics?.event(Analytics.Events.NEW_USER);
      } else {
        const { coins: coins2 } = player.getPlayerData().gameData;
        analytics?.event(Analytics.Events.RETURNING_USER, { coins: coins2 });
      }
    } catch (e) {
    }
  }
  async processEntryPointAction$(action) {
    try {
      const { player } = this.codex$;
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
          this.requestSetLocale$("en");
          break;
        case "set_locale_ru":
          this.requestSetLocale$("ru");
          break;
      }
    } catch (error) {
      console.warn("processEntryPointAction", error);
    }
  }
  requestSetLocale$(locale2) {
    const { event } = this.codex$;
    event.emit(Events2.REQUEST_LANGUAGE, {
      locale: locale2
    });
  }
  async processTournamentModeAsync$(contextId2) {
    const { match, player } = this.codex$;
    const playerId2 = player.getPlayerId();
    if (V7.isEmpty(contextId2)) {
      throw new Error("Cannot get contextId");
    }
    await match.tournament.continue.processAsync({ playerId: playerId2, contextId: contextId2 });
    this.switchToGameScene$();
  }
  async processChallengeFromPostAsync$(opponentId) {
    const { match, player } = this.codex$;
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
    this.switchToGameScene$();
  }
  async processChallengeFromMessageAsync$(payload) {
    try {
      await this.processContinueChallengeFromMessageAsync$(payload);
    } catch (error) {
      console.warn("processContinueChallengeFromMessageAsync", error);
      if (error instanceof PlayerHasFinishedMatch_default) {
        await this.processAwaitChallengeFromMessageAsync$(payload);
        return;
      }
      if (error instanceof PlayerNotJoinInMatch_default) {
        await this.processJoinChallengeFromMessageAsync$(payload);
        return;
      }
      this.switchToDashboardScene$();
    }
  }
  async processContinueChallengeFromMessageAsync$(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId, opponentId: receiverId } = payload;
    const { match, player } = this.codex$;
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
    this.switchToGameScene$();
  }
  async processJoinChallengeFromMessageAsync$(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex$;
    const curPlayerId = player.getPlayerId();
    await match.challenge.join.processAsync({
      contextId: contextId2,
      matchId,
      playerId: curPlayerId,
      opponentId: inviterId
    });
    this.switchToGameScene$();
  }
  async processAwaitChallengeFromMessageAsync$(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex$;
    const curPlayerId = player.getPlayerId();
    try {
      await match.challenge.await.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        opponentId: inviterId
      });
      this.switchToChallengeResultScene$();
    } catch (error) {
      console.warn("processAwaitChallengeFromMessageAsync", error);
      await this.processResultChallengeFromMessageAsync$(payload);
    }
  }
  async processResultChallengeFromMessageAsync$(payload) {
    const { contextId: contextId2, matchId, playerId: inviterId } = payload;
    const { match, player } = this.codex$;
    const curPlayerId = player.getPlayerId();
    try {
      await match.challenge.result.processAsync({
        contextId: contextId2,
        matchId,
        playerId: curPlayerId,
        opponentId: inviterId
      });
      this.switchToChallengeResultScene$();
    } catch (e) {
      this.switchToDashboardScene$();
    }
  }
  async processMatchingGroupModeAsync$(opponentId, opponentScore) {
    const { match, player } = this.codex$;
    await match.group.join.processAsync({
      playerId: player.getPlayerId(),
      opponentId,
      opponentScore
    });
    this.switchToGameScene$();
  }
  async processSingleModeAsync$(isFirstSession) {
    const { match, player } = this.codex$;
    const playerId2 = player.getPlayerId();
    if (isFirstSession) {
      await match.handler.setMatchCustomData({ playerId: playerId2, contextId: "SOLO" });
    }
    await match.single.start.processAsync({ playerId: playerId2 });
    this.switchToGameScene$();
  }
  switchToDashboardScene$() {
    const { event } = this.codex$;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "DashboardScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
  switchToGameScene$() {
    const { event } = this.codex$;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "GameScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
  switchToChallengeResultScene$() {
    const { event } = this.codex$;
    event.emit(Events2.SWITCH_SCENE, {
      sceneName: "ChallengeResultScene",
      sceneData: {
        isFromLoader: true
      }
    });
  }
};
__name(_Loader, "Loader");
var Loader = _Loader;
var loader_default = Loader;

// extensions/ludex/src/plugins/context/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
var {
  Events: Events3,
  Utils: { Function: F2 }
} = Ludex;
var _ContextPlugin = class _ContextPlugin extends Ludex.Plugins.BasePlugin {
  context$;
  loader$;
  constructor(game) {
    super(game);
    this.loader$ = new loader_default(game);
    this.context$ = new context_default(game);
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
    event.catchUp(Events3.CONTEXT_SESSION_TYPE_DETECTED, async () => {
      try {
        await this.loader$.processContextData();
        event.emit(Events3.CONTEXT_DATA_PROCESSED);
      } catch (error) {
        console.debug("processContextData", error);
        this.switchToDashboardScene$();
        monitorError?.sendException(F2.toError(error));
      }
    });
  }
  async detectContextSessionType() {
    const { event, monitorError } = this.codex;
    try {
      await this.context$.detectContextSessionType();
    } catch (error) {
      console.debug("detectContextSessionType", error);
      monitorError?.sendException(F2.toError(error));
    } finally {
      event.emit(Events3.CONTEXT_SESSION_TYPE_DETECTED);
    }
  }
  detectContextGameMode() {
    this.context$.detectContextGameMode();
  }
  receiveContext(contextId2, contextType2, entryPointData2) {
    this.context$.receiveContext(contextId2, contextType2, entryPointData2);
  }
  getContextId() {
    return this.context$.getContextId();
  }
  getContextType() {
    return this.context$.getContextType();
  }
  getContextData() {
    return this.context$.getContextData();
  }
  getSessionContextType() {
    return this.context$.getSessionContextType();
  }
  switchToDashboardScene$() {
    const { event } = this.codex;
    event.emit(Events3.SWITCH_SCENE, { sceneName: "DashboardScene" });
  }
};
__name(_ContextPlugin, "ContextPlugin");
var ContextPlugin = _ContextPlugin;
var ContextPlugin_default = ContextPlugin;

// extensions/ludex/src/plugins/context/dtos/ContextInfo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V8 } = Ludex.Utils;
var { contextId, contextType, entryPointData } = state_default3;
var MESSAGE_INVALID3 = "is invalid";
var _ContextInfoDtos = class _ContextInfoDtos extends BaseDtos_default {
  data$;
  setupData$(data) {
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
__name(_ContextInfoDtos, "ContextInfoDtos");
var ContextInfoDtos = _ContextInfoDtos;
ContextInfoDtos.addDefaults({
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

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/event/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/event/EventPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/event/emitter.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// node_modules/eventemitter3/index.mjs
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// extensions/ludex/src/plugins/event/emitter.ts
var Emitter = new eventemitter3_default();
var emitter_default = Emitter;

// extensions/ludex/src/plugins/event/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var initState4 = {
  names: [],
  history: []
};
var state_default4 = initState4;

// extensions/ludex/src/plugins/event/EventPlugin.ts
var {
  Utils: { Decorator: Decorator3, Array: A4 }
} = Ludex;
var _EventPlugin = class _EventPlugin extends Ludex.Plugins.BasePlugin {
  enableLog$ = false;
  muteEvents$ = [];
  init() {
    const { storage } = this.codex;
    storage.addStorage("event", state_default4);
  }
  enableLogEvent() {
    this.enableLog$ = true;
  }
  on(event, callback) {
    this.addEventName$(event);
    this.addHistory$(event, "on", "listening");
    emitter_default.on(event, callback);
  }
  once(event, callback) {
    this.addEventName$(event);
    this.addHistory$(event, "once", "listening");
    emitter_default.once(event, callback);
  }
  waitTo(event, timeout) {
    return new Promise((resolve, reject) => {
      let timeoutId;
      const callback = /* @__PURE__ */ __name((payload) => {
        clearTimeout(timeoutId);
        resolve(payload);
      }, "callback");
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
    const eventInfo = this.getLastEventInfo(event, "called");
    if (!eventInfo) {
      this.once(event, callback);
      return;
    }
    if (this.muteEvents$.indexOf(event) > -1) return;
    const { payload } = eventInfo;
    callback(payload);
  }
  off(event, callback) {
    emitter_default.off(event, callback);
    this.addHistory$(event, "action", "removed");
  }
  mute(event) {
    if (this.muteEvents$.indexOf(event) > -1) return;
    this.muteEvents$.push(event);
  }
  clear(event) {
    emitter_default.removeAllListeners(event);
    this.addHistory$(event, "action", "removed");
  }
  emit(event, payload) {
    if (this.muteEvents$.indexOf(event) > -1) return;
    let args = [];
    if (payload) {
      args = [payload];
    }
    this.addHistory$(event, "action", "called", payload);
    emitter_default.emit(event, ...args);
  }
  addEventName$(event) {
    const { storage } = this.codex;
    const names2 = storage.getStorageData("event", "names");
    if (!names2) return;
    if (names2.indexOf(event) < 0) {
      names2.push(event);
    }
  }
  limitHistory$(history) {
    const limit = 1e4;
    if (history.length <= limit) return history;
    return A4.limit(history, limit);
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
    return this.limitHistory$(history);
  }
  getEventEmitCount(event) {
    const history = this.getHistory();
    return history.filter((item) => {
      return item.name === event && item.status === "called";
    }).length;
  }
  getLastEventInfo(event, status) {
    const history = this.getHistory();
    for (let i = history.length - 1; i >= 0; i--) {
      const entry = history[i];
      if (entry.name === event && (status ? entry.status === status : true)) {
        return entry;
      }
    }
    return null;
  }
  getTypeFromHistory$(event) {
    const lastEvent = this.getLastEventInfo(event);
    return lastEvent?.type ?? null;
  }
  getCallsFromHistory$(event) {
    const lastEvent = this.getLastEventInfo(event);
    return lastEvent?.called ?? 0;
  }
  addHistory$(event, type, status, payload) {
    const typeFromHistory = this.getTypeFromHistory$(event);
    const correctType = typeFromHistory ?? type;
    const currentCalled = this.getCallsFromHistory$(event);
    const correctCalled = status === "called" ? currentCalled + 1 : currentCalled;
    const history = this.getHistory();
    history.push({
      type: correctType,
      status,
      name: event,
      called: correctCalled,
      payload: payload ?? {}
    });
    this.logEventInfo$(event, correctType, status, correctCalled);
  }
  logEventInfo$(event, type, status, called) {
    if (!this.enableLog$) return;
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
__name(_EventPlugin, "EventPlugin");
__decorateClass([
  Decorator3.validateParams("string", "function")
], _EventPlugin.prototype, "on", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], _EventPlugin.prototype, "once", 1);
__decorateClass([
  Decorator3.validateParams("string")
], _EventPlugin.prototype, "waitTo", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], _EventPlugin.prototype, "catchUp", 1);
__decorateClass([
  Decorator3.validateParams("string", "function")
], _EventPlugin.prototype, "off", 1);
__decorateClass([
  Decorator3.validateParams("string")
], _EventPlugin.prototype, "mute", 1);
__decorateClass([
  Decorator3.validateParams("string")
], _EventPlugin.prototype, "clear", 1);
__decorateClass([
  Decorator3.validateParams("string")
], _EventPlugin.prototype, "emit", 1);
var EventPlugin = _EventPlugin;
var EventPlugin_default = EventPlugin;

// extensions/ludex/src/plugins/event/index.ts
var event_default = EventPlugin_default;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/frame-capture/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/frame-capture/FrameCapturePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/frame-capture/constants/font.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var FONT_SYS_FAMILY = `nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Canta\
rell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif`;

// extensions/ludex/src/plugins/frame-capture/FrameCapturePlugin.ts
var {
  Configs: {
    FrameCapture: { Enabled, Options }
  },
  Utils: { Browser: B2, Image: I, Object: O6, Valid: V9 }
} = Ludex;
var _FrameCapturePlugin = class _FrameCapturePlugin extends Ludex.Plugins.BasePlugin {
  width$;
  height$;
  canvas$ = null;
  context$ = null;
  testRenderOptions$ = null;
  caches$ = {};
  renderers$ = {};
  async preloadAsync(payload) {
    const { renderOptions } = payload;
    await this.loadImages$(renderOptions);
  }
  async captureAsync(payload) {
    const { width, height, renderOptions } = payload;
    await this.loadImages$(renderOptions);
    this.width$ = width;
    this.height$ = height;
    this.createCanvas$();
    this.drawObjects$(renderOptions);
    return this.snapshotFrameAsync$();
  }
  async renderAsync(key, config) {
    if (!Enabled) {
      console.warn("FrameCapture is not enabled");
      return null;
    }
    const render = this.renderers$[key];
    if (render === void 0) {
      throw new Error(`Renderer ${key} has not been set`);
    }
    return await render(config);
  }
  setRenderer(renderer, handler) {
    this.renderers$[renderer] = handler;
  }
  unsetRenderer(renderer) {
    delete this.renderers$[renderer];
  }
  setTestRenderOptions(payload) {
    if (!payload) {
      this.testRenderOptions$ = null;
      return;
    }
    const options = O6.camelCaseKeys(payload);
    this.testRenderOptions$ = O6.merge(this.testRenderOptions$, options);
  }
  createCanvas$() {
    if (!this.canvas$) {
      const result3 = B2.createCanvas({
        type: "canvas",
        contextAttributes: { alpha: false, desynchronized: true, willReadFrequently: true },
        contextType: "2d"
      });
      this.canvas$ = result3?.canvas;
      this.context$ = result3?.context;
    }
    if (!this.canvas$) throw new Error("Failed to create canvas");
    if (this.context$) {
      this.context$.clearRect(0, 0, this.width$, this.height$);
    }
    this.canvas$.width = this.width$;
    this.canvas$.height = this.height$;
  }
  async loadImages$(payload) {
    const images = this.getRenderImages$(payload);
    const queue = this.prepareLoadImages$(images);
    const promises = O6.vals(queue);
    if (promises.length < 1) return;
    const result3 = await Promise.all(promises);
    this.cacheImages$(queue, result3);
  }
  getRenderImages$(renderOptions) {
    const imageOptions = O6.vals(renderOptions).filter((option) => option.type === "image");
    for (const imageOption of imageOptions) {
      const { name: name2, image, fallbackImage } = imageOption;
      const isImageValid = V9.isString(image) && image !== "";
      if (!name2) {
        const defaultName2 = isImageValid ? image : fallbackImage;
        if (defaultName2) {
          imageOption.name = defaultName2;
        }
      }
      if (!isImageValid && fallbackImage) {
        imageOption.image = fallbackImage;
      }
    }
    return imageOptions;
  }
  prepareLoadImages$(images) {
    const queue = {};
    for (const img2 of images) {
      const { name: name2, image, fallbackImage } = img2;
      const cached = this.caches$[name2];
      if (!V9.isString(image) || cached) continue;
      if (image === "" && V9.isString(fallbackImage)) {
        img2.image = fallbackImage;
      }
      console.debug("prepareLoadImages", img2);
      queue[name2] = new Promise((resolve) => {
        const loadImagePromise = I.loadImage(image);
        loadImagePromise.then((img3) => {
          resolve(img3);
        }).catch(() => {
          if (!V9.isString(fallbackImage)) {
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
  cacheImages$(queue, result3) {
    for (const id in queue) {
      const image = result3.shift();
      if (!image) continue;
      this.caches$[id] = image;
    }
  }
  drawObjects$(payload) {
    const options = O6.vals(payload).sort((a, b) => a.depth - b.depth);
    for (const option of options) {
      switch (option.type) {
        case "text":
          this.drawText$(option);
          break;
        case "image":
          this.drawImage$(option);
          break;
      }
    }
  }
  drawText$(option) {
    if (!this.canvas$ || !this.context$) return;
    const { position, font, text, color, lineWidth, textAlign } = option;
    this.context$.font = `${font} ${FONT_SYS_FAMILY}`;
    this.context$.fillStyle = color ?? "#ffffff";
    if (lineWidth) {
      this.context$.lineWidth = lineWidth;
    }
    if (textAlign) {
      this.context$.textAlign = textAlign;
    }
    console.debug("drawText", option);
    const [x, y] = position;
    this.context$.fillText(text, x, y);
  }
  drawImage$(option) {
    if (!this.canvas$ || !this.context$) return;
    const { name: name2, size, position, fallbackImage } = option;
    let source = this.caches$[name2];
    if (!source && fallbackImage) {
      source = this.caches$[fallbackImage];
    }
    if (!source) {
      throw new Error(`Image ${name2} not found`);
    }
    console.debug("drawImage", option);
    const [x, y] = position;
    const [width, height] = size;
    this.context$.drawImage(source, x, y, width, height);
  }
  async snapshotFrameAsync$() {
    if (!this.canvas$) return null;
    let imageData = null;
    if (Options.UseBlobIfPossible && "toBlob" in this.canvas$) {
      imageData = await this.createAsBlob$();
    } else {
      imageData = this.createAsDataImage$();
    }
    if (!imageData) {
      throw new Error("Image data is null");
    }
    if (V9.isDebugger()) {
      I.logImage(imageData);
    }
    return imageData;
  }
  createAsDataImage$() {
    if (!this.canvas$ || !this.context$) return null;
    const { Quality, RenderType } = Options;
    return this.context$.canvas.toDataURL(`image/${RenderType}`, Quality);
  }
  createAsBlob$() {
    return new Promise((resolve) => {
      if (!this.canvas$) {
        resolve(null);
        return;
      }
      const { Quality, RenderType } = Options;
      this.canvas$.toBlob(
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
__name(_FrameCapturePlugin, "FrameCapturePlugin");
var FrameCapturePlugin = _FrameCapturePlugin;
var FrameCapturePlugin_default = FrameCapturePlugin;

// extensions/ludex/src/plugins/frame-capture/index.ts
var frame_capture_default = FrameCapturePlugin_default;

// extensions/ludex/src/plugins/language/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/language/LanguagePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/language/exceptions/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/language/exceptions/LocaleNotFoundError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _LocaleNotFoundError = class _LocaleNotFoundError extends Error {
  locale;
  constructor(locale2) {
    super(`Locale "${locale2}" not found`);
    this.name = "LocaleNotFoundError";
    this.locale = locale2;
  }
};
__name(_LocaleNotFoundError, "LocaleNotFoundError");
var LocaleNotFoundError = _LocaleNotFoundError;
var LocaleNotFoundError_default = LocaleNotFoundError;

// extensions/ludex/src/plugins/language/exceptions/MissingKeyInLocaleError.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MissingKeyInLocaleError = class _MissingKeyInLocaleError extends Error {
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
__name(_MissingKeyInLocaleError, "MissingKeyInLocaleError");
var MissingKeyInLocaleError = _MissingKeyInLocaleError;
var MissingKeyInLocaleError_default = MissingKeyInLocaleError;

// extensions/ludex/src/plugins/language/LanguagePlugin.ts
var {
  Utils: { Object: O7, Function: F3, Browser: B3, Valid: V10 },
  Configs: {
    Languages: { DetectPlayerLocale }
  }
} = Ludex;
function nullOrNotEmpty(value) {
  if (V10.isEmpty(value)) return null;
  return value;
}
__name(nullOrNotEmpty, "nullOrNotEmpty");
var _LanguagePlugin = class _LanguagePlugin extends Ludex.Plugins.BasePlugin {
  locale$;
  fallbackLocale$;
  data$ = {};
  setFallbackLocale(locale2) {
    this.fallbackLocale$ = locale2;
  }
  hasLocale(locale2) {
    return O7.hasOwn(this.data$, locale2);
  }
  hasTextKey(key, locale2) {
    const l = locale2 ?? this.getCurrentLocale();
    const { text } = this.getLocaleData$(l);
    return O7.hasOwn(text, key);
  }
  hasTextureKey(key, locale2) {
    const l = locale2 ?? this.getCurrentLocale();
    const { texture } = this.getLocaleData$(l);
    return O7.hasOwn(texture, key);
  }
  add(locale2, data, setAsFallback = false) {
    this.data$[locale2] = data;
    if (setAsFallback) {
      this.setFallbackLocale(locale2);
    }
  }
  choose(locale2) {
    this.locale$ = locale2;
    const { event } = this.codex;
    event.emit(Ludex.Events.LANGUAGE_CHANGED, { locale: locale2 });
  }
  getText(key, variables, locale2, disableFallback = false) {
    try {
      return this.uncaughtGetText$(key, variables, locale2, !disableFallback);
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
    return this.uncaughtGetTexture$(key, locale2, !disableFallback);
  }
  uncaughtGetText$(key, variables = [], locale2, enableFallback = true) {
    if (!enableFallback || this.fallbackLocale$ === void 0) {
      const text2 = this.getRawText$(key, locale2 ?? this.getCurrentLocale());
      return this.replaceVariables$(text2, variables);
    }
    const fallbackLocale = this.fallbackLocale$;
    const text = F3.retry(
      () => this.getRawText$(key, locale2 ?? this.getCurrentLocale()),
      () => this.getRawText$(key, fallbackLocale)
    );
    return this.replaceVariables$(text, variables);
  }
  getRawText$(key, locale2) {
    if (!this.hasTextKey(key, locale2)) {
      throw new MissingKeyInLocaleError_default(key, locale2);
    }
    const { text } = this.getLocaleData$(locale2);
    return text[key];
  }
  uncaughtGetTexture$(key, locale2, enableFallback = true) {
    if (!enableFallback || this.fallbackLocale$ === void 0) {
      return this.getRawTexture$(key, locale2 ?? this.getCurrentLocale());
    }
    const fallbackLocale = this.fallbackLocale$;
    return F3.retry(
      () => this.getRawTexture$(key, locale2 ?? this.getCurrentLocale()),
      () => this.getRawTexture$(key, fallbackLocale)
    );
  }
  getRawTexture$(key, locale2) {
    if (!this.hasTextureKey(key, locale2)) {
      throw new MissingKeyInLocaleError_default(key, locale2);
    }
    const { texture } = this.getLocaleData$(locale2);
    return texture[key];
  }
  getCurrentLocale() {
    return this.locale$ ?? "en";
  }
  getLocaleData$(locale2) {
    const correctLocale = locale2 ?? this.getCurrentLocale();
    if (!O7.hasOwn(this.data$, correctLocale)) {
      throw new LocaleNotFoundError_default(correctLocale);
    }
    return this.data$[correctLocale];
  }
  replaceVariables$(text, variables) {
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
    const localeBySDK = nullOrNotEmpty(localeStringBySDK?.trim().split(/[-_]/)[0]);
    const currentLocale = nullOrNotEmpty(this.getBrowserLanguage());
    if (player.isFirstSession()) {
      return localeBySDK ?? currentLocale ?? "en";
    }
    const playerLanguage = nullOrNotEmpty(player.getPlayerSetting("language"));
    return playerLanguage ?? localeBySDK ?? currentLocale ?? "en";
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
__name(_LanguagePlugin, "LanguagePlugin");
var LanguagePlugin = _LanguagePlugin;
var LanguagePlugin_default = LanguagePlugin;

// extensions/ludex/src/plugins/language/index.ts
var language_default = LanguagePlugin_default;

// extensions/ludex/src/plugins/leaderboards/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/leaderboards/LeaderboardPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/leaderboards/api/LeaderboardAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/leaderboards/constants/ResponseLeaderboard.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var DefaultResponseLeaderboard = {
  _id: "",
  name: "",
  createdBy: "",
  description: "",
  expireTime: 7 * 24 * 60 * 60 * 1e3,
  type: "app_leaderboard",
  timezone: "utc+0",
  createdAt: "2024-01-01T09:00:00.000Z",
  sortOrder: "desc",
  statistics: "max",
  resettable: "manually",
  resetScore: 0,
  numberOfLeaders: 15,
  amountPlayer: 15
};
var ResponseLeaderboard_default = DefaultResponseLeaderboard;

// extensions/ludex/src/plugins/leaderboards/api/LeaderboardAPI.ts
var {
  Configs: { OtherHost, Mockup, AppId: AppId2 },
  Utils: { Object: O8, String: S3, Valid: V11 }
} = Ludex;
var _LeaderboardAPI = class _LeaderboardAPI {
  mockAPI$;
  async initMockAPI$() {
    if (this.mockAPI$) return;
    const LeaderboardAPIMock = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
    default;
    if (typeof LeaderboardAPIMock !== "function") {
      throw new Error("Cannot load LeaderboardAPIMock");
    }
    this.mockAPI$ = new LeaderboardAPIMock();
  }
  async getLeadersAsync(id, url, payload) {
    const params = S3.params(payload);
    let result3;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI$();
      if ("playerIds" in payload) {
        result3 = await this.mockAPI$.getPlayers(id, payload);
      } else {
        result3 = await this.mockAPI$.getLeaders(id, payload);
      }
    } else {
      result3 = await get(`${url}?${params}`, {}, OtherHost);
    }
    if (!O8.hasOwn(result3, "data") || !Array.isArray(result3.data)) return [];
    return result3.data;
  }
  async getLeaderboardAsync(id) {
    let result3;
    const url = `leaderboards/${id}`;
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI$();
      result3 = await this.mockAPI$.getLeaderboardAsync(id);
    } else {
      result3 = await get(url, {}, OtherHost);
      if (O8.hasOwn(result3, "data") && typeof result3.data === "object") {
        result3 = result3.data;
      }
    }
    return result3;
  }
  async getLeaderboardsAsync(options) {
    let result3;
    const params = S3.params(options);
    const url = "leaderboards";
    if (Mockup.Leaderboards.Enabled) {
      await this.initMockAPI$();
      result3 = await this.mockAPI$.getLeaderboardsAsync(options);
    } else {
      result3 = await get(`${url}?${params}`, {}, OtherHost);
      if (O8.hasOwn(result3, "data") && Array.isArray(result3.data)) {
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
      await this.initMockAPI$();
      await this.mockAPI$.setScoreAsync(leaderboardId, playerId2, score2);
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
      await this.initMockAPI$();
      result3 = await this.mockAPI$.createLeaderboard(leaderboardPayload);
    } else {
      result3 = await post(url, leaderboardPayload, {}, OtherHost);
      if (O8.hasOwn(result3, "data") && V11.isObject(result3.data)) {
        result3 = result3.data;
      }
    }
    if (!O8.hasOwn(result3, "_id") || result3._id !== id) {
      throw new Error("Create leaderboard failed");
    }
    return id;
  }
};
__name(_LeaderboardAPI, "LeaderboardAPI");
var LeaderboardAPI = _LeaderboardAPI;
var LeaderboardAPI_default = LeaderboardAPI;

// extensions/ludex/src/plugins/leaderboards/constants/DefaultLeaderboard.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var initState5 = {
  leaderboards: {}
};
var state_default5 = initState5;

// extensions/ludex/src/plugins/leaderboards/LeaderboardPlugin.ts
var {
  Utils: { Array: A5, Valid: V12, Json: J3, Object: O9 },
  Configs: {
    Mockup: { Leaderboards: LeaderboardsMockupConfig }
  }
} = Ludex;
var _LeaderboardPlugin = class _LeaderboardPlugin extends Ludex.Plugins.BasePlugin {
  lbAPI$ = new LeaderboardAPI_default();
  configs$;
  init() {
    const { storage } = this.codex;
    storage.addStorage("leaderboard", state_default5);
    this.configs$ = {};
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
    this.configs$[name2] = { id: leaderboardId, name: name2, type, host, autoSortRank };
    const defaultData = J3.clone(DefaultLeaderboard_default);
    this.setLeaderboard$(name2, defaultData);
  }
  async requestLeaderboardsAsync(options) {
    try {
      const result3 = await this.lbAPI$.getLeaderboardsAsync(options);
      return result3;
    } catch (error) {
      console.warn("requestGlobalLeaderboardsAsync", error);
      return [];
    }
  }
  async requestLeaderboardAsync(name2, limit) {
    try {
      this.validateLeaderboard$(name2);
      this.clearLeaderboard(name2);
      this.setLeaderboard$(name2, { isRequesting: true });
      const { id, type, host } = this.configs$[name2];
      let leaders = [];
      if (type === "friends") {
        const { player } = this.codex;
        const playerId2 = player.getPlayerId();
        const playerIds = player.getConnectedPlayerIds(limit, 0);
        const paramsPlayerIds = [playerId2, ...playerIds];
        this.configs$[name2].playerIds = [...paramsPlayerIds];
        leaders = await this.lbAPI$.getLeadersAsync(id, host, {
          playerIds: paramsPlayerIds
        });
      } else {
        leaders = await this.lbAPI$.getLeadersAsync(id, host, {
          limit,
          offset: 0
        });
      }
      if (leaders.length === 0) return;
      await this.receiveLeaderboardAsync$(name2, leaders);
      this.setLeaderboard$(name2, { limit, offset: 0 });
    } finally {
      const res = await this.lbAPI$.getLeaderboardAsync(this.configs$[name2].id);
      const resettable = res ? res.resettable : "";
      const amountPlayer = res ? res.amountPlayer : 0;
      this.setLeaderboard$(name2, { isRequesting: false, resettable, amountPlayer });
    }
  }
  async loadMoreLeaderboardAsync(name2, limit) {
    const leaderboard = this.getLeaderboard(name2);
    if (!leaderboard) return;
    if (this.configs$[name2].type === "friends") {
      console.warn("Cannot load more leaderboard with type friend");
      return;
    }
    try {
      this.setLeaderboard$(name2, { isRequesting: true });
      const { id, host } = this.configs$[name2];
      const { offset: oldOffset, limit: oldLimit } = leaderboard;
      const newOffset = oldOffset + oldLimit;
      const leaders = await this.lbAPI$.getLeadersAsync(id, host, {
        limit,
        offset: newOffset
      });
      if (leaders.length === 0) return;
      this.receiveLeaderboardAsync$(name2, leaders);
      this.setLeaderboard$(name2, { limit, offset: newOffset });
    } finally {
      this.setLeaderboard$(name2, { isRequesting: false });
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
      this.validateLeaderboard$(name2);
      const { id } = this.configs$[name2];
      const host = `leaderboards/${id}/players`;
      const res = await this.lbAPI$.getLeadersAsync(id, host, { playerIds });
      if (res.length === 0) return [];
      return this.toLeaders$(res);
    } catch (error) {
      console.warn(error);
      return [];
    }
  }
  async getLeaderboardResponseAsync(id) {
    return this.lbAPI$.getLeaderboardAsync(id);
  }
  clearLeaderboard(name2) {
    try {
      this.validateLeaderboard$(name2);
      const defaultData = J3.clone(DefaultLeaderboard_default);
      this.setLeaderboard$(name2, null);
      this.setLeaderboard$(name2, defaultData);
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
    const { configs$: configs } = this;
    return O9.vals(configs).some((config) => config.id === leaderboardId);
  }
  getLeaderboardName(leaderboardId) {
    const { configs$: configs } = this;
    const config = A5.search(O9.vals(configs), (config2) => config2.id === leaderboardId);
    if (!config) return null;
    return config.name;
  }
  async setLeaderboardScoreAsync(name2, playerId2, score2) {
    try {
      if (GameSDK.extra.isGuest && !LeaderboardsMockupConfig.Enabled) return;
      this.validateLeaderboard$(name2);
      const { id } = this.configs$[name2];
      const previousScore = await this.getLastScoreOnLeaderboard$(name2, playerId2);
      if (previousScore && score2 <= previousScore) return;
      await this.lbAPI$.setLeaderboardScoreAsync({
        leaderboardId: id,
        playerId: playerId2,
        score: score2
      });
    } catch (error) {
      console.warn(error);
    }
  }
  async getLastScoreOnLeaderboard$(name2, playerId2) {
    const playerLeaders = await this.getLeadersByPlayerIdsAsync(name2, [playerId2]);
    if (playerLeaders.length === 0) return null;
    return playerLeaders[0].score;
  }
  async createLeaderboardAsync(payload) {
    return this.lbAPI$.createLeaderboardAsync(payload);
  }
  validateLeaderboard$(name2) {
    const leaderboard = this.getLeaderboard(name2);
    if (!V12.isObject(leaderboard)) {
      throw new Error(`Leaderboard with name ${name2} not found`);
    }
  }
  setLeaderboard$(name2, leaderboard) {
    if (!leaderboard) return;
    const { storage } = this.codex;
    storage.setStorageData("leaderboard", "leaderboards", { [name2]: leaderboard });
  }
  async receiveLeaderboardAsync$(name2, responses) {
    this.validateLeaderboard$(name2);
    const leaders = await this.toLeaders$(responses);
    const cleanLeaders = leaders.filter((leader) => leader.name && leader.photo);
    const { leaders: currentLeaders = {} } = this.getLeaderboard(name2) ?? {};
    const uniqueLeaders = cleanLeaders.filter((leader) => {
      if (currentLeaders[leader.playerId]) {
        currentLeaders[leader.playerId] = leader;
        return false;
      }
      return true;
    });
    const rawLeaders = O9.vals(currentLeaders);
    if (uniqueLeaders.length > 0) {
      rawLeaders.unshift(...uniqueLeaders);
    }
    let sortedLeaders = rawLeaders.sort((a, b) => b.score - a.score);
    if (this.configs$[name2].autoSortRank) {
      sortedLeaders = sortedLeaders.map((leader, index) => O9.merge(leader, { rank: index + 1 }));
    }
    const keyedLeaders = O9.keyBy(sortedLeaders, "playerId");
    this.setLeaderboard$(name2, { leaders: keyedLeaders });
  }
  async toLeaders$(leaders) {
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
        return O9.merge(leader, { name: name2, photo: "default" });
      }
      return O9.merge(leader, { name: profile2.name, photo: profile2.photo });
    });
    const leadersWithScore = leadersWithProfile.map((leader) => __spreadProps(__spreadValues({}, leader),
    {
      score: parseInt(leader.score, 10)
    }));
    return leadersWithScore;
  }
};
__name(_LeaderboardPlugin, "LeaderboardPlugin");
var LeaderboardPlugin = _LeaderboardPlugin;
var LeaderboardPlugin_default = LeaderboardPlugin;

// extensions/ludex/src/plugins/leaderboards/index.ts
var leaderboards_default = LeaderboardPlugin_default;

// extensions/ludex/src/plugins/match/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/MatchPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/api/APIHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/api/MatchAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/api/BaseAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BaseAPI = class _BaseAPI {
  APIHost$;
  setAPIHost(host) {
    this.APIHost$ = host;
  }
  getAPIHost() {
    return this.APIHost$;
  }
};
__name(_BaseAPI, "BaseAPI");
var BaseAPI = _BaseAPI;
var BaseAPI_default = BaseAPI;

// extensions/ludex/src/plugins/match/api/MatchAPI.ts
var { Utils: Utils2 } = Ludex;
var _MatchAPI = class _MatchAPI extends BaseAPI_default {
  // Single mode
  async createSingleMatchAsync(payload) {
    const url = "single-matches";
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async getSingleMatchDetailAsync() {
    const url = "single-matches/active";
    const result3 = await get(url, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async updateSingleMatchMoveAsync(matchId, payload) {
    const url = `single-matches/${matchId}/move`;
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async finishSingleMatchAsync(matchId) {
    const url = `single-matches/${matchId}/finish`;
    const result3 = await post(url, {}, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  // Context mode
  async createMatchAsync(payload) {
    const url = "matches";
    const result3 = await post(url, payload, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async joinMatchAsync(matchId) {
    const url = `matches/${matchId}/join`;
    const result3 = await post(url, {}, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async getMatchDetailByIdAsync(matchId) {
    const url = `matches/${matchId}`;
    const result3 = await get(url, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  async finishMatchAsync(payload) {
    const { matchId = "", score: score2 = 0, level: level2 = 0, extraData = {} } = payload;
    const url = `matches/${matchId}/finish`;
    const result3 = await post(url, { matchId, score: score2, level: level2, extraData }, {}, this.getAPIHost());
    return this.returnValidMatchData$(result3);
  }
  returnValidMatchData$(result3) {
    if (!Utils2.Valid.isObject(result3)) return {};
    if (!Utils2.Object.hasOwn(result3, "data")) return {};
    return result3.data ?? {};
  }
};
__name(_MatchAPI, "MatchAPI");
var MatchAPI = _MatchAPI;
var MatchAPI_default = MatchAPI;

// extensions/ludex/src/plugins/match/api/APIHandler.ts
var _APIHandler = class _APIHandler {
  matchAPI$;
  constructor(apiConfig) {
    this.createAPI$();
    this.setAPIConfig(apiConfig);
  }
  createAPI$() {
    this.matchAPI$ = new MatchAPI_default();
  }
  setAPIConfig(apiConfig) {
    if (apiConfig.matchAPIHost) {
      this.matchAPI$.setAPIHost(apiConfig.matchAPIHost);
    }
  }
  setMatchAPIInstance(matchAPI) {
    this.matchAPI$ = matchAPI;
  }
  getMatchAPI() {
    return this.matchAPI$;
  }
};
__name(_APIHandler, "APIHandler");
var APIHandler = _APIHandler;
var APIHandler_default = APIHandler;

// extensions/ludex/src/plugins/match/concretes/BaseConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BaseConcrete = class _BaseConcrete {
  codex;
  match;
  constructor(codex2, match) {
    this.codex = codex2;
    this.match = match;
  }
  startLog$(payload) {
    if (this.match.useCPUProfile) {
      console.profile(this.constructor.name);
    }
    console.group(`\u{1F680} ${this.constructor.name}`);
    if (payload) {
      console.log("\u{1F4E6} ? Payload:", payload);
    }
  }
  endLog$() {
    console.groupEnd();
    if (this.match.useCPUProfile) {
      console.profileEnd();
    }
  }
  async processAsync(_payload) {
    throw new Error("Not implemented");
  }
};
__name(_BaseConcrete, "BaseConcrete");
var BaseConcrete = _BaseConcrete;
var BaseConcrete_default = BaseConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/AwaitChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/NothingHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/BaseHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Object: O10, Valid: V13, Json: J4 } = Ludex.Utils;
var _BaseHandler = class _BaseHandler {
  codex$;
  match$;
  nextHandler$;
  stateData$;
  constructor(concrete) {
    this.codex$ = concrete.codex;
    this.match$ = concrete.match;
    this.nextHandler$ = null;
    this.stateData$ = {
      Before: null,
      After: null
    };
  }
  setNext(handler) {
    this.nextHandler$ = handler;
    return handler;
  }
  async processAsync(matchState) {
    console.groupCollapsed(`\u27A1\uFE0F ${this.constructor.name}`);
    this.logData$("Before", matchState);
  }
  async nextAsync$(matchState) {
    this.logData$("After", matchState);
    this.logDiff$();
    console.groupEnd();
    if (!this.nextHandler$) return;
    await this.nextHandler$.processAsync(matchState);
  }
  logData$(name2, matchState) {
    if (!V13.isDebugger()) return;
    console.groupCollapsed(`\u{1F4E6} MatchState: ${name2}`);
    this.stateData$[name2] = J4.clone(matchState);
    const _a = matchState, { profiles, customData } = _a, base = __objRest(_a, ["profiles", "customD\
ata"]);
    console.info("\u{1F4BE} Base");
    console.table(O10.clone(base));
    console.info("\u{1F4BE} Profile");
    console.table(O10.clone(profiles));
    console.info("\u{1F4BE} Custom");
    console.table(O10.clone(customData));
    console.groupEnd();
  }
  logDiff$() {
    const { After, Before } = this.stateData$;
    if (!After || !Before) return;
    const diff = O10.diff(Before, After);
    if (!V13.isEmpty(diff)) {
      const _a = diff, { profiles = {}, customData = {} } = _a, base = __objRest(_a, ["profiles", "c\
ustomData"]);
      console.group("\u{1F4E6} MatchState: Diff");
      if (!V13.isEmpty(base)) {
        console.info("\u{1F4BE} Base");
        console.table(O10.clone(base));
      }
      if (!V13.isEmpty(profiles)) {
        console.info("\u{1F4BE} Profile");
        console.table(O10.clone(profiles));
      }
      if (!V13.isEmpty(customData)) {
        console.info("\u{1F4BE} Custom");
        console.table(O10.clone(customData));
      }
      console.groupEnd();
    }
    this.stateData$.After = null;
    this.stateData$.Before = null;
  }
};
__name(_BaseHandler, "BaseHandler");
var BaseHandler = _BaseHandler;
var BaseHandler_default = BaseHandler;

// extensions/ludex/src/plugins/match/handlers/NothingHandler.ts
var _NothingHandler = class _NothingHandler extends BaseHandler_default {
  async processAsync(matchState) {
    await this.nextAsync$(matchState);
  }
  async nextAsync$(matchState) {
    if (!this.nextHandler$) return;
    await this.nextHandler$.processAsync(matchState);
  }
};
__name(_NothingHandler, "NothingHandler");
var NothingHandler = _NothingHandler;
var NothingHandler_default = NothingHandler;

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchStartHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/LevelNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _LevelNotDefined = class _LevelNotDefined extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "LevelNotDefined";
    this.message = message ?? "Level is not defined";
  }
};
__name(_LevelNotDefined, "LevelNotDefined");
var LevelNotDefined = _LevelNotDefined;
var LevelNotDefined_default = LevelNotDefined;

// extensions/ludex/src/plugins/match/exceptions/MatchModeNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchModeNotDefined = class _MatchModeNotDefined extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchModeNotDefined";
    this.message = message ?? "Match id is not defined";
  }
};
__name(_MatchModeNotDefined, "MatchModeNotDefined");
var MatchModeNotDefined = _MatchModeNotDefined;
var MatchModeNotDefined_default = MatchModeNotDefined;

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchStartHandler.ts
var {
  Plugins: {
    Analytics: { Events: Events4 } = {}
  },
  Utils: { String: S4, Valid: V14 }
} = Ludex;
var _LogMatchStartHandler = class _LogMatchStartHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, customData } = matchState;
    const { level: level2 } = customData;
    this.validateMode$(mode);
    this.validateLevel$(level2);
    const { analytics } = this.codex$;
    if (Events4) {
      analytics.event(Events4.MATCH_START, {
        level: level2,
        game_mode: S4.toUpperCamelCase(mode),
        level_name: this.getLevelName$(level2)
      });
    }
    await this.nextAsync$(matchState);
  }
  validateMode$(mode) {
    if (!V14.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
  validateLevel$(level2) {
    if (!V14.isNumber(level2)) {
      throw new LevelNotDefined_default();
    }
  }
  getLevelName$(level2) {
    return `Level ${S4.padStart(level2.toString(), 5, "0")}`;
  }
};
__name(_LogMatchStartHandler, "LogMatchStartHandler");
var LogMatchStartHandler = _LogMatchStartHandler;
var LogMatchStartHandler_default = LogMatchStartHandler;

// extensions/ludex/src/plugins/match/handlers/context/ContextGameModeHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/constants/MatchStatus.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var MatchStatus = {
  OPEN: "open",
  ACTIVE: "active",
  FINISHED: "finished"
};
var MatchStatus_default = MatchStatus;

// extensions/ludex/src/plugins/match/handlers/context/ContextGameModeHandler.ts
var _ContextGameModeHandler = class _ContextGameModeHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, status } = matchState;
    let gameMode = mode ?? ContextModes_default.SINGLE;
    if (status === MatchStatus_default.FINISHED) {
      gameMode = ContextModes_default.SINGLE;
    }
    this.contextGameModeDetected$(gameMode);
    await this.nextAsync$(matchState);
  }
  // TODO: implement this
  contextGameModeDetected$(gameMode) {
    const { storage } = this.codex$;
    storage.setStorageData("context", "contextGameMode", gameMode);
  }
};
__name(_ContextGameModeHandler, "ContextGameModeHandler");
var ContextGameModeHandler = _ContextGameModeHandler;
var ContextGameModeHandler_default = ContextGameModeHandler;

// extensions/ludex/src/plugins/match/handlers/match/AwaitMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/GetMatchDetailFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _GetMatchDetailFailed = class _GetMatchDetailFailed extends Error {
  constructor(message) {
    super(message);
    this.name = "GetMatchDetailFailed";
    this.message = message ?? "Get match detail failed";
  }
};
__name(_GetMatchDetailFailed, "GetMatchDetailFailed");
var GetMatchDetailFailed = _GetMatchDetailFailed;
var GetMatchDetailFailed_default = GetMatchDetailFailed;

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotActive.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchAreNotActive = class _MatchAreNotActive extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotActive";
    this.message = message ?? "Match are not active";
  }
};
__name(_MatchAreNotActive, "MatchAreNotActive");
var MatchAreNotActive = _MatchAreNotActive;
var MatchAreNotActive_default = MatchAreNotActive;

// extensions/ludex/src/plugins/match/exceptions/MatchIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchIdNotValid = class _MatchIdNotValid extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchIdNotValid";
    this.message = message ?? "Match id is not valid";
  }
};
__name(_MatchIdNotValid, "MatchIdNotValid");
var MatchIdNotValid = _MatchIdNotValid;
var MatchIdNotValid_default = MatchIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/OpponentHasFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _OpponentHasFinishedMatch = class _OpponentHasFinishedMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "OpponentHasFinishedMatch";
    this.message = message || "Opponent has finished match";
  }
};
__name(_OpponentHasFinishedMatch, "OpponentHasFinishedMatch");
var OpponentHasFinishedMatch = _OpponentHasFinishedMatch;
var OpponentHasFinishedMatch_default = OpponentHasFinishedMatch;

// extensions/ludex/src/plugins/match/exceptions/OpponentIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _OpponentIdNotValid = class _OpponentIdNotValid extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "OpponentIdNotValid";
    this.message = message ?? "Opponent id is not valid";
  }
};
__name(_OpponentIdNotValid, "OpponentIdNotValid");
var OpponentIdNotValid = _OpponentIdNotValid;
var OpponentIdNotValid_default = OpponentIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotCurrentInMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _PlayerNotCurrentInMatch = class _PlayerNotCurrentInMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotCurrentInMatch";
    this.message = message ?? "The player is not currently in this match";
  }
};
__name(_PlayerNotCurrentInMatch, "PlayerNotCurrentInMatch");
var PlayerNotCurrentInMatch = _PlayerNotCurrentInMatch;
var PlayerNotCurrentInMatch_default = PlayerNotCurrentInMatch;

// extensions/ludex/src/plugins/match/exceptions/PlayerNotFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _PlayerNotFinishedMatch = class _PlayerNotFinishedMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotFinishedMatch";
    this.message = message || "Player not finished match";
  }
};
__name(_PlayerNotFinishedMatch, "PlayerNotFinishedMatch");
var PlayerNotFinishedMatch = _PlayerNotFinishedMatch;
var PlayerNotFinishedMatch_default = PlayerNotFinishedMatch;

// extensions/ludex/src/plugins/match/handlers/match/AwaitMatchHandler.ts
var {
  Dtos: Dtos2,
  Utils: { Object: O11 }
} = Ludex;
var _AwaitMatchHandler = class _AwaitMatchHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData$(matchState);
    const respMatchData = await this.getMatchAsync$(matchState);
    const respMatchDataValidated = new Dtos2.Match.Data(respMatchData).toObject();
    this.validateAwaitMatchData$(matchState, respMatchDataValidated);
    this.updateMatchData$(matchState, respMatchDataValidated);
    this.validateMatchStatus$(matchState);
    this.validatePlayerTurn$(matchState);
    this.validateOpponentTurn$(matchState);
    await this.nextAsync$(matchState);
  }
  validateMatchData$(matchState) {
    const { id } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
  }
  validateMatchStatus$(matchState) {
    const { status } = matchState;
    if (status !== MatchStatus_default.ACTIVE) {
      throw new MatchAreNotActive_default();
    }
  }
  validateAwaitMatchData$(matchState, matchData) {
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
  validatePlayerTurn$(matchState) {
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
  validateOpponentTurn$(matchState) {
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
  async getMatchAsync$(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData$(matchState, matchData) {
    this.updateMatchGeneral$(matchState, matchData);
    this.updatePlayerIds$(matchState, matchData);
    this.initializeProfiles$(matchState);
    this.updateScoresAndStatus$(matchState, matchData);
  }
  updateMatchGeneral$(matchState, matchData) {
    const { status, extraData } = matchData;
    matchState.status = status;
    matchState.customData = O11.merge(matchState.customData, extraData);
  }
  updatePlayerIds$(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.customData.playerId = isPlayerWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
  }
  initializeProfiles$(matchState) {
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
  updateScoresAndStatus$(matchState, matchData) {
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
__name(_AwaitMatchHandler, "AwaitMatchHandler");
var AwaitMatchHandler = _AwaitMatchHandler;
var AwaitMatchHandler_default = AwaitMatchHandler;

// extensions/ludex/src/plugins/match/handlers/match/PrepareMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/data/DefaultCustomData.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
var _PrepareMatchHandler = class _PrepareMatchHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.initializeMatch$(matchState);
    await this.nextAsync$(matchState);
  }
  initializeMatch$(matchState) {
    const { id, mode, customData } = this.payload$;
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
__name(_PrepareMatchHandler, "PrepareMatchHandler");
var PrepareMatchHandler = _PrepareMatchHandler;
var PrepareMatchHandler_default = PrepareMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendAwaitingMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/constants/ContextTypes.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var ContextTypes = ContextTypes_default;
var ContextTypes_default2 = ContextTypes;

// extensions/ludex/src/exceptions/UnavailableFeature.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _UnavailableFeature = class _UnavailableFeature extends Error {
  constructor(message) {
    super(message);
    this.name = "UnavailableFeature";
    this.message = `Unavailable feature: ${message}`;
  }
};
__name(_UnavailableFeature, "UnavailableFeature");
var UnavailableFeature = _UnavailableFeature;
var UnavailableFeature_default = UnavailableFeature;

// extensions/ludex/src/plugins/match/exceptions/ContextIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ContextIdNotValid = class _ContextIdNotValid extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "ContextIdNotValid";
    this.message = message ?? "Context id is not valid";
  }
};
__name(_ContextIdNotValid, "ContextIdNotValid");
var ContextIdNotValid = _ContextIdNotValid;
var ContextIdNotValid_default = ContextIdNotValid;

// extensions/ludex/src/plugins/match/exceptions/ProfileNotFound.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ProfileNotFound = class _ProfileNotFound extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "ProfileNotFound";
    this.message = message ?? "Profile not found";
  }
};
__name(_ProfileNotFound, "ProfileNotFound");
var ProfileNotFound = _ProfileNotFound;
var ProfileNotFound_default = ProfileNotFound;

// extensions/ludex/src/plugins/match/handlers/message/SendAwaitingMessageHandler.ts
var _SendAwaitingMessageHandler = class _SendAwaitingMessageHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const imageResult = await this.createWideframesAwaitingAsync$(matchState);
    if (imageResult) {
      this.sendMessageAsync$(matchState, imageResult);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesAwaitingAsync$(matchState) {
    try {
      const { frameCapture } = this.codex$;
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
      return await frameCapture.renderAsync("result-challenge", {
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
  async sendMessageAsync$(matchState, wideframes) {
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
__name(_SendAwaitingMessageHandler, "SendAwaitingMessageHandler");
var SendAwaitingMessageHandler = _SendAwaitingMessageHandler;
var SendAwaitingMessageHandler_default = SendAwaitingMessageHandler;

// extensions/ludex/src/plugins/match/handlers/profile/GetMatchProfilesHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Dtos: Dtos3 } = Ludex;
var _GetMatchProfilesHandler = class _GetMatchProfilesHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const { customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    let profileId = playerId2;
    const playerProfile = await this.getProfile$(profileId);
    if (!playerProfile) {
      throw new ProfileNotFound_default();
    }
    this.updateMatchProfile$(matchState, profileId, playerProfile);
    profileId = opponentId;
    if (profileId !== SampleOpponent_default.playerId) {
      const opponentProfile = await this.getProfile$(profileId);
      if (!opponentProfile) {
        throw new ProfileNotFound_default();
      }
      this.updateMatchProfile$(matchState, profileId, opponentProfile);
    } else {
      this.updateMatchProfile$(matchState, profileId);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
    const { customData } = matchState;
    const { playerId: playerId2, opponentId } = customData;
    if (!playerId2 || typeof playerId2 !== "string") {
      throw new PlayerIdNotValid_default();
    }
    if (!opponentId || typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
  }
  async getProfile$(profileId) {
    const { profile } = this.codex$;
    await profile.requestProfiles([profileId]);
    const profiles = profile.getProfiles();
    return profiles[profileId];
  }
  updateMatchProfile$(matchState, profileId, data) {
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
__name(_GetMatchProfilesHandler, "GetMatchProfilesHandler");
var GetMatchProfilesHandler = _GetMatchProfilesHandler;
var GetMatchProfilesHandler_default = GetMatchProfilesHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/AwaitChallengeMatchConcrete.ts
var _AwaitChallengeMatchConcrete = class _AwaitChallengeMatchConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_AwaitChallengeMatchConcrete, "AwaitChallengeMatchConcrete");
var AwaitChallengeMatchConcrete = _AwaitChallengeMatchConcrete;
var AwaitChallengeMatchConcrete_default = AwaitChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ChallengeFriendConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/CreateContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/CreateContextFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _CreateContextFailed = class _CreateContextFailed extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "CreateContextFailed";
    this.message = message ?? "Create context failed";
  }
};
__name(_CreateContextFailed, "CreateContextFailed");
var CreateContextFailed = _CreateContextFailed;
var CreateContextFailed_default = CreateContextFailed;

// extensions/ludex/src/plugins/match/handlers/context/CreateContextHandler.ts
var { Valid: V15, Object: O12 } = Ludex.Utils;
var _CreateContextHandler = class _CreateContextHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { opponentId } = this.payload$;
    const contextId2 = await this.createAsync$(opponentId);
    matchState.customData.contextId = contextId2;
    await this.nextAsync$(matchState);
  }
  async createAsync$(opponentId) {
    try {
      await GameSDK.context.createAsync(opponentId);
    } catch (error) {
      this.validateError$(error);
    }
    const contextId2 = GameSDK.context.getID();
    if (!V15.isString(contextId2)) {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
  validateError$(error) {
    if (!O12.hasOwn(error, "code")) throw error;
    if (error.code === "SAME_CONTEXT") return;
    if (error.code === "INVALID_PARAM") {
      if (!this.isNotConnectedPlayerError$(error)) {
        throw error;
      }
      return;
    }
    throw error;
  }
  validateErrorMessage$(error) {
    if (!O12.hasOwn(error, "message")) throw error;
    if (!V15.isString(error.message)) throw error;
  }
  isNotConnectedPlayerError$(error) {
    this.validateErrorMessage$(error);
    return error.message.indexOf("is not a connected player of the current player") > -1;
  }
};
__name(_CreateContextHandler, "CreateContextHandler");
var CreateContextHandler = _CreateContextHandler;
var CreateContextHandler_default = CreateContextHandler;

// extensions/ludex/src/plugins/match/handlers/match/CreateMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotOpen.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchAreNotOpen = class _MatchAreNotOpen extends ACreateMatchFailed_default {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotOpen";
    this.message = message ?? "Match are not open";
  }
};
__name(_MatchAreNotOpen, "MatchAreNotOpen");
var MatchAreNotOpen = _MatchAreNotOpen;
var MatchAreNotOpen_default = MatchAreNotOpen;

// extensions/ludex/src/plugins/match/handlers/match/CreateMatchHandler.ts
var {
  Dtos: Dtos4,
  Utils: { Object: O13 }
} = Ludex;
var _CreateMatchHandler = class _CreateMatchHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const respMatchData = await this.createMatchAsync$(matchState);
    const respMatchDataValidated = new Dtos4.Match.Data(respMatchData).toObject();
    this.updateMatchState$(matchState, respMatchDataValidated);
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
    const { status, customData } = matchState;
    const { opponentId } = customData;
    if (typeof opponentId !== "string") {
      throw new OpponentIdNotValid_default();
    }
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  async createMatchAsync$(matchState) {
    const { opponentId } = matchState.customData;
    const { extraData } = this.payload$;
    if (!opponentId) return {};
    const payload = {
      opponentPlayerId: opponentId,
      extraData
    };
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.createMatchAsync(payload);
  }
  updateMatchState$(matchState, matchData) {
    this.updateMatchGeneral$(matchState, matchData);
    this.updatePlayerIds$(matchState, matchData);
    this.initializeProfiles$(matchState);
    this.updateFinishStatus$(matchState, matchData);
  }
  updateMatchGeneral$(matchState, matchData) {
    const { _id, extraData } = matchData;
    matchState.id = _id || null;
    matchState.customData = O13.merge(matchState.customData, extraData);
  }
  updatePlayerIds$(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isOpponentWhite = whitePlayerId === customData.opponentId;
    const playerId2 = isOpponentWhite ? blackPlayerId : whitePlayerId;
    const opponentId = isOpponentWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles$(matchState) {
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
  updateFinishStatus$(matchState, matchData) {
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
__name(_CreateMatchHandler, "CreateMatchHandler");
var CreateMatchHandler = _CreateMatchHandler;
var CreateMatchHandler_default = CreateMatchHandler;

// extensions/ludex/src/plugins/match/handlers/match/StartMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _StartMatchHandler = class _StartMatchHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (matchState.status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
    this.startMatch$(matchState);
    await this.nextAsync$(matchState);
  }
  startMatch$(matchState) {
    matchState.status = MatchStatus_default.ACTIVE;
    matchState.startAt = Date.now();
  }
};
__name(_StartMatchHandler, "StartMatchHandler");
var StartMatchHandler = _StartMatchHandler;
var StartMatchHandler_default = StartMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendChallengeMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SendChallengeMessageHandler = class _SendChallengeMessageHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const imageResult = await this.createWideframesChallengeAsync$(matchState);
    if (imageResult) {
      this.sendMessageAsync$(matchState, imageResult);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesChallengeAsync$(matchState) {
    try {
      const { frameCapture } = this.codex$;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0 } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0 } = opponentProfile;
      return await frameCapture.renderAsync("result-challenge", {
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
  async sendMessageAsync$(matchState, wideframes) {
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
__name(_SendChallengeMessageHandler, "SendChallengeMessageHandler");
var SendChallengeMessageHandler = _SendChallengeMessageHandler;
var SendChallengeMessageHandler_default = SendChallengeMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ChallengeFriendConcrete.ts
var _ChallengeFriendConcrete = class _ChallengeFriendConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_ChallengeFriendConcrete, "ChallengeFriendConcrete");
var ChallengeFriendConcrete = _ChallengeFriendConcrete;
var ChallengeFriendConcrete_default = ChallengeFriendConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ContinueChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/SwitchContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/ContextNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ContextNotValid = class _ContextNotValid extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextNotValid";
    this.message = message ?? "Context is not valid";
  }
};
__name(_ContextNotValid, "ContextNotValid");
var ContextNotValid = _ContextNotValid;
var ContextNotValid_default = ContextNotValid;

// extensions/ludex/src/plugins/match/exceptions/SameContext.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SameContext = class _SameContext extends Error {
  constructor(message) {
    super(message);
    this.name = "SameContext";
    this.message = message ?? "Same context";
  }
};
__name(_SameContext, "SameContext");
var SameContext = _SameContext;
var SameContext_default = SameContext;

// extensions/ludex/src/plugins/match/handlers/context/SwitchContextHandler.ts
var { Utils: Utils3 } = Ludex;
var _SwitchContextHandler = class _SwitchContextHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { contextId: contextId2 } = this.payload$;
    await this.switchAsync$(contextId2);
    matchState.customData.contextId = contextId2;
    await this.nextAsync$(matchState);
  }
  checkSameContext$(contextId2) {
    const isSoloContext = contextId2 === "SOLO";
    const currentContextId = GameSDK.context.getID();
    if (currentContextId === contextId2) throw new SameContext_default();
    if (isSoloContext && currentContextId === null) throw new SameContext_default();
  }
  checkValidContext$(contextId2) {
    const currentContextId = GameSDK.context.getID();
    const isSoloContext = contextId2 === "SOLO";
    const isExistContextId = currentContextId !== null || currentContextId !== "";
    if (isSoloContext && isExistContextId) throw new ContextNotValid_default();
  }
  async switchAsync$(contextId2) {
    const isSoloContext = contextId2 === "SOLO";
    try {
      this.checkSameContext$(contextId2);
      this.checkValidContext$(contextId2);
      await GameSDK.context.switchAsync(contextId2, isSoloContext);
    } catch (error) {
      if (error instanceof SameContext_default) return;
      if (error instanceof ContextNotValid_default) return;
      if (!Utils3.Object.hasOwn(error, "code")) throw error;
      const isAndroid = Utils3.Device.isAndroid();
      if (isAndroid && isSoloContext && error.code === "INVALID_PARAM") return;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
  }
};
__name(_SwitchContextHandler, "SwitchContextHandler");
var SwitchContextHandler = _SwitchContextHandler;
var SwitchContextHandler_default = SwitchContextHandler;

// extensions/ludex/src/plugins/match/handlers/match/ContinueMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Dtos: Dtos5,
  Utils: { Object: O14 }
} = Ludex;
var _ContinueMatchHandler = class _ContinueMatchHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData$(matchState);
    const respMatchData = await this.getMatchAsync$(matchState);
    const respMatchDataValidated = new Dtos5.Match.Data(respMatchData).toObject();
    this.validateContinueMatchData$(matchState, respMatchDataValidated);
    this.updateMatchData$(matchState, respMatchDataValidated);
    this.validatePlayerTurn$(matchState);
    await this.nextAsync$(matchState);
  }
  validateMatchData$(matchState) {
    const { id, status } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  validateContinueMatchData$(matchState, matchData) {
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
  validatePlayerTurn$(matchState) {
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
  async getMatchAsync$(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData$(matchState, matchData) {
    this.updateMatchGeneral$(matchState, matchData);
    this.updatePlayerIds$(matchState, matchData);
    this.initializeProfiles$(matchState);
    this.updateScoresAndStatus$(matchState, matchData);
  }
  updateMatchGeneral$(matchState, matchData) {
    const { extraData } = matchData;
    matchState.customData = O14.merge(matchState.customData, extraData);
  }
  updatePlayerIds$(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const isPlayerWhite = whitePlayerId === matchState.customData.playerId;
    matchState.customData.playerId = isPlayerWhite ? whitePlayerId : blackPlayerId;
    matchState.customData.opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
  }
  initializeProfiles$(matchState) {
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
  updateScoresAndStatus$(matchState, matchData) {
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
__name(_ContinueMatchHandler, "ContinueMatchHandler");
var ContinueMatchHandler = _ContinueMatchHandler;
var ContinueMatchHandler_default = ContinueMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendUpdateMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SendUpdateMessageHandler = class _SendUpdateMessageHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (this.payload$.ignore) {
      await this.nextAsync$(matchState);
      return;
    }
    this.validateData$(matchState);
    const imageResult = await this.createWideframesCurrentScoreAsync$(matchState);
    if (imageResult) {
      this.sendMessageAsync$(matchState, imageResult);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesCurrentScoreAsync$(matchState) {
    try {
      const { player, frameCapture } = this.codex$;
      const { playerId: playerId2, photo: playerPhoto } = player.getPlayer();
      const { opponentId } = matchState.customData;
      if (opponentId === null || opponentId === void 0) return null;
      const opponentProfile = matchState.profiles[opponentId];
      if (!opponentProfile) return null;
      const opponentPhoto = opponentProfile.photo;
      return await frameCapture.renderAsync("update-challenge", {
        playerId: playerId2,
        playerPhoto,
        opponentId,
        opponentPhoto
      });
    } catch (error) {
      console.warn("createWideframesCurrentScoreAsync", error);
      return null;
    }
  }
  async sendMessageAsync$(matchState, wideframes) {
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
__name(_SendUpdateMessageHandler, "SendUpdateMessageHandler");
var SendUpdateMessageHandler = _SendUpdateMessageHandler;
var SendUpdateMessageHandler_default = SendUpdateMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ContinueChallengeMatchConcrete.ts
var _ContinueChallengeMatchConcrete = class _ContinueChallengeMatchConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_ContinueChallengeMatchConcrete, "ContinueChallengeMatchConcrete");
var ContinueChallengeMatchConcrete = _ContinueChallengeMatchConcrete;
var ContinueChallengeMatchConcrete_default = ContinueChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/FinishChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/analytic/LogMatchFinishedHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Plugins: {
    Analytics: { Events: Events5 } = {}
  },
  Utils: { String: S5, Valid: V16 }
} = Ludex;
var _LogMatchFinishedHandler = class _LogMatchFinishedHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { customData, mode, startAt, finishAt } = matchState;
    const { level: level2 } = customData;
    this.validateMode$(mode);
    this.validateLevel$(level2);
    const seconds = Math.floor((finishAt - startAt) / 1e3);
    const { analytics } = this.codex$;
    if (Events5) {
      analytics.event(Events5.MATCH_END, {
        level: level2,
        game_mode: S5.toUpperCamelCase(mode),
        level_name: this.getLevelName$(level2),
        time_played: seconds
      });
    }
    await this.nextAsync$(matchState);
  }
  validateMode$(mode) {
    if (!V16.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
  validateLevel$(level2) {
    if (!V16.isNumber(level2)) {
      throw new LevelNotDefined_default();
    }
  }
  getLevelName$(level2) {
    return `Level ${S5.padStart(level2.toString(), 5, "0")}`;
  }
};
__name(_LogMatchFinishedHandler, "LogMatchFinishedHandler");
var LogMatchFinishedHandler = _LogMatchFinishedHandler;
var LogMatchFinishedHandler_default = LogMatchFinishedHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostGlobalLeaderboardsScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/LeaderboardNotExist.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _LeaderboardNotExist = class _LeaderboardNotExist extends Error {
  constructor(message) {
    super(message);
    this.name = "LeaderboardNotExist";
    this.message = message ?? "Leaderboard not exist in game";
  }
};
__name(_LeaderboardNotExist, "LeaderboardNotExist");
var LeaderboardNotExist = _LeaderboardNotExist;
var LeaderboardNotExist_default = LeaderboardNotExist;

// extensions/ludex/src/plugins/match/exceptions/ScoreNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ScoreNotValid = class _ScoreNotValid extends Error {
  constructor(message) {
    super(message);
    this.name = "ScoreNotValid";
    this.message = message ?? "Score is not valid";
  }
};
__name(_ScoreNotValid, "ScoreNotValid");
var ScoreNotValid = _ScoreNotValid;
var ScoreNotValid_default = ScoreNotValid;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostGlobalLeaderboardsScoreHandler.ts
var {
  Utils: { Valid: V17 },
  Configs: {
    Leaderboards: { LeaderboardList }
  }
} = Ludex;
var _PostGlobalLeaderboardsScoreHandler = class _PostGlobalLeaderboardsScoreHandler extends BaseHandler_default {
  payload$;
  skipPostScore$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = { score: 0, playerId: "" };
    this.skipPostScore$ = !!payload?.ignore;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    if (this.skipPostScore$) {
      await this.nextAsync$(matchState);
      return;
    }
    this.setupSetScorePayload$(matchState);
    if ("submitGameResultsAsync" in GameSDK.extra) {
      await GameSDK.extra.submitGameResultsAsync(this.payload$.score);
    }
    for (const LeaderboardConfig of LeaderboardList) {
      const { Id, Mode } = LeaderboardConfig;
      if (!matchState.mode || !this.isValidMode$(Mode, matchState.mode)) continue;
      this.setLeaderboardScoreAsync$(__spreadValues({
        leaderboardId: Id
      }, this.payload$));
    }
    await this.nextAsync$(matchState);
  }
  isValidMode$(leaderboardMode, matchMode) {
    return leaderboardMode === matchMode;
  }
  async setupSetScorePayload$(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { score: score2 } = profiles[playerId2];
    if (!V17.isNumber(score2)) {
      throw new ScoreNotValid_default();
    }
    this.payload$ = {
      score: score2,
      playerId: playerId2
    };
  }
  async setLeaderboardScoreAsync$(payload) {
    try {
      const { playerId: playerId2, score: score2, leaderboardId } = payload;
      const name2 = this.codex$.leaderboard.getLeaderboardName(leaderboardId);
      if (!name2) {
        throw new LeaderboardNotExist_default();
      }
      await this.codex$.leaderboard.setLeaderboardScoreAsync(name2, playerId2, score2);
    } catch (error) {
      console.warn("setLeaderboardScoreAsync", error);
    }
  }
};
__name(_PostGlobalLeaderboardsScoreHandler, "PostGlobalLeaderboardsScoreHandler");
var PostGlobalLeaderboardsScoreHandler = _PostGlobalLeaderboardsScoreHandler;
var PostGlobalLeaderboardsScoreHandler_default = PostGlobalLeaderboardsScoreHandler;

// extensions/ludex/src/plugins/match/handlers/match/FinishMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Dtos: Dtos6, Utils: Utils4 } = Ludex;
var { Valid: V18, Object: O15 } = Utils4;
var _FinishMatchHandler = class _FinishMatchHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData$(matchState);
    const { useAPI } = this.payload$;
    if (useAPI) {
      const respMatchData = await this.finishMatchAsync$(matchState);
      const respMatchDataValidated = new Dtos6.Match.Data(respMatchData).toObject();
      this.updateMatchFromAPI$(matchState, respMatchDataValidated);
    } else {
      this.updateMatchData$(matchState);
    }
    this.updateMatchState$(matchState);
    await this.nextAsync$(matchState);
  }
  validateMatchData$(matchState) {
    const { status, profiles, customData } = matchState;
    if (status !== MatchStatus_default.ACTIVE) {
      throw new MatchAreNotActive_default();
    }
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !O15.hasOwn(profiles, playerId2)) {
      throw new PlayerNotCurrentInMatch_default();
    }
  }
  updateMatchData$(matchState) {
    const { playerId: playerId2 } = matchState.customData;
    if (!V18.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
    matchState.profiles[playerId2].finished = true;
  }
  updateMatchState$(matchState) {
    matchState.status = MatchStatus_default.FINISHED;
    matchState.finishAt = Date.now();
  }
  async finishMatchAsync$(matchState) {
    const { id, profiles, customData } = matchState;
    const { level: level2, playerId: playerId2 } = customData;
    if (!V18.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
    const { score: score2 } = profiles[playerId2];
    const { extraData } = this.payload$;
    const payload = {
      matchId: id ?? "",
      score: score2,
      level: level2,
      extraData
    };
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.finishMatchAsync(payload);
  }
  updateMatchFromAPI$(matchState, matchData) {
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
__name(_FinishMatchHandler, "FinishMatchHandler");
var FinishMatchHandler = _FinishMatchHandler;
var FinishMatchHandler_default = FinishMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendFinishedMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SendFinishedMessageHandler = class _SendFinishedMessageHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const imageResult = await this.createWideframesResultAsync$(matchState);
    if (imageResult) {
      this.progressSendFinishedMessage$(matchState, imageResult);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesResultAsync$(matchState) {
    try {
      const { frameCapture } = this.codex$;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0, finished: playerFinished } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0, finished: opponentFinished } = opponentProfile;
      return await frameCapture.renderAsync("result-challenge", {
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
  progressSendFinishedMessage$(matchState, wideframes) {
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
      this.sendFinishMessageAsync$(matchState, wideframes);
    } else if (opponentFinished && playerScore > opponentScore) {
      this.sendBestScoreMessageAsync$(matchState, wideframes);
    } else {
      this.sendPlayTurnMessageAsync$(matchState, wideframes);
    }
  }
  async sendFinishMessageAsync$(matchState, wideframes) {
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
  async sendPlayTurnMessageAsync$(matchState, wideframes) {
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
  async sendBestScoreMessageAsync$(matchState, wideframes) {
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
__name(_SendFinishedMessageHandler, "SendFinishedMessageHandler");
var SendFinishedMessageHandler = _SendFinishedMessageHandler;
var SendFinishedMessageHandler_default = SendFinishedMessageHandler;

// extensions/ludex/src/plugins/match/handlers/player/SetPlayerBestScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SetPlayerBestScoreHandler = class _SetPlayerBestScoreHandler extends BaseHandler_default {
  ignore$;
  constructor(concrete, payload) {
    super(concrete);
    this.ignore$ = !!payload?.ignore;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.setPlayerBestScore$(matchState);
    await this.nextAsync$(matchState);
  }
  setPlayerBestScore$(matchState) {
    if (this.ignore$) return;
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { player } = this.codex$;
    const bestScore = player.getBestScore() || 0;
    const { score: score2 = 0 } = profiles[playerId2];
    if (score2 <= bestScore) return;
    player.setBestScore(score2);
    profiles[playerId2].bestScore = score2;
  }
};
__name(_SetPlayerBestScoreHandler, "SetPlayerBestScoreHandler");
var SetPlayerBestScoreHandler = _SetPlayerBestScoreHandler;
var SetPlayerBestScoreHandler_default = SetPlayerBestScoreHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/FinishChallengeMatchConcrete.ts
var _FinishChallengeMatchConcrete = class _FinishChallengeMatchConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_FinishChallengeMatchConcrete, "FinishChallengeMatchConcrete");
var FinishChallengeMatchConcrete = _FinishChallengeMatchConcrete;
var FinishChallengeMatchConcrete_default = FinishChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/InviteFriendsConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/challenge/GetOpponentChallengeContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/ContextAreSolo.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ContextAreSolo = class _ContextAreSolo extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextAreSolo";
    this.message = message ?? "Context are solo";
  }
};
__name(_ContextAreSolo, "ContextAreSolo");
var ContextAreSolo = _ContextAreSolo;
var ContextAreSolo_default = ContextAreSolo;

// extensions/ludex/src/plugins/match/exceptions/ContextNotChallenge.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ContextNotChallenge = class _ContextNotChallenge extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextNotChallenge";
    this.message = message ?? "Context is not a challenge";
  }
};
__name(_ContextNotChallenge, "ContextNotChallenge");
var ContextNotChallenge = _ContextNotChallenge;
var ContextNotChallenge_default = ContextNotChallenge;

// extensions/ludex/src/plugins/match/exceptions/NetworkFailure.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _NetworkFailure = class _NetworkFailure extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkFailure";
    this.message = message ?? "Network failure";
  }
};
__name(_NetworkFailure, "NetworkFailure");
var NetworkFailure = _NetworkFailure;
var NetworkFailure_default = NetworkFailure;

// extensions/ludex/src/plugins/match/handlers/context/challenge/GetOpponentChallengeContextHandler.ts
var { Utils: Utils5, Dtos: Dtos7 } = Ludex;
var { Array: A6, Object: O16 } = Utils5;
var _GetOpponentChallengeContextHandler = class _GetOpponentChallengeContextHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.checkCurrentContext$();
    const opponentId = await this.getOpponentIdFromContextAsync$();
    matchState.customData.opponentId = opponentId;
    await this.nextAsync$(matchState);
  }
  checkCurrentContext$() {
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new ContextIdNotValid_default();
    }
    if (contextId2 === "SOLO") {
      throw new ContextAreSolo_default();
    }
  }
  async getOpponentIdFromContextAsync$() {
    const { ignoreId } = this.payload$;
    const players = await this.getContextPlayers$([ignoreId]);
    if (players.length > 1) {
      throw new ContextNotChallenge_default();
    }
    let opponent = SampleOpponent_default;
    if (players.length === 1) {
      opponent = players[0];
    }
    return opponent.playerId;
  }
  async getContextPlayers$(ignorePlayers) {
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
      if (O16.hasOwn(error, "code") && error.code === "NETWORK_FAILURE") {
        throw new NetworkFailure_default();
      }
      return [];
    }
  }
};
__name(_GetOpponentChallengeContextHandler, "GetOpponentChallengeContextHandler");
var GetOpponentChallengeContextHandler = _GetOpponentChallengeContextHandler;
var GetOpponentChallengeContextHandler_default = GetOpponentChallengeContextHandler;

// extensions/ludex/src/plugins/match/handlers/context/friend/ChooseContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/ContextIsTournament.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ContextIsTournament = class _ContextIsTournament extends Error {
  constructor(message) {
    super(message);
    this.name = "ContextIsTournament";
    this.message = message ?? "Context is a tournament";
  }
};
__name(_ContextIsTournament, "ContextIsTournament");
var ContextIsTournament = _ContextIsTournament;
var ContextIsTournament_default = ContextIsTournament;

// extensions/ludex/src/plugins/match/handlers/context/friend/ChooseContextHandler.ts
var { Object: O17 } = Ludex.Utils;
var _ChooseContextHandler = class _ChooseContextHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const contextId2 = await this.chooseAsync$();
    await this.checkContextTournament$();
    matchState.customData.contextId = contextId2;
    await this.nextAsync$(matchState);
  }
  async chooseAsync$() {
    try {
      await GameSDK.context.chooseAsync({
        filters: ["INCLUDE_EXISTING_CHALLENGES"],
        minSize: 2,
        maxSize: 2
      });
    } catch (error) {
      if (!O17.hasOwn(error, "code")) throw error;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
  async checkContextTournament$() {
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
__name(_ChooseContextHandler, "ChooseContextHandler");
var ChooseContextHandler = _ChooseContextHandler;
var ChooseContextHandler_default = ChooseContextHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/InviteFriendsConcrete.ts
var _InviteFriendsConcrete = class _InviteFriendsConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_InviteFriendsConcrete, "InviteFriendsConcrete");
var InviteFriendsConcrete = _InviteFriendsConcrete;
var InviteFriendsConcrete_default = InviteFriendsConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/JoinChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/match/JoinMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/JoinMatchFailed.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _JoinMatchFailed = class _JoinMatchFailed extends Error {
  constructor(message) {
    super(message);
    this.name = "JoinMatchFailed";
    this.message = message ?? "Join match failed";
  }
};
__name(_JoinMatchFailed, "JoinMatchFailed");
var JoinMatchFailed = _JoinMatchFailed;
var JoinMatchFailed_default = JoinMatchFailed;

// extensions/ludex/src/plugins/match/exceptions/MatchAreFinished.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchAreFinished = class _MatchAreFinished extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreFinished";
    this.message = message ?? "Match are finished";
  }
};
__name(_MatchAreFinished, "MatchAreFinished");
var MatchAreFinished = _MatchAreFinished;
var MatchAreFinished_default = MatchAreFinished;

// extensions/ludex/src/plugins/match/exceptions/OtherPlayerHasJoinedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _OtherPlayerHasJoinedMatch = class _OtherPlayerHasJoinedMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "OtherPlayerHasJoinedMatch";
    this.message = message ?? "Other player has joined match";
  }
};
__name(_OtherPlayerHasJoinedMatch, "OtherPlayerHasJoinedMatch");
var OtherPlayerHasJoinedMatch = _OtherPlayerHasJoinedMatch;
var OtherPlayerHasJoinedMatch_default = OtherPlayerHasJoinedMatch;

// extensions/ludex/src/plugins/match/handlers/match/JoinMatchHandler.ts
var {
  Dtos: Dtos8,
  Utils: { Object: O18 }
} = Ludex;
var _JoinMatchHandler = class _JoinMatchHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData$(matchState);
    const respMatchData = await this.joinMatchAsync$(matchState);
    const respMatchDataValidated = new Dtos8.Match.Data(respMatchData).toObject();
    this.validateJoinMatchData$(matchState, respMatchDataValidated);
    this.updateMatchData$(matchState, respMatchDataValidated);
    await this.nextAsync$(matchState);
  }
  validateMatchData$(matchState) {
    const { status } = matchState;
    if (status !== MatchStatus_default.OPEN) {
      throw new MatchAreNotOpen_default();
    }
  }
  validateJoinMatchData$(matchState, matchData) {
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
  async joinMatchAsync$(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.joinMatchAsync(id);
  }
  updateMatchData$(matchState, matchData) {
    this.updateMatchGeneral$(matchState, matchData);
    this.updatePlayerIds$(matchState, matchData);
    this.initializeProfiles$(matchState);
    this.updateScoresAndStatus$(matchState, matchData);
  }
  updateMatchGeneral$(matchState, matchData) {
    const { extraData } = matchData;
    matchState.customData = O18.merge(matchState.customData, extraData);
  }
  updatePlayerIds$(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isPlayerWhite = whitePlayerId === customData.playerId;
    const playerId2 = isPlayerWhite ? whitePlayerId : blackPlayerId;
    const opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles$(matchState) {
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
  updateScoresAndStatus$(matchState, matchData) {
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
__name(_JoinMatchHandler, "JoinMatchHandler");
var JoinMatchHandler = _JoinMatchHandler;
var JoinMatchHandler_default = JoinMatchHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendAcceptedMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SendAcceptedMessageHandler = class _SendAcceptedMessageHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    const imageResult = await this.createWideframesAcceptedAsync$(matchState);
    if (imageResult) {
      this.sendMessageAsync$(matchState, imageResult);
    }
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesAcceptedAsync$(matchState) {
    try {
      const { frameCapture } = this.codex$;
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
      return await frameCapture.renderAsync("result-challenge", {
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
  async sendMessageAsync$(matchState, wideframes) {
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
__name(_SendAcceptedMessageHandler, "SendAcceptedMessageHandler");
var SendAcceptedMessageHandler = _SendAcceptedMessageHandler;
var SendAcceptedMessageHandler_default = SendAcceptedMessageHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/JoinChallengeMatchConcrete.ts
var _JoinChallengeMatchConcrete = class _JoinChallengeMatchConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_JoinChallengeMatchConcrete, "JoinChallengeMatchConcrete");
var JoinChallengeMatchConcrete = _JoinChallengeMatchConcrete;
var JoinChallengeMatchConcrete_default = JoinChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/challenge/ResultChallengeMatchConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/match/ResultMatchHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/dtos/RespMatchDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/data/DefaultRespMatchDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
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
var _RespMatchDataDtos = class _RespMatchDataDtos extends BaseDtos_default {
  setupData$(data) {
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
__name(_RespMatchDataDtos, "RespMatchDataDtos");
var RespMatchDataDtos = _RespMatchDataDtos;
RespMatchDataDtos.makeStrict();
RespMatchDataDtos.addDefaults(DefaultRespMatchDataDtos_default);
var RespMatchDataDtos_default = RespMatchDataDtos;

// extensions/ludex/src/plugins/match/exceptions/MatchAreNotFinished.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchAreNotFinished = class _MatchAreNotFinished extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchAreNotFinished";
    this.message = message || "Match are not finished";
  }
};
__name(_MatchAreNotFinished, "MatchAreNotFinished");
var MatchAreNotFinished = _MatchAreNotFinished;
var MatchAreNotFinished_default = MatchAreNotFinished;

// extensions/ludex/src/plugins/match/exceptions/OpponentNotFinishedMatch.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _OpponentNotFinishedMatch = class _OpponentNotFinishedMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "OpponentNotFinishedMatch";
    this.message = message || "Opponent not finished match";
  }
};
__name(_OpponentNotFinishedMatch, "OpponentNotFinishedMatch");
var OpponentNotFinishedMatch = _OpponentNotFinishedMatch;
var OpponentNotFinishedMatch_default = OpponentNotFinishedMatch;

// extensions/ludex/src/plugins/match/handlers/match/ResultMatchHandler.ts
var {
  Utils: { Object: O19 }
} = Ludex;
var _ResultMatchHandler = class _ResultMatchHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateMatchData$(matchState);
    const respMatchData = await this.getMatchAsync$(matchState);
    const respMatchDataValidated = new RespMatchDataDtos_default(respMatchData).toObject();
    this.validateResultMatchData$(matchState, respMatchDataValidated);
    this.updateMatchData$(matchState, respMatchDataValidated);
    this.validatePlayerTurn$(matchState);
    this.validateOpponentTurn$(matchState);
    await this.nextAsync$(matchState);
  }
  validateMatchData$(matchState) {
    const { id } = matchState;
    if (typeof id !== "string") {
      throw new MatchIdNotValid_default();
    }
  }
  validateResultMatchData$(matchState, matchData) {
    const { id } = matchState;
    const { _id, whitePlayerFinish, blackPlayerFinish } = matchData;
    if (typeof _id !== "string" || _id !== id) {
      throw new GetMatchDetailFailed_default();
    }
    if (!whitePlayerFinish && !blackPlayerFinish) {
      throw new MatchAreNotFinished_default();
    }
  }
  validatePlayerTurn$(matchState) {
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
  validateOpponentTurn$(matchState) {
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
  async getMatchAsync$(matchState) {
    const { id } = matchState;
    if (!id) return null;
    const matchAPI = this.match$.api.getMatchAPI();
    return matchAPI.getMatchDetailByIdAsync(id);
  }
  updateMatchData$(matchState, matchData) {
    this.updateMatchGeneral$(matchState, matchData);
    this.updatePlayerIds$(matchState, matchData);
    this.initializeProfiles$(matchState);
    this.updateScoresAndStatus$(matchState, matchData);
  }
  updateMatchGeneral$(matchState, matchData) {
    const { extraData } = matchData;
    matchState.status = MatchStatus_default.FINISHED;
    matchState.customData = O19.merge(matchState.customData, extraData);
  }
  updatePlayerIds$(matchState, matchData) {
    const { whitePlayerId, blackPlayerId } = matchData;
    const { customData } = matchState;
    const isPlayerWhite = whitePlayerId === customData.playerId;
    const playerId2 = isPlayerWhite ? whitePlayerId : blackPlayerId;
    const opponentId = isPlayerWhite ? blackPlayerId : whitePlayerId;
    matchState.customData.playerId = playerId2;
    matchState.customData.opponentId = opponentId;
  }
  initializeProfiles$(matchState) {
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
  updateScoresAndStatus$(matchState, matchData) {
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
__name(_ResultMatchHandler, "ResultMatchHandler");
var ResultMatchHandler = _ResultMatchHandler;
var ResultMatchHandler_default = ResultMatchHandler;

// extensions/ludex/src/plugins/match/concretes/challenge/ResultChallengeMatchConcrete.ts
var _ResultChallengeMatchConcrete = class _ResultChallengeMatchConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_ResultChallengeMatchConcrete, "ResultChallengeMatchConcrete");
var ResultChallengeMatchConcrete = _ResultChallengeMatchConcrete;
var ResultChallengeMatchConcrete_default = ResultChallengeMatchConcrete;

// extensions/ludex/src/plugins/match/concretes/context/ChooseContextConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ChooseContextConcrete = class _ChooseContextConcrete extends BaseConcrete_default {
  fallbackSingleMode$;
  async processAsync(payload) {
    try {
      this.startLog$(payload);
      const { playerId: playerId2, extraData, fallbackSingleMode } = payload;
      this.fallbackSingleMode$ = fallbackSingleMode;
      const response = await this.startFLowChallengeFriend$({
        playerId: playerId2,
        extraData
      });
      if (response === true) return;
      if (response instanceof ContextIsTournament_default) {
        await this.startFlowTournament$(playerId2);
      } else {
        if (this.fallbackSingleMode$) {
          await this.startFlowSingle$(playerId2);
        } else {
          throw response;
        }
      }
    } finally {
      this.endLog$();
    }
  }
  startFLowChallengeFriend$ = /* @__PURE__ */ __name(async (payload) => {
    try {
      await this.match.challenge.invite.processAsync(payload);
      return true;
    } catch (error) {
      return error;
    }
  }, "startFLowChallengeFriend$");
  startFlowTournament$ = /* @__PURE__ */ __name(async (playerId2) => {
    try {
      const contextId2 = GameSDK.context.getID();
      if (typeof contextId2 !== "string") {
        throw new ContextIdNotValid_default();
      }
      await this.match.tournament.continue.processAsync({ playerId: playerId2, contextId: contextId2 });
    } catch (e) {
      await this.startFlowSingle$(playerId2);
    }
  }, "startFlowTournament$");
  startFlowSingle$ = /* @__PURE__ */ __name(async (playerId2) => {
    return this.match.single.start.processAsync({ playerId: playerId2 });
  }, "startFlowSingle$");
};
__name(_ChooseContextConcrete, "ChooseContextConcrete");
var ChooseContextConcrete = _ChooseContextConcrete;
var ChooseContextConcrete_default = ChooseContextConcrete;

// extensions/ludex/src/plugins/match/concretes/group/FinishGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostLeaderboardScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/LeaderboardIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _LeaderboardIdNotValid = class _LeaderboardIdNotValid extends Error {
  constructor(message) {
    super(message);
    this.name = "LeaderboardIdNotValid";
    this.message = message ?? "Leaderboard id is not valid";
  }
};
__name(_LeaderboardIdNotValid, "LeaderboardIdNotValid");
var LeaderboardIdNotValid = _LeaderboardIdNotValid;
var LeaderboardIdNotValid_default = LeaderboardIdNotValid;

// extensions/ludex/src/plugins/match/handlers/leaderboard/SetLeaderboardScoreHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V20 } = Ludex.Utils;
var _SetLeaderboardScoreHandler = class _SetLeaderboardScoreHandler extends BaseHandler_default {
  payload$;
  leaderboardPayload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.setupSetScorePayload$(matchState);
    if ("submitGameResultsAsync" in GameSDK.extra) {
      await GameSDK.extra.submitGameResultsAsync(this.payload$.score);
    }
    this.setLeaderboardScoreAsync$();
    await this.nextAsync$(matchState);
  }
  async setupSetScorePayload$(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    if (!playerId2 || !profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
    const { score: score2, leaderboardId } = this.payload$;
    if (!V20.isNumber(score2)) {
      throw new ScoreNotValid_default();
    }
    if (!V20.isString(leaderboardId)) {
      throw new LeaderboardIdNotValid_default();
    }
    this.leaderboardPayload$ = {
      score: score2,
      playerId: playerId2,
      leaderboardId
    };
  }
  async setLeaderboardScoreAsync$() {
    try {
      const { playerId: playerId2, score: score2, leaderboardId } = this.leaderboardPayload$;
      const name2 = this.codex$.leaderboard.getLeaderboardName(leaderboardId);
      if (!name2) {
        throw new LeaderboardNotExist_default();
      }
      await this.codex$.leaderboard.setLeaderboardScoreAsync(name2, playerId2, score2);
    } catch (error) {
      console.warn("setLeaderboardScoreAsync", error);
    }
  }
};
__name(_SetLeaderboardScoreHandler, "SetLeaderboardScoreHandler");
var SetLeaderboardScoreHandler = _SetLeaderboardScoreHandler;
var SetLeaderboardScoreHandler_default = SetLeaderboardScoreHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/PostLeaderboardScoreHandler.ts
var {
  Utils: { Valid: V21 }
} = Ludex;
var _PostLeaderboardScoreHandler = class _PostLeaderboardScoreHandler extends SetLeaderboardScoreHandler_default {
  constructor(concrete) {
    super(concrete, { score: 0, leaderboardId: "" });
  }
  async setupSetScorePayload$(matchState) {
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
    this.payload$.score = score2;
    this.payload$.leaderboardId = leaderboardId;
    super.setupSetScorePayload$(matchState);
  }
};
__name(_PostLeaderboardScoreHandler, "PostLeaderboardScoreHandler");
var PostLeaderboardScoreHandler = _PostLeaderboardScoreHandler;
var PostLeaderboardScoreHandler_default = PostLeaderboardScoreHandler;

// extensions/ludex/src/plugins/match/handlers/message/SendGroupMessageHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _SendGroupMessageHandler = class _SendGroupMessageHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    this.progressSendGroupMessage$(matchState);
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
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
  async createWideframesResultGroupAsync$(matchState) {
    try {
      const { frameCapture } = this.codex$;
      const { profiles, customData } = matchState;
      const { playerId: playerId2, opponentId } = customData;
      if (!playerId2 || !opponentId) return null;
      const playerProfile = profiles[playerId2];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0 } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0 } = opponentProfile;
      return await frameCapture.renderAsync("result-challenge", {
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
  async createWideframesBestScoreAsync$(matchState) {
    try {
      const { player, frameCapture } = this.codex$;
      const { playerId: matchPlayerId } = matchState.customData;
      const { playerId: playerId2, photo: playerPhoto, data } = player.getPlayer();
      if (matchPlayerId !== playerId2) return null;
      const { score: playerScore } = data || {};
      return await frameCapture.renderAsync("share-score", {
        playerId: playerId2,
        playerPhoto,
        playerScore
      });
    } catch (error) {
      console.warn("createWideframesBestScoreAsync", error);
      return null;
    }
  }
  async progressSendGroupMessage$(matchState) {
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
        const imageResult = await this.createWideframesResultGroupAsync$(matchState);
        if (!imageResult) return;
        this.sendBestScoreMessageAsync$(matchState, imageResult);
        return;
      }
    }
    const imageScore = await this.createWideframesBestScoreAsync$(matchState);
    if (!imageScore) return;
    this.sendChallengeMessageAsync$(matchState, imageScore);
  }
  async sendBestScoreMessageAsync$(matchState, wideframes) {
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
    const ContextGameTypes2 = this.codex$.context.getSessionContextTypes();
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
  async sendChallengeMessageAsync$(matchState, wideframes) {
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
    const ContextGameTypes2 = this.codex$.context.getSessionContextTypes();
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
__name(_SendGroupMessageHandler, "SendGroupMessageHandler");
var SendGroupMessageHandler = _SendGroupMessageHandler;
var SendGroupMessageHandler_default = SendGroupMessageHandler;

// extensions/ludex/src/plugins/match/concretes/group/FinishGroupConcrete.ts
var _FinishGroupConcrete = class _FinishGroupConcrete extends BaseConcrete_default {
  async processAsync() {
    try {
      this.startLog$();
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
      this.endLog$();
    }
  }
};
__name(_FinishGroupConcrete, "FinishGroupConcrete");
var FinishGroupConcrete = _FinishGroupConcrete;
var FinishGroupConcrete_default = FinishGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/group/JoinGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/profile/SetProfileDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Dtos: Dtos9,
  Utils: { Object: O20 }
} = Ludex;
var _SetProfileDataHandler = class _SetProfileDataHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.updateProfileMatchData$(matchState);
    await this.nextAsync$(matchState);
  }
  updateProfileMatchData$(matchState) {
    const { id } = this.payload$;
    const { profiles } = matchState;
    if (!profiles[id]) {
      throw new ProfileNotFound_default();
    }
    const profileMerged = O20.merge(profiles[id], this.payload$);
    const profile = new Dtos9.Match.Profile(profileMerged).toObject();
    profiles[profile.id] = profile;
  }
};
__name(_SetProfileDataHandler, "SetProfileDataHandler");
var SetProfileDataHandler = _SetProfileDataHandler;
var SetProfileDataHandler_default = SetProfileDataHandler;

// extensions/ludex/src/plugins/match/concretes/group/JoinGroupConcrete.ts
var _JoinGroupConcrete = class _JoinGroupConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_JoinGroupConcrete, "JoinGroupConcrete");
var JoinGroupConcrete = _JoinGroupConcrete;
var JoinGroupConcrete_default = JoinGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/group/StartGroupConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/group/GroupContextHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/MatchGroupNotSupported.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _MatchGroupNotSupported = class _MatchGroupNotSupported extends Error {
  constructor(message) {
    super(message);
    this.name = "MatchGroupNotSupported";
    this.message = message ?? "Match group is not supported";
  }
};
__name(_MatchGroupNotSupported, "MatchGroupNotSupported");
var MatchGroupNotSupported = _MatchGroupNotSupported;
var MatchGroupNotSupported_default = MatchGroupNotSupported;

// extensions/ludex/src/plugins/match/handlers/context/group/GroupContextHandler.ts
var _GroupContextHandler = class _GroupContextHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    await this.checkMatchGroupSupported$();
    const contextId2 = await this.matchingGroup$();
    matchState.customData.contextId = contextId2;
    await this.nextAsync$(matchState);
  }
  async checkMatchGroupSupported$() {
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
  async matchingGroup$() {
    if (!("matchPlayerAsync" in GameSDK.extra)) {
      throw new UnavailableFeature_default("matchPlayerAsync");
    }
    const { matchTag, autoSwitch = false, onlyExisting = false } = this.payload$;
    await GameSDK.extra.matchPlayerAsync(matchTag, autoSwitch, onlyExisting);
    const contextId2 = GameSDK.context.getID();
    if (typeof contextId2 !== "string") {
      throw new CreateContextFailed_default();
    }
    return contextId2;
  }
};
__name(_GroupContextHandler, "GroupContextHandler");
var GroupContextHandler = _GroupContextHandler;
var GroupContextHandler_default = GroupContextHandler;

// extensions/ludex/src/plugins/match/concretes/group/StartGroupConcrete.ts
var _StartGroupConcrete = class _StartGroupConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_StartGroupConcrete, "StartGroupConcrete");
var StartGroupConcrete = _StartGroupConcrete;
var StartGroupConcrete_default = StartGroupConcrete;

// extensions/ludex/src/plugins/match/concretes/single/FinishSingleConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _FinishSingleConcrete = class _FinishSingleConcrete extends BaseConcrete_default {
  async processAsync() {
    try {
      this.startLog$();
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
      this.endLog$();
    }
  }
};
__name(_FinishSingleConcrete, "FinishSingleConcrete");
var FinishSingleConcrete = _FinishSingleConcrete;
var FinishSingleConcrete_default = FinishSingleConcrete;

// extensions/ludex/src/plugins/match/concretes/single/StartSingleConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/profile/GetProfileHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/ProfileIdNotDefined.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _ProfileIdNotDefined = class _ProfileIdNotDefined extends Error {
  constructor(message) {
    super(message);
    this.name = "ProfileIdNotDefined";
    this.message = message ?? "Profile id is not defined";
  }
};
__name(_ProfileIdNotDefined, "ProfileIdNotDefined");
var ProfileIdNotDefined = _ProfileIdNotDefined;
var ProfileIdNotDefined_default = ProfileIdNotDefined;

// extensions/ludex/src/plugins/match/handlers/profile/GetProfileHandler.ts
var { Dtos: Dtos10 } = Ludex;
var _GetProfileHandler = class _GetProfileHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { profileId } = this.payload$;
    if (!profileId) {
      throw new ProfileIdNotDefined_default();
    }
    const { player } = this.codex$;
    const playerId2 = player.getPlayerId();
    let profile;
    if (profileId === playerId2) {
      profile = this.getPlayerProfile$();
    } else {
      profile = await this.getProfileAsync$(profileId);
      if (!profile) {
        throw new ProfileNotFound_default();
      }
    }
    this.updateMatchData$(profile, matchState);
    await this.nextAsync$(matchState);
  }
  getPlayerProfile$() {
    const { player } = this.codex$;
    const { playerId: playerId2, name: name2, photo: photo2, locale: locale2 } = player.getPlayer();
    return { playerId: playerId2, name: name2, photo: photo2, locale: locale2 };
  }
  async getProfileAsync$(profileId) {
    const { profile } = this.codex$;
    await profile.requestProfiles([profileId]);
    const profiles = profile.getProfiles();
    return profiles[profileId];
  }
  updateMatchData$(data, matchState) {
    const { playerId: playerId2, name: name2, photo: photo2 } = data;
    const profile = new Dtos10.Match.Profile({ id: playerId2, name: name2, photo: photo2 }).toObject();
    matchState.profiles[playerId2] = profile;
  }
};
__name(_GetProfileHandler, "GetProfileHandler");
var GetProfileHandler = _GetProfileHandler;
var GetProfileHandler_default = GetProfileHandler;

// extensions/ludex/src/plugins/match/concretes/single/StartSingleConcrete.ts
var _StartSingleConcrete = class _StartSingleConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_StartSingleConcrete, "StartSingleConcrete");
var StartSingleConcrete = _StartSingleConcrete;
var StartSingleConcrete_default = StartSingleConcrete;

// extensions/ludex/src/plugins/match/concretes/strategy/FinishStrategyConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _FinishStrategyConcrete = class _FinishStrategyConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_FinishStrategyConcrete, "FinishStrategyConcrete");
var FinishStrategyConcrete = _FinishStrategyConcrete;
var FinishStrategyConcrete_default = FinishStrategyConcrete;

// extensions/ludex/src/plugins/match/concretes/strategy/StartStrategyConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _StartStrategyConcrete = class _StartStrategyConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_StartStrategyConcrete, "StartStrategyConcrete");
var StartStrategyConcrete = _StartStrategyConcrete;
var StartStrategyConcrete_default = StartStrategyConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/ContinueTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/analytic/LogTournamentStartHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Plugins: {
    Analytics: { Events: Events6 } = {}
  },
  Utils: { String: S6, Valid: V22 }
} = Ludex;
var _LogTournamentStartHandler = class _LogTournamentStartHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { mode, customData } = matchState;
    this.validateMode$(mode);
    const { analytics } = this.codex$;
    const { tournamentId, leaderboardId } = customData;
    if (Events6) {
      analytics?.event(Events6.TOURNAMENT_START, {
        success: true,
        game_mode: S6.toUpperCamelCase(mode),
        tournament_id: tournamentId,
        leaderboard_id: leaderboardId
      });
    }
    await this.nextAsync$(matchState);
  }
  validateMode$(mode) {
    if (!V22.isString(mode)) {
      throw new MatchModeNotDefined_default();
    }
  }
};
__name(_LogTournamentStartHandler, "LogTournamentStartHandler");
var LogTournamentStartHandler = _LogTournamentStartHandler;
var LogTournamentStartHandler_default = LogTournamentStartHandler;

// extensions/ludex/src/plugins/match/handlers/context/tournament/ContinueTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/exceptions/TournamentIdNotValid.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _TournamentIdNotValid = class _TournamentIdNotValid extends Error {
  constructor(message) {
    super(message);
    this.name = "TournamentIdNotValid";
    this.message = message ?? "Tournament id is not valid";
  }
};
__name(_TournamentIdNotValid, "TournamentIdNotValid");
var TournamentIdNotValid = _TournamentIdNotValid;
var TournamentIdNotValid_default = TournamentIdNotValid;

// extensions/ludex/src/plugins/match/handlers/context/tournament/ContinueTournamentHandler.ts
var { Valid: V23 } = Ludex.Utils;
var _ContinueTournamentHandler = class _ContinueTournamentHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { contextId: contextId2 } = this.payload$;
    this.validateContextId$(contextId2);
    const tournament = await GameSDK.getTournamentAsync();
    const tournamentId = tournament.getID().toString();
    const tournamentType = tournament.getTournamentType();
    this.validateTournamentId$(tournamentId);
    matchState.customData.contextId = contextId2;
    matchState.customData.tournamentId = tournamentId;
    if (tournamentType !== "DAILY") {
      const tournamentPayload = JSON.parse(tournament.getPayload() || "{}");
      const { leaderboardId } = tournamentPayload;
      this.validateLeaderboardId$(leaderboardId);
      matchState.customData.leaderboardId = leaderboardId;
    }
    await this.nextAsync$(matchState);
  }
  validateContextId$(contextId2) {
    if (!V23.isString(contextId2)) {
      throw new ContextIdNotValid_default();
    }
  }
  validateTournamentId$(tournamentId) {
    if (!V23.isString(tournamentId)) {
      throw new TournamentIdNotValid_default();
    }
  }
  validateLeaderboardId$(leaderboardId) {
    if (!V23.isString(leaderboardId) || leaderboardId === "") {
      throw new LeaderboardIdNotValid_default();
    }
  }
};
__name(_ContinueTournamentHandler, "ContinueTournamentHandler");
var ContinueTournamentHandler = _ContinueTournamentHandler;
var ContinueTournamentHandler_default = ContinueTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/ContinueTournamentConcrete.ts
var _ContinueTournamentConcrete = class _ContinueTournamentConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_ContinueTournamentConcrete, "ContinueTournamentConcrete");
var ContinueTournamentConcrete = _ContinueTournamentConcrete;
var ContinueTournamentConcrete_default = ContinueTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/CreateTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/analytic/LogTournamentCreateHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Plugins: {
    Analytics: { Events: Events7 } = {}
  }
} = Ludex;
var _LogTournamentCreateHandler = class _LogTournamentCreateHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { customData } = matchState;
    const { analytics } = this.codex$;
    const { tournamentId, leaderboardId } = customData;
    if (Events7) {
      analytics.event(Events7.TOURNAMENT_CREATE, {
        success: true,
        tournament_id: tournamentId,
        leaderboard_id: leaderboardId
      });
    }
    await this.nextAsync$(matchState);
  }
};
__name(_LogTournamentCreateHandler, "LogTournamentCreateHandler");
var LogTournamentCreateHandler = _LogTournamentCreateHandler;
var LogTournamentCreateHandler_default = LogTournamentCreateHandler;

// extensions/ludex/src/plugins/match/handlers/context/tournament/CreateTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _CreateTournamentHandler = class _CreateTournamentHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    await this.createTournamentAsync$();
    await this.updateMatchStateAsync$(matchState);
    await this.nextAsync$(matchState);
  }
  async createTournamentAsync$() {
    const { name: name2, score: score2, customData } = this.payload$;
    await GameSDK.tournament.createAsync({
      initialScore: score2,
      config: {
        title: name2,
        tournamentTitle: name2
      },
      data: customData
    });
  }
  async updateMatchStateAsync$(matchState) {
    try {
      if (!("getTournamentAsync" in GameSDK)) {
        throw new UnavailableFeature_default("getTournamentAsync");
      }
      const tournament = await GameSDK.getTournamentAsync();
      const contextId2 = tournament.getContextID();
      const tournamentId = tournament.getID().toString();
      const { playerId: playerId2 } = this.payload$;
      matchState.customData.playerId = playerId2;
      matchState.customData.contextId = contextId2;
      matchState.customData.tournamentId = tournamentId;
    } catch (error) {
      if (error instanceof UnavailableFeature_default) return;
    }
  }
};
__name(_CreateTournamentHandler, "CreateTournamentHandler");
var CreateTournamentHandler = _CreateTournamentHandler;
var CreateTournamentHandler_default = CreateTournamentHandler;

// extensions/ludex/src/plugins/match/handlers/leaderboard/CreateLeaderboardHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V24 } = Ludex.Utils;
var _CreateLeaderboardHandler = class _CreateLeaderboardHandler extends BaseHandler_default {
  payload$;
  leaderboardPayload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validatePayload$();
    await this.setupCreatePayload$(matchState);
    await this.createLeaderboardAsync$(matchState);
    await this.nextAsync$(matchState);
  }
  validatePayload$() {
    const { leaderboardId } = this.payload$;
    if (!V24.isString(leaderboardId)) {
      throw new LeaderboardIdNotValid_default();
    }
  }
  validatePlayerId$(playerId2) {
    if (!V24.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
  }
  async setupCreatePayload$(matchState) {
    const { playerId: playerId2 } = matchState.customData;
    this.validatePlayerId$(playerId2);
    const { name: name2, leaderboardId, customData } = this.payload$;
    this.leaderboardPayload$ = {
      _id: leaderboardId,
      name: name2 ?? "",
      createdBy: playerId2,
      description: JSON.stringify(customData)
    };
  }
  async createLeaderboardAsync$(matchState) {
    const leaderboardId = await this.codex$.leaderboard.createLeaderboardAsync(this.leaderboardPayload$);
    matchState.customData.leaderboardId = leaderboardId;
  }
};
__name(_CreateLeaderboardHandler, "CreateLeaderboardHandler");
var CreateLeaderboardHandler = _CreateLeaderboardHandler;
var CreateLeaderboardHandler_default = CreateLeaderboardHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/CreateTournamentConcrete.ts
var _CreateTournamentConcrete = class _CreateTournamentConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_CreateTournamentConcrete, "CreateTournamentConcrete");
var CreateTournamentConcrete = _CreateTournamentConcrete;
var CreateTournamentConcrete_default = CreateTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/FinishTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/tournament/PostScoreTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Plugins: { Analytics: Analytics2 },
  Utils: { Valid: V25 }
} = Ludex;
var _PostScoreTournamentHandler = class _PostScoreTournamentHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.validateData$(matchState);
    await this.postScoreTournamentAsync$(matchState);
    await this.nextAsync$(matchState);
  }
  validateData$(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    this.validatePlayerId$(playerId2);
    if (!profiles[playerId2]) {
      throw new ProfileNotFound_default();
    }
  }
  validatePlayerId$(playerId2) {
    if (!V25.isString(playerId2)) {
      throw new PlayerIdNotValid_default();
    }
  }
  getPlayerProfile$(matchState) {
    const { profiles, customData } = matchState;
    const { playerId: playerId2 } = customData;
    this.validatePlayerId$(playerId2);
    return profiles[playerId2];
  }
  isNewBestScore$(matchState) {
    const profile = this.getPlayerProfile$(matchState);
    const { score: score2 = 0, bestScore = 0 } = profile;
    return score2 > bestScore;
  }
  async postScoreTournamentAsync$(matchState) {
    const { analytics } = codex;
    const profile = this.getPlayerProfile$(matchState);
    const { score: score2 = 0 } = profile;
    try {
      await this.assertSupportedTournamentContext();
    } catch (error) {
      console.warn("Post Score Tournament", error);
      return;
    }
    const { openShareScorePopup = true } = this.payload$;
    const eventName = openShareScorePopup ? Analytics2.Events.TOURNAMENT_SHARE : Analytics2.Events.TOURNAMENT_POST_SCORE;
    try {
      if (openShareScorePopup) {
        await GameSDK.tournament.shareAsync({ score: score2 });
      } else {
        await GameSDK.tournament.postScoreAsync(score2);
      }
      analytics?.event(eventName, { success: true });
    } catch (error) {
      console.warn("Post Score Tournament", error);
      analytics?.event(eventName, { success: false });
      if (V25.isObject(error) && "code" in error && error.code === "USER_INPUT") {
        const { event } = codex;
        event.emit(CoreEvents_default.GAME_SDK_POPUP_RESPONDED, {
          type: "cancelled",
          extra: error
        });
      }
    }
  }
  assertSupportedTournamentContext() {
    if (!("getTournamentAsync" in GameSDK)) {
      throw new UnavailableFeature_default("getTournamentAsync");
    }
    return GameSDK.getTournamentAsync();
  }
};
__name(_PostScoreTournamentHandler, "PostScoreTournamentHandler");
var PostScoreTournamentHandler = _PostScoreTournamentHandler;
var PostScoreTournamentHandler_default = PostScoreTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/FinishTournamentConcrete.ts
var _FinishTournamentConcrete = class _FinishTournamentConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
      const { playerId: playerId2, bestScore } = payload;
      const flow = new NothingHandler_default(this);
      const finishMatch = new FinishMatchHandler_default(this, { useAPI: false });
      flow.setNext(finishMatch);
      const setProfileData = new SetProfileDataHandler_default(this, {
        id: playerId2,
        bestScore
      });
      finishMatch.setNext(setProfileData);
      const postTournament = new PostScoreTournamentHandler_default(this, payload);
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
      this.endLog$();
    }
  }
};
__name(_FinishTournamentConcrete, "FinishTournamentConcrete");
var FinishTournamentConcrete = _FinishTournamentConcrete;
var FinishTournamentConcrete_default = FinishTournamentConcrete;

// extensions/ludex/src/plugins/match/concretes/tournament/JoinTournamentConcrete.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/match/handlers/context/tournament/JoinTournamentHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V26, Object: O21 } = Ludex.Utils;
var _JoinTournamentHandler = class _JoinTournamentHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    const { tournamentId } = this.payload$;
    this.validateTournamentId$(tournamentId);
    await this.joinTournamentAsync$(tournamentId);
    const tournament = await GameSDK.getTournamentAsync();
    const contextId2 = tournament.getContextID();
    this.validateContextId$(contextId2);
    const tournamentPayload = JSON.parse(tournament.getPayload() || "{}");
    const { leaderboardId } = tournamentPayload;
    this.validateLeaderboardId$(leaderboardId);
    matchState.customData.contextId = contextId2;
    matchState.customData.tournamentId = tournamentId;
    matchState.customData.leaderboardId = leaderboardId;
    await this.nextAsync$(matchState);
  }
  validateTournamentId$(tournamentId) {
    if (!V26.isString(tournamentId)) {
      throw new TournamentIdNotValid_default();
    }
  }
  validateContextId$(contextId2) {
    if (!V26.isString(contextId2)) {
      throw new ContextIdNotValid_default();
    }
  }
  validateLeaderboardId$(leaderboardId) {
    if (!V26.isString(leaderboardId) || leaderboardId === "") {
      throw new LeaderboardIdNotValid_default();
    }
  }
  async joinTournamentAsync$(tournamentId) {
    if (!("tournament" in GameSDK)) {
      throw new UnavailableFeature_default("tournament");
    }
    try {
      await GameSDK.tournament.joinAsync(tournamentId);
    } catch (error) {
      if (!O21.hasOwn(error, "code")) throw error;
      if (error.code !== "SAME_CONTEXT") throw error;
    }
  }
};
__name(_JoinTournamentHandler, "JoinTournamentHandler");
var JoinTournamentHandler = _JoinTournamentHandler;
var JoinTournamentHandler_default = JoinTournamentHandler;

// extensions/ludex/src/plugins/match/concretes/tournament/JoinTournamentConcrete.ts
var _JoinTournamentConcrete = class _JoinTournamentConcrete extends BaseConcrete_default {
  async processAsync(payload) {
    try {
      this.startLog$(payload);
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
      this.endLog$();
    }
  }
};
__name(_JoinTournamentConcrete, "JoinTournamentConcrete");
var JoinTournamentConcrete = _JoinTournamentConcrete;
var JoinTournamentConcrete_default = JoinTournamentConcrete;

// extensions/ludex/src/plugins/match/handlers/match/GetMatchCustomDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Dtos: Dtos11, Utils: Utils6 } = Ludex;
var { Object: O22 } = Utils6;
var _GetMatchCustomDataHandler = class _GetMatchCustomDataHandler extends BaseHandler_default {
  async processAsync(matchState) {
    super.processAsync(matchState);
    const extraData = await this.getMatchCustomData$(matchState);
    this.updateMatchCustomData$(matchState, extraData);
    await this.nextAsync$(matchState);
  }
  async getMatchCustomData$(matchState) {
    const { id } = matchState;
    if (!id) return {};
    const matchAPI = this.match$.api.getMatchAPI();
    const matchData = await matchAPI.getMatchDetailByIdAsync(id);
    return matchData?.extraData ?? {};
  }
  updateMatchCustomData$(matchState, extraData) {
    const dataMerged = O22.merge(matchState.customData, extraData);
    const customData = new Dtos11.Match.CustomData(dataMerged).toObject();
    matchState.customData = customData;
  }
};
__name(_GetMatchCustomDataHandler, "GetMatchCustomDataHandler");
var GetMatchCustomDataHandler = _GetMatchCustomDataHandler;
var GetMatchCustomDataHandler_default = GetMatchCustomDataHandler;

// extensions/ludex/src/plugins/match/handlers/match/SetMatchCustomDataHandler.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Dtos: Dtos12, Utils: Utils7 } = Ludex;
var { Object: O23 } = Utils7;
var _SetMatchCustomDataHandler = class _SetMatchCustomDataHandler extends BaseHandler_default {
  payload$;
  constructor(concrete, payload) {
    super(concrete);
    this.payload$ = payload;
  }
  async processAsync(matchState) {
    super.processAsync(matchState);
    this.updateMatchCustomData$(matchState);
    await this.nextAsync$(matchState);
  }
  updateMatchCustomData$(matchState) {
    const customDataMerged = O23.merge(matchState.customData, this.payload$);
    const customData = new Dtos12.Match.CustomData(customDataMerged).toObject();
    matchState.customData = customData;
  }
};
__name(_SetMatchCustomDataHandler, "SetMatchCustomDataHandler");
var SetMatchCustomDataHandler = _SetMatchCustomDataHandler;
var SetMatchCustomDataHandler_default = SetMatchCustomDataHandler;

// extensions/ludex/src/plugins/match/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var initState6 = {
  id: null,
  mode: null,
  status: null,
  startAt: 0,
  finishAt: 0,
  profiles: {},
  customData: __spreadValues({}, DefaultCustomData_default)
};
var state_default6 = initState6;

// extensions/ludex/src/plugins/match/MatchPlugin.ts
var { Configs: Configs2 } = Ludex;
var _MatchPlugin = class _MatchPlugin extends Ludex.Plugins.BasePlugin {
  base$;
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
    this.createMatchData$();
    this.createAPIHandler$();
    this.createBaseConcrete$();
    this.createConcreteFlows$();
    this.createConcreteHandlers$();
  }
  setUseCPUProfile(enable) {
    this.useCPUProfile = enable;
  }
  createMatchData$() {
    const { storage } = this.codex;
    storage.addStorage("match", state_default6);
  }
  getMatchState() {
    const { storage } = this.codex;
    return storage.getStorage("match");
  }
  createBaseConcrete$() {
    this.base$ = new BaseConcrete_default(this.codex, this);
  }
  createConcreteFlows$() {
    this.createGroupFlows$();
    this.createSingleFlows$();
    this.createContextFlows$();
    this.createStrategyFlows$();
    this.createChallengeFlows$();
    this.createTournamentFlows$();
  }
  createConcreteHandlers$() {
    this.handler = {
      setProfileData: /* @__PURE__ */ __name(async (payload) => {
        const handler = new SetProfileDataHandler_default(this.base$, payload);
        await this.processHandlerAsync$(handler);
      }, "setProfileData"),
      setMatchCustomData: /* @__PURE__ */ __name(async (payload) => {
        const handler = new SetMatchCustomDataHandler_default(this.base$, payload);
        await this.processHandlerAsync$(handler);
      }, "setMatchCustomData"),
      getMatchCustomData: /* @__PURE__ */ __name(async () => {
        const handler = new GetMatchCustomDataHandler_default(this.base$);
        await this.processHandlerAsync$(handler);
      }, "getMatchCustomData"),
      setLeaderboardScore: /* @__PURE__ */ __name(async (payload) => {
        const handler = new SetLeaderboardScoreHandler_default(this.base$, payload);
        await this.processHandlerAsync$(handler);
      }, "setLeaderboardScore")
    };
  }
  createAPIHandler$() {
    const APIConfig = {
      appId: Configs2.AppId,
      matchAPIHost: Configs2.ApiHost
    };
    this.api = new APIHandler_default(APIConfig);
  }
  createGroupFlows$() {
    this.group = {
      join: new JoinGroupConcrete_default(this.codex, this),
      start: new StartGroupConcrete_default(this.codex, this),
      finish: new FinishGroupConcrete_default(this.codex, this)
    };
  }
  createSingleFlows$() {
    this.single = {
      start: new StartSingleConcrete_default(this.codex, this),
      finish: new FinishSingleConcrete_default(this.codex, this)
    };
  }
  createStrategyFlows$() {
    this.strategy = {
      start: new StartStrategyConcrete_default(this.codex, this),
      finish: new FinishStrategyConcrete_default(this.codex, this)
    };
  }
  createContextFlows$() {
    this.context = {
      choose: new ChooseContextConcrete_default(this.codex, this)
    };
  }
  createChallengeFlows$() {
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
  createTournamentFlows$() {
    this.tournament = {
      join: new JoinTournamentConcrete_default(this.codex, this),
      create: new CreateTournamentConcrete_default(this.codex, this),
      finish: new FinishTournamentConcrete_default(this.codex, this),
      continue: new ContinueTournamentConcrete_default(this.codex, this)
    };
  }
  processHandlerAsync$(handler) {
    const matchState = this.getMatchState();
    return handler.processAsync(matchState);
  }
};
__name(_MatchPlugin, "MatchPlugin");
var MatchPlugin = _MatchPlugin;
var MatchPlugin_default = MatchPlugin;

// extensions/ludex/src/plugins/match/dtos/MatchCustomDataDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V27 } = Ludex.Utils;
var MESSAGE_INVALID5 = "is invalid";
var _MatchCustomDataDtos = class _MatchCustomDataDtos extends BaseDtos_default {
  setupData$(data) {
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
__name(_MatchCustomDataDtos, "MatchCustomDataDtos");
var MatchCustomDataDtos = _MatchCustomDataDtos;
MatchCustomDataDtos.makeStrict();
MatchCustomDataDtos.addDefaults(DefaultCustomData_default);
var MatchCustomDataDtos_default = MatchCustomDataDtos;

// extensions/ludex/src/plugins/match/dtos/MatchProfileDtos.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V28 } = Ludex.Utils;
var MESSAGE_INVALID6 = "is invalid";
var _MatchProfileDtos = class _MatchProfileDtos extends BaseDtos_default {
  setupData$(data) {
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
__name(_MatchProfileDtos, "MatchProfileDtos");
var MatchProfileDtos = _MatchProfileDtos;
MatchProfileDtos.addDefaults({
  id: "10",
  name: "Your Friend",
  photo: null,
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

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/player/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/player/PlayerPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/player/api/player.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Utils: { Object: O24 },
  Configs: { ApiHost }
} = Ludex;
var getUrl = /* @__PURE__ */ __name(() => {
  let url = "players";
  if (GameSDK.isGameSDK("MsGames")) {
    url += "?platform=ms-games";
  } else if (GameSDK.isGameSDK("Yandex")) {
    url += "?platform=yandex";
  }
  return url;
}, "getUrl");
var updatePlayerProfileAsync = /* @__PURE__ */ __name(async (payload) => {
  if (!ApiHost) return {};
  const url = getUrl();
  const result3 = await post(url, payload, {}, ApiHost, 10);
  if (!O24.hasOwn(result3, "data")) return {};
  return result3.data || {};
}, "updatePlayerProfileAsync");

// extensions/ludex/src/plugins/player/PlayerPlugin.ts
var {
  Utils: { Array: A7, Object: O25, Valid: V29, Function: F4 },
  Configs: { AppId: AppId4 }
} = Ludex;
var _PlayerPlugin = class _PlayerPlugin extends Ludex.Plugins.BasePlugin {
  mutex$ = F4.mutex();
  isLoggedIn$ = false;
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
      this.isLoggedIn$ = !playerData.isFirstLogin;
    }
  }
  async syncDataToSDK() {
    const lock = await this.mutex$.use("syncDataToSDK");
    try {
      const playerData = this.getPlayerData();
      await GameSDK.player.setDataAsync(playerData);
    } catch (error) {
      console.warn(error);
    } finally {
      lock.release();
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
    if (!V29.isString(ASID) && "getASIDAsync" in GameSDK.player) {
      const [id, error] = await F4.handleAsync(GameSDK.player.getASIDAsync(), 1e4);
      if (!error && id) {
        ASID = id;
        storage.setStorageData("player", "ASID", ASID);
      }
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
    const newData = O25.merge(currentData, data);
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
    const connectedPlayersKeyed = O25.keyBy(connectedPlayersUnique, "playerId");
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
    if (O25.hasOwn(data, name2)) {
      return data[name2];
    }
    return null;
  }
  getGameData() {
    return this.getPlayerDataByKey("gameData");
  }
  getPlayerSetting(name2) {
    const settings2 = this.getPlayerSettings();
    if (O25.hasOwn(settings2, name2)) {
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
    return !this.isLoggedIn$;
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
__name(_PlayerPlugin, "PlayerPlugin");
var PlayerPlugin = _PlayerPlugin;
var PlayerPlugin_default = PlayerPlugin;

// extensions/ludex/src/plugins/player/dtos/PlayerData.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Dtos: Dtos13,
  Utils: { Valid: V30, Object: O26 }
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
var _PlayerDataDtos = class _PlayerDataDtos extends BaseDtos_default {
  processNestedDtos$(data) {
    if (!V30.isObject(data)) return;
    data.settings = new Dtos13.Player.Settings(data.settings).toObject();
    data.gameData = new Dtos13.Player.GameData(data.gameData).toObject();
  }
  setupData$(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateScore(score2) {
    if (!V30.isNumber(score2) || score2 < 0) {
      this.exception$("score", MESSAGE_INVALID7);
    }
  }
  validateSettings(settings2) {
    if (!V30.isObject(settings2)) {
      this.exception$("settings", MESSAGE_INVALID7);
    }
  }
  validateMissionsData(missionsData2) {
    if (!V30.isObject(missionsData2)) {
      this.exception$("missionsData", MESSAGE_INVALID7);
    }
    if (!("process" in missionsData2) || !V30.isObject(missionsData2.process)) {
      this.exception$("missionsData.process", MESSAGE_INVALID7);
    }
  }
  validateNotificationData(notificationData2) {
    if (!V30.isObject(notificationData2)) {
      this.exception$("notificationData", MESSAGE_INVALID7);
    }
    if (!("D1" in notificationData2) || !V30.isObject(notificationData2.D1)) {
      this.exception$("notificationData.D1", MESSAGE_INVALID7);
    }
    if (!("D2" in notificationData2) || !V30.isObject(notificationData2.D2)) {
      this.exception$("notificationData.D2", MESSAGE_INVALID7);
    }
    if (!("D3" in notificationData2) || !V30.isObject(notificationData2.D3)) {
      this.exception$("notificationData.D3", MESSAGE_INVALID7);
    }
    if (!("D4" in notificationData2) || !V30.isObject(notificationData2.D4)) {
      this.exception$("notificationData.D4", MESSAGE_INVALID7);
    }
    if (!("D5" in notificationData2) || !V30.isObject(notificationData2.D5)) {
      this.exception$("notificationData.D5", MESSAGE_INVALID7);
    }
    if (!("D6" in notificationData2) || !V30.isObject(notificationData2.D6)) {
      this.exception$("notificationData.D6", MESSAGE_INVALID7);
    }
    if (!("D7" in notificationData2) || !V30.isObject(notificationData2.D7)) {
      this.exception$("notificationData.D7", MESSAGE_INVALID7);
    }
  }
  validateGameData(gameData2) {
    if (!V30.isObject(gameData2)) {
      this.exception$("gameData", MESSAGE_INVALID7);
    }
  }
  validateIsFirstLogin(isFirstLogin2) {
    if (!V30.isBoolean(isFirstLogin2)) {
      this.exception$("isFirstLogin", MESSAGE_INVALID7);
    }
  }
  validateDailyRewardedData(dailyRewardedData2) {
    if (!V30.isObject(dailyRewardedData2)) {
      this.exception$("dailyRewardedData", MESSAGE_INVALID7);
    }
  }
  validateLastCallSwitchGame(lastCallSwitchGame2) {
    if (!V30.isNumber(lastCallSwitchGame2)) {
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
__name(_PlayerDataDtos, "PlayerDataDtos");
var PlayerDataDtos = _PlayerDataDtos;
PlayerDataDtos.addDefaults({
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V31 } = Ludex.Utils;
var { level, coins } = state_default.data.gameData;
var _PlayerGameDataDtos = class _PlayerGameDataDtos extends BaseDtos_default {
  setupData$(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateLevel(level2) {
    if (!V31.isNumber(level2) || level2 < 0) {
      this.exception$("level", "is invalid");
    }
  }
  validateCoins(coins2) {
    if (!V31.isNumber(coins2) || coins2 < 0) {
      this.exception$("coins", "is invalid");
    }
  }
  toObject() {
    return super.toObject();
  }
};
__name(_PlayerGameDataDtos, "PlayerGameDataDtos");
var PlayerGameDataDtos = _PlayerGameDataDtos;
PlayerGameDataDtos.addDefaults({
  level,
  coins
});
var PlayerGameData_default = PlayerGameDataDtos;

// extensions/ludex/src/plugins/player/dtos/PlayerSettings.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { Valid: V32 } = Ludex.Utils;
var { sound, music, vibrate, language } = state_default.data.settings;
var MESSAGE_INVALID8 = "is invalid";
var _PlayerSettingsDtos = class _PlayerSettingsDtos extends BaseDtos_default {
  setupData$(data) {
    this.lazySetupData$(data);
  }
  validateStructure$(data) {
    this.lazyValidateStructure$(data);
  }
  validateData$(data) {
    this.lazyValidateData$(data);
  }
  validateSound(sound2) {
    if (!V32.isBoolean(sound2)) {
      this.exception$("sound", MESSAGE_INVALID8);
    }
  }
  validateMusic(music2) {
    if (!V32.isBoolean(music2)) {
      this.exception$("music", MESSAGE_INVALID8);
    }
  }
  validateVibrate(vibrate2) {
    if (!V32.isBoolean(vibrate2)) {
      this.exception$("vibrate", MESSAGE_INVALID8);
    }
  }
  validateLanguage(language2) {
    if (!V32.isString(language2) || !language2) {
      this.exception$("language", MESSAGE_INVALID8);
    }
  }
  toObject() {
    return super.toObject();
  }
};
__name(_PlayerSettingsDtos, "PlayerSettingsDtos");
var PlayerSettingsDtos = _PlayerSettingsDtos;
PlayerSettingsDtos.addDefaults({
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
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/profile/ProfilePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/profile/api/ProfileAPI.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Configs: { ApiHost: ApiHost2, Mockup: Mockup2 },
  Utils: { Object: O27, String: S7 }
} = Ludex;
var _ProfileAPI = class _ProfileAPI {
  mockAPI$;
  async initMockAPI$() {
    if (this.mockAPI$) return;
    const ProfileAPIMock = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
    default;
    if (typeof ProfileAPIMock !== "function") {
      throw new Error("Cannot load ProfileAPIMock");
    }
    this.mockAPI$ = new ProfileAPIMock();
  }
  async getPlayersAsync(payload) {
    const params = S7.params(payload);
    let result3;
    if (Mockup2.Profile.Enabled) {
      await this.initMockAPI$();
      result3 = await this.mockAPI$.getPlayersAsync(payload);
    } else {
      if (!ApiHost2) return [];
      result3 = await get(`players?${params}`, {}, ApiHost2);
    }
    if (!O27.hasOwn(result3, "data") || !Array.isArray(result3.data)) return [];
    return result3.data;
  }
};
__name(_ProfileAPI, "ProfileAPI");
var ProfileAPI = _ProfileAPI;
var ProfileAPI_default = ProfileAPI;

// extensions/ludex/src/plugins/profile/state.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var initState7 = {
  profiles: {},
  profileIds: []
};
var state_default7 = initState7;

// extensions/ludex/src/plugins/profile/ProfilePlugin.ts
var { Utils: Utils8, Dtos: Dtos14 } = Ludex;
var { Array: A8, Valid: V33, Object: O28, Function: F5 } = Utils8;
var _ProfilePlugin = class _ProfilePlugin extends Ludex.Plugins.BasePlugin {
  profileAPI$ = new ProfileAPI_default();
  init() {
    const { storage } = this.codex;
    storage.addStorage("profile", state_default7);
  }
  async requestProfiles(playerIds) {
    const profileIds = this.getProfileIds();
    const needPlayerIds = A8.difference(playerIds, profileIds);
    if (needPlayerIds.length < 1) return;
    const playerIdsChunks = A8.chunk(needPlayerIds, 400);
    const profilePromises = playerIdsChunks.map((playerIds2) => this.profileAPI$.getPlayersAsync({ playerIds: playerIds2 }));
    const profilesResponses = await F5.allSettled(profilePromises);
    const result3 = profilesResponses.reduce((acc, response) => {
      if (response.status === "fulfilled") {
        return acc.concat(response.value);
      }
      return acc;
    }, []);
    if (!this.validateProfilesResponse$(result3)) return;
    const profiles = this.convertToProfiles$(result3);
    this.setProfiles$(profiles);
  }
  getProfile(playerId2) {
    const profiles = this.getProfiles();
    const profile = profiles[playerId2];
    return profile ?? null;
  }
  getProfiles() {
    const { storage } = this.codex;
    return storage.getStorageData("profile", "profiles") ?? state_default7.profiles;
  }
  setProfiles$(profiles) {
    const { storage } = this.codex;
    storage.setStorageData("profile", "profiles", profiles);
    storage.setStorageData("profile", "profileIds", Object.keys(profiles));
  }
  getProfileIds() {
    const { storage } = this.codex;
    return storage.getStorageData("profile", "profileIds") ?? [];
  }
  validateProfilesResponse$(profiles) {
    if (!Array.isArray(profiles)) return false;
    if (profiles.length < 1) return false;
    return true;
  }
  convertToProfiles$(result3) {
    const profiles = {};
    for (const data of result3) {
      if (!O28.hasOwn(data, "playerId")) continue;
      if (!V33.isString(data.playerId)) continue;
      profiles[data.playerId] = new Dtos14.Player.Info(data).toObject();
    }
    return profiles;
  }
};
__name(_ProfilePlugin, "ProfilePlugin");
var ProfilePlugin = _ProfilePlugin;
var ProfilePlugin_default = ProfilePlugin;

// extensions/ludex/src/plugins/profile/index.ts
var profile_default = ProfilePlugin_default;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/plugins/storage/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/storage/StoragePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var gameName2 = "Tile-Connect-Deluxe";
var {
  Utils: { Object: O29, Valid: V34, Browser: B4 }
} = Ludex;
var _StoragePlugin = class _StoragePlugin extends Ludex.Plugins.BasePlugin {
  storages$;
  storageLocalKeys$ = {};
  constructor(game) {
    super(game);
    this.storages$ = {};
  }
  async addStorage(name2, initState8, useWebStorage = false) {
    this.storages$[name2] = initState8;
    if (useWebStorage) {
      await this.initFromWebStorage$(name2, initState8);
    }
    console.debug("addStorage", name2, initState8);
  }
  async initFromWebStorage$(name2, initState8) {
    this.storageLocalKeys$[name2] = true;
    const data = await B4.getIndexedDB(`${gameName2}_S_${name2}`);
    if (!V34.isObject(data)) return;
    const keys = Object.keys(initState8);
    for (const key of keys) {
      if (!O29.hasOwn(data, key)) continue;
      if (typeof initState8[key] !== typeof data[key]) continue;
      this.setStorageData(name2, key, data[key]);
    }
  }
  initStorageData(storage, field, initData) {
    this.storages$[storage][field] = initData;
  }
  setStorageData(storage, field, data) {
    let nextData;
    if (V34.isObject(data)) {
      const currentData = this.getStorageData(storage, field);
      nextData = O29.merge(currentData, data);
    } else {
      nextData = data;
    }
    this.storages$[storage][field] = nextData;
  }
  getStorageData(storage, field) {
    const data = this.getStorage(storage);
    return data[field];
  }
  getStorage(storage) {
    return this.storages$[storage];
  }
  async updateToWebStorage(storage, flushMemory = false) {
    if (!this.storageLocalKeys$[storage]) return;
    requestAnimationFrame(() => this.saveToWebStorage$(storage, flushMemory));
  }
  async saveToWebStorage$(storage, flushMemory = false) {
    const data = this.getStorage(storage);
    await B4.setIndexedDB(`${gameName2}_S_${storage}`, data);
    if (flushMemory) {
      O29.assign(this.storages$[storage], {});
    }
  }
};
__name(_StoragePlugin, "StoragePlugin");
var StoragePlugin = _StoragePlugin;
var StoragePlugin_default = StoragePlugin;

// extensions/ludex/src/plugins/storage/index.ts
var storage_default = StoragePlugin_default;

// extensions/ludex/src/plugins/visibility/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/visibility/VisibilityPlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _VisibilityPlugin = class _VisibilityPlugin extends Ludex.Plugins.BasePlugin {
  isVisible$ = true;
  browserPrefixes$ = ["moz", "ms", "o", "", "webkit"];
  init() {
    const browserPrefix = this.getBrowserPrefix$();
    const visibilityEventName = this.getVisibilityEvent$(browserPrefix);
    const basicEvents = [visibilityEventName, "focus", "blur"];
    for (const event of basicEvents) {
      this.registerEvent$(window, event);
      this.registerEvent$(document, event);
    }
    if (GameSDK.extra) {
      if ("onPause" in GameSDK.extra) {
        GameSDK.extra.onPause(() => this.handleVisibilityChange$("blur"));
      }
      if ("onResume" in GameSDK.extra) {
        GameSDK.extra.onResume(() => this.handleVisibilityChange$("focus"));
      }
    }
    this.registerEvent$(window, "pageshow");
    this.registerEvent$(window, "pagehide");
    window.addEventListener(
      "message",
      (event) => {
        if (event.data === "nativePause" || event.data === "nativeResume") {
          this.handleVisibilityChange$(event.data);
        }
      },
      false
    );
  }
  isGameVisible() {
    return this.isVisible$;
  }
  getHiddenPropertyName$(prefix) {
    return prefix ? `${prefix}Hidden` : "hidden";
  }
  getVisibilityEvent$(prefix) {
    return `${prefix || ""}visibilitychange`;
  }
  getBrowserPrefix$() {
    for (const element of this.browserPrefixes$) {
      if (this.getHiddenPropertyName$(element) in document) {
        return element;
      }
    }
    return "";
  }
  onVisibleEvent$() {
    if (this.isVisible$) return;
    this.isVisible$ = true;
    this.codex.event.emit(Ludex.Events.VISIBILITY_VISIBLE);
  }
  onHiddenEvent$() {
    if (!this.isVisible$) return;
    this.isVisible$ = false;
    this.codex.event.emit(Ludex.Events.VISIBILITY_HIDDEN);
  }
  /**
   * Registers an event listener on the given target for visibility changes.
   * @param target - The event target (window or document).
   * @param eventName - The event name to listen for.
   */
  registerEvent$(target, eventName) {
    target.addEventListener(
      eventName,
      () => {
        this.handleVisibilityChange$(eventName);
      },
      false
    );
  }
  handleVisibilityChange$ = /* @__PURE__ */ __name((event) => {
    const eventHandlerMap = {
      focus: this.onVisibleEvent$.bind(this),
      pageshow: this.onVisibleEvent$.bind(this),
      nativeResume: this.onVisibleEvent$.bind(this),
      blur: this.onHiddenEvent$.bind(this),
      pagehide: this.onHiddenEvent$.bind(this),
      nativePause: this.onHiddenEvent$.bind(this)
    };
    if (eventHandlerMap[event]) {
      eventHandlerMap[event]();
      return;
    }
    if (document.visibilityState) {
      if (document.visibilityState === "hidden") {
        this.onHiddenEvent$();
      } else {
        this.onVisibleEvent$();
      }
      return;
    }
    const browserPrefix = this.getBrowserPrefix$();
    const hiddenPropertyName = this.getHiddenPropertyName$(browserPrefix);
    if (hiddenPropertyName in document) {
      const isHidden = document[hiddenPropertyName];
      if (isHidden) {
        this.onHiddenEvent$();
      } else {
        this.onVisibleEvent$();
      }
    }
  }, "handleVisibilityChange$");
};
__name(_VisibilityPlugin, "VisibilityPlugin");
var VisibilityPlugin = _VisibilityPlugin;
var VisibilityPlugin_default = VisibilityPlugin;

// extensions/ludex/src/plugins/visibility/index.ts
var visibility_default = VisibilityPlugin_default;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/ads/BannerAdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();

// extensions/ludex/src/plugins/ads/instances/BannerInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var _BannerInstance = class _BannerInstance extends AdInstance_default2 {
  async loadAsync() {
    this.exception$("This method is not implemented");
  }
  async showAsync() {
    this.exception$("This method is not implemented");
  }
  async hideAsync() {
    this.exception$("This method is not implemented");
  }
};
__name(_BannerInstance, "BannerInstance");
var BannerInstance = _BannerInstance;
var BannerInstance_default = BannerInstance;

// extensions/ludex/src/ads/BannerAdInstance.ts
var { Status } = Ludex.Plugins.Ads;
var _BannerAdInstance = class _BannerAdInstance extends BannerInstance_default {
  async loadAsync() {
    await GameSDK.loadBannerAdAsync(this.placementId);
    this.setStatus(Status.FILLED);
  }
  async showAsync() {
    this.setStatus(Status.SHOWING);
  }
  async hideAsync() {
    await GameSDK.hideBannerAdAsync(this.placementId);
    this.setStatus(Status.IDLE);
  }
};
__name(_BannerAdInstance, "BannerAdInstance");
var BannerAdInstance = _BannerAdInstance;
var BannerAdInstance_default = BannerAdInstance;

// extensions/ludex/src/codex/index.ts
init_empty_script();

// extensions/ludex/src/ads/NormalAdInstance.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var {
  Utils: { Object: O30 },
  Plugins: {
    Ads: { Status: Status2, Types: Types2, AdError: AdError2, AdInstance: AdInstance3 }
  }
} = Ludex;
var _NormalAdInstance = class _NormalAdInstance extends AdInstance3 {
  service$;
  instance$;
  instanceQueue$ = [];
  constructor(type, placementId) {
    super(type, placementId);
    this.service$ = GameSDK.getSDKName();
    this.instance$ = null;
  }
  setInstance(instance) {
    if (!instance) {
      this.setStatus(Status2.IDLE);
    }
    this.instance$ = instance;
  }
  async loadAsync() {
    console.debug("AdInstance", "loadAsync called", {
      type: this.type,
      status: this.status,
      service: this.service$,
      placementId: this.placementId
    });
    if (this.instance$ && this.status === Status2.FILLED) return;
    if (this.status !== Status2.IDLE) {
      throw new AdError2("AD_NOT_READY", "Ad is not ready.");
    }
    try {
      const instance = await this.createInstanceByType$(this.type);
      this.setInstance(instance);
      if (this.instance$ === null) {
        throw new AdError2("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
      }
      this.setStatus(Status2.LOADING);
      await this.instance$.loadAsync();
      this.setStatus(Status2.FILLED);
      console.debug("AdInstance", "loadAsync success", {
        type: this.type,
        status: this.status,
        service: this.service$
      });
      this.logAdLoad$();
    } catch (error) {
      console.warn("AdInstance", "loadAsync failed", {
        type: this.type,
        status: this.status,
        service: this.service$
      });
      console.warn(error);
      this.setStatus(Status2.IDLE);
      if (error instanceof Object && "code" in error) {
        if (error.code === "INVALID_PARAM") {
          this.setInstance(null);
        }
      }
      if (this.instance$) {
        this.pushInstanceToQueue$(this.instance$);
      }
      self.codex.analytics?.loadAdFail({
        type: this.type,
        service: this.service$
      });
      throw error;
    }
  }
  async showAsync() {
    console.debug("AdInstance", "showAsync called", {
      type: this.type,
      status: this.status,
      service: this.service$
    });
    if (this.status !== Status2.FILLED) {
      throw new AdError2("AD_NOT_FILLED", "Ad is not filled.");
    }
    if (this.instance$ === null) {
      throw new AdError2("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
    }
    let logShowed = false;
    try {
      this.setStatus(Status2.SHOWING);
      self.codex.analytics?.showingAd({
        type: this.type,
        service: this.service$
      });
      await this.instance$.showAsync();
      logShowed = true;
      this.setInstance(null);
      console.debug("AdInstance", "showAsync success", {
        type: this.type,
        status: this.status,
        service: this.service$
      });
    } catch (error) {
      console.warn("AdInstance", "showAsync failed", {
        type: this.type,
        status: this.status,
        service: this.service$,
        error
      });
      if (O30.hasOwn(error, "code")) {
        if (error.code === "AD_NOT_LOADED") {
          this.setStatus(Status2.IDLE);
        }
        const codeList = ["INVALID_PARAM", "INVALID_OPERATION", "USER_INPUT"];
        if (codeList.indexOf(`${error.code}`) > -1) {
          this.setInstance(null);
        }
        if (error.code === "USER_INPUT") {
          logShowed = true;
        }
      }
      if (this.status === Status2.SHOWING) {
        this.setInstance(null);
      }
      throw error;
    } finally {
      if (logShowed) {
        this.logAdShown$();
      } else {
        self.codex.analytics?.showAdFail({
          type: this.type,
          service: this.service$
        });
      }
    }
  }
  async createInstanceByType$(type) {
    try {
      return await this.getAdInstanceByType$(type);
    } catch (error) {
      if (!O30.hasOwn(error, "code")) return null;
      if (error.code === "ADS_TOO_MANY_INSTANCES") {
        return this.getAdInstanceFailed$();
      }
      return null;
    }
  }
  async getAdInstanceByType$(type) {
    switch (type) {
      case Types2.REWARDED_VIDEO:
        return GameSDK.getRewardedVideoAsync(this.placementId);
      case Types2.INTERSTITIAL:
        return GameSDK.getInterstitialAdAsync(this.placementId);
      case Types2.REWARDED_INTERSTITIAL:
        return GameSDK.getRewardedInterstitialAsync(this.placementId);
      default:
        return null;
    }
  }
  getAdInstanceFailed$() {
    if ("canLoadAd" in GameSDK.extra) {
      for (const instance of this.instanceQueue$) {
        if (GameSDK.extra.canLoadAd(instance)) {
          this.instanceQueue$.splice(this.instanceQueue$.indexOf(instance), 1);
          return instance;
        }
      }
    } else {
      return this.instanceQueue$.shift() || null;
    }
    return null;
  }
  logAdLoad$() {
    switch (this.type) {
      case Types2.INTERSTITIAL:
        self.codex.analytics?.loadInterstitialAd({
          service: this.service$
        });
        break;
      case Types2.REWARDED_VIDEO:
        self.codex.analytics?.loadRewardedVideoAd({
          service: this.service$
        });
        break;
      case Types2.REWARDED_INTERSTITIAL:
        self.codex.analytics?.loadRewardedInterstitialAd({
          service: this.service$
        });
        break;
    }
  }
  logAdShown$() {
    switch (this.type) {
      case Types2.INTERSTITIAL:
        self.codex.analytics?.showInterstitialAd({
          service: this.service$
        });
        break;
      case Types2.REWARDED_VIDEO:
        self.codex.analytics?.showRewardedVideoAd({
          service: this.service$
        });
        break;
      case Types2.REWARDED_INTERSTITIAL:
        self.codex.analytics?.showRewardedInterstitialAd({
          service: this.service$
        });
        break;
    }
  }
  pushInstanceToQueue$(instance) {
    this.instanceQueue$.push(instance);
  }
};
__name(_NormalAdInstance, "NormalAdInstance");
var NormalAdInstance = _NormalAdInstance;
var NormalAdInstance_default = NormalAdInstance;

// extensions/ludex/src/codex/index.ts
init_empty_script();
init_empty_script();
init_empty_script();
init_empty_script();
init_empty_script();

// extensions/ludex/src/analytics/GoogleAnalytics.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_console();
init_track_events();
init_track_errors();
init_GameSDK2();
init_progress();
init_init_core();
init_navigator();
init_performance();
init_browser();
init_init();
init_google_analytics();
var { BaseAnalytics: BaseAnalytics2, Events: Events8 } = Ludex.Plugins.Analytics;
var excludeEvents = [Events8.SCREEN_OPEN];
var {
  Utils: { Array: A9 }
} = Ludex;
var _GoogleAnalytics = class _GoogleAnalytics extends BaseAnalytics2 {
  constructor(ld, options) {
    super(ld, "GoogleAnalytics", __spreadProps(__spreadValues({}, options), { color: "#E35335" }));
  }
  processEvent$(event, payload) {
    if (A9.has(excludeEvents, event)) return;
    this.customEvent$(event, payload);
    gtag("event", event, payload);
  }
  customEvent$(event, payload) {
    switch (event) {
      case Events8.AD_LOAD:
      case Events8.AD_LOAD_FAILED:
      case Events8.AD_SHOW:
      case Events8.AD_SHOW_FAILED:
      case Events8.AD_SHOWING:
      case Events8.USE_ITEM:
      case Events8.EARN_ITEM:
        this.addLevelName$(payload);
        break;
      default:
        break;
    }
  }
  addLevelName$(payload) {
    if (!payload) return;
    if (!this.codex?.match) return;
    const matchState = this.codex.match.getMatchState();
    const level2 = matchState.customData.level;
    if (!level2 || level2 < 0) return;
    payload.level_name = this.getLevelName(level2);
  }
};
__name(_GoogleAnalytics, "GoogleAnalytics");
var GoogleAnalytics = _GoogleAnalytics;
var GoogleAnalytics_default = GoogleAnalytics;

// extensions/ludex/src/codex/index.ts
init_empty_script();
init_empty_script();
init_empty_script();
init_empty_script();
init_accessBlocker();
var NODE_ENV = "development";
var BUILD_VERSION = 9;
var {
  Dtos: Dtos15,
  Events: Events9,
  Configs: {
    AppId: AppId5,
    Ads,
    Context: Context4,
    Debugger,
    Firebase,
    Analytics: Analytics3,
    Notification,
    RemoteConfig,
    PerformanceMonitor,
    AdaptivePerformance
  },
  Plugins: Plugins2,
  Utils: { Device: D2, Object: O31, Json: J5, String: S8, Valid: V35, Time: T2, Function: F6, Mark: Mark2 }
} = Ludex;
var _MagicCodex = class _MagicCodex extends codex_default {
  markName$ = "Core Initialize";
  modulePlugins$ = [];
  // ? Use in production mode, console
  getBuildVersion() {
    return parseInt(BUILD_VERSION, 10) || 0;
  }
  async boot() {
    console.groupEnd();
    console.groupCollapsed("\u{1F9EC} Ludex Boot");
    super.boot();
    this.addPlugins$();
    this.initEventPlugin$();
    this.event.emit(Events9.CORE_BOOTING);
    this.validateCoreFlow$();
    this.initFirebasePlugin$();
    this.initMarkCoreInitialize$();
    if (Analytics3.Enabled) {
      this.mark?.putAttr(this.markName$, "Step", "Init Analytics");
      this.initGoogleAnalytics$();
      this.initClarityAnalytics$();
      this.initFirebaseAnalytics$();
      this.initYandexAnalytics$();
      this.initXiaomiAnalytics$();
      this.initFacebookAnalytics$();
      this.initPlayableAnalytics$();
      this.initTranssionH5Analytics$();
    }
    this.mark?.putAttr(this.markName$, "Step", "Init Plugins");
    this.initAds$();
    this.initMatchPlugin$();
    this.initRemoteConfig$();
    this.mark?.putAttr(this.markName$, "Step", "Load Lazy Plugins");
    if (!V35.isDebugger()) {
      this.event.on(Events9.MODULE_PLUGIN_READY, this.handleProtectGameInstance$);
    }
    this.addMonitorPlugin$().then(this.initMonitorErrorPlugin$);
    this.addCanvasRecorderPlugin$().then(this.initCanvasRecorderPlugin$);
    this.addAdaptivePerformancePlugin$().then(this.initAdaptivePerformancePlugin$);
    this.addInputRecorderPlugin$().then(this.initInputRecorderPlugin$);
    this.mark?.putAttr(this.markName$, "Step", "Load Dev Plugins");
    this.event.catchUp(Events9.GAME_SDK_READY, this.addDevPlugins$);
    console.groupEnd();
  }
  async validateCoreFlow$() {
    if (false) return;
    await T2.sleepAsync(5e3);
    const eventInfo = this.event.getEventListeners(Events9.CORE_BOOTING);
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
    this.mark?.putAttr(this.markName$, "Step", "Core Start");
    this.event.emit(Events9.CORE_STARTING);
    this.mark?.putAttr(this.markName$, "Step", "Request Token");
    await this.auth?.requestToken();
    this.mark?.putAttr(this.markName$, "Step", "Init States");
    await this.initState$();
    this.mark?.putAttr(this.markName$, "Step", "Process Player Profile");
    this.processPlayerProfile$();
    if (GameSDK.isGameSDK("FacebookInstant") && D2.isIOS()) {
      this.event.catchUp(Events9.GAME_SDK_STARTED, this.processContextSession$);
    } else {
      await this.processContextSession$();
    }
    if (false) {
      console.info("Ludex start completed");
      console.info("Your game is ready to load!");
    }
    this.mark?.putAttr(this.markName$, "Step", "Core Ready");
    this.mark?.putAttr(this.markName$, "Success", "true");
    this.event.emit(Events9.CORE_READY);
    this.mark?.stop(this.markName$);
  }
  processContextSession$ = /* @__PURE__ */ __name(async () => {
    if (!Context4.Enabled) return;
    try {
      this.mark?.putAttr(this.markName$, "Step", "Process Context Payload");
      await this.context?.detectContextSessionType();
      this.context?.detectContextGameMode();
      const contextSessionType = this.context?.getSessionContextType();
      this.mark?.putAttr(this.markName$, "Context Mode", contextSessionType ?? "unknown");
      console.debug("Ludex start completed", contextSessionType);
    } catch (error) {
      console.warn("Error processing context session:", error);
      this.monitorError?.sendException(F6.toError(error));
    }
  }, "processContextSession$");
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
  addPlugins$() {
    this.installPlugin$("Storage", storage_default);
    this.installPlugin$("Event", event_default);
    this.installPlugin$("Ads", ads_default);
    this.installPlugin$("Auth", auth_default);
    this.installPlugin$("Audio", audio_default);
    this.installPlugin$("Match", match_default);
    this.installPlugin$("Player", player_default);
    this.installPlugin$("Profile", profile_default);
    this.installPlugin$("Context", context_default2);
    this.installPlugin$("Language", language_default);
    this.installPlugin$("Missions", empty_script_default);
    this.installPlugin$("Analytics", analytics_default);
    this.installPlugin$("Visibility", visibility_default);
    this.installPlugin$("Leaderboard", leaderboards_default);
    this.installPlugin$("DailyRewards", empty_script_default);
    this.installPlugin$("FrameCapture", frame_capture_default);
    this.installPlugin$("RemoteConfig", empty_script_default);
    if ("Proxy" in window) {
      this.installPlugin$("Firebase", empty_script_default);
    }
  }
  installPlugin$(name2, plugin, isModule = false) {
    const property = S8.toCamelCase(S8.capitalize(name2));
    const isInstalled = this.plugins.install(name2, plugin, true, property);
    if (!isInstalled) return;
    if (name2 === "Storage") return;
    if (!isModule) {
      this.emitCorePluginReady$(name2);
    } else {
      this.emitModulePluginReady$(name2);
    }
  }
  async addMonitorPlugin$() {
    try {
      const { MonitorError } = Debugger;
      if (!MonitorError.Enabled) return;
      this.modulePlugins$.push("MonitorError");
      const MonitorErrorPlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof MonitorErrorPlugin !== "function") return;
      this.installPlugin$("MonitorError", MonitorErrorPlugin, true);
    } catch (error) {
      console.error("Error importing Monitor Error plugin:", error);
    }
  }
  async addCanvasRecorderPlugin$() {
    try {
      const { CanvasRecorder } = Debugger;
      if (!CanvasRecorder.Enabled) return;
      this.modulePlugins$.push("CanvasRecorder");
      const CanvasRecorderPlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof CanvasRecorderPlugin !== "function") {
        throw new Error("CanvasRecorderPlugin is not a function");
      }
      this.installPlugin$("CanvasRecorder", CanvasRecorderPlugin, true);
    } catch (error) {
      console.error("Error importing Canvas Recorder plugin:", error);
    }
  }
  async addAdaptivePerformancePlugin$() {
    try {
      if (!AdaptivePerformance.Enabled) return;
      this.modulePlugins$.push("AdaptivePerformance");
      const AdaptivePerformancePlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof AdaptivePerformancePlugin !== "function") return;
      this.installPlugin$("AdaptivePerformance", AdaptivePerformancePlugin, true);
    } catch (error) {
      console.error("Error importing Adaptive Performance plugin:", error);
    }
  }
  async addInputRecorderPlugin$() {
    try {
      const { InputRecorder } = Debugger;
      if (!InputRecorder.Enabled) return;
      this.modulePlugins$.push("InputRecorder");
      const InputRecorderPlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof InputRecorderPlugin !== "function") return;
      this.installPlugin$("InputRecorder", InputRecorderPlugin, true);
    } catch (error) {
      console.error("Error importing Input Recorder plugin:", error);
    }
  }
  addDevPlugins$ = /* @__PURE__ */ __name(() => {
    const { ListPlayerDevIds } = Debugger;
    const playerId2 = this.player?.getPlayerId();
    if (NODE_ENV !== "development" && playerId2 && ListPlayerDevIds.indexOf(playerId2) < 0) {
      console.warn("PlayerId is not in the list of dev IDs", playerId2);
      return;
    }
    this.addConsolePlugin$();
    this.addProfilerPlugin$();
  }, "addDevPlugins$");
  async addConsolePlugin$() {
    try {
      const { Console } = Debugger;
      if (!Console.Enabled || !Console.UseInGameConsole) return;
      this.modulePlugins$.push("Console");
      const ConsolePlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof ConsolePlugin !== "function") {
        throw new Error("ConsolePlugin is not a function");
      }
      this.installPlugin$("Console", ConsolePlugin, true);
      this.initConsolePlugin$();
    } catch (error) {
      console.error("Error importing Console plugin:", error);
    }
  }
  async addProfilerPlugin$() {
    try {
      const { Profiler } = Debugger;
      if (!Profiler.Enabled) return;
      this.modulePlugins$.push("Profiler");
      const ProfilerPlugin = (await Promise.resolve().then(() => (init_empty_script(), empty_script_exports))).
      default;
      if (typeof ProfilerPlugin !== "function") {
        throw new Error("ProfilerPlugin is not a function");
      }
      this.installPlugin$("Profiler", ProfilerPlugin, true);
      this.initProfilerPlugin$();
    } catch (error) {
      console.error("Error importing Profiler plugin:", error);
    }
  }
  emitCorePluginReady$(name2) {
    this.event.emit(CoreEvents_default.CORE_PLUGIN_READY, { name: name2 });
  }
  emitModulePluginReady$(name2) {
    this.event.emit(CoreEvents_default.MODULE_PLUGIN_READY, { name: name2 });
  }
  handleProtectGameInstance$ = /* @__PURE__ */ __name(() => {
    const eventCount = this.event.getEventEmitCount(CoreEvents_default.MODULE_PLUGIN_READY);
    const moduleCount = this.modulePlugins$.length;
    if (eventCount < moduleCount) return;
    window.codex = Object.freeze(window.codex);
    console.warn("window.codex", window.codex);
    accessBlocker_default(window, "codex");
  }, "handleProtectGameInstance$");
  initEventPlugin$() {
    const { EventLogging } = Debugger;
    if (!EventLogging.Enabled) return;
    this.event.enableLogEvent();
  }
  initMatchPlugin$() {
    if (!this.match) return;
    this.match.setUseCPUProfile(false);
  }
  initAds$() {
    if (!Ads.Enabled) return;
    this.ads?.configure(Ads);
    this.initGoogleAds$();
    this.initTranssionH5Ads$();
    this.initAdInstance$();
    this.analytics?.initAdEvent({
      adService: "platform",
      state: "loaded"
    });
  }
  async initGoogleAds$() {
    try {
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
  async initTranssionH5Ads$() {
    try {
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
  getAdInstanceByService$(service, isBanner = false) {
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
  initAdInstance$() {
    const { Types: AdsTypes } = Plugins2.Ads;
    const defaultDevice = "default";
    for (const option of Ads.InterstitialAdOptions) {
      const { PlacementId, AdService, DeviceOS = defaultDevice } = option;
      const instance = this.getAdInstanceByService$(AdService);
      if (!instance) continue;
      this.ads?.setAdInstance(AdsTypes.INTERSTITIAL, PlacementId, instance, DeviceOS);
    }
    for (const option of Ads.RewardedVideoAdOptions) {
      const { PlacementId, AdService, DeviceOS = defaultDevice } = option;
      const instance = this.getAdInstanceByService$(AdService);
      if (!instance) continue;
      this.ads?.setAdInstance(AdsTypes.REWARDED_VIDEO, PlacementId, instance, DeviceOS);
    }
    for (const option of Ads.RewardedInterstitialAdOptions) {
      const { PlacementId, AdService, DeviceOS = defaultDevice } = option;
      const instance = this.getAdInstanceByService$(AdService);
      if (!instance) continue;
      this.ads?.setAdInstance(AdsTypes.REWARDED_INTERSTITIAL, PlacementId, instance, DeviceOS);
    }
    const isBanner = true;
    for (const option of Ads.BannerDisplayAdOptions) {
      const { PlacementId, AdService, DeviceOS = defaultDevice } = option;
      const instance = this.getAdInstanceByService$(AdService, isBanner);
      if (!instance) continue;
      this.ads?.setAdInstance(AdsTypes.BANNER, PlacementId, instance, DeviceOS);
    }
  }
  async initState$() {
    try {
      const initiator = new StateInitiator_default(this);
      initiator.initContext();
      await initiator.initPlayer();
    } catch (error) {
      console.error("StateInitiator", error);
    }
  }
  initConsolePlugin$() {
    if (!this.console) return;
    this.console.configure();
  }
  initProfilerPlugin$() {
    if (!this.profiler) return;
    this.profiler.configure();
  }
  initCanvasRecorderPlugin$ = /* @__PURE__ */ __name(() => {
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
  }, "initCanvasRecorderPlugin$");
  initMonitorErrorPlugin$ = /* @__PURE__ */ __name(() => {
    if (!this.monitorError) return;
    const { MonitorError, ListPlayerDevIds } = Debugger;
    const { ApiKey, Service, TrackUser, FilterErrors } = MonitorError;
    const { playerId: playerId2, name: name2 } = this.player?.getPlayer() ?? {};
    if (playerId2 && ListPlayerDevIds.indexOf(playerId2) >= 0) return;
    window.disableSimpleTrackErrors?.();
    this.monitorError.configure({
      apiKey: ApiKey,
      service: Service,
      trackUser: TrackUser,
      releaseStage: NODE_ENV,
      buildVersion: `${BUILD_VERSION ?? 1}`
    });
    this.monitorError.setUser({ id: playerId2 ?? null, name: name2 ?? null });
    this.monitorError.addFilterErrors(FilterErrors);
    this.monitorError.initFeedbackTrackErrors();
    this.updateMonitorErrorUserAndMetadata$();
    this.processErrorsQueue$();
  }, "initMonitorErrorPlugin$");
  updateMonitorErrorUserAndMetadata$ = /* @__PURE__ */ __name(() => {
    this.event.catchUp(Events9.PLAYER_INFO_LOADED, this.processWhenPlayerInfoLoaded$);
  }, "updateMonitorErrorUserAndMetadata$");
  processErrorsQueue$ = /* @__PURE__ */ __name(() => {
    if (!this.monitorError) return;
    if (!Array.isArray(window.__errorQueue)) return;
    for (const error of window.__errorQueue) {
      if (error instanceof Error) {
        this.monitorError.sendException(error);
      } else {
        const errorObj = F6.toError(error);
        this.monitorError.sendException(errorObj);
      }
    }
    window.__errorQueue = null;
  }, "processErrorsQueue$");
  processWhenPlayerInfoLoaded$ = /* @__PURE__ */ __name(() => {
    if (!this.player) return;
    if (!this.monitorError) return;
    const { playerId: playerId2, name: name2 } = this.player.getPlayer();
    this.monitorError.setUser({
      id: playerId2,
      name: name2
    });
    this.monitorError.addMetadata({
      isFirstSession: this.player.isFirstSession()
    });
  }, "processWhenPlayerInfoLoaded$");
  initRemoteConfig$() {
    if (!this.remoteConfig) return;
    const config = J5.clone(RemoteConfig);
    this.remoteConfig.configure(config);
    this.event.on(CoreEvents_default.REQUEST_SAVE_CONFIG, this.handleSaveRemoteConfig$);
    this.event.on(CoreEvents_default.REQUEST_UPDATE_CONFIG, this.handleUpdateLudexConfig$);
    this.event.catchUp(CoreEvents_default.PLAYER_INFO_LOADED, this.handleStorageCurrentRemoteConfig$);
  }
  handleSaveRemoteConfig$ = /* @__PURE__ */ __name((data) => {
    try {
      const config = {
        [data.type]: data
      };
      this.player?.setPlayerDataByName("remoteConfig", config);
    } catch (error) {
      console.warn("handleSaveLudexConfig", error);
    }
  }, "handleSaveRemoteConfig$");
  handleUpdateLudexConfig$ = /* @__PURE__ */ __name((data) => {
    try {
      const { id, type } = data;
      if (type !== "Ludex") return;
      Ludex.Configs = O31.merge(Ludex.Configs, data.config);
      const { Ads: Ads2 } = Ludex.Configs;
      this.ads?.configure(Ads2);
      this.event.emit(CoreEvents_default.REMOTE_CONFIG_UPDATED, { id, type });
    } catch (error) {
      console.warn("handleUpdateLudexConfig", error);
    }
  }, "handleUpdateLudexConfig$");
  handleStorageCurrentRemoteConfig$ = /* @__PURE__ */ __name(() => {
    if (!this.player) return;
    if (!this.remoteConfig) return;
    const playerRemoteConfig = this.player.getPlayerDataByKey("remoteConfig");
    console.debug("playerRemoteConfig", J5.clone(playerRemoteConfig));
    if (!playerRemoteConfig) return;
    for (const key in playerRemoteConfig) {
      if (O31.hasOwn(playerRemoteConfig, key)) {
        const remoteConfig = playerRemoteConfig[key];
        const newRemoteConfig = J5.clone(remoteConfig);
        console.log("newRemoteConfig", newRemoteConfig);
        const remoteConfigValid = new Dtos15.RemoteConfig.Data(newRemoteConfig).toObject();
        console.debug("remoteConfigValid", remoteConfigValid);
        this.remoteConfig.setRemoteConfig(remoteConfigValid);
        this.remoteConfig.processUpdateConfig(remoteConfigValid.id, remoteConfigValid.type);
      }
    }
  }, "handleStorageCurrentRemoteConfig$");
  initFirebasePlugin$() {
    if (!Firebase.Enabled) return;
    if (!this.firebase) return;
    const config = J5.clone(Firebase);
    this.firebase.configure(config);
    Mark2.setService(this.firebase.services.performance);
  }
  get mark() {
    if (!PerformanceMonitor.CoreFlows) return null;
    return Mark2;
  }
  initMarkCoreInitialize$() {
    const mark = this.mark;
    if (!mark) return;
    mark.measure(this.markName$);
    mark.putAttr(this.markName$, "Build", `${BUILD_VERSION}`);
    mark.putAttr(this.markName$, "GameSDK", GameSDK.getSDKName());
    mark.putAttr(this.markName$, "Platform", GameSDK.getPlatform());
    mark.putAttr(this.markName$, "Success", "false");
    mark.start(this.markName$);
  }
  initAdaptivePerformancePlugin$ = /* @__PURE__ */ __name(() => {
    if (!this.adaptivePerformance) return;
    const config = J5.clone(AdaptivePerformance);
    this.adaptivePerformance.configure(config);
  }, "initAdaptivePerformancePlugin$");
  initInputRecorderPlugin$ = /* @__PURE__ */ __name(() => {
    if (!this.inputRecorder) return;
    const { InputRecorder } = Debugger;
    const config = J5.clone(InputRecorder);
    if (!config) {
      console.warn("Input Recorder is not configured");
      return;
    }
    this.inputRecorder.configure(config);
  }, "initInputRecorderPlugin$");
  async processPlayerProfile$() {
    try {
      if (!this.player) return;
      await this.player.syncProfileToServer();
      this.processAfterSyncProfile$();
    } catch (error) {
      console.warn("processPlayerProfile fail", error);
    }
  }
  processAfterSyncProfile$ = /* @__PURE__ */ __name(() => {
    if (!Notification.Enabled) return;
    this.updatePlayerProfileToNotificationService$();
  }, "processAfterSyncProfile$");
  async updatePlayerProfileToNotificationService$() {
    try {
      if (!this.player) return;
      const player = this.player.getPlayer();
      const { ASID, playerId: playerId2, locale: locale2 } = player;
      let isNEZP = false;
      if ("isNEZP" in GameSDK.extra) {
        isNEZP = GameSDK.extra.isNEZP();
      }
      if (!isNEZP && "isRestricted" in GameSDK.extra) {
        isNEZP = GameSDK.extra.isRestricted();
      }
      const profileData = {
        appId: AppId5,
        ASID,
        playerId: playerId2,
        locale: locale2,
        platform: GameSDK.getPlatform(),
        platformMode: isNEZP ? "NEZP" : "NORMAL"
      };
      await updatePlayerProfileNotificationAsync(profileData);
    } catch (error) {
      console.warn("updatePlayerProfileToNotificationService", error);
    }
  }
  initGoogleAnalytics$() {
    if (!this.analytics) return;
    const { Enabled: Enabled2, ConsoleLog } = Analytics3.GoogleAnalytics ?? {};
    if (!Enabled2) return;
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
  initClarityAnalytics$() {
    if (!this.analytics) return;
    const { Enabled: Enabled2, ConsoleLog } = Analytics3.ClarityAnalytics ?? {};
    if (!Enabled2) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("ClarityAnalytics is not a constructor");
      return;
    }
    const instance = new empty_script_default(this.codex, {
      log: !!ConsoleLog
    });
    const { playerId: playerId2 } = this.player?.getPlayer() ?? {};
    playerId2 && instance.setUser(playerId2, GameSDK.extra?.isGuest ?? true);
    this.analytics.add(instance);
  }
  initFirebaseAnalytics$() {
    if (!this.analytics) return;
    const { Enabled: Enabled2, ConsoleLog } = Analytics3.FirebaseAnalytics ?? {};
    if (!Enabled2) return;
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
      const { playerId: playerId2, locale: locale2 } = this.player?.getPlayer() ?? {};
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
      if (playerId2) {
        instance.setUser(playerId2, {
          locale: locale2,
          ad_id,
          adset_id,
          campaign_id,
          traffic_source: entryPoint
        });
      }
    });
  }
  initYandexAnalytics$() {
    if (!this.analytics) return;
    if (!GameSDK.isGameSDK("Yandex")) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("YandexAnalytics is not a constructor");
      return;
    }
    this.analytics.add(new empty_script_default(this.codex));
  }
  initXiaomiAnalytics$() {
    if (!this.analytics) return;
    if (!GameSDK.isGameSDK("Xiaomi")) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("XiaomiAnalytics is not a constructor");
      return;
    }
    this.analytics.add(new empty_script_default(this.codex));
  }
  initPlayableAnalytics$() {
    if (!this.analytics) return;
    if (!GameSDK.isGameSDK("Playable")) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("PlayableAnalytics is not a constructor");
      return;
    }
    this.analytics.add(new empty_script_default(this.codex));
  }
  initFacebookAnalytics$() {
    if (!this.analytics) return;
    const { Enabled: Enabled2, Prefix, ConsoleLog } = Analytics3.FacebookAnalytics ?? {};
    if (!Enabled2 || !GameSDK.isGameSDK("FacebookInstant")) return;
    if (typeof Prefix !== "string") {
      console.warn("Facebook Analytics is not configured");
      return;
    }
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("FacebookAnalytics is not a constructor");
      return;
    }
    this.analytics.add(
      new empty_script_default(this.codex, {
        prefix: Prefix,
        log: !!ConsoleLog
      })
    );
  }
  initTranssionH5Analytics$() {
    if (!this.analytics) return;
    if (!GameSDK.isGameSDK("TranssionH5")) return;
    if (typeof empty_script_default !== "function" || !(empty_script_default.prototype instanceof Object)) {
      console.warn("TranssionH5Analytics is not a constructor");
      return;
    }
    this.analytics.add(new empty_script_default(this.codex));
  }
};
__name(_MagicCodex, "MagicCodex");
var MagicCodex = _MagicCodex;
var codex_default2 = MagicCodex;

// extensions/ludex/src/index.ts
var {
  Configs: {
    GameEngine: { ForceDesktopDPR }
  },
  Utils: { Device: D3 },
  Events: Events10
} = Ludex;
var initGame = /* @__PURE__ */ __name(async () => {
  const codex2 = new codex_default2();
  window.codex = codex2;
  if (typeof globalThis !== "undefined") {
    globalThis.codex = codex2;
  }
  window.__sdkLoad.ensure(1);
  await codex2.boot();
  window.__sdkLoad.ensure(5);
  codex2.event.catchUp(Events10.REQUEST_CORE_START, startGame);
}, "initGame");
var isGameStarted = false;
var startGame = /* @__PURE__ */ __name(() => {
  if (isGameStarted) return;
  if (codex.event.getEventEmitCount(Events10.GAME_SDK_READY) < 1) {
    codex.event.catchUp(Events10.GAME_SDK_READY, startGame);
    return;
  }
  codex.start();
  isGameStarted = true;
  window.__sdkLoad.ensure(15);
}, "startGame");
if (ForceDesktopDPR !== false && D3.isDesktop()) {
  if (typeof ForceDesktopDPR === "number" && ForceDesktopDPR > 0) {
    window.devicePixelRatio = ForceDesktopDPR;
  }
}
initGame();
