import {
  ResponseLeaderboard_default
} from "./chunks-5TZK7ZDK.js";
import {
  __spreadProps,
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

// extensions/ludex/src/plugins/leaderboards/api/LeaderboardAPIMock.ts
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
      Leaderboards: { MinScore, MaxScore, NumOfLeaders, ErrorRate, DefaultLimit, RandomDelayMs }
    }
  },
  Utils: { Valid: V, Browser: B, Time: T, Object: O, Number: N }
} = Ludex;
var LeadersMockKey = "LeadersMockKey";
var LeaderboardsMockKey = "LeaderboardsMockKey";
var LeaderboardAPIMock = class {
  async getPlayers(leaderboardId, payload) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Get players error")) return { data: [] };
    const { playerIds } = payload;
    const leaders = [];
    if (playerIds && playerIds.length > 0) {
      const leadersData = this.getLeadersData(leaderboardId);
      for (const playerId of playerIds) {
        const player = leadersData[playerId];
        if (player) leaders.push(player);
      }
    }
    return { data: leaders };
  }
  async getLeaders(leaderboardId, payload) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Get leaders error")) return { data: [] };
    const { limit, offset } = payload;
    const leadersData = this.getLeadersData(leaderboardId);
    const leadersSort = O.vals(leadersData);
    this.sortLeadersRank(leadersSort);
    const leaders = [];
    const start = offset;
    const end = limit === 0 ? DefaultLimit : offset + limit;
    for (let i = start; i < end; i++) {
      const leader = leadersSort[i];
      if (leader) leaders.push(leader);
    }
    this.sortLeadersRank(leaders);
    return { data: leaders };
  }
  async getLeaderboardAsync(id) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Get leaderboard error")) return null;
    const leaderBoard = this.getLeaderBoard(id);
    if (!leaderBoard) {
      console.warn(`[LeaderboardAPIMock] Leaderboard ${id} not found`);
      return null;
    }
    return leaderBoard;
  }
  async getLeaderboardsAsync(options) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Get leaderboards error")) return [];
    const { limit = 9999, type } = options;
    if (limit <= 0) return [];
    const leaderBoards = this.getLeaderBoardsData();
    const leaderBoardsSort = O.vals(leaderBoards);
    if (type === void 0) {
      return leaderBoardsSort.slice(0, limit);
    }
    const targetLeaderboards = leaderBoardsSort.filter((leaderboard) => {
      return leaderboard.type === type;
    });
    return targetLeaderboards.slice(0, limit);
  }
  getLeadersData(leaderboardId) {
    const players = this.getPlayersData();
    const playerIds = Object.keys(players[leaderboardId]);
    const leaders = {};
    for (const playerId of playerIds) {
      const player = players[leaderboardId][playerId];
      if (V.isObject(player)) {
        leaders[playerId] = player;
      }
    }
    return leaders;
  }
  sortLeadersRank(leaders) {
    leaders.sort((a, b) => {
      return parseInt(b.score, 10) - parseInt(a.score, 10);
    });
    leaders.forEach((leader, index) => {
      leader.rank = index + 1;
    });
  }
  async setScoreAsync(id, playerId, score) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Set score error")) return null;
    const response = { success: false };
    const lbData = this.getLeaderBoard(id);
    if (!lbData) {
      console.warn(`[LeaderboardAPIMock] Leaderboard ${id} not found`);
      return response;
    }
    const players = this.getPlayersData();
    let player = players[id][playerId];
    if (!player) {
      player = this.createPlayerData(playerId);
      lbData.amountPlayer += 1;
      lbData.numberOfLeaders += 1;
      this.writeLeaderBoard(id, lbData);
    }
    player.score = score.toString();
    players[id][playerId] = player;
    const leaders = O.vals(players[id]);
    this.sortLeadersRank(leaders);
    leaders.forEach((leader, _) => {
      players[id][leader.playerId] = leader;
    });
    this.writePlayersData(id, players);
    response.success = true;
    return response;
  }
  async createLeaderboard(payload) {
    await this.awaitRandomDelay();
    if (this.randomResponseError("Create leaderboard error")) return null;
    const { _id } = payload;
    const lbData = this.getLeaderBoardsData();
    if (lbData[_id]) {
      return lbData[_id];
    }
    let { numberOfLeaders } = payload;
    numberOfLeaders = numberOfLeaders ?? N.random(NumOfLeaders.Max - NumOfLeaders.Min) + NumOfLeaders.
    Min;
    this.createPlayersData(payload, numberOfLeaders);
    return this.createLeaderboardData(payload, numberOfLeaders);
  }
  createLeaderboardData(payload, numberOfLeaders) {
    const { _id: id } = payload;
    const data = __spreadProps(__spreadValues(__spreadValues({}, ResponseLeaderboard_default), payload),
    {
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdBy: "mock",
      numberOfLeaders,
      amountPlayer: numberOfLeaders
    });
    this.writeLeaderBoard(id, data);
    return data;
  }
  createPlayersData(payload, numberOfLeaders) {
    const { _id: id, name } = payload;
    const isFriendLeaderboard = name === "friends-leaderboard-key";
    const players = {
      [id]: {}
    };
    const leaders = [];
    for (let i = 0; i < numberOfLeaders; i++) {
      const leaderName = isFriendLeaderboard ? `connected-player-${i}` : i.toString();
      const leader = this.createPlayerData(leaderName);
      leaders.push(leader);
    }
    this.sortLeadersRank(leaders);
    leaders.forEach((leader, _) => {
      players[id][leader.playerId] = leader;
    });
    this.writePlayersData(id, players);
    return players;
  }
  createPlayerData(playerId) {
    const player = {
      playerId,
      score: this.randomScore(),
      rank: 0
    };
    return player;
  }
  randomScore() {
    return Math.floor(Math.random() * (MaxScore - MinScore) + MinScore).toString();
  }
  getLeaderBoardsData() {
    const data = B.getLocalStorage(LeaderboardsMockKey);
    if (!V.isObject(data)) return {};
    return data;
  }
  writeLeaderBoardsData(data) {
    if (!V.isObject(data)) return;
    B.writeLocalStorage(LeaderboardsMockKey, data);
  }
  getLeaderBoard(id) {
    const leaderBoards = this.getLeaderBoardsData();
    if (!leaderBoards[id]) return null;
    return leaderBoards[id];
  }
  writeLeaderBoard(id, data) {
    const leaderBoards = this.getLeaderBoardsData();
    leaderBoards[id] = data;
    this.writeLeaderBoardsData(leaderBoards);
  }
  getPlayersData() {
    const data = B.getLocalStorage(LeadersMockKey);
    if (!V.isObject(data)) return {};
    return data;
  }
  writePlayersData(id, data) {
    const players = this.getPlayersData();
    if (!players[id]) players[id] = {};
    O.assign(players[id], data[id]);
    B.writeLocalStorage(LeadersMockKey, players);
  }
  randomResponseError(message) {
    const isError = Math.random() * 100 < ErrorRate;
    if (!isError) return false;
    console.warn("[LeaderboardAPIMock]", message);
    return true;
  }
  async awaitRandomDelay() {
    await T.sleepAsync(Math.random() * RandomDelayMs);
  }
};
var LeaderboardAPIMock_default = LeaderboardAPIMock;
export {
  LeaderboardAPIMock_default as default
};
