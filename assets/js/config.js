"use strict";

 angular.module('config', [])

.constant('ENV', {development:true,apiEndpoint:'http://localhost:3000'})

.constant('ThirdParties', {intercom:{appId:'qgdnsb89'},wufoo:{username:'techvisage',forms:{contact:'z8kv0cc0ktfm9y',pricing:'m1fs4a3q0krw3pa'},host:'wufoo.com'}})

;