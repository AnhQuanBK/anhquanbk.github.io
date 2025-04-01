import {
  AdInstance_default,
  SDKCommonError_default,
  __esm,
  addAdsMockupTemplate,
  init_AdInstance,
  init_GameSDK,
  init_SDKCommonError,
  init_TemplateManager,
  init_define_GAME_CONFIG,
  init_define_GAME_SDK_CONFIG,
  init_google_analytics,
  init_init_core,
  init_performance,
  init_resize_observer,
  init_track_errors,
  init_track_events
} from "./chunks-KSWD6GXM.js";

// extensions/ludex/src/game-sdk/common/MockAdInstance.ts
var showMockPopupAd, loadErrorCodes, showErrorCodes, MockAdInstance, MockAdInstance_default;
var init_MockAdInstance = __esm({
  "extensions/ludex/src/game-sdk/common/MockAdInstance.ts"() {
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK();
    init_TemplateManager();
    init_SDKCommonError();
    init_AdInstance();
    showMockPopupAd = (payload) => {
      const { type, adContent, adElement, onSuccess, onSkip } = payload;
      adElement.style.display = "flex";
      const adTypeElement = adElement.querySelector("#qc-type");
      if (adTypeElement) {
        adTypeElement.innerHTML = type.toUpperCase();
      }
      const adImageElement = adElement.querySelector("#qc-image");
      if (adImageElement instanceof HTMLImageElement) {
        adImageElement.src = adContent;
      }
      const closeButton = adElement.querySelector("#close-btn");
      const rewardButton = adElement.querySelector("#reward-btn");
      if (type === "rewarded" || type === "rewarded_interstitial") {
        if (closeButton instanceof HTMLDivElement) {
          closeButton.innerHTML = "Skip";
          closeButton.onclick = () => onSkip();
        }
        if (rewardButton instanceof HTMLDivElement) {
          rewardButton.onclick = () => onSuccess();
        }
      }
      if (type === "interstitial") {
        if (closeButton instanceof HTMLDivElement) {
          closeButton.onclick = () => onSuccess();
        }
        if (rewardButton instanceof HTMLDivElement) {
          rewardButton.remove();
        }
      }
    };
    loadErrorCodes = ["NETWORK_FAILURE", "ADS_FREQUENT_LOAD", "ADS_NO_FILL", "INVALID_PARAM"];
    showErrorCodes = ["INVALID_OPERATION", "RATE_LIMITED", "NETWORK_FAILURE", "INVALID_PARAM", "ADS_\
NOT_LOADED"];
    MockAdInstance = class extends AdInstance_default {
      adContent$;
      apiAdContent$;
      mockAdElement$;
      errorRate;
      constructor(type, placementId) {
        super(type, placementId);
        const { ErrorRate, GiphyApiKey } = Ludex.Configs.Mockup.Ads;
        this.adContent$ = null;
        this.apiAdContent$ = `https://api.giphy.com/v1/gifs/trending?api_key=${GiphyApiKey}&rate=pg&\
bundle=low_bandwidth`;
        this.errorRate = ErrorRate;
        this.setupTemplate$();
      }
      async setupTemplate$() {
        const adElement = await addAdsMockupTemplate();
        if (!adElement) return;
        this.mockAdElement$ = adElement;
        this.mockAdElement$.style.display = "none";
      }
      async loadAsync() {
        const isError = Math.random() * 100 <= this.errorRate;
        const { Image: I, Time: T } = Ludex.Utils;
        if (!isError) {
          this.adContent$ = await this.getAdContentAsync$();
          if (!this.adContent$) {
            throw new SDKCommonError_default("INVALID_PARAM", "Load ads mock error");
          }
          await I.loadImage(this.adContent$);
        } else {
          await T.sleepAsync(1500);
          const code = loadErrorCodes[Math.floor(Math.random() * loadErrorCodes.length)];
          throw new SDKCommonError_default(code, "Load ads mock error");
        }
      }
      async showAsync() {
        const isError = Math.random() * 100 <= this.errorRate;
        const { Time: T } = Ludex.Utils;
        if (!isError) {
          return new Promise((resolve, reject) => {
            if (typeof this.adContent$ !== "string") {
              reject(new SDKCommonError_default("INVALID_PARAM", "Show ads mock error"));
              return;
            }
            showMockPopupAd({
              type: this.type,
              adContent: this.adContent$,
              adElement: this.mockAdElement$,
              onSuccess: () => {
                this.mockAdElement$.style.display = "none";
                resolve();
              },
              onSkip: () => {
                this.mockAdElement$.style.display = "none";
                reject(new SDKCommonError_default("USER_INPUT", "Skip ads mock"));
              }
            });
          });
        }
        await T.sleepAsync(1500);
        const code = showErrorCodes[Math.floor(Math.random() * showErrorCodes.length)];
        throw new SDKCommonError_default(code, "Show ads mock error");
      }
      async getAdContentAsync$() {
        const response = await fetch(this.apiAdContent$, { method: "GET" });
        const json = await response.json();
        const { Valid: V } = Ludex.Utils;
        if (!V.isObject(json)) return null;
        if ("data" in json === false) return null;
        const images = json.data;
        const rand = Math.floor(Math.random() * images.length);
        return images[rand].images.downsized.url;
      }
    };
    MockAdInstance_default = MockAdInstance;
  }
});
init_MockAdInstance();
export {
  MockAdInstance_default as default
};
