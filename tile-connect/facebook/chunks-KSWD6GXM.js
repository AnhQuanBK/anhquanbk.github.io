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
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// <define:__GAME_CONFIG__>
var define_GAME_CONFIG_default;
var init_define_GAME_CONFIG = __esm({
  "<define:__GAME_CONFIG__>"() {
    define_GAME_CONFIG_default = { AppId: "377596664404993", AppDescription: "", ApiHost: "https://f\
big-singleplay-apps-dev.sunstudio.io", OtherHost: "https://leaderboards-dev.sunstudio.io", Ads: { Enabled: true,
    PreloadAds: true, NotifyPlayerBeforeShow: false, ShowAdOnLoad: { Enabled: false, DelaySeconds: 0,
    PlacementId: "interstitial_demo" }, DegradationTracking: { ResetTimeMinutes: 5, MaxFailedAttempts: 8 },
    AdServiceConfigs: { AdSense: { Enabled: false, UsePreload: false, DataAdClient: "ca-pub-12345678\
90", DataAdChannel: "1234567890", DataAdBreakTest: false, DataAdFrequencyHint: 30 }, Savana: { Enabled: false,
    UsePreload: false, DataAdClient: "ca-pub-1234567890", DataAdChannel: "1234567890", DataAdBreakTest: false,
    DataAdFrequencyHint: 45, BannerAdSlotId: "1234567890" }, AppLovin: { Enabled: false, UsePreload: false } },
    InterstitialAdOptions: [{ AdService: "platform", PlacementId: "5813199592046103_5870355376330524",
    SecondsFirstTime: 30, SecondsBetweenAds: 45 }], RewardedVideoAdOptions: [{ AdService: "platform",
    PlacementId: "5813199592046103_5870356576330404", SecondsFirstTime: 0, SecondsBetweenAds: 0 }], RewardedInterstitialAdOptions: [],
    BannerDisplayAdOptions: [{ PlacementId: "5813199592046103_5870354882997240", Position: "bottom",
    BannerHeight: 70, SecondsReload: 60, Platform: "ALL" }] }, Languages: { DetectPlayerLocale: true },
    GameSDKOptions: { AllowWithoutSDK: false, MSGames: { LoginOnStart: false, MaxLoginAttemptsPerDay: 1 },
    Yandex: { LoginOnStart: false, MaxLoginAttemptsPerDay: 1 }, TranssionH5: { GaId: "G-XXXXXXXXXX" } },
    Core: { InitAsync: true, AverageLoadTime: 5, StartSDKAfterLoadGame: true, FastCheckTournamentContext: false },
    GameEngine: { ForceDesktopDPR: 2, AutoResizeCanvas: true, PreferredFPS: { Mobile: 60, Desktop: 60 },
    DynamicAtlas: { IOS: { Enabled: true, AutoAtlasSize: false, MaxAtlasCount: 2, MaxAtlasSize: 4096,
    MaxFrameSize: 2048 }, Android: { Enabled: true, AutoAtlasSize: false, MaxAtlasCount: 2, MaxAtlasSize: 4096,
    MaxFrameSize: 2048 }, Desktop: { Enabled: true, AutoAtlasSize: false, MaxAtlasCount: 2, MaxAtlasSize: 4096,
    MaxFrameSize: 2048 }, UsePowerOfTwo: false, TextureBleeding: true, AllowNonePackable: false, TextureAtlasOptimize: true,
    OnlyOptimizeWhenRenderTooLong: true }, DynamicAssets: { Enabled: true, Debug: false, Resolution: {
    Adjust: 2, Original: 2 }, Compression: { PNG: { quality: 50, dither: 0.6, palette: true, compressionLevel: 8 },
    JPEG: { quality: 50, mozjpeg: true }, WEBP: { quality: 35, lossless: false, alphaQuality: 40, smartSubsample: true,
    preset: "drawing" } }, IgnoreFiles: [] }, HybridFileCache: { Enabled: true, BuildMode: { Enabled: true,
    SupportedExtensions: [".json", ".cconb"] }, PreviewMode: { Enabled: false, CacheScene: false, CachePrefab: false,
    CacheUuidExtension: false, SupportedExtensions: [".json", ".cconb"] } } }, Gameplay: { StartAdAtLevel: 8,
    MaxRescueCount: 1, Tutorial: { Enabled: true, ForceUseTutorial: false } }, Firebase: { Enabled: false,
    Options: { AppId: "", ApiKey: "", ProjectId: "", AuthDomain: "", StorageBucket: "", MeasurementId: "",
    MessagingSenderId: "" }, Services: { Analytics: { Enabled: false }, Performance: { Enabled: false },
    RemoteConfig: { Enabled: false } } }, Analytics: { GoogleAnalytics: { Enabled: true, ConsoleLog: true },
    ClarityAnalytics: { Enabled: false, ConsoleLog: false, ScreenshotCanvas: { Interval: 1500, ByEvent: [
    "APP_READY", "PAGE_VIEW", "BUTTON_CLICK", "AD_SHOWING", "LEVEL_START", "LEVEL_END"] } }, FirebaseAnalytics: {
    Enabled: false, ConsoleLog: false }, FacebookAnalytics: { Prefix: "fba", Enabled: true, ConsoleLog: false } },
    PerformanceMonitor: { CoreFlows: true, EngineFlows: true, FpsTracking: { Enabled: true, TrackingDuration: 60,
    TrackingInterval: 10 }, LoadResources: true }, RemoteConfig: { Enabled: false, Options: { ForceReloadGame: false,
    FetchIntervalInSeconds: 300 }, ServiceType: "mockup", DefaultConfigId: "default", SupportedDataTypes: [
    "Ludex", "Gameplay"], MockupConfig: { Enabled: true }, SelfHostedConfig: { Enabled: false, AppId: "",
    ApiKey: "", ApiUrl: "" } }, Network: { MaximumRequest: 6, Timeout: 15e3, Retries: 3 }, Leaderboards: {
    LeaderboardList: [] }, Notification: { Enabled: false, ApiUrl: "https://notifications.sunstudio.\
io" }, DailyRewards: { MaxDays: 7, MockTime: 0, CheckInterrupt: false }, Mockup: { Ads: { Enabled: true,
    ErrorRate: 5, GiphyApiKey: "VmjHIRsfrwCAssDS4mDo9DoImxJm1lLM", SafeAreaBottom: 0 }, Match: { Enabled: true,
    ErrorRate: 0, PlayerInfo: { Id: "player-mock", Name: "Player Mock", Photo: "", Signature: "" }, OpponentInfo: {
    Id: "opponent-mock", Name: "Opponent Mock", Photo: "", Signature: "" } }, GameSDK: { SlowAPI: { Enabled: false,
    ErrorRate: 5, StartDelay: 1e3, InitialDelay: 1e3, PlayerDataDelay: 1e3 }, Context: { Enabled: true },
    Player: { SubscribeBot: { Enabled: false, CanSubscribeBot: true }, ConnectedPlayers: { Enabled: false,
    ErrorRate: 5, RandomDelayMs: 1e3, NumOfPlayers: 3 } }, AddShortcut: { Enabled: false }, Tournament: {
    Enabled: true, ErrorRates: 5, RandomDelayMs: 1e3, NumOfTournament: { Normal: 10, HostPage: 2 } },
    Payments: { Enabled: false, ErrorRates: 5, RandomDelayMs: 1e3, NumOfProducts: 10 } }, Profile: {
    Enabled: true, ErrorRate: 0, RandomDelayMs: 1e3, AvatarUrl: "https://picsum.photos/seed/%1/300/3\
00", RandomNameApiKey: "a1f7164dc9d2468b953aef67b0a19355" }, Leaderboards: { Enabled: true, MinScore: 10,
    MaxScore: 100, ErrorRate: 0, NumOfLeaders: { Min: 10, Max: 50 }, DefaultLimit: 60, RandomDelayMs: 1e3 },
    LoadingScreen: { Enabled: false } }, Debugger: { Console: { Enabled: true }, Profiler: { Enabled: false },
    EventLogging: { Enabled: false }, CanvasRecorder: { Enabled: false, OnlyCore: false, PanelExpanded: false,
    Options: { Type: "png", Quality: 0.85, RecordFps: 60, SyncFps: true } }, MonitorError: { Enabled: false,
    ApiKey: "d194529b06ef1a7b80f9addd74fc2901", Service: "BugSnag", TrackUser: true, TrackPerformance: false,
    FilterErrors: { Codes: { Accepted: [], Ignored: ["USER_INPUT", "NETWORK_FAILURE"] }, Messages: {
    Accepted: [], Ignored: ["Load image failed"] } }, Feedback: false }, ListPlayerDevIds: ["5771005\
882931699", "6241253495935559"], InputRecorder: { Enabled: false, Logging: true, PlaybackDelay: 0, TimeScale: 1,
    UseVisualizer: true, SkipInactivity: { Enabled: true, MinTime: 3e3 }, MouseEvents: { mousedown: true,
    mouseup: true, mousemove: true, mouseenter: true, mouseleave: true, mouseout: true, mouseover: true } } },
    AdaptivePerformance: { Enabled: true, Quality: { Min: 1, Max: 2, AdjustStep: 0.1 }, Options: { FpsThreshold: 48,
    CheckInterval: 2e3, AutoUpgradeQuality: true, OnlyUpdateWhenSwitchScene: false }, TrackingSceneNames: [
    "GameScene"] }, FrameCapture: { Enabled: true, Options: { Quality: 0.85, RenderType: "jpeg", UseBlobIfPossible: true,
    FallbackWithWideframe: "Default" }, WideframeConfigs: { ShareScore: { Width: 1200, Height: 630, Wideframe: "\
wideframes/wideframe-message.png", RenderOptions: { Avatar: { Type: "image", Depth: -1, Size: [274, 273],
    Position: [703, 89], FallbackImage: "wideframes/avatar-fallback.png" }, PlayerScore: { Type: "te\
xt", Text: "0", Depth: 1, Font: "normal bold 80px", Color: "#f2a62e", TextAlign: "center", Position: [
    839, 463] } } }, ShareLeaderboard: { Width: 1500, Height: 2e3, Wideframe: "./public/wideframes/s\
hare-leaderboard.png", RenderOptions: {} }, UpdateChallenge: { Width: 952, Height: 492, Wideframe: "\
./public/wideframes/update-challenge.png", RenderOptions: {} }, ResultChallenge: { Width: 952, Height: 492,
    Wideframe: "wideframes/wideframe-challenge-result.png", RenderOptions: { PlayerPhoto: { Type: "i\
mage", Depth: -1, Size: [188, 188], Position: [51, 147], FallbackImage: "wideframes/avatar-fallback.\
png" }, LeftScore: { Type: "text", Text: "0", Depth: 1, Font: "normal bold 45px", Color: "#f2a62e", TextAlign: "\
center", Position: [143, 402] }, OpponentPhoto: { Type: "image", Depth: -1, Size: [188, 188], Position: [
    714, 147], FallbackImage: "wideframes/avatar-fallback.png" }, RightScore: { Type: "text", Text: "\
0", Depth: 1, Font: "normal bold 45px", Color: "#f2a62e", TextAlign: "center", Position: [806, 402] },
    LeftCrown: { Type: "image", Depth: 1, Size: [95, 90], Position: [18, 116], FallbackImage: "widef\
rames/crown.png" }, RightCrown: { Type: "image", Depth: 1, Size: [95, 90], Position: [681, 116], FallbackImage: "\
wideframes/crown.png" } } }, PostBestScore: { Width: 1500, Height: 2e3, Wideframe: "wideframes/widef\
rame-share-score.png", RenderOptions: { Avatar: { Type: "image", Depth: -1, Size: [480, 480], Position: [
    503, 431], FallbackImage: "wideframes/avatar-fallback.png" }, PlayerScore: { Type: "text", Text: "\
0", Depth: 1, Font: "normal bold 120px", Color: "#f2a62e", TextAlign: "center", Position: [742, 1070] } } } } } };
  }
});

// <define:__GAME_SDK_CONFIG__>
var define_GAME_SDK_CONFIG_default;
var init_define_GAME_SDK_CONFIG = __esm({
  "<define:__GAME_SDK_CONFIG__>"() {
    define_GAME_SDK_CONFIG_default = { AllowWithoutSDK: false };
  }
});

// extensions/ludex/src/libs/common/track-events.ts
var listeners, originalAddEventListener;
var init_track_events = __esm({
  "extensions/ludex/src/libs/common/track-events.ts"() {
    "use strict";
    listeners = {};
    originalAddEventListener = window.addEventListener.bind(window);
    window.addEventListener = (name, listener, options) => {
      if (!listeners[name]) {
        listeners[name] = [];
      }
      listeners[name].push(listener);
      originalAddEventListener(name, listener, options);
    };
  }
});

// extensions/ludex/src/libs/common/track-errors.ts
function disableSimpleTrackErrors() {
  const list = ["error", "unhandledrejection"];
  const listeners2 = window.__listeners ?? [];
  for (const name of list) {
    if (!listeners2[name]?.[0]) continue;
    window.removeEventListener(name, listeners2[name].shift());
  }
}
function errorHandler(error) {
  if (!window.__errorQueue) return;
  window.__errorQueue.push(typeof error === "string" ? new Error(error) : error);
}
function init() {
  window.addEventListener("error", (event) => {
    errorHandler(event.error);
  });
  window.addEventListener("unhandledrejection", (event) => {
    errorHandler(event.reason);
  });
}
var init_track_errors = __esm({
  "extensions/ludex/src/libs/common/track-errors.ts"() {
    "use strict";
    window.__errorQueue = [];
    window.onload = () => {
      disableSimpleTrackErrors();
      init();
    };
  }
});

