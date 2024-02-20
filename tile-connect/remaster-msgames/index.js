var perf = window.performance || {
    mark: function () {},
    measure: function () {},
}

window.perf = perf

perf.mark('load-start')

System.register(['./application.js'], function (_export, _context) {
    'use strict'

    perf.mark('load-end')
    perf.measure('Engine Loading', 'load-start', 'load-end')

    var Application, canvas, $p, bcr, application

    function topLevelImport(url) {
        return System['import'](url)
    }

    return {
        setters: [
            function (_applicationJs) {
                Application = _applicationJs.Application
            },
        ],
        execute: function () {
            console.warn('Cocos loaded')

            perf.mark('init-start')

            canvas = document.getElementById('GameCanvas')
            $p = canvas.parentElement
            bcr = $p.getBoundingClientRect()
            canvas.width = bcr.width
            canvas.height = bcr.height
            application = new Application()
            topLevelImport('cc')
                .then(function (engine) {
                    return new Promise(function (resolve) {
                        var waitGameCore = setInterval(function () {
                            if (!window.__gameCoreStart) return
                            clearInterval(waitGameCore)

                            console.warn('Cocos application init')

                            if (window.__sdkLoadingCount < 40) {
                                window.__sdkLoadingCount = 40
                            }

                            resolve(application.init(engine))
                        }, 50)
                    })
                })
                .then(function () {
                    perf.mark('init-end')
                    perf.measure('Engine Initialize', 'init-start', 'init-end')

                    perf.mark('run-start')

                    console.warn('Cocos application start')
                    if (window.__sdkLoadingCount < 50) {
                        window.__sdkLoadingCount = 50
                    }

                    const { Analytics } = GameCore.Plugins

                    //? not use analytics.event because Google Analytics is not added
                    gtag('event', Analytics.Events.LOAD_START)

                    return application.start()
                })
                .then(function () {
                    console.warn('Cocos application started')
                    if (window.__sdkLoadingCount < 60) {
                        window.__sdkLoadingCount = 60
                    }

                    perf.mark('run-end')
                    perf.measure('Engine Started', 'run-start', 'run-end')

                    const { Console } = GameCore.Plugins
                    if (!Console) return
                    Console.removeVConsole()
                })
                ['catch'](function (err) {
                    console.error(err)
                })
        },
    }
})
