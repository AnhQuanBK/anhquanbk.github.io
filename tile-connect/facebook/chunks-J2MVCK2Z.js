import {
  CoreEvents_default
} from "./chunks-NFEF52WB.js";
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

// extensions/ludex/src/plugins/adaptive-performance/index.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/adaptive-performance/AdaptivePerformancePlugin.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();

// extensions/ludex/src/plugins/adaptive-performance/components/FPSTracker.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var FpsTracker = class {
  options;
  performance;
  isRunning = false;
  checkTimer;
  fpsHistory;
  actualFPS = 0;
  constructor(performance, options) {
    this.options = options;
    this.performance = performance;
  }
  start = () => {
    if (this.isRunning) return;
    this.isRunning = true;
    this.checkTimer = this.options.CheckInterval;
    this.fpsHistory = [];
  };
  stop = () => {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.options.OnlyUpdateWhenSwitchScene) {
      this.checkFps();
    }
  };
  postStep = (deltaTime) => {
    if (!this.isRunning) return;
    this.checkTimer -= deltaTime;
    if (this.checkTimer > 0) return;
    this.checkTimer += this.options.CheckInterval;
    this.fpsHistory.push(this.actualFPS);
    if (!this.options.OnlyUpdateWhenSwitchScene) {
      this.fpsHistory.length >= 5 && this.checkFps();
    }
  };
  checkFps() {
    const { ads } = this.performance.codex;
    if (ads.isAdFullSizeShowing()) return;
    if (this.fpsHistory.length === 0) return;
    let success = false;
    if (this.options.AutoUpgradeQuality && this.isHighFps()) {
      success = this.performance.upgradeGraphicsQuality();
    }
    if (this.isLowFps()) {
      success = this.performance.downgradeGraphicsQuality();
    }
    if (success) {
      this.fpsHistory = [];
    }
  }
  getFpsMedian() {
    return this.getMedian(this.fpsHistory);
  }
  getMedian(numbers) {
    if (numbers.length === 0) return Number.NaN;
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  }
  isLowFps() {
    const fpsMedian = this.getFpsMedian();
    return fpsMedian < this.options.FpsThreshold;
  }
  isHighFps() {
    const fpsMedian = this.getFpsMedian();
    return fpsMedian > this.options.FpsThreshold * 1.2;
  }
};
var FPSTracker_default = FpsTracker;

// extensions/ludex/src/plugins/adaptive-performance/AdaptivePerformancePlugin.ts
var {
  Utils: { Device: D }
} = Ludex;
var AdaptivePerformancePlugin = class extends Ludex.Plugins.BasePlugin {
  enabled = false;
  quality;
  fpsTracker;
  pixelRatio;
  trackingSceneNames = [];
  configure(option) {
    const { Enabled, Quality, Options, TrackingSceneNames } = option;
    this.enabled = Enabled;
    this.quality = Quality;
    this.pixelRatio = D.pixelRatio();
    this.trackingSceneNames = TrackingSceneNames;
    this.createFPSTracker(Options);
  }
  trackingScene = (sceneName) => {
    if (this.trackingSceneNames.indexOf(sceneName) < 0) {
      console.warn(`\u{1F6AB} Adaptive performance: ${sceneName} is not configured`);
      return;
    }
    this.stopFPSTracker();
    this.startFPSTracker();
    console.info(`\u{1F4C8} Adaptive performance: tracking ${sceneName}`);
  };
  getCurrentQuality() {
    return this.pixelRatio;
  }
  downgradeGraphicsQuality() {
    this.event.emit(CoreEvents_default.REQUEST_QUALITY_DOWNGRADED);
    const { Min, AdjustStep } = this.quality;
    const currentQuality = this.pixelRatio;
    if (currentQuality <= Min) return false;
    const lowerQuality = +(currentQuality - AdjustStep).toFixed(2);
    if (lowerQuality < Min) return false;
    this.pixelRatio = lowerQuality;
    this.resizeGameWorld(this.pixelRatio);
    console.warn(`\u{1F4AB} Graphics quality was downgraded! (${currentQuality} -> ${lowerQuality})`);
    return true;
  }
  upgradeGraphicsQuality() {
    this.event.emit(CoreEvents_default.REQUEST_QUALITY_UPGRADED);
    const { Max, AdjustStep } = this.quality;
    const currentQuality = this.pixelRatio;
    if (currentQuality >= Max) return false;
    const higherQuality = +(currentQuality + AdjustStep).toFixed(2);
    if (higherQuality > Max) return false;
    this.pixelRatio = higherQuality;
    this.resizeGameWorld(this.pixelRatio);
    console.warn(`\u{1F680} Graphics quality was upgraded! (${currentQuality} -> ${higherQuality})`);
    return true;
  }
  createFPSTracker(options) {
    this.fpsTracker = new FPSTracker_default(this, options);
  }
  get event() {
    return this.codex.event;
  }
  startFPSTracker = () => {
    this.fpsTracker.start();
  };
  stopFPSTracker = () => {
    this.fpsTracker.stop();
  };
  resizeGameWorld(forcePixelRatio) {
    const payload = {
      forcePixelRatio
    };
    this.event.emit(CoreEvents_default.REQUEST_RESIZE_GAME, payload);
  }
  updatePostStepDeltaTime(deltaTime) {
    this.fpsTracker.postStep(deltaTime);
  }
  updateActualFPS(actualFPS) {
    this.fpsTracker.actualFPS = actualFPS;
  }
};
var AdaptivePerformancePlugin_default = AdaptivePerformancePlugin;

// extensions/ludex/src/plugins/adaptive-performance/index.ts
var adaptive_performance_default = AdaptivePerformancePlugin_default;
export {
  adaptive_performance_default as default
};