// extensions/ludex/src/libs/init-core.ts
var lastProgress, stepProgressLoading, checkSlowLoadingTimer, checkSlowLoading, clearCheckSlowLoading,
initGameSDK, userProperties, processGoogleAnalytics, logError, initGoogleAnalytics, maxRetryCount, progressAnalyticsWhenCoreInitialized,
logAppInitializedEvent, processUserProperties, updateUserPropertiesWhenPlayerInfoLoaded, waitGameSDKReady;
var init_init_core = __esm({
  "extensions/ludex/src/libs/init-core.ts"() {
    "use strict";
    lastProgress = 0;
    stepProgressLoading = () => {
      const timer = setInterval(() => {
        if (window.__sdkLoadingCount >= 70) {
          clearInterval(timer);
          return;
        }
        if (lastProgress === window.__sdkLoadingCount) return;
        lastProgress = window.__sdkLoadingCount;
        GameSDK.setLoadingProgress(window.__sdkLoadingCount);
      }, 500);
    };
    checkSlowLoadingTimer = null;
    checkSlowLoading = () => {
      checkSlowLoadingTimer = setTimeout(() => {
        if (window.__sdkLoadingCount > 0) return;
        GameSDK.extra.displayWarnLoading?.(true);
      }, 8e3);
    };
    clearCheckSlowLoading = () => {
      if (checkSlowLoadingTimer !== null) {
        clearTimeout(checkSlowLoadingTimer);
      }
      GameSDK.extra.displayWarnLoading?.(false);
    };
    initGameSDK = async () => {
      console.info("GameSDK initializing...");
      console.groupEnd();
      checkSlowLoading();
      try {
        await GameSDK.initializeAsync();
      } catch (error) {
        console.warn("GameSDK initialize failed, retry...");
        console.debug(error);
        setTimeout(initGameSDK, 2e3);
        return;
      }
      clearCheckSlowLoading();
      window.__sdkLoadingCount = 1;
      GameSDK.setLoadingProgress(window.__sdkLoadingCount);
      if (true) {
        stepProgressLoading();
      } else {
        autoProgressLoading();
      }
      if (true) {
        processGoogleAnalytics();
      } else {
        await processGoogleAnalytics();
      }
      console.groupEnd();
      console.info("GameSDK initialized");
      window.__sdkInitiated = true;
    };
    userProperties = {};
    processGoogleAnalytics = async () => {
      try {
        const tagIds = null;
        if (!tagIds) return;
        const tagList = tagIds.split(" ");
        if (tagList.length === 0) {
          tagList.push("G-3ZG4F3ZNXH");
        }
        const tagId = tagList[0];
        if (!tagId || tagId === "null") return;
        let entryPoint = "no_entry";
        try {
          entryPoint = await GameSDK.getEntryPointAsync() ?? entryPoint;
        } catch (error) {
          console.warn("Failed to get entry point", error);
        }
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
        document.head.appendChild(gaScript);
        const userId = GameSDK.player.getID();
        if (!userId) {
          throw new Error("User ID is undefined.");
        }
        initGoogleAnalytics(userId, entryPoint, tagList);
      } catch (error) {
        logError(error);
        console.warn("Failed to initialize Google Analytics", error);
      } finally {
        progressAnalyticsWhenCoreInitialized();
      }
    };
    logError = (error) => {
      const { analytics } = codex;
      analytics?.event("app_crash_handle", { error });
      const errorInfo = error instanceof Error ? error : new Error(String(error));
      window.__errorQueue?.push(errorInfo);
    };
    initGoogleAnalytics = (userId, entryPoint, tagIds) => {
      try {
        window.focus();
        const entryPointData = GameSDK.getEntryPointData() || {};
        const {
          // ? Old fields
          fbig_ad_id,
          fbig_adset_id,
          fbig_campaign_id,
          // ? New fields
          fb_instant_game_adset_id,
          fb_instant_game_ad_id,
          fb_instant_game_campaign_id
        } = entryPointData;
        const ad_id = fbig_ad_id || fb_instant_game_ad_id;
        const adset_id = fbig_adset_id || fb_instant_game_adset_id;
        const campaign_id = fbig_campaign_id || fb_instant_game_campaign_id;
        window.gtag("js", /* @__PURE__ */ new Date());
        window.gtag("set", "client_id", `100.${userId}`);
        window.gtag("set", "user_id", userId);
        window.gtag("set", "send_page_view", false);
        const buildVersion = 110;
        for (const tagId of tagIds) {
          window.gtag("config", tagId, {
            cookie_flags: "SameSite=NoneSecure",
            build: buildVersion,
            medium: entryPoint,
            campaign: campaign_id,
            groups: "GA"
          });
        }
        const params = Ludex.Utils.Browser.getQueryParams();
        const trafficSourceDetail = params.entry_point || entryPoint;
        userProperties.user_id = userId;
        userProperties.player_id = userId;
        userProperties.app_version = buildVersion;
        userProperties.traffic_source = entryPoint;
        userProperties.traffic_source_detail = trafficSourceDetail;
        userProperties.ad_id = ad_id;
        userProperties.adset_id = adset_id;
        userProperties.campaign_id = campaign_id;
        window.gtag("set", "user_properties", userProperties);
      } catch (error) {
        logError(error);
      }
    };
    maxRetryCount = 30;
    progressAnalyticsWhenCoreInitialized = (retryCount = 0) => {
      if (retryCount >= maxRetryCount) return;
      if (!codex?.event) {
        console.warn("Game not ready, retry...");
        setTimeout(() => progressAnalyticsWhenCoreInitialized(retryCount + 1), 50);
        return;
      }
      logAppInitializedEvent();
      updateUserPropertiesWhenPlayerInfoLoaded();
    };
    logAppInitializedEvent = () => {
      const { analytics, event } = codex;
      if (!analytics || !event) {
        console.warn("Game not ready, retry...");
        setTimeout(() => logAppInitializedEvent(), 50);
        return;
      }
      const {
        Events,
        Plugins: {
          Analytics: {
            Events: { APP_LAUNCH, APP_INITIALIZED }
          }
        }
      } = Ludex;
      analytics.event(APP_LAUNCH);
      event.catchUp(Events.GAME_SDK_READY, () => {
        analytics.event(APP_INITIALIZED);
      });
    };
    processUserProperties = () => {
      try {
        const { player } = codex;
        const score = player.getBestScore();
        const coins = player.getGameData()?.coins ?? 0;
        const isNewUser = player.isFirstSession();
        userProperties.new_user = isNewUser;
        userProperties.coins = coins;
        userProperties.score = score;
        const entryPoint = GameSDK.getEntryPointData();
        const { content, notif_id } = entryPoint || {};
        if (content || notif_id) {
          userProperties.traffic_source_detail = content ?? `notif_${notif_id}`;
        }
        window.gtag("set", "user_properties", userProperties);
      } catch (error) {
        logError(error);
      }
    };
    updateUserPropertiesWhenPlayerInfoLoaded = () => {
      try {
        const userId = GameSDK.player.getID();
        if (!userId) return;
        codex.event.catchUp(Ludex.Events.PLAYER_INFO_LOADED, processUserProperties);
      } catch (error) {
        logError(error);
      }
    };
    waitGameSDKReady = () => {
      const { GameSDK: GameSDK3 } = window;
      if (!GameSDK3) {
        setTimeout(waitGameSDKReady, 50);
        return;
      }
      initGameSDK();
    };
    waitGameSDKReady();
  }
});

// extensions/ludex/src/libs/platforms/google-analytics.ts
function trace() {
  const args = arguments;
  if (args[0] === "event") {
    if (typeof args[2] !== "object") {
      args[2] = {};
    }
    args[2].build = 110;
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
  "extensions/ludex/src/libs/platforms/google-analytics.ts"() {
    "use strict";
    window.dataLayer = window.dataLayer || [];
    window.gtag = trace;
    addGoogleAnalyticsScript();
  }
});

// extensions/ludex/src/libs/polyfill/performance.ts
var _perf;
var init_performance = __esm({
  "extensions/ludex/src/libs/polyfill/performance.ts"() {
    "use strict";
    _perf = window.performance || {};
    if (typeof _perf.mark !== "function" || typeof _perf.measure !== "function") {
      _perf = {
        // @ts-expect-error - Provide empty implementations for mark
        mark: () => {
        },
        // @ts-expect-error - Provide empty implementations for measure
        measure: () => {
        }
      };
    }
    _perf.mark("load-start");
    window.__perf = _perf;
  }
});

// extensions/ludex/src/game-sdk/sdk/Context.ts
var Context, Context_default;
var init_Context = __esm({
  "extensions/ludex/src/game-sdk/sdk/Context.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    Context = class {
      adapter;
      extra;
      currentContextID = null;
      currentContextType = "SOLO";
      currentContextPlayers = [];
      chooseAsyncPopup$ = null;
      createAsyncPopup$ = null;
      switchAsyncPopup$ = null;
      contextIdsByCreate$;
      contextIdsByChoose$ = [];
      playerIdsInContexts$;
      constructor(adapter) {
        this.adapter = adapter;
        this.extra = adapter.extra;
      }
      setCurrentContextId(contextId) {
        this.checkSameContext$(contextId);
        this.currentContextID = contextId;
        this.currentContextType = "THREAD";
      }
      initContextInfo(contextId, contextType) {
        const { Array: A, String: S } = Ludex.Utils;
        this.contextIdsByCreate$ = {};
        this.playerIdsInContexts$ = {};
        this.contextIdsByChoose$ = A.fillWith(10, () => S.generateObjectId());
        if (!contextId || !contextType) return;
        if (["SOLO", "THREAD", "POST", "GROUP"].indexOf(contextType) < 0) {
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
      async loadSwitchAsyncPopup$() {
        if (this.switchAsyncPopup$) return;
        const SwitchAsyncPopup = (await import("./chunks-ERI6VURJ.js")).default;
        if (typeof SwitchAsyncPopup !== "function") return;
        this.switchAsyncPopup$ = new SwitchAsyncPopup();
        await this.switchAsyncPopup$.setupTemplate();
      }
      async loadChooseAsyncPopup$() {
        if (this.chooseAsyncPopup$) return;
        const ChooseAsyncPopup = (await import("./chunks-WYQVRVUD.js")).default;
        if (typeof ChooseAsyncPopup !== "function") return;
        this.chooseAsyncPopup$ = new ChooseAsyncPopup();
        await this.chooseAsyncPopup$.setupTemplate();
      }
      async loadCreateAsyncPopup$() {
        if (this.createAsyncPopup$) return;
        const CreateAsyncPopup = (await import("./chunks-UDVZJOGC.js")).default;
        if (typeof CreateAsyncPopup !== "function") return;
        this.createAsyncPopup$ = new CreateAsyncPopup();
        await this.createAsyncPopup$.setupTemplate();
      }
      async switchAsync(contextId, switchSilentlyIfSolo = false) {
        this.extra.checkPopupShown();
        await this.extra.awaitRandomDelay();
        this.validateSwitchAsyncContextId(contextId);
        if (contextId === "SOLO" && switchSilentlyIfSolo) {
          this.currentContextID = null;
          this.currentContextType = "SOLO";
          this.updatePlayers$([]);
          return;
        }
        await this.loadSwitchAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.switchAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.switchAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.switchAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.switchAsyncPopup$.show(contextId);
          this.extra.isPopupShown = true;
        });
        this.currentContextID = contextId;
        this.currentContextType = "THREAD";
        this.createPlayerIdsInContext$(contextId, 10);
        const playerIds = this.playerIdsInContexts$[contextId];
        const players = playerIds.map((playerId) => this.createPlayerInfo$(playerId));
        this.updatePlayers$(players);
      }
      async chooseAsync(_options) {
        this.extra.checkPopupShown();
        await this.extra.awaitRandomDelay();
        await this.loadChooseAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.chooseAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.chooseAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.chooseAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.chooseAsyncPopup$.show();
          this.extra.isPopupShown = true;
        });
        const rand = Math.floor(Math.random() * this.contextIdsByChoose$.length);
        const contextId = this.contextIdsByChoose$[rand];
        this.checkSameContext$(contextId);
        this.currentContextID = contextId;
        this.currentContextType = "THREAD";
        this.createPlayerIdsInContext$(contextId, 2);
        const playerIds = this.playerIdsInContexts$[contextId];
        const players = playerIds.map((playerId) => this.createPlayerInfo$(playerId));
        this.updatePlayers$(players);
      }
      async createAsync(playerId) {
        this.extra.checkPopupShown();
        await this.extra.awaitRandomDelay();
        await this.validateCreateAsyncPlayerId$(playerId);
        await this.loadCreateAsyncPopup$();
        await new Promise((resolve, reject) => {
          if (!this.createAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.createAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.createAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.createAsyncPopup$.show(playerId);
          this.extra.isPopupShown = true;
        });
        if (!this.contextIdsByCreate$[playerId]) {
          const {
            Utils: { String: S }
          } = Ludex;
          this.contextIdsByCreate$[playerId] = S.generateObjectId();
        }
        const contextId = this.contextIdsByCreate$[playerId];
        this.checkSameContext$(contextId);
        this.currentContextID = contextId;
        this.currentContextType = "THREAD";
        const player = this.createPlayerInfo$(playerId);
        this.updatePlayers$([player]);
      }
      handleOnYes$ = (resolve) => () => {
        this.extra.isPopupShown = false;
        resolve(true);
      };
      handleOnNo$ = (reject) => () => {
        this.extra.isPopupShown = false;
        try {
          this.extra.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      };
      async getPlayersAsync() {
        await this.extra.awaitRandomDelay();
        return this.currentContextPlayers;
      }
      createPlayerIdsInContext$(contextId, maxPlayers) {
        if (!this.playerIdsInContexts$[contextId]) {
          const { Array: A, String: S } = Ludex.Utils;
          const rand = Math.floor(Math.random() * maxPlayers);
          const playerIds = A.fillWith(rand, () => S.generateObjectId());
          this.playerIdsInContexts$[contextId] = playerIds;
        }
        return this.playerIdsInContexts$[contextId];
      }
      createPlayerInfo$(playerId) {
        return {
          getID: () => playerId,
          getName: () => `Player ${playerId}`,
          getPhoto: () => ""
        };
      }
      updatePlayers$(players) {
        if (this.currentContextType === "SOLO") {
          this.currentContextPlayers = [];
          return;
        }
        this.currentContextPlayers = players;
      }
      checkSameContext$(contextId) {
        if (this.currentContextID === contextId) {
          this.extra.exceptionSameContext();
        }
      }
      async validateCreateAsyncPlayerId$(playerId) {
        if (!playerId || Array.isArray(playerId)) {
          const message2 = "Client does not support no player IDS or multiple player IDs yet" /* NOT_NO_OR_MULTIPLE_IDS */;
          this.extra.exceptionClientUnsupportedOperation(message2);
        }
        if (!Ludex.Utils.Valid.isString(playerId)) {
          const message2 = `Array of type String contained a value of another type: ${playerId}`;
          this.extra.exceptionInvalidParam(message2);
        }
        if (playerId === GameSDK.player.getID()) {
          const message2 = "At least one player id besides the current player must be provided." /* ONE_BESIDES_CURRENT_PLAYER_ID */;
          this.extra.exceptionInvalidParam(message2);
        }
        const connectedPlayers = await GameSDK.player.getConnectedPlayersAsync();
        const providedIdInConnectedPlayers = connectedPlayers.some(
          (connectedPlayer) => connectedPlayer.getID() === playerId
        );
        if (providedIdInConnectedPlayers) return;
        const message = `Provided ID ${playerId} is not a connected player of the current player.`;
        this.extra.exceptionInvalidParam(message);
      }
      validateSwitchAsyncContextId(contextId) {
        this.checkSameContext$(contextId);
        if (Ludex.Utils.Valid.isString(contextId)) return;
        const message = "Client requires update to support this operation" /* REQUIRE_UPDATE */;
        this.extra.exceptionClientUnsupportedOperation(message);
      }
    };
    Context_default = Context;
  }
});

