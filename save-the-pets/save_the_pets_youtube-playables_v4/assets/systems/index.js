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
    var e, t, n, a, r, i, s, o, c, l, u, d, h, p, f, g, m, v, $, y, S, E, A, w, b, C, D, R, L, F, T, x, _, I, M, P, N, k, O, U, B, G, z, H, V, Y, q, Q, K, W, j, X, Z, J, ee, te, ne, ae, re, ie, se, oe, ce, le, ue, de, he, pe;
    return {
        setters: [
            function(N) {
                e = N.h, t = N.e, n = N.a, a = N.t, r = N.d, i = N.G, s = N.H, o = N.i, c = N.p, l = N.r, u = N.C, d = N.n, h = N.g, p = N.M, f = N.P, g = N.I, m = N.v, v = N.k, $ = N.J, y = N.L, S = N.K, E = N.s, A = N.u, w = N.w, b = N.R, C = N.N, D = N.T, R = N.B, L = N.x, F = N.q, T = N.z, x = N.F, _ = N.O, I = N.Q, M = N.b, P = N.c;
            },
            function(e) {
                N = e.cclegacy, k = e.game, O = e.settings, U = e.Settings, B = e.View, G = e.AssetManager, z = e.sys, H = e.input, V = e.Input, Y = e.DynamicAtlasManager, q = e.macro, Q = e.director, K = e.view, W = e.ResolutionPolicy, j = e.Size, X = e.screen, Z = e.Director, J = e.Sprite, ee = e.UITransform, te = e.SpriteFrame, ne = e.Rect, ae = e.assetManager, re = e.ImageAsset, ie = e.UIOpacity, se = e.Label, oe = e.Prefab, ce = e.instantiate, le = e.Game, ue = e._decorator, de = e.rendering, he = e.gfx, pe = e.Component;
            }
        ],
        execute: function execute() {
            var fe, ge, me, ve = {
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
            N._RF.push({}, "0b4bc6YT6ZGg4lnXfh/zL6J", "AdsManager", void 0);
            var $e = Ludex, ye = $e.Events, Se = $e.Configs.Ads, Ee = Se.Enabled, Ae = Se.PreloadAds, we = Se.ShowAdOnLoad, be = $e.Utils, Ce = be.Time, De = be.Decorator, Re = codex.event, Le = (fe = De.tryCatch(), me = e((ge = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Re.on(ye.AD_CLOSED, t.requestResizeGame$), Re.catchUp(ye.GAME_READY, t.processPreloadAds$), Re.catchUp(ye.GAME_SDK_READY, t.processShowFirstInterstitialAd), Re.catchUp(ye.CONTEXT_DATA_PROCESSED, t.processShowBannerAds$), Re.catchUp(ye.CONTEXT_DATA_PROCESSED, function() {
                            k.on(i.LAYOUT_CHANGED, t.handleLayoutChanged$);
                        });
                    }, this.requestResizeGame$ = function() {
                        Re.emit(ye.REQUEST_RESIZE_GAME);
                    }, this.processShowBannerAds$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!Ee) return [
                                        3,
                                        3
                                    ];
                                    if (!GameSDK.isGameSDK("FacebookInstant")) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        Ce.sleepAsync(5e3)
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
                                    if (!Ae) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        Ce.sleepAsync(3e3)
                                    ];
                                case 1:
                                    _state.sent(), a.preloadAds(), _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), o(this, "processShowFirstInterstitialAd", me, this), this.handleLayoutChanged$ = function() {
                        a.updateBannerAdsByLayout(s.getCurrentLayout()), a.refreshBannerAdVisibility();
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenEvents$(), console.debug("Ads Manager: Initialized", {
                                Enabled: Ee,
                                PreloadAds: Ae,
                                ShowAdOnLoad: we
                            });
                        }
                    }
                ]), e;
            }()).prototype, "processShowFirstInterstitialAd", [
                fe
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
                                    if (!Ee || (e = we.Enabled, t = we.DelaySeconds, !e)) return [
                                        3,
                                        4
                                    ];
                                    if (!(t > 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        Ce.sleepAsync(1e3 * t)
                                    ];
                                case 1:
                                    _state.sent(), _state.label = 2;
                                case 2:
                                    return (n = GameSDK.isGameSDK("Yandex")) && k.pause(), [
                                        4,
                                        a.showInterstitialAdAsync({
                                            forceLoad: !0,
                                            contextType: "preroll"
                                        })
                                    ];
                                case 3:
                                    _state.sent(), n && k.resume(), _state.label = 4;
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }
            }), ge);
            N._RF.pop(), N._RF.push({}, "b4ad5mMokdAa6EVNGzNedpF", "EngineManager", void 0);
            var Fe, Te, xe, _e = Ludex, Ie = _e.Events, Me = _e.Configs.GameEngine, Pe = Me.DynamicAtlas, Ne = Me.PreferredFPS, ke = _e.Utils, Oe = ke.Valid, Ue = ke.Device, Be = codex.event, Ge = function() {
                function e() {
                    var t = this;
                    r(this, e), this.overrideSettings$ = function() {
                        O.overrideSettings(U.Category.ENGINE, "debug", Oe.isDebugger()), B.instance.resizeWithBrowserSize(!1), Ue.isDesktop() ? k.frameRate = Ne.Desktop : k.frameRate = Ne.Mobile;
                    }, this.setupAutoAtlas$ = function() {
                        G.instance.cacheAsset = !0;
                    }, this.setupAssetDownloader$ = n(function() {
                        var _$e, n, a;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return _$e = G.instance.downloader, t.setupAllowImageBitmap$(), _$e.maxConcurrency = 24, _$e.maxRequestsPerFrame = 24, [
                                        4,
                                        t.checkWebpSupport$()
                                    ];
                                case 1:
                                    return n = _state.sent(), z.hasFeature(z.Feature.WEBP) && (a = z.hasFeature, z.hasFeature = function(e) {
                                        return e === z.Feature.WEBP ? n : a(e);
                                    }), [
                                        2
                                    ];
                            }
                        });
                    }), this.setupAllowImageBitmap$ = function() {
                        G.instance.allowImageBitmap = !0;
                        var _$e = !0;
                        GameSDK.isGameSDK("YoutubePlayables") && (_$e = !1), G.instance.allowImageBitmap = _$e;
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
                            return G.instance.transformPipeline.remove(1), [
                                2
                            ];
                        });
                    }), this.setupEngineRunningState$ = function() {
                        H.on(V.EventType.TOUCH_START, t.handleResumeEngine$), Be.catchUp(Ie.GAME_READY, function() {
                            Be.on(Ie.VISIBILITY_HIDDEN, t.handlePauseEngine$), Be.on(Ie.VISIBILITY_VISIBLE, t.handleResumeEngine$);
                        });
                    }, this.handlePauseEngine$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return k.isPaused() || (console.debug("Engine: Paused", k.isPaused()), k.pause()), [
                                2
                            ];
                        });
                    }), this.handleResumeEngine$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return k.isPaused() && (console.debug("Engine: Resumed", k.isPaused()), k.resume(), t.handleAudioSyncForYoutubePlayables$()), [
                                2
                            ];
                        });
                    }), this.setupDynamicAtlas$ = function() {
                        z.isBrowser ? t.setupDynamicAtlasForBrowser$() : z.isNative ? t.setupDynamicAtlasForNative$() : t.disableDynamicAtlas$();
                    }, this.setupDynamicAtlasForBrowser$ = function() {
                        switch(z.os){
                            case z.OS.IOS:
                                t.setupDynamicAtlasForIOS$();
                                break;
                            case z.OS.ANDROID:
                                t.setupDynamicAtlasForAndroid$();
                                break;
                            case z.OS.OSX:
                            case z.OS.LINUX:
                            case z.OS.WINDOWS:
                                t.setupDynamicAtlasForDesktop$();
                                break;
                            default:
                                t.setupDynamicAtlasDefault$();
                        }
                    }, this.setupDynamicAtlasForNative$ = function() {
                        switch(z.platform){
                            case z.Platform.ANDROID:
                                t.setupDynamicAtlasForAndroid$();
                                break;
                            case z.Platform.IOS:
                                t.setupDynamicAtlasForIOS$();
                                break;
                            default:
                                t.setupDynamicAtlasDefault$();
                        }
                    }, this.setDynamicAtlas$ = function(e) {
                        var n = e.Enabled, a = e.MaxAtlasCount, r = e.MaxAtlasSize, i = e.MaxFrameSize, s = Y.instance;
                        q.CLEANUP_IMAGE_CACHE = !n, s.enabled = n, s.textureSize = r, s.maxFrameSize = i, s.maxAtlasCount = a, s.textureBleeding = Pe.OptimizeAtlas.TextureBleeding;
                        var o = t.getMaxTextureSize$() || r, c = Math.min(r, o);
                        s.textureSize = c, i > c && (s.maxFrameSize = c);
                    }, this.getMaxTextureSize$ = function() {
                        if (!Q.root) return -1;
                        var _$e = Q.root.device.capabilities.maxTextureSize, t = Math.min(Ue.maxTextureSize(), _$e);
                        if (t > 8192) return 7168;
                        var n = Y.instance.maxFrameSize, a = t - 1024;
                        return a <= (void 0 === n ? 0 : n) || a <= 0 ? -1 : a;
                    }, this.setupDynamicAtlasForIOS$ = function() {
                        var _$e = Pe.IOS;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasForAndroid$ = function() {
                        var _$e = Pe.Android;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasForDesktop$ = function() {
                        var _$e = Pe.Desktop;
                        t.setDynamicAtlas$(_$e);
                    }, this.setupDynamicAtlasDefault$ = function() {
                        t.setDynamicAtlas$({
                            Enabled: !0,
                            MaxAtlasCount: 1,
                            MaxAtlasSize: 4096,
                            MaxFrameSize: 1024
                        });
                    }, this.disableDynamicAtlas$ = function() {
                        q.CLEANUP_IMAGE_CACHE = !0, Y.instance.enabled = !1;
                    }, this.setupBatcherLimit$ = function() {
                        q.BATCHER2D_MEM_INCREMENT = 512, q.MAX_LABEL_CANVAS_POOL_SIZE = 125;
                    }, this.handleAudioSyncForYoutubePlayables$ = function() {
                        if (GameSDK.isGameSDK("YoutubePlayables")) {
                            var _$e = GameSDK.extra.isAudioEnabled(), t = a.isAdInProgress();
                            _$e && !t && c.playMusic(l.BG_MUSIC);
                        }
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.overrideSettings$(), this.setupAutoAtlas$(), this.setupBatcherLimit$(), this.setupDynamicAtlas$(), this.setupAssetDownloader$(), this.setupOptimalPipelines$(), this.setupEngineRunningState$(), console.debug("Engine Manager: Initialized", {
                                PreferredFPS: Ne
                            });
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "9f0a0l1uXlNwqKEKardFRyv", "LayoutManager", void 0);
            var ze = d.Layout, He = d.DesignSize, Ve = He.Portrait, Ye = He.Landscape, qe = d.AcceptPortraitRatio, Qe = Ludex, Ke = Qe.Utils.Decorator, We = Qe.Configs.GameEngine.AutoResizeCanvas, je = Qe.Events, Xe = codex, Ze = Xe.ads, Je = Xe.event, et = (Fe = Ke.debounce(100), xe = e((Te = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenResizeEvent$ = function() {
                        if (We && ResizeObserver) {
                            var _$e, n = null != (_$e = window.__listeners.resize) ? _$e : [];
                            if (n.length > 0) {
                                var a, r = h(n);
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
                        Je.on(je.REQUEST_RESIZE_GAME, t.handleViewResizeBySystem$);
                    }, this.setupResolutionPolicy$ = function() {
                        K.setOrientation(q.ORIENTATION_AUTO), t.resolutionPolicy$ = K.getResolutionPolicy(), t.resolutionPolicy$.setContentStrategy(W.ContentStrategy.EXACT_FIT), t.resolutionPolicy$.setContainerStrategy(W.ContainerStrategy.PROPORTION_TO_FRAME);
                    }, this.isAdShowing$ = function() {
                        return !(null == Ze || !Ze.isAdFullSizeShowing()) && (console.error("⚠️ LayoutManager:handleViewResize skipped because ad is showing"), !0);
                    }, this.handleViewResizeBySystem$ = function(e) {
                        if (!t.isAdShowing$()) {
                            var n = u.getMaxPixelRatio(), a = (null != e ? e : {}).forcePixelRatio, r = void 0 === a ? n : a;
                            console.debug("📱 View resize by system", {
                                forcePixelRatio: r,
                                maxDpr: n
                            }), window.devicePixelRatio = null != r ? r : n, t.setupOrientationByCanvasSize$();
                        }
                    }, o(this, "handleBodyResize", xe, this), this.setupOrientationByCanvasSize$ = function() {
                        var _$e = t.getScreenRatio$();
                        switch(d.PRIMARY_LAYOUT){
                            case "portrait":
                                t.setPortraitView$();
                                break;
                            case "landscape":
                                t.setLandscapeView$();
                                break;
                            case "auto":
                                _$e <= qe ? t.setPortraitView$() : t.setLandscapeView$();
                        }
                    }, this.setPortraitView$ = function() {
                        var _$e = Ve.WIDTH, n = Ve.HEIGHT, a = d.PRIMARY_LAYOUT === ze.Portrait;
                        (t.currentLayout$ !== ze.Portrait || a) && (t.currentLayout$ = ze.Portrait, t.setupLayoutStrategy$(_$e, n)), t.resizeGameView$(_$e, n);
                    }, this.setLandscapeView$ = function() {
                        var _$e = Ye.WIDTH, n = Ye.HEIGHT, a = d.PRIMARY_LAYOUT === ze.Landscape;
                        (t.currentLayout$ !== ze.Landscape || a) && (t.currentLayout$ = ze.Landscape, t.setupLayoutStrategy$(_$e, n)), t.resizeGameView$(_$e, n);
                    }, this.setupLayoutStrategy$ = function(e, n) {
                        var a = K.getDesignResolutionSize(), r = a.width, s = a.height, o = t.resolutionPolicy$.getContentStrategy(), c = t.getScreenRatio$(), l = d.AcceptPortraitRatio, u = t.resolutionPolicy$._containerStrategy.name, h = t.currentLayout$ === ze.Portrait, p = t.currentLayout$ === ze.Landscape;
                        h && t.resolutionPolicy$.setContentStrategy(W.ContentStrategy.FIXED_WIDTH), p && t.resolutionPolicy$.setContentStrategy(W.ContentStrategy.FIXED_HEIGHT), h && t.resolutionPolicy$.setContainerStrategy(W.ContainerStrategy.EQUAL_TO_FRAME), p && t.resolutionPolicy$.setContainerStrategy(W.ContainerStrategy.EQUAL_TO_FRAME), c > l && h && (t.resolutionPolicy$.setContentStrategy(W.ContentStrategy.SHOW_ALL), t.resolutionPolicy$.setContainerStrategy(W.ContainerStrategy.PROPORTION_TO_FRAME)), r === e && s === n && o === t.resolutionPolicy$.getContentStrategy() && u === t.resolutionPolicy$._containerStrategy.name || K.setDesignResolutionSize(e, n, t.resolutionPolicy$), console.debug("🔥 Change layout to", t.currentLayout$, t.resolutionPolicy$), k.emit(i.LAYOUT_CHANGED, t.currentLayout$);
                    }, this.resizeGameView$ = function(e, n) {
                        var a = d.DesignSize.Resolution, r = new j(e / a, n / a), s = u.getScreenWidthCss(), o = u.getScreenHeightCss(), c = s / r.width, l = o / r.height, h = new j(r.width, r.height), p = t.currentLayout$ === ze.Portrait, f = t.currentLayout$ === ze.Landscape;
                        if (p || f) h.width *= c, h.height *= l;
                        else {
                            var g = Math.min(c, l);
                            h.width *= g, h.height *= g;
                        }
                        var m = u.worldSizeToCssSize(h.width), v = u.worldSizeToCssSize(h.height), $ = new j(m, v);
                        X.windowSize = $, k.emit(i.VIEW_RESIZED, $), console.info("📐 View Resized", $);
                    }, this.getScreenRatio$ = function() {
                        return u.getScreenWidthCss() / u.getScreenHeightCss();
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            this.listenResizeEvent$(), this.setupResolutionPolicy$(), console.debug("Layout Manager: Initialized", {
                                AcceptPortraitRatio: qe,
                                AutoResizeCanvas: We
                            });
                        }
                    }
                ]), e;
            }()).prototype, "handleBodyResize", [
                Fe
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    var e = this;
                    return function() {
                        if (!e.isAdShowing$()) {
                            var t = u.getMaxPixelRatio();
                            console.debug("📱 View resize by body", {
                                maxDpr: t
                            }), window.devicePixelRatio = t, e.setupOrientationByCanvasSize$();
                        }
                    };
                }
            }), Te);
            N._RF.pop(), N._RF.push({}, "535cbXcmXdEzLn3H3LOIS27", "MatchManager", void 0);
            var tt = Ludex, nt = tt.Utils.Valid, at = tt.Dtos.Match, rt = (void 0 === at ? {} : at).CustomData, it = function() {
                function e() {
                    r(this, e), this.setupMatchCustomData$ = function() {
                        rt && (rt.addDefaults(p), rt.addValidator("score", function(e) {
                            if (!nt.isNumber(e) || e < 0) throw Error("score ".concat(e, " is invalid"));
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
            N._RF.pop(), N._RF.push({}, "d675ctpYslBHp4qqiYEki+q", "PlayerManager", void 0);
            var st = Ludex, ot = st.Utils, ct = ot.Valid, lt = (ot.Array, ot.Object, ot.Browser, st.Dtos.Player), ut = codex.player, dt = (window.GameName.replace(/ /g, "-"), function() {
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
                            lt.Data.makeLoose(), lt.GameData.makeLoose(), lt.Data.addDefaults(f), lt.GameData.addDefaults(g), lt.GameData.addValidator("bestEndlessScore", function(e) {
                                if (!ct.isNumber(e) || e < 0) throw Error("bestEndlessScore ".concat(e, " is invalid"));
                            }), lt.GameData.addValidator("firstLoginTime", function(e) {
                                if (!ct.isNumber(e) || e < 0) throw Error("firstLoginTime ".concat(e, " is invalid"));
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
                            ut.requestConnectedPlayers().catch(function(e) {
                                console.warn("player.requestConnectedPlayers", e);
                            });
                        }
                    }
                ]), e;
            }());
            N._RF.pop(), N._RF.push({}, "51079bCfn9MZK6cuxbahS7M", "AdaptivePerformance", void 0);
            var ht = Ludex.Utils.Valid, pt = codex.adaptivePerformance, ft = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Q.once(Z.EVENT_BEGIN_FRAME, t.handleBeginFrame$), Q.on(Z.EVENT_AFTER_SCENE_LAUNCH, t.handleAfterSceneLaunch$);
                    }, this.handleBeginFrame$ = function() {
                        Q.on(Z.EVENT_AFTER_UPDATE, t.lateUpdate$), Q.on(Z.EVENT_BEFORE_UPDATE, t.updateActualFPS$);
                    }, this.handleAfterSceneLaunch$ = function(e) {
                        pt && pt.trackingScene(e.name);
                    }, this.lateUpdate$ = function() {
                        var _$e = 1e3 * k.deltaTime;
                        null == pt || pt.updatePostStepDeltaTime(_$e);
                    }, this.updateActualFPS$ = function() {
                        var _$e, t = null == (_$e = Q.root) ? void 0 : _$e.fps;
                        ht.isNumber(t) && (null == pt || pt.updateActualFPS(t));
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            pt && this.listenEvents$();
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "0bbd4wf2fRDcKljBcls6K8a", "CanvasRecorder", void 0);
            var gt = codex.canvasRecorder, mt = function() {
                function e() {
                    r(this, e);
                }
                return t(e, [
                    {
                        key: "init",
                        value: function value() {
                            if (k.canvas && gt) {
                                gt.setCanvas(k.canvas);
                                var _$e = gt.getOptions(), t = function t() {
                                    k.pause(), k.step();
                                }, n = gt.waitNextFrame;
                                gt.waitNextFrame = function() {
                                    var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return new Promise(function(r, i) {
                                        a || gt.isCapturing() ? _$e.syncFps ? (Q.once(Z.EVENT_AFTER_RENDER, r), t()) : n(a).then(r).catch(i) : k.resume();
                                    });
                                };
                            }
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "e8b3dVomjtKZ68ykoRs82vP", "DailyRewards", void 0);
            var vt, $t, yt, St = codex.storage, Et = function() {
                function e() {
                    r(this, e), this.initStorage$ = function() {
                        St.addStorage("dashboardDailyRewards", {
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
            N._RF.pop(), N._RF.push({}, "49a72YoKFFCKbOm5Xgp9R+k", "DynamicAssets", void 0);
            var At = Ludex, wt = At.Configs.GameEngine.DynamicAssets, bt = wt.Resolution, Ct = wt.IgnoreFiles, Dt = wt.Compression, Rt = At.Events, Lt = At.Utils, Ft = Lt.Array, Tt = Lt.Function, xt = Lt.Device, _t = Lt.Decorator, It = codex, Mt = It.event, Pt = It.storage, Nt = It.getBuildVersion, kt = [
                ".png",
                ".jpg",
                ".jpeg",
                ".webp"
            ], Gt = (vt = _t.debounce(1e3), yt = e(($t = function() {
                var a;
                function e() {
                    var _$e, t = this;
                    r(this, e), this.isProcessing$ = !1, this.yield10msIfNeeded$ = Tt.timeSlice(10), this.targetScale$ = 1, this.sessionQuality$ = 3, this.failedAssets$ = new Set, this.isAssetUpgraded$ = new Set, this.upgradableAssets$ = new Map, this.initStorage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Pt.addStorage("DynamicAssets", {
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
                        var _$e, t = Math.round(xt.pixelRatio()), n = bt.Available, a = bt.Source, r = m(n).sort(function(e, t) {
                            return e - t;
                        }), i = h(r);
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
                        return t.targetScale$ !== bt.Source || Dt.Enabled ? Dt.Enabled ? 1 : 2 : 3;
                    }, this.checkCacheVersion$ = function() {
                        var _$e = Nt().toString(), n = Pt.getStorage("DynamicAssets"), a = null != n ? n : {}, r = a.currentQuality, i = void 0 === r ? 0 : r, s = a.buildVersion;
                        t.sessionQuality$ < i && _$e === s && (t.sessionQuality$ = i), Pt.setStorageData("DynamicAssets", "buildVersion", _$e), Pt.updateToWebStorage("DynamicAssets");
                    }, this.listenEvents$ = function() {
                        Dt.Enabled && 3 !== t.sessionQuality$ && (Mt.catchUp(Rt.GAME_READY, function() {
                            k.emit(i.REQUEST_UPGRADE_ASSET);
                        }), k.on(i.REQUEST_UPGRADE_ASSET, t.handleChangeQuality));
                    }, this.injectSpriteUpdate$ = function(e) {
                        Object.defineProperty(J.prototype, "spriteFrame", {
                            get: function get() {
                                return this._spriteFrame;
                            },
                            set: function set(t) {
                                if (t && (t.refreshed || this._spriteFrame !== t)) {
                                    var n = this._spriteFrame;
                                    if (this._spriteFrame = t, this.markForUpdateRenderData(!0), this._applySpriteFrame(n), this.sizeMode !== J.SizeMode.CUSTOM) {
                                        var a = this.node.getComponent(ee);
                                        if (a) {
                                            var r = t.originalSize, i = r.width, s = r.height, o = new j(i / e, s / e);
                                            a.setContentSize(o);
                                        }
                                    }
                                }
                            }
                        });
                    }, this.injectSpriteFrameCheckRect$ = function(e) {
                        var t = te.prototype.checkRect;
                        te.prototype.checkRect = function() {
                            if (this.refreshed) return !0;
                            for(var _$e = arguments.length, n = Array(_$e), a = 0; a < _$e; a++)n[a] = arguments[a];
                            return t.apply(this, n);
                        };
                    }, this.injectSpriteFrameSlicedUV$ = function(e) {
                        var t = te.prototype._calculateSlicedUV;
                        te.prototype._calculateSlicedUV = function() {
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
                        var t = te.prototype._refreshTexture;
                        te.prototype._refreshTexture = function() {
                            for(var n = arguments.length, a = Array(n), r = 0; r < n; r++)a[r] = arguments[r];
                            if (this.name && !this.refreshed) {
                                var i = this.rect, s = i.x, o = i.y, c = i.width, l = i.height, u = Number((s * e).toFixed(2)), d = Number((o * e).toFixed(2)), f = new ne(u, d, Math.round(c * e), Math.round(l * e)), g = new j(f.width, f.height);
                                return this.refreshed = !0, this.reset({
                                    rect: f,
                                    originalSize: g
                                }), t.apply(this, a);
                            }
                            t.apply(this, a);
                        };
                    }, o(this, "handleChangeQuality", yt, this), this.getAssetQuality$ = function(e) {
                        var n = "/native@".concat(t.targetScale$, "x/");
                        switch(t.sessionQuality$){
                            case 2:
                                return "".concat(n, "quality/");
                            case 1:
                                return Ft.has(Ct, e) ? "".concat(n, "quality/") : "".concat(n, "medium/");
                            default:
                                return "/native/";
                        }
                    }, this.replaceAssetUrl$ = function(e, n) {
                        return 3 !== t.sessionQuality$ && n.includes("/native/") ? n.replace("/native/", t.getAssetQuality$(e)) : n;
                    }, this.saveStateToStorage$ = function() {
                        Pt.setStorageData("DynamicAssets", "currentQuality", t.sessionQuality$), Pt.updateToWebStorage("DynamicAssets", !0);
                    }, this.updateSpriteFrames$ = n(function() {
                        var _$e, n, a, r, i, s, o, c, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(_$e = Q.getScene())) return [
                                        3,
                                        9
                                    ];
                                    a = _$e.getComponentsInChildren("cc.Sprite"), r = h(a), _state.label = 1;
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
                        k.emit(i.REQUEST_DYNAMIC_ATLAS, {
                            force: !0
                        });
                    }, this.collectUpgradableAssets$ = function(e) {
                        var n, a = e.output = e.input, r = !1, s = h(a);
                        try {
                            for(s.s(); !(n = s.n()).done;){
                                var o = n.value;
                                if (Ft.has(kt, o.ext) && !Ft.has(Ct, o.uuid)) {
                                    var c = o.url, l = t.replaceAssetUrl$(o.uuid, c);
                                    if (l !== c && (o.url = l, !t.upgradableAssets$.has(o.uuid))) {
                                        var u = {
                                            ext: o.ext,
                                            url: o.url,
                                            uuid: o.uuid,
                                            options: o.options,
                                            resolution: t.targetScale$
                                        };
                                        t.upgradableAssets$.set(o.uuid, u), r = !0;
                                    }
                                }
                            }
                        } catch (e) {
                            s.e(e);
                        } finally{
                            s.f();
                        }
                        r && k.emit(i.REQUEST_UPGRADE_ASSET);
                    }, this.processUpgradeQualityAsync$ = (_$e = n(function(e) {
                        var n, a, r, s, o, c, l, u, d, h, p;
                        return _ts_generator(this, function(_state) {
                            return (n = e.uuid, a = e.url, r = e.ext, s = e.options, o = e.resolution, n && a && r && s && o) ? t.isAssetUpgraded$.has(n) ? [
                                2,
                                !0
                            ] : t.failedAssets$.has(n) ? [
                                2,
                                !1
                            ] : Ft.has(Ct, n) ? [
                                2,
                                (t.isAssetUpgraded$.add(n), !0)
                            ] : _instanceof(c = ae.assets.get(n), re) ? (l = "/native@".concat(o, "x/"), u = "".concat(l, "medium/"), d = "".concat(l, "quality/"), (h = a.replace(u, d)) === a) ? [
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
                                    ae.loadAny(p, s, function(a, r) {
                                        a ? (console.warn("[DynamicAssets] processUpgrade: Upgrade error for ".concat(n.slice(0, 5)), a), t.failedAssets$.add(n), e(!1)) : (c.reset(r), c._nativeUrl = h, t.isAssetUpgraded$.add(n), k.emit(i.ASSET_QUALITY_CHANGE, {
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
                                        return _state.sent(), this.checkCacheVersion$(), ae.transformPipeline.insert(this.collectUpgradableAssets$, 2), this.sessionQuality$ < 3 && (_$e = this.targetScale$ / bt.Source, this.injectSpriteUpdate$(_$e), this.injectSpriteFrameSlicedUV$(_$e), this.injectSpriteFrameCheckRect$(_$e), this.injectSpriteFrameResolution$(_$e)), this.listenEvents$(), [
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
                vt
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
                                    if (e.isProcessing$ || !Dt.Enabled || e.sessionQuality$ >= 2) return [
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
                                    ]), e.isProcessing$ = !0, n = [], a = e.isAssetUpgraded$.size, r = h(e.upgradableAssets$.values());
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
                                        Tt.allSettled(n)
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
            }), $t);
            N._RF.pop(), N._RF.push({}, "15ecbqnx5lFtYRSJp2lOLCm", "DynamicAtlas", void 0);
            var zt = Ludex, Ht = zt.Events, Vt = zt.Configs.GameEngine.DynamicAtlas.OptimizeAtlas, Yt = Vt.AtlasDebug, qt = Vt.AutoAtlasSize, Qt = Vt.UsePowerOfTwo, Kt = Vt.AllowNonePackable, Wt = Vt.OnlyOptimizeWhenRenderTooLong, jt = zt.Utils, Xt = jt.Json, Zt = jt.Image, Jt = jt.Function, en = jt.Object, tn = jt.Mark, nn = codex.event, on = function() {
                function e() {
                    var t = this;
                    r(this, e), this.isEffective$ = !0, this.forceUpdateDynamicAtlas$ = !1, this.mutex$ = Jt.mutex(), this.renderTimes$ = [], this.lastRenderTime$ = 0, this.renderTimeInterval$ = 5e3, this.atlasInfo$ = null, this.lastAtlasInfo$ = null, this.atlasIds$ = {}, this.collectInfo$ = new Map, this.packedFrames$ = new Set, this.debugCanvases$ = {}, this.listenEvents$ = function() {
                        k.on(i.REQUEST_DYNAMIC_ATLAS, t.requestUpdateDynamicAtlas$), nn.on(Ht.SCENE_LAUNCHED, t.onSceneLaunched$), nn.catchUp(Ht.GAME_READY, t.setupRenderListeners$);
                    }, this.onSceneLaunched$ = function() {
                        t.resetPendingInfo$(), t.resetAllAtlases$();
                    }, this.resetAllAtlases$ = function() {
                        for(var _$e in t.packedFrames$.forEach(function(e) {
                            e.isValid && e._resetDynamicAtlasFrame();
                        }), t.packedFrames$.clear(), Y.instance.reset(), t.atlasInfo$ = null, t.lastAtlasInfo$ = null, t.debugCanvases$)delete t.debugCanvases$[_$e];
                    }, this.overrideDynamicAtlasManager$ = function() {
                        var _$e = Y.instance;
                        _$e.packToDynamicAtlas = t.collectSpriteFrame$, _$e.deleteAtlasSpriteFrame = t.deleteSpriteFrame$;
                    }, this.createPendingDebugCanvas$ = function() {
                        var _$e = t.createDebugCanvas$(), n = Y.instance.maxAtlasCount + 1;
                        t.debugCanvases$[n] = _$e;
                    }, this.checkRenderTimeThreshold$ = function() {
                        t.calculateMeanRenderTimeAndReset$() > 8 && t.handleLaggyFrame$(), Q.once(Z.EVENT_AFTER_RENDER, function() {
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
                        Q.on(Z.EVENT_BEFORE_RENDER, t.updateBeforeRenderTime$), Q.on(Z.EVENT_AFTER_RENDER, t.updateAfterRenderTime$), Wt && nn.catchUp(Ht.SCENE_LAUNCHED, function() {
                            Q.once(Z.EVENT_AFTER_RENDER, t.checkRenderTimeThreshold$);
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
                        if (en.hasOwn(e, "spriteFrame")) {
                            var n = e.spriteFrame;
                            if (t.isSpriteFrameValidForAtlas$(e, n)) {
                                var a = t.getTexture$(n), r = null == a ? void 0 : a.getId();
                                if (r) {
                                    var i = t.getTextureSizeFromTexture$(a);
                                    t.addTextureToCollectInfo$(r, i, e), Wt || t.requestUpdateDynamicAtlas$();
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
                        if (!a || !n || !r.active || !r.activeInHierarchy || !n.packable && !Kt) return !1;
                        if (n.original) {
                            var i = n.texture, s = n.original._texture, o = i === s, c = (null == i ? void 0 : i.getId()) === (null == s ? void 0 : s.getId());
                            if (o || c) return !1;
                        }
                        if (e.color.a < 1) return !1;
                        for(var l = r; l;){
                            var u = l.getComponent(ie);
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
                        var t = Y.instance.maxFrameSize;
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
                        var u = Math.max(c, l), d = Qt ? u : c, h = Qt ? u : l;
                        if (!(a = t.resetAtlas$(a))) return !1;
                        if (qt || d > s || h > o) {
                            a._texture.initWithSize(d, h);
                            var p = t.debugCanvases$[t.getAtlasIndex$()];
                            p && (p.width = d, p.height = h);
                        } else {
                            var _$e, f, g = t.debugCanvases$[t.getAtlasIndex$()];
                            g && (null == (f = g.getContext("2d")) || f.clearRect(0, 0, g.width, g.height));
                        }
                        return t.lastAtlasInfo$ = Xt.clone(t.atlasInfo$), !0;
                    }, this.createAtlas$ = function() {
                        var _$e = Y.instance.newAtlas();
                        if (_$e && Yt) {
                            var n = t.createDebugCanvas$(), a = t.getAtlasIndex$();
                            t.debugCanvases$[a] = n;
                        }
                        return _$e;
                    }, this.createDebugCanvas$ = function() {
                        var _$e = Y.instance.textureSize, t = document.createElement("canvas");
                        return t.width = _$e, t.height = _$e, t;
                    }, this.resetAtlas$ = function(e) {
                        var n = Y.instance, a = n._atlases.indexOf(e);
                        return t.packedFrames$.forEach(function(e) {
                            e.isValid && e._resetDynamicAtlasFrame();
                        }), t.packedFrames$.clear(), e.destroy(), a > -1 && (n._atlases.splice(a, 1), n._atlasIndex >= a && n._atlasIndex--), t.getAtlas$();
                    }, this.getAtlas$ = function(e) {
                        var n, a = Y.instance, r = a._atlases, s = a._atlasIndex;
                        return null != (n = (void 0 === r ? [] : r)[null != e ? e : s]) ? n : t.createAtlas$();
                    }, this.getAtlasIndex$ = function() {
                        return Y.instance._atlasIndex;
                    }, this.getAtlasSize$ = function() {
                        var _$e = t.getAtlas$(), n = Y.instance.textureSize;
                        return null != _$e && _$e._texture ? {
                            w: Math.max(_$e._texture.width, n),
                            h: Math.max(_$e._texture.height, n)
                        } : {
                            w: n,
                            h: n
                        };
                    }, this.requestUpdateDynamicAtlas$ = Jt.debounce(function(e) {
                        var n;
                        t.forceUpdateDynamicAtlas$ || (t.forceUpdateDynamicAtlas$ = null != (n = null == e ? void 0 : e.force) && n), t.updateDynamicAtlas$(), console.debug("[DynamicAtlas] Request update dynamic atlas", t);
                    }, 800), this.updateDynamicAtlas$ = n(function() {
                        var _$e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!Q.getScene()) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        t.mutex$.use("updateDynamicAtlas")
                                    ];
                                case 1:
                                    _$e = _state.sent(), tn.start("DynamicAtlas Process");
                                    try {
                                        if (Q.pause(), t.atlasInfo$ = null, t.prepareDrawInfo$(), !t.rebuildAtlasIfNecessary$() || !t.packCollectedTextures$()) return [
                                            2
                                        ];
                                        k.emit(i.FINISHED_DYNAMIC_ATLAS), requestAnimationFrame(t.printAtlasTextures$);
                                    } catch (e) {} finally{
                                        t.forceUpdateDynamicAtlas$ = !1, tn.stop("DynamicAtlas Process"), Q.resume(), _$e.release();
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
                                var t, n = 0, a = 0, r = h(e);
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
                                ], c = 0, l = 0, u = h(e);
                                try {
                                    for(u.s(); !(s = u.n()).done;)for(var d = s.value, p = o.length - 1; p >= 0; p--){
                                        var f = o[p];
                                        if (!(d.w > f.w || d.h > f.h)) {
                                            if (d.x = f.x, d.y = f.y, l = Math.max(l, d.y + d.h), c = Math.max(c, d.x + d.w), d.w === f.w && d.h === f.h) {
                                                var g = o.pop();
                                                g && p < o.length && (o[p] = g);
                                            } else d.h === f.h ? (f.x += d.w, f.w -= d.w) : (d.w === f.w || o.push({
                                                x: f.x + d.w,
                                                y: f.y,
                                                w: f.w - d.w,
                                                h: d.h
                                            }), f.y += d.h, f.h -= d.h);
                                            break;
                                        }
                                    }
                                } catch (e) {
                                    u.e(e);
                                } finally{
                                    u.f();
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
                        var r, i = 0, s = 0, o = [], c = t.getAtlasIndex$(), l = h(e);
                        try {
                            for(l.s(); !(r = l.n()).done;){
                                var u, d = r.value;
                                (n > 0 && i < n || a > 0 && s < a) && (i += d.w, s += d.h, t.atlasIds$[d.id] = Math.min(null != (u = t.atlasIds$[d.id]) ? u : c, c), d.x = -1, d.y = -1, o.push(d));
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
                            var i, s = h(e.components);
                            try {
                                for(s.s(); !(i = s.n()).done;){
                                    var o, c = i.value;
                                    if (c.isValid) {
                                        var l = null == c ? void 0 : c.spriteFrame;
                                        if (l) {
                                            var u = t.getTexture$(l), d = null == u ? void 0 : u.getId();
                                            d && (a.set(d, (null != (o = a.get(d)) ? o : 0) + 1), n.push(c));
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
                        if (en.hasOwn(n, "spriteFrame")) {
                            var a = n.spriteFrame;
                            a && t.tryInsertSpriteFrame$(e, a, n);
                        }
                    }, this.tryInsertSpriteFrame$ = function(e, n, a) {
                        n.original && n._resetDynamicAtlasFrame();
                        var r = Y.instance.textureBleeding, i = t.drawTexture$(e, n, r);
                        i && (n._setDynamicAtlasFrame(i), t.packedFrames$.add(n), a.setTextureDirty(), a.markForUpdateRenderData(!0), t.updateLabelUVs$(a));
                    }, this.updateLabelUVs$ = function(e) {
                        var t;
                        if (_instanceof(e, se)) {
                            var n = e.renderData;
                            if (n) {
                                n.vertDirty = !1;
                                var a = se.Assembler.getAssembler(e);
                                null == a || null == (t = a.updateUVs) || t.call(a, e);
                            }
                        }
                    }, this.printAtlasTextures$ = function() {
                        if (Yt) {
                            var _$e = Y.instance.maxAtlasCount;
                            for(var n in t.debugCanvases$){
                                var a = t.debugCanvases$[n];
                                if (a && Number(n) <= _$e) {
                                    var r = a.toDataURL("image/jpeg", .6);
                                    Zt.logImage(r, .5);
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
                            }), Yt) {
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
                            this.listenEvents$(), this.overrideDynamicAtlasManager$(), Yt && this.createPendingDebugCanvas$();
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
            N._RF.pop(), N._RF.push({}, "f18351KuT9C+7suAM5eHst5", "renderResultChallenge", void 0);
            var cn = Ludex.Utils.Error, ln = "./wideframes", un = "".concat(ln, "/result-challenge.png"), dn = "".concat(ln, "/update-challenge.png"), hn = "".concat(ln, "/images/avatar-fallback.png"), pn = {
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
                    fallbackImage: hn
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
                    fallbackImage: hn
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
                    image: "".concat(ln, "/images/crown-icon.png")
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
                    image: "".concat(ln, "/images/crown-icon.png")
                }
            }, fn = {
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
                    image: "".concat(ln, "/images/win.png")
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
                    image: "".concat(ln, "/images/lose.png")
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
                    image: "".concat(ln, "/images/draw.png")
                }
            }, gn = (e1 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = cn.lift({}), n = cn.pipe($n(e), yn(e), Sn(e), vn(e))(t), [
                                4,
                                cn.applyAsync(mn)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), cn.isFailure(a)) return [
                                2,
                                (console.error(cn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                cn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e1.apply(this, arguments);
            }), mn = function mn(e) {
                return codex.frameCapture.captureAsync({
                    name: "ResultChallenge",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, vn = function vn(e) {
                return function(t) {
                    var n = e.isPlayerFinished, a = e.isOpponentFinished, r = n || a;
                    return v(v({}, t), {}, {
                        wideframe: v(v({}, pn.wideframe), {}, {
                            image: r ? un : dn,
                            name: r ? "result-challenge-with-score-box" : "result-challenge-without-score-box"
                        })
                    });
                };
            }, $n = function $n(e) {
                return function(t) {
                    return v(v({}, t), {}, {
                        playerPhoto: v(v({}, pn.playerPhoto), {}, {
                            name: e.playerId,
                            image: e.playerPhoto
                        }),
                        opponentPhoto: v(v({}, pn.opponentPhoto), {}, {
                            name: e.opponentId,
                            image: e.opponentPhoto
                        })
                    });
                };
            }, yn = function yn(e) {
                return function(t) {
                    var n = e.isPlayerFinished, a = e.isOpponentFinished, r = e.playerScore, s = e.opponentScore;
                    return n || a ? v(v({}, t), {}, {
                        leftScore: v(v({}, pn.leftScore), {}, {
                            text: n ? "".concat(void 0 === r ? 0 : r) : "???"
                        }),
                        rightScore: v(v({}, pn.rightScore), {}, {
                            text: a ? "".concat(void 0 === s ? 0 : s) : "???"
                        })
                    }) : t;
                };
            }, Sn = function Sn(e) {
                return function(t) {
                    var n = En(e);
                    if ("none" === n) return t;
                    var a = fn[n];
                    if ("draw" === n) return v(v({}, t), {}, {
                        statusImage: a
                    });
                    var r = "win" === n ? pn.leftCrown : pn.rightCrown;
                    return v(v({}, t), {}, {
                        crown: r,
                        statusImage: a
                    });
                };
            }, En = function En(e) {
                var t = e.playerScore, n = void 0 === t ? 0 : t, a = e.opponentScore, r = void 0 === a ? 0 : a, i = e.isPlayerFinished, s = e.isOpponentFinished;
                return i && s ? n === r ? "draw" : n > r ? "win" : "lose" : "none";
            };
            N._RF.pop(), N._RF.push({}, "46949HU2K9PdYlSXXZkfABn", "renderShareLeaderboard", void 0);
            var An = Ludex.Utils.Error, wn = "./wideframes", Cn = "".concat(wn, "/images/avatar-fallback.png"), Dn = {
                wideframe: {
                    name: "share-leaderboard",
                    type: "image",
                    depth: 0,
                    image: "".concat(wn, "/share-leaderboard.png"),
                    size: [
                        1500,
                        2e3
                    ],
                    position: [
                        0,
                        0
                    ],
                    fallbackImage: Cn
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
                    fallbackImage: Cn
                },
                leaderPhoto: {
                    type: "image",
                    depth: -1,
                    size: [
                        100,
                        100
                    ],
                    fallbackImage: Cn,
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
            }, Rn = (e2 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = An.lift({}), n = An.pipe(Tn(e), xn(e), Fn)(t), [
                                4,
                                An.applyAsync(Ln)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), An.isFailure(a)) return [
                                2,
                                (console.error(An.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                An.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e2.apply(this, arguments);
            }), Ln = function Ln(e) {
                return codex.frameCapture.captureAsync({
                    name: "ShareLeaderboard",
                    width: 1500,
                    height: 2e3,
                    renderOptions: e
                });
            }, Fn = function Fn(e) {
                return v(v({}, e), {}, {
                    wideframe: Dn.wideframe
                });
            }, Tn = function Tn(e) {
                return function(t) {
                    return v(v({}, t), {}, {
                        avatar: v(v({}, Dn.avatar), {}, {
                            name: e.playerId,
                            image: e.playerPhoto
                        })
                    });
                };
            }, xn = function xn(e) {
                return function(t) {
                    for(var n = e.leaders, a = v({}, t), r = 0; r < n.length; r++){
                        var i = n[r], s = i.id, o = i.name, c = i.photo, l = i.score, u = 1292 + 180 * r, d = 1360 + 180 * r;
                        a["photo_".concat(s)] = v(v({}, Dn.leaderPhoto), {}, {
                            position: [
                                Dn.leaderPhoto.position[0],
                                u
                            ],
                            name: s,
                            image: c
                        }), a["name_".concat(s)] = v(v({}, Dn.leaderName), {}, {
                            position: [
                                Dn.leaderName.position[0],
                                d
                            ],
                            name: s,
                            text: o
                        }), a["score_".concat(s)] = v(v({}, Dn.leaderScore), {}, {
                            position: [
                                Dn.leaderScore.position[0],
                                d
                            ],
                            name: s,
                            text: "".concat(l)
                        });
                    }
                    return a;
                };
            };
            N._RF.pop(), N._RF.push({}, "c5f1cF6b7dGYLU3X1NOhOPG", "renderShareScore", void 0);
            var _n = Ludex.Utils, In = _n.Error, Mn = (_n.Valid, _n.Function), Pn = codex, Nn = Pn.frameCapture, kn = Pn.language, On = Pn.monitorError, Un = "./wideframes", zn = {
                wideframe: {
                    type: "image",
                    name: "share-score",
                    depth: 0,
                    image: "".concat(Un, "/share-score.png"),
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
                    fallbackImage: "".concat(Un, "/images/avatar-fallback.png")
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
            }, Hn = (e3 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = In.lift({}), n = In.pipe(qn(e), Qn(e), Kn, Yn)(t), [
                                4,
                                In.applyAsync(Vn)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), In.isFailure(a)) return [
                                2,
                                (console.error(In.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                In.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e3.apply(this, arguments);
            }), Vn = function Vn(e) {
                return Nn.captureAsync({
                    name: "ShareScore",
                    width: 1500,
                    height: 2e3,
                    renderOptions: e
                });
            }, Yn = function Yn(e) {
                return v(v({}, e), {}, {
                    wideframe: zn.wideframe
                });
            }, qn = function qn(e) {
                return function(t) {
                    return v(v({}, t), {}, {
                        avatar: v(v({}, zn.avatar), {}, {
                            name: "".concat(e.playerId),
                            image: e.playerPhoto
                        })
                    });
                };
            }, Qn = function Qn(e) {
                return function(t) {
                    var n = zn.playerScore.font, a = Wn(), r = jn();
                    return v(v({}, t), {}, {
                        playerScore: v(v({}, zn.playerScore), {}, {
                            text: "".concat(e.playerScore),
                            font: "".concat(n, " ").concat(r, " ").concat(a, ",")
                        })
                    });
                };
            }, Kn = function Kn(e) {
                var t = Wn(), n = jn(), a = Zn(), r = v(v({}, zn.message), {}, {
                    font: "normal ".concat(n, " ").concat(t, ","),
                    text: a
                });
                return v(v({}, e), {}, {
                    message: r
                });
            }, Wn = function Wn() {
                var n = Xn(y[kn.getCurrentLocale()]);
                return "".concat(n, "_LABEL");
            }, jn = function jn() {
                var e;
                return null != (e = $[kn.getCurrentLocale()]) ? e : "104px";
            }, Xn = function Xn(e) {
                var t, n = e.split("/"), a = null != (t = n[n.length - 1]) ? t : "", r = a.lastIndexOf(".");
                return -1 === r ? a : a.substring(0, r);
            }, Zn = function Zn() {
                try {
                    return kn.getText("share.canYouDoBetter");
                } catch (e) {
                    return null == On || On.sendException(Mn.toError(e), {
                        locale: kn.getCurrentLocale(),
                        message: "share.canYouDoBetter"
                    }), "share.canYouDoBetter";
                }
            };
            N._RF.pop(), N._RF.push({}, "3639a1RbypBKqHUo6gIZVdm", "renderShareScoreWithInvite", void 0);
            var Jn = Ludex.Utils.Error, ea = codex, ta = ea.frameCapture, na = ea.language, aa = "./wideframes", sa = {
                wideframe: {
                    type: "image",
                    name: "share-score-with-invite",
                    depth: 0,
                    image: "".concat(aa, "/invite-score.png"),
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
                    fallbackImage: "".concat(aa, "/images/avatar-fallback.png")
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
            }, oa = {
                en: "44px",
                ru: "40px"
            }, ca = (e4 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = Jn.lift({}), n = Jn.pipe(da(e), ha(e), ua)(t), [
                                4,
                                Jn.applyAsync(la)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), Jn.isFailure(a)) return [
                                2,
                                (console.error(Jn.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                Jn.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e4.apply(this, arguments);
            }), la = function la(e) {
                return ta.captureAsync({
                    name: "ShareScore",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, ua = function ua(e) {
                return v(v({}, e), {}, {
                    wideframe: sa.wideframe
                });
            }, da = function da(e) {
                return function(t) {
                    return v(v({}, t), {}, {
                        avatar: v(v({}, sa.avatar), {}, {
                            name: "".concat(e.playerId),
                            image: e.playerPhoto
                        })
                    });
                };
            }, ha = function ha(e) {
                return function(t) {
                    var n = sa.playerScore.font, a = pa(), r = fa();
                    return v(v({}, t), {}, {
                        playerScore: v(v({}, sa.playerScore), {}, {
                            text: "".concat(e.playerScore),
                            font: "".concat(n, " ").concat(r, " ").concat(a, ",")
                        })
                    });
                };
            }, pa = function pa() {
                var n = ga(y[na.getCurrentLocale()]);
                return "".concat(n, "_LABEL");
            }, fa = function fa() {
                var e;
                return null != (e = oa[na.getCurrentLocale()]) ? e : "44px";
            }, ga = function ga(e) {
                var t, n = e.split("/"), a = null != (t = n[n.length - 1]) ? t : "", r = a.lastIndexOf(".");
                return -1 === r ? a : a.substring(0, r);
            };
            N._RF.pop(), N._RF.push({}, "407a0rBEoFPs6GoXuwQofW2", "renderUpdateChallenge", void 0);
            var ma = Ludex.Utils.Error, va = "./wideframes", ya = "".concat(va, "/images/avatar-fallback.png"), Sa = {
                wideframe: {
                    type: "image",
                    name: "update-challenge",
                    depth: 0,
                    image: "".concat(va, "/update-challenge.png"),
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
                    fallbackImage: ya
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
                    fallbackImage: ya
                }
            }, Ea = (e5 = n(function(e) {
                var t, n, a;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return t = ma.lift({}), n = ma.pipe(ba(e), wa)(t), [
                                4,
                                ma.applyAsync(Aa)(n)
                            ];
                        case 1:
                            if (a = _state.sent(), ma.isFailure(a)) return [
                                2,
                                (console.error(ma.extractFailure(a)), null)
                            ];
                            return [
                                2,
                                ma.extractSuccess(a)
                            ];
                    }
                });
            }), function(t) {
                return e5.apply(this, arguments);
            }), Aa = function Aa(e) {
                return codex.frameCapture.captureAsync({
                    name: "UpdateChallenge",
                    width: 952,
                    height: 492,
                    renderOptions: e
                });
            }, wa = function wa(e) {
                return v(v({}, e), {}, {
                    wideframe: Sa.wideframe
                });
            }, ba = function ba(e) {
                return function(t) {
                    return v(v({}, t), {}, {
                        playerPhoto: v(v({}, Sa.playerPhoto), {}, {
                            image: e.playerPhoto,
                            name: e.playerId
                        }),
                        opponentPhoto: v(v({}, Sa.opponentPhoto), {}, {
                            image: e.opponentPhoto,
                            name: e.opponentId
                        })
                    });
                };
            };
            N._RF.pop(), N._RF.push({}, "5cf47s8lohMlZGIaMKBpDK0", "FrameCapture", void 0);
            var e1, e2, e3, e4, e5, Ca, Da, Ra, La = codex.frameCapture, Fa = function() {
                var a;
                function e() {
                    r(this, e);
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            return _ts_generator(this, function(_state) {
                                return La.setRenderer("share-score", Hn), La.setRenderer("result-challenge", gn), La.setRenderer("update-challenge", Ea), La.setRenderer("share-leaderboard", Rn), La.setRenderer("share-score-with-invite", ca), [
                                    2
                                ];
                            });
                        }), function() {
                            return a.apply(this, arguments);
                        })
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "2f36c+IsKJAU5s61TqQdaJ6", "HybridFileCache", void 0);
            var Ta = Ludex, xa = Ta.Events, _a = Ta.Configs.GameEngine.HybridFileCache, Ia = _a.Enabled, Ma = _a.PreviewMode, Pa = _a.BuildMode, Na = Ta.Utils, ka = Na.Object, Oa = Na.Function, Ua = Na.Json, Ba = Na.Decorator, Ga = codex, za = Ga.event, Ha = Ga.storage, Va = Ga.getBuildVersion, Ya = G.instance, qa = Ya.downloader, Qa = Ya.pipeline, Ka = Ya.fetchPipeline, Wa = /.*\/([-a-z0-9@]+)\.([^.]+)$/, ja = (Ca = Ba.throttle(1e3), Ra = e((Da = function() {
                var a;
                function e() {
                    var _$e, t = this;
                    r(this, e), this.supportTypes$ = [], this.bundledFiles$ = {}, this.originHandler$ = {}, this.nativeAssetDictionary$ = {}, this.initStorage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                Ha.addStorage("HybridFileCache", {
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
                                    switch(_$e = Pa.InvalidateMode, n = window.CommitId, a = Va().toString(), r = Ha.getStorageData("HybridFileCache", "commitId"), i = Ha.getStorageData("HybridFileCache", "buildVersion"), Ha.setStorageData("HybridFileCache", "commitId", n), Ha.setStorageData("HybridFileCache", "buildVersion", a), s = r !== n, o = i !== a, _$e){
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
                        t.supportTypes$ = Pa.SupportedExtensions;
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
                                    ]), !S || !Pa.Enabled) return [
                                        2
                                    ];
                                    n = [], a = h(t.supportTypes$);
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
                                        Oa.allSettled(n)
                                    ];
                                case 1:
                                    _state.sent(), _state.label = 2;
                                case 2:
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return za.emit(xa.BUNDLE_READY), [
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
                        if (Ma.Enabled || Pa.Enabled) {
                            var _$e = Ka.pipes[2];
                            _$e && (Ka.remove(2), Ka.insert(function(t, n) {
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
                        if (Ma.Enabled || Pa.Enabled) {
                            var _$e = Qa.pipes[2];
                            _$e && (Qa.remove(2), Qa.insert(function(t, n) {
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
                        if (Ma.Enabled && Ma.CacheUuidExtension) {
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
                                    for(var i = m(a.input), s = 0; s < i.length; s++){
                                        var o = i[s];
                                        if (o.id) {
                                            var c, l = _$e[o.id];
                                            ka.hasOwn(t.nativeAssetDictionary$, o.id) || (t.nativeAssetDictionary$[o.id] = null != (c = o.isNative) && c), l && (o.isNative = !0);
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
                            Qa.insert(n, 1), Ka.insert(n, 1), Qa.insert(r, 3), Ka.insert(r, 3);
                            var i = m(Qa.pipes), s = m(Ka.pipes), o = i[2];
                            o && (Qa.pipes[2] = a(o));
                            var c = s[2];
                            c && (Ka.pipes[2] = a(c)), console.debug("Hybrid File Cache: inject cache extension pipelines", i, s, m(Qa.pipes), m(Ka.pipes));
                        }
                    }, this.saveOriginDownloaders$ = function() {
                        var _$e, n = h(t.supportTypes$);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value, r = qa.handlers[a];
                                r && (t.originHandler$[a] = r);
                            }
                        } catch (e) {
                            n.e(e);
                        } finally{
                            n.f();
                        }
                    }, this.registerCustomDownloader$ = function() {
                        var _$e, n = h(t.supportTypes$);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value;
                                "bundle" !== a && qa.register(a, t.downloadFile$(a));
                            }
                        } catch (e) {
                            n.e(e);
                        } finally{
                            n.f();
                        }
                    }, this.listenEvents$ = function() {
                        za.on(xa.SCENE_LOADED, t.requestUpdateStorage), k.on(i.CLEAR_HYBRID_FILE_CACHE, t.clearCache$);
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
                        var n = t.match(Wa);
                        if (!n) return null;
                        var a = E(n, 3), r = (a[0], a[1]), i = a[2];
                        return !i || 0 > e.indexOf(i) ? null : "".concat(r, ":").concat(e);
                    }, this.validateDataType$ = function(e) {
                        return Array.isArray(e) && ka.hasOwn(e[0], "__type__"), !0;
                    }, this.setCache$ = function(e, n, a) {
                        var r = t.getCacheKey$(e, n);
                        if (r && t.validateDataType$(a)) {
                            var i = Ua.clone(a);
                            Ha.setStorageData("HybridFileCache", "cachedFiles", A({}, r, null != i ? i : {})), t.requestUpdateStorage();
                        }
                    }, this.getCache$ = function(e, n) {
                        var a = t.getCacheKey$(e, n);
                        if (!a) return null;
                        var r = t.getFileCaches$()[a];
                        return r || (r = t.getBundledCache$(e, a)), r ? Ua.clone(r) : null;
                    }, this.getFileCaches$ = function() {
                        var _$e;
                        return null != (_$e = Ha.getStorageData("HybridFileCache", "cachedFiles")) ? _$e : {};
                    }, this.getCachedBundles$ = function(e) {
                        var n = Ha.getStorageData("HybridFileCache", "cachedBundles");
                        if (!n) return null;
                        var a = n[e];
                        return a ? (t.bundledFiles$[e] = a, a) : null;
                    }, this.getBundledCache$ = function(e, n) {
                        var a, r = t.bundledFiles$[e];
                        return r && null != (a = r[n.replace(":".concat(e), "")]) ? a : null;
                    }, this.setBundledCache$ = function(e, n) {
                        t.bundledFiles$[e] = n, Ha.setStorageData("HybridFileCache", "cachedBundles", A({}, e, n)), t.requestUpdateStorage();
                    }, this.getCacheExtension$ = function(e) {
                        return t.getCachedExtensions$()[e];
                    }, this.setCacheExtension$ = function(e, n) {
                        Ha.setStorageData("HybridFileCache", "cachedExtensions", A({}, e, n)), t.requestUpdateStorage();
                    }, this.getCachedExtensions$ = function() {
                        var _$e;
                        return null != (_$e = Ha.getStorageData("HybridFileCache", "cachedExtensions")) ? _$e : {};
                    }, o(this, "requestUpdateStorage", Ra, this), this.clearCache$ = function() {
                        Ha.initStorageData("HybridFileCache", "cachedFiles", {}), Ha.initStorageData("HybridFileCache", "cachedBundles", {}), Ha.updateToWebStorage("HybridFileCache", !0);
                    };
                }
                return t(e, [
                    {
                        key: "init",
                        value: (a = n(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (!Ia) return [
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
                Ca
            ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                    return function() {
                        Ha.updateToWebStorage("HybridFileCache", !1);
                    };
                }
            }), Da);
            N._RF.pop(), N._RF.push({}, "14b76Yew19JgY7K+L9F5mmu", "Languages", void 0);
            var Xa = Ludex, Za = Xa.Events, Ja = Xa.Utils.Array, er = codex, tr = er.player, nr = er.event, ar = er.language, rr = er.monitorError, ir = function() {
                var a;
                function e() {
                    var _$e, _$e1, _$e2, _$e3, t = this;
                    r(this, e), this.initDefaultLanguage$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return ar.add("en", ve, !0), t.setLanguage$("en"), [
                                2
                            ];
                        });
                    }), this.initPlayerLanguage$ = n(function() {
                        var _$e, _$n, a, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(_$e = ar.getPlayerLanguage()) || !t.isSupportedLocale$(_$e)) return [
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
                                    return _state.sent(), a = null != (_$n = tr.getPlayerDataByKey("isFirstLogin")) && _$n, t.setLanguage$(_$e, a), [
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
                        return Ja.has(w, e);
                    }, this.listenEvent$ = function() {
                        nr.on(Za.REQUEST_LANGUAGE, t.handleLanguageRequested$), k.on(i.PRELOAD_LANGUAGE, t.handlePreloadLanguage$), k.on(i.CHOOSE_LANGUAGE, t.handleChooseLanguage$);
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
                                    return a = _state.sent(), ar.add(e, a, n), [
                                        2
                                    ];
                            }
                        });
                    }), function(t) {
                        return _$e.apply(this, arguments);
                    }), this.setLanguage$ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        ar.choose(e), t && tr.setSetting("language", e);
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
                                    return e1 = _state.sent(), console.error(i = t.toError$(e1, "handleLanguageRequested")), null == rr || rr.sendException(i), null == r || r(e1), [
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
                            console.error(i), null == rr || rr.sendException(i);
                        }
                        else console.warn("Choose language ".concat(n, " not found"));
                    }, this.getLangData$ = (_$e2 = n(function(e) {
                        var t, n;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if ("en" === e) return [
                                        2,
                                        ve
                                    ];
                                    return t = C[e], [
                                        4,
                                        b.loadJsonAsync(t)
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
                                    return e1 = _state.sent(), console.error(o = t.toError$(e1, "handleLanguageRequested")), null == rr || rr.sendException(o), null == s || s(o), [
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
                                        return t = _state.sent(), console.error(_$e = this.toError$(t, "handleLanguageRequested")), null == rr || rr.sendException(_$e), [
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
            N._RF.pop(), N._RF.push({}, "fb33bK/6Y5FAas5AwmmBM/X", "Leaderboards", void 0);
            var sr = Ludex, or = sr.Configs, cr = or.Mockup, lr = cr.Leaderboards, ur = cr.GameSDK.Player, dr = or.Leaderboards, hr = sr.Utils.Number, pr = codex.leaderboard, fr = function() {
                function e() {
                    var t = this;
                    r(this, e), this.handleWhenGameSDKStarted$ = function() {
                        lr.Enabled ? t.setupLeaderboardsMockup$() : t.setupLeaderboards$();
                    }, this.setupLeaderboards$ = n(function() {
                        return _ts_generator(this, function(_state) {
                            return t.setupLeaderboardByConfigs$(), [
                                2
                            ];
                        });
                    }), this.setupLeaderboardByConfigs$ = function() {
                        var _$e, t = dr.LeaderboardList, n = h(t);
                        try {
                            for(n.s(); !(_$e = n.n()).done;){
                                var a = _$e.value, r = a.Id, i = a.Name;
                                pr.addLeaderboard({
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
                                    t = lr.NumOfLeaders, n = dr.LeaderboardList, a = h(n), _state.label = 1;
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
                                        pr.createLeaderboardAsync({
                                            _id: s,
                                            name: i,
                                            numberOfLeaders: hr.random(t.Max - t.Min) + t.Min
                                        })
                                    ];
                                case 3:
                                    o = _state.sent(), pr.addLeaderboard({
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
                                    return _$e = "Mock Friends Leaderboard", t = 0, (n = ur.ConnectedPlayers).Enabled && (t = hr.random(n.NumOfPlayers - 1) + 1), [
                                        4,
                                        pr.createLeaderboardAsync({
                                            _id: "friends-leaderboard-id",
                                            name: _$e,
                                            numberOfLeaders: t
                                        })
                                    ];
                                case 1:
                                    return a = _state.sent(), pr.addLeaderboard({
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
                                        D.requestTournamentDataAsync()
                                    ];
                                case 1:
                                    return _state.sent().forEach(function(e) {
                                        var t = e.payload.leaderboardId;
                                        t && (pr.isExistLeaderboardId(t) || pr.addLeaderboard({
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
            N._RF.pop(), N._RF.push({}, "e7bf73g4jJGuI9FqvW5YBsS", "PerformanceMonitor", void 0);
            var gr = Ludex, mr = gr.Utils.Mark, vr = gr.Events, $r = gr.Configs.PerformanceMonitor.FpsTracking, yr = codex.event, Sr = function() {
                function e() {
                    var t = this;
                    r(this, e), this.markName$ = "FPS Tracking", this.listenEvents$ = function() {
                        yr.catchUp(vr.GAME_READY, t.handleStartTraceFps$);
                    }, this.unListenEvents$ = function() {
                        Q.off(Z.EVENT_AFTER_UPDATE, t.handleLateUpdate$);
                    }, this.handleStartTraceFps$ = function() {
                        t.startTraceFps$(), Q.on(Z.EVENT_AFTER_UPDATE, t.handleLateUpdate$);
                    }, this.startTraceFps$ = function() {
                        t.mark && (t.mark.measure(t.markName$), t.mark.start(t.markName$));
                    }, this.handleLateUpdate$ = function() {
                        if (t.mark) {
                            if (t.fpsTraceDuration$ -= k.deltaTime, t.fpsTraceDuration$ <= 0 && !t.traceStopped$) return t.traceStopped$ = !0, t.unListenEvents$(), t.updateFPS$(), void t.mark.stop(t.markName$);
                            t.fpsTraceIntervalTimer$ -= k.deltaTime, t.fpsTraceIntervalTimer$ > 0 || (t.fpsTraceIntervalTimer$ = t.fpsTraceInterval$, t.updateFPS$(), t.mark.stop(t.markName$), t.startTraceFps$());
                        }
                    }, this.updateFPS$ = function() {
                        var _$e, n;
                        if (t.mark) {
                            var a = t.getFPS$(), r = t.getDrawCalls$(), i = t.getDeviceRender$(), s = t.getTextureMemory$();
                            t.minFps$ = Math.min(null != (_$e = t.minFps$) ? _$e : a, a), t.maxFps$ = Math.max(null != (n = t.maxFps$) ? n : 0, a), t.mark.putMetric(t.markName$, "FPS Metric", a), t.mark.putAttr(t.markName$, "Page Title", document.title), t.mark.putAttr(t.markName$, "Device Render", i), t.mark.putAttr(t.markName$, "Draw Calls", r.toString()), t.mark.putAttr(t.markName$, "Texture Memory", s.toFixed(2)), t.mark.putAttr(t.markName$, "Min FPS", t.minFps$.toString()), t.mark.putAttr(t.markName$, "Max FPS", t.maxFps$.toString()), console.debug("FPS: ".concat(a, " Min: ").concat(t.minFps$, " Max: ").concat(t.maxFps$, ", draw calls: ").concat(r, ", texture memory: ").concat(s.toFixed(2), "MB"));
                        }
                    }, this.getFPS$ = function() {
                        return Q.root && Math.floor(Q.root.fps) || 0;
                    }, this.getDrawCalls$ = function() {
                        return Q.root && Q.root.device.numDrawCalls || 0;
                    }, this.getDeviceRender$ = function() {
                        return Q.root && Q.root.device.renderer || "Unknown";
                    }, this.getTextureMemory$ = function() {
                        return Q.root && Q.root.device.memoryStatus.textureSize / 1048576 || 0;
                    };
                }
                return t(e, [
                    {
                        key: "mark",
                        get: function get() {
                            return $r.Enabled ? mr : null;
                        }
                    },
                    {
                        key: "init",
                        value: function value() {
                            var _$e = $r.TrackingDuration, t = $r.TrackingInterval;
                            this.mark && (this.fpsTraceDuration$ = null != _$e ? _$e : 60, this.fpsTraceInterval$ = null != t ? t : 10, this.fpsTraceIntervalTimer$ = this.fpsTraceInterval$, this.traceStopped$ = !1, this.listenEvents$());
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "58248LBip1DBrMjK0UWw2rM", "RemoteConfig", void 0);
            var Er = Ludex.Events, Ar = codex.event, wr = function() {
                function e() {
                    var t = this;
                    r(this, e), this.listenEvents$ = function() {
                        Ar.on(Er.REQUEST_HOT_RELOAD, t.handleHotReload$), Ar.on(Er.REQUEST_UPDATE_CONFIG, t.handleUpdateConfig$);
                    }, this.handleHotReload$ = function() {
                        k.restart();
                    }, this.handleUpdateConfig$ = function(e) {
                        if ("Gameplay" === e.type) {
                            k.emit(i.GAMEPLAY_UPDATE_CONFIG, e.config);
                            var t = e.id, n = e.type;
                            Ar.emit(Er.REMOTE_CONFIG_UPDATED, {
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
            N._RF.pop(), N._RF.push({}, "c34a93D1BREiKms1T21AkQS", "PluginsManager", void 0);
            var br = Ludex.Configs, Cr = br.Languages, Dr = br.Leaderboards, Rr = br.RemoteConfig, Lr = br.FrameCapture, Fr = br.DailyRewards, Tr = br.AdaptivePerformance, xr = br.Debugger, _r = xr.CanvasRecorder, Ir = xr.Profiler, Mr = br.GameEngine, Pr = Mr.HybridFileCache, Nr = Mr.DynamicAssets, kr = Mr.DynamicAtlas, Or = function() {
                function e() {
                    r(this, e), this.initHybridFileCache$ = function() {
                        Pr.Enabled && (new ja).init();
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
                            Cr.Enabled && (new ir).init();
                        }
                    },
                    {
                        key: "initLeaderboards",
                        value: function value() {
                            Dr.Enabled && (new fr).init();
                        }
                    },
                    {
                        key: "initRemoteConfig",
                        value: function value() {
                            Rr.Enabled && (new wr).init();
                        }
                    },
                    {
                        key: "initDynamicAtlas",
                        value: function value() {
                            kr.OptimizeAtlas.Enabled && Y.instance.enabled && (new on).init();
                        }
                    },
                    {
                        key: "initDynamicAssets",
                        value: function value() {
                            Nr.Enabled && (new Gt).init();
                        }
                    },
                    {
                        key: "initCanvasRecorder",
                        value: function value() {
                            _r.Enabled && (new mt).init();
                        }
                    },
                    {
                        key: "initPerformanceMonitor",
                        value: function value() {
                            Ir.Enabled && (new Sr).init();
                        }
                    },
                    {
                        key: "initAdaptivePerformance",
                        value: function value() {
                            Tr.Enabled && (new ft).init();
                        }
                    },
                    {
                        key: "initFrameCapture",
                        value: function value() {
                            Lr.Enabled && (new Fa).init();
                        }
                    },
                    {
                        key: "initDailyRewards",
                        value: function value() {
                            Fr.Enabled && (new Et).init();
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "ac8b03T+rFB061sXoEEsCUH", "SceneManager", void 0);
            var Ur = codex, Br = Ur.event, Gr = Ur.monitorError, zr = Ludex, Hr = zr.Events, Vr = zr.Configs.PerformanceMonitor, Yr = zr.Utils, qr = Yr.Mark, Qr = Yr.Function, Kr = GameSDK, Wr = function() {
                function e() {
                    var _$e, _$e1, _$e2, t = this;
                    r(this, e), this.markName$ = "Load Scene", this.testScene$ = {}, this.isClearedMark$ = !1, this.callbackSwitchScene$ = null, this.mutex$ = Qr.mutex(), this.listenEvents$ = function() {
                        Br.catchUp(Hr.MARK_IS_TEST_SCENE, t.setTestScene$), Br.on(Hr.SWITCH_SCENE, t.switchScene$), Br.on(Hr.PRELOAD_SCENE, t.preloadScene$);
                    }, this.correctSceneName$ = function(e) {
                        var n = Q.getScene(), a = t.getTestScene$();
                        return a ? a === (null == n ? void 0 : n.name) ? null : a : null != n && n.isValid ? e === R.DASHBOARD_SCENE ? R.GAME_SCENE : e === n.name ? null : e : e;
                    }, this.switchScene$ = (_$e = n(function(e) {
                        var n, a, r;
                        return _ts_generator(this, function(_state) {
                            return n = e.sceneName, a = e.sceneData, console.debug("Switching", r = t.correctSceneName$(n), null != a ? a : {}), r && (T.isSceneLoaded(r) || L.showLoadingFullScreen(r), t.startScene$(v(v({}, e), {}, {
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
                                    return s = _state.sent(), t.setSceneData$(s, null != a ? a : {}), T.markIsSceneLoaded(n), Br.emit(Hr.SCENE_LOADED, {
                                        sceneName: n
                                    }), t.clearTestMark$(), t.stopMeasure$(), t.handleSceneLaunched$(n, a), [
                                        3,
                                        7
                                    ];
                                case 5:
                                    return e1 = _state.sent(), console.warn("SceneManager.startScene", Qr.toError(e1)), t.stopMeasure$(!1), [
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
                                    if ((n = e.sceneName) === R.DASHBOARD_SCENE) return [
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
                                    return _state.sent(), T.markIsSceneLoaded(n), Br.emit(Hr.SCENE_LOADED, {
                                        sceneName: n,
                                        isPreload: !0
                                    }), t.stopMeasure$(), a.release(), [
                                        3,
                                        5
                                    ];
                                case 4:
                                    return e1 = _state.sent(), console.warn("SceneManager.preloadScene", Qr.toError(e1)), t.stopMeasure$(!1), a.release(), [
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
                            var r = ae.main;
                            r ? r.loadScene(e, null != t ? t : null, function(e, t) {
                                e ? a(e) : n(t);
                            }) : a(Error("Main bundle not found"));
                        });
                    }, this.runSceneAsync$ = function(e) {
                        return new Promise(function(t, n) {
                            Q.runScene(e, void 0, function(e, a) {
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
                        Kr.setLoadingProgress(i);
                    }, this.clearTestMark$ = function() {
                        t.isClearedMark$ || (Br.clear(Hr.MARK_IS_TEST_SCENE), t.isClearedMark$ = !0);
                    }, this.handleSceneLaunched$ = function(e, n) {
                        var a;
                        L.hideLoadingFullScreen(e), F.switchSceneTracking(), null == Gr || Gr.addMetadata({
                            currentScene: e
                        }), null == (a = t.callbackSwitchScene$) || a.call(t, {
                            sceneName: e,
                            sceneData: n
                        }), Br.emit(Hr.SCENE_LAUNCHED, {
                            sceneName: e
                        }), Q.once(Z.EVENT_AFTER_RENDER, function() {
                            Br.emit(Hr.SCENE_RENDERED, {
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
                                data: v(v({}, n), t)
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
                            return Vr.LoadResources ? qr : null;
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "617b2SRAL5CyL75C998xBnx", "ScreenManager", void 0);
            var jr = Ludex, Xr = jr.Events, Zr = jr.Utils, Jr = Zr.Object, ei = Zr.Valid, ti = Zr.Time, ni = codex, ai = ni.event, ri = ni.monitorError, ii = function() {
                function e() {
                    var _$e, _$e1, _$e2, _$e3, _$e4, t = this;
                    r(this, e), this.screens$ = {}, this.onPrefabReadyCallbacks$ = {}, this.bindEventHandlers$ = function() {
                        ai.on(Xr.OPEN_SCREEN, t.handleOpenScreen$), ai.on(Xr.CLOSE_SCREEN, t.handleCloseScreen$), ai.on(Xr.PRELOAD_SCREEN, t.handlePreloadScreen$), ai.on(Xr.PRELOAD_SCREENS, t.handlePreloadScreens$), ai.on(Xr.SWITCH_SCENE, t.handleSwitchScene$), k.on("DEBUG_REQUEST_SCREEN_STATES", t.handleRequestScreenStates$);
                    }, this.handleRequestScreenStates$ = function() {
                        var _$e = t.screens$;
                        k.emit("DEBUG_SCREEN_STATES", _$e);
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
                        var _$e = Q.getScene();
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
                        }) : t.hasPrefab$(e) ? v({}, e) : {
                            state: "queued",
                            order: e.order,
                            name: e.name
                        };
                    }, this.validateScene$ = function(e) {
                        return !!e || (console.warn("No scene found for preloading screens"), !1);
                    }, this.initScreens$ = function(e) {
                        var n = t.getScreenHolder$();
                        if (null != n && n.enabled) {
                            var a, r = n.screens, i = h(r);
                            try {
                                for(i.s(); !(a = i.n()).done;){
                                    var s = a.value, o = x[s.key];
                                    if (o) {
                                        var c = t.screens$[o];
                                        t.screens$[o] = c ? v(v({}, c), {}, {
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
                            if (!ei.isEmpty(l)) {
                                var u = l.map(function(e) {
                                    return null == e ? void 0 : e.node.name;
                                }).join(", ");
                                console.info("📺 Active Screens in ".concat(e.name, ": ").concat(u)), t.addScreens$(l);
                            }
                        }
                    }, this.getScreenHolder$ = function() {
                        var _$e, t = Q.getScene();
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
                        return ei.isString(e) && Jr.vals(x).includes(e);
                    }, this.addScreenQueues$ = function(e) {
                        var n = t.getScreenHolder$();
                        if (null != n && n.isValid) {
                            var a, r = h(e);
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
                                    ]), t.screens$[e.name] = v(v({}, e), {}, {
                                        state: "loading"
                                    }), ai.emit(Xr.LOADING_SCREEN, {
                                        screenName: e.name
                                    }), [
                                        4,
                                        b.loadPrefabAsync("screens/".concat(e.name))
                                    ];
                                case 1:
                                    if (null === (_$n = _state.sent())) throw Error("ScreenManager.loadScreen: Failed to load prefab: ".concat(e.name));
                                    return t.screens$[e.name] = v(v({}, e), {}, {
                                        state: "prefab",
                                        prefab: _$n,
                                        useCount: 0
                                    }), console.debug("ScreenManager.loadScreen: ".concat(e.name, " loaded successfully")), ai.emit(Xr.SCREEN_LOADED, {
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
                            }), r = h(a);
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
                            if (!_instanceof(e.prefab, oe)) throw Error("ScreenManager.getScreen: Invalid prefab ".concat(e.name));
                            if ((a = ce(e.prefab)).name = e.name, !(r = a.getComponent("BaseScreen"))) throw Error("ScreenManager.getScreen: Invalid screen ".concat(e.name));
                            return [
                                2,
                                (n.node.addChild(a), a.active = !1, t.screens$[e.name] = v(v({}, e), {}, {
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
                                    ]), _.setBlockInput(!0), [
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
                                    return _.setBlockInput(!1), [
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
                            t.onPrefabReadyCallbacks$[e] = [].concat(m(i), [
                                s
                            ]);
                        });
                    }, this.incrementUseCount$ = function(e) {
                        var n = t.screens$[e];
                        t.hasPrefab$(n) && (t.screens$[e] = v(v({}, n), {}, {
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
                                    }, ai.emit(Xr.OPENING_SCREEN, r), t.updateScreenState(n, "opening", {
                                        startTime: Date.now()
                                    }), [
                                        4,
                                        ti.sleepAsync(0)
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
                                    a.screen.node.active && (ai.emit(Xr.CLOSING_SCREEN, {
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
                        F.trackCurrentPage(e, t), t ? null == ri || ri.addMetadata({
                            currentScreen: e
                        }) : null == ri || ri.removeMetadata("currentScreen");
                    }, this.closeAllScreens = function() {
                        for(var _$e in t.screens$)t.closeScreen(_$e, !1);
                    }, this.getOrTryAddScreen$ = function(e) {
                        var n = t.screens$[e];
                        return void 0 === n ? (console.debug("ScreenManager.getOrTryAddScreen: Adding new screen (".concat(e, ") to queue")), t.addScreenQueues$([
                            e
                        ]), t.screens$[e]) : n;
                    }, this.emitPrefabReady$ = function(e) {
                        var n, a, r = null != (n = t.onPrefabReadyCallbacks$[e]) ? n : [], i = h(r);
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
                            a ? this.screens$[e] = v(v(v({}, a), n), {}, {
                                state: t
                            }) : console.warn("ScreenManager.updateScreenState: Entry not found for ".concat(e));
                        }
                    }
                ]), e;
            }();
            N._RF.pop(), N._RF.push({}, "9d892ZsSyxHSITF2VHJ1zpy", "LudosSystem", void 0);
            var si, oi = Ludex, ci = oi.Configs, li = ci.Core, ui = ci.Ads, di = ci.Match, hi = ci.Player, pi = ci.GameEngine.HybridFileCache, fi = oi.Events, gi = oi.Plugins.Analytics, mi = (void 0 === gi ? {} : gi).Events, vi = oi.Utils, $i = vi.Device, yi = vi.Time, Si = codex, Ei = Si.context, Ai = Si.event, wi = Si.analytics, bi = Si.monitorError;
            new (t(function e() {
                var t = this;
                r(this, e), this.adsManager$ = null, this.matchManager$ = null, this.playerManager$ = null, this.logEngineReady$ = function() {
                    Ai.catchUp(fi.ANALYTICS_READY, function() {
                        mi && wi.event(mi.ENGINE_READY);
                    });
                }, this.createManager$ = function() {
                    t.sceneManager$ = new Wr, t.screenManager$ = new ii, t.engineManager$ = new Ge, t.layoutManager$ = new et, t.pluginsManager$ = new Or, ui.Enabled && (t.adsManager$ = new Le), di.Enabled && (t.matchManager$ = new it), hi.Enabled && (t.playerManager$ = new dt);
                }, this.initManagers$ = function() {
                    var _$e, n, a;
                    t.sceneManager$.init(), t.screenManager$.init(), t.engineManager$.init(), t.layoutManager$.init(), t.pluginsManager$.init(), null == (_$e = t.adsManager$) || _$e.init(), null == (n = t.matchManager$) || n.init(), null == (a = t.playerManager$) || a.init();
                }, this.listenEvents$ = function() {
                    Ai.catchUp(fi.CORE_BOOTING, t.handleWhenCoreBoot$), Ai.catchUp(fi.CORE_STARTING, t.handleWhenCoreStart$), Ai.catchUp(fi.CORE_READY, t.handleWhenCoreReady$), s.listenLayoutChanges(), t.sceneManager$.onSwitchScene(t.handleSwitchScene$);
                }, this.handleWhenCoreBoot$ = function() {
                    console.warn("Ludos System: Core boot", {
                        inited: k.inited,
                        game: k
                    }), k.inited ? t.handleCocosInit$() : k.once(le.EVENT_GAME_INITED, t.handleCocosInit$);
                }, this.handleCocosInit$ = function() {
                    Ai.emit(fi.REQUEST_CORE_START);
                }, this.handleWhenCoreStart$ = function() {
                    var _$e, n;
                    null == (_$e = t.playerManager$) || _$e.setupDefaultGameData(), null == (n = t.matchManager$) || n.setupDefaultMatchData();
                }, this.handleWhenCoreReady$ = function() {
                    var _$e;
                    pi.Enabled || Ai.emit(fi.BUNDLE_READY), Ai.catchUp(fi.BUNDLE_READY, t.initPlugins$), null == (_$e = t.playerManager$) || _$e.syncPlatformPlayerData(), mi && wi.event(mi.LOAD_START), Ai.catchUp(fi.BUNDLE_READY, t.processPreStartGame$);
                }, this.processPreStartGame$ = function() {
                    Ai.catchUp(fi.SCENE_LOADED, t.preloadScenes$), Ai.catchUp(fi.SCENE_LAUNCHED, t.processBootSceneLaunched$), t.runBootScene$();
                }, this.processBootSceneLaunched$ = n(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!li.StartSDKAfterLoadGame) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    Ai.waitTo(fi.SCENE_LOADED)
                                ];
                            case 1:
                                _state.sent(), _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    GameSDK.extra.waitSDKInitiatedAsync()
                                ];
                            case 3:
                                if (_state.sent(), console.debug("Game paused", k.isPaused()), !k.isPaused()) return [
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
                                k.once(le.EVENT_RESUME, e);
                            })
                        ];
                    });
                }), this.runBootScene$ = function() {
                    GameSDK.isGameSDK("Playable") ? T.switchScene(R.PLAYABLE_SCENE) : T.switchScene(R.BOOT_SCENE);
                }, this.preloadScenes$ = function() {
                    GameSDK.isGameSDK("Playable") || ("solo" === Ei.getSessionContextType() ? T.preloadDashboardScene() : T.preloadGameScene());
                }, this.processStartGame$ = n(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return console.groupEnd(), mi && wi.event(mi.LOAD_COMPLETE), Ai.catchUp(fi.PLAYER_INFO_LOADED, t.startProcessContextData$), [
                                    4,
                                    Ai.waitTo(fi.SCENE_RENDERED, 1e3).catch(function() {})
                                ];
                            case 1:
                                return _state.sent(), [
                                    4,
                                    yi.sleepAsync(100)
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
                    L.preloadScreens(), console.groupEnd();
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
                                }, 1e3) : null == bi || bi.sendException(_instanceof(n, Error) ? n : Error(JSON.stringify(n))), [
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
                                mi && wi.event(mi.APP_READY), _state.label = 1;
                            case 1:
                                return _state.trys.push([
                                    1,
                                    3,
                                    4,
                                    5
                                ]), null == (_$e = t.playerManager$) || _$e.requestConnectedPlayers(), I.applyCustomFlows(), [
                                    4,
                                    Ei.processContextData()
                                ];
                            case 2:
                                return _state.sent(), [
                                    3,
                                    5
                                ];
                            case 3:
                                return console.error("startProcessContextData", e = _state.sent()), _instanceof(e, Error) && (null == bi || bi.sendException(e)), [
                                    3,
                                    5
                                ];
                            case 4:
                                return Ai.emit(fi.GAME_READY), t.trackDeviceInfo$("begin"), window.addEventListener("beforeunload", function() {
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
                        var t = $i.isES5(), n = $i.heapMemory(), a = $i.pixelRatio(), r = $i.audioState(), i = $i.orientation(), s = $i.gpuRenderer(), o = $i.isSupportWebp();
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
                            webgl_version: $i.webglVersion(),
                            max_texture_size: $i.maxTextureSize(),
                            hardware_concurrency: $i.hardwareConcurrency()
                        };
                    } catch (e) {
                        return console.warn("Error getting device info", e), null;
                    }
                }, this.trackDeviceInfo$ = function(e) {
                    var n = t.getDeviceInfo$(e);
                    n && F.trackDeviceInfo(n);
                }, console.groupCollapsed("📦 Ludos System"), this.logEngineReady$(), this.createManager$(), this.initManagers$(), this.listenEvents$(), console.groupEnd(), window.__sdkLoad.ensure(10);
            })), N._RF.pop(), N._RF.push({}, "c7df3pBHqRChZTjXMfWIy6H", "Optimized2DPipeline", void 0);
            var Ci = ue.ccclass, Di = ue.executeInEditMode, Ri = "Optimized2DPipeline", Li = "default", Fi = de.SceneFlags.UI | de.SceneFlags.BLEND | de.SceneFlags.OPAQUE | de.SceneFlags.DRAW_INSTANCING, Ti = function() {
                function e() {
                    var t = this;
                    r(this, e), this.clearColor$ = new he.Color(0, 0, 0, 1), this.viewport$ = new he.Viewport, this.lightInfo$ = new de.LightInfo, this.isValidCamera$ = function(e) {
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
                                    t.addRenderWindow(o, he.Format.RGBA8, i, s, r), this.syncViewport$(a, i, s), this.syncClearColor$(a);
                                    var c = t.addRenderPass(i, s, Li);
                                    c.setViewport(this.viewport$);
                                    var l = a.clearFlag & he.ClearFlagBit.COLOR ? he.LoadOp.CLEAR : he.LoadOp.LOAD;
                                    a.clearFlag & he.ClearFlagBit.COLOR && (this.clearColor$.x = a.clearColor.x, this.clearColor$.y = a.clearColor.y, this.clearColor$.z = a.clearColor.z, this.clearColor$.w = a.clearColor.w), c.addRenderTarget(o, l, he.StoreOp.STORE, this.clearColor$), c.addQueue(de.QueueHint.BLEND, Li).addSceneOfCamera(a, this.lightInfo$, Fi);
                                }
                            }
                        }
                    }
                ]), e;
            }();
            if (de) {
                var xi = new Ti;
                de.setCustomPipeline(Ri, xi), console.info("[".concat(Ri, "] Registered successfully."));
            }
            Ci("Optimized2DPipeline")(si = Di(si = function(e) {
                M(a, e);
                var n = P(a);
                function a() {
                    return r(this, a), n.apply(this, arguments);
                }
                return t(a, [
                    {
                        key: "start",
                        value: function value() {}
                    }
                ]), a;
            }(pe)) || si), N._RF.pop(), N._RF.push({}, "a3a11eRcsNI5aahAZL2xA8X", "ScreenEntry", void 0), N._RF.pop();
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
