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

// extensions/ludex/src/game-sdk/common/SwitchAsyncPopup.ts
var SwitchAsyncPopup, SwitchAsyncPopup_default;
var init_SwitchAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/SwitchAsyncPopup.ts"() {
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
    SwitchAsyncPopup = class extends BaseAsyncPopup_default {
      show(contextId) {
        this.title.textContent = "Switch Context";
        this.okButton.textContent = "Switch";
        this.noButton.textContent = "Cancel";
        super.show(`Do you want to switch context?
Context ID: ${contextId}`);
      }
    };
    SwitchAsyncPopup_default = SwitchAsyncPopup;
  }
});
init_SwitchAsyncPopup();
export {
  SwitchAsyncPopup_default as default
};
