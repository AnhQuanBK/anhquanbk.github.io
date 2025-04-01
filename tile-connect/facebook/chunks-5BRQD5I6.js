import {
  __spreadValues,
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

// extensions/ludex/src/plugins/profile/api/ProfileAPIMock.ts
init_define_GAME_CONFIG();
init_define_GAME_SDK_CONFIG();
init_track_events();
init_track_errors();
init_init_core();
init_google_analytics();
init_performance();
init_resize_observer();
init_GameSDK();
var {
  Configs: {
    Mockup: {
      Profile: { AvatarUrl, ErrorRate, RandomDelayMs }
    }
  },
  Utils: { String: S, Valid: V, Browser: B, Time: T }
} = Ludex;
var ProfilesMockKey = "ProfilesMockKey";
var namesMock = ["player", "ng\u01B0\u1EDDi ch\u01A1i", "\u73A9\u5BB6", "\u0438\u0433\u0440\u043E\u043A",
"\u30D7\u30EC\u30FC\u30E4\u30FC", "\uD50C\uB808\uC774\uC5B4", "\u03C0\u03B1\u03AF\u03C7\u03C4\u03B7\u03C2",
"\u0E9C\u0EB9\u0EC9\u200B\u0EAB\u0EBC\u0EB4\u0EC9\u0E99", "\u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038"];
var ProfileAPIMock = class {
  async getPlayersAsync(payload) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Get players error")) return { data: [] };
    const profiles = [];
    const profilesData = this.getProfilesData();
    const { playerIds } = payload;
    for (const playerId of playerIds) {
      let profile = profilesData[playerId];
      if (!profile) {
        profile = this.createProfile(playerId);
      }
      profiles.push(profile);
    }
    return { data: profiles };
  }
  createProfile(playerId) {
    const _id = S.generateObjectId();
    let name = this.randomName(_id);
    let photo = this.randomPhoto(_id);
    let score = this.randomScore();
    let level = this.randomLevel();
    const { player } = codex;
    if (playerId === player.getPlayerId()) {
      const data = player.getPlayer();
      name = data.name;
      photo = data.photo;
      score = data.data.score;
      level = data.data.gameData.level;
    }
    const profile = { _id, playerId, name, photo, score, level };
    this.writeProfilesData({ [playerId]: profile });
    return profile;
  }
  randomName(id) {
    const index = Math.floor(Math.random() * namesMock.length);
    return `${namesMock[index]} ${id.substr(-5, 5)}`;
  }
  randomPhoto(id) {
    return AvatarUrl.replace("%1", id);
  }
  randomScore() {
    return Math.floor(Math.random() * 100);
  }
  randomLevel() {
    return Math.floor(Math.random() * 10);
  }
  getProfilesData() {
    const data = B.getLocalStorage(ProfilesMockKey);
    if (!V.isObject(data)) return {};
    return data;
  }
  writeProfilesData(profiles) {
    const current = this.getProfilesData();
    const data = __spreadValues(__spreadValues({}, current), profiles);
    B.writeLocalStorage(ProfilesMockKey, data);
  }
  randomResponseError(message) {
    const isError = Math.random() * 100 < ErrorRate;
    if (!isError) return false;
    console.warn("[ProfileAPIMock]", message);
    return true;
  }
  async awaitRandomDelay() {
    await T.sleepAsync(Math.random() * RandomDelayMs);
  }
};
var ProfileAPIMock_default = ProfileAPIMock;
export {
  ProfileAPIMock_default as default
};
