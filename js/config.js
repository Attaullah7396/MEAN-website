angular.module("demoApp")
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
                url: "/home",
                templateUrl: "./components/home/home.html",
                controller: "HomeController as home"
            }
        );
        $urlRouterProvider.otherwise('/home')

    });
