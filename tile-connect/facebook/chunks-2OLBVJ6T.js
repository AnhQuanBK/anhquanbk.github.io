import {
  __esm,
  addAsyncPopupTemplate,
  init_GameSDK,
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

// extensions/ludex/src/game-sdk/common/BaseAsyncPopup.ts
var BaseAsyncPopup, BaseAsyncPopup_default;
var init_BaseAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/BaseAsyncPopup.ts"() {
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
    init_TemplateManager();
    BaseAsyncPopup = class {
      popup;
      title;
      content;
      okButton;
      noButton;
      okCallback$;
      noCallback$;
      async setupTemplate() {
        const popupElement = await addAsyncPopupTemplate();
        if (!popupElement) return;
        this.popup = popupElement;
        this.title = popupElement.querySelector("#title");
        this.content = popupElement.querySelector("#content");
        this.okButton = popupElement.querySelector("#ok");
        this.noButton = popupElement.querySelector("#no");
        this.hide();
      }
      onYes = (callback) => {
        if (!this.okButton) return;
        this.okButton.removeEventListener("click", this.okCallback$);
        this.okCallback$ = this.handleCallback$(callback);
        this.okButton.addEventListener("click", this.okCallback$, { once: true });
      };
      onNo = (callback) => {
        if (!this.noButton) return;
        this.noButton.removeEventListener("click", this.noCallback$);
        this.noCallback$ = this.handleCallback$(callback);
        this.noButton.addEventListener("click", this.noCallback$, { once: true });
      };
      handleCallback$ = (callback) => (e) => {
        e.stopImmediatePropagation();
        this.hide();
        callback();
      };
      show(content) {
        this.content.textContent = `${content}`;
        this.popup.style.display = "flex";
      }
      hide() {
        this.popup.style.display = "none";
      }
    };
    BaseAsyncPopup_default = BaseAsyncPopup;
  }
});

export {
  BaseAsyncPopup_default,
  init_BaseAsyncPopup
};
