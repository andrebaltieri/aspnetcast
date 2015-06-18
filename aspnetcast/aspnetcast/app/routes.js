(function () {
    'use strict';
    angular.module('aspnetcast').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'AgendaController',
                controllerAs: 'vm',
                templateUrl: 'app/views/agenda.html'
            })
			.when('/casters', {
			    controller: 'HomeController',
			    controllerAs: 'vm',
			    templateUrl: 'app/views/casters.html'
			})
			.when('/convidados', {
			    controller: 'GuestController',
			    controllerAs: 'vm',
			    templateUrl: 'app/views/guests.html'
			});
    });
})();