// extensions/ludex/src/game-sdk/elements/ads-mockup.html
var ads_mockup_default;
var init_ads_mockup = __esm({
  "extensions/ludex/src/game-sdk/elements/ads-mockup.html"() {
    ads_mockup_default = "./assets/ads-mockup.html";
  }
});

// extensions/ludex/src/game-sdk/elements/async-popup.html
var async_popup_default;
var init_async_popup = __esm({
  "extensions/ludex/src/game-sdk/elements/async-popup.html"() {
    async_popup_default = "./assets/async-popup.html";
  }
});

// extensions/ludex/src/game-sdk/elements/banner-mockup.html
var banner_mockup_default;
var init_banner_mockup = __esm({
  "extensions/ludex/src/game-sdk/elements/banner-mockup.html"() {
    banner_mockup_default = "./assets/banner-mockup.html";
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
var isTemplateExist, prompts, addTemplate, addAsyncPopupTemplate, addLoadingTemplate, addBannerMockupTemplate,
addAdsMockupTemplate;
var init_TemplateManager = __esm({
  "extensions/ludex/src/game-sdk/elements/TemplateManager.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_ads_mockup();
    init_async_popup();
    init_banner_mockup();
    init_loading();
    isTemplateExist = (selector) => {
      return !!document.querySelector(selector);
    };
    prompts = {};
    addTemplate = async (config) => {
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
    };
    addAsyncPopupTemplate = async () => {
      return addTemplate({
        template: async_popup_default,
        selector: "#async-popup-container"
      });
    };
    addLoadingTemplate = async () => {
      return addTemplate({
        template: loading_default,
        selector: "#loading-screen"
      });
    };
    addBannerMockupTemplate = async () => {
      return addTemplate({
        template: banner_mockup_default,
        selector: "#banner-mockup"
      });
    };
    addAdsMockupTemplate = async () => {
      return addTemplate({
        template: ads_mockup_default,
        selector: "#qc-container"
      });
    };
  }
});

// extensions/ludex/src/game-sdk/common/LoadingScreenElement.ts
var displayWarnTimer, LoadingScreenElement, LoadingScreenElement_default;
var init_LoadingScreenElement = __esm({
  "extensions/ludex/src/game-sdk/common/LoadingScreenElement.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_TemplateManager();
    LoadingScreenElement = class {
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
        if (this.percentage$ >= percentage) return;
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
    LoadingScreenElement_default = LoadingScreenElement;
  }
});

// extensions/ludex/src/game-sdk/exceptions/SDKCommonError.ts
var SDKCommonError, SDKCommonError_default;
var init_SDKCommonError = __esm({
  "extensions/ludex/src/game-sdk/exceptions/SDKCommonError.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    SDKCommonError = class extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
      }
    };
    SDKCommonError_default = SDKCommonError;
  }
});

// extensions/ludex/src/game-sdk/sdk/Extra.ts
var MAX_WAIT_LUDEX_READY_TIME, Extra, Extra_default;
var init_Extra = __esm({
  "extensions/ludex/src/game-sdk/sdk/Extra.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_LoadingScreenElement();
    init_SDKCommonError();
    MAX_WAIT_LUDEX_READY_TIME = 1e4;
    Extra = class {
      adapter;
      isGuest = false;
      isPopupShown = false;
      loadingElement = null;
      constructor(adapter) {
        this.adapter = adapter;
      }
      // ? Flag for some sdk that is in restricted mode
      isRestricted() {
        return false;
      }
      async subscribeBotAsync() {
        const canSubscribeBot = await this.adapter.player.canSubscribeBotAsync();
        if (!canSubscribeBot) return false;
        const { analytics } = globalThis.codex;
        const {
          Plugins: {
            Analytics: {
              Events: { BOT_SUBSCRIBE, BOT_SUBSCRIBE_POPUP }
            }
          }
        } = Ludex;
        analytics.event(BOT_SUBSCRIBE_POPUP);
        try {
          await this.waitSDKInitiatedAsync$();
          await this.adapter.player.subscribeBotAsync();
          analytics.event(BOT_SUBSCRIBE, { success: true });
          return true;
        } catch (error) {
          analytics.event(BOT_SUBSCRIBE, { success: false });
          return false;
        }
      }
      async checkAndCreateShortcutAsync() {
        const canCreateShortcut = await this.adapter.canCreateShortcutAsync();
        if (!canCreateShortcut) return;
        const { analytics } = globalThis.codex;
        const {
          Plugins: {
            Analytics: {
              Events: { SHORTCUT_CREATE, SHORTCUT_CREATE_POPUP }
            }
          }
        } = Ludex;
        analytics.event(SHORTCUT_CREATE_POPUP);
        try {
          await this.waitSDKInitiatedAsync$();
          await this.adapter.createShortcutAsync();
          analytics.event(SHORTCUT_CREATE, { success: true });
        } catch (error) {
          analytics.event(SHORTCUT_CREATE, { success: false });
        }
      }
      waitSDKInitiatedAsync$() {
        const {
          Utils: { Valid: V }
        } = Ludex;
        return V.isValueChangeAsync(() => window.__sdkInitiated, true, {
          timeout: 1e4,
          checkInterval: 100
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
      createLoadingElement() {
        if (this.loadingElement) return;
        this.loadingElement = new LoadingScreenElement_default();
      }
      setLoadingElementProgress(progress) {
        if (!this.loadingElement) return;
        this.loadingElement.setLoadingProgress(progress);
      }
      displayWarnLoading(enable) {
        if (!this.loadingElement) return;
        this.loadingElement.displayWarnLoading(enable);
      }
      destroyLoadingElement() {
        if (!this.loadingElement) return;
        this.loadingElement.removeLoadingElement();
      }
      checkPopupShown() {
        if (!this.isPopupShown) return;
        this.exceptionPendingRequest("Please wait for the popup to close");
      }
      async delayInitialAsync() {
        const {
          Utils: { Time: T },
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.InitialDelay <= 0) return;
        await T.sleepAsync(SlowAPI.InitialDelay);
      }
      async delayStartAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          },
          Utils: { Time: T }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.StartDelay <= 0) return;
        await T.sleepAsync(SlowAPI.StartDelay);
      }
      async delayPlayerDataAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: { SlowAPI }
            }
          },
          Utils: { Time: T }
        } = Ludex;
        if (!SlowAPI.Enabled || SlowAPI.PlayerDataDelay <= 0) return;
        await T.sleepAsync(SlowAPI.PlayerDataDelay);
      }
      awaitRandomDelay(randomDelayMs = 1e3) {
        const {
          Utils: { Time: T }
        } = Ludex;
        return T.sleepAsync(Math.random() * randomDelayMs);
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
        const { Valid: V, Object: O } = Ludex.Utils;
        if (!O.hasOwn(error, "message") || !V.isString(error.message)) return null;
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
    Extra_default = Extra;
  }
});

// extensions/ludex/src/game-sdk/sdk/Player.ts
var GameName, avatarUrl, Player, Player_default;
var init_Player = __esm({
  "extensions/ludex/src/game-sdk/sdk/Player.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    GameName = "Tile Connect".replace(/ /g, "-");
    avatarUrl = "https://picsum.photos/seed/%1/300/300";
    Player = class {
      adapter;
      extra;
      defaultPlayerInfo;
      currentPlayerInfo;
      infoKey = `${GameName}_PlayerInfo`;
      dataKey = `${GameName}_PlayerData`;
      subscribeBot$ = null;
      connectedPlayers$ = null;
      constructor(adapter) {
        this.adapter = adapter;
        this.extra = adapter.extra;
        this.initDefaultPlayerInfo();
      }
      initDefaultPlayerInfo() {
        const playerId = "guest-007";
        this.defaultPlayerInfo = {
          playerId,
          playerName: "Guest",
          playerPhoto: avatarUrl.replace("%1", playerId)
        };
        this.extra.isGuest = true;
        this.currentPlayerInfo = __spreadValues({}, this.defaultPlayerInfo);
      }
      initPlayerInfo(playerId) {
        this.updateCurrentPlayerInfo(playerId);
        const {
          Utils: { Browser: B }
        } = Ludex;
        B.writeLocalStorage(this.infoKey, this.currentPlayerInfo);
      }
      async canSubscribeBotAsync() {
        await this.loadMockSubscribeBot$();
        if (!this.subscribeBot$) {
          this.extra.exceptionUnsupported();
        }
        return this.subscribeBot$.canSubscribeBotAsync();
      }
      async subscribeBotAsync() {
        await this.loadMockSubscribeBot$();
        if (!this.subscribeBot$) {
          this.extra.exceptionUnsupported();
        }
        return this.subscribeBot$.subscribeBotAsync();
      }
      getID() {
        return this.currentPlayerInfo.playerId;
      }
      getName() {
        return this.currentPlayerInfo.playerName;
      }
      getPhoto() {
        return this.currentPlayerInfo.playerPhoto;
      }
      async getDataAsync(keys) {
        if (keys.length < 1) return {};
        await this.extra.delayPlayerDataAsync();
        const {
          Utils: { Browser: B, Valid: V, Object: O }
        } = Ludex;
        const data = B.getLocalStorage(this.dataKey);
        if (!V.isObject(data)) return {};
        const dataObject = {};
        for (const key of keys) {
          if (O.hasOwn(data, key)) {
            dataObject[key] = data[key];
          }
        }
        return dataObject;
      }
      async setDataAsync(data) {
        await this.extra.delayPlayerDataAsync();
        const {
          Utils: { Browser: B }
        } = Ludex;
        B.writeLocalStorage(this.dataKey, data);
      }
      async getSignedPlayerInfoAsync() {
        return {
          getPlayerID: () => {
            return this.getID() ?? "";
          },
          getSignature: this.getSignature$
        };
      }
      async getConnectedPlayersAsync() {
        await this.loadMockConnectedPlayers$();
        if (!this.connectedPlayers$) {
          this.extra.exceptionUnsupported();
        }
        return this.connectedPlayers$.getConnectedPlayersAsync();
      }
      updateCurrentPlayerInfo(playerId) {
        const {
          Utils: { Browser: B, Valid: V, Object: O, String: S }
        } = Ludex;
        let currentId = playerId ?? "";
        if (this.extra.isGuest) {
          const data = B.getLocalStorage(this.infoKey);
          if (V.isObject(data) && O.hasOwn(data, "playerId") && V.isString(data.playerId)) {
            currentId = data.playerId;
          }
        }
        if (V.isEmpty(currentId)) {
          currentId = S.generateObjectId();
        }
        let currentName = this.getName();
        if (V.isEmpty(currentName)) {
          const { language } = codex;
          currentName = language.getText("core.nameless") ?? "Nameless";
        }
        this.currentPlayerInfo.playerId = currentId;
        this.currentPlayerInfo.playerName = currentName;
        this.currentPlayerInfo.playerPhoto = avatarUrl.replace("%1", currentId);
        this.updateMockupPlayerInfo$(currentId);
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
      updateMockupPlayerInfo$(playerId) {
        let info = this.getMockOpponentInfo$();
        if (playerId !== info?.Id) {
          info = this.getMockPlayerInfo$();
        }
        if (!info) return;
        this.currentPlayerInfo.playerId = info.Id;
        if (info.Name) {
          this.currentPlayerInfo.playerName = info.Name;
        }
        if (info.Photo) {
          this.currentPlayerInfo.playerPhoto = info.Photo;
        }
      }
      getSignature$ = () => {
        const token = this.getSignatureFormMockup$();
        if (Ludex.Utils.Valid.isString(token)) return token;
        return "default_token";
      };
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
        const MockSubscribeBot = (await import("./chunks-T2I3ZXJK.js")).default;
        if (typeof MockSubscribeBot !== "function") return;
        this.subscribeBot$ = new MockSubscribeBot(this.adapter);
      }
      async loadMockConnectedPlayers$() {
        if (this.connectedPlayers$) return;
        const MockConnectedPlayers = (await import("./chunks-T2I3ZXJK.js")).default;
        if (typeof MockConnectedPlayers !== "function") return;
        this.connectedPlayers$ = new MockConnectedPlayers(this.extra);
      }
    };
    Player_default = Player;
  }
});

// extensions/ludex/src/game-sdk/sdk/TournamentInstance.ts
var TournamentInstance, TournamentInstance_default;
var init_TournamentInstance = __esm({
  "extensions/ludex/src/game-sdk/sdk/TournamentInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    TournamentInstance = class {
      id;
      title$;
      contextId$;
      payload$;
      endTime$;
      tournamentType$;
      constructor(id, payload, isPageHosted = false) {
        const { config, data } = payload;
        this.id = id;
        this.title$ = config.title;
        this.contextId$ = `0123${this.id}`;
        this.payload$ = JSON.stringify(data ?? {});
        this.endTime$ = config.endTime ?? this.defaultEndTime$();
        this.tournamentType$ = isPageHosted ? "PAGE_HOSTED" : "DEFAULT";
      }
      defaultEndTime$() {
        return Math.round((Date.now() + 1e3 * 60 * 60 * 24 * 7) / 1e3);
      }
      getID() {
        return this.id;
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
          id: this.id,
          title: this.title$,
          payload: this.payload$,
          endTime: this.endTime$,
          contextId: this.contextId$,
          tournamentType: this.tournamentType$
        };
      }
    };
    TournamentInstance_default = TournamentInstance;
  }
});

