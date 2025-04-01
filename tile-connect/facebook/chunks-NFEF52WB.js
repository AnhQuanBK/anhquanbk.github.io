import {
  init_GameSDK,
  init_define_GAME_CONFIG,
  init_define_GAME_SDK_CONFIG,
  init_google_analytics,
  init_init_core,
  init_performance,
  init_resize_observer,
  init_track_errors,
  init_track_events
} from "./chunks-KSWD6GXM.js";

// extensions/ludex/src/constants/CoreEvents.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var CoreEvents = /* @__PURE__ */ ((CoreEvents2) => {
  CoreEvents2["CORE_BOOTING"] = "core-booting";
  CoreEvents2["REQUEST_CORE_START"] = "core-start";
  CoreEvents2["CORE_STARTING"] = "core-starting";
  CoreEvents2["CORE_READY"] = "core-ready";
  CoreEvents2["GAME_SDK_READY"] = "game-sdk-ready";
  CoreEvents2["GAME_SDK_STARTED"] = "game-sdk-started";
  CoreEvents2["CONTEXT_DATA_PROCESSED"] = "context-data-processed";
  CoreEvents2["CONTEXT_SESSION_TYPE_DETECTED"] = "context-session-type-detected";
  CoreEvents2["GAME_READY"] = "game-ready";
  CoreEvents2["BUNDLE_READY"] = "bundle-ready";
  CoreEvents2["PLAYER_INFO_LOADED"] = "player-info-loaded";
  CoreEvents2["REQUEST_SHOW_BANNER_ADS"] = "request-show-banner-ads";
  CoreEvents2["SWITCH_SCENE"] = "switch-scene";
  CoreEvents2["SCENE_LOADED"] = "scene-loaded";
  CoreEvents2["PRELOAD_SCENE"] = "preload-scene";
  CoreEvents2["SCENE_PROGRESS"] = "scene-progress";
  CoreEvents2["SCENE_LAUNCHED"] = "scene-launched";
  CoreEvents2["SCENE_RENDERED"] = "scene-rendered";
  CoreEvents2["MARK_IS_TEST_SCENE"] = "mark-is-test-scene";
  CoreEvents2["PRELOAD_SCREENS"] = "preload-screens";
  CoreEvents2["OPENING_SCREEN"] = "opening-screen";
  CoreEvents2["OPEN_SCREEN"] = "open-screen";
  CoreEvents2["OPENED_SCREEN"] = "opened-screen";
  CoreEvents2["CLOSING_SCREEN"] = "closing-screen";
  CoreEvents2["CLOSE_SCREEN"] = "close-screen";
  CoreEvents2["CLOSED_SCREEN"] = "closed-screen";
  CoreEvents2["CORE_PLUGIN_READY"] = "core-plugin-ready";
  CoreEvents2["MODULE_PLUGIN_READY"] = "module-plugin-ready";
  CoreEvents2["AD_SHOWING"] = "ad-showing";
  CoreEvents2["AD_CLOSED"] = "ad-closed";
  CoreEvents2["AD_FAILED"] = "ad-failed";
  CoreEvents2["LANGUAGE_CHANGED"] = "language-changed";
  CoreEvents2["REQUEST_LANGUAGE"] = "request-language";
  CoreEvents2["REQUEST_HOT_RELOAD"] = "request-hot-reload";
  CoreEvents2["REQUEST_SAVE_CONFIG"] = "request-save-config";
  CoreEvents2["REQUEST_UPDATE_CONFIG"] = "request-update-config";
  CoreEvents2["REMOTE_CONFIG_UPDATED"] = "remote-config-updated";
  CoreEvents2["VISIBILITY_HIDDEN"] = "visibility-hidden";
  CoreEvents2["VISIBILITY_VISIBLE"] = "visibility-visible";
  CoreEvents2["REQUEST_RESIZE_GAME"] = "request-resize-game";
  CoreEvents2["REQUEST_QUALITY_UPGRADED"] = "request-quality-upgraded";
  CoreEvents2["REQUEST_QUALITY_DOWNGRADED"] = "request-quality-downgraded";
  return CoreEvents2;
})(CoreEvents || {});
var CoreEvents_default = CoreEvents;

export {
  CoreEvents_default
};
