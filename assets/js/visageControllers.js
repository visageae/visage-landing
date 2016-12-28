var app = angular.module('visageWebsite', ['rzModule', 'config']);

app.factory('WufooService', function () {return{
        form: {
            contact: {
                el: {},
                options: {},
                wufooForm: null
            },
            pricing: {}
        }
    }
});

app.run(function (ThirdParties, WufooService) {

  function initWufooForms() {
    var contactForm;
    var pricingForm;
    var optionsContactForm = {
      'userName': ThirdParties.wufoo.username,
      'formHash': ThirdParties.wufoo.forms.contact,
      'autoResize': true,
      'async': true,
      'host': ThirdParties.wufoo.host,
      'ssl': true,
      'header': 'hide'
    }, optionsPricingForm = {
      'userName': ThirdParties.wufoo.username,
      'formHash': ThirdParties.wufoo.forms.pricing,
      'autoResize': true,
      'async': true,
      'host': ThirdParties.wufoo.host,
      'ssl': true,
      'header': 'hide'
    },
    pricingFormElement = document.getElementById('wufoo-' + ThirdParties.wufoo.forms.pricing);

    WufooService.form.contact.el = document.getElementById('wufoo-' + ThirdParties.wufoo.forms.contact);

    //contactFormModal = (contactFormElement) ?
      //angular.element(contactFormElement.parentElement.parentElement.parentElement) : null,
    //pricingFormModal = (pricingFormElement) ?
    //  angular.element(pricingFormElement.parentElement.parentElement.parentElement) : null,
    //hiringEmail = angular.element('#hiringEmail');


      WufooService.form.contact.options = angular.copy(optionsContactForm);

    if(pricingFormElement) {
      try {
        pricingForm = new WufooForm();
        pricingForm.initialize(optionsPricingForm);
        pricingForm.display();
      }
      catch (e) {
        console.error(e);
      }
    }

    //if (contactFormModal) {
    //  contactFormModal.on('show.bs.modal', function (event) {
    //    if(contactFormElement) {
    //      try {
    //        contactForm = new WufooForm();
    //        if(hiringEmail.val().length > 0){
    //          optionsContactForm.defaultValues = 'Field7=' + hiringEmail.val();
    //        }
    //        contactForm.initialize(optionsContactForm);
    //        contactForm.display();
    //      }
    //      catch (e) {
    //        console.error(e);
    //      }
    //    }
    //  });
    //}
    //if (pricingFormModal) {
    //  pricingFormModal.on('show.bs.modal', function (event) {
    //  });
    //}
  }

  initWufooForms();

});

app.controller('startHiringController', function ($scope, $timeout, WufooService) {
    var vm = this;
    vm.hiringEmail = '';
    var contactFormElement = WufooService.form.contact.el;
    var contactFormModal = (contactFormElement) ?
        angular.element(contactFormElement.parentElement.parentElement.parentElement) : null;

    if (contactFormModal) {
        contactFormModal.on('show.bs.modal', function (event) {
            $timeout(function () {
                if (contactFormElement) {
                    try {
                        console.log('1')
                        WufooService.form.contact.wufooForm = new WufooForm();
                        console.log('2')
                        //if (vm.hiringEmail) {
                        console.log('3')
                        //WufooService.form.contact.options.defaultValues = 'Field7=' + vm.hiringEmail;
                        console.log('4')
                        //}
                        console.log('5')
                        WufooService.form.contact.wufooForm.initialize(WufooService.form.contact.options);
                        console.log('6')
                        WufooService.form.contact.wufooForm.display();
                        console.log('7')
                    }
                    catch (e) {
                        console.log('8')
                        console.error(e);
                    }
                }
            })

        });
    }

    vm.showContactForm = function () {
        //if ($scope.hiringEmailForm.$valid) {
        angular.element('#myModal').modal();
        //}
    }

});

app.controller('recruiterController', function ($scope, $http) {

  $http.get("/assets/json/recruiter-faq.json").success(function (data, status) {
    $scope.faq = data;
  });

});

app.controller('homeController', function ($scope, $http, ENV) {

  $scope.jobs = [];
  $http.get(ENV.apiEndpoint + "/public-job-offers/active").success(function (data, status) {
    $scope.jobs = data;
  });

});

app.controller('careerController', function ($scope, $http) {

  $scope.jobs = [];
  $http.get("/assets/json/jobs.json").success(function (data, status) {
    $scope.jobs = data;
  });

});

app.controller('pricingController', function ($scope, $http) {

  $http.get("/assets/json/pricing-faq.json").success(function (data, status) {
    $scope.faq = data;
  });

  var creditsElements = [
    {
    nb: 1,
    price: 10
   },
    {
      nb: 2,
      price: 11
    },
    {
      nb: 3,
      price: 12
    },
    {
      nb: 4,
      price: 13
    },
    {
      nb: 5,
      price: 14
    },
    {
      nb: 10,
      price: 15
    },
    {
      nb: 20,
      price: 16
    },
    {
      nb: 50,
      price: 17
    },
    {
      nb: 100,
      price: 18
    }];
  var subscriptionElements = [];
  for (var i = 1; i <= 20; i++) {
    subscriptionElements.push({nb: i, price: i * 10});
  }

  $scope.getScale = function (elements) {
    return elements.map(function (element) {
      return element.nb;
    });
  };

  $scope.credit = {price: 0, totalPrice: 0};
  $scope.subscription = {price: 0, priceMonth: 0};

  var createSlider = function (id, elements) {
    return {
      options: {
        id: id,
        showTicksValues: true,
        stepsArray: $scope.getScale(elements),
        onChange: function (id, value) {
          onChangeSlider(id, value);
        }
      }
    }
  };

  var getElement = function (value, elements) {
    return elements.find(function (item) {
      return item.nb == value;
    });
  };

  var onChangeSlider = function (id, value) {
    switch (id) {
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

});

app.directive("jobCaroussel", function ($timeout, $window, $compile) {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    scope: {
      jobs: '='
    },
    templateUrl: '/assets/templates/jobCaroussel.html'
    ,
    link: function (scope) {
      scope.$watch('jobs', function (newValue) {
        if (newValue && newValue.length > 0) {
          $timeout(function () {
            var carouselElem = $('.carousel');
            carouselElem.carousel({
              interval: 3000
            });

            $('.carousel[data-type="multi"] .item').each(function () {
              var next = $(this).next();
              if (!next.length) {
                next = $(this).siblings(':first');
              }
              next.children(':first-child').clone().appendTo($(this));

              for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                  next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
              }
            });
            $compile(carouselElem.find('.job'))(scope);
          });
        }
      });

    }
  };
});