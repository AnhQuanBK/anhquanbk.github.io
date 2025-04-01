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

// extensions/ludex/src/plugins/leaderboards/constants/ResponseLeaderboard.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var DefaultResponseLeaderboard = {
  _id: "",
  name: "",
  createdBy: "",
  description: "",
  expireTime: 7 * 24 * 60 * 60 * 1e3,
  type: "app_leaderboard",
  timezone: "utc+0",
  createdAt: "2024-01-01T09:00:00.000Z",
  sortOrder: "desc",
  statistics: "max",
  resettable: "manually",
  resetScore: 0,
  numberOfLeaders: 15,
  amountPlayer: 15
};
var ResponseLeaderboard_default = DefaultResponseLeaderboard;

export {
  ResponseLeaderboard_default
};
