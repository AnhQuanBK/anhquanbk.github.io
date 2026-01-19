function _instanceof(left, right) {
    return null != right && "u" > typeof Symbol && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _type_of(obj) {
    return obj && "u" > typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}
System.register([], function(_export, _context) {
    "use strict";
    var cc;
    function _typeof(o) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        })(o);
    }
    function _classCallCheck(instance, Constructor) {
        if (!_instanceof(instance, Constructor)) throw TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", {
            writable: !1
        }), Constructor;
    }
    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return (void 0 === key ? "undefined" : _type_of(key)) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
        if ("object" !== _typeof(input) || null === input) return input;
        var prim = input[Symbol.toPrimitive];
        if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" !== _typeof(res)) return res;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === hint ? String : Number)(input);
    }
    return {
        setters: [],
        execute: function execute() {
            _export("Application", function() {
                function Application() {
                    _classCallCheck(this, Application), this.settingsPath = 'src/settings.json', this.showFPS = !1;
                }
                return _createClass(Application, [
                    {
                        key: "init",
                        value: function init(engine) {
                            (cc = engine).game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this)), cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
                        }
                    },
                    {
                        key: "onPostInitBase",
                        value: function onPostInitBase() {}
                    },
                    {
                        key: "onPostSystemInit",
                        value: function onPostSystemInit() {}
                    },
                    {
                        key: "start",
                        value: function start() {
                            return cc.game.init({
                                debugMode: cc.DebugMode.ERROR,
                                settingsPath: '',
                                overrideSettings: {
                                    profiling: {
                                        showFPS: !1
                                    },
                                    CocosEngine: "3.8.7",
                                    engine: {
                                        debug: !1,
                                        platform: "web-mobile",
                                        customLayers: [
                                            {
                                                name: "BACKGROUND",
                                                bit: 0
                                            },
                                            {
                                                name: "UI",
                                                bit: 1
                                            },
                                            {
                                                name: "TEXT",
                                                bit: 2
                                            },
                                            {
                                                name: "CHAR",
                                                bit: 3
                                            },
                                            {
                                                name: "EFFECT",
                                                bit: 4
                                            },
                                            {
                                                name: "OVERLAY",
                                                bit: 7
                                            },
                                            {
                                                name: "SCREEN",
                                                bit: 10
                                            },
                                            {
                                                name: "STATS",
                                                bit: 17
                                            }
                                        ],
                                        sortingLayers: [
                                            {
                                                id: 0,
                                                name: "default",
                                                value: 0
                                            },
                                            {
                                                id: 1,
                                                name: "Sorting Layer 1",
                                                value: 1
                                            },
                                            {
                                                id: 2,
                                                name: "Sorting Layer 2",
                                                value: 2
                                            }
                                        ],
                                        macros: {
                                            ENABLE_MULTI_TOUCH: !1,
                                            ENABLE_WEBGL_ANTIALIAS: !1,
                                            BATCHER2D_MEM_INCREMENT: 288,
                                            MAX_LABEL_CANVAS_POOL_SIZE: 200,
                                            CUSTOM_PIPELINE_NAME: "Optimized2DPipeline",
                                            ENABLE_TILEDMAP_CULLING: !1
                                        },
                                        builtinAssets: [
                                            "60f7195c-ec2a-45eb-ba94-8955f60e81d0",
                                            "1c02ae6f-4492-4915-b8f8-7492a3b1e4cd",
                                            "810e96e4-e456-4468-9b59-f4e8f39732c0",
                                            "efe8e2a3-eace-427b-b4f1-cb8a937ec77d",
                                            "e9aa9a3e-5b2b-4ac7-a2c7-073de2b2b24f",
                                            "8bbdbcdd-5cd4-4100-b6d5-b7c9625b6107",
                                            "50f4348b-c883-4e2f-8f11-ce233b859fa1",
                                            "fda095cb-831d-4601-ad94-846013963de8",
                                            "f92806d7-1768-443f-afe8-12bcde84d0f0",
                                            "dd3a144d-ab7f-41f0-82b8-2e43a090d496",
                                            "f0416e68-0200-4b77-a926-4f9d16e494da",
                                            "970b0598-bcb0-4714-91fb-2e81440dccd8",
                                            "bcd64cc6-2dd9-43f6-abbe-66318d332032",
                                            "d930590d-bb92-4cc8-8bd1-23cd027f9edf",
                                            "a3cd009f-0ab0-420d-9278-b9fdab939bbc",
                                            "6a2d0734-bd9e-4ddf-946e-caa52498cb75",
                                            "c27215d8-6835-4b68-bfbb-bdeac6100c04",
                                            "b5d6115f-0370-4d7c-aad3-c194cc71cf98"
                                        ]
                                    },
                                    animation: {
                                        customJointTextureLayouts: []
                                    },
                                    assets: {
                                        server: "",
                                        remoteBundles: [],
                                        subpackages: [],
                                        preloadBundles: [
                                            {
                                                bundle: "systems"
                                            },
                                            {
                                                bundle: "resources"
                                            },
                                            {
                                                bundle: "main"
                                            }
                                        ],
                                        bundleVers: {},
                                        preloadAssets: [],
                                        projectBundles: [
                                            "internal",
                                            "resources",
                                            "main",
                                            "loadable",
                                            "systems"
                                        ],
                                        downloadMaxConcurrency: 15
                                    },
                                    plugins: {
                                        jsList: []
                                    },
                                    scripting: {
                                        scriptPackages: [
                                            "../src/chunks/bundle.js"
                                        ]
                                    },
                                    launch: {
                                        launchScene: ""
                                    },
                                    screen: {
                                        exactFitScreen: !1,
                                        designResolution: {
                                            width: 750,
                                            height: 1583,
                                            policy: 4
                                        },
                                        orientation: "auto"
                                    },
                                    rendering: {
                                        renderPipeline: "22a135d0-b2ef-4c1b-86d2-5bbbd88e4875",
                                        customPipeline: !0,
                                        effectSettingsPath: "src/effect.bin"
                                    },
                                    splashScreen: {
                                        displayRatio: 1,
                                        totalTime: 0,
                                        watermarkLocation: "default",
                                        autoFit: !0
                                    },
                                    physics: {
                                        physicsEngine: "",
                                        gravity: {
                                            x: 0,
                                            y: -20,
                                            z: 0
                                        },
                                        allowSleep: !0,
                                        sleepThreshold: 0.1,
                                        autoSimulation: !0,
                                        fixedTimeStep: 0.0166667,
                                        maxSubSteps: 1,
                                        defaultMaterial: "cf66a3b2-1769-4613-ba82-ca95a3b44611",
                                        layer: [
                                            {
                                                name: "SCREEN",
                                                value: 524288
                                            }
                                        ],
                                        script: {
                                            importMap: "project://import-map.json",
                                            loose: !1,
                                            allowDeclareFields: !1,
                                            useDefineForClassFields: !1
                                        },
                                        custom_joint_texture_layouts: [],
                                        "sorting-layer": {
                                            layers: [
                                                {
                                                    id: 0,
                                                    name: "default",
                                                    value: 0
                                                }
                                            ],
                                            increaseId: 2
                                        },
                                        downloadMaxConcurrency: 10,
                                        renderPipeline: "22a135d0-b2ef-4c1b-86d2-5bbbd88e4875",
                                        collisionGroups: [
                                            {
                                                index: 1,
                                                name: "BEE"
                                            },
                                            {
                                                index: 2,
                                                name: "MAIN_OBJECT"
                                            },
                                            {
                                                index: 3,
                                                name: "WORLD_BOUND"
                                            },
                                            {
                                                index: 4,
                                                name: "ROPE"
                                            },
                                            {
                                                index: 5,
                                                name: "BEE_BULLET"
                                            },
                                            {
                                                index: 6,
                                                name: "BIG_BEE"
                                            },
                                            {
                                                index: 7,
                                                name: "PLAYER_LINE"
                                            }
                                        ],
                                        collisionMatrix: {
                                            0: 1,
                                            1: 164,
                                            2: 238,
                                            3: 132,
                                            4: 16,
                                            5: 134,
                                            6: 132,
                                            7: 110
                                        }
                                    }
                                }
                            }).then(function() {
                                return cc.game.run();
                            });
                        }
                    }
                ]), Application;
            }());
        }
    };
});
