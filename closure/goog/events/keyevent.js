/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview This file contains a class for working with keyboard events
 */

goog.provide('goog.events.KeyEvent');

goog.require('goog.events.BrowserEvent');

/**
 * This class is used for the goog.events.KeyEvent.EventType.KEY event and
 * it overrides the key code with the fixed key code.
 * @param {number} keyCode The adjusted key code.
 * @param {number} charCode The unicode character code.
 * @param {boolean} repeat Whether this event was generated by keyboard repeat.
 * @param {Event} browserEvent Browser event object.
 * @constructor
 * @extends {goog.events.BrowserEvent}
 * @final
 */
goog.events.KeyEvent = function(keyCode, charCode, repeat, browserEvent) {
  'use strict';
  goog.events.BrowserEvent.call(this, browserEvent);
  this.type = goog.events.KeyEvent.EventType.KEY;

  /**
   * Keycode of key press.
   * @type {number}
   */
  this.keyCode = keyCode;

  /**
   * Unicode character code.
   * @type {number}
   */
  this.charCode = charCode;

  /**
   * True if this event was generated by keyboard auto-repeat (i.e., the user is
   * holding the key down.)
   * @type {boolean}
   */
  this.repeat = repeat;
};
goog.inherits(goog.events.KeyEvent, goog.events.BrowserEvent);

/**
 * Enum type for the events fired by the key handler
 * @enum {string}
 */
goog.events.KeyEvent.EventType = {
  KEY: 'key'
};
