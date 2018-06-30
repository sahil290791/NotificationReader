/**
 * @providesModule NotificationReader
 * @flow
 */
'use strict';

var NativeNotificationReader = require('NativeModules').NotificationReader;

/**
 * High-level docs for the NotificationReader iOS API can be written here.
 */

var NotificationReader = {
  test: function() {
    NativeNotificationReader.test();
  }
};

module.exports = NotificationReader;