// extensions/ludex/src/game-sdk/sdk/Tournament.ts
var CommonErrorList, CreateErrorList, JoinErrorList, ShareErrorList, PostScoreErrorList, GetTournamentsErrorList,
TOURNAMENTS_DATA_MOCK_KEY, TOURNAMENT_LEADERS_MOCK_KEY, Tournament, Tournament_default;
var init_Tournament = __esm({
  "extensions/ludex/src/game-sdk/sdk/Tournament.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Context();
    init_TournamentInstance();
    CommonErrorList = ["Unsupported", "NetworkFailure", "PendingRequest", "ClientUnsupportedOperatio\
n"];
    CreateErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
    JoinErrorList = [...CommonErrorList, "InvalidOperation", "UserInput"];
    ShareErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
    PostScoreErrorList = [...CommonErrorList, "InvalidParam", "UserInput"];
    GetTournamentsErrorList = [...CommonErrorList, "NetworkFailure"];
    TOURNAMENTS_DATA_MOCK_KEY = "TournamentsDataMockKey";
    TOURNAMENT_LEADERS_MOCK_KEY = "TournamentLeadersMockKey";
    Tournament = class {
      adapter;
      extra;
      context;
      shareAsyncPopup$ = null;
      createAsyncPopup$ = null;
      constructor(adapter) {
        this.adapter = adapter;
        this.extra = adapter.extra;
        this.context = adapter.context;
      }
      async initTournamentInfoAsync(tournamentId) {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { Enabled }
              }
            }
          }
        } = Ludex;
        if (!Enabled) return;
        await this.createMockTournamentsData();
        if (tournamentId) {
          await this.processEnterTournament$(tournamentId);
        }
      }
      processEnterTournament$ = async (tournamentId) => {
        const tournamentData = this.getTournamentData$(tournamentId);
        if (!tournamentData) return;
        await this.joinAsync(tournamentId);
      };
      /**
       * @deprecated Only for testing
       */
      async createMockTournamentsData() {
        const {
          Utils: { Object: O },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { Enabled, NumOfTournament }
              }
            }
          }
        } = Ludex;
        const { Normal: NumOfNormal, HostPage: NumOfHostPaged } = NumOfTournament;
        if (!Enabled) return;
        const tournamentsData = this.getTournamentsData$();
        const allTournaments = O.vals(tournamentsData);
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
          Utils: { String: S, Array: A, Number: N },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { ExtraPlayerTournamentPayload }
              }
            }
          }
        } = Ludex;
        const { leaderboard } = codex;
        const playerId = GameSDK.player.getID();
        const playerName = GameSDK.player.getName();
        return A.length(length).map(async () => {
          const title = `${playerName}'s Tournament ${S.generateObjectId()}`;
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
              playerId,
              playerName,
              leaderboardId
            }, ExtraPlayerTournamentPayload)
          });
          const tournamentId = tournament.getID().toString();
          if (this.getTournamentLeadersData$(tournamentId)) return;
          const playerLimit = N.random(2);
          const connectedPlayerIds = codex.player.getConnectedPlayerIds(playerLimit, 0);
          const leaders = connectedPlayerIds.map((playerId2) => {
            return {
              playerId: playerId2,
              score: N.random(4)
            };
          });
          leaders.sort((a, b) => a.score - b.score);
          this.writeTournamentLeadersData$(tournamentId, leaders);
        });
      }
      createGlobalTournaments$(length) {
        const {
          Utils: { String: S, Array: A, Number: N },
          Configs: {
            Mockup: {
              GameSDK: {
                Tournament: { ExtraGlobalTournamentPayload }
              }
            }
          }
        } = Ludex;
        const { leaderboard } = codex;
        return A.length(length).map(async () => {
          const id = S.generateObjectId();
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
          const leaders = A.length(leaderLength).map(() => {
            return {
              playerId: S.generateObjectId(),
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
        return this.extra.awaitRandomDelay(RandomDelayMs);
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
        this.extra.randomException(errors);
      }
      async loadCreateTournamentPopupAsync$() {
        if (this.createAsyncPopup$) return;
        const CreateAsyncPopup = (await import("./chunks-RYGJ63N5.js")).default;
        if (typeof CreateAsyncPopup !== "function") return;
        this.createAsyncPopup$ = new CreateAsyncPopup();
        await this.createAsyncPopup$.setupTemplate();
      }
      async loadSharePopupAsync$() {
        if (this.shareAsyncPopup$) return;
        const ShareAsyncPopup = (await import("./chunks-NMSC3ZAH.js")).default;
        if (typeof ShareAsyncPopup !== "function") return;
        this.shareAsyncPopup$ = new ShareAsyncPopup();
        await this.shareAsyncPopup$.setupTemplate();
      }
      async createAsync(payload) {
        this.extra.checkPopupShown();
        await this.awaitRandomDelay$();
        if (this.context.getID() !== null) {
          this.extra.exceptionInvalidOperation("Cannot create tournament while in a context");
        }
        this.validateCreatePayload$(payload);
        this.randomError(CreateErrorList);
        await this.loadCreateTournamentPopupAsync$();
        await new Promise((resolve, reject) => {
          if (!this.createAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.createAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.createAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.createAsyncPopup$.show(payload);
          this.extra.isPopupShown = true;
        });
        const tournament = this.createMockTournamentAsync$(payload);
        const contextId = tournament.getContextID();
        this.setCurrentContextID$(contextId);
        return tournament;
      }
      createMockTournamentAsync$(payload, isPageHosted = false) {
        const {
          Utils: { String: S }
        } = Ludex;
        const id = S.generateObjectId();
        const tournament = new TournamentInstance_default(id, payload, isPageHosted);
        const tournamentData = tournament.toObject();
        this.writeTournamentData$(id, tournamentData);
        return tournament;
      }
      async postScoreAsync(score) {
        await this.awaitRandomDelay$();
        this.validateAvailableTournament$();
        if (score < 0) {
          this.extra.exceptionInvalidParam("Score must be a positive number");
        }
        this.randomError(PostScoreErrorList);
        const playerId = codex.player.getPlayerId();
        this.updateBestScore$(playerId, score);
      }
      // ? shareAsync always show if score is less than best score
      async shareAsync(payload) {
        this.extra.checkPopupShown();
        await this.awaitRandomDelay$();
        this.validateAvailableTournament$();
        this.validateSharePayload$(payload);
        this.randomError(ShareErrorList);
        await this.loadSharePopupAsync$();
        const { score } = payload;
        let bestScore = score;
        const tournament = this.getCurrentTournament$();
        if (tournament) {
          const playerId2 = codex.player.getPlayerId();
          const tournamentId = tournament.getID().toString();
          const lastBestScore = this.getBestScore$(tournamentId, playerId2);
          if (lastBestScore && lastBestScore < score) {
            bestScore = lastBestScore;
          }
        }
        await new Promise((resolve, reject) => {
          if (!this.shareAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.shareAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.shareAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.shareAsyncPopup$.show(bestScore);
          this.extra.isPopupShown = true;
        });
        const playerId = codex.player.getPlayerId();
        this.updateBestScore$(playerId, score);
      }
      async getTournamentsAsync() {
        await this.awaitRandomDelay$();
        this.randomError(GetTournamentsErrorList);
        const tournamentsData = this.getTournamentsData$();
        const {
          Utils: { Object: O }
        } = Ludex;
        const tournaments = O.vals(tournamentsData);
        const tournamentInstances = tournaments.map((tournament) => this.getTournamentInstance$(tournament.
        id));
        return tournamentInstances.filter((tournament) => tournament !== null);
      }
      async joinAsync(tournamentId) {
        await this.awaitRandomDelay$();
        const {
          Utils: { Valid: V }
        } = Ludex;
        if (!V.isString(tournamentId)) {
          this.extra.exceptionInvalidParam("Tournament ID must be a string");
        }
        const tournament = this.getTournamentInstance$(tournamentId);
        if (!tournament) {
          this.extra.exceptionTournamentNotFound("Tournament could not be found.");
        }
        this.randomError(JoinErrorList);
        const tournamentContextId = tournament.getContextID();
        await GameSDK.context.switchAsync(tournamentContextId);
      }
      setCurrentContextID$(contextId) {
        if (this.context instanceof Context_default) {
          this.context.setCurrentContextId(contextId);
        }
      }
      handleOnYes$ = (resolve) => () => {
        this.extra.isPopupShown = false;
        resolve(true);
      };
      handleOnNo$ = (reject) => () => {
        this.extra.isPopupShown = false;
        try {
          this.extra.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      };
      getCurrentTournament$() {
        const contextId = this.context.getID();
        if (!contextId) return null;
        const tournamentsData = this.getTournamentsData$();
        for (const tournamentId in tournamentsData) {
          if (Object.hasOwn(tournamentsData, tournamentId)) {
            const tournament = tournamentsData[tournamentId];
            if (tournament.contextId === contextId) {
              return this.getTournamentInstance$(tournamentId);
            }
          }
        }
        return null;
      }
      validateCreatePayload$(payload) {
        const {
          Utils: { Object: O, Valid: V }
        } = Ludex;
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
      validateSharePayload$(payload) {
        const {
          Utils: { Object: O, Valid: V }
        } = Ludex;
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
      validateAvailableTournament$() {
        const tournament = this.getCurrentTournament$();
        if (tournament) return;
        this.extra.exceptionTournamentNotFound("There is no tournament for this context.");
      }
      getTournamentInstance$(id) {
        const tournamentData = this.getTournamentData$(id);
        if (!tournamentData) return null;
        return {
          getID: () => tournamentData.id,
          getTitle: () => tournamentData.title,
          getPayload: () => tournamentData.payload,
          getEndTime: () => tournamentData.endTime,
          getContextID: () => tournamentData.contextId,
          getTournamentType: () => tournamentData.tournamentType
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
          Utils: { Browser: B, Valid: V }
        } = Ludex;
        const data = B.getLocalStorage(TOURNAMENTS_DATA_MOCK_KEY);
        if (!V.isObject(data)) return {};
        return data;
      }
      writeTournamentsData$(tournaments) {
        const {
          Utils: { Browser: B, Valid: V }
        } = Ludex;
        if (!V.isObject(tournaments)) return;
        B.writeLocalStorage(TOURNAMENTS_DATA_MOCK_KEY, tournaments);
      }
      getBestScore$(tournamentId, playerId) {
        const leader = this.getTournamentLeader$(tournamentId, playerId);
        if (!leader) return null;
        return leader.score ?? null;
      }
      updateBestScore$(playerId, score) {
        const tournament = this.getCurrentTournament$();
        if (!tournament) return;
        const tournamentId = tournament.getID().toString();
        if (!tournamentId) return;
        const leader = this.getTournamentLeader$(tournamentId, playerId);
        if (!leader) {
          this.writeTournamentLeader$(tournamentId, {
            playerId,
            score
          });
          return;
        }
        if (leader.score < score) {
          leader.score = score;
          this.writeTournamentLeader$(tournamentId, leader);
        }
      }
      getTournamentLeader$(tournamentId, playerId) {
        const tournamentLeaders = this.getTournamentLeadersData$(tournamentId);
        if (!tournamentLeaders.length) return null;
        const {
          Utils: { Array: A }
        } = Ludex;
        return A.search(tournamentLeaders, (leader) => leader.playerId === playerId) ?? null;
      }
      getTournamentLeadersData$(tournamentId) {
        const {
          Utils: { Browser: B, Object: O }
        } = Ludex;
        const data = B.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY);
        if (!O.hasOwn(data, tournamentId)) return [];
        const tournamentLeaders = data[tournamentId];
        if (!Array.isArray(tournamentLeaders)) return [];
        tournamentLeaders.sort((a, b) => b.score - a.score);
        return tournamentLeaders;
      }
      writeTournamentLeader$(tournamentId, leader) {
        const {
          Utils: { Array: A }
        } = Ludex;
        const tournamentLeaders = this.getTournamentLeadersData$(tournamentId);
        const leaderIndex = A.searchIndex(
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
          Utils: { Browser: B, Object: O }
        } = Ludex;
        if (!Array.isArray(tournamentLeaders)) return;
        const data = B.getLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY) ?? {};
        O.assign(data, { [tournamentId]: tournamentLeaders });
        B.writeLocalStorage(TOURNAMENT_LEADERS_MOCK_KEY, data);
      }
    };
    Tournament_default = Tournament;
  }
});

// extensions/ludex/src/game-sdk/sdk/Payments.ts
var CommonErrorList2, GetCatalogErrorList, PurchaseErrorList, GetPurchasesErrorList, ConsumePurchaseErrorList,
PRODUCTS_DATA_MOCK_KEY, PURCHASES_DATA_MOCK_KEY, Payments, Payments_default;
var init_Payments = __esm({
  "extensions/ludex/src/game-sdk/sdk/Payments.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    CommonErrorList2 = ["Unsupported", "NetworkFailure", "PendingRequest", "ClientUnsupportedOperati\
on"];
    GetCatalogErrorList = [...CommonErrorList2, "InvalidParam"];
    PurchaseErrorList = [...CommonErrorList2, "InvalidParam", "UserInput"];
    GetPurchasesErrorList = [...CommonErrorList2, "NetworkFailure"];
    ConsumePurchaseErrorList = [...CommonErrorList2, "InvalidParam", "UserInput"];
    PRODUCTS_DATA_MOCK_KEY = "ProductsDataMockKey";
    PURCHASES_DATA_MOCK_KEY = "PurchasesDataMockKey";
    Payments = class {
      adapter;
      extra;
      context;
      purchaseAsyncPopup$ = null;
      constructor(adapter) {
        this.adapter = adapter;
        this.extra = adapter.extra;
        this.context = adapter.context;
      }
      async initPaymentInfoAsync() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { Enabled }
              }
            }
          }
        } = Ludex;
        if (!Enabled) return;
        await this.createMockProductsData();
      }
      async getCatalogAsync() {
        await this.awaitRandomDelay$();
        this.randomError(GetCatalogErrorList);
        const productsData = this.getProductsData$();
        const products = Object.values(productsData);
        return products;
      }
      async loadPurchasePopupAsync$() {
        if (this.purchaseAsyncPopup$) return;
        const PurchaseAsyncPopup = (await import("./chunks-SEDTPNV7.js")).default;
        if (typeof PurchaseAsyncPopup !== "function") return;
        this.purchaseAsyncPopup$ = new PurchaseAsyncPopup();
        await this.purchaseAsyncPopup$.setupTemplate();
      }
      async purchaseAsync(purchaseConfig) {
        this.extra.checkPopupShown();
        await this.awaitRandomDelay$();
        this.validatePurchaseConfig$(purchaseConfig);
        this.randomError(PurchaseErrorList);
        await this.loadPurchasePopupAsync$();
        await new Promise((resolve, reject) => {
          if (!this.purchaseAsyncPopup$) {
            this.adapter.extra.exceptionUnsupported();
          }
          this.purchaseAsyncPopup$.onYes(this.handleOnYes$(resolve));
          this.purchaseAsyncPopup$.onNo(this.handleOnNo$(reject));
          this.purchaseAsyncPopup$.show(purchaseConfig);
          this.extra.isPopupShown = true;
        });
        const purchase = this.createMockPurchaseAsync$(purchaseConfig);
        return purchase;
      }
      async getPurchasesAsync() {
        await this.awaitRandomDelay$();
        this.randomError(GetPurchasesErrorList);
        const playerId = this.adapter.player.getID();
        if (!playerId) return [];
        const purchasesData = this.getPurchasesData$();
        const playerPurchases = purchasesData[playerId] || [];
        return playerPurchases;
      }
      async consumePurchaseAsync(purchaseToken) {
        await this.awaitRandomDelay$();
        this.validatePurchaseToken$(purchaseToken);
        this.randomError(ConsumePurchaseErrorList);
        const playerId = this.adapter.player.getID();
        if (!playerId) return;
        const purchasesData = this.getPurchasesData$();
        const playerPurchases = purchasesData[playerId] || [];
        const updatedPurchases = playerPurchases.filter((purchase) => purchase.purchaseToken !== purchaseToken);
        this.writePurchasesData$(playerId, updatedPurchases);
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
        return this.extra.awaitRandomDelay(RandomDelayMs);
      }
      randomError(errors) {
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
        this.extra.randomException(errors);
      }
      validatePurchaseConfig$(config) {
        const {
          Utils: { Object: O, Valid: V }
        } = Ludex;
        if (!V.isObject(config)) {
          this.extra.exceptionInvalidParam("Config must be an object");
        }
        if (!O.hasOwn(config, "productID")) {
          this.extra.exceptionInvalidParam("Config must have productID");
        }
        const { productID } = config;
        if (!V.isString(productID)) {
          this.extra.exceptionInvalidParam("productID must be a string");
        }
        if (O.hasOwn(config, "developerPayload") && !V.isString(config.developerPayload)) {
          this.extra.exceptionInvalidParam("developerPayload must be a string");
        }
      }
      validatePurchaseToken$(token) {
        const {
          Utils: { Valid: V }
        } = Ludex;
        if (!V.isString(token)) {
          this.extra.exceptionInvalidParam("Purchase token must be a string");
        }
      }
      createMockPurchaseAsync$(config) {
        const {
          Utils: { String: S }
        } = Ludex;
        const purchase = {
          productID: config.productID,
          paymentID: S.generateObjectId(),
          purchaseToken: S.generateObjectId(),
          purchaseTime: (/* @__PURE__ */ new Date()).toISOString(),
          developerPayload: config.developerPayload,
          signedRequest: S.generateObjectId()
        };
        const playerId = this.adapter.player.getID();
        if (playerId) {
          const purchasesData = this.getPurchasesData$();
          const playerPurchases = purchasesData[playerId] || [];
          playerPurchases.push(purchase);
          this.writePurchasesData$(playerId, playerPurchases);
        }
        return purchase;
      }
      async createMockProductsData() {
        const {
          Configs: {
            Mockup: {
              GameSDK: {
                Payments: { Enabled, Products }
              }
            }
          }
        } = Ludex;
        if (!Enabled) return;
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
            priceCurrencyCode: "USD"
          };
          this.writeProductData$(product.id, mockProduct);
          return mockProduct;
        });
      }
      getProductsData$() {
        const {
          Utils: { Browser: B, Valid: V }
        } = Ludex;
        const data = B.getLocalStorage(PRODUCTS_DATA_MOCK_KEY);
        if (!V.isObject(data)) return {};
        return data;
      }
      writeProductData$(id, data) {
        const products = this.getProductsData$();
        products[id] = data;
        this.writeProductsData$(products);
      }
      writeProductsData$(products) {
        const {
          Utils: { Browser: B, Valid: V }
        } = Ludex;
        if (!V.isObject(products)) return;
        B.writeLocalStorage(PRODUCTS_DATA_MOCK_KEY, products);
      }
      getPurchasesData$() {
        const {
          Utils: { Browser: B, Valid: V }
        } = Ludex;
        const data = B.getLocalStorage(PURCHASES_DATA_MOCK_KEY);
        if (!V.isObject(data)) return {};
        return data;
      }
      writePurchasesData$(playerId, purchases) {
        const {
          Utils: { Browser: B }
        } = Ludex;
        if (!Array.isArray(purchases)) return;
        const data = B.getLocalStorage(PURCHASES_DATA_MOCK_KEY) ?? {};
        data[playerId] = purchases;
        B.writeLocalStorage(PURCHASES_DATA_MOCK_KEY, data);
      }
      handleOnYes$ = (resolve) => () => {
        this.extra.isPopupShown = false;
        resolve(true);
      };
      handleOnNo$ = (reject) => () => {
        this.extra.isPopupShown = false;
        try {
          this.extra.exceptionUserInput("Player closed the context menu");
        } catch (error) {
          reject(error);
        }
      };
    };
    Payments_default = Payments;
  }
});

