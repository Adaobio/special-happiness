/**
 * special-happiness utility library
 *
 * Exports all utility modules for convenient access.
 */

const stringUtils = require('./stringUtils');
const arrayUtils = require('./arrayUtils');
const mathUtils = require('./mathUtils');
const validationUtils = require('./validationUtils');

module.exports = {
  ...stringUtils,
  ...arrayUtils,
  ...mathUtils,
  ...validationUtils,
};
