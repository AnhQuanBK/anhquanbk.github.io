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

// extensions/ludex/src/game-sdk/common/ShareTournamentAsyncPopup.ts
var ShareTournamentAsyncPopup, ShareTournamentAsyncPopup_default;
var init_ShareTournamentAsyncPopup = __esm({
  "extensions/ludex/src/game-sdk/common/ShareTournamentAsyncPopup.ts"() {
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
    ShareTournamentAsyncPopup = class extends BaseAsyncPopup_default {
      show(score) {
        this.title.textContent = "Share tournament";
        this.okButton.textContent = "Share";
        this.noButton.textContent = "Cancel";
        super.show(`Do you want to share your score?
Score: ${score}`);
      }
    };
    ShareTournamentAsyncPopup_default = ShareTournamentAsyncPopup;
  }
});
init_ShareTournamentAsyncPopup();
export {
  ShareTournamentAsyncPopup_default as default
};
