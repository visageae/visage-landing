"use strict";

 angular.module('config', [])

.constant('ENV', {production:true,apiEndpoint:'{{PROD_VISAGE_API_ENDPOINT}}'})

.constant('ThirdParties', {intercom:{appId:'{{PROD_INTERCOM_APP_ID}}'},wufoo:{username:'techvisage',forms:{contact:'z8kv0cc0ktfm9y',pricing:'m1fs4a3q0krw3pa'},host:'wufoo.com'}})

;