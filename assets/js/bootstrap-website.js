'use strict';

(function () {
  angular.element(document).ready(function () {
    angular.module('config-module', ['config'])
      .run(function (ENV, $q, ThirdParties) {
        function insertScript(id, url) {
          var deferred = $q.defer();
          var js, fjs = document.getElementsByTagName('script')[0];
          if (document.getElementById(id)) {
            return;
          }
          js = document.createElement('script');
          js.id = id;
          js.onload = function () {
            deferred.resolve();
          };
          js.src = url;
          fjs.parentNode.insertBefore(js, fjs);
          return deferred.promise;
        }
        var scriptsLoaded = $q.all([insertScript('intercom-lib',
            'https://widget.intercom.io/widget/' + ThirdParties.intercom.appId),
          insertScript('wufoo-lib',
            ('https:' == document.location.protocol ? 'https://' : 'http://') +
            'www.wufoo.com/scripts/embed/form.js')
        ]);
        scriptsLoaded.then(function () {
          angular.bootstrap(document.getElementById('visage-website'), ['visageWebsite'], {
            strictDi: !ENV.development
          });
        });
      });
    angular.bootstrap(document.getElementById('config-module'), ['config-module'], {});
  });
})();

