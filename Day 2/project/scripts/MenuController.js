/**
 * Created by Gabi on 24-Jun-16.
 */
hrApp.controller('MenuController',['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "List Employees",
            url: "#"
        },
        {
            label: "Statistics",
            url: "#"
        }
    ];
}
]);