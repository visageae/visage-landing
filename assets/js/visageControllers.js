var app = angular.module('visageModule', ['rzModule']);
app.controller('recruiterController', ['$scope','$http',function($scope, $http) {

    $http.get("/assets/json/recruiter-faq.json").success(function (data, status) {
        $scope.faq = data;
    });

}]);

app.controller('homeController', ['$scope','$http',function($scope, $http) {

    $scope.jobs = [];
    $http.get("/assets/json/jobs.json").success(function (data, status) {
        $scope.jobs = data;
        console.log($scope.jobs);
    });

}]);

app.controller('pricingController', ['$scope','$http',function($scope, $http) {

    $http.get("/assets/json/recruiter-faq.json").success(function (data, status) {
        $scope.faq = data;
    });


    var creditsElements =  [{nb: 1, price: 10}, {nb: 2, price: 11}, {nb: 3, price: 12}, {nb: 4, price: 13}, {nb: 5, price: 14}, {nb: 10, price: 15}, {nb:  20, price: 16}, {nb: 50, price: 17}, {nb: 100, price: 18}];
    var subscriptionElements = [];
    for(var i=1; i <= 20; i++ ){
        subscriptionElements.push({nb: i, price: i * 10});
    }

    $scope.getScale = function(elements){ return elements.map(function(element) { return element.nb; });};

    $scope.credit = {price: 0, totalPrice: 0};
    $scope.subscription = {price: 0, priceMonth: 0};

    var createSlider = function(id, elements){
        return {
            options: {
                id: id,
                showTicksValues: true,
                stepsArray: $scope.getScale(elements),
                onChange: function(id, value) {
                    onChangeSlider(id, value);
                }
            }
        }
    };

    var getElement = function(value, elements){
        return elements.find(function(item){
            return item.nb == value;
        });
    };

    var onChangeSlider = function(id, value){
        switch(id) {
            case "credit":
                var element = getElement(value, creditsElements);
                $scope.credit.price = element.price;
                $scope.credit.totalPrice = element.price * 10;
                break;
            case "subscription":
                var element = getElement(value, subscriptionElements);
                $scope.subscription.price = element.price;
                $scope.subscription.priceMonth = element.price * 10;
                break;
        }
    };

    $scope.sliderSubscription = createSlider("subscription", subscriptionElements);
    $scope.sliderCredit = createSlider("credit", creditsElements);



}]);


app.directive("jobCaroussel", function($timeout){
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            jobs: '='
        },
        templateUrl: '/assets/js/templates/jobCaroussel.html'
        ,
        link: function($scope) {
            $timeout(function() {
                $('.carousel').carousel({
                    interval: 3000
                });

                $('.carousel[data-type="multi"] .item').each(function(){
                    var next = $(this).next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));

                    for (var i=0;i<2;i++) {
                        next=next.next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }

                        next.children(':first-child').clone().appendTo($(this));
                    }
                });
            });

        }
    };
});