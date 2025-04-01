import {
  AdInstance_default,
  SDKCommonError_default,
  __esm,
  addBannerMockupTemplate,
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

// extensions/ludex/src/game-sdk/common/MockBannerInstance.ts
var loadErrorCodes, MockBannerInstance, MockBannerInstance_default;
var init_MockBannerInstance = __esm({
  "extensions/ludex/src/game-sdk/common/MockBannerInstance.ts"() {
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
    loadErrorCodes = ["NETWORK_FAILURE", "ADS_FREQUENT_LOAD"];
    MockBannerInstance = class extends AdInstance_default {
      adContent$;
      apiAdContent$;
      mockAdElement$;
      errorRate;
      constructor(type, placementId) {
        super(type, placementId);
        const { ErrorRate, GiphyApiKey } = Ludex.Configs.Mockup.Ads;
        this.adContent$ = "";
        this.apiAdContent$ = `https://api.giphy.com/v1/gifs/trending?api_key=${GiphyApiKey}&rate=pg&\
bundle=low_bandwidth`;
        this.errorRate = ErrorRate;
        this.setupTemplate$();
      }
      async setupTemplate$() {
        const template = await addBannerMockupTemplate();
        if (!template) return;
        template.style.display = "none";
        const clone = template.cloneNode(true);
        this.mockAdElement$ = document.createElement("div");
        this.mockAdElement$.id = `banner-qc-${this.placementId}`;
        this.mockAdElement$.style.display = "none";
        this.mockAdElement$.style.position = "absolute";
        clone.style.display = "flex";
        this.mockAdElement$.appendChild(clone);
        document.body.appendChild(this.mockAdElement$);
      }
      async getAdContentAsync$() {
        const json = await (await fetch(this.apiAdContent$, { method: "GET" })).json();
        if (!("data" in json)) return "";
        if (!Array.isArray(json.data)) return "";
        const images = json.data;
        const rand = Math.floor(Math.random() * images.length);
        return images[rand].images.downsized.url;
      }
      async loadAsync() {
        const isError = Math.random() * 100 <= this.errorRate;
        const {
          Utils: { Image: I, Time: T }
        } = Ludex;
        if (!isError) {
          this.adContent$ = await this.getAdContentAsync$();
          await I.loadImage(this.adContent$);
        } else {
          await T.sleepAsync(1e3);
          const code = loadErrorCodes[Math.floor(Math.random() * loadErrorCodes.length)];
          throw new SDKCommonError_default(code, "Load ads mock error");
        }
      }
      async showAsync() {
        const imgTag = this.mockAdElement$.querySelector("#banner-qc-image");
        console.warn("showAsync", imgTag, this.mockAdElement$);
        if (!(imgTag instanceof HTMLImageElement)) return;
        this.mockAdElement$.style.display = "flex";
        imgTag.src = this.adContent$;
        this.setupBannerSizeAndPosition$();
      }
      async hideAsync() {
        if (!this.mockAdElement$) return;
        this.mockAdElement$.style.display = "none";
      }
      setupBannerSizeAndPosition$ = () => {
        const bannerAdOption = this.getBannerAdOption$();
        if (!bannerAdOption) return;
        const { Position, BannerWidth, BannerHeight } = bannerAdOption;
        this.mockAdElement$.style.width = BannerWidth ? `${BannerWidth}px` : "100%";
        this.mockAdElement$.style.height = BannerHeight ? `${BannerHeight}px` : "50vh";
        const sab = this.getSAB$();
        switch (Position) {
          case "right":
            this.mockAdElement$.style.right = "2%";
            break;
          case "left":
            this.mockAdElement$.style.left = "2%";
            break;
          case "top":
            this.mockAdElement$.style.top = "0";
            break;
          case "bottom":
            this.mockAdElement$.style.width = "100%";
            this.mockAdElement$.style.bottom = `${sab}px`;
            break;
          case "topright":
            this.mockAdElement$.style.top = "0";
            this.mockAdElement$.style.right = "2%";
            break;
          case "topleft":
            this.mockAdElement$.style.top = "0";
            this.mockAdElement$.style.left = "2%";
            break;
          case "bottomright":
            this.mockAdElement$.style.right = "2%";
            this.mockAdElement$.style.bottom = `${sab}px`;
            break;
          case "bottomleft":
            this.mockAdElement$.style.left = "2%";
            this.mockAdElement$.style.bottom = `${sab}px`;
            break;
        }
      };
      getSAB$() {
        try {
          const { SafeAreaBottom } = Ludex.Configs.Mockup.Ads;
          if (SafeAreaBottom) {
            document.documentElement.style.setProperty("--sab", `${SafeAreaBottom}px`);
          }
          const sabProp = getComputedStyle(document.documentElement).getPropertyValue("--sab");
          const sab = parseInt(sabProp, 10);
          return isNaN(sab) ? 0 : sab;
        } catch (e) {
          return 0;
        }
      }
      getBannerAdOption$() {
        const { Array: A } = Ludex.Utils;
        const { BannerDisplayAdOptions } = Ludex.Configs.Ads;
        return A.search(BannerDisplayAdOptions, (option) => option.PlacementId === this.placementId);
      }
    };
    MockBannerInstance_default = MockBannerInstance;
  }
});
init_MockBannerInstance();
export {
  MockBannerInstance_default as default
};
