angular.module("demoApp")
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                    url: "/",
                    templateUrl: "./components/home/home.html",
                    controller: "HomeController as home"
                }
            )
            .state('allList', {
                    url: "/allProducts",
                    templateUrl: "./components/all/all.html",
                    controller: "AllController as allProduct"
                }
            )
            .state('semi', {
                    url: "/semi",
                    templateUrl: "./components/semi/semi.html",
                    controller: "SemiController as semi"
                }
            )
            .state('diodes', {
                    url: "/diodes",
                    templateUrl: "./components/diodes/diodes.html",
                    controller: "DiodeController as diode"
                }
            )
            .state('connectors', {
                    url: "/connectors",
                    templateUrl: "./components/connectors/connectors.html",
                    controller: "ConnectorController as connector"
                }
            );

        $urlRouterProvider.otherwise('/')

    });
