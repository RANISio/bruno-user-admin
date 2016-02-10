'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('owner', {
        url: '/register/owner',
        templateUrl: 'app/account/register/owner/owner.html',
        controller: 'OwnerCtrl'
      });
  });
