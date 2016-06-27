/**
 * Created by Gabi on 24-Jun-16.
 */
hrApp.controller('MenuController',['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "DemoMath",
            url: "views/demomath.html"
        }
    ];
}
]);