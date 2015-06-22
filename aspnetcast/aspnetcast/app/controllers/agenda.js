(function () {
    'use strict';
    angular.module('aspnetcast').controller('AgendaController', AgendaController);

    AgendaController.$inject = ['$http'];

    function AgendaController($http) {
        var vm = this;
        vm.casts = [];

        activate();

        function activate() {
            getAgenda();
        }

        function getAgenda() {
            $http.get('https://aspnet-cast.firebaseio.com/casts.json')
                .success(function (data) {
                    vm.casts = data;
                });
        }
    }
})();