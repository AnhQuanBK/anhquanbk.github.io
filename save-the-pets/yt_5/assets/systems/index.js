function _instanceof(left, right) {
    return null != right && "u" > typeof Symbol && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (1 & t[0]) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), "function" == typeof Symbol && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw TypeError("Generator is already executing.");
        for(; g && (g = 0, op[0] && (_ = 0)), _;)try {
            if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            switch(y = 0, t && (op = [
                2 & op[0],
                t.value
            ]), op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    return _.label++, {
                        value: op[1],
                        done: !1
                    };
                case 5:
                    _.label++, y = op[1], op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop(), _.trys.pop();
                    continue;
                default:
                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                        _ = 0;
                        continue;
                    }
                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (6 === op[0] && _.label < t[1]) {
                        _.label = t[1], t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2], _.ops.push(op);
                        break;
                    }
                    t[2] && _.ops.pop(), _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ], y = 0;
        } finally{
            f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: !0
        };
    }
}
System.register("chunks:///systems.js", [
    "./TournamentUtils-9f4fc570.js",
    "cc"
], function() {
    var e, t, n, a, r, i, s, o, c, l, u, d, h, p, f, g, m, v, $, y, S, E, A, w, b, C, D, R, L, T, F, x, _, I, M, P, N, k, O, U, B, G, z, H, V, Y, q, Q, W, K, j, X, Z, J, ee, te, ne, ae, re, ie, se, oe, ce, le, ue, de;
    return {
        setters: [
            function(M) {
                e = M.h, t = M.e, n = M.a, a = M.t, r = M.d, i = M.G, s = M.H, o = M.i, c = M.C, l = M.n, u = M.g, d = M.M, h = M.P, p = M.I, f = M.v, g = M.k, m = M.J, v = M.L, $ = M.K, y = M.s, S = M.u, E = M.w, A = M.R, w = M.N, b = M.T, C = M.B, D = M.x, R = M.q, L = M.z, T = M.F, F = M.O, x = M.Q, _ = M.b, I = M.c;
            },
            function(e) {
                M = e.cclegacy, P = e.game, N = e.settings, k = e.Settings, O = e.View, U = e.AssetManager, B = e.sys, G = e.input, z = e.Input, H = e.DynamicAtlasManager, V = e.macro, Y = e.director, q = e.view, Q = e.ResolutionPolicy, W = e.Size, K = e.screen, j = e.Director, X = e.Sprite, Z = e.UITransform, J = e.SpriteFrame, ee = e.Rect, te = e.assetManager, ne = e.ImageAsset, ae = e.UIOpacity, re = e.Label, ie = e.Prefab, se = e.instantiate, oe = e.Game, ce = e._decorator, le = e.rendering, ue = e.gfx, de = e.Component;
            }
        ],
        execute: function execute() {
            var he, pe, fe, ge = {
                text: {
                    "core.nameless": "Nameless",
                    "game.resume": "Resume",
                    "game.restart": "Restart",
                    "game.cancel": "Cancel",
                    "game.challenge": "Challenge\nFriends",
                    "game.next": "NEXT",
                    "game.completed": "COMPLETED",
                    "game.tryAgain": "Try again",
                    "game.retry": "RETRY",
                    "game.startOverQ": "Start Over?",
                    "game.startOverMsg": "Start over? You'll lose your current progress and begin from the start. Are you sure you want to restart?",
                    "game.startOver": "START OVER",
                    "game.paused": "Paused",
                    "game.end": "End",
                    "game.quit": "Quit",
                    "game.join": "Join",
                    "game.joinLeaderboard": "Join Leaderboard",
                    "game.continue": "Continue",
                    "game.letsPlay": "Let's Play",
                    "game.logIn": "Log in",
                    "game.create": "Create",
                    "game.quitLevelShortMsg": "Quit Level?",
                    "game.quitSingleMsg": "Quit now? You're so close to completing this level!",
                    "game.quitTourMsg": "Quit now? You're just a few levels away from ranking up!",
                    "game.level": "Level",
                    "game.levelX": "Level %{0}",
                    "game.hardLevel": "Hard Level",
                    "game.result": "Your Result",
                    "game.nextLevel": "Next Level",
                    "game.win": "You Win",
                    "game.lose": "You Lose",
                    "game.draw": "Draw",
                    "game.replay": "Replay",
                    "game.boom": "Boom!",
                    "game.timesUp": "Time's Up!",
                    "game.bombDesc": "The bomb exploded!",
                    "game.timesUpDesc": "Restart or add 2 minutes?",
                    "game.daily": "Daily",
                    "game.weekly": "Weekly",
                    "game.endsSoon": "Ends Soon",
                    "game.endsIn": "Ends %{0}",
                    "game.player": "1 player",
                    "game.nPlayers": "%{0} players",
                    "game.pTour": "%{0}'s Tournament",
                    "game.combo": "Combo",
                    "game.tourLbUpdated": "Duel!",
                    "settings.level": "Level",
                    "settings.settings": "Settings",
                    "settings.music": "Music",
                    "settings.sound": "Sound",
                    "settings.vibrate": "Vibrate",
                    "settings.on": "ON",
                    "settings.off": "OFF",
                    "settings.notification": "Notification",
                    "settings.report": "Report",
                    "settings.share": "Share",
                    "settings.invite": "Invite Friends",
                    "settings.feedback": "Feedback",
                    "settings.createShortcut": "Create\nShortcut",
                    "settings.or": "OR",
                    "settings.customMode": "Custom\nMode",
                    "custom.customLevel": "Custom Level",
                    "custom.time": "Time",
                    "custom.difficulty": "Difficulty",
                    "custom.easy": "Easy",
                    "custom.normal": "Normal",
                    "custom.hard": "Hard",
                    "custom.extreme": "Extreme",
                    "custom.bombs": "Bombs",
                    "custom.ads": "Extra ads duration",
                    "custom.score": "Score increase:",
                    "custom.play": "Play",
                    "ads.cancelled": "Sorry, No Rewards!\nYou have cancelled the ad!",
                    "ads.loading": "Loading ads...",
                    "ads.notReady": "No ads to display!",
                    "ads.adAfterT": "AD starting in %{0}...",
                    "ads.levelAfterT": "Next level in %{0}...",
                    "ads.rewardNotice": "Watch a short ad to receive\nthese rewards:",
                    "ads.skip": "Skip",
                    "ads.daily": "Daily Rewards",
                    "ads.claim": "Claim",
                    "ads.claimX2": "Claim x2",
                    "ads.claimNow": "Claim Now!",
                    "ads.await": "Looking for rewards...",
                    "ads.open": "Open",
                    "ads.coins": "Get Coins",
                    "ads.getNow": "Get Now",
                    "ads.freeMinutes": "Get %{0} FREE minutes",
                    "ads.interNotice.hangTight": "Short ad break, hang tight!",
                    "ads.interNotice.backInSec": "Back to the game in just a sec!",
                    "ads.interNotice.quickAd": "Quick ad, then more fun!",
                    "status.loading": "Loading",
                    "status.congrats": "Congratulations",
                    "status.allLevels": "You have passed all levels.",
                    "status.later": "Please come back later,\nwe will update soon!",
                    "status.confirm": "CONFIRMATION",
                    "status.confirmReset": "ARE YOU SURE TO START OVER?",
                    "status.resetInfo": "You will play the game again\nfrom the beginning, at level 1.",
                    "status.no": "NO",
                    "status.yes": "YES",
                    "status.first": "1st",
                    "status.second": "2nd",
                    "status.third": "3rd",
                    "status.nth": "%{0}th",
                    "status.tap": "Tap to continue",
                    "status.waitingX": "Waiting%{0}",
                    "status.lbNotAvail": "Leaderboard is empty.",
                    "status.tourNotAvail": "No tournaments available.",
                    "pages.shop": "Shop",
                    "pages.collections": "Collections",
                    "pages.home": "Home",
                    "pages.leaderboard": "Leaderboard",
                    "pages.tournament": "Tournament",
                    "guide.step1": "Tap to connect",
                    "guide.step2": "Connect similar tiles with less than 2 turns",
                    "guide.step3": "Connect similar tiles with less than 2 turns",
                    "guide.step4": "More than 2 turns are NOT allowed",
                    "guide.step5": "There's obstacle between the tiles",
                    "guide.timer": "Remove all tiles before\nthe time end",
                    "guide.combo": "Remove tiles continuously\nto increase combo!",
                    "guide.hint": "Tap to reveal a connectable pair",
                    "guide.thunder": "Tap to remove 2 pairs",
                    "guide.storm": "Tap to rearrange the tiles",
                    "guide.pliers": "Tap to remove bomb",
                    "guide.custom": "Custom mode unlocked.\n Press this button to set your own difficulty",
                    "interMsg.reviveAd": "Watch an ad to revive yourself\nKeep playing and don't give up!",
                    "interMsg.doubleAd": "Watching an ad doubles your rewards!",
                    "interMsg.ranked": "Test your skills\nin ranked tournaments",
                    "interMsg.friendChallenge": "Challenge your friend\nSee who can score higher!",
                    "interMsg.bragChallenge": "Send a challenge to your friend\nClaim bragging rights!",
                    "interMsg.clearTiles": "Clear all tiles to\nwin the level!",
                    "interMsg.beatClock": "Beat the clock before\ntime runs out!",
                    "interMsg.clearBombs": "Clear bombs before\nthey explode",
                    "interMsg.seasonPack": "A season pack unlock\nnew tile sets!",
                    "interMsg.collectStars": "The more stars you collect\nThe more coins you'll be rewarded!",
                    "interMsg.competeInLb": "Compete globally or with friends\nRise to the top in tournaments!",
                    "interMsg.competeWithFriends": "You can challenge a friend\nTest each other's reflexes!",
                    "interMsg.thunder": "The Thunder power-up\nblasts tiles away",
                    "interMsg.hint": "A Hint power-up reveals\nthe next pair",
                    "interMsg.pliers": "Pliers can remove\nany bomb instantly",
                    "interMsg.tornado": "The Tornado power-up\nshuffles the board!",
                    "interMsg.coins": "Earn coins by completing levels\nWin tournaments for even more!",
                    "interMsg.seasonTiles": "A new tile set is unlocked\nevery season packs",
                    "interMsg.dailyLogin": "Log in daily to claim\nbetter rewards!",
                    "interMsg.levelUp": "Level up and earn coins\nwith each victory!",
                    "interMsg.seasonRewards": "Each season pack offers\nnew tiles!",
                    "error.tryLater": "Sorry, please try again later",
                    "error.soon": "Coming Soon",
                    "error.noFriendsLb": "Unable to load friends leaderboard. Please try again later.",
                    "error.noWorldLb": "Unable to load world leaderboard. Please try again later.",
                    "error.createTourFail": "Unknown error. Failed to Create Tournament",
                    "error.tourExists": "You already have a tournament",
                    "error.challengeFail": "Sorry, you cannot replay\nat this time.",
                    "error.rewardFail": "Unable to validate rewards. Please try again later...",
                    "error.tourEnded": "Tournament has ended",
                    "error.tourJoinFail": "Sorry, you cannot join\nat this time.",
                    "error.noAd": "No ads to display.",
                    "error.ratingNoAuth": "You need to log in to rate the game.",
                    "error.ratingGameRated": "You have already rated the game.",
                    "error.ratingFail": "Failed to rate the game.",
                    "error.shortcutFail": "Failed to create shortcut.",
                    "error.login": "Failed to log in.",
                    "error.joinLb": "Failed to join the leaderboard.",
                    "reward.day": "Day",
                    "reward.dayX": "Day %{0}",
                    "reward.starChestTitle": "Star Chest",
                    "reward.starChestAvailable": "Congrats, you have enough stars to open the chest!",
                    "reward.starChestUnavailable": "Win more stars to open!",
                    "item.hint": "Hint",
                    "item.thunder": "Thunder",
                    "item.storm": "Storm",
                    "item.pliers": "Pliers",
                    "item.hintDesc": "Shows a pair of tiles\nthat can be connected.",
                    "item.thunderDesc": "Remove 2 pair of tiles\non the game field.",
                    "item.stormDesc": "Randomly rearranges the \ntiles on the game field.",
                    "item.pliersDesc": "Removes a random bomb\nfrom the game field.",
                    "theme.newTiles": "New tiles",
                    "theme.summer": "Summer Levels",
                    "theme.autumn": "Autumn Levels",
                    "theme.winter": "Winter Levels",
                    "theme.springFestival": "Spring Festival Levels",
                    "theme.treePlantingFestival": "Tree Planting Festival Levels",
                    "theme.blueSeaFestival": "Blue Sea Festival Levels",
                    "theme.musicFestival": "Music Festival Levels",
                    "theme.harvestFestival": "Harvest Festival Levels",
                    "theme.foodFestival": "Food Festival Levels",
                    "theme.snowFestival": "Snow Festival Levels",
                    "theme.lightFestival": "Light Festival Levels",
                    "theme.peaceFestival": "Peace Festival Levels",
                    "theme.flowerFestival": "Flower Festival Levels",
                    "theme.streetFestival": "Street Festival Levels",
                    "theme.colorGarden": "Color Garden Levels",
                    "theme.colorFestival": "Color Festival Levels",
                    "theme.natureSummer": "Nature Summer Levels",
                    "theme.snowMountain": "Snow Mountain Levels",
                    "theme.iceFestival": "Ice Festival Levels",
                    "theme.greenGrassFestival": "Green Grass Festival Levels",
                    "theme.communityFestival": "Community Festival Levels",
                    "theme.waterFestival": "Water Festival Levels",
                    "theme.animalFestival": "Animal Festival Levels",
                    "theme.lostFestival": "Lost Festival Levels",
                    "theme.halloweenFestival": "Halloween Festival Levels",
                    "theme.snowMusicFestival": "Snow Music Festival Levels",
                    "theme.christmas": "Christmas Levels",
                    "theme.springFlowerFestival": "Spring Flower Festival Levels",
                    "theme.tetHoliday": "Tet Holiday Levels",
                    "theme.seaFestival": "Sea Festival Levels",
                    "theme.fireworkFestival": "Firework Festival Levels",
                    "theme.halloweenHorror": "Halloween Horror Levels",
                    "theme.midAutumn": "Mid Autumn Levels",
                    "theme.christmasSweet": "Christmas Sweet Levels",
                    "theme.newYearCountdown": "New Year Countdown Levels",
                    "theme.happyNewYear": "Happy New Year Levels",
                    "share.canYouDoBetter": "Can you do better?",
                    "dashboard.unlockLevel": "Unlock lv.%{0}"
                },
                texture: {
                    draw: "locales/en/scenes/result-scene/resources/text_draw",
                    lose: "locales/en/scenes/result-scene/resources/text_lose",
                    victory: "locales/en/scenes/result-scene/resources/text_victory",
                    waiting: "locales/en/scenes/result-scene/resources/text_waiting",
                    excellent: "locales/en/scenes/game-scene/resources/effects/text-effect/excellent",
                    good: "locales/en/scenes/game-scene/resources/effects/text-effect/good",
                    great: "locales/en/scenes/game-scene/resources/effects/text-effect/great",
                    wellDone: "locales/en/screens/level-complete-screen/resources/well_done",
                    freeRewards: "locales/en/screens/get-rewards-screen/resources/free_rewards"
                }
            };
            M._RF.push({}, "0b4bc6YT6ZGg4lnXfh/zL6J", "AdsManager", void 0);
            var me = Ludex, ve = me.Events, $e = me.Configs.Ads, ye = $e.Enabled, Se = $e.PreloadAds, Ee = $e.ShowAdOnLoad, Ae = me.Utils, we = Ae.Time, be = Ae.Decorator, Ce = codex.event, De = (he = be.tryCatch(), fe = e((pe = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Ce.on(ve.AD_CLOSED, t.requestResizeGame$), Ce.catchUp(ve.GAME_READY, t.processPreloadAds$), Ce.catchUp(ve.GAME_SDK_READY, t.processShowFirstInterstitialAd), Ce.catchUp(ve.CONTEXT_DATA_PROCESSED, t.processShowBannerAds$), Ce.catchUp(ve.CONTEXT_DATA_PROCESSED, function() {
                            P.on(i.LAYOUT_CHANGED, t.handleLayoutChanged$);
                        });
                    }, this.requestResizeGame$ = function() {
                        Ce.emit(ve.REQUEST_RESIZE_GAME);
                    }, this.processShowBannerAds$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!ye) return [
                                        3,
                                        3
                                    ];
                                    if (!GameSDK.isGameSDK("FacebookInstant")) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        we.sleepAsync(5e3)
                                    ];
                                case 1:
                                    _state.sent(), _state.label = 2;
                                case 2:
                                    a.updateBannerAdsByLayout(s.getCurrentLayout()), a.refreshBannerAdVisibility(), _state.label = 3;
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.processPreloadAds$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!Se) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        we.sleepAsync(3e3)
                                    ];
                                case 1:
                                    _state.sent(), a.preloadAds(), _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), o(this, "processShowFirstInterstitialAd", fe, this), this.handleLayoutChanged$ = function() {
                        a.updateBannerAdsByLayout(s.getCurrentLayout()), a.refreshBannerAdVisibility();
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenEvents$(), console.debug("Ads Manager: Initialized", {
                                Enabled: ye,
                                PreloadAds: Se,
                                ShowAdOnLoad: Ee
                            });
                        }
                    }
                ]), e;
            }()).prototype, "processShowFirstInterstitialAd", [
                he
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    return n(function() {
                        var e, t, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!ye || (e = Ee.Enabled, t = Ee.DelaySeconds, !e)) return [
                                        3,
                                        4
                                    ];
                                    if (!(t > 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        we.sleepAsync(1e3 * t)
                                    ];
                                case 1:
                                    _state.sent(), _state.label = 2;
                                case 2:
                                    return (n = GameSDK.isGameSDK("Yandex")) && P.pause(), [
                                        4,
                                        a.showInterstitialAdAsync({
                                            forceLoad: !0,
                                            contextType: "preroll"
                                        })
                                    ];
                                case 3:
                                    _state.sent(), n && P.resume(), _state.label = 4;
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }
            }), pe);
            M._RF.pop(), M._RF.push({}, "b4ad5mMokdAa6EVNGzNedpF", "EngineManager", void 0);
            var Re, Le, Te, Fe = Ludex, xe = Fe.Events, _e = Fe.Configs.GameEngine, Ie = _e.DynamicAtlas, Me = _e.PreferredFPS, Pe = Fe.Utils, Ne = Pe.Valid, ke = Pe.Device, Oe = codex.event, Ue = function() {
                function e() {
                    var t = this;
                    r(this, e), this.overrideSettings$ = function() {
                        N.overrideSettings(k.Category.ENGINE, "debug", Ne.isDebugger()), O.instance.resizeWithBrowserSize(!1), ke.isDesktop() ? P.frameRate = Me.Desktop : P.frameRate = Me.Mobile;
                    }, this.setupAutoAtlas$ = function() {
                        U.instance.cacheAsset = !0;
                    }, this.setupAssetDownloader$ = n(function() {
                        var _$e, n, a;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return _$e = U.instance.downloader, t.setupAllowImageBitmap$(), _$e.maxConcurrency = 24, _$e.maxRequestsPerFrame = 24, [
                                        4,
                                        t.checkWebpSupport$()
                                    ];
                                case 1:
                                    return n = _state.sent(), B.hasFeature(B.Feature.WEBP) && (a = B.hasFeature, B.hasFeature = function(e) {
                                        return e === B.Feature.WEBP ? n : a(e);
                                    }), [
                                        2
                                    ];
                            }
                        });
                    }), this.setupAllowImageBitmap$ = function() {
                        U.instance.allowImageBitmap = !0;
                        var _$e = !0;
                        GameSDK.isGameSDK("YoutubePlayables") && (_$e = !1), U.instance.allowImageBitmap = _$e;
                    }, this.checkWebpSupport$ = function() {
                        return new Promise(function(e) {
                            var t = new Image;
                            t.onload = function() {
                                return e(!0);
                            }, t.onerror = function() {
                                return e(!1);
                            }, t.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
                        });
                    }, this.setupOptimalPipelines$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return U.instance.transformPipeline.remove(1), [
                                2
                            ];
                        });
                    }), this.setupEngineRunningState$ = function() {
                        G.on(z.EventType.TOUCH_START, t.handleResumeEngine$), Oe.catchUp(xe.GAME_READY, function() {
                            Oe.on(xe.VISIBILITY_HIDDEN, t.handlePauseEngine$), Oe.on(xe.VISIBILITY_VISIBLE, t.handleResumeEngine$);
                        });
                    }, this.handlePauseEngine$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return P.isPaused() || (console.debug("Engine: Paused", P.isPaused()), P.pause()), [
                                2
                            ];
                        });
                    }), this.handleResumeEngine$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return P.isPaused() && (console.debug("Engine: Resumed", P.isPaused()), P.resume()), [
                                2
                            ];
                        });
                    }), this.setupDynamicAtlas$ = function() {
                        B.isBrowser ? t.setupDynamicAtlasForBrowser$() : B.isNative ? t.setupDynamicAtlasForNative$() : t.disableDynamicAtlas$();
                    }, this.setupDynamicAtlasForBrowser$ = function() {
                        switch(B.os){
                            case B.OS.IOS:
                                t.setupDynamicAtlasForIOS$();
                                break;
                            case B.OS.ANDROID:
                                t.setupDynamicAtlasForAndroid$();
                                break;
                            case B.OS.OSX:
                            case B.OS.LINUX:
                            case B.OS.WINDOWS:
                                t.setupDynamicAtlasForDesktop$();
                                break;
                            default:
                                t.setupDynamicAtlasDefault$();
                        }
                    }, this.setupDynamicAtlasForNative$ = function() {
                        switch(B.platform){
                            case B.Platform.ANDROID:
                                t.setupDynamicAtlasForAndroid$();
                                break;
                            case B.Platform.IOS:
                                t.setupDynamicAtlasForIOS$();
                                break;
                            default:
                                t.setupDynamicAtlasDefault$();
                        }
                    }, this.setDynamicAtlas$ = function(e) {
                        var n = e.Enabled, a = e.MaxAtlasCount, r = e.MaxAtlasSize, i = e.MaxFrameSize, s = H.instance;
                        V.CLEANUP_IMAGE_CACHE = !n, s.enabled = n, s.textureSize = r, s.maxFrameSize = i, s.maxAtlasCount = a, s.textureBleeding = Ie.OptimizeAtlas.TextureBleeding;
                        var o = t.getMaxTextureSize$() || r, c = Math.min(r, o);
                        s.textureSize = c, i > c && (s.maxFrameSize = c);
                    }, this.getMaxTextureSize$ = function() {
                        if (!Y.root) return -1;
                        var _$e = Y.root.device.capabilities.maxTextureSize, t = Math.min(ke.maxTextureSize(), _$e);
                        if (t > 8192) return 7168;
                        var n = H.instance.maxFrameSize, a = t - 1024;
                        return a <= (void 0 === n ? 0 : n) || a <= 0 ? -1 : a;
                    }, this.setupDynamicAtlasForIOS$ = function() {
                        var _$e = Ie.IOS;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasForAndroid$ = function() {
                        var _$e = Ie.Android;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasForDesktop$ = function() {
                        var _$e = Ie.Desktop;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasDefault$ = function() {
                        t.setDynamicAtlas$({
                            Enabled: !0,
                            MaxAtlasCount: 1,
                            MaxAtlasSize: 4096,
                            MaxFrameSize: 1024
                        });
                    }, this.disableDynamicAtlas$ = function() {
                        V.CLEANUP_IMAGE_CACHE = !0, H.instance.enabled = !1;
                    }, this.setupBatcherLimit$ = function() {
                        V.BATCHER2D_MEM_INCREMENT = 512, V.MAX_LABEL_CANVAS_POOL_SIZE = 125;
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.overrideSettings$(), this.setupAutoAtlas$(), this.setupBatcherLimit$(), this.setupDynamicAtlas$(), this.setupAssetDownloader$(), this.setupOptimalPipelines$(), this.setupEngineRunningState$(), console.debug("Engine Manager: Initialized", {
                                PreferredFPS: Me
                            });
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "9f0a0l1uXlNwqKEKardFRyv", "LayoutManager", void 0);
            var Be = l.Layout, Ge = l.DesignSize, ze = Ge.Portrait, He = Ge.Landscape, Ve = l.AcceptPortraitRatio, Ye = Ludex, qe = Ye.Utils.Decorator, Qe = Ye.Configs.GameEngine.AutoResizeCanvas, We = Ye.Events, Ke = codex, je = Ke.ads, Xe = Ke.event, Ze = (Re = qe.debounce(100), Te = e((Le = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenResizeEvent$ = function() {
                        if (Qe && ResizeObserver) {
                            var _$e, n = null != (_$e = window.__listeners.resize) ? _$e : [];
                            if (n.length > 0) {
                                var a, r = u(n);
                                try {
                                    for(r.s(); !(a = r.n()).done;){
                                        var i = a.value;
                                        window.removeEventListener("resize", i);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally{
                                    r.f();
                                }
                            }
                            new ResizeObserver(t.handleBodyResize).observe(window.document.body);
                        }
                        Xe.on(We.REQUEST_RESIZE_GAME, t.handleViewResizeBySystem$);
                    }, this.setupResolutionPolicy$ = function() {
                        q.setOrientation(V.ORIENTATION_AUTO), t.resolutionPolicy$ = q.getResolutionPolicy(), t.resolutionPolicy$.setContentStrategy(Q.ContentStrategy.EXACT_FIT), t.resolutionPolicy$.setContainerStrategy(Q.ContainerStrategy.PROPORTION_TO_FRAME);
                    }, this.isAdShowing$ = function() {
                        return !(null == je || !je.isAdFullSizeShowing()) && (console.error("⚠️ LayoutManager:handleViewResize skipped because ad is showing"), !0);
                    }, this.handleViewResizeBySystem$ = function(e) {
                        if (!t.isAdShowing$()) {
                            var n = c.getMaxPixelRatio(), a = (null != e ? e : {}).forcePixelRatio, r = void 0 === a ? n : a;
                            console.debug("📱 View resize by system", {
                                forcePixelRatio: r,
                                maxDpr: n
                            }), window.devicePixelRatio = null != r ? r : n, t.setupOrientationByCanvasSize$();
                        }
                    }, o(this, "handleBodyResize", Te, this), this.setupOrientationByCanvasSize$ = function() {
                        var _$e = t.getScreenRatio$();
                        switch(l.PRIMARY_LAYOUT){
                            case "portrait":
                                t.setPortraitView$();
                                break;
                            case "landscape":
                                t.setLandscapeView$();
                                break;
                            case "auto":
                                _$e <= Ve ? t.setPortraitView$() : t.setLandscapeView$();
                        }
                    }, this.setPortraitView$ = function() {
                        var _$e = ze.WIDTH, n = ze.HEIGHT, a = l.PRIMARY_LAYOUT === Be.Portrait;
                        (t.currentLayout$ !== Be.Portrait || a) && (t.currentLayout$ = Be.Portrait, t.setupLayoutStrategy$(_$e, n)), t.resizeGameView$(_$e, n);
                    }, this.setLandscapeView$ = function() {
                        var _$e = He.WIDTH, n = He.HEIGHT, a = l.PRIMARY_LAYOUT === Be.Landscape;
                        (t.currentLayout$ !== Be.Landscape || a) && (t.currentLayout$ = Be.Landscape, t.setupLayoutStrategy$(_$e, n)), t.resizeGameView$(_$e, n);
                    }, this.setupLayoutStrategy$ = function(e, n) {
                        var a = q.getDesignResolutionSize(), r = a.width, s = a.height, o = t.resolutionPolicy$.getContentStrategy(), c = t.getScreenRatio$(), u = l.AcceptPortraitRatio, d = t.resolutionPolicy$._containerStrategy.name, h = t.currentLayout$ === Be.Portrait, p = t.currentLayout$ === Be.Landscape;
                        h && t.resolutionPolicy$.setContentStrategy(Q.ContentStrategy.FIXED_WIDTH), p && t.resolutionPolicy$.setContentStrategy(Q.ContentStrategy.FIXED_HEIGHT), h && t.resolutionPolicy$.setContainerStrategy(Q.ContainerStrategy.EQUAL_TO_FRAME), p && t.resolutionPolicy$.setContainerStrategy(Q.ContainerStrategy.EQUAL_TO_FRAME), c > u && h && (t.resolutionPolicy$.setContentStrategy(Q.ContentStrategy.SHOW_ALL), t.resolutionPolicy$.setContainerStrategy(Q.ContainerStrategy.PROPORTION_TO_FRAME)), r === e && s === n && o === t.resolutionPolicy$.getContentStrategy() && d === t.resolutionPolicy$._containerStrategy.name || q.setDesignResolutionSize(e, n, t.resolutionPolicy$), console.debug("🔥 Change layout to", t.currentLayout$, t.resolutionPolicy$), P.emit(i.LAYOUT_CHANGED, t.currentLayout$);
                    }, this.resizeGameView$ = function(e, n) {
                        var a = l.DesignSize.Resolution, r = new W(e / a, n / a), s = c.getScreenWidthCss(), o = c.getScreenHeightCss(), u = s / r.width, d = o / r.height, h = new W(r.width, r.height), p = t.currentLayout$ === Be.Portrait, f = t.currentLayout$ === Be.Landscape;
                        if (p || f) h.width *= u, h.height *= d;
                        else {
                            var g = Math.min(u, d);
                            h.width *= g, h.height *= g;
                        }
                        var m = c.worldSizeToCssSize(h.width), v = c.worldSizeToCssSize(h.height), $ = new W(m, v);
                        K.windowSize = $, P.emit(i.VIEW_RESIZED, $), console.info("📐 View Resized", $);
                    }, this.getScreenRatio$ = function() {
                        return c.getScreenWidthCss() / c.getScreenHeightCss();
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenResizeEvent$(), this.setupResolutionPolicy$(), console.debug("Layout Manager: Initialized", {
                                AcceptPortraitRatio: Ve,
                                AutoResizeCanvas: Qe
                            });
                        }
                    }
                ]), e;
            }()).prototype, "handleBodyResize", [
                Re
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    var e = this;
                    return function() {
                        if (!e.isAdShowing$()) {
                            var t = c.getMaxPixelRatio();
                            console.debug("📱 View resize by body", {
                                maxDpr: t
                            }), window.devicePixelRatio = t, e.setupOrientationByCanvasSize$();
                        }
                    };
                }
            }), Le);
            M._RF.pop(), M._RF.push({}, "535cbXcmXdEzLn3H3LOIS27", "MatchManager", void 0);
            var Je = Ludex, et = Je.Utils.Valid, tt = Je.Dtos.Match, nt = (void 0 === tt ? {} : tt).CustomData, at = function() {
                function e() {
                    r(this, e), this.setupMatchCustomData$ = function() {
                        nt && (nt.addDefaults(d), nt.addValidator("score", function(e) {
                            if (!et.isNumber(e) || e < 0) throw Error("score ".concat(e, " is invalid"));
                        }));
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            console.debug("Match Manager: Initialized");
                        }
                    },
                    {
                        key: "setupDefaultMatchData",
                        value: function value() {
                            this.setupMatchCustomData$();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "d675ctpYslBHp4qqiYEki+q", "PlayerManager", void 0);
            var rt = Ludex, it = rt.Utils, st = it.Valid, ot = (it.Array, it.Object, it.Browser, rt.Dtos.Player), ct = codex.player, lt = (window.GameName.replace(/ /g, "-"), function() {
                function e() {
                    r(this, e);
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            console.debug("Player Manager: Initialized");
                        }
                    },
                    {
                        key: "setupDefaultGameData",
                        value: function value() {
                            ot.Data.makeLoose(), ot.GameData.makeLoose(), ot.Data.addDefaults(h), ot.GameData.addDefaults(p), ot.GameData.addValidator("bestEndlessScore", function(e) {
                                if (!st.isNumber(e) || e < 0) throw Error("bestEndlessScore ".concat(e, " is invalid"));
                            }), ot.GameData.addValidator("firstLoginTime", function(e) {
                                if (!st.isNumber(e) || e < 0) throw Error("firstLoginTime ".concat(e, " is invalid"));
                            });
                        }
                    },
                    {
                        key: "syncPlatformPlayerData",
                        value: function value() {}
                    },
                    {
                        key: "requestConnectedPlayers",
                        value: function value() {
                            ct.requestConnectedPlayers().catch(function(e) {
                                console.warn("player.requestConnectedPlayers", e);
                            });
                        }
                    }
                ]), e;
            }());
            M._RF.pop(), M._RF.push({}, "51079bCfn9MZK6cuxbahS7M", "AdaptivePerformance", void 0);
            var ut = Ludex.Utils.Valid, dt = codex.adaptivePerformance, ht = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Y.once(j.EVENT_BEGIN_FRAME, t.handleBeginFrame$), Y.on(j.EVENT_AFTER_SCENE_LAUNCH, t.handleAfterSceneLaunch$);
                    }, this.handleBeginFrame$ = function() {
                        Y.on(j.EVENT_AFTER_UPDATE, t.lateUpdate$), Y.on(j.EVENT_BEFORE_UPDATE, t.updateActualFPS$);
                    }, this.handleAfterSceneLaunch$ = function(e) {
                        dt && dt.trackingScene(e.name);
                    }, this.lateUpdate$ = function() {
                        var _$e = 1e3 * P.deltaTime;
                        null == dt || dt.updatePostStepDeltaTime(_$e);
                    }, this.updateActualFPS$ = function() {
                        var _$e, t = null == (_$e = Y.root) ? void 0 : _$e.fps;
                        ut.isNumber(t) && (null == dt || dt.updateActualFPS(t));
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            dt && this.listenEvents$();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "0bbd4wf2fRDcKljBcls6K8a", "CanvasRecorder", void 0);
            var pt = codex.canvasRecorder, ft = function() {
                function e() {
                    r(this, e);
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            if (P.canvas && pt) {
                                pt.setCanvas(P.canvas);
                                var _$e = pt.getOptions(), t = function t() {
                                    P.pause(), P.step();
                                }, n = pt.waitNextFrame;
                                pt.waitNextFrame = function() {
                                    var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return new Promise(function(r, i) {
                                        a || pt.isCapturing() ? _$e.syncFps ? (Y.once(j.EVENT_AFTER_RENDER, r), t()) : n(a).then(r).catch(i) : P.resume();
                                    });
                                };
                            }
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "e8b3dVomjtKZ68ykoRs82vP", "DailyRewards", void 0);
            var gt, mt, vt, $t = codex.storage, yt = function() {
                function e() {
                    r(this, e), this.initStorage$ = function() {
                        $t.addStorage("dashboardDailyRewards", {
                            hasShownPopup: !1
                        });
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.initStorage$();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "49a72YoKFFCKbOm5Xgp9R+k", "DynamicAssets", void 0);
            var St = Ludex, Et = St.Configs.GameEngine.DynamicAssets, At = Et.Resolution, wt = Et.IgnoreFiles, bt = Et.Compression, Ct = St.Events, Dt = St.Utils, Rt = Dt.Array, Lt = Dt.Function, Tt = Dt.Device, Ft = Dt.Decorator, xt = codex, _t = xt.event, It = xt.storage, Mt = xt.getBuildVersion, Pt = [
                ".png",
                ".jpg",
                ".jpeg",
                ".webp"
            ], Ut = (gt = Ft.debounce(1e3), vt = e((mt = function() {
                var a;
                function e() {
                    var _$e, t = this;
                    r(this, e), this.isProcessing$ = !1, this.yield10msIfNeeded$ = Lt.timeSlice(10), this.targetScale$ = 1, this.sessionQuality$ = 3, this.failedAssets$ = new Set, this.isAssetUpgraded$ = new Set, this.upgradableAssets$ = new Map, this.initStorage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        It.addStorage("DynamicAssets", {
                                            currentQuality: 0,
                                            buildVersion: "0"
                                        }, !0)
                                    ];
                                case 1:
                                    return _state.sent(), [
                                        2
                                    ];
                            }
                        });
                    }), this.getOptimalScale$ = function() {
                        var _$e, t = Math.round(Tt.pixelRatio()), n = At.Available, a = At.Source, r = f(n).sort(function(e, t) {
                            return e - t;
                        }), i = u(r);
                        try {
                            for(i.s(); !(_$e = i.n()).done;){
                                var s = _$e.value;
                                if (s >= t) return Math.min(s, a);
                            }
                        } catch (e) {
                            i.e(e);
                        } finally{
                            i.f();
                        }
                        return a;
                    }, this.getCurrentQuality$ = function() {
                        return t.targetScale$ !== At.Source || bt.Enabled ? bt.Enabled ? 1 : 2 : 3;
                    }, this.checkCacheVersion$ = function() {
                        var _$e = Mt().toString(), n = It.getStorage("DynamicAssets"), a = null != n ? n : {}, r = a.currentQuality, i = void 0 === r ? 0 : r, s = a.buildVersion;
                        t.sessionQuality$ < i && _$e === s && (t.sessionQuality$ = i), It.setStorageData("DynamicAssets", "buildVersion", _$e), It.updateToWebStorage("DynamicAssets");
                    }, this.listenEvents$ = function() {
                        bt.Enabled && 3 !== t.sessionQuality$ && (_t.catchUp(Ct.GAME_READY, function() {
                            P.emit(i.REQUEST_UPGRADE_ASSET);
                        }), P.on(i.REQUEST_UPGRADE_ASSET, t.handleChangeQuality));
                    }, this.injectSpriteUpdate$ = function(e) {
                        Object.defineProperty(X.prototype, "spriteFrame", {
                            get: function get() {
                                return this._spriteFrame;
                            },
                            set: function set(t) {
                                if (t && (t.refreshed || this._spriteFrame !== t)) {
                                    var n = this._spriteFrame;
                                    if (this._spriteFrame = t, this.markForUpdateRenderData(!0), this._applySpriteFrame(n), this.sizeMode !== X.SizeMode.CUSTOM) {
                                        var a = this.node.getComponent(Z);
                                        if (a) {
                                            var r = t.originalSize, i = r.width, s = r.height, o = new W(i / e, s / e);
                                            a.setContentSize(o);
                                        }
                                    }
                                }
                            }
                        });
                    }, this.injectSpriteFrameCheckRect$ = function(e) {
                        var t = J.prototype.checkRect;
                        J.prototype.checkRect = function() {
                            if (this.refreshed) return !0;
                            for(var _$e = arguments.length, n = Array(_$e), a = 0; a < _$e; a++)n[a] = arguments[a];
                            return t.apply(this, n);
                        };
                    }, this.injectSpriteFrameSlicedUV$ = function(e) {
                        var t = J.prototype._calculateSlicedUV;
                        J.prototype._calculateSlicedUV = function() {
                            var n, a = null != (n = this._capInsets) ? n : [
                                0,
                                0,
                                0,
                                0
                            ], r = a.map(function(t) {
                                return (t + 1) * e;
                            });
                            this._capInsets = r, t.apply(this), this._capInsets = a;
                        };
                    }, this.injectSpriteFrameResolution$ = function(e) {
                        var t = J.prototype._refreshTexture;
                        J.prototype._refreshTexture = function() {
                            for(var n = arguments.length, a = Array(n), r = 0; r < n; r++)a[r] = arguments[r];
                            if (this.name && !this.refreshed) {
                                var i = this.rect, s = i.x, o = i.y, c = i.width, l = i.height, u = Number((s * e).toFixed(2)), d = Number((o * e).toFixed(2)), f = new ee(u, d, Math.round(c * e), Math.round(l * e)), g = new W(f.width, f.height);
                                return this.refreshed = !0, this.reset({
                                    rect: f,
                                    originalSize: g
                                }), t.apply(this, a);
                            }
                            t.apply(this, a);
                        };
                    }, o(this, "handleChangeQuality", vt, this), this.getAssetQuality$ = function(e) {
                        var n = "/native@".concat(t.targetScale$, "x/");
                        switch(t.sessionQuality$){
                            case 2:
                                return "".concat(n, "quality/");
                            case 1:
                                return Rt.has(wt, e) ? "".concat(n, "quality/") : "".concat(n, "medium/");
                            default:
                                return "/native/";
                        }
                    }, this.replaceAssetUrl$ = function(e, n) {
                        return 3 !== t.sessionQuality$ && n.includes("/native/") ? n.replace("/native/", t.getAssetQuality$(e)) : n;
                    }, this.saveStateToStorage$ = function() {
                        It.setStorageData("DynamicAssets", "currentQuality", t.sessionQuality$), It.updateToWebStorage("DynamicAssets", !0);
                    }, this.updateSpriteFrames$ = n(function() {
                        var _$e, n, a, r, i, s, o, c, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(_$e = Y.getScene())) return [
                                        3,
                                        9
                                    ];
                                    a = _$e.getComponentsInChildren("cc.Sprite"), r = u(a), _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        7,
                                        8,
                                        9
                                    ]), r.s(), _state.label = 2;
                                case 2:
                                    if ((n = r.n()).done) return [
                                        3,
                                        6
                                    ];
                                    if (!(i = n.value.spriteFrame)) return [
                                        3,
                                        5
                                    ];
                                    if (s = i.texture, o = i.original, c = s.uuid, o && (c = o._texture.uuid), !t.isAssetUpgraded$.has(c)) return [
                                        3,
                                        4
                                    ];
                                    return s.updateImage(), [
                                        4,
                                        t.yield10msIfNeeded$()
                                    ];
                                case 3:
                                    _state.sent(), _state.label = 4;
                                case 4:
                                    _state.label = 5;
                                case 5:
                                    return [
                                        3,
                                        2
                                    ];
                                case 6:
                                    return [
                                        3,
                                        9
                                    ];
                                case 7:
                                    return e = _state.sent(), r.e(e), [
                                        3,
                                        9
                                    ];
                                case 8:
                                    return r.f(), [
                                        7
                                    ];
                                case 9:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.requestUpdateDynamicAssets$ = function() {
                        P.emit(i.REQUEST_DYNAMIC_ATLAS, {
                            force: !0
                        });
                    }, this.collectUpgradableAssets$ = function(e) {
                        var n, a = e.output = e.input, r = !1, s = u(a);
                        try {
                            for(s.s(); !(n = s.n()).done;){
                                var o = n.value;
                                if (Rt.has(Pt, o.ext) && !Rt.has(wt, o.uuid)) {
                                    var c = o.url, l = t.replaceAssetUrl$(o.uuid, c);
                                    if (l !== c && (o.url = l, !t.upgradableAssets$.has(o.uuid))) {
                                        var d = {
                                            ext: o.ext,
                                            url: o.url,
                                            uuid: o.uuid,
                                            options: o.options,
                                            resolution: t.targetScale$
                                        };
                                        t.upgradableAssets$.set(o.uuid, d), r = !0;
                                    }
                                }
                            }
                        } catch (e) {
                            s.e(e);
                        } finally{
                            s.f();
                        }
                        r && P.emit(i.REQUEST_UPGRADE_ASSET);
                    }, this.processUpgradeQualityAsync$ = (_$e = n(function(e) {
                        var n, a, r, s, o, c, l, u, d, h, p;
                        return _ts_generator(this, function(_state) {
                            return (n = e.uuid, a = e.url, r = e.ext, s = e.options, o = e.resolution, n && a && r && s && o) ? t.isAssetUpgraded$.has(n) ? [
                                2,
                                !0
                            ] : t.failedAssets$.has(n) ? [
                                2,
                                !1
                            ] : Rt.has(wt, n) ? [
                                2,
                                (t.isAssetUpgraded$.add(n), !0)
                            ] : _instanceof(c = te.assets.get(n), ne) ? (l = "/native@".concat(o, "x/"), u = "".concat(l, "medium/"), d = "".concat(l, "quality/"), (h = a.replace(u, d)) === a) ? [
                                2,
                                (t.isAssetUpgraded$.add(n), !0)
                            ] : (p = {
                                uuid: n,
                                url: h,
                                options: s,
                                resolution: o,
                                ext: r
                            }, [
                                2,
                                new Promise(function(e) {
                                    te.loadAny(p, s, function(a, r) {
                                        a ? (console.warn("[DynamicAssets] processUpgrade: Upgrade error for ".concat(n.slice(0, 5)), a), t.failedAssets$.add(n), e(!1)) : (c.reset(r), c._nativeUrl = h, t.isAssetUpgraded$.add(n), P.emit(i.ASSET_QUALITY_CHANGE, {
                                            asset: c,
                                            item: p
                                        }), e(!0));
                                    });
                                })
                            ]) : [
                                2,
                                (console.warn("DynamicAssets: Asset not found for upgrade", n), !1)
                            ] : [
                                2,
                                !1
                            ];
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    });
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            var _$e;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return this.targetScale$ = this.getOptimalScale$(), this.sessionQuality$ = this.getCurrentQuality$(), [
                                            4,
                                            this.initStorage$()
                                        ];
                                    case 1:
                                        return _state.sent(), this.checkCacheVersion$(), te.transformPipeline.insert(this.collectUpgradableAssets$, 2), this.sessionQuality$ < 3 && (_$e = this.targetScale$ / At.Source, this.injectSpriteUpdate$(_$e), this.injectSpriteFrameSlicedUV$(_$e), this.injectSpriteFrameCheckRect$(_$e), this.injectSpriteFrameResolution$(_$e)), this.listenEvents$(), [
                                            2
                                        ];
                                }
                            });
                        }), function() {
                            return a.apply(this, arguments);
                        })
                    }
                ]), e;
            }()).prototype, "handleChangeQuality", [
                gt
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    var e = this;
                    return n(function() {
                        var t, n, a, r, i, s;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (e.isProcessing$ || !bt.Enabled || e.sessionQuality$ >= 2) return [
                                        3,
                                        6
                                    ];
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        4,
                                        5,
                                        6
                                    ]), e.isProcessing$ = !0, n = [], a = e.isAssetUpgraded$.size, r = u(e.upgradableAssets$.values());
                                    try {
                                        for(r.s(); !(t = r.n()).done;)i = t.value, s = e.processUpgradeQualityAsync$(i), n.push(s);
                                    } catch (e) {
                                        r.e(e);
                                    } finally{
                                        r.f();
                                    }
                                    if (n.length < 1) return [
                                        2
                                    ];
                                    return [
                                        4,
                                        Lt.allSettled(n)
                                    ];
                                case 2:
                                    return _state.sent(), e.isAssetUpgraded$.size > a && (e.sessionQuality$++, e.saveStateToStorage$()), [
                                        4,
                                        e.updateSpriteFrames$()
                                    ];
                                case 3:
                                    return _state.sent(), e.requestUpdateDynamicAssets$(), [
                                        3,
                                        6
                                    ];
                                case 4:
                                    return console.warn("DynamicAssets: Handle change quality error", _state.sent()), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return e.isProcessing$ = !1, [
                                        7
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }
            }), mt);
            M._RF.pop(), M._RF.push({}, "15ecbqnx5lFtYRSJp2lOLCm", "DynamicAtlas", void 0);
            var Bt = Ludex, Gt = Bt.Events, zt = Bt.Configs.GameEngine.DynamicAtlas.OptimizeAtlas, Ht = zt.AtlasDebug, Vt = zt.AutoAtlasSize, Yt = zt.UsePowerOfTwo, qt = zt.AllowNonePackable, Qt = zt.OnlyOptimizeWhenRenderTooLong, Wt = Bt.Utils, Kt = Wt.Json, jt = Wt.Image, Xt = Wt.Function, Zt = Wt.Object, Jt = Wt.Mark, en = codex.event, rn = function() {
                function e() {
                    var t = this;
                    r(this, e), this.isEffective$ = !0, this.forceUpdateDynamicAtlas$ = !1, this.mutex$ = Xt.mutex(), this.renderTimes$ = [], this.lastRenderTime$ = 0, this.renderTimeInterval$ = 5e3, this.atlasInfo$ = null, this.lastAtlasInfo$ = null, this.atlasIds$ = {}, this.collectInfo$ = new Map, this.packedFrames$ = new Set, this.debugCanvases$ = {}, this.listenEvents$ = function() {
                        P.on(i.REQUEST_DYNAMIC_ATLAS, t.requestUpdateDynamicAtlas$), en.on(Gt.SCENE_LAUNCHED, t.onSceneLaunched$), en.catchUp(Gt.GAME_READY, t.setupRenderListeners$);
                    }, this.onSceneLaunched$ = function() {
                        t.resetPendingInfo$(), t.resetAllAtlases$();
                    }, this.resetAllAtlases$ = function() {
                        for(var _$e in t.packedFrames$.forEach(function(e) {
                            e.isValid && e._resetDynamicAtlasFrame();
                        }), t.packedFrames$.clear(), H.instance.reset(), t.atlasInfo$ = null, t.lastAtlasInfo$ = null, t.debugCanvases$)delete t.debugCanvases$[_$e];
                    }, this.overrideDynamicAtlasManager$ = function() {
                        var _$e = H.instance;
                        _$e.packToDynamicAtlas = t.collectSpriteFrame$, _$e.deleteAtlasSpriteFrame = t.deleteSpriteFrame$;
                    }, this.createPendingDebugCanvas$ = function() {
                        var _$e = t.createDebugCanvas$(), n = H.instance.maxAtlasCount + 1;
                        t.debugCanvases$[n] = _$e;
                    }, this.checkRenderTimeThreshold$ = function() {
                        t.calculateMeanRenderTimeAndReset$() > 8 && t.handleLaggyFrame$(), Y.once(j.EVENT_AFTER_RENDER, function() {
                            setTimeout(function() {
                                t.checkRenderTimeThreshold$();
                            }, t.renderTimeInterval$);
                        });
                    }, this.handleLaggyFrame$ = function() {
                        t.isEffective$ || (t.renderTimeInterval$ = Math.min(t.renderTimeInterval$ + 1e3, 1e4)), t.requestUpdateDynamicAtlas$({
                            force: !0
                        });
                    }, this.resetPendingInfo$ = function() {
                        t.atlasIds$ = {}, t.collectInfo$.clear();
                    }, this.setupRenderListeners$ = function() {
                        Y.on(j.EVENT_BEFORE_RENDER, t.updateBeforeRenderTime$), Y.on(j.EVENT_AFTER_RENDER, t.updateAfterRenderTime$), Qt && en.catchUp(Gt.SCENE_LAUNCHED, function() {
                            Y.once(j.EVENT_AFTER_RENDER, t.checkRenderTimeThreshold$);
                        });
                    }, this.updateBeforeRenderTime$ = function() {
                        t.lastRenderTime$ = performance.now();
                    }, this.updateAfterRenderTime$ = function() {
                        t.renderTimes$.length >= 100 && t.renderTimes$.shift();
                        var _$e = performance.now() - t.lastRenderTime$;
                        t.renderTimes$.push(_$e);
                    }, this.calculateMeanRenderTimeAndReset$ = function() {
                        if (0 === t.renderTimes$.length) return 0;
                        var _$e = t.renderTimes$.reduce(function(e, t) {
                            return e + t;
                        }, 0) / t.renderTimes$.length;
                        return t.renderTimes$.length = 0, _$e;
                    }, this.collectSpriteFrame$ = function(e) {
                        if (Zt.hasOwn(e, "spriteFrame")) {
                            var n = e.spriteFrame;
                            if (t.isSpriteFrameValidForAtlas$(e, n)) {
                                var a = t.getTexture$(n), r = null == a ? void 0 : a.getId();
                                if (r) {
                                    var i = t.getTextureSizeFromTexture$(a);
                                    t.addTextureToCollectInfo$(r, i, e), Qt || t.requestUpdateDynamicAtlas$();
                                }
                            }
                        }
                    }, this.deleteSpriteFrame$ = function(e) {
                        var n = t.getTexture$(e);
                        if (n) {
                            var a = t.getAtlas$();
                            null == a || a.deleteInnerTexture(n), t.packedFrames$.delete(e), e._resetDynamicAtlasFrame();
                        }
                    }, this.isSpriteFrameValidForAtlas$ = function(e, n) {
                        var a = e.enabled, r = e.node;
                        if (!a || !n || !r.active || !r.activeInHierarchy || !n.packable && !qt) return !1;
                        if (n.original) {
                            var i = n.texture, s = n.original._texture, o = i === s, c = (null == i ? void 0 : i.getId()) === (null == s ? void 0 : s.getId());
                            if (o || c) return !1;
                        }
                        if (e.color.a < 1) return !1;
                        for(var l = r; l;){
                            var u = l.getComponent(ae);
                            if (u && u.opacity < 1) return !1;
                            l = l.parent;
                        }
                        var d = t.getTextureSize$(n);
                        return !t.isTextureTooLarge$(d);
                    }, this.addTextureToCollectInfo$ = function(e, n, a) {
                        var r = t.collectInfo$.get(e), s = n.w + 2, o = n.h + 2;
                        s <= 2 || o <= 2 || (r ? (r.w = s, r.h = o) : (r = {
                            id: e,
                            w: s,
                            h: o,
                            x: -1,
                            y: -1,
                            components: new Set
                        }, t.collectInfo$.set(e, r)), r.components.has(a) || r.components.add(a));
                    }, this.getTexture$ = function(e) {
                        var t, n;
                        return null != (t = null == (n = e.original) ? void 0 : n._texture) ? t : e.texture;
                    }, this.getTextureSize$ = function(e) {
                        var n = t.getTexture$(e);
                        return t.getTextureSizeFromTexture$(n);
                    }, this.getTextureSizeFromTexture$ = function(e) {
                        var t, n;
                        return null != e && e.image ? {
                            w: e.image.width,
                            h: e.image.height
                        } : {
                            w: null != (t = null == e ? void 0 : e.width) ? t : 0,
                            h: null != (n = null == e ? void 0 : e.height) ? n : 0
                        };
                    }, this.isTextureTooLarge$ = function(e) {
                        var t = H.instance.maxFrameSize;
                        return e.w >= t || e.h >= t;
                    }, this.rebuildAtlasIfNecessary$ = function() {
                        if (!t.atlasInfo$) return !1;
                        if (t.lastAtlasInfo$ && !t.forceUpdateDynamicAtlas$) {
                            var n = t.isSameAtlas$(t.lastAtlasInfo$, t.atlasInfo$);
                            if (t.isEffective$ = !n, n) return !1;
                        }
                        var a = t.getAtlas$();
                        if (null == (_$e = a) || !_$e._texture) return !1;
                        var r = t.atlasInfo$.packedInfo, i = a._texture, s = i.width, o = i.height, c = r.width + 5, l = r.height + 5;
                        if (5 >= Math.max(c, l)) return !1;
                        var u = Math.max(c, l), d = Yt ? u : c, h = Yt ? u : l;
                        if (!(a = t.resetAtlas$(a))) return !1;
                        if (Vt || d > s || h > o) {
                            a._texture.initWithSize(d, h);
                            var p = t.debugCanvases$[t.getAtlasIndex$()];
                            p && (p.width = d, p.height = h);
                        } else {
                            var _$e, f, g = t.debugCanvases$[t.getAtlasIndex$()];
                            g && (null == (f = g.getContext("2d")) || f.clearRect(0, 0, g.width, g.height));
                        }
                        return t.lastAtlasInfo$ = Kt.clone(t.atlasInfo$), !0;
                    }, this.createAtlas$ = function() {
                        var _$e = H.instance.newAtlas();
                        if (_$e && Ht) {
                            var n = t.createDebugCanvas$(), a = t.getAtlasIndex$();
                            t.debugCanvases$[a] = n;
                        }
                        return _$e;
                    }, this.createDebugCanvas$ = function() {
                        var _$e = H.instance.textureSize, t = document.createElement("canvas");
                        return t.width = _$e, t.height = _$e, t;
                    }, this.resetAtlas$ = function(e) {
                        var n = H.instance, a = n._atlases.indexOf(e);
                        return t.packedFrames$.forEach(function(e) {
                            e.isValid && e._resetDynamicAtlasFrame();
                        }), t.packedFrames$.clear(), e.destroy(), a > -1 && (n._atlases.splice(a, 1), n._atlasIndex >= a && n._atlasIndex--), t.getAtlas$();
                    }, this.getAtlas$ = function(e) {
                        var n, a = H.instance, r = a._atlases, s = a._atlasIndex;
                        return null != (n = (void 0 === r ? [] : r)[null != e ? e : s]) ? n : t.createAtlas$();
                    }, this.getAtlasIndex$ = function() {
                        return H.instance._atlasIndex;
                    }, this.getAtlasSize$ = function() {
                        var _$e = t.getAtlas$(), n = H.instance.textureSize;
                        return null != _$e && _$e._texture ? {
                            w: Math.max(_$e._texture.width, n),
                            h: Math.max(_$e._texture.height, n)
                        } : {
                            w: n,
                            h: n
                        };
                    }, this.requestUpdateDynamicAtlas$ = Xt.debounce(function(e) {
                        var n;
                        t.forceUpdateDynamicAtlas$ || (t.forceUpdateDynamicAtlas$ = null != (n = null == e ? void 0 : e.force) && n), t.updateDynamicAtlas$(), console.debug("[DynamicAtlas] Request update dynamic atlas", t);
                    }, 800), this.updateDynamicAtlas$ = n(function() {
                        var _$e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!Y.getScene()) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        t.mutex$.use("updateDynamicAtlas")
                                    ];
                                case 1:
                                    _$e = _state.sent(), Jt.start("DynamicAtlas Process");
                                    try {
                                        if (Y.pause(), t.atlasInfo$ = null, t.prepareDrawInfo$(), !t.rebuildAtlasIfNecessary$() || !t.packCollectedTextures$()) return [
                                            2
                                        ];
                                        P.emit(i.FINISHED_DYNAMIC_ATLAS), requestAnimationFrame(t.printAtlasTextures$);
                                    } catch (e) {} finally{
                                        t.forceUpdateDynamicAtlas$ = !1, Jt.stop("DynamicAtlas Process"), Y.resume(), _$e.release();
                                    }
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.prepareDrawInfo$ = function() {
                        if (!(t.collectInfo$.size < 1)) {
                            var _$e = [];
                            t.collectInfo$.forEach(function(t) {
                                t.components.size < 1 || _$e.push(t);
                            }), t.calculateOptimizedAtlas$(_$e);
                        }
                    }, this.calculateOptimizedAtlas$ = function(e) {
                        if (0 !== e.length) {
                            var n = function(e) {
                                var t, n = 0, a = 0, r = u(e);
                                try {
                                    for(r.s(); !(t = r.n()).done;){
                                        var i = t.value;
                                        n += i.w * i.h, a = Math.max(a, i.w);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally{
                                    r.f();
                                }
                                e.sort(function(e, t) {
                                    return t.h - e.h;
                                });
                                var s, o = [
                                    {
                                        x: 0,
                                        y: 0,
                                        w: Math.max(Math.ceil(Math.sqrt(n / .95)), a),
                                        h: 1 / 0
                                    }
                                ], c = 0, l = 0, d = u(e);
                                try {
                                    for(d.s(); !(s = d.n()).done;)for(var h = s.value, p = o.length - 1; p >= 0; p--){
                                        var f = o[p];
                                        if (!(h.w > f.w || h.h > f.h)) {
                                            if (h.x = f.x, h.y = f.y, l = Math.max(l, h.y + h.h), c = Math.max(c, h.x + h.w), h.w === f.w && h.h === f.h) {
                                                var g = o.pop();
                                                g && p < o.length && (o[p] = g);
                                            } else h.h === f.h ? (f.x += h.w, f.w -= h.w) : (h.w === f.w || o.push({
                                                x: f.x + h.w,
                                                y: f.y,
                                                w: f.w - h.w,
                                                h: h.h
                                            }), f.y += h.h, f.h -= h.h);
                                            break;
                                        }
                                    }
                                } catch (e) {
                                    d.e(e);
                                } finally{
                                    d.f();
                                }
                                return {
                                    w: c,
                                    h: l,
                                    fill: n / (c * l) || 0
                                };
                            }(e), a = n.w, r = n.h, i = n.fill;
                            if (!(i < .6)) {
                                var s = t.getAtlasSize$();
                                if (a > s.w || r > s.h) {
                                    var o = t.excessTextures$(e, s);
                                    if (o.length < 1) return;
                                    var c = new Set(o), l = e.filter(function(e) {
                                        return !c.has(e);
                                    });
                                    t.calculateOptimizedAtlas$(l);
                                } else t.atlasInfo$ = {
                                    atlasSize: s,
                                    atlasIndex: t.getAtlasIndex$(),
                                    packedInfo: {
                                        width: Math.round(a),
                                        height: Math.round(r),
                                        fillRate: i
                                    }
                                };
                            }
                        }
                    }, this.excessTextures$ = function(e, n) {
                        var a = n.w, r = n.h, i = t.calculateExcessDimensions$(a, r, n), s = i.excessWidth, o = i.excessHeight;
                        return t.tryRemoveExcessTextures$(e, s, o);
                    }, this.calculateExcessDimensions$ = function(e, t, n) {
                        return {
                            excessWidth: Math.max(0, e - n.w),
                            excessHeight: Math.max(0, t - n.h)
                        };
                    }, this.tryRemoveExcessTextures$ = function(e, n, a) {
                        var r, i = 0, s = 0, o = [], c = t.getAtlasIndex$(), l = u(e);
                        try {
                            for(l.s(); !(r = l.n()).done;){
                                var d, h = r.value;
                                (n > 0 && i < n || a > 0 && s < a) && (i += h.w, s += h.h, t.atlasIds$[h.id] = Math.min(null != (d = t.atlasIds$[h.id]) ? d : c, c), h.x = -1, h.y = -1, o.push(h));
                            }
                        } catch (e) {
                            l.e(e);
                        } finally{
                            l.f();
                        }
                        return o;
                    }, this.packCollectedTextures$ = function() {
                        if (!t.atlasInfo$) return !1;
                        var _$e = t.getAtlas$();
                        if (!_$e) return !1;
                        var n = [], a = new Map, r = new Set;
                        t.collectInfo$.forEach(function(e) {
                            r.add(e.id);
                            var i, s = u(e.components);
                            try {
                                for(s.s(); !(i = s.n()).done;){
                                    var o, c = i.value;
                                    if (c.isValid) {
                                        var l = null == c ? void 0 : c.spriteFrame;
                                        if (l) {
                                            var d = t.getTexture$(l), h = null == d ? void 0 : d.getId();
                                            h && (a.set(h, (null != (o = a.get(h)) ? o : 0) + 1), n.push(c));
                                        }
                                    }
                                }
                            } catch (e) {
                                s.e(e);
                            } finally{
                                s.f();
                            }
                        });
                        for(var i = 0; i < n.length; i++){
                            var o = n[i];
                            t.packComponentIntoAtlas$(_$e, o);
                        }
                        return !0;
                    }, this.packComponentIntoAtlas$ = function(e, n) {
                        if (Zt.hasOwn(n, "spriteFrame")) {
                            var a = n.spriteFrame;
                            a && t.tryInsertSpriteFrame$(e, a, n);
                        }
                    }, this.tryInsertSpriteFrame$ = function(e, n, a) {
                        n.original && n._resetDynamicAtlasFrame();
                        var r = H.instance.textureBleeding, i = t.drawTexture$(e, n, r);
                        i && (n._setDynamicAtlasFrame(i), t.packedFrames$.add(n), a.setTextureDirty(), a.markForUpdateRenderData(!0), t.updateLabelUVs$(a));
                    }, this.updateLabelUVs$ = function(e) {
                        var t;
                        if (_instanceof(e, re)) {
                            var n = e.renderData;
                            if (n) {
                                n.vertDirty = !1;
                                var a = re.Assembler.getAssembler(e);
                                null == a || null == (t = a.updateUVs) || t.call(a, e);
                            }
                        }
                    }, this.printAtlasTextures$ = function() {
                        if (Ht) {
                            var _$e = H.instance.maxAtlasCount;
                            for(var n in t.debugCanvases$){
                                var a = t.debugCanvases$[n];
                                if (a && Number(n) <= _$e) {
                                    var r = a.toDataURL("image/jpeg", .6);
                                    jt.logImage(r, .5);
                                }
                            }
                        }
                    }, this.drawTexture$ = function(e, n, a) {
                        var r, i, s, o, c = t.getTexture$(n);
                        if (!c) return null;
                        var l = c.getId(), u = t.collectInfo$.get(l);
                        if (!u) return null;
                        var d = null != (r = u.x) ? r : -1, h = null != (i = u.y) ? i : -1;
                        if (-1 === d || -1 === h) return null;
                        var p = e._texture, f = p.width, g = p.height;
                        if (d + u.w > f || h + u.h > g) return null;
                        var m = c.image;
                        if (!m) return null;
                        var v = 1 * !!a, $ = d + v, y = h + v, S = e._innerTextureInfos[l];
                        if (!S) {
                            if (t.drawToAtlas$({
                                atlas: e,
                                texId: l,
                                image: m,
                                drawX: $,
                                drawY: y,
                                space: v
                            }), Ht) {
                                var E = u.components.size;
                                t.drawDebugFrame$({
                                    image: m,
                                    texId: l,
                                    drawX: $,
                                    drawY: y,
                                    usageCount: E,
                                    space: v
                                });
                            }
                            e._count++, S = {
                                texture: c,
                                x: $,
                                y: y
                            }, e._innerTextureInfos[l] = S;
                        }
                        return {
                            x: n.rect.x + (null != (s = S.x) ? s : $),
                            y: n.rect.y + (null != (o = S.y) ? o : y),
                            texture: e._texture
                        };
                    }, this.drawToAtlas$ = function(e) {
                        var t = e.atlas, n = e.image, a = e.drawX, r = e.drawY, i = e.space, s = t._texture;
                        i > 0 && (n.width <= 16 || n.height <= 16) && (s.drawTextureAt(n, a - i, r - i), s.drawTextureAt(n, a - i, r + i), s.drawTextureAt(n, a + i, r - i), s.drawTextureAt(n, a + i, r + i)), s.drawTextureAt(n, a, r);
                    }, this.drawDebugFrame$ = function(e) {
                        var n = t.getAtlasIndex$(), a = t.debugCanvases$[n];
                        if (a) {
                            var r = e.image, i = e.texId, s = e.drawX, o = e.drawY, c = e.usageCount, l = e.space, u = a.getContext("2d", {
                                willReadFrequently: !0
                            }), d = null == r ? void 0 : r.data;
                            u && d && t.isDrawableImage(d) && (t.drawDebugImageWithBleed$({
                                ctx: u,
                                image: r,
                                drawX: s,
                                drawY: o,
                                space: l
                            }), t.drawDebugOutlineAndOverlay$({
                                ctx: u,
                                image: r,
                                drawX: s,
                                drawY: o,
                                space: l,
                                usageCount: c
                            }), t.drawDebugText$({
                                ctx: u,
                                image: r,
                                drawX: s,
                                drawY: o,
                                space: l,
                                texId: i
                            }));
                        }
                    }, this.drawDebugImageWithBleed$ = function(e) {
                        var t = e.ctx, n = e.image, a = e.drawX, r = e.drawY, i = e.space, s = n.data;
                        i > 0 && (n.width <= 16 || n.height <= 16) && (t.drawImage(s, a - i, r - i), t.drawImage(s, a - i, r + i), t.drawImage(s, a + i, r - i), t.drawImage(s, a + i, r + i)), t.drawImage(s, a, r);
                    }, this.drawDebugOutlineAndOverlay$ = function(e) {
                        var t = e.ctx, n = e.image, a = e.drawX, r = e.drawY, i = e.space, s = e.usageCount, o = a, c = r, l = n.width, u = n.height;
                        i > 0 && (o -= i, c -= i, l += 2 * i, u += 2 * i);
                        var d = 240 * (1 - Math.min(s / 15, 1));
                        t.fillStyle = "hsla(".concat(d, ", 100%, 50%, 0.2)"), t.fillRect(o + .5, c + .5, l, u);
                    }, this.drawDebugText$ = function(e) {
                        var t = e.ctx, n = e.drawX, a = e.drawY, r = e.space, i = e.texId;
                        t.font = "22px Arial", t.textAlign = "left", t.textBaseline = "top";
                        var s = t.measureText(i.replace("Tex.", "")), c = n - r + 10, l = a - r + 10;
                        t.fillStyle = "rgba(0, 50, 0, 0.8)", t.fillRect(c - 4, l - 4, s.width + 8, 30), t.fillStyle = "rgba(255, 255, 255, 0.95)", t.fillText(i, c, l);
                    }, this.isSameAtlas$ = function(e, t) {
                        return !(!e || !t || e.atlasIndex !== t.atlasIndex) && e.packedInfo.fillRate === t.packedInfo.fillRate && e.packedInfo.width === t.packedInfo.width && e.packedInfo.height === t.packedInfo.height;
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenEvents$(), this.overrideDynamicAtlasManager$(), Ht && this.createPendingDebugCanvas$();
                        }
                    },
                    {
                        key: "isDrawableImage",
                        value: function value(e) {
                            return _instanceof(e, HTMLCanvasElement) || _instanceof(e, HTMLImageElement) || _instanceof(e, ImageBitmap);
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "f18351KuT9C+7suAM5eHst5", "renderResultChallenge", void 0);
            var sn = Ludex.Utils.Error, on = "./wideframes", cn = "".concat(on, "/result-challenge.png"), ln = "".concat(on, "/update-challenge.png"), un = "".concat(on, "/images/avatar-fallback.png"), dn = {
                wideframe: {
                    type: "image",
                    depth: 0,
                    size: [
                        952,
                        492
                    ],
                    position: [
                        0,
                        0
                    ]
                },
                playerPhoto: {
                    type: "image",
                    depth: -2,
                    size: [
                        160,
                        160
                    ],
                    position: [
                        50,
                        140
                    ],
                    fallbackImage: un
                },
                opponentPhoto: {
                    type: "image",
                    depth: -1,
                    size: [
                        160,
                        160
                    ],
                    position: [
                        740,
                        140
                    ],
                    fallbackImage: un
                },
                leftScore: {
                    type: "text",
                    name: "left-score",
                    depth: 3,
                    font: "normal bold 44px",
                    color: "#f2a62e",
                    textAlign: "center",
                    position: [
                        123,
                        372
                    ]
                },
                rightScore: {
                    type: "text",
                    name: "right-score",
                    depth: 3,
                    font: "normal bold 44px",
                    color: "#f2a62e",
                    textAlign: "center",
                    position: [
                        820,
                        372
                    ]
                },
                leftCrown: {
                    type: "image",
                    name: "crown",
                    depth: 3,
                    size: [
                        92,
                        63
                    ],
                    position: [
                        80,
                        80
                    ],
                    image: "".concat(on, "/images/crown-icon.png")
                },
                rightCrown: {
                    type: "image",
                    name: "crown",
                    depth: 3,
                    size: [
                        92,
                        63
                    ],
                    position: [
                        775,
                        80
                    ],
                    image: "".concat(on, "/images/crown-icon.png")
                }
            }, hn = {
                win: {
                    name: "win-image",
                    type: "image",
                    depth: 2,
                    size: [
                        277,
                        144
                    ],
                    position: [
                        337.5,
                        174
                    ],
                    image: "".concat(on, "/images/win.png")
                },
                lose: {
                    name: "lose-image",
                    type: "image",
                    depth: 2,
                    size: [
                        326,
                        145
                    ],
                    position: [
                        313,
                        173.5
                    ],
                    image: "".concat(on, "/images/lose.png")
                },
                draw: {
                    name: "draw-image",
                    type: "image",
                    depth: 2,
                    size: [
                        390,
                        144
                    ],
                    position: [
                        281,
                        174
                    ],
                    image: "".concat(on, "/images/draw.png")
                }
            }, pn = (e1 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = sn.lift({}), n = sn.pipe(mn(e), vn(e), $n(e), gn(e))(t), [
                                4,
                                sn.applyAsync(fn)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), sn.isFailure(a)) return [
                                2,
                                (console.error(sn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                sn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e1.apply(this, arguments);
            }), fn = function fn(e) {
                return codex.frameCapture.captureAsync({
                    name: "ResultChallenge",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, gn = function gn(e) {
                return function(t) {
                    var n = e.isPlayerFinished, a = e.isOpponentFinished, r = n || a;
                    return g(g({}, t), {}, {
                        wideframe: g(g({}, dn.wideframe), {}, {
                            image: r ? cn : ln,
                            name: r ? "result-challenge-with-score-box" : "result-challenge-without-score-box"
                        })
                    });
                };
            }, mn = function mn(e) {
                return function(t) {
                    return g(g({}, t), {}, {
                        playerPhoto: g(g({}, dn.playerPhoto), {}, {
                            name: e.playerId,
                            image: e.playerPhoto
                        }),
                        opponentPhoto: g(g({}, dn.opponentPhoto), {}, {
                            name: e.opponentId,
                            image: e.opponentPhoto
                        })
                    });
                };
            }, vn = function vn(e) {
                return function(t) {
                    var n = e.isPlayerFinished, a = e.isOpponentFinished, r = e.playerScore, s = e.opponentScore;
                    return n || a ? g(g({}, t), {}, {
                        leftScore: g(g({}, dn.leftScore), {}, {
                            text: n ? "".concat(void 0 === r ? 0 : r) : "???"
                        }),
                        rightScore: g(g({}, dn.rightScore), {}, {
                            text: a ? "".concat(void 0 === s ? 0 : s) : "???"
                        })
                    }) : t;
                };
            }, $n = function $n(e) {
                return function(t) {
                    var n = yn(e);
                    if ("none" === n) return t;
                    var a = hn[n];
                    if ("draw" === n) return g(g({}, t), {}, {
                        statusImage: a
                    });
                    var r = "win" === n ? dn.leftCrown : dn.rightCrown;
                    return g(g({}, t), {}, {
                        crown: r,
                        statusImage: a
                    });
                };
            }, yn = function yn(e) {
                var t = e.playerScore, n = void 0 === t ? 0 : t, a = e.opponentScore, r = void 0 === a ? 0 : a, i = e.isPlayerFinished, s = e.isOpponentFinished;
                return i && s ? n === r ? "draw" : n > r ? "win" : "lose" : "none";
            };
            M._RF.pop(), M._RF.push({}, "46949HU2K9PdYlSXXZkfABn", "renderShareLeaderboard", void 0);
            var Sn = Ludex.Utils.Error, En = "./wideframes", wn = "".concat(En, "/images/avatar-fallback.png"), bn = {
                wideframe: {
                    name: "share-leaderboard",
                    type: "image",
                    depth: 0,
                    image: "".concat(En, "/share-leaderboard.png"),
                    size: [
                        1500,
                        2e3
                    ],
                    position: [
                        0,
                        0
                    ],
                    fallbackImage: wn
                },
                avatar: {
                    type: "image",
                    depth: -2,
                    size: [
                        510,
                        510
                    ],
                    position: [
                        510,
                        278
                    ],
                    fallbackImage: wn
                },
                leaderPhoto: {
                    type: "image",
                    depth: -1,
                    size: [
                        100,
                        100
                    ],
                    fallbackImage: wn,
                    position: [
                        436,
                        0
                    ]
                },
                leaderName: {
                    type: "text",
                    depth: 1,
                    font: "600 48px",
                    position: [
                        600,
                        0
                    ]
                },
                leaderScore: {
                    type: "text",
                    depth: 1,
                    font: "600 48px",
                    position: [
                        100,
                        0
                    ]
                }
            }, Cn = (e2 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = Sn.lift({}), n = Sn.pipe(Ln(e), Tn(e), Rn)(t), [
                                4,
                                Sn.applyAsync(Dn)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), Sn.isFailure(a)) return [
                                2,
                                (console.error(Sn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                Sn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e2.apply(this, arguments);
            }), Dn = function Dn(e) {
                return codex.frameCapture.captureAsync({
                    name: "ShareLeaderboard",
                    width: 1500,
                    height: 2e3,
                    renderOptions: e
                });
            }, Rn = function Rn(e) {
                return g(g({}, e), {}, {
                    wideframe: bn.wideframe
                });
            }, Ln = function Ln(e) {
                return function(t) {
                    return g(g({}, t), {}, {
                        avatar: g(g({}, bn.avatar), {}, {
                            name: e.playerId,
                            image: e.playerPhoto
                        })
                    });
                };
            }, Tn = function Tn(e) {
                return function(t) {
                    for(var n = e.leaders, a = g({}, t), r = 0; r < n.length; r++){
                        var i = n[r], s = i.id, o = i.name, c = i.photo, l = i.score, u = 1292 + 180 * r, d = 1360 + 180 * r;
                        a["photo_".concat(s)] = g(g({}, bn.leaderPhoto), {}, {
                            position: [
                                bn.leaderPhoto.position[0],
                                u
                            ],
                            name: s,
                            image: c
                        }), a["name_".concat(s)] = g(g({}, bn.leaderName), {}, {
                            position: [
                                bn.leaderName.position[0],
                                d
                            ],
                            name: s,
                            text: o
                        }), a["score_".concat(s)] = g(g({}, bn.leaderScore), {}, {
                            position: [
                                bn.leaderScore.position[0],
                                d
                            ],
                            name: s,
                            text: "".concat(l)
                        });
                    }
                    return a;
                };
            };
            M._RF.pop(), M._RF.push({}, "c5f1cF6b7dGYLU3X1NOhOPG", "renderShareScore", void 0);
            var Fn = Ludex.Utils, xn = Fn.Error, _n = (Fn.Valid, Fn.Function), In = codex, Mn = In.frameCapture, Pn = In.language, Nn = In.monitorError, kn = "./wideframes", Bn = {
                wideframe: {
                    type: "image",
                    name: "share-score",
                    depth: 0,
                    image: "".concat(kn, "/share-score.png"),
                    size: [
                        1500,
                        2e3
                    ],
                    position: [
                        0,
                        0
                    ]
                },
                avatar: {
                    type: "image",
                    depth: -1,
                    size: [
                        500,
                        500
                    ],
                    position: [
                        500,
                        410
                    ],
                    fallbackImage: "".concat(kn, "/images/avatar-fallback.png")
                },
                playerScore: {
                    type: "text",
                    name: "player-score",
                    depth: 1,
                    font: "normal bold",
                    color: "#f2a62e",
                    textAlign: "center",
                    position: [
                        750,
                        1120
                    ]
                },
                message: {
                    type: "text",
                    name: "message",
                    depth: 2,
                    color: "#8f5543",
                    textAlign: "center",
                    position: [
                        760,
                        1560
                    ]
                }
            }, Gn = (e3 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = xn.lift({}), n = xn.pipe(Vn(e), Yn(e), qn, Hn)(t), [
                                4,
                                xn.applyAsync(zn)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), xn.isFailure(a)) return [
                                2,
                                (console.error(xn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                xn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e3.apply(this, arguments);
            }), zn = function zn(e) {
                return Mn.captureAsync({
                    name: "ShareScore",
                    width: 1500,
                    height: 2e3,
                    renderOptions: e
                });
            }, Hn = function Hn(e) {
                return g(g({}, e), {}, {
                    wideframe: Bn.wideframe
                });
            }, Vn = function Vn(e) {
                return function(t) {
                    return g(g({}, t), {}, {
                        avatar: g(g({}, Bn.avatar), {}, {
                            name: "".concat(e.playerId),
                            image: e.playerPhoto
                        })
                    });
                };
            }, Yn = function Yn(e) {
                return function(t) {
                    var n = Bn.playerScore.font, a = Qn(), r = Wn();
                    return g(g({}, t), {}, {
                        playerScore: g(g({}, Bn.playerScore), {}, {
                            text: "".concat(e.playerScore),
                            font: "".concat(n, " ").concat(r, " ").concat(a, ",")
                        })
                    });
                };
            }, qn = function qn(e) {
                var t = Qn(), n = Wn(), a = jn(), r = g(g({}, Bn.message), {}, {
                    font: "normal ".concat(n, " ").concat(t, ","),
                    text: a
                });
                return g(g({}, e), {}, {
                    message: r
                });
            }, Qn = function Qn() {
                var n = Kn(v[Pn.getCurrentLocale()]);
                return "".concat(n, "_LABEL");
            }, Wn = function Wn() {
                var e;
                return null != (e = m[Pn.getCurrentLocale()]) ? e : "104px";
            }, Kn = function Kn(e) {
                var t, n = e.split("/"), a = null != (t = n[n.length - 1]) ? t : "", r = a.lastIndexOf(".");
                return -1 === r ? a : a.substring(0, r);
            }, jn = function jn() {
                try {
                    return Pn.getText("share.canYouDoBetter");
                } catch (e) {
                    return null == Nn || Nn.sendException(_n.toError(e), {
                        locale: Pn.getCurrentLocale(),
                        message: "share.canYouDoBetter"
                    }), "share.canYouDoBetter";
                }
            };
            M._RF.pop(), M._RF.push({}, "3639a1RbypBKqHUo6gIZVdm", "renderShareScoreWithInvite", void 0);
            var Xn = Ludex.Utils.Error, Zn = codex, Jn = Zn.frameCapture, ea = Zn.language, ta = "./wideframes", ra = {
                wideframe: {
                    type: "image",
                    name: "share-score-with-invite",
                    depth: 0,
                    image: "".concat(ta, "/invite-score.png"),
                    size: [
                        952,
                        492
                    ],
                    position: [
                        0,
                        0
                    ]
                },
                avatar: {
                    type: "image",
                    depth: -1,
                    size: [
                        160,
                        160
                    ],
                    position: [
                        85,
                        140
                    ],
                    fallbackImage: "".concat(ta, "/images/avatar-fallback.png")
                },
                playerScore: {
                    type: "text",
                    name: "player-score",
                    depth: 1,
                    font: "normal bold",
                    color: "#f2a62e",
                    textAlign: "center",
                    position: [
                        165,
                        384
                    ]
                }
            }, ia = {
                en: "44px",
                ru: "40px"
            }, sa = (e4 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = Xn.lift({}), n = Xn.pipe(la(e), ua(e), ca)(t), [
                                4,
                                Xn.applyAsync(oa)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), Xn.isFailure(a)) return [
                                2,
                                (console.error(Xn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                Xn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e4.apply(this, arguments);
            }), oa = function oa(e) {
                return Jn.captureAsync({
                    name: "ShareScore",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, ca = function ca(e) {
                return g(g({}, e), {}, {
                    wideframe: ra.wideframe
                });
            }, la = function la(e) {
                return function(t) {
                    return g(g({}, t), {}, {
                        avatar: g(g({}, ra.avatar), {}, {
                            name: "".concat(e.playerId),
                            image: e.playerPhoto
                        })
                    });
                };
            }, ua = function ua(e) {
                return function(t) {
                    var n = ra.playerScore.font, a = da(), r = ha();
                    return g(g({}, t), {}, {
                        playerScore: g(g({}, ra.playerScore), {}, {
                            text: "".concat(e.playerScore),
                            font: "".concat(n, " ").concat(r, " ").concat(a, ",")
                        })
                    });
                };
            }, da = function da() {
                var n = pa(v[ea.getCurrentLocale()]);
                return "".concat(n, "_LABEL");
            }, ha = function ha() {
                var e;
                return null != (e = ia[ea.getCurrentLocale()]) ? e : "44px";
            }, pa = function pa(e) {
                var t, n = e.split("/"), a = null != (t = n[n.length - 1]) ? t : "", r = a.lastIndexOf(".");
                return -1 === r ? a : a.substring(0, r);
            };
            M._RF.pop(), M._RF.push({}, "407a0rBEoFPs6GoXuwQofW2", "renderUpdateChallenge", void 0);
            var fa = Ludex.Utils.Error, ga = "./wideframes", va = "".concat(ga, "/images/avatar-fallback.png"), $a = {
                wideframe: {
                    type: "image",
                    name: "update-challenge",
                    depth: 0,
                    image: "".concat(ga, "/update-challenge.png"),
                    size: [
                        952,
                        492
                    ],
                    position: [
                        0,
                        0
                    ]
                },
                playerPhoto: {
                    type: "image",
                    depth: -1,
                    size: [
                        160,
                        160
                    ],
                    position: [
                        50,
                        140
                    ],
                    fallbackImage: va
                },
                opponentPhoto: {
                    type: "image",
                    depth: -1,
                    size: [
                        160,
                        160
                    ],
                    position: [
                        740,
                        140
                    ],
                    fallbackImage: va
                }
            }, ya = (e5 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = fa.lift({}), n = fa.pipe(Aa(e), Ea)(t), [
                                4,
                                fa.applyAsync(Sa)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), fa.isFailure(a)) return [
                                2,
                                (console.error(fa.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                fa.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e5.apply(this, arguments);
            }), Sa = function Sa(e) {
                return codex.frameCapture.captureAsync({
                    name: "UpdateChallenge",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, Ea = function Ea(e) {
                return g(g({}, e), {}, {
                    wideframe: $a.wideframe
                });
            }, Aa = function Aa(e) {
                return function(t) {
                    return g(g({}, t), {}, {
                        playerPhoto: g(g({}, $a.playerPhoto), {}, {
                            image: e.playerPhoto,
                            name: e.playerId
                        }),
                        opponentPhoto: g(g({}, $a.opponentPhoto), {}, {
                            image: e.opponentPhoto,
                            name: e.opponentId
                        })
                    });
                };
            };
            M._RF.pop(), M._RF.push({}, "5cf47s8lohMlZGIaMKBpDK0", "FrameCapture", void 0);
            var e1, e2, e3, e4, e5, wa, ba, Ca, Da = codex.frameCapture, Ra = function() {
                var a;
                function e() {
                    r(this, e);
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            return _ts_generator(this, function(_state) {
                                return Da.setRenderer("share-score", Gn), Da.setRenderer("result-challenge", pn), Da.setRenderer("update-challenge", ya), Da.setRenderer("share-leaderboard", Cn), Da.setRenderer("share-score-with-invite", sa), [
                                    2
                                ];
                            });
                        }), function() {
                            return a.apply(this, arguments);
                        })
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "2f36c+IsKJAU5s61TqQdaJ6", "HybridFileCache", void 0);
            var La = Ludex, Ta = La.Events, Fa = La.Configs.GameEngine.HybridFileCache, xa = Fa.Enabled, _a = Fa.PreviewMode, Ia = Fa.BuildMode, Ma = La.Utils, Pa = Ma.Object, Na = Ma.Function, ka = Ma.Json, Oa = Ma.Decorator, Ua = codex, Ba = Ua.event, Ga = Ua.storage, za = Ua.getBuildVersion, Ha = U.instance, Va = Ha.downloader, Ya = Ha.pipeline, qa = Ha.fetchPipeline, Qa = /.*\/([-a-z0-9@]+)\.([^.]+)$/, Wa = (wa = Oa.throttle(1e3), Ca = e((ba = function() {
                var a;
                function e() {
                    var _$e, t = this;
                    r(this, e), this.supportTypes$ = [], this.bundledFiles$ = {}, this.originHandler$ = {}, this.nativeAssetDictionary$ = {}, this.initStorage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                Ga.addStorage("HybridFileCache", {
                                    commitId: "unknown",
                                    buildVersion: "0",
                                    cachedFiles: {},
                                    cachedBundles: {},
                                    cachedExtensions: {}
                                }, !0)
                            ];
                        });
                    }), this.checkCacheVersion$ = n(function() {
                        var _$e, n, a, r, i, s, o;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    switch(_$e = Ia.InvalidateMode, n = window.CommitId, a = za().toString(), r = Ga.getStorageData("HybridFileCache", "commitId"), i = Ga.getStorageData("HybridFileCache", "buildVersion"), Ga.setStorageData("HybridFileCache", "commitId", n), Ga.setStorageData("HybridFileCache", "buildVersion", a), s = r !== n, o = i !== a, _$e){
                                        case "version":
                                            return [
                                                3,
                                                1
                                            ];
                                        case "commitId":
                                            return [
                                                3,
                                                4
                                            ];
                                    }
                                    return [
                                        3,
                                        7
                                    ];
                                case 1:
                                    if (!o) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        t.clearCache$()
                                    ];
                                case 2:
                                    _state.sent(), _state.label = 3;
                                case 3:
                                    return [
                                        3,
                                        10
                                    ];
                                case 4:
                                    if (!s) return [
                                        3,
                                        6
                                    ];
                                    return [
                                        4,
                                        t.clearCache$()
                                    ];
                                case 5:
                                    _state.sent(), _state.label = 6;
                                case 6:
                                    return [
                                        3,
                                        10
                                    ];
                                case 7:
                                    if (!(o || s)) return [
                                        3,
                                        9
                                    ];
                                    return [
                                        4,
                                        t.clearCache$()
                                    ];
                                case 8:
                                    _state.sent(), _state.label = 9;
                                case 9:
                                    _state.label = 10;
                                case 10:
                                    return t.requestUpdateStorage(), [
                                        2
                                    ];
                            }
                        });
                    }), this.initSupportedTypes$ = function() {
                        t.supportTypes$ = Ia.SupportedExtensions;
                    }, this.setupBundledFiles$ = n(function() {
                        var _$e, n, a, r;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_state.trys.push([
                                        0,
                                        ,
                                        3,
                                        4
                                    ]), !$ || !Ia.Enabled) return [
                                        2
                                    ];
                                    n = [], a = u(t.supportTypes$);
                                    try {
                                        for(a.s(); !(_$e = a.n()).done;)r = _$e.value, t.getCachedBundles$(r) || n.push(t.downloadBundledFile$(r));
                                    } catch (e) {
                                        a.e(e);
                                    } finally{
                                        a.f();
                                    }
                                    if (!(n.length > 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        Na.allSettled(n)
                                    ];
                                case 1:
                                    _state.sent(), _state.label = 2;
                                case 2:
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return Ba.emit(Ta.BUNDLE_READY), [
                                        7
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.downloadBundledFile$ = (_$e = n(function(e) {
                        var n, a, i;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return _state.trys.push([
                                        0,
                                        3,
                                        ,
                                        4
                                    ]), n = e.replace(".", ""), a = "./cache/bundle".concat(n.toUpperCase(), ".").concat(n), "bundle" === e && (a = "./cache/bundleBUNDLE.json"), [
                                        4,
                                        fetch(a, {
                                            method: "GET",
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        })
                                    ];
                                case 1:
                                    return [
                                        4,
                                        _state.sent().json()
                                    ];
                                case 2:
                                    return i = _state.sent(), t.setBundledCache$(e, i), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return console.error("Hybrid File Cache: Downloaded bundled file", {
                                        type: e,
                                        error: _state.sent()
                                    }), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    }), this.injectOptimalFetchPipeline$ = function() {
                        if (_a.Enabled || Ia.Enabled) {
                            var _$e = qa.pipes[2];
                            _$e && (qa.remove(2), qa.insert(function(t, n) {
                                try {
                                    _$e(t, n);
                                } catch (e) {
                                    console.error("Hybrid File Cache: optimized fetch pipeline", {
                                        error: e
                                    });
                                }
                            }, 2));
                        }
                    }, this.injectOptimalLoadPipeline$ = function() {
                        if (_a.Enabled || Ia.Enabled) {
                            var _$e = Ya.pipes[2];
                            _$e && (Ya.remove(2), Ya.insert(function(t, n) {
                                try {
                                    _$e(t, n);
                                } catch (e) {
                                    console.warn("Hybrid File Cache: optimized load pipeline", {
                                        error: e
                                    }), n(e);
                                }
                            }, 2));
                        }
                    }, this.injectCacheExtensionPipeline$ = function() {
                        if (_a.Enabled && _a.CacheUuidExtension) {
                            var _$e = {}, n = function n(n, a) {
                                n.output = n.input;
                                for(var r = 0; r < n.input.length; r++){
                                    var i = n.input[r];
                                    if (i.id) {
                                        var s = t.getCacheExtension$(i.id);
                                        s ? (i.url = i.url.replace(i.ext, s), i.ext = s, _$e[i.id] = !0) : _$e[i.id] = !1;
                                    }
                                }
                                a(null, null);
                            }, a = function a(n) {
                                return function(a, r) {
                                    for(var i = f(a.input), s = 0; s < i.length; s++){
                                        var o = i[s];
                                        if (o.id) {
                                            var c, l = _$e[o.id];
                                            Pa.hasOwn(t.nativeAssetDictionary$, o.id) || (t.nativeAssetDictionary$[o.id] = null != (c = o.isNative) && c), l && (o.isNative = !0);
                                        }
                                    }
                                    a.input.length, n(a, r);
                                };
                            }, r = function r(n, a) {
                                n.output = n.input;
                                for(var r = 0; r < n.output.length; r++){
                                    var i, s = n.output[r];
                                    if (s.id) {
                                        var o = null != (i = t.nativeAssetDictionary$[s.id]) && i;
                                        s.isNative = o, _$e[s.id] || t.setCacheExtension$(s.id, s.ext);
                                    }
                                }
                                a(null, null);
                            };
                            Ya.insert(n, 1), qa.insert(n, 1), Ya.insert(r, 3), qa.insert(r, 3);
                            var i = f(Ya.pipes), s = f(qa.pipes), o = i[2];
                            o && (Ya.pipes[2] = a(o));
                            var c = s[2];
                            c && (qa.pipes[2] = a(c)), console.debug("Hybrid File Cache: inject cache extension pipelines", i, s, f(Ya.pipes), f(qa.pipes));
                        }
                    }, this.saveOriginDownloaders$ = function() {
                        var _$e, n = u(t.supportTypes$);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value, r = Va.handlers[a];
                                r && (t.originHandler$[a] = r);
                            }
                        } catch (e) {
                            n.e(e);
                        } finally{
                            n.f();
                        }
                    }, this.registerCustomDownloader$ = function() {
                        var _$e, n = u(t.supportTypes$);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value;
                                "bundle" !== a && Va.register(a, t.downloadFile$(a));
                            }
                        } catch (e) {
                            n.e(e);
                        } finally{
                            n.f();
                        }
                    }, this.listenEvents$ = function() {
                        Ba.on(Ta.SCENE_LOADED, t.requestUpdateStorage), P.on(i.CLEAR_HYBRID_FILE_CACHE, t.clearCache$);
                    }, this.getDownloadHandler$ = function(e) {
                        var n;
                        return null != (n = t.originHandler$[e]) ? n : null;
                    }, this.downloadFile$ = function(e) {
                        return function(n, a, r) {
                            var i = t.getCache$(e, n);
                            if (i) return r(null, i);
                            var s = t.getDownloadHandler$(e);
                            if (!s) return r(Error("Downloader not found"), null);
                            s(n, a, function(a, i) {
                                return a || t.setCache$(e, n, i), r(a, i);
                            });
                        };
                    }, this.getCacheKey$ = function(e, t) {
                        var n = t.match(Qa);
                        if (!n) return null;
                        var a = y(n, 3), r = (a[0], a[1]), i = a[2];
                        return !i || 0 > e.indexOf(i) ? null : "".concat(r, ":").concat(e);
                    }, this.validateDataType$ = function(e) {
                        return Array.isArray(e) && Pa.hasOwn(e[0], "__type__"), !0;
                    }, this.setCache$ = function(e, n, a) {
                        var r = t.getCacheKey$(e, n);
                        if (r && t.validateDataType$(a)) {
                            var i = ka.clone(a);
                            Ga.setStorageData("HybridFileCache", "cachedFiles", S({}, r, null != i ? i : {})), t.requestUpdateStorage();
                        }
                    }, this.getCache$ = function(e, n) {
                        var a = t.getCacheKey$(e, n);
                        if (!a) return null;
                        var r = t.getFileCaches$()[a];
                        return r || (r = t.getBundledCache$(e, a)), r ? ka.clone(r) : null;
                    }, this.getFileCaches$ = function() {
                        var _$e;
                        return null != (_$e = Ga.getStorageData("HybridFileCache", "cachedFiles")) ? _$e : {};
                    }, this.getCachedBundles$ = function(e) {
                        var n = Ga.getStorageData("HybridFileCache", "cachedBundles");
                        if (!n) return null;
                        var a = n[e];
                        return a ? (t.bundledFiles$[e] = a, a) : null;
                    }, this.getBundledCache$ = function(e, n) {
                        var a, r = t.bundledFiles$[e];
                        return r && null != (a = r[n.replace(":".concat(e), "")]) ? a : null;
                    }, this.setBundledCache$ = function(e, n) {
                        t.bundledFiles$[e] = n, Ga.setStorageData("HybridFileCache", "cachedBundles", S({}, e, n)), t.requestUpdateStorage();
                    }, this.getCacheExtension$ = function(e) {
                        return t.getCachedExtensions$()[e];
                    }, this.setCacheExtension$ = function(e, n) {
                        Ga.setStorageData("HybridFileCache", "cachedExtensions", S({}, e, n)), t.requestUpdateStorage();
                    }, this.getCachedExtensions$ = function() {
                        var _$e;
                        return null != (_$e = Ga.getStorageData("HybridFileCache", "cachedExtensions")) ? _$e : {};
                    }, o(this, "requestUpdateStorage", Ca, this), this.clearCache$ = function() {
                        Ga.initStorageData("HybridFileCache", "cachedFiles", {}), Ga.initStorageData("HybridFileCache", "cachedBundles", {}), Ga.updateToWebStorage("HybridFileCache", !0);
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (!xa) return [
                                            3,
                                            3
                                        ];
                                        return [
                                            4,
                                            this.initStorage$()
                                        ];
                                    case 1:
                                        return _state.sent(), [
                                            4,
                                            this.checkCacheVersion$()
                                        ];
                                    case 2:
                                        _state.sent(), this.initSupportedTypes$(), this.injectOptimalLoadPipeline$(), this.injectOptimalFetchPipeline$(), this.injectCacheExtensionPipeline$(), this.saveOriginDownloaders$(), this.registerCustomDownloader$(), this.setupBundledFiles$(), this.listenEvents$(), console.debug("Hybrid File Cache: Initialized", {
                                            supportTypes: this.supportTypes$
                                        }), _state.label = 3;
                                    case 3:
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), function() {
                            return a.apply(this, arguments);
                        })
                    }
                ]), e;
            }()).prototype, "requestUpdateStorage", [
                wa
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    return function() {
                        Ga.updateToWebStorage("HybridFileCache", !1);
                    };
                }
            }), ba);
            M._RF.pop(), M._RF.push({}, "14b76Yew19JgY7K+L9F5mmu", "Languages", void 0);
            var Ka = Ludex, ja = Ka.Events, Xa = Ka.Utils.Array, Za = codex, Ja = Za.player, er = Za.event, tr = Za.language, nr = Za.monitorError, ar = function() {
                var a;
                function e() {
                    var _$e, _$e1, _$e2, _$e3, t = this;
                    r(this, e), this.initDefaultLanguage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return tr.add("en", ge, !0), t.setLanguage$("en"), [
                                2
                            ];
                        });
                    }), this.initPlayerLanguage$ = n(function() {
                        var _$e, _$n, a, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(_$e = tr.getPlayerLanguage()) || !t.isSupportedLocale$(_$e)) return [
                                        2,
                                        (console.warn("Language ".concat(_$e, " not supported. Overriding with default language")), void t.setLanguage$("en", !0))
                                    ];
                                    _state.label = 1;
                                case 1:
                                    return _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        t.addLanguage$(_$e)
                                    ];
                                case 2:
                                    return _state.sent(), a = null != (_$n = Ja.getPlayerDataByKey("isFirstLogin")) && _$n, t.setLanguage$(_$e, a), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return n = _state.sent(), console.warn("Failed to add language ".concat(_$e), n), t.setLanguage$("en", !0), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.isSupportedLocale$ = function(e) {
                        return Xa.has(E, e);
                    }, this.listenEvent$ = function() {
                        er.on(ja.REQUEST_LANGUAGE, t.handleLanguageRequested$), P.on(i.PRELOAD_LANGUAGE, t.handlePreloadLanguage$), P.on(i.CHOOSE_LANGUAGE, t.handleChooseLanguage$);
                    }, this.addLanguage$ = (_$e = n(function(e) {
                        var n, a, _arguments = arguments;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return n = _arguments.length > 1 && void 0 !== _arguments[1] && _arguments[1], [
                                        4,
                                        t.getLangData$(e)
                                    ];
                                case 1:
                                    return a = _state.sent(), tr.add(e, a, n), [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    }), this.setLanguage$ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        tr.choose(e), t && Ja.setSetting("language", e);
                    }, this.handlePreloadLanguage$ = (_$e1 = n(function(e) {
                        var n, a, r, e1, i;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (n = e.locale, a = e.onLoad, r = e.onError, !t.isSupportedLocale$(n)) return [
                                        2,
                                        (console.warn("Preload language ".concat(n, " not found")), void (null == r || r(Error("Language ".concat(n, " not found")))))
                                    ];
                                    _state.label = 1;
                                case 1:
                                    return _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        t.addLanguage$(n)
                                    ];
                                case 2:
                                    return _state.sent(), null == a || a(n), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return e1 = _state.sent(), console.error(i = t.toError$(e1, "handleLanguageRequested")), null == nr || nr.sendException(i), null == r || r(e1), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e1.apply(this, arguments);
                    }), this.handleChooseLanguage$ = function(e) {
                        var n = e.locale, a = e.saveToPlayerData;
                        if (t.isSupportedLocale$(n)) try {
                            t.setLanguage$(n, void 0 !== a && a);
                        } catch (e) {
                            var i = t.toError$(e, "handleLanguageRequested");
                            console.error(i), null == nr || nr.sendException(i);
                        }
                        else console.warn("Choose language ".concat(n, " not found"));
                    }, this.getLangData$ = (_$e2 = n(function(e) {
                        var t, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if ("en" === e) return [
                                        2,
                                        ge
                                    ];
                                    return t = w[e], [
                                        4,
                                        A.loadJsonAsync(t)
                                    ];
                                case 1:
                                    if (null === (n = _state.sent())) throw Error("Language ".concat(e, " not found"));
                                    if (null === n.json) throw Error("Language ".concat(e, " is empty"));
                                    return [
                                        2,
                                        n.json
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e2.apply(this, arguments);
                    }), this.handleLanguageRequested$ = (_$e3 = n(function(e) {
                        var n, a, r, i, s, e1, o;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (n = e.locale, r = void 0 !== (a = e.saveToPlayerData) && a, i = e.onLoad, s = e.onError, !t.isSupportedLocale$(n)) return [
                                        2,
                                        (console.warn("Request language ".concat(n, " not found")), void (null == s || s(Error("Language ".concat(n, " not found")))))
                                    ];
                                    _state.label = 1;
                                case 1:
                                    return _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        t.addLanguage$(n)
                                    ];
                                case 2:
                                    return _state.sent(), null == i || i(n), t.setLanguage$(n, r), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return e1 = _state.sent(), console.error(o = t.toError$(e1, "handleLanguageRequested")), null == nr || nr.sendException(o), null == s || s(o), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e3.apply(this, arguments);
                    }), this.toError$ = function(e, t) {
                        return _instanceof(e, Error) ? e : "string" == typeof e ? Error("LanguagePlugin: ".concat(e)) : Error("LanguagePlugin: Unknown error in module: <".concat(t, ">"));
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            var t, _$e;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return _state.trys.push([
                                            0,
                                            3,
                                            ,
                                            4
                                        ]), [
                                            4,
                                            this.initDefaultLanguage$()
                                        ];
                                    case 1:
                                        return _state.sent(), this.listenEvent$(), [
                                            4,
                                            this.initPlayerLanguage$()
                                        ];
                                    case 2:
                                        return _state.sent(), [
                                            3,
                                            4
                                        ];
                                    case 3:
                                        return t = _state.sent(), console.error(_$e = this.toError$(t, "handleLanguageRequested")), null == nr || nr.sendException(_$e), [
                                            3,
                                            4
                                        ];
                                    case 4:
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), function() {
                            return a.apply(this, arguments);
                        })
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "fb33bK/6Y5FAas5AwmmBM/X", "Leaderboards", void 0);
            var rr = Ludex, ir = rr.Configs, sr = ir.Mockup, or = sr.Leaderboards, cr = sr.GameSDK.Player, lr = ir.Leaderboards, ur = rr.Utils.Number, dr = codex.leaderboard, hr = function() {
                function e() {
                    var t = this;
                    r(this, e), this.handleWhenGameSDKStarted$ = function() {
                        or.Enabled ? t.setupLeaderboardsMockup$() : t.setupLeaderboards$();
                    }, this.setupLeaderboards$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return t.setupLeaderboardByConfigs$(), [
                                2
                            ];
                        });
                    }), this.setupLeaderboardByConfigs$ = function() {
                        var _$e, t = lr.LeaderboardList, n = u(t);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value, r = a.Id, i = a.Name;
                                dr.addLeaderboard({
                                    name: i,
                                    type: "global",
                                    autoSortRank: !0,
                                    leaderboardId: r
                                });
                            }
                        } catch (e) {
                            n.e(e);
                        } finally{
                            n.f();
                        }
                    }, this.setupLeaderboardsMockup$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return t.setupMockGlobalLeaderboards$(), t.setupMockFriendsLeaderboard$(), t.setupMockGlobalTournamentLeaderboard$(), [
                                2
                            ];
                        });
                    }), this.setupMockGlobalLeaderboards$ = n(function() {
                        var _$e, t, n, a, r, i, s, o, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    t = or.NumOfLeaders, n = lr.LeaderboardList, a = u(n), _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        7,
                                        8
                                    ]), a.s(), _state.label = 2;
                                case 2:
                                    if ((_$e = a.n()).done) return [
                                        3,
                                        5
                                    ];
                                    if (i = (r = _$e.value).Name, s = r.Id, !i) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        dr.createLeaderboardAsync({
                                            _id: s,
                                            name: i,
                                            numberOfLeaders: ur.random(t.Max - t.Min) + t.Min
                                        })
                                    ];
                                case 3:
                                    o = _state.sent(), dr.addLeaderboard({
                                        name: i,
                                        type: "global",
                                        autoSortRank: !0,
                                        leaderboardId: o
                                    }), _state.label = 4;
                                case 4:
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    return e = _state.sent(), a.e(e), [
                                        3,
                                        8
                                    ];
                                case 7:
                                    return a.f(), [
                                        7
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), this.setupMockFriendsLeaderboard$ = n(function() {
                        var _$e, t, n, a;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return _$e = "Mock Friends Leaderboard", t = 0, (n = cr.ConnectedPlayers).Enabled && (t = ur.random(n.NumOfPlayers - 1) + 1), [
                                        4,
                                        dr.createLeaderboardAsync({
                                            _id: "friends-leaderboard-id",
                                            name: _$e,
                                            numberOfLeaders: t
                                        })
                                    ];
                                case 1:
                                    return a = _state.sent(), dr.addLeaderboard({
                                        name: _$e,
                                        type: "friends",
                                        autoSortRank: !0,
                                        leaderboardId: a
                                    }), [
                                        2
                                    ];
                            }
                        });
                    }), this.setupMockGlobalTournamentLeaderboard$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        b.requestTournamentDataAsync()
                                    ];
                                case 1:
                                    return _state.sent().forEach(function(e) {
                                        var t = e.payload.leaderboardId;
                                        t && (dr.isExistLeaderboardId(t) || dr.addLeaderboard({
                                            type: "tournament",
                                            name: t,
                                            autoSortRank: !0,
                                            leaderboardId: t
                                        }));
                                    }), [
                                        2
                                    ];
                            }
                        });
                    });
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.handleWhenGameSDKStarted$();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "e7bf73g4jJGuI9FqvW5YBsS", "PerformanceMonitor", void 0);
            var pr = Ludex, fr = pr.Utils.Mark, gr = pr.Events, mr = pr.Configs.PerformanceMonitor.FpsTracking, vr = codex.event, $r = function() {
                function e() {
                    var t = this;
                    r(this, e), this.markName$ = "FPS Tracking", this.listenEvents$ = function() {
                        vr.catchUp(gr.GAME_READY, t.handleStartTraceFps$);
                    }, this.unListenEvents$ = function() {
                        Y.off(j.EVENT_AFTER_UPDATE, t.handleLateUpdate$);
                    }, this.handleStartTraceFps$ = function() {
                        t.startTraceFps$(), Y.on(j.EVENT_AFTER_UPDATE, t.handleLateUpdate$);
                    }, this.startTraceFps$ = function() {
                        t.mark && (t.mark.measure(t.markName$), t.mark.start(t.markName$));
                    }, this.handleLateUpdate$ = function() {
                        if (t.mark) {
                            if (t.fpsTraceDuration$ -= P.deltaTime, t.fpsTraceDuration$ <= 0 && !t.traceStopped$) return t.traceStopped$ = !0, t.unListenEvents$(), t.updateFPS$(), void t.mark.stop(t.markName$);
                            t.fpsTraceIntervalTimer$ -= P.deltaTime, t.fpsTraceIntervalTimer$ > 0 || (t.fpsTraceIntervalTimer$ = t.fpsTraceInterval$, t.updateFPS$(), t.mark.stop(t.markName$), t.startTraceFps$());
                        }
                    }, this.updateFPS$ = function() {
                        var _$e, n;
                        if (t.mark) {
                            var a = t.getFPS$(), r = t.getDrawCalls$(), i = t.getDeviceRender$(), s = t.getTextureMemory$();
                            t.minFps$ = Math.min(null != (_$e = t.minFps$) ? _$e : a, a), t.maxFps$ = Math.max(null != (n = t.maxFps$) ? n : 0, a), t.mark.putMetric(t.markName$, "FPS Metric", a), t.mark.putAttr(t.markName$, "Page Title", document.title), t.mark.putAttr(t.markName$, "Device Render", i), t.mark.putAttr(t.markName$, "Draw Calls", r.toString()), t.mark.putAttr(t.markName$, "Texture Memory", s.toFixed(2)), t.mark.putAttr(t.markName$, "Min FPS", t.minFps$.toString()), t.mark.putAttr(t.markName$, "Max FPS", t.maxFps$.toString()), console.debug("FPS: ".concat(a, " Min: ").concat(t.minFps$, " Max: ").concat(t.maxFps$, ", draw calls: ").concat(r, ", texture memory: ").concat(s.toFixed(2), "MB"));
                        }
                    }, this.getFPS$ = function() {
                        return Y.root && Math.floor(Y.root.fps) || 0;
                    }, this.getDrawCalls$ = function() {
                        return Y.root && Y.root.device.numDrawCalls || 0;
                    }, this.getDeviceRender$ = function() {
                        return Y.root && Y.root.device.renderer || "Unknown";
                    }, this.getTextureMemory$ = function() {
                        return Y.root && Y.root.device.memoryStatus.textureSize / 1048576 || 0;
                    };
                }
                return t(e, [
                    {
                        key: "mark",
                        get: function get() {
                            return mr.Enabled ? fr : null;
                        }
                    },
                    {
                        key: "init",
                        value: function value() {
                            var _$e = mr.TrackingDuration, t = mr.TrackingInterval;
                            this.mark && (this.fpsTraceDuration$ = null != _$e ? _$e : 60, this.fpsTraceInterval$ = null != t ? t : 10, this.fpsTraceIntervalTimer$ = this.fpsTraceInterval$, this.traceStopped$ = !1, this.listenEvents$());
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "58248LBip1DBrMjK0UWw2rM", "RemoteConfig", void 0);
            var yr = Ludex.Events, Sr = codex.event, Er = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Sr.on(yr.REQUEST_HOT_RELOAD, t.handleHotReload$), Sr.on(yr.REQUEST_UPDATE_CONFIG, t.handleUpdateConfig$);
                    }, this.handleHotReload$ = function() {
                        P.restart();
                    }, this.handleUpdateConfig$ = function(e) {
                        if ("Gameplay" === e.type) {
                            P.emit(i.GAMEPLAY_UPDATE_CONFIG, e.config);
                            var t = e.id, n = e.type;
                            Sr.emit(yr.REMOTE_CONFIG_UPDATED, {
                                id: t,
                                type: n
                            });
                        }
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenEvents$();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "c34a93D1BREiKms1T21AkQS", "PluginsManager", void 0);
            var Ar = Ludex.Configs, wr = Ar.Languages, br = Ar.Leaderboards, Cr = Ar.RemoteConfig, Dr = Ar.FrameCapture, Rr = Ar.DailyRewards, Lr = Ar.AdaptivePerformance, Tr = Ar.Debugger, Fr = Tr.CanvasRecorder, xr = Tr.Profiler, _r = Ar.GameEngine, Ir = _r.HybridFileCache, Mr = _r.DynamicAssets, Pr = _r.DynamicAtlas, Nr = function() {
                function e() {
                    r(this, e), this.initHybridFileCache$ = function() {
                        Ir.Enabled && (new Wa).init();
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.initHybridFileCache$(), console.debug("Plugins Manager: Initialized");
                        }
                    },
                    {
                        key: "initLanguages",
                        value: function value() {
                            wr.Enabled && (new ar).init();
                        }
                    },
                    {
                        key: "initLeaderboards",
                        value: function value() {
                            br.Enabled && (new hr).init();
                        }
                    },
                    {
                        key: "initRemoteConfig",
                        value: function value() {
                            Cr.Enabled && (new Er).init();
                        }
                    },
                    {
                        key: "initDynamicAtlas",
                        value: function value() {
                            Pr.OptimizeAtlas.Enabled && H.instance.enabled && (new rn).init();
                        }
                    },
                    {
                        key: "initDynamicAssets",
                        value: function value() {
                            Mr.Enabled && (new Ut).init();
                        }
                    },
                    {
                        key: "initCanvasRecorder",
                        value: function value() {
                            Fr.Enabled && (new ft).init();
                        }
                    },
                    {
                        key: "initPerformanceMonitor",
                        value: function value() {
                            xr.Enabled && (new $r).init();
                        }
                    },
                    {
                        key: "initAdaptivePerformance",
                        value: function value() {
                            Lr.Enabled && (new ht).init();
                        }
                    },
                    {
                        key: "initFrameCapture",
                        value: function value() {
                            Dr.Enabled && (new Ra).init();
                        }
                    },
                    {
                        key: "initDailyRewards",
                        value: function value() {
                            Rr.Enabled && (new yt).init();
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "ac8b03T+rFB061sXoEEsCUH", "SceneManager", void 0);
            var kr = codex, Or = kr.event, Ur = kr.monitorError, Br = Ludex, Gr = Br.Events, zr = Br.Configs.PerformanceMonitor, Hr = Br.Utils, Vr = Hr.Mark, Yr = Hr.Function, qr = GameSDK, Qr = function() {
                function e() {
                    var _$e, _$e1, _$e2, t = this;
                    r(this, e), this.markName$ = "Load Scene", this.testScene$ = {}, this.isClearedMark$ = !1, this.callbackSwitchScene$ = null, this.mutex$ = Yr.mutex(), this.listenEvents$ = function() {
                        Or.catchUp(Gr.MARK_IS_TEST_SCENE, t.setTestScene$), Or.on(Gr.SWITCH_SCENE, t.switchScene$), Or.on(Gr.PRELOAD_SCENE, t.preloadScene$);
                    }, this.correctSceneName$ = function(e) {
                        var n = Y.getScene(), a = t.getTestScene$();
                        return a ? a === (null == n ? void 0 : n.name) ? null : a : null != n && n.isValid ? e === C.DASHBOARD_SCENE ? C.GAME_SCENE : e === n.name ? null : e : e;
                    }, this.switchScene$ = (_$e = n(function(e) {
                        var n, a, r;
                        return _ts_generator(this, function(_state) {
                            return n = e.sceneName, a = e.sceneData, console.debug("Switching", r = t.correctSceneName$(n), null != a ? a : {}), r && (L.isSceneLoaded(r) || D.showLoadingFullScreen(r), t.startScene$(g(g({}, e), {}, {
                                sceneName: r
                            }))), [
                                2
                            ];
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    }), this.startScene$ = (_$e1 = n(function(e) {
                        var n, a, r, i, s, e1;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return n = e.sceneName, a = e.sceneData, [
                                        4,
                                        t.mutex$.use(n)
                                    ];
                                case 1:
                                    r = _state.sent(), _state.label = 2;
                                case 2:
                                    return _state.trys.push([
                                        2,
                                        5,
                                        6,
                                        7
                                    ]), t.startMeasure$("start", e), [
                                        4,
                                        t.loadSceneAsync$(n, t.onSceneProgress$)
                                    ];
                                case 3:
                                    return i = _state.sent(), [
                                        4,
                                        t.runSceneAsync$(i)
                                    ];
                                case 4:
                                    return s = _state.sent(), t.setSceneData$(s, null != a ? a : {}), L.markIsSceneLoaded(n), Or.emit(Gr.SCENE_LOADED, {
                                        sceneName: n
                                    }), t.clearTestMark$(), t.stopMeasure$(), t.handleSceneLaunched$(n, a), [
                                        3,
                                        7
                                    ];
                                case 5:
                                    return e1 = _state.sent(), console.warn("SceneManager.startScene", Yr.toError(e1)), t.stopMeasure$(!1), [
                                        3,
                                        7
                                    ];
                                case 6:
                                    return r.release(), [
                                        7
                                    ];
                                case 7:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e1.apply(this, arguments);
                    }), this.preloadScene$ = (_$e2 = n(function(e) {
                        var n, a, e1;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if ((n = e.sceneName) === C.DASHBOARD_SCENE) return [
                                        3,
                                        5
                                    ];
                                    return [
                                        4,
                                        t.mutex$.use(n)
                                    ];
                                case 1:
                                    a = _state.sent(), _state.label = 2;
                                case 2:
                                    return _state.trys.push([
                                        2,
                                        4,
                                        ,
                                        5
                                    ]), t.startMeasure$("preload", e), [
                                        4,
                                        t.loadSceneAsync$(n, t.onSceneProgress$)
                                    ];
                                case 3:
                                    return _state.sent(), L.markIsSceneLoaded(n), Or.emit(Gr.SCENE_LOADED, {
                                        sceneName: n,
                                        isPreload: !0
                                    }), t.stopMeasure$(), a.release(), [
                                        3,
                                        5
                                    ];
                                case 4:
                                    return e1 = _state.sent(), console.warn("SceneManager.preloadScene", Yr.toError(e1)), t.stopMeasure$(!1), a.release(), [
                                        3,
                                        5
                                    ];
                                case 5:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e2.apply(this, arguments);
                    }), this.loadSceneAsync$ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return new Promise(function(n, a) {
                            var r = te.main;
                            r ? r.loadScene(e, null != t ? t : null, function(e, t) {
                                e ? a(e) : n(t);
                            }) : a(Error("Main bundle not found"));
                        });
                    }, this.runSceneAsync$ = function(e) {
                        return new Promise(function(t, n) {
                            Y.runScene(e, void 0, function(e, a) {
                                if (e) return n(e);
                                if (!a) throw Error("Scene not found");
                                t(a);
                            });
                        });
                    }, this.startMeasure$ = function(e, n) {
                        if (t.mark) {
                            var a = n.sceneName;
                            console.groupCollapsed("📦 ".concat(a, ": ").concat(e, " progress")), t.mark.measure(t.markName$), t.mark.putAttr(t.markName$, "Cancel", "false"), t.mark.putAttr(t.markName$, "Success", "false"), t.mark.putMetric(t.markName$, a), t.mark.start(t.markName$);
                        }
                    }, this.stopMeasure$ = function() {
                        var _$e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        t.mark && (t.mark.rmAttr(t.markName$, "File"), t.mark.putAttr(t.markName$, "Success", _$e ? "true" : "false"), t.mark.stop(t.markName$), console.groupEnd());
                    }, this.onSceneProgress$ = function(e, n, a) {
                        t.mark && t.mark.putAttr(t.markName$, "Last File", "".concat(a.id, " (").concat(a.ext, ")"));
                        var i = Math.floor(e / n * 70 + 30);
                        qr.setLoadingProgress(i);
                    }, this.clearTestMark$ = function() {
                        t.isClearedMark$ || (Or.clear(Gr.MARK_IS_TEST_SCENE), t.isClearedMark$ = !0);
                    }, this.handleSceneLaunched$ = function(e, n) {
                        var a;
                        D.hideLoadingFullScreen(e), R.switchSceneTracking(), null == Ur || Ur.addMetadata({
                            currentScene: e
                        }), null == (a = t.callbackSwitchScene$) || a.call(t, {
                            sceneName: e,
                            sceneData: n
                        }), Or.emit(Gr.SCENE_LAUNCHED, {
                            sceneName: e
                        }), Y.once(j.EVENT_AFTER_RENDER, function() {
                            Or.emit(Gr.SCENE_RENDERED, {
                                sceneName: e
                            });
                        });
                    }, this.getTestScene$ = function() {
                        var _$e;
                        return null != (_$e = Object.keys(t.testScene$)[0]) ? _$e : null;
                    }, this.setTestScene$ = function(e) {
                        var n = e.sceneName;
                        console.warn("SceneManager.setTestScene", n), t.testScene$[n] = !0;
                    }, this.onSwitchScene = function(e) {
                        t.callbackSwitchScene$ = e;
                    }, this.setSceneData$ = function(e, t) {
                        if (t && ("data" in e || e.scene.attr({
                            data: {}
                        }), "data" in e)) {
                            var n = e.data || {};
                            e.scene.attr({
                                data: g(g({}, n), t)
                            }), console.debug("SceneManager.setSceneData", {
                                sceneName: e.name,
                                sceneData: t,
                                currentData: n
                            });
                        }
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenEvents$(), console.debug("Scene Manager: Initialized");
                        }
                    },
                    {
                        key: "mark",
                        get: function get() {
                            return zr.LoadResources ? Vr : null;
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "617b2SRAL5CyL75C998xBnx", "ScreenManager", void 0);
            var Wr = Ludex, Kr = Wr.Events, jr = Wr.Utils, Xr = jr.Object, Zr = jr.Valid, Jr = jr.Time, ei = codex, ti = ei.event, ni = ei.monitorError, ai = function() {
                function e() {
                    var _$e, _$e1, _$e2, _$e3, _$e4, t = this;
                    r(this, e), this.screens$ = {}, this.onPrefabReadyCallbacks$ = {}, this.bindEventHandlers$ = function() {
                        ti.on(Kr.OPEN_SCREEN, t.handleOpenScreen$), ti.on(Kr.CLOSE_SCREEN, t.handleCloseScreen$), ti.on(Kr.PRELOAD_SCREEN, t.handlePreloadScreen$), ti.on(Kr.PRELOAD_SCREENS, t.handlePreloadScreens$), ti.on(Kr.SWITCH_SCENE, t.handleSwitchScene$), P.on("DEBUG_REQUEST_SCREEN_STATES", t.handleRequestScreenStates$);
                    }, this.handleRequestScreenStates$ = function() {
                        var _$e = t.screens$;
                        P.emit("DEBUG_SCREEN_STATES", _$e);
                    }, this.handleOpenScreen$ = function(e) {
                        t.openScreen(e.screenName, e.screenData);
                    }, this.handleCloseScreen$ = function(e) {
                        t.closeScreen(e.screenName, !0);
                    }, this.handlePreloadScreen$ = function(e) {
                        var n = e.screenName;
                        t.addScreenQueues$([
                            n
                        ]);
                        var a = t.screens$[n];
                        "queued" === (null == a ? void 0 : a.state) && t.loadScreen$(a);
                    }, this.handlePreloadScreens$ = function() {
                        var _$e = Y.getScene();
                        t.validateScene$(_$e) && (t.initScreens$(_$e), t.preloadScreens$());
                    }, this.handleSwitchScene$ = function() {
                        t.resetAllScreenParents$(), t.onPrefabReadyCallbacks$ = {};
                    }, this.resetAllScreenParents$ = function() {
                        for(var _$e in t.screens$){
                            var n = t.screens$[_$e];
                            void 0 !== n && (t.screens$[_$e] = t.resetScreenEntry$(n));
                        }
                    }, this.resetScreenEntry$ = function(e) {
                        return t.hasScreenInstance$(e) ? (e.screen.node.removeFromParent(), e.screen.node.destroy(), {
                            state: "prefab",
                            order: e.order,
                            name: e.name,
                            prefab: e.prefab,
                            useCount: e.useCount
                        }) : t.hasPrefab$(e) ? g({}, e) : {
                            state: "queued",
                            order: e.order,
                            name: e.name
                        };
                    }, this.validateScene$ = function(e) {
                        return !!e || (console.warn("No scene found for preloading screens"), !1);
                    }, this.initScreens$ = function(e) {
                        var n = t.getScreenHolder$();
                        if (null != n && n.enabled) {
                            var a, r = n.screens, i = u(r);
                            try {
                                for(i.s(); !(a = i.n()).done;){
                                    var s = a.value, o = T[s.key];
                                    if (o) {
                                        var c = t.screens$[o];
                                        t.screens$[o] = c ? g(g({}, c), {}, {
                                            order: s.depth
                                        }) : {
                                            state: "queued",
                                            order: s.depth,
                                            name: o
                                        };
                                    }
                                }
                            } catch (e) {
                                i.e(e);
                            } finally{
                                i.f();
                            }
                            var l = e.getComponentsInChildren("BaseScreen");
                            if (!Zr.isEmpty(l)) {
                                var d = l.map(function(e) {
                                    return null == e ? void 0 : e.node.name;
                                }).join(", ");
                                console.info("📺 Active Screens in ".concat(e.name, ": ").concat(d)), t.addScreens$(l);
                            }
                        }
                    }, this.getScreenHolder$ = function() {
                        var _$e, t = Y.getScene();
                        return null != (_$e = null == t ? void 0 : t.getComponentInChildren("Screens")) ? _$e : null;
                    }, this.addScreens$ = function(e) {
                        for(var n = 0; n < e.length; n++){
                            var a, r = e[n];
                            if (r) {
                                var i = r.node.name;
                                if (t.isScreenNameValid$(i)) {
                                    var s = t.screens$[i], o = null != (a = null == s ? void 0 : s.order) ? a : 0;
                                    t.screens$[i] = {
                                        state: "ready",
                                        order: o,
                                        screen: r,
                                        prefab: r.node,
                                        name: i,
                                        useCount: 0
                                    };
                                } else console.warn("ScreenManager.addScreens: Invalid screen name ".concat(i));
                            } else console.warn("ScreenManager.addScreens: Invalid screen ".concat(n));
                        }
                        t.reorderScreens$();
                    }, this.isScreenNameValid$ = function(e) {
                        return Zr.isString(e) && Xr.vals(T).includes(e);
                    }, this.addScreenQueues$ = function(e) {
                        var n = t.getScreenHolder$();
                        if (null != n && n.isValid) {
                            var a, r = u(e);
                            try {
                                for(r.s(); !(a = r.n()).done;){
                                    var i = a.value;
                                    t.isScreenNameValid$(i) ? void 0 === t.screens$[i] && (t.screens$[i] = {
                                        state: "queued",
                                        order: 0,
                                        name: i
                                    }) : console.warn("ScreenManager.addScreenQueues: Invalid screen name ".concat(i));
                                }
                            } catch (e) {
                                r.e(e);
                            } finally{
                                r.f();
                            }
                        } else console.warn("ScreenManager.addScreenQueues: No valid screen holder found");
                    }, this.loadScreen$ = (_$e = n(function(e) {
                        var _$n, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return _state.trys.push([
                                        0,
                                        2,
                                        ,
                                        3
                                    ]), t.screens$[e.name] = g(g({}, e), {}, {
                                        state: "loading"
                                    }), ti.emit(Kr.LOADING_SCREEN, {
                                        screenName: e.name
                                    }), [
                                        4,
                                        A.loadPrefabAsync("screens/".concat(e.name))
                                    ];
                                case 1:
                                    if (null === (_$n = _state.sent())) throw Error("ScreenManager.loadScreen: Failed to load prefab: ".concat(e.name));
                                    return t.screens$[e.name] = g(g({}, e), {}, {
                                        state: "prefab",
                                        prefab: _$n,
                                        useCount: 0
                                    }), console.debug("ScreenManager.loadScreen: ".concat(e.name, " loaded successfully")), ti.emit(Kr.SCREEN_LOADED, {
                                        screenName: e.name
                                    }), t.emitPrefabReady$(e.name), [
                                        3,
                                        3
                                    ];
                                case 2:
                                    return n = _state.sent(), console.warn("ScreenManager.loadScreen: Failed to load ".concat(e.name), n), t.screens$[e.name] = {
                                        state: "queued",
                                        order: e.order,
                                        name: e.name
                                    }, [
                                        3,
                                        3
                                    ];
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    }), this.preloadScreens$ = function() {
                        var _$e = t.getScreenHolder$();
                        if (null != _$e && _$e.isValid && null != _$e && _$e.autoPreload) {
                            var n, a = Object.values(t.screens$).sort(function(e, t) {
                                return e.order - t.order;
                            }), r = u(a);
                            try {
                                for(r.s(); !(n = r.n()).done;){
                                    var i = n.value;
                                    "queued" === i.state && t.loadScreen$(i);
                                }
                            } catch (e) {
                                r.e(e);
                            } finally{
                                r.f();
                            }
                        }
                    }, this.getScreen$ = (_$e1 = n(function(e) {
                        var n, a, r;
                        return _ts_generator(this, function(_state) {
                            if (null == (n = t.getScreenHolder$()) || !n.isValid) throw Error("ScreenManager.getScreen: Invalid screen holder");
                            if (t.hasScreenInstance$(e)) return [
                                2,
                                e.screen
                            ];
                            if (!t.hasPrefab$(e)) throw Error("ScreenManager.getScreen: Invalid state ".concat(e.state, " for ").concat(e.name));
                            if (!_instanceof(e.prefab, ie)) throw Error("ScreenManager.getScreen: Invalid prefab ".concat(e.name));
                            if ((a = se(e.prefab)).name = e.name, !(r = a.getComponent("BaseScreen"))) throw Error("ScreenManager.getScreen: Invalid screen ".concat(e.name));
                            return [
                                2,
                                (n.node.addChild(a), a.active = !1, t.screens$[e.name] = g(g({}, e), {}, {
                                    state: "ready",
                                    screen: r
                                }), t.reorderScreens$(), console.debug("ScreenManager.getScreen: Retrieved ".concat(e.name), e), r)
                            ];
                        });
                    }), function(t) {
                        return _$e1.apply(this, arguments);
                    }), this.reorderScreens$ = function() {
                        var _$e = [];
                        for(var n in t.screens$){
                            var a = t.screens$[n];
                            t.hasScreenInstance$(a) && a.screen.isValid && _$e.push(a);
                        }
                        _$e.sort(function(e, t) {
                            return e.order - t.order;
                        });
                        for(var r = 0; r < _$e.length; r++){
                            var i, s = _$e[r];
                            null != s && null != (i = s.screen) && i.isValid && s.screen.node.setSiblingIndex(r);
                        }
                    }, this.openScreen = (_$e2 = n(function(e, n) {
                        var a, r, t1;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!t.isScreenNameValid$(e)) return [
                                        3,
                                        9
                                    ];
                                    if (void 0 === (a = t.getOrTryAddScreen$(e))) return [
                                        3,
                                        8
                                    ];
                                    if (t.hasPrefab$(a)) return [
                                        3,
                                        2
                                    ];
                                    return "queued" === a.state && t.loadScreen$(a), [
                                        4,
                                        t.queueScreen$(e, n)
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 2:
                                    return _state.trys.push([
                                        2,
                                        5,
                                        6,
                                        7
                                    ]), F.setBlockInput(!0), [
                                        4,
                                        t.getScreen$(a)
                                    ];
                                case 3:
                                    if (null == (r = _state.sent()) || !r.isValid) throw Error("ScreenManager.performScreenOpen: Invalid screen ".concat(e));
                                    return t.incrementUseCount$(e), [
                                        4,
                                        t.showScreen$(r, e, n)
                                    ];
                                case 4:
                                    return _state.sent(), [
                                        3,
                                        7
                                    ];
                                case 5:
                                    return t1 = _state.sent(), console.error("ScreenManager.openScreen: Error opening ".concat(e), t1), [
                                        3,
                                        7
                                    ];
                                case 6:
                                    return F.setBlockInput(!1), [
                                        7
                                    ];
                                case 7:
                                    return [
                                        3,
                                        9
                                    ];
                                case 8:
                                    console.warn("ScreenManager.openScreen: Screen ".concat(e, " not found")), _state.label = 9;
                                case 9:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), function(t, n) {
                        return _$e2.apply(this, arguments);
                    }), this.queueScreen$ = function(e, a) {
                        console.debug("ScreenManager.queueScreen: Queuing ".concat(e));
                        var r, i = null != (r = t.onPrefabReadyCallbacks$[e]) ? r : [];
                        return new Promise(function(r) {
                            var i1, s = (i1 = n(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                t.openScreen(e, a)
                                            ];
                                        case 1:
                                            return _state.sent(), r(), [
                                                2
                                            ];
                                    }
                                });
                            }), function() {
                                return i1.apply(this, arguments);
                            });
                            t.onPrefabReadyCallbacks$[e] = [].concat(f(i), [
                                s
                            ]);
                        });
                    }, this.incrementUseCount$ = function(e) {
                        var n = t.screens$[e];
                        t.hasPrefab$(n) && (t.screens$[e] = g(g({}, n), {}, {
                            useCount: n.useCount + 1
                        }));
                    }, this.showScreen$ = (_$e3 = n(function(e, n, a) {
                        var r, i;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return r = {
                                        screenName: n,
                                        screenData: a
                                    }, ti.emit(Kr.OPENING_SCREEN, r), t.updateScreenState(n, "opening", {
                                        startTime: Date.now()
                                    }), [
                                        4,
                                        Jr.sleepAsync(0)
                                    ];
                                case 1:
                                    return _state.sent(), "opening" === (null == (i = t.screens$[n]) ? void 0 : i.state) && (t.updateScreenState(n, "ready"), e.node.active = !0, e.open(a), t.updateAnalytics$(n), t.reorderScreens$()), [
                                        2
                                    ];
                            }
                        });
                    }), function(t, n, a) {
                        return _$e3.apply(this, arguments);
                    }), this.closeScreen = (_$e4 = n(function(e) {
                        var n, a, r, _arguments = arguments;
                        return _ts_generator(this, function(_state) {
                            if (n = _arguments.length > 1 && void 0 !== _arguments[1] && _arguments[1], t.isScreenNameValid$(e)) if (void 0 !== (a = t.screens$[e])) {
                                if ("opening" === a.state) {
                                    if (r = a.startTime, Date.now() - r < 100) return [
                                        2,
                                        (console.debug("ScreenManager.closeScreen: Cancelled open request for ".concat(e, " (too fast)")), void t.updateScreenState(e, "prefab"))
                                    ];
                                    t.updateScreenState(e, "closing");
                                } else if (!t.isReady$(a) && "closing" !== a.state) return [
                                    2,
                                    (console.debug("ScreenManager.closeScreen: ".concat(e, " is not ready (state: ").concat(a.state, ")")), void delete t.onPrefabReadyCallbacks$[e])
                                ];
                                try {
                                    if (!t.hasScreenInstance$(a) || !a.screen.isValid) return [
                                        2
                                    ];
                                    a.screen.node.active && (ti.emit(Kr.CLOSING_SCREEN, {
                                        screenName: e
                                    }), a.screen.close()), t.updateScreenState(e, "ready"), n && t.updateAnalytics$(e, !1);
                                } catch (t) {
                                    console.error("ScreenManager.closeScreen: Error closing ".concat(e), t);
                                }
                            } else console.debug("ScreenManager.closeScreen: Screen ".concat(e, " not found"));
                            return [
                                2
                            ];
                        });
                    }), function(t) {
                        return _$e4.apply(this, arguments);
                    }), this.updateAnalytics$ = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        R.trackCurrentPage(e, t), t ? null == ni || ni.addMetadata({
                            currentScreen: e
                        }) : null == ni || ni.removeMetadata("currentScreen");
                    }, this.closeAllScreens = function() {
                        for(var _$e in t.screens$)t.closeScreen(_$e, !1);
                    }, this.getOrTryAddScreen$ = function(e) {
                        var n = t.screens$[e];
                        return void 0 === n ? (console.debug("ScreenManager.getOrTryAddScreen: Adding new screen (".concat(e, ") to queue")), t.addScreenQueues$([
                            e
                        ]), t.screens$[e]) : n;
                    }, this.emitPrefabReady$ = function(e) {
                        var n, a, r = null != (n = t.onPrefabReadyCallbacks$[e]) ? n : [], i = u(r);
                        try {
                            for(i.s(); !(a = i.n()).done;)(0, a.value)();
                        } catch (e) {
                            i.e(e);
                        } finally{
                            i.f();
                        }
                        delete t.onPrefabReadyCallbacks$[e];
                    }, this.hasScreenInstance$ = function(e) {
                        return !!e && ("ready" === e.state || "opening" === e.state || "closing" === e.state);
                    }, this.hasPrefab$ = function(e) {
                        return !!e && ("prefab" === e.state || t.hasScreenInstance$(e));
                    }, this.isReady$ = function(e) {
                        return "ready" === (null == e ? void 0 : e.state);
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.bindEventHandlers$(), console.debug("Screen Manager: Initialized");
                        }
                    },
                    {
                        key: "updateScreenState",
                        value: function value(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = this.screens$[e];
                            a ? this.screens$[e] = g(g(g({}, a), n), {}, {
                                state: t
                            }) : console.warn("ScreenManager.updateScreenState: Entry not found for ".concat(e));
                        }
                    }
                ]), e;
            }();
            M._RF.pop(), M._RF.push({}, "9d892ZsSyxHSITF2VHJ1zpy", "LudosSystem", void 0);
            var ri, ii = Ludex, si = ii.Configs, oi = si.Core, ci = si.Ads, li = si.Match, ui = si.Player, di = si.GameEngine.HybridFileCache, hi = ii.Events, pi = ii.Plugins.Analytics, fi = (void 0 === pi ? {} : pi).Events, gi = ii.Utils, mi = gi.Device, vi = gi.Time, $i = codex, yi = $i.context, Si = $i.event, Ei = $i.analytics, Ai = $i.monitorError;
            new (t(function e() {
                var t = this;
                r(this, e), this.adsManager$ = null, this.matchManager$ = null, this.playerManager$ = null, this.logEngineReady$ = function() {
                    Si.catchUp(hi.ANALYTICS_READY, function() {
                        fi && Ei.event(fi.ENGINE_READY);
                    });
                }, this.createManager$ = function() {
                    t.sceneManager$ = new Qr, t.screenManager$ = new ai, t.engineManager$ = new Ue, t.layoutManager$ = new Ze, t.pluginsManager$ = new Nr, ci.Enabled && (t.adsManager$ = new De), li.Enabled && (t.matchManager$ = new at), ui.Enabled && (t.playerManager$ = new lt);
                }, this.initManagers$ = function() {
                    var _$e, n, a;
                    t.sceneManager$.init(), t.screenManager$.init(), t.engineManager$.init(), t.layoutManager$.init(), t.pluginsManager$.init(), null == (_$e = t.adsManager$) || _$e.init(), null == (n = t.matchManager$) || n.init(), null == (a = t.playerManager$) || a.init();
                }, this.listenEvents$ = function() {
                    Si.catchUp(hi.CORE_BOOTING, t.handleWhenCoreBoot$), Si.catchUp(hi.CORE_STARTING, t.handleWhenCoreStart$), Si.catchUp(hi.CORE_READY, t.handleWhenCoreReady$), s.listenLayoutChanges(), t.sceneManager$.onSwitchScene(t.handleSwitchScene$);
                }, this.handleWhenCoreBoot$ = function() {
                    console.warn("Ludos System: Core boot", {
                        inited: P.inited,
                        game: P
                    }), P.inited ? t.handleCocosInit$() : P.once(oe.EVENT_GAME_INITED, t.handleCocosInit$);
                }, this.handleCocosInit$ = function() {
                    Si.emit(hi.REQUEST_CORE_START);
                }, this.handleWhenCoreStart$ = function() {
                    var _$e, n;
                    null == (_$e = t.playerManager$) || _$e.setupDefaultGameData(), null == (n = t.matchManager$) || n.setupDefaultMatchData();
                }, this.handleWhenCoreReady$ = function() {
                    var _$e;
                    di.Enabled || Si.emit(hi.BUNDLE_READY), Si.catchUp(hi.BUNDLE_READY, t.initPlugins$), null == (_$e = t.playerManager$) || _$e.syncPlatformPlayerData(), fi && Ei.event(fi.LOAD_START), Si.catchUp(hi.BUNDLE_READY, t.processPreStartGame$);
                }, this.processPreStartGame$ = function() {
                    Si.catchUp(hi.SCENE_LOADED, t.preloadScenes$), Si.catchUp(hi.SCENE_LAUNCHED, t.processBootSceneLaunched$), t.runBootScene$();
                }, this.processBootSceneLaunched$ = n(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!oi.StartSDKAfterLoadGame) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    Si.waitTo(hi.SCENE_LOADED)
                                ];
                            case 1:
                                _state.sent(), _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    GameSDK.extra.waitSDKInitiatedAsync()
                                ];
                            case 3:
                                if (_state.sent(), console.debug("Game paused", P.isPaused()), !P.isPaused()) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    t.waitGameResume$()
                                ];
                            case 4:
                                _state.sent(), _state.label = 5;
                            case 5:
                                return t.processStartGame$(), [
                                    2
                                ];
                        }
                    });
                }), this.waitGameResume$ = n(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new Promise(function(e) {
                                P.once(oe.EVENT_RESUME, e);
                            })
                        ];
                    });
                }), this.runBootScene$ = function() {
                    GameSDK.isGameSDK("Playable") ? L.switchScene(C.PLAYABLE_SCENE) : L.switchScene(C.BOOT_SCENE);
                }, this.preloadScenes$ = function() {
                    GameSDK.isGameSDK("Playable") || ("solo" === yi.getSessionContextType() ? L.preloadDashboardScene() : L.preloadGameScene());
                }, this.processStartGame$ = n(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return console.groupEnd(), fi && Ei.event(fi.LOAD_COMPLETE), Si.catchUp(hi.PLAYER_INFO_LOADED, t.startProcessContextData$), [
                                    4,
                                    Si.waitTo(hi.SCENE_RENDERED, 1e3).catch(function() {})
                                ];
                            case 1:
                                return _state.sent(), [
                                    4,
                                    vi.sleepAsync(100)
                                ];
                            case 2:
                                return _state.sent(), [
                                    4,
                                    t.startGameAsync$()
                                ];
                            case 3:
                                return _state.sent(), [
                                    2
                                ];
                        }
                    });
                }), this.handleSwitchScene$ = function() {
                    D.preloadScreens(), console.groupEnd();
                }, this.startGameAsync$ = n(function() {
                    var _$e, n, _arguments = arguments;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _$e = _arguments.length > 0 && void 0 !== _arguments[0] ? _arguments[0] : 0, _state.label = 1;
                            case 1:
                                return _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]), [
                                    4,
                                    GameSDK.startGameAsync()
                                ];
                            case 2:
                                return _state.sent(), [
                                    3,
                                    4
                                ];
                            case 3:
                                return console.warn("GameSDK.startGameAsync", n = _state.sent()), _$e <= 3 ? setTimeout(function() {
                                    t.startGameAsync$(_$e + 1);
                                }, 1e3) : null == Ai || Ai.sendException(_instanceof(n, Error) ? n : Error(JSON.stringify(n))), [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }), this.startProcessContextData$ = n(function() {
                    var _$e, e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                fi && Ei.event(fi.APP_READY), _state.label = 1;
                            case 1:
                                return _state.trys.push([
                                    1,
                                    3,
                                    4,
                                    5
                                ]), null == (_$e = t.playerManager$) || _$e.requestConnectedPlayers(), x.applyCustomFlows(), [
                                    4,
                                    yi.processContextData()
                                ];
                            case 2:
                                return _state.sent(), [
                                    3,
                                    5
                                ];
                            case 3:
                                return console.error("startProcessContextData", e = _state.sent()), _instanceof(e, Error) && (null == Ai || Ai.sendException(e)), [
                                    3,
                                    5
                                ];
                            case 4:
                                return Si.emit(hi.GAME_READY), t.trackDeviceInfo$("begin"), window.addEventListener("beforeunload", function() {
                                    t.trackDeviceInfo$("end");
                                }), [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                }), this.initPlugins$ = function() {
                    t.pluginsManager$.initLanguages(), t.pluginsManager$.initFrameCapture(), t.pluginsManager$.initDailyRewards(), t.pluginsManager$.initLeaderboards(), t.pluginsManager$.initDynamicAtlas(), t.pluginsManager$.initDynamicAssets(), t.pluginsManager$.initCanvasRecorder(), t.pluginsManager$.initPerformanceMonitor(), t.pluginsManager$.initAdaptivePerformance();
                }, this.getDeviceInfo$ = function(e) {
                    try {
                        var t = mi.isES5(), n = mi.heapMemory(), a = mi.pixelRatio(), r = mi.audioState(), i = mi.orientation(), s = mi.gpuRenderer(), o = mi.isSupportWebp();
                        return {
                            log_type: e,
                            is_es5: t,
                            pixel_ratio: a,
                            sdk_platform: GameSDK.getPlatform(),
                            screen_orientation: i,
                            audio_state: r,
                            heap_memory: n,
                            support_webp: o,
                            gpu_renderer: s,
                            webgl_version: mi.webglVersion(),
                            max_texture_size: mi.maxTextureSize(),
                            hardware_concurrency: mi.hardwareConcurrency()
                        };
                    } catch (e) {
                        return console.warn("Error getting device info", e), null;
                    }
                }, this.trackDeviceInfo$ = function(e) {
                    var n = t.getDeviceInfo$(e);
                    n && R.trackDeviceInfo(n);
                }, console.groupCollapsed("📦 Ludos System"), this.logEngineReady$(), this.createManager$(), this.initManagers$(), this.listenEvents$(), console.groupEnd(), window.__sdkLoad.ensure(10);
            })), M._RF.pop(), M._RF.push({}, "c7df3pBHqRChZTjXMfWIy6H", "Optimized2DPipeline", void 0);
            var wi = ce.ccclass, bi = ce.executeInEditMode, Ci = "Optimized2DPipeline", Di = "default", Ri = le.SceneFlags.UI | le.SceneFlags.BLEND | le.SceneFlags.OPAQUE | le.SceneFlags.DRAW_INSTANCING, Li = function() {
                function e() {
                    var t = this;
                    r(this, e), this.clearColor$ = new ue.Color(0, 0, 0, 1), this.viewport$ = new ue.Viewport, this.lightInfo$ = new le.LightInfo, this.isValidCamera$ = function(e) {
                        return !(null == e || !e.scene || null == e || !e.window);
                    }, this.syncViewport$ = function(e, n, a) {
                        var r = e.viewport;
                        t.viewport$.left = r.x * n, t.viewport$.top = r.y * a, t.viewport$.width = r.z * n, t.viewport$.height = r.w * a;
                    }, this.syncClearColor$ = function(e) {
                        var n = e.clearColor;
                        t.clearColor$.x = n.x, t.clearColor$.y = n.y, t.clearColor$.z = n.z, t.clearColor$.w = n.w;
                    };
                }
                return t(e, [
                    {
                        key: "setup",
                        value: function value(e, t) {
                            for(var n = 0; n < e.length; n++){
                                var a = e[n];
                                if (this.isValidCamera$(a)) {
                                    var r = a.window, i = Math.max(Math.floor(r.width), 1), s = Math.max(Math.floor(r.height), 1), o = "Color".concat(r.renderWindowId);
                                    t.addRenderWindow(o, ue.Format.RGBA8, i, s, r), this.syncViewport$(a, i, s), this.syncClearColor$(a);
                                    var c = t.addRenderPass(i, s, Di);
                                    c.setViewport(this.viewport$);
                                    var l = a.clearFlag & ue.ClearFlagBit.COLOR ? ue.LoadOp.CLEAR : ue.LoadOp.LOAD;
                                    a.clearFlag & ue.ClearFlagBit.COLOR && (this.clearColor$.x = a.clearColor.x, this.clearColor$.y = a.clearColor.y, this.clearColor$.z = a.clearColor.z, this.clearColor$.w = a.clearColor.w), c.addRenderTarget(o, l, ue.StoreOp.STORE, this.clearColor$), c.addQueue(le.QueueHint.BLEND, Di).addSceneOfCamera(a, this.lightInfo$, Ri);
                                }
                            }
                        }
                    }
                ]), e;
            }();
            if (le) {
                var Ti = new Li;
                le.setCustomPipeline(Ci, Ti), console.info("[".concat(Ci, "] Registered successfully."));
            }
            wi("Optimized2DPipeline")(ri = bi(ri = function(e) {
                _(a, e);
                var n = I(a);
                function a() {
                    return r(this, a), n.apply(this, arguments);
                }
                return t(a, [
                    {
                        key: "start",
                        value: function value() {}
                    }
                ]), a;
            }(de)) || ri), M._RF.pop(), M._RF.push({}, "a3a11eRcsNI5aahAZL2xA8X", "ScreenEntry", void 0), M._RF.pop();
        }
    };
});
System.register('virtual:///prerequisite-imports/systems', [
    'chunks:///systems.js'
], function(_export, _context) {
    return {
        setters: [
            function(_m) {
                var _exportObj = {};
                for(var _key in _m)"default" !== _key && "__esModule" !== _key && (_exportObj[_key] = _m[_key]);
                _export(_exportObj);
            }
        ],
        execute: function execute() {}
    };
});
