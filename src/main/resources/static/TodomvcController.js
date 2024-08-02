angular.module("app", [])
    .controller("TodomvcCtrl", function ($scope, todomvcStorage) {
        // $scope.todos = todomvcStorage.get()
        todomvcStorage.get(function (err, todos) {
            if (err) return

            $scope.todos = todomvcStorage.todos
        })

        $scope.remove = function (id) {
            if (!id) return
            todomvcStorage.delete(id)
        }

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim()
            if (!todoTitle) return
            todomvcStorage.post(todoTitle)
        }


        $scope.$watch("status", function () {
            if ($scope.status === "completed") {
                $scope.todos = todomvcStorage.todos
                $scope.statusFilter = {completed: true}
            } else if ($scope.status === "active") {
                $scope.statusFilter = {completed: false}
            } else {
                $scope.statusFilter = {}
            }
        })

        $scope.clearCompleted = function () {
            todomvcStorage.deleteCompleted()
        }
    })