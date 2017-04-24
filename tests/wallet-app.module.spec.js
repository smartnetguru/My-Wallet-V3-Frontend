const modules = [
  'walletApp.core',

  'walletFilters',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngAnimate',
  'ngFileUpload',

  'ui.select',
  'ngAudio',
  'ngSanitize',
  'ja.qr',
  'pascalprecht.translate',
  'angular-inview',
  'webcam',
  'bcQrReader',

  'shared',

  'bcPhoneNumber',

  'templates-main',
  'oc.lazyLoad'
];

angular.module('walletApp', modules).run(($rootScope, Env) => {
  $rootScope.scheduleRefresh = () => {};
  $rootScope.cancelRefresh = () => {};

  $rootScope.isProduction = true;
  $rootScope.rootURL = 'https://blockchain.info/';

  $rootScope.size = { xs: false, sm: false, md: false, lg: true };
});

beforeEach(module('templates-main'));
