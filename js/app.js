angular.module("demoApp", [
    'ui.router',
    'app.home',
    'app.allList',
    'äpp.semi',
    'app.diodes',
    'app.connectors',
    'app.viewsemi',
    'app.viewdiode',
    'app.viewconnector'
])
    .controller('mainController', [mainController]);

function mainController() {

}

