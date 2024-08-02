angular.module('app')
    .factory('todomvcStorage', function () {

        var storage= {
            todos: [{
                id: 1,
                title: '요가 수행하기',
                completed: false
            }, {
                id: 2,
                title: '어머니 용돈 드리기',
                completed: true
            }],

            get: function () {
                return storage.todos
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