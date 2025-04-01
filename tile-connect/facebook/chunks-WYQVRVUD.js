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

// extensions/ludex/src/game-sdk/common/ChooseAsyncPopup.ts
var ChooseAsyncPopup, ChooseAsyncPopup_default;
var init_ChooseAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/ChooseAsyncPopup.ts"() {
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
    ChooseAsyncPopup = class extends BaseAsyncPopup_default {
      show() {
        this.title.textContent = "Choose Contexts";
        this.okButton.textContent = "Choose";
        this.noButton.textContent = "Cancel";
        super.show(
          `Do you want to switch context?
            This will choose random a friend or tournament to play with.`
        );
      }
    };
    ChooseAsyncPopup_default = ChooseAsyncPopup;
  }
});
init_ChooseAsyncPopup();
export {
  ChooseAsyncPopup_default as default
};
