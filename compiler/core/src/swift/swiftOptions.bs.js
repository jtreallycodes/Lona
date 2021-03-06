// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';


function frameworkToString(param) {
  if (param) {
    return "appkit";
  } else {
    return "uikit";
  }
}

function optionsToJs(param) {
  return {
          framework: param[/* framework */0]
        };
}

function optionsFromJs(param) {
  return /* record */[/* framework */param.framework];
}

var uIKit = /* UIKit */0;

var appKit = /* AppKit */1;

exports.uIKit = uIKit;
exports.appKit = appKit;
exports.frameworkToString = frameworkToString;
exports.optionsToJs = optionsToJs;
exports.optionsFromJs = optionsFromJs;
/* No side effect */
