(function () {
    'use strict';
    angular.module('aspnetcast').controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        vm.casters =
            [
                {
                    name: 'André Baltieri',
                    title: 'Microsoft MVP - ASP.NET/IIS',
                    image: '../../img/casters/andrebaltieri.png',
                    networks: [
                        { link: 'http://twitter.com/andrebaltieri/', icon: 'fa-twitter' },
                        { link: 'http://facebook.com/andrebaltieri/', icon: 'fa-facebook' },
                        { link: 'http://youtube.com/andrebaltieri/', icon: 'fa-youtube' },
                        { link: 'http://andrebaltieri.net/', icon: 'fa-globe' }
                    ]
                },
                {
                    name: 'Eduardo Pires',
                    title: 'Microsoft MVP - ASP.NET/IIS',
                    image: '../../img/casters/eduardopires.png',
                    networks: [
                        { link: 'http://twitter.com/eduardopires/', icon: 'fa-twitter' },
                        { link: 'http://facebook.com/eduardopires/', icon: 'fa-facebook' },
                        { link: 'http://youtube.com/eduardopires/', icon: 'fa-youtube' },
                        { link: 'http://eduardopires.net/', icon: 'fa-globe' }
                    ]
                },
                {
                    name: 'Rodrigo Kono',
                    title: 'Microsoft MVP - ASP.NET/IIS',
                    image: '../../img/casters/rodrigokono.png',
                    networks: [
                        { link: 'http://twitter.com/rodrigokono/', icon: 'fa-twitter' },
                        { link: 'http://facebook.com/rodrigokono/', icon: 'fa-facebook' },
                        { link: 'http://youtube.com/rodrigokono/', icon: 'fa-youtube' },
                        { link: 'http://rodrigokono.net/', icon: 'fa-globe' }
                    ]
                },
                {
                    name: 'Victor Cavalcante',
                    title: 'Microsoft MVP - ASP.NET/IIS',
                    image: '../../img/casters/victorcavalcante.png',
                    networks: [
                        { link: 'http://twitter.com/victorcavalcante/', icon: 'fa-twitter' },
                        { link: 'http://facebook.com/victorcavalcante/', icon: 'fa-facebook' },
                        { link: 'http://youtube.com/victorcavalcante/', icon: 'fa-youtube' },
                        { link: 'http://victorcavalcante.net/', icon: 'fa-globe' }
                    ]
                },
                {
                    name: 'Yan Justino',
                    title: 'Microsoft Student Partner',
                    image: '../../img/casters/yanjustino.png',
                    networks: [
                        { link: 'http://twitter.com/yanjustino/', icon: 'fa-twitter' },
                        { link: 'http://facebook.com/yanjustino/', icon: 'fa-facebook' },
                        { link: 'http://youtube.com/yanjustino/', icon: 'fa-youtube' },
                        { link: 'http://yanjustino.net/', icon: 'fa-globe' }
                    ]
                }

            ];

        activate();

        function activate() {
        }
    }
})();