// extensions/ludex/src/game-sdk/sdk/GameSDK.ts
var GameSDK2, GameSDK_default;
var init_GameSDK = __esm({
  "extensions/ludex/src/game-sdk/sdk/GameSDK.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Context();
    init_Extra();
    init_Player();
    init_Tournament();
    init_Payments();
    GameSDK2 = class {
      extra;
      player;
      context;
      tournament;
      payments;
      shortcut$ = null;
      isInitialized = false;
      bannerAdInstances = {};
      rewardedVideoInstance = null;
      interstitialAdInstance = null;
      rewardedInterstitialInstance = null;
      initialize() {
        this.extra = new Extra_default(this);
        this.player = new Player_default(this);
        this.context = new Context_default(this);
        this.tournament = new Tournament_default(this);
        this.payments = new Payments_default(this);
      }
      isNeedSDK() {
        const gameConfig = define_GAME_SDK_CONFIG_default;
        return gameConfig?.AllowWithoutSDK !== true;
      }
      getLocale() {
        return Ludex.Utils.Browser.getLocale();
      }
      getPlatform() {
        const { Device: D } = Ludex.Utils;
        if (D.isAndroid()) return "ANDROID";
        if (D.isIOS()) return "IOS";
        if (D.isDesktop()) return "WEB";
        if (D.isMobile()) return "MOBILE_WEB";
        return null;
      }
      getSDKName() {
        return "Ludex";
      }
      getSDKVersion() {
        return "1.0.0";
      }
      async initializeAsync() {
        if (this.isInitialized) return;
        this.initialize();
        this.extra.createLoadingElement();
        if (this.isNeedSDK()) {
          await this.checkSDKInitialized();
        }
        await this.extra.waitLudexReadyAsync();
        await this.extra.delayInitialAsync();
        const params = Ludex.Utils.Browser.getQueryParams();
        console.info("Browser params:", params);
        const splashPreview = params.splashPreview;
        if (splashPreview) {
          this.extra.destroyLoadingElement();
          return;
        }
        const playerIdInQuery = params.playerId;
        this.player.initPlayerInfo(playerIdInQuery);
        const contextIdInQuery = params.context_source_id;
        const contextTypeInQuery = params.context_type;
        this.context.initContextInfo(contextIdInQuery, contextTypeInQuery);
        this.isInitialized = true;
      }
      async checkSDKInitialized() {
      }
      async startGameAsync(withEvent = true) {
        if (!this.isInitialized) {
          this.extra.exceptionInvalidOperation("GameSDK is not initialized");
        }
        await this.extra.delayStartAsync();
        const initPercent = 90;
        window.__sdkLoadingCount = initPercent;
        this.setLoadingProgress(initPercent);
        this.extra.destroyLoadingElement();
        const {
          Events,
          Utils: {
            Browser: { getQueryParams }
          }
        } = Ludex;
        const params = getQueryParams();
        const tournamentIdInQuery = params.tournament_id;
        await this.tournament.initTournamentInfoAsync(tournamentIdInQuery);
        await this.payments.initPaymentInfoAsync();
        if (withEvent) {
          codex.event.emit(Events.GAME_SDK_STARTED);
        }
      }
      setLoadingProgress(percentage) {
        this.extra.setLoadingElementProgress(percentage);
      }
      getEntryPointData() {
        const {
          Utils: { Browser: B, Json: J }
        } = Ludex;
        const { payload = "{}" } = B.getQueryParams();
        if (typeof payload !== "string") return {};
        return J.decode(payload);
      }
      async getEntryPointAsync() {
        return "no_entry";
      }
      async loadBannerAdAsync(placementId) {
        if (!placementId) return;
        if (!this.bannerAdInstances[placementId]) {
          const MockBannerInstance = (await import("./chunks-AU4TU3IL.js")).default;
          if (typeof MockBannerInstance !== "function") {
            this.extra.exceptionInvalidOperation("Banner ads mock is not enabled");
          }
          this.bannerAdInstances[placementId] = new MockBannerInstance("banner", placementId);
        }
        await this.bannerAdInstances[placementId].loadAsync();
        await this.bannerAdInstances[placementId].showAsync();
      }
      async hideBannerAdAsync(placementId) {
        if (!this.bannerAdInstances[placementId]) return;
        await this.bannerAdInstances[placementId].hideAsync();
      }
      getBannerHeight(bannerConfig) {
        return bannerConfig.BannerHeight;
      }
      async getInterstitialAdAsync(placementId) {
        if (!this.interstitialAdInstance) {
          const MockAdInstance = (await import("./chunks-FSJ5D4RP.js")).default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Interstitial ads mock is not enabled");
          }
          this.interstitialAdInstance = new MockAdInstance("interstitial", placementId);
        }
        return this.interstitialAdInstance;
      }
      async getRewardedVideoAsync(placementId) {
        if (!this.rewardedVideoInstance) {
          const MockAdInstance = (await import("./chunks-FSJ5D4RP.js")).default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Rewarded video ads mock is not enabled");
          }
          this.rewardedVideoInstance = new MockAdInstance("rewarded", placementId);
        }
        return this.rewardedVideoInstance;
      }
      async getRewardedInterstitialAsync(placementId) {
        if (!this.rewardedInterstitialInstance) {
          const MockAdInstance = (await import("./chunks-FSJ5D4RP.js")).default;
          if (typeof MockAdInstance !== "function") {
            this.extra.exceptionInvalidOperation("Rewarded interstitial ads mock is not enabled");
          }
          this.rewardedInterstitialInstance = new MockAdInstance("rewarded_interstitial", placementId);
        }
        return this.rewardedInterstitialInstance;
      }
      async getTournamentAsync() {
        this.tournament.randomError(["Unsupported", "NetworkFailure"]);
        const currentContextID = this.context.getID();
        const { Array: A, Valid: V } = Ludex.Utils;
        if (!V.isString(currentContextID)) {
          this.extra.exceptionInvalidOperation("Not in a context");
        }
        const tournaments = await this.tournament.getTournamentsAsync();
        const wantedTournament = A.search(tournaments, (tournament) => {
          return tournament.getContextID() === currentContextID;
        });
        if (!wantedTournament) {
          this.extra.exceptionTournamentNotFound("A Tournament with current context was not found");
        }
        return wantedTournament;
      }
      getSupportedAPIs() {
        const { CanSubscribeBot } = Ludex.Configs.Mockup.GameSDK.Player.SubscribeBot;
        if (CanSubscribeBot) {
          return ["player.canSubscribeBotAsync"];
        }
        return [];
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
        const MockAddShortcut = (await import("./chunks-T2I3ZXJK.js")).default;
        if (typeof MockAddShortcut !== "function") return;
        this.shortcut$ = new MockAddShortcut(this);
      }
    };
    GameSDK_default = GameSDK2;
  }
});

