angular.module('app')
    .factory('todomvcStorage', function ($http) {

        var storage= {
            todos: [],

            get: function ( callback ) {
                $http
                    .get("/api/todos")
                    .then(
                        function success(response) {
                            console.log(response.data)
                            storage.todos.push(response.data)
                            callback(null, angular.copy( response.data, storage.todos|Array ))
                        },
                        function error(err) {
                            console.error(err)
                            callback(err)
                        }
                    )
            },

            post: function (todoTitle) {
                var newId = !storage.todos.length
                    ? 1
                    : storage.todos[storage.todos.length - 1].id + 1
                var newTodo = {
                    id: newId,
                    title: todoTitle,
                    completed: false,
                }
                storage.todos.push(newTodo)
            },

            delete: function (id) {
                var deleltedTodoIdx = storage.todos.findIndex(function (todo) {
                    return todo.id === id
                })
                if (deleltedTodoIdx === -1) return
                storage.todos.splice(deleltedTodoIdx, 1)
            },

            deleteCompleted: function () {
                var incompleteTodos = storage.todos.filter(function (todo) {
                    return !todo.completed
                })
                angular.copy(incompleteTodos, storage.todos)
            },
        }

        return storage;

    })