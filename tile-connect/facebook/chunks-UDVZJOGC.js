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

// extensions/ludex/src/game-sdk/common/CreateAsyncPopup.ts
var CreateAsyncPopup, CreateAsyncPopup_default;
var init_CreateAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/CreateAsyncPopup.ts"() {
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
    CreateAsyncPopup = class extends BaseAsyncPopup_default {
      show(playerId) {
        this.title.textContent = "Create Context";
        this.okButton.textContent = "Create";
        this.noButton.textContent = "Cancel";
        super.show(`Do you want to create context?
Player ID: ${playerId}`);
      }
    };
    CreateAsyncPopup_default = CreateAsyncPopup;
  }
});
init_CreateAsyncPopup();
export {
  CreateAsyncPopup_default as default
};