// extensions/ludex/src/game-sdk/sdk/AdInstance.ts
var AdInstance, AdInstance_default;
var init_AdInstance = __esm({
  "extensions/ludex/src/game-sdk/sdk/AdInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    AdInstance = class {
      type;
      placementId;
      constructor(type, placementId) {
        this.type = type;
        this.placementId = placementId;
      }
      getPlacementID() {
        return this.placementId;
      }
      async hideAsync() {
      }
    };
    AdInstance_default = AdInstance;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBAdInstance.ts
var STATE, NO_FILL_TIMEOUT, MAX_NO_FILL_COUNT, FBAdInstance, FBAdInstance_default;
var init_FBAdInstance = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBAdInstance.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_AdInstance();
    STATE = {
      CREATED: "CREATED",
      LOADED: "LOADED",
      WAITING_FOR_NO_FILL: "WAITING_FOR_NO_FILL",
      DISABLED: "DISABLED",
      SHOWN: "SHOWN"
    };
    NO_FILL_TIMEOUT = 3e4;
    MAX_NO_FILL_COUNT = 3;
    FBAdInstance = class extends AdInstance_default {
      instance = null;
      adsNoFillCount = 0;
      lastPreloadTime = 0;
      state = STATE.CREATED;
      adServiceName = "facebook";
      constructor(type, instance) {
        super(type, instance.getPlacementID());
        this.instance = instance;
        this.state = STATE.CREATED;
      }
      async loadAsync() {
        const {
          Utils: { Object: O },
          Plugins: {
            Ads: { AdError }
          }
        } = Ludex;
        if (this.instance === null) {
          throw new AdError("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
        }
        try {
          await this.instance.loadAsync();
          this.state = STATE.LOADED;
        } catch (error) {
          if (error instanceof Object && O.hasOwn(error, "code")) {
            if (error.code === "ADS_NO_FILL") {
              this.lastPreloadTime = Date.now();
              this.adsNoFillCount++;
              if (this.adsNoFillCount >= MAX_NO_FILL_COUNT) {
                this.state = STATE.DISABLED;
              } else {
                this.state = STATE.WAITING_FOR_NO_FILL;
              }
            }
          }
          throw error;
        }
      }
      async showAsync() {
        if (this.instance === null) {
          const { AdError } = Ludex.Plugins.Ads;
          throw new AdError("AD_INSTANCE_NOT_INITIATED", `Ad instance didn't initiated.`);
        }
        await this.instance.showAsync();
        this.state = STATE.SHOWN;
      }
      isLoaded() {
        return this.state === STATE.LOADED;
      }
      isDisabled() {
        return this.state === STATE.DISABLED;
      }
      isWaitingForNoFill() {
        return this.state === STATE.WAITING_FOR_NO_FILL;
      }
      canBeLoaded() {
        if (this.isWaitingForNoFill()) {
          const currentTime = Date.now();
          const diff = currentTime - this.lastPreloadTime;
          return diff >= NO_FILL_TIMEOUT;
        }
        return this.isLoaded();
      }
    };
    FBAdInstance_default = FBAdInstance;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBContext.ts
var FBContext, FBContext_default;
var init_FBContext = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBContext.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Context();
    FBContext = class extends Context_default {
      sdk;
      constructor(adapter) {
        super(adapter);
        this.sdk = adapter.sdk.context;
      }
      isMock() {
        return Ludex.Configs.Mockup.GameSDK.Context.Enabled;
      }
      isFallback() {
        if (this.isMock()) return true;
        return !this.adapter.isInitialized;
      }
      getID() {
        if (this.isFallback()) {
          return super.getID();
        }
        return this.sdk.getID();
      }
      getType() {
        if (this.isFallback()) {
          return super.getType();
        }
        if ("getType" in this.sdk) {
          return this.sdk.getType();
        }
        return super.getType();
      }
      isSizeBetween(min, max) {
        if (!("isSizeBetween" in this.sdk)) return null;
        return this.sdk.isSizeBetween(min, max);
      }
      async switchAsync(id, switchSilentlyIfSolo = false) {
        if (this.isFallback()) {
          return super.switchAsync(id, switchSilentlyIfSolo);
        }
        return this.sdk.switchAsync(id, switchSilentlyIfSolo);
      }
      async chooseAsync(options) {
        if (this.isFallback()) {
          return super.chooseAsync(options);
        }
        return this.sdk.chooseAsync(options);
      }
      async createAsync(playerID) {
        if (this.isFallback()) {
          return super.createAsync(playerID);
        }
        if (!("createAsync" in this.sdk)) return;
        return this.sdk.createAsync(playerID);
      }
      async getPlayersAsync() {
        if (this.isFallback()) {
          return super.getPlayersAsync();
        }
        if (!("getPlayersAsync" in this.sdk)) return [];
        return this.sdk.getPlayersAsync();
      }
    };
    FBContext_default = FBContext;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/functions/catchGamepadsPermission.ts
var logged, catchGamepadsPermission, catchGamepadsPermission_default;
var init_catchGamepadsPermission = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/functions/catchGamepadsPermission.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    logged = false;
    catchGamepadsPermission = () => {
      const getGamepads = window.navigator.getGamepads;
      window.navigator.getGamepads = () => {
        try {
          return getGamepads();
        } catch (error) {
          if (!logged) {
            console.warn("Failed to get gamepads", error);
            logged = true;
          }
          return [];
        }
      };
    };
    catchGamepadsPermission_default = catchGamepadsPermission;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/functions/createShortcut.ts
var isCalledCreateShortcut, createShortcutAsync, createShortcut_default;
var init_createShortcut = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/functions/createShortcut.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    isCalledCreateShortcut = false;
    createShortcutAsync = async () => {
      if (isCalledCreateShortcut) return;
      try {
        const isSupported = GameSDK.getSupportedAPIs().indexOf("canCreateShortcutAsync") > -1;
        if (!isSupported) return;
        const { analytics } = codex;
        const data = await FBInstant.player.getDataAsync(["lastCallCreateShortcut"]) || {};
        const time = data.lastCallCreateShortcut || 0;
        if (time && Ludex.Utils.Time.isToday(+time)) {
          isCalledCreateShortcut = true;
          return;
        }
        const today = Date.now();
        FBInstant.player.setDataAsync({ lastCallCreateShortcut: today });
        const canCreateShortcut = await FBInstant.canCreateShortcutAsync();
        if (canCreateShortcut) {
          const {
            Utils: { Valid: V },
            Plugins: {
              Analytics: { Events }
            }
          } = Ludex;
          isCalledCreateShortcut = true;
          analytics.event(Events.SHORTCUT_CREATE_POPUP);
          try {
            await V.isValueChangeAsync(() => window.__sdkInitiated, true, {
              timeout: 1e4,
              checkInterval: 100
            });
            await FBInstant.createShortcutAsync();
            analytics.event(Events.SHORTCUT_CREATE, { success: true });
          } catch (error) {
            analytics.event(Events.SHORTCUT_CREATE, { success: false });
          }
        }
      } catch (error) {
        console.warn("attemptToAddShortcut", error);
      }
    };
    createShortcut_default = createShortcutAsync;
  }
});

