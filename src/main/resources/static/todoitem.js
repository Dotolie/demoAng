angular.module("app").directive("todoItem", function () {
    return {
        restrict: "E",
        scope: {
            // 디렉티브 스코프 설정
            todo: "=", // 양방향 바인딩
            remove: "&", // 참고 바인딩. 함수 설정시 사용함
        },
        template:
            '<div class="input-group">' +
            '<span class="input-group-text" >' +
            '<input type="checkbox" aria-label="..." ng-model="todo.completed" ng-click="update(todo)">' +
            "</span>" +
            '<input type="text" class="form-control" aria-label="..."' +
            'ng-model="todo.title" ng-blur="update(todo)">' +
            '<div class="input-group-btn">' +
            '<button class="btn btn-danger" ng-click="remove(todo)">Remove</button>' +
            "</div>" +
            "</div>",
    }
})