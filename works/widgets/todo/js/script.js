

(function () {

    'use strict';
    var todoApp = angular.module('todo', []);

    todoApp.directive('todoList', function () {
        return {
            restrict: 'E',
            templateUrl: 'todo.html',
            controller: function ($scope) {
                $scope.base = [
                    {
                        'todoText': 'JavaScript'
            },
                    {
                        'todoText': 'PHP'
            },
                    {
                        'todoText': 'HTML'
            },
                    {
                        'todoText': 'CSS'
            },
                    {
                        'todoText': 'jQuery'
            },
                    {
                        'todoText': 'Angular'
            },
                    {
                        'todoText': 'Ajax'
            },
                    {
                        'todoText': 'node.js'
            },
                    {
                        'todoText': 'C#'
            },
                    {
                        'todoText': '.NET'
            },
        ];
                $scope.newToDo = '';
                $scope.addToDo = function () {
                    $scope.base.push({
                        'todoText': $scope.newToDo
                    });
                    $scope.newToDo = '';
                };
                $scope.removeToDo = function (todoBase) {
                    $scope.base.splice($scope.base.indexOf(todoBase), 1);
                };
            },
            controllerAs: 'newToDo'
        };
    });
})();