// extensions/ludex/src/game-sdk/exceptions/WideFrameRenderFail.ts
var WideFrameRenderFail, WideFrameRenderFail_default;
var init_WideFrameRenderFail = __esm({
  "extensions/ludex/src/game-sdk/exceptions/WideFrameRenderFail.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    WideFrameRenderFail = class extends Error {
      payload;
      constructor(message, payload) {
        super(message);
        this.name = "WideFrameRenderFail";
        this.message = message ?? "Wide frame render fail";
        this.payload = payload;
      }
    };
    WideFrameRenderFail_default = WideFrameRenderFail;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/functions/inviteWithWideframe.ts
var validateImageRender, inviteWithCurrentScoreAsync, inviteWithBestScoreAsync;
var init_inviteWithWideframe = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/functions/inviteWithWideframe.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_WideFrameRenderFail();
    validateImageRender = async (imageShare) => {
      if (typeof imageShare !== "string" || !imageShare) {
        throw new WideFrameRenderFail_default(void 0, { imageShare });
      }
    };
    inviteWithCurrentScoreAsync = async () => {
      const {
        Plugins: {
          Analytics: {
            Events: { INVITE }
          }
        }
      } = Ludex;
      const { match, player, analytics, frameCapture } = codex;
      try {
        const { playerId, name: playerName, photo: playerPhoto } = player.getPlayer();
        const { profiles } = match.getMatchState();
        const { score: playerScore = 0 } = profiles[playerId] || {};
        const imageShare = await frameCapture.wideframe.renderShareScore({
          playerId,
          playerPhoto,
          playerScore
        });
        await validateImageRender(imageShare);
        await FBInstant.inviteAsync({
          text: {
            default: "Easy! I have a new score!",
            localizations: {
              vi_VN: "A ha! M\xECnh v\u1EEBa \u0111\u1EA1t m\u1ED9t \u0111i\u1EC3m m\u1EDBi!"
            }
          },
          image: imageShare ?? "",
          data: { playerId, playerName, playerPhoto, type: "share_invite" }
        });
        analytics.event(INVITE, {
          invite_content_type: "CurrentScore",
          success: true
        });
      } catch (error) {
        analytics.event(INVITE, {
          invite_content_type: "CurrentScore",
          success: false
        });
        console.warn(error);
      }
    };
    inviteWithBestScoreAsync = async () => {
      const {
        Plugins: {
          Analytics: {
            Events: { INVITE }
          }
        }
      } = Ludex;
      const { player, analytics, frameCapture } = codex;
      try {
        const { playerId, name: playerName, photo: playerPhoto, data } = player.getPlayer();
        const { score: playerScore } = data || {};
        const imageShare = await frameCapture.wideframe.renderShareScore({
          playerId,
          playerPhoto,
          playerScore
        });
        await validateImageRender(imageShare);
        await FBInstant.inviteAsync({
          text: {
            default: "Great! I have a best score!",
            localizations: {
              vi_VN: "Th\u1EADt tuy\u1EC7t! M\xECnh v\u1EEBa ph\xE1 k\u1EF7 l\u1EE5c n\xE0y!"
            }
          },
          image: imageShare ?? "",
          data: { playerId, playerName, playerPhoto, type: "share_invite" }
        });
        analytics.event(INVITE, {
          invite_content_type: "BestScore",
          success: true
        });
      } catch (error) {
        analytics.event(INVITE, {
          invite_content_type: "BestScore",
          success: false
        });
        console.warn(error);
      }
    };
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/functions/shareWithWideframe.ts
var validateImageRender2, shareBestScoreAsync, shareLeaderboardsAsync, defaultStats, renderWideframesLeaderboard,
addLeaders, shareGameResultAsync, renderWideframesGameResult;
var init_shareWithWideframe = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/functions/shareWithWideframe.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_WideFrameRenderFail();
    validateImageRender2 = async (imageShare) => {
      if (typeof imageShare !== "string" || !imageShare) {
        throw new WideFrameRenderFail_default(void 0, { imageShare });
      }
    };
    shareBestScoreAsync = async () => {
      const {
        Plugins: {
          Analytics: {
            Events: { SHARE }
          }
        }
      } = Ludex;
      const { player, analytics, frameCapture } = codex;
      try {
        const { playerId, name: playerName, photo: playerPhoto, data } = player.getPlayer();
        const { score: playerScore } = data || {};
        const imageShare = await frameCapture.wideframe.renderShareScore({
          playerId,
          playerPhoto,
          playerScore
        });
        await validateImageRender2(imageShare);
        await FBInstant.shareAsync({
          text: "Great! I have a best score!",
          intent: "SHARE",
          image: imageShare ?? "",
          data: { playerId, playerName, playerPhoto, type: "share_invite" }
        });
        analytics.event(SHARE, {
          share_content_type: "BestScore",
          success: true
        });
      } catch (error) {
        analytics.event(SHARE, {
          share_content_type: "BestScore",
          success: false
        });
        console.warn(error);
      }
    };
    shareLeaderboardsAsync = async () => {
      const { player, analytics } = codex;
      const {
        Plugins: {
          Analytics: {
            Events: { SHARE }
          }
        }
      } = Ludex;
      try {
        const imageShare = await renderWideframesLeaderboard();
        validateImageRender2(imageShare);
        const { playerId, name: playerName, photo: playerPhoto } = player.getPlayer();
        await FBInstant.shareAsync({
          text: `A ha, I'm the best!`,
          intent: "CHALLENGE",
          image: imageShare ?? "",
          data: { playerId, playerName, playerPhoto, type: "share_invite" }
        });
        analytics.event(SHARE, {
          share_content_type: "Leaderboard",
          success: true
        });
      } catch (error) {
        analytics.event(SHARE, {
          share_content_type: "Leaderboard",
          success: false
        });
        console.warn(error);
      }
    };
    defaultStats = {
      id: "10",
      name: "",
      photo: "./assets/images/others/avatar.png",
      score: 0
    };
    renderWideframesLeaderboard = async () => {
      const {
        Utils: { Object: O }
      } = Ludex;
      const { player, frameCapture, leaderboard } = codex;
      const { playerId, photo: playerPhoto } = player.getPlayer();
      const playerIds = player.getConnectedPlayerIds(10, 0);
      playerIds.push(playerId);
      const leaderboardName = "friends";
      if (leaderboard.isLeaderboardEmpty(leaderboardName)) {
        await leaderboard.requestLeaderboardAsync(leaderboardName, playerIds.length);
      }
      const leaderboardData = leaderboard.getLeaderboard(leaderboardName);
      if (!leaderboardData) return null;
      const { leaders } = leaderboardData;
      const playerStats = __spreadValues({}, defaultStats);
      if (O.hasOwn(leaders, playerId)) {
        playerStats.id = playerId;
        playerStats.score = leaders[playerId].score;
      }
      const listLeaders = [];
      listLeaders.push(playerStats);
      addLeaders(leaders, listLeaders, playerStats);
      if (listLeaders.length < 3) {
        let i = 0;
        while (i <= 3 - listLeaders.length) {
          listLeaders.push({
            id: `bot${i}`,
            name: "???",
            score: 0,
            photo: "./assets/images/others/avatar.png"
          });
          i++;
        }
      }
      const payload = {
        playerId,
        playerPhoto,
        leaders: listLeaders
      };
      return frameCapture.wideframe.renderShareLeaderboard(payload);
    };
    addLeaders = (leaders, listLeaders, playerStats) => {
      const {
        Utils: { Object: O }
      } = Ludex;
      for (const leaderId in leaders) {
        if (O.hasOwn(leaders, leaderId)) {
          const leader = leaders[leaderId];
          if (listLeaders.length === 3) break;
          if (leader.playerId === playerStats.id) continue;
          if (Number(leader.score) > Number(playerStats.score)) continue;
          listLeaders.push({
            id: leader.playerId,
            name: leader.name,
            photo: leader.photo,
            score: leader.score
          });
        }
      }
    };
    shareGameResultAsync = async () => {
      const {
        Plugins: {
          Analytics: {
            Events: { SHARE }
          }
        }
      } = Ludex;
      const { player, analytics } = codex;
      try {
        const imageShare = await renderWideframesGameResult();
        validateImageRender2(imageShare);
        const { playerId, name: playerName, photo: playerPhoto } = player.getPlayer();
        await FBInstant.shareAsync({
          text: "Phew, a great match!",
          intent: "SHARE",
          image: imageShare ?? "",
          data: { playerId, playerName, playerPhoto, type: "share_invite" }
        });
        analytics.event(SHARE, {
          share_content_type: "MatchResult",
          success: true
        });
      } catch (error) {
        analytics.event(SHARE, {
          share_content_type: "MatchResult",
          success: false
        });
        console.warn(error);
      }
    };
    renderWideframesGameResult = async () => {
      const { match, frameCapture } = codex;
      const matchState = match.getMatchState();
      const { profiles, customData } = matchState;
      const { playerId, opponentId } = customData;
      if (!playerId || !opponentId) return null;
      const playerProfile = profiles[playerId];
      const opponentProfile = profiles[opponentId];
      if (!playerProfile || !opponentProfile) return null;
      const { photo: playerPhoto, score: playerScore = 0, finished: isPlayerFinished = false } = playerProfile;
      const { photo: opponentPhoto, score: opponentScore = 0, finished: isOpponentFinished = false } = opponentProfile;
      const payload = {
        playerId,
        playerPhoto,
        playerScore,
        opponentId,
        opponentPhoto,
        opponentScore,
        isPlayerFinished,
        isOpponentFinished
      };
      return frameCapture.wideframe.renderResultChallenge(payload);
    };
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/functions/subscribeBot.ts
var isCalledSubscribeBot, subscribeBotAsync, subscribeBot_default;
var init_subscribeBot = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/functions/subscribeBot.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    isCalledSubscribeBot = false;
    subscribeBotAsync = async () => {
      if (isCalledSubscribeBot) return false;
      try {
        const isSupported = GameSDK.getSupportedAPIs().indexOf("player.canSubscribeBotAsync") > -1;
        if (!isSupported) return false;
        const canSubscribeBot = await GameSDK.player.canSubscribeBotAsync();
        if (canSubscribeBot) {
          const data = await GameSDK.player.getDataAsync(["lastCallSubscribeBot"]) || {};
          const time = data.lastCallSubscribeBot || 0;
          isCalledSubscribeBot = true;
          const {
            Utils: { Valid: V, Time: T },
            Plugins: {
              Analytics: { Events }
            }
          } = Ludex;
          if (time && T.isToday(+time)) return false;
          const today = Date.now();
          GameSDK.player.setDataAsync({ lastCallSubscribeBot: today });
          const { analytics } = codex;
          analytics.event(Events.BOT_SUBSCRIBE_POPUP);
          try {
            await V.isValueChangeAsync(() => window.__sdkInitiated, true, {
              timeout: 1e4,
              checkInterval: 100
            });
            await GameSDK.player.subscribeBotAsync();
            analytics.event(Events.BOT_SUBSCRIBE, { success: true });
            return true;
          } catch (error) {
            analytics.event(Events.BOT_SUBSCRIBE, { success: false });
            return false;
          }
        }
        return false;
      } catch (error) {
        return false;
      }
    };
    subscribeBot_default = subscribeBotAsync;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBExtra.ts
var FBExtra, FBExtra_default;
var init_FBExtra = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBExtra.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Extra();
    init_catchGamepadsPermission();
    init_createShortcut();
    init_inviteWithWideframe();
    init_shareWithWideframe();
    init_subscribeBot();
    FBExtra = class extends Extra_default {
      sdk;
      constructor(adapter) {
        super(adapter);
        this.sdk = adapter.sdk;
        this.adapter = adapter;
      }
      quit() {
        this.sdk.quit();
      }
      logEvent(eventName, valueToSum, parameters) {
        if (!this.adapter.isInitialized) return null;
        if (!("logEvent" in this.sdk)) return null;
        return this.sdk.logEvent(eventName, valueToSum, parameters);
      }
      onPause(callback) {
        this.sdk.onPause(callback);
      }
      onResume(callback) {
        this.sdk.onResume(callback);
      }
      async subscribeBotAsync() {
        if (Ludex.Configs.Mockup.GameSDK.Player.SubscribeBot.Enabled) {
          return super.subscribeBotAsync();
        }
        return subscribeBot_default();
      }
      async shareAsync(payload) {
        return this.sdk.shareAsync(payload);
      }
      async updateAsync(payload) {
        let isSuccess = false;
        try {
          await this.sdk.updateAsync(payload);
          isSuccess = true;
        } finally {
          this.logUpdateMessageEvent(payload, isSuccess);
        }
      }
      logUpdateMessageEvent(payload, isSuccess) {
        if (!codex?.analytics) return;
        let type = "";
        if ("data" in payload) {
          type = payload.data.type;
        }
        const { Analytics } = Ludex.Plugins;
        codex.analytics.event(Analytics.Events.MESSAGE, {
          success: isSuccess,
          message_content_type: type || "Unknown"
        });
      }
      async switchGameAsync(appId, data) {
        return this.sdk.switchGameAsync(appId, data);
      }
      setSessionData(sessionData) {
        this.sdk.setSessionData(sessionData);
      }
      async getLeaderboardAsync(name) {
        return this.sdk.getLeaderboardAsync(name);
      }
      async postSessionScoreAsync(score) {
        return this.sdk.postSessionScoreAsync(score);
      }
      // * Group methods
      async checkCanPlayerMatchAsync() {
        return this.sdk.checkCanPlayerMatchAsync();
      }
      async matchPlayerAsync(matchTag, switchContextWhenMatched, offlineMatch) {
        return this.sdk.matchPlayerAsync(matchTag, switchContextWhenMatched, offlineMatch);
      }
      // * Page methods
      async canFollowOfficialPageAsync() {
        return this.sdk.canFollowOfficialPageAsync();
      }
      async followOfficialPageAsync() {
        return this.sdk.followOfficialPageAsync();
      }
      async canJoinOfficialGroupAsync() {
        return this.sdk.canJoinOfficialGroupAsync();
      }
      async joinOfficialGroupAsync() {
        return this.sdk.joinOfficialGroupAsync();
      }
      async performHapticFeedbackAsync() {
        return this.sdk.performHapticFeedbackAsync();
      }
      async inviteAsync(payload) {
        return this.sdk.inviteAsync(payload);
      }
      async shareLinkAsync(payload) {
        return this.sdk.shareLinkAsync(payload);
      }
      // ? Extra methods for wideframe
      async inviteWithBestScoreAsync() {
        return inviteWithBestScoreAsync();
      }
      async inviteWithCurrentScoreAsync() {
        return inviteWithCurrentScoreAsync();
      }
      async shareBestScoreAsync() {
        return shareBestScoreAsync();
      }
      async shareLeaderboardsAsync() {
        return shareLeaderboardsAsync();
      }
      async shareGameResultAsync() {
        return shareGameResultAsync();
      }
      createLoadingElement() {
      }
      // ? Custom methods
      async checkAndCreateShortcutAsync() {
        return await createShortcut_default();
      }
      canBeLoadedAd(instance) {
        return instance.canBeLoaded();
      }
      async autoOverlayView(xmlString, initialData, cssObject) {
        if (!("overlayViews" in this.adapter.sdk)) return null;
        const { overlayViews } = this.adapter.sdk;
        this.injectCSS(cssObject);
        const result = new Promise((resolve, reject) => {
          overlayViews.createOverlayViewWithXMLString(
            xmlString,
            void 0,
            initialData,
            (overlayView) => {
              resolve(overlayView);
            },
            (overlayView, error) => {
              console.warn("Error creating overlay view", error, overlayView);
              reject(error);
            }
          );
        });
        console.log("autoOverlayView result", result);
        return result;
      }
      injectCSS(cssObject) {
        const styleElement = document.createElement("style");
        for (const [key, value] of Object.entries(cssObject)) {
          styleElement.textContent += `${key} { ${Object.entries(value).map(([k, v]) => `${k}: ${v}`).
          join(";")} }`;
        }
        document.head.appendChild(styleElement);
      }
      // * Not public methods
      catchGamepadsPermission() {
        catchGamepadsPermission_default();
      }
    };
    FBExtra_default = FBExtra;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBGraphApi.ts
var FBGraphApi, FBGraphApi_default;
var init_FBGraphApi = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBGraphApi.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    FBGraphApi = class {
      sdk;
      adapter;
      constructor(adapter) {
        this.adapter = adapter;
        this.sdk = this.adapter.sdk.graphApi;
      }
      async requestAsync(path, method, params) {
        return this.sdk.requestAsync(path, method, params);
      }
      async initPlatformAsync() {
        return this.sdk.initPlatformAsync();
      }
      async getPlayerASIDAsync() {
        return this.sdk.getPlayerASIDAsync();
      }
    };
    FBGraphApi_default = FBGraphApi;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBOverlayViews.ts
var FBOverlayViews, FBOverlayViews_default;
var init_FBOverlayViews = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBOverlayViews.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    FBOverlayViews = class {
      sdk;
      adapter;
      constructor(adapter) {
        this.adapter = adapter;
        this.sdk = this.adapter.sdk.overlayViews;
      }
      validateXMLString(xmlString) {
        const disallowedCharacters = ["^", "$", "&", "*", "+", "=", "[", "]", "/", "{", "}", "|", '"',
        "<", ">", "~"];
        return !disallowedCharacters.some((char) => xmlString.includes(char));
      }
      createOverlayView(fullyQualifiedOverlayViewFilename, pathToCSS, initialData, onInitializedSuccessCallback, onInitializedErrorCallback) {
        return this.sdk.createOverlayView(
          fullyQualifiedOverlayViewFilename,
          pathToCSS,
          initialData,
          onInitializedSuccessCallback,
          onInitializedErrorCallback
        );
      }
      createOverlayViewWithXMLString(xmlString, pathToCSS, initialData, onInitializedSuccessCallback, onInitializedErrorCallback) {
        if (!this.validateXMLString(xmlString)) {
          throw new Error("Invalid XML string");
        }
        return this.sdk.createOverlayViewWithXMLString(
          xmlString,
          pathToCSS,
          initialData,
          onInitializedSuccessCallback,
          onInitializedErrorCallback
        );
      }
      setCustomEventHandler(callback) {
        this.sdk.setCustomEventHandler(callback);
      }
    };
    FBOverlayViews_default = FBOverlayViews;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBPayments.ts
var FBPayments, FBPayments_default;
var init_FBPayments = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBPayments.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Payments();
    FBPayments = class extends Payments_default {
      sdk;
      constructor(adapter) {
        super(adapter);
        this.sdk = adapter.sdk.payments;
      }
      isMock() {
        const { Mockup } = Ludex.Configs;
        return Mockup.GameSDK.Payments.Enabled;
      }
      async getCatalogAsync() {
        if (this.isMock()) {
          return super.getCatalogAsync();
        }
        return this.sdk.getCatalogAsync();
      }
      async purchaseAsync(purchaseConfig) {
        if (this.isMock()) {
          return super.purchaseAsync(purchaseConfig);
        }
        return this.sdk.purchaseAsync(purchaseConfig);
      }
      async getPurchasesAsync() {
        if (this.isMock()) {
          return super.getPurchasesAsync();
        }
        return this.sdk.getPurchasesAsync();
      }
      async consumePurchaseAsync(purchaseToken) {
        if (this.isMock()) {
          return super.consumePurchaseAsync(purchaseToken);
        }
        return this.sdk.consumePurchaseAsync(purchaseToken);
      }
      onReady(callback) {
        if (this.isMock()) {
          super.onReady(callback);
        } else {
          this.sdk.onReady(callback);
        }
      }
    };
    FBPayments_default = FBPayments;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBPlayer.ts
var FBPlayer, FBPlayer_default;
var init_FBPlayer = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBPlayer.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Player();
    FBPlayer = class extends Player_default {
      sdk;
      constructor(adapter) {
        super(adapter);
        this.sdk = adapter.sdk.player;
        this.extra.isGuest = false;
      }
      isFallback() {
        return !this.adapter.isInitialized;
      }
      getID() {
        const id = this.sdk.getID();
        if (!id || this.isFallback()) {
          return super.getID();
        }
        return id;
      }
      getName() {
        let name = null;
        if ("getName" in this.sdk) {
          name = this.sdk.getName();
        }
        if (!name || this.isFallback()) {
          return super.getName();
        }
        return name;
      }
      getPhoto() {
        let photo = null;
        if ("getPhoto" in this.sdk) {
          photo = this.sdk.getPhoto();
        }
        if (!photo || this.isFallback()) {
          return super.getPhoto();
        }
        return photo;
      }
      async getDataAsync(keys) {
        if (this.isFallback()) {
          return super.getDataAsync(keys);
        }
        return this.sdk.getDataAsync(keys);
      }
      async setDataAsync(data) {
        if (this.isFallback()) {
          return super.setDataAsync(data);
        }
        return this.sdk.setDataAsync(data);
      }
      async flushDataAsync() {
        return this.sdk.flushDataAsync();
      }
      async getASIDAsync() {
        if (!("getASIDAsync" in this.sdk)) return null;
        return this.sdk.getASIDAsync();
      }
      async getSignedASIDAsync() {
        if (!("getSignedASIDAsync" in this.sdk)) return null;
        return this.sdk.getSignedASIDAsync();
      }
      async getSignedPlayerInfoAsync(requestPayload) {
        if (this.isFallback()) {
          return super.getSignedPlayerInfoAsync();
        }
        if (this.extra.isRestricted()) {
          this.extra.exceptionUnsupported();
        }
        return this.sdk.getSignedPlayerInfoAsync(requestPayload);
      }
      async canSubscribeBotAsync() {
        if (Ludex.Configs.Mockup.GameSDK.Player.SubscribeBot.Enabled) {
          return super.canSubscribeBotAsync();
        }
        return this.sdk.canSubscribeBotAsync();
      }
      async subscribeBotAsync() {
        if (Ludex.Configs.Mockup.GameSDK.Player.SubscribeBot.Enabled) {
          return super.subscribeBotAsync();
        }
        return this.sdk.subscribeBotAsync();
      }
      async getConnectedPlayersAsync() {
        if (Ludex.Configs.Mockup.GameSDK.Player.ConnectedPlayers.Enabled) {
          return super.getConnectedPlayersAsync();
        }
        if (!("getConnectedPlayersAsync" in this.sdk)) return [];
        return this.sdk.getConnectedPlayersAsync();
      }
    };
    FBPlayer_default = FBPlayer;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBTournament.ts
var FBTournament, FBTournament_default;
var init_FBTournament = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBTournament.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_Tournament();
    FBTournament = class extends Tournament_default {
      sdk;
      constructor(adapter) {
        super(adapter);
        this.sdk = adapter.sdk.tournament;
      }
      isMock() {
        const { Mockup } = Ludex.Configs;
        return Mockup.GameSDK.Tournament.Enabled;
      }
      async createAsync(payload) {
        if (this.isMock()) {
          return super.createAsync(payload);
        }
        return this.sdk.createAsync(payload);
      }
      async shareAsync(payload) {
        if (this.isMock()) {
          return super.shareAsync(payload);
        }
        return this.sdk.shareAsync(payload);
      }
      async joinAsync(tournamentID) {
        if (this.isMock()) {
          return super.joinAsync(tournamentID);
        }
        return this.sdk.joinAsync(tournamentID);
      }
      async postScoreAsync(score) {
        if (this.isMock()) {
          return super.postScoreAsync(score);
        }
        return this.sdk.postScoreAsync(score);
      }
      async getTournamentsAsync() {
        if (this.isMock()) {
          return super.getTournamentsAsync();
        }
        if (this.extra.isRestricted()) {
          this.extra.exceptionUnsupported();
        }
        return this.sdk.getTournamentsAsync();
      }
    };
    FBTournament_default = FBTournament;
  }
});

