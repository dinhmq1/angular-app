// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
import '../styles/index.styl';
import {appDirective} from './app.directive';
// the angular libs are just common js
// and therefore we can assume they were
// exported using the default keyword in ES2015
// so we can import each module
// with any name we see fit.
// Note that the actual value are just strings except angular itself
// because that's how angular decided to export
// their auxillary modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
// because we exported a named variable
// without using default keyword
// we must import it with the brackets
import {home} from './components/home/home';
import {blog} from './components/blog/blog';
import {common} from './components/common/common';
import {shared} from './shared/shared';
import {blogPost} from './components/blogPost/blogPost';
import {admin} from './components/admin/admin';
import {success} from './components/success/success';
import {failure} from './components/failure/failure';
import {user} from './components/user/user';
import {userDetails} from './components/userDetails/userDetails';


angular.module('app', [
  uiRouter,
  ngAnimate,
  // home is the module, the angular module
  // because that's what we exported in home.js
  // all angular modules have a name
  // property who's value is the name you set the
  // module to be
  home.name,
  blog.name,
  common.name,
  shared.name,
  blogPost.name,
  admin.name,
  success.name,
  failure.name,
  user.name,
  userDetails.name
])
// come back later and fix the right way
.config(function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
})
.directive('app', appDirective);
