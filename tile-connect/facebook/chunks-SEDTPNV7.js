import {
  BaseAsyncPopup_default,
  init_BaseAsyncPopup
} from "./chunks-2OLBVJ6T.js";
import {
  __esm,
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

// extensions/ludex/src/game-sdk/common/PurchaseAsyncPopup.ts
var PurchaseAsyncPopup, PurchaseAsyncPopup_default;
var init_PurchaseAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/PurchaseAsyncPopup.ts"() {
    init_define_GAME_CONFIG();
    init_define_GAME_SDK_CONFIG();
    init_track_events();
    init_track_errors();
    init_init_core();
    init_google_analytics();
    init_performance();
    init_resize_observer();
    init_GameSDK();
    init_BaseAsyncPopup();
    PurchaseAsyncPopup = class extends BaseAsyncPopup_default {
      show(payload) {
        this.title.textContent = "Purchase";
        this.okButton.textContent = "Purchase";
        this.noButton.textContent = "Cancel";
        const payloadPretty = JSON.stringify(payload, null, 2);
        super.show(`Do you want to purchase?
Payload: ${payloadPretty}`);
      }
    };
    PurchaseAsyncPopup_default = PurchaseAsyncPopup;
  }
});
init_PurchaseAsyncPopup();
export {
  PurchaseAsyncPopup_default as default
};