// extensions/ludex/src/game-sdk/adapters/facebook/FBAdapter.ts
var FBAdapter, FBAdapter_default;
var init_FBAdapter = __esm({
  "extensions/ludex/src/game-sdk/adapters/facebook/FBAdapter.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    init_GameSDK();
    init_FBAdInstance();
    init_FBContext();
    init_FBExtra();
    init_FBGraphApi();
    init_FBOverlayViews();
    init_FBPayments();
    init_FBPlayer();
    init_FBTournament();
    FBAdapter = class extends GameSDK_default {
      sdk;
      graphApi;
      overlayViews;
      // ? In Android, if you call certain APIs, it can affect FPS performance.
      supportedAPIs$ = [];
      constructor(sdk) {
        super();
        this.sdk = sdk;
      }
      initialize() {
        super.initialize();
        this.extra = new FBExtra_default(this);
        this.player = new FBPlayer_default(this);
        this.context = new FBContext_default(this);
        this.graphApi = new FBGraphApi_default(this);
        this.payments = new FBPayments_default(this);
        this.tournament = new FBTournament_default(this);
        this.overlayViews = new FBOverlayViews_default(this);
        this.extra.catchGamepadsPermission();
      }
      getLocale() {
        if (!this.isInitialized) {
          return super.getLocale();
        }
        return this.sdk.getLocale();
      }
      getPlatform() {
        if (!this.isInitialized) {
          return super.getPlatform();
        }
        return this.sdk.getPlatform();
      }
      getSDKName() {
        return "FacebookInstant";
      }
      getSDKVersion() {
        return this.sdk.getSDKVersion();
      }
      async checkSDKInitialized() {
        if (!this.sdk) {
          this.extra.exceptionInvalidOperation("Facebook Instant Games SDK is not initialized");
        }
      }
      async initializeAsync() {
        if (this.isInitialized) return;
        await super.initializeAsync();
        this.isInitialized = false;
        try {
          this.extra.destroyLoadingElement();
          await this.sdk.initializeAsync();
          this.isInitialized = true;
          this.setLoadingProgress(1);
        } catch (error) {
          console.debug(error);
          const message = this.extra.getErrorMessage(error);
          if (message && message.indexOf("already") > -1) {
            this.isInitialized = true;
            return;
          }
          if (this.isNeedSDK()) {
            throw new Error("Facebook Instant SDK not initialized");
          }
          console.warn("Facebook Instant SDK not initialized, running without platform sdk");
        }
      }
      setLoadingProgress(progress) {
        if (!this.isInitialized) {
          super.setLoadingProgress(progress);
        } else {
          this.sdk.setLoadingProgress(progress);
        }
      }
      async startGameAsync() {
        const withEvent = false;
        await super.startGameAsync(withEvent);
        if (!this.isInitialized) return;
        await this.sdk.startGameAsync();
        this.setLoadingProgress(100);
        codex.event.emit(Ludex.Events.GAME_SDK_STARTED);
      }
      getSupportedAPIs() {
        if (this.supportedAPIs$.length < 1) {
          this.supportedAPIs$ = this.sdk.getSupportedAPIs();
        }
        return this.supportedAPIs$;
      }
      getEntryPointData() {
        return this.sdk.getEntryPointData() || {};
      }
      async getEntryPointAsync() {
        if (this.extra.isRestricted()) return "no_entry";
        return this.sdk.getEntryPointAsync();
      }
      async canCreateShortcutAsync() {
        const { AddShortcut } = Ludex.Configs.Mockup.GameSDK;
        if (AddShortcut.Enabled) {
          return super.canCreateShortcutAsync();
        }
        return this.sdk.canCreateShortcutAsync();
      }
      async createShortcutAsync() {
        const { AddShortcut } = Ludex.Configs.Mockup.GameSDK;
        if (AddShortcut.Enabled) {
          return super.createShortcutAsync();
        }
        return this.sdk.createShortcutAsync();
      }
      async getInterstitialAdAsync(placementId) {
        const { Ads } = Ludex.Configs.Mockup;
        if (Ads.Enabled) {
          return super.getInterstitialAdAsync(placementId);
        }
        const fbAdInstance = await this.sdk.getInterstitialAdAsync(placementId);
        return new FBAdInstance_default("interstitial", fbAdInstance);
      }
      async getRewardedVideoAsync(placementId) {
        const { Ads } = Ludex.Configs.Mockup;
        if (Ads.Enabled) {
          return super.getRewardedVideoAsync(placementId);
        }
        const fbAdInstance = await this.sdk.getRewardedVideoAsync(placementId);
        return new FBAdInstance_default("rewarded", fbAdInstance);
      }
      async getRewardedInterstitialAsync(placementId) {
        const { Ads } = Ludex.Configs.Mockup;
        if (Ads.Enabled) {
          return super.getRewardedInterstitialAsync(placementId);
        }
        const fbAdInstance = await this.sdk.getRewardedInterstitialAsync(placementId);
        return new FBAdInstance_default("rewarded_interstitial", fbAdInstance);
      }
      async loadBannerAdAsync(placementId) {
        const { Ads } = Ludex.Configs.Mockup;
        if (Ads.Enabled) {
          return super.loadBannerAdAsync(placementId);
        }
        return this.sdk.loadBannerAdAsync(placementId);
      }
      async hideBannerAdAsync() {
        const {
          Ads: { BannerDisplayAdOptions },
          Mockup: { Ads }
        } = Ludex.Configs;
        if (Ads.Enabled) {
          for (const { PlacementId } of BannerDisplayAdOptions) {
            await super.hideBannerAdAsync(PlacementId);
          }
          return;
        }
        return this.sdk.hideBannerAdAsync();
      }
      getBannerHeight(_bannerConfig) {
        const { Device: D } = Ludex.Utils;
        return D.isDesktop() ? 70 : 50;
      }
      async getTournamentAsync() {
        const { Tournament: Tournament2 } = Ludex.Configs.Mockup.GameSDK;
        if (Tournament2.Enabled) {
          return super.getTournamentAsync();
        }
        if (this.extra.isRestricted()) {
          this.extra.exceptionUnsupported();
        }
        return this.sdk.getTournamentAsync();
      }
    };
    FBAdapter_default = FBAdapter;
  }
});

// extensions/ludex/src/utils/function/accessBlocker.ts
var AccessBlocker, accessBlocker, wrapGetterToBlockObjectAccess, accessBlocker_default;
var init_accessBlocker = __esm({
  "extensions/ludex/src/utils/function/accessBlocker.ts"() {
    "use strict";
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    AccessBlocker = class {
      usedCallLocations;
      constructor() {
        this.usedCallLocations = /* @__PURE__ */ Object.create(null);
      }
      getCallerLine() {
        const error = new Error();
        if (!error.stack) return null;
        const stackLines = error.stack.split("\n");
        const callerLine = stackLines[4];
        const trimmedCallerLine = callerLine ? callerLine.trim() : null;
        return trimmedCallerLine;
      }
      blockAccess() {
        try {
          const callerLine = this.getCallerLine();
          if (!callerLine) return false;
          if (this.usedCallLocations[callerLine]) return false;
          const blockedKeywords = ["eval", "at <", "(<"];
          if (blockedKeywords.some((keyword) => callerLine.includes(keyword))) {
            throw new Error(`Access blocked for the caller: ${callerLine}`);
          }
          this.usedCallLocations[callerLine] = true;
          return false;
        } catch (error) {
          console.warn("Block access encountered an error:", error);
          return true;
        }
      }
    };
    accessBlocker = new AccessBlocker();
    wrapGetterToBlockObjectAccess = (source, key) => {
      if (true) return;
      if (false) return;
      const propertyDescriptor = Object.getOwnPropertyDescriptor(source, key);
      if (!propertyDescriptor) {
        console.debug(`Property descriptor not found for key: ${key}`);
        return;
      }
      const { value, get, initializer } = propertyDescriptor;
      if (value && typeof value !== "object") {
        console.debug(`Property value is not an object for key: ${key}`);
        return;
      }
      if (get && typeof get !== "function") {
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
          return value ?? initializer?.call(this) ?? get?.call(this);
        },
        set() {
          console.debug(`Setter called for key: ${key}, modification is blocked.`);
        }
      });
    };
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
    sdkAdapter = new FBAdapter_default(window.FBInstant);
  } else if ("YaGames" in w) {
    sdkName = "Yandex";
    sdkAdapter = new empty_script_default(window.YaGames);
  } else if ("funmax" in w) {
    sdkName = "Xiaomi";
    sdkAdapter = new empty_script_default(window.funmax);
  } else if ("$msstart" in w) {
    sdkName = "MsGames";
    sdkAdapter = new empty_script_default(window.$msstart);
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
  } else if (false) {
    sdkName = "AndroidNative";
    sdkAdapter = new ANAdapter();
  } else {
    sdkAdapter = new GameSDK_default();
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
    init_FBAdapter();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_empty_script();
    init_GameSDK();
    init_accessBlocker();
    console.groupCollapsed("\u26A1\uFE0F Ludex initialized");
    console.groupCollapsed("\u{1F579}\uFE0F GameSDK");
    window.GameSDK = Object.seal(autoDetectAndInitializeSDKAdapter());
    accessBlocker_default(window, "GameSDK");
  }
});

// node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var MapShim, isBrowser, global$1, requestAnimationFrame$1, trailingTimeout, REFRESH_DELAY, transitionKeys,
mutationObserverSupported, ResizeObserverController, defineConfigurable, getWindowOf, emptyRect, isSVGGraphicsElement,
ResizeObservation, ResizeObserverEntry, ResizeObserverSPI, observers, ResizeObserver, index;
var init_ResizeObserver_es = __esm({
  "node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"() {
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    MapShim = function() {
      if (typeof Map !== "undefined") {
        return Map;
      }
      function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index2) {
          if (entry[0] === key) {
            result = index2;
            return true;
          }
          return false;
        });
        return result;
      }
      return (
        /** @class */
        function() {
          function class_1() {
            this.__entries__ = [];
          }
          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          class_1.prototype.get = function(key) {
            var index2 = getIndex(this.__entries__, key);
            var entry = this.__entries__[index2];
            return entry && entry[1];
          };
          class_1.prototype.set = function(key, value) {
            var index2 = getIndex(this.__entries__, key);
            if (~index2) {
              this.__entries__[index2][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index2 = getIndex(entries, key);
            if (~index2) {
              entries.splice(index2, 1);
            }
          };
          class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
          };
          class_1.prototype.clear = function() {
            this.__entries__.splice(0);
          };
          class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };
          return class_1;
        }()
      );
    }();
    isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document ===
    document;
    global$1 = function() {
      if (typeof global !== "undefined" && global.Math === Math) {
        return global;
      }
      if (typeof self !== "undefined" && self.Math === Math) {
        return self;
      }
      if (typeof window !== "undefined" && window.Math === Math) {
        return window;
      }
      return Function("return this")();
    }();
    requestAnimationFrame$1 = function() {
      if (typeof requestAnimationFrame === "function") {
        return requestAnimationFrame.bind(global$1);
      }
      return function(callback) {
        return setTimeout(function() {
          return callback(Date.now());
        }, 1e3 / 60);
      };
    }();
    trailingTimeout = 2;
    REFRESH_DELAY = 20;
    transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
    mutationObserverSupported = typeof MutationObserver !== "undefined";
    ResizeObserverController = /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }();
    defineConfigurable = function(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }
      return target;
    };
    getWindowOf = function(target) {
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
      return ownerGlobal || global$1;
    };
    emptyRect = createRectInit(0, 0, 0, 0);
    isSVGGraphicsElement = function() {
      if (typeof SVGGraphicsElement !== "undefined") {
        return function(target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      }
      return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "functi\
on";
      };
    }();
    ResizeObservation = /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }();
    ResizeObserverEntry = /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }();
    ResizeObserverSPI = /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }();
    observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
    ResizeObserver = /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }();
    [
      "observe",
      "unobserve",
      "disconnect"
    ].forEach(function(method) {
      ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });
    index = function() {
      if (typeof global$1.ResizeObserver !== "undefined") {
        return global$1.ResizeObserver;
      }
      return ResizeObserver;
    }();
  }
});

// extensions/ludex/src/libs/polyfill/resize-observer.ts
var init_resize_observer = __esm({
  "extensions/ludex/src/libs/polyfill/resize-observer.ts"() {
    "use strict";
    init_ResizeObserver_es();
  }
});

// extensions/ludex/src/libs/empty-script.ts
var empty_script_default;
var init_empty_script = __esm({
  "extensions/ludex/src/libs/empty-script.ts"() {
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK2();
    empty_script_default = null;
  }
});

export {
  __pow,
  __spreadValues,
  __spreadProps,
  __objRest,
  __esm,
  __commonJS,
  __export,
  __toESM,
  __decorateClass,
  init_define_GAME_CONFIG,
  define_GAME_CONFIG_default,
  init_define_GAME_SDK_CONFIG,
  init_track_events,
  init_track_errors,
  init_init_core,
  init_google_analytics,
  init_performance,
  empty_script_default,
  init_empty_script,
  addAsyncPopupTemplate,
  addBannerMockupTemplate,
  addAdsMockupTemplate,
  init_TemplateManager,
  SDKCommonError_default,
  init_SDKCommonError,
  AdInstance_default,
  init_AdInstance,
  accessBlocker_default,
  init_accessBlocker,
  init_GameSDK2 as init_GameSDK,
  init_resize_observer
};
